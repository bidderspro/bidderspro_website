"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { ArrowRight, Sparkles, Users, Clock, Shield } from 'lucide-react';

const FinalCTASection = () => {
  const features = [
    {
      icon: <Sparkles className="w-5 h-5 text-emerald-400" />,
      text: "Automated client invitations"
    },
    {
      icon: <Users className="w-5 h-5 text-emerald-400" />,
      text: "High-ticket client targeting"
    },
    {
      icon: <Clock className="w-5 h-5 text-emerald-400" />,
      text: "24/7 opportunity monitoring"
    },
    {
      icon: <Shield className="w-5 h-5 text-emerald-400" />,
      text: "Exclusive access to premium clients"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              🚀 Ready To Let Clients Come To You?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Let our automation do the heavy lifting while you close high-ticket deals like a pro.
            </p>
          </motion.div>

          {/* Main CTA Card */}
          <CardContainer containerClassName="py-10">
            <CardBody className="bg-gradient-to-br from-indigo-900 to-violet-900 border-indigo-700/30 relative w-full max-w-3xl mx-auto h-auto rounded-2xl p-1 border shadow-xl">
              {/* Glow border effect */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-indigo-500/20 to-violet-500/20 animate-pulse"></div>
              </div>
              
              <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 sm:p-10 md:p-12">
                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 bg-indigo-900/30 rounded-lg p-4 border border-indigo-700/30">
                      <div className="rounded-full bg-emerald-500/10 p-2">
                        {feature.icon}
                      </div>
                      <span className="text-gray-200">{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* Urgency Message */}
                <div className="relative bg-gradient-to-r from-violet-600/20 to-indigo-600/20 rounded-lg p-5 border border-indigo-500/30 mb-8">
                  <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4">
                    <div className="text-4xl">✨</div>
                  </div>
                  <p className="text-gray-300 text-center text-lg font-medium">
                    Spots are limited. We only work with serious freelancers and agency owners.
                  </p>
                </div>

                {/* CTA Button */}
                <div className="flex justify-center">
                  <button 
                    onClick={() => window.open("https://calendly.com/usamaashraf558/15min", "_blank", "noopener,noreferrer")}
                    className="relative bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center gap-2 shadow-2xl shadow-violet-500/20 transition-all duration-300 group"
                  >
                    <span>🔘 Turn On My Client Machine Now</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    <span className="absolute inset-x-0 -bottom-0.5 h-14 bg-white/10 blur-lg rounded-full"></span>
                  </button>
                </div>

                {/* Trust Indicators */}
                <div className="mt-8 text-center">
                  <p className="text-sm text-gray-400">
                    Join the elite group of freelancers who've transformed their business with our automation system.
                  </p>
                </div>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection; 