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
  // Conditional output based on BUILD_MODE
  output: isStaticExport ? 'export' : undefined,
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
  // Cache-Control headers for static assets (only applies to server mode)
  // Headers don't work with output: 'export' - use NGINX config for static exports
  ...(!isStaticExport && {
    async headers() {
      return [
        // Cache static assets aggressively
        {
          source: '/assets/:path*',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable', // 1 year
            },
          ],
        },
        // Cache images with longer duration
        {
          source: '/:path*\\.(jpg|jpeg|png|gif|ico|svg|webp|avif)',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=2592000, stale-while-revalidate=86400', // 30 days, revalidate after 1 day
            },
          ],
        },
        // Cache CSS and JS files
        {
          source: '/_next/static/:path*',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable', // 1 year for Next.js static assets
            },
          ],
        },
        // Cache fonts
        {
          source: '/:path*\\.(woff|woff2|ttf|otf|eot)',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable', // 1 year
            },
          ],
        },
        // Cache manifest and other PWA files
        {
          source: '/:path*\\.(json|xml|txt)',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=86400', // 1 day
            },
          ],
        },
        // Cache HTML pages with shorter duration and revalidation
        {
          source: '/:path*',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=3600, stale-while-revalidate=86400', // 1 hour, revalidate after 1 day
            },
          ],
        },
      ];
    },
  }),
};

export default bundleAnalyzer(nextConfig);
