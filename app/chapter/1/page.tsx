import { Metadata } from "next";
import AnimatedButton from "./AnimatedButton";
import DottedSection from "@/components/DottedSection";
import ChapterHeading from "@/components/ChapterHeading";

export const metadata: Metadata = {
  title: "Getting Started with Motion for React",
  description: "Chapter 1 of learning Motion for React",
};

export default function Chapter1() {
  return (
    <main className="container mx-auto px-4 py-8">
      <ChapterHeading
        heading="Getting Started with Motion for React"
        subHeading="Animated button using Motion"
      />
      <DottedSection>
        <AnimatedButton />
      </DottedSection>
    </main>
  );
}
