'use client';

import { useState, useEffect, useRef } from "react";

// =========================
// TESTIMONIAL IMAGES
// =========================
const testimonialImages = [
  "fb_ad_success2_testimonial_kyuyad.jpg",
  "fb_ad_sucess8_jsn58h.jpg",
  "fb_ad_success_5_zvxqw2.jpg",
  "fb_ad_success7_f5xsnc.jpg",
  "fb_ad_success3_zg6p7p.jpg",
];

const cloudinaryBase = "https://res.cloudinary.com/dojweqe65/image/upload";

// Dynamic optimized image URL
function optimizeImage(img, width = 900) {
  return `${cloudinaryBase}/f_auto,q_50,w_${width}/v1768160617/${img}`;
}

// =========================
// Testimonial Column
// =========================
export default function TestimonialColumn() {
  const [windowWidth, setWindowWidth] = useState(1200);
  const containerRef = useRef(null);

  // Track window width
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getImageWidth = () => {
    if (windowWidth < 640) return 600;
    if (windowWidth < 1024) return 900;
    return 1200;
  };

  // Keep track of which images are visible
  const [visible, setVisible] = useState(
    new Array(testimonialImages.length).fill(false)
  );

  // Intersection Observer
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setVisible((prev) => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    const imgs = containerRef.current.querySelectorAll("div[data-index]");
    imgs.forEach((img) => observer.observe(img));

    return () => observer.disconnect();
  }, [containerRef]);

  return (
    <section
      className="w-full py-16 px-4 bg-black/40 border border-gradient-to-r from-[#e8a32d]/30 via-green-500/20 to-[#e8a32d]/30 rounded-3xl mt-16 backdrop-blur-sm"
      ref={containerRef}
    >
      <h2 className="text-white text-2xl sm:text-3xl font-semibold text-center mb-10">
        Feedback from people who took me up on my advice
      </h2>

      <div className="max-w-4xl mx-auto space-y-8">
        {testimonialImages.map((img, index) => (
          <div
            key={index}
            data-index={index}
            className="bg-black/70 border border-gradient-to-r from-[#e8a32d]/50 via-green-500/30 to-[#e8a32d]/50 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
          >
            {visible[index] ? (
              <img
                src={optimizeImage(img, getImageWidth())}
                alt={`Testimonial ${index + 1}`}
                className="w-full h-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            ) : (
              <div className="w-full h-48 bg-gray-800 animate-pulse" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
