"use client";

import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import HeroSection from '@/sections/HeroSection';

// Lightweight loading skeleton
const LoadingComponent = ({ height = "h-96" }: { height?: string }) => (
  <div className={`${height} animate-pulse bg-gray-800/20 rounded-lg mx-auto max-w-6xl`} />
);

// Lazy load all below-the-fold components
const MarqueeSection = dynamic(() => import('@/sections/Marquee'), {
  loading: () => <LoadingComponent height="h-32" />,
  ssr: false,
});
const AboutSection = dynamic(() => import('@/sections/AboutSection'), {
  loading: () => <LoadingComponent />,
  ssr: false,
});
const UpworkAutomationSection = dynamic(() => import('@/sections/UpworkAutomationSection'), {
  loading: () => <LoadingComponent />,
  ssr: false,
});
const TestimonialSection = dynamic(() => import('@/sections/TestimonialSection'), {
  loading: () => <LoadingComponent />,
  ssr: false,
});
const ContactSection = dynamic(() => import('@/sections/ContactSection'), {
  loading: () => <LoadingComponent />,
  ssr: false,
});

export default function HomePage() {
  return (
    <>
      {/* Preload any custom fonts or hero assets */}
      <Head>
      <link
          rel="preload"
          href="/fonts/geist-sans-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        
      </Head>

      <div className="w-full">
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <UpworkAutomationSection />
        <TestimonialSection />
        <ContactSection />
      </div>
    </>
  );
}
