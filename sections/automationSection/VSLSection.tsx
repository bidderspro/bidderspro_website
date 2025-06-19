"use client";

import React, { useState, useEffect } from 'react';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { ArrowRight } from 'lucide-react';

const VSLSection = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleCalendlyOpen = () => {
    if (isClient) {
      window.open("https://calendly.com/usamaashraf558/15min", "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-slide-in-up">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600 mb-6">
              🎥 See It In Action
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Watch how our automation system revolutionizes your freelancing workflow in minutes
            </p>
          </div>

          {/* CTA Card */}
          <CardContainer containerClassName="py-10">
            <CardBody className="relative w-full max-w-4xl mx-auto group">
              <div className="mt-8 text-center animate-fade-in-delayed">
                <button 
                  onClick={handleCalendlyOpen}
                  className="relative inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-violet-500/20"
                >
                  <span>Get Started Now</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </section>
  );
};

export default VSLSection;