"use client";
import { Movie } from "@/data/movies";
import { motion } from "motion/react";
import Image from "next/image";

export default function MovieCardPreview({
  movie,
  setCurrentMovie,
}: {
  movie: Movie;
  setCurrentMovie: (movie: Movie | null) => void;
}) {
  return (
    <motion.button
      layoutId={`movie-card-${movie.title}`}
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      key={movie.title}
      onClick={() => setCurrentMovie(movie)}
      className="group flex cursor-pointer items-center overflow-hidden rounded-xl border border-neutral-700 transition-colors duration-300 ease-in-out hover:border-neutral-600"
    >
      {/* Poster */}
      <motion.div
        layoutId={`movie-poster-${movie.title}`}
        className="relative w-48 flex-shrink-0 overflow-hidden"
      >
        <Image
          priority
          src={movie.posterUrl}
          alt={movie.title}
          width={192}
          height={288}
          className="aspect-[2/3] h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </motion.div>

      {/* Details */}
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div>
          <motion.h3 className="text-lg font-semibold">{movie.title}</motion.h3>
          <motion.p className="text-sm text-neutral-400">
            {movie.releaseDate}
          </motion.p>
        </div>
        <motion.p className="text-xs text-neutral-500">
          {Array.isArray(movie.genre) ? movie.genre.join(", ") : movie.genre}
        </motion.p>
      </div>
    </motion.button>
  );
}
