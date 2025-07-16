import { Metadata } from "next";
import AnimatedButton from "./AnimatedButton";

export const metadata: Metadata = {
  title: "Getting Started with Motion for React",
  description: "Chapter 1 of learning Motion for React",
};

export default function GettingStarted() {
  return (
    <main className="container mx-auto px-4 py-8">
      <section>
        <h1 className="mb-2 text-4xl font-semibold">
          Getting Started with Motion for React
        </h1>
        <p className="text-neutral-400">Animated button using Motion</p>
      </section>

      {/* Animated button */}
      <section
        className="mt-8 flex min-h-screen w-full items-center justify-center perspective-midrange transform-3d"
        style={{
          background: `radial-gradient(circle at 0.5px 0.5px, rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
          backgroundSize: "0.5rem 0.5rem",
          backgroundRepeat: "repeat",
        }}
      >
        <AnimatedButton />
      </section>
    </main>
  );
}
