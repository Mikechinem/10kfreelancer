'use client';

export default function SectionBackground({ children, variant = "default" }) {
 
  const backgroundClasses = {
    hero: "relative w-full bg-black before:absolute before:inset-0 before:bg-gradient-to-b from-black via-gray-900 to-black before:z-0 before:content-['']",
    benefits: "relative w-full bg-black before:absolute before:inset-0 before:bg-gradient-to-b from-black via-gray-800 to-black before:z-0 before:content-['']",
    default: "relative w-full bg-black before:absolute before:inset-0 before:bg-gradient-to-b from-black via-gray-900 to-black before:z-0 before:content-['']",
  };

  const starPattern = `
    radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)
  `;

  return (
    <div
      className={`${backgroundClasses[variant] || backgroundClasses.default}`}
      style={{
        // repeat the stars across the entire section
        backgroundImage: `${starPattern}`,
        backgroundSize: "20px 20px",
      }}
    >
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
