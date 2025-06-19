"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ElementType, useEffect, useState } from "react";

interface TextAnimateProps {
  children: string;
  className?: string;
  animate?: string;
  animation?: string; // For backward compatibility
  as?: ElementType;
  duration?: number;
  delay?: number;
  by?: string; // For backward compatibility
  segmentClassName?: string; // For backward compatibility
  startOnView?: boolean; // For backward compatibility
  once?: boolean; // For backward compatibility
}

// Detect reduced motion preference
function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);
      
      const onChange = () => setPrefersReducedMotion(mediaQuery.matches);
      mediaQuery.addEventListener('change', onChange);
      
      return () => {
        mediaQuery.removeEventListener('change', onChange);
      };
    }
    return () => {};
  }, []);
  
  return prefersReducedMotion;
}

export function TextAnimate({
  children,
  className,
  animate = "fadeIn",
  animation, // For backward compatibility
  as: Component = "p",
  duration = 0.5,
  delay = 0,
  // Ignore these props but accept them for backward compatibility
  by,
  segmentClassName,
  startOnView,
  once
}: TextAnimateProps) {
  const prefersReducedMotion = useReducedMotion();
  
  // Use animation prop for backward compatibility
  const animationType = animation || animate || "fadeIn";
  
  if (prefersReducedMotion || animationType === "none") {
    return <Component className={className}>{children}</Component>;
  }

  // Map animation types to variants
  const getVariants = () => {
    switch (animationType) {
      case "fadeIn":
        return {
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 }
        };
      case "slideUp":
        return {
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        };
      case "blurInDown":
      case "blurIn":
        return {
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 }
        };
      case "slideDown":
        return {
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 }
        };
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        };
    }
  };

  const variants = getVariants();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration, delay }}
      className="contents"
    >
      <Component className={className}>{children}</Component>
    </motion.div>
  );
}
