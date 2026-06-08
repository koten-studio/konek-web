import Image from 'next/image'
import Link from 'next/link'
import type { CSSProperties } from 'react'
import { GetTheAppButton } from '@/components/GetTheAppButton'

const cards = [
  {
    num: '01',
    title: 'Create in seconds',
    text: 'Want to go climbing, hit a concert, or plan a hike? Set up an activity in a few taps and let your friends join in.',
  },
  {
    num: '02',
    title: "See what's happening",
    text: 'Your feed shows what your friends are planning today, this week, or anytime. Join in just one tap.',
  },
  {
    num: '03',
    title: 'Explore beyond your circle',
    text: "Discover activities from friends of friends. Everyone's connected through someone you know, so it never feels like meeting strangers.",
  },
  {
    num: '04',
    title: 'Built for action, not addiction',
    text: 'No likes, no followers, no algorithm. Just plans, and the people you make them with.',
  },
]

const cloud: Array<{
  text: string
  variant: 'green' | 'dark' | 'outline'
  size: 'md' | 'lg' | 'xl'
  rot: number
}> = [
  { text: 'Stop scrolling. Start showing up.', variant: 'green', size: 'xl', rot: -7 },
  { text: 'Less talk. More plans.', variant: 'dark', size: 'lg', rot: 6 },
  { text: 'Do more with your friends.', variant: 'outline', size: 'md', rot: -4 },
  { text: 'Plan less. Live more.', variant: 'green', size: 'lg', rot: 9 },
  { text: 'No likes. No followers. Just friends.', variant: 'dark', size: 'xl', rot: -3 },
  { text: 'Built for connection. Made for moments.', variant: 'outline', size: 'md', rot: 7 },
  { text: 'Made for action, not addiction.', variant: 'green', size: 'lg', rot: -6 },
]

function IosButton() {
  return (
    <Link
      href="https://apps.apple.com/be/app/konek/id6746455896"
      target="_blank"
      rel="noopener noreferrer"
      className="kn-store-btn"
      aria-label="Download on the App Store"
    >
      <svg className="kn-store-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
      </svg>
      <span className="kn-store-text">
        <span className="kn-store-text-sm">Download on the</span>
        <span className="kn-store-text-lg">App Store</span>
      </span>
    </Link>
  )
}

function PlayButton() {
  return (
    <Link
      href="https://play.google.com/store/apps/details?id=com.konek.mobileapp&hl=fr"
      target="_blank"
      rel="noopener noreferrer"
      className="kn-store-btn"
      aria-label="Download on Google Play"
    >
      <svg className="kn-store-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3.609 1.814 13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zM14.499 12.707l2.495 2.494-10.27 5.864 7.775-8.358zm3.405-3.21 2.494 1.424c.831.475.831 1.694 0 2.169l-2.494 1.424-2.79-2.792 2.79-2.225zM6.724 2.935l10.27 5.864-2.495 2.494-7.775-8.358z" />
      </svg>
      <span className="kn-store-text">
        <span className="kn-store-text-sm">Download on</span>
        <span className="kn-store-text-lg">Google Play</span>
      </span>
    </Link>
  )
}

export default function Home() {
  return (
    <main className="kn-page">
      {/* Header */}
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
          <GetTheAppButton className="kn-header-cta">Get the app</GetTheAppButton>
        </div>
      </header>

      {/* Hero */}
      <section className="kn-hero">
        <div className="kn-hero-inner">
          <div className="kn-hero-main">
            <h1 className="kn-display">
              Your friends have plans.{' '}
              <span className="kn-display-mark">Join them.</span>
            </h1>
            <p className="kn-lede">
              Konek is the fastest way to plan and join activities with your
              friends. Tap, join, done.
            </p>
            <div className="kn-cta-row">
              <IosButton />
              <PlayButton />
            </div>
          </div>

          <aside className="kn-hero-aside" aria-labelledby="why-konek">
            <h2 id="why-konek" className="kn-aside-title">Why we built Konek</h2>
            <div className="kn-aside-body">
              <p className="kn-aside-lede">
                Too many good moments never happen. Not because nobody wants
                them, but because organizing them is a pain.
              </p>

              <ul className="kn-aside-list">
                <li>A coffee postponed three times.</li>
                <li>A hike that dies in a group chat.</li>
                <li>
                  A &ldquo;we should go climbing&rdquo; that stays a
                  &ldquo;we should&rdquo; for months.
                </li>
              </ul>

              <div className="kn-aside-block">
                <h3 className="kn-aside-lead">Not another social network</h3>
                <p>
                  No feed, no likes, no followers, no algorithm fighting for
                  your attention. Konek does one thing well: it turns an idea
                  into a plan, and a plan into a real moment with people you
                  actually know.
                </p>
              </div>

              <div className="kn-aside-block">
                <h3 className="kn-aside-lead">Meet friends of friends</h3>
                <p>
                  Some of the best people you&apos;ll click with are one step
                  away. Same interests, shared friends, paths that never
                  crossed. Every activity you discover comes through someone
                  you know, so it never feels like meeting strangers.
                </p>
              </div>

              <p className="kn-aside-kicker">
                Create in a few taps, join in one, show up. A Saturday run, a
                study session, a concert, a coffee after work. Konek makes
                sure it actually happens.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Cards */}
      <section className="kn-cards">
        <div className="kn-cards-inner">
          <h2 className="kn-section-title on-dark kn-cards-title">
            Everything you need to actually hang out.
          </h2>
          <ul className="kn-cards-grid">
            {cards.map((c) => (
              <li key={c.num} className="kn-card">
                <span className="kn-card-num">{c.num}</span>
                <h3 className="kn-card-title">{c.title}</h3>
                <p className="kn-card-text">{c.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Cloud */}
      <section className="kn-cloud" aria-label="What Konek stands for">
        <ul className="kn-cloud-list">
          {cloud.map((p, i) => (
            <li
              key={i}
              className={`kn-cloud-item kn-cloud-${p.variant} kn-cloud-${p.size}`}
              style={{ '--rot': `${p.rot}deg` } as CSSProperties}
            >
              {p.text}
            </li>
          ))}
        </ul>
      </section>

      {/* Closing */}
      <section className="kn-closing" id="get-the-app">
        <div className="kn-closing-inner">
          <h2 className="kn-section-title">Your friends are waiting for you.</h2>
          <p className="kn-closing-text">Free on iOS and Google Play.</p>
          <div className="kn-cta-row">
            <IosButton />
            <PlayButton />
          </div>
        </div>
      </section>

      {/* Footer */}
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
