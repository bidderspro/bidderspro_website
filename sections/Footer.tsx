import BP_logo from "@/public/assets/images/bp-logo.webp";
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-b from-transparent to-violet-950/20 text-white border-t border-gray-800/20 mt-16">
      <div className="absolute inset-0 bg-black/5 backdrop-blur-sm z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 justify-center items-start md:items-start lg:items-start justify-items-center">
          
          {/* Brand Section */}
          <div className="col-span-1 lg:col-span-2 space-y-4 text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <Image 
                src={BP_logo}
                alt="BiddersPro Logo"
                width={40}
                height={40}
                className="object-contain"
                loading="lazy"
              />
              <span className="text-4xl font-bold uppercase bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">
                Bidders Pro
              </span>
            </div>
            <p className="text-sm text-gray-400 max-w-md mx-auto md:mx-0">
              Empowering businesses through intelligent automation. Scale your outreach, attract premium clients, and dominate your market with BiddersPro.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-violet-500 transition-colors duration-200">Home</a>
              </li>
              <li>
                <a href="/company" className="text-gray-400 hover:text-violet-500 transition-colors duration-200">About</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-violet-500 transition-colors duration-200">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-violet-500 transition-colors duration-200">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-2">
              <a 
                href="mailto:support@bidderspro.com"
                className="block text-gray-400 hover:text-violet-500 transition-colors duration-200"
              >
                support@bidderspro.com
              </a>
              <div className="flex gap-4 pt-4 justify-center md:justify-start">
                <a 
                  href="https://www.linkedin.com/company/bidderspro/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-violet-500 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/bidderspro?igsh=MTB6NnE1Ym5mNHp3bg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-violet-500 transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.facebook.com/profile.php?id=61552679236200&mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-violet-500 transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-sm text-gray-400">
            Bidders Pro © {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
