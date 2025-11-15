// ./components/HeroSection.js
"use client";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="w-full flex flex-col items-center justify-center text-center py-16 md:py-20 px-4 md:px-6 bg-black"
    >
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-[#b58e10] leading-tight sm:leading-snug md:leading-snug mb-4 md:mb-6">
        Spend Less And Still Convert More!
      </h1>

      <p className="text-white text-base sm:text-lg md:text-2xl max-w-xl sm:max-w-2xl mx-auto leading-relaxed sm:leading-relaxed md:leading-loose mb-6 md:mb-8">
        Get High-Performing Ads + High-converting Websites at Affordable prices.
      </p>

      <a
        href="#projects"
        className="inline-block bg-[#131007] text-zinc-900 font-semibold px-6 py-3 sm:px-8 rounded-lg transition-all duration-300 hover:bg-transparent hover:text-[#b58e10] border-2 border-[#b58e10]"
      >
        View My Projects
      </a>
    </section>
  );
}
