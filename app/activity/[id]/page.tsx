import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getActivity } from '@/lib/activity'
import ActivityPreview from '@/components/ActivityPreview'
import PreviewShell from '@/components/PreviewShell'

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const activity = await getActivity(id)
  
  if (!activity) {
    return {
      title: 'Activity Not Found - Konek',
    }
  }

  const title = `${activity.title} - Konek`
  const description = activity.description || `Join ${activity.title} on Konek`
  const ogCardUrl: string | undefined = activity.og_card_url || undefined

  // og:image strategy:
  // - If a pre-rendered static card exists (og_card_url), point og:image at it
  //   directly so crawlers fetch a static JPEG instantly (no on-the-fly render).
  // - Otherwise OMIT images entirely so Next falls back to the colocated
  //   opengraph-image route (dynamic render). Setting `images: undefined` is NOT
  //   equivalent: Next only injects the file-based image when openGraph has no
  //   own `images` key (hasOwnProperty), so an explicit undefined would suppress
  //   the fallback and yield no image at all.
  const ogImages = ogCardUrl
    ? { images: [{ url: ogCardUrl, width: 1200, height: 630, alt: title }] }
    : {}
  const twitterImages = ogCardUrl ? { images: [ogCardUrl] } : {}

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://konek.social/activity/${id}`,
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

export default async function ActivityPage({ params }: PageProps) {
  const { id } = await params
  const activity = await getActivity(id)

  if (!activity) {
    notFound()
  }

  return (
    <PreviewShell>
      <ActivityPreview activity={activity} />
    </PreviewShell>
  )
}