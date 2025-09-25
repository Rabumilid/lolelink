"use client";

import Image from "next/image";
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

export function SectionTwo() {
  const { ref, inView } = useInView({ threshold: 0.15 });

  return (
    <section
      id="section-two"
      ref={ref}
      className={`mx-auto max-w-full  rounded-b-none mt-auto px-4 pb-16 md:pb-24 bg-white text-black ${
        inView ? "animate-fade-up" : "opacity-0 translate-y-6"
      }`}
    >
      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto md:px-16 px-4 mt-16">
        {/* Title Section - Above Both Columns */}
        <div className="text-start mb-2">
          <h2 className="text-lg font-medium text-[#1070B9] mb-6">
            What is <span className="text-[rgb(54,146,255)]">LoleLink</span>?
          </h2>
          
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Dashboard Screenshot */}
          <div className="space-y-8">
            {/* Dashboard Screenshot */}
            <h1 className="text-4xl font-bold text-black">
            One Smart Platform to Run Your Entire Business
          </h1>
          
            <div className="relative">
              <div className="transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <Image
                  src="/preview.png"
                  alt="LoleLink Dashboard Screenshot"
                  width={800}
                  height={600}
                  priority
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-10">
            {/* LoleLink Description */}
            <div className="space-y-4">
                <p className="text-lg text-gray-600 leading-relaxed">
                  <span className="text-[rgb(54,146,255)]">LoleLink</span> combines AI-powered automation, real-time insights, and integrated tools to replace manual work with smart, connected workflows.
                </p>
            </div>

            {/* Problem Statement */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-16 h-16 bg-[#B91027] rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-black">Problem Statement</h3>
                    <p className="text-gray-600 leading-relaxed">
                      No more juggling multiple apps, endless spreadsheets, and slow decision-making. <span className="text-[rgb(54,146,255)]">LoleLink</span> unifies your business, finance, HR, sales, and projects, into one intuitive hub.
                    </p>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-black">Key Benefits</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-[#1070B9] mr-2">•</span>
                    <span><strong>Finance:</strong> Track income, expenses, and invoices in real time.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1070B9] mr-2">•</span>
                    <span><strong>HR:</strong> Manage teams, payroll, and leave requests effortlessly.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1070B9] mr-2">•</span>
                    <span><strong>Sales & CRM:</strong> Follow leads, close deals faster.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1070B9] mr-2">•</span>
                    <span><strong>Projects:</strong> Assign tasks, track progress, meet deadlines.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1070B9] mr-2">•</span>
                    <span><strong>AI Insights:</strong> Get instant, data-backed recommendations.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionTwo;