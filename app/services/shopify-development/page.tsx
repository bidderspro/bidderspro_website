"use client";

import React, { Suspense, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { IconShoppingCart } from '@tabler/icons-react';

// Page config
export const config = {
  runtime: 'client'
};

// Lightweight loading component with reduced animation complexity
const LoadingFallback = ({ height = "h-96" }: { height?: string }) => (
  <div className={`${height} animate-pulse rounded-lg w-full bg-gray-800/20`} />
);

// Import components with dynamic loading
const ServicesHeroSection = dynamic(
  () => import("@/sections/servicesSection/ServicesHeroSection"),
  { 
    loading: () => <LoadingFallback height="h-screen" />,
    ssr: false
  }
);

const ServicesContentSection = dynamic(
  () => import("@/sections/servicesSection/ServicesContentSection"),
  { 
    loading: () => <LoadingFallback />,
    ssr: false
  }
);

const WorkProcessSection = dynamic(
  () => import("@/sections/servicesSection/WorkProcessSection"),
  {
    loading: () => <LoadingFallback />,
    ssr: false
  }
);

const TestimonialsSection = dynamic(
  () => import("@/sections/servicesSection/TestimonialsSection"),
  {
    loading: () => <LoadingFallback />,
    ssr: false
  }
);

// Service-specific content component
const ShopifyDevelopmentContent = () => {
  return (
    <div className="w-full py-10 sm:py-12 md:py-16">
      <div className="container max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-lg">
            <div className="text-amber-400">
              <IconShoppingCart size={18} />
            </div>
            <p className="text-xs sm:text-sm text-white font-medium">
              Shopify Development
            </p>
          </div>
        </div>
        
        {/* Main heading */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            OPTIMIZED <span className="bg-gradient-to-r from-violet-500 via-pink-500 to-amber-500 text-transparent bg-clip-text">SHOPIFY STORES.</span> MAXIMUM CONVERSIONS.
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
            Custom e-commerce solutions that convert visitors into loyal customers. From custom themes to Shopify Plus development, we build stores that sell.
          </p>
        </div>
        
        {/* Service features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            {
              title: "Custom Shopify Themes",
              description: "Unique, branded store designs that reflect your brand identity and create memorable shopping experiences that convert."
            },
            {
              title: "Shopify App Development",
              description: "Custom applications that extend your store's functionality, streamline operations, and create competitive advantages."
            },
            {
              title: "Shopify Plus Solutions",
              description: "Enterprise-level solutions for high-volume merchants with complex requirements and advanced automation needs."
            },
            {
              title: "Conversion Rate Optimization",
              description: "Data-driven design and functionality improvements that increase sales, average order value, and customer lifetime value."
            },
            {
              title: "Platform Migration",
              description: "Seamless transition from other platforms to Shopify with zero downtime, complete data preservation, and SEO maintenance."
            },
            {
              title: "Performance & Security",
              description: "Lightning-fast store performance, advanced security measures, and ongoing optimization to maximize revenue potential."
            }
          ].map((feature, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 sm:p-6"
            >
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-white/80">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Technologies section */}
        <div className="mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6">Shopify Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Shopify", "Shopify Plus", "Liquid", "JavaScript", "React", 
              "Shopify API", "Shopify CLI", "Themekit", "SCSS", "Webpack",
              "GraphQL", "Shopify Flow", "Shopify Scripts", "Figma", "Git"
            ].map((tech, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 text-white"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA section */}
        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <button 
            onClick={() => window.location.href = "/calendar"}
            className="bg-violet-800 hover:bg-violet-700 text-white font-bold py-3 px-8 rounded-full text-lg uppercase transition-all duration-300"
          >
            LAUNCH YOUR SHOPIFY STORE
          </button>
        </div>
        
        {/* Service Description */}
        <div className="mt-12 sm:mt-16 md:mt-20">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 sm:p-8">
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed text-center">
              E-commerce success isn't just about having a store — it's about creating shopping experiences that convert. Our Shopify development focuses on user experience, conversion optimization, and scalable architecture to build stores that drive sales and grow your business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ShopifyDevelopmentPage() {
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>

      {/* Load hero section immediately */}
      <ServicesHeroSection 
        badge="SHOPIFY SOLUTIONS"
        headline="OPTIMIZED SHOPIFY STORES. MAXIMUM CONVERSIONS."
        subheading="Custom e-commerce solutions that convert visitors into loyal customers. From custom themes to Shopify Plus development, we build stores that sell."
        ctaText="LAUNCH YOUR SHOPIFY STORE"
      />
      
      {/* Service-specific content */}
      <Suspense fallback={<LoadingFallback />}>
        <ShopifyDevelopmentContent />
      </Suspense>
      
      {/* Work process section */}
      <Suspense fallback={<LoadingFallback />}>
        <WorkProcessSection key={`work-process-${key}`} />
      </Suspense>
      
      {/* Testimonials section */}
      <Suspense fallback={<LoadingFallback />}>
        <TestimonialsSection key={`testimonials-${key}`} />
      </Suspense>
    </>
  );
} 