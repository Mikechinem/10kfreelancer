'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedScrollGallery = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [mounted, setMounted] = useState(false);

  // ✅ Prevent SSR hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Mobile swipe handlers
  const handleDragEnd = (e, { offset, velocity }) => {
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -swipeConfidenceThreshold) {
      paginate(1);
    } else if (swipe > swipeConfidenceThreshold) {
      paginate(-1);
    }
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setActiveIndex((prev) => {
      if (newDirection === 1) {
        return prev === images.length - 1 ? 0 : prev + 1;
      } else {
        return prev === 0 ? images.length - 1 : prev - 1;
      }
    });
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -15,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
    hover: {
      scale: 1.05,
      rotateY: 5,
      z: 50,
      transition: {
        type: "spring",
        damping: 15,
      },
    },
  };

  // ✅ Don't render animations until client-side mounted
  if (!mounted) {
    return (
      <section
        id="profile-gallery"
        className="w-full flex flex-col items-center justify-center text-center py-12 md:py-16 px-4 md:px-6 bg-black border-4 border-[#1a1402] rounded-xl mt-12 overflow-hidden"
      >
        <h1 className="text-white text-2xl sm:text-3xl md:text-5xl leading-normal max-w-2xl mx-auto mb-12">
          Been Helping Small business owners run more profitable ads since 2021.
        </h1>
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-2xl border-2 border-[#423405]">
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
  }

  return (
    <section
      id="profile-gallery"
      className="w-full flex flex-col items-center justify-center text-center py-12 md:py-16 px-4 md:px-6 bg-black border-4 border-[#1a1402] rounded-xl mt-12 overflow-hidden"
    >
      {/* Header with glow effect */}
      <motion.h1 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-white text-2xl sm:text-3xl md:text-5xl leading-normal max-w-2xl mx-auto mb-12 relative"
      >
        <span className="relative z-10">
          What people were saying when I was teaching this on youtube for free.
        </span>
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-[#e8a32d]/20 to-green-500/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.h1>

      {/* Mobile Swiper */}
      <div className="md:hidden w-full max-w-sm mx-auto relative h-[400px] mb-8">
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
              scale: { duration: 0.4 },
              rotateY: { duration: 0.4 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={handleDragEnd}
            className="absolute w-full h-full"
            style={{ perspective: 1000 }}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-[#423405] shadow-2xl">
              <motion.div 
                className="absolute -inset-1 bg-gradient-to-r from-[#e8a32d]/30 to-green-500/30 rounded-2xl blur-xl"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              
              <img
                src={images[activeIndex]}
                alt={`Success testimonial ${activeIndex + 1}`}
                className="relative w-full h-full object-contain bg-black"
                draggable={false}
              />
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={() => paginate(-1)}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-[#e8a32d]/80 hover:bg-[#e8a32d] text-black rounded-full p-3 backdrop-blur-sm transition-all"
        >
          ←
        </button>
        <button
          onClick={() => paginate(1)}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-[#e8a32d]/80 hover:bg-[#e8a32d] text-black rounded-full p-3 backdrop-blur-sm transition-all"
        >
          →
        </button>

        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > activeIndex ? 1 : -1);
                setActiveIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === activeIndex 
                  ? 'bg-[#e8a32d] w-6' 
                  : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="hidden md:grid w-full max-w-5xl grid-cols-2 gap-8"
        style={{ perspective: 2000 }}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover="hover"
            className="relative group"
          >
            <div className="relative overflow-hidden rounded-2xl border-2 border-[#423405] shadow-lg">
              <motion.div 
                className="absolute -inset-1 bg-gradient-to-r from-[#e8a32d]/0 to-green-500/0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 group-hover:from-[#e8a32d]/40 group-hover:to-green-500/40 transition-all duration-500"
              />
              
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.8 }}
              />

              <img
                src={image}
                alt={`Success testimonial ${index + 1}`}
                className="relative w-full h-auto object-contain transform transition-transform duration-500"
              />

              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="absolute top-4 right-4 bg-[#e8a32d] text-black font-bold rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
              >
                {index + 1}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#e8a32d] rounded-full"
          initial={{ 
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
            opacity: 0,
          }}
          animate={{
            x: Math.random() * 200 - 100,
            y: Math.random() * -200,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.4,
          }}
          style={{
            left: `${20 + i * 15}%`,
            bottom: 0,
          }}
        />
      ))}
    </section>
  );
};

export default AnimatedScrollGallery;