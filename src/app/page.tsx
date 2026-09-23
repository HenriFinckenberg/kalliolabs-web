import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppStoreButton from "@/components/AppStoreButton";

export default function HomePage() {
  return (
    <>
      <Navbar homeAnchors />
      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Crafting satisfying.</h1>
            <p className="subtitle">
              Independent game developer creating addictive mobile games
            </p>
          </div>
        </section>

        <section id="work" className="work-section">
          <h2>Projects</h2>
          <div className="project-grid">
            <div className="project-card">
              <Link href="/onemorepho" className="project-link">
                <div
                  className="project-image"
                  style={{
                    backgroundImage: "url('/Onemorepho.png')",
                    backgroundSize: "cover",
                  }}
                />
                <h3>One More Pho</h3>
                <p>
                  Make the biggest pho-soup in the world! Stack endless layers
                  of noodles with super fun noodle physics and challenge
                  yourself to create the tallest, most delicious pho ever.
                </p>
              </Link>
              <div className="store-buttons">
                <AppStoreButton href="https://apps.apple.com/fi/app/one-more-pho/id6744386660" />
              </div>
            </div>
            <div className="project-card">
              <Link href="/joe" className="project-link">
                <div
                  className="project-image"
                  style={{
                    backgroundImage: "url('/coverjoe.png')",
                    backgroundSize: "cover",
                  }}
                />
                <h3>Joe!</h3>
                <p>
                  Meet Joe. He&apos;s on a mission to become as smart as
                  possible. Collect brain cells, discover new skills, and merge
                  everything you collect into Joe&apos;s head to increase his
                  IQ.
                </p>
              </Link>
              <div className="store-buttons">
                <AppStoreButton href="https://apps.apple.com/app/id6814485401" />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about-section">
          <h2>About</h2>
          <div className="about-content">
            <div className="about-image">
              <Image
                src="/mystery.jpg"
                alt="Henri - Game Developer"
                width={500}
                height={500}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="about-text">
              <p>
                Hi, I&apos;m Henri, a solo game developer creating mobile games,
                based in Helsinki, Finland. I&apos;m passionate about making
                fun, simple, but addictive games for mobile players.
              </p>
              <p>
                I handle everything from game design to coding, and I put my
                heart into every project. My goal is to make games that are
                enjoyable and engaging.
              </p>
              <p>
                Thanks for checking out my work! Stay tuned for more games
                coming soon!
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <h2>Get in Touch</h2>
          <p>
            Have a question? Report a bug? Give feedback, ideas? Reach out, and
            I&apos;ll get back to you as soon as I can.
          </p>
          <a href="mailto:contact@kalliolabs.com" className="contact-button">
            Contact Me
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
