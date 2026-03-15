import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Sirf useNavigate import karo

const Footer: React.FC = () => {
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
          {/* Brand */}
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
            {/* Social Links */}
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

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><button onClick={() => navigate('/')} className="text-gray-500 hover:text-[#D4AF37] text-xs transition-colors">Home</button></li>
              <li><button onClick={() => navigate('/gallery')} className="text-gray-500 hover:text-[#D4AF37] text-xs transition-colors">Gallery</button></li>
              <li><button onClick={() => navigate('/pricing')} className="text-gray-500 hover:text-[#D4AF37] text-xs transition-colors">Pricing</button></li>
              <li><button onClick={() => navigate('/faq')} className="text-gray-500 hover:text-[#D4AF37] text-xs transition-colors">FAQ</button></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-[#D4AF37] text-xs transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#D4AF37] text-xs transition-colors">Contact Us</a></li>
              <li><button onClick={() => window.open('https://getchatsupport.live/', '_blank')} className="text-gray-500 hover:text-[#D4AF37] text-xs transition-colors">AI Support</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-500 text-xs">support@lexusnav.com</li>
              <li className="text-gray-500 text-xs">+1 (800) 123-4567</li>
              <li className="text-gray-500 text-xs">Torrance, CA</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#D4AF37]/10 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-600 text-xs mb-3 md:mb-0">
            © {currentYear} Lexus Navigation. All rights reserved.
          </p>
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

export default Footer;