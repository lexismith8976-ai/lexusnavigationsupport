import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingAI from '../components/FloatingAI';
import { 
  MapIcon, 
  DevicePhoneMobileIcon, 
  BellAlertIcon, 
  GlobeAltIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

const Features: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const allFeatures = [
    {
      category: 'Navigation',
      icon: <MapIcon className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      features: [
        {
          title: 'AI-Powered Routing',
          description: 'Advanced algorithms predict traffic and suggest optimal routes in real-time.',
          stats: '99.9% Accuracy'
        },
        {
          title: '3D City Modeling',
          description: 'Immersive maps with detailed landmarks and terrain.',
          stats: '500+ Cities'
        },
        {
          title: 'Real-Time Traffic',
          description: 'Live updates with predictive analytics to avoid congestion.',
          stats: '实时更新'
        },
        {
          title: 'Offline Maps',
          description: 'Download maps for navigation without internet connection.',
          stats: '190+ Countries'
        }
      ]
    },
    {
      category: 'Voice & Control',
      icon: <DevicePhoneMobileIcon className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      features: [
        {
          title: 'Voice Command',
          description: 'Natural language processing in 50+ languages.',
          stats: '50+ Languages'
        },
        {
          title: 'Gesture Control',
          description: 'Touch-free interaction with hand gestures.',
          stats: '0.1s Response'
        },
        {
          title: 'Smart Dashboard',
          description: 'Customizable interface with widgets.',
          stats: '4K Display'
        }
      ]
    },
    {
      category: 'Safety & Alerts',
      icon: <BellAlertIcon className="w-8 h-8" />,
      color: 'from-red-500 to-rose-500',
      features: [
        {
          title: 'Predictive Alerts',
          description: 'Smart notifications about weather and road conditions.',
          stats: '实时警报'
        },
        {
          title: 'Collision Warning',
          description: 'Advanced safety alerts for potential hazards.',
          stats: '99.9% Accurate'
        },
        {
          title: 'Speed Limit Alerts',
          description: 'Real-time speed limit notifications.',
          stats: '实时更新'
        }
      ]
    },
    {
      category: 'Connectivity',
      icon: <GlobeAltIcon className="w-8 h-8" />,
      color: 'from-green-500 to-teal-500',
      features: [
        {
          title: 'Cloud Sync',
          description: 'Seamless synchronization across all devices.',
          stats: '24/7 Sync'
        },
        {
          title: '5G Ready',
          description: 'Ultra-fast connectivity for real-time updates.',
          stats: '10x Faster'
        },
        {
          title: 'Smart Integration',
          description: 'Works with Apple CarPlay and Android Auto.',
          stats: '100% Compatible'
        }
      ]
    }
  ];

  const tabs = ['all', ...allFeatures.map(f => f.category.toLowerCase())];

  const filteredFeatures = activeTab === 'all' 
    ? allFeatures 
    : allFeatures.filter(f => f.category.toLowerCase() === activeTab);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/10 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl lg:text-5xl font-display font-bold text-white mb-4">
              Powerful
              <span className="text-[#D4AF37] block mt-2">Features</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Discover the cutting-edge technology that makes Lexus Navigation the ultimate driving companion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-[#D4AF37] text-black'
                    : 'bg-gray-900 text-gray-400 hover:text-[#D4AF37] border border-[#D4AF37]/20'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-6">
          {filteredFeatures.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="mb-12 last:mb-0"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center text-white`}>
                  {category.icon}
                </div>
                <h2 className="text-2xl font-display font-bold text-white">{category.category}</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-300"
                  >
                    <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{feature.description}</p>
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-semibold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                        {feature.stats}
                      </span>
                      <span className="text-[#D4AF37] text-sm">Learn more →</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AI Assistant Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#D4AF37]/20 to-transparent rounded-3xl p-8 border border-[#D4AF37]/30"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">
                  Need Help Choosing?
                  <span className="text-[#D4AF37] block">Ask Our AI Assistant</span>
                </h3>
                <p className="text-gray-400">
                  Get personalized feature recommendations based on your driving needs.
                </p>
              </div>
              <a
                href="https://getchatsupport.live/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#996515] text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
              >
                <ChatBubbleLeftRightIcon className="w-5 h-5" />
                <span>Chat with AI</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingAI />
    </div>
  );
};

export default Features;