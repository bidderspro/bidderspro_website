import React from 'react';
import { render, RenderOptions } from '@testing-library/react';

// Mock framer-motion
jest.mock('framer-motion', () => {
  const actual = jest.requireActual('framer-motion');
  
  // Create a mock component factory
  const createMockComponent = (name: string) => {
    return React.forwardRef((props: any, ref) => {
      // Extract variants props to avoid passing them to DOM elements
      const { variants, initial, animate, exit, transition, whileHover, whileTap, whileInView, viewport, ...restProps } = props;
      return React.createElement(name, { ...restProps, ref });
    });
  };

  // Create mock motion components
  return {
    __esModule: true,
    ...actual,
    motion: new Proxy({}, {
      get: (_, prop) => {
        return createMockComponent(prop as string);
      }
    }),
    AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  };
});

// Create a wrapper that provides all necessary context providers
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
    </>
  );
};

// Custom render method that includes the providers
const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options });

// Re-export everything from testing-library
export * from '@testing-library/react';

// Override the render method
export { customRender as render };

// Add a dummy test to avoid the "no tests" error
describe('Test Utils', () => {
  it('provides a custom render function', () => {
    expect(typeof customRender).toBe('function');
  });
}); 