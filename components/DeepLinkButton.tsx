'use client'

import { useState } from 'react'

interface Props {
  type: 'activity' | 'team' | 'profile'
  id: string
  title: string
}

type Platform = 'ios' | 'android' | 'web'

function detectPlatform(): Platform {
  if (typeof window === 'undefined') return 'web'
  
  const userAgent = window.navigator.userAgent.toLowerCase()
  
  if (/iphone|ipad|ipod/.test(userAgent)) {
    return 'ios'
  } else if (/android/.test(userAgent)) {
    return 'android'
  }
  
  return 'web'
}

export default function DeepLinkButton({ type, id, title }: Props) {
  const [isLoading, setIsLoading] = useState(false)
  const [platform] = useState<Platform>(() => detectPlatform())

  const getStoreUrl = (platform: Platform) => {
    const appStoreUrl = 'https://apps.apple.com/be/app/konek/id6746455896'
    const androidUrl = 'https://play.google.com/store/apps/details?id=com.konek.mobileapp&hl=fr'

    switch (platform) {
      case 'ios':
        return appStoreUrl
      case 'android':
        return androidUrl
      case 'web':
        return appStoreUrl
      default:
        return appStoreUrl
    }
  }

  const handleOpenInApp = () => {
    setIsLoading(true)

    // Use 'teams' for team type to match mobile app routing
    const pathType = type === 'team' ? 'teams' : type
    const deepLink = `com.konek.mobileapp://${pathType}/${id}`

    // Open the app with deeplink
    window.location.href = deepLink

    // Reset loading state after a short delay
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  return (
    <>
      <button
        onClick={handleOpenInApp}
        disabled={isLoading}
        className="kn-open-btn"
      >
        {!isLoading && (
          <svg className="kn-open-btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        )}
        {isLoading ? "Opening..." : "Open in Konek"}
      </button>

      {/* Download App Section */}
      <div className="kn-download">
        <p className="kn-download-label">Don&apos;t have the Konek app yet?</p>
        <div className="kn-download-buttons">
          <a
            href={getStoreUrl('ios')}
            target="_blank"
            rel="noopener noreferrer"
            className="kn-store-btn"
            aria-label="Download on the App Store"
          >
            <svg className="kn-store-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
            </svg>
            <span className="kn-store-text">
              <span className="kn-store-text-sm">Download on the</span>
              <span className="kn-store-text-lg">App Store</span>
            </span>
          </a>

          <a
            href={getStoreUrl('android')}
            target="_blank"
            rel="noopener noreferrer"
            className="kn-store-btn"
            aria-label="Download on Google Play"
          >
            <svg className="kn-store-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3.609 1.814 13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zM14.499 12.707l2.495 2.494-10.27 5.864 7.775-8.358zm3.405-3.21 2.494 1.424c.831.475.831 1.694 0 2.169l-2.494 1.424-2.79-2.792 2.79-2.225zM6.724 2.935l10.27 5.864-2.495 2.494-7.775-8.358z"/>
            </svg>
            <span className="kn-store-text">
              <span className="kn-store-text-sm">Download on</span>
              <span className="kn-store-text-lg">Google Play</span>
            </span>
          </a>
        </div>
      </div>
    </>
  )
}