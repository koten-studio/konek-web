import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support - Konek',
  description:
    'Get help with Konek: contact the support team, report a bug, ask a question, or find guidance on account, privacy, and child safety topics.',
};

export default function Support() {
  return (
    <div className="privacy-container">
      <div className="privacy-wrapper">
        <h1 className="privacy-title">Support</h1>

        <div className="privacy-content">
          <p className="privacy-date">
            <strong>Last updated:</strong> May 15, 2026
          </p>

          <p className="privacy-text">
            Need help with Konek? This page lists the fastest way to reach us
            and the right contact for each kind of request.
          </p>

          <section className="privacy-section">
            <h2 className="privacy-h2">Contact us</h2>
            <p className="privacy-text">
              For general questions, bug reports, feature requests, or account
              issues, write to our support team:
            </p>
            <div className="privacy-contact">
              <p>
                <strong>Email:</strong> support@konek.social
              </p>
            </div>
            <p className="privacy-text">
              We aim to reply within 2 business days. To help us answer faster,
              please include:
            </p>
            <ul className="privacy-list">
              <li>The email address linked to your Konek account.</li>
              <li>Your device and operating system (e.g. iPhone 15, iOS 18.2 / Pixel 8, Android 15).</li>
              <li>The app version (Settings &gt; About).</li>
              <li>A clear description of the issue, and a screenshot or screen recording when possible.</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-h2">Specialized contacts</h2>
            <p className="privacy-text">
              Some requests are handled by dedicated teams. Using the right
              address gets you a faster, more accurate answer.
            </p>
            <ul className="privacy-list">
              <li>
                <strong>Privacy and data requests</strong> (access, export,
                rectification, deletion under GDPR / CCPA):{' '}
                <strong>privacy@konek.social</strong>. See also our{' '}
                <a href="/delete-account" className="privacy-link">
                  account deletion page
                </a>{' '}
                and{' '}
                <a href="/privacy" className="privacy-link">
                  privacy policy
                </a>
                .
              </li>
              <li>
                <strong>Child safety concerns</strong> (CSAE / CSAM, grooming,
                exploitation of a minor): <strong>safety@konek.social</strong>.
                See our{' '}
                <a href="/child-safety" className="privacy-link">
                  child safety standards
                </a>
                .
              </li>
              <li>
                <strong>Trust and safety</strong> (harassment, abuse,
                impersonation, fraud): <strong>safety@konek.social</strong>.
              </li>
            </ul>
            <p className="privacy-text">
              If you are unsure which inbox to use, write to{' '}
              <strong>support@konek.social</strong> and we will route your
              message internally.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-h2">Common topics</h2>

            <h3 className="privacy-h3">I cannot sign in</h3>
            <p className="privacy-text">
              Make sure you are using the same sign-in method (email, Apple,
              Google) that you used to create the account. If you signed up
              with email, use the "Forgot password" flow on the sign-in screen
              to receive a reset link. If the reset email does not arrive
              within a few minutes, check your spam folder, then contact{' '}
              <strong>support@konek.social</strong>.
            </p>

            <h3 className="privacy-h3">I want to delete my account</h3>
            <p className="privacy-text">
              You can delete your account directly from the app under{' '}
              <em>Settings &gt; Account Settings &gt; Delete Account</em>, or
              follow the email procedure described on our{' '}
              <a href="/delete-account" className="privacy-link">
                account deletion page
              </a>
              .
            </p>

            <h3 className="privacy-h3">I want to report a user, activity, or message</h3>
            <p className="privacy-text">
              Use the in-app report flow: open the profile, activity, post, or
              message, tap the three-dot menu, select <strong>Report</strong>,
              and choose the reason that best matches the concern. For
              child-safety concerns, you can also email{' '}
              <strong>safety@konek.social</strong>.
            </p>

            <h3 className="privacy-h3">I think I found a bug</h3>
            <p className="privacy-text">
              Email <strong>support@konek.social</strong> with the information
              listed in <em>Contact us</em> above. A short screen recording
              showing the issue is the single most helpful thing you can send.
            </p>

            <h3 className="privacy-h3">I am a coach, teacher, or instructor and want to list services</h3>
            <p className="privacy-text">
              To be added to the early instructor program, email{' '}
              <strong>support@konek.social</strong> with a short description of
              the services you offer and the area you cover.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-h2">Download Konek</h2>
            <p className="privacy-text">
              Konek is available on the App Store and Google Play. Download it
              from the{' '}
              <a href="/" className="privacy-link">
                home page
              </a>
              . To stop using Konek, simply delete the app from your device.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-h2">Emergencies</h2>
            <p className="privacy-text">
              Konek is not a substitute for emergency services. If you or
              someone else is in immediate danger, contact your local
              emergency services first (for example, dial 911 in the United
              States, 112 in the European Union, or your country's
              equivalent).
            </p>
          </section>
        </div>

        <div className="privacy-footer">
          <p className="privacy-copyright">
            © {new Date().getFullYear()} Konek. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
