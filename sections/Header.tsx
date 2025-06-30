"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import dynamic from "next/dynamic";
import { scrollToSection, scrollToTop } from "@/lib/utils";

// Dynamically import Navbar components individually
const Navbar = dynamic(() => import("@/components/ui/Navbar").then(mod => mod.Navbar), { ssr: true });
const NavBody = dynamic(() => import("@/components/ui/Navbar").then(mod => mod.NavBody), { ssr: true });
const MobileNav = dynamic(() => import("@/components/ui/Navbar").then(mod => mod.MobileNav), { ssr: true });
const MobileNavHeader = dynamic(() => import("@/components/ui/Navbar").then(mod => mod.MobileNavHeader), { ssr: true });
const MobileNavMenu = dynamic(() => import("@/components/ui/Navbar").then(mod => mod.MobileNavMenu), { ssr: true });
const MobileNavToggle = dynamic(() => import("@/components/ui/Navbar").then(mod => mod.MobileNavToggle), { ssr: true });
const NavbarLogo = dynamic(() => import("@/components/ui/Navbar").then(mod => mod.NavbarLogo), { ssr: true });
const NavbarButton = dynamic(() => import("@/components/ui/Navbar").then(mod => mod.NavbarButton), { ssr: true });

type NavItem = {
  name: string;
  link: string;
};

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";
  const [isClient, setIsClient] = useState(false);

  const navItems: NavItem[] = [
    {
      name: "Home",
      link: isHomePage ? "#home" : "/",
    },
    {
      name: "About",
      link: isHomePage ? "#about" : "/#about",
    },
    {
      name: "Upwork Automation",
      link: "/automation",
    },
    {
      name: "Consultation",
      link: "/calendar",
    },
    {
      name: "Testimonials",
      link: isHomePage ? "#testimonials" : "/#testimonials",
    },
    {
      name: "Contact",
      link: isHomePage ? "#contact" : "/#contact",
    },
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Handle hash navigation when directly accessing a URL with hash
  useEffect(() => {
    if (isClient && isHomePage && window.location.hash) {
      const id = window.location.hash.substring(1);
      // Add a slight delay to ensure the page is fully loaded
      setTimeout(() => {
        scrollToSection(id, 80);
      }, 500);
    }
  }, [isHomePage, isClient]);

  // Check for stored section to scroll to after navigation
  useEffect(() => {
    if (isClient && isHomePage) {
      // Check if we have a stored section to scroll to
      const sectionId = sessionStorage.getItem('scrollToSection');
      if (sectionId) {
        // Clear the stored section ID
        sessionStorage.removeItem('scrollToSection');
        // Scroll to the section with a longer delay to ensure page is fully rendered
        setTimeout(() => {
          scrollToSection(sectionId, 80);
        }, 500); // Increased delay for more reliable scrolling
      }
    }
  }, [isClient, isHomePage]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768 && mobileNavOpen) {
        setMobileNavOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileNavOpen]);

  function handleNavigation(e: React.MouseEvent<HTMLAnchorElement>, link: string): void {
    if (!isClient) return;
    
    // If it's a regular page navigation (not hash-based), let Next.js handle it
    if (!link.includes("#")) {
      // For regular page navigation, scroll to top after navigation
      setTimeout(() => {
        scrollToTop();
      }, 100);
      return;
    }
    
    // Handle hash links
    e.preventDefault();
    
    if (link.startsWith("#")) {
      // Hash link on current page
      const sectionId = link.substring(1);
      if (isHomePage) {
        scrollToSection(sectionId, 80);
      } else {
        // If we're not on the home page, navigate to home with hash
        sessionStorage.setItem('scrollToSection', sectionId);
        window.location.href = "/";
      }
    } else if (link.startsWith("/#")) {
      // Hash link to home page while on a different page
      if (isHomePage) {
        // We're already on home page, just scroll to the section
        const sectionId = link.substring(2);
        scrollToSection(sectionId, 80);
      } else {
        // Navigate to home page with hash
        const sectionId = link.substring(2);
        // Store the section ID in sessionStorage to scroll after navigation
        sessionStorage.setItem('scrollToSection', sectionId);
        window.location.href = "/";
      }
    }
  }

  // Handle logo click to always go to top of homepage
  function handleLogoClick(e: React.MouseEvent) {
    if (isHomePage) {
      e.preventDefault();
      scrollToTop();
    }
  }

  return (
    <Navbar className="fixed top-0 left-0 right-0 z-50 w-full bg-transparent backdrop-blur-sm">
      <div className="absolute inset-0 bg-black/5 backdrop-blur-sm z-0"></div>
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <NavBody className="!py-3">
          <div>
            <NavbarLogo onClick={handleLogoClick} />
          </div>
          <div className="absolute inset-0 hidden md:flex flex-1 flex-row items-center justify-center space-x-1 md:space-x-2 text-sm font-medium text-zinc-600">
            {navItems.map((item, idx) => (
              <Link
                key={`link-${idx}`}
                href={item.link}
                scroll={false}
                onClick={(e) => handleNavigation(e, item.link)}
                className="relative px-2 md:px-3 lg:px-4 py-2 text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-white transition-colors duration-200"
                prefetch={true}
              >
                <span className="relative z-20 whitespace-nowrap md:text-xs lg:text-sm">{item.name}</span>
              </Link>
            ))}
          </div>
          <div className="relative z-20 flex items-center">
            <Link href={isHomePage ? "#contact" : "/#contact"} scroll={false} onClick={(e) => {
              e.preventDefault();
              if (isHomePage) {
                scrollToSection("contact", 80);
              } else {
                // Store section ID and navigate to home
                sessionStorage.setItem('scrollToSection', 'contact');
                window.location.href = "/";
              }
            }}> 
              <NavbarButton as="button" variant="primary" className="bg-white text-black hover:bg-violet-700 hover:text-white text-xs md:text-sm">
                Talk to us
              </NavbarButton>
            </Link>
          </div>
        </NavBody>

        <MobileNav className="!py-3">
          <MobileNavHeader>
            <div>
              <NavbarLogo onClick={handleLogoClick} />
            </div>
            <MobileNavToggle
              isOpen={mobileNavOpen}
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            />
          </MobileNavHeader>
          <MobileNavMenu isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)}>
            {navItems.map((item, i) => (
              <Link
                key={i}
                href={item.link}
                scroll={false}
                onClick={(e) => {
                  handleNavigation(e, item.link);
                  setMobileNavOpen(false);
                }}
                className="w-full rounded-lg p-2 text-sm hover:bg-gray-100 dark:hover:bg-neutral-900"
                prefetch={true}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex w-full flex-col gap-2 mt-4">
              <Link href={isHomePage ? "#contact" : "/#contact"} scroll={false} onClick={(e) => {
                e.preventDefault();
                setMobileNavOpen(false);
                if (isHomePage) {
                  scrollToSection("contact", 80);
                } else {
                  // Store section ID and navigate to home
                  sessionStorage.setItem('scrollToSection', 'contact');
                  window.location.href = "/";
                }
              }}> 
                <NavbarButton as="button" variant="primary" className="w-full bg-white text-black hover:bg-violet-700 hover:text-white rounded-3xl uppercase">
                  Talk to us
                </NavbarButton>
              </Link>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </div>
    </Navbar>
  );
}
