import React from 'react';
import { ExternalLink, Github, Brain, Heart, Car, BarChart3, Gamepad2, Building } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Mindful - Mental Health AI Platform',
      description: 'Led a 7-member team to develop a comprehensive mental health platform with AI-powered psychological assessments. Achieved A+ grade with 97.62% accuracy in panic disorder detection using XGBoost.',
      image: '/WhatsApp Image 2024-12-27 at 20.09.57_ce6bbf84.jpg',
      technologies: ['Python', 'XGBoost', 'Logistic Regression', 'SVM', 'Mixtral-8x7B', 'RAG', 'Pinecone'],
      category: 'AI/ML - Graduation Project',
      icon: Brain,
      github: 'https://github.com/ABDElrahman022/Mindful-GP',
      demo: '#',
      achievements: [
        'Panic Disorder Detection: 97.62% accuracy',
        'Mental Health from Social Media: 98% accuracy',
        'Anxiety Prediction: 93.45% accuracy'
      ]
    },
    {
      title: 'Breast Cancer Detection CNN',
      description: 'Built a convolutional neural network using MobileNetV2 to classify breast cell images into benign, normal, and malignant categories with high accuracy.',
      image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['TensorFlow', 'MobileNetV2', 'OpenCV', 'Python'],
      category: 'Computer Vision',
      icon: Heart,
      github: 'https://github.com/ABDElrahman022/breast-cancer-model',
      demo: '#',
      achievements: [
        '90% training accuracy',
        '80% validation accuracy'
      ]
    },
    {
      title: 'Car Price Prediction Web App',
      description: 'Developed a machine learning-powered web application to estimate used car prices using Flask and Scikit-learn with an intuitive user interface.',
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flask', 'Scikit-learn', 'Python', 'HTML/CSS'],
      category: 'Web Development + ML',
      icon: Car,
      github: 'https://github.com/ABDElrahman022/Car-Price-Prediction-with-Flask',
      demo: '#'
    },
    {
      title: 'Automated EDA Tool',
      description: 'Created an automatic exploratory data analysis tool that processes various data formats and generates comprehensive insights and visualizations.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Pandas', 'Plotly', 'Streamlit'],
      category: 'Data Analysis',
      icon: BarChart3,
      github: 'https://github.com/ABDElrahman022/Automated_EDA',
      demo: '#'
    },
    {
      title: 'Tic Tac Toe with Minimax AI',
      description: 'Implemented two versions of Tic Tac Toe: a basic 2-player version and an advanced version with Minimax algorithm for unbeatable AI opponent.',
      image: 'https://images.pexels.com/photos/278918/pexels-photo-278918.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Minimax Algorithm', 'Game Theory'],
      category: 'AI Algorithms',
      icon: Gamepad2,
      github: 'https://github.com/ABDElrahman022/Tic_Tac_Toc-Minimax-AI',
      demo: '#'
    },
    {
      title: 'Banking System with Design Patterns',
      description: 'Developed a comprehensive GUI banking application implementing core design patterns including Singleton, Factory, Strategy, Decorator, and Observer.',
      image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Java', 'Java Swing', 'Design Patterns', 'OOP'],
      category: 'Software Engineering',
      icon: Building,
      github: 'https://github.com/ABDElrahman022/BankingSystem',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured <span className="text-purple-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
          <p className="text-gray-300 text-base mt-4 max-w-2xl mx-auto">
            Here are some of my key projects showcasing expertise in machine learning, 
            AI development, and software engineering with real-world applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-purple-500/50 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg">
                    <project.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-slate-900/80 text-purple-300 px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm sm:text-base line-clamp-3">{project.description}</p>

                {project.achievements && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-purple-300 mb-2">Key Achievements:</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      {project.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-purple-400 mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors duration-200"
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors duration-200"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/ABDElrahman022"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;