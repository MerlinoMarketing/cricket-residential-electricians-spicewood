type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={[
        "reveal max-w-2xl space-y-4",
        align === "center" ? "mx-auto text-center" : "",
      ].join(" ")}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
        {eyebrow}
      </p>
      <h2 className="text-balance font-heading text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
        {title}
      </h2>
      <p className="text-pretty text-base leading-7 text-gray-500 sm:text-lg">
        {description}
      </p>
    </div>
  );
}
