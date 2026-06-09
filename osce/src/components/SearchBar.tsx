interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <label className="flex w-full items-center gap-2 rounded-xl border border-[#e5e5e4] bg-white px-3 py-2 shadow-sm dark:border-zinc-700 dark:bg-zinc-800">
      <span className="text-sm font-semibold text-[#3C3489] dark:text-[#a5a0e8]">Search</span>
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Questions, anatomy, or pathology"
        className="w-full border-none bg-transparent text-sm text-[#1a1a1a] outline-none placeholder:text-[#6b6b6b] dark:text-zinc-100 dark:placeholder:text-zinc-500"
        aria-label="Search all questions by keyword"
      />
    </label>
  );
}
