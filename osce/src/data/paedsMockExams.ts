import type { MockExamStation } from './mockExamTypes';

const paedsMigraineHistoryMockExam: MockExamStation = {
  id: 'paeds_migraine_history',
  title: 'Paediatric History — Recurrent Headaches',
  diagnosis: 'Migraine without aura',
  specialtyId: 'paediatrics',
  candidateBrief: {
    setting: 'You are an FY1 in a paediatric neurology outpatient clinic.',
    scenario:
      'Mrs Diane Bradley, 42, has brought her 8-year-old son Jack to clinic. Jack has been having recurrent headaches for the past 6 months. He is sitting quietly in the corner.',
    tasks: [
      'Take a focused history from Mrs Bradley about Jack\'s headaches',
      'Explain your working diagnosis and management plan to Mrs Bradley',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'Diane Bradley',
    age: 42,
    occupation: 'Part-time administrator (Jack\'s mother)',
    openingLine:
      '"Thank you for seeing us. Jack\'s been getting these really bad headaches for about 6 months now and I\'m quite worried — his school is starting to notice he keeps missing days."',
    socrates: [
      {
        label: 'Site',
        descriptor: 'bifrontal — both sides of forehead; sometimes behind the eyes',
        quotes: ['"He points to the front of his head — here, both sides." – "Sometimes he says it\'s behind his eyes too."'],
      },
      {
        label: 'Onset',
        descriptor: 'started 6 months ago; 2–3 per month; sometimes builds insidiously (goes quiet before onset)',
        quotes: ['"Started about 6 months ago. He gets them 2 or 3 times a month." – "Sometimes they come out of nowhere and sometimes I can tell one\'s coming because he goes quiet."'],
      },
      {
        label: 'Character',
        descriptor: 'pulsating / throbbing quality; aggravated by movement and coughing',
        quotes: ['"He describes it as banging or throbbing — like his head is pounding." – "It gets worse when he runs around or when he coughs, so he just stays still."'],
      },
      {
        label: 'Radiation',
        descriptor: 'none reported',
        quotes: [],
      },
      {
        label: 'Associated symptoms',
        descriptor: 'nausea; vomiting (frequent); photophobia (pulls curtains, turns off lights); phonophobia (loud sounds unbearable); prefers dark quiet room',
        quotes: ['"He always feels nauseous with them and he\'s vomited during quite a few." – "He hates bright light — he pulls the curtains and turns everything off. He finds loud sounds really unbearable too."'],
      },
      {
        label: 'Timing',
        descriptor: '2–6 hours per episode; sleeps afterwards and wakes completely normal; well between attacks',
        quotes: ['"Usually 2 to 6 hours. Then he sleeps and wakes up completely fine." – "Completely normal in between — you would never know. He\'s his usual self."'],
      },
      {
        label: 'Exacerbating / triggers',
        descriptor: 'sleep deprivation; dehydration; possible stress (onset coincided with junior school transition); no aura',
        quotes: ['"If he has a late night — or if he hasn\'t drunk enough water. Stress might be a trigger too — they started when he went up to junior school." – "He doesn\'t describe anything visual before it starts."'],
      },
      {
        label: 'Severity',
        descriptor: 'severe — "worst pain he\'s ever had"; misses approximately 1 school day per episode',
        quotes: ['"He says they\'re the worst pain he\'s ever had." – "He\'s missed probably one day per attack."'],
      },
    ],
    pastMedicalHistory: [
      { label: 'No significant past medical history; normal birth; all developmental milestones met', quote: '"Nothing significant. Normal delivery, hit all his milestones. Had the usual childhood illnesses." – "No allergies."' },
    ],
    drugHistory: [
      { label: 'No regular medications; no known allergies', quote: '"He\'s not on any regular medications."' },
    ],
    familyHistory: [
      { label: 'Mother (Diane) — migraine since teenage years', quote: '"I have migraines — I\'ve had them since I was a teenager."' },
      { label: 'Maternal grandmother — migraine', quote: '"My mum has them too."' },
      { label: 'Father — no headaches', quote: '"His dad doesn\'t get headaches."' },
    ],
    socialHistory: [
      { label: 'Jack (8) — bright, sociable; Year 3 at junior school; moved up from infants 6 months ago', quote: '"He\'s a happy, sociable boy — bright, doing well at school."' },
      { label: 'School impact — approximately 1 day absent per attack; teacher has noticed increased absences', quote: '"He\'s missed probably one day per attack." – "His teacher has noticed he\'s off more than usual."' },
      { label: 'Lives with parents and younger sister; no significant stressors beyond school transition', quote: '"He lives with me and his dad and his younger sister. Normal family home. No significant stressors other than the school transition."' },
    ],
    importantNegatives: [
      'No early morning headache or headache waking from sleep ("No — they never happen in the morning when he first wakes up.")',
      'No progressive worsening over weeks ("It\'s been up and down — not getting consistently worse.")',
      'No vomiting without headache or projectile vomiting ("The vomiting is always with the headache, not separate.")',
      'No visual disturbance before the headache — no aura ("He doesn\'t describe anything visual before it starts.")',
      'No weakness, clumsiness, or speech changes during attacks ("Nothing like that — he\'s just pale and miserable.")',
      'No neck stiffness or fever ("No.")',
      'No recent head injury ("No.")',
    ],
    ice: {
      ideas:
        '"I suppose I think it\'s migraines — because I have them. But I wanted a doctor to confirm it, and I wasn\'t sure if children could get them at this age."',
      concerns:
        '"I\'m worried I\'m missing something serious — you read things online about brain tumours. The thought terrifies me." – "I\'m also worried about how much school he\'s missing."',
      expectations:
        '"I\'d like to know if it really is migraines and whether there\'s anything we can do to make them less frequent or less severe."',
    },
    onlyIfDirectlyAsked: [
      'Screen time — he plays on his tablet for 3–4 hours on weekends; possible screen trigger not yet identified',
      'Caffeine — not a regular caffeine drinker',
      'Dietary diary — has not kept one; willing to try',
    ],
    behaviourNotes: [
      'Attentive and articulate; clearly worried but trying to appear calm',
      'Visibly relieved when brain tumour is sensitively excluded by the student: "Oh, that\'s such a relief."',
      'Asks "How do we know it\'s not something serious?" — student should explain the features that support migraine and the red flags that would prompt imaging',
      'Asks "Will he grow out of it?" — student should explain that childhood migraine often improves after puberty, though it can persist',
      'Jack (actor or confederate) can confirm the pain is "really bad" and "I just want to sleep" if directly asked',
    ],
  },
  markScheme: [
    {
      domain: 'Opening the consultation',
      items: [
        { description: 'Introduces themselves and greets both Mrs Bradley and Jack', marks: 1 },
        { description: 'Confirms identity; explains the purpose of the consultation', marks: 1 },
      ],
    },
    {
      domain: 'Presenting complaint',
      items: [
        { description: 'Uses open questioning to let Mrs Bradley describe the headaches in her own words', marks: 1 },
      ],
    },
    {
      domain: 'History of presenting complaint — SOCRATES',
      items: [
        { description: 'Explores site and character — bifrontal, pulsating/throbbing quality', marks: 1 },
        { description: 'Establishes frequency (2–3/month) and duration (2–6 hours) of each episode', marks: 1 },
        { description: 'Identifies associated features — nausea/vomiting, photophobia, phonophobia', marks: 1 },
        { description: 'Confirms complete recovery between attacks — normal interictal state', marks: 1 },
        { description: 'Asks about triggers — sleep deprivation, dehydration, stress/school transition', marks: 1 },
        { description: 'Asks specifically whether any visual or sensory aura precedes the headache', marks: 1 },
      ],
    },
    {
      domain: 'Red flag screening',
      items: [
        { description: 'Asks about early morning headache, vomiting on waking, or headache waking from sleep (raised ICP)', marks: 2 },
        { description: 'Asks about progressive worsening over weeks', marks: 1 },
        { description: 'Asks about neurological symptoms during attacks — weakness, speech changes, coordination', marks: 1 },
        { description: 'Asks about fever, neck stiffness, and rash', marks: 1 },
        { description: 'Asks about recent head injury', marks: 1 },
      ],
    },
    {
      domain: 'ICE',
      items: [
        { description: 'Explores Mrs Bradley\'s ideas, concerns (brain tumour fear), and expectations', marks: 1 },
      ],
    },
    {
      domain: 'Past medical, drug, and family history',
      items: [
        { description: 'Asks about past medical history, birth history, and development milestones', marks: 1 },
        { description: 'Asks about family history of migraine — identifies strong maternal history', marks: 1 },
        { description: 'Takes a drug history including any analgesia already tried for attacks', marks: 1 },
      ],
    },
    {
      domain: 'Social history and impact',
      items: [
        { description: 'Asks about school attendance and academic/social impact', marks: 1 },
        { description: 'Asks about living situation and any psychosocial stressors', marks: 1 },
      ],
    },
    {
      domain: 'Closing the consultation',
      items: [
        { description: 'Summarises history back to Mrs Bradley and checks accuracy', marks: 1 },
        { description: 'Explains diagnosis of migraine, addresses brain tumour fear sensitively, and outlines management', marks: 1 },
        { description: 'Thanks Mrs Bradley and Jack', marks: 1 },
      ],
    },
    {
      domain: 'Key communication skills',
      items: [
        { description: 'Active listening — addresses both parent and child appropriately; uses age-appropriate language with Jack', marks: 1 },
        { description: 'Summarising and signposting', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Jack is an 8-year-old boy presenting with a 6-month history of recurrent bifrontal pulsating headaches, occurring 2–3 times per month, each lasting 2–6 hours',
    'Headaches are associated with nausea, vomiting, photophobia, and phonophobia; he relieves them by lying in a dark quiet room; activity aggravates the pain',
    'Completely well between attacks with no interictal symptoms — the normal interictal state is a key feature supporting primary headache disorder',
    'Identified triggers include sleep deprivation, dehydration, and stress (onset coincided with junior school transition); no visual aura',
    'Strong family history: mother and maternal grandmother both have migraine — supports diagnosis of migraine without aura',
    'Red flags excluded: no early morning headaches, no progressive worsening, no neurological symptoms during attacks, no fever or meningism, no head injury',
    'Diagnosis: migraine without aura (ICHD-3 criteria met); management: acute treatment with paracetamol or ibuprofen at headache onset; anti-nausea medication; trigger diary; consider prophylaxis (topiramate or propranolol) if ≥4 attacks per month; reassure that childhood migraine often improves with age',
  ],
  vivaQuestions: [
    {
      question: 'What are the ICHD-3 diagnostic criteria for migraine without aura in children?',
      keyPoints: [
        'At least 5 attacks fulfilling criteria B–D',
        'Duration 2–72 hours in adolescents (ICHD-3 allows 1–72 hours in children under 18)',
        'At least 2 of: unilateral or bilateral (frontal/temporal) location; pulsating quality; moderate or severe intensity; aggravation by routine physical activity',
        'During headache, at least 1 of: nausea/vomiting, or photophobia AND phonophobia',
        'Key differences from adult migraine: more commonly bilateral (bifrontal) in children; shorter duration; vomiting more prominent',
      ],
      source: 'International Headache Society, ICHD-3 (2018); NICE CG150 (Headaches in over 12s, 2012)',
    },
    {
      question: 'What red flag headache features in a child would prompt urgent neuroimaging?',
      keyPoints: [
        'SNOOP4 red flags: Systemic disease/symptoms, Neurological symptoms/signs, Onset sudden (thunderclap), Older age/new pattern, and Precipitated by Valsalva/positional change/exertion, Progressive worsening',
        'In children specifically: headache waking from sleep or worse in the morning (raised ICP); headache with vomiting on waking; new-onset headache with behaviour change, deteriorating school performance, or gait abnormality',
        'Papilloedema on fundoscopy is an absolute indication for urgent CT/MRI',
        'Occipital location + posterior fossa signs (ataxia, nystagmus) warrant imaging',
        'Age <3 years with new unexplained headache should prompt imaging',
      ],
      source: 'RCPCH Headache in Children guidelines; Lewis DW, Semin Pediatr Neurol 2010',
    },
    {
      question: 'How would you manage acute migraine attacks and prophylaxis in a child?',
      keyPoints: [
        'Acute treatment: ibuprofen 10 mg/kg (first-line in children) or paracetamol 15 mg/kg — take early at headache onset',
        'Anti-emetics: domperidone (preferred over metoclopramide in children) or prochlorperazine for nausea/vomiting',
        'Triptans: sumatriptan nasal spray licensed from age 12 in UK; almotriptan licensed from age 12 — not licensed under 12',
        'Prophylaxis if ≥4 attacks/month or significant impact: topiramate or propranolol (both NICE-recommended); pizotifen; discuss with paediatric neurologist',
        'Non-pharmacological: trigger diary, regular sleep/meals/hydration, screen time reduction, stress management, exercise',
      ],
      source: 'NICE CG150 (2012); Pediatric Migraine Treatment guidelines, RCPCH',
    },
    {
      question: 'What investigations would you request for a child presenting with recurrent headaches?',
      keyPoints: [
        'Migraine is a clinical diagnosis — no investigations required if clinical features are typical and no red flags',
        'MRI brain (not CT — avoids ionising radiation): indicated if red flag features present or diagnosis is unclear',
        'Ophthalmology referral if papilloedema suspected — visual field testing and fundoscopy',
        'Blood tests not routinely indicated; consider if systemic cause suspected (FBC, CRP/ESR, TFTs)',
        'Headache diary: useful to confirm frequency, identify triggers, and monitor response to treatment',
      ],
      source: 'NICE CG150 (2012); RCPCH Headache in Children guidelines',
    },
  ],
};

const paedsCannulaCounsellingMockExam: MockExamStation = {
  id: 'paeds_cannula_counselling',
  title: 'Paediatric Counselling — IV Access and Antibiotics',
  diagnosis: 'Bacterial sepsis in a young child (likely pyelonephritis)',
  specialtyId: 'paediatrics',
  candidateBrief: {
    setting: 'You are an FY1 on a paediatric assessment unit.',
    scenario:
      'Mrs Rachel Thompson, 34, has brought in her 3-year-old daughter Mia with a 2-day history of high fever, vomiting, and irritability. Mia\'s observations: temperature 39.6°C, HR 148 bpm, RR 32, SpO₂ 98% on air. Urine dip shows leucocytes and nitrites. CRP is 178 mg/L, WBC 18.2 × 10⁹/L. The registrar has reviewed Mia and wants IV antibiotics and IV fluids. Mrs Thompson is reluctant and asking if oral antibiotics will do.',
    tasks: [
      'Explain to Mrs Thompson why Mia needs IV access and intravenous antibiotics',
      'Address her concerns and gain her consent for the procedure',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'Rachel Thompson',
    age: 34,
    occupation: 'Primary school teacher (Mia\'s mother)',
    openingLine:
      '"I\'m really worried about Mia — she\'s been burning up for two days and hasn\'t really eaten anything. The nurse said she needs a drip but I don\'t want her to be in pain. Can\'t she just have tablets?"',
    historyOfPresentingComplaint: [
      {
        label: 'Concern — cannula pain; traumatic memory of watching nephew have one without anaesthetic cream',
        quote: '"I just don\'t want her to be in pain. She\'s only 3. I once saw my nephew have a drip put in and he screamed — I don\'t want that for Mia." – "Can\'t you use numbing cream or something?"',
      },
      {
        label: 'Question: why not oral antibiotics?',
        quote: '"She has been vomiting — she can\'t keep things down." – "But the doctor last time just gave her oral antibiotics for a urine infection and they worked fine."',
      },
      {
        label: 'Understanding of clinical situation (after explanation)',
        quote: '"I know she\'s poorly but I didn\'t realise it was that serious." [after explanation] "Oh — so her blood results show the infection has got into her bloodstream? That\'s why?"',
      },
      {
        label: 'Previous UTI — 8 months ago; resolved with oral trimethoprim at home',
        quote: '"She had a UTI 8 months ago. It cleared with a week of trimethoprim at home." – "She\'s never been this poorly before."',
      },
      {
        label: 'Mia\'s current state — prostrate; not eating since yesterday morning; vomiting persistently',
        quote: '"She\'s just lying there — she\'s not herself at all. Normally she never sits still. She hasn\'t eaten since yesterday morning and she keeps vomiting."',
      },
    ],
    pastMedicalHistory: [
      { label: 'Previous UTI 8 months ago — resolved with oral trimethoprim', quote: '"She had a UTI 8 months ago. It cleared with a week of trimethoprim at home."' },
    ],
    drugHistory: [
      { label: 'No regular medications; no known allergies', quote: '"None that I know of."' },
    ],
    familyHistory: [],
    socialHistory: [
      { label: 'Mia (3); older brother (6, at school); father on his way from work', quote: '"She has an older brother, 6. He\'s at school. My husband is on his way — he\'s at work."' },
    ],
    importantNegatives: [
      'No allergy to antibiotics ("None that I know of.")',
      'No prior allergic reactions or anaphylaxis ("Nothing like that, no.")',
      'No recent foreign travel ("No, we haven\'t been away.")',
    ],
    ice: {
      ideas:
        '"I thought it was another UTI like last time — that cleared up fine with tablets at home."',
      concerns:
        '"I\'m terrified about the drip hurting her. And I suppose I\'m scared about how ill she is. She\'s so little." – "Is it dangerous? Could she die from this?"',
      expectations:
        '"I want her to be better as quickly as possible without her suffering any more than she has to."',
    },
    onlyIfDirectlyAsked: [
      'Can she stay with Mia during the procedure? — strongly wants to stay; the student should offer this',
      'How long will Mia be in hospital? — typically 24–48 hours IV then switch to oral if improving',
      'Will there be lasting damage to her kidneys? — possible renal scarring from pyelonephritis; DMSA scan in 4–6 months if recurrent',
    ],
    behaviourNotes: [
      'Not aggressive — anxious and protective',
      'Responds well to being taken seriously and given clear, honest information without patronising language',
      'Becomes visibly more at ease when the student explains EMLA cream and that a parent can stay during the procedure',
      'Asks "How ill is she?" — student should explain honestly but reassuringly: she is unwell but being treated promptly',
      'Asks "Is it serious?" or "Could she die?" — student should acknowledge the seriousness without alarming unnecessarily',
      'Gives consent once she understands the need — her reluctance is based on incomplete information, not genuine refusal',
      'If the student rushes or is dismissive of the cannula pain concern, becomes more resistant',
    ],
  },
  markScheme: [
    {
      domain: 'Opening the consultation',
      items: [
        { description: 'Introduces themselves; confirms identity of the parent and child', marks: 1 },
        { description: 'Acknowledges Mrs Thompson\'s anxiety and the difficulty of the situation', marks: 1 },
      ],
    },
    {
      domain: 'Explaining Mia\'s clinical situation',
      items: [
        {
          description: 'Explains the diagnosis clearly: significant UTI/pyelonephritis with systemic features (high fever, raised CRP, WBC) requiring IV treatment',
          marks: 2,
        },
        {
          description: 'Explains why oral antibiotics are inadequate: Mia is vomiting (absorption unreliable) and the infection severity requires IV-level drug concentrations',
          marks: 2,
        },
        {
          description: 'Explains the risk of not treating: untreated pyelonephritis can progress to sepsis and serious complications',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Explaining the cannula procedure',
      items: [
        {
          description: 'Explains what the cannula is and why it is needed (IV access for antibiotics and fluids)',
          marks: 1,
        },
        {
          description: 'Explains pain minimisation: topical anaesthetic cream (EMLA/Ametop) applied 45–60 minutes before insertion',
          marks: 2,
        },
        {
          description: 'Offers that Mrs Thompson can stay with Mia throughout the procedure and offers distraction techniques',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Addressing concerns and ICE',
      items: [
        { description: 'Explores Mrs Thompson\'s specific concerns (pain, seriousness) and addresses each directly', marks: 1 },
        { description: 'Checks understanding: asks Mrs Thompson to summarise or asks if she has further questions', marks: 1 },
      ],
    },
    {
      domain: 'Obtaining consent',
      items: [
        { description: 'Explains that consent is needed from Mrs Thompson as the child\'s parent', marks: 1 },
        { description: 'Confirms she has understood and gives verbal consent for the procedure and antibiotics', marks: 1 },
      ],
    },
    {
      domain: 'Explaining the plan',
      items: [
        {
          description: 'Explains the plan: IV antibiotics (typically co-amoxiclav or cefuroxime), IV fluids for hydration, monitoring, switch to oral when improving',
          marks: 1,
        },
        { description: 'Gives a realistic expectation: likely 24–48 hours inpatient', marks: 1 },
      ],
    },
    {
      domain: 'Closing the consultation',
      items: [
        { description: 'Summarises the plan back to Mrs Thompson clearly', marks: 1 },
        { description: 'Thanks Mrs Thompson and acknowledges her cooperative approach', marks: 1 },
      ],
    },
    {
      domain: 'Key communication skills',
      items: [
        { description: 'Active listening — genuinely addresses the pain concern rather than dismissing it', marks: 1 },
        { description: 'Uses accessible language throughout; avoids jargon', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Mia is a 3-year-old girl presenting with a 2-day history of fever, vomiting, and irritability; observations show tachycardia (HR 148), pyrexia (39.6°C), and tachypnoea consistent with a systemic inflammatory response',
    'Urine dip showing leucocytes and nitrites, CRP 178 mg/L, and WBC 18.2 × 10⁹/L are consistent with significant pyelonephritis/urosepsis rather than an uncomplicated lower UTI',
    'The indication for IV antibiotics is two-fold: Mia cannot tolerate oral medication due to vomiting, and the severity of systemic infection requires reliable IV drug delivery',
    'Key concerns addressed: topical anaesthetic cream (EMLA/Ametop) will be applied before cannula insertion to minimise pain; Mrs Thompson will be offered the opportunity to remain with Mia throughout',
    'Management plan: IV cefuroxime or co-amoxiclav; IV fluid resuscitation; strict fluid balance monitoring; urinalysis culture and sensitivity to guide de-escalation; switch to oral antibiotics when apyrexial and tolerating feeds for >24 hours',
    'Expected inpatient duration: 24–48 hours IV therapy; total antibiotic course typically 7–10 days',
    'Follow-up: urine culture result review; consider renal USS (acute) and DMSA scan (4–6 months post-infection) if recurrent UTI to exclude vesicoureteric reflux or renal scarring',
  ],
  vivaQuestions: [
    {
      question: 'How do you classify and manage UTI in children according to NICE guidance?',
      keyPoints: [
        'NICE CG54 classifies by age and severity: under 3 months — any UTI requires urgent IV antibiotics and investigation; 3 months to 3 years — treat by severity',
        'Cystitis (lower UTI): normal upper tracts clinically; treat with oral antibiotics (trimethoprim or nitrofurantoin); no imaging if first episode in older child',
        'Pyelonephritis/upper UTI: fever >38°C, loin pain, vomiting, systemically unwell; treat with oral cefalexin if tolerating feeds; IV antibiotics if vomiting, <3 months, or severely unwell',
        'First febrile UTI in under 6 months or atypical/recurrent UTI: renal USS (acute), DMSA scan at 4–6 months, consider MCUG to exclude VUR',
        'Antibiotic choice: local sensitivity patterns important; co-amoxiclav or cefuroxime IV for hospitalised children',
      ],
      source: 'NICE CG54 (Urinary tract infection in under 16s, 2007, updated 2022)',
    },
    {
      question: 'What are the indications for IV antibiotics versus oral antibiotics in a child with a UTI?',
      keyPoints: [
        'IV route: age <3 months; systemically very unwell (sepsis features); vomiting preventing reliable oral absorption; upper UTI not responding to oral treatment within 24–48 hours',
        'Oral route: older child with uncomplicated lower UTI tolerating feeds; upper UTI if mild-moderate and tolerating oral medication',
        'Once the child is apyrexial for 24 hours and tolerating oral feeds, IV can be switched to oral to complete the course',
        'Antibiotic choice depends on local sensitivity: trimethoprim and nitrofurantoin are first-line oral; cefalexin or co-amoxiclav for upper UTI',
        'Duration: 7–10 days for upper UTI/pyelonephritis; 3–5 days for uncomplicated lower UTI',
      ],
      source: 'NICE CG54 (2007, updated 2022); PHE treatment guidelines',
    },
    {
      question: 'What is vesicoureteric reflux (VUR) and how does it relate to childhood UTI?',
      keyPoints: [
        'VUR: retrograde flow of urine from the bladder into the ureter and renal pelvis due to an incompetent vesicoureteric junction',
        'Graded I–V (V = intrarenal reflux); higher grades carry greater risk of renal scarring',
        'Recurrent pyelonephritis with VUR can cause renal scarring (reflux nephropathy) → chronic kidney disease and hypertension in adulthood',
        'MCUG (micturating cystourethrogram) is the gold standard investigation for VUR',
        'NICE CG54: MCUG indicated after first febrile UTI if under 6 months, atypical UTI, or recurrent UTI; DMSA scan at 4–6 months post-infection to detect scarring',
      ],
      source: 'NICE CG54 (2007); Smellie JM, Arch Dis Child 1985',
    },
  ],
};

const paedsEatingDisorderMockExam: MockExamStation = {
  id: 'paeds_eating_disorder_history',
  title: 'Paediatric History — Weight Loss in an Adolescent',
  diagnosis: 'Anorexia nervosa',
  specialtyId: 'paediatrics',
  candidateBrief: {
    setting: 'You are an FY1 in a paediatric outpatient clinic.',
    scenario:
      'Mrs Susan Clarke, 46, has brought in her 14-year-old daughter Ella who has lost approximately 8 kg over the past 4 months. Ella is sitting quietly and looks thin and pale. Mrs Clarke has done a lot of reading and believes the weight loss may be due to a thyroid problem or coeliac disease.',
    tasks: [
      'Take a focused history from Mrs Clarke (and Ella where appropriate) about the weight loss',
      'Explore the possibility of an eating disorder sensitively',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'Susan Clarke',
    age: 46,
    occupation: 'School librarian (Ella\'s mother)',
    openingLine:
      '"Thank you for seeing us. Ella has been losing weight very rapidly — she was 55 kg four months ago and she\'s now 47 kg. I\'ve been reading about coeliac disease and thyroid problems. I\'m sure it\'s something physical — she eats like a bird but she says she\'s not hungry."',
    historyOfPresentingComplaint: [
      {
        label: 'Weight loss — 8 kg over 4 months (55 → 47 kg); marked reduction in appetite',
        quote: '"She was 55 kg in September and she\'s now 47 kg — that\'s 8 kg in 4 months. She just doesn\'t eat. She says she\'s not hungry but she used to love her food." – "I\'ve tried cooking her favourite meals but she picks at them."',
      },
      {
        label: 'Dietary restriction — small lunch; minimal dinner; has cut out all carbohydrates',
        quote: '"She says she just isn\'t hungry — she has a small lunch at school and maybe a bit of dinner at home. She\'s cut out all carbs." – "If I push her to eat more she gets really upset and distressed."',
      },
      {
        label: 'Excessive exercise — ≥1 hour running each morning before school; sometimes evenings too',
        quote: '"She goes running every morning before school — at least an hour. And she goes again in the evenings sometimes." – "She was never this sporty before. I\'m pleased she\'s active but it does seem excessive."',
      },
      {
        label: 'Body image distortion — feels fat despite being clinically underweight (Ella, if asked sensitively)',
        quote: '[If student asks Ella directly, sensitively]: "I\'m not that thin. I still feel like I have fat on my stomach. I just want to be a bit lighter." [said quietly, not meeting eyes]',
      },
      {
        label: 'Amenorrhoea — no periods for 3 months (started 18 months ago)',
        quote: '"She started her periods about 18 months ago. But she hasn\'t had one for the last 3 months — is that normal?" [asked with concern]',
      },
      {
        label: 'Physical symptoms — cold intolerance; lanugo hair on arms; dizziness on standing',
        quote: '"She\'s always cold — she wears jumpers in summer. And her arms have this fine downy hair on them that wasn\'t there before." – "She gets dizzy if she stands up quickly."',
      },
      {
        label: 'Mood and social withdrawal — irritable; less social; lost interest in previous activities',
        quote: '"She\'s become quite withdrawn — she doesn\'t see her friends as much. She used to be so social." – "She snaps at me if I say anything about her eating."',
      },
      {
        label: 'Mother\'s working hypothesis — requests thyroid and coeliac blood tests',
        quote: '"I really think we should check her thyroid. My sister has an underactive thyroid and it caused weight changes." – "And I read that coeliac disease can cause weight loss in teenagers."',
      },
    ],
    pastMedicalHistory: [
      { label: 'No significant past medical history; all childhood vaccinations; no hospital admissions', quote: '"Nothing significant. She\'s had the usual childhood vaccinations. No allergies. No regular medications." – "She\'s never been admitted to hospital."' },
    ],
    drugHistory: [
      { label: 'No regular medications; no known allergies', quote: '"No regular medications. No allergies."' },
    ],
    familyHistory: [
      { label: 'Maternal aunt — hypothyroidism', quote: '"My sister has hypothyroidism."' },
      { label: 'No known eating disorders in the family', quote: '"No eating disorders in the family that I\'m aware of." [uncertain pause]' },
    ],
    socialHistory: [
      { label: 'Year 10 (14 years old); grades have dropped; less interested in hobbies', quote: '"She\'s in year 10. Her grades have dropped a bit — she used to be top of her class. She\'s less interested in things she used to enjoy."' },
      { label: 'School and friendships — some friends have noticed she looks thin', quote: '"I did ask if anything had happened at school — she said everything was fine." [friends have told her she looks thin — only if asked]' },
      { label: 'Social media — follows "wellness" and "clean eating" accounts (contributing factor; only if asked)', quote: '[Only if directly asked about social media]' },
    ],
    importantNegatives: [
      'No diarrhoea or malabsorptive symptoms ("No diarrhoea. Her stools are normal.")',
      'No heat intolerance, sweating, or palpitations ("She\'s always cold — the opposite.")',
      'No abdominal pain or bloating ("None.")',
      'No evidence of purging openly disclosed ("She doesn\'t go to the bathroom straight after meals." — though this should be specifically explored with Ella alone)',
      'No suicidal ideation ("I don\'t think she wants to hurt herself — she just won\'t eat.")',
    ],
    ice: {
      ideas:
        '"I think it must be a physical cause — the thyroid or coeliac. Teenagers don\'t just stop eating for no reason. There must be something wrong with her body."',
      concerns:
        '"I\'m worried that if we don\'t find the physical cause quickly, she\'ll keep losing weight." – "I\'m also scared she\'s going to faint or hurt herself if she carries on like this."',
      expectations:
        '"I\'d like blood tests done today — thyroid, coeliac. And I want to know she\'s safe."',
    },
    onlyIfDirectlyAsked: [
      'Purging — Ella initially denies; if sensitively pressed alone, may admit to occasionally making herself sick "but only sometimes"',
      'Whether Ella\'s friends have noticed — yes, two friends have said she looks thin and they are worried',
      'Social media — Ella follows a number of "wellness" and "clean eating" accounts; this may be a contributing factor',
    ],
    behaviourNotes: [
      'Susan is in denial about an eating disorder — genuinely convinced it is organic; becomes defensive if anorexia is suggested too directly too early',
      'Susan responds better to an exploratory approach — "I want to make sure we don\'t miss anything; let me ask a few more questions first"',
      'The student should ideally ask to speak with Ella alone at some point — Susan may resist briefly but ultimately agrees: "If it helps..."',
      'Ella (if seen alone): quiet and guarded; acknowledges "watching what I eat" but says she doesn\'t have a problem; won\'t make eye contact when asked about her weight',
      'If the student is sensitive, acknowledges the seriousness, and validates Susan\'s concern, she becomes more receptive to the possibility of an eating disorder',
      'Asks "Are we talking about anorexia?" — student should respond honestly but compassionately, explaining what anorexia is and that it is treatable',
    ],
  },
  markScheme: [
    {
      domain: 'Opening the consultation',
      items: [
        { description: 'Introduces themselves; acknowledges both Mrs Clarke and Ella', marks: 1 },
        { description: 'Sets a non-judgemental, sensitive tone from the outset', marks: 1 },
      ],
    },
    {
      domain: 'Weight loss — characterisation',
      items: [
        { description: 'Quantifies the weight loss (8 kg in 4 months) and rate of loss', marks: 1 },
        { description: 'Explores dietary intake — what and how much Ella is eating', marks: 1 },
        { description: 'Asks about exercise — identifies excessive compulsive exercise', marks: 1 },
      ],
    },
    {
      domain: 'Screening for eating disorder features',
      items: [
        {
          description: 'Explores body image sensitively — asks how Ella feels about her weight and appearance (ideally asking Ella directly)',
          marks: 2,
        },
        { description: 'Asks about purging behaviours — self-induced vomiting, laxative use', marks: 1 },
        { description: 'Asks about food rituals, hiding food, or eating alone', marks: 1 },
      ],
    },
    {
      domain: 'Physical consequences',
      items: [
        { description: 'Asks about amenorrhoea — identifies 3-month absence', marks: 1 },
        { description: 'Asks about cold intolerance, lanugo hair, dizziness/syncope', marks: 1 },
      ],
    },
    {
      domain: 'Screening for organic causes',
      items: [
        { description: 'Asks about symptoms of hypothyroidism (cold intolerance supports, but no goitre or bradycardia)', marks: 1 },
        { description: 'Asks about GI symptoms to screen for coeliac/IBD (diarrhoea, abdominal pain, malabsorption)', marks: 1 },
      ],
    },
    {
      domain: 'Mood and mental health',
      items: [
        { description: 'Asks about mood, social withdrawal, and school performance', marks: 1 },
        { description: 'Screens for suicidal ideation sensitively', marks: 1 },
      ],
    },
    {
      domain: 'ICE and addressing organic concern',
      items: [
        {
          description: 'Explores ICE — validates Mrs Clarke\'s worry about organic causes; explains organic causes will be excluded alongside eating disorder assessment',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Past medical, drug, and family history',
      items: [
        { description: 'Asks about past medical history and any prior eating disorder treatment', marks: 1 },
        { description: 'Asks about family history of eating disorders or thyroid disease', marks: 1 },
      ],
    },
    {
      domain: 'Closing the consultation',
      items: [
        { description: 'Summarises history sensitively; explains next steps (bloods to exclude organic causes, CAMHS/eating disorder team referral)', marks: 1 },
        { description: 'Addresses Mrs Clarke\'s concern about organic cause without dismissing it', marks: 1 },
      ],
    },
    {
      domain: 'Key communication skills',
      items: [
        { description: 'Asks to speak to Ella alone at some point during the consultation', marks: 1 },
        { description: 'Active listening — non-judgemental; validates both mother\'s and daughter\'s perspectives', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Ella is a 14-year-old girl presenting with an 8 kg weight loss over 4 months (from 55 to 47 kg), representing approximately 15% of body weight — a clinically significant rate of loss',
    'The history reveals a pattern consistent with anorexia nervosa: severe dietary restriction, excessive compulsive exercise (2+ hours daily), distorted body image ("I feel fat"), amenorrhoea for 3 months (secondary), cold intolerance, lanugo hair, and social withdrawal',
    'Physical red flag features: amenorrhoea, lanugo, dizziness on standing (orthostatic hypotension from malnutrition and dehydration)',
    'Organic causes have been considered: hypothyroidism (cold intolerance is present but no heat sensitivity or palpitations; TFTs to be checked) and coeliac disease (no diarrhoea or malabsorption symptoms; anti-TTG to be checked)',
    'Mrs Clarke is in denial about an eating disorder and attributes the weight loss to physical causes — this was explored sensitively while validating her concerns',
    'Management: urgent blood tests (FBC, U&Es, glucose, TFTs, coeliac screen, LFTs, phosphate — refeeding syndrome risk); urgent referral to CAMHS eating disorder team; consider medical admission if haemodynamically unstable or severe electrolyte disturbance',
    'Safeguarding: if Ella continues to decline and her life is at risk, the Mental Health Act (Children and Young Persons Act for under-18s) may be needed to treat in her best interests',
  ],
  vivaQuestions: [
    {
      question: 'What are the diagnostic criteria for anorexia nervosa, and what features distinguish it from other causes of weight loss in an adolescent?',
      keyPoints: [
        'DSM-5/ICD-11: restriction of energy intake leading to low body weight; intense fear of gaining weight or behaviour that interferes with weight gain; disturbance in self-perceived weight or shape',
        'Key features distinguishing from organic: purposeful restriction (not loss of appetite), fear of weight gain, distorted body image, overexercise, amenorrhoea, lanugo hair',
        'Organic differentials: hyperthyroidism (heat intolerance, palpitations, tremor), coeliac disease (diarrhoea, malabsorption), IBD, diabetes (polyuria, polydipsia), malignancy (systemic features, night sweats)',
        'SCOFF questionnaire: ≥2 positive answers suggests probable eating disorder; quick screening tool in primary care',
        'Bulimia nervosa: bingeing + compensatory purging behaviours; weight may be normal; dental erosion, parotid enlargement, callus on dorsum of hand (Russell\'s sign)',
      ],
      source: 'DSM-5 (2013); NICE NG69 (Eating disorders, 2017)',
    },
    {
      question: 'What are the physical complications of anorexia nervosa and what investigations would you request?',
      keyPoints: [
        'Cardiovascular: bradycardia, hypotension, prolonged QTc, arrhythmias — ECG essential; low BMI ≤13 or rapid weight loss is a medical emergency',
        'Electrolyte disturbances: hypokalaemia (especially if purging), hypophosphataemia (refeeding syndrome risk), hyponatraemia, hypomagnesaemia',
        'Endocrine: hypothalamic amenorrhoea (suppressed LH/FSH), hypothyroidism (sick euthyroid), low oestrogen → osteoporosis',
        'Haematological: normocytic anaemia, leucopenia, thrombocytopenia',
        'Investigations: FBC, U&Es, creatinine, LFTs, glucose, phosphate, magnesium, TFTs, LH/FSH, oestradiol, ECG, DEXA scan if prolonged amenorrhoea',
      ],
      source: 'NICE NG69 (2017); Junior MARSIPAN Report (2012) — Royal College of Psychiatrists',
    },
    {
      question: 'What is refeeding syndrome and how do you prevent it?',
      keyPoints: [
        'Refeeding syndrome: life-threatening electrolyte disturbance (especially hypophosphataemia) when nutrition is reintroduced too rapidly after prolonged starvation',
        'Mechanism: resuming carbohydrate intake stimulates insulin secretion → intracellular shift of phosphate, potassium, and magnesium → severe hypophosphataemia → cardiac failure, respiratory failure, seizures',
        'At-risk patients: BMI ≤16, minimal intake for >10 days, significant electrolyte abnormalities before refeeding',
        'Prevention: start refeeding at 10 kcal/kg/day; increase slowly over 4–7 days; supplement phosphate, potassium, magnesium prophylactically; high-dose thiamine before any feeding (as per NICE CG32)',
        'Monitor electrolytes 4-hourly during the first week of refeeding; cardiac monitoring if severe malnutrition',
      ],
      source: 'NICE CG32 (Nutrition support for adults, 2006); Junior MARSIPAN (2012)',
    },
  ],
};

const paedsBronchiolitisMockExam: MockExamStation = {
  id: 'paeds_bronchiolitis_history',
  title: 'Paediatric History — Bronchiolitis in a 7-Week-Old',
  diagnosis: 'Bronchiolitis — RSV, SpO2 91% requiring admission',
  specialtyId: 'paediatrics',
  candidateBrief: {
    setting: 'You are an FY1 in the Paediatric Assessment Unit.',
    scenario:
      'Priya Sharma, 29, has brought in her 7-week-old son Noah, who has had a 2-day history of coryzal symptoms and is now breathing with difficulty. The nurse has noted SpO2 91% on air and subcostal and intercostal recession on admission.',
    tasks: [
      'Take a focused paediatric history from Mrs Sharma about Noah\'s illness',
      'Explain your working diagnosis and immediate management plan to Mrs Sharma',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'Priya Sharma',
    age: 29,
    occupation: 'Dental nurse (currently on maternity leave)',
    openingLine:
      '"He\'s been snotty for two days but today he\'s really struggling to breathe — I can see his tummy going in and out and his little ribs when he breathes. I\'m so worried." [anxious, sleep-deprived, holding Noah]',
    historyOfPresentingComplaint: [
      {
        label: 'Onset — coryzal symptoms (runny nose, mild cough) starting 2 days ago; sister (4) had a cold last week',
        quote: '"It started 2 days ago with a runny nose and a little cough. Our 4-year-old had a cold last week — I think Noah caught it from her." – "He\'s been getting progressively worse."',
      },
      {
        label: 'Breathing — visibly laboured with subcostal and intercostal recession; fast breathing; no stridor; grunting in the last hour',
        quote: '"I can see his chest going in and out much more than normal — and these little dips under his ribs." [gestures subcostal area] – "He\'s been making a slight grunting sound in the last hour or so."',
      },
      {
        label: 'SpO2 — 91% on air noted by nurse on admission; no supplemental oxygen yet',
        quote: '[Examiner reports]: SpO2 91% on air on pulse oximetry.',
      },
      {
        label: 'Feeding — 30 mL last feed; normally takes 90 mL every 3 hours (less than 50% normal intake for 24 hours)',
        quote: '"He normally takes about 90 mL of formula every 3 hours. His last feed was only 30 mL — he just didn\'t want more. He\'s been like this all day." – "Yesterday afternoon he started taking less too — maybe half of what he normally has."',
      },
      {
        label: 'Wet nappies — last wet nappy 6 hours ago; normally wets every 2–3 hours (possible dehydration)',
        quote: '"His last wet nappy was about 6 hours ago. He normally has one about every 2 to 3 hours." – "I\'ve been watching really carefully."',
      },
      {
        label: 'Apnoeas — none observed by parent; no episodes of going blue or breath-holding',
        quote: '"No — I\'ve been watching him the whole time. He hasn\'t stopped breathing or gone blue at all."',
      },
      {
        label: 'Temperature — no fever above 38°C; temp 37.4°C at home this morning',
        quote: '"I checked his temperature this morning — it was 37.4. It hasn\'t been high."',
      },
      {
        label: 'Gestation at birth — 37+2 weeks (borderline preterm); birth weight 2.8 kg; discharged home day 3',
        quote: '"He was born at 37 weeks and 2 days. He was 2.8 kg. He went home after 3 days — no problems." – "He was a bit small but they said he was fine."',
      },
    ],
    pastMedicalHistory: [
      { label: 'Born at 37+2 weeks; birth weight 2.8 kg; discharged home at day 3 — no NICU or SCBU admission', quote: '"He was fine after birth. No special care. He went home after 3 days."' },
      { label: 'No previous hospital admissions; no previous respiratory illness', quote: '"This is the first time he\'s been this poorly — he\'s been well since birth."' },
    ],
    drugHistory: [
      { label: 'No regular medications; no vitamin D supplementation mentioned', quote: '"Nothing. He\'s not on any medications."' },
      { label: 'No known allergies', quote: '"None that I know of."' },
    ],
    familyHistory: [
      { label: 'No family history of asthma, eczema, or atopy', quote: '"Neither my husband nor I have asthma. No eczema. No allergies."' },
      { label: 'Sister (4) — had a cold last week; no other illness in the family', quote: '"Just our daughter — she had a cold. She seems fine now."' },
    ],
    socialHistory: [
      { label: 'No smokers in the household', quote: '"No — neither of us smokes and there\'s nobody who smokes around him."' },
      { label: 'Lives with mother and father; 4-year-old sister at home', quote: '"It\'s just us — me, my husband, Noah, and our 4-year-old."' },
      { label: 'Breastfeeding — bottle formula 90 mL every 3 hours; no breast milk', quote: '"He\'s formula fed — I couldn\'t establish breastfeeding. He has about 90 mL every 3 hours normally."' },
    ],
    importantNegatives: [
      'No apnoeas or episodes of going blue ("He hasn\'t stopped breathing or gone blue at all.")',
      'No fever above 38°C ("37.4°C at home this morning — nothing higher.")',
      'No previous episodes of wheeze or breathing difficulty ("This is the first time.")',
      'No family history of asthma or atopy ("Neither of us has asthma or allergies.")',
      'No smokers in the household ("Nobody smokes around him.")',
      'No rash, no vomiting, no diarrhoea ("None of those.")',
    ],
    ice: {
      ideas: '"I thought it was just a cold at first but it\'s getting so much worse so fast. I think it must be more than a cold."',
      concerns: '"I\'m terrified. He\'s so small — he\'s only 7 weeks. Is he going to be okay? Is he going to need a breathing machine?"',
      expectations: '"I just want him to be safe. If he needs to stay in I understand — I just want someone to tell me what\'s happening."',
    },
    onlyIfDirectlyAsked: [
      'Immunisations — first round at 8 weeks not yet given (7 weeks old)',
      'Maternal illness during pregnancy — no infections; no GBS; normal pregnancy',
      'Who else cares for Noah — nursery pick-up by sister from nursery; no outside childcare for Noah',
    ],
    behaviourNotes: [
      'Exhausted and frightened but cooperative; holding Noah against her chest throughout',
      'Responds well to clear factual explanations; visibly reassured when told what bronchiolitis is and that it is managed supportively',
      'Asks "Is it RSV? Should he have had a vaccine?" — student should explain RSV is the most common cause; palivizumab is reserved for high-risk groups (premature <29 weeks, haemodynamically significant CHD)',
      'Asks "Will he need a tube down his throat?" — student should explain the treatment ladder: supplemental oxygen, nasogastric feeds, and potentially high-flow nasal cannula oxygen; intubation only in severe respiratory failure',
      'If the student is reassuring and clear, she relaxes slightly: "Okay. I can deal with it if I know what\'s happening."',
    ],
  },
  markScheme: [
    {
      domain: 'Opening the consultation',
      items: [
        { description: 'Introduces themselves; addresses both Mrs Sharma and Noah appropriately', marks: 1 },
        { description: 'Acknowledges Mrs Sharma\'s anxiety and thanks her for bringing Noah in promptly', marks: 1 },
      ],
    },
    {
      domain: 'Presenting complaint',
      items: [
        { description: 'Uses open questioning to allow Mrs Sharma to describe the illness in her own words', marks: 1 },
      ],
    },
    {
      domain: 'History of presenting illness',
      items: [
        { description: 'Establishes onset and progression — coryzal symptoms 2 days, worsening breathing today', marks: 1 },
        { description: 'Asks specifically about nature of breathing difficulty — recession, grunting, rate', marks: 1 },
        { description: 'Asks about feeding volume and compares to normal intake — identifies <50% feeds for 24 hours', marks: 2 },
        { description: 'Asks about wet nappies as a hydration marker — identifies reduced urine output (last nappy 6 hours ago)', marks: 1 },
        { description: 'Specifically asks about apnoeas and cyanotic episodes — correctly identifies none', marks: 1 },
        { description: 'Asks about fever', marks: 1 },
      ],
    },
    {
      domain: 'Risk factors and background',
      items: [
        { description: 'Asks about gestational age at birth — identifies 37+2 weeks (borderline preterm)', marks: 1 },
        { description: 'Asks about family history of atopy or asthma — screens to help differentiate from early wheeze/viral induced wheeze', marks: 1 },
        { description: 'Asks about contact history — identifies sister with recent cold (source of RSV)', marks: 1 },
        { description: 'Asks about household smokers — none; notes relevance as a risk factor for respiratory illness', marks: 1 },
      ],
    },
    {
      domain: 'ICE',
      items: [
        { description: 'Explores Mrs Sharma\'s ideas, concerns, and expectations', marks: 1 },
      ],
    },
    {
      domain: 'Closing the consultation',
      items: [
        { description: 'Summarises the history back to Mrs Sharma; explains the diagnosis of bronchiolitis in plain language', marks: 1 },
        { description: 'Explains management: admission required given SpO2 91%; supplemental oxygen, NG feeds if poor feeding, monitoring; no antibiotics/bronchodilators/steroids', marks: 1 },
        { description: 'Explains supportive management rationale and reassures Mrs Sharma about prognosis', marks: 1 },
      ],
    },
    {
      domain: 'Key communication skills',
      items: [
        { description: 'Active listening — maintains eye contact; normalises anxiety about a sick infant', marks: 1 },
        { description: 'Summarising and signposting throughout', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Noah is a 7-week-old male infant, born at 37+2 weeks, presenting with a 2-day history of coryzal illness progressing to significant respiratory distress with SpO2 91% on air, subcostal and intercostal recession, and grunting',
    'The clinical picture is consistent with bronchiolitis, most likely RSV, in keeping with the seasonal pattern; the source is the 4-year-old sister who had a cold last week',
    'Admission criteria are met on two grounds: SpO2 <92% on air, and feeding reduced to less than 50% of normal intake for over 24 hours (30 mL vs 90 mL per feed)',
    'Additional concern: borderline preterm at 37+2 weeks, placing Noah in a moderate risk group for severe bronchiolitis; last wet nappy 6 hours ago suggesting possible dehydration',
    'No apnoeas, no high fever, no family history of atopy — these would alter the differential or management',
    'Management: supplemental low-flow oxygen to maintain SpO2 >92%; nasopharyngeal suction for thick secretions; nasogastric feeding if taking <75% of feeds; consider high-flow nasal cannula (HFNC) if SpO2 remains <92% on standard oxygen; no bronchodilators, antibiotics, or steroids (all evidence-based avoidances)',
    'Safety net: parents educated on apnoea risk and when to escalate; follow-up if deteriorating',
  ],
  vivaQuestions: [
    {
      question: 'What are the NICE criteria for admission in bronchiolitis, and which features indicate severity?',
      keyPoints: [
        'Admit if any of: SpO2 <92% on air; central cyanosis; apnoeas; moderate to severe respiratory distress (RR >70, marked recession, grunting, nasal flaring)',
        'Feeding less than 50–75% of normal intake and fewer than 4 wet nappies in 24 hours indicate inadequate oral intake and dehydration risk',
        'Age <6 weeks, preterm (<37 weeks), congenital heart or lung disease, neuromuscular disease, and immunodeficiency are high-risk features warranting a lower threshold for admission',
        'Severity scoring: mild (RR <50, SpO2 >95%, no recession, feeding >75% normal); moderate (RR 50–70, SpO2 92–95%, mild recession); severe (RR >70, SpO2 <92%, marked recession, apnoeas)',
        'Deterioration can be rapid — even infants who appear mildly ill on arrival must be monitored closely',
      ],
      source: 'NICE NG9 (Bronchiolitis in children: diagnosis and management, 2015 updated 2023)',
    },
    {
      question: 'What is the evidence base for treatments in bronchiolitis, and which should be avoided?',
      keyPoints: [
        'Supportive care is the mainstay: supplemental oxygen to maintain SpO2 >92%; nasopharyngeal suction for secretions; nasogastric/nasojejunal feeds if feeding <75% normal; IV fluids only if NG not feasible',
        'High-flow nasal cannula (HFNC, e.g. Optiflow): increasingly used for moderate-severe bronchiolitis with SpO2 <92% despite standard oxygen; reduces work of breathing; may reduce PICU admission',
        'Bronchodilators (salbutamol, ipratropium): NOT recommended — multiple RCTs show no benefit; may cause harm (tachycardia, transient worsening)',
        'Antibiotics: NOT indicated routinely — bronchiolitis is viral; reserve for confirmed secondary bacterial infection or sepsis',
        'Corticosteroids (oral or inhaled): NOT recommended — no evidence of benefit in bronchiolitis (evidence base differs from viral-induced wheeze)',
      ],
      source: 'NICE NG9 (2015 updated 2023); Cochrane Review — Bronchodilators for bronchiolitis (2014)',
    },
    {
      question: 'What is palivizumab, who receives it, and what is its mechanism?',
      keyPoints: [
        'Palivizumab (Synagis): monthly IM monoclonal antibody against RSV F protein; given October to March in high-risk infants',
        'Mechanism: neutralises RSV by blocking fusion of the virus with the host respiratory epithelium cell membrane',
        'Indications: infants born <29 weeks gestation in their first RSV season; haemodynamically significant congenital heart disease; chronic lung disease of prematurity requiring supplemental oxygen at 36 weeks corrected gestational age',
        'Not indicated for borderline preterm infants (37+2 weeks) or healthy term infants',
        'Nirsevimab (Beyfortus): long-acting RSV monoclonal antibody — single dose; licensed in UK for all infants in first RSV season from 2024/25 via NHS programme',
      ],
      source: 'NICE TA274 (Palivizumab for RSV in high-risk infants, 2010); JCVI Nirsevimab Programme 2024',
    },
  ],
};

const skeletalSurveyConflictMockExam: MockExamStation = {
  id: 'paeds_skeletal_survey_conflict',
  title: 'Professional Communication — Requesting Skeletal Survey (Conflict with Radiologist)',
  diagnosis: 'Non-accidental injury (NAI) — child safeguarding concern',
  specialtyId: 'paediatrics',
  candidateBrief: {
    setting: 'You are an FY1 in a Paediatric Assessment Unit.',
    scenario:
      'Lily Thompson, 18 months old, has been brought in by her mother with an unexplained bruise on her right cheek. Your registrar has reviewed the case and agrees the bruise is suspicious. You have been asked to request an urgent skeletal survey from the on-call radiologist, Dr Helen Marsh, who has refused the request and is now on the phone.',
    tasks: [
      'Speak with Dr Marsh and persuade her to perform the skeletal survey',
      'Demonstrate appropriate escalation if she continues to refuse',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'Dr Helen Marsh (Consultant Radiologist)',
    age: 48,
    occupation: 'Consultant Radiologist (on-call)',
    openingLine:
      '"Yes? I\'ve already had this referral come through. Look — this is an 18-month-old with a bruise on her cheek. I\'m not going to irradiate a toddler unnecessarily. I really don\'t think this is indicated."',
    historyOfPresentingComplaint: [
      {
        label: 'Initial refusal — dismisses concern as overreaction',
        quote: '"I\'ve seen plenty of children with bruises. They fall over — they bump into things. I\'m not going to blast an 18-month-old with radiation for no reason."',
      },
      {
        label: 'Second challenge — questions the clinical basis for the request',
        quote: '"A bruise on the cheek? Has anyone even asked the mother how it happened? This feels like junior doctors panicking. What specifically makes you think this is NAI?"',
      },
      {
        label: 'Response to TEN-4 explanation — becomes slightly less dismissive',
        quote: '"TEN-4 — yes, I\'m familiar with it. But one bruise doesn\'t mean you call the whole safeguarding team, does it?" [less certain now]',
      },
      {
        label: 'Response to registrar endorsement and escalation statement — yields reluctantly',
        quote: '"Fine. If your registrar has signed off on it and you\'re telling me you\'ll escalate to the safeguarding lead — I\'ll do it. I still think you\'re overreacting, but book it in." [concedes]',
      },
      {
        label: 'Emotional tone throughout — condescending and impatient',
        quote: '"Look, I\'m very busy. I don\'t have time to do unnecessary X-rays tonight." – "Are you an FY1? Have you discussed this with anyone senior?"',
      },
    ],
    pastMedicalHistory: [],
    drugHistory: [],
    familyHistory: [],
    socialHistory: [],
    importantNegatives: [],
    ice: {
      ideas: '"I think this is a junior doctor overreacting to a minor bruise in a clumsy toddler."',
      concerns: '"I\'m concerned about unnecessary radiation exposure and wasting radiology resources out of hours."',
      expectations: '"I expect clear clinical justification before I perform any investigation."',
    },
    onlyIfDirectlyAsked: [
      'Whether she knows the RCPCH or RCR skeletal survey guidelines — she does, but will not volunteer this',
      'Whether she is willing to speak to the registrar directly — grudgingly yes, if the student offers to arrange this',
    ],
    behaviourNotes: [
      'Dr Marsh is dismissive and condescending — a busy consultant who believes an FY1 is overreacting; she is not overtly hostile',
      'She yields ONLY if the student: (1) explains the TEN-4 rule specifically (bruise on face/ear/neck in a child <4 years, or any bruise in a non-mobile child), (2) states the registrar has endorsed the request, and (3) clearly but calmly states intention to escalate to the safeguarding lead if she refuses',
      'If the student becomes flustered, apologetic, or backs down: she becomes more dismissive — "Right, so you\'re not sure yourself. I\'m not doing it."',
      'If the student is aggressive or rude: she ends the call — "I\'m ending this conversation."',
      'She will ask: "What exactly are the concerning features?" — student must answer specifically',
      'She will ask: "Have you spoken to your registrar?" — if yes, she becomes more cooperative',
      'If the student offers to escalate to the paediatric safeguarding lead or consultant, she concedes immediately',
      'The student should remain calm, professional, and assertive throughout — not raise their voice or apologise for the clinical request',
    ],
  },
  markScheme: [
    {
      domain: 'Opening the communication',
      items: [
        { description: 'Introduces themselves clearly with name and grade; confirms they are speaking with the correct person', marks: 1 },
        { description: 'States the purpose of the call clearly and concisely without excessive apologising', marks: 1 },
      ],
    },
    {
      domain: 'Clinical justification for the skeletal survey',
      items: [
        { description: 'Explains the clinical concern: unexplained bruise on the cheek of an 18-month-old pre-mobile child', marks: 1 },
        {
          description: 'Cites the TEN-4 rule or equivalent: bruising on Torso, Ears, or Neck in a child under 4 years, or any bruise in a child under 4 months, is high-risk for NAI',
          marks: 2,
        },
        { description: 'States that a skeletal survey is indicated per RCPCH/RCR safeguarding guidelines when NAI is suspected in a child under 2', marks: 1 },
        { description: 'Confirms the registrar has reviewed the patient and endorses the request', marks: 1 },
      ],
    },
    {
      domain: 'Maintaining professionalism under pressure',
      items: [
        { description: 'Remains calm and does not raise voice or become rude when Dr Marsh is dismissive', marks: 1 },
        { description: 'Does not immediately capitulate to pressure — re-states the clinical concern assertively after pushback', marks: 2 },
        { description: 'Acknowledges Dr Marsh\'s radiation concern but clearly explains child safety takes precedence', marks: 1 },
      ],
    },
    {
      domain: 'Escalation',
      items: [
        {
          description: 'States clearly that if Dr Marsh refuses, they will escalate to the paediatric consultant or named safeguarding lead',
          marks: 2,
        },
        { description: 'Offers to have the registrar speak to Dr Marsh directly if needed', marks: 1 },
      ],
    },
    {
      domain: 'Safeguarding knowledge',
      items: [
        { description: 'Demonstrates understanding that this is a child protection concern requiring multi-agency involvement', marks: 1 },
        { description: 'States that the conversation and any refusal must be documented contemporaneously in the notes', marks: 1 },
      ],
    },
    {
      domain: 'Closing the communication',
      items: [
        { description: 'Confirms the agreed plan (skeletal survey to proceed) and thanks Dr Marsh', marks: 1 },
        { description: 'States the child will remain in a place of safety while awaiting imaging and the safeguarding team will be notified', marks: 1 },
      ],
    },
    {
      domain: 'Key communication skills',
      items: [
        { description: 'Active listening — allows Dr Marsh to express concern before responding; does not interrupt', marks: 1 },
        { description: 'Uses a structured approach (e.g. SBAR) throughout; assertive and respectful at all times', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Lily Thompson is an 18-month-old pre-mobile child presenting with an unexplained bruise on the right cheek — a high-risk location under the TEN-4 rule (Torso, Ears, Neck in under-4s)',
    'The explanation offered ("she must have bumped herself") is non-specific and inconsistent with the developmental stage of a pre-mobile infant',
    'An urgent skeletal survey is indicated per RCPCH Child Protection Guidelines and RCR standards to identify occult fractures at different stages of healing',
    'When the radiologist refused, the correct approach was: explain the clinical basis (TEN-4), confirm senior endorsement, and state the intention to escalate to the safeguarding lead if the refusal continued',
    'Remaining calm and professional under pressure while not capitulating is the core communication skill being assessed',
    'Next steps: skeletal survey; inform named safeguarding nurse and consultant; document all conversations; Section 47 enquiry if NAI confirmed; child to remain in a place of safety pending investigation',
  ],
  vivaQuestions: [
    {
      question: 'What features of a bruise in a child should raise concern for non-accidental injury?',
      keyPoints: [
        'TEN-4 rule: any bruise on the Torso, Ears, or Neck in a child under 4 years is high-risk for NAI',
        'Any bruise in a child who is not yet independently mobile (not crawling or walking) is suspicious regardless of location',
        'Multiple bruises in different stages of healing; bruises forming unusual patterns (hand-shaped, implement marks, ligature marks)',
        'Inconsistent, changing, or absent history; explanation incompatible with developmental stage; delayed presentation to medical care',
        'Associated injuries raising concern: retinal haemorrhages (abusive head trauma), posterior rib fractures, metaphyseal corner fractures',
        'Bruises over soft tissue (cheeks, abdomen, buttocks, back) are more concerning than bruises over bony prominences (shins, forehead) in mobile children',
      ],
      source: 'RCPCH Child Protection Guidelines (2014); Maguire S et al., Arch Dis Child 2005',
    },
    {
      question: 'What is the TEN-4 rule and what other injury patterns raise concern for non-accidental injury?',
      keyPoints: [
        'TEN-4: bruising on Torso, Ears, or Neck in children under 4, or any bruise in children under 4 months — validated clinical decision rule for NAI',
        'Fractures: posterior rib fractures (highly specific for squeeze injury), metaphyseal "bucket handle" fractures, multiple fractures in different stages of healing on skeletal survey',
        'Head injuries: subdural haematoma with retinal haemorrhages = abusive head trauma until proven otherwise',
        'Burns: immersion burns with clear tide-mark, cigarette burns (circular, uniform depth), burns inconsistent with stated history',
        'Other injuries: torn labial frenulum in non-mobile infants, bite marks, petechiae on conjunctivae or facial skin',
        'Skeletal survey indications: all children under 2 years with suspected NAI; children 2–5 years selectively; over 5 years guided by clinical judgment',
      ],
      source: 'Royal College of Radiologists: Standards for Skeletal Survey in Child Protection (2017); NICE NG76 (2017)',
    },
    {
      question: 'What is the safeguarding process when non-accidental injury is suspected?',
      keyPoints: [
        'Immediate: ensure the child is safe — admit if necessary; do not discharge while the safeguarding investigation is ongoing',
        'Section 47 (Children Act 1989): local authority duty to investigate when there are reasonable grounds to believe a child is suffering or at risk of significant harm',
        'Section 17: assessment of children "in need" — lower threshold than Section 47; no automatic police involvement',
        'Involve named safeguarding nurse and consult the named or designated doctor for child protection immediately',
        'Multi-agency strategy meeting (social care, police, paediatrics, health visitor): within 1 working day for urgent cases',
        'Documentation: contemporaneous, factual, signed and dated; record exact words used by carers; use "findings consistent with..." rather than diagnosing NAI; document all conversations including refusals',
      ],
      source: 'NICE NG76 (Child abuse and neglect, 2017); Children Act 1989; RCPCH Child Protection Guidelines (2014)',
    },
  ],
};

const paedsAsthmaMockExam: MockExamStation = {
  id: 'paeds_asthma',
  title: 'Paediatric Consultation — Asthma History and Management with Parent',
  diagnosis: 'Childhood asthma',
  specialtyId: 'paediatrics',
  candidateBrief: {
    setting: 'You are an FY1 in a paediatric outpatients clinic.',
    scenario:
      'Mrs Davies (Rachel, 38) has brought her 8-year-old son Toby to his first review appointment. Toby was diagnosed with asthma by the GP three weeks ago and started on inhalers. Mrs Davies has several questions about the diagnosis and treatment.',
    tasks: [
      'Take a focused history from Mrs Davies about Toby\'s symptoms and triggers',
      'Explain the diagnosis of asthma and answer her questions about the inhalers and management',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'Rachel Davies',
    age: 38,
    occupation: 'Part-time receptionist (Toby\'s mother)',
    openingLine:
      '"Thank you for seeing us. The GP told us Toby has asthma and gave him two inhalers, but I\'m honestly a bit confused about the whole thing. He\'s been getting symptoms for about 6 months now and it all came to a head two months ago when he ended up in A&E."',
    historyOfPresentingComplaint: [
      {
        label: 'Duration of symptoms — 6 months; started with chesty colds that never fully cleared',
        quote: '"It started about 6 months ago. He kept getting these chesty colds — but they just never seemed to clear up properly like they used to."',
      },
      {
        label: 'Wheeze — episodic; worse at night; wakes 1–2 times per week; stops running after 5 minutes at school',
        quote: '"He wheezes — it\'s quite loud sometimes. He wakes up wheezing 1 or 2 nights a week." – "He loves football but he\'s had to stop — he can barely run for 5 minutes before he\'s gasping."',
      },
      {
        label: 'Cough — nocturnal dry cough; triggered by exercise and cold air',
        quote: '"He coughs a lot at night — a dry cough. It wakes him up sometimes. And if he runs in cold air it sets him off."',
      },
      {
        label: 'Triggers — exercise, cold air, grass pollen; guinea pig at home',
        quote: '"Definitely exercise and cold air. And in spring when the pollen was high it was much worse." – "He has a guinea pig — do you think that could be a problem?"',
      },
      {
        label: 'Reliever response — salbutamol works well within 10 minutes (confirms reversibility)',
        quote: '"The blue inhaler works really well — within about 10 minutes he\'s much better. It\'s like magic, actually." – "But I feel like he needs it too often."',
      },
      {
        label: 'A&E attendance — 2 months ago; nebulisers and oral prednisolone given; full recovery',
        quote: '"Two months ago he had a really bad attack — I called 999. He was blue-lighted to A&E. They gave him nebulisers and a course of steroid tablets. He was there for 6 hours." [visibly shaken recounting this]',
      },
      {
        label: 'Atopy — mild eczema (well-controlled with emollients); no food allergies',
        quote: '"He has a bit of eczema — it\'s pretty mild, we just use cream on it. No food allergies."',
      },
      {
        label: 'Current medication — salbutamol MDI + spacer PRN; beclometasone 100 mcg BD + spacer; GP prescribed 3 weeks ago',
        quote: '"He\'s got the blue one — salbutamol — and a brown one, beclometasone. The GP said the brown one is twice a day every day, even when he\'s well. That seems like a lot."',
      },
    ],
    pastMedicalHistory: [
      { label: 'Mild eczema since age 2 — managed with emollients', quote: '"He\'s had eczema since he was about 2. We just use Diprobase on it — pretty mild."' },
      { label: 'No other significant past medical history; no prior hospital admissions before the A&E 2 months ago', quote: '"Nothing else significant."' },
    ],
    drugHistory: [
      { label: 'Salbutamol 100 mcg MDI + spacer PRN (reliever)', quote: '"The blue inhaler — salbutamol. He uses it when he needs it."' },
      { label: 'Beclometasone 100 mcg MDI + spacer BD (preventer)', quote: '"The brown inhaler — beclometasone. Twice a day, every day."' },
      { label: 'Emollients for eczema; no known drug allergies', quote: '"Just the skin cream. No allergies."' },
    ],
    familyHistory: [
      { label: 'Mother (Rachel) — hayfever and mild allergic rhinitis', quote: '"I have hayfever — quite badly in summer."' },
      { label: 'Maternal uncle — asthma as a child; resolved by his teens', quote: '"My brother had asthma as a kid. He grew out of it by his teens."' },
      { label: 'Father — no respiratory problems', quote: '"His dad is fine — no chest problems."' },
    ],
    socialHistory: [
      { label: 'Toby (8) — Year 4; previously sporty; now unable to keep up at school football', quote: '"He\'s 8, Year 4. He used to be really into football — but he\'s been left out of the school team because he can\'t keep up."' },
      { label: 'Home — terraced house; no mould or damp; guinea pig in living room; no smokers at home', quote: '"We live in a terraced house — no damp or mould. His guinea pig lives in the lounge. Nobody smokes at home."' },
      { label: 'Sleep — waking 1–2 nights per week from wheeze or cough; affecting the whole family', quote: '"He wakes up 1 or 2 nights a week — which means we all lose sleep."' },
    ],
    importantNegatives: [
      'No wheeze at rest currently ("He\'s fine at rest right now — it\'s mainly effort or at night.")',
      'No foreign body inhalation history ("Nothing like that, no.")',
      'No inspiratory stridor or features of vocal cord dysfunction ("No — it\'s always on breathing out.")',
      'No failure to thrive or unexplained weight loss ("His weight has been fine — growing normally.")',
      'No cyanosis at rest or cardiac symptoms ("None of that.")',
    ],
    ice: {
      ideas: '"I think the asthma diagnosis makes sense — especially given my brother had it and I have hayfever. I just want to understand it properly."',
      concerns: '"I\'m scared about another A&E admission. That was terrifying — watching him struggle to breathe." – "And I\'m worried about giving him steroids every day — will it stunt his growth?"',
      expectations: '"I want to understand what the two inhalers are actually for. And I want to know what to do if he has a bad attack again."',
    },
    onlyIfDirectlyAsked: [
      'Guinea pig — Mrs Davies is attached to the guinea pig and will ask: "Do we really have to get rid of Nibbles?"',
      'Peak flow monitoring — not been given a peak flow meter by the GP; willing to use one',
      'Whether the preventer can be stopped when symptoms are better — "Can we reduce it in summer?"',
      'Spacer technique — unsure if Toby is using it correctly; student should offer referral to asthma nurse',
    ],
    behaviourNotes: [
      'Warm and engaged; clearly intelligent and motivated to understand; has genuine concerns, not resistance to medicine',
      'Becomes noticeably upset when recounting the A&E visit — student should pause and acknowledge this before continuing',
      'Asks "Is the steroid inhaler safe every day?" — student should explain inhaled steroids at this dose have minimal systemic absorption; risk of undertreated asthma far outweighs theoretical growth effect',
      'Asks "Will he grow out of it?" — balanced answer needed: about 50% of children improve significantly around puberty, but asthma can persist',
      'Asks "Does the guinea pig have to go?" — student should explain animal dander is a known trigger; ideally rehome, but if not possible keep out of bedroom and wash hands after contact',
      'Asks "When do I call an ambulance?" — student must give a clear safety net: unable to speak in full sentences, blue lips, not responding to 10 puffs salbutamol every 4 minutes = call 999',
      'If the student uses a clear analogy for the two inhalers (e.g. fire prevention vs fire extinguisher), Mrs Davies responds: "Oh! That makes much more sense now."',
    ],
  },
  markScheme: [
    {
      domain: 'Opening the consultation',
      items: [
        { description: 'Introduces themselves; greets both Mrs Davies and Toby appropriately', marks: 1 },
        { description: 'Explains the purpose of the review and invites Mrs Davies to share her concerns with an open question', marks: 1 },
      ],
    },
    {
      domain: 'History of presenting complaint',
      items: [
        { description: 'Establishes frequency and timing of wheeze — nocturnal; exercise-induced; wakes 1–2 nights per week', marks: 1 },
        { description: 'Identifies triggers — exercise, cold air, grass pollen, and pet (guinea pig)', marks: 1 },
        { description: 'Confirms complete response to salbutamol within 10 minutes — supports reversible bronchoconstriction', marks: 1 },
        { description: 'Asks about previous severe episodes — identifies A&E admission 2 months ago requiring nebulisers and oral prednisolone', marks: 1 },
      ],
    },
    {
      domain: 'Past medical, drug, and family history',
      items: [
        { description: 'Asks about personal atopy — identifies eczema; asks about food allergies', marks: 1 },
        { description: 'Takes a drug history confirming current inhalers and checks for drug allergies', marks: 1 },
        { description: 'Asks about family history of asthma, atopy, or allergic rhinitis', marks: 1 },
      ],
    },
    {
      domain: 'Social history and impact',
      items: [
        { description: 'Asks about home environment — pets, passive smoking, damp or mould', marks: 1 },
        { description: 'Asks about impact on school attendance, sports participation, and sleep', marks: 1 },
      ],
    },
    {
      domain: 'Explaining the diagnosis and inhalers',
      items: [
        { description: 'Explains asthma in accessible terms using a clear analogy — chronic airway inflammation causing intermittent bronchoconstriction', marks: 1 },
        { description: 'Clearly distinguishes the two inhalers: preventer (ICS reduces airway inflammation daily) versus reliever (SABA treats acute bronchospasm)', marks: 2 },
        { description: 'Explains ICS must be taken every day even when well; addresses growth concern — minimal systemic effect at this dose', marks: 1 },
      ],
    },
    {
      domain: 'Safety netting',
      items: [
        {
          description: 'Gives clear 999 criteria for a severe attack: unable to complete sentences, cyanosis, or no response to 10 puffs salbutamol via spacer',
          marks: 2,
        },
        { description: 'Advises on trigger avoidance — specifically addresses the guinea pig', marks: 1 },
      ],
    },
    {
      domain: 'Addressing ICE',
      items: [
        { description: 'Explores and addresses fear of another A&E admission — explains good control with preventer prevents attacks', marks: 1 },
        { description: 'Addresses question about prognosis (growing out of asthma) with a balanced, honest answer', marks: 1 },
      ],
    },
    {
      domain: 'Closing the consultation',
      items: [
        { description: 'Summarises the management plan and checks Mrs Davies has no further questions', marks: 1 },
        { description: 'Arranges follow-up and refers to asthma nurse for spacer technique and written asthma action plan', marks: 1 },
      ],
    },
    {
      domain: 'Key communication skills',
      items: [
        { description: 'Active listening — acknowledges the emotional impact of the A&E admission before continuing', marks: 1 },
        { description: 'Summarising and signposting throughout the consultation', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Toby is an 8-year-old boy with a 6-month history of episodic wheeze, nocturnal cough, and exercise intolerance consistent with childhood asthma',
    'Key diagnostic features: nocturnal symptoms waking 1–2 times per week, exercise-induced wheeze, cold air and allergen triggers, complete and rapid response to salbutamol, personal and family atopy (eczema, maternal hayfever, uncle with asthma)',
    'A severe acute attack 2 months ago required nebulised salbutamol and oral prednisolone — he is currently on BTS/SIGN Step 2 (low-dose ICS + SABA reliever)',
    'Modifiable triggers identified: exercise, cold air, grass pollen, and guinea pig dander in the home — allergen avoidance advice provided',
    'Key counselling: ICS preventer must be taken daily even when asymptomatic; reliever is for acute use only; spacer technique training and written asthma action plan required',
    'Safety netting: 999 criteria clearly given (unable to speak in sentences, cyanosis, no response to 10 puffs salbutamol via spacer)',
    'Plan: continue Step 2 therapy; review in 4–6 weeks; escalate to Step 3 if inadequately controlled; refer to asthma nurse; provide peak flow meter',
  ],
  vivaQuestions: [
    {
      question: 'What is the BTS/SIGN stepwise management of childhood asthma?',
      keyPoints: [
        'Step 1: SABA reliever alone (salbutamol MDI + spacer PRN) for mild intermittent symptoms',
        'Step 2: Add low-dose ICS preventer (beclometasone 100–200 mcg/day equivalent) — first-line controller for persistent symptoms',
        'Step 3 (>5 years): add LABA (salmeterol) if inadequately controlled on low-dose ICS; in under-5s use LTRA (montelukast) instead of LABA',
        'Step 4: increase ICS to medium dose or add LTRA or theophylline; consider specialist referral',
        'Step 5: high-dose ICS, oral corticosteroids, omalizumab (anti-IgE) for severe allergic asthma — specialist management only',
        'Review at every step: check adherence, inhaler technique, and trigger avoidance before escalating treatment',
      ],
      source: 'BTS/SIGN British Guideline on Asthma (2022 update)',
    },
    {
      question: 'What features define a severe and life-threatening asthma attack in a child?',
      keyPoints: [
        'Severe: SpO2 <92%, too breathless to complete sentences, RR >30 bpm (>5 years) or >50 bpm (<5 years), HR >125 bpm (>5 years), use of accessory muscles',
        'Life-threatening: SpO2 <92% despite supplemental oxygen, silent chest, cyanosis, exhaustion, poor respiratory effort, altered consciousness, PEF <33% predicted',
        'Immediate management: 10 puffs salbutamol via spacer (1 puff every 30–60 seconds); O2 to maintain SpO2 94–98%; oral prednisolone 1–2 mg/kg (max 40 mg)',
        'No response to initial treatment: IV magnesium sulphate (single dose 40 mg/kg, max 2 g over 20 minutes); consider IV salbutamol; PICU referral if deteriorating',
        'Discharge criteria: PEF >75% predicted, SpO2 >94% on air, stable for ≥4 hours, able to use inhaler correctly, written personalised action plan given',
      ],
      source: 'BTS/SIGN British Guideline on Asthma (2022 update); NICE NG80 (2017)',
    },
    {
      question: 'What is the role of inhaled corticosteroids in asthma and what are the potential side effects?',
      keyPoints: [
        'ICS reduce airway eosinophilic inflammation, mucous secretion, and bronchial hyperresponsiveness — prevent exacerbations rather than providing immediate symptom relief',
        'Must be taken daily even when asymptomatic; stopping ICS when well is the most common cause of loss of asthma control',
        'Local side effects: oropharyngeal candidiasis, dysphonia — minimised by rinsing mouth after each dose and using a spacer device',
        'Systemic effects at low-to-medium doses are minimal due to first-pass hepatic metabolism; high doses (>400 mcg beclometasone equivalent/day in children) may reduce growth velocity by approximately 1 cm/year',
        'NICE NG80: monitor growth annually in children on ICS; use the lowest effective dose and review regularly',
        'Risk-benefit at standard doses: undertreated asthma with hypoxic attacks, frequent oral prednisolone courses, and hospitalisations carries greater risk than low-dose ICS',
      ],
      source: 'NICE NG80 (Asthma: diagnosis, monitoring and chronic asthma management, 2017); BTS/SIGN (2022)',
    },
  ],
};

const antivaxMeningitisMockExam: MockExamStation = {
  id: 'paeds_antivax_meningitis',
  title: 'Paediatric Communication — Antivax Parent Refusing Treatment for Child with Meningitis',
  diagnosis: 'Bacterial meningitis (Neisseria meningitidis) — antibiotic treatment required',
  specialtyId: 'paediatrics',
  candidateBrief: {
    setting: 'You are an FY1 on the paediatric ward.',
    scenario:
      'Charlie Booth, aged 4, has just been admitted with bacterial meningitis. CSF results confirm the diagnosis: turbid CSF, neutrophilic pleocytosis, low glucose, raised protein. IV benzylpenicillin is urgently required. His mother, Mrs Sandra Booth, is present and is refusing antibiotic treatment.',
    tasks: [
      'Explain the diagnosis and the urgent need for antibiotic treatment to Mrs Booth',
      'Address her concerns sensitively and obtain her agreement to proceed with treatment',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'Sandra Booth',
    age: 34,
    occupation: 'Stay-at-home mother',
    openingLine:
      '"I know you think he needs antibiotics but I\'m not agreeing to that. He\'s never had antibiotics in his life and his immune system is strong. I don\'t trust Big Pharma. His body can fight this naturally."',
    historyOfPresentingComplaint: [
      {
        label: 'Refusal basis 1 — distrust of pharmaceuticals and belief in natural immunity',
        quote: '"I believe in natural immunity. His body knows how to fight infection — he\'s never been ill before. I don\'t want him pumped full of chemicals." – "I don\'t trust the pharmaceutical industry."',
      },
      {
        label: 'Refusal basis 2 — concern about gut damage and autism claim',
        quote: '"I\'ve read that antibiotics destroy the gut microbiome. And I\'ve read that there\'s a link with autism. I\'m not taking that risk."',
      },
      {
        label: 'Refusal basis 3 — anti-vaccination stance; Charlie is unvaccinated',
        quote: '"Charlie hasn\'t had any vaccines. We don\'t do vaccines in this family. And he\'s been perfectly healthy." – "This has nothing to do with vaccines."',
      },
      {
        label: 'Question about what meningitis is',
        quote: '"What exactly is meningitis? You\'re all acting like it\'s a death sentence. Children get infections all the time."',
      },
      {
        label: 'Response after honest explanation of consequences — begins to waver',
        quote: '"So if I don\'t agree to the antibiotics... he could die? Or lose his limbs?" [shocked pause] "I didn\'t realise it was that serious." [voice breaks]',
      },
      {
        label: 'Softening — if student shows empathy and addresses each concern specifically',
        quote: '"I just... I love him more than anything. I just don\'t want to do the wrong thing for him." [tearful] – "If you\'re absolutely certain this will help him... tell me more."',
      },
    ],
    pastMedicalHistory: [
      { label: 'Charlie — no vaccinations; no prior illnesses; no previous antibiotic use', quote: '"He\'s never been ill before. No vaccines, no antibiotics, completely healthy until now."' },
    ],
    drugHistory: [
      { label: 'No medications; no known allergies', quote: '"No medications. No allergies as far as I know."' },
    ],
    familyHistory: [
      { label: 'No relevant family history', quote: '"Nothing I can think of."' },
    ],
    socialHistory: [
      { label: 'Single mother; no partner present; older daughter (7) at school', quote: '"It\'s just me. His sister is at school. I haven\'t been able to reach his dad."' },
    ],
    importantNegatives: [],
    ice: {
      ideas: '"I think his immune system can handle this if we give it time. The doctors are overreacting."',
      concerns: '"I\'m scared antibiotics will damage his gut or cause autism. And I don\'t trust the pharmaceutical industry\'s motives."',
      expectations: '"I want you to respect my right to make decisions for my son."',
    },
    onlyIfDirectlyAsked: [
      'Whether she has discussed this with anyone — yes, she is in an online anti-vax group that has reinforced her beliefs',
      'Whether she would like to speak to a senior doctor — she may agree if offered respectfully',
      'Whether she understands Charlie could die without treatment — this is the pivotal moment; say it clearly but compassionately',
    ],
    behaviourNotes: [
      'Sandra is not malicious — she genuinely believes she is protecting her son; treat her as a concerned mother, not an obstacle',
      'She responds poorly to being lectured, dismissed, or spoken over — this entrenches her position',
      'She responds well to empathy first: "I can see how much you love Charlie and how frightening this is" before addressing clinical facts',
      'The pivotal shift occurs when the student clearly and compassionately explains the specific consequences of untreated bacterial meningitis: death within hours, permanent deafness, limb amputations from meningococcal septicaemia',
      'She softens when the student: (a) validates her love for Charlie, (b) clearly refutes the autism/antibiotics claim with evidence, (c) explains the consequences of non-treatment with honesty and compassion',
      'She will ask: "Are you absolutely certain this is the right thing?" — student must answer clearly and confidently: yes',
      'She will ask: "What if I still say no?" — student should explain that if she refuses life-saving treatment the team has a legal duty to seek an emergency court order to treat in Charlie\'s best interests; frame this as a last resort, not a threat',
      'She gives consent once she genuinely understands the severity — the student must have persuaded her, not coerced her',
    ],
  },
  markScheme: [
    {
      domain: 'Opening the consultation',
      items: [
        { description: 'Introduces themselves; acknowledges Mrs Booth\'s distress and confirms Charlie\'s identity', marks: 1 },
        { description: 'Adopts an empathic, non-judgemental tone from the outset — validates her as a concerned mother', marks: 1 },
      ],
    },
    {
      domain: 'Explaining the diagnosis',
      items: [
        { description: 'Explains bacterial meningitis clearly in accessible terms: infection of the membranes surrounding the brain and spinal cord caused by bacteria', marks: 1 },
        { description: 'Explains the CSF findings in simple language confirming a bacterial infection — the diagnosis is not a suspicion but a certainty', marks: 1 },
        {
          description: 'Explains the specific consequences of untreated bacterial meningitis: death within hours, permanent sensorineural deafness, limb amputations from meningococcal septicaemia',
          marks: 2,
        },
      ],
    },
    {
      domain: 'Addressing specific concerns',
      items: [
        {
          description: 'Addresses the "natural immunity" claim: explains that Neisseria meningitidis is a bacterium that proliferates rapidly in the bloodstream and CSF — the immune system alone cannot clear it in time',
          marks: 2,
        },
        {
          description: 'Addresses the autism claim clearly: states there is no credible scientific evidence linking antibiotics to autism; the original study linking vaccines to autism was fraudulent and retracted',
          marks: 1,
        },
        { description: 'Acknowledges antibiotics can transiently affect the gut microbiome but explains this is minor and reversible compared to the mortality risk of untreated meningitis', marks: 1 },
      ],
    },
    {
      domain: 'Maintaining therapeutic alliance',
      items: [
        { description: 'Allows Mrs Booth to express her concerns without interruption; demonstrates genuine active listening', marks: 1 },
        { description: 'Does not dismiss or ridicule her beliefs — takes each concern seriously and responds specifically', marks: 1 },
      ],
    },
    {
      domain: 'Escalation pathway',
      items: [
        {
          description: 'States clearly but compassionately that if Mrs Booth continues to refuse, the clinical team has a legal duty to seek an emergency court order to treat Charlie in his best interests under the Children Act 1989',
          marks: 2,
        },
        { description: 'Offers to arrange for a senior colleague (registrar or consultant) to speak with Mrs Booth if she wishes', marks: 1 },
      ],
    },
    {
      domain: 'Obtaining agreement',
      items: [
        { description: 'Confirms Mrs Booth has understood the information and obtains her genuine agreement to proceed with IV benzylpenicillin', marks: 1 },
        { description: 'Answers her final question ("Are you absolutely certain?") confidently and honestly', marks: 1 },
      ],
    },
    {
      domain: 'Closing the consultation',
      items: [
        { description: 'Explains the immediate next steps: IV access, benzylpenicillin, dexamethasone, and close monitoring', marks: 1 },
        { description: 'Thanks Mrs Booth for listening and acknowledges how difficult the conversation was for her', marks: 1 },
      ],
    },
    {
      domain: 'Key communication skills',
      items: [
        { description: 'Active listening — demonstrates genuine engagement with Mrs Booth\'s concerns rather than dismissing them', marks: 1 },
        { description: 'Structures the consultation: empathy → explanation → address concerns → resolve; uses signposting', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Charlie Booth is a 4-year-old unvaccinated boy with confirmed bacterial meningitis on CSF analysis: turbid CSF, neutrophilic pleocytosis, low glucose, and raised protein — consistent with Neisseria meningitidis',
    'His mother initially refused IV antibiotics on the grounds of pharmaceutical distrust, belief in natural immunity, and concerns about gut damage and autism',
    'Communication approach: empathy first, then clear non-jargon explanation of the diagnosis and consequences; each concern addressed specifically without dismissing or lecturing',
    'Rebuttal of natural immunity claim: bacterial meningitis is rapidly fatal without antibiotics — the immune system cannot clear Neisseria meningitidis from the CSF alone in time',
    'Rebuttal of autism claim: no credible evidence links antibiotics to autism; microbiome effects are real but transient and clinically insignificant compared to the mortality risk',
    'Legal position if refusal maintained: the Mental Capacity Act 2005 does not apply to children under 16; parents cannot lawfully refuse life-saving treatment for a child — an emergency High Court order under the Children Act 1989 can be sought, or treatment can proceed under common law if death is imminent',
    'Treatment plan: IV benzylpenicillin 300 mg/kg/day in 6 divided doses; IV dexamethasone 0.15 mg/kg QDS for 4 days to reduce deafness risk; prophylactic ciprofloxacin or rifampicin for close contacts; notify PHE within 24 hours',
  ],
  vivaQuestions: [
    {
      question: 'What are the signs and symptoms of bacterial meningitis in a child?',
      keyPoints: [
        'Classic triad: headache, photophobia, neck stiffness (Kernig\'s and Brudzinski\'s signs) — often absent in young children and infants',
        'In infants: bulging fontanelle, high-pitched cry, irritability, poor feeding, opisthotonus, fever or hypothermia in septic shock',
        'Non-blanching petechial or purpuric rash: pathognomonic of meningococcal disease — present in ~50% of cases; glass (tumbler) test confirms non-blanching',
        'Signs of raised intracranial pressure: decreasing GCS, Cushing\'s triad (hypertension, bradycardia, irregular respirations) — LP is contraindicated if present',
        'Meningococcal septicaemia without meningitis: rapid haemodynamic collapse, purpuric rash, cold peripheries, prolonged capillary refill time',
      ],
      source: 'NICE CG102 (Bacterial meningitis and meningococcal septicaemia in children, 2010, updated 2015)',
    },
    {
      question: 'What is the antibiotic management of bacterial meningitis and what prophylaxis is given to close contacts?',
      keyPoints: [
        'Pre-hospital: IM benzylpenicillin immediately if meningococcal disease suspected and no penicillin allergy — do not delay transfer',
        'Hospital empirical treatment: IV cefotaxime or ceftriaxone (third-generation cephalosporin) covering N. meningitidis, S. pneumoniae, H. influenzae; add IV amoxicillin if Listeria suspected (age <3 months, immunocompromised)',
        'IV dexamethasone 0.15 mg/kg QDS for 4 days: started before or with the first antibiotic dose — reduces sensorineural deafness in pneumococcal meningitis',
        'Close contact prophylaxis (household contacts within 7 days): single-dose oral ciprofloxacin for adults; rifampicin BD for 2 days for children and pregnant women; IM ceftriaxone for pregnant women',
        'PHE notification within 24 hours; offer meningococcal vaccine to unvaccinated household contacts aged ≥1 year',
      ],
      source: 'NICE CG102 (2010, updated 2015); BNF — benzylpenicillin and ceftriaxone dosing',
    },
    {
      question: 'What legal framework allows treatment of a child against parental wishes?',
      keyPoints: [
        'The Mental Capacity Act 2005 does not apply to children under 16 — it governs adults and young people aged 16–17 who lack capacity',
        'For children: the court has inherent jurisdiction to override parental refusal of life-saving treatment in the child\'s best interests (Children Act 1989, section 1)',
        'Emergency High Court order: can be obtained within hours for urgent life-saving situations via the out-of-hours Family Division judge',
        'Common law necessity: in a true emergency where death or serious harm would occur if treatment were delayed, a doctor may treat without consent under the principle of necessity',
        'Gillick competence: a Gillick-competent minor under 16 may consent to treatment even if a parent refuses, but courts have consistently held that a competent minor cannot refuse life-saving treatment',
        'Practical approach: escalate immediately to consultant; contact hospital legal team; document all decision-making; do not delay treatment if the child is deteriorating',
      ],
      source: 'Children Act 1989; Re R (a minor) [1991] 4 All ER 177; RCPCH guidance on parental refusal of treatment',
    },
  ],
};

const otitisMediaMockExam: MockExamStation = {
  id: 'paeds_otitis_media_parent',
  title: 'Paediatric Consultation — Acute Otitis Media: Explanation and Management',
  diagnosis: 'Acute otitis media — watchful waiting approach in a 3-year-old',
  specialtyId: 'paediatrics',
  candidateBrief: {
    setting: 'You are an FY1 in the paediatric assessment unit.',
    scenario:
      'Jane Morris, 34, has brought her 3-year-old son Oliver to the assessment unit with a 2-day history of right ear pain and fever. A photograph of the right tympanic membrane taken by the ANP is displayed on the desk — it shows a red, bulging tympanic membrane with loss of the light reflex. Please review the image and then speak with Mrs Morris about the diagnosis and management.',
    tasks: [
      'Describe the otoscopy image findings to the examiner',
      'Explain the diagnosis and management to Mrs Morris',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'Jane Morris',
    age: 34,
    occupation: 'NHS administrator (Oliver\'s mother)',
    openingLine:
      '"He\'s been tugging at his ear and screaming with pain since yesterday. He had a fever of 39 degrees last night. He\'s been inconsolable." [tired, worried, holding Oliver who is irritable]',
    historyOfPresentingComplaint: [
      {
        label: 'Ear pain — right ear; tugging and holding ear for 2 days; inconsolable periods of crying',
        quote: '"He keeps pulling at his right ear and screaming. He\'s not been himself at all." – "He won\'t let us near his ear."',
      },
      {
        label: 'Fever — 39°C at home last night; currently 38.6°C on admission; no rigors; alert though irritable',
        quote: '"His temperature was 39 at home. He feels hot now too." – "He\'s grumpy but he\'s awake and knows what\'s going on."',
      },
      {
        label: 'Preceding URTI — runny nose and mild cough for 5 days before the ear pain started',
        quote: '"He had a cold for about 5 days before the ear thing started. Runny nose, bit of a cough."',
      },
      {
        label: 'Feeding — reduced but still drinking; not vomiting; nappies normal',
        quote: '"He\'s not eating much but he\'s drinking. No vomiting. Nappies are normal." [no dehydration signs]',
      },
      {
        label: 'No hearing concerns currently; no discharge from ear; this is the first episode',
        quote: '"There\'s no gunk coming out of his ear." – "He\'s never had this before." – "His hearing seemed fine before this week."',
      },
      {
        label: 'Paracetamol and ibuprofen — alternating at home; providing partial relief',
        quote: '"I\'ve been alternating Calpol and Nurofen. It helps a bit when it kicks in but wears off quickly."',
      },
    ],
    pastMedicalHistory: [
      { label: 'No previous ear infections; no significant medical history; all vaccines up to date', quote: '"He\'s been healthy — never had an ear infection before." – "All his jabs are done."' },
    ],
    drugHistory: [
      { label: 'No regular medications; paracetamol and ibuprofen PRN', quote: '"Just the paracetamol and Nurofen I\'ve been giving him."' },
      { label: 'No known drug allergies', quote: '"No allergies."' },
    ],
    familyHistory: [
      { label: 'Father had grommets as a child', quote: '"His dad had grommets when he was little." [if asked]' },
    ],
    socialHistory: [
      { label: 'Attends nursery 3 days a week; lives with both parents; non-smoking household; breastfed for 6 months', quote: '"He goes to nursery. We don\'t smoke in the house." [if asked]' },
    ],
    importantNegatives: [
      'No ear discharge — tympanic membrane has not perforated ("No yellow or bloody gunk.")',
      'No stiff neck or photophobia ("He can move his neck fine — I checked.")',
      'No mastoid tenderness or swelling behind the ear ("I haven\'t noticed any swelling behind his ear.")',
      'No rash ("No.")',
      'No preceding overseas travel or recent swimming ("No.")',
    ],
    ice: {
      ideas: '"I think it\'s an ear infection — my husband had loads as a child."',
      concerns: '"I\'m worried about his hearing being affected. And I want something that will actually help the pain."',
      expectations: '"I\'d like antibiotics — I don\'t want him to suffer. Is there anything to make it better faster?"',
    },
    onlyIfDirectlyAsked: [
      'Whether Oliver is vaccinated against pneumococcus — "Yes — all his vaccines are up to date."',
      'Smoking in the household — "Neither of us smokes. We don\'t even smoke outside if he\'s around."',
    ],
    behaviourNotes: [
      'Tired and anxious mother; expects antibiotics; initially frustrated when watchful waiting is recommended',
      'Becomes reassured when given a clear explanation of why antibiotics are not routinely needed and a clear safety net',
      'Asks "What if he gets worse?" — student should give specific safety net advice: what to watch for, when to return, when to seek emergency care',
      'Asks "Could it affect his hearing?" — student should explain most cases resolve without hearing damage; if recurrent episodes, refer for hearing assessment',
      'Responds well to being given written information and the "back-up prescription" option if symptoms not improving after 48 hours',
    ],
  },
  markScheme: [
    {
      domain: 'Image description to examiner',
      items: [
        { description: 'Identifies: red, erythematous tympanic membrane', marks: 1 },
        { description: 'Identifies: bulging tympanic membrane — loss of normal concave shape', marks: 1 },
        { description: 'Identifies: loss or obscuring of the light reflex', marks: 1 },
        { description: 'Concludes: findings consistent with acute otitis media — not otitis media with effusion (glue ear) which would show a dull, retracted TM with effusion', marks: 1 },
      ],
    },
    {
      domain: 'History',
      items: [
        { description: 'Establishes key AOM features: ear pain, fever, preceded by URTI, age 3', marks: 1 },
        { description: 'Screens for red flags: mastoid swelling/tenderness (mastoiditis), neck stiffness, photophobia (meningitis), ear discharge', marks: 1 },
        { description: 'Asks about previous episodes and hearing concerns', marks: 1 },
      ],
    },
    {
      domain: 'Explanation and management',
      items: [
        { description: 'Explains AOM clearly to Mrs Morris: bacterial/viral infection behind the eardrum following a cold; very common in young children', marks: 1 },
        { description: 'Explains NICE guidance on watchful waiting: most AOM resolves spontaneously in 2–3 days without antibiotics; antibiotics do not significantly reduce pain or speed recovery for mild-to-moderate cases', marks: 2 },
        { description: 'Prescribes regular analgesia: paracetamol and ibuprofen alternated every 4–6 hours for pain relief — the most effective symptomatic treatment', marks: 1 },
        { description: 'Offers back-up (delayed) antibiotic prescription: amoxicillin 125 mg/5 mL TDS for 5 days — to use if symptoms are not improving or worsening after 48 hours', marks: 1 },
        { description: 'Discusses safety netting: return if fever persisting >5 days, mastoid pain/swelling, significant deterioration, or ear discharge (possible perforation)', marks: 1 },
      ],
    },
    {
      domain: 'Addressing concerns',
      items: [
        { description: 'Addresses hearing concern: AOM does not usually cause permanent hearing loss; explains that recurrent AOM may warrant audiological assessment', marks: 1 },
        { description: 'Explains risk factors for recurrence: nursery attendance, smoking exposure, dummy use, bottle feeding', marks: 1 },
      ],
    },
    {
      domain: 'Key communication skills',
      items: [
        { description: 'Acknowledges Mrs Morris\'s request for antibiotics; validates her concern without dismissing it; explains the evidence clearly', marks: 1 },
        { description: 'Active listening; provides written safety net advice (Healthychildren-equivalent leaflet)', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Oliver is a 3-year-old with a 2-day history of right ear pain, fever (39°C), and irritability following a 5-day URTI; this is his first episode of otitis media',
    'Otoscopy image: red, bulging right tympanic membrane with loss of the light reflex — consistent with acute otitis media; no discharge (TM intact)',
    'Red flags excluded: no mastoid tenderness, no neck stiffness, no photophobia, no rash — meningitis and mastoiditis unlikely',
    'Management: watchful waiting per NICE NG91 — most AOM in children >2 years resolves within 2–3 days without antibiotics; antibiotics reduce duration by only ~12 hours and increase side effect risk',
    'Analgesia: regular paracetamol 15 mg/kg/dose and ibuprofen 10 mg/kg/dose alternating every 4–6 hours — this provides the most effective symptom relief',
    'Back-up prescription given: amoxicillin 125 mg/5 mL TDS 5 days — to start if no improvement or worsening after 48 hours, or if Mrs Morris is very concerned',
    'Safety net: return or seek emergency care if: fever >5 days, mastoid swelling/pain, ear discharge, marked deterioration, or concern about meningitis',
  ],
  vivaQuestions: [
    {
      question: 'What are the NICE guidelines on antibiotic prescribing in acute otitis media in children?',
      keyPoints: [
        'NICE NG91 (2023): do not routinely offer antibiotics for AOM in children >2 years with mild-to-moderate symptoms — watchful waiting for 3–7 days is recommended',
        'Immediate antibiotics should be offered if: child <2 years with bilateral AOM; otorrhoea (ear discharge); systemically very unwell; high risk of serious complications (immunocompromised, anatomical abnormalities of ear)',
        'Back-up (delayed) prescription strategy: provides a safety net for parents; reduces antibiotic use by up to 70%; no worse outcomes than immediate prescribing for uncomplicated AOM',
        'If antibiotics needed: amoxicillin is first-line (5-day course); erythromycin or co-amoxiclav if penicillin allergy',
        'Antibiotic benefit is modest: reduces duration by ~12 hours; does not reduce complication rate; associated with diarrhoea and rash',
      ],
      source: 'NICE NG91 (Otitis media — acute: antimicrobial prescribing, 2018 updated 2023)',
    },
    {
      question: 'What are the complications of acute otitis media and how do you recognise mastoiditis?',
      keyPoints: [
        'Common complication: tympanic membrane perforation — usually heals spontaneously; if persistent (>3 months), refer ENT',
        'Hearing loss: conductive hearing loss during AOM (fluid in middle ear); usually resolves; recurrent AOM can cause OME (glue ear) with prolonged conductive loss',
        'Mastoiditis: most serious local complication; post-auricular swelling, erythema, tenderness; protrusion of pinna anteriorly; fever; — urgent ENT referral and IV antibiotics; may require cortical mastoidectomy',
        'Intracranial spread (rare): meningitis, epidural abscess, sigmoid sinus thrombosis, brain abscess — suspect if severe headache, meningism, altered consciousness',
        'Facial nerve palsy (rare): from inflammation or abscess tracking through the facial canal',
      ],
      source: 'NICE NG91 (2023); OHCM 10th ed., Ch. 8; geekymedics.com ENT',
    },
  ],
};

const breathHoldingMockExam: MockExamStation = {
  id: 'paeds_breath_holding_spell',
  title: 'Paediatric History — Breath-Holding Spell',
  diagnosis: 'Cyanotic breath-holding spell — benign; not epilepsy',
  specialtyId: 'paediatrics',
  candidateBrief: {
    setting: 'You are an FY1 in the paediatric assessment unit.',
    scenario:
      'Rebecca Johnson, 27, has brought in her 18-month-old daughter Lily after an episode this afternoon which she describes as "a seizure". Lily appears well and alert on examination. Please take a focused paediatric history from Mrs Johnson and explain your diagnosis.',
    tasks: [
      'Take a focused paediatric history from Mrs Johnson about the episode',
      'Explain your working diagnosis and reassure Mrs Johnson appropriately',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'Rebecca Johnson',
    age: 27,
    occupation: 'Hairdresser (Lily\'s mother)',
    openingLine:
      '"She went completely blue and stiff and I thought she was having a seizure. I didn\'t know what to do. I was absolutely terrified." [shaking, tearful, holding Lily who is now running around happily]',
    historyOfPresentingComplaint: [
      {
        label: 'Trigger — Lily fell and bumped her head on the coffee table; began crying loudly, then stopped breathing mid-cry',
        quote: '"She fell and bumped her head. She started crying really hard and then... she just stopped. Completely silent. And then she went blue."',
      },
      {
        label: 'The episode — after the bump, Lily cried for 5–10 seconds, then held her breath; went limp then stiff; turned blue (cyanosis); lost consciousness briefly for approximately 30 seconds; then she resumed breathing and recovered rapidly',
        quote: '"She went silent — like she\'d forgotten to breathe. Then her lips went blue. Then she went all stiff. Then she just... collapsed. I thought she was dead." – "She was out for maybe 30 seconds — then she was back. Breathing. Crying again. Then fine."',
      },
      {
        label: 'Recovery — rapid and complete; Lily was back to normal within 1–2 minutes; no post-ictal drowsiness',
        quote: '"She was back to normal within about a minute or two. Running around. No drowsiness. She\'s been completely fine since." [points to Lily happily playing]',
      },
      {
        label: 'Previous episodes — one similar episode 3 months ago when Lily was frustrated at not being able to open a toy; same pattern (cry → apnoea → cyanosis → brief LOC → rapid recovery)',
        quote: '"This has happened once before — about 3 months ago. She got frustrated with a toy and the same thing happened." – "That time I thought she was just being dramatic — but this was exactly the same."',
      },
      {
        label: 'No prodrome of aura, tonic-clonic limb movements, post-ictal sleep, or incontinence',
        quote: '"No shaking. She just went stiff for a moment — not jerking." – "She didn\'t wet herself." – "She was fine straight away — not sleepy."',
      },
    ],
    pastMedicalHistory: [
      { label: 'Term delivery; normal birth; no neonatal admission; fully vaccinated', quote: '"She was born on time. Normal birth. No problems." – "Her jabs are all done."' },
      { label: 'Mild iron-deficiency anaemia — diagnosed 3 months ago; currently on oral iron drops', quote: '"She was found to have low iron 3 months ago. She\'s been on iron drops."' },
    ],
    drugHistory: [
      { label: 'Oral iron drops (ferrous sulfate) — started 3 months ago', quote: '"The iron drops. That\'s it."' },
      { label: 'No known drug allergies', quote: '"No allergies."' },
    ],
    familyHistory: [
      { label: 'Father had "fainting spells as a toddler" — described by his mother as breath-holding', quote: '"My husband\'s mum says he used to do something similar when he was a toddler — she described it as \'going blue when he cried\'." [if asked about family history]' },
    ],
    socialHistory: [
      { label: 'Lives with Mum and Dad; no smoking in the household; first child', quote: '"We don\'t smoke. She\'s our first." [if asked]' },
    ],
    importantNegatives: [
      'No tonic-clonic limb movements (rhythmic jerking) during the episode ("She went stiff but she didn\'t jerk her arms and legs.")',
      'No post-ictal drowsiness or confusion ("She was completely fine within 2 minutes — not sleepy at all.")',
      'No fever during or before the episode ("No — no temperature.")',
      'No developmental regression or behavioural change ("She\'s completely normal.")',
      'No family history of epilepsy ("No epilepsy in the family." [if asked — breath-holding family history is there])',
    ],
    ice: {
      ideas: '"I thought it was a seizure. It looked exactly like what I\'ve seen on TV."',
      concerns: '"I\'m terrified it\'s epilepsy. I don\'t want her to have epilepsy." [tearful]',
      expectations: '"I want someone to tell me what happened and whether she\'s going to be okay."',
    },
    onlyIfDirectlyAsked: [
      'Whether there was a clear trigger — "Yes — she bumped her head and got a fright."',
      'Duration of unconsciousness — "About 30 seconds — maybe less. It felt like forever."',
      'Colour during episode — "Blue — she went blue around her mouth."',
    ],
    behaviourNotes: [
      'Frightened and tearful at the start; visibly relieved when the diagnosis is explained clearly',
      'Asks "Is it epilepsy?" — student should clearly state no; explain the mechanism confidently',
      'Asks "Will this keep happening?" — student should explain: episodes typically peak between 1–3 years and almost always resolve spontaneously by age 5–6',
      'Ask "What should I do if it happens again?" — student should provide clear first aid advice: stay calm, place child on their side (recovery position), do not put anything in the mouth, do not restrain — the child will resume breathing spontaneously',
      'If student correctly identifies iron deficiency as a contributing factor: Mrs Johnson is genuinely surprised and reassured that continuing iron supplements may reduce frequency',
    ],
  },
  markScheme: [
    {
      domain: 'Opening the consultation',
      items: [
        { description: 'Introduces themselves; acknowledges how frightening the event was for Mrs Johnson before starting the history', marks: 1 },
      ],
    },
    {
      domain: 'Characterising the episode',
      items: [
        { description: 'Identifies precipitating trigger: injury (pain/fright) or frustration — an identifiable precipitant is essential for breath-holding spell diagnosis', marks: 2 },
        { description: 'Establishes sequence: vigorous crying → expiratory apnoea → cyanosis → loss of consciousness (brief)', marks: 2 },
        { description: 'Confirms rapid and complete recovery with no post-ictal phase (key differentiator from epilepsy)', marks: 2 },
        { description: 'Asks about limb movements — confirms no tonic-clonic jerking (may have brief posturing from cerebral hypoperfusion but not rhythmic jerking)', marks: 1 },
        { description: 'Asks about duration of unconsciousness — brief (<60 seconds)', marks: 1 },
      ],
    },
    {
      domain: 'Red flags and differential screening',
      items: [
        { description: 'Screens for fever — if febrile, consider febrile convulsion as differential', marks: 1 },
        { description: 'Asks about developmental history and regression — normal development excludes underlying neurological disorder', marks: 1 },
        { description: 'Asks about family history of epilepsy and breath-holding spells', marks: 1 },
      ],
    },
    {
      domain: 'Iron deficiency association',
      items: [
        { description: 'Asks about iron deficiency anaemia — identifies Lily is already on iron drops; explains iron deficiency increases frequency of breath-holding spells', marks: 1 },
      ],
    },
    {
      domain: 'Explanation to Mrs Johnson',
      items: [
        { description: 'Clearly explains that this is NOT epilepsy — a breath-holding spell, not a seizure; explains the mechanism', marks: 2 },
        { description: 'Explains prognosis: episodes peak between 6 months and 3 years; almost all children outgrow them by age 5–6', marks: 1 },
        { description: 'Provides first-aid advice for future episodes: stay calm; place Lily on her side; she will resume breathing spontaneously; do not restrain or put anything in her mouth', marks: 1 },
      ],
    },
    {
      domain: 'Key communication skills',
      items: [
        { description: 'Reassures effectively without dismissing Mrs Johnson\'s terror — validates that it looked genuinely alarming', marks: 1 },
        { description: 'Active listening; summarises and checks understanding; offers written information', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Lily is an 18-month-old girl presenting after a witnessed episode following head trauma: clear trigger (pain/fright) → vigorous crying → expiratory apnoea → cyanosis → brief loss of consciousness <30 seconds → rapid complete recovery with no post-ictal drowsiness',
    'The clinical picture is diagnostic of a cyanotic breath-holding spell (reflex anoxic/expiratory apnoea): identifiable trigger, cry first then apnoea and cyanosis, brief loss of consciousness, and rapid return to baseline without post-ictal phase',
    'Features against epilepsy: there was an identifiable precipitant; she cried first (epileptic seizures are not triggered by pain/emotion in this way); no tonic-clonic jerking; no post-ictal drowsiness; recovery in under 2 minutes',
    'Risk factors identified: iron deficiency anaemia (currently on iron drops) — iron deficiency is associated with increased frequency of breath-holding spells; ensure iron supplementation is continued and levels rechecked',
    'Positive family history of breath-holding spells (father had similar episodes as a toddler) — autosomal dominant predisposition',
    'Management: no pharmacological treatment needed; first-aid education (recovery position, do not restrain, no mouth intervention); reassure that episodes resolve by age 5–6 in virtually all children; ensure iron supplementation continued',
    'Safety net: if episodes become associated with prolonged unconsciousness (>1 minute), jerking, incontinence, or failure to recover quickly — refer to paediatric neurology',
  ],
  vivaQuestions: [
    {
      question: 'How do you differentiate a breath-holding spell from an epileptic seizure?',
      keyPoints: [
        'Breath-holding spell: identifiable trigger (pain, fright, frustration); starts with crying or gasp; apnoea then cyanosis (cyanotic type) or sudden pallor (pallid type); brief LOC <60 seconds; rapid complete recovery, no post-ictal drowsiness',
        'Epileptic seizure: no precipitant or an internal trigger; apnoea/colour change occurs after (not before) jerking; tonic-clonic limb movements; post-ictal drowsiness (minutes to hours); may have incontinence; can occur from sleep',
        'Cyanotic BHS: vagally-mediated reflex breath-holding; most common type; follows frustration or pain',
        'Pallid BHS (reflex anoxic seizure): follows sudden unexpected fright or minor head trauma; profound pallor (not cyanosis); cardiac asystole from vagal overdrive; brief tonic stiffening from cerebral hypoperfusion',
        'EEG: not indicated for typical breath-holding spells; only if clinical uncertainty or atypical features',
      ],
      source: 'NICE NG217 (Epilepsies in children, young people and adults, 2022); OHCM 10th ed.; geekymedics.com',
    },
    {
      question: 'What is the role of iron deficiency in breath-holding spells and how should it be managed?',
      keyPoints: [
        'Iron deficiency is significantly associated with breath-holding spells — prevalence of iron deficiency anaemia in children with BHS is 65–75% vs ~20% in controls',
        'Proposed mechanism: iron deficiency impairs autonomic nervous system function and catecholamine metabolism, increasing vagal sensitivity and predisposing to reflex apnoea',
        'Treatment with iron supplementation reduces the frequency of breath-holding spells in iron-deficient children — randomised controlled trial evidence supports this (Mocan et al.)',
        'Check serum ferritin and FBC in all children with breath-holding spells; treat iron deficiency with oral ferrous sulfate drops/syrup',
        'Dietary advice: encourage iron-rich foods (red meat, fortified cereals, green vegetables); vitamin C with iron source to enhance absorption; avoid excessive cow\'s milk (displaces iron-rich foods)',
      ],
      source: 'Mocan H et al. Arch Dis Child (1999); NICE NG204 (Iron deficiency anaemia, 2021); geekymedics.com',
    },
  ],
};

const febrileConvulsionMockExam: MockExamStation = {
  id: 'paeds_febrile_convulsion',
  title: 'Paediatric History — Febrile Convulsion',
  diagnosis: 'Simple febrile seizure — reassure and educate parents',
  specialtyId: 'paediatrics',
  candidateBrief: {
    setting: 'You are an FY1 in the paediatric assessment unit.',
    scenario:
      'David and Sarah Coleman have brought in their 2-year-old son Noah after a seizure at home 90 minutes ago. Noah was febrile (T 39.2°C) and had a generalised convulsion lasting approximately 2 minutes. He is now alert, smiling, and has a temperature of 38.4°C. Please take a history from the parents and explain your management and plan.',
    tasks: [
      'Take a focused history of the seizure and its context from Noah\'s parents',
      'Explain the diagnosis and management to Mr and Mrs Coleman',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'Sarah Coleman',
    age: 31,
    occupation: 'Graphic designer (Noah\'s mother; David — the father — is also present)',
    openingLine:
      '"He shook all over for about 2 minutes and his eyes rolled back. I\'ve never been so terrified in my life. Is he going to be okay? Is it epilepsy?" [anxious, tearful; David is standing close and looking frightened]',
    historyOfPresentingComplaint: [
      {
        label: 'The convulsion — generalised tonic-clonic; all four limbs; lasted approximately 2 minutes; eyes deviated upward; no focal onset or focal deficit afterwards',
        quote: '"All four limbs were shaking. His eyes rolled back. It lasted about 2 minutes — though it felt like forever." – "It was symmetrical — both sides equal."',
      },
      {
        label: 'Fever — Noah had a temperature of 38.5°C in the morning; by the time of the seizure it was 39.2°C; had viral URTI symptoms (runny nose, mild cough) for 2 days',
        quote: '"He\'s had a runny nose and cough for 2 days. We took his temperature this morning and it was 38.5. Then this afternoon the seizure happened." [no obvious source for the fever otherwise]',
      },
      {
        label: 'Post-ictal — brief drowsiness for 10 minutes after seizure; now alert, smiling, and back to baseline',
        quote: '"He was drowsy for about 10 minutes afterwards. Then he woke up and he was back to himself." [points to Noah who is smiling and reaching for toys]',
      },
      {
        label: 'Duration and number of seizures — one seizure; lasted approximately 2 minutes; fully stopped spontaneously',
        quote: '"Just the one seizure. It stopped on its own — before the ambulance got there." – "About 2 minutes."',
      },
      {
        label: 'No evidence of meningitis or encephalitis — neck flexible, no photophobia, no rash, alert and interactive now',
        quote: '"He can move his neck. He\'s not bothered by the light." – "He\'s alert now — he recognised us straight away when he woke up." [if asked]',
      },
    ],
    pastMedicalHistory: [
      { label: 'No previous seizures; no previous febrile convulsions; healthy; all vaccinations up to date', quote: '"He\'s never had a fit before. Healthy boy — all his jabs are done."' },
    ],
    drugHistory: [
      { label: 'Paracetamol syrup given for fever; no regular medications', quote: '"Just the Calpol we gave him for the temperature." – "Nothing else."' },
      { label: 'No known drug allergies', quote: '"No allergies."' },
    ],
    familyHistory: [
      { label: 'Sarah\'s sister had febrile convulsions as a child — outgrew by age 5', quote: '"My sister had febrile fits as a child. My mum said she grew out of them." [if asked about family history]' },
    ],
    socialHistory: [
      { label: 'Lives with both parents; non-smoking household; attends childminder', quote: '"We don\'t smoke. He goes to a childminder 3 days a week." [if asked]' },
    ],
    importantNegatives: [
      'No neck stiffness or photophobia ("He can move his neck fine." – "He\'s not bothered by the light.")',
      'No non-blanching rash — blanching erythematous rash from viral illness only ("Just a mild redness on his chest — it disappears when I press it.")',
      'No focal neurological deficit after the seizure ("He seems completely normal.")',
      'No prolonged post-ictal state ("He was only drowsy for 10 minutes — then totally back to himself.")',
      'No aura or focal onset to the seizure ("It was both sides from the start.")',
    ],
    ice: {
      ideas: '"I know it was probably a febrile fit. But I\'m not sure. I\'m scared it could be epilepsy or meningitis."',
      concerns: '"If it\'s epilepsy he\'ll be on medication for life. And meningitis — I panicked about meningitis."',
      expectations: '"We want to know if he\'s okay and what we should do if it happens again."',
    },
    onlyIfDirectlyAsked: [
      'Whether Noah was febrile immediately before the convulsion — "Yes — we\'d just taken his temperature and it had gone up."',
      'Whether there was any focal deviation — "His eyes did roll back — but both sides were equal."',
    ],
    behaviourNotes: [
      'Both parents are frightened; mother tearful; father quiet but clearly shaken',
      'Visibly relieved when the student explains this is a simple febrile seizure — not meningitis and not epilepsy',
      'Asks "Will it happen again?" — student should give the accurate recurrence risk (~30–35% risk of at least one more febrile seizure, usually at same temperature threshold) and explain it is not harmful',
      'Asks "Should we give him his temperature down faster next time?" — student should clarify antipyretics do NOT prevent febrile seizures (common misconception)',
      'Asks "What do we do if it happens again?" — student should teach recovery position, timing, calling 999 if >5 minutes; do not put anything in his mouth',
    ],
  },
  markScheme: [
    {
      domain: 'Opening the consultation',
      items: [
        { description: 'Introduces themselves; acknowledges how terrifying the event was for both parents', marks: 1 },
      ],
    },
    {
      domain: 'Characterising the seizure',
      items: [
        { description: 'Establishes onset, duration, and character: generalised (both sides), tonic-clonic, lasting ~2 minutes', marks: 1 },
        { description: 'Confirms no focal onset — no asymmetry to movements; no focal deficit post-ictally', marks: 1 },
        { description: 'Confirms seizure occurred in the context of fever (temperature >38°C) with identifiable viral URTI', marks: 1 },
        { description: 'Confirms single seizure episode, <15 minutes, with rapid return to baseline (no prolonged post-ictal state)', marks: 1 },
      ],
    },
    {
      domain: 'Screening for serious alternatives',
      items: [
        { description: 'Screens for meningitis/encephalitis: neck stiffness, photophobia, rash, prolonged impaired consciousness, developmental regression', marks: 2 },
        { description: 'Screens for complex febrile seizure features: duration >15 minutes; focal onset; more than one seizure in 24 hours; age <6 months', marks: 1 },
      ],
    },
    {
      domain: 'Background history',
      items: [
        { description: 'Asks about previous febrile seizures and epilepsy history; family history of febrile convulsions', marks: 1 },
        { description: 'Asks about vaccination history and developmental history — all normal', marks: 1 },
      ],
    },
    {
      domain: 'Explanation',
      items: [
        { description: 'Explains simple febrile seizure clearly: a seizure triggered by a fever; NOT epilepsy; NOT caused by meningitis; benign condition', marks: 2 },
        { description: 'Explains recurrence risk accurately: ~30–35% risk of at least one further febrile seizure; does NOT increase epilepsy risk significantly in uncomplicated cases', marks: 1 },
        { description: 'Clarifies common misconception: antipyretics (paracetamol/ibuprofen) do NOT prevent febrile seizures', marks: 1 },
      ],
    },
    {
      domain: 'First aid and safety net',
      items: [
        { description: 'Teaches first aid: place in recovery position; do NOT put anything in mouth; time the seizure; call 999 if >5 minutes', marks: 1 },
        { description: 'Safety net: return if seizure recurs or if Noah develops rash, neck stiffness, marked drowsiness, or fails to return to baseline', marks: 1 },
      ],
    },
    {
      domain: 'Key communication skills',
      items: [
        { description: 'Reassures confidently without minimising the fear; validates parents\' response', marks: 1 },
        { description: 'Active listening; checks understanding; provides written information', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Noah is a 2-year-old presenting 90 minutes after a 2-minute generalised tonic-clonic seizure in the context of a fever (39.2°C) secondary to a viral URTI; fully alert and back to baseline now',
    'The episode meets all criteria for a simple febrile seizure: generalised (not focal); single episode; duration <15 minutes; occurred in context of fever; rapid return to baseline; age 6 months to 6 years',
    'Meningitis and encephalitis excluded clinically: no neck stiffness, no photophobia, no non-blanching rash, no prolonged post-ictal impairment, currently alert and interactive',
    'Family history positive (maternal aunt had febrile convulsions) — consistent with the known familial predisposition (autosomal dominant with variable penetrance)',
    'Management: no antiepileptic drugs needed for simple febrile seizures; continue regular paracetamol and ibuprofen for fever comfort (does NOT prevent recurrence); treat underlying URTI supportively',
    'Education: recurrence risk ~30–35%; does not cause epilepsy or brain damage; first-aid instructions (recovery position, do not restrain, time it, call 999 if >5 minutes)',
    'Discharge plan: observe in the department for 1–2 hours while fever settles; discharge with written safety-net leaflet; GP follow-up; no urgent neurology referral required for simple febrile seizure',
  ],
  vivaQuestions: [
    {
      question: 'What are the features that distinguish a simple from a complex febrile seizure?',
      keyPoints: [
        'Simple febrile seizure: generalised (both hemispheres from onset); single episode in 24 hours; lasts <15 minutes; no focal neurological deficit post-ictally; occurs in a child aged 6 months to 6 years',
        'Complex febrile seizure: any one of — focal onset or asymmetric; duration >15 minutes (febrile status epilepticus); more than one seizure in 24 hours; residual focal neurological deficit (Todd\'s paresis)',
        'Complex febrile seizures warrant neuroimaging (MRI head) and EEG to exclude structural lesion or encephalitis; also consider lumbar puncture if meningitis remains a concern',
        'Febrile status epilepticus (FSE, >30 minutes): treat as for any status epilepticus — benzodiazepine rescue therapy (buccal midazolam or rectal diazepam); IV lorazepam if IV access; IV phenytoin if second-line needed',
        'Risk of subsequent epilepsy: after simple febrile seizure, risk is ~1-2% (only slightly above general population); after complex febrile seizure, risk rises to ~5-10%',
      ],
      source: 'NICE NG217 (Epilepsies in children, 2022); RCPCH position statement on febrile seizures (2011)',
    },
    {
      question: 'What is the recurrence risk after a febrile seizure and what factors increase the risk?',
      keyPoints: [
        'Overall recurrence risk after first febrile seizure: approximately 30–35%; risk of having 3 or more episodes: ~10%',
        'Risk factors that increase recurrence: age <18 months at first seizure; family history of febrile seizures in a first-degree relative; seizure occurring at relatively low temperature (<38.5°C); short interval between fever onset and seizure',
        'Antipyretics do NOT prevent recurrence — randomised controlled trials show no reduction in febrile seizure recurrence with regular paracetamol or ibuprofen',
        'Intermittent diazepam at onset of fever: can reduce recurrence in high-risk children but causes sedation and tolerance — not routinely recommended (NICE NG217)',
        'Most children outgrow febrile seizures by age 5–6 years; the vast majority have no long-term sequelae',
      ],
      source: 'NICE NG217 (2022); Berg AT & Shinnar S, Neurology 1996; geekymedics.com',
    },
  ],
};

export const PAEDS_MOCK_EXAMS: MockExamStation[] = [
  paedsMigraineHistoryMockExam,
  paedsCannulaCounsellingMockExam,
  paedsEatingDisorderMockExam,
  paedsBronchiolitisMockExam,
  skeletalSurveyConflictMockExam,
  paedsAsthmaMockExam,
  antivaxMeningitisMockExam,
  otitisMediaMockExam,
  breathHoldingMockExam,
  febrileConvulsionMockExam,
];
