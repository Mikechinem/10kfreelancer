'use client';

import { motion } from 'framer-motion';

export default function CTAButton({
  text = "I'm locking in my spot now!",
  onClick = null,
  className = "",
}) {
  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <div className={`flex justify-center ${className}`}>
      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative px-10 py-5 font-bold text-lg rounded-2xl overflow-hidden bg-black text-white shadow-xl border border-white/10"
      >
        {/* Animated neon glow */}
        <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400 via-green-200 to-green-400 opacity-30 blur-xl animate-pulse"></span>

        {/* Moving shine effect */}
        <motion.span
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: "-200%" }}
          whileHover={{ x: "200%" }}
          transition={{ duration: 1 }}
        />

        {/* Button text */}
        <span className="relative z-10">{text}</span>
      </motion.button>
    </div>
  );
}
