import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import dynamicImport from "next/dynamic";
import Background from "@/components/ui/Background2";

// Dynamically import components that aren't needed for initial render
const Header = dynamicImport(() => import("@/sections/Header"), {
  ssr: true,
  loading: () => <div className="h-16 w-full" />
});

const Footer = dynamicImport(() => import("@/sections/Footer"), {
  loading: () => <div className="h-24 w-full" />
});

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
      { url: '/bidderspro.svg', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/bidderspro.svg' }
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/bidderspro.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Add meta tags to improve bfcache */}
        <meta httpEquiv="Cache-Control" content="public, max-age=3600, stale-while-revalidate=86400" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        {/* Preload hero font to reduce LCP */}
        <link
          rel="preload"
          href="/fonts/geist-sans-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Optional: preload hero image if applicable */}
        {/* <link rel="preload" href="/images/hero-banner.webp" as="image" type="image/webp" /> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-white min-h-screen w-full overflow-x-hidden`}
      >
        <Background />
        <Header />
        <main className="relative z-10 w-full pt-20 sm:pt-24 md:pt-28">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
