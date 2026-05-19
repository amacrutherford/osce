import type { ExamStep } from './steps';

export const alcoholSubstanceSteps: ExamStep[] = [
  {
    id: 'alc-opening',
    stepNumber: 1,
    title: 'Opening and Screening',
    subtitle: 'CAGE questionnaire and AUDIT-C screening',
    description: 'Begin the alcohol and substance history with validated screening tools in a non-judgmental, empathic manner before moving to more detailed questioning.',
    checklist: [
      'Establish rapport and use normalising language: "I ask these questions of all my patients"',
      'Ask the four CAGE questions: Cut down? Annoyed by criticism? Guilty about drinking? Eye-opener in morning?',
      'Score CAGE: ≥2 positive answers = 87% sensitivity, 89% specificity for alcohol dependence',
      'Use AUDIT-C in primary care: frequency of drinking, units on a typical day, frequency of drinking ≥6 units',
      'Avoid leading or judgmental questions; use open-ended questions first',
    ],
    questions: [
      {
        id: 'alc-open-q1',
        type: 'examiner',
        text: 'What are the CAGE questions and what score suggests alcohol dependence?',
      },
      {
        id: 'alc-open-r1',
        type: 'rationale',
        text: '',
        bullets: [
          'C — Have you ever felt you should Cut down on your drinking?',
          'A — Have people Annoyed you by criticising your drinking?',
          'G — Have you ever felt Guilty about your drinking?',
          'E — Have you ever had a drink first thing in the morning (Eye-opener) to steady your nerves or get rid of a hangover?',
          'CAGE ≥2 = 87% sensitivity, 89% specificity for alcohol dependence; AUDIT-C is recommended in primary care (NICE PH24)',
        ],
        source: 'NICE PH24 (2010)',
      },
    ],
  },
  {
    id: 'alc-consumption',
    stepNumber: 2,
    title: 'Alcohol Consumption',
    subtitle: 'Quantify units, frequency, and type of alcohol',
    description: 'Quantify alcohol consumption in standard UK units, identify drinking patterns, and compare against the CMO low-risk guidelines.',
    checklist: [
      'Ask about: what type of alcohol, how much per sitting, how often, first drink of the day timing',
      'Calculate units: 1 unit = 10 mL pure ethanol = 1 small (125 mL) glass of 8% wine ≈ but note standard glasses are 175–250 mL',
      'Practical: 1 pint of 4% beer = ~2.3 units; 750 mL bottle of 13% wine = ~10 units; 1 single measure of spirits (25 mL at 40%) = 1 unit',
      'UK low-risk guidelines (CMO 2016): ≤14 units/week for men and women, spread over 3+ days with alcohol-free days',
      'Ask about escalation over time: has the amount needed for the same effect increased? (tolerance)',
    ],
    questions: [
      {
        id: 'alc-cons-q1',
        type: 'examiner',
        text: 'What are the UK Chief Medical Officer\'s low-risk drinking guidelines?',
      },
      {
        id: 'alc-cons-r1',
        type: 'rationale',
        text: '',
        bullets: [
          'CMO (2016) low-risk guidance: ≤14 units/week for both men and women (previously different for men)',
          'Spread drinking over 3 or more days — avoid heavy single sessions ("binge" drinking: >6 units for women, >8 units for men in one occasion)',
          'Have several alcohol-free days per week',
          'There is no completely safe level of alcohol — risk of certain cancers (breast, liver, oral, oesophageal) increases even below 14 units',
        ],
        source: 'UK CMO Low Risk Drinking Guidelines (2016)',
      },
    ],
  },
  {
    id: 'alc-dependence',
    stepNumber: 3,
    title: 'Dependence Features',
    subtitle: 'ICD-11 / DSM-5 criteria for alcohol use disorder',
    description: 'Screen for features of alcohol dependence using the ICD-11 criteria, which require three or more features within a 12-month period.',
    checklist: [
      'Ask about strong desire or compulsion to drink (craving)',
      'Ask about difficulty controlling alcohol use: starting, stopping, or level of consumption',
      'Ask about withdrawal symptoms on cessation: tremor, sweating, nausea, anxiety, seizures',
      'Ask about tolerance: needing more alcohol to achieve the same effect',
      'Ask about neglect of other activities and continued use despite harm',
      'Ask about time spent obtaining, using, or recovering from alcohol',
    ],
    questions: [
      {
        id: 'alc-dep-q1',
        type: 'examiner',
        text: 'What are the ICD-11 criteria for alcohol dependence and how many are needed for diagnosis?',
      },
      {
        id: 'alc-dep-r1',
        type: 'rationale',
        text: '',
        bullets: [
          'ICD-11 requires ≥3 features in the past 12 months: (1) compulsion/craving, (2) impaired control over use, (3) physiological withdrawal on cessation, (4) tolerance, (5) neglect of alternative interests, (6) continued use despite harm',
          'Physiological dependence is indicated by tolerance AND withdrawal symptoms — these indicate the need for medically supervised detoxification',
          'Harmful use (alcohol use disorder without dependence): alcohol causing physical or psychological harm without meeting full dependence criteria',
          'The AUDIT full questionnaire (10 questions) distinguishes hazardous use, harmful use, and dependence',
        ],
        source: 'ICD-11; NICE CG115 (2011)',
      },
    ],
  },
  {
    id: 'alc-consequences',
    stepNumber: 4,
    title: 'Consequences of Alcohol Use',
    subtitle: 'Physical, psychological, and social harms',
    description: 'Systematically explore the physical, psychological, and social consequences of alcohol use to establish the severity of the problem and guide management.',
    checklist: [
      'Physical: ask about liver disease (jaundice, ascites), pancreatitis (epigastric pain radiating to back), peripheral neuropathy, hypertension, cardiomyopathy, GI bleeds (oesophageal varices, gastritis)',
      'Neurological: ask about memory blackouts, seizures, confusional episodes (Wernicke\'s), tremor on waking',
      'Psychological: screen for depression (most common comorbidity), anxiety, suicidal ideation, and deliberate self-harm',
      'Social: ask about employment (lost jobs, sickness absence), relationships, finances, drink-driving, legal issues, homelessness',
      'Ask about family history of alcohol dependence and impact on children in the household (safeguarding)',
    ],
    questions: [
      {
        id: 'alc-cons-q1',
        type: 'examiner',
        text: 'What is Wernicke\'s encephalopathy and how do you treat it?',
      },
      {
        id: 'alc-cons-p1',
        type: 'pathology',
        text: '',
        bullets: [
          'Wernicke\'s encephalopathy: acute thiamine (vitamin B1) deficiency, commonest in chronic heavy alcohol use (also in hyperemesis, malabsorption)',
          'Classic triad: ophthalmoplegia (nystagmus, 6th nerve palsy), ataxia, confusion/encephalopathy — only 16% have all three features clinically',
          'Treatment: IV Pabrinex (thiamine) BEFORE glucose (glucose drip without thiamine precipitates acute Wernicke\'s) — Pabrinex 2 pairs IV TDS for 3–5 days in established Wernicke\'s',
          'Untreated → Korsakoff\'s syndrome: permanent severe anterograde amnesia (unable to form new memories) + confabulation; only 25% improve significantly',
        ],
        source: 'NICE CG100 (2010)',
      },
    ],
  },
  {
    id: 'alc-substances',
    stepNumber: 5,
    title: 'Substance Use History',
    subtitle: 'Screen for all recreational and illicit substances',
    description: 'Ask about all substances in a systematic, non-judgmental way, using normalising language to maximise disclosure of current and past use.',
    checklist: [
      'Use normalising language: "Many people use substances alongside alcohol — I\'d like to ask about a few to make sure we give you the best care"',
      'Ask about each substance: cannabis (smoked/edible), stimulants (cocaine/crack, MDMA, amphetamines), opioids (heroin, codeine, oxycodone), benzodiazepines, novel psychoactive substances',
      'For each substance: how often, route (oral/intranasal/IV), when started, quantity per use, attempts to cut down',
      'IV drug use: ask about sharing needles or equipment — offer BBV testing (hepatitis B, C, HIV), vaccination (Hep B)',
      'Ask about polysubstance use — common with alcohol and benzodiazepines (both CNS depressants, additive overdose risk)',
    ],
    questions: [
      {
        id: 'alc-subst-q1',
        type: 'examiner',
        text: 'What are the key risks of intravenous drug use and how should you advise patients who inject drugs?',
      },
      {
        id: 'alc-subst-r1',
        type: 'rationale',
        text: '',
        bullets: [
          'Blood-borne viruses: HIV (prevalence ~1% in UK PWID), Hepatitis C (~50% in UK PWID), Hepatitis B — offer testing and Hep B vaccination',
          'Bacterial infections: endocarditis (Staphylococcus aureus — tricuspid valve commonest in IVDU), skin/soft tissue infections, septic arthritis, osteomyelitis, abscesses',
          'Harm reduction: needle exchange programmes (provide clean equipment), naloxone training and supply (take-home naloxone — NICE NG194)',
          'Vein damage: thrombophlebitis, deep vein thrombosis, venous sclerosis — advise on injection technique and rotation of sites',
        ],
        source: 'NICE NG194 (2021)',
      },
    ],
  },
  {
    id: 'alc-opioids',
    stepNumber: 6,
    title: 'Opioid-Specific Assessment',
    subtitle: 'Opioid dependence, withdrawal, and overdose history',
    description: 'Conduct a focused opioid assessment if opioid use is disclosed, including withdrawal features, overdose history, and appropriateness for opioid substitution therapy.',
    checklist: [
      'Ask about: current opioid type and dose, frequency, route, last use, how long using',
      'Assess tolerance: is the patient using more than when they started? Any overdoses (accidental or intentional)?',
      'Ask about opioid withdrawal symptoms: yawning, rhinorrhoea, lacrimation, piloerection, muscle cramps, vomiting/diarrhoea, insomnia, restlessness, dilated pupils',
      'Assess awareness of naloxone: does the patient carry take-home naloxone? Has someone close to them been trained to use it?',
      'Ask about previous treatment: methadone, buprenorphine-naloxone (Suboxone), previous detoxification programmes',
    ],
    questions: [
      {
        id: 'alc-opioid-q1',
        type: 'examiner',
        text: 'Compare methadone and buprenorphine-naloxone as opioid substitution therapies.',
      },
      {
        id: 'alc-opioid-p1',
        type: 'pathology',
        text: '',
        bullets: [
          'Methadone: full opioid agonist, long half-life (24–36 h), once-daily supervised consumption initially; risk of respiratory depression and QTc prolongation (ECG before starting)',
          'Buprenorphine-naloxone (Suboxone): partial agonist at μ-receptor — ceiling effect on respiratory depression (safer in overdose); naloxone component deters IV misuse (precipitates withdrawal if injected)',
          'Both reduce illicit opioid use, crime, BBV transmission, and overdose mortality when delivered in structured treatment — NICE NG58',
          'Evidence: methadone and buprenorphine are equally effective for retention in treatment; buprenorphine preferred in patients with QTc prolongation or sedation concerns',
        ],
        source: 'NICE NG58 (2007, updated 2019)',
      },
    ],
  },
  {
    id: 'alc-motivation',
    stepNumber: 7,
    title: 'Motivation and Readiness to Change',
    subtitle: 'Stages of change model and motivational interviewing',
    description: 'Assess the patient\'s readiness to change their substance use to tailor the intervention appropriately and build intrinsic motivation.',
    checklist: [
      'Assess stage of change: pre-contemplation (not considering), contemplation (ambivalent), preparation (planning), action (changing), maintenance, relapse',
      'Use motivational interviewing techniques: open questions, affirmations, reflective listening, summaries (OARS)',
      'Explore ambivalence: "What are the good things about drinking for you? What are the not-so-good things?"',
      'Ask about previous attempts to cut down or stop: what worked, what didn\'t, how long they abstained',
      'Discuss goals collaboratively: reduction vs abstinence — some patients will target controlled use initially',
    ],
    questions: [
      {
        id: 'alc-motiv-q1',
        type: 'examiner',
        text: 'Describe Prochaska and DiClemente\'s stages of change model and how it guides clinical approach.',
      },
      {
        id: 'alc-motiv-r1',
        type: 'rationale',
        text: '',
        bullets: [
          'Pre-contemplation: not considering change — build rapport, raise awareness of consequences without confrontation',
          'Contemplation: ambivalent about change — explore ambivalence, emphasise autonomy, help weigh pros and cons',
          'Preparation: intending to change soon — help set a goal and plan; discuss treatment options',
          'Action: actively making changes — support, reinforce, address barriers',
          'Maintenance/relapse: maintain gains or manage relapse as part of recovery — relapse is expected; reframe as part of the process, not failure',
        ],
        source: 'NICE PH24 (2010)',
      },
    ],
  },
  {
    id: 'alc-safety',
    stepNumber: 8,
    title: 'Safety and Withdrawal Risk',
    subtitle: 'Safeguarding, withdrawal seizure risk, and referral',
    description: 'Assess safety issues including safeguarding, risk of alcohol withdrawal seizures, and arrange appropriate referral for medically supervised detoxification or community support.',
    checklist: [
      'Ask about children in the household — safeguarding duty if children at risk of neglect or harm',
      'Assess withdrawal seizure risk: daily heavy drinkers are at risk of generalised seizures within 6–48 h of last drink',
      'Use CIWA-Ar (Clinical Institute Withdrawal Assessment for Alcohol) to guide detoxification intensity',
      'Discuss referral: community alcohol team, Drug and Alcohol Action Team (DAAT), SMART Recovery, Alcoholics Anonymous (12-step)',
      'Prescribe reducing chlordiazepoxide regimen for medically supervised community detox (or lorazepam if hepatic impairment)',
    ],
    questions: [
      {
        id: 'alc-safety-q1',
        type: 'examiner',
        text: 'What is the timeline and pharmacological management of alcohol withdrawal?',
      },
      {
        id: 'alc-safety-p1',
        type: 'pathology',
        text: '',
        bullets: [
          'Timeline: minor withdrawal (tremor, sweating, anxiety, tachycardia) begins 6–12 h after last drink; peaks 24–48 h',
          'Withdrawal seizures (grand mal): 6–48 h after last drink; risk factors — previous withdrawal seizures, large daily intake, long duration, concomitant benzodiazepine use',
          'Delirium tremens (DTs): 48–72 h; severe autonomic instability, hallucinations (visual/tactile), confusion — 1–5% mortality if untreated; treat with high-dose benzodiazepines ± antipsychotics',
          'Treatment: chlordiazepoxide (long-acting benzodiazepine) in a symptom-triggered or fixed reducing regime guided by CIWA-Ar; thiamine supplementation (Pabrinex or oral thiamine)',
        ],
        source: 'NICE CG100 (2010)',
      },
    ],
  },
];

// EXAM_ENTRY_DATA
// {"id":"alcohol-substance","title":"Alcohol and Substance History","description":"Structured alcohol and substance misuse history covering CAGE screening, unit quantification, dependence features, physical/social consequences, polysubstance use, opioid assessment, readiness to change, and safety planning.","specialtyId":"psychiatry","highYieldSummary":["CAGE ≥2 = 87% sensitivity for alcohol dependence. AUDIT-C used in primary care screening. CMO low-risk limit: ≤14 units/week for men and women (2016 guidelines).","ICD-11 alcohol dependence: ≥3 of: craving, impaired control, withdrawal, tolerance, neglect of other activities, continued use despite harm — in the past 12 months.","Wernicke\'s encephalopathy: thiamine deficiency — classic triad in only 16%; give IV Pabrinex BEFORE glucose to all at-risk heavy drinkers; untreated → Korsakoff\'s syndrome (permanent amnesia).","Alcohol withdrawal seizures: 6–48 h after last drink; treat with chlordiazepoxide reducing regime (CIWA-Ar guided) + thiamine. Delirium tremens peaks 48–72 h — 1–5% mortality if untreated.","Opioid substitution: methadone (full agonist, QTc risk) vs buprenorphine-naloxone (partial agonist, safer in overdose, deters IV misuse). Both equally effective for treatment retention — NICE NG58.","Stages of change (Prochaska & DiClemente): pre-contemplation → contemplation → preparation → action → maintenance → relapse. Match intervention to stage; motivational interviewing for ambivalent patients."]}
