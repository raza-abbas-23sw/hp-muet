import React from 'react'

export default function Sponsors() {
  const brands = ['ACME', 'GreenFund', 'UniSoc', 'TechForGood']
  return (
    <section id="sponsors" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-bold text-white">Sponsors & Partners</h3>
        <div className="mt-6 flex flex-wrap gap-6 items-center">
          {brands.map((b, i) => (
            <div key={i} className="px-6 py-4 bg-white/5 rounded-md border border-white/5 min-w-[120px] text-center">{b}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
