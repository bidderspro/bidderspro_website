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

  return (
    <div className="flex justify-center mb-8">
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
              <div className={cn(
                "relative flex items-center justify-center w-8 h-8 rounded-full text-white font-medium transition-all duration-300",
                currentStep > step 
                  ? 'bg-gradient-to-br from-violet-500 to-purple-600' 
                  : currentStep === step 
                    ? 'bg-gradient-to-br from-violet-500 to-purple-600 shadow-lg shadow-violet-600/30' 
                    : 'bg-gray-700'
              )}>
                <span>{step}</span>
                
                {/* Pulse effect for current step */}
                {currentStep === step && (
                  <span className="absolute inset-0 rounded-full animate-ping-slow bg-violet-500/40" />
                )}
              </div>
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
            <textarea
              name="targetProjects"
              value={formData.targetProjects}
              onChange={handleTextChange}
              placeholder="e.g., UI/UX design projects for SaaS startups, landing pages, Figma to Webflow development."
              className="w-full p-3 bg-gray-800/80 border border-gray-700/50 rounded-lg focus:outline-none focus:ring-1 focus:ring-violet-500 focus:border-violet-500 transition-colors min-h-[120px]"
            />
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
                <div 
                  key={option}
                  onClick={() => handleRadioChange('proposalFrequency', option)}
                  className={`p-4 border ${formData.proposalFrequency === option ? 'border-violet-500 bg-violet-900/20' : 'border-gray-700'} rounded-lg cursor-pointer hover:border-violet-400 transition-colors`}
                >
                  <div className="flex items-center">
                    <div className={`w-5 h-5 rounded-full border-2 ${formData.proposalFrequency === option ? 'border-violet-500 bg-violet-500' : 'border-gray-500'} flex items-center justify-center mr-3`}>
                      {formData.proposalFrequency === option && <div className="w-2 h-2 bg-white rounded-full"></div>}
                    </div>
                    <span>{option}</span>
                  </div>
                </div>
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
                <div 
                  key={option}
                  onClick={() => handleRadioChange('weeklyResponses', option)}
                  className={`p-4 border ${formData.weeklyResponses === option ? 'border-violet-500 bg-violet-900/20' : 'border-gray-700'} rounded-lg cursor-pointer hover:border-violet-400 transition-colors`}
                >
                  <div className="flex items-center">
                    <div className={`w-5 h-5 rounded-full border-2 ${formData.weeklyResponses === option ? 'border-violet-500 bg-violet-500' : 'border-gray-500'} flex items-center justify-center mr-3`}>
                      {formData.weeklyResponses === option && <div className="w-2 h-2 bg-white rounded-full"></div>}
                    </div>
                    <span>{option}</span>
                  </div>
                </div>
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
                <div 
                  key={challenge}
                  onClick={() => handleCheckboxChange(challenge)}
                  className={`p-4 border ${formData.mainChallenges.includes(challenge) ? 'border-violet-500 bg-violet-900/20' : 'border-gray-700'} rounded-lg cursor-pointer hover:border-violet-400 transition-colors`}
                >
                  <div className="flex items-center">
                    <div className={`w-5 h-5 rounded border-2 ${formData.mainChallenges.includes(challenge) ? 'border-violet-500 bg-violet-500' : 'border-gray-500'} flex items-center justify-center mr-3`}>
                      {formData.mainChallenges.includes(challenge) && <CheckCircle className="w-3 h-3 text-white" />}
                    </div>
                    <span>{challenge}</span>
                  </div>
                </div>
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
              ].map((option) => (
                <div 
                  key={option}
                  onClick={() => handleRadioChange('experienceLevel', option)}
                  className={`p-4 border ${formData.experienceLevel === option ? 'border-violet-500 bg-violet-900/20' : 'border-gray-700'} rounded-lg cursor-pointer hover:border-violet-400 transition-colors`}
                >
                  <div className="flex items-center">
                    <div className={`w-5 h-5 rounded-full border-2 ${formData.experienceLevel === option ? 'border-violet-500 bg-violet-500' : 'border-gray-500'} flex items-center justify-center mr-3`}>
                      {formData.experienceLevel === option && <div className="w-2 h-2 bg-white rounded-full"></div>}
                    </div>
                    <span>{option}</span>
                  </div>
                </div>
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
            <input
              type="text"
              name="profileLink"
              value={formData.profileLink}
              onChange={handleTextChange}
              placeholder="https://www.upwork.com/freelancers/~0123abcd4567efgh"
              className="w-full p-3 bg-gray-800/80 border border-gray-700/50 rounded-lg focus:outline-none focus:ring-1 focus:ring-violet-500 focus:border-violet-500 transition-colors"
            />
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
              {['Yes, book me in', 'Not now'].map((option) => (
                <div 
                  key={option}
                  onClick={() => handleRadioChange('wantsCall', option)}
                  className={`p-4 border ${formData.wantsCall === option ? 'border-violet-500 bg-violet-900/20' : 'border-gray-700'} rounded-lg cursor-pointer hover:border-violet-400 transition-colors`}
                >
                  <div className="flex items-center">
                    <div className={`w-5 h-5 rounded-full border-2 ${formData.wantsCall === option ? 'border-violet-500 bg-violet-500' : 'border-gray-500'} flex items-center justify-center mr-3`}>
                      {formData.wantsCall === option && <div className="w-2 h-2 bg-white rounded-full"></div>}
                    </div>
                    <span>{option}</span>
                  </div>
                </div>
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
            className="space-y-6 text-center"
          >
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">Thank You!</h3>
            <p className="text-gray-300">
              {formData.wantsCall === 'Yes, book me in' 
                ? "We'll be in touch shortly to schedule your free strategy call."
                : "Your responses have been recorded. We'll use this information to provide you with personalized solutions."}
            </p>
            {formData.wantsCall === 'Yes, book me in' && (
              <div className="pt-4">
                <InteractiveHoverButton
                  className="bg-gradient-to-br from-violet-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-300"
                  onClick={() => window.open("https://calendly.com/usamaashraf558/15min", "_blank")}
                >
                  Schedule Now
                </InteractiveHoverButton>
              </div>
            )}
          </motion.div>
        );
      
      default:
        return null;
    }
  };

  return (
    <section id="quiz" className="relative overflow-hidden py-16 md:py-24 lg:py-32 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 text-transparent bg-clip-text">Find Your Fit</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
          Answer a few questions to help us understand your Upwork needs and get personalized recommendations.
        </p>
        {currentStep < 8 && <ProgressBar currentStep={currentStep} totalSteps={7} />}
      </div>

      <div className="max-w-2xl mx-auto relative">
        <div className="relative p-8 sm:p-10 rounded-2xl backdrop-blur-lg">
          {/* Glass card effect with gradient border */}
          <div className="absolute inset-0 rounded-2xl z-0">

            <div className="absolute inset-0 rounded-2xl bg-white/5 border border-violet-500/20 shadow-lg"></div>
          </div>
          
          <div className="relative z-10">
            {renderQuestion()}

            {currentStep < 8 && (
              <div className="mt-10 flex justify-between">
                {currentStep > 1 ? (
                  <InteractiveHoverButton
                    onClick={handlePrevQuestion}
                    className="px-6 py-3 bg-white/10 text-white rounded-full hover:bg-white/15 transition-all duration-300 border border-white/10"
                  >
                    Back
                  </InteractiveHoverButton>
                ) : (
                  <div></div> // Empty div for spacing
                )}
                
                <InteractiveHoverButton
                  onClick={handleNextQuestion}
                  disabled={isNextDisabled() || isSubmitting}
                  className={`px-8 py-3 rounded-full transition-all duration-300 ${
                    isNextDisabled() || isSubmitting
                      ? 'bg-gray-600 cursor-not-allowed opacity-70'
                      : 'bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 shadow-lg shadow-violet-600/20'
                  } text-white font-medium`}
                >
                  {isSubmitting ? 'Submitting...' : currentStep < 7 ? 'Next Question' : 'Submit'}
                </InteractiveHoverButton>
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