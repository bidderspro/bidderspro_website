import type { NextConfig } from 'next';
import withBundleAnalyzer from '@next/bundle-analyzer';

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const isStaticExport = process.env.BUILD_MODE === 'export';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  trailingSlash: true,

  // Environment variables for production detection
  env: {
    SHOW_COMING_SOON: process.env.NODE_ENV === 'production' ? 'true' : 'false',
    BUILD_ENVIRONMENT: process.env.NODE_ENV || 'development',
  },

  // Conditional output for static export
  output: isStaticExport ? 'export' : undefined,

  images: {
    // Enable unoptimized images only for static export mode
    unoptimized: isStaticExport,
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
        pathname: '**',
      },
    ],
  },

  compiler: {
    // Remove console logs in production builds
    removeConsole: process.env.NODE_ENV === 'production',
  },

  experimental: {
    // Enable CSS minification
    optimizeCss: true,
    // Modern optimizations
    optimizePackageImports: ['framer-motion', '@tabler/icons-react', 'lucide-react'],
  },

  webpack: (config, { isServer, dev }) => {
    // Enable module concatenation (scope hoisting) for better JS performance
    if (!isServer && config.optimization) {
      config.optimization.concatenateModules = true;
      
      // Disable usedExports to avoid conflict with cacheUnaffected
      // This fixes the error: "optimization.usedExports can't be used with cacheUnaffected"
      config.optimization.usedExports = false;
      
      // Remove comments from output
      if (config.optimization.minimizer) {
        const terserOptions = {
          terserOptions: {
            compress: {
              drop_console: true,
              passes: 2, // Additional optimization passes
            },
            output: {
              comments: false,
            },
            mangle: true,
          },
        };
        
        config.optimization.minimizer.forEach((minimizer: any) => {
          if (minimizer.constructor && minimizer.constructor.name === 'TerserPlugin') {
            Object.assign(minimizer.options, terserOptions);
          }
        });
      }
    }

    return config;
  },

  // Headers for server mode only (not supported with `output: 'export'`)
  ...(!isStaticExport && {
    async headers() {
      return [
        {
          source: '/assets/:path*',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        },
        {
          source: '/:path*\\.(jpg|jpeg|png|gif|ico|svg|webp|avif)',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=2592000, stale-while-revalidate=86400',
            },
          ],
        },
        {
          source: '/_next/static/:path*',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        },
        {
          source: '/:path*\\.(woff|woff2|ttf|otf|eot)',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        },
        {
          source: '/:path*\\.(js|css)',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        },
        {
          source: '/:path*\\.(json|xml|txt)',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=86400',
            },
          ],
        },
        {
          source: '/:path*',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=3600, stale-while-revalidate=86400',
            },
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff',
            },
            {
              key: 'X-Frame-Options',
              value: 'DENY',
            },
            {
              key: 'X-XSS-Protection',
              value: '1; mode=block',
            },
          ],
        },
      ];
    },
  }),
};

export default bundleAnalyzer(nextConfig);
