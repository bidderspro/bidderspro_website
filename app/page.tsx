"use client";

import React from 'react'
import HeroSection from '@/sections/HeroSection'
import MarqueeSection from '@/sections/Marquee'
import AboutSection from '@/sections/AboutSection'
import UpworkAutomationSection from '@/sections/UpworkAutomationSection'
import { TestimonialSection } from '@/sections/TestimonialSection'
import ContactSection from '@/sections/ContactSection';
import Header from '@/sections/Header';

const page = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <UpworkAutomationSection />
      <TestimonialSection />
      <ContactSection />
    </>
  )
}

export default page
