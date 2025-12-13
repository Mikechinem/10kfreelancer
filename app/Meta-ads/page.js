"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FacebookAdsPage() {
  return (
    <div className="bg-black text-white min-h-screen px-4 md:px-8 lg:px-16 py-20 space-y-32">

      {/* SECTION 1 — HERO */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Copy (LEFT) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 order-1"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#b58e10]">
            Facebook & Instagram Ads
          </h1>

          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
            I help brands stop burning ad budget and start converting traffic
            into customers using data-driven Meta ad strategies.
          </p>

          <p className="text-gray-400 italic">
            Ideal for e‑commerce brands, coaches, and course creators.
          </p>

          {/* WHATSAPP CTA */}
          <a
            href="https://wa.me/2347064969603"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#131007] text-zinc-900 font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-transparent hover:text-[#ebb608] border-2 border-[#ebb608] transition-colors duration-300 no-underline"
          >
            Talk to me on WhatsApp
          </a>
        </motion.div>

        {/* Image (RIGHT) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center order-2"
        >
          <Image
            src="https://res.cloudinary.com/dojweqe65/image/upload/v1765583785/michael_digital_marketer-removebg-nobg_zkb3im.png"
            alt="Facebook Ads"
            width={520}
            height={520}
            className="rounded-xl shadow-2xl"
          />
        </motion.div>
      </section>

      {/* SECTION 2 — FEATURES */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 order-2 lg:order-1"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#b58e10]">
            What You Get
          </h2>

          <ul className="space-y-3 text-gray-300 list-disc list-inside">
            <li>Full audit of your existing Meta ad account</li>
            <li>High‑converting ad creatives & copywriting</li>
            <li>Precise audience targeting & retargeting</li>
            <li>Ongoing optimization to reduce CPA</li>
          </ul>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center order-1 lg:order-2"
        >
          <Image
            src="https://res.cloudinary.com/dojweqe65/image/upload/v1765580057/fb_ad_success_5_zvxqw2.jpg"
            alt="Facebook Ads Results"
            width={520}
            height={520}
            className="rounded-xl shadow-2xl"
          />
        </motion.div>
      </section>

    </div>
  );
}
