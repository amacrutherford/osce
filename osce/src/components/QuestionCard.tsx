import { useState, type ReactNode } from 'react';
import type { AppMode, MarkStatus } from '../hooks/useOsceStore';
import type { QuestionGroup } from '../utils/osce';
import { SourceModal } from './SourceModal';

interface QuestionCardProps {
  stepId: string;
  stepTitle: string;
  groupIndex: number;
  cardNumber: number;
  group: QuestionGroup;
  mode: AppMode;
  rationaleVisible: boolean;
  pathologyVisible: boolean;
  markStatus: MarkStatus | undefined;
  onToggleRationale: (stepId: string, groupIndex: number) => void;
  onTogglePathology: (stepId: string, groupIndex: number) => void;
  onMark: (stepId: string, groupIndex: number, status: MarkStatus) => void;
  searchTerm: string;
}

function escapeRegExp(input: string): string {
  return input.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function highlightText(text: string, searchTerm: string): ReactNode {
  const trimmed = searchTerm.trim();
  if (!trimmed) return text;

  const regex = new RegExp(`(${escapeRegExp(trimmed)})`, 'ig');
  const parts = text.split(regex);

  return parts.map((part, index) => {
    if (part.toLowerCase() === trimmed.toLowerCase()) {
      return (
        <mark key={`${part}-${index}`} className="rounded bg-yellow-200 px-0.5 text-[#1a1a1a] dark:bg-yellow-700 dark:text-zinc-100">
          {part}
        </mark>
      );
    }
    return <span key={`${part}-${index}`}>{part}</span>;
  });
}

export function QuestionCard({
  stepId,
  stepTitle,
  groupIndex,
  cardNumber,
  group,
  mode,
  rationaleVisible,
  pathologyVisible,
  markStatus,
  onToggleRationale,
  onTogglePathology,
  onMark,
  searchTerm,
}: QuestionCardProps) {
  const [modalFor, setModalFor] = useState<'rationale' | 'pathology' | null>(null);

  const hasRationale = Boolean(group.rationale);
  const hasPathology = Boolean(group.pathology);
  const answerVisible = rationaleVisible || pathologyVisible;

  const activeSource =
    modalFor === 'rationale'
      ? group.rationale?.source
      : modalFor === 'pathology'
        ? group.pathology?.source
        : undefined;

  return (
    <article className="rounded-2xl border border-[#e5e5e4] bg-white p-5 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
      {modalFor && (
        <SourceModal
          source={activeSource}
          context={`${stepTitle} — Q${cardNumber} (${modalFor})`}
          onClose={() => setModalFor(null)}
        />
      )}

      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#534AB7] dark:text-[#a5a0e8]">Q{cardNumber}</p>
        {answerVisible && (
          <div className="flex gap-1.5">
            <button
              type="button"
              onClick={() => onMark(stepId, groupIndex, 'correct')}
              aria-label="Mark as correct"
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                markStatus === 'correct'
                  ? 'bg-emerald-500 text-white'
                  : 'border border-emerald-300 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 dark:border-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-400'
              }`}
            >
              ✓ Correct
            </button>
            <button
              type="button"
              onClick={() => onMark(stepId, groupIndex, 'incorrect')}
              aria-label="Mark as incorrect"
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                markStatus === 'incorrect'
                  ? 'bg-red-500 text-white'
                  : 'border border-red-300 bg-red-50 text-red-700 hover:bg-red-100 dark:border-red-800 dark:bg-red-950/50 dark:text-red-400'
              }`}
            >
              ✗ Incorrect
            </button>
          </div>
        )}
      </div>

      <p className="text-base font-medium text-[#1a1a1a] dark:text-zinc-100">{highlightText(group.examiner.text, searchTerm)}</p>

      {mode === 'study' && (hasRationale || hasPathology) && (
        <div className="mt-4 flex flex-wrap gap-2">
          {hasRationale && (
            <button
              type="button"
              onClick={() => onToggleRationale(stepId, groupIndex)}
              aria-label={`Toggle rationale for question ${cardNumber}`}
              aria-expanded={rationaleVisible}
              className="rounded-lg border border-[#AFA9EC] bg-[#EEEDFE] px-3 py-2 text-sm font-semibold text-[#3C3489] transition hover:bg-[#dfdcfd] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#534AB7] dark:border-zinc-600 dark:bg-[#1e1b4b] dark:text-[#a5a0e8] dark:hover:bg-[#2a2760]"
            >
              {rationaleVisible ? 'Hide rationale' : 'Show rationale'}
            </button>
          )}

          {hasPathology && (
            <button
              type="button"
              onClick={() => onTogglePathology(stepId, groupIndex)}
              aria-label={`Toggle pathology answer for question ${cardNumber}`}
              aria-expanded={pathologyVisible}
              className="rounded-lg border border-[#AFA9EC] bg-[#EEEDFE] px-3 py-2 text-sm font-semibold text-[#3C3489] transition hover:bg-[#dfdcfd] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#534AB7] dark:border-zinc-600 dark:bg-[#1e1b4b] dark:text-[#a5a0e8] dark:hover:bg-[#2a2760]"
            >
              {pathologyVisible ? 'Hide answer / pathology' : 'Show answer / pathology'}
            </button>
          )}
        </div>
      )}

      {hasRationale && rationaleVisible && (
        <section className="mt-4 rounded-xl border border-[#d6efe6] border-l-4 border-l-[#5DCAA5] bg-[#f5fffb] p-4 dark:border-[#1a4a3a] dark:bg-[#0d2b22]">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-[#1a1a1a] dark:text-zinc-100">Rationale</h3>
            <button
              type="button"
              onClick={() => setModalFor('rationale')}
              aria-label="View source"
              className="flex h-5 w-5 items-center justify-center rounded-full border border-[#5DCAA5] bg-white text-xs font-bold text-[#1a7a5e] hover:bg-[#d6efe6] dark:border-[#2a6a55] dark:bg-zinc-800 dark:text-[#5DCAA5]"
            >
              ?
            </button>
          </div>
          {group.rationale?.imageUrl && (
            <img src={group.rationale.imageUrl} alt="" className="mt-3 max-h-64 w-full rounded-lg object-contain" />
          )}
          {group.rationale?.bullets ? (
            <ul className="mt-2 space-y-1.5">
              {group.rationale.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-2 text-sm text-[#1a1a1a] dark:text-zinc-200">
                  <span className="mt-0.5 shrink-0 font-bold text-[#5DCAA5]">•</span>
                  <span>{highlightText(bullet, searchTerm)}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-1 text-sm text-[#1a1a1a] dark:text-zinc-200">{highlightText(group.rationale!.text, searchTerm)}</p>
          )}
        </section>
      )}

      {hasPathology && pathologyVisible && (
        <section className="mt-4 rounded-xl border border-[#f8d9ce] border-l-4 border-l-[#F0997B] bg-[#fff8f5] p-4 dark:border-[#4a2515] dark:bg-[#2b1508]">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-[#1a1a1a] dark:text-zinc-100">Pathology</h3>
            <button
              type="button"
              onClick={() => setModalFor('pathology')}
              aria-label="View source"
              className="flex h-5 w-5 items-center justify-center rounded-full border border-[#F0997B] bg-white text-xs font-bold text-[#a04a1e] hover:bg-[#f8d9ce] dark:border-[#7a4a30] dark:bg-zinc-800 dark:text-[#F0997B]"
            >
              ?
            </button>
          </div>
          {group.pathology?.imageUrl && (
            <img src={group.pathology.imageUrl} alt="" className="mt-3 max-h-64 w-full rounded-lg object-contain" />
          )}
          {group.pathology?.bullets ? (
            <ul className="mt-2 space-y-1.5">
              {group.pathology.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-2 text-sm text-[#1a1a1a] dark:text-zinc-200">
                  <span className="mt-0.5 shrink-0 font-bold text-[#F0997B]">•</span>
                  <span>{highlightText(bullet, searchTerm)}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-1 text-sm text-[#1a1a1a] dark:text-zinc-200">{highlightText(group.pathology!.text, searchTerm)}</p>
          )}
        </section>
      )}
    </article>
  );
}
