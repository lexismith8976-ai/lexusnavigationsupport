import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { GradientText } from './ui/GradientText';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-lexus-black">
        <div className="absolute inset-0 bg-gradient-to-br from-lexus-gold/5 via-transparent to-transparent" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 -right-1/4 w-1/2 h-1/2 bg-gradient-radial from-lexus-gold/20 to-transparent rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-block px-4 py-2 bg-lexus-gold/10 border border-lexus-gold/30 rounded-full mb-6"
            >
              <span className="text-lexus-gold text-sm font-medium">
                ✦ Introducing the Future
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl lg:text-7xl font-display font-bold text-white mb-6"
            >
              Beyond
              <GradientText className="block text-6xl lg:text-8xl">
                Precision
              </GradientText>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-gray-400 text-lg mb-8 max-w-lg"
            >
              Experience the next generation of automotive navigation. Where artificial intelligence meets luxury, creating an unparalleled journey.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg">Discover More</Button>
              <Button size="lg" variant="outline">Watch Video</Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex gap-8 mt-12"
            >
              <div>
                <div className="text-3xl font-bold text-white">15ms</div>
                <div className="text-sm text-gray-500">Response Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">99.9%</div>
                <div className="text-sm text-gray-500">Accuracy</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">4K</div>
                <div className="text-sm text-gray-500">Display</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - 3D Navigation Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full aspect-square">
              {/* Animated Navigation Interface */}
              <motion.div
                animate={{
                  rotateY: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0"
              >
                <div className="w-full h-full rounded-full border-2 border-lexus-gold/30" />
              </motion.div>

              {/* Inner circles */}
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.5,
                    repeat: Infinity,
                  }}
                  className="absolute inset-0"
                  style={{
                    inset: `${i * 15}%`,
                  }}
                >
                  <div className="w-full h-full rounded-full border border-lexus-gold/20" />
                </motion.div>
              ))}

              {/* Center content */}
              <div className="absolute inset-[25%] bg-gradient-to-br from-lexus-gold to-lexus-darkGold rounded-2xl shadow-2xl flex items-center justify-center">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="w-20 h-20 border-4 border-white/30 rounded-full border-t-white"
                />
              </div>

              {/* Floating UI elements */}
              {[0, 90, 180, 270].map((angle, index) => {
                const radius = 180;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;
                
                return (
                  <motion.div
                    key={angle}
                    initial={{ x: 0, y: 0 }}
                    animate={{
                      x: [0, x, 0],
                      y: [0, y, 0],
                    }}
                    transition={{
                      duration: 8,
                      delay: index * 2,
                      repeat: Infinity,
                    }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="w-4 h-4 bg-lexus-gold rounded-full shadow-lg shadow-lexus-gold/50" />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-lexus-gold/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-lexus-gold rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};