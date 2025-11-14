// ./components/HeroSection.js
"use client";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="w-full flex flex-col items-center justify-center text-center py-20 px-6 bg-black"
    >
      <h2 className="text-5xl md:text-7xl font-extrabold text-[#b58e10] leading-tight md:leading-snug mb-6">
        Hire Me For Free 100%
      </h2>

      <p className="text-white text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed md:leading-loose mb-8">
        Pay lesser production cost than your competitor without compromising quality at all 😎
      </p>

      {/* Pure HTML anchor + CSS smooth scroll */}
     <a
  href="#projects"
  className="inline-block bg-[#131007] text-zinc-900 font-semibold px-8 py-3 rounded-lg transition-all duration-300"
>
  View My Projects
</a>

    </section>
  );
}
