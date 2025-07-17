import Link from "next/link";

export interface NavLinkProp {
  id: string;
  href: string;
  content: string;
}

export default function NavLink({ id, href, content }: NavLinkProp) {
  return (
    <Link href={href} className="group">
      <span className="font-mono font-semibold">{id} </span>

      <span className="inline-flex flex-col">
        <span>{content}</span>
        <span className="w-full origin-left scale-x-0 border-b bg-neutral-100 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
      </span>
    </Link>
  );
}
