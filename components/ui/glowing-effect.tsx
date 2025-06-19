"use client";

import { memo } from "react";
import { cn } from "@/lib/utils";

interface GlowingEffectProps {
  blur?: number;
  inactiveZone?: number;
  proximity?: number;
  spread?: number;
  variant?: "default" | "white";
  glow?: boolean;
  className?: string;
  disabled?: boolean;
  movementDuration?: number;
  borderWidth?: number;
}

const GlowingEffect = memo(
  ({
    blur = 0,
    variant = "default",
    glow = false,
    className,
    borderWidth = 1,
    disabled = true,
  }: GlowingEffectProps) => {
    // Return simple effect or null for better performance
    if (disabled) return null;

    return (
      <div
        className={cn(
          "pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-60",
          glow && "opacity-30",
          className
        )}
      >
        <div
          className={cn(
            "absolute inset-0 rounded-[inherit] border",
            variant === "white"
              ? "border-white/20 bg-white/5"
              : "border-violet-500/20 bg-gradient-to-r from-violet-500/10 via-pink-500/5 to-blue-500/10",
            blur > 0 && "blur-sm"
          )}
          style={{ borderWidth: `${borderWidth}px` }}
        />
      </div>
    );
  }
);

GlowingEffect.displayName = "GlowingEffect";

export { GlowingEffect }; 