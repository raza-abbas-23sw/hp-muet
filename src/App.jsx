import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Team from './components/Team';
import Sponsors from './components/Sponsors';
import FAQs from './components/FAQs';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Consistent Background for all sections */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-[#0a0a0f] to-[#1a0b1a] -z-10"></div>
      
      {/* Subtle Grid Overlay */}
      <div 
        className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] -z-10 opacity-20"
        style={{ backgroundPosition: 'center center' }}
      ></div>

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Timeline />
        <Team />
        <Sponsors />
        <FAQs />
        <Contact />
      </main>
      <Footer />

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl shadow-2xl shadow-pink-500/25 flex items-center justify-center text-white transition-all duration-300 hover:bg-pink-400"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}