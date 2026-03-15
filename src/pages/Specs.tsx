import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingAI from '../components/FloatingAI';
import { 
  ChatBubbleLeftRightIcon,
  ComputerDesktopIcon,
  CpuChipIcon,
  WifiIcon
} from '@heroicons/react/24/outline';

const Specs: React.FC = () => {
  const navigate = useNavigate();

  const specifications = [
    {
      category: 'Display',
      icon: <ComputerDesktopIcon className="w-8 h-8" />,
      items: [
        { label: 'Screen Size', value: '14.0 inches', detail: 'OLED' },
        { label: 'Resolution', value: '4K Ultra HD', detail: '3840 x 2160' },
        { label: 'Brightness', value: '1000 nits', detail: 'HDR10+' },
        { label: 'Refresh Rate', value: '120Hz', detail: 'Adaptive' },
        { label: 'Color Gamut', value: 'DCI-P3', detail: '100%' },
      ]
    },
    {
      category: 'Performance',
      icon: <CpuChipIcon className="w-8 h-8" />,
      items: [
        { label: 'Processor', value: 'Snapdragon', detail: '8cx Gen 3' },
        { label: 'RAM', value: '16GB', detail: 'LPDDR5' },
        { label: 'Storage', value: '256GB', detail: 'UFS 3.1' },
        { label: 'GPU', value: 'Adreno 690', detail: '4K Support' },
        { label: 'AI Engine', value: 'Hexagon', detail: '15 TOPS' },
      ]
    },
    {
      category: 'Connectivity',
      icon: <WifiIcon className="w-8 h-8" />,
      items: [
        { label: '5G', value: 'mmWave', detail: 'Sub-6' },
        { label: 'Wi-Fi', value: '6E', detail: 'Tri-band' },
        { label: 'Bluetooth', value: '5.3', detail: 'LE Audio' },
        { label: 'GNSS', value: 'GPS + GLONASS', detail: 'Galileo' },
        { label: 'NFC', value: 'Supported', detail: 'Pairing' },
      ]
    },
    {
      category: 'Sensors',
      items: [
        { label: 'Camera', value: '8MP', detail: 'IR' },
        { label: 'IMU', value: '6-axis', detail: 'Gyro + Accel' },
        { label: 'Magnetometer', value: '3-axis', detail: 'Digital' },
        { label: 'Barometer', value: 'High', detail: 'Precision' },
        { label: 'Ambient Light', value: 'Yes', detail: 'Auto' },
      ]
    },
    {
      category: 'Audio',
      items: [
        { label: 'Speakers', value: '7.1', detail: 'Surround' },
        { label: 'Microphones', value: '4', detail: 'Beamforming' },
        { label: 'Noise Cancellation', value: 'Active', detail: 'AI-Powered' },
        { label: 'Audio Codec', value: 'aptX', detail: 'HD' },
      ]
    },
    {
      category: 'Power',
      items: [
        { label: 'Battery', value: '5000mAh', detail: 'Li-Po' },
        { label: 'Charging', value: 'USB-C', detail: 'PD 3.0' },
        { label: 'Wireless', value: 'Qi', detail: '15W' },
        { label: 'Power Saving', value: 'Yes', detail: 'Intelligent' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-5xl font-display font-bold text-white mb-4">
              Technical
              <span className="text-[#D4AF37] block mt-2">Specifications</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Detailed specifications of the Lexus Navigation system.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specifications.map((spec, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-6">
                  {spec.icon && (
                    <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center text-[#D4AF37]">
                      {spec.icon}
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-white">{spec.category}</h3>
                </div>
                <div className="space-y-3">
                  {spec.items.map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-[#D4AF37]/10 last:border-0">
                      <span className="text-gray-400 text-sm">{item.label}</span>
                      <div className="text-right">
                        <span className="text-[#D4AF37] font-semibold text-sm">{item.value}</span>
                        <span className="text-gray-500 text-xs ml-1">{item.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 text-center"
          >
            <a
              href="https://getchatsupport.live/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full text-[#D4AF37] hover:bg-[#D4AF37]/20 transition-all duration-300"
            >
              <ChatBubbleLeftRightIcon className="w-5 h-5" />
              <span>Ask About Technical Specs</span>
            </a>
          </motion.div>
        </div>
      </div>

      <Footer />
      <FloatingAI />
    </div>
  );
};

export default Specs;

