import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Background } from './components/Background';

export default function App() {
  return (
    <div className="relative text-white bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
      <Background />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-black/20 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Binay Dalai. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}