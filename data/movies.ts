export interface Movie {
  title: string;
  releaseDate: string;
  genre: string[];
  casts: string[];
  production: string;
  posterUrl: string;
  description: string;
}

export const movies: Movie[] = [
  {
    title: "Up",
    releaseDate: "2009-05-29",
    genre: ["Animation", "Adventure", "Comedy"],
    casts: ["Ed Asner", "Christopher Plummer", "Jordan Nagai"],
    production: "Walt Disney Pictures",
    posterUrl: "/images/movie-card/up.jpg",
    description:
      "A retired balloon salesman fulfills his dream of visiting South America by tying thousands of balloons to his house and flying there, but he inadvertently brings a young boy along for the adventure.",
  },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    releaseDate: "2004-03-19",
    genre: ["Romance", "Sci-Fi", "Drama"],
    casts: ["Jim Carrey", "Kate Winslet", "Kirsten Dunst"],
    production: "Focus Features",
    posterUrl: "/images/movie-card/eternal-sunshine-of-the-spotless-mind.jpg",
    description:
      "After a painful breakup, Clementine undergoes a procedure to erase all memories of her ex-boyfriend Joel, who then decides to undergo the same procedure but realizes he doesn't want to forget her.",
  },
  {
    title: "Avengers: Endgame",
    releaseDate: "2019-04-26",
    genre: ["Action", "Adventure", "Sci-Fi"],
    casts: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
    production: "Marvel Studios",
    posterUrl: "/images/movie-card/avengers-endgame.jpg",
    description:
      "After the devastating events of Avengers: Infinity War, the remaining Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
  },
  {
    title: "October Sky",
    releaseDate: "1999-02-19",
    genre: ["Drama", "Biography"],
    casts: ["Jake Gyllenhaal", "Chris Cooper", "Laura Dern"],
    production: "Universal Pictures",
    posterUrl: "/images/movie-card/october-sky.jpg",
    description:
      "Based on the true story of Homer Hickam, a coal miner's son who was inspired by the first Sputnik launch to take up rocketry against his father's wishes, and eventually became a NASA scientist.",
  },
  {
    title: "Spider-Man: No Way Home",
    releaseDate: "2021-12-17",
    genre: ["Action", "Adventure", "Fantasy"],
    casts: ["Tom Holland", "Zendaya", "Benedict Cumberbatch"],
    production: "Marvel Studios",
    posterUrl: "/images/movie-card/spider-man-no-way-home.jpg",
    description:
      "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
  },
  {
    title: "Interstellar",
    releaseDate: "2014-11-07",
    genre: ["Adventure", "Drama", "Sci-Fi"],
    casts: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    production: "Paramount Pictures",
    posterUrl: "/images/movie-card/interstellar.jpg",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival as Earth faces ecological collapse.",
  },
];
