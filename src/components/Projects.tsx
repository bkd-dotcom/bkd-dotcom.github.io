import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'AI Transformer Optimization',
    description: 'Improved AI Transformer Model efficiency by 43% using Quantum approximate optimization algorithm. Implemented using Python, TensorFlow, Qiskit, and PyTorch.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    github: 'https://github.com/bkd-dotcom/Transformer-Project',
    technologies: ['Python', 'TensorFlow', 'Qiskit', 'PyTorch']
  },
  {
    title: 'Depr AI',
    description: 'Machine learning model for detecting depression through speech analysis. Built with TensorFlow and Keras, utilizing datasets from Kaggle and Hugging Face.',
    image: 'https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?auto=format&fit=crop&w=800&q=80',
    github: 'https://github.com/bkd-dotcom/Depr-AI',
    technologies: ['Python', 'TensorFlow', 'Keras', 'Speech Analysis']
  }
];

export function Projects({ visible }: { visible?: boolean }) {
  return (
    <section id="projects" className="py-20 bg-black/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-center gap-3 mb-12">
          <ExternalLink className={`w-8 h-8 text-indigo-400${visible ? ' animate-project-spin' : ''}`} />
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white">Projects</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-white/5 rounded-lg overflow-hidden backdrop-blur-sm">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-white"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}