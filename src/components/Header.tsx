import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Instagram } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-black/20 backdrop-blur-sm z-50 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-blue-400 text-white text-lg font-extrabold shadow-md border-2 border-white/20 select-none">BD</span>
            <a href="#home" className="text-xl font-bold text-white">Binay Dalai</a>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#experience" className="text-gray-300 hover:text-white transition-colors">Experiences</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
            <a href="#education" className="text-gray-300 hover:text-white transition-colors">Education</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </nav>
          <div className="flex space-x-4">
            <a href="https://github.com/bkd-dotcom" target="_blank" rel="noopener noreferrer" className="icon-hover text-gray-300 hover:text-white">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/binay-dalai" target="_blank" rel="noopener noreferrer" className="icon-hover text-gray-300 hover:text-white">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:binaydalai2024@gmail.com" className="icon-hover text-gray-300 hover:text-white">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://instagram.com/binay_dalai_" target="_blank" rel="noopener noreferrer" className="icon-hover-instagram text-gray-300 hover:text-white">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
