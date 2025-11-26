// ./components/HeroSection.js
"use client";

export default function HeroSection() {
  return (
    <>
      {/* ---------------- Hero Section ---------------- */}
      <section
        id="hero"
        className="w-full flex flex-col items-center justify-center text-center py-16 md:py-20 px-4 md:px-6 bg-black"
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-[#b58e10] leading-tight sm:leading-snug md:leading-snug mb-4 md:mb-6">
          Spend Less To Get More Leads!
        </h1>

        <p className="text-white text-base sm:text-lg md:text-2xl max-w-xl sm:max-w-2xl mx-auto leading-relaxed sm:leading-relaxed md:leading-loose mb-6 md:mb-8">
          Get High-Performing Ads + High-converting Websites at Affordable prices.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="inline-block bg-[#131007] text-zinc-900 font-semibold px-6 py-3 sm:px-8 rounded-lg transition-all duration-300 hover:bg-transparent hover:text-[#b58e10] border-2 border-[#b58e10]"
          >
            View My Projects
          </a>
        </div>
      </section>

      {/* ---------------- Video Section ---------------- */}
      <section
        id="profile-video"
        className="w-full flex flex-col items-center justify-center text-center py-12 md:py-16 px-4 md:px-6 bg-black border-4 border-[#1a1402] rounded-xl mt-12"
      >
        <h5 className="text-white text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Learn how I help businesses get high-converting websites and ads that actually perform.
        </h5>

        {/* Embedded YouTube Video */}
        <div className="w-full max-w-3xl aspect-video rounded-lg overflow-hidden shadow-lg border-2 border-[#423405]">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/KOYdSa7x9PQ?si=6QkbeB7iJFvgwmNn&amp;controls=0"
            title="10KFreelancer Profile Overview"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </>
  );
}
