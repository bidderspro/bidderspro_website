"use client";
import { TextAnimate } from "@/components/magicui/text-animate";
import { AnimatedTestimonials } from "@/components/ui/Testimonals";

export function TestimonialSection() {
  const testimonials = [
    {
      quote: "It was good and seamless, enjoyed working with him on this.",
      name: "Muhammad Maaz Siddiqui",
      designation: "Financial Planning and Forecasting",
      src: "https://media.licdn.com/dms/image/v2/D4E03AQH3loqTAN_Jrw/profile-displayphoto-shrink_200_200/B4EZNtzLe0HAAo-/0/1732713954708?e=1752105600&v=beta&t=cWCmSaU_wPeNL11Y25m5pFpxO-eIbH8E43lxVdU17QA"
    },
    {
      quote: "I'm very impressed with Usama and his team's work. They introduced me to Upwork Automation, which significantly improved my ability to find new business leads. One of the catalogs they helped create led to securing a major client. Overall, my experience working with Usama was excellent.",
      name: "Ahmad Raza",
      designation: "Founder & CEO of Techticks", 
      src: "https://media.licdn.com/dms/image/v2/D4D03AQFuM4QqCJw1wQ/profile-displayphoto-shrink_200_200/B4DZRhmLBmHUAk-/0/1736804185808?e=1752105600&v=beta&t=iS_DJWRV3gy9fCLFpSyUsYZfM5PQE7UkPVE8oLs9b8U"
    },
    {
      quote: "I am extremely satisfied with Usama's automation services. His expertise has significantly improved my Upwork profile visibility, resulting in a substantial increase in high-quality invites. His automation solutions are efficient, reliable, and tailored to my needs. I highly recommend his services to anyone looking to enhance their presence and opportunities on Upwork.",
      name: "Muhammad Junaid Hassan",
      designation: "Web developer",
      src: "https://media.licdn.com/dms/image/v2/D4D03AQEOTeSNGrh8Dw/profile-displayphoto-shrink_200_200/B4DZZYeaEWG4Ac-/0/1745241089623?e=1752105600&v=beta&t=gkXA9HA8W4t492A6d4LvfnEp5wHBGDAuN9MRM6KPsEA"
    },
    {
        quote: "I am extremely satisfied with Usama's automation services. His expertise has significantly improved my Upwork profile visibility, resulting in a substantial increase in high-quality invites. His automation solutions are efficient, reliable, and tailored to my needs. I highly recommend his services to anyone looking to enhance their presence and opportunities on Upwork.",
        name: "Muhammad Junaid Hassan",
        designation: "Web developer",
        src: "https://media.licdn.com/dms/image/v2/D4D03AQEOTeSNGrh8Dw/profile-displayphoto-shrink_200_200/B4DZZYeaEWG4Ac-/0/1745241089623?e=1752105600&v=beta&t=gkXA9HA8W4t492A6d4LvfnEp5wHBGDAuN9MRM6KPsEA"
    },
    {
        quote: "Usama Ashraf and his team have been instrumental in transforming my Upwork journey. Their smart automation strategies have not only optimized my profile but also helped me secure a steady flow of high-quality projects. Their expertise, professionalism, and commitment to delivering results are truly commendable. If you're serious about scaling your freelancing career and attracting top-tier opportunities, I highly recommend working with them!",
        name: "Umar Shahzad",
        designation: "CEO of MetaSyncTechnologies",
        src: "https://media.licdn.com/dms/image/v2/D4D35AQEYtntVDNBPAg/profile-framedphoto-shrink_200_200/B4DZUy6AF.HIAo-/0/1740315820689?e=1747224000&v=beta&t=k-BDlsUKyHvprxjOdWrJuYuzkP4E4fMLzjqjUGtDq_0"
    },
    {
        quote: "Usama and his team did a great job! They delivered on their promises. I highly recommend him for Upwork profile optimization and automation services.",
        name: "Muhammad Ghufran",
        designation: "SQA Engineer",
        src: "https://media.licdn.com/dms/image/v2/D4D03AQGhbQNiTdSn3A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1700162549797?e=1752105600&v=beta&t=zaQ3uDjg5LQWfL91LmZ13L86EAl96Ns4kXtp8m2AjQU"
    }
  ];

  return (
    <div className="relative w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 space-y-4 sm:space-y-6 md:space-y-8">
        <TextAnimate 
          animate='blurIn' 
          as={'h1'} 
          className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-violet-600"
        >
          What Our Clients Say
        </TextAnimate>
        <TextAnimate 
          animate='blurIn' 
          as={'p'} 
          className="text-center text-sm sm:text-base md:text-lg lg:text-xl text-gray-100 dark:text-neutral-100 uppercase font-bold"
        >
          We don't talk about success — we automate it.
        </TextAnimate>
      </div>
      <div className="px-2 sm:px-4 md:px-6 lg:px-8">
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
    </div>
  );
}
