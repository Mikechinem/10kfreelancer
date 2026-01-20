"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Hero1 from "@/components/Hero1";
import SectionBackground from "@/components/SectionBackground";
import AboutSection from "@/components/AboutSection";
import NumberCounter from "@/components/NumberCounter";
import CTAButton from "@/components/CTAButton";
import PopupModal from "@/components/PopupModal";
import CTAForm from "@/components/CTAForm";

// Client-only testimonial section
const TestimonialColumn = dynamic(
  () => import("@/components/TestimonialColumn.client"),
  { ssr: false }
);

export default function SalesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="bg-black font-sans overflow-x-hidden">

      {/* ================= HERO ================= */}
      <Hero1 onCTAClick={() => setIsModalOpen(true)} />

      {/* ================= BENEFITS ================= */}
      <SectionBackground variant="benefits">
        <section className="relative z-10 py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-10 sm:mb-12">
              What You’ll Get On This 15-Minutes Call
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Identify conversion leak", icon: "🎯", desc: "5 minutes deep dive into your sales process." },
                { title: "Fumigate your landing page", icon: "⚡", desc: "Remove elements and copy killing conversions." },
                { title: "Get clear solutions", icon: "🚀", desc: "Actionable fixes. No pitch. No pressure." }
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:scale-105 transition"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* ================= TESTIMONIALS ================= */}
      <TestimonialColumn />

      {/* ================= ABOUT & COUNTER ================= */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto space-y-12">
          <AboutSection />
          
        <NumberCounter />
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <CTAButton text="Book Your Free Session" onClick={() => setIsModalOpen(true)} />
        </div>
      </section>

      {/* ================= MODAL ================= */}
      <PopupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <CTAForm standalone={false} />
      </PopupModal>
    </main>
  );
}
