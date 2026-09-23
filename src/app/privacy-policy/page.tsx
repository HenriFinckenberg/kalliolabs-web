import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy - One More Pho",
  description: "Privacy Policy for One More Pho by Kallio Labs.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="privacy-section">
          <h1>Privacy Policy for One More Pho</h1>
          <p className="last-updated">Last Updated: 01.04.2025</p>

          <div className="privacy-content">
            <p>
              Welcome to One More Pho! Your privacy is important to us. This
              Privacy Policy explains what data we collect and how we use it.
            </p>

            <h2>1. Information We Collect</h2>
            <ul>
              <li>
                <strong>Ad Data:</strong> We use Google AdMob to display banner
                and interstitial ads. AdMob may collect device and usage data to
                serve relevant ads.
              </li>
              <li>
                <strong>Game Progress:</strong> Your game progress is stored
                locally on your device in a JSON file. We do not collect or store
                this data on our servers.
              </li>
              <li>
                <strong>Game Center:</strong> If you choose to sign in to Apple
                Game Center, Apple may collect and manage your leaderboard
                scores.
              </li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <ul>
              <li>To display ads that help support our game.</li>
              <li>To track leaderboard scores through Apple Game Center.</li>
              <li>To save your game progress locally on your device.</li>
            </ul>

            <h2>3. Third-Party Services</h2>
            <p>
              We use the following third-party services, which may collect data
              according to their own privacy policies:
            </p>
            <ul>
              <li>
                Google AdMob (Ads) –{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AdMob Privacy Policy
                </a>
              </li>
              <li>
                Apple Game Center (Leaderboards) –{" "}
                <a
                  href="https://www.apple.com/legal/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apple Privacy Policy
                </a>
              </li>
            </ul>

            <h2>4. Your Choices</h2>
            <ul>
              <li>
                You can disable personalized ads through your device settings.
              </li>
              <li>You can manage Game Center settings in your Apple account.</li>
              <li>Deleting the game will remove all locally stored progress.</li>
            </ul>

            <h2>5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact
              us at{" "}
              <a href="mailto:contact@kalliolabs.com">contact@kalliolabs.com</a>
              .
            </p>

            <p className="agreement">
              By playing One More Pho, you agree to this Privacy Policy.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
