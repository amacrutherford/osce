export interface CandidateBrief {
  setting: string;
  scenario: string;
  tasks: string[];
  timeAllowed: number;
}

export interface SocratesItem {
  label: string;       // "Site", "Onset", "Character", etc.
  descriptor: string;  // key clinical finding (the bold part in GeekyMedics style)
  quotes: string[];    // 1–2 verbatim patient quotes
}

export interface HistoryItem {
  label: string;  // clinical descriptor / bold label
  quote: string;  // verbatim patient quote (may contain " – " for alternatives)
}

export interface ActorICE {
  ideas: string;
  concerns: string;
  expectations: string;
}

export interface ActorInstructions {
  patientName: string;
  age: number;
  occupation: string;
  openingLine: string;
  // For symptom-based history stations (SOCRATES structure):
  socrates?: SocratesItem[];
  // For non-SOCRATES presenting history (counselling, MSE, physical exam, communication):
  historyOfPresentingComplaint?: HistoryItem[];
  // Explicit history sections:
  pastMedicalHistory: HistoryItem[];
  drugHistory: HistoryItem[];
  familyHistory: HistoryItem[];
  socialHistory: HistoryItem[];
  importantNegatives: string[];
  ice: ActorICE;
  onlyIfDirectlyAsked: string[];
  behaviourNotes: string[];
}

export interface MarkSchemeItem {
  description: string;
  marks: number;
}

export interface MarkSchemeDomain {
  domain: string;
  items: MarkSchemeItem[];
}

export interface VivaQuestion {
  question: string;
  keyPoints: string[];
  source?: string;
}

export interface MockExamStation {
  id: string;
  title: string;
  diagnosis: string;
  specialtyId: string;
  imageUrl?: string;
  candidateBrief: CandidateBrief;
  actorInstructions: ActorInstructions;
  markScheme: MarkSchemeDomain[];
  expectedPresentation: string[];
  vivaQuestions: VivaQuestion[];
}
