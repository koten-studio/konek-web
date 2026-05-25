'use client'

import type { ReactNode } from 'react'

const IOS_URL = 'https://testflight.apple.com/join/xMTHB8p2'
const PLAY_URL = 'https://play.google.com/apps/testing/com.konek.mobileapp'

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
