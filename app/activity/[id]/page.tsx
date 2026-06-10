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

  // og:image / twitter:image are injected by the colocated opengraph-image
  // route (generated preview card). We only set the text fields here; Next's
  // resolver copies the generated openGraph image into twitter when twitter
  // has no explicit image.
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://konek.social/activity/${id}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
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