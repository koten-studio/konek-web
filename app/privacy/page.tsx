import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Konek',
  description: 'Privacy Policy for Konek - the consumer mobile app for sports, social and recreational events.',
};

export default function PrivacyPolicy() {
  return (
    <div className="privacy-container">
      <div className="privacy-wrapper">
        <h1 className="privacy-title">Privacy Policy</h1>

        <div className="privacy-content">
          <p className="privacy-date">
            <strong>Effective Date:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="privacy-section">
            <h2 className="privacy-h2">1. Introduction</h2>
            <p className="privacy-text">
              Welcome to Konek ("we," "our," or "us"). Konek is a consumer mobile application that helps individuals discover and join sports, social and recreational events in their local community, and connect with independent fitness, wellness and sports professionals (such as yoga teachers, personal trainers and sports coaches). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our consumer mobile application.
            </p>
            <p className="privacy-text">
              By using Konek, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree with the terms of this policy, please do not use our application.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-h2">2. Information We Collect</h2>

            <h3 className="privacy-h3">Personal Information</h3>
            <p className="privacy-text">
              We collect personal information that you voluntarily provide when registering for an account or using our services:
            </p>
            <ul className="privacy-list">
              <li>Name and contact information (email address, phone number)</li>
              <li>Profile information (profile picture, bio, interests)</li>
              <li>Location data (with your permission)</li>
              <li>Calendar information (with your permission)</li>
              <li>Photos and media (with your permission)</li>
              <li>Activity preferences and participation history</li>
            </ul>

            <h3 className="privacy-h3">Automatically Collected Information</h3>
            <p className="privacy-text">
              When you use our app, we automatically collect certain information:
            </p>
            <ul className="privacy-list">
              <li>Device information (device type, operating system, unique device identifiers)</li>
              <li>Usage data (app features used, time spent, interactions)</li>
              <li>Log data (IP address, access times, app crashes)</li>
              <li>Location information (if location services are enabled)</li>
            </ul>

            <h3 className="privacy-h3">Invite Link Attribution</h3>
            <p className="privacy-text">
              When you click an invitation link to konek.social, we temporarily store your IP address and browser type so that we can connect your click to the Konek app you subsequently install. This lets the app show you who invited you and the activity they shared. Unmatched records are deleted within 24 hours; matched records are kept for up to 7 days for support and quality monitoring before deletion.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-h2">3. App Permissions</h2>
            <p className="privacy-text">
              Konek requests certain permissions to provide full functionality. You can manage these permissions through your device settings at any time.
            </p>

            <h3 className="privacy-h3">Android Permissions</h3>
            <ul className="privacy-list">
              <li><strong>Location (Fine & Coarse):</strong> To show nearby sporting, recreational and social events and connect you with consumers and independent leisure professionals in your area</li>
              <li><strong>Camera:</strong> To capture and upload profile photos and activity images</li>
              <li><strong>Storage (Read/Write):</strong> To save images and app data locally on your device</li>
              <li><strong>Notifications:</strong> To send you activity invites, updates, and important app information</li>
              <li><strong>Calendar (Read/Write):</strong> To integrate activities with your calendar and help you manage your schedule</li>
              <li><strong>Internet:</strong> To enable app connectivity and real-time features</li>
              <li><strong>System Permissions:</strong> Including vibration for notifications, boot receiver for app functionality, and system alerts</li>
            </ul>

            <h3 className="privacy-h3">iOS Permissions</h3>
            <ul className="privacy-list">
              <li><strong>Location (Always/When In Use):</strong> To show nearby sporting, recreational and social events and provide location-based consumer features</li>
              <li><strong>Camera & Photo Library:</strong> To capture, upload, and access photos for your profile and activities</li>
              <li><strong>Calendar & Reminders:</strong> To integrate with your calendar for activity scheduling</li>
              <li><strong>Push Notifications:</strong> To send you important updates and activity invitations</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-h2">4. How We Use Your Information</h2>
            <p className="privacy-text">
              We use the information we collect to:
            </p>
            <ul className="privacy-list">
              <li>Create and manage your consumer account</li>
              <li>Connect you with other consumers for sporting, recreational and social events</li>
              <li>Match you with independent leisure professionals (yoga teachers, sports coaches, fitness instructors) offering services in your area</li>
              <li>Show you nearby community events and meetups based on your location</li>
              <li>Send notifications about event invites, meetup updates and recreational activity reminders</li>
              <li>Improve and personalize your consumer app experience</li>
              <li>Communicate with you about our consumer services</li>
              <li>Ensure safety and security of our consumer platform</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-h2">5. Information Sharing</h2>
            <p className="privacy-text">
              We do not sell, trade, or rent your personal information to third parties. We may share your information in the following situations:
            </p>
            <ul className="privacy-list">
              <li><strong>With other users:</strong> Your profile information and activity participation are visible to other app users</li>
              <li><strong>With service providers:</strong> We may share information with third-party vendors who help us operate our app</li>
              <li><strong>For legal purposes:</strong> When required by law or to protect rights and safety</li>
              <li><strong>Business transfers:</strong> In connection with any merger, sale, or acquisition</li>
              <li><strong>With your consent:</strong> When you explicitly agree to share your information</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-h2">6. Data Security</h2>
            <p className="privacy-text">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-h2">7. Data Retention</h2>
            <p className="privacy-text">
              We retain your personal information for as long as necessary to provide our services and fulfill the purposes described in this Privacy Policy. You may request deletion of your account and personal information at any time by contacting us.
            </p>
            <p className="privacy-text">
              <a href="/delete-account" className="privacy-link">Click here to request account and data deletion</a>
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-h2">8. Your Rights</h2>
            <p className="privacy-text">
              You have the following rights regarding your personal information:
            </p>
            <ul className="privacy-list">
              <li>Access and receive a copy of your personal data</li>
              <li>Correct or update inaccurate information</li>
              <li><a href="/delete-account">Delete your account and personal information</a></li>
              <li>Object to or restrict certain processing</li>
              <li>Withdraw consent for data processing</li>
              <li>Data portability (receive your data in a structured format)</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-h2">9. Children's Privacy</h2>
            <p className="privacy-text">
              Konek is not intended for use by children under 16 years of age. We do not knowingly collect personal information from children under 16. If we become aware that we have collected data from a child under 16, we will take steps to delete such information.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-h2">10. International Data Transfers</h2>
            <p className="privacy-text">
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-h2">11. Updates to This Policy</h2>
            <p className="privacy-text">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date." Your continued use of Konek after any changes indicates your acceptance of the updated Privacy Policy.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-h2">12. Contact Us</h2>
            <p className="privacy-text">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="privacy-contact">
              <p><strong>Konek Support</strong></p>
              <p>Email: privacy@konek.social</p>
              <p>Website: www.konek.social</p>
            </div>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-h2">13. Compliance</h2>
            <p className="privacy-text">
              This Privacy Policy is designed to comply with applicable data protection laws including but not limited to:
            </p>
            <ul className="privacy-list">
              <li>General Data Protection Regulation (GDPR)</li>
              <li>California Consumer Privacy Act (CCPA)</li>
              <li>Google Play Store Privacy Policy Requirements</li>
              <li>Apple App Store Privacy Requirements</li>
            </ul>
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