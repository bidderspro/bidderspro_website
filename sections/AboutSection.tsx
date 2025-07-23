import { TextAnimate } from "@/components/magicui/text-animate";
import Image from "next/image";

export default function AboutSection() {
  return (
    <div id="about" className="flex flex-col md:flex-row items-center p-4 md:p-8 lg:p-16 gap-8 md:gap-12 lg:gap-16">
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
        <Image
          src="/assets/images/about-us.webp"
          alt="About Us" 
          width={520}
          height={520}
          className="w-full max-w-[280px] md:max-w-[340px] lg:max-w-[440px] xl:max-w-[520px] h-auto object-cover rounded-xl drop-shadow-lg shadow-indigo-700"
          sizes="(max-width: 768px) 280px, (max-width: 1024px) 340px, (max-width: 1280px) 440px, 520px"
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
