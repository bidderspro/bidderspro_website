import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { TextAnimate } from "@/components/magicui/text-animate";
import { IconCode, IconDeviceMobile, IconRobot, IconBrandWordpress, IconShoppingCart, IconBrandUpwork } from '@tabler/icons-react';

// Simple loading component
const LoadingFallback = ({ height = "h-96" }: { height?: string }) => (
  <div className={`${height} animate-pulse bg-gray-800/50 rounded-lg w-full`} />
);

// Card component with hover effects
const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  delay 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  delay: number; 
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ 
        scale: 1.03,
        backgroundColor: "#1e40af", // Darker blue on hover
        transition: { duration: 0.2 }
      }}
      className="bg-blue-600 rounded-lg p-6 md:p-7 cursor-pointer group transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
    >
      <motion.div 
        className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
        whileHover={{ rotate: 5 }}
      >
        <div className="w-6 h-6 text-blue-600 transition-all duration-300 group-hover:text-blue-700">
          {icon}
        </div>
      </motion.div>
      <h3 className="text-xl font-bold mb-3 text-white group-hover:translate-x-1 transition-transform duration-300">
        {title}
      </h3>
      <p className="text-sm text-blue-100 transition-all duration-300 group-hover:text-white">
        {description}
      </p>
    </motion.div>
  );
};

export default function ServicesContentSection() {
  // Service data
  const services = [
    {
      icon: <IconCode className="w-6 h-6" />,
      title: "Web Development",
      description: "Custom-Built, High-Performance Websites Tailored To Your Business Needs",
      delay: 0.1
    },
    {
      icon: <IconDeviceMobile className="w-6 h-6" />,
      title: "Mobile App Development",
      description: "Seamless, Scalable Apps That Engage Your Audience Anywhere",
      delay: 0.2
    },
    {
      icon: <IconRobot className="w-6 h-6" />,
      title: "AI & Automation",
      description: "Let Technology Do The Heavy Lifting While You Focus On Growth",
      delay: 0.3
    },
    {
      icon: <IconBrandWordpress className="w-6 h-6" />,
      title: "WordPress Development",
      description: "Flexible, Easy-To-Manage Sites That Grow With You",
      delay: 0.4
    },
    {
      icon: <IconShoppingCart className="w-6 h-6" />,
      title: "Shopify Development",
      description: "Fully Optimised ECommerce Stores That Convert Browsers Into Buyers",
      delay: 0.5
    },
    {
      icon: <IconBrandUpwork className="w-6 h-6" />,
      title: "Upwork Automation",
      description: "You Need To Get Positive Results When You Spend Hard Earned Marketing And Promotions.",
      delay: 0.6
    }
  ];

  return (
    <div className="w-full py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 xl:px-12 relative z-10">
        {/* Section header with star icon */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <motion.div 
            className="text-blue-500"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles">
              <path d="M12 3v18"></path>
              <path d="M3 12h18"></path>
              <path d="M12 3l-2 6.5"></path>
              <path d="M12 3l2 6.5"></path>
              <path d="M12 21l-2-6.5"></path>
              <path d="M12 21l2-6.5"></path>
              <path d="M3 12l6.5-2"></path>
              <path d="M3 12l6.5 2"></path>
              <path d="M21 12l-6.5-2"></path>
              <path d="M21 12l-6.5 2"></path>
            </svg>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-sm text-blue-500 font-medium"
          >
            Our Core Services
          </motion.p>
        </div>
        
        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <Suspense fallback={<h2 className="text-4xl md:text-5xl font-bold text-white">WHAT DO WE <span className="text-blue-500"> PROVIDE</span>?</h2>}>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              <TextAnimate 
                as="span" 
                animate="fadeIn" 
                className="inline"
              >
                WHAT DO WE 
              </TextAnimate>
              <span className="text-blue-500"> PROVIDE</span>?
            </h2>
          </Suspense>
        </motion.div>
        
        {/* Services cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-7">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={service.delay}
            />
          ))}
        </div>
        
        {/* Bottom tagline */}
        <div className="text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            whileHover={{ 
              scale: 1.05, 
              borderColor: "rgba(59, 130, 246, 0.5)",
              transition: { duration: 0.2 }
            }}
            className="inline-block px-6 py-3 border border-blue-500/30 rounded-full hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
          >
            <p className="text-sm md:text-base text-white">
              From The First Idea To The Final Launch, We're With You Every Step Of The Way.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 