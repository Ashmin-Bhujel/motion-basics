"use client";
import { motion } from "motion/react";

export default function AnimatedButton() {
  return (
    <motion.button
      className="group relative translate-z-10 rounded-full bg-neutral-950 px-20 py-6 text-2xl transition-colors duration-300 ease-in-out hover:text-green-400 hover:shadow-xs hover:shadow-green-400"
      initial={{
        opacity: 0,
        y: 32,
        scale: 1.03,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      whileHover={{
        rotateX: 15,
        rotateY: 15,
        y: -20,
        scale: 1.15,
      }}
      whileTap={{
        y: 0,
        scale: 0.85,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      Submit
      <span className="absolute inset-x-0 bottom-0 mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-green-500 to-transparent"></span>
      <span className="absolute inset-x-0 bottom-0 mx-auto h-1 w-4/5 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-0 blur-sm transition-opacity duration-300 ease-in-out group-hover:opacity-100"></span>
    </motion.button>
  );
}
