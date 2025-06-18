"use client";

import React, { Suspense } from "react";
import dynamicImport from "next/dynamic";
import { TextAnimate } from "@/components/magicui/text-animate";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { BackgroundBeamsWithCollision } from "@/components/ui/Background";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

const AutomationHeroSection = dynamicImport(
  () => import("@/sections/automationSection/automationHeroSection"),
  { ssr: false }
);
const WhyAutomationSection = dynamicImport(
  () => import("@/sections/automationSection/WhyAutomationSection"),
  { ssr: false }
);
const CompareSection = dynamicImport(
  () => import("@/sections/automationSection/CampareSection"),
  { ssr: false }
);
const MoneyMachineSection = dynamicImport(
  () => import("@/sections/automationSection/MoneyMachineSection"),
  { ssr: false }
);
const AutomationShiftSection = dynamicImport(
  () => import("@/sections/automationSection/AutomationShiftSection"),
  { ssr: false }
);
const WhoIsThisForSection = dynamicImport(
  () => import("@/sections/automationSection/WhoIsThisForSection"),
  { ssr: false }
);
const PricingSection = dynamicImport(
  () => import("@/sections/automationSection/PricingSection"),
  { ssr: false }
);
const VSLSection = dynamicImport(
  () => import("@/sections/automationSection/VSLSection"),
  { ssr: false }
);
const FinalCTASection = dynamicImport(
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
