interface ChapterHeadingProps {
  heading: string;
  subHeading?: string;
  className?: string;
}

export default function ChapterHeading({
  heading,
  subHeading,
  className,
  ...props
}: ChapterHeadingProps & React.HTMLProps<HTMLDivElement>) {
  return (
    <section className={className} {...props}>
      <h1 className="mb-2 text-4xl font-semibold tracking-tight">{heading}</h1>
      {subHeading && (
        <p className="tracking-wide text-neutral-400">{subHeading}</p>
      )}
    </section>
  );
}
