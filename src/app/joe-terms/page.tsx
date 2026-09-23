import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms and Conditions - Joe!",
  description: "Terms and Conditions for Joe! by Kallio Labs.",
};

export default function JoeTermsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="privacy-section">
          <h1>Terms and Conditions for Joe!</h1>
          <p className="last-updated">Last Updated: 23.09.2026</p>

          <div className="privacy-content">
            <p>
              These Terms and Conditions (&quot;Terms&quot;) govern your use of
              the mobile game Joe! (&quot;the Game&quot;), developed and
              published by Kallio Labs (&quot;we&quot;, &quot;us&quot;, or
              &quot;our&quot;). By downloading, installing, or playing Joe!,
              you agree to these Terms.
            </p>

            <h2>1. License</h2>
            <p>
              We grant you a personal, non-exclusive, non-transferable, revocable
              license to download and play Joe! on devices you own or control,
              for personal, non-commercial entertainment only. You may not copy,
              modify, distribute, sell, reverse engineer, or create derivative
              works from the Game, except as allowed by applicable law.
            </p>

            <h2>2. In-App Purchases</h2>
            <ul>
              <li>
                Joe! may offer optional in-app purchases. Purchases are
                processed by Apple through your Apple ID.
              </li>
              <li>
                Prices are shown in the App Store before you confirm a purchase.
                Payment is charged to your Apple ID account.
              </li>
              <li>
                We do not store your payment card details. Payment handling,
                billing, and refunds are managed by Apple under Apple&apos;s
                terms.
              </li>
              <li>
                If you need a refund, contact Apple Support. Restoring purchases
                is available in the Game where applicable.
              </li>
            </ul>

            <h2>3. Game Center</h2>
            <p>
              Joe! may use Apple Game Center for leaderboards and achievements.
              Use of Game Center is optional and subject to Apple&apos;s terms
              and privacy policy. We are not responsible for Game Center
              availability or for how Apple processes related data.
            </p>

            <h2>4. Game Progress</h2>
            <p>
              Progress is stored locally on your device. Uninstalling the Game,
              clearing app data, or switching devices may result in loss of
              progress. Purchases tied to your Apple ID can usually be restored
              after reinstalling.
            </p>

            <h2>5. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Cheat, hack, exploit bugs, or use unauthorized third-party
                tools to gain an unfair advantage</li>
              <li>Interfere with leaderboards, achievements, or other players&apos;
                experience</li>
              <li>Use the Game for any unlawful purpose</li>
            </ul>

            <h2>6. Intellectual Property</h2>
            <p>
              All rights in Joe!, including software, art, audio, text, and
              trademarks, belong to Kallio Labs or its licensors. Nothing in
              these Terms transfers ownership of any intellectual property to
              you.
            </p>

            <h2>7. Disclaimer</h2>
            <p>
              The Game is provided &quot;as is&quot; and &quot;as available&quot;
              without warranties of any kind, to the fullest extent permitted by
              law. We do not guarantee uninterrupted or error-free operation.
            </p>

            <h2>8. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Kallio Labs shall not be
              liable for any indirect, incidental, special, or consequential
              damages arising from your use of the Game, including loss of
              progress, data, or purchases, except where liability cannot be
              excluded under applicable law.
            </p>

            <h2>9. Privacy</h2>
            <p>
              How we handle information related to Joe! is described in our{" "}
              <Link href="/joe-privacy-policy.html" className="privacy-link">
                Privacy Policy
              </Link>
              .
            </p>

            <h2>10. Changes</h2>
            <p>
              We may update these Terms from time to time. The &quot;Last
              Updated&quot; date at the top of this page will change when we do.
              Continued use of the Game after changes means you accept the
              updated Terms.
            </p>

            <h2>11. Termination</h2>
            <p>
              We may suspend or terminate access to the Game if you violate these
              Terms. You may stop using the Game at any time by uninstalling it.
            </p>

            <h2>12. Governing Law</h2>
            <p>
              These Terms are governed by the laws of Finland, without regard to
              conflict-of-law principles. If you are a consumer, you may also
              have mandatory rights under the laws of your country of residence.
            </p>

            <h2>13. Contact</h2>
            <p>
              Questions about these Terms? Contact us at{" "}
              <a href="mailto:contact@kalliolabs.com">contact@kalliolabs.com</a>
              .
            </p>

            <p className="agreement">
              By playing Joe!, you agree to these Terms and Conditions.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
