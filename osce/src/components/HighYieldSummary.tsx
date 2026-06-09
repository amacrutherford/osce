interface HighYieldSummaryProps {
  examTitle: string;
  items: string[];
}

export function HighYieldSummary({ examTitle, items }: HighYieldSummaryProps) {
  return (
    <section className="rounded-2xl border border-[#e5e5e4] bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
      <h2 className="text-2xl font-bold text-[#1a1a1a] dark:text-zinc-100">High-Yield Facts — {examTitle}</h2>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[#1a1a1a] dark:text-zinc-300">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
