import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { id: "about", label: "About" },
  { id: "timeline", label: "Timeline" },
  { id: "team", label: "Team" },
  { id: "sponsors", label: "Sponsors" },
  { id: "faqs", label: "FAQs" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for navbar background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl shadow-lg shadow-pink-500/20 border-b border-pink-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500/30 to-pink-700/20 flex items-center justify-center border border-pink-400/20 shadow-inner shadow-pink-500/40">
            <span className="font-extrabold text-pink-400 text-lg">HP</span>
          </div>
          <h1 className="text-lg font-semibold text-white">
            Hult Prize{" "}
            <span className="text-sm font-normal text-pink-300 ml-1">
              MUET
            </span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="relative text-white/80 hover:text-white transition font-medium group"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-pink-400 to-pink-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          <a
            href="#contact"
            className="ml-4 px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-pink-400 text-black font-semibold shadow-md hover:scale-105 hover:shadow-pink-500/40 transition-transform duration-300"
          >
            Register
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-pink-400 focus:outline-none"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            </svg>
          )}
        </button>

        {/* Mobile Slide Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="fixed top-0 right-0 w-4/5 h-full bg-black/95 backdrop-blur-xl border-l border-pink-500/10 shadow-2xl shadow-pink-500/20 z-50 flex flex-col p-8"
            >
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-pink-400 text-xl font-bold">Menu</h2>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-white/70 hover:text-pink-400 transition"
                >
                  ✕
                </button>
              </div>

              <div className="flex flex-col gap-6 text-lg">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={() => setMenuOpen(false)}
                    className="text-white/80 hover:text-pink-400 transition-all font-medium"
                  >
                    {link.label}
                  </a>
                ))}

                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-4 inline-block text-center px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-pink-400 text-black font-semibold shadow-lg hover:shadow-pink-500/40 hover:scale-105 transition-transform"
                >
                  Register
                </a>
              </div>

              {/* Soft glow effect */}
              <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-pink-500/10 blur-3xl rounded-full pointer-events-none"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
