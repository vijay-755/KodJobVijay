// import React, { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadSlim } from "tsparticles-slim";

// const ParticleBackground = () => {
//   const particlesInit = useCallback(async (engine) => {
//     await loadSlim(engine); // Use loadSlim instead of loadFull for better compatibility
//   }, []);

//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       options={{
//         background: {
//           color: "#1a1a2e",
//         },
//         particles: {
//           number: { value: 150 },
//           shape: { type: "circle" },
//           size: { value: 5 },
//           move: { enable: true, speed: 2 },
//           opacity: { value: 0.7 },
//         },
//       }}
//     />
//   );
// };

// export default ParticleBackground;
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: 0 },
        background: {
          color: "#0F172A", /* Dark background */
        },
        particles: {
          number: { value: 100 },
          color: { value: ["#2b364d","#507d87 "] }, /* Gradient colors */
          shape: { type: "circle" },
          size: { value: 8 },
          move: { enable: true, speed: 2.0 },
          opacity: { value: 0.9 },
          links: {
            enable: true,
            distance: 200,
            color: "#ffffff",
            opacity: 0.9,
            width: 3,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 100 },
            push: { particles_nb: 4},
          },
        },
      }}
    />
  );
};

export default ParticleBackground;
