"use client";

import React, { Suspense } from "react";
import dynamicImport from "next/dynamic";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

// Only import the hero section immediately (above the fold)
const AutomationHeroSection = dynamicImport(
  () => import("@/sections/automationSection/automationHeroSection"),
  { 
    loading: () => <div className="h-screen animate-pulse bg-gray-800/50 rounded-lg" />
  }
);

// Lazy load all other sections (below the fold)
const WhyAutomationSection = dynamicImport(
  () => import("@/sections/automationSection/WhyAutomationSection"),
  { 
    loading: () => <div className="h-96 animate-pulse bg-gray-800/50 rounded-lg" />
  }
);

const CompareSection = dynamicImport(
  () => import("@/sections/automationSection/CompareSection"),
  { 
    loading: () => <div className="h-96 animate-pulse bg-gray-800/50 rounded-lg" />
  }
);

const MoneyMachineSection = dynamicImport(
  () => import("@/sections/automationSection/MoneyMachineSection"),
  { 
    loading: () => <div className="h-96 animate-pulse bg-gray-800/50 rounded-lg" />
  }
);

const AutomationShiftSection = dynamicImport(
  () => import("@/sections/automationSection/AutomationShiftSection"),
  { 
    loading: () => <div className="h-96 animate-pulse bg-gray-800/50 rounded-lg" />
  }
);

const WhoIsThisForSection = dynamicImport(
  () => import("@/sections/automationSection/WhoIsThisForSection"),
  { 
    loading: () => <div className="h-96 animate-pulse bg-gray-800/50 rounded-lg" />
  }
);

const PricingSection = dynamicImport(
  () => import("@/sections/automationSection/PricingSection"),
  { 
    loading: () => <div className="h-96 animate-pulse bg-gray-800/50 rounded-lg" />
  }
);

const VSLSection = dynamicImport(
  () => import("@/sections/automationSection/VSLSection"),
  { 
    loading: () => <div className="h-96 animate-pulse bg-gray-800/50 rounded-lg" />
  }
);

const FinalCTASection = dynamicImport(
  () => import("@/sections/automationSection/FinalCTASection"),
  { 
    loading: () => <div className="h-96 animate-pulse bg-gray-800/50 rounded-lg" />
  }
);

export default function AutomationPage() {
  return (
    <>
      <AutomationHeroSection />
      <Suspense fallback={<div className="h-96 animate-pulse bg-gray-800/50 rounded-lg" />}>
        <WhyAutomationSection />
      </Suspense>
      <Suspense fallback={<div className="h-96 animate-pulse bg-gray-800/50 rounded-lg" />}>
        <CompareSection />
      </Suspense>
      <Suspense fallback={<div className="h-96 animate-pulse bg-gray-800/50 rounded-lg" />}>
        <AutomationShiftSection />
      </Suspense>
      <Suspense fallback={<div className="h-96 animate-pulse bg-gray-800/50 rounded-lg" />}>
        <WhoIsThisForSection />
      </Suspense>
      <Suspense fallback={<div className="h-96 animate-pulse bg-gray-800/50 rounded-lg" />}>
        <MoneyMachineSection />
      </Suspense>
      <Suspense fallback={<div className="h-96 animate-pulse bg-gray-800/50 rounded-lg" />}>
        <VSLSection />
      </Suspense>
      <Suspense fallback={<div className="h-96 animate-pulse bg-gray-800/50 rounded-lg" />}>
        <PricingSection />
      </Suspense>
      <Suspense fallback={<div className="h-96 animate-pulse bg-gray-800/50 rounded-lg" />}>
        <FinalCTASection />
      </Suspense>
    </>
  );
}
