interface ProgressBarProps {
  value: number;
  max: number;
}

export function ProgressBar({ value, max }: ProgressBarProps) {
  const safeMax = max > 0 ? max : 1;
  const percent = Math.round((value / safeMax) * 100);

  return (
    <section aria-label="Global progress" className="rounded-xl border border-[#e5e5e4] bg-white p-3">
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-semibold text-[#3C3489]">Global Progress</span>
        <span className="text-[#6b6b6b]">{value}/{max}</span>
      </div>
      <div className="h-2 rounded-full bg-[#EEEDFE]">
        <div className="h-2 rounded-full bg-[#534AB7] transition-all duration-150" style={{ width: `${percent}%` }} />
      </div>
    </section>
  );
}
