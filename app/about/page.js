// ./app/about/page.js
import Link from "next/link";

export const metadata = {
  title: "About | Michael Ehumadu",
  description: "Learn more about Michael Ehumadu’s web and marketing journey",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-20 text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold text-[var(--color-brand-gold)] mb-8">
        About Me
      </h1>

      <p className="text-lg md:text-xl max-w-3xl leading-relaxed text-gray-300 mb-8">
        I'm just the guy interested in bringing more customers and clients for your business.
      </p>

      <Link
        href="https://mikechinem.github.io/web3-journey"
        target="_blank"
        className="inline-block bg-[var(--color-brand-gold)] text-black font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-yellow-500 transition-all duration-300"
      >
        Check here, I have something for you.
      </Link>
    </main>
  );
}
