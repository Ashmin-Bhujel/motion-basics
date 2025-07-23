"use client";
import { easeInOut, motion, useAnimate } from "motion/react";

export default function AnimatedButton() {
  const [scope, animate] = useAnimate();

  // Animation sequence function
  async function startAnimation() {
    // Text disappearance
    await animate(
      ".animated-button .text",
      {
        opacity: 0,
        filter: "blur(8px)",
        display: "none",
      },
      {
        ease: "easeOut",
      }
    );

    // Morphing button
    await animate(
      ".animated-button",
      {
        width: "5rem",
        height: "5rem",
        background: "var(--color-green-500)",
      },
      {
        ease: "easeInOut",
      }
    );

    // Bounce button
    animate(
      ".animated-button",
      {
        scale: [1, 1.15, 0.9, 1],
      },
      {
        ease: easeInOut,
        duration: 1,
      }
    );

    // Loader appearance
    await animate(".lucide-check", {
      opacity: 1,
      filter: "none",
      display: "inline-block",
    });

    // Loader circle appearance
    await animate(
      ".lucide-check .path-circle",
      {
        opacity: 1,
        pathLength: 1,
      },
      {
        duration: 0.5,
        ease: "easeInOut",
      }
    );

    // Loader circle rotation
    await animate(
      ".lucide-check .path-circle",
      {
        rotate: 360 * 4,
      },
      {
        duration: 2.5,
        ease: "easeInOut",
      }
    );

    // Loader tick appearance
    animate(
      ".lucide-check .path-tick",
      {
        opacity: 1,
        pathLength: 1,
      },
      {
        ease: "easeInOut",
      }
    );
  }

  return (
    <section
      ref={scope}
      className="mt-8 flex min-h-screen w-full flex-col items-center justify-center"
    >
      <div className="flex w-96 items-center justify-center">
        <motion.button
          onClick={startAnimation}
          className="group animated-button flex min-h-20 w-full items-center justify-center rounded-full border border-neutral-950 bg-neutral-950 text-2xl transition-colors duration-300 ease-in-out hover:border-green-500"
        >
          {/* Text */}
          <motion.span className="text inline-block transition-colors duration-300 ease-in-out group-hover:text-green-500">
            Click Me
          </motion.span>

          {/* Check */}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width={32}
            height={32}
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--color-neutral-50)"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide-check"
            initial={{ opacity: 0, filter: "blur(8px)", display: "none" }}
          >
            <motion.path
              d="M21.801 10A10 10 0 1 1 17 3.335"
              initial={{
                opacity: 0,
                pathLength: 0,
              }}
              className="path-circle"
            />
            <motion.path
              d="m9 11 3 3L22 4"
              initial={{
                opacity: 0,
                pathLength: 0,
              }}
              className="path-tick"
            />
          </motion.svg>
        </motion.button>
      </div>
    </section>
  );
}
