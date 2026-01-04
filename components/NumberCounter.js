
'use client';

import React, { useState, useEffect, useRef } from 'react';

const NumberCounter = ({ end, duration = 2000, label, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
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
    <div ref={counterRef} className="text-center">
      <div className="text-5xl md:text-6xl font-bold text-white mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-lg md:text-xl text-gray-400">{label}</div>
    </div>
  );
};

// Example usage component
export default function StatsSection() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-600 to-black flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Results That Speak
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <NumberCounter 
            end={54000} 
            duration={3500} 
            label="Leads Generated" 
          />
          
          <NumberCounter 
            end={43} 
            duration={2000} 
            label="Clients Helped" 
            suffix="+"
          />
          
          <NumberCounter 
            end={72} 
            duration={1500} 
            label="Hours to First Results" 
          />
        </div>
      </div>
    </div>
  );
}