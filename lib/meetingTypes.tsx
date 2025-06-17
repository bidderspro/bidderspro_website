import React from 'react';
import { Clock, Users, Calendar } from 'lucide-react';
import { MeetingType } from '@/components/ui/Calendar/types';

/**
 * Returns the available meeting types with their details
 */
export function getMeetingTypes(): MeetingType[] {
  return [
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
      icon: <Calendar className="w-5 h-5" />,
    },
  ];
} 