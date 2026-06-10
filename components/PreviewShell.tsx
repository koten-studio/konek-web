import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { GetTheAppButton } from '@/components/GetTheAppButton'

// Brand frame for share/preview pages (/i/[code], /activity, /team, /profile).
// Reuses the landing-page visual language (cream canvas, sticky header, footer)
// so a shared link feels like Konek and not a bare card on a white page.
export default function PreviewShell({ children }: { children: ReactNode }) {
  return (
    <main className="kn-page kn-preview-page">
      <header className="kn-header">
        <div className="kn-header-inner">
          <Link href="/" className="kn-brand" aria-label="Konek home">
            <Image
              src="/assets/images/konek_logo_transparent.png"
              alt=""
              width={36}
              height={36}
              className="kn-brand-mark"
              priority
            />
            <span className="kn-brand-name">Konek</span>
          </Link>
          <GetTheAppButton className="kn-header-cta" fallbackTargetId="get-the-app">
            Get the app
          </GetTheAppButton>
        </div>
      </header>

      <section className="kn-preview-main">{children}</section>

      <footer className="kn-footer">
        <div className="kn-footer-inner">
          <div className="kn-footer-brand">
            <Image
              src="/assets/images/konek_logo_transparent.png"
              alt=""
              width={32}
              height={32}
              className="kn-footer-logo"
            />
            <span className="kn-footer-name">Konek</span>
          </div>
          <nav className="kn-footer-nav" aria-label="Footer">
            <Link href="/support" className="kn-footer-link">Support</Link>
            <Link href="/privacy" className="kn-footer-link">Privacy</Link>
            <Link href="/child-safety" className="kn-footer-link">Child Safety</Link>
            <Link href="/delete-account" className="kn-footer-link">Delete account</Link>
          </nav>
          <p className="kn-footer-copy">© {new Date().getFullYear()} Konek. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
