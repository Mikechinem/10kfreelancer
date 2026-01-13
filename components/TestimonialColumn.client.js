'use client';

import { useEffect, useState } from "react";

const images = [
  "fb_ad_success2_testimonial_kyuyad.jpg",
  "fb_ad_sucess8_jsn58h.jpg",
  "fb_ad_success_5_zvxqw2.jpg",
  "fb_ad_success7_f5xsnc.jpg",
  "fb_ad_success3_zg6p7p.jpg",
];

const base = "https://res.cloudinary.com/dojweqe65/image/upload";

export default function TestimonialColumn() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  if (!ready) {
    return <div className="h-64 bg-black/40 rounded-3xl" />;
  }

  return (
    <section className="py-16 px-4 bg-black/40 rounded-3xl backdrop-blur-sm">
      <h2 className="text-white text-2xl sm:text-3xl font-semibold text-center mb-10">
        Feedback from people who took me up on my advice
      </h2>

      <div className="max-w-4xl mx-auto space-y-8">
        {images.map((img, i) => (
          <div
            key={i}
            className="bg-black/70 border border-white/20 rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={`${base}/f_auto,q_50,w_1200/${img}`}
              alt={`Testimonial ${i + 1}`}
              className="w-full h-auto object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
