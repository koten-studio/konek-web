import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="main-container">
      <div className="page-wrapper">
        {/* Logo and Branding */}
        <div className="logo-section">
          <div className="logo-container">
            <Image
              src="/assets/images/konek_logo_with_text.jpeg"
              alt="Konek Logo"
              width={400}
              height={133}
              className="logo-image"
              priority
            />
          </div>

          <p className="description">
            The consumer app to join sports, recreational and social events near you.
            Connect with independent yoga teachers, sports coaches and fitness instructors
            offering services in your area.
          </p>
          <p className="description description-secondary">
            Konek is a free consumer mobile app for individuals seeking real-world sporting,
            recreational and social connections in their local community.
          </p>
        </div>

        {/* Download Section */}
        <div className="download-section">
          <h2 className="download-title">
            Available on Beta
          </h2>

          <div className="buttons-container">
            {/* iOS TestFlight Button */}
            <Link
              href="https://testflight.apple.com/join/xMTHB8p2"
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
                  <div className="button-text-large">iOS TestFlight</div>
                </div>
              </div>
            </Link>

            {/* Android Expo Button */}
            <Link
              href="https://play.google.com/apps/testing/com.konek.mobileapp"
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
                  <div className="button-text-large">Android Beta</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}