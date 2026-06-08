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
const GREEN_700 = '#2E8B57'
const PAPER = '#FBF7EC'
const CREAM = '#F5EFE0'
const INK = '#0E1410'
const INK_SOFT = '#4B5448'

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
    const jpeg = await sharp(input)
      .resize(1200, 744, { fit: 'cover', position: 'centre' })
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

// Hard guard for the 2-line description: satori's WebkitLineClamp handles the
// cosmetic clamp, but a single long unbroken token can still overflow, so we
// also cap the character budget.
function truncate(text: string, max: number): string {
  const clean = text.replace(/\s+/g, ' ').trim()
  if (clean.length <= max) return clean
  return clean.slice(0, max - 1).trimEnd() + '…'
}

const PinIcon = (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"
      fill={GREEN_700}
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
  const title = truncate(activity.title || 'Activity', 70)
  const description = activity.description ? truncate(activity.description, 130) : null
  const locationText = activity.poi_name || activity.location || activity.address_full || null

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: PAPER,
          fontFamily: 'Inter',
        }}
      >
        {/* Cover zone with date overlay badge */}
        <div
          style={{
            display: 'flex',
            position: 'relative',
            width: '100%',
            height: 372,
          }}
        >
          {banner ? (
            <img
              src={banner}
              width={1200}
              height={372}
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
                fontSize: 30,
                fontWeight: 700,
                padding: '12px 24px',
                borderRadius: 999,
                boxShadow: '0 6px 18px rgba(0,0,0,0.25)',
              }}
            >
              {dateBadge}
            </div>
          )}
        </div>

        {/* Content panel */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            padding: '34px 56px',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: 54,
              fontWeight: 700,
              color: INK,
              lineHeight: 1.1,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {title}
          </div>

          {description && (
            <div
              style={{
                display: '-webkit-box',
                marginTop: 16,
                fontSize: 30,
                fontWeight: 400,
                color: INK_SOFT,
                lineHeight: 1.35,
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {description}
            </div>
          )}

          {locationText && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: 20,
                gap: 10,
              }}
            >
              {PinIcon}
              <div
                style={{
                  display: 'flex',
                  fontSize: 28,
                  fontWeight: 500,
                  color: GREEN_700,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  maxWidth: 1020,
                }}
              >
                {locationText}
              </div>
            </div>
          )}
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts, headers: cacheHeaders },
  )
}
