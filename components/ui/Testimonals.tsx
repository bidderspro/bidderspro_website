"use client";

import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

type Testimonial = {
  quote: string;
  author: string;
  project: string;
  rating: number;
};

export const AnimatedTestimonials = ({
  testimonials,
}: {
  testimonials: Testimonial[];
}) => {
  return (
    <div className="container mx-auto max-w-6xl">


      {/* Testimonials Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
            className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-yellow-500/30 transition-all duration-300 relative"
          >
            {/* Quote Icon */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
              <Quote className="w-4 h-4 text-white" />
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, starIndex) => (
                <Star key={starIndex} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-gray-300 text-lg leading-relaxed mb-6 italic">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>

            {/* Author Info */}
            <div className="flex items-center justify-between">
              <div>
                <div className="text-white font-semibold">
                  {testimonial.author}
                </div>
                <div className="text-yellow-400 text-sm">
                  {testimonial.project}
                </div>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {testimonial.author.charAt(0)}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

     
    </div>
  );
};
