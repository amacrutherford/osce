export interface CandidateBrief {
  setting: string;
  scenario: string;
  tasks: string[];
  timeAllowed: number;
}

export interface ActorHistoryItem {
  topic: string;
  response: string;
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
  backgroundInfo: string;
  historyToReveal: ActorHistoryItem[];
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
