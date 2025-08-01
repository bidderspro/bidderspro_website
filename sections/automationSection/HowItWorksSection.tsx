"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TextAnimate } from "@/components/magicui/text-animate";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Search, Code, MessageSquare, CheckCircle, Zap } from "lucide-react";
import SectionContainer from "@/components/ui/section-container";

interface ProcessCardProps {
  number: string;
  title: string;
  description: string;
  delay: number;
  icon: React.ReactNode;
}

const ProcessCard: React.FC<ProcessCardProps> = ({ number, title, description, delay, icon }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="relative h-full"
    >
      <div className="relative rounded-2xl p-1.5 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 overflow-hidden group">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl border border-violet-500/20 bg-white/5 backdrop-blur-sm p-6 shadow-lg hover:bg-white/10 transition-all duration-300">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-violet-500/30 to-fuchsia-500/30 rounded-full flex items-center justify-center mr-3 group-hover:from-violet-500/40 group-hover:to-fuchsia-500/40 transition-all duration-300">
              {icon}
            </div>
            <div className="text-violet-400 font-bold text-2xl">{number}</div>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
          <p className="text-base text-gray-300">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const HowItWorksSection = () => {
  const processSteps = [
    {
      number: "01",
      title: "AI ANALYZES YOUR JOBS",
      description: "Our advanced AI system scans thousands of Upwork job posts in real-time, analyzing requirements, budgets, and client history to identify perfect matches for your unique skills and experience level.",
      delay: 0.1,
      icon: <Search className="w-5 h-5 text-violet-300" />
    },
    {
      number: "02",
      title: "AI OPTIMIZES YOUR PROFILE",
      description: "We transform your Upwork profile with strategic keyword optimization, portfolio enhancement, and service offerings that make you highly discoverable to your ideal clients.",
      delay: 0.2,
      icon: <Code className="w-5 h-5 text-violet-300" />
    },
    {
      number: "03",
      title: "AI MANAGES COMMUNICATIONS",
      description: "Our system handles follow-ups, scheduling, and initial client interactions with personalized messaging that maintains your unique voice while maximizing response rates.",
      delay: 0.3,
      icon: <MessageSquare className="w-5 h-5 text-violet-300" />
    },
    {
      number: "04",
      title: "YOU RECEIVE QUALIFIED LEADS",
      description: "Skip the proposal grind - receive pre-qualified leads directly from clients who are already interested in your services, allowing you to focus on delivering exceptional work.",
      delay: 0.4,
      icon: <CheckCircle className="w-5 h-5 text-violet-300" />
    }
  ];

  return (
    <SectionContainer id="how-it-works" className="text-white">
      <div className="text-center mb-16">
        <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-violet-500/20 mb-6">
          <Zap className="w-4 h-4 text-violet-400 mr-2" />
          <span className="text-sm text-gray-200 font-medium">Simple 4-Step Process</span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 text-transparent bg-clip-text">How It Works</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Our automation system works behind the scenes to bring clients directly to you
        </p>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <ProcessCard
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              delay={step.delay}
              icon={step.icon}
            />
          ))}
        </div>
    </SectionContainer>
  );
};

export default HowItWorksSection;