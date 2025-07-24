import React from 'react';

const WhyAutomationSection = () => {
  return (
    <section className="pt-0 pb-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 relative overflow-hidden">
      
      {/* Content container */}
      <div className="container items-center justify-center mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Alert icon and heading */}
          <div className="text-center mb-4 sm:mb-6 animate-slide-in-left">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">Why You're Here & Why This Page Exists</h2>
          </div>
          
          {/* Subheading */}
          <h3 className="text-md sm:text-lg md:text-xl text-[#E0E0FF] mb-8 sm:mb-12 max-w-3xl mx-auto text-center animate-slide-in-left [animation-delay:0.2s]">
            Upwork feels broken but it's not. You're just playing the wrong game.
          </h3>
          
          {/* Content and illustration container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">
            {/* Content */}
            <div className="space-y-4 sm:space-y-6 animate-fade-in [animation-delay:0.4s]">
              <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed">
                You've probably been told, <span className="text-red-400 font-semibold">"Upwork is dead."</span>
              </p>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed">
                But the truth is, it's only dead for those burning connects blindly, sending template proposals, and hoping for a miracle.
              </p>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed">
                You're tired, frustrated, and ready for change.
              </p>
            </div>
            
            {/* Lightweight CSS-based illustration */}
            <div className="relative animate-scale-in [animation-delay:0.6s]">
              <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 backdrop-blur-sm overflow-hidden">
                {/* Frustrated freelancer illustration using CSS */}
                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
                  {/* Computer screen */}
                  <div className="w-32 h-20 bg-gray-700 rounded-lg border-2 border-gray-600 relative">
                    <div className="absolute inset-2 bg-gray-900 rounded flex items-center justify-center">
                      <div className="text-red-400 text-xs font-mono">No Proposals</div>
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-gray-600 rounded-b"></div>
                  </div>
                  
                  {/* Person */}
                  <div className="relative">
                    {/* Head */}
                    <div className="w-8 h-8 bg-orange-300 rounded-full mx-auto mb-1"></div>
                    {/* Body */}
                    <div className="w-6 h-12 bg-blue-600 rounded-lg mx-auto"></div>
                    {/* Arms - tired gesture */}
                    <div className="absolute top-8 -left-3 w-6 h-2 bg-orange-300 rounded-full transform rotate-45"></div>
                    <div className="absolute top-8 -right-3 w-6 h-2 bg-orange-300 rounded-full transform -rotate-45"></div>
                  </div>
                  
                  {/* Frustration indicators */}
                  <div className="absolute top-4 left-4 text-yellow-400 text-lg animate-bounce">💸</div>
                  <div className="absolute top-8 right-6 text-red-400 text-sm animate-pulse">😤</div>
                </div>
                
                {/* Status indicators */}
                <div className="absolute top-4 right-4 bg-red-500/20 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-2 rounded-full border border-red-500/30 animate-slide-in-right [animation-delay:0.8s]">
                  <p className="text-red-400 font-medium text-sm sm:text-base">0 Invites</p>
                </div>
                
                <div className="absolute bottom-4 left-4 bg-gray-800/80 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-lg border border-gray-700/50 animate-slide-in-left [animation-delay:1s]">
                  <p className="text-gray-400 text-xs sm:text-sm">2:32 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAutomationSection;