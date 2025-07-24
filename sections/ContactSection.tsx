import { TextAnimate } from "@/components/magicui/text-animate";
import ContactForm from "@/components/ui/ContactForm";

export default function ContactSection() {
  return (
    <div id="contact">
      <div className="flex flex-col items-center justify-center text-center space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 xl:px-12">
        <TextAnimate as={"h1"} animate="blurInDown" className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-800 to-violet-400">
          CONTACT US - SCALE WITHOUT LIMITS
        </TextAnimate>
        <TextAnimate as={"h2"} animate="fadeIn" className="text-2xl sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
          MORE LEADS. MORE REVENUE. LESS MANUAL WORK.
        </TextAnimate>
        <TextAnimate as={"p"} animate="fadeIn" className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
          If you're ready to put your business on autopilot, we're here to make it happen. Let's turn outreach into opportunities and connections into clients without the grind.
        </TextAnimate>
      </div>
      <ContactForm />
    </div>
  );
}
