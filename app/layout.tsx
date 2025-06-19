import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/sections/Header";
import Footer from "@/sections/Footer";
import Background from "@/components/ui/Background2";

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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-white min-h-screen w-full overflow-x-hidden`}
      >
        <Background />
        <Header />
        <main className="max-w-[100vw] pt-14 sm:pt-6 md:pt-16 lg:pt-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
