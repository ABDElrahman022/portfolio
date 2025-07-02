import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Database, Cloud, BarChart3, Wrench } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: Brain,
      title: 'Machine Learning & AI',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'TensorFlow', level: 90 },
        { name: 'Scikit-learn', level: 85 },
        { name: 'XGBoost', level: 80 },
        { name: 'OpenCV', level: 75 },
        { name: 'LangChain', level: 70 }
      ]
    },
    {
      icon: BarChart3,
      title: 'Data Science & Analytics',
      skills: [
        { name: 'Pandas', level: 90 },
        { name: 'NumPy', level: 85 },
        { name: 'Plotly', level: 80 },
        { name: 'Streamlit', level: 75 },
        { name: 'Jupyter', level: 90 },
        { name: 'Statistical Analysis', level: 80 }
      ]
    },
    {
      icon: Code,
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'C++', level: 80 },
        { name: 'Java', level: 75 },
        { name: 'SQL', level: 85 },
        { name: 'JavaScript', level: 70 },
        { name: 'R', level: 65 }
      ]
    },
    {
      icon: Database,
      title: 'Databases & Storage',
      skills: [
        { name: 'MongoDB', level: 80 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'MySQL', level: 70 },
        { name: 'Pinecone', level: 75 },
        { name: 'Vector Databases', level: 70 },
        { name: 'Data Warehousing', level: 65 }
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      skills: [
        { name: 'Azure', level: 75 },
        { name: 'Google Colab', level: 90 },
        { name: 'Hugging Face', level: 80 },
        { name: 'Git/GitHub', level: 85 },
        { name: 'Docker', level: 70 },
        { name: 'MLOps', level: 65 }
      ]
    },
    {
      icon: Wrench,
      title: 'Frameworks & Tools',
      skills: [
        { name: 'Flask', level: 80 },
        { name: 'Java Swing', level: 75 },
        { name: 'VS Code', level: 95 },
        { name: 'Jupyter Notebooks', level: 90 },
        { name: 'Design Patterns', level: 80 },
        { name: 'Agile/Scrum', level: 75 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section id="skills" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05, margin: "-200px" }}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Technical <span className="text-purple-400">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg flex-shrink-0">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium text-sm sm:text-base">{skill.name}</span>
                        <span className="text-purple-400 text-sm font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-500/20">
              <h3 className="text-xl font-bold text-white mb-4">Continuous Learning</h3>
              <p className="text-gray-300 text-base max-w-3xl mx-auto">
                As a Machine Learning Engineer, I'm committed to staying at the forefront of AI 
                technology. Currently exploring advanced deep learning architectures, MLOps practices, 
                and emerging AI frameworks to build more intelligent and scalable solutions.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;