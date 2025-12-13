"use client";

import { motion } from "framer-motion";

export default function HeroImage({ className }) {
  return (
    <motion.img
      src="https://res.cloudinary.com/dojweqe65/image/upload/v1765583785/michael_digital_marketer-removebg-nobg_zkb3im.png"
      alt="Successful ad campaign results"
      className={`w-full h-full object-contain rounded-lg shadow-2xl border border-[#b58e10]/20 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: [0, -12, 0] }} // gentle floating up and down
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.05 }}
    />
  );
}
