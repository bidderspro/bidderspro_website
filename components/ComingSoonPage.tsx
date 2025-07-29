"use client";

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ComingSoonPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set launch date (30 days from now) - memoized to prevent re-creation on every render
  const launchDate = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 30);
    return date;
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 py-8">
      {/* Animated background elements - optimized for mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-5 w-48 h-48 md:w-72 md:h-72 md:top-20 md:left-10 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-5 w-64 h-64 md:w-96 md:h-96 md:bottom-20 md:right-10 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <motion.div
        className="text-center space-y-6 sm:space-y-8 relative z-10 max-w-4xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo */}
        <motion.div 
          variants={itemVariants}
          className="flex justify-center mb-6 sm:mb-8"
        >
          <motion.div
            variants={pulseVariants}
            animate="animate"
          >
            <Image
              src="/assets/images/bp-logo.webp"
              alt="Bidders Pro Logo"
              width={100}
              height={100}
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-2xl shadow-2xl"
            />
          </motion.div>
        </motion.div>

        {/* Main heading */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent leading-tight px-2">
            Coming Soon
          </h1>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div variants={itemVariants} className="py-6 sm:py-8">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-300 mb-4 sm:mb-6 px-2">
            Launch in:
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-xs sm:max-w-md mx-auto px-2">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds }
            ].map(({ label, value }) => (
              <motion.div
                key={label}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-gray-700/50 min-h-[80px] sm:min-h-[90px] flex flex-col justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                  {value.toString().padStart(2, '0')}
                </div>
                <div className="text-xs sm:text-sm text-gray-400 mt-1">{label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
} 