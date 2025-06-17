import { BackgroundBeamsWithCollision } from "@/components/ui/Background";
import { TextAnimate } from "@/components/magicui/text-animate";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
export default function HeroSection() {
  return (
    <div id="home" className="relative w-full min-h-screen flex items-center justify-center z-10">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-medium">
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <TextAnimate
              animate="blur-in"
              as="p"
              duration={1}
              className="text-xxs sm:text-xs md:text-sm lg:text-base uppercase"
            >
              Automate
            </TextAnimate>
          </div>
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-medium">
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <TextAnimate
              animate="blur-in"
              as="p"
              duration={1}
              className="text-xxs sm:text-xs md:text-sm lg:text-base uppercase"
            >
              Scale
            </TextAnimate>
          </div>
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-medium">
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <TextAnimate
              animate="blur-in"
              as="p"
              duration={1}
              className="text-xxs sm:text-xs md:text-sm lg:text-base uppercase"
            >
              Dominate
            </TextAnimate>
          </div>
        </div>
        
        <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12">
          <TextAnimate
            animate="fade-in"
            as="h1"
            duration={0.5}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl leading-tight uppercase"
          >
            Shift to B2B where real money is. Automate growth, win premium
            clients, and scale your business without limits.
          </TextAnimate>
        </div>
        
        <div className="w-full max-w-4xl mx-auto px-4">
          <TextAnimate
            animate="blur-in"
            as="p"
            duration={0.5}
            className="text-center text-gray-600 mt-4 sm:mt-6 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl mx-auto font-bold text-sm sm:text-base md:text-xl lg:text-2xl uppercase"
          >
            More revenue. Less manual work. Ready to scale?
          </TextAnimate>
        </div>

        <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 w-full flex justify-center">
          <InteractiveHoverButton
            className="bg-violet-800 text-white text-center font-medium px-5 sm:px-6 md:px-8 lg:px-10 py-2.5 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg rounded-full hover:bg-violet-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
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
