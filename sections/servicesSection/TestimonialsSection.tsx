"use client";

import React, { memo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { lazy, Suspense } from 'react';

// Lazy load heavy components
const TextAnimate = lazy(() => 
  import('@/components/magicui/text-animate').then(mod => ({ default: mod.TextAnimate }))
);

// Simple loading fallback
const LoadingFallback = memo(({ children, className }: { children?: React.ReactNode, className?: string }) => (
  <div className={className || ""}>{children}</div>
));

LoadingFallback.displayName = 'LoadingFallback';

// Detect reduced motion preference
const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return;
    
    try {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);
      
      const onChange = () => setPrefersReducedMotion(mediaQuery.matches);
      
      if (typeof mediaQuery.addEventListener === 'function') {
        mediaQuery.addEventListener('change', onChange);
        return () => mediaQuery.removeEventListener('change', onChange);
      } else {
        mediaQuery.addListener?.(onChange);
        return () => mediaQuery.removeListener?.(onChange);
      }
    } catch (error) {
      console.error('Error in useReducedMotion:', error);
      return () => {};
    }
  }, []);
  
  return prefersReducedMotion;
};

// Testimonial card component
const TestimonialCard = memo(({ 
  title, 
  quote, 
  author, 
  position,
  image,
  color,
  prefersReducedMotion
}: { 
  title: string;
  quote: string;
  author: string;
  position: string;
  image: string;
  color: string;
  prefersReducedMotion: boolean;
}) => {
  // Simplified version for reduced motion
  if (prefersReducedMotion) {
    return (
      <div className={`testimonial-card ${color} rounded-xl overflow-hidden p-6 sm:p-8 text-white h-full flex flex-col justify-between`}>
        <div>
          <h3 className="text-lg sm:text-xl font-bold mb-4">{title}</h3>
          <p className="text-xs sm:text-sm text-white/90 mb-6">"{quote}"</p>
        </div>
        <div className="flex items-center">
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden mr-3">
            <Image 
              src={image} 
              alt={author}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-bold text-sm">{author}</p>
            <p className="text-xs text-white/80">{position}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      className={`testimonial-card ${color} rounded-xl overflow-hidden p-6 sm:p-8 text-white h-full flex flex-col justify-between`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div>
        <motion.h3 
          className="text-lg sm:text-xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {title}
        </motion.h3>
        <motion.p 
          className="text-xs sm:text-sm text-white/90 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          "{quote}"
        </motion.p>
      </div>
      <motion.div 
        className="flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden mr-3">
          <Image 
            src={image} 
            alt={author}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-bold text-sm">{author}</p>
          <p className="text-xs text-white/80">{position}</p>
        </div>
      </motion.div>
    </motion.div>
  );
});

TestimonialCard.displayName = 'TestimonialCard';

// Navigation button component
const NavButton = memo(({ 
  direction, 
  onClick,
  className = ""
}: { 
  direction: 'prev' | 'next';
  onClick: () => void;
  className?: string;
}) => {
  return (
    <button 
      onClick={onClick}
      className={`
        flex items-center justify-center w-10 h-10 rounded-full 
        text-black bg-white transition-all duration-300
        hover:bg-opacity-90
        ${className}
      `}
      aria-label={direction === 'prev' ? 'Previous testimonial' : 'Next testimonial'}
    >
      {direction === 'prev' ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      )}
    </button>
  );
});

NavButton.displayName = 'NavButton';

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    title: "SHOPIFY DEVELOPMENT",
            quote: "They didn't just build our Shopify store, they rebuilt our sales engine.",
    author: "Tania R.",
    position: "GlowCrate Skincare",
    image: "/assets/images/image 1.svg",
    color: "bg-black"
  },
  {
    id: 2,
    title: "WORDPRESS DEVELOPMENT",
    quote: "I used to hate updating WordPress. Now it's actually fun.",
    author: "Ahmed K.",
    position: "VerdaTech Solutions",
    image: "/assets/images/image 2.svg",
    color: "bg-blue-600"
  },
  {
    id: 3,
    title: "MOBILE APP DEVELOPMENT",
    quote: "Their mobile app team delivered a working MVP in 6 weeks. Crazy fast.",
    author: "Jessica T.",
    position: "PackPal App",
    image: "/assets/images/image 3.svg",
    color: "bg-gray-700"
  },
  {
    id: 4,
    title: "BUSINESS AUTOMATION",
    quote: "Our automation now runs the business while we sleep.",
    author: "Rajiv M.",
    position: "Livie Fashion Co.",
    image: "/assets/images/image 4.svg",
    color: "bg-black"
  },
  {
    id: 5,
    title: "SEO SERVICES",
    quote: "Ranked page 3 to top 5 in under 2 months. That's what SEO should feel like.",
    author: "Clara W.",
    position: "FitWell Naturals",
    image: "/assets/images/image 1.svg",
    color: "bg-blue-600"
  },
  {
    id: 6,
    title: "CLIENT SUPPORT",
    quote: "They support us like they're part of our team.",
    author: "Dylan F.",
    position: "FlowRate Analytics",
    image: "/assets/images/image 2.svg",
    color: "bg-gray-700"
  },
  {
    id: 7,
    title: "STRATEGIC DESIGN",
            quote: "Not just design, strategic design. We got more signups in 2 weeks than in 2 months before.",
    author: "Nida S.",
    position: "SoundNest Audio",
    image: "/assets/images/image 3.svg",
    color: "bg-black"
  },
  {
    id: 8,
    title: "E-COMMERCE SOLUTIONS",
    quote: "Our conversion rate doubled after implementing their checkout optimization.",
    author: "Michael P.",
    position: "OutdoorGear Pro",
    image: "/assets/images/image 4.svg",
    color: "bg-blue-600"
  },
  {
    id: 9,
    title: "AI INTEGRATION",
    quote: "Their AI solution reduced our customer service workload by 40% while improving satisfaction.",
    author: "Sarah L.",
    position: "EcoHome Essentials",
    image: "/assets/images/image 1.svg",
    color: "bg-gray-700"
  },
];

// Main testimonials section component
const TestimonialsSection = () => {
  const prefersReducedMotion = useReducedMotion();
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  
  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };
  
  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Get current testimonials to display
  const currentTestimonials = testimonials.slice(
    currentPage * itemsPerPage, 
    (currentPage + 1) * itemsPerPage
  );

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
        <div className="flex justify-between items-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            What Our Clients Say
          </h2>
          
          <div className="flex gap-2">
            <NavButton 
              direction="prev" 
              onClick={handlePrev}
            />
            <NavButton 
              direction="next" 
              onClick={handleNext}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {currentTestimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              title={testimonial.title}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
              image={testimonial.image}
              color={testimonial.color}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </div>
        
        {/* Pagination indicators */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentPage === index ? "bg-white w-6" : "bg-white/50"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialsSection; 