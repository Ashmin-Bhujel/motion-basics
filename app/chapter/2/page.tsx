import ChapterHeading from "@/components/ChapterHeading";
import DottedSection from "@/components/DottedSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hover & Exit Animations",
  description: "Chapter 2 of learning Motion for React",
};

export default function Chapter2() {
  return (
    <main className="container mx-auto px-4 py-8">
      <ChapterHeading heading="Hover & Exit Animations" />
      <DottedSection></DottedSection>
    </main>
  );
}
