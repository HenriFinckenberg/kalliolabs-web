import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppStoreButton from "@/components/AppStoreButton";

export const metadata: Metadata = {
  title: "Drapely - Kallio Labs",
  description:
    "See it on you before you buy. Try on clothes virtually with AI and find the size that actually fits you.",
};

export default function DrapelyPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="game-section">
          <div className="game-header">
            <div className="game-image">
              <Image
                src="/coverdrapely.png"
                alt="Drapely illustration"
                width={1200}
                height={1200}
                priority
              />
            </div>
            <div className="game-info">
              <h1>Drapely</h1>
              <p className="game-description">
                See it on you before you buy.
              </p>
              <p className="game-description">
                Add a photo of yourself and a photo of any piece of clothing.
                Drapely shows you wearing it and recommends the size that
                actually fits you.
              </p>
              <div className="game-links">
                <AppStoreButton />
              </div>
            </div>
          </div>

          <div className="game-details">
            <h2>About the App</h2>
            <p>
              Drapely is a virtual try-on app for iPhone. Upload a full-body
              photo, add your height and weight, and try on clothes from any
              store. Features:
            </p>
            <ul>
              <li>
                Photorealistic AI try-on for tops, bottoms, dresses, outerwear,
                headwear, footwear and accessories
              </li>
              <li>
                Size advice: paste a product link and Drapely reads the
                brand&apos;s size chart for you
              </li>
              <li>
                See how each size fits your chest, waist, hips and more, from
                fitted to oversized
              </li>
              <li>View your look from the front, side, 45° and back</li>
              <li>Layer items onto a look and try a different size</li>
              <li>Save looks and organise them into boards</li>
              <li>
                Available in English, Spanish, German, Finnish and Vietnamese
              </li>
            </ul>

            <h2>Privacy Policy</h2>
            <p>
              Your photos are private. Read our{" "}
              <Link href="/drapely-privacy-policy.html" className="privacy-link">
                Privacy Policy
              </Link>{" "}
              to understand how we collect and use your data.
            </p>

            <h2>Terms and Conditions</h2>
            <p>
              By using Drapely, you agree to our{" "}
              <Link href="/drapely-terms.html" className="privacy-link">
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
