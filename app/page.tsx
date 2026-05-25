import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="landing">
      {/* Decorative background */}
      <div className="landing-bg" aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
      </div>

      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <div className="logo-wrap">
            <Image
              src="/assets/images/konek_logo_with_text.jpeg"
              alt="Konek"
              width={420}
              height={140}
              className="logo-image"
              priority
            />
          </div>

          <span className="eyebrow">Sports · Recreation · Social</span>

          <h1 className="hero-title">
            Find your people.<br />
            <span className="hero-title-accent">Move together.</span>
          </h1>

          <p className="hero-lede">
            Konek is the free consumer app to join sports, recreational and
            social events near you — and connect with independent yoga teachers,
            coaches and fitness instructors in your area.
          </p>

          {/* Download CTAs */}
          <div className="cta-row">
            <Link
              href="https://testflight.apple.com/join/xMTHB8p2"
              target="_blank"
              rel="noopener noreferrer"
              className="store-button"
              aria-label="Download on iOS TestFlight"
            >
              <svg className="store-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
              </svg>
              <span className="store-text">
                <span className="store-text-small">Download on</span>
                <span className="store-text-large">iOS TestFlight</span>
              </span>
            </Link>

            <Link
              href="https://play.google.com/apps/testing/com.konek.mobileapp"
              target="_blank"
              rel="noopener noreferrer"
              className="store-button"
              aria-label="Download on Google Play Beta"
            >
              <svg className="store-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3.609 1.814 13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zM14.499 12.707l2.495 2.494-10.27 5.864 7.775-8.358zm3.405-3.21 2.494 1.424c.831.475.831 1.694 0 2.169l-2.494 1.424-2.79-2.792 2.79-2.225zM6.724 2.935l10.27 5.864-2.495 2.494-7.775-8.358z" />
              </svg>
              <span className="store-text">
                <span className="store-text-small">Download on</span>
                <span className="store-text-large">Google Play Beta</span>
              </span>
            </Link>
          </div>

          <p className="beta-note">Currently available in beta — free to join.</p>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="features-inner">
          <h2 className="section-title">Built for real-world connection</h2>
          <p className="section-sub">
            A simple way to discover what&apos;s happening around you and meet
            people who share your interests.
          </p>

          <ul className="feature-grid">
            <li className="feature-card">
              <div className="feature-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21s-7-4.5-7-11a7 7 0 1 1 14 0c0 6.5-7 11-7 11Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </div>
              <h3 className="feature-title">Discover nearby</h3>
              <p className="feature-text">
                Find sports, fitness and social activities happening in your
                neighbourhood — today, this week, or whenever.
              </p>
            </li>

            <li className="feature-card">
              <div className="feature-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="8" r="3.5" />
                  <circle cx="17" cy="10" r="2.5" />
                  <path d="M2.5 19c.6-3.2 3.3-5 6.5-5s5.9 1.8 6.5 5" />
                  <path d="M14.5 18c.4-2 2-3 3.5-3s2.8.8 3.5 3" />
                </svg>
              </div>
              <h3 className="feature-title">Meet your community</h3>
              <p className="feature-text">
                Join activities solo or with friends and build real
                connections with locals who share your passions.
              </p>
            </li>

            <li className="feature-card">
              <div className="feature-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3 4 7v6c0 4.5 3.4 8.2 8 9 4.6-.8 8-4.5 8-9V7l-8-4Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="feature-title">Independent coaches</h3>
              <p className="feature-text">
                Connect directly with yoga teachers, sports coaches and
                fitness instructors offering services in your area.
              </p>
            </li>

            <li className="feature-card">
              <div className="feature-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="17" rx="3" />
                  <path d="M3 9h18" />
                  <path d="M8 2v4M16 2v4" />
                </svg>
              </div>
              <h3 className="feature-title">Join in one tap</h3>
              <p className="feature-text">
                Browse the schedule, RSVP instantly and get directions —
                everything you need in your pocket.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="closing">
        <div className="closing-inner">
          <h2 className="closing-title">Ready to get moving?</h2>
          <p className="closing-text">
            Download the beta and start joining activities near you.
          </p>
          <div className="cta-row cta-row-center">
            <Link
              href="https://testflight.apple.com/join/xMTHB8p2"
              target="_blank"
              rel="noopener noreferrer"
              className="store-button"
            >
              <svg className="store-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
              </svg>
              <span className="store-text">
                <span className="store-text-small">Download on</span>
                <span className="store-text-large">iOS TestFlight</span>
              </span>
            </Link>

            <Link
              href="https://play.google.com/apps/testing/com.konek.mobileapp"
              target="_blank"
              rel="noopener noreferrer"
              className="store-button"
            >
              <svg className="store-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3.609 1.814 13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zM14.499 12.707l2.495 2.494-10.27 5.864 7.775-8.358zm3.405-3.21 2.494 1.424c.831.475.831 1.694 0 2.169l-2.494 1.424-2.79-2.792 2.79-2.225zM6.724 2.935l10.27 5.864-2.495 2.494-7.775-8.358z" />
              </svg>
              <span className="store-text">
                <span className="store-text-small">Download on</span>
                <span className="store-text-large">Google Play Beta</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <Image
              src="/assets/images/konek_logo_transparent.png"
              alt="Konek"
              width={36}
              height={36}
              className="footer-logo"
            />
            <span className="footer-wordmark">Konek</span>
          </div>
          <nav className="footer-nav" aria-label="Footer">
            <Link href="/support" className="footer-link">Support</Link>
            <Link href="/privacy" className="footer-link">Privacy</Link>
            <Link href="/child-safety" className="footer-link">Child Safety</Link>
            <Link href="/delete-account" className="footer-link">Delete account</Link>
          </nav>
          <p className="footer-copy">© {new Date().getFullYear()} Konek. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
