
 
import Link from "next/link";
export default function ThankYouPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-zinc-900 to-black px-6">
      <div className="max-w-xl text-center bg-zinc-900/70 backdrop-blur-md p-10 rounded-3xl border border-zinc-700 shadow-2xl">
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#e8a32d] mb-4">
          You're In 🎉
        </h1>

       <p className="text-gray-300 text-base md:text-lg mb-4 leading-relaxed">
       Thanks for reaching out.<br />
       <strong className="text-white">Quick one:</strong><br />
        We usually work with <strong className="text-green-400">2-3 clients at a time</strong>.<br />
        So we might have <strong className="text-red-400">no slot left</strong> as we speak.<br />
       <strong className="text-white">Message me on WhatsApp now</strong> to confirm availability.
       </p>

        {/* WhatsApp Button */}
        <Link
          href="https://wa.me/+2347064969603?text=Hi%20Michael%2C%20I%20just%20submitted%20the%20form."
          target="_blank"
         className="inline-flex items-center justify-center px-8 py-4 rounded-xl 
           bg-black text-[#e8a32d] font-bold text-lg shadow-lg 
           hover:bg-[#222222] transition-colors"

        >
           Yes! Let's do it Now.
        </Link>

        <p className="text-gray-500 text-sm mt-6">
          I usually reply fast.
        </p>
      </div>
    </section>
  );
}
