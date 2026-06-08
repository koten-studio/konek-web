import { supabase } from '@/lib/supabase'

// Server-only short-link resolution. lib/supabase uses the service-role key
// (no NEXT_PUBLIC prefix), so this module only works server-side and must never
// be imported into a client component.

const CODE_RE = /^[A-Za-z0-9_-]{1,16}$/

export interface ResolvedShareLink {
  kind: 'activity' | 'invite'
  activityId: string | null
  inviterId: string
}

/**
 * Resolve a share code to its activity + inviter. Returns null for an unknown
 * or malformed code. Validates the code charset before hitting the DB so junk
 * paths never reach Postgres.
 */
export async function resolveShareCode(code: string): Promise<ResolvedShareLink | null> {
  if (!CODE_RE.test(code)) return null

  const { data, error } = await supabase.rpc('resolve_share_link', { p_code: code })
  if (error || !data || data.length === 0) return null

  const row = data[0] as { kind: 'activity' | 'invite'; activity_id: string | null; inviter_id: string }
  return {
    kind: row.kind,
    activityId: row.activity_id,
    inviterId: row.inviter_id,
  }
}
