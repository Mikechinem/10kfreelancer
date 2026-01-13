'use client';

import { useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

// Image URLs (replace with your Cloudinary optimized URLs)
const images = [
  "fb-ad-success4x_rixnha.jpg",
  "fb-ad-success9x_h8ulyz.jpg",
  "fb-ad-success5x_rawdq0.jpg",
  "fb-ad-success7x_fj7lxm.jpg",
];

const CLOUDINARY_BASE = "https://res.cloudinary.com/dojweqe65/image/upload";

const optimizeImage = (img, width = 900) =>
  `${CLOUDINARY_BASE}/f_auto,q_50,w_${width}/${img}`;

// =========================
// Animated Scroll Image
// =========================
function ScrollImage({ src, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-100px", once: true });
  const controls = useAnimation();

  // Trigger animation on inView
  if (inView) {
    controls.start({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    });
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={controls}
      className={`relative rounded-3xl overflow-hidden shadow-2xl border border-white/20`}
    >
      <img
        src={src}
        alt={`Gallery ${index + 1}`}
        className="w-full h-auto object-cover"
        loading="lazy"
        decoding="async"
      />
      {/* Optional overlay glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#e8a32d]/20 via-green-500/10 to-transparent pointer-events-none rounded-3xl" />
    </motion.div>
  );
}

// =========================
// Main Animated Scroll Gallery
// =========================
export default function ScrollGallery() {
  return (
    <section className="relative w-full py-16 px-4 sm:px-6 lg:px-12 bg-black/90 overflow-hidden">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e8a32d] to-green-500 text-center mb-12">
        Web3 Scroll Gallery
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((img, index) => (
          <ScrollImage key={index} src={optimizeImage(img, 900)} index={index} />
        ))}
      </div>
    </section>
  );
}
