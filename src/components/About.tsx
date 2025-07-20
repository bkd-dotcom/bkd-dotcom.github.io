import React from 'react';
import { Brain, Database, Code2, User } from 'lucide-react';

export function About({ visible }: { visible?: boolean }) {
  return (
    <section id="about" className="py-20 bg-black/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-center gap-3 mb-12">
          <User className={`w-8 h-8 text-indigo-400${visible ? ' animate-about-fadeup' : ''}`} />
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-0 text-white">About Me</h2>
        </div>
        <div className="text-gray-300 text-lg text-center mb-12 max-w-3xl mx-auto">
          <p>I am fascinated by the applications of quantum computing and Machine Learning, which is my main focus of study and research. I have completed multiple courses on AI, ML, data analysis, and quantum computation, and I have earned several certifications that demonstrate my proficiency and creativity in these fields.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white/5 rounded-lg backdrop-blur-sm">
            <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="w-8 h-8 text-indigo-400 animate-ml-pulse" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Machine Learning</h3>
            <p className="text-gray-300">Expertise in TensorFlow, Keras, and implementing advanced ML algorithms.</p>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-lg backdrop-blur-sm">
            <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code2 className="w-8 h-8 text-indigo-400 animate-qc-spin" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Quantum Computing</h3>
            <p className="text-gray-300">Experience with IBM Quantum and quantum optimization algorithms.</p>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-lg backdrop-blur-sm">
            <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Database className="w-8 h-8 text-indigo-400 animate-fsd-bounce" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Full Stack Development</h3>
            <p className="text-gray-300">Proficient in multiple programming languages and development tools.</p>
          </div>
        </div>
      </div>
    </section>
  );
}