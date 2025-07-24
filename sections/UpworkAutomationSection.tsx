"use client";
import { TextAnimate } from "@/components/magicui/text-animate";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import Link from "next/link";

export default function UpworkAutomationSection() {
  const automationServices = [
    {
      title: "Profile Optimization",
      description: "Get a higher conversion rate with an expertly optimized profile that attracts premium clients.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Lead Generation",
      description: "Leverage intelligent automation to identify and connect with high-value potential clients.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" />
        </svg>
      )
    },
    {
      title: "Proposal Automation",
      description: "Deploy custom-tailored proposals that win projects by addressing client needs with precision.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z" clipRule="evenodd" />
          <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
        </svg>
      )
    },
    {
      title: "Client Management",
      description: "Maintain quality relationships with existing clients through automated follow-ups and engagement.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
        </svg>
      )
    }
  ];

  return (
    <div id="automation" className="py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <TextAnimate 
            animate="blurIn" 
            as="h2" 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-violet-600 mb-4 sm:mb-6"
          >
            Automation Services
          </TextAnimate>
          <TextAnimate 
            animate="fadeIn" 
            as="p" 
            className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto text-gray-300"
          >
            Leverage powerful automation tools to elevate your business success, attract premium clients, and scale your operations without limits.
          </TextAnimate>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {automationServices.map((service, index) => (
            <div 
              key={index} 
              className="bg-black/30 backdrop-blur-sm border border-violet-500/20 rounded-xl p-6 transition-all duration-300 hover:border-violet-500/80 hover:shadow-lg hover:shadow-violet-600/20"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-violet-600/20 text-violet-500 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">{service.title}</h3>
              <p className="text-sm sm:text-base text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <Link href="/services/upwork-automation/">
            <InteractiveHoverButton
              className="bg-violet-800 text-white text-center font-medium px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-sm sm:text-base md:text-lg rounded-full hover:bg-violet-700 transition-colors duration-200"
            >
              Learn More About Automation
            </InteractiveHoverButton>
          </Link>
        </div>
      </div>
    </div>
  );
} 