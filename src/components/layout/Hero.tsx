import { useEffect } from "react";

interface IParticlesJS {
  (
    elementId: string,
    config: {
      particles: {
        number: {
          value: number;
          density: {
            enable: boolean;
            value_area: number;
          };
        };
        color: {
          value: string;
        };
        shape: {
          type: string;
        };
        opacity: {
          value: number;
          random: boolean;
        };
        size: {
          value: number;
          random: boolean;
        };
        line_linked: {
          enable: boolean;
          distance: number;
          color: string;
          opacity: number;
          width: number;
        };
        move: {
          enable: boolean;
          speed: number;
          direction: string;
          random: boolean;
          straight: boolean;
          out_mode: string;
          bounce: boolean;
        };
      };
      interactivity: {
        detect_on: string;
        events: {
          onhover: {
            enable: boolean;
          };
          onclick: {
            enable: boolean;
          };
          resize: boolean;
        };
      };
      retina_detect: boolean;
    }
  ): void;
}

declare const particlesJS: IParticlesJS;

export function Hero() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      particlesJS("particles-js", {
        particles: {
          number: {
            value: 40,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#0284c7",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.6,
            random: false,
          },
          size: {
            value: 2,
            random: true,
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#0284c7",
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: false,
            },
            onclick: {
              enable: false,
            },
            resize: true,
          },
        },
        retina_detect: true,
      });
    }
  }, []);

  return (
    <section className="relative bg-black text-white min-h-[25vh] sm:min-h-[35vh] lg:min-h-[45vh] flex flex-col justify-between overflow-hidden">
      {/* Background image container */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('/herobg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Particles overlay */}
      <div id="particles-js" className="absolute inset-0 z-10" />

      {/* Main content */}
      <div className="max-w-[90rem] mx-auto px-6 z-20 relative">
        <div className="grid grid-cols-1 sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 gap-8 pt-16 sm:pt-20 lg:pt-24">
          {/* Left column - aligned with logo/first nav item */}
          <div className="col-span-4">
            <div className="space-y-6">
              <div className="text-base leading-snug sm:leading-[1.2] tracking-[-0.01em]">
                We excel at product design, UI/UX, and full-stack development. Our expertise extends to consulting and
                AI adoption, ensuring innovative and effective solutions for our clients.
              </div>

              {/* CTA */}
              <div className="flex items-center gap-2">
                <span className="text-sm sm:text-base font-normal">See what we do</span>
                <div className="bg-sky-500 p-1 rounded hover:bg-sky-700 transition-colors duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white w-4 h-4 sm:w-5 sm:h-5"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right columns - matching navbar spacing */}
          <div className="lg:col-span-8">{/* You can add additional content in the right columns if needed */}</div>
        </div>
      </div>
    </section>
  );
}
