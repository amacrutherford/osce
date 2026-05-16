import type { ExamStep } from '../data/steps';
import type { AppMode, MarkStatus } from '../hooks/useOsceStore';
import type { QuestionGroup } from '../utils/osce';
import { QuestionCard } from './QuestionCard';

interface VisibleGroup {
  group: QuestionGroup;
  groupIndex: number;
}

interface StepViewProps {
  step: ExamStep;
  mode: AppMode;
  visibleGroups: VisibleGroup[];
  allGroupCount: number;
  stepProgressText: string;
  onToggleRationale: (stepId: string, groupIndex: number) => void;
  onTogglePathology: (stepId: string, groupIndex: number) => void;
  getGroupVisibility: (stepId: string, groupIndex: number) => { rationale: boolean; pathology: boolean };
  onRevealAll: (stepId: string, groupCount: number) => void;
  onHideAll: (stepId: string, groupCount: number) => void;
  onMark: (stepId: string, groupIndex: number, status: MarkStatus) => void;
  getQuestionMark: (stepId: string, groupIndex: number) => MarkStatus | undefined;
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
  searchTerm: string;
}

export function StepView({
  step,
  mode,
  visibleGroups,
  allGroupCount,
  stepProgressText,
  onToggleRationale,
  onTogglePathology,
  getGroupVisibility,
  onRevealAll,
  onHideAll,
  onMark,
  getQuestionMark,
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
  searchTerm,
}: StepViewProps) {
  const allRevealed =
    visibleGroups.length > 0 &&
    visibleGroups.every(({ group, groupIndex }) => {
      const v = getGroupVisibility(step.id, groupIndex);
      return (!group.rationale || v.rationale) && (!group.pathology || v.pathology);
    });

  return (
    <section className="space-y-4">
      <header className="rounded-2xl border border-[#AFA9EC] bg-gradient-to-r from-[#EEEDFE] to-white p-5">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#3C3489]">Step {step.stepNumber}</p>
        <h2 className="mt-1 text-2xl font-bold text-[#1a1a1a]">{step.title}</h2>
        <p className="mt-1 text-sm text-[#6b6b6b]">{step.subtitle}</p>
        <p className="mt-2 text-sm font-medium text-[#3C3489]">Progress: {stepProgressText} revealed</p>
      </header>

      {visibleGroups.length === 0 && (
        <div className="rounded-2xl border border-dashed border-[#AFA9EC] bg-white p-6 text-sm text-[#6b6b6b]">
          No questions in this step match your search.
        </div>
      )}

      {mode === 'study' && visibleGroups.length > 0 && (
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() =>
              allRevealed
                ? onHideAll(step.id, allGroupCount)
                : onRevealAll(step.id, allGroupCount)
            }
            className="rounded-lg border border-[#AFA9EC] bg-white px-4 py-2 text-sm font-semibold text-[#3C3489] transition hover:border-[#534AB7] hover:bg-[#EEEDFE]"
          >
            {allRevealed ? 'Hide all answers' : 'Reveal all answers'}
          </button>
        </div>
      )}

      {visibleGroups.map(({ group, groupIndex }, idx) => {
        const visibility = getGroupVisibility(step.id, groupIndex);

        return (
          <QuestionCard
            key={group.examiner.id}
            stepId={step.id}
            groupIndex={groupIndex}
            cardNumber={idx + 1}
            group={group}
            mode={mode}
            rationaleVisible={visibility.rationale}
            pathologyVisible={visibility.pathology}
            markStatus={getQuestionMark(step.id, groupIndex)}
            onToggleRationale={onToggleRationale}
            onTogglePathology={onTogglePathology}
            onMark={onMark}
            searchTerm={searchTerm}
          />
        );
      })}

      {mode === 'exam' && (
        <button
          type="button"
          onClick={() => onRevealAll(step.id, allGroupCount)}
          className="w-full rounded-xl bg-[#534AB7] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#3C3489] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#534AB7]"
        >
          Reveal all answers
        </button>
      )}

      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={onPrevious}
          disabled={!hasPrevious}
          className="rounded-lg border border-[#AFA9EC] bg-white px-4 py-2 text-sm font-semibold text-[#3C3489] disabled:cursor-not-allowed disabled:opacity-40"
        >
          Prev step
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={!hasNext}
          className="rounded-lg border border-[#AFA9EC] bg-white px-4 py-2 text-sm font-semibold text-[#3C3489] disabled:cursor-not-allowed disabled:opacity-40"
        >
          Next step
        </button>
      </div>
    </section>
  );
}
