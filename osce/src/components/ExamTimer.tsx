import { useEffect, useRef, useState } from 'react';

const TOTAL_SECONDS = 7 * 60;

export function ExamTimer() {
  const [secondsLeft, setSecondsLeft] = useState(TOTAL_SECONDS);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

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

  function toggle() {
    if (secondsLeft === 0) return;
    setRunning((r) => !r);
  }

  function reset() {
    setRunning(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
    setSecondsLeft(TOTAL_SECONDS);
  }

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const isWarning = secondsLeft <= 60 && secondsLeft > 0;
  const isFinished = secondsLeft === 0;

  return (
    <div
      className={`flex items-center gap-2 rounded-xl border px-3 py-1.5 ${
        isFinished
          ? 'border-red-300 bg-red-50'
          : isWarning
            ? 'border-amber-300 bg-amber-50'
            : 'border-[#AFA9EC] bg-white'
      }`}
    >
      <span className="text-xs font-semibold uppercase tracking-wide text-[#6b6b6b]">Timer</span>
      <span
        className={`font-mono text-base font-bold tabular-nums ${
          isFinished
            ? 'text-red-600'
            : isWarning
              ? 'text-amber-600'
              : running
                ? 'text-[#1a1a1a]'
                : 'text-[#6b6b6b]'
        }`}
      >
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </span>
      <button
        type="button"
        onClick={toggle}
        disabled={isFinished}
        className={`rounded-lg px-2.5 py-0.5 text-xs font-semibold transition disabled:cursor-not-allowed disabled:opacity-40 ${
          running
            ? 'bg-amber-100 text-amber-700 hover:bg-amber-200'
            : 'bg-[#534AB7] text-white hover:bg-[#3C3489]'
        }`}
      >
        {running ? 'Pause' : isFinished ? 'Done' : 'Start'}
      </button>
      <button
        type="button"
        onClick={reset}
        className="rounded-lg px-2.5 py-0.5 text-xs font-semibold text-[#6b6b6b] transition hover:bg-[#f5f5f5] hover:text-[#1a1a1a]"
      >
        Reset
      </button>
    </div>
  );
}
