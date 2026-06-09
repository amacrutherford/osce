import type { ExamStep } from '../data/steps';

interface SidebarProps {
  steps: ExamStep[];
  activeStepId: string;
  onSelectStep: (stepId: string) => void;
  getStepProgressText: (stepId: string) => string;
  activeStepsCount: number;
  totalSteps: number;
}

export function Sidebar({
  steps,
  activeStepId,
  onSelectStep,
  getStepProgressText,
  activeStepsCount,
  totalSteps,
}: SidebarProps) {
  return (
    <>
      <nav aria-label="Step navigation" className="hidden md:flex md:w-72 md:flex-col md:border-r md:border-[#e5e5e4] md:bg-white/80 dark:md:border-zinc-700 dark:md:bg-zinc-900/80">
        <div className="p-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#3C3489] dark:text-[#a5a0e8]">Exam Steps</p>
        </div>
        <div className="flex-1 space-y-1 overflow-y-auto px-2 pb-3">
          {steps.map((step) => {
            const isActive = step.id === activeStepId;
            return (
              <button
                type="button"
                key={step.id}
                onClick={() => onSelectStep(step.id)}
                className={`w-full rounded-xl border px-3 py-2 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#534AB7] ${
                  isActive
                    ? 'border-[#534AB7] bg-[#EEEDFE] text-[#3C3489] dark:bg-[#1e1b4b] dark:text-[#a5a0e8]'
                    : 'border-transparent text-[#4a4a4a] hover:border-[#AFA9EC] hover:bg-[#f7f6ff] dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:bg-zinc-800'
                }`}
              >
                <p className="text-sm font-semibold">Step {step.stepNumber}</p>
                <p className="text-sm">{step.title}</p>
                <p className="mt-1 text-xs text-[#6b6b6b] dark:text-zinc-400">{getStepProgressText(step.id)} revealed</p>
              </button>
            );
          })}
        </div>
        <div className="border-t border-[#e5e5e4] p-4 text-sm text-[#6b6b6b] dark:border-zinc-700 dark:text-zinc-400">
          Progress: <span className="font-semibold text-[#3C3489] dark:text-[#a5a0e8]">{activeStepsCount}/{totalSteps}</span> steps started
        </div>
      </nav>

      <nav aria-label="Step navigation" className="md:hidden">
        <div className="flex gap-2 overflow-x-auto border-y border-[#e5e5e4] bg-white px-3 py-2 dark:border-zinc-700 dark:bg-zinc-900">
          {steps.map((step) => {
            const isActive = step.id === activeStepId;
            return (
              <button
                type="button"
                key={step.id}
                onClick={() => onSelectStep(step.id)}
                className={`shrink-0 rounded-full border px-3 py-1.5 text-sm font-semibold transition ${
                  isActive
                    ? 'border-[#534AB7] bg-[#534AB7] text-white'
                    : 'border-[#AFA9EC] bg-[#EEEDFE] text-[#3C3489] dark:border-zinc-600 dark:bg-zinc-800 dark:text-[#a5a0e8]'
                }`}
              >
                {step.stepNumber}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
