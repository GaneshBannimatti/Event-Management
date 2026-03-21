import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBg() {

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      init={particlesInit}
      className="absolute inset-0"
      options={{
        background: { color: "transparent" },
        fpsLimit: 60,
        particles: {
          number: { value: 60 },
          color: { value: "#00ffff" },
          links: {
            enable: true,
            distance: 150,
            color: "#00ffff",
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
          },
          size: {
            value: { min: 1, max: 3 },
          },
          opacity: {
            value: 0.5,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            repulse: {
              distance: 100,
            },
          },
        },
      }}
    />
  );
}