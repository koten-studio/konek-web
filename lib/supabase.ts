import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Anon key only: RLS applies. Public preview pages read through SECURITY
// DEFINER RPCs (get_shared_activity / get_public_profile / get_public_team /
// resolve_share_link) that expose only safe public fields. The service-role
// key must never be used here — it bypasses RLS and would leak private data
// (e.g. birthdate, GPS coordinates) into server-rendered pages.
export const supabase = createClient(supabaseUrl, supabaseAnonKey)