import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <div className="relative inline-block">
              <motion.img
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                src="/Screenshot 2025-07-01 005649.png"
                alt="AbdElrahman Muhammed"
                className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-purple-400 shadow-2xl object-cover"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 rounded-full border-2 border-dashed border-purple-400/30"
              />
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              AbdElrahman
            </span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl text-purple-300 mb-6 font-light"
          >
            Entry-Level Machine Learning Engineer
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center text-gray-300 mb-8"
          >
            <MapPin className="w-5 h-5 mr-2" />
            <span>Alexandria, Egypt</span>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Passionate Machine Learning Engineer with expertise in AI model development, 
            data analysis, and creating intelligent solutions. Experienced in Python, 
            TensorFlow, and modern ML frameworks.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              <span>Get In Touch</span>
            </motion.a>

            <motion.a
              href="https://drive.google.com/file/d/1J44Y9_Ov_lYxHd__ah3fdk2GD_LMfsJj/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full font-semibold flex items-center space-x-2 hover:bg-purple-400 hover:text-white transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              <span>Download CV</span>
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center space-x-6"
          >
            <motion.a
              href="https://github.com/ABDElrahman022"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
            >
              <Github className="w-8 h-8" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/abdelrahman-muhammed"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
            >
              <Linkedin className="w-8 h-8" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 w-4 h-4 bg-purple-400 rounded-full opacity-20"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/3 right-10 w-6 h-6 bg-pink-400 rounded-full opacity-20"
      />
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-blue-400 rounded-full opacity-20"
      />
    </section>
  );
};

export default Hero;