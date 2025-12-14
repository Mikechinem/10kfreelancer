// ./components/HeroVideoSection.js
"use client";

import { motion } from "framer-motion";

export default function HeroVideo() {
  return (
    <section className="w-full flex flex-col items-center py-16 px-4 md:px-8 lg:px-16 bg-black border-t border-b border-[#b58e10]/30">
      <div className="max-w-4xl w-full flex flex-col items-center space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-white text-center">
      How I'd <span className="text-[#b58e10]">INSTANTLY cut ad waste</span> and <span className="text-[#b58e10]">INCREASE Your ROI</span> without touching ad spend!<br />
      <span className="text-[#b58e10]">WATCH THE 4 MINUTE VIDEO DEMO</span>
     </h2>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-lg border border-[#b58e10]/20 rounded-xl overflow-hidden shadow-2xl"
        >
          <video
            className="w-full h-auto object-cover"
            src="https://res.cloudinary.com/dojweqe65/video/upload/v1765682465/Optimizing_Your_Landing_Page_for_Speed_and_Performance_1_arp97s.mp4"
            poster="https://res.cloudinary.com/dojweqe65/image/upload/v1765570735/ads_that_work_dfu2sp.png"
            autoPlay
            muted
            loop
            playsInline
            controls
          />
        </motion.div>
      </div>
    </section>
  );
}
