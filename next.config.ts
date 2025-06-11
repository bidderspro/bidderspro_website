import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true,
  },
  // Optimize bundling
  swcMinify: true, 
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Enable modern bundling
  experimental: {
    optimizeCss: true,
    webVitalsAttribution: ['CLS', 'LCP', 'FCP', 'FID', 'INP'],
  },
};

export default nextConfig;
