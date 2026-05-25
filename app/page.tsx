import Image from 'next/image'
import Link from 'next/link'

const activities = [
  'Yoga', 'Running', 'Football', 'Pilates', 'Climbing',
  'Tennis', 'Padel', 'Boxing', 'Cycling', 'Hiking',
  'HIIT', 'Swimming', 'Dance', 'Basketball', 'Volleyball',
  'Martial arts', 'Bouldering', 'Surfing', 'Crossfit', 'Skating',
]

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
          <Link href="#download" className="kn-header-cta">
            Get the app
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="kn-hero">
        <div className="kn-hero-inner">
          <p className="kn-kicker">
            <span className="kn-kicker-dot" aria-hidden="true" />
            Beta open. Free to join.
          </p>

          <h1 className="kn-display">
            Sports, classes,
            <br />
            and meetups,
            <br />
            <span className="kn-display-mark">close to home.</span>
          </h1>

          <p className="kn-lede">
            Konek is the free app for joining sports, fitness and social
            activities near you, and connecting with independent yoga
            teachers, coaches and instructors in your area.
          </p>

          <div className="kn-cta-row" id="download">
            <Link
              href="https://testflight.apple.com/join/xMTHB8p2"
              target="_blank"
              rel="noopener noreferrer"
              className="kn-store-btn"
              aria-label="Download on iOS TestFlight"
            >
              <svg className="kn-store-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
              </svg>
              <span className="kn-store-text">
                <span className="kn-store-text-sm">Download on</span>
                <span className="kn-store-text-lg">iOS TestFlight</span>
              </span>
            </Link>

            <Link
              href="https://play.google.com/apps/testing/com.konek.mobileapp"
              target="_blank"
              rel="noopener noreferrer"
              className="kn-store-btn"
              aria-label="Download on Google Play Beta"
            >
              <svg className="kn-store-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3.609 1.814 13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zM14.499 12.707l2.495 2.494-10.27 5.864 7.775-8.358zm3.405-3.21 2.494 1.424c.831.475.831 1.694 0 2.169l-2.494 1.424-2.79-2.792 2.79-2.225zM6.724 2.935l10.27 5.864-2.495 2.494-7.775-8.358z" />
              </svg>
              <span className="kn-store-text">
                <span className="kn-store-text-sm">Download on</span>
                <span className="kn-store-text-lg">Google Play Beta</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Activities marquee */}
      <section className="kn-activities" aria-labelledby="kn-activities-h">
        <div className="kn-activities-inner">
          <h2 id="kn-activities-h" className="kn-eyebrow-h">What people are joining</h2>
          <ul className="kn-tags">
            {activities.map((a) => (
              <li key={a} className="kn-tag">{a}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section className="kn-how">
        <div className="kn-how-inner">
          <div className="kn-how-head">
            <p className="kn-eyebrow on-dark">How it works</p>
            <h2 className="kn-section-title on-dark">
              Three taps to your next activity.
            </h2>
          </div>

          <ol className="kn-steps">
            <li className="kn-step">
              <span className="kn-step-num">01</span>
              <h3 className="kn-step-title">Discover what&apos;s nearby</h3>
              <p className="kn-step-text">
                Browse activities, classes and meetups happening around
                you, today or later this week.
              </p>
            </li>
            <li className="kn-step">
              <span className="kn-step-num">02</span>
              <h3 className="kn-step-title">Join in one tap</h3>
              <p className="kn-step-text">
                RSVP, see who&apos;s coming, get directions. No commitment,
                no awkward group chats.
              </p>
            </li>
            <li className="kn-step">
              <span className="kn-step-num">03</span>
              <h3 className="kn-step-title">Connect for real</h3>
              <p className="kn-step-text">
                Meet locals who share your interests, and follow the
                independent coaches you love.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* Big quote-like statement */}
      <section className="kn-statement">
        <div className="kn-statement-inner">
          <p className="kn-statement-text">
            Real activities. Real people. <span className="kn-statement-accent">Right around the corner.</span>
          </p>
        </div>
      </section>

      {/* Closing */}
      <section className="kn-closing">
        <div className="kn-closing-inner">
          <h2 className="kn-section-title">Ready when you are.</h2>
          <p className="kn-closing-text">
            Free during beta. Available on iOS TestFlight and Google Play.
          </p>

          <div className="kn-cta-row">
            <Link
              href="https://testflight.apple.com/join/xMTHB8p2"
              target="_blank"
              rel="noopener noreferrer"
              className="kn-store-btn"
            >
              <svg className="kn-store-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
              </svg>
              <span className="kn-store-text">
                <span className="kn-store-text-sm">Download on</span>
                <span className="kn-store-text-lg">iOS TestFlight</span>
              </span>
            </Link>
            <Link
              href="https://play.google.com/apps/testing/com.konek.mobileapp"
              target="_blank"
              rel="noopener noreferrer"
              className="kn-store-btn"
            >
              <svg className="kn-store-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3.609 1.814 13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zM14.499 12.707l2.495 2.494-10.27 5.864 7.775-8.358zm3.405-3.21 2.494 1.424c.831.475.831 1.694 0 2.169l-2.494 1.424-2.79-2.792 2.79-2.225zM6.724 2.935l10.27 5.864-2.495 2.494-7.775-8.358z" />
              </svg>
              <span className="kn-store-text">
                <span className="kn-store-text-sm">Download on</span>
                <span className="kn-store-text-lg">Google Play Beta</span>
              </span>
            </Link>
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
