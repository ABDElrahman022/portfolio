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
    <section id="experience" className="py-20 px-6 bg-slate-800/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Experience & <span className="text-purple-400">Leadership</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-slate-900 hidden md:block" />
                  
                  <div className="md:ml-20 bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-purple-500/50 transition-all duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-purple-300 mb-2">
                          <div className="flex items-center space-x-2">
                            <Briefcase className="w-4 h-4" />
                            <span className="font-semibold">{exp.company}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start lg:items-end space-y-2">
                        <div className="flex items-center space-x-2 text-gray-400">
                          <Calendar className="w-4 h-4" />
                          <span className="font-medium">{exp.period}</span>
                        </div>
                        <span className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <ul className="space-y-2">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="text-gray-300 flex items-start space-x-2">
                            <span className="text-purple-400 mt-2">•</span>
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
                          className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30"
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
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center">
                <Award className="w-8 h-8 text-purple-400 mr-3" />
                Leadership & Impact
              </h3>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
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