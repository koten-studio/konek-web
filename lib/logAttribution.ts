// Best-effort deferred-attribution logger. Posts (inviter_id, activity_id,
// host_id) to the log-attribution Edge Function, which records it against the
// visitor's IP+UA so a fresh app install can recover the inviter. Shared by
// AttributionLogger (reads ids from the URL) and ShareAttribution (gets ids
// resolved from a short code). Fails silently — attribution never blocks the
// user.

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

export interface AttributionInput {
  inviterId: string
  activityId?: string
  hostId?: string
}

export function logAttribution({ inviterId, activityId, hostId }: AttributionInput): void {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!supabaseUrl || !anonKey) return
  if (!inviterId || !UUID_RE.test(inviterId)) return

  fetch(`${supabaseUrl}/functions/v1/log-attribution`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      apikey: anonKey,
      Authorization: `Bearer ${anonKey}`,
    },
    body: JSON.stringify({
      inviter_id: inviterId,
      activity_id: activityId && UUID_RE.test(activityId) ? activityId : undefined,
      host_id: hostId && UUID_RE.test(hostId) ? hostId : undefined,
    }),
    keepalive: true,
  }).catch(() => {
    // Swallow: never block the user flow for an attribution.
  })
}
