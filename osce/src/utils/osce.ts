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

function questionMatches(q: { text: string; bullets?: string[] }, normalizedTerm: string): boolean {
  if (textMatches(q.text, normalizedTerm)) return true;
  return q.bullets?.some((b) => textMatches(b, normalizedTerm)) ?? false;
}

export function stepMatches(step: ExamStep, normalizedTerm: string): boolean {
  if (!normalizedTerm) {
    return true;
  }

  if (textMatches(step.title, normalizedTerm) || textMatches(step.subtitle, normalizedTerm)) {
    return true;
  }

  return step.questions.some((question) => questionMatches(question, normalizedTerm));
}

export function groupMatches(group: QuestionGroup, normalizedTerm: string): boolean {
  if (!normalizedTerm) {
    return true;
  }

  return (
    questionMatches(group.examiner, normalizedTerm) ||
    (group.rationale ? questionMatches(group.rationale, normalizedTerm) : false) ||
    (group.pathology ? questionMatches(group.pathology, normalizedTerm) : false)
  );
}

export function countExaminerQuestions(step: ExamStep): number {
  return step.questions.filter((question) => question.type === 'examiner').length;
}
