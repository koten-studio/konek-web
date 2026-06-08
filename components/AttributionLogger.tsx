'use client'

import { useEffect } from 'react'
import { logAttribution } from '@/lib/logAttribution'

/**
 * Posts a deferred-deep-link attribution record the moment a konek.social page
 * loads with `?inviter=<uuid>` in the URL. The mobile app's match-attribution
 * Edge Function later looks up the record by (client_ip, user_agent) and
 * surfaces the inviter on the post-onboarding home card.
 *
 * Mounted once globally from app/layout.tsx so it fires on every page that
 * carries the query param (activity preview, profile, root invite, etc).
 * Short-link pages (/i/<code>) carry no query param; they fire attribution via
 * ShareAttribution with ids resolved from the code instead.
 */

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

function extractActivityId(pathname: string): string | undefined {
  const m = pathname.match(/\/activity\/([0-9a-f-]{36})/i)
  return m && UUID_RE.test(m[1]) ? m[1] : undefined
}

export default function AttributionLogger() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const inviterId = params.get('inviter')
    if (!inviterId || !UUID_RE.test(inviterId)) return

    logAttribution({
      inviterId,
      activityId: extractActivityId(window.location.pathname),
    })
  }, [])

  return null
}
