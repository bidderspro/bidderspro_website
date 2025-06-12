"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Calendar as CalendarIcon, ArrowRight } from 'lucide-react';

interface MeetingType {
  id: string;
  title: string;
  duration: string;
  description: string;
  icon: React.ReactNode;
}

interface MeetingTypeSelectorProps {
  selectedType: string;
  onTypeSelect: (typeId: string) => void;
}

export default function MeetingTypeSelector({ selectedType, onTypeSelect }: MeetingTypeSelectorProps) {
  const meetingTypes: MeetingType[] = [
    {
      id: "30-minute-consultation",
      title: "30 Minute Consultation",
      duration: "30 min",
      description: "A quick call to discuss your needs and how we can help.",
      icon: <Clock className="w-5 h-5" />,
    },
    {
      id: "60-minute-strategy",
      title: "60 Minute Strategy Session",
      duration: "60 min",
      description: "An in-depth discussion about your business and automation strategy.",
      icon: <Users className="w-5 h-5" />,
    },
    {
      id: "product-demo",
      title: "Product Demo",
      duration: "45 min",
      description: "See our products and services in action with a personalized demo.",
      icon: <CalendarIcon className="w-5 h-5" />,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
          <span className="w-2 h-8 bg-violet-500 rounded-full mr-3"></span>
          Select Meeting Type
        </h3>
        
        {/* Decorative Elements */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-600/10 rounded-full blur-xl pointer-events-none"></div>
        <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-blue-600/10 rounded-full blur-xl pointer-events-none"></div>
      </div>
      
      <motion.div 
        className="space-y-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {meetingTypes.map((type, index) => (
          <motion.div
            key={type.id}
            variants={item}
            whileHover={{ 
              scale: 1.02, 
              transition: { duration: 0.2 } 
            }}
            className="relative overflow-hidden"
          >
            <button
              className={`w-full p-5 rounded-xl text-left transition-all duration-300 bg-gray-800/60 hover:bg-gray-800/90 group ${
                selectedType === type.id 
                  ? 'border-transparent ring-2 ring-violet-500 shadow-lg shadow-violet-500/20' 
                  : 'border border-gray-700 hover:border-violet-500/50'
              }`}
              onClick={() => onTypeSelect(type.id)}
            >
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                  selectedType === type.id 
                    ? 'bg-gradient-to-br from-violet-500 to-purple-600' 
                    : 'bg-violet-600/20'
                }`}>
                  {type.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-medium text-white">{type.title}</h4>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{type.duration}</span>
                  </div>
                  <p className="text-sm text-gray-300">{type.description}</p>
                </div>
                <motion.div 
                  animate={{ 
                    x: selectedType === type.id ? 0 : 10,
                    opacity: selectedType === type.id ? 1 : 0
                  }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 self-center"
                >
                  <div className="w-8 h-8 rounded-full bg-violet-500 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </motion.div>
              </div>
              
              {/* Animated gradient border effect */}
              {selectedType === type.id && (
                <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                  <div className="absolute inset-0 rounded-xl ring-1 ring-violet-500/50"></div>
                  <motion.div 
                    className="absolute -inset-1 bg-gradient-to-r from-violet-600/20 via-purple-600/20 to-violet-600/20"
                    animate={{ 
                      x: ["0%", "100%", "0%"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{ filter: 'blur(8px)' }}
                  />
                </div>
              )}
            </button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
} 