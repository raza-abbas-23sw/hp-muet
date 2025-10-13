import React from 'react'
import { motion } from 'framer-motion'

export default function StatCard({ title, desc }) {
  return (
    <motion.div whileHover={{ y: -6 }} className="p-6 rounded-xl bg-black/40 border border-white/5">
      <div className="text-pink-300 font-semibold">{title}</div>
      <div className="mt-3 text-gray-300">{desc}</div>
    </motion.div>
  )
}
