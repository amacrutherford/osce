# CLAUDE.md

## OSCE Exam questions

For all OSCE exams, this is for UK medical students prepare. For each step in the exam, give questions that the examiner could ask them, with particular focus on the medical reason behind each step in the exam, common pathologies (with their anatomical locations/causes), and commons scars and their pathologies if applicable. Ignore common steps, like asking for name and level of privacy. Ensure questions are medically correct.

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

## Mock OSCE Stations

Mock stations simulate the full OSCE experience. Each `MockExamStation` object has four required sections:

### 1. Candidate Brief (`candidateBrief`)

What the student reads before entering. Must include:
- `setting` — who the candidate is and where they are (e.g. "FY1 in A&E")
- `scenario` — the clinical situation with observations if relevant (BP, HR, GCS etc.)
- `tasks` — 3–4 numbered bullet points of what to do
- `timeAllowed` — minutes (typically 10)

**The brief must be intentionally vague about method.** Tasks state the expected outcome only — never the specific steps, tests, or framework to use. This preserves the station's ability to assess whether the student can independently select and conduct a tailored, focused approach.

Good: `"Assess this patient's communication difficulties and present your findings"`
Bad: `"Perform a structured speech and language assessment covering all 6 components of language, then test cranial nerves VII, IX, X, and XII"`

Good: `"Take a focused history and state your diagnosis and management plan"`
Bad: `"Take a focused history distinguishing central from peripheral causes, then perform the Dix-Hallpike test"`

The scenario may include relevant clinical context (observations, referral reason) but must not name specific examination components, investigation frameworks, or clinical tools the student is expected to use.

**If the brief references a diagram, chart, or document, it must actually exist.** Either:
- Set `imageUrl` on the station to a verified, loadable Wikimedia Commons URL; update the setting text to say "a diagram is displayed above", OR
- Remove the reference from the brief entirely

Never write "a diagram has been placed on the desk" without providing the image. If a suitable image cannot be found, say so and ask the user to provide one.

### 2. Actor Instructions (`actorInstructions`)

The simulated patient script. Must contain sufficient medical detail for a real actor to portray the case accurately.

**`historyToReveal`** — every clinically significant data point must have its own entry with an exact verbatim response. Required entries for history-taking stations:

- **Onset and quality** — exact speed (thunderclap vs gradual), character in lay terms, NRS severity
- **Site and radiation** — precise anatomical description in lay language
- **Associated symptoms** — each symptom as a separate entry; explicitly deny red-flag symptoms the actor will be asked about
- **Ictal/episodic features** — for seizure stations: focal motor features before generalisation, tongue bite laterality, incontinence, post-ictal duration, Todd's paresis
- **Between-episode state** — confirm normal function between episodes (critical for BPPV, TIA, seizure)
- **Relevant negatives** — explicitly script "no" answers to high-yield screening questions (diplopia, dysphagia, hearing loss, neck stiffness, photophobia, limb weakness etc.)
- **Past medical history** — each condition as a separate entry; include medications with dose
- **Vascular risk factors** — smoking (quantify pack-years), alcohol, diabetes, cholesterol, family history
- **Social / safety questions** — driving, occupation, living situation

For **examination stations** (e.g. speech/language, neurological):
- Script the exact abnormality to demonstrate for every test the student might perform
- Include both the positive finding AND the normal contralateral side
- Specify UMN vs LMN pattern explicitly so the actor knows what to simulate
- Include responses to tests the student might attempt but that are normal (e.g. CN V sensation, CN VIII hearing, contralateral limb power)

**`onlyIfDirectlyAsked`** — list items the actor must NOT volunteer; explain why each is withheld (embarrassment, doesn't consider it relevant, etc.)

**`behaviourNotes`** — describe emotional state, specific moments of distress, and how the actor should respond to empathy or poor communication technique

### 3. Mark Scheme (`markScheme`)

Organised by domain (e.g. "History — Onset", "Vascular Risk Factors", "Communication"). Each item:
- One specific, objectively assessable action
- Allocated marks (1–2 per item; 2 for the highest-yield items)
- Total marks across all domains visible in the UI

### 4. Expected Presentation (`expectedPresentation`)

Before the viva questions, include a model presentation of findings — what a good candidate should say when they conclude their station and hand over to the examiner. This is displayed at the top of the Viva tab.

Write it as a bulleted list of the key components a well-structured presentation would cover, in the order a student should present them:
- Patient summary (name, age, key context)
- Headline diagnosis or key findings
- Supporting features from the history or examination that confirm the diagnosis
- Relevant negatives that helped exclude differentials
- Interpretation of any investigations or diagrams used
- Management plan and safety-netting

Each bullet should be one complete sentence written as if the student is speaking (e.g. "States the likely diagnosis with confidence before supporting it with evidence"). Aim for 5–7 bullets covering the whole presentation arc. This helps the examiner assess verbal presentation skill, not just factual knowledge.

### Images on mock stations

Use the top-level `imageUrl` field on `MockExamStation` for reference diagrams shown in the Brief tab. Source from Wikimedia Commons. Verify the URL resolves before writing it into the data — fetch the URL and confirm it returns image binary data, not a 404.

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
