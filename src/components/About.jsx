import React from 'react'
import { motion } from 'framer-motion'
import StatCard from './StatCard'

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl font-bold text-white">About the Hult Prize</h2>
          <p className="mt-4 text-gray-300 max-w-3xl">
            The Hult Prize challenges students to create social enterprises that drive large-scale change. Campus competitions lead to regional summits and the global final with seed funding awarded to the winner.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard title="Impact" desc="Real-world projects solving social problems" />
          <StatCard title="Mentorship" desc="Access to industry mentors & alumni" />
          <StatCard title="Funding" desc="$1M in seed funding at global final" />
        </div>
      </div>
    </section>
  )
}
