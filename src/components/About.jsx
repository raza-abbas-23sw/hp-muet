import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Users, Rocket } from "lucide-react";

const stats = [
  {
    icon: <Lightbulb className="w-6 h-6 text-pink-400" />,
    title: "Impact",
    desc: "Empowering students to launch ventures tackling global challenges.",
  },
  {
    icon: <Users className="w-6 h-6 text-pink-400" />,
    title: "Mentorship",
    desc: "Guidance from world-class experts, alumni, and entrepreneurs.",
  },
  {
    icon: <Rocket className="w-6 h-6 text-pink-400" />,
    title: "Funding",
    desc: "$1M seed funding for the global winner to scale their startup.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black"
    >
      {/* Background glow */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-pink-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            About the <span className="text-pink-400">Hult Prize</span>
          </h2>
          <p className="mt-6 text-gray-300 leading-relaxed max-w-xl">
            The <span className="text-pink-400 font-semibold">Hult Prize</span> challenges
            students worldwide to transform bold startup ideas into scalable
            social enterprises. Each year, millions of participants work toward
            solving a global issue — with mentorship, workshops, and
            opportunities to win <span className="text-pink-300">$1M in seed funding</span>.
          </p>

          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            {stats.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="bg-white/5 border border-pink-500/10 backdrop-blur-md rounded-2xl p-6 hover:border-pink-500/30 hover:shadow-lg hover:shadow-pink-500/20 transition-all"
              >
                <div className="mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image / Media Section */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-pink-500/20 border border-pink-500/20">
            <img
              src="/about.png"
              alt="Hult Prize Event"
              className="w-full h-[420px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-500/20 blur-2xl rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
}
