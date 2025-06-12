import { TextAnimate } from "@/components/magicui/text-animate";
import Image from "next/image";
import aboutUsImage from "@/public/assets/images/about-us.webp";

export default function AboutSection() {
  return (
    <div id="about" className="flex flex-col md:flex-row items-center p-4 md:p-8 lg:p-16 gap-8 md:gap- lg:gap-16">
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
        <Image
          src={aboutUsImage}
          alt="About Us" 
          className="w-full max-w-[280px] md:max-w-[340px] lg:max-w-[440px] xl:max-w-[520px] h-auto object-cover rounded-xl drop-shadow-lg shadow-indigo-700"
          placeholder="blur"
          priority={true}
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center space-y-3 md:space-y-8 lg:space-y-10">
        <TextAnimate 
          as={"h1"} 
          animation="blurInDown" 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase text-center md:text-left"
        >
          Who We are
        </TextAnimate>
        <TextAnimate 
          as={"p"}  
          animation="fadeIn" 
          by="line" 
          className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] text-center md:text-left"
        >
          BiddersPro is where smart business meets automation. We replace grinding with scaling, turning outreach into predictable deal flow—so you focus on growth, not guesswork.
        </TextAnimate>
        <TextAnimate 
          as={"span"} 
          animation="slideUp" 
          className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold uppercase text-violet-500/80 text-center md:text-left"
        >
          We don't chase clients. We attract them.
        </TextAnimate>
      </div>
    </div>
  );
}
