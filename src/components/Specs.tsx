import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/Card';
import { GradientText } from './ui/GradientText';

interface SpecCategory {
  title: string;
  specs: Array<{
    label: string;
    value: string;
    unit?: string;
  }>;
}

const specCategories: SpecCategory[] = [
  {
    title: 'Display',
    specs: [
      { label: 'Screen Size', value: '14.0', unit: 'inches' },
      { label: 'Resolution', value: '4K Ultra HD', unit: '3840 x 2160' },
      { label: 'Brightness', value: '1000', unit: 'nits' },
      { label: 'Refresh Rate', value: '120', unit: 'Hz' },
    ]
  },
  {
    title: 'Performance',
    specs: [
      { label: 'Processor', value: 'Snapdragon', unit: '8cx Gen 3' },
      { label: 'RAM', value: '16', unit: 'GB LPDDR5' },
      { label: 'Storage', value: '256', unit: 'GB UFS 3.1' },
      { label: 'GPU', value: 'Adreno', unit: '690' },
    ]
  },
  {
    title: 'Connectivity',
    specs: [
      { label: '5G', value: 'mmWave', unit: 'Sub-6' },
      { label: 'Wi-Fi', value: '6E', unit: 'Tri-band' },
      { label: 'Bluetooth', value: '5.3', unit: 'LE Audio' },
      { label: 'GNSS', value: 'GPS + GLONASS', unit: 'Galileo' },
    ]
  },
  {
    title: 'Sensors',
    specs: [
      { label: 'Camera', value: '8MP', unit: 'IR' },
      { label: 'IMU', value: '6-axis', unit: 'Gyro + Accel' },
      { label: 'Magnetometer', value: '3-axis', unit: 'Digital' },
      { label: 'Barometer', value: 'High', unit: 'Precision' },
    ]
  }
];

export const Specs: React.FC = () => {
  return (
    <section className="py-32 bg-lexus-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute border border-lexus-gold/20"
              style={{
                top: `${i * 5}%`,
                left: `${i * 3}%`,
                width: `${100 - i * 6}%`,
                height: `${100 - i * 6}%`,
                transform: `rotate(${i * 5}deg)`,
                borderRadius: '30%',
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            Technical <GradientText>Specifications</GradientText>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Engineered to perfection. Every component is carefully selected to deliver the ultimate navigation experience.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {specCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <Card className="h-full">
                <h3 className="text-2xl font-bold text-white mb-6">{category.title}</h3>
                <div className="space-y-4">
                  {category.specs.map((spec, specIndex) => (
                    <motion.div
                      key={spec.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: specIndex * 0.1 }}
                      className="flex items-center justify-between py-3 border-b border-lexus-gold/10 last:border-0"
                    >
                      <span className="text-gray-400">{spec.label}</span>
                      <div className="text-right">
                        <span className="text-lexus-gold font-bold text-lg">{spec.value}</span>
                        {spec.unit && (
                          <span className="text-gray-500 text-sm ml-1">{spec.unit}</span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};