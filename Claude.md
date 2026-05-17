# CLAUDE.md

## OSCE Exam questions

For all OSCE exams, this is for UK medical students prepare. For each step in the exam, give questions that the examiner could ask them, with particular focus on the medical reason behind each step in the exam, common pathologies (with their anatomical locations/causes), and commons scars and their pathologies if applicable. Ignore common steps, like asking for name and level of privacy. Ensure questions are medically correct.

### Sourcing

Every `rationale` and `pathology` question object **must** include a `source` field citing the authoritative reference for that content. Acceptable sources (in order of preference):

- NICE Clinical Guidelines — cite guideline ID and year, e.g. `"NICE CG144 (2012)"`
- British Orthopaedic Association Standards for Trauma (BOAST) — cite guideline number and year
- Royal College guidelines — cite the college, guideline title, and year
- Oxford Handbook of Clinical Medicine / specialty handbooks — cite edition and chapter, e.g. `"OHCM 10th ed., Ch. 6"`
- Major peer-reviewed consensus where no guideline exists — cite journal, author, year, e.g. `"Rockwood & Green's Fractures, 9th ed."`

Format: plain-text string on the `source` field of the question object.

Example:
```ts
{ id: 'ex-r1', type: 'rationale', text: '...', source: 'NICE CG144 (2012)' }
{ id: 'ex-p1', type: 'pathology', text: '...', source: 'OHCM 10th ed., Ch. 6' }
```

`examiner` questions do not require a `source` field.

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
