import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Explicitly set the workspace root to prevent Next.js from inferring the wrong root
  // This fixes the "multiple lockfiles" warning and ensures correct build paths
  outputFileTracingRoot: path.join(__dirname),
  
  async headers() {
    return [
      {
        source: "/assets/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
