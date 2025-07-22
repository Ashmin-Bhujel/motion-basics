"use client";
import { Movie, movies } from "@/data/movies";
import MovieCardPreview from "./MovieCardPreview";
import { useEffect, useRef, useState } from "react";
import MovieCardOpened from "./MovieCardOpened";
import { AnimatePresence, motion } from "motion/react";

export default function AnimatedMovieCards() {
  const [currentMovie, setCurrentMovie] = useState<Movie | null>(null);

  const useClickOutside = (cb: () => void) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          cb();
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [cb]);

    return ref;
  };

  const ref = useClickOutside(() => {
    console.log("Clicked outside");
    setCurrentMovie(null);
  });

  return (
    <section className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      {currentMovie && (
        <AnimatePresence>
          <motion.section
            initial={{
              opacity: 0,
            }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-10 bg-neutral-950/80 backdrop-blur-sm"
          ></motion.section>
        </AnimatePresence>
      )}
      {currentMovie && (
        <div
          ref={ref}
          className="fixed top-1/2 left-1/2 z-20 flex -translate-1/2 items-center justify-center p-4"
        >
          <MovieCardOpened movie={currentMovie} />
        </div>
      )}
      {movies.map((movie) => (
        <MovieCardPreview
          key={movie.title}
          movie={movie}
          setCurrentMovie={setCurrentMovie}
        />
      ))}
    </section>
  );
}
