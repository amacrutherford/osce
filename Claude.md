# CLAUDE.md

## OSCE Exam questions

For all OSCE exams, this is for UK medical students prepare. For each step in the exam, give questions that the examiner could ask them, with particular focus on the medical reason behind each step in the exam, common pathologies (with their anatomical locations/causes), and commons scars and their pathologies if applicable. Ignore common steps, like asking for name and level of privacy. Ensure questions are medically correct.

past exam topics listed in `Past Y5 OSCE Stations.md`

### Step structure

Every `ExamStep` object **must** include `description` and `checklist` alongside the existing fields.

**`description`** — 1–2 sentences in present tense describing what the examiner is doing and observing at this step. Focus on purpose and key findings to look for.

**`checklist`** — 4–8 specific, discrete actions a student must perform at this step. Rules:
- Imperative active voice: "Inspect X for Y", "Palpate X", "Test X with Y"
- Each item is one testable action — specific enough to tick off individually
- Do NOT include "wash hands" or generic preamble — examination-specific steps only
- Order actions as they would be performed in sequence

Example:
```ts
{
  id: 'ankle-palpation',
  stepNumber: 2,
  title: 'Palpation',
  subtitle: 'Systematic palpation of malleoli, ligaments, tendons',
  description: 'Systematically palpate bony landmarks and soft tissue structures around the ankle to localise tenderness to a specific structure and apply the Ottawa rules.',
  checklist: [
    'Palpate the posterior edge and tip of the lateral malleolus',
    'Palpate the ATFL (anterior to lateral malleolus) and CFL (beneath it)',
    'Palpate the base of the 5th metatarsal for peroneus brevis avulsion',
    'Palpate the medial malleolus and deltoid ligament',
    'Palpate the Achilles tendon along its length and at insertion',
    'Apply Ottawa ankle rules based on findings',
  ],
  questions: [...],
}
```

### Sourcing

Every `rationale` and `pathology` question object **must** include a `source` field citing the authoritative reference for that content. Acceptable sources (in order of preference):

- NICE Clinical Guidelines — cite guideline ID and year, e.g. `"NICE CG144 (2012)"`
- British Orthopaedic Association Standards for Trauma (BOAST) — cite guideline number and year
- Royal College guidelines — cite the college, guideline title, and year
- Oxford Handbook of Clinical Medicine / specialty handbooks — cite edition and chapter, e.g. `"OHCM 10th ed., Ch. 6"`
- https://geekymedics.com/ 
- Major peer-reviewed consensus where no guideline exists — cite journal, author, year, e.g. `"Rockwood & Green's Fractures, 9th ed."`

Format: plain-text string on the `source` field of the question object.

Example:
```ts
{ id: 'ex-r1', type: 'rationale', text: '...', source: 'NICE CG144 (2012)' }
{ id: 'ex-p1', type: 'pathology', text: '...', source: 'OHCM 10th ed., Ch. 6' }
```

`examiner` questions do not require a `source` field.

### Answer format — bullets

All `rationale` and `pathology` answers **must** use the `bullets` array, not prose `text`. The `text` field must be set to `''` for these types.

- Each bullet is one clear, specific medical statement — aim for under 120 characters
- 3–6 bullets per answer; prioritise the highest-yield points if more exist
- Use plain English, no sub-bullets, no markdown inside the string
- Order bullets logically: mechanism/anatomy → clinical finding → key numbers/grades → management

Example:
```ts
{
  id: 'ex-r1',
  type: 'rationale',
  text: '',
  bullets: [
    'Anterior drawer: stabilise distal tibia, draw heel anteriorly in slight plantarflexion',
    'Positive: >5 mm anterior talar translation or a palpable clunk vs. contralateral side',
    'Assesses ATFL — the most commonly injured ankle ligament (inversion + plantarflexion)',
    'Grade I: sprain (intact) | Grade II: partial tear | Grade III: complete rupture',
  ],
  source: 'OHCM 10th ed., Ch. 10',
}
```

### Images

Add `imageUrl` to a `rationale` or `pathology` question where a clinical image significantly aids understanding. Good candidates:
- Radiographs illustrating a specific finding (e.g. posterior fat pad sign, Segond fracture)
- Dermatome or anatomical diagrams
- Clinical photographs of special tests or deformities

Source images from Wikimedia Commons (free/CC-licensed). Set `imageUrl` to the direct image URL. No separate attribution needed in this field — include the source in the `source` field.

## Mock OSCE Stations — Style Guide

Mock stations simulate the full OSCE experience. The reference standard is geekymedics.com. Study those examples before writing a new station.

---

### Data types — `ActorInstructions` structure

The `ActorInstructions` interface uses structured, explicit sections that mirror the GeekyMedics patient script format. There is **no** `backgroundInfo` prose block and **no** generic `historyToReveal` array.

```ts
interface SocratesItem {
  label: string;      // "Site", "Onset", "Character", etc.
  descriptor: string; // key clinical finding in plain English (the bold part)
  quotes: string[];   // 1–2 verbatim patient quotes
}

interface HistoryItem {
  label: string;  // clinical descriptor / bold label
  quote: string;  // verbatim patient quote (use " – " for alternatives)
}

interface ActorInstructions {
  patientName: string;
  age: number;
  occupation: string;
  openingLine: string;
  // For symptom-based history stations (headache, dizziness, pain etc.):
  socrates?: SocratesItem[];
  // For non-SOCRATES history (counselling, MSE, physical exam, communication):
  historyOfPresentingComplaint?: HistoryItem[];
  // Explicit history sections — always required:
  pastMedicalHistory: HistoryItem[];
  drugHistory: HistoryItem[];
  familyHistory: HistoryItem[];
  socialHistory: HistoryItem[];
  importantNegatives: string[];
  ice: ActorICE;
  onlyIfDirectlyAsked: string[];
  behaviourNotes: string[];
}
```

Use `socrates` when the presenting complaint is a symptom that maps cleanly to Site / Onset / Character / Radiation / Associated symptoms / Timing / Exacerbating-Relieving / Severity. Use `historyOfPresentingComplaint` for counselling stations, MSE, physical examination findings, or any HPC that does not fit the SOCRATES template.

---

### 1. Candidate Brief (`candidateBrief`)

**Keep it to 3–4 lines.** Match the GeekyMedics format exactly:

```
You are a [role] in [location].
A [age]-year-old [optional gender] has presented with [presenting complaint].
Please [one task — outcome only].
At the end of the station, the examiner may ask you some further questions.
```

- `setting` — role + location only: `"You are an FY1 in A&E"`. One sentence.
- `scenario` — age, gender, presenting complaint. Observations only if they change management (e.g. haemodynamically unstable). Do not add backstory.
- `tasks` — 1–2 tasks maximum, outcome-framed only. Never name the method, framework, or test.
- `timeAllowed` — 10 minutes unless specified.

**Good:** `"Take a focused history and explain your diagnosis and management plan to the patient"`  
**Bad:** `"Take a history using SOCRATES, screen for red flags, then consent the patient for hemiarthroplasty"`

**If the brief references a document or diagram it must exist.** Either provide a verified `imageUrl` (fetch to confirm it loads) or remove the reference entirely. Never write "a diagram has been placed on the desk" without providing it.

---

### 2. Actor Script (`actorInstructions`)

The patient script must be detailed enough for a real actor to portray the case. Model the format on geekymedics.com. Every `actorInstructions` object must follow this structure:

#### Opening line (`openingLine`)
One or two short opening quotes — what the patient would say if asked "what brings you in today?" Include any relevant emotional cues in square brackets.

#### History of presenting complaint

**For symptom-based history stations** (headache, chest pain, dizziness, joint pain etc.) — use `socrates: SocratesItem[]`:

Each item follows the format: `label` (e.g. "Site") + `descriptor` (key clinical finding in plain English) + `quotes` (1–2 verbatim patient quotes). Follow SOCRATES order:

```ts
socrates: [
  {
    label: 'Site',
    descriptor: 'occipital headache — back of the head',
    quotes: ['"It\'s at the back of my head." – "Right in the occipital area — here." [touches back of head]'],
  },
  {
    label: 'Onset',
    descriptor: 'sudden thunderclap — instantaneous, worst ever headache',
    quotes: ['"It came on like a thunderclap — bang, instantly, the worst headache I\'ve ever had."',
             '"I was making breakfast and it just hit me."'],
  },
  // ... Character, Radiation, Associated symptoms, Timing, Exacerbating/Relieving, Severity
]
```

**For non-symptom stations** (counselling, MSE, physical examination, communication stations) — use `historyOfPresentingComplaint: HistoryItem[]`:

Each item is `{ label: string, quote: string }` where `label` is a bold clinical descriptor and `quote` is a verbatim patient response.

#### Explicit history sections (always required)

All four sections must be present, even if empty (`[]`):

- **`pastMedicalHistory`** — each condition as `{ label, quote }`. Include dose and duration where relevant.
- **`drugHistory`** — each medication as `{ label, quote }`. Include dose, frequency, OTC drugs, and allergies.
- **`familyHistory`** — each condition as `{ label, quote }`. Script an explicit denial if no relevant history.
- **`socialHistory`** — quantify: smoking (pack-years), alcohol (units/week), occupation (impact on symptoms), living situation. Each as `{ label, quote }`.

#### Important negatives (`importantNegatives`)
Explicit scripted denials for every red flag the student is expected to ask about. Format each as: `'No [symptom] ("[verbatim denial]")'`

```ts
importantNegatives: [
  'No neck stiffness ("I haven\'t noticed any neck stiffness in particular.")',
  'No focal neurology ("I haven\'t noticed any weakness or numbness.")',
]
```

Every station must deny: systemic red flags (weight loss, night sweats), condition-specific red flags, and relevant neurological symptoms.

#### ICE (`ice`)
Three short, natural verbatim quotes. The actor only reveals these if specifically asked.

```ts
ice: {
  ideas: '"I\'m not sure what\'s going on — maybe something to do with my back?"',
  concerns: '"I\'m worried it might be something serious."',
  expectations: '"I just want to know what\'s causing it."',
}
```

#### `onlyIfDirectlyAsked`
Items the actor must not volunteer unprompted — embarrassment, stigma, or not thinking it relevant.

#### `behaviourNotes`
Emotional state, specific moments of distress, how the actor responds to empathy vs poor technique. Include specific questions the patient will ask the student and what a good response looks like.

#### Examination stations
For physical examination stations, use `historyOfPresentingComplaint` to list examination findings. Organise by examination sequence. For each step:
- State positive findings explicitly with the expected actor response
- State what is normal so the actor knows what to demonstrate when negative findings are tested
- Specify side (left/right) and UMN vs LMN pattern where relevant

---

### 3. Mark Scheme (`markScheme`)

**The mark scheme tests what the student DOES, not what they know.** Every item describes a student action or behaviour, not a clinical fact.

#### Structure — always follow the consultation flow

Domains must appear in this order:

1. **Opening the consultation**
   - Washes hands and introduces themselves
   - Confirms patient's name and date of birth
   - Explains purpose and gains consent to proceed

2. **Presenting complaint** — open question used to elicit the PC

3. **History of presenting complaint** — one domain per major symptom; items describe what the student asks, not what they find:
   - "Explores the site and character of the pain using SOCRATES or equivalent"
   - "Identifies [key positive feature] by asking about [specific topic]"
   - "Determines [timing/pattern] of the [symptom]"

4. **Screening for red flags / important negatives** — one domain; items name the questions asked, not the answers:
   - "Screens for neurological red flags including neck stiffness, photophobia, and focal neurology"
   - "Asks about [specific red flag] in the context of [symptom]"

5. **ICE** — "Explores the patient's ideas, concerns, and expectations"

6. **Systemic enquiry** — "Screens for relevant symptoms in other body systems"

7. **Past medical and surgical history**

8. **Drug history** — including OTC medications and allergies

9. **Family history**

10. **Social history** — smoking, alcohol, occupation, impact on quality of life

11. **Closing the consultation**
    - Summarises the history back to the patient
    - Asks if anything has been missed
    - Thanks the patient

12. **Key communication skills** (always last, always these three):
    - Active listening
    - Summarising
    - Signposting

#### Item wording rules
- Imperative third person: "Asks about...", "Explores...", "Identifies...", "Screens for..."
- Name the question or action, not the expected answer: ✅ "Asks about the frequency of analgesic use" not ❌ "Identifies medication overuse headache"
- 1 mark per item unless it is the single highest-yield item in the domain (then 2 marks)
- Total marks for a 10-minute station: 20–30 marks

---

### 4. Expected Presentation (`expectedPresentation`)

A bulleted model of what a well-structured verbal presentation sounds like at the end of the station. Written as third-person descriptions of what the student says (not direct speech):

- Patient summary: name, age, key context
- Headline diagnosis stated with confidence
- Supporting features from the history that confirm the diagnosis
- Relevant negatives that exclude the main differential
- Interpretation of any investigation result provided
- Management plan including any safety-netting

Aim for 5–7 bullets. Order them as the student would speak them.

---

### 5. Viva Questions (`vivaQuestions`)

- 3–4 questions per station
- Targets: differential diagnosis, investigations, management, complications, classification systems
- Answers: 4–6 plain-English bullet points, no sub-bullets, no markdown inside the string
- Each bullet under 120 characters
- Include a `source` on each question

---

### 6. Diagnosis (`diagnosis`)

Single short label displayed on the station card and in the UI. Examples: `"Tension-type headache"`, `"Rheumatoid arthritis"`, `"BPPV"`, `"Cauda equina syndrome"`. This is the correct answer the station is designed to reach.

---

### Images on mock stations

Use the top-level `imageUrl` field on `MockExamStation` for reference diagrams shown in the Brief tab. Source from Wikimedia Commons. **Verify the URL resolves before writing it into the data** — fetch the URL and confirm it returns image binary data, not a 404. Never reference a diagram in the brief without providing the image.

---

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

---

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.
