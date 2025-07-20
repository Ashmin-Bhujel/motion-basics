"use client";
import { parallaxCards } from "@/data/parallaxCards";
import ParallaxCard from "./ParallaxCard";
import { motion } from "motion/react";

export default function ParallaxContainer() {
  return (
    <motion.section className="mt-8 flex min-h-screen w-full flex-col items-center justify-center">
      {parallaxCards.map((parallaxCard) => (
        <ParallaxCard
          key={parallaxCard.description}
          parallaxCard={parallaxCard}
        />
      ))}
    </motion.section>
  );
}
