"use client";

import React from 'react';
import { Clock, Users, Calendar as CalendarIcon } from 'lucide-react';

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

  return (
    <div className="w-full max-w-md mx-auto">
      <h3 className="text-xl font-medium mb-4">Select Meeting Type</h3>
      <div className="space-y-3">
        {meetingTypes.map(type => (
          <button
            key={type.id}
            className={`w-full p-4 rounded-lg text-left transition-colors duration-200 bg-gray-800/60 hover:bg-violet-600/20 border ${
              selectedType === type.id ? 'border-violet-500' : 'border-gray-700'
            }`}
            onClick={() => onTypeSelect(type.id)}
          >
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-600/20 flex items-center justify-center">
                {type.icon}
              </div>
              <div>
                <h4 className="text-lg font-medium">{type.title}</h4>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Clock className="w-3 h-3" />
                  <span>{type.duration}</span>
                </div>
                <p className="mt-1 text-sm text-gray-300">{type.description}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
} 