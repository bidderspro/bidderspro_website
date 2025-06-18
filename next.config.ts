import type { NextConfig } from "next";
import withBundleAnalyzer from '@next/bundle-analyzer';

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

// Dual mode: server or static export
const isStaticExport = process.env.BUILD_MODE === 'export';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  exportTrailingSlash: true,
  // Conditional output based on BUILD_MODE
  output: isStaticExport ? 'export' : 'standalone',
  trailingSlash: true,
  images: {
    unoptimized: isStaticExport, // Only unoptimized for static export
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
  // Performance optimizations
  experimental: {
    optimizeCss: true,
    ...(isStaticExport ? {} : {
      optimizeServerReact: true,
      serverMinification: true,
    }),
  },
};

export default bundleAnalyzer(nextConfig);
