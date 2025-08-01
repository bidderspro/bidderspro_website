"use client";

import React from 'react';

interface SectionContainerProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  withGradient?: boolean;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  id,
  children,
  className = "",
  withGradient = false
}) => {
  return (
    <section id={id} className={`relative overflow-hidden py-16 md:py-24 lg:py-32 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;