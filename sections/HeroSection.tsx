import { lazy, Suspense } from 'react';

// Lazy load heavy components
const TextAnimate = lazy(() => 
  import('@/components/magicui/text-animate').then(mod => ({ default: mod.TextAnimate }))
);

const InteractiveHoverButton = lazy(() => 
  import('@/components/magicui/interactive-hover-button').then(mod => ({ default: mod.InteractiveHoverButton }))
);

// Lightweight fallbacks for SSR and initial render
const TextFallback = ({ children, className }: { children: string, className?: string }) => (
  <p className={className}>{children}</p>
);

const ButtonFallback = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <button className={className}>{children}</button>
);

export default function HeroSection() {
  return (
    <div id="home" className="relative w-full min-h-screen text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 flex flex-col items-center justify-center relative z-10 min-h-screen">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {/* Simplify animation elements */}
          {["Automate", "Scale", "Dominate"].map((text, index) => (
            <div 
              key={index} 
              className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-medium"
            >
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-400 rounded-full"></div>
              <Suspense fallback={<TextFallback className="text-[10px] sm:text-xs md:text-sm lg:text-base uppercase">{text}</TextFallback>}>
                <TextAnimate
                  animate="blur-in"
                  as="p"
                  duration={0.5} // Reduced from 1 to 0.5
                  className="text-[10px] sm:text-xs md:text-sm lg:text-base uppercase"
                >
                  {text}
                </TextAnimate>
              </Suspense>
            </div>
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16 xl:mb-20">
          <Suspense fallback={
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight uppercase">
              Shift to B2B where real money is. Automate growth, win premium clients, and scale your business without limits.
            </h1>
          }>
            <TextAnimate
              animate="fade-in"
              as="h1"
              duration={0.3} // Reduced from 0.5 to 0.3
              className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight uppercase"
            >
              Shift to B2B where real money is. Automate growth, win premium
              clients, and scale your business without limits.
            </TextAnimate>
          </Suspense>
          
          <Suspense fallback={
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 lg:mb-10 max-w-2xl mx-auto font-bold px-4 uppercase">
              More revenue. Less manual work. Ready to scale?
            </p>
          }>
            <TextAnimate
              animate="blur-in"
              as="p"
              duration={0.3} // Reduced from 0.5 to 0.3
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 lg:mb-10 max-w-2xl mx-auto font-bold px-4 uppercase"
            >
              More revenue. Less manual work. Ready to scale?
            </TextAnimate>
          </Suspense>

          <div className="flex justify-center">
            <Suspense fallback={
              <ButtonFallback className="bg-violet-800 text-white text-center font-medium px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 lg:py-6 rounded-full text-base sm:text-lg md:text-xl lg:text-2xl font-semibold hover:bg-violet-700 transition-all duration-300">
                Let's Automate Your Success
              </ButtonFallback>
            }>
              <InteractiveHoverButton
                className="bg-violet-800 text-white text-center font-medium px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 lg:py-6 rounded-full text-base sm:text-lg md:text-xl lg:text-2xl font-semibold hover:bg-violet-700 transition-all duration-300"
                onClick={() => {
                  alert("Coming soon!");
                }}
              >
                Let's Automate Your Success
              </InteractiveHoverButton>
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
