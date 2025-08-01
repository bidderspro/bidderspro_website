"use client";

import React, { Suspense, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

// Section wrapper for consistent spacing
const SectionWrapper = ({ children, isFirst = false }: { children: React.ReactNode, isFirst?: boolean }) => (
  <div className={`${isFirst ? '' : 'mt-[-80px] md:mt-[-100px] lg:mt-[-120px]'}`}>
    {children}
  </div>
);

// Page config
export const config = {
  runtime: 'client'
};

// Shared loading component
const LoadingFallback = ({ height = "h-96" }: { height?: string }) => (
  <div className={`${height} w-full flex items-center justify-center`}>
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 border-4 border-violet-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-violet-500 font-medium">Loading content...</p>
    </div>
  </div>
);

// Import all components with their own loading states
const AutomationHeroSection = dynamic(
  () => import("@/sections/automationSection/automationHeroSection"),
  { loading: () => <LoadingFallback height="h-screen" /> }
);

const QuizSection = dynamic(
  () => import("@/sections/automationSection/QuizSection"),
  { loading: () => <LoadingFallback /> }
);

const HowItWorksSection = dynamic(
  () => import("@/sections/automationSection/HowItWorksSection"),
  { loading: () => <LoadingFallback /> }
);

const TestimonialSlider = dynamic(
  () => import("@/sections/automationSection/TestimonialSlider"),
  { loading: () => <LoadingFallback /> }
);

const ComparisonSection = dynamic(
  () => import("@/sections/automationSection/ComparisonSection"),
  { loading: () => <LoadingFallback /> }
);

const PricingSection = dynamic(
  () => import("@/sections/automationSection/PricingSection"),
  { loading: () => <LoadingFallback /> }
);

const WhoIsThisForSection = dynamic(
  () => import("@/sections/automationSection/WhoIsThisForSection"),
  { loading: () => <LoadingFallback /> }
);

const FinalCTASection = dynamic(
  () => import("@/sections/automationSection/FinalCTASection"),
  { loading: () => <LoadingFallback /> }
);

// Page component with Suspense boundary
export default function AutomationPage() {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);
  const [refreshKey, setRefreshKey] = useState(Date.now());
  
  // Force refresh on mount to clear any cached content
  useEffect(() => {
    // Clear browser cache for this page
    router.refresh();
    
    // Update refresh key to force component remounting
    setRefreshKey(Date.now());
    
    // Mark components as loaded after a short delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [router]);

  // Define the sections to be rendered
  const sections = [
    { Component: AutomationHeroSection, key: 'hero', height: 'h-screen' },
    { Component: QuizSection, key: 'quiz' },
    { Component: HowItWorksSection, key: 'how' },
    { Component: TestimonialSlider, key: 'testimonial' },
    { Component: ComparisonSection, key: 'comparison' },
    { Component: WhoIsThisForSection, key: 'who' },
    { Component: PricingSection, key: 'pricing' },
    { Component: FinalCTASection, key: 'cta' }
  ];

  return (
    <>
      {!isLoaded && <LoadingFallback height="h-screen" />}
      
      <div style={{ display: isLoaded ? 'block' : 'none' }} className="relative">
        {sections.map(({ Component, key, height }, index) => (
          <SectionWrapper key={`${key}-wrapper-${refreshKey}`} isFirst={index === 0}>
            <Suspense key={`${key}-${refreshKey}`} fallback={<LoadingFallback height={height} />}>
              <Component key={`${key}-component-${refreshKey}`} />
            </Suspense>
          </SectionWrapper>
        ))}
      </div>
    </>
  );
}