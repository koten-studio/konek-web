import { NextRequest } from 'next/server'
import sharp from 'sharp'
import { getActivity } from '@/lib/activity'
import { renderActivityCard } from '@/lib/og/activityCard'

// Renders the activity OG card and returns it as a JPEG. This route is the
// single rendering endpoint consumed by the render-og-card Edge Function, which
// fetches the bytes and stores them in the og-cards bucket (service-role) so the
// unfurl image is served statically and instantly at crawl time.
//
// Anon / read-only: reads public fields through getActivity (get_shared_activity
// SECURITY DEFINER RPC). No service-role here — konek-web stays anon-only.
//
// JPEG, not PNG/WebP: next/og only emits PNG, so we transcode with sharp. JPEG
// is universally supported by crawlers (WhatsApp/Messenger/iMessage/Telegram)
// and far lighter than PNG for a photo-dominant card; WebP is unreliable on
// Messenger and is avoided on purpose.

// sharp is native; force the Node.js runtime (not edge).
export const runtime = 'nodejs'

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  const activity = await getActivity(id)
  // renderActivityCard(null) still returns the branded fallback image, so this
  // never throws on an unknown id.
  const card = await renderActivityCard(activity)
  const png = Buffer.from(await card.arrayBuffer())

  const jpeg = await sharp(png).jpeg({ quality: 82, mozjpeg: true }).toBuffer()

  return new Response(new Uint8Array(jpeg), {
    headers: {
      'content-type': 'image/jpeg',
      // The Edge Function stores a versioned object, so this response can be
      // cached briefly; the stored URL changes when the activity changes.
      'cache-control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  })
}
