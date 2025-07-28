"use client";

import React, { Suspense, useState } from 'react';
import dynamic from 'next/dynamic';
import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button';
import { Play, Users, Globe, Award, Trophy } from 'lucide-react';
import Image from 'next/image';

// Loading skeleton component
const LoadingComponent = ({ height = "h-96" }: { height?: string }) => (
  <div className={`${height} animate-pulse bg-gray-800/20 rounded-lg mx-auto max-w-6xl`} />
);

// Error boundary for images
const TeamMemberImage = ({ src, alt, name }: { src: string; alt: string; name: string }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="relative mb-4 overflow-hidden rounded-full mx-auto w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32">
      {!imageError ? (
        <Image
          src={src}
          alt={alt}
          width={128}
          height={128}
          className={`w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-300 ${!imageLoaded ? 'opacity-0' : 'opacity-100'}`}
          onError={() => setImageError(true)}
          onLoad={() => setImageLoaded(true)}
          priority={true}
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center">
          <span className="text-white text-lg font-bold">
            {name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
      )}
    </div>
  );
};

// Lazy load heavy components - removing unused import to fix linter error

// Team data with real names and roles - moved outside component for consistency
const TEAM_MEMBERS = [
  {
    name: "Usama Ashraf",
    role: "Founder & CEO",
    image: "/assets/images/team_member_1.jpg"
  },
  {
    name: "Mishal Ali", 
    role: "Co-Founder",
    image: "/assets/images/Team_member_2.jpg"
  },
  {
    name: "Abdul Manan",
    role: "Upwork Automation Manager", 
    image: "/assets/images/team_member_3.jpg"
  },
  {
    name: "Arif Ullah",
    role: "Visual Designer",
    image: "/assets/images/Team_member_4.jpg"
  }
];

const COMPANY_STATS = [
  { number: "500+", label: "Happy Clients", icon: Users },
  { number: "15+", label: "Countries Served", icon: Globe },
  { number: "1000+", label: "Projects Completed", icon: Trophy },
  { number: "98%", label: "Success Rate", icon: Award }
];

export default function CompanyPage() {
  // Use the constants defined outside the component
  const teamMembers = TEAM_MEMBERS;
  const stats = COMPANY_STATS;

  return (
    <div className="w-full text-white">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Company badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-8 animate-fade-in">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping-slow"></div>
              our company
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 lg:mb-8 leading-tight uppercase animate-slide-in-up">
              ABOUT US
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-delayed">
              We&apos;re the automation specialists who transform manual hustle into predictable business growth. Our mission is simple: replace your grinding with intelligent scaling so you can focus on what truly matters.
            </p>

            <div className="animate-fade-in-delayed-2">
              <InteractiveHoverButton
                className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
                onClick={() => window.location.href = '/calendar'}
              >
                BOOK A FREE CALL
              </InteractiveHoverButton>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 animate-slide-in-up">
              See BiddersPro In Action
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto animate-fade-in-delayed">
              Watch how our automation transforms the way businesses attract clients and scale their operations
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Suspense fallback={<LoadingComponent height="h-64" />}>
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden aspect-video group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-purple-600/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-violet-600 rounded-full flex items-center justify-center group-hover:bg-violet-700 transition-colors duration-300 group-hover:scale-110 transform">
                    <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
        </Suspense>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 lg:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 uppercase animate-slide-in-up">
                Our Impact in Numbers
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto animate-fade-in-delayed">
                Real results from real clients who trusted BiddersPro to transform their business growth
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 md:p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div 
                      key={`stat-${stat.label.replace(/\s+/g, '-').toLowerCase()}`}
                      className="text-center animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex justify-center mb-3">
                        <IconComponent className="w-8 h-8 text-violet-400" />
                      </div>
                      <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                        {stat.number}
                      </div>
                      <div className="text-gray-300 text-sm sm:text-base font-medium">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="w-full lg:w-1/2">
                <Image
                  src="/assets/images/about-us.webp"
                  alt="Our Vision"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
              <div className="w-full lg:w-1/2 space-y-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-violet-400 uppercase animate-slide-in-up">
                  OUR VISION
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-300 text-lg leading-relaxed animate-fade-in-delayed">
                    To revolutionize how businesses approach client acquisition by making automation accessible, effective, and profitable for everyone from solo freelancers to large agencies.
                  </p>
                  <p className="text-gray-400 text-lg leading-relaxed animate-fade-in-delayed-2">
                    We envision a world where manual bidding and endless proposal writing become obsolete, replaced by intelligent systems that work 24/7 to attract the right clients at the right time.
                  </p>
                  <p className="text-violet-400 text-lg leading-relaxed font-semibold animate-fade-in-delayed">
                    The future of freelancing is automated. The future is now.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12">
              <div className="w-full lg:w-1/2">
                <Image
                  src="/assets/images/about-us.webp"
                  alt="Our Mission"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
              <div className="w-full lg:w-1/2 space-y-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-violet-400 uppercase animate-slide-in-up">
                  OUR MISSION
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-300 text-lg leading-relaxed animate-fade-in-delayed">
                    To empower businesses with cutting-edge automation solutions that eliminate the guesswork from client acquisition and transform manual processes into predictable revenue streams.
                  </p>
                  <p className="text-gray-400 text-lg leading-relaxed animate-fade-in-delayed-2">
                    We&apos;re committed to delivering personalized automation strategies that not only save time but multiply results, ensuring every client experiences sustainable growth and competitive advantage.
                  </p>
                  <p className="text-violet-400 text-lg leading-relaxed font-semibold animate-fade-in-delayed">
                    Your success is our success. We don&apos;t just build automation; we build partnerships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 uppercase animate-slide-in-up">
                MEET OUR TEAM
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto animate-fade-in-delayed">
                Meet the innovators behind BiddersPro, a diverse team of automation specialists, developers, and growth strategists dedicated to transforming your business success.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 lg:gap-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={`team-member-${member.name.replace(/\s+/g, '-').toLowerCase()}`}
                  className="text-center animate-fade-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <TeamMemberImage src={member.image} alt={`${member.name} - ${member.role}`} name={member.name} />
                  <h3 className="text-white font-semibold text-sm sm:text-base mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      </div>
  );
} 