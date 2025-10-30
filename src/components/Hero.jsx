import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-black text-white overflow-hidden"
    >

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Empowering <span className="text-pink-500">Innovation</span> for a
            Better World
          </h1>

          <p className="text-gray-300 text-lg max-w-lg">
            The Hult Prize challenges university students worldwide to build
            sustainable startups tackling humanity’s toughest problems — with a
            chance to win <span className="text-pink-400 font-semibold">$1M</span> in
            seed funding.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#about"
              className="px-6 py-3 rounded-full bg-pink-500 text-black font-semibold shadow-lg hover:bg-pink-400 transition"
            >
              Register
            </a>
            <a
              href="#timeline"
              className="px-6 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition"
            >
              View Timeline
            </a>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative w-full md:w-[90%] lg:w-[100%]">
            <img
              src="/hero img.png"
              alt="Hult Prize Startup Team"
              className="rounded-3xl shadow-2xl object-cover w-full h-auto border border-pink-500/20"
            />
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-3xl bg-pink-500/10 blur-3xl -z-10"></div>
          </div>
        </motion.div>
      </div>

      {/* Floating animation effect */}
      <motion.div
        className="absolute top-20 left-10 w-24 h-24 bg-pink-500/20 rounded-full blur-3xl"
        animate={{
          y: [0, -20, 0],
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-32 h-32 bg-pink-400/20 rounded-full blur-3xl"
        animate={{
          y: [0, 30, 0],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
}
