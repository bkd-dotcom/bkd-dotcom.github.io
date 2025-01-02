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
    title: "Software Development Engineer Intern",
    company: "Celebal Technologies",
    location: "Remote",
    period: "Feb 2023 - Aug 2023",
    description: [
      "Developed and maintained web applications using React.js and TypeScript",
      "Implemented responsive designs and modern UI components",
      "Collaborated with senior developers on large-scale projects",
      "Participated in code reviews and agile development processes"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Git"]
  }
];

export function Experience() {
  return (
    <section className="py-20 bg-gray-900" id="experience">
      <div className="container px-4 mx-auto max-w-5xl">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="w-8 h-8 text-blue-400" />
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
