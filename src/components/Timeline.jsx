import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Trophy, Users, Clock, Award } from 'lucide-react';

export default function Timeline() {
  const timelineItems = [
    {
      date: 'Nov 1, 2025',
      title: 'Applications Open',
      description: 'Registration begins for the new season. Teams can start submitting their groundbreaking ideas.',
      icon: <Users className="w-5 h-5" />,
      phase: 'Phase 1'
    },
    {
      date: 'Dec 15, 2025',
      title: 'Submission Deadline',
      description: 'Final day to submit your team application and project proposal for campus-level consideration.',
      icon: <Clock className="w-5 h-5" />,
      phase: 'Phase 2'
    },
    {
      date: 'Jan 20, 2026',
      title: 'Campus Finals',
      description: 'On-campus competitions where teams pitch their ideas to expert judges and industry leaders.',
      icon: <MapPin className="w-5 h-5" />,
      phase: 'Phase 3'
    },
    {
      date: 'Mar 10, 2026',
      title: 'Regional Rounds',
      description: 'Winning teams from campuses compete in regional finals across major global hubs.',
      icon: <Trophy className="w-5 h-5" />,
      phase: 'Phase 4'
    },
    {
      date: 'Jun 15, 2026',
      title: 'Global Accelerator',
      description: 'Top teams participate in an intensive startup accelerator program with world-class mentors.',
      icon: <Award className="w-5 h-5" />,
      phase: 'Phase 5'
    },
    {
      date: 'Sep 2026',
      title: 'Global Finals',
      description: 'The ultimate competition where finalists pitch for the $1M grand prize at the United Nations.',
      icon: <Calendar className="w-5 h-5" />,
      phase: 'Grand Finale'
    }
  ];

  return (
    <section id="timeline" className="relative py-24 overflow-hidden">
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
            Competition <span className="text-pink-400">Timeline</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Follow the journey from campus pitches to the global stage. Each phase brings new opportunities for growth and impact.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-500/20 via-pink-500/40 to-pink-500/20 hidden lg:block"></div>
          
          <div className="space-y-12 lg:space-y-8">
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row items-start lg:items-center ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content Card */}
                <div className={`flex-1 ${
                  index % 2 === 0 
                    ? 'lg:pr-12 lg:text-right' 
                    : 'lg:pl-12'
                } lg:w-1/2 mb-4 lg:mb-0`}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-md border border-pink-500/20 rounded-2xl p-6 hover:border-pink-500/40 transition-all duration-300"
                  >
                    {/* Phase Badge */}
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                      item.phase === 'Grand Finale' 
                        ? 'bg-pink-500/20 text-pink-300 border border-pink-500/30'
                        : 'bg-white/10 text-gray-300 border border-white/10'
                    }`}>
                      {item.phase}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-3 lg:justify-start">
                      <span className="flex items-center justify-center w-8 h-8 bg-pink-500/20 rounded-full">
                        {item.icon}
                      </span>
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-3 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="text-pink-400 font-semibold text-sm flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {item.date}
                    </div>
                  </motion.div>
                </div>

                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 lg:flex items-center justify-center w-12 h-12 z-10 hidden">
                  <div className="w-6 h-6 bg-pink-500 rounded-full border-4 border-black shadow-lg shadow-pink-500/30">
                    <div className="w-full h-full rounded-full bg-pink-400"></div>
                  </div>
                </div>

                {/* Date for Desktop */}
                <div className={`flex-1 ${
                  index % 2 === 0 
                    ? 'lg:pl-12 lg:text-left' 
                    : 'lg:pr-12 lg:text-right'
                } lg:w-1/2 hidden lg:block`}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    className="text-2xl font-bold text-white bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-white/5"
                  >
                    {item.date}
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}