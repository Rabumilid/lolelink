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

export function HowItWorks() {
  const { ref, inView } = useInView({ threshold: 0.15 });

  const steps = [
    {
      number: "01",
      title: "SIGN UP & CONNECT YOUR BUSINESS",
      description: "Quickly create your account and link your existing tools, data, and workflows.",
      numberPosition: "top-left"
    },
    {
      number: "02",
      title: "IMPORT & ORGANIZE YOUR DATA",
      description: "Bring in your customer, finance, and project details for a centralized workspace.",
      numberPosition: "bottom-left",
      hasScreenshot: true
    },
    {
      number: "03",
      title: "AI ANALYZES & SUGGESTS IMPROVEMENTS",
      description: "<span className='text-[rgb(54,146,255)]'>LoleLink</span>'s AI scans operations, spots inefficiencies, and recommends smarter actions.",
      numberPosition: "top-left"
    },
    {
      number: "04",
      title: "AUTOMATE & TRACK PROGRESS",
      description: "Put repetitive tasks on autopilot and watch your progress with live dashboards.",
      numberPosition: "top-left"
    },
    {
      number: "05",
      title: "GROW WITH TOOLS & A POWERFUL NETWORK",
      description: "Expand your business with integrated services, B2B connections, and community events.",
      numberPosition: "top-left"
    }
  ];

  return (
    <section
      id="how-it-works"
      ref={ref}
      className={`py-16 md:py-24 bg-white ${
        inView ? "animate-fade-up" : "opacity-0 translate-y-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-lg font-medium text-[#1070B9] mb-4">
            How It Works
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black  mb-6">
            Your Business, Simplified in <span className="text-[rgb(54,146,255)]">5 Steps</span>
          </h1>
              <p className="text-lg text-black max-w-3xl mx-auto leading-relaxed">
                <span className="text-[rgb(54,146,255)]">LoleLink</span> brings clarity to your operations through powerful AI-driven modules that work in perfect sync.
              </p>
        </div>

        {/* Steps Grid - 3 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Steps 1 & 4 */}
          <div className="space-y-8">
            {/* Step 1 */}
            <div
              className={`group bg-[#F9FAFB] rounded-xl shadow-lg p-8 relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 cursor-pointer ${
                inView ? "animate-fade-up" : "opacity-0 translate-y-6"
              }`}
              style={{ animationDelay: "0ms" }}
            >
            <div 
              className="absolute top-4 left-4 text-6xl font-bold opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500"
              style={{
                background: "linear-gradient(180deg, #1070B9 0%, #F9FAFB 77.15%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              01
            </div>
              <div className="relative z-10 pt-8 group-hover:translate-x-2 transition-transform duration-500">
                <h3 className="text-xl font-bold text-black uppercase mb-4 leading-tight group-hover:text-[#1070B9] transition-colors duration-500">
                  Sign Up & Connect Your Business
                </h3>
                <p className="text-black leading-relaxed group-hover:text-gray-700 transition-colors duration-500">
                  Quickly create your account and link your existing tools, data, and workflows.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div
              className={`group bg-[#FAE8FF] rounded-xl shadow-lg p-10 relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 cursor-pointer ${
                inView ? "animate-fade-up" : "opacity-0 translate-y-6"
              }`}
              style={{ animationDelay: "600ms" }}
            >
            <div 
              className="absolute top-4 left-4 text-6xl font-bold opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500"
              style={{
                background: "linear-gradient(180deg, #1070B9 0%, #F9FAFB 77.15%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              04
            </div>
              <div className="relative z-10 pt-10 group-hover:translate-x-2 transition-transform duration-500">
                <h3 className="text-xl font-bold text-black uppercase mb-4 leading-tight group-hover:text-[#1070B9] transition-colors duration-500">
                  Automate & Track Progress
                </h3>
                <p className="text-black pt-1 leading-relaxed group-hover:text-gray-700 transition-colors duration-500">
                  Put repetitive tasks on autopilot and watch your progress with live dashboards.
                </p>
              </div>
            </div>
          </div>

          {/* Center Column - Step 2 (Full Height) */}
          <div className="flex">
            <div
              className={`group bg-[#DFF2FE] min-h-[500px] rounded-xl shadow-lg p-8 relative overflow-hidden w-full transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 cursor-pointer ${
                inView ? "animate-fade-up" : "opacity-0 translate-y-6"
              }`}
              style={{ animationDelay: "200ms" }}
            >
              <div className="relative z-10 group-hover:translate-x-2 transition-transform duration-500">
                <h3 className="text-xl font-bold text-black uppercase mb-4 leading-tight group-hover:text-[#1070B9] transition-colors duration-500">
                  Import & Organize Your Data
                </h3>
                <p className="text-black leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-500">
                  Bring in your customer, finance, and project details for a centralized workspace.
                </p>
                <div 
                  className="absolute top-36 text-6xl font-bold opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500"
                  style={{
                    background: "linear-gradient(180deg, #1070B9 0%, #FFFFFF 85.58%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}
                >
                  02
                </div>
              </div>
              
              {/* Two Dashboard Screenshots - Side by side with same orientation */}
              <div className="bg-white absolute -bottom-30 left-0 right-0 h-60 w-[120%] -rotate-15 origin-bottom-left overflow-hidden group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500">
                {/* Left Image - Slanted from bottom-right to top-left */}
                <div className="absolute transform bottom-0 left-0 right-0 w-[120%]">
                  <Image
                    src="/preview.png"
                    alt="LoleLink Dashboard Screenshot"
                    width={600}
                    height={300}
                    className="w-[120%] h-auto rounded-lg shadow-md group-hover:shadow-xl transition-shadow duration-500"
                  />
                </div>
                
                {/* Right Image - Slanted from bottom-right to top-left, positioned to the right */}
                {/* <div className="absolute bottom-0  transform">
                  <Image
                    src="/preview.png"
                    alt="LoleLink Dashboard Screenshot"
                    width={600}
                    height={300}
                    className="w-100 h-auto rounded-lg shadow-md"
                  />
                </div> */}
              </div>
            </div>
          </div>

          {/* Right Column - Steps 3 & 5 */}
          <div className="space-y-8">
            {/* Step 3 */}
            <div
              className={`group bg-white rounded-xl shadow-lg p-8 relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 cursor-pointer ${
                inView ? "animate-fade-up" : "opacity-0 translate-y-6"
              }`}
              style={{ animationDelay: "400ms" }}
            >
            <div 
              className="absolute top-4 left-4 text-6xl font-bold opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500"
              style={{
                background: "linear-gradient(180deg, #1070B9 0%, #F9FAFB 77.15%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              03
            </div>
              <div className="relative z-10 pt-8 group-hover:translate-x-2 transition-transform duration-500">
                <h3 className="text-xl font-bold text-black uppercase mb-4 leading-tight group-hover:text-[#1070B9] transition-colors duration-500">
                  AI Analyzes & Suggests Improvements
                </h3>
                    <p className="text-black leading-relaxed group-hover:text-gray-700 transition-colors duration-500">
                      <span className="text-[rgb(54,146,255)]">LoleLink</span>&apos;s AI scans operations, spots inefficiencies, and recommends smarter actions.
                    </p>
              </div>
            </div>

            {/* Step 5 */}
            <div
              className={`group bg-[#D0FAE5] rounded-xl shadow-lg p-8 relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 cursor-pointer ${
                inView ? "animate-fade-up" : "opacity-0 translate-y-6"
              }`}
              style={{ animationDelay: "800ms" }}
            >
            <div 
              className="absolute top-4 left-4 text-6xl font-bold opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500"
              style={{
                background: "linear-gradient(180deg, #1070B9 0%, #87CEEB 70.15%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              05
            </div>
              <div className="relative z-10 pt-8 group-hover:translate-x-2 transition-transform duration-500">
                <h3 className="text-xl font-bold text-black uppercase mb-4 leading-tight group-hover:text-[#1070B9] transition-colors duration-500">
                  Grow With Tools & A Powerful Network
                </h3>
                <p className="text-black leading-relaxed group-hover:text-gray-700 transition-colors duration-500">
                  Expand your business with integrated services, B2B connections, and community events.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
