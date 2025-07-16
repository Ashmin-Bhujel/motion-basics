import NavLink, { NavLinkProp } from "@/components/NavLink";

const navLinks: NavLinkProp[] = [
  {
    id: "[ 1 ]",
    href: "/chapter/1",
    content: "Getting Started with Motion for React",
  },
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="mb-4 text-4xl font-semibold">
        <span>Learning Basics of Motion for React</span>
      </h1>

      {/* Chapters */}
      <section className="min-h-screen w-full">
        <h2 className="mb-2 text-2xl text-neutral-400">Chapters</h2>

        <div>
          <ul className="pl-8">
            {navLinks.map((navLink) => (
              <li key={navLink.id}>
                <NavLink
                  id={navLink.id}
                  href={navLink.href}
                  content={navLink.content}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
