import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "One More Pho - Kallio Labs",
  description:
    "Make the biggest pho-soup in the world! Stack endless layers of noodles with super fun noodle physics.",
};

export default function OneMorePhoPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="game-section">
          <div className="game-header">
            <div className="game-image">
              <video autoPlay loop muted playsInline>
                <source src="/onemorephovideo.mov" type="video/quicktime" />
              </video>
            </div>
            <div className="game-info">
              <h1>One More Pho</h1>
              <p className="game-description">
                Make the biggest pho-soup in the world! Stack endless layers of
                noodles with super fun noodle physics and challenge yourself to
                create the tallest, most delicious pho ever. Compete for the
                highest score, unlock unique chopsticks and bowls, and rise
                through the leaderboards!
              </p>
              <div className="game-links">
                <a
                  href="https://apps.apple.com/fi/app/one-more-pho/id6744386660"
                  className="app-store-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download on App Store
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.kalliolabs.onemorepho"
                  className="play-store-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download on Play Store
                </a>
              </div>
            </div>
          </div>

          <div className="game-details">
            <h2>About the Game</h2>
            <p>
              One More Pho is a fun and addictive stacking game where you create
              the ultimate pho soup by throwing noodles in the bowl. The game
              features:
            </p>
            <ul>
              <li>Superfun noodle physics</li>
              <li>Easy to learn, hard to master</li>
              <li>Unlock unique chopsticks and bowls</li>
              <li>Global leaderboards</li>
            </ul>

            <h2>Privacy Policy</h2>
            <p>
              Your privacy is important to us. Read our{" "}
              <Link href="/privacy-policy.html" className="privacy-link">
                Privacy Policy
              </Link>{" "}
              to understand how we collect and use your data.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
