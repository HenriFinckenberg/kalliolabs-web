import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Joe! - Kallio Labs",
  description:
    "Meet Joe. He's on a mission to become as smart as possible. Collect brain cells, discover new skills, and merge everything into Joe's head to increase his IQ.",
};

export default function JoePage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="game-section">
          <div className="game-header">
            <div className="game-image">
              <video autoPlay loop muted playsInline>
                <source src="/joescreenrec.mov" type="video/quicktime" />
              </video>
            </div>
            <div className="game-info">
              <h1>Joe!</h1>
              <p className="game-description">
                Meet Joe. He&apos;s on a mission to become as smart as possible.
              </p>
              <p className="game-description">
                Collect brain cells, discover new skills, and merge everything
                you collect into Joe&apos;s head to increase his IQ. The smarter
                you get, the harder it becomes to stop.
              </p>
              <div className="game-links">
                <a
                  href="https://apps.apple.com/app/id6814485401"
                  className="app-store-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download on App Store
                </a>
              </div>
            </div>
          </div>

          <div className="game-details">
            <h2>About the Game</h2>
            <p>
              Joe! is an addictive merge-and-grow game where you feed Joe brain
              cells and skills to push his IQ higher and higher. Features:
            </p>
            <ul>
              <li>Collect brain cells and discover new skills</li>
              <li>Merge everything into Joe&apos;s head to raise his IQ</li>
              <li>Easy to pick up, hard to put down</li>
              <li>The smarter you get, the harder it becomes to stop</li>
            </ul>

            <h2>Privacy Policy</h2>
            <p>
              Your privacy is important to us. Read our{" "}
              <Link href="/joe-privacy-policy.html" className="privacy-link">
                Privacy Policy
              </Link>{" "}
              to understand how we collect and use your data.
            </p>

            <h2>Terms and Conditions</h2>
            <p>
              By playing Joe!, you agree to our{" "}
              <Link href="/joe-terms.html" className="privacy-link">
                Terms and Conditions
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
