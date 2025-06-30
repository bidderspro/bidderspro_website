import { TextAnimate } from "@/components/magicui/text-animate";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { Suspense } from "react";

// Simple loading fallback
const LoadingFallback = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={className}>{children}</div>
);

export default function ServicesHeroSection() {
  return (
    <div className="w-full text-white relative overflow-hidden">
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 flex flex-col items-center relative z-10">
        {/* Top tag pill */}
        <div className="flex justify-center mb-6 sm:mb-8 md:mb-10">
          <div className="inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 bg-[#0e1b52] border border-blue-500/20 rounded-full shadow-lg">
            <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-amber-400 rounded-full"></div>
            <Suspense fallback={
              <LoadingFallback className="text-[10px] xs:text-xs sm:text-sm font-medium text-white tracking-wide">
                POWERFUL DIGITAL SOLUTIONS. DELIVERED WITH PRECISION.
              </LoadingFallback>
            }>
              <TextAnimate
                animate="blur-in"
                as="p"
                duration={0.5}
                className="text-[10px] xs:text-xs sm:text-sm font-medium text-white tracking-wide"
              >
                POWERFUL DIGITAL SOLUTIONS. DELIVERED WITH PRECISION.
              </TextAnimate>
            </Suspense>
          </div>
        </div>
        
        {/* Main heading and subtext */}
        <div className="max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto text-center mb-6 sm:mb-8 md:mb-10">
          <Suspense fallback={
            <LoadingFallback className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 text-white leading-tight uppercase">
              AT BIDDERS PRO, WE DON'T JUST BUILD WEBSITES OR APPS — WE SOLVE REAL PROBLEMS THROUGH SMART TECHNOLOGY, BEAUTIFUL DESIGN, AND STRATEGIC THINKING
            </LoadingFallback>
          }>
            <TextAnimate 
              as="h1" 
              animate="fadeIn" 
              className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 text-white leading-tight uppercase"
            >
              AT BIDDERS PRO, WE DON'T JUST BUILD WEBSITES OR APPS — WE SOLVE REAL PROBLEMS THROUGH SMART TECHNOLOGY, BEAUTIFUL DESIGN, AND STRATEGIC THINKING
            </TextAnimate>
          </Suspense>
          
          <Suspense fallback={
            <LoadingFallback className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-300 max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto font-medium uppercase">
              WE HELP STARTUPS, FREELANCERS, AND GROWING BUSINESSES STAND OUT, SCALE UP, AND SUCCEED—FASTER.
            </LoadingFallback>
          }>
            <TextAnimate 
              as="p" 
              animate="blur-in" 
              className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-300 max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto font-medium uppercase"
            >
              WE HELP STARTUPS, FREELANCERS, AND GROWING BUSINESSES STAND OUT, SCALE UP, AND SUCCEED—FASTER.
            </TextAnimate>
          </Suspense>
        </div>
        
        {/* CTA Button */}
        <div className="flex justify-center mt-4 sm:mt-6 md:mt-8 mb-6 sm:mb-8 md:mb-10">
          <Suspense fallback={
            <button className="bg-violet-800 text-white text-center font-medium px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full text-sm sm:text-base md:text-lg">
              LET'S AUTOMATE YOUR SUCCESS
            </button>
          }>
            <InteractiveHoverButton
              className="bg-violet-800 text-white text-center font-medium px-4 xs:px-5 sm:px-6 md:px-8 py-2 xs:py-2.5 sm:py-3 md:py-4 rounded-full text-sm xs:text-base sm:text-lg font-semibold hover:bg-violet-700 transition-all duration-300 uppercase w-auto"
              onClick={() => {
                window.location.href = "/calendar";
              }}
            >
              LET'S AUTOMATE YOUR SUCCESS
            </InteractiveHoverButton>
          </Suspense>
        </div>
      </div>
    </div>
  );
} 