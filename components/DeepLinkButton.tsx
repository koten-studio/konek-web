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
        className="konek-button-content"
      >
        {!isLoading && (
          <svg style={{ width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        )}
        {isLoading ? "Opening..." : "Open in Konek"}
      </button>

      {/* Download App Section */}
      <div style={{
        marginTop: '1.5rem',
        padding: '1rem',
        backgroundColor: '#f8fafc',
        borderRadius: '0.5rem',
        textAlign: 'center' as const,
        border: '1px solid #e2e8f0'
      }}>
        <p style={{
          margin: '0 0 0.75rem 0',
          color: '#475569',
          fontSize: '0.875rem'
        }}>
          Don't have the Konek app yet?
        </p>
        <div className="buttons-container">
          <a
            href={getStoreUrl('ios')}
            target="_blank"
            rel="noopener noreferrer"
            className="download-button"
          >
            <div className="button-content">
              <svg className="button-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
              </svg>
              <div className="button-text-container">
                <div className="button-text-small">Download on</div>
                <div className="button-text-large">App Store</div>
              </div>
            </div>
          </a>

          <a
            href={getStoreUrl('android')}
            target="_blank"
            rel="noopener noreferrer"
            className="download-button"
          >
            <div className="button-content">
              <svg className="button-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zM20.5 8c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zM15.53 2.16l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"/>
              </svg>
              <div className="button-text-container">
                <div className="button-text-small">Download on</div>
                <div className="button-text-large">Google Play</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}