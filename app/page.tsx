"use client";

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';

// Preload critical components
import HeroSection from '@/sections/HeroSection';

// Lightweight loading skeleton
const LoadingComponent = ({ height = "h-96" }: { height?: string }) => (
  <div className={`${height} animate-pulse bg-gray-800/20 rounded-lg mx-auto max-w-6xl`} />
);

// Lazy load all below-the-fold components with priority order
const MarqueeSection = dynamic(() => import('@/sections/Marquee'), {
  loading: () => <LoadingComponent height="h-32" />,
  ssr: false, // Disable SSR for below-the-fold components
});

// Use separate chunks for each section to improve loading performance
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
      {/* Preload critical assets */}
      <Head>
        <link
          rel="preload"
          href="/fonts/geist-sans-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Add preconnect for any third-party domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>

      <div className="w-full">
        {/* Hero section is critical, load it immediately */}
        <HeroSection />
        
        {/* Use Suspense boundaries for each section to improve loading */}
        <Suspense fallback={<LoadingComponent height="h-32" />}>
          <MarqueeSection />
        </Suspense>
        
        <Suspense fallback={<LoadingComponent />}>
          <AboutSection />
        </Suspense>
        
        <Suspense fallback={<LoadingComponent />}>
          <UpworkAutomationSection />
        </Suspense>
        
        <Suspense fallback={<LoadingComponent />}>
          <TestimonialSection />
        </Suspense>
        
        <Suspense fallback={<LoadingComponent />}>
          <ContactSection />
        </Suspense>
      </div>
    </>
  );
}
