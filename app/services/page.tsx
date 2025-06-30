"use client";

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Page config
export const config = {
  runtime: 'client'
};

// Shared loading component
const LoadingFallback = ({ height = "h-96" }: { height?: string }) => (
  <div className={`${height} animate-pulse rounded-lg w-full`} />
);

// Only import the hero section immediately (above the fold)
const ServicesHeroSection = dynamic(
  () => import("@/sections/servicesSection/ServicesHeroSection"),
  { 
    loading: () => <LoadingFallback height="h-screen" />,
    ssr: false // Disable SSR to avoid server-side errors
  }
);

// Lazy load the content section (below the fold)
const ServicesContentSection = dynamic(
  () => import("@/sections/servicesSection/ServicesContentSection"),
  { 
    loading: () => <LoadingFallback />,
    ssr: false // Disable SSR for below-the-fold components
  }
);

// Import ConsultancySection separately
const ConsultancySection = dynamic(
  () => import("@/sections/servicesSection/ConsultancySection"),
  {
    loading: () => <LoadingFallback />,
    ssr: false
  }
);

export default function ServicesPage() {
  return (
    <>
      {/* Load hero section immediately */}
      <ServicesHeroSection />
      
      {/* Use Suspense for below-the-fold content */}
      <Suspense fallback={<LoadingFallback />}>
        <ServicesContentSection />
      </Suspense>
       {/* Add ConsultancySection */}
       <Suspense fallback={<LoadingFallback />}>
        <ConsultancySection />
      </Suspense>
    </>
  );
}