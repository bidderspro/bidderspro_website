import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Smoothly scrolls to a section by ID with optional offset
 * @param id The ID of the element to scroll to (without #)
 * @param offset Optional offset from the top in pixels (default: 0)
 * @param fallbackToTop If true, scrolls to top when element not found (default: true)
 */
export function scrollToSection(id: string, offset: number = 0, fallbackToTop: boolean = true): void {
  // Wait for DOM to be ready
  setTimeout(() => {
    const element = document.getElementById(id);
    
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    } else if (fallbackToTop) {
      // If element not found and fallback is enabled, scroll to top
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }, 100);
}

/**
 * Resets scroll position to top of page
 * @param smooth Whether to use smooth scrolling (default: true)
 */
export function scrollToTop(smooth: boolean = true): void {
  window.scrollTo({
    top: 0,
    behavior: smooth ? "smooth" : "auto"
  });
}
