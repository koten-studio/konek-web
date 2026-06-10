import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import TeamPreview from '@/components/TeamPreview'
import PreviewShell from '@/components/PreviewShell'

interface PageProps {
  params: Promise<{ id: string }>
}

async function getTeam(id: string) {
  // Reads through the get_public_team SECURITY DEFINER RPC: group meta plus the
  // member list for non-private groups only. Returns null when missing.
  const { data: team, error } = await supabase.rpc('get_public_team', { p_id: id })

  if (error || !team) {
    return null
  }

  return team
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const team = await getTeam(id)
  
  if (!team) {
    return {
      title: 'Team Not Found - Konek',
    }
  }

  const title = `${team.name} - Konek`
  const description = team.description || `Join ${team.name} on Konek`
  const imageUrl = team.logo_url || '/og-image.png'

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://konek.social/team/${id}`,
      images: [imageUrl],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  }
}

export default async function TeamPage({ params }: PageProps) {
  const { id } = await params
  const team = await getTeam(id)

  if (!team) {
    notFound()
  }

  return (
    <PreviewShell>
      <TeamPreview team={team} />
    </PreviewShell>
  )
}