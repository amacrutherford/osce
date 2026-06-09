import type { MockExamStation } from './mockExamTypes';

const betaBlockerCounselling: MockExamStation = {
  id: 'gp_beta_blocker_counselling',
  title: 'GP Consultation — Beta-Blocker Counselling (Bisoprolol)',
  diagnosis: 'New prescription counselling — bisoprolol for heart failure with reduced ejection fraction',
  specialtyId: 'general-practice',
  candidateBrief: {
    setting: 'You are an FY1 in a GP surgery.',
    scenario:
      'Mr David Okafor, 64, a retired bus driver with recently diagnosed heart failure with reduced ejection fraction (HFrEF, EF 35%), has been started on bisoprolol 1.25 mg once daily by the cardiology team. He has attended today to collect his prescription and discuss his new medication.',
    tasks: [
      'Counsel Mr Okafor on his new bisoprolol prescription',
      'Address his questions and concerns about the medication',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'David Okafor',
    age: 64,
    occupation: 'Retired bus driver',
    openingLine:
      '"The hospital put me on this tablet — bisoprolol. But they didn\'t really explain what it does or what I should look out for. I\'m a bit worried about taking it, to be honest." [slightly apprehensive]',
    historyOfPresentingComplaint: [
      {
        label: 'Recent diagnosis of heart failure — admitted 6 weeks ago with breathlessness and ankle swelling',
        quote: '"I was admitted to hospital about six weeks ago. I couldn\'t catch my breath climbing the stairs, and my ankles were very swollen. They did a scan of my heart and said it wasn\'t pumping as well as it should."',
      },
      {
        label: 'Currently stable on carvedilol — no, bisoprolol 1.25 mg; also started on ramipril and furosemide',
        quote: '"The hospital doctor said I need three tablets now — the bisoprolol, something called ramipril, and a water tablet — furosemide. I\'ve started the ramipril and furosemide already."',
      },
      {
        label: 'Current symptoms — mild breathlessness on climbing one flight of stairs (NYHA II); no orthopnoea; ankles improved on furosemide',
        quote: '"I\'m a lot better than I was — the water tablet really helped my ankles. I still get a bit breathless on the stairs but I can manage." – "I can sleep flat now — couldn\'t before."',
      },
    ],
    pastMedicalHistory: [
      { label: 'Heart failure with reduced ejection fraction (EF 35%) — new diagnosis 6 weeks ago', quote: '"The heart failure — they said my ejection fraction was 35 percent."' },
      { label: 'Type 2 diabetes — on metformin; HbA1c 58 mmol/mol', quote: '"I have diabetes — I\'m on metformin. My sugar levels are reasonably controlled."' },
      { label: 'No asthma or COPD', quote: '"No chest problems — never had asthma or anything like that."' },
      { label: 'No previous MI or angina', quote: '"No heart attacks before this, no."' },
    ],
    drugHistory: [
      { label: 'Bisoprolol 1.25 mg OD (new — not yet started)', quote: '"The bisoprolol is the new one I haven\'t taken yet."' },
      { label: 'Ramipril 2.5 mg OD (started 4 weeks ago; tolerating well)', quote: '"Ramipril — I\'ve been taking that for about 4 weeks. No problems so far."' },
      { label: 'Furosemide 40 mg OD', quote: '"The water tablet — 40 mg. That\'s been brilliant for the swelling."' },
      { label: 'Metformin 1 g BD (type 2 diabetes)', quote: '"Metformin twice a day for the diabetes."' },
      { label: 'No known drug allergies', quote: '"No allergies."' },
    ],
    familyHistory: [
      { label: 'Father — died of a heart attack at age 58', quote: '"My dad had a heart attack at 58 — that\'s what got me worried when I was admitted."' },
      { label: 'No family history of asthma or respiratory conditions', quote: '"No one in my family with asthma, no."' },
    ],
    socialHistory: [
      { label: 'Retired bus driver; lives with wife; relatively sedentary since retirement', quote: '"I retired two years ago — I used to walk a lot with the job but I\'ve been much more sedentary since. My wife is very supportive."' },
      { label: 'Non-smoker (quit 20 years ago; 20 pack-year history)', quote: '"I gave up smoking 20 years ago. I smoked for about 20 years before that."' },
      { label: 'Alcohol: 10 units per week (a few beers at weekends)', quote: '"A couple of beers at the weekend — about 10 units a week. Not every day."' },
    ],
    importantNegatives: [
      'No asthma or wheeze ("No — I\'ve never had any breathing problems like that.")',
      'No bradycardia symptoms currently ("My pulse seems fine — I don\'t feel my heart going slowly or anything.")',
      'No symptoms of hypoglycaemia unawareness ("I can always tell when my sugars are going low — I get shaky.")',
      'Not on verapamil or diltiazem ("No, I don\'t take any of those.")',
      'No erectile dysfunction at baseline ("That hasn\'t been a problem for me so far.")',
    ],
    ice: {
      ideas: '"I think it\'s supposed to help my heart — but the hospital doctor said my heart rate might slow down and that worries me."',
      concerns: '"I\'m worried it\'s going to make me feel exhausted. I was already tired before and I don\'t want to feel worse." – "And I read online it can cause problems with diabetes — with low blood sugars."',
      expectations: '"I just want to understand what this tablet does and whether it\'s safe for me to take alongside everything else."',
    },
    onlyIfDirectlyAsked: [
      'Whether he has checked his own pulse — no; student should explain how to check and what to look for',
      'What to do if he misses a dose — take it as soon as remembered, unless near the next dose; never double up',
      'Whether his wife is aware of his medications — yes, she knows; has a list at home',
    ],
    behaviourNotes: [
      'Polite and engaged but clearly anxious about starting a new tablet; has been putting off taking it since it was prescribed',
      'Responds well to clear, structured explanations with real-world analogies (e.g. "the heart is working too hard, bisoprolol makes it work more efficiently")',
      'Asks "Can I just stop taking it if it makes me feel bad?" — student MUST explain that bisoprolol must never be stopped abruptly, especially in heart failure; rebound worsening of heart failure, risk of arrhythmia; taper under medical supervision',
      'Asks "Will it affect my diabetes and make me miss a low blood sugar?" — student should explain bisoprolol masks tachycardia from hypoglycaemia but NOT sweating; advise monitoring glucose more frequently when starting',
      'Asks "Will it make me impotent?" — student should acknowledge erectile dysfunction is a known side effect (approximately 5–10%); not inevitable; should report if it occurs as dose adjustment or switch possible',
      'Asks "My resting heart rate is about 72 — is that OK?" — student should explain this is fine to start; target heart rate in HFrEF is 60–70 bpm; they will increase the dose slowly over weeks',
      'If student does not mention not stopping abruptly, ask "My friend told me beta-blockers are dangerous to stop — is that true?"',
    ],
  },
  markScheme: [
    {
      domain: 'Opening the consultation',
      items: [
        { description: 'Introduces themselves; confirms patient identity', marks: 1 },
        { description: 'Uses an open question to explore what Mr Okafor already knows about bisoprolol and his main concerns', marks: 1 },
      ],
    },
    {
      domain: 'Exploring baseline understanding',
      items: [
        { description: 'Establishes that bisoprolol has been prescribed for heart failure (not just hypertension); checks what the cardiology team has already explained', marks: 1 },
        { description: 'Confirms current medications including ramipril and furosemide — checks for verapamil or diltiazem (contraindicated with beta-blockers)', marks: 1 },
      ],
    },
    {
      domain: 'Explaining the indication',
      items: [
        { description: 'Explains that bisoprolol is a beta-blocker that selectively blocks adrenaline receptors in the heart, reducing heart rate and cardiac workload', marks: 1 },
        { description: 'Explains the evidence base for bisoprolol in HFrEF — reduces mortality, prevents hospitalisation, and allows the heart to remodel over time; starts at a low dose and is titrated upward', marks: 2 },
      ],
    },
    {
      domain: 'Dosing and administration',
      items: [
        { description: 'Explains dosing: starting dose 1.25 mg once daily; taken at the same time each day; dose will be doubled every 2 weeks under medical supervision up to target dose (up to 10 mg)', marks: 1 },
        { description: 'Advises never to stop bisoprolol abruptly — risk of rebound worsening of heart failure, arrhythmia, and angina; always taper under medical supervision', marks: 2 },
      ],
    },
    {
      domain: 'Common side effects',
      items: [
        { description: 'Explains common side effects: fatigue (often improves after a few weeks), cold hands and feet (peripheral vasoconstriction), bradycardia, sleep disturbance', marks: 1 },
        { description: 'Addresses erectile dysfunction as a known side effect — advises reporting it; not inevitable; may improve with dose reduction or switch', marks: 1 },
      ],
    },
    {
      domain: 'Serious side effects and safety advice',
      items: [
        { description: 'Explains that bisoprolol is contraindicated in asthma and should be used with caution in COPD; confirms Mr Okafor has no respiratory history', marks: 1 },
        { description: 'Advises Mr Okafor to seek urgent review if resting heart rate falls below 50 bpm, he develops significant breathlessness at rest, or has palpitations suggesting arrhythmia', marks: 1 },
      ],
    },
    {
      domain: 'Monitoring',
      items: [
        { description: 'Explains that resting heart rate and blood pressure will be monitored at each up-titration visit; target resting HR 60–70 bpm in HFrEF', marks: 1 },
        { description: 'Advises Mr Okafor how to check his own pulse; explains that his GP will arrange regular reviews during titration', marks: 1 },
      ],
    },
    {
      domain: 'Drug interactions',
      items: [
        { description: 'Warns specifically about verapamil and diltiazem — profound bradycardia and heart block if combined; advises informing any prescriber he is on bisoprolol', marks: 1 },
        { description: 'Addresses the diabetes interaction: bisoprolol may mask tachycardia associated with hypoglycaemia but sweating is preserved; advises more frequent glucose monitoring when starting', marks: 2 },
      ],
    },
    {
      domain: 'ICE and addressing concerns',
      items: [
        { description: 'Explores Mr Okafor\'s concerns about fatigue and diabetes; addresses them with specific, accurate information rather than generic reassurance', marks: 1 },
      ],
    },
    {
      domain: 'Closing and safety-netting',
      items: [
        { description: 'Summarises key points: start tonight, never stop abruptly, monitor pulse, attend titration reviews, report any worsening breathlessness', marks: 1 },
        { description: 'Provides a clear plan for follow-up: GP review in 2 weeks to check heart rate and symptoms; explains further dose increases over subsequent weeks', marks: 1 },
      ],
    },
    {
      domain: 'Key communication skills',
      items: [
        { description: 'Active listening — acknowledges Mr Okafor\'s anxiety about starting the tablet before launching into explanation', marks: 1 },
        { description: 'Summarising and signposting — uses clear, jargon-free language and checks understanding throughout', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Mr Okafor is a 64-year-old retired bus driver with newly diagnosed HFrEF (EF 35%) who has been started on bisoprolol 1.25 mg OD as part of guideline-directed medical therapy alongside ramipril and furosemide',
    'Bisoprolol was explained as a selective beta-1 blocker that reduces heart rate and cardiac workload; its evidence base in HFrEF (CIBIS-II) was cited — reduces all-cause mortality and hospitalisation',
    'Dosing plan outlined: start 1.25 mg OD, titrated every 2 weeks up to 10 mg; titration guided by resting HR (target 60–70 bpm) and symptom response',
    'Key safety points covered: must never be stopped abruptly (rebound HF decompensation, arrhythmia risk); avoid in asthma; report resting HR <50 bpm',
    'Diabetes interaction addressed: bisoprolol masks tachycardia from hypoglycaemia but not sweating; advised to increase blood glucose monitoring frequency when initiating',
    'Erectile dysfunction acknowledged as a recognised but not inevitable side effect — patient encouraged to report it',
    'Follow-up: GP review in 2 weeks for HR and BP check and dose up-titration; patient knows how to check his own pulse and when to seek urgent review',
  ],
  vivaQuestions: [
    {
      question: 'What is the evidence base for beta-blockers in heart failure with reduced ejection fraction?',
      keyPoints: [
        'CIBIS-II (1999): bisoprolol vs. placebo in HFrEF — 34% relative risk reduction in all-cause mortality; trial stopped early due to clear benefit',
        'MERIT-HF (1999): metoprolol CR/XL — 34% reduction in all-cause mortality in HFrEF (NYHA II–IV)',
        'COPERNICUS (2001): carvedilol in severe HFrEF (EF <25%) — 35% reduction in mortality',
        'Only three beta-blockers are licensed for HFrEF in the UK: bisoprolol, carvedilol, and metoprolol succinate (not atenolol)',
        'Mechanism of benefit: reverses adverse cardiac remodelling, reduces ventricular dilation, and decreases sudden cardiac death risk from arrhythmia',
        'Must be initiated when patient is euvolaemic — do not start during acute decompensation; start at lowest dose and up-titrate slowly',
      ],
      source: 'NICE NG106 (Chronic heart failure in adults, 2018); CIBIS-II Investigators, Lancet 1999',
    },
    {
      question: 'Why are beta-blockers contraindicated in asthma and what is the risk in COPD?',
      keyPoints: [
        'Beta-2 receptors in bronchial smooth muscle mediate bronchodilation; blockade causes bronchoconstriction and can precipitate fatal bronchospasm in asthma',
        'Non-selective beta-blockers (e.g. propranolol, carvedilol) block both beta-1 (cardiac) and beta-2 (bronchial) receptors — highest risk in asthma',
        'Cardioselective beta-blockers (bisoprolol, atenolol, metoprolol) primarily block beta-1 receptors; relative selectivity is lost at higher doses',
        'Bisoprolol is contraindicated in reversible airways obstruction (asthma); use with caution in COPD — weigh benefit vs. risk, especially in HFrEF where benefit is substantial',
        'NICE NG106: if bisoprolol absolutely needed in COPD with HFrEF, start at very low dose with respiratory monitoring',
      ],
      source: 'BNF — Beta-adrenoceptor blocking drugs; NICE NG106 (2018)',
    },
    {
      question: 'What are the target doses and titration schedules for beta-blockers in HFrEF?',
      keyPoints: [
        'Bisoprolol: start 1.25 mg OD; double every 2 weeks as tolerated; target dose 10 mg OD',
        'Carvedilol: start 3.125 mg BD; double every 2 weeks; target dose 25 mg BD (or 50 mg BD if >85 kg)',
        'Metoprolol succinate: start 12.5–25 mg OD; target dose 200 mg OD',
        'Up-titration guided by: resting HR (minimum 50 bpm), blood pressure (SBP >90 mmHg), absence of fluid retention worsening, and symptom tolerance',
        'Fatigue is common in the first 2–4 weeks and should not prompt discontinuation; explain to patients that this usually improves',
        'If decompensation occurs during titration: do not stop abruptly — halve the dose; review and restart titration once stable',
      ],
      source: 'NICE NG106 (Chronic heart failure in adults, 2018); ESC Heart Failure Guidelines 2021',
    },
    {
      question: 'How do beta-blockers interact with diabetes management and what advice should be given?',
      keyPoints: [
        'Beta-blockers attenuate adrenergic symptoms of hypoglycaemia — particularly tachycardia, palpitations, and tremor, which are beta-2 mediated',
        'Sweating (cholinergically mediated) is preserved — patients should be counselled to use this as their main warning sign',
        'Masking effect means patients may not recognise hypoglycaemia until blood glucose is very low — increased risk of severe events',
        'Cardioselective agents (bisoprolol) cause less metabolic interference than non-selective agents, but masking still occurs',
        'Advise patients on insulin or sulphonylureas to increase glucose monitoring frequency when initiating a beta-blocker',
        'Beta-blockers also impair glycogenolysis (hepatic glucose release in response to hypoglycaemia) — prolonging recovery from hypoglycaemia',
      ],
      source: 'BNF — Beta-adrenoceptor blocking drugs; Diabetes UK clinical guidance (2022)',
    },
  ],
};

const ccbCounselling: MockExamStation = {
  id: 'gp_ccb_counselling',
  title: 'GP Consultation — Calcium Channel Blocker Counselling (Amlodipine)',
  diagnosis: 'New prescription counselling — amlodipine for hypertension (first-line, age >55)',
  specialtyId: 'general-practice',
  candidateBrief: {
    setting: 'You are a GP registrar in a GP surgery.',
    scenario:
      'Mrs Adaeze Nwosu, 61, has been diagnosed with stage 2 hypertension (clinic BP 156/94 mmHg confirmed on ABPM) at her last appointment. She has no previous antihypertensive treatment. She is today collecting her first prescription for amlodipine 5 mg once daily.',
    tasks: [
      'Counsel Mrs Nwosu on her new amlodipine prescription',
      'Address her questions and ensure she understands when to seek review',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'Adaeze Nwosu',
    age: 61,
    occupation: 'Secondary school teacher',
    openingLine:
      '"I\'ve got the prescription — but I want to understand what I\'m taking before I start it. I\'ve never been on blood pressure tablets before." [curious and organised; came with written questions]',
    historyOfPresentingComplaint: [
      {
        label: 'Hypertension confirmed on ABPM — average daytime reading 156/94 mmHg; no symptoms of hypertension',
        quote: '"The monitor I wore for 24 hours confirmed it was high. I didn\'t really have any symptoms — the nurse found it at a routine check." – "I\'ve had a few headaches but I\'d put those down to stress at work."',
      },
      {
        label: 'No target organ damage documented — no chest pain, no visual changes, no symptoms of cardiac failure',
        quote: '"No chest pain. My vision is fine. No swollen ankles before." – "I feel well in myself, which is why this is a bit of a shock."',
      },
      {
        label: 'Lifestyle modifications discussed at last appointment — has reduced salt intake and is trying to walk 30 minutes daily',
        quote: '"I\'ve been trying to eat less salt and walk more since last time. I\'ve managed about 20 to 30 minutes most days." – "The doctor said to try lifestyle first and then come back."',
      },
    ],
    pastMedicalHistory: [
      { label: 'Type 2 diabetes — HbA1c 52 mmol/mol; on metformin 1 g BD', quote: '"I have diabetes — well-controlled on metformin. My last test was fine."' },
      { label: 'No asthma or COPD', quote: '"No chest or lung problems."' },
      { label: 'No previous cardiovascular events', quote: '"No heart attacks, no strokes."' },
      { label: 'No known renal disease', quote: '"Kidneys are fine as far as I know."' },
    ],
    drugHistory: [
      { label: 'Amlodipine 5 mg OD (new)', quote: '"This is the new one — haven\'t started it yet."' },
      { label: 'Metformin 1 g BD', quote: '"Metformin twice a day for the diabetes."' },
      { label: 'No known drug allergies', quote: '"No allergies."' },
    ],
    familyHistory: [
      { label: 'Mother — hypertension and stroke at age 71', quote: '"My mum had high blood pressure and then had a stroke at 71. That\'s part of why I\'m taking this seriously."' },
      { label: 'Father — type 2 diabetes; died of heart failure in his 70s', quote: '"Dad had diabetes and died of heart problems."' },
    ],
    socialHistory: [
      { label: 'Secondary school teacher; busy job; significant work-related stress', quote: '"Teaching — it\'s stressful. I sometimes wonder if that\'s contributing to my blood pressure." – "I\'m a head of year as well, so there\'s a lot of responsibility."' },
      { label: 'Non-smoker; alcohol 6 units/week', quote: '"I don\'t smoke. I have a glass of wine at weekends — maybe 6 units a week."' },
      { label: 'Lives with husband and adult son; active social life', quote: '"I live with my husband. My son is 23 and still at home."' },
    ],
    importantNegatives: [
      'No symptoms of angina or chest pain ("No — nothing like that.")',
      'No Raynaud\'s phenomenon ("My fingers don\'t change colour in the cold.")',
      'No pre-existing ankle swelling ("My ankles are completely normal at the moment.")',
      'Not on any CYP3A4 inhibitors ("No antibiotics or antifungal tablets currently.")',
      'Does not drink grapefruit juice ("I\'m not a fan of grapefruit.")',
    ],
    ice: {
      ideas: '"I know my blood pressure needs treatment — I saw what happened to my mother. I accept I need to take something." – "I just want to know how it works."',
      concerns: '"I\'ve heard you can get swollen ankles with these tablets — I\'m on my feet all day teaching and I don\'t want to be in discomfort." – "Also, will it affect my diabetes?"',
      expectations: '"I\'d like to understand the side effects and know whether this tablet will actually work for me."',
    },
    onlyIfDirectlyAsked: [
      'Whether she has a home blood pressure monitor — no, but willing to get one; student should encourage this',
      'Whether she can take it at a different time of day — yes, amlodipine can be taken any time; consistency is key',
      'Whether she needs to avoid any foods — student should specifically mention grapefruit juice (CYP3A4 inhibition raises amlodipine levels)',
    ],
    behaviourNotes: [
      'Organised and engaged; came with a written list of questions — appreciates a structured, comprehensive explanation',
      'Specifically worried about ankle swelling as she is on her feet all day teaching; student must explain this is due to peripheral vasodilation (not fluid overload) and is common but usually mild',
      'Asks "Will this affect my blood sugar levels?" — student should reassure that CCBs do not mask hypoglycaemia and have minimal direct effect on glucose metabolism (unlike beta-blockers)',
      'Asks "Can I drink grapefruit juice?" — student must advise avoiding grapefruit and grapefruit juice (CYP3A4 inhibition increases amlodipine plasma levels)',
      'Asks "Will I need this tablet forever?" — student should explain hypertension is usually lifelong; may be able to reduce dose if lifestyle measures show benefit; should not stop without medical advice',
      'Asks "My ankles are swelling slightly after 3 days — should I be worried?" — student should explain pitting oedema from vasodilation is expected; elevate legs; if severe, the dose can be reduced or a different agent used; it does NOT indicate heart failure',
    ],
  },
  markScheme: [
    {
      domain: 'Opening the consultation',
      items: [
        { description: 'Introduces themselves; confirms patient identity', marks: 1 },
        { description: 'Uses an open question to elicit what Mrs Nwosu already knows and what her main concerns are', marks: 1 },
      ],
    },
    {
      domain: 'Exploring baseline understanding',
      items: [
        { description: 'Checks Mrs Nwosu\'s understanding of why she has been started on amlodipine — confirms hypertension diagnosis and ABPM results', marks: 1 },
        { description: 'Acknowledges her relevant family history (maternal stroke) and links it to the rationale for treatment', marks: 1 },
      ],
    },
    {
      domain: 'Explaining the indication',
      items: [
        { description: 'Explains amlodipine as a first-line antihypertensive for patients over 55 or of Afro-Caribbean origin per NICE CG127; explains it widens blood vessels by blocking calcium entry into vessel walls', marks: 2 },
        { description: 'States that the goal is to reduce the risk of stroke, MI, and end-organ damage — links to her mother\'s stroke', marks: 1 },
      ],
    },
    {
      domain: 'Dosing and administration',
      items: [
        { description: 'Explains dose: 5 mg OD; can be taken at any time of day but consistently; can be increased to 10 mg if BP inadequately controlled at review', marks: 1 },
        { description: 'Advises not to stop abruptly without medical advice; no dose adjustment needed with food', marks: 1 },
      ],
    },
    {
      domain: 'Common side effects',
      items: [
        { description: 'Explains ankle swelling (pitting oedema) — due to peripheral vasodilation, NOT fluid overload; common; advise leg elevation; not a sign of heart failure', marks: 2 },
        { description: 'Explains flushing, headache (common in first few weeks, usually settles), and palpitations from reflex tachycardia (more common with nifedipine)', marks: 1 },
      ],
    },
    {
      domain: 'Serious side effects and safety advice',
      items: [
        { description: 'Mentions gingival (gum) hyperplasia as a rare but recognised side effect — advise good dental hygiene and inform dentist of the medication', marks: 1 },
        { description: 'Advises seeking urgent review if BP becomes very high (symptomatic), or if severe chest pain or palpitations develop', marks: 1 },
      ],
    },
    {
      domain: 'Monitoring',
      items: [
        { description: 'Explains that BP will be reviewed at 4 weeks to assess response and decide whether to increase dose or add a second agent (ACE inhibitor)', marks: 1 },
        { description: 'Advises or encourages home blood pressure monitoring with a validated device; explains target BP <140/90 mmHg in clinic', marks: 1 },
      ],
    },
    {
      domain: 'Drug interactions and things to avoid',
      items: [
        { description: 'Advises avoiding grapefruit and grapefruit juice — inhibits CYP3A4, raising amlodipine plasma levels and increasing side effect risk', marks: 2 },
        { description: 'Explains that amlodipine is safe with metformin; does NOT mask hypoglycaemia (unlike beta-blockers); no direct effect on blood glucose', marks: 1 },
      ],
    },
    {
      domain: 'ICE and addressing concerns',
      items: [
        { description: 'Specifically addresses concern about ankle swelling given her occupation — explains why it occurs and practical management (leg elevation, compression stockings if needed)', marks: 1 },
      ],
    },
    {
      domain: 'Closing and safety-netting',
      items: [
        { description: 'Summarises key points: take daily, avoid grapefruit, expect possible ankle swelling and early headaches, attend 4-week review', marks: 1 },
        { description: 'Safety-nets: advises seeking urgent care if severe headache with visual disturbance, chest pain, or BP symptoms develop', marks: 1 },
      ],
    },
    {
      domain: 'Key communication skills',
      items: [
        { description: 'Active listening — acknowledges Mrs Nwosu\'s organised approach and uses her written questions as a framework for the consultation', marks: 1 },
        { description: 'Summarising and signposting — checks understanding at key points; invites further questions', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Mrs Nwosu is a 61-year-old teacher with newly confirmed stage 2 hypertension (ABPM average 156/94 mmHg) and type 2 diabetes, commenced on amlodipine 5 mg OD as first-line antihypertensive per NICE CG127',
    'Amlodipine explained as a dihydropyridine calcium channel blocker causing peripheral vasodilation; appropriate first-line choice for age >55; reduces risk of stroke and MI (key motivator given her mother\'s stroke at 71)',
    'Common side effects discussed: peripheral pitting oedema (from vasodilation — not fluid overload), early flushing and headache (usually settles), gingival hyperplasia (rare); ankle swelling addressed specifically given her teaching role',
    'Grapefruit juice interaction highlighted — CYP3A4 inhibition raises amlodipine levels; patient advised to avoid',
    'Diabetes safety confirmed: amlodipine does not mask hypoglycaemia and has no significant direct effect on glucose metabolism — safe alongside metformin',
    'Monitoring plan: 4-week BP review in surgery; target clinic BP <140/90 mmHg; dose escalation to 10 mg or addition of ACE inhibitor if target not met; home BP monitoring encouraged',
    'Patient safety-netted on symptoms warranting urgent review; advised not to stop amlodipine without medical advice',
  ],
  vivaQuestions: [
    {
      question: 'According to NICE CG127, what is the recommended first-line antihypertensive treatment and how does patient characteristics influence the choice?',
      keyPoints: [
        'NICE CG127 step 1: CCB (e.g. amlodipine) if aged >55 years or Afro-Caribbean at any age; ACE inhibitor (or ARB) if aged <55 and not Afro-Caribbean',
        'Step 2: add the other agent from step 1 (ACE inhibitor/ARB + CCB)',
        'Step 3: add thiazide-like diuretic (e.g. indapamide or chlortalidone) — not bendroflumethiazide (less evidence for cardiovascular protection)',
        'Step 4 (resistant hypertension — BP still elevated on 3 agents): add low-dose spironolactone (if K <4.5 mmol/L) or alpha/beta-blocker; seek specialist advice',
        'Target BP in clinic: <140/90 mmHg for most adults; <130/80 in T2DM; <150/90 in over 80s',
        'ACE inhibitors and ARBs should not be combined (dual RAAS blockade — risk of hyperkalaemia and renal impairment)',
      ],
      source: 'NICE CG127 (Hypertension in adults, 2019)',
    },
    {
      question: 'Why do calcium channel blockers cause ankle oedema and how should this be managed?',
      keyPoints: [
        'Dihydropyridine CCBs cause precapillary arteriolar vasodilation but do NOT vasodilate postcapillary venules proportionally',
        'The resulting increase in capillary hydrostatic pressure causes transudation of fluid into the interstitium — predominantly dependent pitting oedema in the lower limbs',
        'The oedema is NOT due to sodium retention or fluid overload; diuretics are therefore ineffective and unhelpful',
        'Management: leg elevation, compression stockings; dose reduction or switch to non-DHP agent (e.g. diltiazem if also indicated for rate control) may be required',
        'Adding an ACE inhibitor can reduce CCB-induced oedema — venodilation from ACE inhibitor partially corrects the precapillary/postcapillary imbalance',
        'Dose-dependent — more common at 10 mg than 5 mg; consider keeping at 5 mg and adding a second agent if oedema limiting',
      ],
      source: 'BNF — Calcium-channel blockers; NICE CG127 (2019)',
    },
    {
      question: 'What are the differences between dihydropyridine and non-dihydropyridine calcium channel blockers?',
      keyPoints: [
        'Dihydropyridines (amlodipine, nifedipine, felodipine): selective for peripheral vascular smooth muscle; cause vasodilation; minimal direct cardiac effect; first-line for hypertension and Raynaud\'s',
        'Non-dihydropyridines (verapamil, diltiazem): also block cardiac calcium channels — reduce heart rate and AV nodal conduction; used for rate control in AF and angina',
        'Verapamil and diltiazem must NOT be combined with beta-blockers — profound bradycardia, AV block, and cardiogenic shock risk',
        'Verapamil also causes significant constipation (a common reason for poor tolerance); avoid in heart failure with reduced EF',
        'Nifedipine short-acting formulations cause pronounced reflex tachycardia and are not recommended for hypertension — use MR preparation only',
        'Amlodipine has the longest half-life (~35–50 hours) of the dihydropyridines — once-daily dosing; gentle onset reduces reflex tachycardia',
      ],
      source: 'BNF — Calcium-channel blockers; OHCM 10th ed., Ch. 6',
    },
    {
      question: 'What is the significance of the grapefruit juice interaction with calcium channel blockers?',
      keyPoints: [
        'Grapefruit and grapefruit juice contain furanocoumarins that irreversibly inhibit intestinal CYP3A4 — a key enzyme in first-pass metabolism of many drugs',
        'CCBs most affected: felodipine (greatest effect — plasma levels may increase up to 3-fold), nifedipine, and amlodipine (less so, due to high bioavailability)',
        'Inhibition is irreversible — a single glass of grapefruit juice can inhibit CYP3A4 for up to 72 hours; patients should avoid all grapefruit-containing products',
        'Clinical effect: increased plasma CCB levels → enhanced vasodilation → lower BP, flushing, headache, increased palpitation risk',
        'Other important CYP3A4 inhibitors relevant to CCBs: macrolide antibiotics (clarithromycin, erythromycin), azole antifungals (fluconazole, itraconazole), HIV protease inhibitors',
        'Advise all patients on CCBs to avoid grapefruit; the interaction is often not labelled on dispensing labels — specific counselling is required',
      ],
      source: 'BNF — Calcium-channel blockers; Stockley\'s Drug Interactions 12th ed.',
    },
  ],
};

const statinCounselling: MockExamStation = {
  id: 'gp_statin_counselling',
  title: 'GP Consultation — Statin Counselling (Atorvastatin)',
  diagnosis: 'New prescription counselling — atorvastatin 20 mg for primary prevention (QRISK3 ≥10%)',
  specialtyId: 'general-practice',
  candidateBrief: {
    setting: 'You are a GP registrar in a GP surgery.',
    scenario:
      'Mr James Whitfield, 58, a finance manager, has attended following a recent cardiovascular risk assessment. His QRISK3 score is 14%. Blood results show: total cholesterol 6.2 mmol/L, LDL 4.1 mmol/L, HDL 1.1 mmol/L, triglycerides 2.3 mmol/L; LFTs and CK normal. He has been advised to start atorvastatin 20 mg once daily for primary prevention.',
    tasks: [
      'Counsel Mr Whitfield on his new atorvastatin prescription',
      'Address his concerns and explain what monitoring is required',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'James Whitfield',
    age: 58,
    occupation: 'Finance manager',
    openingLine:
      '"I got a letter saying my cholesterol is high and I need to start a statin. I\'ve done a bit of reading online and I\'m not sure I want to take it — I\'ve read some worrying things." [sceptical and analytical; wants evidence-based answers]',
    historyOfPresentingComplaint: [
      {
        label: 'Elevated total cholesterol 6.2 mmol/L — incidental finding at NHS health check; no symptoms of cardiovascular disease',
        quote: '"The nurse did an NHS health check — I\'d never had my cholesterol tested properly before. It came back high, so I came in for a full blood test." – "I feel absolutely fine — no chest pain, nothing like that."',
      },
      {
        label: 'QRISK3 score 14% — higher due to hypertension, smoking history, and elevated cholesterol',
        quote: '"The doctor said my 10-year risk of a heart attack or stroke is about 14% — I wasn\'t sure if that was high or not." – "It seems like a lot to me."',
      },
      {
        label: 'Has made some lifestyle changes since results — reduced saturated fat; increased exercise; considering stopping smoking',
        quote: '"I\'ve been eating less cheese and butter since the letter. I\'m at the gym twice a week now." – "I\'ve been meaning to stop smoking for years. Maybe this is the push I needed."',
      },
    ],
    pastMedicalHistory: [
      { label: 'Hypertension — on ramipril 5 mg OD; BP well controlled', quote: '"High blood pressure — I take ramipril 5 mg. The last reading was 132/80."' },
      { label: 'No diabetes', quote: '"No diabetes."' },
      { label: 'No previous liver disease or hepatitis', quote: '"No liver problems."' },
      { label: 'No previous muscle problems or myopathy', quote: '"No muscle problems — I go to the gym and I\'ve been fine."' },
    ],
    drugHistory: [
      { label: 'Ramipril 5 mg OD (hypertension)', quote: '"Ramipril 5 mg once a day."' },
      { label: 'Atorvastatin 20 mg OD (new — not yet started)', quote: '"I haven\'t started this yet — that\'s why I\'m here."' },
      { label: 'No NSAIDs regularly', quote: '"I take ibuprofen occasionally for headaches but not regularly."' },
      { label: 'No known drug allergies', quote: '"No allergies."' },
    ],
    familyHistory: [
      { label: 'Father — MI at age 61; currently on statins himself', quote: '"My dad had a heart attack at 61 — he\'s been on statins ever since. He\'s in his 80s and still going, which is reassuring." – "That\'s partly why I\'m taking this seriously."' },
      { label: 'No known familial hypercholesterolaemia in family', quote: '"No one was told they had a genetic cholesterol problem as far as I know."' },
    ],
    socialHistory: [
      { label: 'Smoker — 10 cigarettes/day; 20 pack-year history; wants to quit', quote: '"I smoke about 10 a day — I\'ve been doing it for 20 years. I do want to quit." – "I know it\'s the elephant in the room."' },
      { label: 'Alcohol: 18 units/week (wine most evenings, heavier at weekends)', quote: '"I\'d say about 18 units a week — a glass or two of wine most evenings. More at weekends." – "I know that\'s over the recommended limit."' },
      { label: 'Finance manager; sedentary desk job; stress at work; recently joined gym', quote: '"I sit at a desk all day. It\'s a stressful job. I\'ve just joined the gym — twice a week."' },
    ],
    importantNegatives: [
      'No muscle pain, cramps, or weakness at baseline ("I\'m fine at the gym — no muscle problems.")',
      'No jaundice or known liver disease ("No yellowing, no liver problems.")',
      'No hypothyroid symptoms ("No — I\'m not unusually tired or cold.")',
      'Does not eat grapefruit regularly — though relevant only for simvastatin (atorvastatin less affected at standard doses) ("I\'m not a big grapefruit fan.")',
      'No macrolide antibiotics or azole antifungals currently ("No antibiotics.")',
    ],
    ice: {
      ideas: '"I know cholesterol causes heart attacks — I\'ve seen it in my dad. I understand why you\'re suggesting this." – "But I\'ve read that statins cause muscle damage and memory problems. Are those things true?"',
      concerns: '"My main concern is muscle damage — I\'ve started going to the gym and I don\'t want to wreck that." – "I also read that statins can damage your liver. My alcohol intake is probably higher than it should be and I\'m worried about that."',
      expectations: '"I want to know the actual evidence — not just \'you should take it\'. If the risks are real, I want to weigh them up properly."',
    },
    onlyIfDirectlyAsked: [
      'Whether he has had TFTs checked — no; student should mention that hypothyroidism increases myopathy risk and TFTs should be checked before starting a statin',
      'Whether he could reduce the dose and still get benefit — yes; atorvastatin 20 mg is the recommended primary prevention dose; lower doses have less LDL reduction',
      'How much his cholesterol needs to come down — student should explain: aim for >40% reduction in LDL at 3-month recheck; if not achieved on 20 mg, dose increase or referral considered',
    ],
    behaviourNotes: [
      'Analytical and evidence-seeking; sceptical of statins due to online reading; will respond well to specific numbers and evidence rather than reassurance',
      'Asks "Is the muscle damage risk real?" — student should explain: myalgia (muscle aches without raised CK) in 5–10% — usually mild; myopathy (CK raised) rare; rhabdomyolysis very rare (<1 in 10,000); if CK >5× ULN, stop and review',
      'Asks "What about liver damage?" — student should explain: clinically significant hepatotoxicity is rare; LFTs checked before starting and at 3 months; if ALT >3× ULN, consider stopping; his alcohol intake is relevant — discuss reducing alcohol',
      'Asks "I\'ve read statins cause memory loss — is that true?" — student should explain: some case reports, but large RCTs (JUPITER, HPS) show no increased dementia risk; some studies suggest statins may be protective; current evidence does not support stopping statins for cognitive concerns',
      'Asks "Can I just try lifestyle changes for 3 months?" — student should explain that lifestyle changes are important (already underway) but are unlikely to reduce his 10-year risk sufficiently given the QRISK3 of 14%; statins have the strongest evidence for risk reduction at this level',
      'Does NOT raise the smoking issue himself — student should bring it up as the single most important modifiable risk factor',
    ],
  },
  markScheme: [
    {
      domain: 'Opening the consultation',
      items: [
        { description: 'Introduces themselves; confirms patient identity', marks: 1 },
        { description: 'Uses open question to explore Mr Whitfield\'s understanding of his results and his specific concerns about statins', marks: 1 },
      ],
    },
    {
      domain: 'Exploring baseline understanding',
      items: [
        { description: 'Checks what Mr Whitfield understands about cholesterol, cardiovascular risk, and his QRISK3 score — explains that 14% means approximately 14 in 100 people with his risk profile will have a heart attack or stroke in the next 10 years', marks: 1 },
        { description: 'Acknowledges his legitimate concerns about statin side effects and signals an evidence-based response', marks: 1 },
      ],
    },
    {
      domain: 'Explaining the indication',
      items: [
        { description: 'Explains the mechanism: HMG-CoA reductase inhibitor that reduces hepatic cholesterol synthesis, upregulates LDL receptors, lowers LDL cholesterol by approximately 40–50% at atorvastatin 20 mg', marks: 1 },
        { description: 'States the indication: NICE CG181 recommends atorvastatin 20 mg for primary prevention in patients with QRISK3 ≥10%; reduces risk of MI and stroke by approximately 25–35%', marks: 2 },
      ],
    },
    {
      domain: 'Dosing and administration',
      items: [
        { description: 'Explains: atorvastatin 20 mg once daily; can be taken at any time of day (unlike simvastatin, which must be taken at night); ideally in the evening to coincide with peak cholesterol synthesis', marks: 1 },
        { description: 'Advises that dose may be increased to 40–80 mg if target LDL reduction not achieved at 3-month recheck', marks: 1 },
      ],
    },
    {
      domain: 'Common side effects',
      items: [
        { description: 'Explains myalgia (muscle aches without CK elevation) — occurs in approximately 5–10%; usually mild; advise to report new unexplained muscle pain', marks: 2 },
        { description: 'Explains GI side effects (nausea, constipation, diarrhoea) — common and usually resolve; headache also reported', marks: 1 },
      ],
    },
    {
      domain: 'Serious side effects and safety advice',
      items: [
        { description: 'Explains myopathy and rhabdomyolysis — rare; stop atorvastatin and check CK if new significant muscle pain or weakness develops; seek urgent review if dark urine (myoglobinuria)', marks: 2 },
        { description: 'Explains hepatotoxicity — rare; LFTs checked at baseline and 3 months; stop if ALT >3× ULN; advises reducing alcohol intake given his 18 units/week', marks: 1 },
      ],
    },
    {
      domain: 'Monitoring',
      items: [
        { description: 'Explains pre-treatment bloods: LFTs and CK at baseline; also TFTs to exclude hypothyroidism (which increases myopathy risk); fasting lipid profile', marks: 1 },
        { description: 'Explains 3-month review: re-check fasting lipid profile — aim for >40% reduction in LDL; re-check LFTs; assess for side effects', marks: 1 },
      ],
    },
    {
      domain: 'Drug interactions',
      items: [
        { description: 'Explains interactions: fibrates increase myopathy risk (avoid or monitor CK); macrolide antibiotics and azole antifungals inhibit CYP3A4 and raise atorvastatin levels — seek advice before starting', marks: 1 },
        { description: 'Addresses the memory loss concern directly: cites evidence that RCTs show no increased dementia risk; current evidence does not support stopping statins for cognitive concerns', marks: 1 },
      ],
    },
    {
      domain: 'ICE and addressing concerns',
      items: [
        { description: 'Addresses muscle damage concern with specific evidence — myalgia common but mild; serious myopathy rare; stop and check CK if concerned', marks: 1 },
        { description: 'Raises smoking as the single most important modifiable risk factor; offers smoking cessation referral or NRT; explains that stopping smoking would reduce his QRISK3 substantially', marks: 2 },
      ],
    },
    {
      domain: 'Closing and safety-netting',
      items: [
        { description: 'Summarises key points: start atorvastatin tonight, report any unexplained muscle pain, attend 3-month review, stop if dark urine and seek urgent review', marks: 1 },
        { description: 'Safety-nets: advises on which symptoms require urgent review (severe muscle pain, dark urine, jaundice)', marks: 1 },
      ],
    },
    {
      domain: 'Key communication skills',
      items: [
        { description: 'Active listening — acknowledges Mr Whitfield\'s analytical approach; validates his research rather than dismissing it, then corrects specific misconceptions with evidence', marks: 1 },
        { description: 'Summarising and signposting — checks understanding; ensures he leaves with a clear written summary of key points', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Mr Whitfield is a 58-year-old smoking finance manager with a QRISK3 score of 14%, elevated total cholesterol 6.2 mmol/L (LDL 4.1), and hypertension on ramipril, for whom atorvastatin 20 mg OD is recommended for primary prevention per NICE CG181',
    'The mechanism was explained: HMG-CoA reductase inhibition reduces hepatic cholesterol synthesis and upregulates LDL receptors, achieving approximately 40% LDL reduction — expected to reduce his 10-year CVD risk from 14% to approximately 9–10%',
    'Side effect concerns were addressed with evidence: myalgia in 5–10% (mild, usually resolves); rhabdomyolysis very rare (<1 in 10,000); no increased dementia risk in large RCTs; hepatotoxicity rare — LFTs to be checked at baseline and 3 months',
    'His alcohol intake of 18 units/week was raised as relevant to hepatic risk — reducing this was recommended alongside starting atorvastatin',
    'Smoking was identified as the most significant modifiable risk factor: stopping 10 cigarettes/day would reduce his QRISK3 more than atorvastatin alone; smoking cessation support offered',
    'Pre-treatment bloods: LFTs, CK, TFTs (hypothyroidism increases myopathy risk), and fasting lipid profile; 3-month recheck of lipid profile and LFTs with target >40% LDL reduction',
    'Mr Whitfield was safety-netted to stop atorvastatin and seek urgent review if dark urine, jaundice, or severe unexplained muscle pain develop',
  ],
  vivaQuestions: [
    {
      question: 'What are the NICE CG181 recommendations for statin prescribing in primary and secondary prevention?',
      keyPoints: [
        'Primary prevention: atorvastatin 20 mg OD for patients with QRISK3 ≥10%; discuss risks and benefits with patient; lifestyle changes for 3 months first only appropriate in lower-risk patients',
        'Secondary prevention (established CVD — MI, stroke, TIA, stable angina, PAD): atorvastatin 80 mg OD as high-intensity statin regardless of baseline cholesterol',
        'Type 2 diabetes: statin recommended even if cholesterol is "normal" due to increased baseline CVD risk',
        'Familial hypercholesterolaemia (FH): higher intensity statin required; Simon Broome criteria used for diagnosis; referral to specialist lipid clinic',
        'Target: aim for >40% reduction in non-HDL cholesterol at 3-month review; if not achieved, check concordance, lifestyle, and consider dose increase or referral',
        'Simvastatin 80 mg is no longer recommended due to increased myopathy risk; simvastatin should not exceed 40 mg without specialist review',
      ],
      source: 'NICE CG181 (Cardiovascular disease: lipid modification, 2014 updated 2023)',
    },
    {
      question: 'What is rhabdomyolysis and how is it diagnosed and managed in the context of statin use?',
      keyPoints: [
        'Rhabdomyolysis: severe muscle fibre breakdown releasing myoglobin into the bloodstream — can cause acute tubular necrosis and acute kidney injury',
        'Symptoms: severe widespread muscle pain and weakness; myoglobinuria (dark brown "cola-coloured" urine); constitutional features (fever, malaise)',
        'CK >10× ULN (or >5× ULN in some guidelines) with symptoms — stop statin immediately; check U&Es and renal function urgently',
        'Management: stop statin; IV fluid resuscitation to prevent renal failure; target urine output >200 mL/hr; monitor renal function closely; consider ITU if oliguria or AKI',
        'Risk factors: high-dose statin, drug interactions (fibrates most important — 10-fold increased risk with combination), hypothyroidism, renal impairment, age >70, ethnicity (higher risk in South Asian populations)',
        'After recovery: may cautiously restart a lower-dose or different statin; rosuvastatin may be better tolerated than atorvastatin in those with prior myopathy',
      ],
      source: 'BNF — Statins; NICE CG181 (2023); Grundy SM et al., JACC 2019',
    },
    {
      question: 'What baseline investigations should be performed before starting a statin and how are abnormal results managed?',
      keyPoints: [
        'Baseline bloods: fasting lipid profile (total cholesterol, LDL, HDL, triglycerides); LFTs; CK; TFTs; HbA1c (statins modestly increase T2DM risk — JUPITER trial found 9% increased new-onset diabetes)',
        'TFTs: hypothyroidism causes secondary hypercholesterolaemia and significantly increases myopathy risk with statins — treat hypothyroidism first, recheck lipids',
        'LFTs: if ALT >3× ULN at baseline, investigate and treat the underlying cause before starting; do not start a statin in active liver disease',
        'CK: if CK >5× ULN at baseline, do not start a statin; investigate the cause first',
        'At 3 months: repeat fasting lipid profile (check >40% LDL reduction); repeat LFTs; assess for side effects',
        'Annual LFT monitoring NOT required routinely if baseline and 3-month LFTs are normal and no symptoms — this is a common misconception',
      ],
      source: 'NICE CG181 (2014 updated 2023); BNF — Statins',
    },
    {
      question: 'How does the mechanism of statins explain both their efficacy and their side effect profile?',
      keyPoints: [
        'HMG-CoA reductase is the rate-limiting step in the mevalonate pathway — inhibition reduces not only cholesterol but also isoprenoid intermediates (geranyl pyrophosphate, farnesyl pyrophosphate)',
        'Reduced isoprenoid synthesis explains pleiotropic effects: anti-inflammatory (reduced NF-κB activation), plaque-stabilising, anti-thrombotic',
        'Myopathy mechanism: reduced CoQ10 (ubiquinol) synthesis — CoQ10 is essential for mitochondrial ATP production in skeletal muscle; reduced levels impair oxidative phosphorylation',
        'Hepatotoxicity: direct inhibition of hepatic cholesterol synthesis; liver is the primary site of action; elevated transaminases reflect hepatocyte stress',
        'New-onset diabetes: reduced isoprenoid-mediated insulin signalling in pancreatic beta-cells; high-intensity statins (atorvastatin 80 mg, rosuvastatin 20 mg) carry higher risk than low-intensity',
        'Half-life matters: atorvastatin and rosuvastatin have long half-lives (>12 hours) — can be taken any time; simvastatin has a short half-life — must be taken at night to coincide with peak cholesterol synthesis',
      ],
      source: 'NICE CG181 (2023); BNF — Statins; Grundy SM et al., JACC 2019',
    },
  ],
};

const inhalerCounselling: MockExamStation = {
  id: 'gp_inhaler_counselling',
  title: 'GP Consultation — Inhaler Counselling (Asthma — MART Therapy)',
  diagnosis: 'Inhaler counselling — step-up to MART therapy (budesonide/formoterol) for uncontrolled asthma',
  specialtyId: 'general-practice',
  candidateBrief: {
    setting: 'You are a GP registrar in a GP surgery.',
    scenario:
      'Sophie Chen, 27, a nurse, has been on salbutamol PRN and beclometasone 200 mcg BD for the past 2 years. She is using her salbutamol reliever more than 3 times per week, has had one course of oral prednisolone in the last year, and attended A&E once. Her asthma has been stepped up: she has been prescribed DuoResp Spiromax (budesonide 160 mcg/formoterol 4.5 mcg DPI) for use as both maintenance and reliever therapy (MART). She has never used a DPI before.',
    tasks: [
      'Counsel Miss Chen on her new inhaler regime and MART therapy',
      'Demonstrate correct DPI technique and ensure she understands the MART regimen',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'Sophie Chen',
    age: 27,
    occupation: 'Nurse (ITU)',
    openingLine:
      '"I\'ve been given this new inhaler — DuoResp. The pharmacist explained a little but I\'m still confused about it. I usually just use my blue inhaler when I\'m wheezy but apparently this one is different." [slightly overwhelmed; concerned about doing it wrong]',
    historyOfPresentingComplaint: [
      {
        label: 'Worsening asthma control — using salbutamol >3 times/week; nocturnal symptoms twice in the last month',
        quote: '"I\'ve been using my blue inhaler most days — sometimes twice a day when it\'s busy on the ward. Last month I woke up a couple of times at night wheezing." – "My brown inhaler — I forget it sometimes, I won\'t lie."',
      },
      {
        label: 'One admission to A&E in the last 12 months — required nebulised salbutamol; discharged same day',
        quote: '"I had a bad episode about 6 months ago and ended up in A&E. I know — I\'m a nurse, it was embarrassing." – "They gave me nebulisers and I was fine. They also gave me a course of steroid tablets."',
      },
      {
        label: 'Triggers identified — cold air, cat at parents\' house, exercise, upper respiratory tract infections',
        quote: '"Cold weather definitely sets it off." – "My parents have a cat and I have to be careful when I visit." – "Exercise — I used to run but I haven\'t been able to as much."',
      },
      {
        label: 'Current inhaler use — beclometasone 200 mcg BD (not always taken); salbutamol PRN (using frequently)',
        quote: '"I use my brown inhaler morning and night but I do skip doses — especially if I\'m rushing for a shift." – "The blue one is the one I rely on really."',
      },
    ],
    pastMedicalHistory: [
      { label: 'Asthma — diagnosed age 12; moderate persistent; never ventilated', quote: '"I\'ve had asthma since I was a kid — since about 12." – "I\'ve never been on a ventilator or anything."' },
      { label: 'Allergic rhinitis — on cetirizine PRN', quote: '"I have hay fever — I take cetirizine when it\'s bad."' },
      { label: 'No COPD, no heart disease', quote: '"No other problems."' },
    ],
    drugHistory: [
      { label: 'Salbutamol 100 mcg pMDI PRN (to be stopped as sole reliever — now only as backup to MART)', quote: '"Salbutamol — the blue one. I use it a lot."' },
      { label: 'Beclometasone 200 mcg BD pMDI (to be replaced by DuoResp MART)', quote: '"The brown inhaler — beclometasone, twice a day."' },
      { label: 'DuoResp Spiromax (budesonide 160/formoterol 4.5 mcg DPI) — new; MART regimen', quote: '"This is the new one — DuoResp. I haven\'t used it yet."' },
      { label: 'Cetirizine 10 mg PRN (allergic rhinitis)', quote: '"Cetirizine for hay fever — when I need it."' },
      { label: 'No known drug allergies', quote: '"No allergies."' },
    ],
    familyHistory: [
      { label: 'Mother — asthma and eczema; well-controlled on inhaled steroids', quote: '"My mum has asthma too — she\'s fine on her inhalers." – "I also had eczema as a baby."' },
      { label: 'Father — no respiratory problems', quote: '"Dad is fine."' },
    ],
    socialHistory: [
      { label: 'ITU nurse — shift work (12-hour shifts); physically demanding; hard to maintain inhaler routine on busy shifts', quote: '"I work in ITU — 12-hour shifts, three or four a week. It\'s hard to remember to take my inhaler when I\'m in the middle of a resus." – "I don\'t always have my bag with me on the ward."' },
      { label: 'Non-smoker', quote: '"I\'ve never smoked — I\'m a nurse, I know better!" [laughs]' },
      { label: 'Alcohol: 6–8 units/week (wine at weekends)', quote: '"A couple of glasses of wine at weekends — maybe 6 to 8 units."' },
      { label: 'Lives in a flat with a flatmate; no pets; central heating', quote: '"I rent a flat — no pets. Central heating, no damp that I know of."' },
    ],
    importantNegatives: [
      'No oral candidiasis currently ("No white patches in my mouth — I\'ve been rinsing after my brown inhaler.")',
      'No significant exercise-induced symptoms recently ("My exercise tolerance has dropped but I haven\'t been running much.")',
      'No aspirin or NSAID sensitivity ("I can take ibuprofen fine — no wheeze.")',
      'No occupational sensitiser exposure known ("I haven\'t identified anything specific at work.")',
      'Not pregnant or planning pregnancy at present ("No.")',
    ],
    ice: {
      ideas: '"I think my asthma is just not well controlled — I probably haven\'t been taking my preventer inhaler properly." – "I understand the new inhaler has both the preventer and reliever in one."',
      concerns: '"I\'m worried about getting the technique wrong — I looked up this type of inhaler and it says you have to breathe in fast and hard, which is the opposite of my old blue inhaler. I\'m scared I\'ll inhale it wrong and it won\'t work." – "Also, I know it has a steroid in it. Is it safe to take extra puffs?"',
      expectations: '"I want to actually understand what I\'m doing and feel confident using it — I don\'t want to end up in A&E again."',
    },
    onlyIfDirectlyAsked: [
      'Whether she has a written asthma action plan — no; student should provide one or arrange this',
      'Whether she uses a spacer with her current pMDI — no; student should ask about pMDI technique and consider spacer for ICS delivery',
      'How to store the inhaler — keep at room temperature; dry; do not wash with water; check the dose counter',
    ],
    behaviourNotes: [
      'Intelligent and engaged but anxious about getting the technique wrong; as a nurse, she is self-conscious about her poor asthma control',
      'Specifically worried that DPI technique is opposite to her pMDI — student must demonstrate or clearly describe DPI technique: exhale away from inhaler, seal lips, FAST and DEEP inhalation (not slow); hold 10 seconds',
      'Asks "Can I just use this inhaler as a reliever and not a preventer?" — student MUST explain MART: DuoResp is used as BOTH maintenance (1 puff BD) AND reliever (1–2 puffs PRN when symptomatic); maximum 8 puffs per day total; salbutamol should now be a backup only',
      'Asks "If I use extra puffs, will the steroids build up and cause problems?" — student should explain that each reliever puff contains a low dose of budesonide 160 mcg; occasional extra puffs are safe; the ceiling of 8 puffs/day is for efficacy and to prevent steroid excess',
      'Asks "Should I rinse my mouth?" — yes, after every use of DuoResp to prevent oral candidiasis from the inhaled budesonide',
      'Asks "Can I still use my blue inhaler if I\'m really bad?" — student should explain that salbutamol is now a backup if DuoResp is insufficient; if using salbutamol frequently, asthma is not controlled and they should seek review',
    ],
  },
  markScheme: [
    {
      domain: 'Opening the consultation',
      items: [
        { description: 'Introduces themselves; confirms patient identity', marks: 1 },
        { description: 'Explores what Miss Chen understands about her new inhaler and why she has been stepped up, before explaining', marks: 1 },
      ],
    },
    {
      domain: 'Exploring baseline understanding of asthma and current control',
      items: [
        { description: 'Establishes current level of control — frequency of salbutamol use, nocturnal symptoms, previous exacerbations, and A&E attendance', marks: 1 },
        { description: 'Acknowledges non-adherence with preventer (beclometasone) as a contributing factor to poor control — explores barriers without blame', marks: 1 },
      ],
    },
    {
      domain: 'Explaining the indication for MART',
      items: [
        { description: 'Explains why MART has been chosen: poor control on step 2 (ICS + SABA), frequent reliever use, and previous exacerbation — represents a step-up per NICE NG80', marks: 1 },
        { description: 'Explains the concept of MART: DuoResp used as both the daily preventer (budesonide — ICS) AND the reliever (formoterol — fast-onset LABA); replaces both the brown and blue inhalers', marks: 2 },
      ],
    },
    {
      domain: 'Dosing and administration of MART',
      items: [
        { description: 'Explains the MART dosing regimen: 1 puff twice daily as maintenance; 1–2 additional puffs as needed for symptom relief; maximum 8 puffs total per day', marks: 2 },
        { description: 'Explains that salbutamol is now a backup reliever only — if needing salbutamol regularly, asthma is not controlled and review is needed', marks: 1 },
      ],
    },
    {
      domain: 'DPI inhaler technique',
      items: [
        { description: 'Explains or demonstrates correct DPI technique: hold inhaler level, exhale fully away from device, seal lips tightly around mouthpiece, inhale FAST and DEEP (not slow), hold breath 10 seconds, breathe out slowly away from inhaler', marks: 2 },
        { description: 'Specifically contrasts DPI technique with pMDI technique — DPI requires forceful inhalation (opposite to pMDI); explains why: the DPI relies on turbulent airflow to disperse the dry powder', marks: 1 },
      ],
    },
    {
      domain: 'Common side effects and device care',
      items: [
        { description: 'Advises rinsing mouth and gargling with water after every use — prevents oral candidiasis from inhaled budesonide (ICS)', marks: 1 },
        { description: 'Explains hoarseness (dysphonia) as a recognised side effect of ICS; mouth rinsing reduces this', marks: 1 },
      ],
    },
    {
      domain: 'Serious side effects and safety advice',
      items: [
        { description: 'Advises seeking emergency help (call 999) if symptoms are not relieved by 4 puffs of DuoResp within 5–10 minutes, or if she uses more than 8 puffs in a day', marks: 2 },
        { description: 'Explains that high-dose ICS long-term may cause systemic effects at very high doses — not relevant at MART doses; this is safer than poorly controlled asthma', marks: 1 },
      ],
    },
    {
      domain: 'Written asthma action plan',
      items: [
        { description: 'Explains the importance of a written personalised asthma action plan (PAAP) — provides or arranges one; explains the three zones: green (controlled), amber (worsening), red (emergency)', marks: 2 },
      ],
    },
    {
      domain: 'Drug interactions and trigger avoidance',
      items: [
        { description: 'Reviews known triggers — advises avoiding cat exposure, appropriate warm-up before exercise, annual influenza vaccination', marks: 1 },
        { description: 'Asks about NSAID/aspirin use and confirms no sensitivity; mentions beta-blockers (including eye drops) should be avoided in asthma', marks: 1 },
      ],
    },
    {
      domain: 'ICE and addressing concerns',
      items: [
        { description: 'Addresses concern about technique explicitly — acknowledges DPI is counterintuitive; uses ask-tell-ask to check understanding; invites her to demonstrate technique back', marks: 1 },
      ],
    },
    {
      domain: 'Closing and safety-netting',
      items: [
        { description: 'Summarises the new regime: DuoResp 1 puff BD maintenance + PRN up to 8 puffs/day; rinse mouth; salbutamol backup only; review in 3 months (or sooner if control worsens)', marks: 1 },
        { description: 'Arranges written asthma action plan; books 3-month asthma review; advises when to attend urgently vs. emergency services', marks: 1 },
      ],
    },
    {
      domain: 'Key communication skills',
      items: [
        { description: 'Active listening — acknowledges her self-consciousness as a healthcare professional with poorly controlled asthma; normalises non-adherence as a common barrier', marks: 1 },
        { description: 'Uses teach-back or ask-tell-ask — asks Miss Chen to explain the MART regimen back to confirm understanding', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Miss Chen is a 27-year-old ITU nurse with moderate persistent asthma (diagnosed age 12) whose asthma is currently uncontrolled on step 2 therapy — using salbutamol >3 times per week, nocturnal symptoms, one A&E attendance, and one course of oral steroids in the past year',
    'Non-adherence with her beclometasone preventer due to shift-work demands was identified as a contributing factor — MART simplifies the regimen and has been shown to reduce exacerbations vs. fixed-dose ICS and SABA',
    'MART regimen explained: DuoResp Spiromax (budesonide 160/formoterol 4.5 mcg DPI) 1 puff BD as maintenance, with additional puffs as needed for relief; maximum 8 puffs/day; salbutamol is now backup only',
    'DPI technique was demonstrated and contrasted with her pMDI experience: DPI requires a fast, forceful inhalation (not the slow inhalation used with a pMDI); she was asked to demonstrate technique back (teach-back)',
    'Key device care advice: rinse mouth and gargle after every use (including maintenance doses) to prevent oral candidiasis from budesonide',
    'Safety: advised to call 999 or attend A&E if symptoms are not controlled by 4 puffs within 10 minutes; using more than 8 puffs in a day is a sign of severe uncontrolled asthma',
    'Written personalised asthma action plan to be provided; 3-month asthma review booked; annual influenza vaccination discussed; trigger avoidance reinforced',
  ],
  vivaQuestions: [
    {
      question: 'What is MART therapy and what is the evidence base for its use in asthma?',
      keyPoints: [
        'MART (Maintenance And Reliever Therapy) / AIR (Anti-Inflammatory Reliever): uses a single ICS/formoterol inhaler as both the daily maintenance preventer and the as-needed reliever',
        'Only formoterol-containing combinations can be used as MART — formoterol is a fast-onset LABA (onset within 1–3 minutes); salmeterol is too slow-onset (10–20 minutes)',
        'Licensed MART inhalers in UK: Symbicort (budesonide/formoterol pMDI), DuoResp Spiromax (DPI), Fobumix (DPI), Fostair (beclometasone/formoterol pMDI)',
        'Evidence: SMART trial and meta-analyses show MART reduces severe exacerbations by approximately 30–45% vs. fixed-dose ICS + SABA, with equivalent or lower total ICS dose',
        'Mechanism of benefit: as-needed ICS dosing means extra steroid is delivered exactly when airways are most inflamed (during symptoms) — more physiological than fixed-dose',
        'NICE NG80 (2024): MART is the preferred strategy at step 3 and can also be used at step 2 (low-dose ICS/formoterol MART as first preventer in adults)',
      ],
      source: 'NICE NG80 (Asthma, 2017 updated 2024); O\'Byrne PM et al., NEJM 2005 (SMART trial)',
    },
    {
      question: 'What are the differences in inhaler technique between pMDI and DPI devices and what factors influence inhaler choice?',
      keyPoints: [
        'pMDI: requires slow, controlled inhalation coordinated with actuation; breath should be slow (~30 L/min) and deep; spacer eliminates need for coordination and increases pulmonary deposition by ~50%',
        'DPI: relies on patient\'s inspiratory effort to create turbulent airflow that disperses the powder; requires a fast, forceful inhalation (typically >60 L/min); not suitable for patients with poor inspiratory flow (severe COPD, acute severe asthma)',
        'Spacer: recommended with pMDI for all patients on high-dose ICS and those who cannot coordinate actuation; reduces oropharyngeal deposition of ICS and systemic absorption; reduces oral candidiasis risk',
        'Environmental: pMDI uses HFA propellant (greenhouse gas); DPIs have a lower carbon footprint; NHS targets favour DPI where clinically suitable — NICE NG80 endorses prescribing DPIs preferentially',
        'Age considerations: DPIs require sufficient inspiratory effort — not suitable for children <5 years; pMDI + spacer is preferred under 5; breath-actuated MDIs useful for patients who cannot coordinate',
        'Patient education is critical regardless of device — suboptimal technique is the most common cause of apparently treatment-resistant asthma',
      ],
      source: 'NICE NG80 (2024); Primary Care Respiratory Society UK Inhaler Standards (2019); GINA 2024',
    },
    {
      question: 'What are the side effects of inhaled corticosteroids and how can they be minimised?',
      keyPoints: [
        'Local: oral candidiasis (thrush) — from oropharyngeal ICS deposition; minimised by rinsing mouth and gargling after every puff and using a spacer with pMDI',
        'Local: dysphonia (hoarseness) — from ICS effect on laryngeal muscles; common; usually reversible; mouth rinsing and spacer reduce risk',
        'Systemic at high doses: adrenal suppression (ICS doses >800 mcg budesonide equivalent/day); growth impairment in children; osteoporosis and increased fracture risk; cataracts and glaucoma (particularly with high-dose nasal and inhaled steroids combined)',
        'MART doses (budesonide 160 mcg per puff, maximum 8 puffs = 1,280 mcg/day) — systemic effects possible at maximum daily doses; significantly less than equivalent oral steroids',
        'Regularly review ICS dose and step down if asthma well-controlled for ≥3 months — principle of "as low as necessary" ICS dose',
        'Compared to uncontrolled asthma (and its requirements for oral steroids): the systemic effects of inhaled steroids are substantially lower at standard doses',
      ],
      source: 'NICE NG80 (2024); BNF — Corticosteroids; GINA 2024',
    },
    {
      question: 'How do you manage a patient presenting to A&E with an acute severe asthma attack?',
      keyPoints: [
        'Severity assessment: acute severe — PEFR 33–50% best, respiratory rate ≥25/min, HR ≥110 bpm, unable to complete sentences; life-threatening — PEFR <33%, SpO2 <92%, silent chest, bradycardia, exhaustion, confusion, cyanosis',
        'Immediate treatment: high-flow oxygen to maintain SpO2 94–98%; nebulised salbutamol 5 mg (back-to-back if life-threatening); nebulised ipratropium 0.5 mg (add if severe or life-threatening)',
        'Oral prednisolone 40–50 mg for at least 5 days (IV hydrocortisone 100 mg if unable to swallow); IV MgSO4 1.2–2 g over 20 minutes if not responding to initial bronchodilators',
        'Investigations: ABG if SpO2 <92% or clinical concern — normal or rising pCO2 in acute severe asthma is an alarming sign indicating impending respiratory failure (not improvement)',
        'Near-fatal/life-threatening attack: immediate CCOT/ITU review; consider CPAP or intubation; do not give sedation',
        'Discharge: only when PEFR >75% predicted; ensure inhaler technique checked; written action plan provided; GP review within 2 working days; follow-up in respiratory clinic within 4 weeks',
      ],
      source: 'BTS/SIGN British Guideline on the Management of Asthma (2019 updated 2023); NICE NG80 (2024)',
    },
  ],
};

export const MED_COUNSELLING_MOCK_EXAMS_2: MockExamStation[] = [
  betaBlockerCounselling,
  ccbCounselling,
  statinCounselling,
  inhalerCounselling,
];
