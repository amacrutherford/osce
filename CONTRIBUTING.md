# Contributing to OSCE Oracle

Thanks for contributing! Content additions are the most valuable contributions — new exam steps, new mock stations, and corrections to existing material.

## Getting started

```bash
cd osce
npm install
npm run dev   # runs at http://localhost:5173
```

## Types of content

There are two independent content types, each in `osce/src/data/`:

| Type | Files | Description |
|------|-------|-------------|
| **Exam steps** | `*Steps.ts` | Step-by-step examination guides with examiner questions |
| **Mock stations** | `*MockExams.ts` | Full mock OSCE stations (brief, actor script, mark scheme, viva) |

---

## Adding exam steps

### 1. Find or create the right file

Exam steps are grouped by specialty. Look for an existing file like `ankleSteps.ts` or `kneeSteps.ts`. If you're adding a new specialty, create a new `*Steps.ts` file and register it in `exams.ts`.

### 2. Step structure

Every step must include these fields:

```ts
{
  id: 'ankle-palpation',          // kebab-case, unique
  stepNumber: 2,
  title: 'Palpation',
  subtitle: 'Brief description of what is palpated',
  description: 'One or two sentences describing what the examiner observes and why.',
  checklist: [
    'Palpate the posterior edge and tip of the lateral malleolus',
    'Palpate the ATFL (anterior to lateral malleolus)',
    // 4–8 items, imperative active voice, examination-specific only
  ],
  questions: [...],
}
```

**Checklist rules:**
- Imperative active voice: "Inspect X for Y", "Palpate X", "Test X with Y"
- One testable action per item — specific enough to tick off individually
- 4–8 items per step, in the order they'd be performed
- No "wash hands" or generic preamble

### 3. Questions

Each step has a `questions` array. There are three question types:

**`examiner`** — what the examiner asks out loud. No `source` required.

```ts
{
  id: 'ank-e1',
  type: 'examiner',
  text: 'What are you looking for when inspecting the ankle?',
}
```

**`rationale`** — explains why a step is performed or how a test works. `source` required.

```ts
{
  id: 'ank-r1',
  type: 'rationale',
  text: '',                        // always empty string
  bullets: [
    'Anterior drawer test: stabilise distal tibia, draw heel anteriorly in slight plantarflexion',
    'Positive: >5 mm anterior talar translation or a palpable clunk vs. contralateral side',
    'Assesses ATFL — the most commonly injured ankle ligament',
  ],
  source: 'OHCM 10th ed., Ch. 10',
}
```

**`pathology`** — describes a specific condition relevant to the step. `source` required.

```ts
{
  id: 'ank-p1',
  type: 'pathology',
  text: '',
  bullets: [
    'Peroneal tendon subluxation: snap felt/heard over lateral malleolus on eversion',
    'Caused by rupture of the superior peroneal retinaculum',
    'Predisposed by a shallow fibular groove',
  ],
  source: 'Rockwood & Green\'s Fractures, 9th ed.',
}
```

**Bullet rules:**
- 3–6 bullets per answer
- Each bullet is one clear medical statement, under 120 characters
- Order: mechanism/anatomy → clinical finding → key numbers → management
- No sub-bullets, no markdown inside the string

### 4. Sources

Acceptable sources, in order of preference:
- NICE Clinical Guidelines — `"NICE CG144 (2012)"`
- BOAST — `"BOAST 4 (2012)"`
- Royal College guidelines — `"RCOphth Cataract Surgery Guidelines (2024)"`
- Oxford Handbooks — `"OHCM 10th ed., Ch. 6"`
- Geeky Medics — `"geekymedics.com"`
- Major peer-reviewed consensus — `"Rockwood & Green's Fractures, 9th ed."`

### 5. Images (optional)

Add `imageUrl` to a `rationale` or `pathology` question where a clinical image significantly aids understanding (radiographs, anatomical diagrams, clinical photos of special tests). Source images from Wikimedia Commons. Verify the URL resolves before submitting.

---

## Adding mock stations

Mock stations live in files like `orthoMockExams.ts`. Study an existing station before writing a new one — [geekymedics.com](https://geekymedics.com) is the reference standard for format and depth.

### Station structure overview

```ts
{
  id: 'ankle-history',
  title: 'Ankle Pain History',
  specialtyId: 'orthopaedics',
  diagnosis: 'Lateral ankle ligament sprain',
  candidateBrief: { setting, scenario, tasks, timeAllowed },
  actorInstructions: { ... },
  markScheme: [ { domain, items: [{ text, marks }] } ],
  expectedPresentation: ['...'],
  vivaQuestions: [{ question, answers: ['...'], source }],
}
```

### Candidate brief

Keep it to 3–4 lines. State role, setting, presenting complaint, and one task — outcome-framed only, never name a framework.

```ts
candidateBrief: {
  setting: 'You are an FY1 in A&E.',
  scenario: 'A 22-year-old has presented with right ankle pain after rolling their ankle playing football.',
  tasks: ['Take a focused history and explain your initial management to the patient.'],
  timeAllowed: 10,
}
```

### Actor instructions

The actor script must be detailed enough for a real actor to portray the case.

- Use `socrates` for symptom-based history stations (pain, headache, dizziness)
- Use `historyOfPresentingComplaint` for counselling, MSE, or examination stations
- Always include: `pastMedicalHistory`, `drugHistory`, `familyHistory`, `socialHistory`
- Always include: `importantNegatives`, `ice`, `onlyIfDirectlyAsked`, `behaviourNotes`

See any existing mock exam file for a full worked example.

### Mark scheme

- Domains appear in consultation order: opening → HPC → red flags → ICE → systemic enquiry → PMH → DH → FH → SH → closing → communication skills
- Items describe what the student **does**, not what they find
- Wording: "Asks about...", "Explores...", "Screens for...", "Identifies..."
- Total marks: 20–30 for a 10-minute station

### Viva questions

3–4 questions per station. Targets: differential diagnosis, investigations, management, complications. Each answer: 4–6 plain-English bullet points. Include a `source`.

---

## Submitting changes

1. Fork the repo and create a branch: `git checkout -b add-shoulder-history`
2. Make your changes — keep each PR focused on one exam or station
3. Run `npm run build` to confirm TypeScript compiles cleanly
4. Open a pull request with a short description of what was added or changed

For corrections to existing content, a short note explaining the source of the correct information is helpful.

---

## Questions?

Open a [GitHub Discussion](https://github.com/amacrutherford/osce/discussions) or file an issue.
