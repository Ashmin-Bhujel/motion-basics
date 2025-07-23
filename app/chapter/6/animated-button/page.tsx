import ChapterHeading from "@/components/ChapterHeading";
import { Metadata } from "next";
import AnimatedButton from "./AnimatedButton";

export const metadata: Metadata = {
  title: "Animation Sequence with Animated Button",
  description: "Chapter 6.2 of learning Motion for React",
};

export default function Chapter6_2() {
  return (
    <main className="container mx-auto px-4 py-8">
      <ChapterHeading
        heading="Animation Sequence"
        subHeading="Animated button"
      />
      <AnimatedButton />
    </main>
  );
}
