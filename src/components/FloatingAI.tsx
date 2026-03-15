import React from 'react';
import { motion } from 'framer-motion';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

const FloatingAI: React.FC = () => {
  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => window.open('https://getchatsupport.live/', '_blank')}
      className="fixed bottom-5 right-5 z-50 flex items-center space-x-2 bg-gradient-to-r from-[#D4AF37] to-[#996515] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <ChatBubbleLeftRightIcon className="w-5 h-5" />
      <span className="text-sm font-semibold">AI Assistant</span>
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
      </span>
    </motion.button>
  );
};

export default FloatingAI;