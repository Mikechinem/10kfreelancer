'use client';

import React from 'react';

const TestimonialColumn = ({ images }) => {
  return (
    <section
      id="testimonials"
      className="w-full py-16 px-4 md:px-6 bg-black border-4 border-[#1a1402] rounded-2xl"
    >
      {/* Header */}
      <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold text-center max-w-3xl mx-auto mb-12">
        What people were saying when I was sharing my system for free
      </h2>

      {/* Testimonial Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative bg-black rounded-xl border border-white/10 shadow-lg overflow-hidden"
          >
            {/* Image Wrapper */}
            <div className="relative w-full">
              <img
                src={image}
                alt={`Testimonial screenshot ${index + 1}`}
                className="w-full h-auto object-contain bg-black"
                loading="lazy"
              />
            </div>

            {/* Optional Caption (future-proof) */}
            <div className="px-4 py-3 text-xs text-gray-400 text-center border-t border-white/10">
              Screenshot from real feedback
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialColumn;
