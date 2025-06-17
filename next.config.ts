import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
  compress: true,

  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'], // Serve next-gen formats
    unoptimized: false, // Enable built-in optimization unless using a custom image host
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        pathname: '**',
      },
    ],
  },

  // Optimize JavaScript and remove console.logs in production
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Experimental features
  experimental: {
    optimizeCss: true,
    webVitalsAttribution: ['CLS', 'LCP', 'FCP', 'FID', 'INP'],
  },
};

export default nextConfig;
