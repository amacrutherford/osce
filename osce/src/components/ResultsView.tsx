import type { ExamStep } from '../data/steps';
import type { AppMode, MarkStatus } from '../hooks/useOsceStore';
import { countExaminerQuestions, groupQuestions } from '../utils/osce';

interface ResultsViewProps {
  examTitle: string;
  steps: ExamStep[];
  mode: AppMode;
  totalExaminerQuestions: number;
  totalCorrect: number;
  totalIncorrect: number;
  getQuestionMark: (stepId: string, groupIndex: number) => MarkStatus | undefined;
  getChecklistState: (stepId: string, count: number) => boolean[];
  onGoToStep: (stepId: string) => void;
}

function ScoreBadge({ status }: { status: MarkStatus | undefined }) {
  if (status === 'correct') {
    return (
      <span className="shrink-0 rounded-md bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400">
        ✓ Correct
      </span>
    );
  }
  if (status === 'incorrect') {
    return (
      <span className="shrink-0 rounded-md bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-700 dark:bg-red-950/50 dark:text-red-400">
        ✗ Incorrect
      </span>
    );
  }
  return (
    <span className="shrink-0 rounded-md bg-[#f0f0f0] px-2 py-0.5 text-xs font-semibold text-[#6b6b6b] dark:bg-zinc-800 dark:text-zinc-400">
      — Not marked
    </span>
  );
}

export function ResultsView({
  examTitle,
  steps,
  mode,
  totalExaminerQuestions,
  totalCorrect,
  totalIncorrect,
  getQuestionMark,
  getChecklistState,
  onGoToStep,
}: ResultsViewProps) {
  const totalMarked = totalCorrect + totalIncorrect;
  const notMarked = totalExaminerQuestions - totalMarked;
  const scorePercent = totalMarked === 0 ? null : Math.round((totalCorrect / totalMarked) * 100);

  const checklistSteps = steps.filter((s) => s.checklist && s.checklist.length > 0);
  const totalChecklistItems = checklistSteps.reduce((acc, s) => acc + s.checklist!.length, 0);
  const totalChecklistChecked = checklistSteps.reduce((acc, s) => {
    return acc + getChecklistState(s.id, s.checklist!.length).filter(Boolean).length;
  }, 0);
  const checklistPercent =
    totalChecklistItems === 0 ? null : Math.round((totalChecklistChecked / totalChecklistItems) * 100);
  const hasChecklistActivity = totalChecklistChecked > 0;

  return (
    <section className="space-y-5">
      <h2 className="text-2xl font-bold text-[#1a1a1a] dark:text-zinc-100">{examTitle} — Results</h2>

      <div className="rounded-2xl border border-[#e5e5e4] bg-white p-6 dark:border-zinc-700 dark:bg-zinc-900">
        <p className="text-xs font-semibold uppercase tracking-wide text-[#6b6b6b] dark:text-zinc-400">Knowledge Q&A</p>
        {totalMarked === 0 ? (
          <p className="mt-2 text-sm text-[#6b6b6b] dark:text-zinc-400">
            No questions marked yet. Use the ✓ / ✗ buttons in the Step Guide after revealing answers.
          </p>
        ) : (
          <>
            <p className="mt-2 text-4xl font-black text-[#3C3489] dark:text-[#a5a0e8]">
              {totalCorrect} / {totalMarked}
              {scorePercent !== null && (
                <span className="ml-3 text-2xl font-bold text-[#534AB7] dark:text-[#8b84de]">({scorePercent}%)</span>
              )}
            </p>
            <div className="mt-3 flex flex-wrap gap-4 text-sm">
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">✓ {totalCorrect} correct</span>
              <span className="font-semibold text-red-600 dark:text-red-400">✗ {totalIncorrect} incorrect</span>
              {notMarked > 0 && <span className="text-[#6b6b6b] dark:text-zinc-400">— {notMarked} not marked</span>}
            </div>
            <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-[#e5e5e4] dark:bg-zinc-700">
              <div
                className="h-full rounded-full bg-emerald-500 transition-all"
                style={{ width: `${scorePercent ?? 0}%` }}
              />
            </div>
          </>
        )}
      </div>

      {totalMarked > 0 && (
        <div className="space-y-3">
          {steps.map((step) => {
            const groups = groupQuestions(step.questions);
            const stepTotal = countExaminerQuestions(step);
            const stepCorrect = groups.filter((_, i) => getQuestionMark(step.id, i) === 'correct').length;
            const stepIncorrect = groups.filter((_, i) => getQuestionMark(step.id, i) === 'incorrect').length;
            const stepMarked = stepCorrect + stepIncorrect;
            if (stepMarked === 0) return null;

            return (
              <div key={step.id} className="rounded-2xl border border-[#e5e5e4] bg-white p-4 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-[#534AB7] dark:text-[#a5a0e8]">Step {step.stepNumber}</p>
                    <h3 className="font-bold text-[#1a1a1a] dark:text-zinc-100">{step.title}</h3>
                    <p className="mt-0.5 text-xs text-[#6b6b6b] dark:text-zinc-400">{stepCorrect}/{stepTotal} correct</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onGoToStep(step.id)}
                    className="shrink-0 rounded-lg border border-[#AFA9EC] px-3 py-1.5 text-xs font-semibold text-[#3C3489] transition hover:bg-[#EEEDFE] dark:border-zinc-600 dark:text-[#a5a0e8] dark:hover:bg-[#1e1b4b]"
                  >
                    Review
                  </button>
                </div>
                <ul className="mt-3 space-y-2">
                  {groups.map((group, groupIndex) => {
                    const mark = getQuestionMark(step.id, groupIndex);
                    return (
                      <li key={group.examiner.id} className="flex items-start gap-2 text-sm">
                        <span className="mt-0.5 shrink-0 font-semibold text-[#534AB7] dark:text-[#a5a0e8]">Q{groupIndex + 1}</span>
                        <span className="flex-1 text-[#4a4a4a] dark:text-zinc-300">{group.examiner.text}</span>
                        <ScoreBadge status={mark} />
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      )}

      {checklistSteps.length > 0 && (
        mode === 'study' ? (
          <div className="rounded-2xl border border-[#AFA9EC] bg-[#EEEDFE] p-5 dark:border-zinc-700 dark:bg-[#1e1b4b]">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#3C3489] dark:text-[#a5a0e8]">Exam checklist</p>
            <p className="mt-2 text-sm text-[#534AB7] dark:text-[#8b84de]">
              No checklist items ticked yet. Use Exam mode and tick off each step as you practise.
            </p>
          </div>
        ) : (
          <div className="rounded-2xl border border-[#AFA9EC] bg-gradient-to-br from-[#EEEDFE] via-white to-[#f2f0ff] p-6 dark:border-zinc-700 dark:from-[#1e1b4b] dark:via-zinc-900 dark:to-zinc-900">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#6b6b6b] dark:text-zinc-400">Exam checklist</p>
            {!hasChecklistActivity ? (
              <p className="mt-2 text-sm text-[#6b6b6b] dark:text-zinc-400">
                No checklist items ticked yet. Switch to Exam mode and tick off each step as you practise.
              </p>
            ) : (
              <>
                <p className="mt-2 text-4xl font-black text-[#3C3489] dark:text-[#a5a0e8]">
                  {totalChecklistChecked} / {totalChecklistItems}
                  {checklistPercent !== null && (
                    <span className="ml-3 text-2xl font-bold text-[#534AB7] dark:text-[#8b84de]">({checklistPercent}%)</span>
                  )}
                </p>
                <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-[#e5e5e4] dark:bg-zinc-700">
                  <div
                    className="h-full rounded-full bg-[#534AB7] transition-all"
                    style={{ width: `${checklistPercent ?? 0}%` }}
                  />
                </div>
              </>
            )}
            <div className="mt-4 space-y-2">
              {checklistSteps.map((step) => {
                const state = getChecklistState(step.id, step.checklist!.length);
                const checked = state.filter(Boolean).length;
                const pct = Math.round((checked / step.checklist!.length) * 100);
                return (
                  <div key={step.id} className="rounded-xl border border-[#e5e5e4] bg-white p-4 dark:border-zinc-700 dark:bg-zinc-900">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <p className="text-xs font-semibold text-[#534AB7] dark:text-[#a5a0e8]">Step {step.stepNumber}</p>
                        <p className="font-semibold text-[#1a1a1a] dark:text-zinc-100">{step.title}</p>
                      </div>
                      <span className="shrink-0 text-sm font-bold text-[#3C3489] dark:text-[#a5a0e8]">
                        {checked}/{step.checklist!.length}
                        {hasChecklistActivity && <span className="ml-1 text-xs text-[#6b6b6b] dark:text-zinc-400">({pct}%)</span>}
                      </span>
                    </div>
                    <ul className="mt-3 space-y-1">
                      {step.checklist!.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className={`mt-0.5 shrink-0 font-bold ${state[i] ? 'text-emerald-500' : 'text-[#d0d0d0] dark:text-zinc-600'}`}>
                            {state[i] ? '✓' : '○'}
                          </span>
                          <span className={state[i] ? 'text-[#4a4a4a] dark:text-zinc-400' : 'text-[#9b9b9b] dark:text-zinc-600'}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        )
      )}
    </section>
  );
}
