// ./app/contact/page.js
import Image from "next/image";
import { FaTwitter, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

export const metadata = {
  title: "Contact | Michael Ehumadu",
  description: "Contact Michael Ehumadu for collaborations and projects",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-20 text-center">
      <div className="max-w-2xl flex flex-col items-center space-y-6">
        {/* Image */}
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[var(--color-brand-gold)] shadow-lg">
          <Image
            src="/michael.jpg"
            alt="Michael Ehumadu"
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Text */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--color-brand-gold)]">
          Let’s Work Together
        </h1>
        <p className="text-lg text-gray-300 max-w-xl">
          Your customers are scattered all over the internet looking for you — let me show you where they live.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-6 mt-4">
          <a
            href="https://x.com/Mike_CHINEM"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-brand-gold)] hover:text-yellow-400 text-3xl"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com/in/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-brand-gold)] hover:text-yellow-400 text-3xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/mikechinem"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-brand-gold)] hover:text-yellow-400 text-3xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://wa.me/7064969603"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-brand-gold)] hover:text-yellow-400 text-3xl"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </main>
  );
}
