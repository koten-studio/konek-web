import { getActivity } from '@/lib/activity'
import { renderActivityCard, OG_SIZE, OG_CONTENT_TYPE, OG_ALT } from '@/lib/og/activityCard'

// Generated Open Graph preview card for a shared activity. The rendering lives
// in lib/og/activityCard so the short-link route (app/i/[code]) renders the
// exact same card.

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = OG_ALT

export default async function Image({ params }: { params: { id: string } }) {
  const { id } = params
  return renderActivityCard(await getActivity(id))
}
