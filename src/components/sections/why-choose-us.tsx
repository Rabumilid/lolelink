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

export function WhyChooseUs() {
  const { ref, inView } = useInView({ threshold: 0.15 });

  const features = [
    {
      icon: "/allinone.svg",
      iconBg: "rgba(146, 225, 120, 1)",
      title: "All-in-One Platform",
      description: "Say goodbye to juggling multiple apps. LoleLink brings finance, HR, projects, and customer management into one place.",
      link: "Learn more >"
    },
    {
      icon: "/ai driven.svg",
      iconBg: "rgba(129, 208, 239, 1)",
      title: "AI-Driven Efficiency",
      description: "From task prioritization to predictive analytics, our AI works in the background to save time and maximize results.",
      link: "Learn more >"
    },
    {
      icon: "/secure.svg",
      iconBg: "rgba(212, 158, 246, 1)",
      title: "Secure & Reliable",
      description: "Enterprise-grade security keeps your data safe, while cloud-based access means you can work anywhere.",
      link: "Learn more >"
    }
  ];

  return (
    <section
      id="why-choose-us"
      ref={ref}
      className={`py-12 px-4 bg-gray-50 ${
        inView ? "animate-fade-up" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <h2 className="text-lg font-medium text-[#1070B9]">
              Why Us?
            </h2>
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Side - Title */}
          
          <div className="space-y-6">
            
            <h1 className="text-4xl  font-bold text-black  ">
              Choosing Us Is
              The Right Way!
            </h1>
          </div>

          {/* Right Side - Description */}
          <div className="flex items-center">
            <p className="text-lg text-gray-600 leading-relaxed">
              When you choose <span className="text-[rgb(54,146,255)]">LoleLink</span>, simplifies your business operations, automates routine tasks, and uses AI-driven insights to help you grow smarter and faster.
            </p>
          </div>
        </div>

        {/* Feature Blocks */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative ${
                inView ? "animate-fade-up" : "opacity-0 translate-y-6"
              } ${
                index < features.length - 1 ? "md:pr-8" : ""
              }`}
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              {/* Vertical Divider */}
              {index < features.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 w-px h-32 bg-gray-200 transform -translate-y-1/2"></div>
              )}

              {/* Icon */}
              <div 
                className="w-15 h-15 rounded-full flex items-center justify-center text-white mb-6"
                style={{ 
                  backgroundColor: feature.iconBg,
                  width: '60px',
                  height: '60px'
                }}
              >
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-black mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {feature.description}
              </p>

              {/* Learn More Link */}
              <button 
                onClick={() => window.open('#learn-more', '_blank')}
                className="text-[#1070B9] font-medium hover:text-[#0a5a8a] transition-colors duration-200 inline-flex items-center cursor-pointer"
              >
                {feature.link}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
