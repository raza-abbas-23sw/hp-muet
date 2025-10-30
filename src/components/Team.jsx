import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Crown, BookOpen, Target, Mail, Linkedin, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Team() {
  const [activeTeam, setActiveTeam] = useState('leadership');

  const teams = {
    leadership: {
      name: 'Leadership',
      icon: <Crown className="w-4 h-4 md:w-5 md:h-5" />,
      members: [
        { 
          name: 'Ali Khan', 
          role: 'Campus Director', 
          initials: 'AK',
          description: 'Leading the Hult Prize initiative with 3+ years of experience in social entrepreneurship.',
          email: 'ali.khan@example.com',
          linkedin: '#'
        },
        { 
          name: 'Sara Ahmed', 
          role: 'Campus Director', 
          initials: 'SA',
          description: 'Passionate about sustainable development and student empowerment through innovation.',
          email: 'sara.ahmed@example.com',
          linkedin: '#'
        },
        { 
          name: 'Dr. Bilal Raza', 
          role: 'Faculty Adviser', 
          initials: 'BR',
          description: 'Professor of Business Innovation with expertise in startup development and social impact.',
          email: 'bilal.raza@example.com',
          linkedin: '#'
        }
      ]
    },
    operations: {
      name: 'Operations',
      icon: <Target className="w-4 h-4 md:w-5 md:h-5" />,
      members: [
        { name: 'Fatima Noor', role: 'Operations Lead', initials: 'FN' },
        { name: 'Omar Sheikh', role: 'Logistics Manager', initials: 'OS' },
        { name: 'Zainab Malik', role: 'Event Coordinator', initials: 'ZM' },
        { name: 'Hassan Rizwan', role: 'Volunteer Lead', initials: 'HR' }
      ]
    },
    marketing: {
      name: 'Marketing',
      icon: <BookOpen className="w-4 h-4 md:w-5 md:h-5" />,
      members: [
        { name: 'Ayesha Qureshi', role: 'Marketing Head', initials: 'AQ' },
        { name: 'Usman Ali', role: 'Social Media Manager', initials: 'UA' },
        { name: 'Rabia Hassan', role: 'Content Writer', initials: 'RH' },
        { name: 'Faisal Mahmood', role: 'Design Lead', initials: 'FM' }
      ]
    },
    technical: {
      name: 'Technical',
      icon: <Users className="w-4 h-4 md:w-5 md:h-5" />,
      members: [
        { name: 'Ahmed Farooq', role: 'Tech Lead', initials: 'AF' },
        { name: 'Mariam Javed', role: 'Web Developer', initials: 'MJ' },
        { name: 'Kamran Butt', role: 'IT Support', initials: 'KB' }
      ]
    },
    outreach: {
      name: 'Outreach',
      icon: <Mail className="w-4 h-4 md:w-5 md:h-5" />,
      members: [
        { name: 'Nadia Khan', role: 'Partnerships Lead', initials: 'NK' },
        { name: 'Rashid Ali', role: 'Sponsorship Manager', initials: 'RA' },
        { name: 'Sanaullah Khan', role: 'Community Outreach', initials: 'SK' }
      ]
    },
    judging: {
      name: 'Judging Panel',
      icon: <Crown className="w-4 h-4 md:w-5 md:h-5" />,
      members: [
        { name: 'Prof. Ahmed Raza', role: 'Head Judge', initials: 'AR' },
        { name: 'Dr. Fatima Shah', role: 'Industry Expert', initials: 'FS' },
        { name: 'Mr. Zubair Malik', role: 'Startup Mentor', initials: 'ZM' }
      ]
    }
  };

  const teamKeys = Object.keys(teams);
  const currentIndex = teamKeys.indexOf(activeTeam);

  const nextTeam = () => {
    const nextIndex = (currentIndex + 1) % teamKeys.length;
    setActiveTeam(teamKeys[nextIndex]);
  };

  const prevTeam = () => {
    const prevIndex = (currentIndex - 1 + teamKeys.length) % teamKeys.length;
    setActiveTeam(teamKeys[prevIndex]);
  };

  return (
    <section id="team" className="relative py-24 overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black">
      {/* Background Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 blur-3xl rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Meet Our <span className="text-pink-400">Team</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto px-4">
            Passionate students and faculty working together to drive innovation and create meaningful impact.
          </p>
        </motion.div>

        {/* Team Navigation - Improved for multiple teams */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mb-12"
        >
          {/* Navigation Arrows for Mobile */}
          <div className="flex justify-between items-center mb-4 lg:hidden">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevTeam}
              className="p-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            
            <span className="text-white font-semibold text-lg px-4">
              {teams[activeTeam].name}
            </span>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextTeam}
              className="p-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Scrollable Navigation for Tablet+ */}
          <div className="hidden lg:flex flex-wrap justify-center gap-3">
            {Object.entries(teams).map(([key, team]) => (
              <motion.button
                key={key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTeam(key)}
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 text-sm ${
                  activeTeam === key
                    ? 'bg-pink-500 text-black shadow-lg shadow-pink-500/25'
                    : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                }`}
              >
                {team.icon}
                {team.name}
              </motion.button>
            ))}
          </div>

          {/* Team Indicator Dots for Mobile */}
          <div className="flex justify-center gap-2 mt-4 lg:hidden">
            {teamKeys.map((key) => (
              <button
                key={key}
                onClick={() => setActiveTeam(key)}
                className={`w-2 h-2 rounded-full transition-all ${
                  activeTeam === key ? 'bg-pink-500 scale-125' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Team Members Grid - Centered and Responsive */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTeam}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className={`
              grid gap-6 w-full max-w-6xl
              ${teams[activeTeam].members.length === 1 ? 'grid-cols-1 max-w-sm' : ''}
              ${teams[activeTeam].members.length === 2 ? 'grid-cols-1 sm:grid-cols-2 max-w-2xl' : ''}
              ${teams[activeTeam].members.length === 3 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl' : ''}
              ${teams[activeTeam].members.length >= 4 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : ''}
            `}>
              {teams[activeTeam].members.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-pink-500/30 hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-300 flex flex-col items-center text-center"
                >
                  {/* Member Avatar */}
                  <div className="relative mb-4">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center text-white text-xl font-bold border border-pink-500/30 group-hover:scale-110 transition-transform duration-300">
                      {member.initials}
                    </div>
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-pink-500/20 blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Member Info */}
                  <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-pink-400 font-semibold text-sm mb-3">{member.role}</p>
                  
                  {/* Description for leadership team */}
                  {member.description && (
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {member.description}
                    </p>
                  )}

                  {/* Social Links for leadership team */}
                  {member.email && (
                    <div className="flex gap-3 pt-3 border-t border-white/10 mt-auto">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={`mailto:${member.email}`}
                        className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-pink-500 transition-colors duration-300"
                      >
                        <Mail className="w-4 h-4" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={member.linkedin}
                        className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-blue-600 transition-colors duration-300"
                      >
                        <Linkedin className="w-4 h-4" />
                      </motion.a>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Team Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-8"
        >
          <p className="text-gray-400 text-sm">
            Showing {teams[activeTeam].members.length} members of {teams[activeTeam].name} team
          </p>
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
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to Join Our Team?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We're always looking for passionate students to help drive the Hult Prize mission forward.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-pink-500 text-black font-semibold shadow-lg hover:bg-pink-400 transition-all duration-300"
            >
              Apply Now
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}