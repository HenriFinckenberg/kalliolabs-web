import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ScrollEffects from "@/components/ScrollEffects";
import ScrollIndicator from "@/components/ScrollIndicator";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kallio Labs - Mobile Games & Apps",
  description: "Independent studio crafting engaging mobile games and apps.",
  openGraph: {
    title: "Kallio Labs - Mobile Games & Apps",
    description: "Independent studio crafting engaging mobile games and apps.",
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
    title: "Kallio Labs - Mobile Games & Apps",
    description: "Independent studio crafting engaging mobile games and apps.",
    images: ["https://kalliolabs.com/Cover.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth">
      <body>
        <div className="overlay" />
        <ScrollEffects />
        <ScrollIndicator />
        {children}
      </body>
    </html>
  );
}
