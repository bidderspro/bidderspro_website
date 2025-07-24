import React from 'react';
import { IconX, IconCheck } from '@tabler/icons-react';

const CompareSection = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Responsive heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center text-white mb-6 sm:mb-8 md:mb-10 lg:mb-12 uppercase">
          Here's The Difference
        </h2>

        <div className="overflow-hidden rounded-lg sm:rounded-xl shadow-lg sm:shadow-2xl border border-[#E0E0FF] sm:border-2 bg-gray-900 relative">
          {/* Neon glow effect */}
          <div className="absolute inset-0 rounded-lg sm:rounded-xl blur-[1px] sm:blur-[2px] bg-violet-400 opacity-10 sm:opacity-20"></div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse relative z-10">
              <thead>
                <tr className="text-base sm:text-lg md:text-xl font-bold bg-gray-800">
                  <th className="py-3 sm:py-4 md:py-5 px-3 sm:px-4 md:px-6 text-left border-b border-r border-gray-700 w-1/2">
                    <span className="text-[#E0E0FF] italic">Say Goodbye To:</span>
                  </th>
                  <th className="py-3 sm:py-4 md:py-5 px-3 sm:px-4 md:px-6 text-left border-b border-gray-700 w-1/2">
                    <span className="text-[#E0E0FF] italic">Experience What It's Like To:</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 sm:p-4 md:p-6 border-b border-r border-gray-700">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <IconX className="h-4 w-4 sm:h-5 sm:w-5 text-red-400" />
                      </div>
                      <p className="text-sm sm:text-base md:text-lg text-gray-100">
                        Staying up all night because someone told you "applying at night works better."
                      </p>
                    </div>
                  </td>
                  <td className="p-3 sm:p-4 md:p-6 border-b border-gray-700">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <IconCheck className="h-4 w-4 sm:h-5 sm:w-5 text-[#E0E0FF]" />
                      </div>
                      <p className="text-sm sm:text-base md:text-lg text-gray-100">
                        Let clients come to you through invites, your off-site hustle stays untouched and uninterrupted.
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 md:p-6 border-b border-r border-gray-700">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <IconX className="h-4 w-4 sm:h-5 sm:w-5 text-red-400" />
                      </div>
                      <p className="text-sm sm:text-base md:text-lg text-gray-100">
                        Spending your hard-earned cash on bidding tools that do nothing but burn through your connects.
                      </p>
                    </div>
                  </td>
                  <td className="p-3 sm:p-4 md:p-6 border-b border-gray-700">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <IconCheck className="h-4 w-4 sm:h-5 sm:w-5 text-[#E0E0FF]" />
                      </div>
                      <p className="text-sm sm:text-base md:text-lg text-gray-100">
                        Earn $5,000-$10,000+ every month by hopping on calls with high-ticket clients.
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 md:p-6 border-b border-r border-gray-700">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <IconX className="h-4 w-4 sm:h-5 sm:w-5 text-red-400" />
                      </div>
                      <p className="text-sm sm:text-base md:text-lg text-gray-100">
                        Facing radio silence from clients, proposal after proposal, no response, just frustration.
                      </p>
                    </div>
                  </td>
                  <td className="p-3 sm:p-4 md:p-6 border-b border-gray-700">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <IconCheck className="h-4 w-4 sm:h-5 sm:w-5 text-[#E0E0FF]" />
                      </div>
                      <p className="text-sm sm:text-base md:text-lg text-gray-100">
                        Scale higher, faster, stronger with every passing day, your growth compounds.
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 md:p-6 border-r border-gray-700">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <IconX className="h-4 w-4 sm:h-5 sm:w-5 text-red-400" />
                      </div>
                      <p className="text-sm sm:text-base md:text-lg text-gray-100">
                        Draining money with zero returns, stuck in a cycle that feels more like a hamster wheel than a strategy.
                      </p>
                    </div>
                  </td>
                  <td className="p-3 sm:p-4 md:p-6">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <IconCheck className="h-4 w-4 sm:h-5 sm:w-5 text-[#E0E0FF]" />
                      </div>
                      <p className="text-sm sm:text-base md:text-lg text-gray-100">
                        Get 10x return on your investment within the very first month of automation.
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompareSection;
