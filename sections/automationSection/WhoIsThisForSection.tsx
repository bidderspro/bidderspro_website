"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Box, Lock, Search, Settings, Sparkles, Users } from 'lucide-react';
//import SectionContainer from "@/components/ui/section-container";

type ChecklistItem = {
  id: number;
  text: string;
  icon: React.ReactNode;
  area: string;
};

const WhoIsThisForSection = () => {
  // Checklist items
  const checklistItems: ChecklistItem[] = [
    { 
      id: 1, 
      text: 'Struggle to get responses even with 100+ proposals', 
      icon: <Box className="h-4 w-4 text-white" />,
      area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
    },
    { 
      id: 2, 
      text: 'Have a 90%+ Job Success Score (JSS)', 
      icon: <Settings className="h-4 w-4 text-white" />,
      area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
    },
    { 
      id: 3, 
      text: 'Want to earn $5,000–$10,000+/month', 
      icon: <Lock className="h-4 w-4 text-white" />,
      area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
    },
    { 
      id: 4, 
      text: 'Are ready to stop chasing and start closing', 
      icon: <Sparkles className="h-4 w-4 text-white" />,
      area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
    },
    { 
      id: 5, 
      text: 'Want clients to invite you instead of ghosting you', 
      icon: <Search className="h-4 w-4 text-white" />,
      area: "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
    }
  ];

  interface GridItemProps {
    area: string;
    icon: React.ReactNode;
    text: string;
    index: number;
  }

  const GridItem = ({ area, icon, text, index }: GridItemProps) => {
    return (
      <motion.li 
        className={`min-h-[14rem] list-none ${area}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
      >
        <div className="relative h-full rounded-2xl p-1.5 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 group">
          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
          <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border border-violet-500/20 bg-white/5 backdrop-blur-sm p-6 md:p-7 shadow-lg hover:bg-white/10 transition-all duration-300">
            <div className="relative flex flex-1 flex-col justify-between gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500/30 to-fuchsia-500/30 flex items-center justify-center group-hover:from-violet-500/40 group-hover:to-fuchsia-500/40 transition-all duration-300">
                {icon}
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-lg md:text-xl text-white">
                  {text}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </motion.li>
    );
  };

  return (
    <section id="who-is-this-for" className="relative overflow-hidden py-16 md:py-24 lg:py-32 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-6xl mx-auto">
            {/* Heading */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-violet-500/20 mb-6">
                <Users className="w-4 h-4 text-violet-400 mr-2" />
                <span className="text-sm text-gray-200 font-medium">Perfect Fit</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 text-transparent bg-clip-text">Who Is This For?</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                You're a perfect fit for our automation system if you...
              </p>
            </div>
            
            {/* Grid layout */}
            <div className="max-w-6xl mx-auto">
              <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
                {checklistItems.map((item, index) => (
                  <GridItem 
                    key={item.id} 
                    area={item.area} 
                    icon={item.icon} 
                    text={item.text}
                    index={index}
                  />
                ))}
              </ul>
            </div>
            
            {/* Bonus Note */}
            <motion.div 
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-block bg-white/5 backdrop-blur-sm border border-violet-500/20 px-8 py-5 rounded-xl hover:bg-white/10 transition-all duration-300 shadow-lg">
                <p className="text-violet-300 text-lg font-medium">
                  Even if you're not Top Rated, we've got a solution for you too!
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoIsThisForSection;