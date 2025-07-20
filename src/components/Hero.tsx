import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  const typewriterText = "Computer Science and Mathematics Undergrad at Pennsylvania State University. I am passionate about Quantum Computing and Machine Learning";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(typewriterText.slice(0, i + 1));
      i++;
      if (i === typewriterText.length) clearInterval(interval);
    }, 18);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Animated SVG Illustration */}
          <div className="w-64 md:w-80 flex-shrink-0 flex items-center justify-center">
            <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              <ellipse cx="200" cy="370" rx="120" ry="18" fill="#E0E7EF"/>
              <rect x="120" y="180" width="160" height="100" rx="12" fill="#A5B4FC"/>
              <rect x="140" y="200" width="120" height="60" rx="8" fill="#fff" className="animate-glow"/>
              <rect x="170" y="260" width="60" height="10" rx="5" fill="#6366F1"/>
              {/* Person */}
              <ellipse cx="200" cy="170" rx="22" ry="22" fill="#FBBF24"/>
              <rect x="188" y="192" width="24" height="38" rx="10" fill="#6366F1"/>
              {/* Arm */}
              <rect x="210" y="210" width="30" height="8" rx="4" fill="#6366F1" className="origin-left animate-arm"/>
              {/* Desk */}
              <rect x="100" y="280" width="200" height="18" rx="6" fill="#334155"/>
              {/* Coffee mug */}
              <rect x="270" y="265" width="16" height="16" rx="4" fill="#F87171"/>
              <rect x="274" y="260" width="8" height="8" rx="4" fill="#fff" opacity="0.7"/>
            </svg>
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Hi, I'm <span className="text-indigo-400 relative">
                Binay
                <span className="absolute -inset-1 bg-indigo-500/20 blur-lg -z-10"></span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto md:mx-0 font-mono whitespace-pre-line">
              {displayedText}
              <span className="inline-block w-2 h-6 align-middle bg-gray-300 animate-blink ml-1"></span>
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
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
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </div>
      </div>
      {/* Custom animation styles */}
      <style>{`
        .animate-glow {
          filter: drop-shadow(0 0 16px #a5b4fc88);
          animation: glow 2s ease-in-out infinite alternate;
        }
        @keyframes glow {
          0% { filter: drop-shadow(0 0 8px #a5b4fc44); }
          100% { filter: drop-shadow(0 0 24px #a5b4fc); }
        }
        .animate-arm {
          animation: arm-move 1.8s ease-in-out infinite alternate;
        }
        @keyframes arm-move {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-15deg); }
        }
        .animate-blink {
          animation: blink 1s steps(2, start) infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
