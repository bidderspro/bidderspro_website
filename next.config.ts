import type { NextConfig } from "next";
import withBundleAnalyzer from '@next/bundle-analyzer';

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

// Determine output mode based on environment variable
const isStaticExport = process.env.BUILD_MODE === 'export';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  // Conditional output - 'export' creates 'out' folder, 'standalone' creates '.next' folder
  output: isStaticExport ? 'export' : 'standalone',
  images: {
    formats: ['image/webp', 'image/avif'] as const,
    // Disable image optimization for static export
    unoptimized: isStaticExport,
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
    optimizeServerReact: true,
    serverMinification: true,
    turbo: {
      rules: {
        "*.svg": ["@svgr/webpack"],
      },
    },
  },
  // Webpack optimizations
  webpack: (config, { isServer }) => {
    // Optimize bundle splitting
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
          framerMotion: {
            test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
            name: 'framer-motion',
            chunks: 'all',
          },
          lucideReact: {
            test: /[\\/]node_modules[\\/]lucide-react[\\/]/,
            name: 'lucide-react',
            chunks: 'all',
          },
        },
      },
    };
    
    return config;
  },
  trailingSlash: false,
};

export default bundleAnalyzer(nextConfig);
