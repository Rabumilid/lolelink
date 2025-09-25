"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SignupPage() {
  const [role, setRole] = useState<"provider" | "customer">("provider");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="h-screen w-full overflow-hidden bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
        {/* Left side - Brand + Welcome copy */}
        <div className="relative hidden lg:flex h-full flex-col justify-center bg-gradient-to-br from-black via-[#0b1d2a] to-[#0f2944]">
          {/* Top-left brand */}
          <Link href="/">

          <div className="absolute top-10 left-10 flex items-center space-x-3">
            <Image src="/logoicon.webp" alt="LoleLink Logo" width={40} height={40} className="w-10 h-10" />
            <span className="text-white text-3xl font-semibold">LoleLink<span className="text-[rgb(54,146,255)]"> .</span></span>
          </div>
          </Link>

          {/* Welcome text */}
          <div className="px-12">
            <h2 className="text-white text-5xl leading-tight font-semibold mb-4">Welcome.</h2>
            <p className="text-white/80 text-3xl leading-snug max-w-xl">
              Start your journey
              <br />
              now with <span className="text-[rgb(54,146,255)]">LoleLink</span>
            </p>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="h-full bg-white flex items-start lg:items-center justify-center overflow-y-auto">
          <div className="w-full max-w-3xl px-6 py-10 lg:py-0">
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-2xl font-semibold text-black">Create account</h1>
              <p className="text-sm text-gray-500 mt-1">
                {role === "customer"
                  ? "Create an account to find and purchase services from providers."
                  : "Create an account to offer and sell your professional services."}
              </p>
            </div>

            {/* Role selector */}
            <div className="flex items-center gap-6 mb-6">
              <button
                type="button"
                onClick={() => setRole("provider")}
                className={`flex items-center gap-2 text-sm ${
                  role === "provider" ? "text-[#1070B9]" : "text-gray-600"
                }`}
              >
                <span
                  className={`inline-flex h-4 w-4 rounded-full border ${
                    role === "provider" ? "border-[#1070B9]" : "border-gray-400"
                  } items-center justify-center`}
                >
                  {role === "provider" && <span className="h-2.5 w-2.5 rounded-full bg-[#1070B9]" />}
                </span>
                Provider
              </button>
              <button
                type="button"
                onClick={() => setRole("customer")}
                className={`flex items-center gap-2 text-sm ${
                  role === "customer" ? "text-[#1070B9]" : "text-gray-600"
                }`}
              >
                <span
                  className={`inline-flex h-4 w-4 rounded-full border ${
                    role === "customer" ? "border-[#1070B9]" : "border-gray-400"
                  } items-center justify-center`}
                >
                  {role === "customer" && <span className="h-2.5 w-2.5 rounded-full bg-[#1070B9]" />}
                </span>
                Customer
              </button>
            </div>

            {/* Form */}
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* First name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First name</label>
                <input placeholder="Enter first name" type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1070B9] text-gray-700" />
              </div>
              {/* Last name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
                <input placeholder="Enter last name" type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1070B9] text-gray-700" />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">phone number</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center gap-2">
                    <span className="text-lg">🇬🇭</span>
                    <span className="text-gray-600 text-sm">+233</span>
                  </div>
                  <input
                    type="tel"
                    className="w-full pl-24 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1070B9] text-gray-700"
                    placeholder="Phone number"
                  />
                </div>
              </div>
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1070B9] text-gray-700" placeholder="Enter email" />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full pr-10 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1070B9] text-gray-700"
                    placeholder="Enter password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    aria-label="Toggle password visibility"
                  >
                    {!showPassword ? (
                      // Eye off (hide)
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                      </svg>
                    ) : (
                      // Eye (show)
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              {/* Confirm password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Confirm password</label>
                <div className="relative">
                  <input
                    type={showConfirm ? "text" : "password"}
                    className="w-full pr-10 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1070B9] text-gray-700"
                    placeholder="Confirm password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    aria-label="Toggle confirm password visibility"
                  >
                    {!showConfirm ? (
                      // Eye off (hide)
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                      </svg>
                    ) : (
                      // Eye (show)
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <button className="w-full bg-[#1070B9] text-white py-2.5 rounded-lg font-medium hover:bg-[#0d5a8a] transition-colors">
                  Sign up with Email
                </button>
                <button className="w-full bg-gray-900 text-white py-2.5 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Continue with Google
                </button>
              </div>
            </form>

            {/* Footer */}
            <div className="mt-6 text-sm text-gray-600">
              <span>
                Already have an account?{" "}
                <a href="/auth/login" className="text-[#1070B9] hover:underline font-medium">Log in</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


