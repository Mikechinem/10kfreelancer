'use client';
import SectionBackground2 from "@/components/SectionBackground2";
import { useEffect, useState } from "react";

const images = [
  "fb-ad-success4x_rixnha.jpg",
  "fb-ad-success9x_h8ulyz.jpg",
  "fb-ad-success5x_rawdq0.jpg",
  "fb-ad-success7x_fj7lxm.jpg",
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
    <SectionBackground2><section className="py-16 px-4 sm:px-6 md:px-8 lg:px-16">
      <h2 className="text-white text-2xl sm:text-3xl font-semibold text-center mb-10 max-w-3xl mx-auto">
        Feedback from people who took me up on my advice
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {images.map((img, i) => (
          <div
            key={i}
            className="bg-black/70 border border-white/20 rounded-xl overflow-hidden shadow-lg flex justify-center items-center"
          >
            <img
              src={`${base}/f_auto,q_50,w_1200/${img}`}
              alt={`Testimonial ${i + 1}`}
              className="w-full h-full object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </section>
    </SectionBackground2>
  );
}
