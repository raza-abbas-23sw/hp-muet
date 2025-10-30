import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center text-white overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Empowering <span className="text-pink-500">Innovation</span> for a
            Better World
          </h1>

          <p className="text-gray-300 text-lg max-w-lg">
            The Hult Prize challenges university students worldwide to build
            sustainable startups tackling humanity's toughest problems — with a
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative w-full md:w-[90%] lg:w-[100%]">
            <img
              src="/hero img.png"
              alt="Hult Prize Startup Team"
              className="rounded-3xl shadow-2xl object-cover w-full h-auto border border-pink-500/20"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}