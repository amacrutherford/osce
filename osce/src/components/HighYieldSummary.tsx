interface HighYieldSummaryProps {
  examTitle: string;
  items: string[];
}

export function HighYieldSummary({ examTitle, items }: HighYieldSummaryProps) {
  return (
    <section className="rounded-2xl border border-[#e5e5e4] bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-[#1a1a1a]">High-Yield Facts — {examTitle}</h2>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[#1a1a1a]">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
