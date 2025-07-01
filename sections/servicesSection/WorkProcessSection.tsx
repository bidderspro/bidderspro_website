"use client";

import React, { memo, useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { lazy, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Simple loading fallback
const LoadingFallback = memo(({ children, className }: { children?: React.ReactNode, className?: string }) => (
  <div className={className || ""}>{children}</div>
));

LoadingFallback.displayName = 'LoadingFallback';

// Error boundary component
const ErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = () => setHasError(true);
    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (hasError) {
    return <div className="p-4">Something went wrong. Please refresh the page.</div>;
  }

  return <>{children}</>;
};

// Pre-loaded components instead of lazy loading for critical UI elements
import { TextAnimate } from '@/components/magicui/text-animate';
import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button';

// Detect reduced motion preference
const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return;
    
    try {
      // Use existing media query if possible
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);
      
      // Add listener with proper cleanup
      const onChange = () => setPrefersReducedMotion(mediaQuery.matches);
      
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', onChange);
        return () => mediaQuery.removeEventListener('change', onChange);
      } else {
        // Fallback for older browsers
        mediaQuery.addListener(onChange);
        return () => mediaQuery.removeListener(onChange);
      }
    } catch (error) {
      console.error('Error in useReducedMotion:', error);
      return () => {};
    }
  }, []);
  
  return prefersReducedMotion;
};

// Process step component - memoized for performance
const ProcessStep = memo(({ 
  number, 
  title, 
  description,
  delay,
  prefersReducedMotion
}: { 
  number: string; 
  title: string; 
  description: string;
  delay: number;
  prefersReducedMotion: boolean;
}) => {
  // Simplified version for reduced motion
  if (prefersReducedMotion) {
    return (
      <div className="border border-blue-500/30 rounded-lg p-4 sm:p-6 md:p-8 h-full">
        <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-100 mb-3 sm:mb-4">
          {number}
        </div>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">
          {title}
        </h3>
        <p className="text-xs sm:text-sm md:text-base text-blue-100">
          {description}
        </p>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        y: -5,
        boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)",
        transition: { duration: 0.2 }
      }}
      className="border border-blue-500/30 rounded-lg p-4 sm:p-6 md:p-8 h-full transition-all duration-300 hover:border-blue-400/50"
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: delay + 0.1 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-100 mb-3 sm:mb-4"
      >
        {number}
      </motion.div>
      <motion.h3 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: delay + 0.2 }}
        className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3"
      >
        {title}
      </motion.h3>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: delay + 0.3 }}
        className="text-xs sm:text-sm md:text-base text-blue-100"
      >
        {description}
      </motion.p>
    </motion.div>
  );
});

ProcessStep.displayName = 'ProcessStep';

// Feature pill component - memoized
const FeaturePill = memo(({ 
  text,
  delay,
  prefersReducedMotion
}: { 
  text: string;
  delay: number;
  prefersReducedMotion: boolean;
}) => {
  // Simplified version for reduced motion
  if (prefersReducedMotion) {
    return (
      <div className="flex items-center gap-1 sm:gap-2">
        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-400"></div>
        <span className="text-white font-medium text-xs sm:text-sm">{text}</span>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay }}
      className="flex items-center gap-1 sm:gap-2"
    >
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-400"
      ></motion.div>
      <span className="text-white font-medium text-xs sm:text-sm">{text}</span>
    </motion.div>
  );
});

FeaturePill.displayName = 'FeaturePill';

// Team avatar component - memoized
const TeamAvatar = memo(({ 
  src,
  alt,
  index,
  prefersReducedMotion
}: { 
  src: string;
  alt: string;
  index: number;
  prefersReducedMotion: boolean;
}) => {
  // Simplified version for reduced motion
  if (prefersReducedMotion) {
    return (
      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden border-2 border-white -ml-1 sm:-ml-2 first:ml-0">
        <Image 
          src={src} 
          alt={alt} 
          width={32} 
          height={32}
          className="w-full h-full object-cover"
          unoptimized
        />
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.1 * index }}
      className="w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden border-2 border-white -ml-1 sm:-ml-2 first:ml-0 hover:z-10 relative"
      whileHover={{ 
        scale: 1.1,
        transition: { duration: 0.2 }
      }}
    >
      <Image 
        src={src} 
        alt={alt} 
        width={32} 
        height={32}
        className="w-full h-full object-cover"
        unoptimized
      />
    </motion.div>
  );
});

TeamAvatar.displayName = 'TeamAvatar';

// Main component - memoized
const WorkProcessSection = memo(function WorkProcessSection() {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  
  // Handle component mounting
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);
  
  // Memoize process steps to prevent recreation on each render
  const processSteps = useMemo(() => [
    {
      number: "01",
      title: "Requirement & Planning",
      description: "We listen to your vision, goals, and challenges, then craft smart strategies tailored to your business.",
      delay: 0.1
    },
    {
      number: "02",
      title: "UI/ UX Design",
      description: "Intuitive UI/UX designs that engage users & bring your ideas to life.",
      delay: 0.2
    },
    {
      number: "03",
      title: "Development & Testing",
      description: "Clean, scalable code built by experts, with rigorous testing to ensure quality and performance.",
      delay: 0.3
    },
    {
      number: "04",
      title: "Launch & Support",
      description: "Smooth, secure deployment—and ongoing support to keep everything running flawlessly.",
      delay: 0.4
    }
  ], []);

  // Memoize features to prevent recreation on each render
  const features = useMemo(() => [
    { text: "SIMPLE", delay: 0.1 },
    { text: "TRANSPARENT", delay: 0.2 },
    { text: "PROVEN", delay: 0.3 }
  ], []);

  // Memoize team members to prevent recreation on each render
  const teamMembers = useMemo(() => [
    { src: "/assets/images/image 1.svg", alt: "Team Member 1" },
    { src: "/assets/images/image 2.svg", alt: "Team Member 2" },
    { src: "/assets/images/image 3.svg", alt: "Team Member 3" },
    { src: "/assets/images/image 4.svg", alt: "Team Member 4" }
  ], []);

  // Don't render until client-side hydration is complete
  if (!mounted) {
    return (
      <section className="w-full text-white py-10 sm:py-14 md:py-16 lg:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="animate-pulse bg-gray-800/20 h-10 w-1/3 mb-6"></div>
          <div className="animate-pulse bg-gray-800/20 h-6 w-full mb-10"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 lg:mb-10">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="animate-pulse bg-gray-800/20 h-40 rounded-lg"></div>
            ))}
          </div>
          <div className="animate-pulse bg-gray-800/20 h-16 rounded-full"></div>
        </div>
      </section>
    );
  }

  // Simplified version for reduced motion
  if (prefersReducedMotion) {
    return (
      <ErrorBoundary>
        <section className="w-full text-white py-10 sm:py-14 md:py-16 lg:py-20">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Our Work Process</h2>
            
            <div className="flex flex-wrap gap-2 sm:gap-4 mb-3 sm:mb-4">
              {features.map((feature, index) => (
                <FeaturePill 
                  key={index} 
                  text={feature.text} 
                  delay={feature.delay}
                  prefersReducedMotion={prefersReducedMotion} 
                />
              ))}
            </div>
            
            <p className="text-base sm:text-lg mb-6 sm:mb-8 lg:mb-10">WE BELIEVE IN CLARITY AND COLLABORATION AT EVERY STAGE.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 lg:mb-10">
              {processSteps.map((step, index) => (
                <ProcessStep
                  key={index}
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  delay={step.delay}
                  prefersReducedMotion={prefersReducedMotion}
                />
              ))}
            </div>
            
            <div className="border border-blue-500/30 rounded-2xl sm:rounded-full p-3 sm:p-4 flex flex-col sm:flex-row justify-between items-center bg-purple-900/40 backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto mb-4 sm:mb-0">
                <div className="flex justify-center w-full sm:w-auto mb-2 sm:mb-0">
                  {teamMembers.map((member, index) => (
                    <TeamAvatar 
                      key={index} 
                      src={member.src} 
                      alt={member.alt} 
                      index={index}
                      prefersReducedMotion={prefersReducedMotion} 
                    />
                  ))}
                </div>
                <span className="ml-0 sm:ml-2 text-white text-center sm:text-left text-xs sm:text-sm uppercase">Align with businesses that choose quality</span>
              </div>
              
              <Link href="/calendar" className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 sm:px-6 rounded-full transition-colors text-xs sm:text-sm text-center">
                START NOW
              </Link>
            </div>
          </div>
        </section>
      </ErrorBoundary>
    );
  }

  return (
    <ErrorBoundary>
      <section className="w-full text-white py-10 sm:py-14 md:py-16 lg:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
          >
            <ErrorBoundary>
              <TextAnimate animate="fadeIn">Our Work Process</TextAnimate>
            </ErrorBoundary>
          </motion.h2>
          
          <div className="flex flex-wrap gap-2 sm:gap-4 mb-3 sm:mb-4">
            {features.map((feature, index) => (
              <FeaturePill 
                key={index} 
                text={feature.text} 
                delay={feature.delay}
                prefersReducedMotion={prefersReducedMotion} 
              />
            ))}
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg mb-6 sm:mb-8 lg:mb-10"
          >
            <ErrorBoundary>
              <TextAnimate animate="fadeIn">
                WE BELIEVE IN CLARITY AND COLLABORATION AT EVERY STAGE.
              </TextAnimate>
            </ErrorBoundary>
          </motion.p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 lg:mb-10">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
                delay={step.delay}
                prefersReducedMotion={prefersReducedMotion}
              />
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="border border-blue-500/30 rounded-2xl sm:rounded-full p-3 sm:p-4 flex flex-col sm:flex-row justify-between items-center bg-purple-900/40 backdrop-blur-sm"
          >
            <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto mb-4 sm:mb-0">
              <div className="flex justify-center w-full sm:w-auto mb-2 sm:mb-0">
                {teamMembers.map((member, index) => (
                  <TeamAvatar 
                    key={index} 
                    src={member.src} 
                    alt={member.alt} 
                    index={index}
                    prefersReducedMotion={prefersReducedMotion} 
                  />
                ))}
              </div>
              <span className="ml-0 sm:ml-2 text-white text-center sm:text-left text-xs sm:text-sm uppercase">Align with businesses that choose quality</span>
            </div>
            
            <ErrorBoundary>
              <InteractiveHoverButton
                className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 sm:px-6 rounded-full transition-colors text-xs sm:text-sm text-center"
                onClick={() => {
                  window.location.href = "/calendar";
                }}
              >
                START NOW
              </InteractiveHoverButton>
            </ErrorBoundary>
          </motion.div>
        </div>
      </section>
    </ErrorBoundary>
  );
});

WorkProcessSection.displayName = 'WorkProcessSection';

export default WorkProcessSection; 