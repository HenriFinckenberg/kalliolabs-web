import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ParallaxBackground from "@/components/ParallaxBackground";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kallio Labs - Mobile Game Development",
  description: "Independent game developer crafting engaging mobile games.",
  openGraph: {
    title: "Kallio Labs - Mobile Game Development",
    description: "Independent game developer crafting engaging mobile games.",
    url: "https://kalliolabs.com",
    type: "website",
    images: [
      {
        url: "https://kalliolabs.com/Cover.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kallio Labs - Mobile Game Development",
    description: "Independent game developer crafting engaging mobile games.",
    images: ["https://kalliolabs.com/Cover.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <div className="overlay" />
        <ParallaxBackground />
        {children}
      </body>
    </html>
  );
}
