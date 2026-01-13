'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedScrollGallery = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setActiveIndex((prev) =>
      newDirection === 1
        ? prev === images.length - 1 ? 0 : prev + 1
        : prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleDragEnd = (e, { offset, velocity }) => {
    const swipe = swipePower(offset.x, velocity.x);
    if (swipe < -swipeConfidenceThreshold) paginate(1);
    else if (swipe > swipeConfidenceThreshold) paginate(-1);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45,
    }),
  };

  if (!mounted) return null;

  return (
    <section
      id="profile-gallery"
      className="w-full flex flex-col items-center justify-center text-center py-12 md:py-16 px-4 md:px-6 bg-black border-4 border-[#1a1402] rounded-xl mt-12 overflow-hidden"
    >
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-white text-2xl sm:text-3xl md:text-5xl max-w-2xl mx-auto mb-12 relative"
      >
        What people were saying when I was sharing my system for free on YouTube.
      </motion.h1>

      {/* ===== MOBILE SWIPER (FIXED) ===== */}
      <div className="md:hidden w-full max-w-sm mx-auto relative aspect-[4/3] mb-8">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={handleDragEnd}
            className="absolute w-full h-full"
            style={{ perspective: 1000 }}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-[#423405] shadow-2xl">
              <img
                src={images[activeIndex]}
                alt={`Success testimonial ${activeIndex + 1}`}
                className="w-full h-full object-cover bg-black"
                draggable={false}
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <button
          onClick={() => paginate(-1)}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#e8a32d] text-black rounded-full p-3"
        >
          ←
        </button>
        <button
          onClick={() => paginate(1)}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#e8a32d] text-black rounded-full p-3"
        >
          →
        </button>
      </div>

      {/* ===== DESKTOP GRID (UNCHANGED) ===== */}
      <div className="hidden md:grid w-full max-w-5xl grid-cols-2 gap-8">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl border-2 border-[#423405]"
          >
            <img
              src={image}
              alt={`Success testimonial ${index + 1}`}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnimatedScrollGallery;
