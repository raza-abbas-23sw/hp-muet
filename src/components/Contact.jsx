import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, User, MessageSquare, HelpCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Thank you for your message! We will get back to you soon.');
    } catch (error) {
      alert('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      details: 'hult@youruniversity.edu',
      description: 'Send us your questions anytime',
      link: 'mailto:hult@youruniversity.edu'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Available during business hours',
      link: 'tel:+15551234567'
    }
  ];

  const commonSubjects = [
    'General Inquiry',
    'Partnership Opportunity',
    'Event Information',
    'Volunteer Opportunity',
    'Sponsorship Query',
    'Technical Support',
    'Other'
  ];

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
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
            Get In <span className="text-pink-400">Touch</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have questions about the Hult Prize? Reach out to us through the form below 
            or contact us directly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                className="block p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:border-pink-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center text-pink-400">
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {method.title}
                    </h3>
                    <p className="text-pink-400 font-medium mb-1">
                      {method.details}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {method.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 transition-all duration-300">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Send Us a Message
                </h3>
                <p className="text-gray-300">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-pink-500 transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-pink-500 transition-all duration-300"
                        placeholder="your.email@university.edu"
                      />
                    </div>
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <div className="relative">
                    <HelpCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white focus:border-pink-500 transition-all duration-300 appearance-none"
                    >
                      <option value="">Select a subject</option>
                      {commonSubjects.map((subject) => (
                        <option key={subject} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-pink-500 transition-all duration-300 resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold py-4 px-6 rounded-xl shadow-lg shadow-pink-500/25 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}