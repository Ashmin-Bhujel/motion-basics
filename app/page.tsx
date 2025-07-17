import Chapters from "@/components/Chapters";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="mb-4 text-4xl font-semibold">
        Learning Basics of Motion for React
      </h1>

      {/* Chapters */}
      <section className="min-h-screen w-full">
        <h2 className="mb-2 text-2xl text-neutral-400">Chapters</h2>
        <Chapters />
      </section>
    </main>
  );
}
