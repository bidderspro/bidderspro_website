/**
 * Breakpoints and responsive utilities
 * Defines breakpoints and provides helper functions for responsive design
 */

// Breakpoint values in pixels (matching tailwind config)
export const BREAKPOINTS = {
  XS: 480,
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  XXL: 1536,
};

// Media query strings for CSS-in-JS libraries
export const MEDIA_QUERIES = {
  XS: `@media (min-width: ${BREAKPOINTS.XS}px)`,
  SM: `@media (min-width: ${BREAKPOINTS.SM}px)`,
  MD: `@media (min-width: ${BREAKPOINTS.MD}px)`,
  LG: `@media (min-width: ${BREAKPOINTS.LG}px)`,
  XL: `@media (min-width: ${BREAKPOINTS.XL}px)`,
  XXL: `@media (min-width: ${BREAKPOINTS.XXL}px)`,
  
  // Max-width queries (mobile-first)
  XS_DOWN: `@media (max-width: ${BREAKPOINTS.XS - 1}px)`,
  SM_DOWN: `@media (max-width: ${BREAKPOINTS.SM - 1}px)`,
  MD_DOWN: `@media (max-width: ${BREAKPOINTS.MD - 1}px)`,
  LG_DOWN: `@media (max-width: ${BREAKPOINTS.LG - 1}px)`,
  XL_DOWN: `@media (max-width: ${BREAKPOINTS.XL - 1}px)`,
  XXL_DOWN: `@media (max-width: ${BREAKPOINTS.XXL - 1}px)`,
  
  // Range queries
  XS_ONLY: `@media (min-width: ${BREAKPOINTS.XS}px) and (max-width: ${BREAKPOINTS.SM - 1}px)`,
  SM_ONLY: `@media (min-width: ${BREAKPOINTS.SM}px) and (max-width: ${BREAKPOINTS.MD - 1}px)`,
  MD_ONLY: `@media (min-width: ${BREAKPOINTS.MD}px) and (max-width: ${BREAKPOINTS.LG - 1}px)`,
  LG_ONLY: `@media (min-width: ${BREAKPOINTS.LG}px) and (max-width: ${BREAKPOINTS.XL - 1}px)`,
  XL_ONLY: `@media (min-width: ${BREAKPOINTS.XL}px) and (max-width: ${BREAKPOINTS.XXL - 1}px)`,
  
  // Special queries
  LANDSCAPE: '@media (orientation: landscape)',
  PORTRAIT: '@media (orientation: portrait)',
  RETINA: '@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)',
  TOUCH: '@media (hover: none) and (pointer: coarse)',
  MOUSE: '@media (hover: hover) and (pointer: fine)',
  DARK_MODE: '@media (prefers-color-scheme: dark)',
  LIGHT_MODE: '@media (prefers-color-scheme: light)',
  REDUCED_MOTION: '@media (prefers-reduced-motion: reduce)',
};

// Type for responsive values
export type ResponsiveValue<T> = {
  base: T;
  xs?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  xxl?: T;
};

/**
 * Helper function to generate responsive styles for CSS-in-JS libraries
 * @param values Responsive values object
 * @param property CSS property name
 * @returns Object with responsive styles
 * 
 * Example usage:
 * const styles = createResponsiveStyles({ base: '1rem', md: '1.5rem', lg: '2rem' }, 'fontSize');
 * // Result: { fontSize: '1rem', '@media (min-width: 768px)': { fontSize: '1.5rem' }, ... }
 */
export function createResponsiveStyles<T>(
  values: ResponsiveValue<T>,
  property: string
): Record<string, any> {
  const styles: Record<string, any> = {
    [property]: values.base,
  };

  if (values.xs) {
    styles[MEDIA_QUERIES.XS] = {
      [property]: values.xs,
    };
  }

  if (values.sm) {
    styles[MEDIA_QUERIES.SM] = {
      [property]: values.sm,
    };
  }

  if (values.md) {
    styles[MEDIA_QUERIES.MD] = {
      [property]: values.md,
    };
  }

  if (values.lg) {
    styles[MEDIA_QUERIES.LG] = {
      [property]: values.lg,
    };
  }

  if (values.xl) {
    styles[MEDIA_QUERIES.XL] = {
      [property]: values.xl,
    };
  }

  if (values.xxl) {
    styles[MEDIA_QUERIES.XXL] = {
      [property]: values.xxl,
    };
  }

  return styles;
}

/**
 * Hook to detect current breakpoint in React components
 * Note: This is just a type definition - implementation would require client-side code
 */
export interface UseBreakpointReturn {
  isXs: boolean;
  isSm: boolean;
  isMd: boolean;
  isLg: boolean;
  isXl: boolean;
  isXxl: boolean;
  isXsDown: boolean;
  isSmDown: boolean;
  isMdDown: boolean;
  isLgDown: boolean;
  isXlDown: boolean;
  isXxlDown: boolean;
  isXsOnly: boolean;
  isSmOnly: boolean;
  isMdOnly: boolean;
  isLgOnly: boolean;
  isXlOnly: boolean;
  isXxlOnly: boolean;
  currentBreakpoint: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | null;
} 