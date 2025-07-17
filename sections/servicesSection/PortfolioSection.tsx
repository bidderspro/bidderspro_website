"use client";

import React, { useState, useEffect, useCallback, memo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { TextAnimate } from '@/components/magicui/text-animate';
import { HovermeButton } from '@/components/ui/Button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Detect reduced motion preference
const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
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

// Portfolio item component
const PortfolioItem = memo(({ 
  title,
  category,
  description,
  image,
  isActive,
  prefersReducedMotion
}: { 
  title: string;
  category: string;
  description: string;
  image: string;
  isActive: boolean;
  prefersReducedMotion: boolean;
}) => {
  if (prefersReducedMotion) {
    return (
      <div className={`portfolio-item ${isActive ? 'block' : 'hidden'}`}>
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
          <Image 
            src={image} 
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 md:p-8">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{title}</h3>
            <p className="text-sm md:text-base text-blue-200 mb-3">{category}</p>
            <p className="text-xs md:text-sm text-gray-300 line-clamp-3">{description}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      className={`portfolio-item ${isActive ? 'block' : 'hidden'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <Image 
          src={image} 
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 md:p-8"
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
        >
          <motion.h3 
            className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {title}
          </motion.h3>
          <motion.p 
            className="text-sm md:text-base text-blue-200 mb-3"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {category}
          </motion.p>
          <motion.p 
            className="text-xs md:text-sm text-gray-300 line-clamp-3"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {description}
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
});

PortfolioItem.displayName = 'PortfolioItem';

// Navigation button component
const NavButton = memo(({ 
  direction, 
  onClick,
  disabled = false
}: { 
  direction: 'prev' | 'next';
  onClick: () => void;
  disabled?: boolean;
}) => {
  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={`
        flex items-center justify-center w-12 h-12 rounded-full 
        bg-blue-900/30 hover:bg-blue-800/50 transition-colors duration-300
        disabled:opacity-50 disabled:cursor-not-allowed
        border border-blue-500/30
      `}
      aria-label={direction === 'prev' ? 'Previous portfolio item' : 'Next portfolio item'}
    >
      {direction === 'prev' ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
    </button>
  );
});

NavButton.displayName = 'NavButton';

// Portfolio indicator component
const PortfolioIndicator = memo(({ 
  total, 
  current,
  onClick
}: { 
  total: number;
  current: number;
  onClick: (index: number) => void;
}) => {
  return (
    <div className="flex items-center gap-2 mt-6">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onClick(index)}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            index === current ? 'bg-blue-500 w-6' : 'bg-gray-500 hover:bg-blue-300'
          }`}
          aria-label={`Go to portfolio item ${index + 1}`}
        />
      ))}
    </div>
  );
});

PortfolioIndicator.displayName = 'PortfolioIndicator';

// Sample portfolio items with more detailed descriptions for the services page
const portfolioItems = [
  {
    id: 1,
    title: 'Credit Health',
    category: 'Financial Services',
    description: 'A comprehensive credit monitoring and improvement platform with personalized recommendations and real-time alerts.',
    image: '/assets/images/team/portfolio.svg',
  },
  {
    id: 2,
    title: 'TechNova',
    category: 'SaaS Platform',
    description: 'Enterprise-level project management solution with AI-powered analytics and team collaboration features.',
    image: '/assets/images/team/portfolio.svg',
  },
  {
    id: 3,
    title: 'EcoTrack',
    category: 'Environmental Monitoring',
    description: 'IoT-based environmental monitoring system for businesses to track and reduce their carbon footprint.',
    image: '/assets/images/team/portfolio.svg',
  },
  {
    id: 4,
    title: 'MediConnect',
    category: 'Healthcare',
    description: 'Telemedicine platform connecting patients with healthcare providers for virtual consultations and follow-ups.',
    image: '/assets/images/team/portfolio.svg',
  },
];

// Main portfolio section component
const PortfolioSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  
  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
  }, []);
  
  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // Auto-advance slides every 5 seconds if not reduced motion
  useEffect(() => {
    if (prefersReducedMotion) return;
    
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    
    return () => clearInterval(timer);
  }, [handleNext, prefersReducedMotion]);

  return (
    <section id="portfolio" className="relative py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <TextAnimate 
            as="h2" 
            animate="slideUp"
            className="text-sm md:text-base font-semibold tracking-wider text-blue-400 uppercase mb-2"
          >
            WORK WITH US
          </TextAnimate>
          
          <TextAnimate 
            as="h3" 
            animate="fadeIn"
            delay={0.2}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 dark:text-white"
          >
            OUR PORTFOLIO
          </TextAnimate>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Portfolio items */}
          <div className="relative">
            {portfolioItems.map((item, index) => (
              <PortfolioItem
                key={item.id}
                title={item.title}
                category={item.category}
                description={item.description}
                image={item.image}
                isActive={index === currentIndex}
                prefersReducedMotion={prefersReducedMotion}
              />
            ))}
            
            {/* Navigation controls */}
            <div className="flex justify-between mt-6">
              <div className="flex items-center gap-4">
                <NavButton 
                  direction="prev" 
                  onClick={handlePrev} 
                />
                <NavButton 
                  direction="next" 
                  onClick={handleNext} 
                />
              </div>
              
              <PortfolioIndicator 
                total={portfolioItems.length} 
                current={currentIndex}
                onClick={goToSlide}
              />
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="mt-12 md:mt-16 text-center">
            <Link href="/calendar">
              <HovermeButton 
                bgColor="bg-blue-600" 
                hoverBgColor="bg-blue-700"
                className="text-base md:text-lg"
              >
                Discuss Your Project
              </HovermeButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection; 