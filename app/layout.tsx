import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { lazy, Suspense } from "react";
import ConditionalLayout from "../components/ConditionalLayout";

// Dynamically import Background component with lower priority
const Background = lazy(() => import("@/components/ui/Background2"));

// Optimize font loading
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Bidders Pro",
  description: "Professional Upwork Automation Services - Transform Your Freelancing Success",
  keywords: "upwork automation, freelancing, proposal automation, bidding bot",
  icons: {
    icon: [
      { url: '/BP.ico', type: 'image/x-icon' }
    ],
    apple: [
      { url: '/BP.ico' }
    ]
  },
  // Add cache control headers
  other: {
    'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    'X-UA-Compatible': 'IE=edge',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
  }
};

// Server-side production check for initial render
const isProductionBuild = process.env.NODE_ENV === 'production' || process.env.SHOW_COMING_SOON === 'true';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning={true}>
      <head>
        <link rel="icon" href="/BP.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/BP.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Add meta tags to improve bfcache */}
        <meta httpEquiv="Cache-Control" content="public, max-age=3600, stale-while-revalidate=86400" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="theme-color" content="#000000" />
        {/* Preload critical assets */}
        <link
          rel="preload"
          href="/fonts/geist-sans-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Prevent flash of content in production */}
        {isProductionBuild && (
          <style dangerouslySetInnerHTML={{
            __html: `
              body { 
                background: #000 !important; 
                visibility: hidden;
              }
              .production-ready body {
                visibility: visible;
              }
            `
          }} />
        )}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-white min-h-screen w-full overflow-x-hidden ${isProductionBuild ? 'production-ready' : ''}`}
        suppressHydrationWarning={true}
      >
        {/* Load background with lower priority */}
        <Suspense fallback={<div className="fixed inset-0 bg-black" />}>
          <Background />
        </Suspense>
        
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
        
        {/* Simplified script for better performance */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Enable back/forward cache
              window.addEventListener('pageshow', function(event) {
                if (event.persisted) {
                  // Page was restored from back/forward cache
                  window.location.reload();
                }
              });
              
              // Improved scroll restoration
              if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual';
              }
              
              // Reset scroll position on page load for non-hash URLs
              if (!window.location.hash) {
                window.scrollTo(0, 0);
              }

              // Production mode: Show content when ConditionalLayout is ready
              ${isProductionBuild ? `
                window.addEventListener('DOMContentLoaded', function() {
                  setTimeout(function() {
                    document.body.style.visibility = 'visible';
                  }, 100);
                });
              ` : ''}
            `
          }}
        />
      </body>
    </html>
  );
}
