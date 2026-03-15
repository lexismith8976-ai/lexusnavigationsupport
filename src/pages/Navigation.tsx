import React, { useState } from 'react';
import { motion } from 'framer-motion';
// ❌ Link hata diya - use nahi ho raha
// ❌ useNavigate hata diya - use nahi ho raha
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingAI from '../components/FloatingAI';
import { 
  ChatBubbleLeftRightIcon,
  MapPinIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';

const Navigation: React.FC = () => {
  // ❌ navigate hata diya - use nahi ho raha
  const [selectedDest, setSelectedDest] = useState('Lexus Tower');
  const [isNavigating, setIsNavigating] = useState(false);

  const destinations = [
    { name: 'Lexus Tower', address: '123 Luxury Ave, NY', distance: '2.4 mi', time: '8 min' },
    { name: 'Ritz-Carlton', address: '10420 Constellation Blvd, LA', distance: '5.7 mi', time: '15 min' },
    { name: 'Malibu Beach', address: '23000 Pacific Coast Hwy', distance: '15.2 mi', time: '28 min' },
    { name: 'Beverly Hills', address: '444 N Rexford Dr', distance: '3.1 mi', time: '10 min' },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl lg:text-5xl font-display font-bold text-white mb-4">
              Advanced
              <span className="text-[#D4AF37] block mt-2">Navigation System</span>
            </h1>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-1"
            >
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-[#D4AF37]/20">
                <div className="mb-4">
                  <div className="relative">
                    <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                      type="text"
                      placeholder="Search destination"
                      className="w-full pl-9 pr-4 py-3 bg-black/50 border border-[#D4AF37]/30 rounded-xl text-white text-sm focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {destinations.map((dest) => (
                    <button
                      key={dest.name}
                      onClick={() => setSelectedDest(dest.name)}
                      className={`w-full p-3 rounded-xl text-left transition-all ${
                        selectedDest === dest.name
                          ? 'bg-[#D4AF37]/20 border border-[#D4AF37]'
                          : 'bg-black/30 border border-[#D4AF37]/10 hover:border-[#D4AF37]/30'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <MapPinIcon className="w-5 h-5 text-[#D4AF37]" />
                        <div>
                          <h3 className="text-white font-semibold text-sm">{dest.name}</h3>
                          <p className="text-gray-500 text-xs">{dest.address}</p>
                          <div className="flex gap-3 mt-1">
                            <span className="text-[#D4AF37] text-xs">{dest.distance}</span>
                            <span className="text-gray-500 text-xs">{dest.time}</span>
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setIsNavigating(!isNavigating)}
                  className="w-full py-3 bg-gradient-to-r from-[#D4AF37] to-[#996515] text-white font-semibold rounded-xl"
                >
                  {isNavigating ? 'Stop Navigation' : 'Start Navigation'}
                </button>

                {isNavigating && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-3 bg-black/50 rounded-lg border border-[#D4AF37]/30"
                  >
                    <p className="text-[#D4AF37] text-xs mb-1">Next turn: 0.3 miles</p>
                    <p className="text-white text-sm">→ Turn right onto Rodeo Dr</p>
                    <p className="text-gray-500 text-xs mt-1">ETA: 8 minutes</p>
                  </motion.div>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="lg:col-span-2"
            >
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-[#D4AF37]/20 overflow-hidden h-[500px] relative">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)',
                  backgroundSize: '30px 30px'
                }} />

                <div className="absolute top-1/2 left-1/3">
                  <div className="w-4 h-4 bg-[#D4AF37] rounded-full animate-pulse" />
                  <div className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-black/80 px-2 py-0.5 rounded text-xs text-white whitespace-nowrap">
                    You
                  </div>
                </div>

                <div className="absolute top-1/3 right-1/4">
                  <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse" />
                  <div className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-black/80 px-2 py-0.5 rounded text-xs text-white whitespace-nowrap">
                    {selectedDest}
                  </div>
                </div>

                <svg className="absolute inset-0 w-full h-full">
                  <path
                    d="M150,250 L300,200 L450,300"
                    stroke="#D4AF37"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="5,5"
                  />
                </svg>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-center"
          >
            <a
              href="https://getchatsupport.live/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full text-[#D4AF37] hover:bg-[#D4AF37]/20 transition-all duration-300"
            >
              <ChatBubbleLeftRightIcon className="w-5 h-5" />
              <span>Get Live Navigation Help</span>
            </a>
          </motion.div>
        </div>
      </div>

      <Footer />
      <FloatingAI />
    </div>
  );
};

export default Navigation;