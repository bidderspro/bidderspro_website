import type { NextConfig } from "next";
import withBundleAnalyzer from '@next/bundle-analyzer';

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  exportTrailingSlash: true,
  // Always export as static
  output: 'export',
   trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
    formats: ['image/webp', 'image/avif'] as const,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        pathname: '**',
      },
    ],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Performance optimizations for static export
  experimental: {
    optimizeCss: true,
  },
};

export default bundleAnalyzer(nextConfig);
