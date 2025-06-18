"use client";

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import HeroSection from '@/sections/HeroSection';

// Lazy load below-the-fold components
const MarqueeSection = dynamic(() => import('@/sections/Marquee'), {
  loading: () => <div className="h-32 animate-pulse bg-gray-800/50 rounded-lg" />
});

const AboutSection = dynamic(() => import('@/sections/AboutSection'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-800/50 rounded-lg" />
});

const UpworkAutomationSection = dynamic(() => import('@/sections/UpworkAutomationSection'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-800/50 rounded-lg" />
});

const TestimonialSection = dynamic(() => import('@/sections/TestimonialSection').then(mod => ({ default: mod.TestimonialSection })), {
  loading: () => <div className="h-96 animate-pulse bg-gray-800/50 rounded-lg" />
});

const ContactSection = dynamic(() => import('@/sections/ContactSection'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-800/50 rounded-lg" />
});

const page = () => {
  return (
    <>
      <HeroSection />
      <Suspense fallback={<div className="h-32 animate-pulse bg-gray-800/50 rounded-lg" />}>
        <MarqueeSection />
      </Suspense>
      <Suspense fallback={<div className="h-96 animate-pulse bg-gray-800/50 rounded-lg" />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<div className="h-96 animate-pulse bg-gray-800/50 rounded-lg" />}>
        <UpworkAutomationSection />
      </Suspense>
      <Suspense fallback={<div className="h-96 animate-pulse bg-gray-800/50 rounded-lg" />}>
        <TestimonialSection />
      </Suspense>
      <Suspense fallback={<div className="h-96 animate-pulse bg-gray-800/50 rounded-lg" />}>
        <ContactSection />
      </Suspense>
    </>
  )
}

export default page;
