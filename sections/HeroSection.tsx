import { BackgroundBeamsWithCollision } from "@/components/ui/Background";
import { TextAnimate } from "@/components/magicui/text-animate";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

export default function HeroSection() {
  return (
    <div id="home" className="relative w-full text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 flex flex-col items-center relative z-10">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-medium">
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <TextAnimate
              animate="blur-in"
              as="p"
              duration={1}
              className="text-[10px] sm:text-xs md:text-sm lg:text-base uppercase"
            >
              Automate
            </TextAnimate>
          </div>
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-medium">
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <TextAnimate
              animate="blur-in"
              as="p"
              duration={1}
              className="text-[10px] sm:text-xs md:text-sm lg:text-base uppercase"
            >
              Scale
            </TextAnimate>
          </div>
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-medium">
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <TextAnimate
              animate="blur-in"
              as="p"
              duration={1}
              className="text-[10px] sm:text-xs md:text-sm lg:text-base uppercase"
            >
              Dominate
            </TextAnimate>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16 xl:mb-20">
          <TextAnimate
            animate="fade-in"
            as="h1"
            duration={0.5}
            className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight uppercase"
          >
            Shift to B2B where real money is. Automate growth, win premium
            clients, and scale your business without limits.
          </TextAnimate>
          
          <TextAnimate
            animate="blur-in"
            as="p"
            duration={0.5}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 lg:mb-10 max-w-2xl mx-auto font-bold px-4 uppercase"
          >
            More revenue. Less manual work. Ready to scale?
          </TextAnimate>

          <div className="flex justify-center">
            <InteractiveHoverButton
              className="bg-violet-800 text-white text-center font-medium px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 lg:py-6 rounded-full text-base sm:text-lg md:text-xl lg:text-2xl font-semibold hover:bg-violet-700 transition-all duration-300"
              onClick={() => {
                alert("Coming soon!");
              }}
            >
              Let's Automate Your Success
            </InteractiveHoverButton>
          </div>
        </div>
      </div>
    </div>
  );
}
