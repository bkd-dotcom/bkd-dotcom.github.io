import React from 'react';
import { GraduationCap } from 'lucide-react';

interface EducationItem {
  degree: string;
  school: string;
  period: string;
  description: string;
  location?: string;
}

const educationData: EducationItem[] = [
  {
    degree: "B.Tech in Computer Science and Mathematics",
    school: "Pennsylvania State University",
    location: "University Park, PA, USA",
    period: "August 2023- Present",
    description: "GPA: 3.91/4.0 . Dean’s List: Fall 2023, Spring 2024, Summer 2024, Fall 2024. Courses Completed: Python Programming, Java Programming, C and Systems Programming, Discrete Mathematics "
  }
];

export function Education() {
  return (
    <section className="py-20 bg-slate-50" id="education">
      <div className="container px-4 mx-auto max-w-5xl">
        <div className="flex items-center gap-3 mb-12">
          <GraduationCap className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold text-gray-900">Education</h2>
        </div>
        <div className="space-y-8">
          {educationData.map((item, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900">{item.degree}</h3>
              <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-600">
                <div>
                  <p className="font-semibold text-blue-600">{item.school}</p>
                  {item.location && (
                    <p className="text-sm mt-1">{item.location}</p>
                  )}
                </div>
                <p className="mt-2 sm:mt-0 text-sm font-medium">{item.period}</p>
              </div>
              <p className="mt-4 text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
