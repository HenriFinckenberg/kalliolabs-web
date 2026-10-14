import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Keep App Store / legacy URLs working
      { source: "/privacy-policy.html", destination: "/privacy-policy" },
      { source: "/joe-privacy-policy.html", destination: "/joe-privacy-policy" },
      { source: "/joe-terms.html", destination: "/joe-terms" },
      { source: "/onemorepho.html", destination: "/onemorepho" },
      { source: "/joe.html", destination: "/joe" },
      { source: "/matchstick.html", destination: "/matchstick" },
      { source: "/drapely.html", destination: "/drapely" },
      { source: "/drapely-privacy-policy.html", destination: "/drapely-privacy-policy" },
      { source: "/drapely-terms.html", destination: "/drapely-terms" },
      { source: "/index.html", destination: "/" },
    ];
  },
};

export default nextConfig;
