"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";

// Page config
export const config = {
  runtime: 'client'
};

// Shared loading component
const LoadingFallback = ({ height = "h-96" }: { height?: string }) => (
  <div className={`${height} animate-pulse bg-gray-800/50 rounded-lg w-full`} />
);

// Only import the hero section immediately (above the fold)
const AutomationHeroSection = dynamic(
  () => import("@/sections/automationSection/automationHeroSection"),
  { 
    loading: () => <LoadingFallback height="h-screen" />,
    ssr: true // Keep hero section server rendered
  }
);

// Lazy load all other sections (below the fold)
const WhyAutomationSection = dynamic(
  () => import("@/sections/automationSection/WhyAutomationSection"),
  { 
    loading: () => <LoadingFallback />,
    ssr: false // Disable SSR for below-the-fold components
  }
);

const CompareSection = dynamic(
  () => import("@/sections/automationSection/CompareSection"),
  { 
    loading: () => <LoadingFallback />,
    ssr: false
  }
);

const MoneyMachineSection = dynamic(
  () => import("@/sections/automationSection/MoneyMachineSection"),
  { 
    loading: () => <LoadingFallback />,
    ssr: false
  }
);

const AutomationShiftSection = dynamic(
  () => import("@/sections/automationSection/AutomationShiftSection"),
  { 
    loading: () => <LoadingFallback />,
    ssr: false
  }
);

const WhoIsThisForSection = dynamic(
  () => import("@/sections/automationSection/WhoIsThisForSection"),
  { 
    loading: () => <LoadingFallback />,
    ssr: false
  }
);

const PricingSection = dynamic(
  () => import("@/sections/automationSection/PricingSection"),
  { 
    loading: () => <LoadingFallback />,
    ssr: false
  }
);

const VSLSection = dynamic(
  () => import("@/sections/automationSection/VSLSection"),
  { 
    loading: () => <LoadingFallback />,
    ssr: false
  }
);

const FinalCTASection = dynamic(
  () => import("@/sections/automationSection/FinalCTASection"),
  { 
    loading: () => <LoadingFallback />,
    ssr: false
  }
);

export default function AutomationPage() {
  return (
    <>
      {/* Load hero section immediately */}
      <AutomationHeroSection />
      
      {/* Use Intersection Observer via Suspense for below-the-fold content */}
      <Suspense fallback={<LoadingFallback />}>
        <WhyAutomationSection />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <CompareSection />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <AutomationShiftSection />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <WhoIsThisForSection />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <MoneyMachineSection />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <VSLSection />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <PricingSection />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <FinalCTASection />
      </Suspense>
    </>
  );
}
