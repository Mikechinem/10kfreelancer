"use client";
import Link from "next/link";
import { useState } from "react";

const NavLinks = ({ onClick }) => (
  <>
    {/* Go back to homepage */}
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

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-800 bg-black px-6 h-20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-full">

        {/* Logo */}
        <Link
          href="/"
        className="text-xs sm:text-sm text-[var(--color-brand-gold)] italic font-bold tracking-wide hover:opacity-90"


        >
          10X Your Sales
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          <NavLinks />
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[var(--color-brand-gold)] p-2 hover:bg-zinc-900 rounded-lg transition"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        id="mobile-menu"
        className={`md:hidden absolute top-full right-6 w-48 border border-gray-800 bg-[var(--color-background-main)] rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="flex flex-col items-start space-y-2 px-4">
          <NavLinks onClick={() => setMenuOpen(false)} />
        </div>
      </div>
    </nav>
  );
}
