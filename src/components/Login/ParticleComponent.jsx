import React from "react";
import Particles from "react-tsparticles";

const ParticleComponent = () => {
  // Particle Js
  const particlesInit = (main) => {};

  // Particle Js
  const particlesLoaded = (container) => {};

  return (
    <>
      <Particles
        zIndex="0"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              // value: "#7875B5",
              // value: "#000000",
              value: "#1F262C",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 30,
              },
              push: {
                quantity: 1,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              // value: "#170055",
              // value: "#FFE61B",
              value: ["#4285f4", "#34A853", "#FBBC05", "#EA4335"],
            },
            links: {
              value: "#FFE61B",
              // value: ["#4285f4", "#34A853", "#FBBC05", "#EA4335"],
              // color: "#005792",
              distance: 150,
              enable: true,
              opacity: 1,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: ["bottom", "right"],
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 900,
              },
              value: 100,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: ["circle"],
            },
            size: {
              random: true,
              value: 10,
            },
          },
          detectRetina: true,
        }}
      ></Particles>
    </>
  );
};

export default ParticleComponent;
