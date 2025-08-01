"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TextAnimate } from "@/components/magicui/text-animate";
import { Search, Code, MessageSquare, CheckCircle, Settings, Database } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

interface ProcessCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
  variant: 'primary' | 'secondary';
}

const ProcessCard: React.FC<ProcessCardProps> = ({ title, description, icon, delay, variant }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="relative h-full rounded-xl p-1.5"
    >
      <GlowingEffect
        spread={30}
        glow={true}
        disabled={false}
        proximity={50}
        inactiveZone={0.01}
      />
      <div 
        className={`relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-lg border-0 backdrop-blur-sm p-6 transition-colors duration-300 shadow-lg ${
          variant === 'primary' 
            ? 'bg-white/10 border border-violet-500/30 hover:bg-white/15'
            : 'bg-white/5 border border-blue-500/30 hover:bg-white/10'
        }`}
      >
        <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-2">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-200">{description}</p>
      </div>
    </motion.div>
  );
};

const HowItWorksUnderHood = () => {
  const topProcessSteps = [
    {
      title: "AI-POWERED PROFILE OPTIMIZATION",
      description: "Our system analyzes top-performing Upwork profiles in your niche and optimizes your profile with strategic keywords, compelling descriptions, and perfect formatting that increases your visibility in search results by up to 400%.",
      icon: <Search className="w-5 h-5 text-violet-300" />,
      delay: 0.1
    },
    {
      title: "PORTFOLIO ENHANCEMENT",
      description: "We create and optimize portfolio items that showcase your skills in the most appealing way to clients, with case studies and results that demonstrate your expertise and attract high-value projects.",
      icon: <Code className="w-5 h-5 text-violet-300" />,
      delay: 0.2
    },
    {
      title: "SPECIALIZED SERVICE OFFERINGS",
      description: "Our system crafts specialized service offerings that match what high-paying clients are actively searching for, positioning you as the perfect solution to their specific problems.",
      icon: <Settings className="w-5 h-5 text-violet-300" />,
      delay: 0.3
    }
  ];

  const bottomProcessSteps = [
    {
      title: "CLIENT ATTRACTION SYSTEM",
      description: "We implement advanced client attraction systems using proprietary algorithms that make your profile appear in front of ideal clients at the perfect moment in their hiring journey.",
      icon: <MessageSquare className="w-5 h-5 text-blue-300" />,
      delay: 0.4
    },
    {
      title: "AUTOMATED CLIENT INTERACTIONS",
      description: "Our intelligent automation tools handle initial client interactions, qualification, and scheduling with personalized messaging that maintains your unique voice while saving you hours of time.",
      icon: <Database className="w-5 h-5 text-blue-300" />,
      delay: 0.5
    },
    {
      title: "AUTHORITY POSITIONING",
      description: "We set up systems that position you as an authority in your niche through strategic content, testimonials, and social proof that allows you to command premium rates and attract long-term clients.",
      icon: <CheckCircle className="w-5 h-5 text-blue-300" />,
      delay: 0.6
    }
  ];

  return (
    <section className="py-20 md:py-24 lg:py-28 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute -bottom-40 right-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
              HOW IT WORKS <span className="bg-gradient-to-r from-violet-400 to-purple-600 text-transparent bg-clip-text">UNDER THE HOOD</span>
            </h2>
            <p className="text-sm md:text-base text-gray-300 max-w-xl mx-auto">
              Our proprietary technology stack powers your Upwork success
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {topProcessSteps.map((step, index) => (
            <ProcessCard
              key={index}
              title={step.title}
              description={step.description}
              icon={step.icon}
              delay={step.delay}
              variant="primary"
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bottomProcessSteps.map((step, index) => (
            <ProcessCard
              key={index}
              title={step.title}
              description={step.description}
              icon={step.icon}
              delay={step.delay}
              variant="secondary"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksUnderHood;