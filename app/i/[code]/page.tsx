import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getActivity } from '@/lib/activity'
import { resolveShareCode } from '@/lib/shareLink'
import ActivityPreview from '@/components/ActivityPreview'
import ShareAttribution from '@/components/ShareAttribution'
import PreviewShell from '@/components/PreviewShell'

// Short share-link landing. Resolves the opaque code to (activity, inviter)
// and renders the activity preview in place — the short URL stays in the bar
// and the colocated opengraph-image emits the unfurl card, so we never depend
// on crawlers following a redirect. force-dynamic: codes resolve live and must
// not be cached (a deleted activity should 404, not serve a stale page).

export const dynamic = 'force-dynamic'

interface PageProps {
  params: Promise<{ code: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { code } = await params
  const link = await resolveShareCode(code)
  if (!link?.activityId) {
    return { title: 'Konek' }
  }

  const activity = await getActivity(link.activityId)
  if (!activity) {
    return { title: 'Konek' }
  }

  const title = `${activity.title} - Konek`
  const description = activity.description || `Join ${activity.title} on Konek`
  // og:url points at the short link so platforms that canonicalize to og:url
  // keep the inviter (encoded in the code) intact.
  const shortUrl = `https://konek.social/i/${code}`
  const ogCardUrl: string | undefined = activity.og_card_url || undefined

  // Prefer the pre-rendered static card (og_card_url) for an instant unfurl.
  // When absent, OMIT images so Next falls back to the colocated
  // opengraph-image route. `images: undefined` would suppress that fallback
  // (Next checks hasOwnProperty('images')), so we spread conditionally.
  // secureUrl + type help WhatsApp (a separate crawler) and other unfurlers
  // that are picky about og:image:secure_url / og:image:type. The static card
  // is always a JPEG in the public og-cards bucket.
  const ogImages = ogCardUrl
    ? { images: [{ url: ogCardUrl, secureUrl: ogCardUrl, type: 'image/jpeg', width: 1200, height: 630, alt: title }] }
    : {}
  const twitterImages = ogCardUrl ? { images: [ogCardUrl] } : {}

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: shortUrl,
      type: 'website',
      ...ogImages,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      ...twitterImages,
    },
  }
}

export default async function ShareCodePage({ params }: PageProps) {
  const { code } = await params
  const link = await resolveShareCode(code)
  if (!link?.activityId) {
    notFound()
  }

  const activity = await getActivity(link.activityId)
  if (!activity) {
    notFound()
  }

  return (
    <PreviewShell>
      <ShareAttribution inviterId={link.inviterId} activityId={link.activityId} />
      <ActivityPreview activity={activity} />
    </PreviewShell>
  )
}
