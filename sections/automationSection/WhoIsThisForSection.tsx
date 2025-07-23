"use client";

import React from 'react';
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";

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
      <li 
        className={`min-h-[14rem] list-none ${area} animate-fade-in`}
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className="relative h-full rounded-2xl border border-gray-700/50 p-2 md:rounded-3xl md:p-3">
          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
          <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0 border-gray-700/50 bg-gray-800/50 backdrop-blur-sm p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] hover:bg-gray-800/70 transition-colors duration-300">
            <div className="relative flex flex-1 flex-col justify-between gap-3">
              <div className="w-fit rounded-lg border border-[#E0E0FF]/30 bg-[#E0E0FF]/10 p-2">
                {icon}
              </div>
              <div className="space-y-3">
                <h2 className="font-bold text-base/[1.125rem] text-gray-200 md:text-lg/[1.375rem] lg:text-xl">
                  {text}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  };

  return (
    <section className="py-20 sm:py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 animate-slide-in-up">
              Who Is This <span className="text-[#E0E0FF]">For?</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-delayed">
              You're a fit if you…
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
          <div className="mt-12 sm:mt-16 text-center animate-fade-in-delayed-2">
            <div className="inline-block bg-[#E0E0FF]/10 backdrop-blur-sm border border-[#E0E0FF]/20 px-6 py-4 rounded-lg hover:bg-[#E0E0FF]/20 transition-colors duration-300">
              <p className="text-[#E0E0FF] text-lg font-medium">
                Even if you're not Top Rated—we've got a solution for you too!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisForSection;