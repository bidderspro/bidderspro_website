"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Sparkles } from 'lucide-react';
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import SectionContainer from "@/components/ui/section-container";

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: {
    text: string;
    included: boolean;
  }[];
  popular?: boolean;
  buttonText: string;
  buttonLink: string;
}

const PricingSection = () => {
  const pricingTiers: PricingTier[] = [
    {
      name: "Upwork Automation",
      price: "89,000 PKR",
      description: "Complete Upwork automation solution for freelancers",
      features: [
        { text: "AI Profile Optimization", included: true },
        { text: "Job Matching Algorithm", included: true },
        { text: "Advanced Proposal Templates", included: true },
        { text: "Client Attraction System", included: true },
        { text: "Analytics Dashboard", included: true },
        { text: "Priority Support", included: true },
        { text: "Strategy Consultation", included: true },
      ],
      popular: true,
      buttonText: "Get Started",
      buttonLink: "https://calendly.com/usamaashraf558/15min"
    }
  ];

  return (
    <SectionContainer id="pricing" className="text-white">
      <div className="text-center mb-16">
        <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-violet-500/20 mb-6">
          <Sparkles className="w-4 h-4 text-violet-400 mr-2" />
          <span className="text-sm text-gray-200 font-medium">Limited Time Offer</span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 text-transparent bg-clip-text">Exclusive Pricing</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Get complete access to our Upwork automation system with a single payment
        </p>
      </div>

        <div className="max-w-3xl mx-auto">
          {pricingTiers.map((tier, index) => (
          <motion.div
              key={tier.name}
            initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative rounded-2xl p-1.5 bg-gradient-to-r from-violet-500/50 to-purple-600/50">
                <GlowingEffect
                  spread={50}
                  glow={true}
                  disabled={false}
                  proximity={80}
                  inactiveZone={0.01}
                />
                <div className="relative h-full flex flex-col rounded-xl border border-violet-500/20 bg-white/5 backdrop-blur-sm p-8 md:p-10 shadow-lg">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-violet-500 to-purple-600 text-white text-xs font-bold py-1 px-6 rounded-full">
                    LIMITED TIME OFFER
                  </div>
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">{tier.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-400 to-purple-500 text-transparent bg-clip-text">{tier.price}</span>
                      <span className="text-gray-300 ml-2">one-time payment</span>
                    </div>
                    <p className="text-gray-200 text-lg mb-6">{tier.description}</p>
              </div>
              
                  <div className="bg-white/5 rounded-xl p-6 mb-8">
                    <h4 className="text-lg font-semibold mb-4 text-center">What's Included:</h4>
                    <ul className="space-y-4">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <Check className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-gray-100 text-lg">
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <InteractiveHoverButton
                      className="px-10 py-4 rounded-lg font-bold text-lg transition-all bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg shadow-violet-600/20 hover:shadow-xl hover:shadow-violet-600/30"
                      onClick={() => window.open(tier.buttonLink, "_blank")}
                    >
                      {tier.buttonText}
                    </InteractiveHoverButton>
                    <p className="mt-4 text-sm text-gray-300">No hidden fees. 14-day money-back guarantee.</p>
              </div>
        </div>
      </div>
            </motion.div>
          ))}
                  </div>
        
        <div className="text-center mt-12 text-gray-300 max-w-2xl mx-auto">
          <p className="text-base">
            Have questions about the offer? 
            <a href="https://calendly.com/usamaashraf558/15min" className="text-violet-400 hover:text-violet-300 ml-1 underline underline-offset-4 decoration-violet-500/30 hover:decoration-violet-500">
              Schedule a free consultation
            </a> with our team.
          </p>
        </div>
    </SectionContainer>
  );
};

export default PricingSection; 