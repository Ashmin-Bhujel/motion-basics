"use client";
import { motion, stagger, useAnimate } from "motion/react";
import { useEffect } from "react";

export default function AnimatedText() {
  const [scope, animate] = useAnimate();

  const textData = `Learning Motion for React to create micro-interactions and pretty animations.`;

  useEffect(() => {
    startAnimation();
  }, []);

  function startAnimation() {
    animate(
      ".animated-word",
      {
        opacity: 1,
        y: 0,
        filter: "none",
      },
      {
        delay: stagger(0.05),
        ease: "easeOut",
      }
    );
  }

  return (
    <section
      ref={scope}
      className="mt-8 flex min-h-screen w-full flex-col items-center justify-center"
    >
      <div className="max-w-2xl text-center leading-loose tracking-tight">
        {textData.split(" ").map((word, index) => (
          <motion.span
            initial={{
              opacity: 0,
              y: 16,
              filter: "blur(8px)",
            }}
            key={word + index}
            className="animated-word inline-block text-4xl"
          >
            {word} &nbsp;
          </motion.span>
        ))}
      </div>
    </section>
  );
}
