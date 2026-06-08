import { supabase } from '@/lib/supabase'

/**
 * Shared activity fetch used by the activity page, its metadata, and the
 * generated Open Graph image route. Single source for the select so the
 * three consumers stay in sync. Returns null when the activity is missing.
 */
export async function getActivity(id: string) {
  // Reads through the get_shared_activity SECURITY DEFINER RPC: anon-safe
  // public fields only (no precise geo), with the confirmed participant count
  // already folded in. Returns null when the activity does not exist.
  const { data, error } = await supabase.rpc('get_shared_activity', { p_id: id })

  if (error || !data) {
    return null
  }

  return data
}
