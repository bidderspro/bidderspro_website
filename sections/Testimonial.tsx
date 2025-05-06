"use client";
import { FancyTestimonialsSlider } from "@/components/ui/TestimonalSlider";

export function TestimonalSliderDemo() {
  const testimonials = [
    {
      img: "https://randomuser.me/api/portraits/men/91.jpg",
      quote: "Working with Usama Ashraf and his team has been an outstanding experience. Their automation strategy significantly improved my Upwork profile, bringing in high-quality projects consistently. They are true experts in their field, with a highly professional and results-driven approach. If you're looking to streamline your freelancing journey and attract better opportunities, I highly recommend their services!",
      name: "Usama Shahzad",
      role: "The Man Who Made Upwork Print Money",
    },
    {
      img: "https://randomuser.me/api/portraits/women/12.jpg",
      quote:
        "Usama and his team at BiddersPro helped me automate my Upwork process, transforming the way I generate leads. Their expertise and tailored approach have made it easier to consistently acquire high-quality leads from Upwork, saving time and boosting efficiency.",
      name: "Hamza Saleem",
      role: "The Guy Who Turned Cold Leads Hot",
    },
    {
      img: "https://randomuser.me/api/portraits/men/45.jpg",
      quote: "With EldoraUI, creating responsive UIs is a breeze.",
      name: "Amelia W",
      role: "Panda AI",
    },
  ];
  return (
    <div className="relative h-[700px] w-full overflow-hidden">
      <div className="mt-[64px] px-12 flex justify-center">
        <FancyTestimonialsSlider testimonials={testimonials} />
      </div>
    </div>
  );
}
