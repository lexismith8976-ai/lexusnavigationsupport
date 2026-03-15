import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingAI from '../components/FloatingAI';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: <EnvelopeIcon className="w-6 h-6" />,
      title: 'Email Us',
      details: ['support@lexusnav.com', 'sales@lexusnav.com'],
      action: 'mailto:support@lexusnav.com'
    },
    {
      icon: <PhoneIcon className="w-6 h-6" />,
      title: 'Call Us',
      details: ['+1 (800) 123-4567', 'Mon-Fri, 9am-6pm PT'],
      action: 'tel:+18001234567'
    },
    {
      icon: <MapPinIcon className="w-6 h-6" />,
      title: 'Visit Us',
      details: ['123 Luxury Avenue', 'Torrance, CA 90501'],
      action: 'https://maps.google.com'
    }
  ];

  const faqQuickLinks = [
    'How to activate navigation?',
    'Pricing plans',
    'Offline maps',
    'Vehicle compatibility'
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/10 via-transparent to-transparent" />
          <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-black to-transparent" />
        </div>

        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl lg:text-5xl font-display font-bold text-white mb-4">
              Get in
              <span className="text-[#D4AF37] block mt-2">Touch With Us</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Have questions about Lexus Navigation? We're here to help 24/7.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.action}
                target={item.action.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center text-[#D4AF37] mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                {item.details.map((detail, i) => (
                  <p key={i} className="text-gray-400 text-sm">{detail}</p>
                ))}
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-[#D4AF37]/20"
            >
              <h2 className="text-2xl font-display font-bold text-white mb-6">
                Send Us a
                <span className="text-[#D4AF37] block">Message</span>
              </h2>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg"
                >
                  <p className="text-green-400 text-sm">Thank you! Your message has been sent successfully.</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-[#D4AF37]/30 rounded-lg text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-[#D4AF37]/30 rounded-lg text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-[#D4AF37]/30 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                  >
                    <option value="">Select Subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="sales">Sales Question</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-black/50 border border-[#D4AF37]/30 rounded-lg text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none transition-colors resize-none"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#D4AF37] to-[#996515] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  Send Message
                </motion.button>
              </form>

              {/* AI Chat Link */}
              <div className="mt-6 text-center">
                <a
                  href="https://getchatsupport.live/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-[#D4AF37] hover:text-white transition-colors"
                >
                  <ChatBubbleLeftRightIcon className="w-5 h-5" />
                  <span>Or chat with our AI assistant instantly</span>
                </a>
              </div>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Map */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-[#D4AF37]/20 h-[300px] overflow-hidden">
                <div className="w-full h-full bg-gray-800 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPinIcon className="w-12 h-12 text-[#D4AF37] mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">Interactive Map</p>
                    <p className="text-white text-xs mt-1">123 Luxury Avenue, Torrance, CA</p>
                    <a 
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-[#D4AF37] text-sm hover:underline"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-[#D4AF37]/20">
                <h3 className="text-white font-semibold text-lg mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Monday - Friday</span>
                    <span className="text-white">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Saturday</span>
                    <span className="text-white">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Sunday</span>
                    <span className="text-white">Closed</span>
                  </div>
                </div>
                <p className="text-gray-500 text-xs mt-4">
                  *AI chat support available 24/7 for instant assistance
                </p>
              </div>

              {/* FAQ Quick Links */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-[#D4AF37]/20">
                <h3 className="text-white font-semibold text-lg mb-4">Quick Answers</h3>
                <div className="grid grid-cols-2 gap-2">
                  {faqQuickLinks.map((link, index) => (
                    <a
                      key={index}
                      href="/faq"
                      className="text-gray-400 hover:text-[#D4AF37] text-sm transition-colors"
                    >
                      • {link}
                    </a>
                  ))}
                </div>
                <a 
                  href="/faq"
                  className="inline-block mt-4 text-[#D4AF37] text-sm hover:underline"
                >
                  View all FAQs →
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#D4AF37]/10 to-transparent rounded-3xl p-8 border border-[#D4AF37]/20"
          >
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-display font-bold text-white mb-2">
                Stay Updated with
                <span className="text-[#D4AF37] block">Lexus Navigation</span>
              </h2>
              <p className="text-gray-400 text-sm mb-6">
                Subscribe to our newsletter for the latest features, updates, and exclusive offers.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-black/50 border border-[#D4AF37]/30 rounded-lg text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#996515] text-white font-semibold rounded-lg whitespace-nowrap"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingAI />
    </div>
  );
};

export default Contact;