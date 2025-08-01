"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, MessageSquare } from 'lucide-react';
import { TextAnimate } from "@/components/magicui/text-animate";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { GlowingEffect } from "@/components/ui/glowing-effect";
//import SectionContainer from "@/components/ui/section-container";

interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
  rating: number;
  project: string;
}

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      content: "This automation system completely transformed my Upwork experience. I went from spending hours sending proposals with a 5% response rate to having clients reach out to me directly. Within 3 weeks, I landed 4 new long-term clients at my premium rates.",
      author: "Sarah Johnson",
      role: "UI/UX Designer",
      rating: 5,
      project: "$8,500 Website Redesign"
    },
    {
      id: 2,
      content: "I was skeptical at first, but the results speak for themselves. My client acquisition cost dropped by 70% and I'm now fully booked 3 months in advance. The profile optimization alone increased my visibility by 400% according to Upwork analytics.",
      author: "Michael Chen",
      role: "Full Stack Developer",
      rating: 5,
      project: "$12,000 SaaS Development"
    },
    {
      id: 3,
      content: "The automation system helped me land my first $10k project within just 2 weeks of setting it up. The personalized outreach templates and follow-up sequences maintain my unique voice while saving me hours every day. Best investment I've made for my freelance business.",
      author: "Jessica Williams",
      role: "Content Strategist",
      rating: 5,
      project: "$10,000 Content Marketing Campaign"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="relative overflow-hidden py-16 md:py-24 lg:py-32 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
        <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-violet-500/20 mb-6">
          <MessageSquare className="w-4 h-4 text-violet-400 mr-2" />
          <span className="text-sm text-gray-200 font-medium">Success Stories</span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 text-transparent bg-clip-text">What Our Users Say</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Real results from freelancers just like you
        </p>
      </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Card with gradient border */}
          <div className="relative">
            {/* No glow effect */}
            
            <div className="relative rounded-2xl p-1 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 overflow-hidden">
              <GlowingEffect
                spread={60}
                glow={true}
                disabled={false}
                proximity={80}
                inactiveZone={0.01}
              />
              <div className="relative overflow-hidden rounded-xl border border-violet-500/20 bg-white/5 backdrop-blur-sm p-8 md:p-10 shadow-lg">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Quote mark decorations */}
                  <div className="absolute top-6 left-6 text-6xl opacity-10 text-violet-400">"</div>
                  <div className="absolute bottom-6 right-6 text-6xl opacity-10 text-violet-400">"</div>
                  
                  {/* User Avatar */}
                  <div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-fuchsia-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-violet-600/20">
                    <span className="text-3xl font-bold">{testimonials[currentIndex].author.charAt(0)}</span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  {/* Project Type */}
                  <div className="mb-8 bg-white/10 px-5 py-2 rounded-full border border-violet-500/20">
                    <p className="text-sm text-violet-300 font-medium">
                      {testimonials[currentIndex].project}
                    </p>
                  </div>

                  {/* Testimonial Content */}
                  <p className="text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
                    "{testimonials[currentIndex].content}"
                  </p>

                  {/* Author Info */}
                  <div>
                    <h4 className="text-xl font-bold">{testimonials[currentIndex].author}</h4>
                    <p className="text-base text-violet-300">{testimonials[currentIndex].role}</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute -bottom-16 left-0 right-0 flex justify-center gap-4">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-white transition-all duration-300 border border-violet-500/20"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            <button 
              onClick={nextSlide}
              className="w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-white transition-all duration-300 border border-violet-500/20"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="text-center mt-24">
          <InteractiveHoverButton
            className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg shadow-violet-600/20 hover:shadow-xl hover:shadow-violet-600/30 flex items-center gap-2 mx-auto"
            onClick={() => window.open("https://calendly.com/usamaashraf558/15min", "_blank")}
          >
            <span>Book Your Free Strategy Call</span>
            <ChevronRight className="w-5 h-5" />
          </InteractiveHoverButton>
        </div>
          </motion.div>
        </div>
    </section>
  );
};

export default TestimonialSlider;