import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Team', href: '#team' },
    { name: 'Sponsors', href: '#sponsors' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-4 h-4" />, href: '#', name: 'Facebook' },
    { icon: <Twitter className="w-4 h-4" />, href: '#', name: 'Twitter' },
    { icon: <Instagram className="w-4 h-4" />, href: '#', name: 'Instagram' },
    { icon: <Linkedin className="w-4 h-4" />, href: '#', name: 'LinkedIn' },
  ];

  return (
    <footer className="relative bg-black border-t border-white/10">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-950 to-black opacity-60"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Hult <span className="text-pink-400">Prize</span>
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">
              Empowering university students worldwide to create sustainable startups 
              that solve humanity's most pressing challenges.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-gray-300 hover:bg-pink-500 hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + (index * 0.05) }}
                >
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-pink-400 transition-colors duration-300 flex items-center gap-2 group text-sm sm:text-base"
                  >
                    <span className="w-1 h-1 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-pink-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">hult@youruniversity.edu</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-pink-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">+1 (555) 123-4567</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-gray-400 text-sm text-center sm:text-left order-2 sm:order-1"
            >
              © {new Date().getFullYear()} Hult Prize at Your University. All rights reserved.
            </motion.p>
            
            <div className="flex items-center gap-4 sm:gap-6 text-sm order-1 sm:order-2">
              <motion.a
                href="#privacy"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#terms"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </motion.a>

              {/* Scroll to Top Button - Moved to bottom bar for better mobile layout */}
              <motion.button
                onClick={scrollToTop}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 sm:w-10 sm:h-10 bg-pink-500 rounded-lg flex items-center justify-center text-white hover:bg-pink-600 transition-all duration-300"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-3 h-3 sm:w-4 sm:h-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}