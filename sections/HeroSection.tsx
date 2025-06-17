import { BackgroundBeamsWithCollision } from "@/components/ui/Background";
import { TextAnimate } from "@/components/magicui/text-animate";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
export default function HeroSection() {
  return (
    <div id="home" className="relative w-full min-h-screen flex items-center justify-center z-10">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 px-3 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-8 md:py-12 lg:py-16">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
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
        
        <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10">
          <TextAnimate
            animate="fade-in"
            as="h1"
            duration={0.5}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl leading-tight uppercase"
          >
            Shift to B2B where real money is. Automate growth, win premium
            clients, and scale your business without limits.
          </TextAnimate>
        </div>
        
        <div className="w-full max-w-4xl mx-auto px-3 sm:px-4">
          <TextAnimate
            animate="blur-in"
            as="p"
            duration={0.5}
            className="text-center text-gray-600 mt-3 sm:mt-4 md:mt-6 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl mx-auto font-bold text-xs sm:text-sm md:text-lg lg:text-xl uppercase"
          >
            More revenue. Less manual work. Ready to scale?
          </TextAnimate>
        </div>

        <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 w-full flex justify-center">
          <InteractiveHoverButton
            className="bg-violet-800 text-white text-center font-medium px-4 sm:px-5 md:px-7 lg:px-10 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base lg:text-lg rounded-full hover:bg-violet-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            onClick={() => {
              alert("Coming soon!");
            }}
          >
            Let's Automate Your Success
          </InteractiveHoverButton>
        </div>
      </div>
    </div>
  );
}
