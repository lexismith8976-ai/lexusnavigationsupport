import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ChatBubbleLeftRightIcon, 
  ChevronDownIcon,
  HomeIcon,
  PhotoIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';
import FloatingAI from '../components/FloatingAI';

const FAQ: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const faqCategories = [
    {
      category: 'Getting Started',
      icon: '🚀',
      questions: [
        {
          q: 'How do I activate Lexus Navigation?',
          a: 'Simply sign up for an account, choose your plan, and download the app. You can start your 7-day free trial immediately with no credit card required.'
        },
        {
          q: 'Is there a free trial available?',
          a: 'Yes! We offer a 7-day free trial on all plans. Experience all premium features before committing to a subscription.'
        },
        {
          q: 'Can I use it on multiple devices?',
          a: 'Absolutely! Your account can be used on up to 3 devices simultaneously. Perfect for families with multiple vehicles.'
        },
        {
          q: 'What platforms are supported?',
          a: 'Lexus Navigation works on iOS, Android, and all major car infotainment systems including Apple CarPlay and Android Auto.'
        }
      ]
    },
    {
      category: 'Features & Functionality',
      icon: '✨',
      questions: [
        {
          q: 'How does AI-powered routing work?',
          a: 'Our AI analyzes real-time traffic data, historical patterns, weather conditions, and your personal driving preferences to suggest the most efficient routes. It learns from your choices to improve over time.'
        },
        {
          q: 'Are maps updated regularly?',
          a: 'Yes! Maps are updated in real-time with crowdsourced data and official mapping sources. You always have the latest roads, POIs, and traffic information.'
        },
        {
          q: 'Does it work offline?',
          a: 'Yes! You can download entire regions for offline use. Perfect for areas with limited connectivity or when traveling abroad.'
        },
        {
          q: 'What languages are supported for voice commands?',
          a: 'We support over 50 languages and dialects with natural language processing. The system understands context and can handle complex commands.'
        }
      ]
    },
    {
      category: 'Privacy & Security',
      icon: '🔒',
      questions: [
        {
          q: 'Is my location data private?',
          a: 'Your privacy is our priority. All location data is encrypted end-to-end. You have full control over what data is shared and can delete your history anytime.'
        },
        {
          q: 'Do you sell my data?',
          a: 'Never! We do not sell any user data. Your information is used only to improve your navigation experience.'
        },
        {
          q: 'Can I use the app anonymously?',
          a: 'Yes! You can use basic navigation features without creating an account. Premium features require an account for synchronization.'
        }
      ]
    },
    {
      category: 'Billing & Plans',
      icon: '💰',
      questions: [
        {
          q: 'What payment methods do you accept?',
          a: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay/Google Pay.'
        },
        {
          q: 'Can I change my plan anytime?',
          a: 'Absolutely! You can upgrade, downgrade, or cancel your plan at any time. Changes take effect immediately.'
        },
        {
          q: 'Is there a student discount?',
          a: 'Yes! Students get 25% off with valid student ID. Contact our support team to verify your student status.'
        },
        {
          q: 'Do you offer family plans?',
          a: 'Yes! Our Family plan supports up to 5 users with shared benefits and a special discounted rate.'
        }
      ]
    },
    {
      category: 'Technical Support',
      icon: '🔧',
      questions: [
        {
          q: 'How do I contact support?',
          a: 'You can reach us 24/7 via live chat, email at support@lexusnav.com, or phone at +1 (800) 123-4567. Our AI assistant is also available for instant help.'
        },
        {
          q: 'What if the navigation is inaccurate?',
          a: 'You can report issues directly through the app. Our team reviews reports and updates maps accordingly. We also have a community feedback system.'
        },
        {
          q: 'How do I reset the system?',
          a: 'Go to Settings > System > Reset. You can choose between soft reset (clears cache) or factory reset (removes all data).'
        },
        {
          q: 'Does it work in tunnels?',
          a: 'Yes! Our system uses inertial navigation and dead reckoning to maintain position even when GPS signal is lost in tunnels or parking garages.'
        }
      ]
    },
    {
      category: 'Integration & Compatibility',
      icon: '🔄',
      questions: [
        {
          q: 'Can I sync with my calendar?',
          a: 'Yes! Integrate with Google Calendar, Apple Calendar, or Outlook to automatically get directions to your appointments.'
        },
        {
          q: 'Does it work with electric vehicles?',
          a: 'Absolutely! We provide EV-specific routing with charging station locations, battery range monitoring, and charge time calculations.'
        },
        {
          q: 'Can I share my ETA with others?',
          a: 'Yes! Share your live location and ETA with friends or family. They can track your journey in real-time.'
        }
      ]
    }
  ];

  const toggleItem = (question: string) => {
    setOpenItems(prev => 
      prev.includes(question) 
        ? prev.filter(q => q !== question)
        : [...prev, question]
    );
  };

  const filteredFaqs = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
           q.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  const navItems = [
    { label: 'Home', path: '/', icon: <HomeIcon className="w-4 h-4" /> },
    { label: 'Gallery', path: '/gallery', icon: <PhotoIcon className="w-4 h-4" /> },
    { label: 'Pricing', path: '/pricing', icon: <CurrencyDollarIcon className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Custom Header for FAQ Page */}
      <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-xl border-b border-[#D4AF37]/20 py-3">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-[#D4AF37] to-[#996515] rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">L</span>
              </div>
              <span className="text-white font-display font-bold text-sm">LEXUS NAV</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map(item => (
                <button
                  key={item.label}
                  onClick={() => navigate(item.path)}
                  className="flex items-center space-x-1 text-sm text-gray-300 hover:text-[#D4AF37] transition-colors"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
              <button
                onClick={() => window.open('https://getchatsupport.live/', '_blank')}
                className="flex items-center space-x-2 px-4 py-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full text-[#D4AF37] text-sm"
              >
                <ChatBubbleLeftRightIcon className="w-4 h-4" />
                <span>Ask AI</span>
              </button>
              <button
                onClick={() => navigate('/login')}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#D4AF37] to-[#996515] text-white text-sm rounded-full"
              >
                <UserCircleIcon className="w-4 h-4" />
                <span>Login</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2 bg-[#D4AF37]/10 rounded-lg"
            >
              {isMenuOpen ? <XMarkIcon className="w-5 h-5" /> : <Bars3Icon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden overflow-hidden"
              >
                <div className="pt-4 pb-6 space-y-3">
                  {navItems.map(item => (
                    <button
                      key={item.label}
                      onClick={() => {
                        navigate(item.path);
                        setIsMenuOpen(false);
                      }}
                      className="flex items-center space-x-2 w-full py-2 px-4 text-gray-300 hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 rounded-lg"
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </button>
                  ))}
                  <button
                    onClick={() => window.open('https://getchatsupport.live/', '_blank')}
                    className="w-full flex items-center justify-center space-x-2 py-3 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-lg text-[#D4AF37]"
                  >
                    <ChatBubbleLeftRightIcon className="w-4 h-4" />
                    <span>Ask AI Assistant</span>
                  </button>
                  <button
                    onClick={() => navigate('/login')}
                    className="w-full py-3 bg-gradient-to-r from-[#D4AF37] to-[#996515] text-white rounded-lg"
                  >
                    Login / Sign Up
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 lg:px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl lg:text-4xl font-display font-bold text-white mb-2">
              Frequently Asked
              <span className="text-[#D4AF37] block">Questions</span>
            </h1>
            <p className="text-gray-400 text-sm max-w-2xl mx-auto">
              Find answers to common questions about Lexus Navigation
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-md mx-auto mb-8"
          >
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-3 bg-gray-900/50 border border-[#D4AF37]/30 rounded-xl text-white text-sm placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none transition-colors"
              />
            </div>
          </motion.div>

          {/* FAQ Categories */}
          <div className="space-y-6 max-w-3xl mx-auto">
            {filteredFaqs.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="bg-gray-900/30 rounded-xl border border-[#D4AF37]/20 overflow-hidden"
              >
                <div className="p-4 bg-gradient-to-r from-[#D4AF37]/10 to-transparent border-b border-[#D4AF37]/20">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl">{category.icon}</span>
                    <h2 className="text-lg font-semibold text-white">{category.category}</h2>
                    <span className="text-xs text-gray-500 ml-auto">
                      {category.questions.length} questions
                    </span>
                  </div>
                </div>

                <div className="divide-y divide-[#D4AF37]/10">
                  {category.questions.map((item, index) => (
                    <div key={index} className="p-4">
                      <button
                        onClick={() => toggleItem(item.q)}
                        className="w-full flex items-start justify-between text-left"
                      >
                        <span className="text-sm font-medium text-white pr-4">{item.q}</span>
                        <ChevronDownIcon 
                          className={`w-4 h-4 text-[#D4AF37] transition-transform duration-300 flex-shrink-0 ${
                            openItems.includes(item.q) ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {openItems.includes(item.q) && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <p className="text-gray-400 text-xs mt-3 leading-relaxed">
                              {item.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Still Have Questions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-10"
          >
            <p className="text-gray-400 text-sm mb-4">Still have questions?</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => window.open('https://getchatsupport.live/', '_blank')}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-[#D4AF37]/10 border-2 border-[#D4AF37]/30 rounded-full text-[#D4AF37] hover:bg-[#D4AF37]/20 transition-all duration-300"
              >
                <ChatBubbleLeftRightIcon className="w-5 h-5" />
                <span className="text-sm font-semibold">Ask AI Assistant</span>
              </button>
              <a
                href="mailto:support@lexusnav.com"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-900 border border-[#D4AF37]/30 rounded-full text-white hover:bg-gray-800 transition-all duration-300"
              >
                <EnvelopeIcon className="w-5 h-5" />
                <span className="text-sm">Email Support</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black border-t border-[#D4AF37]/20 py-6">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-600 text-xs mb-3 md:mb-0">
              © 2024 Lexus Navigation. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-[#D4AF37] text-xs transition-colors">Privacy</a>
              <a href="#" className="text-gray-600 hover:text-[#D4AF37] text-xs transition-colors">Terms</a>
              <a href="#" className="text-gray-600 hover:text-[#D4AF37] text-xs transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating AI Chat Button */}
      <FloatingAI />
    </div>
  );
};

export default FAQ;