"use client";
import { useState } from "react";
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

const navItems = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <Navbar className="fixed top-0 left-0 right-0 z-50 bg-transparent ">
      <NavBody className="!py-2">
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="relative z-20 flex items-center space-x-4">
          <NavbarButton href="#contact" variant="primary" className="bg-white text-black hover:bg-violet-700 hover:text-white">
           Talk to us
          </NavbarButton>
         
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
            <a
              key={i}
              href={item.link}
              className="w-full rounded-lg p-2 text-sm hover:bg-gray-100 dark:hover:bg-neutral-900"
              onClick={() => setMobileNavOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <div className="flex w-full flex-col gap-2">
            <NavbarButton href="#contact" variant="primary" className="w-full bg-white text-black hover:bg-violet-700 hover:text-white rounded-3xl uppercase">
              Talk to us
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
