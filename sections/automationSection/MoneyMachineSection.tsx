"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, BarChart3, CheckCircle, Gem, Video } from 'lucide-react';
import { WobbleCard } from "@/components/ui/wobble-card";

const MoneyMachineSection = () => {
  const features = [
    {
      id: 1,
      title: "Revamped, SEO-optimized Profile",
      icon: <CheckCircle className="h-5 w-5 text-[#E0E0FF]" />,
      description: "Transform your profile into a client magnet with our expert SEO optimization."
    },
    {
      id: 2,
      title: "High-Ticket Niche Research",
      icon: <BarChart3 className="h-5 w-5 text-[#E0E0FF]" />,
      description: "We identify the most profitable niches where clients are willing to pay premium rates."
    },
    {
      id: 3,
      title: "5 Proof-Driven Portfolio Projects",
      icon: <Gem className="h-5 w-5 text-[#E0E0FF]" />,
      description: "Showcase your expertise with carefully crafted portfolio pieces that convert browsers to clients."
    },
    {
      id: 4,
      title: "3 Ready-to-Sell Project Catalogs",
      icon: <Check className="h-5 w-5 text-[#E0E0FF]" />,
      description: "Launch with pre-made service packages designed to attract high-paying clients instantly."
    },
    {
      id: 5,
      title: "Video Introduction (Script + Editing)",
      icon: <Video className="h-5 w-5 text-[#E0E0FF]" />,
      description: "Stand out with a professional video that builds trust and showcases your personality."
    },
    {
      id: 6,
      title: "Profile Optimization for Visibility & Conversion",
      icon: <Sparkles className="h-5 w-5 text-[#E0E0FF]" />,
      description: "Every element of your profile is crafted to maximize Upwork's algorithm and client conversion."
    }
  ];

  const handleBookConsultation = () => {
    window.open("https://calendly.com/usamaashraf558/15min", "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 uppercase">
              Turn On the <span className="text-[#E0E0FF]">Money Machine</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              The only system you need to automate Upwork success.
            </p>
          </motion.div>
          
          {/* WobbleCards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full mb-16">
            {/* Main Feature Card */}
            <WobbleCard
              containerClassName="col-span-1 lg:col-span-2 h-full bg-violet-900 min-h-[300px] lg:min-h-[300px]"
            >
              <div className="max-w-md">
                <h2 className="text-left text-balance text-xl md:text-2xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Here's what's included in your Upwork Automation Package:
                </h2>
                <p className="mt-4 text-left text-base/6 text-neutral-200">
                  Everything you need to transform your Upwork profile into a client-attracting machine that generates invites 24/7.
                </p>
              </div>
              
              <div className="absolute -right-10 -bottom-10 transform rotate-6 opacity-10">
                <svg width="300" height="300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3V21M17 6H4.5M19.5 12H7M17 18H4.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </WobbleCard>
            
            {/* CTA Card */}
            <WobbleCard 
              containerClassName="col-span-1 min-h-[300px] bg-gradient-to-br from-indigo-800 to-violet-900"
            >
              <h2 className="max-w-80 text-left text-balance text-xl md:text-2xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                🔥 Be in the Top 5%
              </h2>
              <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                Join the elite group of freelancers who earn consistently through client invitations rather than endless proposals.
              </p>
              <div className="mt-8 z-50 relative">
                <button
                  type="button"
                  onClick={handleBookConsultation}
                  className="relative z-50 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white px-6 py-3 rounded-full text-base font-semibold inline-flex items-center gap-2 shadow-lg shadow-indigo-900/30 transition-all duration-300 cursor-pointer"
                >
                  Book a Free Consultation
                </button>
              </div>
            </WobbleCard>
          </div>
          
          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature) => (
              <WobbleCard 
                key={feature.id} 
                containerClassName="bg-gray-800/40 backdrop-blur min-h-[220px]"
              >
                <div className="w-fit rounded-full bg-[#E0E0FF]/10 p-3 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </WobbleCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoneyMachineSection; 