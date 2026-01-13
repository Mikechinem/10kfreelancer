"use client";

import { useState, useEffect } from "react";
import HeadlineSection from "@/components/HeadlineSection";
import AboutSection from "@/components/AboutSection";
import NumberCounter from "@/components/NumberCounter"; 
import CTAButton from "@/components/CTAButton";
import PopupModal from "@/components/PopupModal";
import CTAForm from "@/components/CTAForm";

// =========================
// TESTIMONIAL IMAGES (Optimized)
// =========================
const testimonialImages = [
  "https://res.cloudinary.com/dojweqe65/image/upload/f_auto,q_50,w_900/v1765580057/fb_ad_success2_testimonial_kyuyad.jpg",
  "https://res.cloudinary.com/dojweqe65/image/upload/f_auto,q_50,w_900/v1765580058/fb_ad_sucess8_jsn58h.jpg",
  "https://res.cloudinary.com/dojweqe65/image/upload/f_auto,q_50,w_900/v1765580057/fb_ad_success_5_zvxqw2.jpg",
  "https://res.cloudinary.com/dojweqe65/image/upload/f_auto,q_50,w_900/v1765580058/fb_ad_success7_f5xsnc.jpg",
  "https://res.cloudinary.com/dojweqe65/image/upload/f_auto,q_50,w_900/v1765580058/fb_ad_success3_zg6p7p.jpg",
];

// =========================
// TESTIMONIAL COLUMN COMPONENT
// =========================
function TestimonialColumn() {
  const [visible, setVisible] = useState(
    new Array(testimonialImages.length).fill(false)
  );

  // Intersection Observer for lazy-loading images
  useEffect(() => {
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
      { root: null, rootMargin: "0px", threshold: 0.1 }
    );

    const imgs = document.querySelectorAll("div[data-index]");
    imgs.forEach((img) => observer.observe(img));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full py-16 px-4 bg-black/40 border border-white/10 rounded-3xl mt-16 backdrop-blur-sm">
      <h2 className="text-white text-2xl sm:text-3xl font-semibold text-center mb-10">
        Feedback from people who took me up on my advice
      </h2>

      <div className="max-w-4xl mx-auto space-y-8">
        {testimonialImages.map((img, index) => (
          <div
            key={index}
            data-index={index}
            className="bg-black/70 border border-white/10 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
          >
            {visible[index] ? (
              <img
                src={img}
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

// =========================
// MAIN SALES PAGE
// =========================
export default function SalesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main className="relative bg-black min-h-screen overflow-x-hidden font-sans">

      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(232,163,45,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(232,163,45,0.01)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Top Section */}
      <section className="relative z-10 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="https://res.cloudinary.com/dojweqe65/image/upload/f_auto,q_80,w_1000/v1768157371/BOOK_a_15_Minutes_7_aygkbf.png"
              alt="Sales Expert"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain"
            />
          </div>

          {/* Video */}
          <div className="mt-10">
            <div className="max-w-4xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <div className="relative aspect-video bg-black">
                  <video
                    controls
                    className="w-full h-full"
                    poster="https://res.cloudinary.com/dojweqe65/image/upload/f_auto,q_70,w_1200/v1768160617/340_Leads_1_vluy2w.png"
                  >
                    <source
                      src="https://res.cloudinary.com/dojweqe65/video/upload/v1768157515/real_video_for_loom.2026_inpnog.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>
          </div>

          {/* Top CTA Section */}
          <div className="text-center mt-14">
            <HeadlineSection
              preHeadline="For Coaches and Education based businesses"
              headline="Ready to Stop Chasing Clients on Social Media and Sell More Fast?"
              subtext="I help coaches & course creators get high-quality leads using landing pages and Facebook ads so you can focus on training, not marketing."
            />

            <div className="text-center mt-8 max-w-3xl mx-auto px-4">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#e8a32d] mb-4 leading-snug">
                Book a Free 15 minutes <br /> No-obligation Call to Fix Your Sales.
              </h3>
            </div>

            <div className="mt-10">
              <CTAButton text="Lock-in my Spot Now!" onClick={openModal} />
            </div>

            {/* Animated Bullet Points */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>No Sales Pitch</span>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className="w-2 h-2 bg-green-500 rounded-full animate-pulse"
                  style={{ animationDelay: '0.5s' }}
                ></div>
                <span>100% Free</span>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className="w-2 h-2 bg-green-500 rounded-full animate-pulse"
                  style={{ animationDelay: '1s' }}
                ></div>
                <span>15 Minutes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl">

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-12">
              What You’ll Get On This 15 Minutes Call
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Identify conversion leak", icon: "🎯", desc: "5 minutes deep dive into your sales process." },
                { title: "Fumigate your landing page", icon: "⚡", desc: "Remove elements and copy killing conversions." },
                { title: "Get clear solutions", icon: "🚀", desc: "Actionable fixes. No pitch. No pressure." }
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:scale-105 hover:shadow-lg transition-transform duration-300"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* =====================
                TESTIMONIAL SECTION
            ===================== */}
            <TestimonialColumn />

            {/* About Section */}
            <AboutSection />

            {/* Number Counter */}
            <NumberCounter />

            {/* Bottom CTA Button */}
            <div className="mt-10">
              <CTAButton text="Book Your Free Session" onClick={openModal} />
            </div>
          </div>
        </div>
      </section>

      {/* Popup Modal */}
      <PopupModal isOpen={isModalOpen} onClose={closeModal}>
        <CTAForm standalone={false} />
      </PopupModal>
    </main>
  );
}
