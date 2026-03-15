import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  Bars3Icon, 
  XMarkIcon,
  ChatBubbleLeftRightIcon,
  UserCircleIcon,
  HomeIcon,
  PhotoIcon,
  CurrencyDollarIcon,
  QuestionMarkCircleIcon,
  EnvelopeIcon,
  MapIcon,
  Cog6ToothIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

interface NavItem {
  label: string;
  path: string;
  icon: React.ReactNode;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems: NavItem[] = [
    { label: 'Home', path: '/', icon: <HomeIcon className="w-4 h-4" /> },
    { label: 'Features', path: '/features', icon: <SparklesIcon className="w-4 h-4" /> },
    { label: 'Navigation', path: '/navigation', icon: <MapIcon className="w-4 h-4" /> },
    { label: 'Specs', path: '/specs', icon: <Cog6ToothIcon className="w-4 h-4" /> },
    { label: 'Gallery', path: '/gallery', icon: <PhotoIcon className="w-4 h-4" /> },
    { label: 'Pricing', path: '/pricing', icon: <CurrencyDollarIcon className="w-4 h-4" /> },
    { label: 'FAQ', path: '/faq', icon: <QuestionMarkCircleIcon className="w-4 h-4" /> },
    { label: 'Contact', path: '/contact', icon: <EnvelopeIcon className="w-4 h-4" /> }, // ✅ SIRF EK LINE
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/95 backdrop-blur-xl py-3 shadow-2xl' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 cursor-pointer group"
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-[#D4AF37] to-[#996515] rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-black font-bold text-lg">L</span>
                </div>
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -inset-1 bg-[#D4AF37]/20 rounded-xl blur-md -z-10"
                />
              </div>
              <div>
                <span className="text-white font-display font-bold text-lg tracking-tight">
                  LEXUS
                </span>
                <span className="text-[#D4AF37] font-display font-bold text-lg ml-1">
                  NAV
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'text-[#D4AF37] bg-[#D4AF37]/10'
                    : 'text-gray-300 hover:text-[#D4AF37] hover:bg-[#D4AF37]/5'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Right Side Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Ask AI Button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://getchatsupport.live/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full text-[#D4AF37] hover:bg-[#D4AF37]/20 transition-all duration-300"
            >
              <ChatBubbleLeftRightIcon className="w-4 h-4" />
              <span className="text-sm font-medium">Ask AI</span>
            </motion.a>

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
              <div className="pt-6 pb-8 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    className={`flex items-center space-x-2 py-3 px-4 rounded-lg transition-all duration-300 ${
                      location.pathname === item.path
                        ? 'text-[#D4AF37] bg-[#D4AF37]/10'
                        : 'text-gray-300 hover:text-[#D4AF37] hover:bg-[#D4AF37]/5'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                ))}
                
                {/* Mobile Ask AI */}
                <a
                  href="https://getchatsupport.live/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 w-full py-3 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-lg text-[#D4AF37] font-semibold"
                >
                  <ChatBubbleLeftRightIcon className="w-5 h-5" />
                  <span>AI Assistant</span>
                </a>

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

export default Navbar;