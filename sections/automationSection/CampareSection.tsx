import React from 'react';
import { IconX, IconCheck } from '@tabler/icons-react';

const CompareSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="overflow-hidden rounded-xl shadow-2xl border-2 border-[#E0E0FF] bg-gray-900 relative">
          {/* Neon glow effect */}
          <div className="absolute inset-0 rounded-xl blur-[2px] bg-violet-400 opacity-20"></div>
          
          <table className="w-full border-collapse relative z-10">
            <thead>
              <tr className="text-xl font-bold bg-gray-800">
                <th className="py-5 px-6 text-left border-b border-r border-gray-700 w-1/2">
                  <span className="text-[#E0E0FF] italic">Say Goodbye To:</span>
                </th>
                <th className="py-5 px-6 text-left border-b border-gray-700 w-1/2">
                  <span className="text-[#E0E0FF] italic">Experience What It's Like To:</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-6 border-b border-r border-gray-700">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <IconX className="h-5 w-5 text-red-400" />
                    </div>
                    <p className="text-gray-100">
                      Staying up all night because someone invited you "applying at night works better."
                    </p>
                  </div>
                </td>
                <td className="p-6 border-b border-gray-700">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <IconCheck className="h-5 w-5 text-[#E0E0FF]" />
                    </div>
                    <p className="text-gray-100">
                      Let clients come to you through invites—your off-site hustle stays untouched and uninterrupted.
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-6 border-b border-r border-gray-700">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <IconX className="h-5 w-5 text-red-400" />
                    </div>
                    <p className="text-gray-100">
                      Spending your hard-earned cash on bidders who do nothing but burn through your account.
                    </p>
                  </div>
                </td>
                <td className="p-6 border-b border-gray-700">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <IconCheck className="h-5 w-5 text-[#E0E0FF]" />
                    </div>
                    <p className="text-gray-100">
                      Earn $5,000-$10,000+ every month—not by hopping on calls with high-ticket clients.
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-6 border-b border-r border-gray-700">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <IconX className="h-5 w-5 text-red-400" />
                    </div>
                    <p className="text-gray-100">
                      Facing radio silence from clients—proposal after proposal, no response, just frustration.
                    </p>
                  </div>
                </td>
                <td className="p-6 border-b border-gray-700">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <IconCheck className="h-5 w-5 text-[#E0E0FF]" />
                    </div>
                    <p className="text-gray-100">
                      Scale higher, faster, stronger—with every passing day, your growth compounds.
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-6 border-r border-gray-700">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <IconX className="h-5 w-5 text-red-400" />
                    </div>
                    <p className="text-gray-100">
                      Draining money with zero returns, stuck in a cycle that feels more like a hamster wheel strategy.
                    </p>
                  </div>
                </td>
                <td className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <IconCheck className="h-5 w-5 text-[#E0E0FF]" />
                    </div>
                    <p className="text-gray-100">
                      Get 10x return on your spendings within very first month of automation.
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default CompareSection;
