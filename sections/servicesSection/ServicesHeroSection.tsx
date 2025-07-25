"use client";

import { lazy, Suspense, memo, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Lazy load heavy components
const TextAnimate = lazy(() => 
  import('@/components/magicui/text-animate').then(mod => ({ default: mod.TextAnimate }))
);

const InteractiveHoverButton = lazy(() => 
  import('@/components/magicui/interactive-hover-button').then(mod => ({ default: mod.InteractiveHoverButton }))
);

// Simple loading fallback
const LoadingFallback = memo(({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={className}>{children}</div>
));

LoadingFallback.displayName = 'LoadingFallback';

// Detect reduced motion preference - shared across all instances
const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return;
    
    // Use existing media query if possible
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    // Add listener with proper cleanup
    const onChange = () => setPrefersReducedMotion(mediaQuery.matches);
    
    // Use the appropriate event listener method based on browser support
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', onChange);
      return () => mediaQuery.removeEventListener('change', onChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(onChange);
      return () => mediaQuery.removeListener(onChange);
    }
  }, []);
  
  return prefersReducedMotion;
};

// Props interface for the hero section
interface ServicesHeroSectionProps {
  badge?: string;
  headline?: string;
  subheading?: string;
  ctaText?: string;
}

// Memoize the component to prevent unnecessary re-renders
const ServicesHeroSection = memo(function ServicesHeroSection({
  badge = "POWERFUL DIGITAL SOLUTIONS. DELIVERED WITH PRECISION.",
  headline = "Digital Solutions That Grow Your Business. Not Just Your To-Do List.",
  subheading = "We don't just design websites or build appswe solve real business problems. Whether it's automation, development, or scaling your online presence, Bidders Pro delivers solutions that actually move the needle.",
  ctaText = "LET'S AUTOMATE YOUR SUCCESS"
}: ServicesHeroSectionProps) {
  const prefersReducedMotion = useReducedMotion();
  
  // Early return for reduced motion - simplified version
  if (prefersReducedMotion) {
    return (
      <div className="w-full text-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16 flex flex-col items-center justify-center relative z-10">
          <div className="flex justify-center mb-6 sm:mb-8 md:mb-10">
            <div className="inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 bg-[#0e1b52] border border-blue-500/20 rounded-full shadow-lg">
              <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-amber-400 rounded-full"></div>
              <p className="text-xs xs:text-sm sm:text-base md:text-lg font-medium text-white tracking-wide">
                {badge}
              </p>
            </div>
          </div>
          
          <div className="max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto text-center mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5 sm:mb-6 md:mb-8 text-white leading-snug uppercase">
              {headline}
            </h2>
            
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-300 max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto font-medium leading-relaxed">
              {subheading}
            </p>
          </div>
          
          <div className="flex justify-center mt-5 sm:mt-6 md:mt-8">
            <button 
              className="bg-violet-800 text-white text-center font-medium px-4 xs:px-5 sm:px-6 md:px-8 py-2 xs:py-2.5 sm:py-3 md:py-4 rounded-full text-sm xs:text-base sm:text-lg font-semibold hover:bg-violet-700 transition-all duration-300 uppercase w-auto"
              onClick={() => {
                window.location.href = "/calendar";
              }}
            >
              {ctaText}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full text-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16 flex flex-col items-center justify-center relative z-10">
        {/* Top tag pill */}
        <div className="flex justify-center mb-6 sm:mb-8 md:mb-10">
          <div className="inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 bg-[#0e1b52] border border-blue-500/20 rounded-full shadow-lg">
            <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-amber-400 rounded-full"></div>
            <Suspense fallback={
              <LoadingFallback className="text-xs xs:text-sm sm:text-base md:text-lg font-medium text-white tracking-wide">
                {badge}
              </LoadingFallback>
            }>
              <TextAnimate
                animate="blur-in"
                as="p"
                duration={0.5}
                className="text-xs xs:text-sm sm:text-base md:text-lg font-medium text-white tracking-wide"
              >
                {badge}
              </TextAnimate>
            </Suspense>
          </div>
        </div>
        
        {/* Main heading and subtext */}
        <div className="max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto text-center mb-6 sm:mb-8 md:mb-10">
          <Suspense fallback={
            <LoadingFallback className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5 sm:mb-6 md:mb-8 text-white leading-snug uppercase">
              {headline}
            </LoadingFallback>
          }>
            <TextAnimate 
              as="h5" 
              animate="fadeIn" 
              className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5 sm:mb-6 md:mb-8 text-white leading-snug uppercase"
            >
              {headline}
            </TextAnimate>
          </Suspense>
          
          <Suspense fallback={
            <LoadingFallback className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-300 max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto font-medium leading-relaxed">
              {subheading}
            </LoadingFallback>
          }>
            <TextAnimate 
              as="p" 
              animate="blur-in" 
              className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-300 max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto font-medium leading-relaxed"
            >
              {subheading}
            </TextAnimate>
          </Suspense>
        </div>
        
        {/* CTA Button */}
        <div className="flex justify-center mt-5 sm:mt-6 md:mt-8">
          <Suspense fallback={
            <button className="bg-violet-800 text-white text-center font-medium px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full text-sm sm:text-base md:text-lg">
              {ctaText}
            </button>
          }>
            <InteractiveHoverButton
              className="bg-violet-800 text-white text-center font-medium px-4 xs:px-5 sm:px-6 md:px-8 py-2 xs:py-2.5 sm:py-3 md:py-4 rounded-full text-sm xs:text-base sm:text-lg font-semibold hover:bg-violet-700 transition-all duration-300 uppercase w-auto"
              onClick={() => {
                window.location.href = "/calendar";
              }}
            >
              {ctaText}
            </InteractiveHoverButton>
          </Suspense>
        </div>
      </div>
    </div>
  );
});

ServicesHeroSection.displayName = 'ServicesHeroSection';

export default ServicesHeroSection; 