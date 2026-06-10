'use client'

import styles from './ActivityPreview.module.css'
import DeepLinkButton from './DeepLinkButton'

interface Profile {
  id: string
  first_name: string
  last_name?: string
  bio?: string
  avatar_url?: string
  banner_url?: string
  city?: string
  country?: string
  activities_created?: Array<{
    id: string
    title: string
  }>
}

interface Props {
  profile: Profile
}

export default function ProfilePreview({ profile }: Props) {
  const fullName = `${profile.first_name} ${profile.last_name || ''}`.trim()
  const location = [profile.city, profile.country].filter(Boolean).join(', ')
  const activities = profile.activities_created || []
  const activitiesCount = activities.length

  return (
    <div className={styles.card}>
      {profile.banner_url && (
        <div className={styles.bannerContainer}>
          <img src={profile.banner_url} alt={fullName} className={styles.banner} />
        </div>
      )}

      <div className={styles.content}>
        <div className={`${styles.centerLogo} ${styles.centerLogoRound}`}>
          {profile.avatar_url ? (
            <img src={profile.avatar_url} alt={fullName} className={styles.logoImage} />
          ) : (
            <div className={styles.logoFallback}>
              {profile.first_name.charAt(0).toUpperCase()}
            </div>
          )}
        </div>

        <h1 className={styles.title} style={{ textAlign: 'center' }}>{fullName}</h1>

        {location && (
          <div className={styles.subtleRow}>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{location}</span>
          </div>
        )}

        {profile.bio && (
          <div className={styles.block} style={{ marginTop: '1.25rem' }}>
            <p className={styles.sectionLabel}>About</p>
            <p className={styles.bio}>{profile.bio}</p>
          </div>
        )}

        <div className={styles.statBlock}>
          <span className={styles.statNum}>{activitiesCount}</span>
          <span className={styles.statLabel}>
            {activitiesCount === 1 ? 'Activity organized' : 'Activities organized'}
          </span>
        </div>

        {activitiesCount > 0 && (
          <div className={styles.block}>
            <p className={styles.sectionLabel}>Recent activities</p>
            <div className={styles.activityList}>
              {activities.slice(0, 5).map((activity) => (
                <div key={activity.id} className={styles.activityItem}>
                  {activity.title}
                </div>
              ))}
              {activitiesCount > 5 && (
                <p className={styles.activityMore}>
                  And {activitiesCount - 5} more {activitiesCount - 5 === 1 ? 'activity' : 'activities'}...
                </p>
              )}
            </div>
          </div>
        )}

        <div className={styles.actionButton}>
          <DeepLinkButton type="profile" id={profile.id} title={fullName} />
        </div>
      </div>
    </div>
  )
}
