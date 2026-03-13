import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "stealth.blr1.digitaloceanspaces.com",
      },
    ],
  },
  async rewrites() {
    const rybbitHost = process.env.NEXT_PUBLIC_RYBBIT_HOST;
    if (!rybbitHost) return [];

    return [
      {
        source: "/api/script.js",
        destination: `${rybbitHost}/api/script.js`,
      },
      {
        source: "/api/track",
        destination: `${rybbitHost}/api/track`,
      },
    ];
  },
};

export default nextConfig;
