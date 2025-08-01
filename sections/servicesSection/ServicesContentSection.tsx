"use client";

import React, { Suspense, memo, useMemo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { lazy } from 'react';
import Image from 'next/image';
import { IconCode, IconDeviceMobile, IconRobot, IconBrandWordpress, IconShoppingCart, IconBrandUpwork } from '@tabler/icons-react';

// Lazy load heavy components
const TextAnimate = lazy(() => 
  import('@/components/magicui/text-animate').then(mod => ({ default: mod.TextAnimate }))
);

const InteractiveHoverButton = lazy(() => 
  import('@/components/magicui/interactive-hover-button').then(mod => ({ default: mod.InteractiveHoverButton }))
);

// Simple loading component
const LoadingFallback = memo(({ height = "h-96" }: { height?: string }) => (
  <div className={`${height} animate-pulse bg-gray-800/50 rounded-lg w-full`} />
));

LoadingFallback.displayName = 'LoadingFallback';

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

// Card component with hover effects - memoized
const ServiceCard = memo(({ 
  icon, 
  title, 
  description, 
  delay,
  prefersReducedMotion 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  delay: number;
  prefersReducedMotion: boolean;
}) => {
  // Simplified rendering for reduced motion
  if (prefersReducedMotion) {
    return (
      <div className="relative bg-gradient-to-br from-violet-900/70 via-purple-800/60 to-indigo-900/70 backdrop-blur-xl rounded-xl p-5 sm:p-6 md:p-7 border border-white/20 overflow-hidden">
        <div className="bg-white/80 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-4 shadow-md shadow-violet-500/20 relative z-10">
          <div className="w-6 h-6 sm:w-7 sm:h-7 text-violet-600">
            {icon}
          </div>
        </div>
        
        <div className="relative z-10">
          <h3 className="text-lg sm:text-xl font-bold mb-2.5 text-white">
            {title}
          </h3>
          <p className="text-sm sm:text-base text-white/80">
            {description}
          </p>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ 
        scale: 1.03,
        transition: { duration: 0.2 }
      }}
      className="relative bg-gradient-to-br from-violet-900/70 via-purple-800/60 to-indigo-900/70 backdrop-blur-xl rounded-xl p-5 sm:p-6 md:p-7 cursor-pointer group transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/30 border border-white/20 overflow-hidden"
    >
      {/* Glassy highlight effect */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white/30 to-transparent opacity-50 rounded-t-xl"></div>
      
      {/* Animated glow effect */}
      <motion.div 
        className="absolute -top-10 -left-10 w-40 h-40 bg-violet-400/20 rounded-full blur-3xl"
        animate={{ 
          x: [0, 10, 0], 
          y: [0, 15, 0],
          opacity: [0.2, 0.5, 0.2] 
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      
      {/* Icon container with enhanced animation */}
      <motion.div 
        className="bg-white/80 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 shadow-md shadow-violet-500/20 relative z-10"
        whileHover={{ rotate: 15, scale: 1.1 }}
      >
        <div className="w-6 h-6 sm:w-7 sm:h-7 text-violet-600 transition-all duration-300 group-hover:text-violet-800">
          {icon}
        </div>
      </motion.div>
      
      {/* Content with improved typography */}
      <div className="relative z-10">
        <h3 className="text-lg sm:text-xl font-bold mb-2.5 text-white group-hover:translate-x-1 transition-transform duration-300">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-white/80 transition-all duration-300 group-hover:text-white">
          {description}
        </p>
      </div>
      
      {/* Bottom shine effect */}
      <div className="absolute bottom-0 right-0 w-full h-1/3 bg-gradient-to-t from-violet-400/10 to-transparent rounded-b-xl"></div>
      
      {/* Additional glass effect elements */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-violet-500/5 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      
      {/* Glass reflection effect */}
      <div className="absolute top-0 left-0 right-0 h-full w-full bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-70"></div>
    </motion.div>
  );
});

ServiceCard.displayName = 'ServiceCard';

// Main component - memoized
const ServicesContentSection = memo(function ServicesContentSection() {
  const prefersReducedMotion = useReducedMotion();
  
  // Memoize service data to prevent recreation on each render
  const services = useMemo(() => [
    {
      icon: <IconCode className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Web Development",
      description: "Custom-Built, High-Performance Websites Tailored To Your Business Needs",
      delay: 0.1
    },
    {
      icon: <IconDeviceMobile className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Mobile App Development",
      description: "Seamless, Scalable Apps That Engage Your Audience Anywhere",
      delay: 0.2
    },
    {
      icon: <IconRobot className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "AI & Automation",
      description: "Let Technology Do The Heavy Lifting While You Focus On Growth",
      delay: 0.3
    },
    {
      icon: <IconBrandWordpress className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "WordPress Development",
      description: "Flexible, Easy-To-Manage Sites That Grow With You",
      delay: 0.4
    },
    {
      icon: <IconShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Shopify Development",
      description: "Fully Optimised ECommerce Stores That Convert Browsers Into Buyers",
      delay: 0.5
    },
    {
      icon: <IconBrandUpwork className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Upwork Automation",
      description: "You Need To Get Positive Results When You Spend Hard Earned Marketing And Promotions.",
      delay: 0.6
    }
  ], []);

  // Simplified version for reduced motion
  if (prefersReducedMotion) {
    return (
      <div id="services-content" className="w-full pt-0 pb-4 sm:pb-6 md:pb-8">
        <div className="container max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
          {/* Section header with star icon */}
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-lg">
              <div className="text-amber-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles">
                  <path d="M12 3v18"></path>
                  <path d="M3 12h18"></path>
                  <path d="M12 3l-2 6.5"></path>
                  <path d="M12 3l2 6.5"></path>
                  <path d="M12 21l-2-6.5"></path>
                  <path d="M12 21l2-6.5"></path>
                  <path d="M3 12l6.5-2"></path>
                  <path d="M3 12l6.5 2"></path>
                  <path d="M21 12l-6.5-2"></path>
                  <path d="M21 12l-6.5 2"></path>
                </svg>
              </div>
              <p className="text-xs sm:text-sm text-white font-medium">
                Our Core Services
              </p>
            </div>
          </div>
          
          {/* Main heading */}
          <div className="text-center mb-4 sm:mb-5 md:mb-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              WHAT DO WE <span className="bg-gradient-to-r from-violet-500 via-pink-500 to-amber-500 text-transparent bg-clip-text"> PROVIDE</span>?
            </h2>
          </div>
          
          {/* Services cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={service.delay}
                prefersReducedMotion={prefersReducedMotion}
              />
            ))}
          </div>
          
          {/* Bottom tagline */}
          <div className="text-center mt-5 sm:mt-6 md:mt-8">
            <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full">
              <p className="text-xs sm:text-sm md:text-base text-white">
                From The First Idea To The Final Launch, We're With You Every Step Of The Way.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="services-content" className="w-full pt-0 pb-4 sm:pb-6 md:pb-8">
      <div className="container max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section header with star icon */}
        <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-lg">
            <motion.div 
              className="text-amber-400"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles">
                <path d="M12 3v18"></path>
                <path d="M3 12h18"></path>
                <path d="M12 3l-2 6.5"></path>
                <path d="M12 3l2 6.5"></path>
                <path d="M12 21l-2-6.5"></path>
                <path d="M12 21l2-6.5"></path>
                <path d="M3 12l6.5-2"></path>
                <path d="M3 12l6.5 2"></path>
                <path d="M21 12l-6.5-2"></path>
                <path d="M21 12l-6.5 2"></path>
              </svg>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-xs sm:text-sm text-white font-medium"
            >
              Our Core Services
            </motion.p>
          </div>
        </div>
        
        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-4 sm:mb-5 md:mb-6"
        >
          <Suspense fallback={<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">WHAT DO WE <span className="bg-gradient-to-r from-violet-500 via-pink-500 to-amber-500 text-transparent bg-clip-text"> PROVIDE</span>?</h2>}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              <TextAnimate 
                as="span" 
                animate="fadeIn" 
                className="inline"
              >
                WHAT DO WE 
              </TextAnimate>
              <span className="bg-gradient-to-r from-violet-500 via-pink-500 to-amber-500 text-transparent bg-clip-text"> PROVIDE</span>?
            </h2>
          </Suspense>
        </motion.div>
        
        {/* Services cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={service.delay}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </div>
        
        {/* Bottom tagline */}
        <div className="text-center mt-5 sm:mt-6 md:mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            whileHover={{ 
              scale: 1.05, 
              borderColor: "rgba(255, 255, 255, 0.2)",
              transition: { duration: 0.2 }
            }}
            className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300"
          >
            <p className="text-xs sm:text-sm md:text-base text-white">
              From The First Idea To The Final Launch, We're With You Every Step Of The Way.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
});

ServicesContentSection.displayName = 'ServicesContentSection';

export default ServicesContentSection; 