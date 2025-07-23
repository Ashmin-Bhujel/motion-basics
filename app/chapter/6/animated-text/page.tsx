import ChapterHeading from "@/components/ChapterHeading";
import { Metadata } from "next";
import AnimatedText from "./AnimatedText";

export const metadata: Metadata = {
  title: "Animation Sequence with Animated Text",
  description: "Chapter 6.1 of learning Motion for React",
};

export default function Chapter6_1() {
  return (
    <main className="container mx-auto px-4 py-8">
      <ChapterHeading heading="Animation Sequence" subHeading="Animated text" />
      <AnimatedText />
    </main>
  );
}
