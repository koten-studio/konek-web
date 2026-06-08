import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import ProfilePreview from '@/components/ProfilePreview'

interface PageProps {
  params: Promise<{ id: string }>
}

async function getProfile(id: string) {
  // Reads through the get_public_profile SECURITY DEFINER RPC: safe public
  // columns only (never birthdate / latitude / longitude / altitude /
  // location_accuracy) plus public activities. Returns null when missing.
  const { data, error } = await supabase.rpc('get_public_profile', { p_id: id })

  if (error || !data) {
    return null
  }

  return data
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const profile = await getProfile(id)
  
  if (!profile) {
    return {
      title: 'Profile Not Found - Konek',
    }
  }

  const fullName = `${profile.first_name} ${profile.last_name || ''}`.trim()
  const title = `${fullName} - Konek`
  const description = profile.bio || `Connect with ${fullName} on Konek`
  const imageUrl = profile.avatar_url || '/og-image.png'

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://konek.social/profile/${id}`,
      images: [imageUrl],
      type: 'profile',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  }
}

export default async function ProfilePage({ params }: PageProps) {
  const { id } = await params
  const profile = await getProfile(id)

  if (!profile) {
    notFound()
  }

  return <ProfilePreview profile={profile} />
}