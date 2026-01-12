'use client';

import { useState } from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export default function CTAForm({
  headline = "Ready to stop living from launch to launch?",
  subheadline = "Drop your details and let's talk.",
  psText = "P.S. You might feel too confident after our talk.",
  buttonText = "Yes! Let's Fix This",
  standalone = true, // Set to false when used in popup
}) {
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    
    if (loading) return;

    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      whatsapp: phone,
    };

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Subscription failed");

      window.location.href = "/thank-you";

    } catch (error) {
      console.error("CTA submission error:", error);
      alert("Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  const formContent = (
    <>
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#e8a32d] mb-4 tracking-wide">
          {headline}
        </h2>
        {subheadline && (
          <p className="text-gray-300 text-lg md:text-xl mb-4">
            {subheadline}
          </p>
        )}
        {psText && (
          <p className="text-gray-400 text-sm md:text-base italic">
            {psText}
          </p>
        )}
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid gap-6 bg-zinc-900/70 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-zinc-700"
      >
        <input
          disabled={loading}
          type="text"
          name="name"
          placeholder="Full Name *"
          required
          className="w-full h-[56px] px-4 rounded-xl bg-black/30 text-white placeholder-gray-400 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-[#e8a32d] focus:border-[#e8a32d] transition"
        />

        <PhoneInput
          country={'ng'}
          value={phone}
          onChange={setPhone}
          disabled={loading}
          placeholder="Phone Number *"
          containerClass="w-full"
          inputClass="custom-phone-input"
          buttonClass="custom-phone-button"
          dropdownClass="bg-zinc-900 text-white rounded-xl shadow-lg"
          enableSearch
          searchPlaceholder="Search country..."
        />

        <input
          disabled={loading}
          type="email"
          name="email"
          placeholder="Email Address *"
          required
          className="w-full h-[56px] px-4 rounded-xl bg-black/30 text-white placeholder-gray-400 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-[#e8a32d] focus:border-[#e8a32d] transition"
        />

        <button
          type="submit"
          disabled={loading}
          className="mt-2 h-[56px] rounded-xl bg-gradient-to-r from-[#e8a32d] to-yellow-400 text-black font-semibold text-lg hover:scale-105 transition-transform shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Submitting..." : buttonText}
        </button>
      </form>
    </>
  );

  // If standalone, wrap in section
  if (standalone) {
    return (
      <section className="w-full py-16 bg-gradient-to-r from-black via-zinc-900 to-black">
        <div className="max-w-3xl mx-auto px-6">
          {formContent}
        </div>
      </section>
    );
  }

  // If in popup, return just the content
  return <div>{formContent}</div>;
}