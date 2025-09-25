"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("rabuma@gmail.com");
  const [password, setPassword] = useState("");

  return (
    <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-[#0b0f16] via-[#0f2437] to-[#0b2d4a] relative">
      {/* Brand (positioned down and right) */}
      <Link href="/">
      
      <div className="absolute top-20 left-16 flex items-center gap-3">
        <Image src="/logoicon.webp" alt="LoleLink Logo" width={40} height={40} className="w-10 h-10" />
        <div className="flex items-center gap-2">
          <span className="text-white text-3xl font-semibold">LoleLink</span>
          <span className="inline-block w-2 h-2 rounded-full bg-[rgb(54,146,255)] align-middle" />
        </div>
      </div>
      </Link>

      {/* Card */}
      <div className="h-full w-full flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)] border border-gray-200">
          <div className="px-8 pt-8 pb-6">
            <h1 className="text-center text-2xl font-semibold text-black mb-6">Welcome back</h1>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-2">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1070B9] focus:border-transparent text-gray-700 text-sm placeholder:text-gray-400"
              />
            </div>

            {/* Password */}
            <div className="mb-1">
              <label htmlFor="password" className="block text-xs font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full h-10 pr-10 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1070B9] focus:border-transparent text-gray-700 text-sm placeholder:text-gray-400"
                />
                <button
                  type="button"
                  aria-label="Toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="text-right mb-4">
              <a href="#" className="text-[11px] text-[#1070B9] hover:underline">Forgot password?</a>
            </div>

            {/* Primary button */}
            <button className="w-full h-9 bg-[#1877F2] hover:bg-[#1669d5] text-white text-[12px] font-medium rounded-md transition-colors">Sign in with Email</button>

            {/* Divider */}
            <div className="flex items-center my-4">
              <div className="flex-1 border-t border-gray-200"></div>
              <span className="px-3 text-gray-400 text-xs">or</span>
              <div className="flex-1 border-t border-gray-200"></div>
            </div>

            {/* Google button */}
            <button className="w-full h-9 bg-[#1f2937] hover:bg-[#111827] text-white text-[12px] font-medium rounded-md transition-colors flex items-center justify-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </button>

            {/* Footer */}
            <div className="text-center mt-5">
              <span className="text-gray-500 text-[12px]">
                Don&apos;t Have An Account? {" "}
                <a href="/auth/signup" className="text-[#1070B9] hover:underline font-medium">Sign Up</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


