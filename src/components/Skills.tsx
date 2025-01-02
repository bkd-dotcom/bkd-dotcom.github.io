import React from 'react';

const skills = [
  { name: 'Python', level: 95 },
  { name: 'C++', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'TensorFlow/Keras', level: 90 },
  { name: 'IBM Quantum', level: 85 },
  { name: 'SQL/MySQL', level: 90 },
  { name: 'Django', level: 85 },
  { name: 'Docker', level: 80 },
  { name: 'Git', level: 90 },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-black/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Skills</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
              <div className="flex justify-between mb-2">
                <span className="font-medium text-white">{skill.name}</span>
                <span className="text-gray-300">{skill.level}%</span>
              </div>
              <div className="w-full bg-black/20 rounded-full h-2.5">
                <div
                  className="bg-indigo-500 h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}