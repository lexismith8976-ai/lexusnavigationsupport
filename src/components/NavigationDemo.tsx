import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from './ui/Card';
import { Button } from './ui/Button';

interface Destination {
  id: string;
  name: string;
  address: string;
  distance: string;
  time: string;
  icon: string;
}

const destinations: Destination[] = [
  {
    id: '1',
    name: 'Lexus Dealership',
    address: '123 Luxury Ave, Beverly Hills',
    distance: '2.3 mi',
    time: '8 min',
    icon: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z'
  },
  {
    id: '2',
    name: 'Ritz-Carlton',
    address: '10420 Constellation Blvd',
    distance: '5.7 mi',
    time: '15 min',
    icon: 'M19 9H5c-1.1 0-2 .9-2 2v8h18v-8c0-1.1-.9-2-2-2zm-7 8c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zM8 5h8v2H8z'
  },
  {
    id: '3',
    name: 'Malibu Beach',
    address: '23000 Pacific Coast Hwy',
    distance: '15.2 mi',
    time: '28 min',
    icon: 'M21 12v-2c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v2h18zm-6 4h-2v2h2v-2zm-4 0h-2v2h2v-2zm-4 0H5v2h2v-2z'
  }
];

export const NavigationDemo: React.FC = () => {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [isNavigating, setIsNavigating] = useState(false);

  return (
    <section className="py-32 bg-gradient-to-b from-lexus-black to-lexus-gray">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Interactive Demo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              Interactive
              <span className="block text-lexus-gold">Navigation Demo</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Experience our intuitive interface. Select a destination and watch the system plan your perfect route.
            </p>

            {/* Destination selector */}
            <div className="space-y-4 mb-8">
              {destinations.map((dest) => (
                <motion.div
                  key={dest.id}
                  whileHover={{ x: 10 }}
                  className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                    selectedDestination?.id === dest.id
                      ? 'bg-gradient-to-r from-lexus-gold/20 to-lexus-darkGold/20 border border-lexus-gold'
                      : 'bg-lexus-gray/50 border border-lexus-gold/10 hover:border-lexus-gold/30'
                  }`}
                  onClick={() => setSelectedDestination(dest)}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-lexus-black rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-lexus-gold" fill="currentColor" viewBox="0 0 24 24">
                        <path d={dest.icon} />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold">{dest.name}</h3>
                      <p className="text-gray-500 text-sm">{dest.address}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lexus-gold font-bold">{dest.distance}</div>
                      <div className="text-gray-500 text-sm">{dest.time}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button
              size="lg"
              onClick={() => setIsNavigating(true)}
              disabled={!selectedDestination}
              className={!selectedDestination ? 'opacity-50 cursor-not-allowed' : ''}
            >
              Start Navigation
            </Button>
          </motion.div>

          {/* Right side - Map visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <Card className="relative h-[500px] overflow-hidden">
              {/* Animated map background */}
              <div className="absolute inset-0 bg-gradient-to-br from-lexus-gray to-lexus-black">
                {/* Grid lines */}
                {Array.from({ length: 10 }).map((_, i) => (
                  <motion.div
                    key={`h-${i}`}
                    animate={{
                      x: [0, 20, 0],
                    }}
                    transition={{
                      duration: 10,
                      delay: i * 0.2,
                      repeat: Infinity,
                    }}
                    className="absolute h-px bg-lexus-gold/10 w-full"
                    style={{ top: `${i * 10}%` }}
                  />
                ))}
                {Array.from({ length: 10 }).map((_, i) => (
                  <motion.div
                    key={`v-${i}`}
                    animate={{
                      y: [0, 20, 0],
                    }}
                    transition={{
                      duration: 10,
                      delay: i * 0.2,
                      repeat: Infinity,
                    }}
                    className="absolute w-px bg-lexus-gold/10 h-full"
                    style={{ left: `${i * 10}%` }}
                  />
                ))}
              </div>

              {/* Animated route */}
              <AnimatePresence>
                {selectedDestination && (
                  <motion.svg
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    exit={{ pathLength: 0, opacity: 0 }}
                    transition={{ duration: 2 }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <path
                      d="M100,250 L300,150 L500,350 L700,200"
                      stroke="url(#gradient)"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray="8,8"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#D4AF37" />
                        <stop offset="100%" stopColor="#996515" />
                      </linearGradient>
                    </defs>
                  </motion.svg>
                )}
              </AnimatePresence>

              {/* Current location marker */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute top-1/2 left-1/4 w-4 h-4 bg-lexus-gold rounded-full shadow-lg shadow-lexus-gold/50"
              >
                <div className="absolute -inset-2 bg-lexus-gold/20 rounded-full animate-ping" />
              </motion.div>

              {/* Destination marker */}
              {selectedDestination && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-1/3 right-1/4"
                >
                  <div className="w-4 h-4 bg-red-500 rounded-full shadow-lg shadow-red-500/50" />
                  <div className="absolute -inset-2 bg-red-500/20 rounded-full animate-ping" />
                </motion.div>
              )}

              {/* Navigation info overlay */}
              <AnimatePresence>
                {isNavigating && selectedDestination && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="absolute bottom-6 left-6 right-6 bg-lexus-black/90 backdrop-blur-md rounded-xl p-4 border border-lexus-gold/30"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-lexus-gold font-semibold">Next turn:</span>
                      <span className="text-white">0.3 mi</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-lexus-gold/20 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-lexus-gold" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2L4 6v8l8 4 8-4V6l-8-4zm0 2.2l6 3v6l-6 3-6-3v-6l6-3z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-semibold">Turn right onto Rodeo Drive</div>
                        <div className="text-gray-500 text-sm">Arrival in {selectedDestination.time}</div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};