"use client";

import React, { useEffect, useRef, useState } from "react";

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

export function CallToAction() {
  const { ref, inView } = useInView({ threshold: 0.15 });

  return (
    <section
      id="call-to-action"
      ref={ref}
      className=" bg-white"
    >
      <div className="md:max-w-7xl w-full mx-auto px-4 py-16">
        {/* Rounded Banner Container */}
        <div
          className={`relative rounded-3xl p-8  text-center overflow-hidden h-80 md:h-96  ${
            inView ? "animate-fade-up" : "opacity-0 translate-y-6"
          }`}
          style={{
            background: "rgba(10, 10, 10, 0.8)",
            backgroundImage: "radial-gradient(ellipse 800px 400px at top right, rgba(17, 112, 185, 1) 0%, rgba(17, 112, 185, 0) 70%), radial-gradient(ellipse 800px 400px at bottom left, rgba(17, 112, 185, 1) 0%, rgba(17, 112, 185, 0) 70%)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right top, left bottom",
            backdropFilter: "blur(300px)",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)",
          }}
        >
          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-center items-center">
            {/* Subtitle */}
            <h2 className="text-base md:text-lg font-medium text-gray-300 mb-4">
              Your Business, Simplified
            </h2>
            
            {/* Main Heading */}
                <h1 className="text-xl md:text-4xl lg:text-5xl font-bold text-white leading-tight uppercase mb-6">
                  Unleash the Power of <span className="text-[rgb(54,146,255)]">LoleLink</span>
                </h1>
            
            {/* Description */}
            <p className="text-base md:text-lg text-gray-200 md:mb-8 mb-2 max-w-2xl leading-relaxed">
              Try our live demo and discover how <span className="text-[rgb(54,146,255)]">LoleLink</span> can transform your business operations with AI-powered efficiency.
            </p>
            
            {/* Call to Action Button */}
            <button 
              className="group inline-flex items-center justify-center bg-white hover:bg-gray-100 text-[#1170B9] font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-auto cursor-pointer" 
              style={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(17, 112, 185, 0.1)" }}
              onClick={() => window.open('#demo', '_blank')}
            >
              Start Now
              <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
