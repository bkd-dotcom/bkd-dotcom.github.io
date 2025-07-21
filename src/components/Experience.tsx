import React, { useRef, useState } from 'react';
import { Briefcase } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies?: string[];
  logo?: string;
}

const experienceData: (ExperienceItem & { companyUrl?: string })[] = [
  {
    title: "IBM AI Engineer Co-op Intern",
    company: "Midwest Client Engineering Team",
    companyUrl: "https://www.ibm.com/",
    location: "State College, PA",
    period: "May 2025 – Present",
    description: "Designed and deployed AI-powered solutions for enterprise clients. Built scalable AI models using IBM Watson and OpenShift. Deployed real-time client applications in cloud-native environments.",
    technologies: ["IBM Watson", "Red Hat OpenShift", "NLP", "Generative AI", "Machine Learning", "Cloud-Native"],
    logo: "/assets/ibm.png"
  },
  {
    title: "Lockheed Martin Machine Learning Engineer Intern",
    company: "Lockheed Martin",
    companyUrl: "https://www.lockheedmartin.com/",
    location: "University Park, PA",
    period: "December 2024 - April 2025 ",
    description: "Developed ML models for virus mitigation (Lockheed Martin project). Built reinforcement learning and neural network solutions. Applied AI/ML to defense and containment scenarios.",
    technologies: ["Machine Learning", "Reinforcement Learning", "Neural Networks", "AI"],
    logo: "/assets/lockheed.png"
  },
  {
    title: "Math-Tutor and Computer Science Grader",
    company: "Pennsylvania State University",
    companyUrl: "https://www.psu.edu/",
    location: "University Park, PA",
    period: "August 2024 - May 2025",
    description: "Tutored and mentored students in Calculus I & II. Supported 500+ students in math courses. Led group study sessions and academic support.",
    technologies: ["Calculus", "Algebra", "Geometry", "Mathematics"],
    logo: "/assets/psu.png"
  },
  {
    title: "Student Researcher",
    company: "Nirma University",
    companyUrl: "https://www.nirmauni.ac.in/",
    location: "Ahmedabad",
    period: "May 2024 - August 2024",
    description: "Led research on Quantum-Based Transformer Model. Improved AI model efficiency by 43% and reduced processing time. Implemented quantum optimization algorithms.",
    technologies: ["Python", "TensorFlow", "Qiskit", "PyTorch", "Quantum Computing"],
    logo: "/assets/nirma.png"
  }
];

export function Experience({ visible }: { visible?: boolean }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  // Helper to scroll by one card (accurate, robust)
  const scrollByCard = (dir: 'left' | 'right') => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.querySelector('div[data-carousel-card]');
    if (!card) return;
    const cardRect = (card as HTMLElement).getBoundingClientRect();
    const gap = 32; // px gap-x-8
    const cardWidth = cardRect.width + gap;
    container.scrollTo({
      left: container.scrollLeft + (dir === 'right' ? cardWidth : -cardWidth),
      behavior: 'smooth',
    });
  };

  // Drag-to-scroll (clickpad) logic
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = scrollRef.current;
    if (!container) return;
    isDragging.current = true;
    startX.current = e.pageX - container.offsetLeft;
    scrollLeft.current = container.scrollLeft;
    container.classList.add('select-none');
  };
  const handleMouseLeave = () => {
    isDragging.current = false;
    const container = scrollRef.current;
    if (container) container.classList.remove('select-none');
  };
  const handleMouseUp = () => {
    isDragging.current = false;
    const container = scrollRef.current;
    if (container) container.classList.remove('select-none');
  };
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    const container = scrollRef.current;
    if (!container) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = x - startX.current;
    container.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <section className="py-20 bg-gray-900" id="experience">
      <div className="container px-4 mx-auto max-w-5xl">
        <div className="flex items-center gap-3 mb-12 justify-center">
          <Briefcase className={`w-8 h-8 text-blue-400${visible ? ' animate-reveal-bounce' : ''}`} />
          <h2 className="text-3xl font-bold text-white">Experience</h2>
        </div>
        <div
          className="relative w-full overflow-x-auto py-2 pointer-events-auto"
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={e => {
            const container = scrollRef.current;
            if (!container) return;
            isDragging.current = true;
            startX.current = e.touches[0].pageX - container.offsetLeft;
            scrollLeft.current = container.scrollLeft;
            container.classList.add('select-none');
          }}
          onTouchEnd={handleMouseUp}
          onTouchCancel={handleMouseLeave}
          onTouchMove={e => {
            if (!isDragging.current) return;
            const container = scrollRef.current;
            if (!container) return;
            const x = e.touches[0].pageX - container.offsetLeft;
            const walk = x - startX.current;
            container.scrollLeft = scrollLeft.current - walk;
          }}
        >
          {/* Arrow Buttons (fixed, always visible) */}
          <div className="pointer-events-none">
            <button
              className="pointer-events-auto fixed left-0 top-1/2 -translate-y-1/2 z-30 bg-gray-900/70 hover:bg-gray-900/90 text-white rounded-full p-2 shadow-lg sm:block"
              style={{ marginLeft: '4px' }}
              aria-label="Scroll left"
              onClick={() => scrollByCard('left')}
              tabIndex={0}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <button
              className="pointer-events-auto fixed right-0 top-1/2 -translate-y-1/2 z-30 bg-gray-900/70 hover:bg-gray-900/90 text-white rounded-full p-2 shadow-lg sm:block"
              style={{ marginRight: '4px' }}
              aria-label="Scroll right"
              onClick={() => scrollByCard('right')}
              tabIndex={0}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
          </div>
          <div
            className="flex flex-row gap-x-8"
            style={{ cursor: 'grab' }}
          >
            {experienceData.map((item, index) => (
              <div
                key={index}
                data-carousel-card
                className={`min-w-[380px] max-w-sm flex-shrink-0 bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700`}
              >
                {item.logo && (
                  <div className="flex justify-center mb-4">
                    <img src={item.logo} alt={item.company + ' logo'} className="h-18 sm:h-20 object-contain" style={{ height: '72px' }} />
                  </div>
                )}
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-300">
                  <div>
                    {item.companyUrl ? (
                      <a href={item.companyUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-400 hover:underline">
                        {item.company}
                      </a>
                    ) : (
                      <p className="font-semibold text-blue-400">{item.company}</p>
                    )}
                  </div>
                  <div className="flex flex-col sm:items-end text-right">
                    {item.location && (
                      <p className="text-sm">{item.location}</p>
                    )}
                    <p className="mt-2 sm:mt-0 text-sm font-medium">{item.period}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-300 leading-relaxed whitespace-pre-line">
                  {item.description}
                </p>
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
      </div>
    </section>
  );
}
