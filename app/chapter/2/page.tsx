import ChapterHeading from "@/components/ChapterHeading";
import { Metadata } from "next";
import AnimatedCard from "./AnimatedCard";

export const metadata: Metadata = {
  title: "Hover & Exit Animations",
  description: "Chapter 2 of learning Motion for React",
};

export default function Chapter2() {
  return (
    <main className="container mx-auto px-4 py-8">
      <ChapterHeading
        heading="Hover & Exit Animations"
        subHeading="Animated card component using Motion"
      />
      <section className="mt-8 flex min-h-screen w-full items-center justify-center">
        <AnimatedCard />
      </section>
    </main>
  );
}
