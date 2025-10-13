import React from 'react'

export default function FAQs() {
  const q = [
    { q: 'Who can participate?', a: 'Any university student team (undergrad or grad).' },
    { q: 'How many members?', a: 'Teams of 2-5 students are recommended.' },
    { q: 'Is there a registration fee?', a: 'No — campus events are typically free.' },
  ]
  return (
    <section id="faqs" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-bold text-white">Frequently Asked Questions</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {q.map((qa, i) => (
            <details key={i} className="bg-black/40 p-4 rounded-md border border-white/5">
              <summary className="cursor-pointer font-semibold text-white">{qa.q}</summary>
              <div className="mt-2 text-gray-300">{qa.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
