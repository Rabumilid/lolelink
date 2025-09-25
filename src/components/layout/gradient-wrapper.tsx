"use client";

import React from "react";

type GradientWrapperProps = {
  children: React.ReactNode;
};

export function GradientWrapper({ children }: GradientWrapperProps) {
  return (
    <div
      className="relative h-[800px]"
      style={{
        backgroundColor: "#080808",
        backgroundImage:
          "radial-gradient(circle at top left, #1070B9 0%, rgba(16, 112, 185, 0) 40%), radial-gradient(circle at bottom right, #1070B9 0%, rgba(16, 112, 185, 0) 50%)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%, 100% 100%",
        backgroundPosition: "left top, right bottom",
      }}
    >
      {children}
    </div>
  );
}


