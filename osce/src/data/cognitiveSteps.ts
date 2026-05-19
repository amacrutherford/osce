import type { ExamStep } from './steps';

export const cognitiveSteps: ExamStep[] = [
  {
    id: 'cog-intro',
    stepNumber: 1,
    title: 'Introduction and Orientation',
    subtitle: 'Explain the assessment and test time and place orientation',
    description: 'Introduce the cognitive assessment sensitively, explaining its purpose without causing anxiety, then test orientation in time and place — the most basic measure of global cognitive function.',
    checklist: [
      'Explain that you will ask some questions to test memory and concentration — normalise with "some people find these easy, others find them harder"',
      'Test time orientation: What is today\'s date? Day of the week? Month? Year? What season is it? (MMSE: 5 points; MoCA: date/month/year/day/place/city = 6 points)',
      'Test place orientation: What country are we in? County/city? Name of this building? What floor are we on?',
      'Score MMSE orientation: 10 points total (5 time + 5 place); MoCA: 6 points',
      'Document the patient\'s premorbid level of function (occupation, education) to contextualise scoring',
    ],
    questions: [
      {
        id: 'cog-intro-q1',
        type: 'examiner',
        text: 'Why is it important to know a patient\'s premorbid level of education before interpreting cognitive test scores?',
      },
      {
        id: 'cog-intro-r1',
        type: 'rationale',
        text: '',
        bullets: [
          'Cognitive test scores are influenced by educational attainment — a higher educated patient may score within the "normal" range despite significant decline from their baseline',
          'MMSE has known education bias: patients with <8 years of education score on average 3 points lower; OHCM adjusts cutoffs by age and education',
          'MoCA is more sensitive than MMSE for mild cognitive impairment (MCI) but also affected by education — the 2019 MoCA manual recommends adding 1 point for ≤12 years of education',
          'Always compare against the individual\'s estimated premorbid function and seek collateral history for an accurate assessment of decline',
        ],
        source: 'OHCM 10th ed., Ch. 19',
      },
    ],
  },
  {
    id: 'cog-attention',
    stepNumber: 2,
    title: 'Registration and Attention',
    subtitle: 'Immediate memory and sustained attention',
    description: 'Test registration of new information and sustained attention, which are early and sensitive markers of cognitive dysfunction across multiple domains.',
    checklist: [
      'MMSE registration: ask patient to repeat 3 words (e.g. apple, table, penny) — up to 3 trials to learn all 3; score first trial only (3 points)',
      'MoCA registration: read 5 words (face, velvet, church, daisy, red) slowly twice — no score at this stage, scored at delayed recall',
      'MMSE attention: serial 7s (100−7 five times = 93, 86, 79, 72, 65 — score 5); OR spell WORLD backwards (DLROW — score 5)',
      'MoCA attention: forward digit span (repeat 2-1-8-5-4 = 5 digits), backward digit span (repeat 7-4-2 = 3 digits), serial 7s (×5 subtractions)',
      'Note: attention deficits in delirium are prominent; in Alzheimer\'s, attention is relatively spared early',
    ],
    questions: [
      {
        id: 'cog-att-q1',
        type: 'examiner',
        text: 'How do you distinguish delirium from dementia on cognitive testing?',
      },
      {
        id: 'cog-att-p1',
        type: 'pathology',
        text: '',
        bullets: [
          'Delirium: acute onset (hours to days), fluctuating consciousness, prominent inattention (cannot sustain serial 7s or digit span), often disordered perception (hallucinations), disrupted sleep-wake cycle',
          'Dementia: insidious onset (months to years), consciousness typically clear until late stages, memory impairment precedes attention deficits in Alzheimer\'s',
          'Key test: digit span — severely impaired in delirium (forward span <5 highly suspicious); relatively preserved until moderate dementia',
          'Delirium superimposed on dementia is common in hospital — dementia is the strongest risk factor for delirium; use 4AT or CAM score to detect delirium',
        ],
        source: 'NICE CG103 (2010)',
      },
    ],
  },
  {
    id: 'cog-language',
    stepNumber: 3,
    title: 'Language and Naming',
    subtitle: 'Naming, repetition, comprehension, and fluency',
    description: 'Test language function to identify aphasia or anomia, which localise disease to the dominant temporal or frontal cortex and are early features of Alzheimer\'s disease.',
    checklist: [
      'MMSE naming: show a pen and watch — name them (2 points)',
      'MMSE repetition: "No ifs, ands, or buts" — score 1 point if correct first time',
      'MMSE three-stage command: "Take this paper in your right hand, fold it in half, and put it on the floor" (3 points)',
      'MoCA naming: name three less common animals (lion, rhinoceros/camel, dromedary — 3 points)',
      'MoCA verbal fluency: name as many words beginning with letter F as possible in 60 seconds — ≥11 words = 1 point (tests executive/frontal function)',
    ],
    questions: [
      {
        id: 'cog-lang-q1',
        type: 'examiner',
        text: 'Anomia is a prominent early feature of which dementia and what is its anatomical basis?',
      },
      {
        id: 'cog-lang-p1',
        type: 'pathology',
        text: '',
        bullets: [
          'Anomia (difficulty naming objects) is an early and prominent feature of Alzheimer\'s disease, reflecting atrophy of the temporal neocortex (inferior and middle temporal gyri)',
          'Also early in semantic dementia (variant of FTD): profound word-finding difficulty, loss of semantic knowledge (patient cannot define what an object is), temporal pole atrophy on MRI',
          'In Alzheimer\'s: naming difficulty progresses from low-frequency to high-frequency words; finger agnosia and acalculia also occur (dominant parietal lobe — Gerstmann\'s syndrome)',
          'Broca\'s (expressive) aphasia: hesitant non-fluent speech, good comprehension; Wernicke\'s (receptive) aphasia: fluent but empty speech, poor comprehension — lesions in dominant hemisphere',
        ],
        source: 'OHCM 10th ed., Ch. 19',
      },
    ],
  },
  {
    id: 'cog-visuospatial',
    stepNumber: 4,
    title: 'Visuospatial Ability',
    subtitle: 'Intersecting pentagons, cube copying, and clock drawing',
    description: 'Test visuospatial and constructional ability, which reflects parietal and frontal lobe function and is impaired early in Alzheimer\'s disease and Lewy body dementia.',
    checklist: [
      'MMSE: ask patient to copy two intersecting pentagons (each pentagon must have 5 sides, angles must intersect — 1 point)',
      'MoCA: copy a three-dimensional cube accurately (perspective must be correct — 1 point)',
      'MoCA clock drawing: draw a clock face with numbers 1–12 and set the hands to 10 past 11 (score 3 points: contour, numbers correct, hands correct)',
      'Score the clock strictly: contour = closed circle (1); numbers = all 12 digits in approximately correct positions (1); hands = correct hour and minute hands with correct relative length (1)',
      'Note: clock drawing tests visuospatial ability AND executive function (planning, sequencing) — hence sensitive for frontal pathology',
    ],
    questions: [
      {
        id: 'cog-visuo-q1',
        type: 'examiner',
        text: 'What specific errors in the clock drawing test suggest frontal lobe versus parietal lobe pathology?',
      },
      {
        id: 'cog-visuo-p1',
        type: 'pathology',
        text: '',
        bullets: [
          'Parietal pathology (Alzheimer\'s, non-dominant hemisphere lesion): visuospatial errors — numbers poorly placed, crowded to one side, hands misdrawn, contour misshapen',
          'Frontal/executive pathology (FTD, vascular dementia): perseveration (repeating numbers), impaired planning (concrete stimulus-bound response: "hands at 10 and 11" literally), failure to complete',
          'Neglect (right parietal lesion): all numbers crowded to the right side of the clock; left spatial neglect (hemi-inattention)',
          'Clock drawing alone has ~85% sensitivity and ~85% specificity for dementia (Shulman, 2000) — useful bedside screen',
        ],
        source: 'OHCM 10th ed., Ch. 19',
      },
    ],
  },
  {
    id: 'cog-memory',
    stepNumber: 5,
    title: 'Delayed Recall',
    subtitle: 'Recall 3–5 words registered earlier',
    description: 'Test delayed recall of words registered at the start of the assessment — the most sensitive single test for Alzheimer\'s disease, reflecting hippocampal dysfunction.',
    checklist: [
      'MMSE: ask patient to recall the 3 words registered at the start (3 points)',
      'MoCA: ask patient to recall the 5 words registered at the start (5 points maximum)',
      'If unable to recall freely, offer a categorical cue (e.g. "it was a fruit" for apple)',
      'If still unable, offer multiple choice (e.g. "was it apple, banana, or orange?")',
      'Score: free recall = 1 point per word; note whether cuing or recognition is needed (failure even with cues = storage problem; successful with cues = retrieval problem)',
    ],
    questions: [
      {
        id: 'cog-mem-q1',
        type: 'examiner',
        text: 'Why is delayed recall the most sensitive early test for Alzheimer\'s disease?',
      },
      {
        id: 'cog-mem-r1',
        type: 'rationale',
        text: '',
        bullets: [
          'Alzheimer\'s disease: amyloid plaques and neurofibrillary tangles begin in the hippocampus and entorhinal cortex — regions critical for encoding new episodic memories',
          'Result: a encoding deficit — new information cannot be consolidated from short-term to long-term memory; cueing does NOT help (unlike retrieval problems in frontal/subcortical dementia)',
          'Early AD: MoCA delayed recall ≤2/5 has >80% sensitivity; even short delays (5 minutes) reveal encoding failure',
          'Vascular dementia and FTD may have better delayed recall with cues (retrieval deficit) but worse attention and executive function early — different pathological profile',
        ],
        source: 'NICE NG97 (2018)',
      },
    ],
  },
  {
    id: 'cog-executive',
    stepNumber: 6,
    title: 'Executive Function and Abstraction',
    subtitle: 'Trails B, similarities, and verbal fluency',
    description: 'Test executive and frontal lobe function — impaired early in vascular dementia, FTD, and DLB — using tasks that require planning, cognitive flexibility, and abstract reasoning.',
    checklist: [
      'MoCA Trail Making B: draw a line alternating between numbers and letters (1-A-2-B-3-C-4-D-5-E) — tests set-shifting (1 point)',
      'MoCA similarities: "In what way are a train and bicycle similar?" (both are vehicles = abstract answer); "In what way are a watch and ruler similar?" (both measure things) — 2 points for abstract answers',
      'If patient gives concrete responses (e.g. "both have wheels") = frontal/executive deficit',
      'MoCA verbal fluency: as many F-words as possible in 60 seconds — ≥11 = pass (1 point)',
      'MMSE lacks executive function tests — this is a key reason MoCA is more sensitive for MCI',
    ],
    questions: [
      {
        id: 'cog-exec-q1',
        type: 'examiner',
        text: 'Which dementia subtypes present with early executive dysfunction and what are their clinical features?',
      },
      {
        id: 'cog-exec-p1',
        type: 'pathology',
        text: '',
        bullets: [
          'Frontotemporal dementia (FTD) — behavioural variant: disinhibition, apathy, loss of social awareness, perseveration, compulsive behaviours; frontal and temporal atrophy on MRI; age 45–65; episodic memory relatively spared early',
          'Vascular dementia: stepwise deterioration following strokes, focal neurological signs, frontal-subcortical profile (slowed processing, poor planning), lacunar infarcts on MRI',
          'DLB (dementia with Lewy bodies): fluctuating cognition, visual hallucinations, Parkinsonism, REM sleep behaviour disorder; DaT-SPECT abnormal; extremely sensitive to antipsychotics — AVOID haloperidol',
          'PSP (progressive supranuclear palsy): vertical gaze palsy, early falls, hypophonia, executive dysfunction, midbrain ("hummingbird") atrophy on MRI',
        ],
        source: 'NICE NG97 (2018)',
      },
    ],
  },
  {
    id: 'cog-scoring',
    stepNumber: 7,
    title: 'Scoring and Interpretation',
    subtitle: 'MMSE and MoCA cutoffs, limitations, and next steps',
    description: 'Interpret the total score in the context of the patient\'s age, education, and premorbid function, and plan next investigations to establish a diagnosis.',
    checklist: [
      'Calculate total MMSE score (out of 30): ≥27 = normal; 21–26 = mild; 10–20 = moderate; <10 = severe impairment',
      'Calculate total MoCA score (out of 30): ≥26 = normal; <26 = cognitive impairment; add 1 point for ≤12 years of education',
      'Compare scores against age- and education-adjusted normative data',
      'State that a single test score is not diagnostic — clinical context and longitudinal change are essential',
      'Plan investigations: bloods (TFTs, B12/folate, FBC, LFTs, calcium, glucose, syphilis serology, HIV), CT/MRI head, referral to memory clinic',
    ],
    questions: [
      {
        id: 'cog-score-q1',
        type: 'examiner',
        text: 'Why is MoCA now preferred over MMSE in clinical practice for detecting mild cognitive impairment?',
      },
      {
        id: 'cog-score-r1',
        type: 'rationale',
        text: '',
        bullets: [
          'MoCA has greater sensitivity for MCI: 90% sensitivity vs ~18% for MMSE (Nasreddine et al., 2005) because MMSE lacks executive, visuospatial, and complex memory tests',
          'MoCA includes clock drawing, trails B, cube copy, and 5-word recall — all impaired early in neurodegenerative dementia',
          'MMSE has been protected by copyright since 2001 (Psychological Assessment Resources) — MoCA is freely available for clinical use',
          'MMSE retains use for monitoring disease progression over time (well-validated longitudinal data; declines ~3 points/year in AD)',
        ],
        source: 'NICE NG97 (2018)',
      },
      {
        id: 'cog-score-q2',
        type: 'examiner',
        text: 'What investigations would you request following a low MoCA score in a 70-year-old patient?',
      },
      {
        id: 'cog-score-p2',
        type: 'pathology',
        text: '',
        bullets: [
          'Blood tests to exclude reversible causes: TFTs (hypothyroidism), B12 and folate (subacute combined degeneration), FBC (anaemia), LFTs, calcium (hypercalcaemia), fasting glucose, syphilis serology (VDRL), HIV',
          'Urinalysis and MSU (UTI is a common precipitant of delirium mimicking dementia in elderly)',
          'CT head: exclude structural causes (subdural haematoma, normal pressure hydrocephalus, tumour)',
          'MRI brain with sequences for hippocampal atrophy (Alzheimer\'s), white matter change (vascular), temporal/frontal atrophy (FTD)',
          'Referral to memory clinic for formal neuropsychological testing, DaT-SPECT (DLB), and specialist diagnosis (NICE NG97)',
        ],
        source: 'NICE NG97 (2018)',
      },
    ],
  },
];

// EXAM_ENTRY_DATA
// {"id":"cognitive-assessment","title":"Cognitive Assessment (MMSE / MoCA)","description":"Structured cognitive assessment using MMSE and MoCA, covering orientation, registration, attention, language, visuospatial ability, delayed recall, and executive function — with interpretation and investigation planning.","specialtyId":"psychiatry","highYieldSummary":["MoCA is now preferred over MMSE for MCI detection: sensitivity 90% vs 18% for MMSE; MoCA includes clock drawing, trails B, 5-word recall, and abstraction tasks that MMSE omits.","MMSE cutoffs: ≥27 = normal; 21–26 = mild; 10–20 = moderate; <10 = severe cognitive impairment. MoCA: ≥26 = normal; add 1 point for ≤12 years of education.","Delayed free recall failure (MoCA ≤2/5 words) without improvement with cues = hippocampal encoding deficit → Alzheimer\'s disease. Improvement with cues = retrieval deficit → subcortical/vascular.","DLB diagnostic features: fluctuating cognition + complex visual hallucinations (detailed) + Parkinsonism + REM sleep behaviour disorder. AVOID haloperidol — risk of severe neuroleptic sensitivity reaction.","FTD: onset 45–65 years, behavioural change (disinhibition, apathy, perseveration), executive dysfunction, frontal/temporal atrophy; episodic memory relatively preserved early.","Reversible causes of cognitive impairment to exclude: hypothyroidism, B12/folate deficiency, subdural haematoma, normal pressure hydrocephalus (triad: dementia + gait apraxia + urinary incontinence), UTI/delirium."]}
