"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { ArrowRight, Check, X, Calendar, Clock, User, Target } from 'lucide-react';

const AutomationShiftSection = () => {
  return (
    <section className="py-24 relative overflow-hidden ">
      {/* Content container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-3xl md:text-4xl font-bold uppercase text-white mb-4"
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
          
          {/* 3D Card Comparison */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-6 lg:gap-10 mb-16">
            {/* Before Automation Card */}
            <CardContainer containerClassName="p-0">
              <CardBody className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700/50 relative w-full h-auto rounded-xl p-6 border shadow-xl">
                <CardItem
                  translateZ="50"
                  className="text-2xl font-bold text-white mb-2 flex items-center gap-2"
                >
                  <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
                    <X className="h-4 w-4 text-red-400" />
                  </div>
                  Before Automation
                </CardItem>
                
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-gray-300 text-sm max-w-sm mt-4 mb-6"
                >
                  Endless proposal writing, waking up at odd hours, and competing against hundreds of other freelancers.
                </CardItem>
                
                <CardItem translateZ="100" className="w-full mt-4">
                  <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-700/50 mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-400">Proposal Status</span>
                      <span className="text-xs text-red-400 bg-red-500/10 px-2 py-0.5 rounded">Pending</span>
                    </div>
                    <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-red-500/50 rounded-full" style={{ width: '5%' }}></div>
                    </div>
                    <div className="mt-3 text-xs text-gray-400 flex justify-between">
                      <span>0/20 Responses</span>
                      <span>2:32 AM</span>
                    </div>
                  </div>
                </CardItem>
                
                <CardItem translateZ="80" className="w-full">
                  <ul className="space-y-2">
                    {['Endless proposals with no responses', 'Late night job hunting', 'Racing against other freelancers'].map((text, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <X className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </CardItem>
                
                <div className="mt-8 flex justify-between items-center">
                  <CardItem
                    translateZ={30}
                    className="flex items-center gap-1 text-xs text-gray-400"
                  >
                    <Clock className="w-3 h-3" />
                    <span>2:32 AM</span>
                  </CardItem>
                  <CardItem
                    translateZ={30}
                    className="px-3 py-1.5 bg-red-500/10 text-red-400 rounded-lg text-xs"
                  >
                    Frustrating
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
            
            {/* After Automation Card */}
            <CardContainer containerClassName="p-0">
              <CardBody className="bg-gradient-to-br from-indigo-900 to-violet-900 border-indigo-700/30 relative w-full h-auto rounded-xl p-6 border shadow-xl">
                <CardItem
                  translateZ="50"
                  className="text-2xl font-bold text-white mb-2 flex items-center gap-2"
                >
                  <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <Check className="h-4 w-4 text-emerald-400" />
                  </div>
                  After Automation
                </CardItem>
                
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-gray-200 text-sm max-w-sm mt-4 mb-6"
                >
                  Let clients come to you through invites—your off-site hustle stays untouched and uninterrupted.
                </CardItem>
                
                <CardItem translateZ="100" className="w-full mt-4">
                  <div className="bg-indigo-800/40 p-4 rounded-lg border border-indigo-700/30 mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-200">Client Invitations</span>
                      <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">Active</span>
                    </div>
                    <div className="h-2 w-full bg-indigo-700/50 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500/50 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                    <div className="mt-3 text-xs text-gray-300 flex justify-between">
                      <span>15/20 Invites</span>
                      <span>This week</span>
                    </div>
                  </div>
                </CardItem>
                
                <CardItem translateZ="80" className="w-full">
                  <ul className="space-y-2">
                    {['Clients discover and invite you', 'Work on your own schedule', 'Higher conversion rate'].map((text, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-200">
                        <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </CardItem>
                
                <div className="mt-8 flex justify-between items-center">
                  <CardItem
                    translateZ={30}
                    className="flex items-center gap-1 text-xs text-gray-300"
                  >
                    <Calendar className="w-3 h-3" />
                    <span>Sunday 10:30 AM</span>
                  </CardItem>
                  <CardItem
                    translateZ={30}
                    as="button"
                    className="px-3 py-1.5 bg-emerald-500/10 text-emerald-400 rounded-lg text-xs"
                  >
                    Effortless
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <CardContainer containerClassName="py-8">
              <CardBody className="bg-gradient-to-br from-indigo-950 to-gray-900 border-indigo-800/20 w-full max-w-3xl h-auto p-8 rounded-xl border">
                <CardItem translateZ="50" className="text-xl text-gray-200 font-medium">
                  Imagine this:
                </CardItem>
                
                <CardItem translateZ="80" className="text-lg text-gray-300 my-4">
                  It's Sunday morning. You're relaxing, and a pop-up says:
                </CardItem>
                
                <CardItem translateZ="120" className="w-full my-8">
                  <div className="bg-[#E0E0FF]/10 backdrop-blur-md rounded-lg border border-[#E0E0FF]/20 p-6">
                    <p className="text-[#E0E0FF] font-medium text-xl md:text-2xl">
                      "You've been invited to submit a proposal."
                    </p>
                  </div>
                </CardItem>
                
                <CardItem translateZ="60" className="text-lg text-gray-300">
                  It's not a fluke. It's Upwork Automation.
                </CardItem>
                
                <CardItem translateZ="40" className="text-lg text-gray-300 mt-4">
                  We help Upwork's algorithm do the donkey work for you.
                </CardItem>
                
                <CardItem translateZ="30" className="mt-8 w-full flex justify-center">
                  <button 
                    onClick={() => window.open("https://calendly.com/usamaashraf558/15min", "_blank", "noopener,noreferrer")}
                    className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white px-6 py-3 rounded-full text-base font-semibold inline-flex items-center gap-2 shadow-lg shadow-indigo-900/30 transition-all duration-300"
                  >
                    Get Started <ArrowRight className="w-4 h-4" />
                  </button>
                </CardItem>
              </CardBody>
            </CardContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AutomationShiftSection; 