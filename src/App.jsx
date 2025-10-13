import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Timeline from './components/Timeline'
import Team from './components/Team'
import Sponsors from './components/Sponsors'
import FAQs from './components/FAQs'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#07070a] to-black text-white">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <About />
        <Timeline />
        <Team />
        <Sponsors />
        <FAQs />
        <Contact />
      </main>
      <footer className="mt-12 py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Hult Prize — Campus • Built with ❤️
      </footer>
    </div>
  )
}
