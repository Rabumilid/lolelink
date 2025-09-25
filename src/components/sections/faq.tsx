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

export function FAQ() {
  const { ref, inView } = useInView({ threshold: 0.15 });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Who is LoleLink designed for?",
      answer: "LoleLink is built specifically for African SMEs, freelancers, and micro-entrepreneurs who need an all-in-one platform to manage finance, HR, sales, and projects efficiently."
    },
    {
      question: "Do I need technical skills to use LoleLink?",
      answer: "No technical skills required! LoleLink is designed with an intuitive, user-friendly interface that makes business management accessible to everyone. Our platform features setup wizards and comprehensive help resources to get you started quickly."
    },
    {
      question: "Can I upgrade my plan as my business grows?",
      answer: "Absolutely! LoleLink offers flexible scaling options that grow with your business. You can upgrade your plan at any time to access more features, additional user seats, advanced analytics, and priority support. Our pricing is transparent with no hidden fees."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      ref={ref}
      className={`py-16 md:py-16 bg-white ${
        inView ? "animate-fade-up" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-4 items-start">
          {/* Left Section - Title and CTA */}
          <div className="space-y-6">
            <h2 className="text-lg font-medium text-[#1070B9] uppercase">
              FAQ
            </h2>
            <h1 className="text-3xl md:text-4xl font-bold text-black leading-tight uppercase">
              <span className="block">Frequently Asked </span>
              <span className="block">Questions</span>
              
            </h1>
            <a 
              href="#contact" 
              className="inline-flex items-center text-[#1070B9] font-medium hover:underline text-lg"
            >
              Know More
              <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

          {/* Right Section - FAQ List */}
          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border-b border-gray-200 last:border-b-0 ${
                  inView ? "animate-fade-up" : "opacity-0 translate-y-6"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className={`text-lg font-bold pr-4 transition-colors duration-200 ${
                    openIndex === index ? "text-[#1070B9]" : "text-black hover:text-[#1070B9]"
                  }`}>
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </button>
                
                {/* Answer Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pb-8 pr-12">
                    <p className="text-gray-600 leading-relaxed text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
