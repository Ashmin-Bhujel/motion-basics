import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-neutral-800">
      <nav className="container mx-auto p-4">
        <Link href={"/"} className="group text-xl font-semibold tracking-tight">
          <span className="font-mono">[ 0 ] </span>

          <span className="inline-flex flex-col">
            <span>Motion Basics</span>
            <span className="w-full origin-left scale-x-0 border-b bg-neutral-100 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
          </span>
        </Link>
      </nav>
    </header>
  );
}
