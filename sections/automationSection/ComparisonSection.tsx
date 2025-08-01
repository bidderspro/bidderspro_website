"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { TextAnimate } from "@/components/magicui/text-animate";

interface ComparisonItem {
  negative: string;
  positive: string;
}

const ComparisonSection = () => {
  const comparisonData: ComparisonItem[] = [
    {
      negative: "Staying up all night because someone told you \"applying at night works better.\"",
      positive: "Let clients come to you through invites, your off-site hustle stays untouched and uninterrupted."
    },
    {
      negative: "Spending your hard-earned cash on bidding tools that do nothing but burn through your connects.",
      positive: "Earn $5,000-$10,000+ every month by hopping on calls with high-ticket clients."
    },
    {
      negative: "Facing radio silence from clients, proposal after proposal, no response, just frustration.",
      positive: "Scale higher, faster, stronger with every passing day, your growth compounds."
    },
    {
      negative: "Draining money with zero returns, stuck in a cycle that feels more like a hamster wheel than a strategy.",
      positive: "Get 10x return on your investment within the very first month of automation."
    }
  ];

  return (
    <section className="py-10 md:py-18 lg:py-22 text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 via-violet-900/5 to-gray-900/0"></div>
      <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 right-1/3 w-1/3 h-1/3 bg-violet-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent via-violet-400 to-transparent"></div>
            <span className="mx-3 text-violet-400 font-medium text-sm uppercase tracking-wider">Compare & Decide</span>
            <div className="h-px w-8 bg-gradient-to-r from-transparent via-violet-400 to-transparent"></div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-violet-100 to-white">
            Here's The Difference
          </h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
            See how our automation system transforms your Upwork experience and eliminates common freelancing frustrations
          </p>
        </motion.div>

        <div className="overflow-hidden rounded-xl shadow-2xl border-2 border-violet-400/30 bg-gradient-to-b from-gray-900 to-gray-950 relative">
          {/* Enhanced glow effects */}
          <div className="absolute inset-0 rounded-xl blur-md bg-violet-500 opacity-10"></div>
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
          
          <div className="overflow-x-auto relative z-10">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-violet-500/30 bg-gradient-to-r from-gray-800/80 to-gray-900/80">
                  <th className="py-5 px-6 text-left w-1/2">
                    <div className="flex items-center space-x-2">
                      <div className="w-1 h-6 bg-red-400 rounded-full"></div>
                      <span className="text-lg md:text-xl font-bold text-red-100 tracking-wide">Say Goodbye To:</span>
                    </div>
                  </th>
                  <th className="py-5 px-6 text-left w-1/2">
                    <div className="flex items-center space-x-2">
                      <div className="w-1 h-6 bg-violet-400 rounded-full"></div>
                      <span className="text-lg md:text-xl font-bold text-violet-100 tracking-wide">Experience What It's Like To:</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <motion.tr 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.15 }}
                    className={`${index < comparisonData.length - 1 ? "border-b border-violet-500/20" : ""} hover:bg-violet-900/10 transition-colors duration-300`}
                  >
                    <td className="p-5 md:p-6 border-r border-violet-500/20">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-6 h-6 rounded-full bg-red-900/50 flex items-center justify-center">
                            <X className="h-4 w-4 text-red-400" />
                          </div>
                        </div>
                        <p className="text-base md:text-lg text-gray-200 leading-relaxed">
                          {item.negative}
                        </p>
                      </div>
                    </td>
                    <td className="p-5 md:p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-6 h-6 rounded-full bg-violet-900/50 flex items-center justify-center">
                            <Check className="h-4 w-4 text-violet-300" />
                          </div>
                        </div>
                        <p className="text-base md:text-lg text-gray-200 leading-relaxed">
                          {item.positive}
                        </p>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Bottom gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500/0 via-violet-500/50 to-violet-500/0"></div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;