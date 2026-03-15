import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/Card';
import { GradientText } from './ui/GradientText';
import { features } from '@/data/featuresData';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const Features: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="py-32 bg-lexus-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-lexus-gold/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-lexus-gold/10 to-transparent blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-lexus-gold text-sm font-medium tracking-wider uppercase mb-4 block">
            Revolutionary Features
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            Experience the <GradientText>Future</GradientText> of Navigation
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Cutting-edge technology meets intuitive design. Discover how our navigation system transforms every journey.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card gradient={`from-lexus-gray to-lexus-black bg-gradient-to-br ${feature.gradient}`}>
                <div className="mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-lexus-gold/20 to-lexus-darkGold/20 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-lexus-gold"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d={feature.icon} />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                
                {/* Learn more link */}
                <motion.a
                  href="#"
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center mt-6 text-lexus-gold text-sm font-medium group"
                >
                  Learn more
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};