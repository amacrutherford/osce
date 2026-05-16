import type { ExamStep } from '../data/steps';
import type { MarkStatus } from '../hooks/useOsceStore';
import { countExaminerQuestions, groupQuestions } from '../utils/osce';

interface ResultsViewProps {
  examTitle: string;
  steps: ExamStep[];
  totalExaminerQuestions: number;
  totalCorrect: number;
  totalIncorrect: number;
  getQuestionMark: (stepId: string, groupIndex: number) => MarkStatus | undefined;
  onGoToStep: (stepId: string) => void;
}

function ScoreBadge({ status }: { status: MarkStatus | undefined }) {
  if (status === 'correct') {
    return (
      <span className="shrink-0 rounded-md bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700">
        ✓ Correct
      </span>
    );
  }
  if (status === 'incorrect') {
    return (
      <span className="shrink-0 rounded-md bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-700">
        ✗ Incorrect
      </span>
    );
  }
  return (
    <span className="shrink-0 rounded-md bg-[#f0f0f0] px-2 py-0.5 text-xs font-semibold text-[#6b6b6b]">
      — Not marked
    </span>
  );
}

export function ResultsView({
  examTitle,
  steps,
  totalExaminerQuestions,
  totalCorrect,
  totalIncorrect,
  getQuestionMark,
  onGoToStep,
}: ResultsViewProps) {
  const totalMarked = totalCorrect + totalIncorrect;
  const notMarked = totalExaminerQuestions - totalMarked;
  const scorePercent = totalMarked === 0 ? null : Math.round((totalCorrect / totalMarked) * 100);

  return (
    <section className="space-y-5">
      {/* Score card */}
      <div className="rounded-2xl border border-[#AFA9EC] bg-gradient-to-br from-[#EEEDFE] via-white to-[#f2f0ff] p-6">
        <h2 className="text-2xl font-bold text-[#1a1a1a]">
          {examTitle} — Results
        </h2>

        {totalMarked === 0 ? (
          <p className="mt-3 text-sm text-[#6b6b6b]">
            No questions marked yet. Use the ✓ / ✗ buttons in the Step Guide after revealing answers.
          </p>
        ) : (
          <>
            <p className="mt-3 text-4xl font-black text-[#3C3489]">
              {totalCorrect} / {totalMarked}
              {scorePercent !== null && (
                <span className="ml-3 text-2xl font-bold text-[#534AB7]">({scorePercent}%)</span>
              )}
            </p>
            <div className="mt-3 flex flex-wrap gap-4 text-sm">
              <span className="font-semibold text-emerald-600">✓ {totalCorrect} correct</span>
              <span className="font-semibold text-red-600">✗ {totalIncorrect} incorrect</span>
              {notMarked > 0 && (
                <span className="text-[#6b6b6b]">— {notMarked} not marked</span>
              )}
            </div>

            {/* Progress bar */}
            <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-[#e5e5e4]">
              <div
                className="h-full rounded-full bg-emerald-500 transition-all"
                style={{ width: `${scorePercent ?? 0}%` }}
              />
            </div>
          </>
        )}
      </div>

      {/* Per-step breakdown */}
      <div className="space-y-3">
        {steps.map((step) => {
          const groups = groupQuestions(step.questions);
          const stepTotal = countExaminerQuestions(step);
          const stepCorrect = groups.filter((_, i) => getQuestionMark(step.id, i) === 'correct').length;
          const stepIncorrect = groups.filter((_, i) => getQuestionMark(step.id, i) === 'incorrect').length;
          const stepMarked = stepCorrect + stepIncorrect;

          return (
            <div key={step.id} className="rounded-2xl border border-[#e5e5e4] bg-white p-4 shadow-sm">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-[#534AB7]">Step {step.stepNumber}</p>
                  <h3 className="font-bold text-[#1a1a1a]">{step.title}</h3>
                  {stepMarked > 0 && (
                    <p className="mt-0.5 text-xs text-[#6b6b6b]">
                      {stepCorrect}/{stepTotal} correct
                    </p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => onGoToStep(step.id)}
                  className="shrink-0 rounded-lg border border-[#AFA9EC] px-3 py-1.5 text-xs font-semibold text-[#3C3489] transition hover:bg-[#EEEDFE]"
                >
                  Review
                </button>
              </div>

              <ul className="mt-3 space-y-2">
                {groups.map((group, groupIndex) => {
                  const mark = getQuestionMark(step.id, groupIndex);
                  return (
                    <li
                      key={group.examiner.id}
                      className="flex items-start gap-2 text-sm"
                    >
                      <span className="mt-0.5 shrink-0 font-semibold text-[#534AB7]">Q{groupIndex + 1}</span>
                      <span className="flex-1 text-[#4a4a4a]">{group.examiner.text}</span>
                      <ScoreBadge status={mark} />
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
