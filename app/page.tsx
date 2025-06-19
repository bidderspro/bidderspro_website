"use client";

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import HeroSection from '@/sections/HeroSection';

// Simple loading component
const LoadingComponent = ({ height = "h-96" }: { height?: string }) => (
  <div className={`${height} animate-pulse bg-gray-800/20 rounded-lg mx-auto max-w-6xl`} />
);

// Lazy load below-the-fold components with consistent loading pattern
const MarqueeSection = dynamic(() => import('@/sections/Marquee'), {
  loading: () => <LoadingComponent height="h-32" />,
  ssr: false
});

const AboutSection = dynamic(() => import('@/sections/AboutSection'), {
  loading: () => <LoadingComponent />,
  ssr: false
});

const UpworkAutomationSection = dynamic(() => import('@/sections/UpworkAutomationSection'), {
  loading: () => <LoadingComponent />,
  ssr: false
});

const TestimonialSection = dynamic(() => import('@/sections/TestimonialSection').then(mod => ({ default: mod.TestimonialSection })), {
  loading: () => <LoadingComponent />,
  ssr: false
});

const ContactSection = dynamic(() => import('@/sections/ContactSection'), {
  loading: () => <LoadingComponent />,
  ssr: false
});

export default function HomePage() {
  return (
    <div className="w-full">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <UpworkAutomationSection />
      <TestimonialSection />
      <ContactSection />
    </div>
  );
}
