'use client';

import { useState, useEffect } from "react";
import HeadlineSection from "@/components/HeadlineSection";
import AboutSection from "@/components/AboutSection";
import NumberCounter from "@/components/NumberCounter"; 
import CTAButton from "@/components/CTAButton";
import PopupModal from "@/components/PopupModal";
import CTAForm from "@/components/CTAForm";

/* =========================
   TESTIMONIAL IMAGES
========================= */
const testimonialImages = [
  "fb_ad_success2_testimonial_kyuyad.jpg",
  "fb_ad_sucess8_jsn58h.jpg",
  "fb_ad_success_5_zvxqw2.jpg",
  "fb_ad_success7_f5xsnc.jpg",
  "fb_ad_success3_zg6p7p.jpg",
];

const cloudinaryBase = "https://res.cloudinary.com/dojweqe65/image/upload";

// Function to dynamically serve smaller images for mobile
function optimizeImage(img, width = 900) {
  return `${cloudinaryBase}/f_auto,q_50,w_${width}/v1768160617/${img}`;
}

export default function SalesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(2);
  const [windowWidth, setWindowWidth] = useState(1200);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Track window width for responsive image optimization
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate optimal width
  const getImageWidth = () => {
    if (windowWidth < 640) return 600; // mobile
    if (windowWidth < 1024) return 900; // tablet
    return 1200; // desktop
  };

  return (
    <main className="relative bg-black min-h-screen overflow-x-hidden font-sans">

      {/* Top Section */}
      <section className="relative z-10 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
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
              <div className="relative rounded-3xl overflow-hidden border border-gradient-to-r from-[#e8a32d]/30 via-green-500/20 to-[#e8a32d]/30 shadow-2xl backdrop-blur-md">
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

          {/* Headline */}
          <div className="text-center mt-14">
            <HeadlineSection
              preHeadline="For Coaches and Education based businesses"
              headline="Ready to Stop Chasing Clients on Social Media and Sell More Fast?"
              subtext="I help coaches & course creators get high-quality leads using landing pages and Facebook ads so you can focus on training, not marketing."
            />

            <div className="text-center mt-8 max-w-3xl mx-auto px-4">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gradient bg-gradient-to-r from-[#e8a32d] to-green-500 bg-clip-text text-transparent mb-4 leading-snug">
                Book a Free 15 minutes <br /> No-obligation Call to Fix Your Sales.
              </h3>
            </div>

            <div className="mt-10">
              <CTAButton
                text="Lock-in my Spot Now!"
                onClick={openModal}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Testimonial Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="backdrop-blur-xl bg-white/5 border border-gradient-to-r from-[#e8a32d]/20 via-green-500/10 to-[#e8a32d]/20 rounded-3xl p-8 sm:p-12 shadow-2xl">

            {/* Benefits */}
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
                  className="bg-white/5 border border-gradient-to-r from-[#e8a32d]/20 via-green-500/10 to-[#e8a32d]/20 rounded-2xl p-6 hover:scale-105 hover:shadow-lg transition-transform duration-300"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* ==============================
                TESTIMONIAL COLUMN (Optimized)
            ============================== */}
            <section className="w-full py-16 px-4 bg-black/40 border border-gradient-to-r from-[#e8a32d]/30 via-green-500/20 to-[#e8a32d]/30 rounded-3xl mt-16 backdrop-blur-sm">
              <h2 className="text-white text-2xl sm:text-3xl font-semibold text-center mb-10">
                Feedback from people who took me up on my advice
              </h2>

              <div className="max-w-4xl mx-auto space-y-8">
                {testimonialImages.slice(0, visibleCount).map((img, index) => (
                  <div
                    key={index}
                    className="bg-black/70 border border-gradient-to-r from-[#e8a32d]/50 via-green-500/30 to-[#e8a32d]/50 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
                  >
                    <img
                      src={optimizeImage(img, getImageWidth())}
                      alt={`Testimonial ${index + 1}`}
                      className="w-full h-auto object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ))}
              </div>

              {visibleCount < testimonialImages.length && (
                <div className="flex justify-center mt-10">
                  <button
                    onClick={() => setVisibleCount((v) => v + 1)} // increment by 1 for smoother memory
                    className="px-6 py-3 bg-gradient-to-r from-[#e8a32d] to-green-500 text-black rounded-full font-medium shadow-lg hover:scale-105 transition-transform duration-300"
                  >
                    View More Proof
                  </button>
                </div>
              )}
            </section>

            {/* About Section */}
            <AboutSection />

            {/* Number Counter */}
            <NumberCounter />

            {/* Bottom CTA Button */}
            <div className="mt-10">
              <CTAButton
                text="Book Your Free Session"
                onClick={openModal}
              />
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
