"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ElementType, useEffect, useState, useMemo } from "react";

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

// Detect reduced motion preference - shared across all instances
const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return;
    
    // Use existing media query if possible
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    // Add listener with proper cleanup
    const onChange = () => setPrefersReducedMotion(mediaQuery.matches);
    
    // Use the appropriate event listener method based on browser support
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', onChange);
      return () => mediaQuery.removeEventListener('change', onChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(onChange);
      return () => mediaQuery.removeListener(onChange);
    }
  }, []);
  
  return prefersReducedMotion;
};

// Cache animation variants to avoid recreating objects
const animationVariants = {
  fadeIn: {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  },
  slideUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  blurInDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  },
  blurIn: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  },
  slideDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  },
  default: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }
};

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
  
  // Memoize transition options - moved before early return to fix the React Hook error
  const transition = useMemo(() => ({ duration, delay }), [duration, delay]);
  
  // Early return for reduced motion or no animation
  if (prefersReducedMotion || animationType === "none") {
    return <Component className={className}>{children}</Component>;
  }

  // Get the appropriate animation variant
  const variants = animationVariants[animationType as keyof typeof animationVariants] || animationVariants.default;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={transition}
      className="contents"
    >
      <Component className={className}>{children}</Component>
    </motion.div>
  );
}
