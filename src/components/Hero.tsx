import React from 'react';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Hello Visitors, I'm<span className="text-indigo-400 relative">
            Binay Dalai
            <span className="absolute -inset-1 bg-indigo-500/20 blur-lg -z-10"></span>
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          I am a Computer Science and Mathematics Undergrad at Pennsylvania State University, and I am passionate about Quantum Computing and Machine Learning
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors shadow-lg hover:shadow-xl hover:shadow-indigo-500/20"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-indigo-400 text-indigo-400 rounded-lg hover:bg-indigo-500/10 transition-colors shadow-lg hover:shadow-xl"
          >
            Contact Me
          </a>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
}
