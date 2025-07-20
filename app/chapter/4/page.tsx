import ChapterHeading from "@/components/ChapterHeading";
import { Metadata } from "next";
import ParallaxContainer from "./ParallaxContainer";

export const metadata: Metadata = {
  title: "Hooks in Motion for React",
  description: "Chapter 4 of learning Motion for React",
};

export default function Chapter4() {
  return (
    <main className="container mx-auto px-4 py-8">
      <ChapterHeading
        heading="Hooks in Motion for React"
        subHeading="Parallax animation on scroll"
      />
      <ParallaxContainer />
    </main>
  );
}
