import { useEffect, useMemo, useState } from 'react';
import type { ExamStep } from '../data/steps';
import { countExaminerQuestions } from '../utils/osce';

export type AppMode = 'study' | 'exam';
export type MarkStatus = 'correct' | 'incorrect';

interface GroupRevealState {
  rationale: boolean;
  pathology: boolean;
}

type StepRevealState = Record<string, GroupRevealState>;
type RevealState = Record<string, StepRevealState>;
type StepMarkState = Record<string, MarkStatus | undefined>;
type MarkState = Record<string, StepMarkState>;

const MODE_STORAGE_KEY = 'osce-mode';

function createDefaultRevealState(steps: ExamStep[]): RevealState {
  const revealState: RevealState = {};

  for (const step of steps) {
    revealState[step.id] = {};
    let groupIndex = 0;

    for (const question of step.questions) {
      if (question.type !== 'examiner') {
        continue;
      }

      revealState[step.id][String(groupIndex)] = {
        rationale: false,
        pathology: false,
      };

      groupIndex += 1;
    }
  }

  return revealState;
}

function readInitialMode(): AppMode {
  const persisted = localStorage.getItem(MODE_STORAGE_KEY);
  return persisted === 'exam' ? 'exam' : 'study';
}

export function useOsceStore(steps: ExamStep[]) {
  const [selectedStepId, setSelectedStepId] = useState<string>(steps[0]?.id ?? '');
  const [mode, setMode] = useState<AppMode>(readInitialMode);
  const [revealed, setRevealed] = useState<RevealState>(() => createDefaultRevealState(steps));
  const [marks, setMarks] = useState<MarkState>({});

  useEffect(() => {
    localStorage.setItem(MODE_STORAGE_KEY, mode);
  }, [mode]);

  const totalExaminerQuestions = useMemo(
    () => steps.reduce((acc, step) => acc + countExaminerQuestions(step), 0),
    [steps],
  );

  function setGroupReveal(stepId: string, groupIndex: number, key: keyof GroupRevealState, value?: boolean) {
    setRevealed((prev) => {
      const stepState = prev[stepId] ?? {};
      const groupKey = String(groupIndex);
      const current = stepState[groupKey] ?? { rationale: false, pathology: false };

      return {
        ...prev,
        [stepId]: {
          ...stepState,
          [groupKey]: {
            ...current,
            [key]: value ?? !current[key],
          },
        },
      };
    });
  }

  function toggleRationale(stepId: string, groupIndex: number) {
    setGroupReveal(stepId, groupIndex, 'rationale');
  }

  function togglePathology(stepId: string, groupIndex: number) {
    setGroupReveal(stepId, groupIndex, 'pathology');
  }

  function revealAllForStep(stepId: string, groupCount: number) {
    setRevealed((prev) => {
      const nextStepState: StepRevealState = { ...(prev[stepId] ?? {}) };

      for (let i = 0; i < groupCount; i += 1) {
        nextStepState[String(i)] = { rationale: true, pathology: true };
      }

      return { ...prev, [stepId]: nextStepState };
    });
  }

  function hideAllForStep(stepId: string, groupCount: number) {
    setRevealed((prev) => {
      const nextStepState: StepRevealState = {};

      for (let i = 0; i < groupCount; i += 1) {
        nextStepState[String(i)] = { rationale: false, pathology: false };
      }

      return { ...prev, [stepId]: nextStepState };
    });
  }

  function getGroupReveal(stepId: string, groupIndex: number): GroupRevealState {
    return revealed[stepId]?.[String(groupIndex)] ?? { rationale: false, pathology: false };
  }

  function getStepRevealedCount(stepId: string): number {
    const stepState = revealed[stepId] ?? {};
    return Object.values(stepState).filter((entry) => entry.rationale || entry.pathology).length;
  }

  const totalRevealed = useMemo(
    () => steps.reduce((acc, step) => acc + getStepRevealedCount(step.id), 0),
    [revealed, steps],
  );

  function markQuestion(stepId: string, groupIndex: number, status: MarkStatus) {
    setMarks((prev) => {
      const stepState = prev[stepId] ?? {};
      const key = String(groupIndex);
      const current = stepState[key];
      return {
        ...prev,
        [stepId]: {
          ...stepState,
          [key]: current === status ? undefined : status,
        },
      };
    });
  }

  function getQuestionMark(stepId: string, groupIndex: number): MarkStatus | undefined {
    return marks[stepId]?.[String(groupIndex)];
  }

  const { totalCorrect, totalIncorrect } = useMemo(() => {
    let correct = 0;
    let incorrect = 0;
    for (const step of steps) {
      const stepState = marks[step.id] ?? {};
      for (const status of Object.values(stepState)) {
        if (status === 'correct') correct++;
        if (status === 'incorrect') incorrect++;
      }
    }
    return { totalCorrect: correct, totalIncorrect: incorrect };
  }, [marks, steps]);

  return {
    selectedStepId,
    setSelectedStepId,
    mode,
    setMode,
    toggleRationale,
    togglePathology,
    revealAllForStep,
    hideAllForStep,
    getGroupReveal,
    getStepRevealedCount,
    totalRevealed,
    totalExaminerQuestions,
    markQuestion,
    getQuestionMark,
    totalCorrect,
    totalIncorrect,
  };
}
