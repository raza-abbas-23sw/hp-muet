import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { id: "hero", label: "Home" },
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
  const [activeSection, setActiveSection] = useState("hero");

  // Detect scroll for navbar background and active section
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      
      // Find active section based on scroll position
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        if (!section) continue;
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed navbar height
      const elementPosition = element.offsetTop - offset;
      
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
    setMenuOpen(false);
  };

  // Custom hamburger icon component
  const HamburgerIcon = ({ isOpen }) => (
    <div className="relative w-6 h-6 flex flex-col justify-between">
      <motion.span
        className="w-full h-0.5 bg-pink-400 rounded-full block"
        animate={{ 
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 8 : 0 
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="w-full h-0.5 bg-pink-400 rounded-full block"
        animate={{ opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="w-full h-0.5 bg-pink-400 rounded-full block"
        animate={{ 
          rotate: isOpen ? -45 : 0,
          y: isOpen ? -8 : 0 
        }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/90 backdrop-blur-xl shadow-lg shadow-pink-500/20 border-b border-pink-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        {/* Logo */}
        <motion.div 
          className="flex items-center gap-3 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => scrollToSection("hero")}
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-pink-500/30 to-pink-700/20 flex items-center justify-center border border-pink-400/20 shadow-inner shadow-pink-500/40">
            <span className="font-extrabold text-pink-400 text-sm sm:text-lg">HP</span>
          </div>
          <h1 className="text-base sm:text-lg font-semibold text-white">
            Hult Prize{" "}
            <span className="text-xs sm:text-sm font-normal text-pink-300 ml-1">
              MUET
            </span>
          </h1>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="relative text-white/80 hover:text-white transition font-medium group px-2 py-1"
            >
              {link.label}
              <span className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-pink-400 to-pink-600 rounded-full transition-all duration-300 ${
                activeSection === link.id ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
              {activeSection === link.id && (
                <motion.span
                  className="absolute inset-0 bg-pink-500/10 rounded-lg -z-10"
                  layoutId="activeSection"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}

          <motion.button
            onClick={() => scrollToSection("contact")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ml-2 px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-pink-400 text-black font-semibold shadow-md hover:shadow-pink-500/40 transition-all duration-300"
          >
            Register
          </motion.button>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-pink-400 focus:outline-none p-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <HamburgerIcon isOpen={menuOpen} />
        </motion.button>

        {/* Mobile Slide Menu */}
        <AnimatePresence>
          {menuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
                onClick={() => setMenuOpen(false)}
              />
              
              {/* Menu Panel */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed top-0 right-0 w-80 h-full bg-black/95 backdrop-blur-xl border-l border-pink-500/20 shadow-2xl shadow-pink-500/20 z-50 flex flex-col p-6"
              >
                {/* Header */}
                <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/10">
                  <h2 className="text-pink-400 text-xl font-bold">Navigation</h2>
                  <motion.button
                    onClick={() => setMenuOpen(false)}
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-pink-400 hover:bg-pink-500/20 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    ✕
                  </motion.button>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col gap-3 flex-1">
                  {navLinks.map((link) => (
                    <motion.button
                      key={link.id}
                      onClick={() => scrollToSection(link.id)}
                      className={`text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                        activeSection === link.id
                          ? "bg-pink-500/20 text-pink-400 border border-pink-500/30"
                          : "text-white/80 hover:text-white hover:bg-white/5"
                      }`}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {link.label}
                      {activeSection === link.id && (
                        <motion.div
                          className="w-1 h-6 bg-pink-400 rounded-full float-right"
                          layoutId="mobileActive"
                        />
                      )}
                    </motion.button>
                  ))}
                </nav>

                {/* Register Button */}
                <motion.button
                  onClick={() => scrollToSection("contact")}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-4 px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-pink-400 text-black font-semibold shadow-lg hover:shadow-pink-500/40 transition-all"
                >
                  Register Now
                </motion.button>

                {/* Footer */}
                <div className="mt-6 pt-4 border-t border-white/10">
                  <p className="text-white/60 text-sm text-center">
                    Hult Prize MUET
                  </p>
                </div>

                {/* Background Glow Effect */}
                <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-pink-500/10 blur-3xl rounded-full pointer-events-none"></div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}