import React from 'react';
import { motion } from 'framer-motion';
import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button';

const FeatureItem = ({ icon, title, delay }: { icon: string; title: string; delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="flex items-start gap-4 p-4 sm:p-5 md:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#E0E0FF]/30 transition-all duration-300"
    >
      <div className="text-[#E0E0FF] text-2xl sm:text-3xl">{icon}</div>
      <div className="text-gray-200 text-sm sm:text-base md:text-lg">{title}</div>
    </motion.div>
  );
};

const MoneyMachineSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-2/3 h-32 bg-purple-500/20 blur-[100px] rounded-full"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 uppercase">
              Turn On the <span className="text-[#E0E0FF]">Money Machine</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              The only system you need to automate Upwork success.
            </p>
          </motion.div>
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8 text-center"
          >
            <h3 className="text-xl sm:text-2xl text-white mb-8">
              Here's what's included in your Upwork Automation Package:
            </h3>
          </motion.div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mb-12 sm:mb-16">
            <FeatureItem icon="✅" title="Revamped, SEO-optimized Profile" delay={0.3} />
            <FeatureItem icon="✅" title="High-Ticket Niche Research" delay={0.4} />
            <FeatureItem icon="✅" title="5 Proof-Driven Portfolio Projects" delay={0.5} />
            <FeatureItem icon="✅" title="3 Ready-to-Sell Project Catalogs" delay={0.6} />
            <FeatureItem icon="✅" title="Video Introduction (Script + Editing)" delay={0.7} />
            <FeatureItem icon="✅" title="Profile Optimization for Visibility & Conversion" delay={0.8} />
          </div>
          
          {/* Illustrations */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center items-center mb-12 sm:mb-16"
          >
            <div className="grid grid-cols-3 gap-6">
              <div className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 bg-gradient-to-br from-violet-500/20 to-violet-500/10 rounded-2xl flex items-center justify-center border border-white/10">
                <svg className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 text-[#E0E0FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 7h-9"></path>
                  <path d="M14 17H5"></path>
                  <circle cx="17" cy="17" r="3"></circle>
                  <circle cx="7" cy="7" r="3"></circle>
                </svg>
              </div>
              <div className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 bg-gradient-to-br from-blue-500/20 to-blue-500/10 rounded-2xl flex items-center justify-center border border-white/10">
                <svg className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 text-[#E0E0FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 6v12"></path>
                  <path d="M17 18v-6"></path>
                  <path d="M7 12v6"></path>
                  <path d="M3 6v6"></path>
                  <path d="M21 18v-6"></path>
                </svg>
              </div>
              <div className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 bg-gradient-to-br from-indigo-500/20 to-indigo-500/10 rounded-2xl flex items-center justify-center border border-white/10">
                <svg className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 text-[#E0E0FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
                  <path d="M12 12v9"></path>
                  <path d="m8 17 4 4 4-4"></path>
                </svg>
              </div>
            </div>
          </motion.div>
          
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <InteractiveHoverButton
              className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-semibold inline-flex items-center gap-2 mx-auto transition-all duration-300 shadow-lg shadow-violet-500/20"
              onClick={() => window.open("https://calendly.com/usamaashraf558/15min", "_blank")}
            >
              Be in the Top 5%
            </InteractiveHoverButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MoneyMachineSection; 