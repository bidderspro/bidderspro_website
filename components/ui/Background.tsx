"use client";
import { cn } from "@/lib/utils";
import React from "react";

export const BackgroundBeamsWithCollision = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "min-h-[500px] h-auto md:h-[40rem] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative flex items-center w-full justify-center overflow-hidden",
        className
      )}
    >
      {/* Static decorative elements for visual appeal */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-indigo-500/50 to-transparent"></div>
      <div className="absolute top-0 left-3/4 w-px h-24 bg-gradient-to-b from-purple-500/50 to-transparent"></div>
      <div className="absolute top-0 right-1/3 w-px h-40 bg-gradient-to-b from-pink-500/50 to-transparent"></div>

      {children}
      
      <div className="absolute bottom-0 w-full inset-x-0 pointer-events-none h-24 bg-gradient-to-t from-slate-950 to-transparent"></div>
    </div>
  );
};
