"use client";
import { Movie } from "@/data/movies";
import { X } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

export default function MovieCardOpened({
  movie,
  setCurrentMovie,
}: {
  movie: Movie;
  setCurrentMovie: React.Dispatch<React.SetStateAction<Movie | null>>;
}) {
  return (
    <motion.div
      className="w-sm rounded-xl bg-neutral-900 p-4 text-center shadow-lg max-sm:max-w-xs lg:max-w-md"
      layoutId={`movie-card-${movie.title}`}
    >
      {/* Header */}
      <div className="mb-4 flex items-start justify-between">
        <motion.h3 className="text-left text-lg font-semibold">
          {movie.title}
        </motion.h3>
        <button
          onClick={() => setCurrentMovie(null)}
          className="cursor-pointer rounded-full bg-neutral-700 p-2 hover:bg-neutral-600"
          title="Close Emoji Picker"
          aria-label="Close Emoji Picker"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* Poster */}
      <motion.div
        layoutId={`movie-poster-${movie.title}`}
        className="relative w-full flex-shrink-0 overflow-hidden"
      >
        <Image
          priority
          src={movie.posterUrl}
          alt={movie.title}
          width={320}
          height={480}
          className="aspect-[2/3] h-full w-full rounded-lg object-cover"
        />
      </motion.div>

      {/* Details */}
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div>
          <motion.p className="text-sm text-neutral-400">
            {movie.releaseDate}
          </motion.p>
        </div>
        <motion.p className="text-xs text-neutral-500">
          {Array.isArray(movie.genre) ? movie.genre.join(", ") : movie.genre}
        </motion.p>
      </div>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 32, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
        className="mt-4 overflow-auto pb-8"
      >
        <p className="pb-4">{movie.description}</p>
        <p className="text-sm text-neutral-500">{movie.casts.join(", ")}</p>
        <p>{movie.production}</p>
      </motion.div>
    </motion.div>
  );
}
