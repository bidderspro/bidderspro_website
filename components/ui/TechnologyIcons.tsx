"use client";

import React, { useState, useEffect } from 'react';
import { 
  SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, 
  SiGraphql, SiTailwindcss, SiVercel, SiDocker, SiGit, SiFigma, SiStripe,
  SiPython, SiTensorflow, SiPytorch, SiOpenai, SiZapier, SiGooglecloud,
  SiFlutter, SiSwift, SiKotlin, SiFirebase, SiRedux, SiXcode, SiAndroidstudio,
  SiShopify, SiJavascript, SiSass, SiWebpack, SiAdobexd, SiSketch, SiInvision, SiFramer,
  SiWordpress, SiWoocommerce, SiElementor, SiPhp, SiMysql, SiCloudflare,
  SiNotion, SiAdobe, SiHuggingface, SiMake, SiCss3, SiAmazon
} from 'react-icons/si';
import { IconType } from 'react-icons';

export interface Technology {
  name: string;
  icon: IconType | null;
  color: string;
}

// Technology mapping with colorful icons - ensuring all icons exist
const createTechnologyMap = (): Record<string, Technology> => {
  const safeIcon = (icon: any): IconType | null => {
    return typeof icon === 'function' ? icon : null;
  };

  return {
    // Web Development
    "React.js": { name: "React.js", icon: safeIcon(SiReact), color: "#61DAFB" },
    "Next.js": { name: "Next.js", icon: safeIcon(SiNextdotjs), color: "#000000" },
    "TypeScript": { name: "TypeScript", icon: safeIcon(SiTypescript), color: "#3178C6" },
    "Node.js": { name: "Node.js", icon: safeIcon(SiNodedotjs), color: "#339933" },
    "Express.js": { name: "Express.js", icon: safeIcon(SiExpress), color: "#000000" },
    "MongoDB": { name: "MongoDB", icon: safeIcon(SiMongodb), color: "#47A248" },
    "PostgreSQL": { name: "PostgreSQL", icon: safeIcon(SiPostgresql), color: "#336791" },
    "GraphQL": { name: "GraphQL", icon: safeIcon(SiGraphql), color: "#E10098" },
    "Tailwind CSS": { name: "Tailwind CSS", icon: safeIcon(SiTailwindcss), color: "#06B6D4" },
         "AWS": { name: "AWS", icon: safeIcon(SiAmazon), color: "#FF9900" },
    "Vercel": { name: "Vercel", icon: safeIcon(SiVercel), color: "#000000" },
    "Docker": { name: "Docker", icon: safeIcon(SiDocker), color: "#2496ED" },
    "Git": { name: "Git", icon: safeIcon(SiGit), color: "#F05032" },
    "Figma": { name: "Figma", icon: safeIcon(SiFigma), color: "#F24E1E" },
    "Stripe API": { name: "Stripe API", icon: safeIcon(SiStripe), color: "#635BFF" },

    // AI & Automation
    "Python": { name: "Python", icon: safeIcon(SiPython), color: "#3776AB" },
    "TensorFlow": { name: "TensorFlow", icon: safeIcon(SiTensorflow), color: "#FF6F00" },
    "PyTorch": { name: "PyTorch", icon: safeIcon(SiPytorch), color: "#EE4C2C" },
    "OpenAI API": { name: "OpenAI API", icon: safeIcon(SiOpenai), color: "#412991" },
    "Zapier": { name: "Zapier", icon: safeIcon(SiZapier), color: "#FF4A00" },
    "Microsoft Power Automate": { name: "Microsoft Power Automate", icon: safeIcon(SiGooglecloud), color: "#0078D4" },
    "Google Cloud AI": { name: "Google Cloud AI", icon: safeIcon(SiGooglecloud), color: "#4285F4" },
         "AWS AI": { name: "AWS AI", icon: safeIcon(SiAmazon), color: "#FF9900" },
    "Azure ML": { name: "Azure ML", icon: safeIcon(SiGooglecloud), color: "#0078D4" },
    "Hugging Face": { name: "Hugging Face", icon: safeIcon(SiHuggingface), color: "#FFD21E" },
    "Make.com": { name: "Make.com", icon: safeIcon(SiMake), color: "#7B68EE" },

    // Mobile Development
    "React Native": { name: "React Native", icon: safeIcon(SiReact), color: "#61DAFB" },
    "Flutter": { name: "Flutter", icon: safeIcon(SiFlutter), color: "#02569B" },
    "Swift": { name: "Swift", icon: safeIcon(SiSwift), color: "#FA7343" },
    "Kotlin": { name: "Kotlin", icon: safeIcon(SiKotlin), color: "#7F52FF" },
    "Firebase": { name: "Firebase", icon: safeIcon(SiFirebase), color: "#FFCA28" },
    "Redux": { name: "Redux", icon: safeIcon(SiRedux), color: "#764ABC" },
    "Xcode": { name: "Xcode", icon: safeIcon(SiXcode), color: "#147EFB" },
    "Android Studio": { name: "Android Studio", icon: safeIcon(SiAndroidstudio), color: "#3DDC84" },
    "Lottie": { name: "Lottie", icon: safeIcon(SiAdobe), color: "#00DDB3" },

    // Shopify Development
    "Shopify": { name: "Shopify", icon: safeIcon(SiShopify), color: "#7AB55C" },
    "Shopify Plus": { name: "Shopify Plus", icon: safeIcon(SiShopify), color: "#7AB55C" },
    "JavaScript": { name: "JavaScript", icon: safeIcon(SiJavascript), color: "#F7DF1E" },
    "React": { name: "React", icon: safeIcon(SiReact), color: "#61DAFB" },
    "SCSS": { name: "SCSS", icon: safeIcon(SiSass), color: "#CC6699" },
    "Webpack": { name: "Webpack", icon: safeIcon(SiWebpack), color: "#8DD6F9" },

    // UI/UX Design
    "Adobe XD": { name: "Adobe XD", icon: safeIcon(SiAdobexd), color: "#FF61F6" },
    "Sketch": { name: "Sketch", icon: safeIcon(SiSketch), color: "#F7B500" },
    "InVision": { name: "InVision", icon: safeIcon(SiInvision), color: "#FF3366" },
    "Framer": { name: "Framer", icon: safeIcon(SiFramer), color: "#0055FF" },
    "Notion": { name: "Notion", icon: safeIcon(SiNotion), color: "#000000" },

    // WordPress Development
    "WordPress": { name: "WordPress", icon: safeIcon(SiWordpress), color: "#21759B" },
    "WooCommerce": { name: "WooCommerce", icon: safeIcon(SiWoocommerce), color: "#96588A" },
    "Elementor": { name: "Elementor", icon: safeIcon(SiElementor), color: "#92003B" },
    "PHP": { name: "PHP", icon: safeIcon(SiPhp), color: "#777BB4" },
    "MySQL": { name: "MySQL", icon: safeIcon(SiMysql), color: "#4479A1" },
    "Cloudflare": { name: "Cloudflare", icon: safeIcon(SiCloudflare), color: "#F38020" },
    "CSS/SASS": { name: "CSS/SASS", icon: safeIcon(SiSass), color: "#CC6699" },

    // Generic fallbacks
    "Machine Learning": { name: "Machine Learning", icon: safeIcon(SiPython), color: "#3776AB" },
    "Natural Language Processing": { name: "Natural Language Processing", icon: safeIcon(SiPython), color: "#3776AB" },
    "Computer Vision": { name: "Computer Vision", icon: safeIcon(SiPython), color: "#3776AB" },
    "REST APIs": { name: "REST APIs", icon: safeIcon(SiNodedotjs), color: "#339933" },
    "MobX": { name: "MobX", icon: safeIcon(SiReact), color: "#FF9955" },
    "Liquid": { name: "Liquid", icon: safeIcon(SiShopify), color: "#7AB55C" },
    "Shopify API": { name: "Shopify API", icon: safeIcon(SiShopify), color: "#7AB55C" },
    "Shopify CLI": { name: "Shopify CLI", icon: safeIcon(SiShopify), color: "#7AB55C" },
    "Themekit": { name: "Themekit", icon: safeIcon(SiShopify), color: "#7AB55C" },
    "Shopify Flow": { name: "Shopify Flow", icon: safeIcon(SiShopify), color: "#7AB55C" },
    "Shopify Scripts": { name: "Shopify Scripts", icon: safeIcon(SiShopify), color: "#7AB55C" },
    "ACF": { name: "ACF", icon: safeIcon(SiWordpress), color: "#21759B" },
    "Gravity Forms": { name: "Gravity Forms", icon: safeIcon(SiWordpress), color: "#EE5627" },
    "WP-CLI": { name: "WP-CLI", icon: safeIcon(SiWordpress), color: "#21759B" },
    "Principle": { name: "Principle", icon: safeIcon(SiFramer), color: "#0055FF" },
    "Protopie": { name: "Protopie", icon: safeIcon(SiFramer), color: "#9013FE" },
    "Zeplin": { name: "Zeplin", icon: safeIcon(SiFigma), color: "#F24E1E" },
    "Abstract": { name: "Abstract", icon: safeIcon(SiGit), color: "#F05032" },
    "CocoaPods": { name: "CocoaPods", icon: safeIcon(SiSwift), color: "#FA7343" },
  };
};

interface TechnologyIconsProps {
  technologies: string[];
  className?: string;
}

const TechnologyIcons: React.FC<TechnologyIconsProps> = ({ technologies, className = "" }) => {
  const [isClient, setIsClient] = useState(false);
  const [technologyMap, setTechnologyMap] = useState<Record<string, Technology>>({});

  // Ensure client-side only rendering to avoid hydration mismatches
  useEffect(() => {
    setIsClient(true);
    setTechnologyMap(createTechnologyMap());
  }, []);

  // Don't render on server to avoid hydration issues
  if (!isClient) {
    return (
      <div className={`flex flex-wrap justify-center gap-6 ${className}`}>
        {technologies.map((_, index) => (
          <div 
            key={index}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-3 w-24 h-10 animate-pulse"
          />
        ))}
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap justify-center gap-6 ${className}`}>
      {technologies.map((techName, index) => {
        const tech = technologyMap[techName];
        
        if (!tech || !tech.icon) {
          // Fallback for technologies not in our map or with undefined icons
          return (
            <div 
              key={`${techName}-${index}`}
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 text-white transition-all duration-300 hover:bg-white/10"
              title={techName}
            >
              <span className="text-sm font-medium">{techName}</span>
            </div>
          );
        }

        const IconComponent = tech.icon;
        
        return (
          <div 
            key={`${techName}-${index}`}
            className="group relative flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-3 transition-all duration-300 hover:bg-white/10 hover:scale-105"
          >
            <IconComponent 
              size={20}
              style={{ color: tech.color }}
              className="transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-sm font-medium text-white/90">{tech.name}</span>
            
            {/* Hover tooltip */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10 whitespace-nowrap">
              {tech.name}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TechnologyIcons; 