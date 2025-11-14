// components/NavLinks.js
"use client";

import Link from "next/link";

export default function NavLinks({ onClick }) {
  return (
    <>
      <Link
        href="/"
        onClick={onClick}
        className="text-white hover:text-[var(--color-brand-gold)] transition-colors duration-200"
      >
        Home
      </Link>

      <Link
        href="#projects"
        onClick={onClick}
        className="text-white hover:text-[var(--color-brand-gold)] transition-colors duration-200"
      >
        Projects
      </Link>

      <Link
        href="/about"
        onClick={onClick}
        className="text-white hover:text-[var(--color-brand-gold)] transition-colors duration-200"
      >
        About
      </Link>

      <Link
        href="/contact"
        onClick={onClick}
        className="text-white hover:text-[var(--color-brand-gold)] transition-colors duration-200"
      >
        Contact
      </Link>
    </>
  );
}
