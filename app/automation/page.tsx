"use client";

import React from 'react';
import { TextAnimate } from "@/components/magicui/text-animate";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { BackgroundBeamsWithCollision } from "@/components/ui/Background";

export default function AutomationPage() {
  

  return (
    <>
      <BackgroundBeamsWithCollision>
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl font-bold">Automation</h1>
        </div>
      </BackgroundBeamsWithCollision>
    </>
  );
}
