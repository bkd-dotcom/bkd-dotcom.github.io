
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
    degree: "Bachelor of Science in Computer Science and Mathematics",
    school: "Pennsylvania State University",
    location: "University Park, PA, USA",
    period: "August 2023 - Present (Expected Graduation Date - May 2026)",
    description: `GPA: 3.91/4.0<br />Dean’s List: Fall 2023, Spring 2024, Summer 2024, Fall 2024, Spring 2025 <br />Courses Completed: Python Programming, Java Programming, C and Systems Programming, Discrete Mathematics<br /> Clubs Involved: Nittany AI Alliance, ACM ML Club, and Google Student Developer's Club`
  }
];

export function Education({ visible }: { visible?: boolean }) {
  return (
    <section className="py-20 bg-transparent" id="education">
      <div className="container px-4 mx-auto max-w-5xl">
        <div className="flex items-center gap-3 mb-12">
          <GraduationCap className={`w-8 h-8 text-blue-600${visible ? ' animate-reveal-bounce' : ''}`} />
          <h2 className="text-3xl font-bold text-white">Education</h2>
        </div>
        <div className="space-y-8">
          {educationData.map((item, index) => (
            <div 
              key={index}
              className="p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white/5 backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold text-white">{item.degree}</h3>
              <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between text-blue-200">
                <div>
                  <p className="font-semibold text-blue-400">{item.school}</p>
                  {item.location && (
                    <p className="text-sm mt-1 text-blue-200">{item.location}</p>
                  )}
                </div>
                <p className="mt-2 sm:mt-0 text-sm font-medium text-blue-200">{item.period}</p>
              </div>
              <p
                className="mt-4 text-blue-100 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: item.description }}
              ></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
