import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export function BackgroundParticles() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      className="pointer-events-none"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: 0 },
        particles: {
          number: { value: 60, density: { enable: true, area: 800 } },
          color: { value: '#60a5fa' }, // Tailwind blue-400
          shape: { type: 'circle' },
          opacity: { value: 0.3, random: true },
          size: { value: 4, random: { enable: true, minimumValue: 2 } },
          move: {
            enable: true,
            speed: 2.5, // medium movement
            direction: 'none',
            random: false,
            straight: false,
            outModes: { default: 'out' },
          },
          links: {
            enable: false,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: false },
            onClick: { enable: false },
            resize: true,
          },
        },
        detectRetina: true,
      }}
    />
  );
}