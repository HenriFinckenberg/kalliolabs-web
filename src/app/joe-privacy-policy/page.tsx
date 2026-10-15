import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy - Joe!",
  description: "Privacy Policy for Joe! by Kallio Labs.",
};

export default function JoePrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="privacy-section">
          <h1>Privacy Policy for Joe!</h1>
          <p className="last-updated">Last Updated: 15.10.2026</p>

          <div className="privacy-content">
            <p>
              Welcome to Joe! Your privacy is important to us. This Privacy
              Policy explains what data we collect and how we use it.
            </p>

            <h2>1. Information We Collect</h2>
            <ul>
              <li>
                <strong>Game Progress:</strong> Your game progress is stored
                locally on your device. We do not collect or store this data on
                our servers.
              </li>
              <li>
                <strong>In-App Purchases:</strong> Purchases are processed by
                Apple on iPhone and by Google Play on Android. We do not receive
                or store your payment card details. Apple or Google may share
                limited purchase information with us (such as product
                identifiers and transaction status) so we can unlock the content
                you bought.
              </li>
              <li>
                <strong>Game Center and Google Play Games:</strong> If you use
                Apple Game Center on iPhone or Google Play Games on Android,
                Apple or Google may collect and manage your player profile,
                leaderboard scores and achievements.
              </li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <ul>
              <li>To save your game progress locally on your device.</li>
              <li>
                To unlock and restore in-app purchases you have made through the
                App Store or Google Play.
              </li>
              <li>
                To track leaderboard scores and achievements through Apple Game
                Center or Google Play Games.
              </li>
            </ul>

            <h2>3. Advertising</h2>
            <p>
              Joe! does not display ads and does not use advertising SDKs such as
              AdMob.
            </p>

            <h2>4. Third-Party Services</h2>
            <p>
              We use the following third-party services, which may collect data
              according to their own privacy policies:
            </p>
            <ul>
              <li>
                Apple App Store / In-App Purchases –{" "}
                <a
                  href="https://www.apple.com/legal/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apple Privacy Policy
                </a>
              </li>
              <li>
                Apple Game Center (Leaderboards &amp; Achievements) –{" "}
                <a
                  href="https://www.apple.com/legal/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apple Privacy Policy
                </a>
              </li>
              <li>
                Google Play Store / Google Play Billing (Android) –{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Privacy Policy
                </a>
              </li>
              <li>
                Google Play Games Services (Leaderboards &amp; Achievements on
                Android) –{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Privacy Policy
                </a>
              </li>
            </ul>

            <h2>5. Your Choices</h2>
            <ul>
              <li>
                You can manage Game Center settings in your Apple account, and
                Google Play Games settings in the Google Play Games app or your
                Google account.
              </li>
              <li>
                You can view your purchase history through your Apple ID
                settings on iPhone or your Google Play account on Android.
              </li>
              <li>
                Deleting the game will remove all locally stored progress.
                Purchases remain tied to your Apple ID or Google account and can
                be restored if you reinstall the game.
              </li>
            </ul>

            <h2>6. Children&apos;s Privacy</h2>
            <p>
              We do not knowingly collect personal information from children. If
              you believe a child has provided us with personal information,
              please contact us and we will take appropriate steps.
            </p>

            <h2>7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact
              us at{" "}
              <a href="mailto:contact@kalliolabs.com">contact@kalliolabs.com</a>
              .
            </p>

            <p className="agreement">
              By playing Joe!, you agree to this Privacy Policy.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
