import { TextAnimate } from "@/components/magicui/text-animate";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import Image from "next/image";

export default function AutomationHeroSection() {
  return (
    <div className=" text-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 flex flex-col items-center relative z-10">
        {/* Search bar with arrow button */}
        <div className="inline-flex items-center px-3 sm:px-4 md:px-5 lg:px-6 py-1.5 sm:py-2 md:py-2.5 lg:py-3 bg-white/10 backdrop-blur-md rounded-full border border-gray-200/20 mb-8 sm:mb-12 lg:mb-16 animate-fade-in">
          <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-200">
            Explore how to use for brands.
          </span>
          <button className="ml-2 md:ml-3 lg:ml-4 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 flex items-center justify-center bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Main heading and subtext */}
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16 xl:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight animate-slide-in-up">
            <span className="block">
              Stop Applying,
            </span>
            <span className="block mt-1 sm:mt-2 md:mt-3 lg:mt-4 bg-gradient-to-r from-violet-500 via-pink-500 to-amber-500 text-transparent bg-clip-text">
              Start Getting Clients
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 lg:mb-10 max-w-2xl mx-auto uppercase font-bold px-4 animate-fade-in-delayed">
            Upwork is broken but our automation system flips the script,
            bringing clients to you effortlessly.
          </p>

          <div className="animate-fade-in-delayed-2">
            <InteractiveHoverButton
              className="bg-violet-600 hover:bg-violet-700 text-white px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 lg:py-6 rounded-full text-base sm:text-lg md:text-xl lg:text-2xl font-semibold flex items-center gap-2 mx-auto transition-all duration-300"
              onClick={() =>
                window.open("https://calendly.com/usamaashraf558/15min", "_blank")
              }
            >
              Book a Free Consultation
            </InteractiveHoverButton>
          </div>
        </div>

        {/* Upwork Stats Image */}
        <div className="w-full max-w-6xl mx-auto px-1 sm:px-2 lg:px-3 mb-0 sm:mb-0 md:mb-0 animate-slide-in-up-delayed">
          <div className="bg-white/5  rounded-lg sm:rounded-xl lg:rounded-2xl p-1 sm:p-2 md:p-3 lg:p-4 shadow-2xl border border-white/10 overflow-hidden">
            <div className="relative w-full aspect-video rounded-md sm:rounded-lg lg:rounded-xl overflow-hidden">
              <Image
                src="/assets/images/upwork-stats.webp"
                alt="Upwork stats dashboard"
                width={1920}
                height={1080}
                className="w-full h-full object-cover sm:object-fill"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
