"use client";

import Link from "next/link";
import React from "react";

export function Hero() {
  return (
    <section id="hero" className="scroll-mt-24 pt-16 pb-12">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
          <span className="tracking-wide">Solution For Tomorrow</span>
        </div>
        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
          YOUR AI-POWERED BUSINESS
          <br />
          PARTNER FOR <span className="text-[rgb(54,146,255)]">SMARTER GROWTH</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-sm md:text-base text-white/70">
          Manage HR, Finance, Sales, Projects & more, all-in-one evolving platform
          designed for Africa&apos;s SMEs.
        </p>
        <Link href="/auth/signup">
        
        <div className="mt-8 flex items-center justify-center">
          <button 
            className="group inline-flex items-center justify-center bg-white hover:bg-gray-100 text-[#1170B9] font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-auto cursor-pointer" 
            style={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(17, 112, 185, 0.1)" }}
            
          >
            Start Now
            <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        </Link>
      </div>
    </section>
  );
}


