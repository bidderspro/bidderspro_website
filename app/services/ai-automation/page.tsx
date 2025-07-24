"use client";

import React, { Suspense, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { IconRobot } from '@tabler/icons-react';

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
const AIAutomationContent = () => {
  return (
    <div className="w-full py-10 sm:py-12 md:py-16">
      <div className="container max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-lg">
            <div className="text-amber-400">
              <IconRobot size={18} />
            </div>
            <p className="text-xs sm:text-sm text-white font-medium">
              AI & Automation
            </p>
          </div>
        </div>
        
        {/* Main heading */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            INTELLIGENT <span className="bg-gradient-to-r from-violet-500 via-pink-500 to-amber-500 text-transparent bg-clip-text">AUTOMATION.</span> SMART BUSINESS GROWTH.
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
            Let technology handle the repetitive tasks while you focus on strategy and growth. From chatbots to workflow automation, we build AI solutions that work.
          </p>
        </div>
        
        {/* Service features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            {
              title: "Business Process Automation",
              description: "Streamline workflows, eliminate manual tasks, and create efficient processes that save time and reduce human error across your organization."
            },
            {
              title: "AI-Powered Chatbots",
              description: "24/7 intelligent customer service that handles inquiries, qualifies leads, and provides instant support without human intervention."
            },
            {
              title: "Data Analytics & Insights",
              description: "Transform raw data into actionable insights with advanced analytics, machine learning, and predictive modeling for better decision-making."
            },
            {
              title: "Custom AI Solutions",
              description: "Tailored artificial intelligence applications designed specifically for your business challenges, from image recognition to natural language processing."
            },
            {
              title: "Workflow Integration",
              description: "Seamlessly connect your existing systems, tools, and platforms to create unified automation workflows that work across your entire business."
            },
            {
              title: "Predictive Analytics",
              description: "Anticipate market trends, customer behavior, and business opportunities with advanced forecasting models and machine learning algorithms."
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
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6">AI & Automation Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Machine Learning", "Natural Language Processing", "Computer Vision", 
              "Python", "TensorFlow", "PyTorch", "OpenAI API", "Zapier", 
              "Make.com", "Microsoft Power Automate", "Google Cloud AI", "AWS AI", "Azure ML", "Hugging Face", "LangChain"
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
            AUTOMATE YOUR BUSINESS
          </button>
        </div>
        
        {/* Service Description */}
        <div className="mt-12 sm:mt-16 md:mt-20">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 sm:p-8">
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed text-center">
              Automation isn&#39;t about replacing humans it&#39;s about empowering them to focus on what matters most. Our AI and automation solutions streamline processes, reduce errors, and create opportunities for growth that manual processes simply can&#39;t match.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function AIAutomationPage() {
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
        badge="AI & AUTOMATION SOLUTIONS"
        headline="INTELLIGENT AUTOMATION. SMART BUSINESS GROWTH."
        subheading="Let technology handle the repetitive tasks while you focus on strategy and growth. From chatbots to workflow automation, we build AI solutions that work."
        ctaText="AUTOMATE YOUR BUSINESS"
      />
      
      {/* Service-specific content */}
      <Suspense fallback={<LoadingFallback />}>
        <AIAutomationContent />
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