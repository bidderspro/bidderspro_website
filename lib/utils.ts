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
 * @param maxRetries Maximum number of retries if element is not found (default: 5)
 */
export function scrollToSection(id: string, offset: number = 0, fallbackToTop: boolean = true, maxRetries: number = 5): void {
  let retries = 0;
  
  const tryScrolling = () => {
    const element = document.getElementById(id);
    
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      return true;
    } else if (retries < maxRetries) {
      // Element not found yet, retry after a short delay
      retries++;
      setTimeout(tryScrolling, 200);
      return false;
    } else if (fallbackToTop) {
      // Max retries reached and element not found, scroll to top if fallback is enabled
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      return true;
    }
    return false;
  };
  
  // Start the first attempt after a short delay to allow for dynamic content to load
  setTimeout(tryScrolling, 100);
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
