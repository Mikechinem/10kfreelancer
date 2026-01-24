'use client';

import CTAButton from "@/components/CTAButton";
import SectionBackground2 from "@/components/SectionBackground2";

export default function Hero1({ onCTAClick }) {
  return (
    <SectionBackground2>
      <section className="relative w-full min-h-screen px-4 sm:px-6 md:px-8 lg:px-16 pt-12 lg:pt-24">

        {/* Hero Headline + CTA */}
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left: Headline & Text */}
          <div className="flex-1 text-center lg:text-left max-w-3xl space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.06] text-white">
              Tired Of{" "}
              <span className="text-[#e8a32d]">Starting Sales From Scratch</span>{" "}
              <span className="text-gray-300">Every Time</span> You Have a Program to Sell?
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl font-semibold bg-gradient-to-r from-[#e8a32d] to-green-500 bg-clip-text text-transparent">
              Book a free 15-minute no-obligation call let's fix it!<br />
            </p>

            {/* CTA Button */}
            <div className="mt-6 lg:mt-10">
              <CTAButton
                text="Lock-in my Spot Now!"
                onClick={onCTAClick}
              />
            </div>
          </div>

        
          {/* Right: Video */}
<div className="flex-1 w-full lg:max-w-lg rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
  <video
    controls
    preload="metadata"
    className="w-full h-full aspect-video object-cover rounded-3xl"
    poster="https://res.cloudinary.com/dojweqe65/image/upload/f_auto,q_70,w_1200/v1768160617/340_Leads_1_vluy2w.png"
  >
    <source
      src="https://res.cloudinary.com/dojweqe65/video/upload/v1768157515/real_video_for_loom.2026_inpnog.mp4"
      type="video/mp4"
    />
  </video>

  {/* Video caption at the top */}
  <p className="mb-2 text-red-500 italic text-sm sm:text-base text-center">
    Watch this 4-minute video training
  </p>
</div>
</div>
        {/* ================= HERO TESTIMONIAL SECTION ================= */}
        <div className="mt-16 max-w-7xl mx-auto border border-white/10 rounded-3xl p-8 sm:p-12 bg-black/30 backdrop-blur-sm">
          
          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-6">
            {[
              {
                name: "Emmanuel D.",
                role: "Course Creator",
                image: "https://res.cloudinary.com/dojweqe65/image/upload/v1768895357/5_wm9yrl.png",
                quote: "That short call exposed why my page wasn’t converting. No fluff.",
              },
              {
                name: "Joseph M.",
                role: "Forex Mentor",
                image: "https://res.cloudinary.com/dojweqe65/image/upload/v1768895357/6_yjmhzv.png",
                quote: "Straight insight. No pitching. I left with clarity and fixes.",
              },
              {
                name: "Magaret D.",
                role: "Digital Economy Coach",
                image: "https://res.cloudinary.com/dojweqe65/image/upload/v1768895357/4_tdhu8s.png",
                quote: "I’ve been repeating the same mistakes for months. Fixed in minutes.",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md flex flex-col items-center"
              >
                {/* Image */}
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover border border-white/20 mb-4"
                />

                {/* Quote */}
                <p className="text-gray-300 text-sm leading-relaxed mb-3 text-center">
                  “{t.quote}”
                </p>

                {/* Name */}
                <div className="text-xs text-gray-400 uppercase tracking-wide text-center">
                  {t.name} — {t.role}
                </div>
              </div>
            ))}
          </div>

          {/* Reinforcement Text */}
          <p className="text-gray-400 text-lg text-center max-w-3xl mx-auto">
            Every call is focused, practical, and tailored to your offer. No sales pressure. Just clarity.
          </p>

        </div>

        {/* Add spacing before the next section */}
        <div className="my-16"></div>
      </section>
    </SectionBackground2>
  );
}
