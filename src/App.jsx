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

  // Show back-to-top button when scrolling down
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
      {/* Consistent Background Pattern */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-[#0a0a0f] to-[#1a0b1a] -z-10"></div>
      
      {/* Subtle Grid Overlay */}
      <div 
        className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] -z-10 opacity-20"
        style={{ backgroundPosition: 'center center' }}
      ></div>
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-3/4 left-3/4 w-64 h-64 bg-blue-500/2 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

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
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl shadow-2xl shadow-pink-500/25 hover:shadow-pink-500/40 flex items-center justify-center text-white transition-all duration-300 group"
            whileHover={{ 
              scale: 1.1,
              y: -2
            }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            >
              <ArrowUp className="w-5 h-5" />
            </motion.div>
            
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 rounded-xl bg-pink-500 blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300 -z-10"></div>
          </motion.button>
        )}
      </AnimatePresence>

      
    </div>
  );
}