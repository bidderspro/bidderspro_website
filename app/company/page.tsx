"use client";

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { TextAnimate } from '@/components/magicui/text-animate';
import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button';
import { Play, Users, Globe, Award, Trophy } from 'lucide-react';
import Image from 'next/image';

// Loading skeleton component
const LoadingComponent = ({ height = "h-96" }: { height?: string }) => (
  <div className={`${height} animate-pulse bg-gray-800/20 rounded-lg mx-auto max-w-6xl`} />
);

// Lazy load heavy components - removing unused import to fix linter error

export default function CompanyPage() {
  // Sample team data - you can replace with real data
  const teamMembers = [
    {
      name: "Olivia Rhye",
      role: "Founder & CEO",
      image: "/public/assets/images/team/portfolio.svg"
    },
    {
      name: "Phoenix Baker", 
      role: "Engineering Manager",
      image: "/public/assets/images/team/portfolio.svg"
    },
    {
      name: "Lana Steiner",
      role: "Product Manager", 
      image: "/public/assets/images/team/portfolio.svg"
    },
    {
      name: "Demi Wilkinson",
      role: "Frontend Developer",
      image: "/public/assets/images/team/portfolio.svg"
    },
    {
      name: "Olivia Rhye",
      role: "Founder & CEO",
      image: "/public/assets/images/team/portfolio.svg"
    },
    {
      name: "Phoenix Baker",
      role: "Engineering Manager", 
      image: "/public/assets/images/team/portfolio.svg"
    },
    {
      name: "Lana Steiner",
      role: "Product Manager",
      image: "/public/assets/images/team/portfolio.svg"
    },
    {
      name: "Demi Wilkinson",
      role: "Frontend Developer",
      image: "/public/assets/images/team/portfolio.svg"
    }
  ];

  const stats = [
    { number: "100+", label: "Employees", icon: Users },
    { number: "15+", label: "Countries", icon: Globe },
    { number: "100+", label: "Project Done", icon: Trophy },
    { number: "25+", label: "Awards", icon: Award }
  ];

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

            <TextAnimate
              animate="blur-in"
              as="h1"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 lg:mb-8 leading-tight uppercase"
            >
              ABOUT US
            </TextAnimate>

            <TextAnimate
              animate="fade-in"
              as="p"
              className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Lorem ipsum dolor sit amet consectetur. In lacinia a rutrum luctus elementum dui pharetra ut tristique. Aliquet sapien quam iaculis lacinia vulputate amet enim convallis lorem. Amet ipsum cum pulvinar volutpat mi. Molestie quis ut et duis non ornare mauris eget scelerisque.
            </TextAnimate>

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
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 md:p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div 
                      key={index}
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
                <TextAnimate
                  animate="blur-in"
                  as="h2"
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-violet-400 uppercase"
                >
                  OUR VISION
                </TextAnimate>
                <TextAnimate
                  animate="fade-in"
                  as="p"
                  className="text-gray-300 text-lg leading-relaxed"
                >
                  Lorem ipsum dolor sit amet consectetur. Nec pellentesque quis blandit tristique dolor posuere egestas diam. Vitae orci convallis amet orci sagittis massa sit elit bibendum risus sapien rhoncus nunc eros. Ipsum quam et a sed quis. Quam purus interdum elementum aliquet quis aliquam aliquam enim. Aliquam lacerat cursus et egestas eleifend. Nunc massa malesuada feugiat fermentum scelerisque amet.
                </TextAnimate>
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
                <TextAnimate
                  animate="blur-in"
                  as="h2"
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-violet-400 uppercase"
                >
                  OUR MISSION
                </TextAnimate>
                <TextAnimate
                  animate="fade-in"
                  as="p"
                  className="text-gray-300 text-lg leading-relaxed"
                >
                  Lorem ipsum dolor sit amet consectetur. Nec pellentesque quis blandit tristique dolor posuere egestas diam. Vitae orci convallis amet orci sagittis massa sit elit bibendum risus sapien rhoncus nunc mollis purus interdum elementum aliquet quis aliquam aliquam enim. Aliquam lacerat cursus et egestas eleifend. Nunc massa malesuada feugiat fermentum scelerisque amet.
                </TextAnimate>
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
              <TextAnimate
                animate="blur-in"
                as="h2"
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 uppercase"
              >
                MEET OUR TEAM
              </TextAnimate>
              <TextAnimate
                animate="fade-in"
                as="p"
                className="text-gray-300 text-lg max-w-2xl mx-auto"
              >
                Lorem ipsum dolor sit amet consectetur. Porta tincidunt venenatis purus id. Faucibus sit aliquot dolor amet
              </TextAnimate>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 lg:gap-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={index}
                  className="text-center animate-fade-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative mb-4 overflow-hidden rounded-full mx-auto w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32">
                    <div className="w-full h-full bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <Users className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                  </div>
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