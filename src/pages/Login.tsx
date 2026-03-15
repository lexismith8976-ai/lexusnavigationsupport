import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, LockClosedIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-black pt-24 flex items-center justify-center">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-[#D4AF37]/20"
          >
            <h2 className="text-3xl font-display font-bold text-white mb-2 text-center">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className="text-gray-400 text-center mb-8">
              {isLogin ? 'Sign in to your account' : 'Register for Lexus Navigation'}
            </p>

            <form className="space-y-6">
              <div>
                <label className="block text-gray-400 text-sm mb-2">Email Address</label>
                <div className="relative">
                  <EnvelopeIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-black/50 border border-[#D4AF37]/30 rounded-xl text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Password</label>
                <div className="relative">
                  <LockClosedIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-black/50 border border-[#D4AF37]/30 rounded-xl text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none transition-colors"
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              {!isLogin && (
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Confirm Password</label>
                  <div className="relative">
                    <LockClosedIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="password"
                      className="w-full pl-12 pr-4 py-3 bg-black/50 border border-[#D4AF37]/30 rounded-xl text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none transition-colors"
                      placeholder="Confirm your password"
                    />
                  </div>
                </div>
              )}

              {isLogin && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox text-[#D4AF37]" />
                    <span className="text-gray-400 text-sm">Remember me</span>
                  </label>
                  <a href="#" className="text-[#D4AF37] text-sm hover:underline">Forgot password?</a>
                </div>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-[#D4AF37] to-[#996515] text-white font-bold rounded-xl"
              >
                {isLogin ? 'Sign In' : 'Create Account'}
              </motion.button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-[#D4AF37] hover:underline text-sm"
              >
                {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
              </button>
            </div>

            {/* Ask AI Button */}
            <div className="mt-8 pt-6 border-t border-[#D4AF37]/10">
              <button
                onClick={() => window.open('https://getchatsupport.live/', '_blank')}
                className="w-full flex items-center justify-center space-x-3 py-3 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-xl text-[#D4AF37] hover:bg-[#D4AF37]/20 transition-all duration-300"
              >
                <ChatBubbleLeftRightIcon className="w-5 h-5" />
                <span>Need help? Ask AI Assistant</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Login;