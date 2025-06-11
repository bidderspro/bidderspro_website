"use client";
import { motion } from "framer-motion";
import { AnimatedTestimonials } from "@/components/ui/Testimonals";

export function TestimonialSection() {
  const testimonials = [
    {
      quote: "We needed a reliable automation system for our Upwork bidding. Bidders Pro delivered a flawless solution that increased our bid success rate by 70%. Their attention to detail and responsive support made the whole process seamless.",
      author: "ADHUB Marketing",
      project: "Digital Marketing Agency",
      rating: 5,
      src: ""
    },
    {
      quote: "Bidders Pro transformed our freelancing workflow. Their automation tool not only saved us countless hours but also helped us target the right projects with precision. The ROI was immediate and substantial.",
      author: "Techticks Digital", 
      project: "Software Development Studio",
      rating: 5,
      src: ""
    },
    {
      quote: "We had a vision to scale our freelance operations—and Bidders Pro brought it to life. The integration of smart filters, automatic bidding, and seamless workflow was exactly what we needed. It's a game-changer for serious freelancers.",
      author: "MetaSync Technologies",
      project: "Web Development Agency",
      rating: 5,
      src: ""
    },
    {
      quote: "Bidders Pro built us a dynamic bidding system with analytics, automation, and secure access. What impressed me most was their attention to both technical efficiency and usability. It's rare to find a solution that's both powerful and easy to use.",
      author: "Freelance Accelerator",
      project: "Freelancing Collective",
      rating: 5,
      src: ""
    },
    {
      quote: "We needed a reliable way to scale our Upwork presence. Bidders Pro delivered a comprehensive automation suite that helped us increase client acquisition by 90%. Their system is intuitive and incredibly effective.",
      author: "Global Design Hub",
      project: "Creative Agency",
      rating: 5,
      src: ""
    },
    {
      quote: "Bidders Pro delivered a functional, fast automation tool with intelligent filtering and real-time opportunity matching. They even added custom optimization features to help us stand out. Their proactive approach sets them apart.",
      author: "ContentCraft Studios",
      project: "Content Marketing Team",
      rating: 5,
      src: ""
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-400 text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            Client Testimonials
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              What Clients
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Say About Me
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Real feedback from real clients who trusted me with their projects and achieved 
            <span className="text-yellow-400 font-semibold"> exceptional results</span>
          </p>
        </motion.div>

        <AnimatedTestimonials testimonials={testimonials}  />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-2xl p-8 border border-yellow-500/20"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Your Success Story Could Be Next
          </h3>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            Join the growing list of satisfied clients who chose quality, reliability, and results.
          </p>
          
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-semibold rounded-xl hover:from-yellow-700 hover:to-orange-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Start Your Project Today
          </button>
        </motion.div>
      </div>
    </section>
  );
}
