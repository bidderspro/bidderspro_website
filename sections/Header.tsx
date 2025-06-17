"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  NavbarButton
} from "@/components/ui/Navbar";

// Define nav item type
type NavItem = {
  name: string;
  link: string;
};

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  // Client-side state for hash handling
  const [isClient, setIsClient] = useState(false);

  // Define navigation items based on current page
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

  // Set client-side state
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Handle scrolling for hash links when not on home page
  useEffect(() => {
    // Only run on the client and after the component has mounted
    if (isClient && !isHomePage && window.location.hash) {
      // Navigate to the section after a short delay to ensure the page is loaded
      setTimeout(() => {
        const id = window.location.hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    }
  }, [isHomePage, isClient]);

  // Handle window resize to close mobile menu when switching to desktop
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768 && mobileNavOpen) {
        setMobileNavOpen(false);
      }
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileNavOpen]);

  // Custom navigation handler
  function handleNavigation(e: React.MouseEvent<HTMLAnchorElement>, link: string): void {
    // Only run client-side code after hydration
    if (isClient) {
      // If it's a hash link on non-home page, prevent default behavior
      if (link.startsWith("/#") && !isHomePage) {
        e.preventDefault();
        window.location.href = link;
      }
    }
  }

  return (
    <Navbar className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <NavBody className="!py-2">
        <NavbarLogo />
        <div className="absolute inset-0 hidden md:flex flex-1 flex-row items-center justify-center space-x-1 md:space-x-2 text-sm font-medium text-zinc-600">
          {navItems.map((item, idx) => (
            <Link
              key={`link-${idx}`}
              href={item.link}
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavigation(e, item.link)}
              className="relative px-2 md:px-3 lg:px-4 py-2 text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-white transition-colors duration-200"
            >
              <span className="relative z-20 whitespace-nowrap md:text-xs lg:text-sm">{item.name}</span>
            </Link>
          ))}
        </div>
        <div className="relative z-20 flex items-center">
          <Link href={isHomePage ? "#contact" : "/#contact"}>
            <NavbarButton as="button" variant="primary" className="bg-white text-black hover:bg-violet-700 hover:text-white text-xs md:text-sm">
             Talk to us
            </NavbarButton>
          </Link>
        </div>
      </NavBody>

      <MobileNav className="!py-2">
        <MobileNavHeader>
          <NavbarLogo />
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
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                handleNavigation(e, item.link);
                setMobileNavOpen(false);
              }}
              className="w-full rounded-lg p-2 text-sm hover:bg-gray-100 dark:hover:bg-neutral-900"
            >
              {item.name}
            </Link>
          ))}
          <div className="flex w-full flex-col gap-2 mt-4">
            <Link href={isHomePage ? "#contact" : "/#contact"}>
              <NavbarButton as="button" variant="primary" className="w-full bg-white text-black hover:bg-violet-700 hover:text-white rounded-3xl uppercase">
                Talk to us
              </NavbarButton>
            </Link>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
