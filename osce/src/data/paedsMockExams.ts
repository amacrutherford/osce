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

export const PAEDS_MOCK_EXAMS: MockExamStation[] = [
  paedsMigraineHistoryMockExam,
  paedsCannulaCounsellingMockExam,
  paedsEatingDisorderMockExam,
];
