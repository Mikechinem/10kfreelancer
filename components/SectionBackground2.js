'use client';

import { useEffect, useRef, useState } from "react";

export default function SectionBackground2({ children }) {
  const svgRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // calculate subtle transform based on scroll
  const offset = scrollY * 0.02; // small factor so it doesn't compete

  return (
    <div className="relative w-full overflow-hidden bg-black">
      {/* Gummy Water Flow */}
      <svg
        ref={svgRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
        style={{
          transform: `translateY(${offset}px)`,
        }}
      >
        <path
          d={`
            M0,200
            C360,${180 + offset},720,${220 - offset},1440,200
            L1440,400
            L0,400
            Z
          `}
             fill="(8, 55, 90, 0.07)"  // subtle gummy color
        />
        <path
          d={`
            M0,220
            C360,${200 + offset / 2},720,${240 - offset / 2},1440,220
            L1440,400
            L0,400
            Z
          `}
          fill="rgba(120, 180, 220, 0.04)"
        />
      </svg>

      {/* Section content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
