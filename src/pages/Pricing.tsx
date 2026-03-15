import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingAI from '../components/FloatingAI';
import { 
  ChatBubbleLeftRightIcon,
  HomeIcon,
  CheckIcon,
  BoltIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const Pricing: React.FC = () => {
  const navigate = useNavigate();

  const plans = [
    {
      name: 'Basic',
      price: '$9.99',
      period: '/month',
      description: 'Essential navigation for everyday driving',
      features: [
        'Basic Navigation',
        'Real-time Traffic',
        'Voice Commands',
        '5 Favorite Places',
        'Email Support',
        'Monthly Updates'
      ],
      color: 'from-gray-600 to-gray-800',
      buttonColor: 'bg-gray-600 hover:bg-gray-700',
      popular: false
    },
    {
      name: 'Premium',
      price: '$19.99',
      period: '/month',
      description: 'Advanced features for the modern driver',
      features: [
        'AI-Powered Routing',
        '3D City Maps',
        'Offline Navigation',
        'Unlimited Favorites',
        'Priority Support',
        'Weather Alerts',
        'Parking Assistant',
        'Live Traffic Camera',
        'Speed Limit Alerts'
      ],
      color: 'from-[#D4AF37] to-[#996515]',
      buttonColor: 'bg-gradient-to-r from-[#D4AF37] to-[#996515] hover:shadow-lg',
      popular: true
    },
    {
      name: 'Business',
      price: '$49.99',
      period: '/month',
      description: 'Complete solution for businesses',
      features: [
        'All Premium Features',
        'Fleet Tracking',
        'Multi-User Access',
        'Analytics Dashboard',
        'API Access',
        '24/7 Phone Support',
        'Custom Integration',
        'Dedicated Account Manager',
        'SLA Guarantee'
      ],
      color: 'from-blue-600 to-blue-800',
      buttonColor: 'bg-blue-600 hover:bg-blue-700',
      popular: false
    }
  ];

  const handleBuy = (planName: string) => {
    // Here you would integrate with your payment system
    alert(`Thank you for choosing ${planName} plan! You'll be redirected to checkout.`);
    // window.location.href = 'https://getchatsupport.live/';
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-xl border-b border-[#D4AF37]/20 py-4">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-[#D4AF37] to-[#996515] rounded-xl flex items-center justify-center">
                <span className="text-black font-bold text-lg">L</span>
              </div>
              <span className="text-white font-display font-bold text-lg">LEXUS NAV</span>
            </Link>
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-[#D4AF37] transition-colors"
            >
              <HomeIcon className="w-5 h-5" />
              <span>Back to Home</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-5xl font-display font-bold text-white mb-4">
              Simple,
              <span className="text-[#D4AF37] block mt-2">Transparent Pricing</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose the plan that best fits your needs. All plans include a 7-day free trial.
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`relative bg-gradient-to-br ${plan.color} rounded-2xl p-8 border ${plan.popular ? 'border-[#D4AF37] scale-105' : 'border-[#D4AF37]/20'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#D4AF37] text-black text-sm font-bold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start space-x-2">
                      <CheckIcon className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                      <span className="text-gray-200 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleBuy(plan.name)}
                  className={`w-full py-4 ${plan.buttonColor} text-white font-semibold rounded-xl transition-all duration-300`}
                >
                  Buy {plan.name}
                </button>

                <p className="text-center text-gray-400 text-xs mt-4">
                  7-day free trial • Cancel anytime
                </p>
              </motion.div>
            ))}
          </div>

          {/* Features Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-[#D4AF37]/20"
          >
            <h2 className="text-2xl font-display font-bold text-white mb-6 text-center">
              Compare All
              <span className="text-[#D4AF37] block">Features</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h3 className="text-[#D4AF37] font-semibold mb-4">Navigation</h3>
                <p className="text-gray-400 text-sm">✓ AI-Powered Routing</p>
                <p className="text-gray-400 text-sm">✓ 3D City Maps</p>
                <p className="text-gray-400 text-sm">✓ Real-time Traffic</p>
                <p className="text-gray-400 text-sm">✓ Offline Maps</p>
              </div>
              <div className="space-y-3">
                <h3 className="text-[#D4AF37] font-semibold mb-4">Convenience</h3>
                <p className="text-gray-400 text-sm">✓ Voice Commands</p>
                <p className="text-gray-400 text-sm">✓ Cloud Sync</p>
                <p className="text-gray-400 text-sm">✓ Multi-device</p>
                <p className="text-gray-400 text-sm">✓ Predictive Alerts</p>
              </div>
              <div className="space-y-3">
                <h3 className="text-[#D4AF37] font-semibold mb-4">Support</h3>
                <p className="text-gray-400 text-sm">✓ 24/7 AI Chat</p>
                <p className="text-gray-400 text-sm">✓ Email Support</p>
                <p className="text-gray-400 text-sm">✓ Phone Support*</p>
                <p className="text-gray-400 text-sm">✓ Dedicated Manager*</p>
              </div>
            </div>
          </motion.div>

          {/* AI Assistant */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-r from-[#D4AF37]/10 to-transparent rounded-3xl p-8 border border-[#D4AF37]/30">
              <h2 className="text-2xl font-display font-bold text-white mb-3">
                Not Sure Which Plan to Choose?
              </h2>
              <p className="text-gray-400 mb-6">
                Our AI assistant can help you find the perfect plan for your needs.
              </p>
              <a
                href="https://getchatsupport.live/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#996515] text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
              >
                <ChatBubbleLeftRightIcon className="w-5 h-5" />
                <span>Chat with AI Assistant</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;