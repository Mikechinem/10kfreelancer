import { Heading1 } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

const AnimatedScrollGallery = ({ images }) => {
  const [visibleItems, setVisibleItems] = useState([]);
  const itemRefs = useRef([]);

  useEffect(() => {
    const observers = [];
    
    itemRefs.current.forEach((ref, index) => {
      if (!ref) return;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleItems(prev => [...new Set([...prev, index])]);
            }
          });
        },
        { threshold: 0.2 }
      );
      
      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <section
      id="profile-gallery"
      className="w-full flex flex-col items-center justify-center text-center py-12 md:py-16 px-4 md:px-6 bg-black border-4 border-[#1a1402] rounded-xl mt-12"
    >
    <h1 className="text-white text-2xl sm:text-3xl md:text-5xl leading-normal max-w-2xl mx-auto mb-12">
        Been Helping Small business owners run more profitable ads since 2021.
      </h1>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {images.map((image, index) => (
          <div
            key={index}
            ref={el => itemRefs.current[index] = el}
            className={`
              transform transition-all duration-700 ease-out
              ${visibleItems.includes(index) 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'}
            `}
            style={{
              transitionDelay: `${(index % 2) * 150}ms`
            }}
          >
            <div className="relative group overflow-hidden rounded-lg border-2 border-[#423405] shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <h6 className="text-white text-lg font-semibold">
                  {image.title}
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnimatedScrollGallery;