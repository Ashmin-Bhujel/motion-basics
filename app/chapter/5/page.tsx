import ChapterHeading from "@/components/ChapterHeading";
import { Metadata } from "next";
import AnimatedMovieCards from "./AnimatedMovieCards";

export const metadata: Metadata = {
  title: "Layout Animations",
  description: "Chapter 5 of learning Motion for React",
};

export default function Chapter5() {
  return (
    <main className="container mx-auto px-4 py-8">
      <ChapterHeading
        heading="Layout Animations"
        subHeading="Animated movie cards"
      />
      <AnimatedMovieCards />
    </main>
  );
}
