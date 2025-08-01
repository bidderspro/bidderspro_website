"use client";

import React, { useState, useEffect, memo } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, MessageSquare } from 'lucide-react';
import { TextAnimate } from "@/components/magicui/text-animate";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import Image from 'next/image';
//import SectionContainer from "@/components/ui/section-container";

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

interface Testimonial {
  id: number;
  title: string;
  quote: string;
  author: string;
  position: string;
  image: string;
  color: string;
}

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

const TestimonialSlider = () => {
  const prefersReducedMotion = useReducedMotion();
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  const testimonials: Testimonial[] = [
    {
      id: 1,
      title: "UPWORK AUTOMATION",
      quote: "This automation system completely transformed my Upwork experience. I went from spending hours sending proposals with a 5% response rate to having clients reach out to me directly.",
      author: "Sarah Johnson",
      position: "UI/UX Designer",
      image: "/assets/images/image 1.svg",
      color: "bg-gradient-to-br from-gray-900 to-black"
    },
    {
      id: 2,
      title: "CLIENT ACQUISITION",
      quote: "I was skeptical at first, but the results speak for themselves. My client acquisition cost dropped by 70% and I'm now fully booked 3 months in advance.",
      author: "Michael Chen",
      position: "Full Stack Developer",
      image: "/assets/images/image 2.svg",
      color: "bg-gradient-to-br from-blue-700 to-blue-900"
    },
    {
      id: 3,
      title: "FREELANCE SUCCESS",
      quote: "The automation system helped me land my first $10k project within just 2 weeks of setting it up. Best investment I've made for my freelance business.",
      author: "Jessica Williams",
      position: "Content Strategist",
      image: "/assets/images/image 3.svg",
      color: "bg-gradient-to-br from-gray-700 to-gray-900"
    }
  ];

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
    <section id="testimonials" className="relative overflow-hidden py-16 md:py-24 lg:py-32 text-white">
      {/* Background glow effects */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full opacity-20 bg-gradient-to-br from-violet-500/20 to-transparent"
        animate={{ 
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-full h-full opacity-20 bg-gradient-to-tl from-blue-500/20 to-transparent"
        animate={{ 
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 4
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-violet-500/20 mb-6">
              <MessageSquare className="w-4 h-4 text-violet-400 mr-2" />
              <span className="text-sm text-gray-200 font-medium">Success Stories</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 text-transparent bg-clip-text">What Our Users Say</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Real results from freelancers just like you
            </p>
          </div>

          <div className="max-w-6xl mx-auto relative">
            <div className="flex justify-between items-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                Client Testimonials
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

          <div className="text-center mt-24">
            <InteractiveHoverButton
              className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 flex items-center gap-2 mx-auto w-full max-w-xs sm:max-w-md"
              onClick={() => window.open("https://calendly.com/usamaashraf558/15min", "_blank")}
            >
              <span>Book Your Free Strategy Call</span>
             
            </InteractiveHoverButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSlider;