import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy - Drapely",
  description: "Privacy Policy for Drapely by Kallio Labs.",
};

export default function DrapelyPrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="privacy-section">
          <h1>Privacy Policy for Drapely</h1>
          <p className="last-updated">Last Updated: 14.10.2026</p>

          <div className="privacy-content">
            <p>
              Welcome to Drapely. Your privacy is important to us. This Privacy
              Policy explains what data Drapely collects, how we use it, who we
              share it with, and the choices you have. Drapely is developed by
              Kallio Labs, based in Helsinki, Finland, which is responsible for
              your personal data.
            </p>

            <h2>1. Information We Collect</h2>
            <ul>
              <li>
                <strong>Photos of You:</strong> The full-body photo you add for
                try-ons, plus any optional side, 45° or back photos.
              </li>
              <li>
                <strong>Clothing Photos and Try-On Results:</strong> The garment
                photos you add and the try-on images Drapely creates.
              </li>
              <li>
                <strong>Body Information:</strong> Your height and weight, any
                body measurements you enter (such as chest, waist, hips or
                inseam), your fit preference, size chart category and preferred
                units. Weight is only used to estimate measurements you
                don&apos;t add and is never shown to anyone.
              </li>
              <li>
                <strong>Product Information:</strong> Product links and titles
                you add, and the names of your looks and boards.
              </li>
              <li>
                <strong>Account Information:</strong> If you sign in with Apple
                or Google, we receive your name and the email address the
                provider shares with us. If you use Drapely without signing in,
                we create an anonymous account identifier.
              </li>
              <li>
                <strong>Purchases:</strong> Subscriptions are processed by
                Apple. We do not receive your payment card details. We receive
                transaction information (such as product, status and renewal
                dates) to unlock your plan and track your monthly try-ons.
              </li>
              <li>
                <strong>Device Check:</strong> We use Apple DeviceCheck to keep
                track of whether free try-ons have been used on a device. This
                does not identify you.
              </li>
              <li>
                <strong>Technical Logs:</strong> Our servers keep limited logs,
                such as your account identifier, product links and error
                details, to run the service and fix problems.
              </li>
            </ul>
            <p>
              Before any photo leaves your device, Drapely resizes it and
              removes its metadata, including location. We do not collect your
              location.
            </p>

            <h2>2. How We Use Your Information</h2>
            <ul>
              <li>To create virtual try-on images of you wearing clothes.</li>
              <li>
                To read size charts from product pages and recommend a size
                based on your measurements.
              </li>
              <li>To save and sync your looks, boards and profile.</li>
              <li>
                To manage your subscription, free try-ons and monthly
                allowance.
              </li>
              <li>To keep the service secure and prevent abuse.</li>
            </ul>
            <p>
              Your photos are only used to create your try-ons. We do not use
              them for advertising, we do not sell your data, and we never post
              anything on your behalf.
            </p>

            <h2>3. AI Processing</h2>
            <p>
              Try-on images are created with Google&apos;s Gemini AI. When you
              start a try-on, your photo and the garment photo are sent to
              Google with the request, and the result is sent back to the app.
              We also send garment photos to Gemini to recognise the type of
              clothing, and product links to Gemini to read size charts. Our
              servers do not keep a separate copy of these requests; your
              photos and results are stored only in your own account, as
              described below.
            </p>

            <h2>4. Where Your Data Is Stored</h2>
            <p>
              Your data is stored on your device and in your Drapely account,
              which runs on Google Firebase. Our database and server functions
              are hosted in the European Union. Only you can access the photos,
              measurements and looks in your account.
            </p>
            <p>
              This also applies if you use Drapely without signing in: your
              data is saved to an anonymous account so the app can work and
              keep your looks safe. Signing out removes your data from the
              phone, but it stays in your account until you delete it.
            </p>

            <h2>5. Advertising and Tracking</h2>
            <p>
              Drapely does not display ads, does not use analytics or
              advertising SDKs, and does not track you across other apps or
              websites.
            </p>

            <h2>6. Third-Party Services</h2>
            <p>
              We use the following third-party services, which process data on
              our behalf or according to their own privacy policies:
            </p>
            <ul>
              <li>
                Google Firebase (accounts, database, storage and servers) –{" "}
                <a
                  href="https://firebase.google.com/support/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Firebase Privacy
                </a>
              </li>
              <li>
                Google Gemini API (AI try-ons and size charts) –{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Privacy Policy
                </a>
              </li>
              <li>
                Google Sign-In (optional) –{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Privacy Policy
                </a>
              </li>
              <li>
                Apple Sign in with Apple, App Store / In-App Purchases and
                DeviceCheck –{" "}
                <a
                  href="https://www.apple.com/legal/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apple Privacy Policy
                </a>
              </li>
            </ul>

            <h2>7. How Long We Keep Your Data</h2>
            <ul>
              <li>
                We keep your photos, measurements and looks until you delete
                them or delete your account.
              </li>
              <li>
                Accounts that were never signed in with Apple or Google, have
                been inactive for 60 days and have no active subscription are
                deleted automatically, together with their data.
              </li>
              <li>
                Size charts read from product pages are cached for up to 7 days.
                They contain no personal data.
              </li>
              <li>
                We keep anonymous try-on counts for subscriptions, which contain
                no personal data, after an account is deleted.
              </li>
            </ul>

            <h2>8. Your Choices and Rights</h2>
            <ul>
              <li>
                You can delete individual looks at any time. This removes them
                from your device and your account.
              </li>
              <li>
                You can delete your account and all your data in the app under
                Profile → Delete account and data. Your photos, measurements and
                looks are permanently deleted.
              </li>
              <li>
                You can manage or cancel subscriptions through your Apple
                Account settings.
              </li>
              <li>
                Depending on where you live, you may have the right to access,
                correct, delete or export your personal data, to object to or
                restrict its processing, and to lodge a complaint with a data
                protection authority. In Finland, this is the Data Protection
                Ombudsman. To make a request, contact us using the details
                below.
              </li>
            </ul>
            <p>
              We process your data to provide the service you asked for, to
              meet legal obligations, and for our legitimate interest in
              keeping Drapely secure.
            </p>

            <h2>9. Children&apos;s Privacy</h2>
            <p>
              Drapely is not intended for children under 13. We do not
              knowingly collect personal information from children. If you
              believe a child has provided us with personal information, please
              contact us and we will delete it.
            </p>

            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The
              &quot;Last Updated&quot; date at the top of this page will change
              when we do.
            </p>

            <h2>11. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact
              us at{" "}
              <a href="mailto:contact@kalliolabs.com">contact@kalliolabs.com</a>
              .
            </p>

            <p className="agreement">
              By using Drapely, you agree to this Privacy Policy.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
