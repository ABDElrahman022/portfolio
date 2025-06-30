import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: 'Bachelor of Information Technology',
      institution: 'Egyptian E-Learning University (EELU)',
      location: 'Alexandria, Egypt',
      period: '2021 - 2025',
      description: 'Graduated with a Bachelor\'s degree in Computers and Information Technology, with a focus on Artificial Intelligence, and Machine Learning.',
      achievements: [
        'GPA: 3.79/4.0',
        'Faculty of Computers and Information',
        'Specialization in AI and Machine Learning',
        'Led graduation project "Mindful" achieving A+ grade'
      ],
      gpa: '3.79/4.0',
      status: 'Graduated – Class of 2025'
    }
  ];

  const courses = [
    {
      title: 'Machine Learning Engineer',
      issuer: 'Digital Egypt Pioneers (Microsoft)',
      date: 'Apr 2024 - Oct 2024',
      skills: ['Advanced ML', 'Deep Learning', 'MLOps', 'Azure ML']
    },
    {
      title: 'Machine Learning',
      issuer: 'Electro Pi',
      date: 'Jul 2023 - Feb 2024',
      skills: ['Python', 'Scikit-learn', 'Data Analysis', 'Model Development']
    },
    {
      title: 'IoT and Artificial Intelligence',
      issuer: 'National Telecommunication Institute (NTI)',
      date: 'Sep 2023 - Oct 2023',
      skills: ['IoT Systems', 'AI Integration', 'Edge Computing', 'Smart Devices']
    }
  ];

  const certifications = [
    {
      title: 'Machine Learning Engineer',
      issuer: 'Digital Egypt Pioneers Program (Microsoft)',
      date: 'Oct 2024',
      skills: ['Azure ML', 'MLOps', 'Model Deployment']
    },
    {
      title: 'CCNA: Switching, Routing, and Wireless Essentials',
      issuer: 'Cisco',
      date: 'Jan 2024',
      skills: ['Networking', 'Routing', 'Switching', 'Wireless']
    },
    {
      title: 'Career Essentials in Generative AI',
      issuer: 'Microsoft and LinkedIn',
      date: 'Dec 2023',
      skills: ['Generative AI', 'LLMs', 'AI Applications']
    },
    {
      title: 'IoT and AI (Digital Egypt Youth)',
      issuer: 'MCIT',
      date: 'Sep 2023',
      skills: ['IoT', 'AI Integration', 'Smart Systems']
    },
    {
      title: 'HCIA AI',
      issuer: 'Huawei (EELU Certified)',
      date: 'Aug 2022',
      skills: ['AI Fundamentals', 'Huawei AI', 'Deep Learning']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Education & <span className="text-purple-400">Learning</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
          </motion.div>

          {/* Formal Education */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <GraduationCap className="w-8 h-8 text-purple-400 mr-3" />
              Formal Education
            </h3>
            
            {education.map((edu, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">{edu.degree}</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-purple-300 mb-2">
                      <div className="flex items-center space-x-2">
                        <BookOpen className="w-4 h-4" />
                        <span className="font-semibold">{edu.institution}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start lg:items-end space-y-2">
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{edu.period}</span>
                    </div>
                    <span className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">
                      {edu.status}
                    </span>
                  </div>
                </div>

                <p className="text-gray-300 mb-6">{edu.description}</p>

                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-white mb-3">Key Achievements:</h5>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start space-x-2">
                        <span className="text-purple-400 mt-2">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-purple-400" />
                    <span className="text-white font-medium">Current GPA: {edu.gpa}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Courses */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <BookOpen className="w-8 h-8 text-purple-400 mr-3" />
              Professional Courses
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="mb-4">
                    <h4 className="text-lg font-bold text-white mb-2">{course.title}</h4>
                    <p className="text-purple-300 font-medium">{course.issuer}</p>
                    <p className="text-gray-400 text-sm">{course.date}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {course.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-sm border border-purple-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Award className="w-8 h-8 text-purple-400 mr-3" />
              Certifications
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="mb-4">
                    <h4 className="text-lg font-bold text-white mb-2">{cert.title}</h4>
                    <p className="text-purple-300 font-medium">{cert.issuer}</p>
                    <p className="text-gray-400 text-sm">{cert.date}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-sm border border-purple-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">Lifelong Learning Philosophy</h3>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                As a Machine Learning Engineer, I believe in continuous learning and staying updated 
                with the latest AI technologies. I actively pursue advanced courses, participate in 
                AI communities, and contribute to open-source ML projects to expand my expertise.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
