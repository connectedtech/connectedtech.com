// Shared section header: colored label, headline that states the takeaway, optional one-line summary
export function SectionHeader({
  eyebrow,
  title,
  summary,
}: {
  eyebrow: string;
  title: string;
  summary?: string;
}) {
  return (
    <div className="max-w-2xl">
      <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
        {eyebrow}
      </span>
      <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground text-balance md:text-4xl">
        {title}
      </h2>
      {summary && <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{summary}</p>}
    </div>
  );
}
