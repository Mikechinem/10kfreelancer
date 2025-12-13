// ./components/HeroSection.js
"use client";

import AnimatedScrollGallery from '../components/AnimatedScrollGallery';
import HeroImage from "@/components/HeroImage";
import { motion } from "framer-motion";

export default function HeroSection() {
  const galleryImages = [
    { url: "https://res.cloudinary.com/dojweqe65/image/upload/v1765580057/fb_ad_success2_testimonial_kyuyad.jpg" },
    { url: "https://res.cloudinary.com/dojweqe65/image/upload/v1765580058/fb_ad_sucess8_jsn58h.jpg" },
    { url: "https://res.cloudinary.com/dojweqe65/image/upload/v1765580057/fb_ad_success_5_zvxqw2.jpg" },
    { url: "https://res.cloudinary.com/dojweqe65/image/upload/v1765580058/fb_ad_success7_f5xsnc.jpg" },
    { url: "https://res.cloudinary.com/dojweqe65/image/upload/v1765580058/fb_ad_success3_zg6p7p.jpg" },
    { url: "https://res.cloudinary.com/dojweqe65/image/upload/v1765580058/fb_ad_sucess8_jsn58h.jpg" },
  ];

  const features = [
    "Audit your current funnel: fix what's leaking",
    "Custom code your landing page (Next.js): 90% of commercial page builder sneak-in scripts that slows your page load",
    "Identify conversion leaks: Remove dead ads",
    "Personalized AB testing and analyses: Dial in your ad budget on what's bringing the sales"
  ];

  const bulletPoints = [
    "Low cost per lead - every wastage is cutted",
    "Premium buyers and subscribers- no more can you tell me more😂",
    "Automated Selling process that doesn't need your presence",
    "Minimum of 2x ROI- the business pays its own expenses"
  ];

  
  return (
    <>
      {/* Hero Section */}
      <section
        id="hero"
        className="w-full min-h-screen flex flex-col justify-center bg-black px-4 md:px-8 lg:px-16 py-16 md:py-20"
      >
        {/* Main hero grid */}
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-6 items-center relative">

          {/* Left Column: Text */}
          <div className="flex flex-col justify-center space-y-6 z-10">
            <div className="text-[#b58e10] text-sm font-semibold uppercase tracking-wider">
              For Online Business Owners
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight">
              Stop Wasting Money on Ads That Don't Convert
            </h1>

            <p className="text-gray-300 text-lg sm:text-xl lg:text-2xl leading-relaxed">
              I help online businesses reduce their cost per customer acquisition by 30-40% through data-driven Meta and Google ads plus custom landing pages.
            </p>

            <div className="text-gray-400 text-sm italic">
              Trusted by course creators, coaches, e-commerce brands and SaaS companies
            </div>

            {/* Button centered under text */}
            <div className="flex justify-center pt-6">
              <a 
                href="#projects" 
                className="inline-block bg-[#141413] text-black font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:bg-transparent hover:text-[#b58e10] border-2 border-[#b58e10] text-center text-lg"
              >
                Get Your Free Funnel Audit
              </a>
            </div>
          </div>

          {/* Right Column: Hero Image */}
          <div className="flex items-center justify-center lg:justify-end -ml-8 lg:-ml-16 relative z-0">
            <HeroImage className="w-full max-w-full lg:max-w-[110%]" />
          </div>
        </div>

        {/* Animated Feature Cards Section */}
        <div className="mt-12 max-w-7xl mx-auto px-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <h2 className="col-span-full text-3xl sm:text-4xl font-bold text-white text-center mb-4">
            My Approach
          </h2>

          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-start space-x-3 bg-zinc-900 rounded-xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <span className="text-[#b58e10] mt-1 text-xl">✔</span>
              <p className="text-gray-300">{feature}</p>
            </motion.div>
          ))}
        </div>

        {/* Bullet Point Section aligned with Feature Cards */}
        <section className="mt-12 max-w-7xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-6">
            What You'll Get
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 text-gray-300 list-disc list-inside">
            {bulletPoints.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </section>
      </section>

      {/* QUALIFICATION SECTION */}
<section className="w-full bg-zinc-950 border-t border-[#b58e10]/20 py-20 px-4 md:px-8">
  <div className="max-w-4xl mx-auto text-center space-y-6">

    <p className="text-3xl sm:text-xl font-bold text-[#b58e10] text-center mb-6">
      Who This Is For...
    </p>

    <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
      Built for Serious Business Owners
    </h2>

    <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
      My ad management and funnel optimization services are designed for
      business owners who are ready to scale — not experiment blindly.
    </p>

    <div className="bg-zinc-900 rounded-2xl p-8 mt-8 space-y-6 text-center">
  <p className="text-white text-lg font-semibold">
    This service is a good fit if:
  </p>

  <ul className="text-gray-300 space-y-3 list-disc list-inside inline-block text-left">
    <li>You can comfortably invest <span className="text-[#b58e10] font-semibold">₦100,000+</span> per month in ads</li>
    <li>You already sell a validated product or service</li>
    <li>You want predictable, trackable customer acquisition</li>
    <li>You value data, testing, and long-term growth</li>
  </ul>
</div>


    <p className="text-gray-400 text-sm italic">
      Not sure if you’re a fit? Let’s talk and find out.
    </p>

  </div>
</section>


      {/* Testimonial / Image Gallery */}
      <AnimatedScrollGallery images={galleryImages} />
    </>
  );
}
