import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';

const NotificationItem = ({ delay }: { delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20, x: 40 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ 
        duration: 0.6,
        delay,
        type: "spring",
        stiffness: 100
      }}
      className="bg-white rounded-lg shadow-md p-3 mb-3 max-w-[250px] transform"
    >
      <div className="flex items-start gap-3">
        <div className="min-w-[32px] h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-green-600" stroke="currentColor" strokeWidth="2">
            <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <div className="font-medium text-sm text-gray-900">New Invite!</div>
          <div className="text-xs text-gray-600">You've been invited to apply for a job.</div>
        </div>
      </div>
    </motion.div>
  );
};

const AutomationShiftSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section className="py-24 relative overflow-hidden ">
      {/* Background elements */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-violet-500/10 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-indigo-500/10 blur-3xl"></div>
      </div> */}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            >
              The Upwork Automation Shift: <span className="text-[#E0E0FF]">Let Clients Chase You</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Flip the script—stop applying, start attracting.
            </motion.p>
          </div>
          
          {/* Split screen comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 lg:gap-10 items-stretch mb-16">
            {/* Before Automation Side */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 shadow-xl flex flex-col"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-400 to-red-600"></div>
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">Before Automation</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center">
                      <svg className="w-3 h-3 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="text-gray-300 text-sm">Endless proposal writing</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center">
                      <svg className="w-3 h-3 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="text-gray-300 text-sm">Waking up at odd hours</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center">
                      <svg className="w-3 h-3 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="text-gray-300 text-sm">Competing against hundreds</p>
                  </div>
                </div>
              </div>
              
              <div className="flex-grow relative w-full h-[240px] sm:h-[300px] bg-gray-700">
                {/* Stressed desk illustration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full max-w-xs">
                    <div className="relative mb-4">
                      <div className="w-full h-24 bg-gray-600 rounded-lg"></div>
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gray-500 rounded-full"></div>
                    </div>
                    <div className="flex justify-between">
                      <div className="w-16 h-16 rounded bg-gray-600"></div>
                      <div className="w-24 h-6 bg-gray-600 rounded"></div>
                      <div className="w-10 h-10 rounded-full bg-gray-600"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-red-900/30"></div>
                
                <div className="absolute bottom-4 left-4 right-4 bg-gray-900/80 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-gray-300 text-sm md:text-base italic">
                    "Just one more proposal... maybe someone will reply this time."
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* After Automation Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 shadow-xl flex flex-col"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600"></div>
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">After Automation</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <svg className="w-3 h-3 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="text-gray-300 text-sm">Clients discover and invite you</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <svg className="w-3 h-3 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="text-gray-300 text-sm">Work on your own schedule</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <svg className="w-3 h-3 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="text-gray-300 text-sm">Higher conversion, less competition</p>
                  </div>
                </div>
              </div>
              
              <div className="flex-grow relative w-full h-[240px] sm:h-[300px] bg-emerald-900/30">
                {/* Relaxed freelancer illustration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full max-w-xs">
                    <div className="flex items-center gap-6">
                      <div className="w-20 h-20 bg-gray-500 rounded-full"></div>
                      <div className="flex-1">
                        <div className="w-full h-6 bg-gray-600 rounded mb-2"></div>
                        <div className="w-3/4 h-4 bg-gray-600 rounded"></div>
                      </div>
                    </div>
                    <div className="mt-6 w-full h-32 bg-gray-600 rounded-lg"></div>
                  </div>
                </div>
                
                {/* Notification popup animations */}
                <div className="absolute top-8 right-8">
                  <NotificationItem delay={1.2} />
                  <NotificationItem delay={2.5} />
                  <NotificationItem delay={3.8} />
                </div>
                
                <div className="absolute bottom-4 left-4 right-4 bg-gray-900/80 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-gray-300 text-sm md:text-base italic">
                    "Another invite while I'm enjoying my Sunday coffee!"
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-xl text-gray-200"
            >
              Imagine this:
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-gray-300"
            >
              It's Sunday morning. You're relaxing, and a pop-up says:
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#E0E0FF]/10 backdrop-blur-md rounded-lg border border-[#E0E0FF]/20 p-6 my-6"
            >
              <p className="text-[#E0E0FF] font-medium text-xl md:text-2xl">
                "You've been invited to submit a proposal."
              </p>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-lg text-gray-300"
            >
              It's not a fluke. It's Upwork Automation.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              className="text-lg text-gray-300"
            >
              We help Upwork's algorithm do the donkey work for you.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AutomationShiftSection; 