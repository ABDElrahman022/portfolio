import React from 'react';
import { motion } from 'framer-motion';
import { User, Heart, Target, Zap } from 'lucide-react';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const stats = [
    { icon: Target, label: 'ML Projects Completed', value: '8+' },
    { icon: Zap, label: 'Years of AI Community Involvement', value: '2+' },
    { icon: Heart, label: 'Technologies Mastered', value: '15+' },
  ];

  return (
    <section id="about" className="min-h-screen py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              About <span className="text-purple-400">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <User className="w-8 h-8 text-purple-400" />
                <h3 className="text-2xl font-bold text-white">Who I Am</h3>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a passionate Machine Learning Engineer with a strong foundation in AI, 
                data science, and software development. Graduated with a Bachelor's degree in Computers and Information                 Technology from the Faculty of Computers and Information Technology, Egyptian E-Learning University,                    with a GPA of 3.79/4.0 – Class of 2025.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                My journey in machine learning has led me to work on cutting-edge projects 
                including mental health AI systems, medical image classification, and predictive 
                analytics. I specialize in Python, TensorFlow, and various ML frameworks to 
                create intelligent solutions that solve real-world problems.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                As a project leader for my graduation project "Mindful," I successfully led 
                a 7-member team to develop a comprehensive mental health platform with AI-powered 
                assessments, achieving an A+ grade and demonstrating my leadership and technical skills.
              </p>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-purple-500/20"
              >
                <h4 className="text-xl font-semibold text-white mb-3">My Mission</h4>
                <p className="text-gray-300">
                  To leverage artificial intelligence and machine learning technologies in creating 
                  innovative solutions that make a positive impact on society, particularly in 
                  healthcare and mental wellness domains.
                </p>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-8">
              <div className="grid gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 backdrop-blur-sm"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg">
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">{stat.value}</div>
                        <div className="text-gray-400">{stat.label}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-slate-800/50 to-purple-900/20 p-8 rounded-xl border border-purple-500/20 backdrop-blur-sm"
              >
                <h4 className="text-xl font-semibold text-white mb-4">Quick Facts</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Location:</span>
                    <span className="text-white">Alexandria, Egypt</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Education:</span>
                    <span className="text-white">Information Technology</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">GPA:</span>
                    <span className="text-white">3.79/4.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Specialization:</span>
                    <span className="text-white">AI & Machine Learning</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;