import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Keep App Store / legacy URLs working
      { source: "/privacy-policy.html", destination: "/privacy-policy" },
      { source: "/onemorepho.html", destination: "/onemorepho" },
      { source: "/joe.html", destination: "/joe" },
      { source: "/index.html", destination: "/" },
    ];
  },
};

export default nextConfig;
