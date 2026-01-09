'use client';

import React, { useState, useEffect, useRef } from 'react';

const NumberCounter = ({ end, duration = 2000, label, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) observer.observe(counterRef.current);

    return () => {
      if (counterRef.current) observer.unobserve(counterRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return (
    <div
      ref={counterRef}
      className="flex flex-col items-center p-6 bg-black/40 backdrop-blur-md rounded-3xl shadow-[0_0_20px_rgba(255,232,45,0.6)] hover:shadow-[0_0_30px_rgba(255,232,45,0.9)] transition-shadow duration-500"
    >
      <div className="text-5xl md:text-6xl font-extrabold text-[#e8a32d] drop-shadow-[0_0_10px_rgba(255,232,45,0.7)] animate-pulse">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-lg md:text-xl text-gray-300 mt-2">{label}</div>
    </div>
  );
};

// Modern Stats Section
export default function StatsSection() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black flex flex-col items-center justify-center p-8">
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#e8a32d] mb-16 drop-shadow-[0_0_20px_rgba(255,232,45,0.7)]">
        Results That Speak
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl w-full">
        <NumberCounter end={54000} duration={3500} label="Leads Generated" suffix="+" />
        <NumberCounter end={43} duration={2000} label="Clients Helped" suffix="+" />
        <NumberCounter end={72} duration={1500} label="Hours to First Results" />
      </div>
    </div>
  );
}
