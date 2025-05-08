import { BackgroundBeamsWithCollision } from "@/components/ui/Background";
import { TextAnimate } from "@/components/magicui/text-animate";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

export default function HeroSection() {
  return (
    <BackgroundBeamsWithCollision>
      <div id="home" className="z-10 flex flex-col items-center space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="flex flex-row sm:flex-row gap-4 sm:gap-6 lg:gap-12 xl:gap-16 text-neutral-300/50">
          <div className="flex flex-row sm:flex-row items-center gap-2 sm:gap-3 lg:gap-4 xl:gap-6 ">
            <img src="/assets/images/star-icon.svg" alt="star-icon" className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
            <TextAnimate
              animate="blur-in"
              as={"p"}
              duration={1}
              className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold uppercase"
            >
              Automate
            </TextAnimate>
          </div>
          <div className="flex flex-row items-center gap-2 sm:gap-3 lg:gap-4 xl:gap-6">
            <img src="/assets/images/star-icon.svg" alt="star-icon" className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
            <TextAnimate
              animate="blur-in"
              as={"p"}
              duration={1}
              className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold uppercase"
            >
              Scale
            </TextAnimate>
          </div>
          <div className="flex flex-row items-center gap-2 sm:gap-3 lg:gap-4 xl:gap-6">
            <img src="/assets/images/star-icon.svg" alt="star-icon" className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
            <TextAnimate
              animate="blur-in"
              as={"p"}
              duration={1}
              className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold uppercase"
            >
              Dominate
            </TextAnimate>
          </div>
        </div>
        <TextAnimate
          animate="fade-in"
          as={"h1"}
          duration={1}
          className="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold text-center max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl uppercase"
        >
          Shift to B2B where real money is. Automate growth, win premium
          clients, and scale your business without limits.
        </TextAnimate>
        <TextAnimate
          animate="blur-in"
          as={"p"}
          duration={1}
          className="text-center text-gray-600 mt-2 sm:mt-3 md:mt-4 max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl uppercase"
        >
          More revenue. Less manual work. Ready to scale?
        </TextAnimate>

        <InteractiveHoverButton
          className="bg-violet-800 text-white text-center font-medium mt-4 sm:mt-6 md:mt-8 px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl sm:rounded-full md:rounded-full lg:rounded-full xl:rounded-full hover:bg-violet-700 transition-colors duration-200"
          onClick={() => {
            alert("Coming soon!");
          }}
        >
          Let's Automate Your Success
        </InteractiveHoverButton>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
