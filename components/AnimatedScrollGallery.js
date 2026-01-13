'use client';

import React, { useState } from 'react';

const TestimonialColumn = ({ images }) => {
  const [visibleCount, setVisibleCount] = useState(2);

  return (
    <section className="w-full py-16 px-4 bg-black border-4 border-[#1a1402] rounded-2xl">
      <h2 className="text-white text-2xl sm:text-3xl font-semibold text-center mb-10">
        Feedback from people who took me up on my advice
      </h2>

      <div className="max-w-4xl mx-auto space-y-8">
        {images.slice(0, visibleCount).map((image, index) => (
          <div
            key={index}
            className="bg-black border border-white/10 rounded-xl overflow-hidden"
          >
            <img
              src={image}
              alt={`Testimonial ${index + 1}`}
              className="w-full h-auto"
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>

      {visibleCount < images.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setVisibleCount((v) => v + 2)}
            className="px-6 py-3 bg-[#e8a32d] text-black rounded-full font-medium"
          >
            View More Proof
          </button>
        </div>
      )}
    </section>
  );
};

export default TestimonialColumn;
