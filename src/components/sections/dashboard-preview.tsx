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

export function FloatingDashboard() {
  const { ref, inView } = useInView({ threshold: 0.15 });

  return (
    <section
      id="dashboard-preview"
      ref={ref}
      className={`mx-auto h-auto md:min-h-[70vh] lg:min-h-[70vh] max-w-full rounded-t-4xl rounded-b-none -mt-16 px-0 md:px-0 pt-8 md:pt-14 pb-16 md:pb-24 bg-white  text-black ${
        inView ? "animate-fade-up" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="relative mx-auto w-full max-w-6xl -mt-20 md:-mt-20 lg:-mt-28 z-10 px-4">
        {/* Desktop layout */}
        <div className="hidden md:flex items-start justify-center gap-6 relative">
          {/* Left floating image (moved lower) */}
          <div
            className={`flex-shrink-0 w-[25%] absolute top-20 -left-4 z-20 ${
              inView ? "animate-slide-in-left" : "opacity-0 -translate-x-6"
            }`}
          >
            <Image
              src="/Analytics Overview.png"
              alt="Top Requested Services"
              width={400}
              height={500}
              className="w-full h-auto rounded-xl shadow-lg shadow-black/20"
              style={{
                background: "white",
                border: "none",
              }}
            />
          </div>

          {/* Center main dashboard image */}
          <div className="flex-1 max-w-[65%] relative z-10 -mt-[10%]">
            <div
              className="relative p-4 shadow-2xl shadow-black/30"
              style={{
                background: "transparent",
                border: "1px solid",
                borderImageSource:
                  "linear-gradient(177.67deg, #FFFFFF 1.95%, #1070B9 106.52%)",
                borderImageSlice: 1,
                borderRadius: "24px",
              }}
            >
              <Image
                src="/Dashboard Overview.png"
                alt="Dashboard preview"
                width={1600}
                height={900}
                priority
                className="w-full h-auto"
                style={{
                  borderRadius: "20px",
                }}
              />
            </div>
          </div>

          {/* Right floating image */}
          <div
            className={`flex-shrink-0 w-[25%] absolute -bottom-12 right-0 z-20 ${
              inView ? "animate-slide-in-right" : "opacity-0 translate-x-6"
            }`}
          >
            <Image
              src="/Chart Overview.png"
              alt="Analytics Overview"
              width={400}
              height={500}
              className="w-full h-auto rounded-xl shadow-lg shadow-black/20"
              style={{
                background: "white",
                border: "none",
              }}
            />
          </div>
        </div>

        {/* Mobile and tablet layout - Only central image */}
        <div className="flex flex-col gap-6 lg:hidden relative">
          {/* Central preview only */}
          <div className="relative z-10 -mt-[25%]">
            <div
              className="relative p-4 rounded-3xl shadow-2xl shadow-black/30"
              style={{
                background: "transparent",
                border: "1px solid",
                borderImageSource:
                  "linear-gradient(177.67deg, #FFFFFF 1.95%, #1070B9 106.52%)",
                borderImageSlice: 1,
              }}
            >
              <Image
                src="/Dashboard Overview.png"
                alt="Dashboard preview"
                width={1600}
                height={900}
                className="w-full h-auto"
                style={{
                  borderRadius: "20px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FloatingDashboard;
