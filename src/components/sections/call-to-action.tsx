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
      className="bg-white"
    >
      <div className="w-full">
        {/* Full Width Container */}
        <div
          className={`relative overflow-hidden h-96 md:h-[500px] ${
            inView ? "animate-fade-up" : "opacity-0 translate-y-6"
          }`}
        >
          {/* SVG Background */}
          <div className="absolute inset-0 w-full h-full">
            <div 
              className="w-full h-full"
              style={{
                background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
                backgroundImage: `
                  url('/video.svg'),
                  radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                  radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                  linear-gradient(45deg, transparent 30%, rgba(59, 130, 246, 0.05) 50%, transparent 70%)
                `,
                backgroundSize: 'cover, cover, cover, cover',
                backgroundPosition: 'center, center, center, center',
                backgroundRepeat: 'no-repeat, no-repeat, no-repeat, no-repeat'
              }}
            />
            
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-8">
            {/* Main Heading */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              See <span className="text-[rgb(54,146,255)]">LoleLink</span> in Action
            </h1>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              Try our live demo and discover how <span className="text-[rgb(54,146,255)]">LoleLink</span> can transform your business.
            </p>
            
            {/* Call to Action Button */}
            <button 
              className="group inline-flex items-center justify-center bg-black hover:bg-gray-900 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 border border-blue-400/50 hover:border-blue-400 shadow-lg hover:shadow-xl cursor-pointer" 
              style={{ 
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.3), 0 10px 25px -5px rgba(0, 0, 0, 0.3)"
              }}
              onClick={() => window.open('/auth/signup', '_blank')}
            >
              Start Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
