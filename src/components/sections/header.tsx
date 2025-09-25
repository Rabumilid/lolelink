"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Add glowing border when user scrolls past 100px
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 mx-auto max-w-7xl px-4">
      <div 
        className={`h-16 rounded-4xl backdrop-blur-md border shadow-2xl flex items-center justify-between px-6 transition-all duration-500 ${
          isScrolled 
            ? 'bg-black/90 border-blue-400 shadow-blue-400/50' 
            : 'bg-black/80 border-blue-500/30'
        }`}
        style={{
          boxShadow: isScrolled 
            ? '0 0 30px rgba(59, 130, 246, 0.5), 0 0 60px rgba(59, 130, 246, 0.3), 0 25px 50px -12px rgba(0, 0, 0, 0.25)' 
            : '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }}
      >
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <Image
              src="/logoicon.webp"
              alt="LoleLink Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="font-bold text-xl text-white drop-shadow-lg">
              LoleLink
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#hero" 
              className="font-medium text-gray-300 hover:text-blue-400 transition-colors duration-200"
            >
              Home
            </a>
            <a 
              href="#section-two" 
              className="font-medium text-gray-300 hover:text-blue-400 transition-colors duration-200"
            >
              About Us
            </a>
            <a 
              href="#key-features" 
              className="font-medium text-gray-300 hover:text-blue-400 transition-colors duration-200"
            >
              Features
            </a>
            <a 
              href="#footer" 
              className="font-medium text-gray-300 hover:text-blue-400 transition-colors duration-200"
            >
              Contact
            </a>
          </nav>

          {/* Sign In Button */}
          <a 
            href="/auth/login" 
            className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-sm transition-all duration-300 transform hover:scale-105 border border-blue-400/50 hover:border-blue-400 shadow-lg hover:shadow-xl cursor-pointer" 
            style={{ 
              boxShadow: "0 0 20px rgba(59, 130, 246, 0.3), 0 10px 25px -5px rgba(0, 0, 0, 0.3)"
            }}
          >
            Sign In
          </a>
      </div>
    </header>
  );
}


