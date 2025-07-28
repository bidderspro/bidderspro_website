/**
 * Website constants and configuration values
 * Centralized constant management for the application
 */

// Company information
export const COMPANY = {
  NAME: 'BiddersPro',
  TAGLINE: 'Your Upwork Automation Partner',
  FOUNDED: 2020,
  EMAIL: 'contact@bidderspro.com',
  PHONE: '+1 (555) 123-4567', // Replace with actual phone number
  SOCIAL: {
    TWITTER: 'https://twitter.com/bidderspro',
    LINKEDIN: 'https://linkedin.com/company/bidderspro',
    FACEBOOK: 'https://facebook.com/bidderspro',
    INSTAGRAM: 'https://instagram.com/bidderspro',
  },
};

// Website URLs and routes
export const ROUTES = {
  HOME: '/',
  SERVICES: '/services',
  AUTOMATION: '/automation',
  CALENDAR: '/calendar',
  CONTACT: '/#contact',
  COMPANY: '/company',
};

// SEO defaults
export const SEO = {
  DEFAULT_TITLE: 'BiddersPro | Your Upwork Automation Partner',
  DEFAULT_DESCRIPTION: 'Automate your Upwork bidding process and win more projects with BiddersPro.',
  DEFAULT_KEYWORDS: 'upwork automation, freelance automation, bid automation, proposal automation',
  SITE_URL: 'https://bidderspro.com',
};

// Animation settings
export const ANIMATIONS = {
  DEFAULT_DURATION: 0.3, // seconds
  DEFAULT_EASE: [0.25, 0.1, 0.25, 1.0], // cubic-bezier
  STAGGER_CHILDREN: 0.1, // seconds
};

// Form validation
export const VALIDATION = {
  MIN_NAME_LENGTH: 2,
  MAX_NAME_LENGTH: 50,
  MIN_MESSAGE_LENGTH: 10,
  MAX_MESSAGE_LENGTH: 1000,
  EMAIL_REGEX: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  PHONE_REGEX: /^\+?[0-9]{10,15}$/,
};

// API endpoints
export const API = {
  CONTACT_FORM: '/api/contact',
  BOOKING: '/api/booking',
  NEWSLETTER: '/api/newsletter',
};

// Content limits
export const CONTENT = {
  TESTIMONIALS_PER_PAGE: 3,
  SERVICES_PER_PAGE: 6,
  BLOG_POSTS_PER_PAGE: 9,
};

// Date formats
export const DATE_FORMATS = {
  SHORT: 'MM/DD/YYYY',
  MEDIUM: 'MMM D, YYYY',
  LONG: 'MMMM D, YYYY',
  WITH_TIME: 'MMMM D, YYYY h:mm A',
};

// Local storage keys
export const STORAGE_KEYS = {
  THEME: 'bidderspro-theme',
  USER_PREFERENCES: 'bidderspro-user-prefs',
  AUTH_TOKEN: 'bidderspro-auth-token',
};

// Feature flags
export const FEATURES = {
  DARK_MODE: true,
  NEWSLETTER: true,
  BLOG: false,
  TESTIMONIALS: true,
}; 