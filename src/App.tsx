import React, { useRef, useEffect, useState, ReactNode } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Education } from './components/Education';

type FadeInSectionProps = {
  children: ReactNode | ((visible: boolean) => ReactNode);
};

function FadeInSection({ children }: FadeInSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`fade-in-section${isVisible ? ' visible' : ''}`}>
      {typeof children === 'function' ? children(isVisible) : children}
    </div>
  );
}

export default function App() {
  return (
    <div className="relative text-white min-h-screen overflow-x-hidden">
      {/* <BackgroundParticles /> */}
      <div className="aurora-bg">
        <div className="aurora-blob aurora-blob-1"></div>
        <div className="aurora-blob aurora-blob-2"></div>
        <div className="aurora-blob aurora-blob-3"></div>
      </div>
      <Header />
      <main>
        <FadeInSection>{(visible) => <Hero />}</FadeInSection>
        <FadeInSection>{(visible) => <About visible={visible} />}</FadeInSection>
        <FadeInSection>{(visible) => <Experience visible={visible} />}</FadeInSection>
        <FadeInSection>{(visible) => <Education visible={visible} />}</FadeInSection>
        <FadeInSection>{(visible) => <Projects visible={visible} />}</FadeInSection>
        <FadeInSection>{(visible) => <Contact visible={visible} />}</FadeInSection>
      </main>
      <footer className="mt-12 py-6 text-center text-blue-200 text-sm drop-shadow-lg">
        &copy; {new Date().getFullYear()} Binay. All rights reserved.
      </footer>
    </div>
  );
}
