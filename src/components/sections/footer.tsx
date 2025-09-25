"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const target = ref.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      });
    }, options);
    observer.observe(target);
    return () => observer.unobserve(target);
  }, [options]);

  return { ref, inView } as const;
}

export function Footer() {
  const { ref, inView } = useInView({ threshold: 0.15 });

  const companyLinks = [
    { name: "Why LoleLink?", href: "#why-lolelink" },
    { name: "About", href: "#about" },
    { name: "Contact Us", href: "#contact" }
  ];

  const supportLinks = [
    { name: "Contact Support", href: "#support" },
    { name: "FAQ", href: "#faq" },
    { name: "Support", href: "#help" },
    { name: "License Terms", href: "#license" },
    { name: "How It Works", href: "#how-it-works" }
  ];

  const resourceLinks = [
    { name: "Blog & Tips", href: "#blog" },
    { name: "Terms & Conditions", href: "#terms" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Service Guidelines", href: "#guidelines" }
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com/company/lolelink", icon: "/LinkedIn.svg" },
    { name: "Instagram", href: "https://instagram.com/lolelink", icon: "/instagram.svg" },
    { name: "Twitter", href: "https://twitter.com/lolelink", icon: "/X.svg" },
    { name: "Facebook", href: "https://facebook.com/lolelink", icon: "/facebook.svg" },
    { name: "YouTube", href: "https://youtube.com/@lolelink", icon: "/YouTube.svg" }
  ];

  return (
    <footer
      ref={ref}
      className="bg-black"
      id="footer"
    >
      <div className="w-full">
        {/* Full Width Footer Container */}
        <div
          className={`relative overflow-hidden ${
            inView ? "animate-fade-up" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Main Footer Content */}
          <div className="md:px-32 px-4 py-16">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Company Information */}
              <div className="lg:col-span-1 space-y-6">
                {/* Logo and Company Name */}
                <div className="flex items-center space-x-3">
                  <Image
                    src="/logoicon.webp"
                    alt="LoleLink Logo"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                  <span className="text-white font-bold text-xl">LoleLink</span>
                </div>
                
                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  LoleLink is an AI-powered business management platform designed to help African SMEs streamline operations, automate tasks, and grow smarter.
                </p>
                
                {/* Social Media Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10  rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                      aria-label={social.name}
                    >
                      <Image
                        src={social.icon}
                        alt={social.name}
                        width={20}
                        height={20}
                        className="w-5 h-5"
                      />
                    </a>
                  ))}
                </div>
              </div>

              {/* Company Links */}
              <div className="space-y-4">
                <h3 className="text-white font-bold text-lg">Company</h3>
                <ul className="space-y-3">
                  {companyLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support Links */}
              <div className="space-y-4">
                <h3 className="text-white font-bold text-lg">Support</h3>
                <ul className="space-y-3">
                  {supportLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources Links */}
              <div className="space-y-4">
                <h3 className="text-white font-bold text-lg">Resources</h3>
                <ul className="space-y-3">
                  {resourceLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Section - Copyright */}
          <div className="w-full md:px-32 px-4 pb-8  border-gray-800">
            <div className="flex flex-row justify-between items-center">
              {/* Copyright - Centered */}
              <div className="flex-1"></div>
              <p className="text-white text-sm">
                Copyright © 2025 LoleLink
              </p>
              <div className="flex-1"></div>
              
              {/* Powered by Zulu Tech - At End */}
              <p className="text-sm">
                <span className="text-gray-400">Powered by </span>
                <a 
                  href="https://www.zulu-tech.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  Zulu Tech
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;