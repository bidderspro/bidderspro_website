import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const steps = Array.from({ length: totalSteps }, (_, i) => i + 1);

  return (
    <div className="flex justify-center mb-8">
      <div className="flex items-center">
        {steps.map((step, index) => (
          <React.Fragment key={step}>
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full ${
                currentStep >= step ? 'bg-violet-600' : 'bg-gray-600'
              } text-white font-medium`}
            >
              {step}
            </div>
            {index < steps.length - 1 && (
              <div
                className={`w-12 h-1 ${
                  currentStep > step ? 'bg-violet-600' : 'bg-gray-600'
                }`}
              ></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
} 