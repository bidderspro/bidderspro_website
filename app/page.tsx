"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ComingSoonPage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set launch date (30 days from now)
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 30);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Here you would typically send the email to your backend
      console.log('Email submitted:', email);
    }
  };

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
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <motion.div
        className="text-center space-y-8 px-4 relative z-10 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo */}
        <motion.div 
          variants={itemVariants}
          className="flex justify-center mb-8"
        >
          <motion.div
            variants={pulseVariants}
            animate="animate"
          >
            <Image
              src="/assets/images/bp-logo.webp"
              alt="Bidders Pro Logo"
              width={120}
              height={120}
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>
        </motion.div>

        {/* Main heading */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
            Coming Soon
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">
            Bidders Pro
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Revolutionary Upwork automation and freelancing solutions are on the way. 
            Get ready to transform your freelancing success with cutting-edge AI technology.
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div variants={itemVariants} className="py-8">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-300 mb-6">
            Launch in:
          </h3>
          <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds }
            ].map(({ label, value }) => (
              <motion.div
                key={label}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="text-2xl md:text-3xl font-bold text-white">
                  {value.toString().padStart(2, '0')}
                </div>
                <div className="text-sm text-gray-400 mt-1">{label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Email Signup */}
        <motion.div variants={itemVariants} className="max-w-md mx-auto">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-300 mb-4">
                Be the first to know when we launch
              </h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
                <motion.button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Notify Me
                </motion.button>
              </div>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-6 bg-green-900/20 border border-green-500/30 rounded-lg"
            >
              <div className="text-green-400 text-lg font-semibold mb-2">
                🎉 Thank you for signing up!
              </div>
              <p className="text-gray-300">
                We'll notify you as soon as we launch. Get ready for something amazing!
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Features Preview */}
        <motion.div variants={itemVariants} className="pt-8">
          <h3 className="text-xl font-semibold text-gray-300 mb-6">
            What's Coming:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              {
                icon: "🤖",
                title: "AI Automation",
                description: "Smart proposal generation and bidding automation"
              },
              {
                icon: "📊",
                title: "Analytics Dashboard",
                description: "Track your success rates and optimize performance"
              },
              {
                icon: "🚀",
                title: "Growth Tools",
                description: "Advanced features to scale your freelancing business"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-lg hover:border-gray-600/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.2 }}
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Media Links */}
        <motion.div variants={itemVariants} className="pt-8">
          <p className="text-gray-400 mb-4">Follow us for updates:</p>
          <div className="flex justify-center space-x-6">
            {[
              { name: 'LinkedIn', href: '#', icon: '💼' },
              { name: 'Twitter', href: '#', icon: '🐦' },
              { name: 'Discord', href: '#', icon: '💬' }
            ].map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                className="text-2xl hover:scale-110 transition-transform duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
