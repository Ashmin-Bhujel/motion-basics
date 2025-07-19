import ChapterHeading from "@/components/ChapterHeading";
import { Metadata } from "next";
import AnimatedEmojiPicker from "./AnimatedEmojiPicker";

export const metadata: Metadata = {
  title: "Variants & Animation Orchestration",
  description: "Chapter 3 of learning Motion for React",
};

export default function Chapter3() {
  return (
    <main className="container mx-auto px-4 py-8">
      <ChapterHeading
        heading="Variants & Animation Orchestration"
        subHeading="Animated emoji picker component"
      />
      <section className="relative mt-8 flex min-h-screen w-full items-center justify-center">
        <AnimatedEmojiPicker />
      </section>
    </main>
  );
}
