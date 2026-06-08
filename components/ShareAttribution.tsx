'use client'

import { useEffect } from 'react'
import { logAttribution } from '@/lib/logAttribution'

/**
 * Fires deferred-attribution for a short-link page (/i/<code>). The code page
 * resolves the inviter + activity server-side and passes them down, since the
 * short URL carries no `?inviter=` query param for AttributionLogger to read.
 */
export default function ShareAttribution({
  inviterId,
  activityId,
}: {
  inviterId: string
  activityId?: string
}) {
  useEffect(() => {
    logAttribution({ inviterId, activityId })
  }, [inviterId, activityId])

  return null
}
