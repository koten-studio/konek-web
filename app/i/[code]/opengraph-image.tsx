import { getActivity } from '@/lib/activity'
import { resolveShareCode } from '@/lib/shareLink'
import { renderActivityCard, OG_SIZE, OG_CONTENT_TYPE, OG_ALT } from '@/lib/og/activityCard'

// OG card for a short share link. Resolves the code to its activity and renders
// the same card as the canonical activity route.

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = OG_ALT

export default async function Image({ params }: { params: { code: string } }) {
  const { code } = params
  const link = await resolveShareCode(code)
  const activity = link?.activityId ? await getActivity(link.activityId) : null
  return renderActivityCard(activity)
}
