import React, { useState } from "react";
const GLOW_COLOR = "#22D3EE";
const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "My Work", href: "#work" },
  { label: "Contact Me", href: "#contact" },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex flex-col items-center w-full absolute top-0 left-0 z-50">
      <div className="flex items-center justify-between p-4 md:px-16 lg:px-24 xl:px-32 md:py-5 w-full">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-white">
          Mubashir<span style={{ color: "#BFD7FE" }}>.</span>
        </a>

        {/* Menu */}
        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } fixed top-0 left-0 z-10 w-full h-screen bg-black/50 backdrop-blur flex-col justify-center
          md:static md:z-auto md:w-auto md:h-auto md:bg-transparent md:backdrop-blur-none md:flex md:flex-row
          items-center gap-8 text-sm border border-white/15 hover:border-white/30 transition-colors px-9 py-4 md:rounded-full`}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white hover:text-white/90"
            >
              {link.label}
            </a>
          ))}

          <button
            onClick={() => setMenuOpen(false)}
            className="md:hidden bg-gray-900 hover:bg-gray-800 text-white p-2 rounded-md aspect-square font-medium transition"
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        {/* Contact Us button (desktop) */}
        <a
          href="#contact"
          className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-black transition-transform hover:scale-105"
          style={{ backgroundColor: GLOW_COLOR }}
        >
          Contact Us
        </a>

        {/* Hamburger (mobile) */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden bg-gray-900 hover:bg-gray-800 text-gray-50 p-2 rounded-md aspect-square font-medium transition"
          aria-label="Open menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 12h16" />
            <path d="M4 18h16" />
            <path d="M4 6h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};
