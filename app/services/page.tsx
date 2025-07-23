"use client";

import React, { Suspense, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';

// Page config
export const config = {
  runtime: 'client'
};

// Lightweight loading component with reduced animation complexity
const LoadingFallback = ({ height = "h-96" }: { height?: string }) => (
  <div className={`${height} animate-pulse rounded-lg w-full bg-gray-800/20`} />
);

// Only import the hero section immediately (above the fold)
// This is critical content, but we'll still optimize it
const ServicesHeroSection = dynamic(
  () => import("@/sections/servicesSection/ServicesHeroSection"),
  { 
    loading: () => <LoadingFallback height="h-screen" />,
    ssr: false // Disable SSR to avoid server-side errors and improve FCP
  }
);

// Lazy load all below-the-fold components with separate chunks
const ServicesContentSection = dynamic(
  () => import("@/sections/servicesSection/ServicesContentSection"),
  { 
    loading: () => <LoadingFallback />,
    ssr: false // Disable SSR for below-the-fold components
  }
);

// Import PortfolioSection with its own chunk
const PortfolioSection = dynamic(
  () => import("@/sections/servicesSection/PortfolioSection"),
  {
    loading: () => <LoadingFallback />,
    ssr: false
  }
);

// Import WorkProcessSection with its own chunk
const WorkProcessSection = dynamic(
  () => import("@/sections/servicesSection/WorkProcessSection"),
  {
    loading: () => <LoadingFallback />,
    ssr: false
  }
);

// Import ConsultancySection separately with its own chunk
const ConsultancySection = dynamic(
  () => import("@/sections/servicesSection/ConsultancySection"),
  {
    loading: () => <LoadingFallback />,
    ssr: false
  }
);

// Import TestimonialsSection separately with its own chunk
const TestimonialsSection = dynamic(
  () => import("@/sections/servicesSection/TestimonialsSection"),
  {
    loading: () => <LoadingFallback />,
    ssr: false
  }
);

export default function ServicesPage() {
  // Detect if user prefers reduced motion
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);
  
  // Force remount on route change
  const [key, setKey] = useState(0);
  
  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return;
    
    // Use existing media query if possible
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    // Add listener with proper cleanup
    const onChange = () => setPrefersReducedMotion(mediaQuery.matches);
    
    try {
      // Modern browsers
      if (typeof mediaQuery.addEventListener === 'function') {
        mediaQuery.addEventListener('change', onChange);
        return () => mediaQuery.removeEventListener('change', onChange);
      } 
      // Legacy browsers with deprecated API
      else {
        // Use modern API if available, otherwise try deprecated one
        try {
          mediaQuery.addEventListener('change', onChange);
          return () => mediaQuery.removeEventListener('change', onChange);
        } catch {
          // Fallback to deprecated API
          mediaQuery.addListener?.(onChange);
          return () => mediaQuery.removeListener?.(onChange);
        }
      }
    } catch (error) {
      console.error('Error setting up media query listener:', error);
    }
    
    return () => {};
  }, []);

  // Improved scroll restoration
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    
    // Reset scroll position on page load for non-hash URLs
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  // Reset component key on mount to force fresh render
  useEffect(() => {
    setKey(prevKey => prevKey + 1);
  }, []);

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

      {/* Load hero section immediately */}
      <ServicesHeroSection 
        badge="POWERFUL DIGITAL SOLUTIONS. DELIVERED WITH PRECISION."
        headline="DIGITAL SOLUTIONS THAT GROW YOUR BUSINESS. NOT JUST YOUR TO-DO LIST."
        subheading="We don't just design websites or build apps — we solve real business problems. Whether it's automation, development, or scaling your online presence, Bidders Pro delivers solutions that actually move the needle."
        ctaText="LET'S AUTOMATE YOUR SUCCESS"
      />
      
      {/* Use Suspense boundaries for each section to improve loading */}
      <Suspense fallback={<LoadingFallback />}>
        <ServicesContentSection />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <ConsultancySection />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <PortfolioSection />
      </Suspense>
      
      {/* Use key to force remount when needed */}
      <Suspense fallback={<LoadingFallback />}>
        <WorkProcessSection key={`work-process-${key}`} />
      </Suspense>
      
      {/* Add the new TestimonialsSection */}
      <Suspense fallback={<LoadingFallback />}>
        <TestimonialsSection key={`testimonials-${key}`} />
      </Suspense>
    </>
  );
}