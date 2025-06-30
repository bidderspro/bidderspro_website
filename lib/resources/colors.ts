/**
 * Website color palette definitions
 * Centralized color management for consistent theming across the application
 */

export const colors = {
  // Primary brand colors
  primary: {
    main: '#121212', // Primary brand color
    light: '#2e2e2e',
    dark: '#000000',
    contrast: '#ffffff',
  },
  
  // Secondary brand colors
  secondary: {
    main: '#5e5e5e',
    light: '#9e9e9e',
    dark: '#414141',
    contrast: '#ffffff',
  },
  
  // Accent colors for highlights and CTAs
  accent: {
    main: '#007bff', // Adjust to match your brand's accent color
    light: '#4da3ff',
    dark: '#0056b3',
    contrast: '#ffffff',
  },
  
  // Semantic colors for feedback
  success: {
    main: '#28a745',
    light: '#48c664',
    dark: '#1e7e34',
    contrast: '#ffffff',
  },
  
  error: {
    main: '#dc3545',
    light: '#e45c69',
    dark: '#bd2130',
    contrast: '#ffffff',
  },
  
  warning: {
    main: '#ffc107',
    light: '#ffcd38',
    dark: '#d39e00',
    contrast: '#000000',
  },
  
  info: {
    main: '#17a2b8',
    light: '#3ab7cc',
    dark: '#117a8b',
    contrast: '#ffffff',
  },
  
  // Gray scale from tailwind config
  gray: {
    900: '#121212',
    800: '#1f1f1f',
    700: '#2e2e2e',
    600: '#414141',
    500: '#5e5e5e',
    400: '#727272',
    300: '#9e9e9e',
    200: '#bfbfbf',
    100: '#e0e0e0',
    50: '#f5f5f5',
  },
  
  // Common colors
  common: {
    white: '#ffffff',
    black: '#000000',
    transparent: 'transparent',
  },
  
  // Background colors
  background: {
    default: '#ffffff',
    paper: '#f5f5f5',
    dark: '#121212',
  },
  
  // Text colors
  text: {
    primary: '#121212',
    secondary: '#5e5e5e',
    disabled: '#9e9e9e',
    hint: '#727272',
    light: '#ffffff',
  },
};

/**
 * Get a specific color from the palette
 * @param path Dot notation path to the color (e.g. 'primary.main', 'gray.500')
 * @returns The color value or undefined if not found
 */
export function getColor(path: string): string | undefined {
  const parts = path.split('.');
  let result: any = colors;
  
  for (const part of parts) {
    if (result[part] === undefined) {
      return undefined;
    }
    result = result[part];
  }
  
  return typeof result === 'string' ? result : undefined;
} 