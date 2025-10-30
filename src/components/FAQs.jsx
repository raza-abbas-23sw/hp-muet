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
    }
  ];

  return (
    <section id="faqs" className="relative py-24 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
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
          </p>
        </motion.div>

        {/* FAQ Grid */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden transition-all duration-300"
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
                  </div>
                </div>
                <div className="flex-shrink-0 w-6 h-6 bg-pink-500/20 rounded-full flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="w-4 h-4 text-pink-400" />
                  ) : (
                    <Plus className="w-4 h-4 text-pink-400" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}