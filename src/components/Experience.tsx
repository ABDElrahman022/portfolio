import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Users, Award } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'AI Core Team Member',
      company: 'Google Developer Student Clubs (GDSC)',
      location: 'Alexandria, Egypt',
      period: '2023 - 2024',
      description: [
        'Led AI workshops and mentored students in machine learning concepts',
        'Organized technical events including The Matrix Summit at Badr University in Cairo',
        'Developed educational content for AI and machine learning topics',
        'Collaborated with team members to promote AI literacy among students',
        'Facilitated hands-on coding sessions and project development'
      ],
      technologies: ['Python', 'Machine Learning', 'TensorFlow', 'Workshop Development', 'Mentoring'],
      type: 'Volunteer Leadership'
    },
    {
      title: 'Skills Development Program Participant',
      company: 'UNICEF & Enactus Egypt',
      location: 'Egypt',
      period: '2022',
      description: [
        'Participated in comprehensive skills development program',
        'Developed leadership and project management capabilities',
        'Engaged in community service and social impact projects',
        'Enhanced communication and teamwork skills',
        'Contributed to sustainable development initiatives'
      ],
      technologies: ['Leadership', 'Project Management', 'Community Engagement', 'Social Impact'],
      type: 'Professional Development'
    },
    {
      title: 'Machine Learning Project Leader',
      company: 'Academic Projects',
      location: 'Alexandria, Egypt',
      period: '2023 - 2024',
      description: [
        'Led development of "Mindful" graduation project achieving A+ grade',
        'Managed 7-member team through complete project lifecycle',
        'Developed AI-powered psychological assessment tools with 97.62% accuracy',
        'Implemented RAG-based chatbot using Mixtral-8x7B model',
        'Presented project findings and technical documentation'
      ],
      technologies: ['Python', 'XGBoost', 'TensorFlow', 'RAG', 'Pinecone', 'Team Leadership'],
      type: 'Academic Leadership'
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-slate-800/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Experience & <span className="text-purple-400">Leadership</span>
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
          </motion.div>

          <div className="relative">
            {/* Timeline Line - Hidden on mobile, visible on larger screens */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 hidden lg:block" />

            <div className="space-y-8 sm:space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="relative"
                >
                  {/* Timeline Dot - Hidden on mobile */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-slate-900 hidden lg:block" />
                  
                  <div className="lg:ml-20 bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 border border-slate-700 hover:border-purple-500/50 transition-all duration-300">
                    <div className="flex flex-col space-y-4 mb-4 sm:mb-6">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{exp.title}</h3>
                        <div className="flex flex-col space-y-2 text-purple-300">
                          <div className="flex items-center space-x-2">
                            <Briefcase className="w-4 h-4 flex-shrink-0" />
                            <span className="font-semibold text-sm sm:text-base">{exp.company}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4 flex-shrink-0" />
                            <span className="text-sm sm:text-base">{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                        <div className="flex items-center space-x-2 text-gray-400">
                          <Calendar className="w-4 h-4 flex-shrink-0" />
                          <span className="font-medium text-sm sm:text-base">{exp.period}</span>
                        </div>
                        <span className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 px-3 py-1 rounded-full text-xs sm:text-sm border border-purple-500/30 self-start">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <div className="mb-4 sm:mb-6">
                      <ul className="space-y-2">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="text-gray-300 flex items-start space-x-2 text-sm sm:text-base">
                            <span className="text-purple-400 mt-1 sm:mt-2 flex-shrink-0">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          whileHover={{ scale: 1.1 }}
                          className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm border border-purple-500/30"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-12 sm:mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-6 sm:p-8 border border-purple-500/20">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center justify-center flex-wrap">
                <Award className="w-6 sm:w-8 h-6 sm:h-8 text-purple-400 mr-3" />
                Leadership & Impact
              </h3>
              <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
                Through my experience in leading AI projects and mentoring fellow students, 
                I've developed strong leadership skills and a passion for sharing knowledge. 
                I believe in the power of collaboration and community building in advancing 
                AI and machine learning education.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;