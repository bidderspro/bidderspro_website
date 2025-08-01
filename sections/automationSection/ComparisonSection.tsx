"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { TextAnimate } from "@/components/magicui/text-animate";

interface ComparisonItem {
  feature: string;
  traditional: string;
  difference: string;
  experience: string;
}

const ComparisonSection = () => {
  const comparisonData: ComparisonItem[] = [
    {
      feature: "Client Acquisition",
      traditional: "Spending 20+ hours weekly sending proposals with 5% response rate",
      difference: "Clients discover and contact you directly through optimized profile",
      experience: "Save 15+ hours/week on proposal writing"
    },
    {
      feature: "Response Rate",
      traditional: "Wasting connects on low-quality leads and unresponsive clients",
      difference: "Pre-qualified clients who already know your value proposition",
      experience: "Earn $50-$150/hour+ with premium clients"
    },
    {
      feature: "Conversion Rate",
      traditional: "Converting less than 10% of your leads into paying projects",
      difference: "70%+ conversion rate with clients who are ready to work with you",
      experience: "Close deals faster with minimal negotiation"
    },
    {
      feature: "Pricing Power",
      traditional: "Competing with global freelancers in a race to the bottom",
      difference: "Position yourself as a premium service provider with unique value",
      experience: "2-5x your current monthly revenue"
    }
  ];

  return (
    <section className="py-20 md:py-24 lg:py-28 bg-gray-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
              <TextAnimate animate="fadeIn">HERE'S THE DIFFERENCE</TextAnimate>
            </h2>
            <p className="text-sm md:text-base text-gray-300 max-w-xl mx-auto">
              See how our Upwork automation system transforms your freelancing experience
            </p>
          </motion.div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-gray-700/50 bg-gray-800/30 backdrop-blur-sm shadow-xl">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-700/50 bg-gray-800/50">
                <th className="py-5 px-6 font-semibold text-gray-200 text-left">Feature</th>
                <th className="py-5 px-6 font-semibold text-red-300 text-left">Say Goodbye To</th>
                <th className="py-5 px-6 font-semibold text-violet-300 text-left">Here's Difference</th>
                <th className="py-5 px-6 font-semibold text-emerald-300 text-left">Experience</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((item, index) => (
                <motion.tr 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="border-b border-gray-700/30 hover:bg-gray-800/50 transition-colors"
                >
                  <td className="py-5 px-6 font-medium text-white">{item.feature}</td>
                  <td className="py-5 px-6 text-red-200">
                    <div className="flex items-center">
                      <X size={18} className="text-red-400 mr-3 flex-shrink-0" />
                      <span>{item.traditional}</span>
                    </div>
                  </td>
                  <td className="py-5 px-6 text-violet-200">
                    <div className="flex items-center">
                      <Check size={18} className="text-violet-400 mr-3 flex-shrink-0" />
                      <span>{item.difference}</span>
                    </div>
                  </td>
                  <td className="py-5 px-6 text-emerald-200">
                    <div className="flex items-center">
                      <Check size={18} className="text-emerald-400 mr-3 flex-shrink-0" />
                      <span>{item.experience}</span>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;