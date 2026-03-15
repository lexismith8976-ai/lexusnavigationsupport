import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  gradient?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  gradient = 'from-lexus-gray to-lexus-black',
  onClick,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(212, 175, 55, 0.1)' }}
      transition={{ duration: 0.3 }}
      className={`bg-gradient-to-br ${gradient} rounded-2xl p-8 border border-lexus-gold/20 backdrop-blur-sm ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};