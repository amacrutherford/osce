import { useEffect, useRef, useState } from 'react';

const TOTAL_SECONDS = 7 * 60;

function parseTime(value: string): number | null {
  const trimmed = value.trim();
  if (/^\d+$/.test(trimmed)) return parseInt(trimmed, 10) * 60;
  const match = trimmed.match(/^(\d{1,2}):(\d{2})$/);
  if (match) return parseInt(match[1], 10) * 60 + parseInt(match[2], 10);
  return null;
}

export function ExamTimer() {
  const [secondsLeft, setSecondsLeft] = useState(TOTAL_SECONDS);
  const [running, setRunning] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editValue, setEditValue] = useState('');
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!running) return;
    intervalRef.current = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          setRunning(false);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [running]);

  useEffect(() => {
    if (editing) inputRef.current?.select();
  }, [editing]);

  function toggle() {
    if (secondsLeft === 0) return;
    setRunning((r) => !r);
  }

  function reset() {
    setRunning(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
    setSecondsLeft(TOTAL_SECONDS);
  }

  function startEditing() {
    if (running) return;
    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;
    setEditValue(`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);
    setEditing(true);
  }

  function commitEdit() {
    const parsed = parseTime(editValue);
    if (parsed !== null && parsed > 0) setSecondsLeft(parsed);
    setEditing(false);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter') commitEdit();
    if (e.key === 'Escape') setEditing(false);
  }

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const isWarning = secondsLeft <= 60 && secondsLeft > 0;
  const isFinished = secondsLeft === 0;

  return (
    <div
      className={`flex items-center gap-2 rounded-xl border px-3 py-1.5 ${
        isFinished
          ? 'border-red-300 bg-red-50 dark:border-red-800 dark:bg-red-950/50'
          : isWarning
            ? 'border-amber-300 bg-amber-50 dark:border-amber-700 dark:bg-amber-950/50'
            : 'border-[#AFA9EC] bg-white dark:border-zinc-700 dark:bg-zinc-800'
      }`}
    >
      <span className="text-xs font-semibold uppercase tracking-wide text-[#6b6b6b] dark:text-zinc-400">Timer</span>
      {editing ? (
        <input
          ref={inputRef}
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onBlur={commitEdit}
          onKeyDown={handleKeyDown}
          className="w-16 bg-transparent font-mono text-base font-bold tabular-nums text-[#534AB7] outline-none dark:text-[#a5a0e8]"
        />
      ) : (
        <span
          onClick={startEditing}
          title={running ? undefined : 'Click to set time'}
          className={`font-mono text-base font-bold tabular-nums ${
            isFinished
              ? 'text-red-600 dark:text-red-400'
              : isWarning
                ? 'text-amber-600 dark:text-amber-400'
                : running
                  ? 'text-[#1a1a1a] dark:text-zinc-100'
                  : 'cursor-pointer text-[#6b6b6b] hover:text-[#534AB7] dark:text-zinc-400 dark:hover:text-[#a5a0e8]'
          }`}
        >
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </span>
      )}
      <button
        type="button"
        onClick={toggle}
        disabled={isFinished}
        className={`rounded-lg px-2.5 py-0.5 text-xs font-semibold transition disabled:cursor-not-allowed disabled:opacity-40 ${
          running
            ? 'bg-amber-100 text-amber-700 hover:bg-amber-200 dark:bg-amber-900/50 dark:text-amber-400'
            : 'bg-[#534AB7] text-white hover:bg-[#3C3489]'
        }`}
      >
        {running ? 'Pause' : isFinished ? 'Done' : 'Start'}
      </button>
      <button
        type="button"
        onClick={reset}
        className="rounded-lg px-2.5 py-0.5 text-xs font-semibold text-[#6b6b6b] transition hover:bg-[#f5f5f5] hover:text-[#1a1a1a] dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-zinc-100"
      >
        Reset
      </button>
    </div>
  );
}
