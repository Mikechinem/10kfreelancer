// ./components/HeroSection.js
"use client";

import AnimatedScrollGallery from '../components/AnimatedScrollGallery';

export default function HeroSection() {
  const galleryImages = [
    {
      url: "https://res.cloudinary.com/dojweqe65/image/upload/v1765580057/fb_ad_success2_testimonial_kyuyad.jpg",
    },
    {
      url: "https://res.cloudinary.com/dojweqe65/image/upload/v1765580058/fb_ad_sucess8_jsn58h.jpg",
    },
    {
      url: "https://res.cloudinary.com/dojweqe65/image/upload/v1765580057/fb_ad_success_5_zvxqw2.jpg",
    },
    {
      url: "https://res.cloudinary.com/dojweqe65/image/upload/v1765580058/fb_ad_success7_f5xsnc.jpg",
    },
    {
      url: "https://res.cloudinary.com/dojweqe65/image/upload/v1765580058/fb_ad_success3_zg6p7p.jpg",
    },
    {
      url: "https://res.cloudinary.com/dojweqe65/image/upload/v1765580058/fb_ad_sucess8_jsn58h.jpg",
    }
  ];

  return (
    <>
      <section
  id="hero"
  className="w-full min-h-screen flex items-center justify-center bg-black px-4 md:px-8 lg:px-16 py-16 md:py-20"
>
  <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
    
    <div className="flex flex-col justify-center space-y-6">
      <div className="text-[#b58e10] text-sm font-semibold uppercase tracking-wider">
        For Online Business Owners
      </div>

      <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight">
        Stop Wasting Money on Ads That Don't Convert
      </h1>

      <p className="text-gray-300 text-lg sm:text-xl lg:text-2xl leading-relaxed">
        I help online businesses reduce their cost per customer by 30-40% through data-driven Meta and Google ads plus custom landing pages.
      </p>

      <div className="text-gray-400 text-sm italic">
        Trusted by course creators, coaches, e-commerce brands and SaaS companies
      </div>

      <div className="flex justify-center pt-6"> {/* Center the button */}
        <a 
          href="#projects" 
          className="inline-block bg-[#141413] text-black font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:bg-transparent hover:text-[#b58e10] border-2 border-[#b58e10] text-center text-lg"
        >
          Get Your Free Funnel Audit
        </a>
      </div>
    </div>

    <div className="flex items-center justify-center">
      <img
        src="https://res.cloudinary.com/dojweqe65/image/upload/v1765583785/michael_digital_marketer-removebg-nobg_zkb3im.png"
        alt="Successful ad campaign results"
        className="w-full h-auto max-w-lg lg:max-w-full rounded-lg shadow-2xl border border-[#b58e10]/20"
      />
    </div>

  </div>
</section>


      <AnimatedScrollGallery images={galleryImages} />
    </>
  );
}