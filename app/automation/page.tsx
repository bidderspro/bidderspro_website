"use client";

import React from "react";
import { TextAnimate } from "@/components/magicui/text-animate";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { BackgroundBeamsWithCollision } from "@/components/ui/Background";
import AutomationHeroSection from "@/sections/automationSection/automationHeroSection";
import WhyAutomationSection from "@/sections/automationSection/WhyAutomationSection";
import CompareSection from "@/sections/automationSection/CampareSection";
export default function AutomationPage() {
  return (
    <>
      <AutomationHeroSection />
      <WhyAutomationSection />
      <CompareSection />
    </>
  );
}
