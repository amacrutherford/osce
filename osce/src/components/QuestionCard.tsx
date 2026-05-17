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
  if (!trimmed) {
    return text;
  }

  const regex = new RegExp(`(${escapeRegExp(trimmed)})`, 'ig');
  const parts = text.split(regex);

  return parts.map((part, index) => {
    if (part.toLowerCase() === trimmed.toLowerCase()) {
      return (
        <mark key={`${part}-${index}`} className="rounded bg-yellow-200 px-0.5 text-[#1a1a1a]">
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
    <article className="rounded-2xl border border-[#e5e5e4] bg-white p-5 shadow-sm">
      {modalFor && activeSource && (
        <SourceModal
          source={activeSource}
          context={`${stepTitle} — Q${cardNumber} (${modalFor})`}
          onClose={() => setModalFor(null)}
        />
      )}

      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#534AB7]">Q{cardNumber}</p>
        {answerVisible && (
          <div className="flex gap-1.5">
            <button
              type="button"
              onClick={() => onMark(stepId, groupIndex, 'correct')}
              aria-label="Mark as correct"
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                markStatus === 'correct'
                  ? 'bg-emerald-500 text-white'
                  : 'border border-emerald-300 bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
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
                  : 'border border-red-300 bg-red-50 text-red-700 hover:bg-red-100'
              }`}
            >
              ✗ Incorrect
            </button>
          </div>
        )}
      </div>

      <p className="text-base font-medium text-[#1a1a1a]">{highlightText(group.examiner.text, searchTerm)}</p>

      {mode === 'study' && (hasRationale || hasPathology) && (
        <div className="mt-4 flex flex-wrap gap-2">
          {hasRationale && (
            <button
              type="button"
              onClick={() => onToggleRationale(stepId, groupIndex)}
              aria-label={`Toggle rationale for question ${cardNumber}`}
              aria-expanded={rationaleVisible}
              className="rounded-lg border border-[#AFA9EC] bg-[#EEEDFE] px-3 py-2 text-sm font-semibold text-[#3C3489] transition hover:bg-[#dfdcfd] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#534AB7]"
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
              className="rounded-lg border border-[#AFA9EC] bg-[#EEEDFE] px-3 py-2 text-sm font-semibold text-[#3C3489] transition hover:bg-[#dfdcfd] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#534AB7]"
            >
              {pathologyVisible ? 'Hide answer / pathology' : 'Show answer / pathology'}
            </button>
          )}
        </div>
      )}

      {hasRationale && rationaleVisible && (
        <section className="mt-4 rounded-xl border border-[#d6efe6] border-l-4 border-l-[#5DCAA5] bg-[#f5fffb] p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-[#1a1a1a]">Rationale</h3>
            {group.rationale?.source && (
              <button
                type="button"
                onClick={() => setModalFor('rationale')}
                aria-label="View source"
                className="flex h-5 w-5 items-center justify-center rounded-full border border-[#5DCAA5] bg-white text-xs font-bold text-[#1a7a5e] hover:bg-[#d6efe6]"
              >
                ?
              </button>
            )}
          </div>
          <p className="mt-1 text-sm text-[#1a1a1a]">{highlightText(group.rationale!.text, searchTerm)}</p>
        </section>
      )}

      {hasPathology && pathologyVisible && (
        <section className="mt-4 rounded-xl border border-[#f8d9ce] border-l-4 border-l-[#F0997B] bg-[#fff8f5] p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-[#1a1a1a]">Pathology</h3>
            {group.pathology?.source && (
              <button
                type="button"
                onClick={() => setModalFor('pathology')}
                aria-label="View source"
                className="flex h-5 w-5 items-center justify-center rounded-full border border-[#F0997B] bg-white text-xs font-bold text-[#a04a1e] hover:bg-[#f8d9ce]"
              >
                ?
              </button>
            )}
          </div>
          <p className="mt-1 text-sm text-[#1a1a1a]">{highlightText(group.pathology!.text, searchTerm)}</p>
        </section>
      )}
    </article>
  );
}
