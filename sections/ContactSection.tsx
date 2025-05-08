import ContactForm from "@/components/ui/ContactForm";

export default function ContactSection() {
  return (
    <div id="contact">
      <div className="flex flex-col items-center justify-center text-center py-8 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-800 to-violet-400 mb-3 sm:mb-4">
          CONTACT US - SCALE WITHOUT LIMITS
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
          MORE LEADS. MORE REVENUE. LESS MANUAL WORK.
        </h2>
        <p className="text-base sm:text-lg text-gray-300 max-w-xl sm:max-w-2xl md:max-w-3xl px-4 sm:px-6 lg:px-8">
          If you're ready to put your business on autopilot, we're here to make it happen. Let's turn outreach into opportunities and connections into clients—without the grind.
        </p>
      </div>
      <ContactForm />
    </div>
  );
}
