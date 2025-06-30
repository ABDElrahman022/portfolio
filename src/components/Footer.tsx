import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/abdElrahmanMuhammedNasr',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/abdelrahman-muhammed-nasr',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:abdElrahmanMuhammedNasr@gmail.com',
      label: 'Email'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900/80 backdrop-blur-sm border-t border-slate-700">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center md:justify-start space-x-2 mb-4"
            >
              <Code2 className="w-8 h-8 text-purple-400" />
              <span className="text-2xl font-bold text-white">AbdElrahman</span>
            </motion.div>
            <p className="text-gray-400 max-w-xs">
              Software Engineer passionate about creating innovative solutions 
              with modern technologies.
            </p>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h3 className="text-white font-semibold mb-4">Connect With Me</h3>
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300 p-2 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-purple-500/50"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-right">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {['About', 'Experience', 'Projects', 'Contact'].map((link) => (
                <motion.button
                  key={link}
                  onClick={() => {
                    const element = document.querySelector(`#${link.toLowerCase()}`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  whileHover={{ x: -5 }}
                  className="block text-gray-400 hover:text-purple-400 transition-colors duration-300 mx-auto md:mx-0"
                >
                  {link}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-400" />
              </motion.div>
              <span>by AbdElrahman Muhammed</span>
            </div>
            
            <div className="text-gray-400 text-sm">
              © {currentYear} All rights reserved.
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40"
          aria-label="Back to top"
        >
          <motion.div
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ↑
          </motion.div>
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;