import { useState } from 'react';
import { NTFY_TOPIC } from '../config';

interface SourceModalProps {
  source: string | undefined;
  context: string;
  onClose: () => void;
}

export function SourceModal({ source, context, onClose }: SourceModalProps) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleReport() {
    setStatus('sending');
    try {
      await fetch(`https://ntfy.sh/${NTFY_TOPIC}`, {
        method: 'POST',
        body: `Possible error in: ${context}\n\nSource cited: ${source}`,
        headers: {
          Title: 'OSCE — Content Error Report',
          Priority: 'default',
          Tags: 'warning',
        },
      });
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl dark:bg-zinc-900"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-base font-semibold text-[#1a1a1a] dark:text-zinc-100">Source</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-lg p-1 text-[#6b6b6b] hover:bg-[#f5f5f5] dark:text-zinc-400 dark:hover:bg-zinc-800"
          >
            ✕
          </button>
        </div>

        {source ? (
          <p className="text-sm text-[#1a1a1a] dark:text-zinc-100">{source}</p>
        ) : (
          <p className="text-sm italic text-[#9b9b9b] dark:text-zinc-500">No source added yet for this content.</p>
        )}

        <div className="mt-6 border-t border-[#e5e5e4] pt-4 dark:border-zinc-700">
          {status === 'sent' ? (
            <p className="text-center text-sm text-emerald-600">Report sent — thank you.</p>
          ) : (
            <button
              type="button"
              onClick={handleReport}
              disabled={status === 'sending'}
              className="w-full rounded-lg border border-red-300 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 transition hover:bg-red-100 disabled:opacity-60 dark:border-red-800 dark:bg-red-950/50 dark:text-red-400 dark:hover:bg-red-950"
            >
              {status === 'sending' ? 'Sending…' : 'Is this wrong?'}
            </button>
          )}
          {status === 'error' && (
            <p className="mt-2 text-center text-xs text-red-500">Failed to send — check your connection.</p>
          )}
        </div>
      </div>
    </div>
  );
}
