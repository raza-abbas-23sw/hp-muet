import React from 'react'
import { motion } from 'framer-motion'

export default function Timeline() {
  const items = [
    { date: 'Nov 1, 2025', title: 'Applications Open' },
    { date: 'Dec 15, 2025', title: 'Submission Deadline' },
    { date: 'Jan 20, 2026', title: 'Campus Finals' },
    { date: 'Mar 10, 2026', title: 'Regional Rounds' },
  ]
  return (
    <section id="timeline" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-bold text-white">Timeline</h3>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((it, idx) => (
            <motion.div key={idx} initial={{ x: -10, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.08 }} className="p-6 rounded-lg bg-black/40 border border-white/5">
              <div className="text-pink-300 font-semibold">{it.date}</div>
              <div className="mt-2 text-gray-200 font-medium">{it.title}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
