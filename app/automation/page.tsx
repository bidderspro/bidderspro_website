"use client";

import React from "react";
import { TextAnimate } from "@/components/magicui/text-animate";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { BackgroundBeamsWithCollision } from "@/components/ui/Background";
import AutomationHeroSection from "@/sections/automationSection/automationHeroSection";
import WhyAutomationSection from "@/sections/automationSection/WhyAutomationSection";
import CompareSection from "@/sections/automationSection/CampareSection";
import MoneyMachineSection from "@/sections/automationSection/MoneyMachineSection";
import AutomationShiftSection from "@/sections/automationSection/AutomationShiftSection";
import WhoIsThisForSection from "@/sections/automationSection/WhoIsThisForSection";
import PricingSection from "@/sections/automationSection/PricingSection";

export default function AutomationPage() {
  return (
    <>
      <AutomationHeroSection />
      <WhyAutomationSection />
      <CompareSection />
      <AutomationShiftSection />
      <WhoIsThisForSection />
      <MoneyMachineSection />
      <PricingSection />
    </>
  );
}
