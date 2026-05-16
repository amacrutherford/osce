import type { ExamStep, Question } from '../data/steps';

export interface QuestionGroup {
  examiner: Question;
  rationale?: Question;
  pathology?: Question;
}

export function groupQuestions(questions: Question[]): QuestionGroup[] {
  const groups: QuestionGroup[] = [];
  let currentGroup: QuestionGroup | null = null;

  for (const question of questions) {
    if (question.type === 'examiner') {
      currentGroup = { examiner: question };
      groups.push(currentGroup);
      continue;
    }

    if (!currentGroup) {
      continue;
    }

    if (question.type === 'rationale') {
      currentGroup.rationale = question;
    }

    if (question.type === 'pathology') {
      currentGroup.pathology = question;
    }
  }

  return groups;
}

export function normalizeSearchTerm(term: string): string {
  return term.trim().toLowerCase();
}

export function textMatches(text: string, normalizedTerm: string): boolean {
  if (!normalizedTerm) {
    return true;
  }

  return text.toLowerCase().includes(normalizedTerm);
}

export function stepMatches(step: ExamStep, normalizedTerm: string): boolean {
  if (!normalizedTerm) {
    return true;
  }

  if (textMatches(step.title, normalizedTerm) || textMatches(step.subtitle, normalizedTerm)) {
    return true;
  }

  return step.questions.some((question) => textMatches(question.text, normalizedTerm));
}

export function groupMatches(group: QuestionGroup, normalizedTerm: string): boolean {
  if (!normalizedTerm) {
    return true;
  }

  return (
    textMatches(group.examiner.text, normalizedTerm) ||
    (group.rationale ? textMatches(group.rationale.text, normalizedTerm) : false) ||
    (group.pathology ? textMatches(group.pathology.text, normalizedTerm) : false)
  );
}

export function countExaminerQuestions(step: ExamStep): number {
  return step.questions.filter((question) => question.type === 'examiner').length;
}
