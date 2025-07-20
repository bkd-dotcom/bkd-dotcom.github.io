import React from 'react';
import { Briefcase } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies?: string[];
}

const experienceData: ExperienceItem[] = [
  {
    title: "IBM AI Engineer Co-op Intern",
    company: "Midwest Client Engineering Team",
    location: "State College, PA",
    period: "May 2025 – Present",
    description: [
      "Collaborating with the Midwest Client Engineering Team to design and deploy AI-powered solutions for enterprise clients (NLP, generative AI, ML)",
      "Building and optimizing scalable AI models using IBM Watson, Red Hat OpenShift, and foundational models",
      "Deploying real-time client applications in cloud-native environments"
    ],
    technologies: ["IBM Watson", "Red Hat OpenShift", "NLP", "Generative AI", "Machine Learning", "Cloud-Native"]
  },
  {
    title: "Machine Learning Engineer Intern",
    company: "Nittany AI Advance, Pennsylvania State University",
    location: "University Park, PA",
    period: "December 2024 - April 2025 ",
    description: [
      "Working on 'Learned Virus Mitigation Project' sponsored by Lockheed Martin",
      "Developing machine learning models including reinforcement learning and physics-informed neural networks",
      "Predicting virus spread, optimizing containment strategies, and scheduling care actions in dynamic scenarios",
      "Developing AI/ML solutions to find, track, and stop virus spread in containment scenarios",
      "Solutions applicable to defense applications across aerospace, autonomy, missile defense, and advanced engineering"
    ],
    technologies: ["Machine Learning", "Reinforcement Learning", "Neural Networks", "AI"]
  },
  {
    title: "Math-Tutor and  Computer Science 360 Grader",
    company: "Pennsylvania State University",
    location: "University Park, PA",
    period: "August 2024 - May 2025",
    description: [
      "Tutoring and mentoring students in College Level Calculus I and II",
      "Supporting approximately 500 students in 0-100 Level Math courses",
      "Providing personalized academic support and addressing individual learning needs",
      "Improving students' problem-solving abilities and course performance",
      "Conducting group study sessions"
    ],
    technologies: ["Calculus", "Algebra", "Geometry", "Mathematics"]
  },
  {
    title: "Student Researcher",
    company: "Nirma University",
    location: "Ahmedabad",
    period: "May 2024 - August 2024",
    description: [
      "Led research on 'Quantum-Based Transformer Model'",
      "Improved AI Transformer Model efficiency by 43%",
      "Reduced data processing time by 30%",
      "Implemented Quantum approximate optimization algorithm",
      "Developed and optimized quantum-enhanced vision transformer models"
    ],
    technologies: ["Python", "TensorFlow", "Qiskit", "PyTorch", "Quantum Computing"]
  },
  {
    title: "Research Intern",
    company: "Indian Institute of Technology",
    location: "Gandhinagar",
    period: "May 2024 - June 2024",
    description: [
      "Worked on 'Generative AI meets Quantum Software Engineering' with focus on Green Computing",
      "Achieved 57% increase in accuracy for Green Computing decisions",
      "Collaborated with team to design and implement Machine Learning solutions",
      "Developed innovative approaches combining quantum computing and AI"
    ],
    technologies: ["Qiskit", "NumPy", "JavaScript", "SQL", "Python", "C"]
  }
];

export function Experience({ visible }: { visible?: boolean }) {
  return (
    <section className="py-20 bg-gray-900" id="experience">
      <div className="container px-4 mx-auto max-w-5xl">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className={`w-8 h-8 text-blue-400${visible ? ' animate-reveal-bounce' : ''}`} />
          <h2 className="text-3xl font-bold text-white">Experience</h2>
        </div>
        <div className="space-y-8">
          {experienceData.map((item, index) => (
            <div 
              key={index}
              className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700"
            >
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-300">
                <div>
                  <p className="font-semibold text-blue-400">{item.company}</p>
                  <p className="text-sm mt-1">{item.location}</p>
                </div>
                <p className="mt-2 sm:mt-0 text-sm font-medium">{item.period}</p>
              </div>
              <ul className="mt-4 text-gray-300 leading-relaxed list-disc list-inside space-y-2">
                {item.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
              {item.technologies && (
                <div className="mt-6">
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 text-sm bg-blue-900/50 text-blue-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
