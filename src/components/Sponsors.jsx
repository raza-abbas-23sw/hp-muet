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
    <section id="sponsors" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-pink-500/30 transition-all duration-300 flex flex-col items-center justify-center text-center min-h-[180px]"
            >
              {/* Sponsor Logo/Icon */}
              <div className="text-4xl mb-4">
                {sponsor.logo}
              </div>
              
              {/* Sponsor Name */}
              <h3 className="text-xl font-bold text-white mb-2">{sponsor.name}</h3>
              
              {/* Sponsor Description */}
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {sponsor.description}
              </p>

              {/* Visit Website Link */}
              <a
                href={sponsor.website}
                className="inline-flex items-center gap-1 text-pink-400 text-sm font-semibold hover:text-pink-300 transition-colors duration-300"
              >
                Visit Website
                <ArrowRight className="w-3 h-3" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}