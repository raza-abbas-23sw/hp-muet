import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle, HelpCircle, BookOpen } from 'lucide-react';

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    { 
      question: 'Who can participate in the Hult Prize?', 
      answer: 'Any currently enrolled university student (undergraduate or graduate) can form a team and participate. Teams typically consist of 2-5 students from the same or different universities.',
      category: 'Eligibility'
    },
    { 
      question: 'How many team members are required?', 
      answer: 'We recommend teams of 2-5 students. This allows for diverse skills and perspectives while ensuring effective collaboration. Solo participants are encouraged to find teammates through our networking events.',
      category: 'Team Formation'
    },
    { 
      question: 'Is there a registration fee?', 
      answer: 'No — participation in campus events is completely free. The Hult Prize Foundation is committed to making social entrepreneurship accessible to all students regardless of their financial background.',
      category: 'Registration'
    },
    { 
      question: 'What kind of ideas are you looking for?', 
      answer: 'We\'re looking for innovative, scalable, and sustainable business ideas that address pressing global challenges. Your solution should be financially viable while creating positive social or environmental impact.',
      category: 'Projects'
    },
    { 
      question: 'How do I get started with my application?', 
      answer: 'Start by forming your team and developing your idea. Then register on our platform, attend orientation sessions, and submit your proposal before the deadline. We provide resources and mentorship throughout the process.',
      category: 'Application'
    },
    { 
      question: 'What support do participants receive?', 
      answer: 'Teams receive mentorship from industry experts, workshops on business development, access to our global network, and opportunities to pitch to investors. Campus finalists also get additional coaching for regional rounds.',
      category: 'Support'
    },
    { 
      question: 'Can international students participate?', 
      answer: 'Absolutely! The Hult Prize welcomes students from all nationalities and backgrounds. In fact, diverse teams often bring unique perspectives that lead to more innovative solutions.',
      category: 'Eligibility'
    },
    { 
      question: 'What happens after the campus finals?', 
      answer: 'Winning teams from campus events advance to regional finals around the world. Regional winners then participate in a global accelerator program and compete for the $1M grand prize at the Global Finals.',
      category: 'Competition'
    }
  ];

  const categories = [...new Set(faqs.map(faq => faq.category))];

  return (
    <section id="faqs" className="relative py-24 overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black">
      {/* Background Effects */}
      <div className="absolute top-20 -right-20 w-72 h-72 bg-pink-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 -left-20 w-72 h-72 bg-purple-500/5 blur-3xl rounded-full"></div>
      
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-pink-500/20 border border-pink-500/30 rounded-full px-4 py-2 mb-4">
            <HelpCircle className="w-4 h-4 text-pink-400" />
            <span className="text-pink-400 text-sm font-semibold">FAQs</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Frequently Asked <span className="text-pink-400">Questions</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Find answers to common questions about participating in the Hult Prize. 
            Can't find what you're looking for? Reach out to our team.
          </p>
        </motion.div>

        {/* FAQ Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-pink-500/20 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between gap-4 hover:bg-white/5 transition-colors duration-300"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className="flex-shrink-0 w-8 h-8 bg-pink-500/20 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-4 h-4 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white text-left">
                      {faq.question}
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="inline-block px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300">
                        {faq.category}
                      </span>
                    </div>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 w-6 h-6 bg-pink-500/20 rounded-full flex items-center justify-center"
                >
                  {openIndex === index ? (
                    <Minus className="w-4 h-4 text-pink-400" />
                  ) : (
                    <Plus className="w-4 h-4 text-pink-400" />
                  )}
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 ml-12 border-t border-white/10 pt-4">
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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
          <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 rounded-2xl p-8 backdrop-blur-md">
            <div className="flex items-center gap-4 justify-center mb-4">
              <MessageCircle className="w-8 h-8 text-pink-400" />
              <h3 className="text-2xl font-bold text-white">
                Still Have Questions?
              </h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our team is here to help you succeed. Reach out to us for any questions about the competition, 
              your application, or getting involved.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:info@hultprize.org"
                className="px-6 py-3 rounded-full bg-pink-500 text-black font-semibold shadow-lg hover:bg-pink-400 transition-all duration-300"
              >
                Contact Us
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#resources"
                className="px-6 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition-all duration-300"
              >
                View Resources
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}