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

export function KeyFeatures() {
  const { ref, inView } = useInView({ threshold: 0.15 });

  const features = [
    {
      icon: "/customer.svg",
      title: "SERVICE & CUSTOMER MANAGEMENT",
      description: "Easily manage service requests, track job progress, and keep detailed customer profiles to deliver a more personalized and efficient experience."
    },
    {
      icon: "/resources.svg",
      title: "HUMAN RESOURCES (HANDMAN)",
      description: "Automate staff management with centralized profiles, attendance tracking, scheduling, payroll, and onboarding, all in one seamless workflow."
    },
    {
      icon: "/finacial.svg",
      title: "FINANCIAL CONTROL",
      description: "Stay on top of your finances with invoicing, payment tracking, expense management, and smart reports for better budgeting and forecasting."
    },
    {
      icon: "/project.svg",
      title: "PROJECT & TASK MANAGEMENT",
      description: "Plan projects, assign tasks, and track deadlines with AI-suggested priorities to keep your team focused on high-impact work."
    },
    {
      icon: "/market.svg",
      title: "MARKETPLACE & B2B NETWORK",
      description: "Connect with partners, discover tools, and join a community of businesses through matchmaking, webinars, and industry discussions."
    },
    {
      icon: "/Ai insights.svg",
      title: "AI INSIGHTS & AUTOMATION",
      description: "Gain predictive analytics, smart suggestions, and automation rules that save time, reduce errors, and help you make better decisions."
    }
  ];

  return (
    <section
      id="key-features"
      ref={ref}
      className={`pb-16 md:pb-24 pt-0 bg-white ${
        inView ? "animate-fade-up" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center flex flex-col items-center mb-16">
            <p className="text-lg font-medium text-[#1070B9] mb-6">
              Key Features
            </p>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Everything Your Business Needs
          </h2>
          <p className="text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
            <span className="text-[rgb(54,146,255)]">LoleLink</span> organizes your operations into clear, powerful, AI-powered modules that work together seamlessly.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#1070B9]/20 hover:-translate-y-3 cursor-pointer ${
                inView ? "animate-fade-up" : "opacity-0 translate-y-6"
              }`}
              style={{
                animationDelay: `${index * 150}ms`,
                boxShadow: inView ? '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' : '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            >
              {/* Icon Container */}
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-black mb-4 uppercase tracking-wide group-hover:text-[#1070B9] transition-colors duration-300">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {feature.description}
              </p>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1070B9]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default KeyFeatures;
