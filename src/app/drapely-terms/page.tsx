import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms and Conditions - Drapely",
  description: "Terms and Conditions for Drapely by Kallio Labs.",
};

export default function DrapelyTermsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="privacy-section">
          <h1>Terms and Conditions for Drapely</h1>
          <p className="last-updated">Last Updated: 14.10.2026</p>

          <div className="privacy-content">
            <p>
              These Terms and Conditions (&quot;Terms&quot;) govern your use of
              the mobile app Drapely (&quot;the App&quot;), developed and
              published by Kallio Labs (&quot;we&quot;, &quot;us&quot;, or
              &quot;our&quot;). By downloading, installing, or using Drapely,
              you agree to these Terms. If you downloaded the App from the App
              Store, Apple&apos;s{" "}
              <a
                href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Standard End User License Agreement
              </a>{" "}
              also applies.
            </p>

            <h2>1. License</h2>
            <p>
              We grant you a personal, non-exclusive, non-transferable, revocable
              license to download and use Drapely on devices you own or
              control, for personal, non-commercial use only. You may not copy,
              modify, distribute, sell, reverse engineer, or create derivative
              works from the App, except as allowed by applicable law.
            </p>

            <h2>2. Eligibility</h2>
            <p>
              You must be at least 13 years old to use Drapely. If you are under
              the age of majority where you live, you may only use the App with
              the permission of a parent or guardian.
            </p>

            <h2>3. Your Account</h2>
            <p>
              You can use Drapely without signing in, or sign in with Apple or
              Google to keep your looks in your account. You are responsible for
              activity on your account. You can delete your account and data at
              any time in the App under Profile.
            </p>

            <h2>4. Free Try-Ons and Subscriptions</h2>
            <ul>
              <li>
                Drapely includes a limited number of free try-ons. After that, a
                subscription is needed to create more try-ons.
              </li>
              <li>
                Subscriptions (Basic, Plus and Premium) are available monthly or
                yearly. Each plan includes a set number of try-ons per month, as
                shown in the App. Each extra angle of a look counts as one
                try-on.
              </li>
              <li>
                Try-on allowances reset every month on the day you subscribed,
                including on yearly plans. Unused try-ons don&apos;t roll over.
              </li>
              <li>
                A daily limit applies to all accounts to keep the service fair
                and prevent abuse.
              </li>
              <li>
                Prices are shown in the App before you confirm a purchase.
                Payment is charged to your Apple Account.
              </li>
              <li>
                Subscriptions renew automatically at the price shown until
                cancelled. You can cancel anytime in Settings → Apple Account →
                Subscriptions, at least 24 hours before the current period ends.
              </li>
              <li>
                We do not store your payment card details. Billing and refunds
                are handled by Apple under Apple&apos;s terms. If you need a
                refund, contact Apple Support. You can restore purchases in the
                App.
              </li>
              <li>
                If a try-on fails or cannot be created, it is not counted
                against your allowance.
              </li>
            </ul>

            <h2>5. Your Photos and Content</h2>
            <p>
              You keep all rights to the photos and other content you add to
              Drapely (&quot;Your Content&quot;). You give us permission to
              store and process Your Content only as needed to provide the App
              to you, for example to create try-ons and save your looks. We do
              not use Your Content for advertising and do not share it publicly.
            </p>
            <p>
              You are responsible for Your Content and confirm that you have the
              right to use it, including any garment images you add.
            </p>

            <h2>6. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>
                Upload photos of another person without their permission, or
                photos of children
              </li>
              <li>Upload nude, sexual, violent or otherwise offensive content</li>
              <li>
                Use try-on images to deceive, harass, impersonate or harm anyone
              </li>
              <li>
                Abuse, overload, or try to get around the limits or security of
                the App or its servers
              </li>
              <li>Use the App for any unlawful purpose</li>
            </ul>

            <h2>7. AI-Generated Images</h2>
            <p>
              Try-on images are created by artificial intelligence and are a
              visual approximation. Colours, materials, details and fit may look
              different from the real garment. Some requests may be refused by
              the AI&apos;s safety filters.
            </p>

            <h2>8. Size Recommendations</h2>
            <p>
              Size recommendations are estimates based on the measurements you
              provide or that we estimate, and on size charts read from product
              pages, which may be incomplete or out of date. Always check the
              retailer&apos;s own size information before buying. We are not
              responsible for purchases you make based on the App, including
              items that don&apos;t fit.
            </p>

            <h2>9. Third-Party Products and Websites</h2>
            <p>
              Drapely may show or open product pages from third-party stores. We
              are not affiliated with these stores or brands, and we are not
              responsible for their products, prices, content or policies.
            </p>

            <h2>10. Intellectual Property</h2>
            <p>
              All rights in Drapely, including software, design, text, and
              trademarks, belong to Kallio Labs or its licensors. Nothing in
              these Terms transfers ownership of any intellectual property to
              you. Brand names and products shown in your content belong to
              their respective owners.
            </p>

            <h2>11. Disclaimer</h2>
            <p>
              The App is provided &quot;as is&quot; and &quot;as available&quot;
              without warranties of any kind, to the fullest extent permitted by
              law. We do not guarantee uninterrupted or error-free operation.
            </p>

            <h2>12. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Kallio Labs shall not be
              liable for any indirect, incidental, special, or consequential
              damages arising from your use of the App, including loss of data
              or purchase decisions made using the App, except where liability
              cannot be excluded under applicable law.
            </p>

            <h2>13. Privacy</h2>
            <p>
              How we handle information related to Drapely is described in our{" "}
              <Link href="/drapely-privacy-policy.html" className="privacy-link">
                Privacy Policy
              </Link>
              .
            </p>

            <h2>14. Changes</h2>
            <p>
              We may update these Terms from time to time. The &quot;Last
              Updated&quot; date at the top of this page will change when we do.
              Continued use of the App after changes means you accept the
              updated Terms.
            </p>

            <h2>15. Termination</h2>
            <p>
              We may suspend or terminate access to the App if you violate these
              Terms. You may stop using the App at any time by deleting your
              account and uninstalling it.
            </p>

            <h2>16. Governing Law</h2>
            <p>
              These Terms are governed by the laws of Finland, without regard to
              conflict-of-law principles. If you are a consumer, you may also
              have mandatory rights under the laws of your country of residence.
            </p>

            <h2>17. Contact</h2>
            <p>
              Questions about these Terms? Contact us at{" "}
              <a href="mailto:contact@kalliolabs.com">contact@kalliolabs.com</a>
              .
            </p>

            <p className="agreement">
              By using Drapely, you agree to these Terms and Conditions.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
