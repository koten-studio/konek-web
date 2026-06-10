import { ImageResponse } from 'next/og'
import { readFile } from 'fs/promises'
import { join } from 'path'
import sharp from 'sharp'

// Shared Open Graph preview-card renderer for a shared activity. Used by both
// the canonical activity route (app/activity/[id]/opengraph-image.tsx) and the
// short-link route (app/i/[code]/opengraph-image.tsx) so the generated card
// stays identical regardless of which URL was shared.

export const OG_SIZE = { width: 1200, height: 630 }
export const OG_CONTENT_TYPE = 'image/png'
export const OG_ALT = 'Activity on Konek'

// Brand palette (konek-web app/globals.css)
const GREEN = '#6DD58C'
const PAPER = '#FBF7EC'
const CREAM = '#F5EFE0'
const INK = '#0E1410'

const FONT_DIR = join(process.cwd(), 'assets', 'fonts')

export interface ActivityCardData {
  title?: string
  description?: string
  location?: string
  poi_name?: string
  address_full?: string
  start_time?: string
  banner_url?: string
  banner_image_url?: string
}

async function loadFonts() {
  const [regular, medium, bold] = await Promise.all([
    readFile(join(FONT_DIR, 'Inter-Regular.ttf')),
    readFile(join(FONT_DIR, 'Inter-Medium.ttf')),
    readFile(join(FONT_DIR, 'Inter-Bold.ttf')),
  ])
  return [
    { name: 'Inter', data: regular, weight: 400 as const, style: 'normal' as const },
    { name: 'Inter', data: medium, weight: 500 as const, style: 'normal' as const },
    { name: 'Inter', data: bold, weight: 700 as const, style: 'normal' as const },
  ]
}

// Fetch the banner and transcode to JPEG. Banners are stored as WebP or JPEG
// (activity-banner-options bucket); satori/resvg cannot decode WebP, so we run
// every banner through sharp to normalize the format and downscale to the card
// width. A missing/unreachable URL (e.g. a non-public object) or a decode
// failure falls back to the gradient instead of throwing.
async function loadBanner(url?: string): Promise<string | null> {
  if (!url) return null
  try {
    const res = await fetch(url)
    if (!res.ok) return null
    const input = Buffer.from(await res.arrayBuffer())
    // Resize to the exact card size (full-bleed); avoids rasterizing a larger
    // image than the 1200x630 we display, which speeds up the satori render.
    const jpeg = await sharp(input)
      .resize(1200, 630, { fit: 'cover', position: 'centre' })
      .jpeg({ quality: 82 })
      .toBuffer()
    return `data:image/jpeg;base64,${jpeg.toString('base64')}`
  } catch {
    return null
  }
}

function formatDateBadge(startTime?: string): string | null {
  if (!startTime) return null
  const date = new Date(startTime)
  if (isNaN(date.getTime())) return null
  // Server runs in UTC; pin to the product's timezone so the time is correct.
  const day = new Intl.DateTimeFormat('en-GB', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    timeZone: 'Europe/Brussels',
  }).format(date)
  const time = new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'Europe/Brussels',
  }).format(date)
  return `${day} · ${time}`
}

// Bright green so the pin reads against the dark bottom scrim of the banner.
const PinIcon = (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"
      fill={GREEN}
    />
  </svg>
)

const cacheHeaders = {
  // ImageResponse defaults to immutable max-age=1y; allow refresh so editing
  // an activity eventually updates the card.
  'cache-control': 'public, max-age=3600, stale-while-revalidate=86400',
}

/**
 * Render the shared activity OG card. Pass null (unknown activity / unresolved
 * code) to get the branded fallback image. Always resolves to an ImageResponse.
 */
export async function renderActivityCard(activity: ActivityCardData | null): Promise<ImageResponse> {
  const fonts = await loadFonts()

  if (!activity) {
    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: PAPER,
            color: INK,
            fontSize: 64,
            fontWeight: 700,
            fontFamily: 'Inter',
          }}
        >
          Konek
        </div>
      ),
      { ...OG_SIZE, fonts, headers: cacheHeaders },
    )
  }

  const banner = await loadBanner(activity.banner_url || activity.banner_image_url)
  const dateBadge = formatDateBadge(activity.start_time)
  const locationText = activity.poi_name || activity.location || activity.address_full || null

  // Full-bleed banner. Title and description are intentionally omitted: the
  // unfurling platform (WhatsApp/Messenger/etc.) already renders og:title and
  // og:description below the image, so repeating them here is redundant. Only
  // the date badge and location are overlaid on the banner.
  return new ImageResponse(
    (
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
          fontFamily: 'Inter',
        }}
      >
        {banner ? (
          <img
            src={banner}
            width={1200}
            height={630}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <div
            style={{
              display: 'flex',
              width: '100%',
              height: '100%',
              background: `linear-gradient(135deg, ${CREAM} 0%, ${GREEN} 100%)`,
            }}
          />
        )}

        {/* Bottom scrim so the location stays legible over any banner */}
        {locationText && (
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: 200,
              display: 'flex',
              background: 'linear-gradient(to top, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0) 100%)',
            }}
          />
        )}

        {dateBadge && (
          <div
            style={{
              position: 'absolute',
              top: 28,
              left: 28,
              display: 'flex',
              alignItems: 'center',
              background: GREEN,
              color: INK,
              fontSize: 32,
              fontWeight: 700,
              padding: '14px 28px',
              borderRadius: 999,
              boxShadow: '0 6px 18px rgba(0,0,0,0.25)',
            }}
          >
            {dateBadge}
          </div>
        )}

        {locationText && (
          <div
            style={{
              position: 'absolute',
              bottom: 36,
              left: 40,
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              maxWidth: 1120,
            }}
          >
            {PinIcon}
            <div
              style={{
                display: 'flex',
                fontSize: 36,
                fontWeight: 700,
                color: '#FFFFFF',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {locationText}
            </div>
          </div>
        )}
      </div>
    ),
    { ...OG_SIZE, fonts, headers: cacheHeaders },
  )
}
