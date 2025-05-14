"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Check, ArrowRight, Zap, BarChart, TrendingUp, DollarSign } from 'lucide-react';

const PricingSection = () => {
  const benefits = [
    { text: "One-time payment, lifetime benefits", icon: <Zap className="w-4 h-4 text-emerald-400" /> },
    { text: "Start receiving client invites within days", icon: <TrendingUp className="w-4 h-4 text-emerald-400" /> },
    { text: "ROI typically within first 1-2 projects", icon: <BarChart className="w-4 h-4 text-emerald-400" /> },
    { text: "Potential earnings of $5,000-$10,000/month", icon: <DollarSign className="w-4 h-4 text-emerald-400" /> }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0"></div>
      
      {/* Glowing circle backgrounds */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-violet-500/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-indigo-500/10 blur-[100px] rounded-full"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="text-[#E0E0FF]">Transform</span> Your Upwork Experience?
            </h2>
          </motion.div>
          
          {/* Pricing Card */}
          <CardContainer containerClassName="py-10">
            <CardBody className="bg-gradient-to-br from-indigo-900 to-violet-900 border-indigo-700/30 relative w-full max-w-3xl mx-auto h-auto rounded-2xl p-1 border shadow-xl">
              {/* Glow border effect */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-indigo-500/20 to-violet-500/20 animate-pulse"></div>
              </div>
              
              <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 sm:p-10 md:p-12">
                <CardItem
                  translateZ={60}
                  className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-white text-center"
                >
                  All This For Just <span className="text-[#E0E0FF]">79K PKR</span>
                </CardItem>
                
                <CardItem
                  translateZ={40}
                  className="mt-4 text-center text-gray-400 text-sm sm:text-base md:text-lg"
                >
                  One-time payment. Lifetime of client invitations.
                </CardItem>
                
                {/* Value proposition */}
                <CardItem translateZ={80} className="mt-8">
                  <div className="bg-indigo-900/30 rounded-xl border border-indigo-700/30 p-6">
                    <h3 className="text-[#E0E0FF] font-semibold text-lg mb-4">Value You'll Receive:</h3>
                    <ul className="space-y-3">
                      {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="rounded-full bg-emerald-500/10 p-1 mt-0.5">{benefit.icon}</div>
                          <span className="text-gray-200">{benefit.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardItem>
                
                {/* ROI callout */}
                <CardItem translateZ={100} className="mt-8 w-full">
                  <div className="relative bg-gradient-to-r from-violet-600/20 to-indigo-600/20 rounded-lg p-5 border border-indigo-500/30">
                    <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4">
                      <div className="text-4xl">✨</div>
                    </div>
                    <h4 className="text-lg sm:text-xl font-medium text-white mb-2">ROI That Makes Sense</h4>
                    <p className="text-gray-300 text-sm sm:text-base">
                      Most clients recover their investment with just one high-quality client they wouldn't have found otherwise. Everything after that is pure profit.
                    </p>
                  </div>
                </CardItem>
                
                {/* CTA Button */}
                <CardItem translateZ={120} className="mt-10 w-full flex justify-center">
                  <button 
                    onClick={() => window.open("https://calendly.com/usamaashraf558/15min", "_blank", "noopener,noreferrer")}
                    className="relative bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center gap-2 shadow-2xl shadow-violet-500/20 transition-all duration-300 group"
                  >
                    <span>Turn On My Money Machine</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    <span className="absolute inset-x-0 -bottom-0.5 h-14 bg-white/10 blur-lg rounded-full"></span>
                  </button>
                </CardItem>
                
                {/* Money-back note */}
                <CardItem translateZ={30} className="mt-8 text-center">
                  <p className="text-sm text-gray-400">
                    Backed by our performance guarantee. We make it work, or you get your money back.
                  </p>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 