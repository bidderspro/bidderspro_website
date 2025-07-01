"use client";

import React, { memo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { lazy } from 'react';

// Lazy load heavy components
const InteractiveHoverButton = lazy(() => 
  import('@/components/magicui/interactive-hover-button').then(mod => ({ default: mod.InteractiveHoverButton }))
);

// Detect reduced motion preference
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
    
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', onChange);
      return () => mediaQuery.removeEventListener('change', onChange);
    } else {
      mediaQuery.addListener(onChange);
      return () => mediaQuery.removeListener(onChange);
    }
  }, []);
  
  return prefersReducedMotion;
};

// Memoize the component to prevent unnecessary re-renders
const ConsultancySection = memo(function ConsultancySection() {
  const prefersReducedMotion = useReducedMotion();
  
  // Simplified version for reduced motion
  if (prefersReducedMotion) {
    return (
      <div className="w-full text-white relative overflow-hidden py-10 sm:py-12 md:py-16">
        <div className="container max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
          {/* Heading and subheading */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent mb-4 uppercase">
              CONSULTANCY SERVICES
            </h2>
            
            <p className="text-xl sm:text-2xl font-medium text-white uppercase">
              NEED GUIDANCE? WE'VE GOT YOU.
            </p>
          </div>

          {/* Image and description in row */}
          <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-8 sm:mb-10 md:mb-12">
            {/* Image container */}
            <div className="w-full lg:w-5/12 relative">
              <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-violet-500/20 border border-violet-500/20">
                <Image 
                  src="/assets/images/about-us.webp" 
                  alt="Consultancy Services" 
                  width={600} 
                  height={400}
                  className="w-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-violet-950/80 to-transparent"></div>
              </div>
            </div>
            
            {/* Content container */}
            <div className="w-full lg:w-7/12 mt-6 lg:mt-0">
              <p className="text-base sm:text-lg text-white/90 uppercase">
                NOT SURE WHERE TO START? OUR TECH EXPERTS OFFER ONE-ON-ONE CONSULTANCY TO HELP YOU PLAN YOUR DIGITAL JOURNEY. WHETHER IT'S SELECTING THE RIGHT PLATFORM, DESIGNING THE USER FLOW, OR MAPPING OUT YOUR AUTOMATION STRATEGY, WE PROVIDE HONEST ADVICE AND ACTIONABLE INSIGHTS.
              </p>
            </div>
          </div>

          {/* Button outside the row */}
          <div className="flex justify-center mt-3 sm:mt-4 md:mt-5">
            <button
              className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white text-center font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg uppercase transition-all duration-300"
              onClick={() => {
                window.location.href = "/calendar";
              }}
            >
              CLAIM YOUR FREE CONSULTATION
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full text-white relative overflow-hidden py-10 sm:py-12 md:py-16">
      {/* Background glow effects */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full opacity-20"
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-full h-full opacity-20"
      />

      <div className="container max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        {/* Heading and subheading in outer div */}
        <motion.div className="text-center mb-8 sm:mb-10 md:mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent mb-4 uppercase"
          >
            CONSULTANCY SERVICES
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl sm:text-2xl font-medium text-white uppercase"
          >
            NEED GUIDANCE? WE'VE GOT YOU.
          </motion.p>
        </motion.div>

        {/* Image and description in row */}
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-8 sm:mb-10 md:mb-12">
          {/* Image container with optimized loading */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-5/12 relative"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-violet-500/20 border border-violet-500/20">
              <Image 
                src="/assets/images/about-us.webp" 
                alt="Consultancy Services" 
                width={600} 
                height={400}
                className="w-full object-cover"
                priority
                loading="eager"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-violet-950/80 to-transparent"></div>
            </div>
          </motion.div>
          
          {/* Content container */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full lg:w-7/12 mt-6 lg:mt-0"
          >
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-white/90 uppercase"
            >
              NOT SURE WHERE TO START? OUR TECH EXPERTS OFFER ONE-ON-ONE CONSULTANCY TO HELP YOU PLAN YOUR DIGITAL JOURNEY. WHETHER IT'S SELECTING THE RIGHT PLATFORM, DESIGNING THE USER FLOW, OR MAPPING OUT YOUR AUTOMATION STRATEGY, WE PROVIDE HONEST ADVICE AND ACTIONABLE INSIGHTS.
            </motion.p>
          </motion.div>
        </div>

        {/* Button outside the row */}
        <div className="flex justify-center mt-3 sm:mt-4 md:mt-5">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <InteractiveHoverButton
              className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white text-center font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg uppercase transition-all duration-300"
              onClick={() => {
                window.location.href = "/calendar";
              }}
            >
              CLAIM YOUR FREE CONSULTATION
            </InteractiveHoverButton>
          </motion.div>
        </div>
      </div>
    </div>
  );
});

ConsultancySection.displayName = 'ConsultancySection';

export default ConsultancySection; 