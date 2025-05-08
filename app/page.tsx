"use client";

import React from 'react'
import HeroSection from '@/sections/HeroSection'
import MarqueeSection from '@/sections/Marquee'
import AboutSection from '@/sections/AboutSection'
import { TestimonialSection } from '@/sections/TestimonialSection'
import ContactSection from '@/sections/ContactSection';
const page = () => {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <TestimonialSection />
      <ContactSection />
    </>
  )
}

export default page
