import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BrowserPlayButton from "@/components/BrowserPlayButton";

export const metadata: Metadata = {
  title: "Matchstick.Club - Kallio Labs",
  description:
    "A tiny web game: strike a match and keep it burning for as long as you can.",
};

export default function MatchstickPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="game-section">
          <div className="game-header">
            <div className="game-image">
              <video autoPlay loop muted playsInline>
                <source src="/matchstickvid.mov" type="video/quicktime" />
              </video>
            </div>
            <div className="game-info">
              <h1>Matchstick.Club</h1>
              <p className="game-description">
                A tiny web game: strike a match and keep it burning for as long
                as you can.
              </p>
              <div className="game-links">
                <BrowserPlayButton href="https://matchstick.club" />
              </div>
            </div>
          </div>

          <div className="game-details">
            <h2>About the Game</h2>
            <p>
              Matchstick.Club is a simple, satisfying browser game. Light a
              match, protect the flame, and see how long you can keep it alive.
            </p>
            <ul>
              <li>Play instantly in your browser — no download</li>
              <li>Easy to learn, hard to master</li>
              <li>Quick sessions with satisfying timing</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
