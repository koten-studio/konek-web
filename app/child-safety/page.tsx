import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Child Safety Standards - Konek',
  description:
    "Konek's published Child Safety Standards (CSAE / CSAM) policy. Konek is a 16+ social application and has zero tolerance for child sexual abuse and exploitation.",
};

export default function ChildSafetyPolicy() {
  return (
    <div className="privacy-container">
      <div className="privacy-wrapper">
        <h1 className="privacy-title">Child Safety Standards Policy</h1>

        <div className="privacy-content">
          <p className="privacy-date">
            <strong>Last updated:</strong> April 25, 2026
          </p>

          <p className="privacy-text">
            This document is the publicly accessible version of Konek's commitments
            against child sexual abuse and exploitation (CSAE) and child sexual abuse
            material (CSAM). It applies to the Konek mobile application
            (<code>com.konek.mobileapp</code>) published on Google Play and the App
            Store. It is referenced in Konek's Google Play "Child Safety Standards"
            declaration.
          </p>

          <section className="privacy-section">
            <h2 className="privacy-h2">1. Our commitment</h2>
            <p className="privacy-text">
              Konek is a social application for users aged 16 and over that helps
              them discover and join real-world activities. We have <strong>zero
              tolerance</strong> for child sexual abuse and exploitation (CSAE) and
              for child sexual abuse material (CSAM). We are committed to:
            </p>
            <ul className="privacy-list">
              <li>Keeping users under 16 off Konek.</li>
              <li>Protecting users aged 16 and 17, who remain legal minors, from CSAE on the platform.</li>
              <li>Removing CSAE/CSAM as quickly as we are made aware of it.</li>
              <li>Cooperating with law enforcement and child protection authorities.</li>
              <li>Continuously improving the safety of our platform.</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-h2">2. Definitions</h2>
            <ul className="privacy-list">
              <li>
                <strong>CSAE</strong> (Child Sexual Abuse and Exploitation): any
                conduct, content, or behavior that sexually abuses, exploits, or
                endangers a person under the age of 18, including grooming,
                sextortion, the production or distribution of CSAM, and the use of
                the platform to facilitate offline sexual abuse of a minor.
              </li>
              <li>
                <strong>CSAM</strong> (Child Sexual Abuse Material): any visual,
                audio, or textual material that depicts the sexual abuse or sexual
                exploitation of a person under the age of 18.
              </li>
              <li>
                <strong>Child / minor</strong>: any person under the age of 18.
              </li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-h2">3. Eligibility and age requirement</h2>
            <p className="privacy-text">
              Konek is intended <strong>for users aged 16 and over</strong>.
              By creating an account, every user represents and warrants that they
              are at least 16 years old. Users aged 16 and 17 remain legal minors
              and are protected by the CSAE/CSAM provisions described in this
              policy.
            </p>
            <p className="privacy-text">We rely on the following measures to keep users under 16 off the platform:</p>
            <ul className="privacy-list">
              <li>
                <strong>User attestation:</strong> every user must confirm during
                onboarding that they are at least 16 years old, and accept the terms
                of service which restrict the service to users aged 16 and over.
                Providing an exact date of birth is optional; when a user chooses to
                add one, the app rejects any date that would place the user under 16.
              </li>
              <li>
                <strong>Reactive removal:</strong> any account we identify as
                belonging to a user under 16, whether through a user report,
                automated signal, or third-party notification, is suspended and
                the associated content is removed.
              </li>
              <li>
                <strong>Age-appropriate content:</strong> the application does
                not contain features, advertising, or content directed at children
                under 16. Konek's Play Store and App Store target audience is set
                to users aged 16 and over.
              </li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-h2">4. Prohibited conduct</h2>
            <p className="privacy-text">
              The following are strictly prohibited on Konek and constitute grounds
              for immediate, permanent account termination, content removal, and
              reporting to relevant authorities:
            </p>
            <ul className="privacy-list">
              <li>Posting, sharing, soliciting, requesting, or producing CSAM in any form.</li>
              <li>Using Konek to groom, sexualize, sexually solicit, or sexually extort a minor.</li>
              <li>Using Konek to arrange or facilitate the offline sexual abuse, trafficking, or exploitation of a minor.</li>
              <li>Impersonating a minor for the purpose of any of the above.</li>
              <li>
                Sharing personally identifying information about a minor (name,
                location, school, image) without verifiable parental or
                legal-guardian consent.
              </li>
              <li>
                Creating, joining, or promoting any group, activity, or content
                whose purpose is the sexualization or exploitation of minors.
              </li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-h2">5. Detection and prevention</h2>
            <p className="privacy-text">
              We combine the following measures, scaled to the size of the platform
              and updated as the platform grows:
            </p>
            <ul className="privacy-list">
              <li>
                <strong>User reporting:</strong> every user can report a profile, an
                activity, a comment, a post, or a message directly from the
                application (see Section 6). Reports flagged as child-safety
                concerns are prioritized.
              </li>
              <li>
                <strong>Human review:</strong> child-safety reports are reviewed by
                a trained Konek reviewer.
              </li>
              <li>
                <strong>Automated tooling:</strong> we may employ automated content
                classification tools (such as image and text classifiers) to surface
                potentially harmful uploads for human review. We also evaluate
                industry-standard hash-matching against known CSAM databases as the
                platform grows.
              </li>
              <li>
                <strong>Behavioral signals:</strong> account-creation patterns,
                friending patterns, and reporting velocity are monitored to identify
                accounts that may be predatory; suspicious accounts are escalated
                to our reviewers.
              </li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-h2">6. How to report</h2>
            <p className="privacy-text">
              Konek provides multiple ways to report suspected CSAE, CSAM, or any
              other child-safety concern.
            </p>

            <h3 className="privacy-h3">In-app reporting</h3>
            <p className="privacy-text">
              Every user can report a profile, an activity, a comment, a post, or a
              message directly from the application:
            </p>
            <ul className="privacy-list">
              <li>Open the item or profile you want to report.</li>
              <li>Tap the contextual menu (the three-dot icon).</li>
              <li>Select <strong>Report</strong>.</li>
              <li>
                Choose the reason that best matches the concern. A "Child safety
                (CSAE / CSAM)" category is included.
              </li>
              <li>Submit. You can optionally add free-text details.</li>
            </ul>
            <p className="privacy-text">
              In-app reports are routed to our trust and safety queue and are
              reviewed within 24 hours of receipt for child-safety categories.
            </p>

            <h3 className="privacy-h3">Email</h3>
            <p className="privacy-text">
              For child-safety concerns from non-users (parents, educators,
              authorities), or for concerns that cannot be expressed through the
              in-app flow, please write to:
            </p>
            <div className="privacy-contact">
              <p>
                <strong>safety@konek.social</strong>
              </p>
            </div>
            <p className="privacy-text">
              Please include, where possible: the username, profile URL, or any
              identifier that lets us locate the account or content; the nature of
              the concern; and any supporting context. Do <strong>not</strong> attach
              CSAM to your email; describe what you observed instead, and we will
              investigate from our side.
            </p>

            <h3 className="privacy-h3">Emergencies</h3>
            <p className="privacy-text">
              If you believe a child is in immediate danger, contact your local
              emergency services first (for example, dial 911 in the United States,
              112 in the European Union, or your country's equivalent), and then
              notify us so we can preserve evidence and cooperate with the
              investigation.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-h2">7. How we respond to reports</h2>
            <p className="privacy-text">
              When we receive a child-safety report, in-app or by email, we:
            </p>
            <ul className="privacy-list">
              <li>Acknowledge the report internally and assign it to a trust and safety reviewer.</li>
              <li>Triage within 24 hours for child-safety categories.</li>
              <li>Investigate by reviewing the reported content, the reported account, and any related accounts or activity.</li>
              <li>
                Take action which may include: removing the content; suspending or
                permanently terminating the account; blocking the device or IP from
                creating new accounts; preserving evidence.
              </li>
              <li>Report to authorities as required by applicable law (see Section 8).</li>
              <li>
                Notify the reporter, where appropriate, that action has been taken.
                We do not disclose the identity of reporters to reported users.
              </li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-h2">8. Cooperation with law enforcement</h2>
            <p className="privacy-text">
              Konek cooperates with law enforcement and child-protection authorities
              consistent with applicable law.
            </p>
            <ul className="privacy-list">
              <li>
                <strong>United States:</strong> where Konek qualifies as a "provider"
                within the meaning of 18 U.S.C. § 2258A (as amended by the REPORT
                Act of 2024), we report apparent violations involving CSAM to the
                National Center for Missing and Exploited Children (NCMEC)
                CyberTipline. Where we file a CyberTipline report, we preserve the
                relevant content and metadata for the period required by law.
              </li>
              <li>
                <strong>European Union:</strong> we cooperate with INHOPE-affiliated
                hotlines and with national authorities under the Digital Services
                Act and related legislation specific to CSAM.
              </li>
              <li>
                <strong>Other jurisdictions:</strong> we respond to lawful requests
                from competent authorities and, where local law requires reporting
                of CSAM, we comply with that requirement.
              </li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-h2">9. Compliance with applicable laws</h2>
            <p className="privacy-text">
              Konek complies with applicable child-safety laws in the jurisdictions
              where it operates, including the U.S. REPORT Act of 2024 and 18
              U.S.C. § 2258A (where applicable), the EU GDPR and Digital Services
              Act, the UK Online Safety Act 2023, and any other child-safety
              legislation applicable in markets where Konek is distributed.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-h2">10. Child Safety Point of Contact</h2>
            <p className="privacy-text">
              For child-safety notifications, including notifications from Google
              Play, NCMEC, INHOPE, and other authorities, contact:
            </p>
            <div className="privacy-contact">
              <p>
                <strong>Konek Trust and Safety Team</strong>
              </p>
              <p>Email: safety@konek.social</p>
            </div>
            <p className="privacy-text">
              This contact is monitored during business hours and is empowered to
              discuss Konek's CSAE prevention and review procedures and to take, or
              escalate, action when required.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-h2">11. Updates to this policy</h2>
            <p className="privacy-text">
              We may update this policy from time to time to reflect changes in our
              product, in applicable law, or in industry practice. Material changes
              will be reflected by updating the "Last updated" date at the top of
              this page.
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
