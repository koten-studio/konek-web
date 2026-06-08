'use client'

import type { ReactNode } from 'react'

const IOS_URL = 'https://apps.apple.com/be/app/konek/id6746455896'
const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.konek.mobileapp&hl=fr'

export function GetTheAppButton({
  className,
  children,
  fallbackTargetId = 'get-the-app',
}: {
  className?: string
  children: ReactNode
  fallbackTargetId?: string
}) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const ua = typeof navigator !== 'undefined' ? navigator.userAgent : ''
    if (/iPhone|iPad|iPod/i.test(ua) && !/Macintosh/i.test(ua)) {
      window.location.href = IOS_URL
      return
    }
    if (/Android/i.test(ua)) {
      window.location.href = PLAY_URL
      return
    }
    e.preventDefault()
    const el = document.getElementById(fallbackTargetId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <a href={`#${fallbackTargetId}`} className={className} onClick={handleClick}>
      {children}
    </a>
  )
}
