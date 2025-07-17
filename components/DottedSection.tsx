import { ReactNode } from "react";

export default function DottedSection({
  children,
  className,
  ...props
}: {
  children?: ReactNode;
  className?: string;
} & React.HTMLProps<HTMLDivElement>) {
  return (
    <section
      className={`mt-8 flex min-h-screen w-full items-center justify-center perspective-midrange transform-3d ${className}`}
      style={{
        background: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
        backgroundSize: "0.5rem 0.5rem",
        backgroundRepeat: "repeat",
      }}
      {...props}
    >
      {children}
    </section>
  );
}
