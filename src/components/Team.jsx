import React from 'react'
import { motion } from 'framer-motion'

export default function Team() {
  const members = [
    { name: 'Ali Khan', role: 'Campus Director' },
    { name: 'Sara Ahmed', role: 'Operations Lead' },
    { name: 'Bilal R.', role: 'Marketing' },
  ]

  return (
    <section id="team" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-bold text-white">Organizing Team</h3>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {members.map((m, i) => (
            <motion.div key={i} whileHover={{ y: -6 }} className="p-6 rounded-lg bg-black/50 border border-white/5 text-center">
              <div className="w-28 h-28 mx-auto rounded-full bg-white/5 flex items-center justify-center text-pink-300 font-bold text-xl">
                {m.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="mt-4 text-white font-semibold">{m.name}</div>
              <div className="mt-1 text-gray-300 text-sm">{m.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
