/**
 * Typography styles and configuration
 * Centralized typography management for consistent text styling across the application
 */

// Font families
export const FONT_FAMILY = {
  PRIMARY: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  SECONDARY: '"Playfair Display", Georgia, serif',
  MONO: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
};

// Font weights
export const FONT_WEIGHT = {
  THIN: 100,
  EXTRA_LIGHT: 200,
  LIGHT: 300,
  REGULAR: 400,
  MEDIUM: 500,
  SEMI_BOLD: 600,
  BOLD: 700,
  EXTRA_BOLD: 800,
  BLACK: 900,
};

// Font sizes (in rem)
export const FONT_SIZE = {
  XXS: '0.625rem',   // 10px
  XS: '0.75rem',     // 12px
  SM: '0.875rem',    // 14px
  BASE: '1rem',      // 16px
  LG: '1.125rem',    // 18px
  XL: '1.25rem',     // 20px
  '2XL': '1.5rem',   // 24px
  '3XL': '1.875rem', // 30px
  '4XL': '2.25rem',  // 36px
  '5XL': '3rem',     // 48px
  '6XL': '3.75rem',  // 60px
  '7XL': '4.5rem',   // 72px
  '8XL': '6rem',     // 96px
  '9XL': '8rem',     // 128px
};

// Line heights
export const LINE_HEIGHT = {
  NONE: 1,
  TIGHT: 1.25,
  SNUG: 1.375,
  NORMAL: 1.5,
  RELAXED: 1.625,
  LOOSE: 2,
};

// Letter spacing
export const LETTER_SPACING = {
  TIGHTER: '-0.05em',
  TIGHT: '-0.025em',
  NORMAL: '0em',
  WIDE: '0.025em',
  WIDER: '0.05em',
  WIDEST: '0.1em',
};

// Text transforms
export const TEXT_TRANSFORM = {
  UPPERCASE: 'uppercase',
  LOWERCASE: 'lowercase',
  CAPITALIZE: 'capitalize',
  NORMAL: 'none',
};

// Text decorations
export const TEXT_DECORATION = {
  UNDERLINE: 'underline',
  LINE_THROUGH: 'line-through',
  NONE: 'none',
};

// Heading styles
export const HEADINGS = {
  H1: {
    fontSize: FONT_SIZE['5XL'],
    fontWeight: FONT_WEIGHT.BOLD,
    lineHeight: LINE_HEIGHT.TIGHT,
    letterSpacing: LETTER_SPACING.TIGHT,
  },
  H2: {
    fontSize: FONT_SIZE['4XL'],
    fontWeight: FONT_WEIGHT.BOLD,
    lineHeight: LINE_HEIGHT.TIGHT,
    letterSpacing: LETTER_SPACING.TIGHT,
  },
  H3: {
    fontSize: FONT_SIZE['3XL'],
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    lineHeight: LINE_HEIGHT.SNUG,
    letterSpacing: LETTER_SPACING.NORMAL,
  },
  H4: {
    fontSize: FONT_SIZE['2XL'],
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    lineHeight: LINE_HEIGHT.SNUG,
    letterSpacing: LETTER_SPACING.NORMAL,
  },
  H5: {
    fontSize: FONT_SIZE.XL,
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    lineHeight: LINE_HEIGHT.SNUG,
    letterSpacing: LETTER_SPACING.NORMAL,
  },
  H6: {
    fontSize: FONT_SIZE.LG,
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    lineHeight: LINE_HEIGHT.NORMAL,
    letterSpacing: LETTER_SPACING.NORMAL,
  },
};

// Body text styles
export const BODY = {
  LARGE: {
    fontSize: FONT_SIZE.LG,
    fontWeight: FONT_WEIGHT.REGULAR,
    lineHeight: LINE_HEIGHT.RELAXED,
  },
  DEFAULT: {
    fontSize: FONT_SIZE.BASE,
    fontWeight: FONT_WEIGHT.REGULAR,
    lineHeight: LINE_HEIGHT.NORMAL,
  },
  SMALL: {
    fontSize: FONT_SIZE.SM,
    fontWeight: FONT_WEIGHT.REGULAR,
    lineHeight: LINE_HEIGHT.NORMAL,
  },
  CAPTION: {
    fontSize: FONT_SIZE.XS,
    fontWeight: FONT_WEIGHT.REGULAR,
    lineHeight: LINE_HEIGHT.NORMAL,
  },
};

// Helper function to generate CSS-in-JS style object for typography
export function getTypographyStyle(variant: keyof typeof HEADINGS | keyof typeof BODY): Record<string, string | number> {
  if (variant in HEADINGS) {
    return HEADINGS[variant as keyof typeof HEADINGS];
  }
  if (variant in BODY) {
    return BODY[variant as keyof typeof BODY];
  }
  return BODY.DEFAULT;
} 