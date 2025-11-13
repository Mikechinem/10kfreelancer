// ./app/page.js
import ChatbotWrapper from "../components/ChatbotWrapper";
import Navbar from "../components/Navbar";
console.log('Navbar:', Navbar);
import HeroSection from "../components/HeroSection";
console.log('HeroSection:', HeroSection);
import ProjectsSection from "../components/ProjectsSection";
console.log('ProjectsSection:', ProjectsSection);
import Footer from "../components/Footer";
console.log('Footer:', Footer);

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        {/* Hero Section */}
        <HeroSection />

        {/* Profile / Picture Frame Section */}
        <section className="w-full max-w-5xl mx-auto my-12 flex flex-col md:flex-row items-center bg-zinc-900 rounded-2xl p-6 shadow-lg">
  {/* Image */}
  <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-6">
    <img
      src="/michael.jpg"
      alt="Michael Ehumadu"
      className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-[var(--color-brand-gold)] shadow-lg"
    />
  </div>

  {/* Text / Sales Copy */}
  <div className="text-left md:text-left flex-1">
    <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-brand-gold)] mb-4">
      Hi, I'm Michael Ehumadu
    </h2>
    <p className="text-lg md:text-xl text-gray-200 mb-4">
      I'm a web developer & digital marketer. I craft modern web solutions and run high-converting ad campaigns that drive clicks and sales directly to your business.
    </p>
    <p className="text-gray-400 mb-6">
      Explore my portfolio below to see live projects, dashboards, AI chatbots, and more. Click any project to discover how I can help you grow your business.
    </p>

    {/* Contact Me Button */}
    <a
      href="#contact"
      className="inline-block bg-[var(--color-brand-gold)] text-black font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-yellow-500 transition-all duration-300"
    >
      Talk To Me
    </a>
  </div>
</section>

        {/* Divider */}
        <div className="divider"></div>

        {/* Floating Chatbot */}
        <div className="fixed bottom-5 right-5 z-50 w-[90vw] max-w-sm">
          <ChatbotWrapper />
        </div>

        {/* Projects Section */}
        <ProjectsSection />
      </main>

      <Footer />
    </div>
  );
}
