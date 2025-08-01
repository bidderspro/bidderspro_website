"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { TextAnimate } from "@/components/magicui/text-animate";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { CheckCircle } from 'lucide-react';
//import SectionContainer from "@/components/ui/section-container";

interface StepProps {
  currentStep: number;
  totalSteps: number;
}

// Progress bar component for the quiz
const ProgressBar: React.FC<StepProps> = ({ currentStep, totalSteps }) => {
  const steps = Array.from({ length: totalSteps }, (_, i) => i + 1);
  
  // Step labels for better context
  const stepLabels = [
    "Projects",
    "Proposals",
    "Responses",
    "Challenges",
    "Experience",
    "Profile",
    "Call"
  ];

  return (
    <div className="flex justify-center mb-12">
      <div className="relative flex flex-col w-full max-w-md">
        {/* Visual progress bar */}
        <div className="relative h-2 bg-gray-800 rounded-full mb-6 overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-purple-600"
            initial={{ width: '0%' }}
            animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        
        {/* Step indicators */}
        <div className="relative flex items-center justify-between w-full px-2">
          {steps.map((step, index) => (
            <div key={step} className="flex flex-col items-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0.5 }}
                animate={{ 
                  scale: currentStep >= step ? 1 : 0.8,
                  opacity: currentStep >= step ? 1 : 0.5
                }}
                transition={{ duration: 0.3 }}
                className="relative z-10 mb-2"
              >
                <div className={cn(
                  "relative flex items-center justify-center w-10 h-10 rounded-full text-white font-medium transition-all duration-300",
                  currentStep > step 
                    ? 'bg-gradient-to-br from-violet-500 to-purple-600 ring-2 ring-violet-400/30' 
                    : currentStep === step 
                      ? 'bg-gradient-to-br from-violet-500 to-purple-600 shadow-lg shadow-violet-600/30 ring-4 ring-violet-500/30' 
                      : 'bg-gray-800 border border-gray-700'
                )}>
                  <span>{step}</span>
                  
                  {/* Enhanced pulse effect for current step */}
                  {currentStep === step && (
                    <>
                      <span className="absolute inset-0 rounded-full animate-ping-slow bg-violet-500/30" />
                      <span className="absolute -inset-1 rounded-full animate-pulse bg-violet-500/20" />
                    </>
                  )}
                </div>
              </motion.div>
              
              {/* Step label */}
              <motion.span 
                className={`text-xs ${currentStep >= step ? 'text-violet-300' : 'text-gray-500'} font-medium hidden md:block`}
                initial={{ opacity: 0 }}
                animate={{ opacity: currentStep >= step ? 1 : 0.5 }}
                transition={{ duration: 0.3 }}
              >
                {stepLabels[index]}
              </motion.span>
            </div>
          ))}
        </div>
        
        {/* Current step indicator */}
        <div className="mt-6 text-center">
          <motion.div 
            key={currentStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-sm text-violet-300 font-medium"
          >
            Step {currentStep} of {totalSteps}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Interface for form data
interface FormData {
  targetProjects: string;
  proposalFrequency: string;
  weeklyResponses: string;
  mainChallenges: string[];
  experienceLevel: string;
  profileLink: string;
  wantsCall: string;
}

// Main Quiz Section Component
const QuizSection = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    targetProjects: '',
    proposalFrequency: '',
    weeklyResponses: '',
    mainChallenges: [],
    experienceLevel: '',
    profileLink: '',
    wantsCall: ''
  });

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (value: string) => {
    setFormData(prev => {
      const currentChallenges = [...prev.mainChallenges];
      if (currentChallenges.includes(value)) {
        return { ...prev, mainChallenges: currentChallenges.filter(item => item !== value) };
      } else {
        return { ...prev, mainChallenges: [...currentChallenges, value] };
      }
    });
  };

  const handleNextQuestion = () => {
    if (currentStep < 7) {
      setCurrentStep(prev => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrevQuestion = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      // CRM webhook URL
      const webhookUrl = 'https://hook.eu2.make.com/6hy94yjeesgky8qptb0yrsntrnqess2y';
      
      const payload = {
        Target_Projects: formData.targetProjects,
        Proposal_Frequency: formData.proposalFrequency,
        Weekly_Responses: formData.weeklyResponses,
        Main_Challenges: formData.mainChallenges,
        Experience_Level: formData.experienceLevel,
        Profile_Link: formData.profileLink,
        Wants_Call: formData.wantsCall
      };
      
      // Submit form data to webhook
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit form data');
      }
      
      console.log('Form submitted successfully:', payload);
      setCurrentStep(8); // Move to success state
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error state
    } finally {
      setIsSubmitting(false);
    }
  };

  const isNextDisabled = () => {
    switch (currentStep) {
      case 1:
        return formData.targetProjects.trim() === '';
      case 2:
        return formData.proposalFrequency === '';
      case 3:
        return formData.weeklyResponses === '';
      case 4:
        return formData.mainChallenges.length === 0;
      case 5:
        return formData.experienceLevel === '';
      case 6:
        return formData.profileLink.trim() === '';
      case 7:
        return formData.wantsCall === '';
      default:
        return false;
    }
  };

  const renderQuestion = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-center">What kind of projects do you want to win on Upwork?</h3>
            <div className="relative">
              <textarea
                name="targetProjects"
                value={formData.targetProjects}
                onChange={handleTextChange}
                placeholder="e.g., UI/UX design projects for SaaS startups, landing pages, Figma to Webflow development."
                className="w-full p-4 bg-gray-800/80 border border-gray-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all duration-300 min-h-[140px] text-base"
              />
              <div className="absolute inset-0 rounded-xl pointer-events-none bg-gradient-to-tr from-violet-500/5 to-transparent opacity-50"></div>
            </div>
          </motion.div>
        );
      
      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-center">How many proposals do you send per week?</h3>
            <div className="space-y-3">
              {['0–5', '6–15', '16–30', '30+'].map((option) => (
                <motion.div 
                  key={option}
                  onClick={() => handleRadioChange('proposalFrequency', option)}
                  className={`p-5 border ${formData.proposalFrequency === option ? 'border-violet-500 bg-gradient-to-br from-violet-900/30 to-fuchsia-900/20' : 'border-gray-700'} rounded-xl cursor-pointer hover:border-violet-400 transition-all duration-300 hover:shadow-lg hover:shadow-violet-900/10`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * parseInt(option.split('–')[0]) }}
                >
                  <div className="flex items-center">
                    <div className={`w-6 h-6 rounded-full border-2 ${formData.proposalFrequency === option ? 'border-violet-500 bg-violet-500/20' : 'border-gray-600'} flex items-center justify-center mr-4 transition-all duration-300`}>
                      {formData.proposalFrequency === option && (
                        <motion.div 
                          className="w-3 h-3 bg-violet-400 rounded-full"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </div>
                    <span className={`text-base ${formData.proposalFrequency === option ? 'text-violet-300 font-medium' : 'text-gray-300'}`}>{option}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
      
      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-center">How many replies or invites do you receive weekly?</h3>
            <div className="space-y-3">
              {['0', '1–2', '3–5', '6+'].map((option) => (
                <motion.div 
                  key={option}
                  onClick={() => handleRadioChange('weeklyResponses', option)}
                  className={`p-5 border ${formData.weeklyResponses === option ? 'border-violet-500 bg-gradient-to-br from-violet-900/30 to-fuchsia-900/20' : 'border-gray-700'} rounded-xl cursor-pointer hover:border-violet-400 transition-all duration-300 hover:shadow-lg hover:shadow-violet-900/10`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * (option === '0' ? 1 : parseInt(option.split('–')[0])) }}
                >
                  <div className="flex items-center">
                    <div className={`w-6 h-6 rounded-full border-2 ${formData.weeklyResponses === option ? 'border-violet-500 bg-violet-500/20' : 'border-gray-600'} flex items-center justify-center mr-4 transition-all duration-300`}>
                      {formData.weeklyResponses === option && (
                        <motion.div 
                          className="w-3 h-3 bg-violet-400 rounded-full"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </div>
                    <span className={`text-base ${formData.weeklyResponses === option ? 'text-violet-300 font-medium' : 'text-gray-300'}`}>{option}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
      
      case 4:
        const challenges = [
          'No client replies',
          'Spending too many connects',
          'Don\'t know which jobs to apply to',
          'Not getting invites',
          'Weak or incomplete profile'
        ];
        
        return (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-center">What's your biggest challenge on Upwork right now?</h3>
            <p className="text-sm text-gray-300 text-center">Select all that apply</p>
            <div className="space-y-3">
              {challenges.map((challenge) => (
                <motion.div 
                  key={challenge}
                  onClick={() => handleCheckboxChange(challenge)}
                  className={`p-5 border ${formData.mainChallenges.includes(challenge) ? 'border-violet-500 bg-gradient-to-br from-violet-900/30 to-fuchsia-900/20' : 'border-gray-700'} rounded-xl cursor-pointer hover:border-violet-400 transition-all duration-300 hover:shadow-lg hover:shadow-violet-900/10`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * challenges.indexOf(challenge) }}
                >
                  <div className="flex items-center">
                    <div className={`w-6 h-6 rounded-md border-2 ${formData.mainChallenges.includes(challenge) ? 'border-violet-500 bg-violet-500/20' : 'border-gray-600'} flex items-center justify-center mr-4 transition-all duration-300`}>
                      {formData.mainChallenges.includes(challenge) && (
                        <motion.div 
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <CheckCircle className="w-4 h-4 text-violet-400" />
                        </motion.div>
                      )}
                    </div>
                    <span className={`text-base ${formData.mainChallenges.includes(challenge) ? 'text-violet-300 font-medium' : 'text-gray-300'}`}>{challenge}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
      
      case 5:
        return (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-center">How long have you been on Upwork?</h3>
            <div className="space-y-3">
              {[
                'Just started (0–3 months)',
                'Intermediate (3–12 months)',
                'Experienced (1+ year)'
              ].map((option, idx) => (
                <motion.div 
                  key={option}
                  onClick={() => handleRadioChange('experienceLevel', option)}
                  className={`p-5 border ${formData.experienceLevel === option ? 'border-violet-500 bg-gradient-to-br from-violet-900/30 to-fuchsia-900/20' : 'border-gray-700'} rounded-xl cursor-pointer hover:border-violet-400 transition-all duration-300 hover:shadow-lg hover:shadow-violet-900/10`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * idx }}
                >
                  <div className="flex items-center">
                    <div className={`w-6 h-6 rounded-full border-2 ${formData.experienceLevel === option ? 'border-violet-500 bg-violet-500/20' : 'border-gray-600'} flex items-center justify-center mr-4 transition-all duration-300`}>
                      {formData.experienceLevel === option && (
                        <motion.div 
                          className="w-3 h-3 bg-violet-400 rounded-full"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </div>
                    <span className={`text-base ${formData.experienceLevel === option ? 'text-violet-300 font-medium' : 'text-gray-300'}`}>{option}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
      
      case 6:
        return (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-center">Please share your Upwork profile link</h3>
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-violet-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
              </div>
              <input
                type="text"
                name="profileLink"
                value={formData.profileLink}
                onChange={handleTextChange}
                placeholder="https://www.upwork.com/freelancers/~0123abcd4567efgh"
                className="w-full pl-10 p-4 bg-gray-800/80 border border-gray-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all duration-300 text-base"
              />
              <div className="absolute inset-0 rounded-xl pointer-events-none bg-gradient-to-tr from-violet-500/5 to-transparent opacity-50"></div>
            </div>
          </motion.div>
        );
      
      case 7:
        return (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-center">Would you like a free profile audit or strategy call?</h3>
            <div className="space-y-3">
              {['Yes, book me in', 'Not now'].map((option, idx) => (
                <motion.div 
                  key={option}
                  onClick={() => handleRadioChange('wantsCall', option)}
                  className={`p-5 border ${formData.wantsCall === option ? 'border-violet-500 bg-gradient-to-br from-violet-900/30 to-fuchsia-900/20' : 'border-gray-700'} rounded-xl cursor-pointer hover:border-violet-400 transition-all duration-300 hover:shadow-lg hover:shadow-violet-900/10`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * idx }}
                >
                  <div className="flex items-center">
                    <div className={`w-6 h-6 rounded-full border-2 ${formData.wantsCall === option ? 'border-violet-500 bg-violet-500/20' : 'border-gray-600'} flex items-center justify-center mr-4 transition-all duration-300`}>
                      {formData.wantsCall === option && (
                        <motion.div 
                          className="w-3 h-3 bg-violet-400 rounded-full"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </div>
                    <span className={`text-base ${formData.wantsCall === option ? 'text-violet-300 font-medium' : 'text-gray-300'}`}>{option}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
      
      case 8: // Success state
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8 text-center"
          >
            <motion.div 
              className="relative w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 0.8
              }}
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [1, 0.8, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <CheckCircle className="w-12 h-12 text-white" />
              </motion.div>
              <div className="absolute -inset-2 rounded-full border-4 border-green-500/30 animate-pulse"></div>
            </motion.div>
            
            <div>
              <motion.h3 
                className="text-3xl font-bold text-white mb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Thank You!
              </motion.h3>
              <motion.p 
                className="text-lg text-gray-300 max-w-md mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {formData.wantsCall === 'Yes, book me in' 
                  ? "We'll be in touch shortly to schedule your free strategy call."
                  : "Your responses have been recorded. We'll use this information to provide you with personalized solutions."}
              </motion.p>
            </div>
            
            {formData.wantsCall === 'Yes, book me in' && (
              <motion.div 
                className="pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <InteractiveHoverButton
                    className="bg-gradient-to-br from-violet-500 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-violet-600/30 transition-all duration-300 font-medium text-lg"
                    onClick={() => window.open("https://calendly.com/usamaashraf558/15min", "_blank")}
                  >
                    Schedule Now
                  </InteractiveHoverButton>
                </motion.div>
              </motion.div>
            )}
            
            <motion.div
              className="mt-8 pt-8 border-t border-gray-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <p className="text-sm text-gray-400">
                Your information is secure and will only be used to provide you with personalized recommendations.
              </p>
            </motion.div>
          </motion.div>
        );
      
      default:
        return null;
    }
  };

  return (
    <section id="quiz" className="relative overflow-hidden py-16 md:py-24 lg:py-32 text-white">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 via-violet-900/5 to-gray-900/0"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-violet-600/40 via-transparent to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-600/40 via-transparent to-transparent"></div>
      
      {/* Animated floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-violet-600/5 blur-3xl"
        animate={{ 
          y: [0, 15, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-fuchsia-600/5 blur-3xl"
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            {/* Enhanced section title */}
            <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-violet-500/20 mb-6">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-4 h-4 text-violet-400 mr-2"
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
                </svg>
              </motion.div>
              <span className="text-sm text-gray-200 font-medium">Personalized Assessment</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-500 to-purple-400 text-transparent bg-clip-text">Find Your Perfect Fit</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Answer a few questions to help us understand your Upwork needs and get personalized recommendations tailored to your freelancing journey.
            </p>
            {currentStep < 8 && <ProgressBar currentStep={currentStep} totalSteps={7} />}
          </div>

          <div className="max-w-2xl mx-auto relative">
            <div className="relative p-8 sm:p-10 rounded-2xl backdrop-blur-lg">
              {/* Enhanced glass card effect with gradient border */}
              <div className="absolute inset-0 rounded-2xl z-0">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-violet-500/30 shadow-lg"></div>
                <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-600/10 via-transparent to-transparent"></div>
                <div className="absolute top-0 right-0 w-full h-24 bg-gradient-to-b from-white/5 to-transparent opacity-50 rounded-t-2xl"></div>
              </div>
              
              <div className="relative z-10">
                {renderQuestion()}

            {currentStep < 8 && (
              <div className="mt-10 flex justify-between items-center">
                {currentStep > 1 ? (
                  <InteractiveHoverButton
                    onClick={handlePrevQuestion}
                    className="px-6 py-3 bg-white/5 text-white rounded-full hover:bg-white/10 transition-all duration-300 border border-white/10 flex items-center gap-2"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform rotate-180">
                      <path d="M6.5 3L11.5 8L6.5 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Back
                  </InteractiveHoverButton>
                ) : (
                  <div></div> // Empty div for spacing
                )}
                
                <motion.div
                  whileHover={{ scale: isNextDisabled() || isSubmitting ? 1 : 1.03 }}
                  whileTap={{ scale: isNextDisabled() || isSubmitting ? 1 : 0.98 }}
                >
                  <InteractiveHoverButton
                    onClick={handleNextQuestion}
                    disabled={isNextDisabled() || isSubmitting}
                    className={`px-8 py-3 rounded-full transition-all duration-300 ${
                      isNextDisabled() || isSubmitting
                        ? 'bg-gray-700 cursor-not-allowed opacity-70'
                        : 'bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 shadow-lg shadow-violet-600/20'
                    } text-white font-medium flex items-center gap-2`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        {currentStep < 7 ? 'Next Question' : 'Submit'}
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.5 3L11.5 8L6.5 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </>
                    )}
                  </InteractiveHoverButton>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuizSection;