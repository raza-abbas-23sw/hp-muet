import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowRight } from 'lucide-react';

export default function Sponsors() {
  const sponsors = [
    { 
      name: 'TechForGood', 
      logo: '🌍', 
      description: 'Leading social impact tech fund',
      website: '#'
    },
    { 
      name: 'GreenFund', 
      logo: '🌱', 
      description: 'Sustainable innovation investors',
      website: '#'
    },
    { 
      name: 'ACME Corp', 
      logo: '⚡', 
      description: 'Global innovation leader',
      website: '#'
    },
    { 
      name: 'UniSoc', 
      logo: '🎓', 
      description: 'University social enterprise fund',
      website: '#'
    },
    { 
      name: 'FutureVentures', 
      logo: '🚀', 
      description: 'Next-gen startup accelerator',
      website: '#'
    },
    { 
      name: 'EduTech', 
      logo: '💡', 
      description: 'Education technology pioneers',
      website: '#'
    },
    { 
      name: 'ImpactLab', 
      logo: '🔬', 
      description: 'Social innovation research hub',
      website: '#'
    },
    { 
      name: 'StartupNest', 
      logo: '🏠', 
      description: 'Incubation ecosystem',
      website: '#'
    }
  ];

  return (
    <section id="sponsors" className="relative py-24 overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black">
      {/* Background Effects */}
      <div className="absolute top-1/3 -left-20 w-72 h-72 bg-pink-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-1/3 -right-20 w-72 h-72 bg-purple-500/5 blur-3xl rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Our <span className="text-pink-400">Sponsors</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We're grateful to our incredible sponsors who make the Hult Prize journey possible 
            and help empower the next generation of social entrepreneurs.
          </p>
        </motion.div>

        {/* Sponsors Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              whileInView={{ scale: 1, opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-pink-500/30 hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-300 flex flex-col items-center justify-center text-center min-h-[180px]"
            >
              {/* Sponsor Logo/Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {sponsor.logo}
              </div>
              
              {/* Sponsor Name */}
              <h3 className="text-xl font-bold text-white mb-2">{sponsor.name}</h3>
              
              {/* Sponsor Description */}
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {sponsor.description}
              </p>

              {/* Visit Website Link */}
              <motion.a
                href={sponsor.website}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-1 text-pink-400 text-sm font-semibold hover:text-pink-300 transition-colors duration-300"
              >
                Visit Website
                <ArrowRight className="w-3 h-3" />
              </motion.a>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-pink-500/10 blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 rounded-2xl p-8 backdrop-blur-md max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-pink-500/20 rounded-xl">
                  <Heart className="w-8 h-8 text-pink-400" />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Support Our Mission
                  </h3>
                  <p className="text-gray-300">
                    Join these amazing organizations in empowering student innovation.
                  </p>
                </div>
              </div>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-3 rounded-full bg-pink-500 text-black font-semibold shadow-lg hover:bg-pink-400 transition-all duration-300 whitespace-nowrap"
              >
                Become a Sponsor
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}