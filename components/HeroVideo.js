// ./components/HeroVideoSection.js
"use client";

import { motion } from "framer-motion";

export default function HeroVideoSection() {
  return (
    <section className="w-full bg-black py-16 px-4 md:px-8">
      
      {/* OUTER BORDER */}
      <div className="max-w-5xl mx-auto border border-[#b58e10]/20 rounded-3xl px-6 sm:px-10 py-12">

        <div className="flex flex-col items-center gap-6 text-center">

          {/* Headline */}
          <h2 className="text-lg sm:text-xl font-semibold text-white leading-snug max-w-2xl">
            Watch this 5-minute demo on how I would quickly increase your{" "}
            <span className="text-[#b58e10]">CTR</span> and cut ad spend
          </h2>

          {/* Video Border Wrapper */}
          <div className="w-full flex justify-center">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md p-[1px] rounded-2xl bg-gradient-to-r from-transparent via-[#b58e10]/40 to-transparent">

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl overflow-hidden bg-black shadow-2xl"
              >
                <video
                  className="w-full h-auto object-cover"
                  src="https://res.cloudinary.com/dojweqe65/video/upload/v1765682465/Optimizing_Your_Landing_Page_for_Speed_and_Performance_1_arp97s.mp4"
                  poster="https://res.cloudinary.com/dojweqe65/image/upload/v1765570735/ads_that_work_dfu2sp.png"
                  muted
                  loop
                  playsInline
                  autoPlay
                  controls
                  preload="metadata"
                  aria-label="5 minute demo on increasing CTR and reducing ad spend"
                />
              </motion.div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
