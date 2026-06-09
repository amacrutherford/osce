import type { AppMode } from '../hooks/useOsceStore';

interface ModeToggleProps {
  mode: AppMode;
  onChange: (mode: AppMode) => void;
}

export function ModeToggle({ mode, onChange }: ModeToggleProps) {
  return (
    <div className="inline-flex rounded-full border border-[#AFA9EC] bg-[#EEEDFE] p-1 dark:border-zinc-600 dark:bg-zinc-800">
      <button
        type="button"
        className={`rounded-full px-3 py-1.5 text-sm font-semibold transition ${
          mode === 'study' ? 'bg-[#534AB7] text-white' : 'text-[#3C3489] dark:text-[#a5a0e8]'
        }`}
        onClick={() => onChange('study')}
      >
        Study Mode
      </button>
      <button
        type="button"
        className={`rounded-full px-3 py-1.5 text-sm font-semibold transition ${
          mode === 'exam' ? 'bg-[#534AB7] text-white' : 'text-[#3C3489] dark:text-[#a5a0e8]'
        }`}
        onClick={() => onChange('exam')}
      >
        Exam Mode
      </button>
    </div>
  );
}
