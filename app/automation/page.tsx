"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { TextAnimate } from "@/components/magicui/text-animate";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { BackgroundBeamsWithCollision } from "@/components/ui/Background";

const AutomationHeroSection = dynamic(
  () => import("@/sections/automationSection/automationHeroSection"),
  { ssr: false }
);
const WhyAutomationSection = dynamic(
  () => import("@/sections/automationSection/WhyAutomationSection"),
  { ssr: false }
);
const CompareSection = dynamic(
  () => import("@/sections/automationSection/CampareSection"),
  { ssr: false }
);
const MoneyMachineSection = dynamic(
  () => import("@/sections/automationSection/MoneyMachineSection"),
  { ssr: false }
);
const AutomationShiftSection = dynamic(
  () => import("@/sections/automationSection/AutomationShiftSection"),
  { ssr: false }
);
const WhoIsThisForSection = dynamic(
  () => import("@/sections/automationSection/WhoIsThisForSection"),
  { ssr: false }
);
const PricingSection = dynamic(
  () => import("@/sections/automationSection/PricingSection"),
  { ssr: false }
);
const VSLSection = dynamic(
  () => import("@/sections/automationSection/VSLSection"),
  { ssr: false }
);
const FinalCTASection = dynamic(
  () => import("@/sections/automationSection/FinalCTASection"),
  { ssr: false }
);

export default function AutomationPage() {
  return (
    <>
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <AutomationHeroSection />
        <WhyAutomationSection />
        <CompareSection />
        <AutomationShiftSection />
        <WhoIsThisForSection />
        <MoneyMachineSection />
        <VSLSection />
        <PricingSection />
        <FinalCTASection />
      </Suspense>
    </>
  );
}
