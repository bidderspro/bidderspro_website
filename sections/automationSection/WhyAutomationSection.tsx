import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const WhyAutomationSection = () => {
  return (
    <section className="pt-0 pb-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 relative overflow-hidden">
      
      {/* Content container */}
      <div className="container items-center justify-center mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Alert icon and heading */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-4 sm:mb-6"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">Why You're Here & Why This Page Exists</h2>
          </motion.div>
          
          {/* Subheading */}
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-md sm:text-lg md:text-xl text-[#E0E0FF] mb-8 sm:mb-12 max-w-3xl mx-auto text-center"
          >
            Upwork feels broken—but it's not. You're just playing the wrong game.
          </motion.h3>
          
          {/* Content and illustration container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">
            {/* Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-6"
            >
              <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed">
                You've probably been told, <span className="text-red-400 font-semibold">"Upwork is dead."</span>
              </p>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed">
                But the truth is—it's only dead for those burning connects blindly, sending template proposals, and hoping for a miracle.
              </p>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed">
                You're tired, frustrated, and ready for change.
              </p>
            </motion.div>
            
            {/* Freelancer SVG illustration */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px]">
                <Image 
                  src="/assets/images/freelancer.svg" 
                  alt="Tired freelancer at 2AM" 
                  fill
                  style={{ objectFit: 'contain' }}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
                className="absolute top-4 right-4 bg-red-500/10 px-3 sm:px-4 py-1 sm:py-2 rounded-full"
              >
                <p className="text-red-400 font-medium text-sm sm:text-base">0 Invites</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
                className="absolute bottom-4 left-4 bg-gray-800/80 px-2 sm:px-3 py-1 rounded-lg"
              >
                <p className="text-gray-400 text-xs sm:text-sm">2:32 AM</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyAutomationSection;