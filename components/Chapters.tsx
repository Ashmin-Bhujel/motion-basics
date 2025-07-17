import NavLink from "@/components/NavLink";
import { navLinks } from "@/data/navLinks";

export default function Chapters() {
  return (
    <div>
      <ul className="space-y-2 pl-8">
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
  );
}
