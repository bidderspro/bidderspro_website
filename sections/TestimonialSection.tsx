"use client";

type Testimonial = {
  quote: string;
  author: string;
  project: string;
  rating: number;
};

const TestimonialSection = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "We needed a reliable automation system for our Upwork bidding. Bidders Pro delivered a flawless solution that increased our bid success rate by 70%. Their attention to detail and responsive support made the whole process seamless.",
      author: "ADHUB Marketing",
      project: "Digital Marketing Agency",
      rating: 5,
    },
    {
      quote: "Bidders Pro transformed our freelancing workflow. Their automation tool not only saved us countless hours but also helped us target the right projects with precision. The ROI was immediate and substantial.",
      author: "Techticks Digital", 
      project: "Software Development Studio",
      rating: 5,
    },
    {
      quote: "We had a vision to scale our freelance operations and Bidders Pro brought it to life. The integration of smart filters, automatic bidding, and seamless workflow was exactly what we needed. It's a game-changer for serious freelancers.",
      author: "MetaSync Technologies",
      project: "Web Development Agency",
      rating: 5,
    },
    {
      quote: "Bidders Pro built us a dynamic bidding system with analytics, automation, and secure access. What impressed me most was their attention to both technical efficiency and usability. It's rare to find a solution that's both powerful and easy to use.",
      author: "Freelance Accelerator",
      project: "Freelancing Collective",
      rating: 5,
    }
  ];

  return (
    <section className="text-white py-24" id="testimonials">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-yellow-500/20 rounded-full text-yellow-400 text-sm font-medium mb-6 animate-fade-in">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping-slow"></div>
              Client Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-in-up">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                What Our Clients 
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Say About Bidders Pro
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-delayed">
              We don't talk about success
              <span className="text-yellow-400 font-semibold"> we automate it.</span>
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-yellow-500/30 transition-all duration-300 relative animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />
                  </svg>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <svg key={starIndex} className="w-5 h-5 fill-yellow-400 text-yellow-400" viewBox="0 0 24 24">
                      <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z" />
                    </svg>
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
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center border border-yellow-500/20 rounded-2xl p-8 animate-fade-in-delayed-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              Your Success Story Could Be Next
            </h3>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              Join the growing list of satisfied clients who chose quality, reliability, and results.
            </p>
            
            <button
              onClick={() => window.location.href = '/calendar'}
              className="px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-semibold rounded-xl hover:from-yellow-700 hover:to-orange-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Schedule Your Meeting
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection;
