import '@testing-library/jest-dom';
import 'whatwg-fetch';
import React from 'react';

// Mock Next.js components
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, width, height, ...props }: any) => {
    return React.createElement('img', { src, alt, width, height, ...props });
  },
}));

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, ...props }: any) => {
    return React.createElement('a', { href, ...props }, children);
  },
}));

// Mock Next.js router
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn(),
    pathname: '/',
    query: {},
  }),
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
}));

// Mock Framer Motion
jest.mock('framer-motion', () => {
  const React = require('react');
  const motion = {
    div: React.forwardRef((props: any, ref: any) => React.createElement('div', { ref, ...props })),
    section: React.forwardRef((props: any, ref: any) => React.createElement('section', { ref, ...props })),
    span: React.forwardRef((props: any, ref: any) => React.createElement('span', { ref, ...props })),
    ul: React.forwardRef((props: any, ref: any) => React.createElement('ul', { ref, ...props })),
    li: React.forwardRef((props: any, ref: any) => React.createElement('li', { ref, ...props })),
    p: React.forwardRef((props: any, ref: any) => React.createElement('p', { ref, ...props })),
    a: React.forwardRef((props: any, ref: any) => React.createElement('a', { ref, ...props })),
    button: React.forwardRef((props: any, ref: any) => React.createElement('button', { ref, ...props })),
    img: React.forwardRef((props: any, ref: any) => React.createElement('img', { ref, ...props })),
    header: React.forwardRef((props: any, ref: any) => React.createElement('header', { ref, ...props })),
    footer: React.forwardRef((props: any, ref: any) => React.createElement('footer', { ref, ...props })),
    nav: React.forwardRef((props: any, ref: any) => React.createElement('nav', { ref, ...props })),
    h1: React.forwardRef((props: any, ref: any) => React.createElement('h1', { ref, ...props })),
    h2: React.forwardRef((props: any, ref: any) => React.createElement('h2', { ref, ...props })),
    h3: React.forwardRef((props: any, ref: any) => React.createElement('h3', { ref, ...props })),
    h4: React.forwardRef((props: any, ref: any) => React.createElement('h4', { ref, ...props })),
    h5: React.forwardRef((props: any, ref: any) => React.createElement('h5', { ref, ...props })),
    h6: React.forwardRef((props: any, ref: any) => React.createElement('h6', { ref, ...props })),
    create: (Component: any) => {
      return React.forwardRef((props: any, ref: any) => 
        React.createElement(Component, { ref, ...props })
      );
    }
  };

  return {
    __esModule: true,
    motion,
    AnimatePresence: ({ children }: any) => children,
    useScroll: () => ({ scrollY: { onChange: jest.fn(), get: () => 0, set: jest.fn(), current: 0 } }),
    useMotionValueEvent: jest.fn(),
    useTransform: jest.fn(),
    useSpring: jest.fn(),
    useMotionValue: jest.fn(() => ({ get: () => 0, set: jest.fn() })),
    useAnimation: jest.fn(),
    useInView: jest.fn(() => true),
    useReducedMotion: jest.fn(),
  };
});

// Mock motion/react if it's used separately
jest.mock('motion/react', () => {
  const React = require('react');
  const motion = {
    div: React.forwardRef((props: any, ref: any) => React.createElement('div', { ref, ...props })),
    section: React.forwardRef((props: any, ref: any) => React.createElement('section', { ref, ...props })),
    span: React.forwardRef((props: any, ref: any) => React.createElement('span', { ref, ...props })),
    h1: React.forwardRef((props: any, ref: any) => React.createElement('h1', { ref, ...props })),
    h2: React.forwardRef((props: any, ref: any) => React.createElement('h2', { ref, ...props })),
    h3: React.forwardRef((props: any, ref: any) => React.createElement('h3', { ref, ...props })),
    create: (Component: any) => {
      return React.forwardRef((props: any, ref: any) => 
        React.createElement(Component, { ref, ...props })
      );
    }
  };

  return {
    __esModule: true,
    motion,
    AnimatePresence: ({ children }: any) => children,
    useScroll: () => ({ scrollY: { onChange: jest.fn(), get: () => 0, set: jest.fn(), current: 0 } }),
    useMotionValueEvent: jest.fn(),
  };
});

// Mock browser APIs
class MockResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

class MockIntersectionObserver {
  constructor(callback: any) {
    this.callback = callback;
  }
  callback: any;
  observe() {
    this.callback([{ isIntersecting: true }]);
  }
  unobserve() {}
  disconnect() {}
  root = null;
  rootMargin = '';
  thresholds = [0];
  takeRecords() { return []; }
}

// Use type assertions to avoid TypeScript errors
Object.defineProperty(global, 'ResizeObserver', {
  value: MockResizeObserver,
  writable: true,
});

Object.defineProperty(global, 'IntersectionObserver', {
  value: MockIntersectionObserver,
  writable: true,
});

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock scrollIntoView
Element.prototype.scrollIntoView = jest.fn();

// Add regeneratorRuntime for async/await
(global as any).regeneratorRuntime = require('regenerator-runtime'); 
