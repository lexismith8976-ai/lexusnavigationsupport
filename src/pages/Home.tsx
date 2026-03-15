import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bars3Icon, 
  XMarkIcon,
  MapIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  SparklesIcon,
  ArrowPathIcon,
  BellAlertIcon,
  ChatBubbleLeftRightIcon,
  UserCircleIcon
} from '@heroicons/react/24/outline';

// Types
interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  stats: string;
}

interface Destination {
  id: string;
  name: string;
  address: string;
  distance: string;
  time: string;
  image: string;
  rating: number;
}

// Sample Data
const features: Feature[] = [
  {
    id: '1',
    title: 'AI-Powered Routing',
    description: 'Advanced machine learning algorithms predict traffic patterns and suggest optimal routes in real-time.',
    icon: <SparklesIcon className="w-8 h-8" />,
    gradient: 'from-blue-500 to-cyan-500',
    stats: '99.9% Accuracy'
  },
  {
    id: '2',
    title: '3D City Modeling',
    description: 'Immersive 3D maps with detailed landmarks, terrain, and building recognition technology.',
    icon: <MapIcon className="w-8 h-8" />,
    gradient: 'from-purple-500 to-pink-500',
    stats: '500+ Cities'
  },
  {
    id: '3',
    title: 'Real-Time Traffic',
    description: 'Live traffic updates with predictive analytics to avoid congestion before it happens.',
    icon: <ArrowPathIcon className="w-8 h-8" />,
    gradient: 'from-amber-500 to-orange-500',
    stats: '实时更新'
  },
  {
    id: '4',
    title: 'Voice Command',
    description: 'Natural language processing for hands-free control in 50+ languages and dialects.',
    icon: <DevicePhoneMobileIcon className="w-8 h-8" />,
    gradient: 'from-emerald-500 to-teal-500',
    stats: '50+ Languages'
  },
  {
    id: '5',
    title: 'Predictive Alerts',
    description: 'Smart notifications about weather, road conditions, and points of interest along your route.',
    icon: <BellAlertIcon className="w-8 h-8" />,
    gradient: 'from-red-500 to-rose-500',
    stats: '实时警报'
  },
  {
    id: '6',
    title: 'Cloud Sync',
    description: 'Seamless synchronization across all your devices with secure cloud storage.',
    icon: <GlobeAltIcon className="w-8 h-8" />,
    gradient: 'from-indigo-500 to-blue-500',
    stats: '24/7 Sync'
  }
];

const destinations: Destination[] = [
  {
    id: '1',
    name: 'Lexus Tower',
    address: '123 Luxury Avenue, New York',
    distance: '2.4 mi',
    time: '8 min',
    image: '🏢',
    rating: 4.9
  },
  {
    id: '2',
    name: 'Ritz-Carlton',
    address: '10420 Constellation Blvd, LA',
    distance: '5.7 mi',
    time: '15 min',
    image: '🏨',
    rating: 4.8
  },
  {
    id: '3',
    name: 'Malibu Beach',
    address: '23000 Pacific Coast Hwy',
    distance: '15.2 mi',
    time: '28 min',
    image: '🏖️',
    rating: 4.9
  },
  {
    id: '4',
    name: 'Beverly Hills',
    address: '444 N Rexford Dr',
    distance: '3.1 mi',
    time: '10 min',
    image: '🌴',
    rating: 4.7
  }
];

// Navbar Component - FIXED
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', path: '/', type: 'route' },
    { label: 'Features', path: 'features', type: 'hash' },
    { label: 'Navigation', path: 'navigation', type: 'hash' },
    { label: 'Specs', path: 'specs', type: 'hash' },
    { label: 'Gallery', path: '/gallery', type: 'route' },
    { label: 'Pricing', path: '/pricing', type: 'route' },
    { label: 'FAQ', path: '/faq', type: 'route' },
  ];

  const handleNavigation = (item: { label: string; path: string; type: string }) => {
    setIsOpen(false);
    
    if (item.type === 'route') {
      // Regular page navigation
      navigate(item.path);
    } else {
      // Hash scroll on home page
      const element = document.getElementById(item.path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/95 backdrop-blur-xl py-3 shadow-2xl' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => navigate('/')} className="flex items-center space-x-3 cursor-pointer group">
            <div className="relative">
              <div className="w-11 h-11 bg-gradient-to-r from-[#D4AF37] to-[#996515] rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <span className="text-black font-bold text-xl">L</span>
              </div>
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -inset-1 bg-[#D4AF37]/20 rounded-xl blur-md -z-10"
              />
            </div>
            <div>
              <span className="text-white font-display font-bold text-xl tracking-tight">LEXUS</span>
              <span className="text-[#D4AF37] font-display font-bold text-xl ml-1">NAV</span>
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item)}
                className="text-sm font-medium text-gray-300 hover:text-[#D4AF37] transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Side Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Ask AI Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://getchatsupport.live/', '_blank')}
              className="flex items-center space-x-2 px-4 py-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full text-[#D4AF37] hover:bg-[#D4AF37]/20 transition-all duration-300"
            >
              <ChatBubbleLeftRightIcon className="w-4 h-4" />
              <span className="text-sm font-medium">Ask AI</span>
            </motion.button>

            {/* Login/Signup Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/login')}
              className="flex items-center space-x-2 px-5 py-2 bg-gradient-to-r from-[#D4AF37] to-[#996515] text-white font-medium rounded-full hover:shadow-lg transition-all duration-300"
            >
              <UserCircleIcon className="w-4 h-4" />
              <span>Login</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 bg-[#D4AF37]/10 rounded-lg border border-[#D4AF37]/30"
          >
            {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="pt-6 pb-8 space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavigation(item)}
                    className="block w-full text-left py-3 px-4 text-gray-300 hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 rounded-lg transition-all duration-300"
                  >
                    {item.label}
                  </button>
                ))}
                
                {/* Mobile Ask AI */}
                <button
                  onClick={() => window.open('https://getchatsupport.live/', '_blank')}
                  className="w-full flex items-center justify-center space-x-2 py-3 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-lg text-[#D4AF37]"
                >
                  <ChatBubbleLeftRightIcon className="w-5 h-5" />
                  <span>Ask AI Assistant</span>
                </button>

                {/* Mobile Login */}
                <button
                  onClick={() => {
                    navigate('/login');
                    setIsOpen(false);
                  }}
                  className="w-full py-4 bg-gradient-to-r from-[#D4AF37] to-[#996515] text-white font-semibold rounded-lg"
                >
                  Login / Sign Up
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

// Hero Component
const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  
  const slides = [
    { title: 'Beyond Precision', subtitle: 'The Future of Navigation' },
    { title: 'AI-Powered', subtitle: 'Intelligent Routing' },
    { title: '4K Display', subtitle: 'Crystal Clear Vision' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 180, 270, 360] }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 -right-1/4 w-1/2 h-1/2 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.2) 0%, rgba(212,175,55,0.05) 50%, transparent 100%)' }}
          />
          <motion.div 
            animate={{ scale: [1.2, 1, 1.2], rotate: [360, 270, 180, 90, 0] }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 -left-1/4 w-1/2 h-1/2 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.2) 0%, rgba(212,175,55,0.05) 50%, transparent 100%)' }}
          />
        </div>
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full" style={{
            backgroundImage: 'linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Live Badge */}
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
              </span>
              <span className="text-[#D4AF37] text-xs font-medium tracking-wider">
                LIVE NOW - NEXT GENERATION NAVIGATION
              </span>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.h1
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-5xl lg:text-7xl font-display font-bold text-white mb-4"
              >
                {slides[currentSlide].title}
                <span className="block text-3xl lg:text-4xl text-[#D4AF37] mt-3">
                  {slides[currentSlide].subtitle}
                </span>
              </motion.h1>
            </AnimatePresence>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-base lg:text-lg mb-6 max-w-lg leading-relaxed"
            >
              Experience the pinnacle of automotive navigation technology. 
              Where artificial intelligence meets unparalleled luxury.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              {/* Start Your Journey Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/pricing')}
                className="group relative px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#996515] text-white font-semibold rounded-full overflow-hidden shadow-lg"
              >
                <span className="relative z-10">Start Your Journey</span>
                <motion.div 
                  animate={{ x: ['0%', '100%'] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                />
              </motion.button>
              
              {/* Watch Demo Button */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.youtube.com/results?search_query=lexus+navigation+demo"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-[#D4AF37] text-[#D4AF37] font-semibold rounded-full hover:bg-[#D4AF37]/10 transition-all duration-300 inline-flex items-center"
              >
                Watch Demo
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex gap-8 mt-10"
            >
              {[
                { value: '15ms', label: 'Response' },
                { value: '99.9%', label: 'Accuracy' },
                { value: '4K', label: 'Display' }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -3 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Navigation Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative w-full aspect-square">
              {/* Animated Rings */}
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  animate={{ rotate: 360, scale: [1, 1.1 + i * 0.1, 1] }}
                  transition={{ 
                    rotate: { duration: 20 - i * 2, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity, delay: i * 0.5 }
                  }}
                  className="absolute inset-0"
                  style={{ inset: `${i * 10}%` }}
                >
                  <div className="w-full h-full rounded-full border-2" style={{ borderColor: `rgba(212, 175, 55, ${0.3 - i * 0.05})` }} />
                </motion.div>
              ))}

              {/* Center Core */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-[20%] bg-gradient-to-br from-gray-900 to-black rounded-3xl flex items-center justify-center overflow-hidden border-2 border-[#D4AF37]/30"
              >
                <div className="relative w-full h-full">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(rgba(212, 175, 55, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.2) 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }} />
                  
                  <svg className="absolute inset-0 w-full h-full">
                    <path d="M30,80 Q50,30 80,50 T130,70" stroke="#D4AF37" strokeWidth="3" fill="none" strokeDasharray="5,5" />
                    <circle cx="30" cy="80" r="4" fill="#D4AF37" />
                    <circle cx="130" cy="70" r="4" fill="#FF4444" />
                  </svg>

                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  >
                    <svg className="w-8 h-8 text-[#D4AF37]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L4 6v8l8 4 8-4V6l-8-4zm0 2.2l6 3v6l-6 3-6-3v-6l6-3z" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              {[
                { icon: '📍', label: 'Destination', x: 70, y: 30, delay: 0 },
                { icon: '🚗', label: 'You', x: 30, y: 70, delay: 0.5 },
                { icon: '⛽', label: 'Gas', x: 80, y: 80, delay: 1 },
                { icon: '🏨', label: 'Hotel', x: 20, y: 20, delay: 1.5 },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: item.delay }}
                  className="absolute bg-black/80 backdrop-blur-md px-2 py-1 rounded-full border border-[#D4AF37]/30 flex items-center space-x-1"
                  style={{ left: `${item.x}%`, top: `${item.y}%` }}
                >
                  <span className="text-sm">{item.icon}</span>
                  <span className="text-white text-xs">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-5 h-8 border-2 border-[#D4AF37]/30 rounded-full flex justify-center">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-[#D4AF37] rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

// Features Component
const FeaturesSection: React.FC = () => {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#D4AF37] text-xs font-medium tracking-wider uppercase mb-3 block">
            Revolutionary Features
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Redefining The
            <span className="text-[#D4AF37] block mt-2">Navigation Experience</span>
          </h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            Cutting-edge technology meets intuitive design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredFeature(feature.id)}
              onHoverEnd={() => setHoveredFeature(null)}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-500 overflow-hidden"
            >
              <motion.div 
                animate={hoveredFeature === feature.id ? { scale: 2, rotate: 45, opacity: 0.15 } : { scale: 1, rotate: 0, opacity: 0 }}
                className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r ${feature.gradient} rounded-full blur-3xl`}
              />

              <div className={`relative mb-4 w-14 h-14 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center text-white transform group-hover:rotate-12 transition-transform duration-300`}>
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {feature.description}
              </p>

              <div className="flex items-center justify-between">
                <span className={`text-xs font-semibold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                  {feature.stats}
                </span>
                
                <motion.a
                  href="#"
                  whileHover={{ x: 3 }}
                  className="text-[#D4AF37] text-sm group-hover:text-white transition-colors"
                >
                  Learn More →
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Navigation Demo Component
const NavigationSection: React.FC = () => {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [isNavigating, setIsNavigating] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDestinations = destinations.filter(dest =>
    dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dest.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="navigation" className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-3">
            Live Navigation
            <span className="text-[#D4AF37] block mt-1">Interactive Demo</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Search Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-5 border border-[#D4AF37]/20">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Search destinations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 bg-black/50 border border-[#D4AF37]/30 rounded-xl text-white text-sm placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-3 max-h-[350px] overflow-y-auto custom-scrollbar pr-2">
                {filteredDestinations.map((dest) => (
                  <motion.div
                    key={dest.id}
                    whileHover={{ x: 3 }}
                    onClick={() => setSelectedDestination(dest)}
                    className={`p-3 rounded-xl cursor-pointer transition-all duration-300 ${
                      selectedDestination?.id === dest.id
                        ? 'bg-gradient-to-r from-[#D4AF37]/20 to-[#996515]/20 border border-[#D4AF37]'
                        : 'bg-black/30 border border-[#D4AF37]/10 hover:border-[#D4AF37]/30'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{dest.image}</div>
                      <div className="flex-1">
                        <h3 className="text-white font-semibold text-sm">{dest.name}</h3>
                        <p className="text-gray-500 text-xs">{dest.address}</p>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-[#D4AF37] text-xs">{dest.distance}</span>
                          <span className="text-gray-500 text-xs">{dest.time}</span>
                          <span className="text-yellow-500 text-xs">★ {dest.rating}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsNavigating(true)}
                disabled={!selectedDestination}
                className={`w-full mt-5 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  selectedDestination
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#996515] text-white hover:shadow-lg'
                    : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                }`}
              >
                {isNavigating ? '✓ Navigation Active' : '▶ Start Navigation'}
              </motion.button>
            </div>
          </motion.div>

          {/* Map Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-[#D4AF37]/20 overflow-hidden h-[500px]">
              <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)',
                backgroundSize: '25px 25px'
              }} />

              {selectedDestination && (
                <motion.svg
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5 }}
                  className="absolute inset-0 w-full h-full"
                >
                  <path d="M120,250 L300,180 L480,300 L650,220" stroke="url(#gradient)" strokeWidth="3" fill="none" strokeDasharray="8,8" />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#D4AF37" />
                      <stop offset="100%" stopColor="#996515" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              )}

              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-1/2 left-1/3 z-10"
              >
                <div className="relative">
                  <div className="w-5 h-5 bg-[#D4AF37] rounded-full shadow-lg" />
                  <div className="absolute -inset-1.5 bg-[#D4AF37]/20 rounded-full animate-ping" />
                </div>
                <div className="absolute top-7 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-md px-2 py-0.5 rounded-full border border-[#D4AF37]/30 whitespace-nowrap">
                  <span className="text-white text-xs">You</span>
                </div>
              </motion.div>

              {selectedDestination && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-1/3 right-1/4 z-10"
                >
                  <div className="relative">
                    <div className="w-5 h-5 bg-red-500 rounded-full shadow-lg" />
                    <div className="absolute -inset-1.5 bg-red-500/20 rounded-full animate-ping" />
                  </div>
                  <div className="absolute top-7 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-md px-2 py-0.5 rounded-full border border-[#D4AF37]/30 whitespace-nowrap">
                    <span className="text-white text-xs">{selectedDestination.name.split(' ')[0]}</span>
                  </div>
                </motion.div>
              )}

              <AnimatePresence>
                {isNavigating && selectedDestination && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    className="absolute bottom-4 left-4 right-4 bg-black/90 backdrop-blur-xl rounded-xl p-4 border border-[#D4AF37]/30"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[#D4AF37] text-xs font-semibold">Next turn: 0.3 mi</span>
                      <span className="text-white text-xs">ETA: {selectedDestination.time}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#D4AF37]/20 rounded-lg flex items-center justify-center">
                        <span className="text-[#D4AF37] text-lg">→</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-white text-sm font-semibold">Turn right onto Rodeo Dr</div>
                        <div className="text-gray-500 text-xs">Then continue for 2.1 mi</div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Specs Component
const SpecsSection: React.FC = () => {
  const specs = [
    { category: 'Display', items: [
      { label: 'Screen', value: '14.0"', detail: 'OLED' },
      { label: 'Resolution', value: '4K', detail: '3840x2160' },
      { label: 'Brightness', value: '1000', detail: 'nits' },
    ]},
    { category: 'Performance', items: [
      { label: 'Processor', value: 'Snapdragon', detail: '8cx' },
      { label: 'RAM', value: '16GB', detail: 'LPDDR5' },
      { label: 'Storage', value: '256GB', detail: 'UFS 3.1' },
    ]},
    { category: 'Connectivity', items: [
      { label: '5G', value: 'mmWave', detail: 'Sub-6' },
      { label: 'Wi-Fi', value: '6E', detail: 'Tri-band' },
      { label: 'Bluetooth', value: '5.3', detail: 'LE' },
    ]},
  ];

  return (
    <section id="specs" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-3">
            Technical
            <span className="text-[#D4AF37] block mt-1">Specifications</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-5">
          {specs.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-500"
            >
              <h3 className="text-xl font-bold text-white mb-5">{category.category}</h3>
              <div className="space-y-4">
                {category.items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center justify-between py-2 border-b border-[#D4AF37]/10 last:border-0"
                  >
                    <span className="text-gray-400 text-sm">{item.label}</span>
                    <div className="text-right">
                      <span className="text-[#D4AF37] font-semibold text-sm">{item.value}</span>
                      <span className="text-gray-500 text-xs ml-1">{item.detail}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer Component
const FooterSection: React.FC = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Twitter', icon: '𝕏', url: 'https://twitter.com/lexus' },
    { name: 'Instagram', icon: '📷', url: 'https://instagram.com/lexus' },
    { name: 'Facebook', icon: 'f', url: 'https://facebook.com/lexus' },
    { name: 'YouTube', icon: '▶', url: 'https://youtube.com/lexus' },
    { name: 'LinkedIn', icon: 'in', url: 'https://linkedin.com/company/lexus' }
  ];

  return (
    <footer className="bg-black border-t border-[#D4AF37]/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-[#D4AF37] to-[#996515] rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg">L</span>
              </div>
              <span className="text-white font-display font-bold text-lg">LEXUS NAV</span>
            </div>
            <p className="text-gray-500 text-xs leading-relaxed mb-4">
              Premium navigation system for the modern driver.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  whileHover={{ scale: 1.1 }}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[#D4AF37] text-sm transition-colors"
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><button onClick={() => navigate('/')} className="text-gray-500 hover:text-[#D4AF37] text-xs transition-colors">Home</button></li>
              <li><button onClick={() => navigate('/gallery')} className="text-gray-500 hover:text-[#D4AF37] text-xs transition-colors">Gallery</button></li>
              <li><button onClick={() => navigate('/pricing')} className="text-gray-500 hover:text-[#D4AF37] text-xs transition-colors">Pricing</button></li>
              <li><button onClick={() => navigate('/faq')} className="text-gray-500 hover:text-[#D4AF37] text-xs transition-colors">FAQ</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-[#D4AF37] text-xs transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#D4AF37] text-xs transition-colors">Contact Us</a></li>
              <li><button onClick={() => window.open('https://getchatsupport.live/', '_blank')} className="text-gray-500 hover:text-[#D4AF37] text-xs transition-colors">AI Support</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-500 text-xs">support@lexusnav.com</li>
              <li className="text-gray-500 text-xs">+1 (800) 123-4567</li>
              <li className="text-gray-500 text-xs">Torrance, CA</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-[#D4AF37]/10 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-600 text-xs mb-3 md:mb-0">© {currentYear} Lexus Navigation. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-[#D4AF37] text-xs transition-colors">Privacy</a>
            <a href="#" className="text-gray-600 hover:text-[#D4AF37] text-xs transition-colors">Terms</a>
            <a href="#" className="text-gray-600 hover:text-[#D4AF37] text-xs transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Floating AI Chat Button
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

// Main Home Component
function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <FeaturesSection />
        <NavigationSection />
        <SpecsSection />
      </main>
      <FooterSection />
      <FloatingAI />
    </div>
  );
}

export default Home;