import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const steps = Array.from({ length: totalSteps }, (_, i) => i + 1);

  return (
    <div className="flex justify-center mb-10">
      <div className="relative flex items-center w-full max-w-md px-4">
        {steps.map((step, index) => (
          <React.Fragment key={step}>
            {/* Step Circle */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={{ 
                scale: currentStep >= step ? 1 : 0.8,
                opacity: currentStep >= step ? 1 : 0.5
              }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              <div className={`
                relative flex items-center justify-center w-10 h-10 rounded-full 
                ${currentStep > step 
                  ? 'bg-gradient-to-br from-green-500 to-emerald-600' 
                  : currentStep === step 
                    ? 'bg-gradient-to-br from-violet-500 to-purple-600 shadow-lg shadow-violet-600/30' 
                    : 'bg-gray-700'}
                text-white font-medium transition-all duration-300
              `}>
                {currentStep > step ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <span>{step}</span>
                )}
                
                {/* Pulse effect for current step */}
                {currentStep === step && (
                  <span className="absolute inset-0 rounded-full animate-ping-slow bg-violet-500/40" />
                )}
              </div>
              
              {/* Step label */}
              <motion.div 
                className={`absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs whitespace-nowrap ${
                  currentStep >= step ? 'text-violet-300' : 'text-gray-500'
                }`}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ 
                  duration: 2, 
                  repeat: currentStep === step ? Infinity : 0,
                  repeatType: "reverse" 
                }}
              >
                {getStepLabel(step)}
              </motion.div>
            </motion.div>
            
            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div className="flex-grow mx-1 h-[2px] bg-gray-700 relative">
                <motion.div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-violet-500 to-purple-600"
                  initial={{ width: '0%' }}
                  animate={{ width: currentStep > step ? '100%' : '0%' }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                />
              </div>
            )}
          </React.Fragment>
        ))}
        
        {/* No decorative elements */}
      </div>
    </div>
  );
}

// Helper function to get step labels
function getStepLabel(step: number): string {
  switch (step) {
    case 1:
      return "Select Date";
    case 2:
      return "Meeting Type";
    case 3:
      return "Your Details";
    case 4:
      return "Confirmation";
    default:
      return `Step ${step}`;
  }
} 