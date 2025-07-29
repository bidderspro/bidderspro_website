"use client";

import { usePathname } from "next/navigation";
import { lazy, Suspense, ReactNode, useState, useEffect } from "react";

// Dynamically import components
const Header = lazy(() => import("@/sections/Header"));
const Footer = lazy(() => import("@/sections/Footer"));
const ComingSoonPage = lazy(() => import("./ComingSoonPage"));

// Simple loading fallbacks
const LoadingFallback = ({ height = "h-16" }: { height?: string }) => (
  <div className={`${height} w-full bg-black`} />
);

// Full screen loading for production mode
const ProductionLoadingFallback = () => (
  <div className="h-screen w-full bg-black flex items-center justify-center">
    <div className="animate-pulse text-white">Loading...</div>
  </div>
);

interface ConditionalLayoutProps {
  children: ReactNode;
}

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);
  const [shouldShowComingSoon, setShouldShowComingSoon] = useState(false);

  // Check if this is the coming soon page route or homepage
  const isComingSoonPage = pathname === "/coming-soon" || pathname === "/";

  useEffect(() => {
    setIsClient(true);
    // Multiple ways to detect production environment
    const isProduction = 
      process.env.NODE_ENV === 'production' || 
      process.env.SHOW_COMING_SOON === 'true' ||
      process.env.BUILD_ENVIRONMENT === 'production' ||
      (typeof window !== 'undefined' && 
       window.location.hostname !== 'localhost' && 
       window.location.hostname !== '127.0.0.1' &&
       !window.location.hostname.includes('dev') &&
       !window.location.hostname.includes('staging'));
    
    setShouldShowComingSoon(isProduction);
  }, []);

  // Server-side: Always show loading to prevent hydration mismatch
  if (!isClient) {
    // Check if it looks like production environment on server
    const serverIsProduction = process.env.NODE_ENV === 'production' || process.env.SHOW_COMING_SOON === 'true';
    return serverIsProduction ? <ProductionLoadingFallback /> : <LoadingFallback height="h-screen" />;
  }

  // Client-side: In production, ALWAYS show coming soon page for ALL routes
  if (shouldShowComingSoon) {
    return (
      <main className="relative z-10 w-full">
        <Suspense fallback={<ProductionLoadingFallback />}>
          <ComingSoonPage />
        </Suspense>
      </main>
    );
  }
  
  // Development mode: Hide header and footer ONLY on coming soon pages (/ and /coming-soon)
  if (isComingSoonPage) {
    return (
      <main className="relative z-10 w-full">
        {children}
      </main>
    );
  }

  // For all other pages in development, show header and footer
  return (
    <>
      
      <main className="relative z-10 w-full pt-20 sm:pt-24 md:pt-28">
        {children}
      </main>
      
    </>
  );
} 