import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-black/50 p-8 rounded-xl border border-white/5">
          <h3 className="text-2xl font-bold text-white">Get In Touch / Register</h3>
          <p className="mt-2 text-gray-300">Email us at <span className="text-white font-medium">hult@youruniversity.edu</span> or fill the quick form.</p>

          <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input placeholder="Full name" className="p-3 rounded-md bg-black/60 border border-white/5 text-white" />
            <input placeholder="Email" className="p-3 rounded-md bg-black/60 border border-white/5 text-white" />
            <input placeholder="University" className="p-3 rounded-md bg-black/60 border border-white/5 text-white" />
            <select className="p-3 rounded-md bg-black/60 border border-white/5 text-white">
              <option>Interested role: Team Member</option>
              <option>Campus Volunteer</option>
              <option>Mentor</option>
            </select>
            <textarea placeholder="Short idea (optional)" className="md:col-span-2 p-3 rounded-md bg-black/60 border border-white/5 text-white" rows={4}></textarea>
            <button type="button" className="md:col-span-2 px-6 py-3 rounded-full bg-pink-500 text-black font-semibold">Submit / Register</button>
          </form>
        </div>
      </div>
    </section>
  )
}
