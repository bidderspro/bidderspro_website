"use client";

import React from 'react'
import HeroSection from '@/sections/HeroSection'
import MarqueeSection from '@/sections/Marquee'
import AboutSection from '@/sections/AboutSection'
import { TestimonialSection } from '@/sections/TestimonialSection'
const page = () => {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <TestimonialSection />
    </>
  )
}

export default page
