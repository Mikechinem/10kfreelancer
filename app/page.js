'use client';

import ChatbotWrapper from "../components/ChatbotWrapper";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import NumberCounter from "../components/NumberCounter"; 
import CTAForm from "@/components/CTAForm";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">

        {/* Hero Section */}
        <HeroSection />

        {/* Profile / Picture Section */}
        <section className="w-full max-w-5xl mx-auto my-12 flex flex-col md:flex-row items-center bg-zinc-900 rounded-2xl p-6 shadow-lg">
          <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-6">
            <Image
              src="/michael.jpg"
              alt="Michael Ehumadu"
              width={256}
              height={256}
              className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-2 border-white shadow-lg"
            />
          </div>

          <div className="text-left flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-brand-gold)] mb-4">
              Hi, I'm Michael Ehumadu
            </h2>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed space-y-4">
              {/* Your intro text here */}
            </p>

            <p className="text-gray-400 mb-6 mt-12">
              PS. I only can handle 3-5 clients account at a time, I suggest you act now.
            </p>

            <WhatsAppButton className="inline-block bg-[#131007] text-zinc-900 font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-transparent hover:text-[#ebb608] border-2 border-[#ebb608] transition-colors duration-300 no-underline"/>
          </div>
        </section>

        {/* Stats / Number Counter Section */}
        <section className="w-full max-w-6xl mx-auto my-16">
          <NumberCounter />
        </section>

        {/* CTA Form Section */}
        <CTAForm
          headline="Ready to Stop Living From Launch to Launch?"
          subheadline="Drop your info below and let's talk — I only take 3-5 clients at a time."
          buttonText="Let's Fix This"
        />

        {/* One Team + Projects Section */}
        <div className="w-full max-w-5xl mx-auto flex flex-col items-start mt-16">

          {/* One Team Section */}
          <section className="w-full bg-zinc-900 p-4 md:p-6 text-left rounded-2xl mb-4">
            <h3 className="text-2xl md:text-3xl font-semibold text-[var(--color-brand-gold)] mb-2">
              One Team. Full Execution.
            </h3>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-0">
              All our projects are created and managed by a single, skilled team — 
              so you never need to hire multiple freelancers.
            </p>
          </section>

          {/* Projects Section */}
          <div className="mt-2 w-full px-4 md:px-6">
            <ProjectsSection />
          </div>
        </div>

        {/* Floating Chatbot */}
        <div className="fixed bottom-5 right-5 z-50 w-[90vw] max-w-sm">
          <ChatbotWrapper />
        </div>
      </main>

      <Footer />
    </div>
  );
}
