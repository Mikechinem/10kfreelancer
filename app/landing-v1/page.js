'use client';

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import HeadlineSection from "@/components/HeadlineSection";
import AboutSection from "@/components/AboutSection";
import NumberCounter from "@/components/NumberCounter";
import CTAButton from "@/components/CTAButton";
import PopupModal from "@/components/PopupModal";
import CTAForm from "@/components/CTAForm";

// ✅ Client-only testimonial section (NO SSR)
const TestimonialColumn = dynamic(
  () => import("@/components/TestimonialColumn.client"),
  { ssr: false }
);

export default function SalesPage() {
  const [mounted, setMounted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="relative bg-black min-h-screen overflow-x-hidden font-sans">

      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(232,163,45,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(232,163,45,0.01)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* ================= TOP SECTION ================= */}
      <section className="relative z-10 pb-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="https://res.cloudinary.com/dojweqe65/image/upload/f_auto,q_80,w_1000/v1768157371/BOOK_a_15_Minutes_7_aygkbf.png"
              alt="Sales Expert"
              className="w-full max-w-xs sm:max-w-md lg:max-w-lg object-contain"
              loading="eager"
            />
          </div>

          {/* Video (hydration safe) */}
          <div className="mt-10 max-w-4xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <div className="aspect-video bg-black">
              {mounted && (
                <video
                  controls
                  preload="metadata"
                  className="w-full h-full"
                  poster="https://res.cloudinary.com/dojweqe65/image/upload/f_auto,q_70,w_1200/v1768160617/340_Leads_1_vluy2w.png"
                >
                  <source
                    src="https://res.cloudinary.com/dojweqe65/video/upload/v1768157515/real_video_for_loom.2026_inpnog.mp4"
                    type="video/mp4"
                  />
                </video>
              )}
            </div>
          </div>

          {/* Headline */}
          <div className="text-center mt-14">
            <HeadlineSection
              preHeadline="For Coaches and Education based businesses"
              headline="Ready to Stop Chasing Clients on Social Media and Still Sell out Fast?"
              subtext="I help coaches & course creators get high-quality leads using landing pages and Facebook ads so you can focus on training, not marketing."
            />

            <h3 className="mt-8 text-3xl sm:text-4xl md:text-5xl font-semibold bg-gradient-to-r from-[#e8a32d] to-green-500 bg-clip-text text-transparent leading-snug">
              Book a Free 15 minutes <br /> No-obligation Call to Fix Your Sales.
            </h3>

            <div className="mt-10">
              <CTAButton text="Lock-in my Spot Now!" onClick={() => setIsModalOpen(true)} />
            </div>
          </div>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="relative z-10 py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl">

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-12">
              What You’ll Get On This 15 Minutes Call
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Identify conversion leak", icon: "🎯", desc: "5 minutes deep dive into your sales process." },
                { title: "Fumigate your landing page", icon: "⚡", desc: "Remove elements and copy killing conversions." },
                { title: "Get clear solutions", icon: "🚀", desc: "Actionable fixes. No pitch. No pressure." }
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:scale-105 transition"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* ================= TESTIMONIALS ================= */}
            <div className="mt-16 border border-white rounded-3xl">
              <TestimonialColumn />
            </div>

            <AboutSection />
            <NumberCounter />

            <div className="mt-10">
              <CTAButton text="Book Your Free Session" onClick={() => setIsModalOpen(true)} />
            </div>
          </div>
        </div>
      </section>

      {/* ================= MODAL ================= */}
      <PopupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <CTAForm standalone={false} />
      </PopupModal>
    </main>
  );
}
