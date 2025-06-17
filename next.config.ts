import type { NextConfig } from "next";
import withBundleAnalyzer from '@next/bundle-analyzer';

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  generateEtags: true,

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

  // Minify HTML and optimize JavaScript
  swcMinify: true,

  // Experimental features
  experimental: {
    optimizeCss: true,
    webVitalsAttribution: ['CLS', 'LCP', 'FCP', 'FID', 'INP'],
    serverMinification: true,
  },
};

export default bundleAnalyzer(nextConfig);
