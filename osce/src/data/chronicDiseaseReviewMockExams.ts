import type { MockExamStation } from './mockExamTypes';

const hypertensionReview: MockExamStation = {
  id: 'gp_hypertension_review',
  title: 'GP Annual Review — Hypertension',
  diagnosis: 'Essential hypertension — suboptimally controlled; consider step-up to triple therapy',
  specialtyId: 'general-practice',
  candidateBrief: {
    setting: 'You are a GP registrar in a general practice surgery.',
    scenario:
      'Mr Derek Shah, 63, has attended for his annual hypertension review. His most recent clinic blood pressure reading (taken by the nurse last week) was 158/96 mmHg. He is currently on amlodipine 10 mg and ramipril 10 mg.',
    tasks: [
      'Conduct an annual hypertension review and address any concerns',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'Derek Shah',
    age: 63,
    occupation: 'Retired civil engineer',
    openingLine:
      '"The nurse said my blood pressure is still high — she said I should see the doctor. I thought the tablets were meant to be sorting it by now." [mildly frustrated]',
    historyOfPresentingComplaint: [
      {
        label: 'Current BP control — intermittently checks at home; readings variable, often 150–160/90–95',
        quote: '"I\'ve got a monitor at home. It goes up and down — usually around 150 to 160 over 90 on most mornings."',
      },
      {
        label: 'Symptoms of end-organ damage — occasional morning headaches; no visual symptoms, chest pain, or palpitations',
        quote: '"I sometimes wake up with a headache — at the back of my head. Goes off after breakfast." – "No blurred vision or anything like that."',
      },
      {
        label: 'Medication adherence — generally good but admits to sometimes forgetting the evening dose',
        quote: '"I take them most days — but the ramipril I sometimes forget. I take it at night and I fall asleep early." – "Maybe one or two a week I miss it."',
      },
      {
        label: 'Side effects — mild ankle swelling from amlodipine; dry cough from ramipril (tolerating)',
        quote: '"My ankles have been a bit puffy. The pharmacist said it was probably the amlodipine." – "I do have a dry cough — comes and goes. Has done since I started ramipril."',
      },
      {
        label: 'Diet and salt intake — still eating processed food; wife does most cooking; admits meals can be salty',
        quote: '"My wife cooks mostly — but I like a ready meal or a sandwich when she\'s out. Probably more salt than I should." – "She keeps telling me off about it."',
      },
    ],
    pastMedicalHistory: [
      { label: 'Hypertension — diagnosed 4 years ago; currently on step 2 treatment', quote: '"High blood pressure — been on tablets for 4 years. They keep having to adjust them."' },
      { label: 'Type 2 diabetes — HbA1c last checked 6 months ago (52 mmol/mol); on metformin', quote: '"I have type 2 diabetes — I take metformin. My diabetic nurse saw me 6 months ago."' },
      { label: 'Previous mild CKD Stage 2 (eGFR 68, ACR 4 mg/mmol last year)', quote: '"The doctor said my kidneys were a little bit reduced — nothing serious."' },
    ],
    drugHistory: [
      { label: 'Amlodipine 10 mg OD (hypertension, CCB)', quote: '"Amlodipine — the pink one — once a day in the morning."' },
      { label: 'Ramipril 10 mg OD at night (hypertension, ACE inhibitor)', quote: '"Ramipril — at night. That\'s the one I sometimes forget."' },
      { label: 'Metformin 1 g BD (type 2 diabetes)', quote: '"Metformin — twice a day with meals."' },
      { label: 'No NSAIDs, no OTC decongestants', quote: '"No — nothing else. I\'ve been told not to take ibuprofen."' },
      { label: 'No known drug allergies', quote: '"No allergies."' },
    ],
    familyHistory: [
      { label: 'Father — myocardial infarction age 58; hypertension', quote: '"My dad had a heart attack at 58. He had high blood pressure too."' },
      { label: 'Mother — stroke age 72', quote: '"My mum had a stroke at 72 — she was never quite the same after."' },
    ],
    socialHistory: [
      { label: 'Retired civil engineer; lives with wife; largely sedentary since retirement', quote: '"I\'m retired. I don\'t do much exercise if I\'m honest. I used to walk a lot at work." – "I mostly watch TV or potter in the garden."' },
      { label: 'Smoker — 10 cigarettes/day for 35 years (35 pack-years); tried to quit twice', quote: '"I still smoke — about 10 a day. I know, I know." – "I\'ve tried stopping twice. The patches didn\'t work."' },
      { label: 'Alcohol — 14 units/week (two glasses of wine most evenings)', quote: '"Two glasses of wine most evenings. Probably 14 units a week."' },
    ],
    importantNegatives: [
      'No chest pain or exertional dyspnoea ("No — nothing like that.")',
      'No visual disturbance or transient visual loss ("No, my vision is fine.")',
      'No haematuria or frothy urine ("No blood or foaming.")',
      'No leg weakness or facial drooping ("No — definitely not.")',
      'No severe headache or vomiting ("Just the morning headaches — nothing severe.")',
    ],
    ice: {
      ideas: '"I thought the tablets should have sorted it by now. Maybe they\'re not strong enough." – "Or maybe I need to lose some weight."',
      concerns: '"I\'m worried about having a stroke like my mother. She was really bad afterwards." [quiet concern]',
      expectations: '"I\'d like to know if I need different tablets, and what else I can do."',
    },
    onlyIfDirectlyAsked: [
      'Home blood pressure monitoring — has a validated wrist monitor; takes readings irregularly, usually in the morning before breakfast',
      'Erectile dysfunction — "Actually yes, since starting the ramipril — but I was too embarrassed to bring it up." [only if student asks sensitively about side effects]',
      'Exercise — walks to the newsagent and back (approximately 10 minutes), that is all',
    ],
    behaviourNotes: [
      'Mild frustration that BP is still not controlled; responds well to a non-judgmental explanation',
      'Opens up about smoking when asked directly; feels embarrassed but not defensive — will engage with cessation advice if offered in the right way',
      'Asks "Do I need to go to hospital?" — student should reassure: BP of 158/96 is suboptimally controlled but not a hypertensive emergency; management is outpatient step-up',
      'Asks "What happens if I do have a stroke — am I at high risk?" — student should explain CVD risk is elevated by diabetes + smoking + family history + poorly controlled BP; quitting smoking and optimising BP significantly reduces this risk',
      'Asks "Could the new tablet affect my kidneys?" — student should explain: thiazide-like diuretics require monitoring of U&E/eGFR; ACE inhibitors are actually nephroprotective at low ACR but eGFR should be checked after any dose change',
      'Becomes more engaged when the student frames lifestyle changes in terms of stroke prevention rather than abstract numbers',
    ],
  },
  markScheme: [
    {
      domain: 'Opening the consultation',
      items: [
        { description: 'Introduces themselves and confirms patient identity', marks: 1 },
        { description: 'Uses an open question to explore Mr Shah\'s understanding and concerns about his blood pressure', marks: 1 },
      ],
    },
    {
      domain: 'Reviewing current control',
      items: [
        { description: 'Reviews clinic and home blood pressure readings; identifies readings consistently above target (>140/90)', marks: 1 },
        { description: 'Asks about adherence to antihypertensive medications — identifies occasional missed doses of ramipril', marks: 2 },
        { description: 'Asks about side effects of current medications — identifies ankle oedema (amlodipine) and dry cough (ramipril)', marks: 1 },
      ],
    },
    {
      domain: 'End-organ damage screening',
      items: [
        { description: 'Screens for symptoms of hypertensive emergency — severe headache, visual disturbance, chest pain, neurological symptoms', marks: 1 },
        { description: 'Asks about symptoms of heart failure — exertional dyspnoea, orthopnoea, ankle swelling', marks: 1 },
        { description: 'Asks about symptoms of renal impairment — haematuria, frothy urine, reduced urine output', marks: 1 },
        { description: 'Asks about symptoms of stroke or TIA — facial droop, limb weakness, speech disturbance, transient visual loss', marks: 1 },
      ],
    },
    {
      domain: 'Lifestyle factors',
      items: [
        { description: 'Asks about salt intake and diet — identifies high processed food and salt intake', marks: 1 },
        { description: 'Asks about physical activity — identifies sedentary lifestyle since retirement', marks: 1 },
        { description: 'Asks about smoking — identifies 10 cigarettes/day (35 pack-years); offers cessation support', marks: 2 },
        { description: 'Asks about alcohol intake — establishes 14 units/week (within recommended limit); advises keeping to <14 units/week', marks: 1 },
      ],
    },
    {
      domain: 'Interpreting monitoring results',
      items: [
        { description: 'Reviews U&E and eGFR results in context of ACE inhibitor use and known CKD Stage 2', marks: 1 },
        { description: 'Reviews urine ACR to assess for proteinuria — notes ACR 4 mg/mmol (A2 category) and appropriate BP target is <140/90; would be <130/80 if ACR ≥70', marks: 1 },
      ],
    },
    {
      domain: 'Adjusting management plan',
      items: [
        { description: 'Identifies step 2 treatment is current (ACE inhibitor + CCB); proposes adding a thiazide-like diuretic (indapamide) as step 3 per NICE NG136', marks: 2 },
        { description: 'Addresses adherence issue — suggests moving ramipril to morning to aid adherence; does not change drug or dose without addressing adherence first', marks: 1 },
        { description: 'Arranges follow-up U&E and eGFR check within 4 weeks of any medication change', marks: 1 },
      ],
    },
    {
      domain: 'ICE and addressing concerns',
      items: [
        { description: 'Explores concerns about stroke risk — addresses sensitively with reference to family history; explains how optimising BP and quitting smoking reduces risk', marks: 1 },
      ],
    },
    {
      domain: 'Closing and safety-netting',
      items: [
        { description: 'Explains when to seek urgent review — symptoms of hypertensive emergency (BP >180/120 with headache, visual change, neurological symptoms)', marks: 1 },
        { description: 'Arranges follow-up appointment in 4–6 weeks for BP check and blood results; summarises plan', marks: 1 },
      ],
    },
    {
      domain: 'Key communication skills',
      items: [
        { description: 'Active listening — does not lead with lecturing; acknowledges frustration and concern before moving to management', marks: 1 },
        { description: 'Summarising and signposting — clearly explains the plan and rationale at the end of the consultation', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Mr Shah is a 63-year-old retired civil engineer with a 4-year history of hypertension and type 2 diabetes, currently on step 2 treatment (amlodipine 10 mg and ramipril 10 mg), with a clinic BP of 158/96 — above his target of <140/90',
    'Key contributing factors to suboptimal control: intermittent non-adherence to ramipril (missed 1–2 doses/week), high dietary salt intake, sedentary lifestyle, ongoing smoking (10/day, 35 pack-years), and alcohol at 14 units/week',
    'End-organ damage screen was negative: no chest pain, visual disturbance, haematuria, or neurological symptoms; known CKD Stage 2 (eGFR 68, ACR 4 mg/mmol) — BP target remains <140/90 at this ACR level',
    'Significant cardiovascular risk profile: hypertension, type 2 diabetes, active smoking, family history of MI at 58 and stroke at 72',
    'Management plan: address adherence by moving ramipril to morning; step up to triple therapy by adding indapamide (thiazide-like diuretic) per NICE NG136 Step 3; check U&E and eGFR in 4 weeks; smoking cessation referral; dietary salt reduction',
    'Safety-netting: advised to attend urgently if BP >180/120 with symptoms; follow-up in 4–6 weeks for BP check and blood results',
    'ICE addressed: concern about stroke risk acknowledged; explained that combination of optimised BP and smoking cessation substantially reduces stroke risk',
  ],
  vivaQuestions: [
    {
      question: 'What are the NICE NG136 treatment steps for hypertension, and when would you consider each?',
      keyPoints: [
        'Step 1: ACE inhibitor or ARB if <55 years or diabetic; CCB if >55 years or Afro-Caribbean (ARB preferred over ACE inhibitor in Afro-Caribbean patients)',
        'Step 2: ACE inhibitor/ARB + CCB; add the drug from step 1 that was not used initially',
        'Step 3: ACE inhibitor/ARB + CCB + thiazide-like diuretic (indapamide preferred over bendroflumethiazide)',
        'Step 4 (resistant hypertension): consider spironolactone 25 mg if K+ <4.5 mmol/L; alpha-blocker (doxazosin) or beta-blocker if K+ ≥4.5 mmol/L; seek specialist advice',
        'Before stepping up: always check adherence, exclude white-coat hypertension (offer ABPM/HBPM), and address modifiable lifestyle factors',
        'BP targets: <140/90 in clinic (<80 yrs); <150/90 if ≥80 years; <130/80 if CKD with ACR ≥70 mg/mmol; ABPM daytime average <135/85',
      ],
      source: 'NICE NG136 (Hypertension in adults, 2019 updated 2023)',
    },
    {
      question: 'What is the annual review for a patient with hypertension in primary care, and what investigations should be arranged?',
      keyPoints: [
        'BP measurement: ideally ABPM or HBPM to confirm control outside of clinic; assess home readings if available',
        'Bloods: U&E and eGFR (ACE inhibitor/ARB monitoring and CKD surveillance); fasting lipids; HbA1c if diabetic',
        'Urine: ACR for early nephropathy detection; proteinuria triggers lower BP target (<130/80)',
        'Cardiovascular risk: recalculate QRISK3 annually; offer statin if 10-year QRISK3 ≥10% and lifestyle measures insufficient',
        'End-organ damage: ECG for LVH; ophthalmology if retinopathy suspected; examine for peripheral vascular disease',
        'Lifestyle review: smoking status (offer cessation), alcohol, weight/BMI, dietary salt (<6 g/day), physical activity (150 min/week aerobic exercise)',
      ],
      source: 'NICE NG136 (2019 updated 2023); NICE CG127 (2011)',
    },
    {
      question: 'What constitutes a hypertensive emergency and how is it managed?',
      keyPoints: [
        'Hypertensive emergency: BP ≥180/120 with evidence of end-organ damage — encephalopathy, stroke, LVF/pulmonary oedema, aortic dissection, HELLP syndrome, MI, papilloedema',
        'Hypertensive urgency: BP ≥180/120 without end-organ damage — managed with oral antihypertensives and close follow-up; does NOT require IV treatment',
        'Immediate management: same-day emergency assessment; do NOT lower BP too rapidly (risk of ischaemic stroke, coronary, or renal hypoperfusion); aim to reduce MAP by ~25% in first hour, then to 160/100 over 2–6 hours',
        'IV agents: labetalol (first choice, avoid in asthma/heart failure), sodium nitroprusside, or GTN infusion depending on the clinical syndrome',
        'Investigations: ECG, U&E, creatinine, urine dipstick, FBC, CXR, CT head if neurological symptoms; fundoscopy for papilloedema',
        'Referral: immediate emergency admission; specialist hypertension input; manage underlying cause (e.g. renal artery stenosis, phaeochromocytoma)',
      ],
      source: 'NICE NG136 (2019 updated 2023); ESC/ESH Guidelines for Arterial Hypertension (2018)',
    },
    {
      question: 'What are the causes of resistant hypertension and how should it be investigated?',
      keyPoints: [
        'Definition: BP ≥140/90 despite adherence to ≥3 antihypertensives at optimal doses, including a diuretic',
        'First exclude: non-adherence (most common); white-coat effect (ABPM); subtherapeutic doses; drug interactions (NSAIDs, oral contraceptives, decongestants, liquorice)',
        'Secondary hypertension: renal causes (CKD, renovascular — renal artery stenosis, especially in atherosclerotic older patients); endocrine (primary hyperaldosteronism — check aldosterone:renin ratio; phaeochromocytoma — 24-hr urinary metanephrines; Cushing\'s syndrome; thyroid disease)',
        'Obstructive sleep apnoea: underrecognised cause; ask about snoring, witnessed apnoeas, daytime somnolence; Epworth Sleepiness Scale',
        'Investigations: U&E, aldosterone:renin ratio, 24-hr urinary metanephrines, TFTs, fasting glucose, renal ultrasound (Doppler for renovascular disease)',
        'Referral to specialist hypertension clinic if resistant hypertension confirmed; specialist may add spironolactone, alpha-blocker, or consider renal denervation',
      ],
      source: 'NICE NG136 (2019 updated 2023); ESC/ESH Guidelines for Arterial Hypertension (2018)',
    },
  ],
};

const diabetesReview: MockExamStation = {
  id: 'gp_diabetes_review',
  title: 'GP Annual Review — Type 2 Diabetes',
  diagnosis: 'Type 2 diabetes — suboptimal glycaemic control (HbA1c 68 mmol/mol); requires treatment intensification',
  specialtyId: 'general-practice',
  candidateBrief: {
    setting: 'You are a GP registrar in a general practice surgery.',
    scenario:
      'Mrs Pauline Okafor, 58, has attended for her annual diabetes review. Her recent blood results show: HbA1c 68 mmol/mol (target <53 mmol/mol), eGFR 72 mL/min/1.73m², ACR 8 mg/mmol, total cholesterol 5.8 mmol/L, BP in clinic 146/88 mmHg. She is currently on metformin 1 g BD.',
    tasks: [
      'Conduct an annual diabetes review and formulate a management plan',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'Pauline Okafor',
    age: 58,
    occupation: 'School teaching assistant',
    openingLine:
      '"The nurse said my blood sugar control hasn\'t improved — she sent me to see you. I have been trying, but it\'s difficult with work and everything." [slightly self-conscious, genuinely trying]',
    historyOfPresentingComplaint: [
      {
        label: 'Glycaemic symptoms — occasional thirst and fatigue, especially in the afternoons; no polyuria',
        quote: '"I do get quite thirsty sometimes — usually mid-afternoon." – "I\'m tired a lot, but I thought that was just work."',
      },
      {
        label: 'Medication adherence — takes metformin regularly; has had some GI side effects (loose stools) that affect adherence',
        quote: '"I take my metformin — mostly. It does upset my stomach sometimes. I get loose stools after the evening dose." – "I sometimes skip that one if my stomach\'s bad."',
      },
      {
        label: 'Hypoglycaemia — no episodes of hypoglycaemia; not currently on any drugs causing hypoglycaemia risk',
        quote: '"No — I\'ve never had a funny turn or gone shaky. Nothing like that."',
      },
      {
        label: 'Diet — main challenges: large portions, high carbohydrate intake (rice, bread), irregular meal times due to work pattern',
        quote: '"I cook Nigerian food — it\'s lots of rice and yam. The portions are quite big." – "I try to eat less but it\'s hard when the family is eating the same thing."',
      },
      {
        label: 'Physical activity — limited exercise; walks 20 minutes to school and back most days; not doing structured exercise',
        quote: '"I walk to work and back — that\'s about 20 minutes each way. I don\'t go to a gym or anything." – "By the time I get home, I\'m too tired."',
      },
      {
        label: 'Foot symptoms — no pain, numbness, or ulcers; feet checked by GP 12 months ago',
        quote: '"My feet are fine — no problems." – "The nurse checked them at my last review."',
      },
      {
        label: 'Eye screening — attended diabetic eye screening 8 months ago; no changes found',
        quote: '"I went to the eye screening appointment at the optician — they sent me a letter saying everything was fine."',
      },
    ],
    pastMedicalHistory: [
      { label: 'Type 2 diabetes — diagnosed 5 years ago; initially managed with diet alone, metformin started 3 years ago', quote: '"I\'ve had diabetes for 5 years. I was on diet for a while first."' },
      { label: 'Hypertension — diagnosed 2 years ago; on amlodipine 5 mg OD', quote: '"I have high blood pressure — the other doctor started me on amlodipine 2 years ago."' },
      { label: 'No previous cardiovascular disease, no known CKD', quote: '"No heart problems, no strokes. I don\'t think my kidneys have been a problem."' },
    ],
    drugHistory: [
      { label: 'Metformin 1 g BD (type 2 diabetes)', quote: '"Metformin — twice a day."' },
      { label: 'Amlodipine 5 mg OD (hypertension)', quote: '"Amlodipine — one in the morning."' },
      { label: 'No statin currently prescribed', quote: '"No cholesterol tablets — the other doctor said to try diet first."' },
      { label: 'No known drug allergies', quote: '"No allergies."' },
    ],
    familyHistory: [
      { label: 'Mother — type 2 diabetes and hypertension; died of MI age 68', quote: '"My mum had diabetes and high blood pressure. She died of a heart attack at 68." [quiet moment]' },
      { label: 'Father — stroke age 73', quote: '"My dad had a stroke at 73."' },
    ],
    socialHistory: [
      { label: 'Teaching assistant; sedentary at work (classroom support); long school hours', quote: '"I help in a primary school classroom. It\'s busy but mostly sitting or standing."' },
      { label: 'Married; 3 adult children; cooks for family; cultural food influences affect diet choices', quote: '"I\'m married, 3 children — they\'ve all left home now but come back at weekends." – "I do the cooking. Nigerian food is what we eat."' },
      { label: 'Non-smoker; minimal alcohol (2 units/week — occasional glass of wine)', quote: '"I don\'t smoke — never have." – "I drink very little — a glass of wine at Christmas and maybe once or twice otherwise."' },
      { label: 'BMI 32 — overweight; weight has not changed significantly in the last year', quote: '"My weight hasn\'t really changed — I think I\'m about the same as last year."' },
    ],
    importantNegatives: [
      'No chest pain or breathlessness on exertion ("No chest pain — no.")',
      'No polyuria or nocturia ("I go to the toilet at night once but that\'s normal for me.")',
      'No visual disturbance ("My eyes have been fine.")',
      'No foot ulcers, wounds, or infections ("My feet look fine — no sores.")',
      'No symptoms of hypoglycaemia ("No shakiness or sweating.")',
      'No significant weight loss ("I wish — no.")',
    ],
    ice: {
      ideas: '"I know my sugar has been high — I think it\'s my diet. I\'m not sure the tablets are strong enough now."',
      concerns: '"My mum died of a heart attack at 68. I\'m 58 now. I\'m worried about my heart." [genuine fear]',
      expectations: '"I want to know if I need different tablets, and whether I need to worry about my heart."',
    },
    onlyIfDirectlyAsked: [
      'Metformin GI side effects — loose stools after evening dose, occasionally skips dose; changing to modified-release metformin may help',
      'DVLA — does not drive; not relevant here',
      'Sick day rules — unaware; needs education on withholding metformin when acutely unwell',
      'Whether she has discussed diet with a dietitian — referred 3 years ago, attended 2 sessions but did not find generic advice culturally appropriate',
    ],
    behaviourNotes: [
      'Genuinely engaged and trying; not defensive; feels somewhat defeated by her HbA1c not improving',
      'Becomes emotional briefly when discussing her mother — student should acknowledge this sensitively before continuing',
      'Asks "Do I need insulin?" — student should explain: not yet; next step is adding a second oral agent (e.g. an SGLT2 inhibitor or a DPP-4 inhibitor); insulin is considered later if targets not met on triple therapy',
      'Asks "How bad is my cholesterol?" — student should explain QRISK3 calculation and NICE guidance that atorvastatin 10 mg is recommended for all T2DM patients with QRISK3 ≥10%; with her risk profile this threshold is likely met',
      'Asks about culturally appropriate dietary advice — student should acknowledge this and offer referral to a diabetes specialist dietitian',
      'Responds positively when the student addresses her cardiovascular concern directly rather than moving straight to drugs and numbers',
    ],
  },
  markScheme: [
    {
      domain: 'Opening the consultation',
      items: [
        { description: 'Introduces themselves and confirms patient identity', marks: 1 },
        { description: 'Uses an open question to invite Mrs Okafor to share her experience of managing her diabetes since last review', marks: 1 },
      ],
    },
    {
      domain: 'Reviewing current glycaemic control',
      items: [
        { description: 'Reviews HbA1c of 68 mmol/mol — identifies this is above the target of 53 mmol/mol (on metformin as single oral agent)', marks: 1 },
        { description: 'Asks about symptoms of poor glycaemic control — thirst, polyuria, fatigue, blurred vision', marks: 1 },
        { description: 'Asks about adherence to metformin — identifies GI side effects and occasional missed doses', marks: 2 },
        { description: 'Specifically asks about hypoglycaemia episodes — confirms none (patient not on sulphonylurea or insulin)', marks: 1 },
      ],
    },
    {
      domain: 'The nine diabetes care processes',
      items: [
        { description: 'Reviews BP reading — identifies 146/88, above target of <140/90; considers optimising amlodipine or adding ACE inhibitor/ARB (particularly given ACR 8 — microalbuminuria)', marks: 2 },
        { description: 'Checks cholesterol result — identifies total cholesterol 5.8; establishes whether statin has been prescribed; recommends atorvastatin per NICE NG28', marks: 1 },
        { description: 'Confirms attendance at NHS Diabetic Eye Screening Programme — result normal 8 months ago', marks: 1 },
        { description: 'Performs or asks about the foot examination — 10-point monofilament, pedal pulses, inspection for ulcers, callus, or deformity', marks: 2 },
        { description: 'Reviews eGFR (72) and ACR (8 mg/mmol — A2 category, microalbuminuria) — identifies early nephropathy; notes ACE inhibitor/ARB is nephroprotective in this context', marks: 2 },
        { description: 'Asks about BMI and weight — BMI 32; discusses weight loss and its impact on HbA1c', marks: 1 },
      ],
    },
    {
      domain: 'Lifestyle factors',
      items: [
        { description: 'Takes a brief dietary history — identifies high carbohydrate intake; discusses referral to diabetes specialist dietitian, including culturally appropriate advice', marks: 1 },
        { description: 'Assesses physical activity — discusses increasing structured aerobic activity to 150 minutes/week', marks: 1 },
      ],
    },
    {
      domain: 'Adjusting management plan',
      items: [
        { description: 'Proposes switching to modified-release metformin to improve GI tolerability and adherence', marks: 1 },
        { description: 'Proposes adding a second oral agent — SGLT2 inhibitor (e.g. empagliflozin or dapagliflozin) as preferred second agent given cardiovascular risk; or DPP-4 inhibitor if SGLT2 inhibitor not tolerated', marks: 2 },
        { description: 'Initiates atorvastatin 10 mg for primary cardiovascular prevention given T2DM and likely QRISK3 ≥10%', marks: 1 },
        { description: 'Adds an ACE inhibitor or ARB for BP control and nephroprotection given microalbuminuria (ACR 8, A2)', marks: 1 },
      ],
    },
    {
      domain: 'ICE and addressing concerns',
      items: [
        { description: 'Explores and acknowledges concern about cardiovascular risk given family history; explains how optimising HbA1c, BP, and starting a statin reduces this risk', marks: 1 },
      ],
    },
    {
      domain: 'Closing and safety-netting',
      items: [
        { description: 'Provides sick day rules: advise withholding metformin and SGLT2 inhibitor during acute illness/dehydration to prevent lactic acidosis and DKA', marks: 1 },
        { description: 'Arranges follow-up: repeat HbA1c, U&E, and BP check in 3 months; summarises plan', marks: 1 },
      ],
    },
    {
      domain: 'Key communication skills',
      items: [
        { description: 'Active listening — acknowledges the emotional response when Mrs Okafor discusses her mother; validates her effort', marks: 1 },
        { description: 'Summarising and signposting — explains each change clearly in plain language', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Mrs Okafor is a 58-year-old teaching assistant with a 5-year history of type 2 diabetes, currently on metformin 1 g BD and amlodipine 5 mg, presenting for annual review with an HbA1c of 68 mmol/mol — above the target of 53 mmol/mol',
    'The nine NICE NG28 care processes were reviewed: glycaemic control suboptimal; BP 146/88 (above target); cholesterol 5.8 with no statin prescribed; eGFR 72 and ACR 8 (A2 microalbuminuria — nephroprotective ACE inhibitor/ARB indicated); eye screening normal 8 months ago; feet symptom-free',
    'Contributing factors to poor HbA1c: adherence impaired by metformin GI side effects, culturally high-carbohydrate diet, BMI 32, and insufficient structured exercise',
    'Cardiovascular risk is significant: T2DM, suboptimal hypertension, no statin, BMI 32, strong family history (mother — MI at 68, father — stroke at 73)',
    'Management plan: switch to modified-release metformin; add SGLT2 inhibitor (empagliflozin) as second agent (cardiovascular benefit); start atorvastatin 10 mg; add ramipril for BP and nephroprotection; refer to diabetes specialist dietitian for culturally appropriate advice',
    'Sick day rules discussed: withhold metformin and SGLT2 inhibitor during acute illness or dehydration',
    'Cardiovascular concern acknowledged; patient reassured that optimising all risk factors substantially reduces her risk; follow-up in 3 months for HbA1c, U&E, and BP review',
  ],
  vivaQuestions: [
    {
      question: 'What are the nine NICE NG28 care processes for the annual diabetes review?',
      keyPoints: [
        'HbA1c: target 48 mmol/mol on lifestyle/metformin; 53 mmol/mol if on drugs with hypoglycaemia risk (sulphonylurea, insulin)',
        'BMI: weight management integral to glycaemic control; each 1 kg weight loss can reduce HbA1c by approximately 0.1 mmol/mol in the first year',
        'Blood pressure: target <140/90 (<130/80 if CKD with ACR ≥70 mg/mmol); ACE inhibitor/ARB first-line if hypertension + T2DM',
        'Lipids: atorvastatin 10–80 mg for all T2DM with QRISK3 ≥10% (10-year risk); all T2DM >40 years with any additional risk factor',
        'Creatinine/eGFR and urine ACR: screen for diabetic nephropathy; ACR ≥3 mg/mmol = microalbuminuria (A2); ACE inhibitor/ARB nephroprotective',
        'Retinal screening (NHS DESP), foot examination (monofilament + pulses + inspection), smoking status: all mandatory annually',
      ],
      source: 'NICE NG28 (Type 2 diabetes in adults, 2015 updated 2022)',
    },
    {
      question: 'When should you add a second oral agent to metformin in type 2 diabetes, and how do you choose between them?',
      keyPoints: [
        'Step up when HbA1c remains above individualised target (typically 53 mmol/mol) on metformin monotherapy after 3 months of optimised lifestyle',
        'SGLT2 inhibitor (empagliflozin, dapagliflozin, canagliflozin): preferred second agent in T2DM with established CVD, heart failure, or CKD — significant cardiovascular and renal outcome benefits (EMPA-REG, DECLARE, CREDENCE trials); also causes modest weight loss',
        'DPP-4 inhibitor (sitagliptin, alogliptin): weight-neutral; low hypoglycaemia risk; preferred if SGLT2 inhibitor not tolerated or eGFR too low',
        'GLP-1 receptor agonist (semaglutide SC, liraglutide): add if HbA1c not controlled on dual therapy with BMI ≥35; significant weight loss benefit; also cardiovascular benefit',
        'Sulphonylurea (gliclazide): lowest cost; risk of hypoglycaemia; less preferred unless cost is the main driver or other agents contraindicated',
        'SGLT2 inhibitor: do not start if eGFR <45; withhold during acute illness (euglycaemic DKA risk); may cause genital fungal infections and UTIs',
      ],
      source: 'NICE NG28 (2015 updated 2022); SIGN 154 (Management of diabetes, 2017 updated 2023)',
    },
    {
      question: 'What are the sick day rules for patients with type 2 diabetes?',
      keyPoints: [
        'Metformin: withhold during acute illness, dehydration, or procedures with contrast dye — risk of lactic acidosis when renal perfusion is reduced',
        'SGLT2 inhibitors: withhold during acute illness, fasting, or surgical procedures — risk of euglycaemic diabetic ketoacidosis (DKA); test ketones if unwell on an SGLT2 inhibitor',
        'Do NOT stop insulin in patients with type 1 or type 2 diabetes on insulin — even if not eating; adjust dose based on glucose monitoring and ketone testing',
        'Monitor blood glucose more frequently when unwell; aim for glucose 4–10 mmol/L',
        'Encourage adequate hydration; seek medical advice if unable to eat or drink for >24 hours',
        'Return to usual medication once well and eating and drinking normally; restart metformin/SGLT2 inhibitor 48 hours after procedures using contrast',
      ],
      source: 'NICE NG28 (2022); Diabetes UK Sick Day Rules leaflet; TREND-UK (2021)',
    },
    {
      question: 'What is diabetic nephropathy and how is it monitored and managed in primary care?',
      keyPoints: [
        'Diabetic nephropathy: progressive proteinuria and declining eGFR due to glomerular hyperfiltration → glomerulosclerosis; most common cause of end-stage renal disease in the UK',
        'Staging: ACR <3 mg/mmol (A1, normal); ACR 3–30 mg/mmol (A2, microalbuminuria); ACR >30 mg/mmol (A3, macroalbuminuria); combine with eGFR (G1–G5) for KDIGO risk staging',
        'ACE inhibitor or ARB: first-line treatment in T2DM with microalbuminuria (A2 or A3) regardless of BP — reduces proteinuria and slows eGFR decline; monitor K+ and eGFR within 4 weeks of starting',
        'Finerenone (non-steroidal MRA): licensed in CKD with T2DM — reduces cardiovascular events and CKD progression (FIDELIO-DKD, FIGARO-DKD trials); newer option',
        'SGLT2 inhibitors: dapagliflozin/canagliflozin have proven CKD-slowing benefit independent of glycaemic control; use if eGFR ≥25 (canagliflozin eGFR threshold)',
        'Nephrology referral: eGFR <30 (CKD Stage 3b/4+), rapidly declining eGFR (>5 mL/min/year), ACR >70, unexplained haematuria with proteinuria',
      ],
      source: 'NICE NG28 (2022); NICE NG203 (CKD, 2021); KDIGO CKD Guidelines (2022)',
    },
  ],
};

const asthmaReview: MockExamStation = {
  id: 'gp_asthma_review',
  title: 'GP Annual Review — Asthma',
  diagnosis: 'Asthma — poorly controlled; step-up to MART strategy indicated',
  specialtyId: 'general-practice',
  candidateBrief: {
    setting: 'You are a GP registrar in a general practice surgery.',
    scenario:
      'Miss Chloe Newnham, 27, a primary school teacher, has attended for her annual asthma review. She has a background of mild-to-moderate asthma diagnosed age 12. Her repeat prescription data shows she has requested 5 salbutamol inhalers in the past 12 months.',
    tasks: [
      'Conduct an annual asthma review including an inhaler technique check and agree a management plan',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'Chloe Newnham',
    age: 27,
    occupation: 'Primary school teacher',
    openingLine:
      '"I know I\'m here for my asthma check. It\'s been a bit rubbish this year, honestly — I\'ve been using my blue inhaler a lot. I just thought I needed more of them." [slightly casual, not perceiving the severity]',
    historyOfPresentingComplaint: [
      {
        label: 'Current symptom control — uses salbutamol most days; woken by cough 2–3 nights/week; misses or avoids activities due to breathlessness',
        quote: '"I use the blue inhaler most days — usually before work because the cold air gets me. Sometimes twice a day." – "I wake up at night coughing — probably 2 or 3 times a week."',
      },
      {
        label: 'RCP 3 questions — all three answered YES (nocturnal symptoms, usual activities limited, reliever >3 days/week)',
        quote: '"Yes — I wake up at night." – "I\'ve stopped running — it makes my chest really tight." – "I use it more than 3 days a week definitely."',
      },
      {
        label: 'Preventer inhaler use — prescribed beclometasone 100 mcg BD (brown inhaler); admits to poor adherence: uses it inconsistently, often forgets the evening dose',
        quote: '"I do take my brown inhaler — usually in the morning. The evening one I often forget." – "If I\'m being honest, maybe 4 or 5 times a week at best."',
      },
      {
        label: 'Inhaler technique (pMDI) — does not shake before use; inhales too fast; does not hold breath for 10 seconds after',
        quote: '"I just use it — press and breathe in." – "Should I be doing it differently?" [actor demonstrates incorrect technique if prompted]',
      },
      {
        label: 'Exacerbations in the past year — 2 courses of oral steroids; 1 visit to A&E (winter, following a cold)',
        quote: '"I had two lots of steroid tablets — the doctor at the walk-in centre gave me some in winter." – "In January I went to A&E because I couldn\'t get on top of it — they gave me nebulisers."',
      },
      {
        label: 'Trigger identification — cold air, viral infections (teaches primary school), exercise, dusty classrooms',
        quote: '"Cold air is a big one — I always feel worse in the winter." – "When the kids have colds, I always end up flaring." – "The classroom can be dusty."',
      },
      {
        label: 'Written asthma action plan — does not have one; unaware of what to do during an exacerbation beyond using the blue inhaler',
        quote: '"I don\'t think I have a plan written down." – "If I\'m bad, I just use the blue inhaler more." – "I didn\'t know I was supposed to have one."',
      },
    ],
    pastMedicalHistory: [
      { label: 'Asthma — diagnosed age 12; initially seasonal; now perennial', quote: '"I\'ve had asthma since I was 12. It was mainly hay fever-related back then." – "Now it\'s all year."' },
      { label: 'Allergic rhinitis — takes cetirizine in spring', quote: '"I get hay fever really badly — I take cetirizine from March onwards."' },
      { label: 'No eczema; no food allergies', quote: '"No eczema. No food allergies."' },
    ],
    drugHistory: [
      { label: 'Beclometasone 100 mcg BD (brown pMDI preventer) — poor adherence', quote: '"The brown inhaler — twice a day. I don\'t always manage twice."' },
      { label: 'Salbutamol 100 mcg pMDI PRN (blue reliever) — using daily', quote: '"The blue one — I use it most days."' },
      { label: 'Cetirizine 10 mg OD (seasonal allergic rhinitis)', quote: '"Cetirizine — just in spring and summer."' },
      { label: 'No known drug allergies; no aspirin or NSAID sensitivity', quote: '"No allergies." – "I can take ibuprofen fine."' },
    ],
    familyHistory: [
      { label: 'Mother — asthma and hay fever', quote: '"My mum has asthma too — and hay fever. It runs in the family."' },
      { label: 'No family history of COPD or other lung disease', quote: '"No COPD or anything more serious."' },
    ],
    socialHistory: [
      { label: 'Primary school teacher (Year 2); occupational exposure to chalk dust, classroom dust', quote: '"I teach Year 2. The classroom can get dusty — especially during craft activities." – "I never thought about it as a trigger until now."' },
      { label: 'Non-smoker (never smoked); no e-cigarette use', quote: '"I\'ve never smoked." – "No vaping either."' },
      { label: 'Alcohol — 8 units/week (social); lives with flatmates', quote: '"I drink socially — probably 8 units a week."' },
      { label: 'Exercise — previously ran 5K; has stopped due to exercise-induced symptoms', quote: '"I used to run but I\'ve had to stop — my chest just gets really tight even on a short run."' },
    ],
    importantNegatives: [
      'No haemoptysis ("No blood.")',
      'No weight loss ("My weight is fine.")',
      'No symptoms at weekends or holidays that are consistently better — occupation as trigger not clearly differentiated yet',
      'No aspirin or NSAID sensitivity ("I can take ibuprofen without problems.")',
      'No vocal cord dysfunction symptoms ("No — it\'s not my voice.")',
    ],
    ice: {
      ideas: '"I thought I just needed more blue inhalers — I didn\'t realise using them that much was a problem."',
      concerns: '"Honestly, the A&E visit scared me. I\'d never been that bad before." [more serious for a moment]',
      expectations: '"I want to be able to run again. And not worry about breathing at work."',
    },
    onlyIfDirectlyAsked: [
      'Whether symptoms are better on weekends or during school holidays — "Now you mention it... yes. Half-term is usually much better." [suggests occupational trigger — dusty classroom]',
      'Whether she has a spacer device — "I don\'t think so — I\'ve never been given one." [important: pMDI should be used with spacer for best technique]',
      'Whether she has ever used a peak flow diary — "Not really — the nurse gave me a meter but I haven\'t used it much."',
    ],
    behaviourNotes: [
      'Initially casual about her asthma control; becomes more concerned when the student reflects the number of reliever inhalers and the A&E attendance back to her',
      'Demonstrates pMDI technique incorrectly if asked — does not shake, inhales rapidly, does not hold breath',
      'Asks "Am I going to need a stronger inhaler?" — student should explain the MART strategy (combined budesonide/formoterol as both preventer and reliever) and that this would replace both current inhalers',
      'Asks "Is my asthma really that bad?" — student should use the BTS criteria: reliever use >3×/week, nocturnal symptoms, A&E attendance, oral steroid use — all indicate poor control and a step-up is indicated',
      'Asks "Will I always have asthma?" — student should give a realistic and reassuring answer: adult asthma is usually persistent, but well-controlled asthma should not limit daily activities; the goal of treatment is to reach this',
      'Becomes engaged and motivated when the student discusses returning to running as a goal',
    ],
  },
  markScheme: [
    {
      domain: 'Opening the consultation',
      items: [
        { description: 'Introduces themselves and confirms patient identity', marks: 1 },
        { description: 'Uses an open question to invite Miss Newnham to describe how her asthma has been since her last review', marks: 1 },
      ],
    },
    {
      domain: 'Symptom control assessment',
      items: [
        { description: 'Uses the RCP 3 questions to assess symptom control — asks about nocturnal symptoms, limitation of usual activities, and reliever use >3 days/week', marks: 2 },
        { description: 'Quantifies reliever inhaler use — identifies daily use (5 inhalers in 12 months; more than 3 puffs/week consistently)', marks: 1 },
        { description: 'Asks about exercise tolerance — identifies that running has been abandoned due to asthma', marks: 1 },
      ],
    },
    {
      domain: 'Exacerbation and treatment history',
      items: [
        { description: 'Asks about exacerbations in the past 12 months — identifies 2 courses of oral steroids and 1 A&E attendance', marks: 2 },
        { description: 'Asks about preventer inhaler adherence — identifies irregular use of beclometasone (approximately 4–5 days/week; missing evening doses)', marks: 2 },
      ],
    },
    {
      domain: 'Inhaler technique',
      items: [
        { description: 'Asks the patient to demonstrate their inhaler technique — identifies errors: not shaking, fast inhalation, not holding breath', marks: 2 },
        { description: 'Corrects technique in real time: shake, slow deep breath in with activation, hold for 10 seconds; recommends use of a spacer with pMDI', marks: 1 },
      ],
    },
    {
      domain: 'Trigger identification and occupational asthma screening',
      items: [
        { description: 'Identifies triggers: cold air, viral infections, exercise', marks: 1 },
        { description: 'Asks whether symptoms are better on days off, weekends, and holidays — screens for occupational contribution (classroom dust)', marks: 1 },
      ],
    },
    {
      domain: 'Adjusting management plan',
      items: [
        { description: 'Identifies that current step 2 treatment is inadequate (daily reliever use, nocturnal symptoms, exacerbations, A&E visit)', marks: 1 },
        { description: 'Proposes step up to MART (Maintenance and Reliever Therapy) — combined budesonide/formoterol as both preventer and reliever inhaler (NICE NG80 preferred strategy for adults)', marks: 2 },
        { description: 'Provides or arranges a written personal asthma action plan', marks: 1 },
      ],
    },
    {
      domain: 'ICE and addressing concerns',
      items: [
        { description: 'Addresses concern about the A&E admission — explains that suboptimal preventer adherence and poor inhaler technique contributed; with better control, episodes like this should be preventable', marks: 1 },
        { description: 'Frames the goal of treatment around patient-identified goals — returning to running', marks: 1 },
      ],
    },
    {
      domain: 'Closing and safety-netting',
      items: [
        { description: 'Safety-nets: explains when to call 999 (severe breathlessness, speaking in words only, peak flow <33% best); provides written emergency action plan', marks: 1 },
        { description: 'Arranges follow-up in 6–8 weeks to assess response to MART and reassess inhaler technique; refers to asthma specialist nurse if available', marks: 1 },
      ],
    },
    {
      domain: 'Key communication skills',
      items: [
        { description: 'Active listening — reframes reliever overuse as a signal of poor control (not a solution) without making the patient feel blamed', marks: 1 },
        { description: 'Signposting — explains each change to the treatment plan clearly', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Miss Newnham is a 27-year-old primary school teacher with a 15-year history of asthma, currently on beclometasone 100 mcg BD and salbutamol PRN; her asthma is poorly controlled as evidenced by daily reliever use, nocturnal symptoms 2–3 nights/week, cessation of exercise, 2 courses of oral steroids, and one A&E admission in the past year',
    'The RCP 3 questions were all answered positively: nocturnal symptoms, usual activities limited, reliever used >3 days/week — meeting criteria for poor control',
    'Inhaler technique was significantly impaired: not shaking pMDI, inhaling too fast, not holding breath; no spacer in use — suboptimal drug delivery is likely contributing to poor control independent of the inhaler regimen',
    'Triggers identified: cold air, viral upper respiratory infections (high occupational exposure as a primary school teacher), exercise, classroom dust; possible occupational contribution suggested by symptom improvement during school holidays',
    'Adherence to beclometasone was approximately 60% — missing evening dose regularly',
    'Management plan: step up to MART strategy (budesonide/formoterol combination inhaler as both preventer and reliever per NICE NG80); correct and demonstrate inhaler technique with a spacer; provide written personal asthma action plan; review in 6–8 weeks',
    'Safety-netting: emergency criteria discussed; goal of returning to running used as motivational target for improved control',
  ],
  vivaQuestions: [
    {
      question: 'What is the MART strategy and what are its advantages over a SABA-based approach?',
      keyPoints: [
        'MART: combined budesonide/formoterol inhaler used as both maintenance (preventer) and as-needed reliever — replaces a separate SABA and ICS inhaler',
        'Formoterol is a fast-onset LABA (onset within 1–3 minutes) making it suitable as a reliever; unlike salmeterol which should never be used as reliever due to slow onset',
        'MART reduces severe exacerbation rate compared to SABA-based step 2/3 regimens — SYGMA 1 and 2 trials (budesonide/formoterol MART vs fixed dose ICS)',
        'NICE NG80 recommends MART for adults with asthma not controlled on low-dose ICS, as preferred step 3 strategy; simplifies treatment to a single device',
        'Advantage: each reliever puff delivers a dose of ICS — addresses inflammation at the moment of the trigger rather than after the fact',
        'Suitable devices: Symbicort Turbohaler (budesonide/formoterol), DuoResp Spiromax — both DPI devices; patient must be shown correct technique',
      ],
      source: 'NICE NG80 (Asthma: diagnosis, monitoring and chronic asthma management, 2017 updated 2021); BTS/SIGN British Guideline on the Management of Asthma (2019 updated 2024)',
    },
    {
      question: 'How do you assess and correct inhaler technique in practice?',
      keyPoints: [
        'Ask the patient to demonstrate technique with their own device — do not just ask "are you using it correctly?"',
        'pMDI (pressurised metered-dose inhaler): shake, exhale to FRC, seal lips around mouthpiece, begin slow deep inhalation and actuate simultaneously, continue inhaling, hold breath 10 seconds; spacer recommended for all pMDI users',
        'DPI (dry powder inhaler, e.g. Turbohaler, Accuhaler): do NOT shake; exhale away from device, seal lips, rapid forceful inhalation, hold breath 10 seconds; must be held horizontally for Turbohaler; technique differs from pMDI',
        'Common errors: inhaling too fast (pMDI), inhaling too slowly (DPI), not holding breath, not exhaling before actuation, poor lip seal, not shaking pMDI',
        'If persistent difficulty: refer to asthma nurse specialist; consider switching device type; always check spacer compatibility',
        'Studies show 70–80% of patients use their inhaler incorrectly; incorrect technique is a leading cause of apparently treatment-resistant asthma',
      ],
      source: 'BTS/SIGN British Guideline on the Management of Asthma (2019 updated 2024); NICE NG80 (2021); Inhaler Error Steering Committee, NPJ Primary Care Respir Med 2016',
    },
    {
      question: 'What are the features of a life-threatening acute asthma attack, and what is the emergency management?',
      keyPoints: [
        'Life-threatening features: SpO2 <92%, PaO2 <8 kPa, PaCO2 normal or raised (exhaustion — pre-arrest), peak flow <33% best/predicted, silent chest, bradycardia or hypotension, cyanosis, altered consciousness',
        'Severe features: peak flow 33–50%, inability to complete sentences, respiratory rate >25, heart rate >110',
        'Immediate management: sit up; high-flow O2 to maintain SpO2 94–98%; back-to-back salbutamol 2.5 mg nebulised (can give continuously if life-threatening); ipratropium 500 mcg nebulised; prednisolone 40–50 mg oral or IV hydrocortisone 100 mg',
        'IV magnesium sulphate 1.2–2 g IV over 20 minutes: if not improving after initial treatment; can also give single IV bolus salbutamol if severe or life-threatening',
        'Arrange urgent hospital admission: all life-threatening, severe not responding within 15–30 minutes, or near-fatal',
        'Discharge planning: written asthma action plan before discharge; GP follow-up within 2 working days; review of triggering factors; consider stepping up maintenance treatment',
      ],
      source: 'BTS/SIGN British Guideline on the Management of Asthma (2019 updated 2024); NICE NG80 (2021)',
    },
    {
      question: 'What is occupational asthma and how should it be investigated and managed?',
      keyPoints: [
        'Occupational asthma: new-onset asthma or significant worsening of pre-existing asthma directly caused by workplace exposures; accounts for 9–15% of adult-onset asthma in the UK',
        'High-risk occupations: bakers (flour), painters (isocyanates), healthcare workers (latex, glutaraldehyde), laboratory workers (animal proteins), teachers (chalk, dust, moulds)',
        'Diagnosis: ask whether symptoms are better on rest days and holidays; serial peak flow measurements at work and away from work (diurnal variation >20% on work days)',
        'Referral: refer to occupational medicine or respiratory physician for formal assessment if occupational asthma is suspected; specific IgE testing or bronchial provocation testing may be required',
        'Management: ideally removal from exposure; if not possible, adequate PPE and reduction of exposure; RIDDOR reporting obligation for employer if occupational asthma confirmed',
        'Prognosis: better if exposure removed early; prolonged exposure leads to persistent asthma independent of continued exposure',
      ],
      source: 'BTS/SIGN British Guideline on the Management of Asthma (2019 updated 2024); NICE NG80 (2021); HSE Occupational Asthma guidance',
    },
  ],
};

const ckdReview: MockExamStation = {
  id: 'gp_ckd_review',
  title: 'GP Consultation — CKD Primary Care Review',
  diagnosis: 'CKD Stage G3b A3 — diabetic nephropathy; requires nephrology referral',
  specialtyId: 'general-practice',
  candidateBrief: {
    setting: 'You are a GP registrar in a general practice surgery.',
    scenario:
      'Mr Bernard Flint, 71, has been asked to attend to discuss his recent blood results: eGFR 38 mL/min/1.73m² (down from 47 six months ago), urine ACR 42 mg/mmol, Hb 108 g/L (normocytic), K+ 4.9 mmol/L, BP in clinic 152/90 mmHg. He has type 2 diabetes and hypertension.',
    tasks: [
      'Review Mr Flint\'s blood results, assess his CKD, and agree a management plan',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'Bernard Flint',
    age: 71,
    occupation: 'Retired postman',
    openingLine:
      '"The letter said my kidney results have come back and I need to see the doctor. I\'m worried — are my kidneys failing?" [genuinely anxious; has been worrying since the letter arrived]',
    historyOfPresentingComplaint: [
      {
        label: 'Symptoms of CKD — mild fatigue and reduced exercise tolerance over the past 3–4 months; no oedema noted by patient',
        quote: '"I\'ve been more tired than usual — not terrible, but I\'ve been having to stop and rest more when I walk." – "My ankles look a bit puffy in the evenings but I thought that was just age."',
      },
      {
        label: 'Urinary symptoms — nocturia twice per night (new over past 6 months); no haematuria; no dysuria',
        quote: '"I\'m up twice in the night now — that\'s new. Used to be once or not at all." – "No blood in my water."',
      },
      {
        label: 'Fluid status — drinking well; no orthopnoea; no breathlessness on exertion beyond fatigue',
        quote: '"I\'m drinking normally — I don\'t feel particularly thirsty." – "I don\'t get breathless lying flat."',
      },
      {
        label: 'Medication adherence and nephrotoxin exposure — takes lisinopril and amlodipine regularly; has been taking ibuprofen OTC for knee pain for the past 3 months',
        quote: '"I take my blood pressure tablets every day." – "My knee has been bad — I\'ve been buying ibuprofen from the chemist. Been taking it most days for the last 3 months." [this is a key finding]',
      },
      {
        label: 'Diabetes management — HbA1c was 61 mmol/mol 3 months ago; on metformin and gliclazide; has had 2 hypoglycaemia episodes in the past month',
        quote: '"My diabetes nurse said my sugar control could be better." – "I\'ve had a couple of turns where I felt shaky — the nurse said I went a bit low."',
      },
    ],
    pastMedicalHistory: [
      { label: 'Type 2 diabetes — 12 years; on metformin and gliclazide; suboptimal control', quote: '"Diabetes — been on tablets for 12 years."' },
      { label: 'Hypertension — on lisinopril 10 mg and amlodipine 10 mg; previously well controlled', quote: '"High blood pressure — been on those tablets for years."' },
      { label: 'Osteoarthritis — bilateral knees; managed with ibuprofen OTC recently', quote: '"Both knees — I was told it\'s wear and tear. I bought ibuprofen from the chemist because of the pain."' },
      { label: 'No known previous CKD diagnosis — eGFR was 65 two years ago; 47 six months ago; now 38', quote: '"They mentioned my kidneys were a bit reduced before but didn\'t make a big deal of it."' },
    ],
    drugHistory: [
      { label: 'Lisinopril 10 mg OD (hypertension)', quote: '"Lisinopril — once a day."' },
      { label: 'Amlodipine 10 mg OD (hypertension)', quote: '"The amlodipine — once a day."' },
      { label: 'Metformin 500 mg BD (type 2 diabetes) — dose already reduced due to CKD', quote: '"Metformin — twice a day. The dose was reduced a while back."' },
      { label: 'Gliclazide 80 mg OD (type 2 diabetes) — risk of hypoglycaemia in CKD', quote: '"Gliclazide — I take that for my diabetes too."' },
      { label: 'Ibuprofen OTC (knee pain) — using most days for 3 months — nephrotoxic; must be stopped', quote: '"Ibuprofen from the chemist — for my knee. Most days."' },
      { label: 'No known drug allergies', quote: '"No allergies."' },
    ],
    familyHistory: [
      { label: 'No family history of kidney disease or dialysis', quote: '"Nobody in my family has had kidney problems that I know of."' },
      { label: 'Father — type 2 diabetes; mother — died of a stroke', quote: '"Dad had diabetes. Mum had a stroke."' },
    ],
    socialHistory: [
      { label: 'Retired postman; now sedentary; lives with wife; she assists with medication management', quote: '"I used to walk miles every day as a postman. Now I\'m retired — I do less." – "My wife helps me remember my tablets."' },
      { label: 'Ex-smoker — quit age 55 (25 pack-years)', quote: '"I stopped smoking at 55. I was on about 20 a day for most of my life."' },
      { label: 'Alcohol — 10 units/week (beer at weekends)', quote: '"I have a couple of pints at the weekend — about 10 units a week."' },
      { label: 'Diet — moderate; some processed food; uses salt at the table', quote: '"We eat fairly normally. My wife cooks. I do put salt on things."' },
    ],
    importantNegatives: [
      'No macroscopic haematuria ("No blood in my water.")',
      'No loin pain or renal colic ("No pain in my sides.")',
      'No fever or rigors ("No — I haven\'t been unwell.")',
      'No breathlessness at rest ("No problems lying flat.")',
      'No bone pain ("My knees are arthritic, that\'s all.")',
    ],
    ice: {
      ideas: '"I think my kidneys are getting worse. The numbers going down — 65, then 47, now 38 — that worries me." [has been tracking his own results]',
      concerns: '"I\'m frightened about dialysis. My neighbour went on dialysis and it was awful — he had to go three times a week. I don\'t want that." [genuine fear]',
      expectations: '"I want to know how serious this is, and what I can do to slow it down."',
    },
    onlyIfDirectlyAsked: [
      'NSAID use — has been taking ibuprofen most days for 3 months for knee pain; did not realise it was harmful to kidneys',
      'Fluid intake — drinking approximately 1.5 litres/day; not over-restricting fluids',
      'Vaccination — has had flu jab annually; not had pneumococcal vaccine (important in CKD)',
    ],
    behaviourNotes: [
      'Anxious and has been worrying since the letter; responds well to a calm, structured explanation',
      'Has clearly looked at his own results and noticed the downward trend in eGFR over 2 years — acknowledge this; do not be dismissive',
      'Becomes visibly relieved when the student explains dialysis is not imminent but requires careful monitoring',
      'Asks "Do I need to stop my blood pressure tablet?" — student should explain lisinopril is actually nephroprotective given the ACR elevation; do not stop without specialist input; but the ibuprofen must be stopped immediately',
      'Asks "Do I need to go to a kidney specialist?" — student should explain: eGFR <30 is the referral threshold; current eGFR is 38 and declining by >5/year; declining trajectory and ACR >30 are also referral criteria — nephrology referral is appropriate now',
      'Becomes engaged when the student identifies the ibuprofen as a modifiable, reversible cause of the decline',
    ],
  },
  markScheme: [
    {
      domain: 'Opening the consultation',
      items: [
        { description: 'Introduces themselves and confirms patient identity', marks: 1 },
        { description: 'Acknowledges Mr Flint\'s anxiety about the results and invites him to share his concerns before reviewing the numbers', marks: 1 },
      ],
    },
    {
      domain: 'Assessing CKD stage and trajectory',
      items: [
        { description: 'Correctly stages CKD using both eGFR and ACR — identifies G3b (eGFR 30–44) and A3 (ACR >30); explains this is CKD Stage G3b A3', marks: 2 },
        { description: 'Identifies the rate of eGFR decline — from 65 to 38 over 2 years (decline of 27 mL/min = >5 mL/min/year) — identifies this as a rapidly declining trajectory', marks: 2 },
      ],
    },
    {
      domain: 'Symptom assessment and fluid status',
      items: [
        { description: 'Asks about uraemic symptoms — fatigue, nausea, anorexia, pruritus, confusion', marks: 1 },
        { description: 'Assesses fluid status — ankle oedema, breathlessness, orthopnoea, nocturia', marks: 1 },
        { description: 'Asks about haematuria and urinary symptoms', marks: 1 },
      ],
    },
    {
      domain: 'Identifying modifiable and causative factors',
      items: [
        { description: 'Asks about all medications including OTC drugs — identifies ibuprofen use for 3 months as a nephrotoxic contributor; advises to stop immediately', marks: 2 },
        { description: 'Identifies diabetic nephropathy as the most likely underlying cause given long-standing T2DM and macroalbuminuria (ACR 42)', marks: 1 },
        { description: 'Reviews glycaemic control — HbA1c 61 with hypoglycaemia episodes; identifies gliclazide as a risk in CKD (accumulates — hypoglycaemia risk increases)', marks: 2 },
      ],
    },
    {
      domain: 'Reviewing blood results and complications',
      items: [
        { description: 'Identifies Hb 108 — normocytic anaemia of CKD; explains this is common in CKD and may require investigation (B12/folate, iron studies) and potentially erythropoiesis-stimulating agent referral', marks: 1 },
        { description: 'Identifies K+ 4.9 mmol/L — borderline hyperkalaemia; in context of lisinopril and CKD — advises dietary potassium reduction; may require ACE inhibitor dose review if K+ rises further', marks: 2 },
        { description: 'Notes BP is 152/90 — above target of <130/80 for CKD with ACR >70 (but ACR is 42 here; target is <140/90 unless ACR ≥70); addresses as part of overall management', marks: 1 },
      ],
    },
    {
      domain: 'Management plan and referral',
      items: [
        { description: 'Stops ibuprofen immediately and recommends paracetamol for knee pain instead', marks: 1 },
        { description: 'Identifies that nephrology referral is appropriate: rapidly declining eGFR (>5 mL/min/year) and ACR >30 both meet referral criteria (NICE NG203)', marks: 2 },
        { description: 'Reviews metformin dose — notes metformin should be withheld if eGFR <30; at eGFR 38, current reduced dose (500 mg BD) may be continued but monitor closely; advises on sick day rules', marks: 1 },
      ],
    },
    {
      domain: 'ICE and addressing concerns',
      items: [
        { description: 'Addresses fear of dialysis sensitively — explains that CKD Stage G3b does not mean imminent dialysis; dialysis is typically considered at Stage 5 (eGFR <15); the goal now is slowing progression', marks: 1 },
      ],
    },
    {
      domain: 'Closing and safety-netting',
      items: [
        { description: 'Arranges repeat bloods in 4–6 weeks after stopping ibuprofen to assess for improvement; arranges nephrology referral', marks: 1 },
        { description: 'Advises on sick day rules — withhold ACE inhibitor, metformin during acute illness/dehydration', marks: 1 },
      ],
    },
    {
      domain: 'Key communication skills',
      items: [
        { description: 'Active listening — acknowledges anxiety; does not overwhelm with medical terminology; explains each result clearly', marks: 1 },
        { description: 'Signposting — explains the plan in a logical, structured order', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Mr Flint is a 71-year-old retired postman with type 2 diabetes and hypertension presenting for CKD review; latest results confirm CKD Stage G3b A3 (eGFR 38, ACR 42 mg/mmol) — a significant step down from eGFR 65 two years ago, indicating rapid progression',
    'The trajectory is concerning: eGFR has declined approximately 13–14 mL/min/year — well above the 5 mL/min/year threshold for rapid progression; this alone triggers a nephrology referral per NICE NG203',
    'A key modifiable cause identified: ibuprofen OTC use most days for 3 months — nephrotoxic via renal vasoconstriction; this must be stopped immediately and replaced with paracetamol for knee pain',
    'Diabetic nephropathy is the most likely underlying cause: 12-year T2DM history, ACR 42 (macroalbuminuria), suboptimal HbA1c — this is a pattern consistent with progressive diabetic nephropathy',
    'Additional concerns: Hb 108 (anaemia of CKD requiring further workup and potentially ESA referral); K+ 4.9 (borderline hyperkalaemia — dietary advice, lisinopril review); gliclazide hypoglycaemia risk as eGFR declines further; BP target and medication review',
    'Management plan: stop ibuprofen immediately; nephrology referral (rapid decline and ACR >30 both meet criteria); review gliclazide safety; repeat bloods in 4–6 weeks; sick day rules for ACE inhibitor and metformin; pneumococcal vaccination if not received',
    'Mr Flint\'s fear of dialysis was addressed; reassured that at eGFR 38 this is not imminent, but the goal is to slow progression through modifiable factors',
  ],
  vivaQuestions: [
    {
      question: 'How is CKD staged and what are the NICE NG203 referral criteria to nephrology?',
      keyPoints: [
        'Staging requires BOTH eGFR (G1–G5) AND ACR (A1 <3, A2 3–30, A3 >30 mg/mmol) — a patient with eGFR 75 and ACR 40 is G2 A3 and has higher risk than eGFR 40 and ACR 2 (G3a A1)',
        'Referral criteria: eGFR <30 (G4 or G5); rapidly declining eGFR (>5 mL/min/year or >10 mL/min over 5 years); ACR >70 mg/mmol; unexplained haematuria with proteinuria; suspected glomerulonephritis; uncontrolled hypertension despite ≥4 antihypertensives',
        'Suspected glomerulonephritis: proteinuria + haematuria with no other explanation; requires biopsy for definitive diagnosis',
        'KDIGO heat map: combines eGFR category and ACR category to produce green/yellow/orange/red/deep-red risk — high/very high risk requires nephrology involvement',
        'CKD Stage 5 (eGFR <15): prepare for renal replacement therapy (haemodialysis, peritoneal dialysis, transplantation); not usually started until eGFR <10–12 unless symptomatic',
      ],
      source: 'NICE NG203 (Chronic kidney disease, 2021); KDIGO CKD Guidelines (2022)',
    },
    {
      question: 'What medications need to be reviewed or adjusted in a patient with CKD?',
      keyPoints: [
        'NSAIDs: avoid in all but mild CKD — reduce afferent arteriolar flow, worsen eGFR, increase potassium; use paracetamol instead',
        'Metformin: reduce dose at eGFR 30–45 (max 1 g BD); withhold at eGFR <30 — risk of lactic acidosis; always withhold during acute illness, dehydration, or contrast procedures',
        'ACE inhibitors/ARBs: nephroprotective (reduce intraglomerular pressure via efferent arteriolar dilation) — do not stop without reason; check K+ and eGFR within 1–2 weeks of starting or increasing dose; withhold if K+ >6.0 or eGFR drops >25% acutely',
        'Sulphonylureas (gliclazide): accumulate as eGFR declines — risk of hypoglycaemia; reduce dose or switch to a shorter-acting agent; avoid glibenclamide in CKD',
        'Opioids: morphine metabolites accumulate in CKD — prefer fentanyl or buprenorphine; avoid codeine and tramadol in Stage 4/5',
        'Potassium-sparing diuretics (spironolactone, eplerenone): use with caution in CKD + ACE inhibitor — high risk of dangerous hyperkalaemia',
      ],
      source: 'NICE NG203 (2021); BNF — Prescribing in renal impairment; Renal Drug Handbook, 5th ed.',
    },
    {
      question: 'What are the complications of CKD and how are they managed?',
      keyPoints: [
        'Anaemia of CKD: caused by reduced erythropoietin production; investigate iron studies, B12, folate first; correct iron deficiency (IV iron preferred in Stage 4/5); refer to nephrology for erythropoiesis-stimulating agent (ESA) if Hb <100 g/L after iron correction',
        'Renal osteodystrophy: reduced 1-alpha-hydroxylase → reduced active vitamin D (calcitriol) → secondary hyperparathyroidism → high PTH → osteitis fibrosa cystica; monitor Ca, PO4, PTH in Stage 4/5; treat with alfacalcidol and phosphate binders',
        'Hyperkalaemia: ACE inhibitors, poor renal K+ excretion; dietary advice (<2 g K+/day); consider patiromer or sodium zirconium cyclosilicate (potassium binders) if persistent; stop ACE inhibitor if K+ >6.0 despite measures',
        'Cardiovascular disease: CKD is an independent cardiovascular risk factor; treat BP, lipids, and glycaemia aggressively; statin use in CKD reduces CVD events',
        'Hypertension in CKD: target <130/80 if ACR ≥70 (NICE NG203); ACE inhibitor or ARB first-line with proteinuria; SGLT2 inhibitors (dapagliflozin, canagliflozin) have renal protective benefits',
        'Metabolic acidosis (late CKD): serum bicarbonate <22 mmol/L — treat with sodium bicarbonate supplementation; slows CKD progression',
      ],
      source: 'NICE NG203 (2021); KDIGO CKD Guidelines (2022); OHCM 10th ed., Ch. 7',
    },
    {
      question: 'What are the causes of CKD, and how does diabetic nephropathy differ from glomerulonephritis?',
      keyPoints: [
        'Most common causes in the UK: diabetic nephropathy (commonest cause of ESRD), hypertensive nephrosclerosis, chronic glomerulonephritis, ADPKD, reflux nephropathy/chronic pyelonephritis',
        'Diabetic nephropathy: microalbuminuria → macroalbuminuria → falling eGFR; usually slowly progressive over years; associated with retinopathy and peripheral neuropathy; no haematuria; managed with ACE inhibitor/ARB, glycaemic control, SGLT2 inhibitors',
        'Glomerulonephritis: haematuria (often microscopic) + proteinuria; may have associated systemic features (rash, arthritis, haemoptysis in vasculitis); classified by pattern on biopsy (e.g. IgA nephropathy, FSGS, membranous, ANCA-associated vasculitis)',
        'IgA nephropathy: most common primary glomerulonephritis in the UK; episodic macroscopic haematuria often following upper respiratory tract infections; diagnose by renal biopsy; manage with ACE inhibitor/ARB; immunosuppression in progressive cases',
        'ADPKD (autosomal dominant polycystic kidney disease): PKD1/PKD2 mutations; large palpable kidneys; flank pain, haematuria, hypertension; extrarenal manifestations — intracranial aneurysms, hepatic cysts; tolvaptan (V2 receptor antagonist) can slow progression',
      ],
      source: 'NICE NG203 (2021); KDIGO CKD Guidelines (2022); Oxford Handbook of Nephrology and Hypertension, 2nd ed.',
    },
  ],
};

const lowBackPain: MockExamStation = {
  id: 'gp_low_back_pain',
  title: 'GP Consultation — Low Back Pain',
  diagnosis: 'Non-specific chronic low back pain with psychosocial yellow flags',
  specialtyId: 'general-practice',
  candidateBrief: {
    setting: 'You are a GP registrar in a general practice surgery.',
    scenario:
      'Mr Jamie Whitfield, 42, a warehouse operative, has attended with a 3-month history of low back pain. He has visited the practice twice before for this complaint and was given advice and analgesia.',
    tasks: [
      'Assess Mr Whitfield\'s low back pain, screen for red flags, and formulate a management plan',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'Jamie Whitfield',
    age: 42,
    occupation: 'Warehouse operative',
    openingLine:
      '"It\'s my back again. I\'m still in a lot of pain. The paracetamol isn\'t touching it." [visibly uncomfortable; shifts in the chair when sitting]',
    historyOfPresentingComplaint: [
      {
        label: 'Duration and onset — low back pain for 3 months; started after a heavy lift at work; now chronic (>12 weeks)',
        quote: '"It came on about 3 months ago. I was lifting some heavy pallets and felt something go in my lower back." – "It never really settled — it\'s been there ever since."',
      },
      {
        label: 'Character and distribution — central lower back; aching and stiff; no radiation below knee; occasional radiation to left buttock',
        quote: '"It\'s in the middle of my lower back — really stiff and achy." – "Sometimes it goes into my left buttock — but not really down my leg." – "It doesn\'t go below my knee."',
      },
      {
        label: 'Aggravating and relieving factors — worse with bending, lifting, prolonged sitting; slightly better lying down; no positions that completely relieve it',
        quote: '"Bending is agony. And sitting in this chair for long doesn\'t help." – "Lying down helps a bit but even that\'s not great at night." – "Nothing really makes it go completely."',
      },
      {
        label: 'Analgesic use and effect — taking paracetamol 1 g QDS with minimal effect; not tried NSAIDs recently; tried ibuprofen gel with little benefit',
        quote: '"I\'m on the maximum paracetamol — four times a day. It doesn\'t really help." – "I tried that ibuprofen gel but it\'s useless." – "Is there something stronger?"',
      },
      {
        label: 'Functional impact — off work for 6 weeks; previously active job now impossible; struggling with household activities; avoiding going out socially',
        quote: '"I\'ve been off work for 6 weeks now." – "I can\'t do anything at home either — my partner has to do everything." – "I\'ve stopped going to the pub with my mates. I just don\'t feel like it."',
      },
      {
        label: 'Yellow flags — catastrophising ("this will never get better"), fear-avoidance behaviour (not moving because it might hurt more), low mood, social withdrawal, passivity about recovery',
        quote: '"I honestly think this is just going to be with me forever." – "I\'m scared that if I move too much I\'ll make it worse." – "I feel quite low, to be honest — I\'m stuck at home all day."',
      },
      {
        label: 'Work beliefs — convinced he cannot return to warehouse work; worried about losing his job; employer has not contacted him',
        quote: '"I can\'t go back to that job — I\'ll just put it out again. Or worse." – "My employer hasn\'t been in touch, which worries me." – "I don\'t know what I\'ll do if I lose my job."',
      },
    ],
    pastMedicalHistory: [
      { label: 'No previous back surgery or significant spinal problems', quote: '"I\'ve had the odd twinge over the years but nothing like this."' },
      { label: 'Mild depression — treated with sertraline 50 mg OD; current episode predates back pain', quote: '"I was already on sertraline for depression before this happened — had a bit of a rough patch 18 months ago."' },
      { label: 'No history of cancer, no immunosuppression', quote: '"No cancer. No other serious illnesses."' },
    ],
    drugHistory: [
      { label: 'Paracetamol 1 g QDS (back pain) — minimal effect', quote: '"Paracetamol four times a day. It\'s not doing much."' },
      { label: 'Sertraline 50 mg OD (depression)', quote: '"Sertraline for my mood — 50 milligrams."' },
      { label: 'No known drug allergies', quote: '"No allergies."' },
    ],
    familyHistory: [
      { label: 'Father — chronic back problems; ended career early', quote: '"My dad had a bad back for years. He ended up having to leave his job early." – "I\'m worried I\'ll end up the same."' },
      { label: 'No family history of inflammatory arthritis or malignancy', quote: '"No arthritis that I know of. No cancer."' },
    ],
    socialHistory: [
      { label: 'Warehouse operative — heavy manual work; worried about returning; employer uncontacted in 6 weeks of sickness absence', quote: '"I do the night shift — picking and packing, heavy lifting. I can\'t do it as I am." – "My employer hasn\'t called, which stresses me out."' },
      { label: 'Lives with partner; she is "doing everything"; feels like a burden', quote: '"My girlfriend does everything now — cooking, shopping. I feel useless." – "She\'s been brilliant but I can see it\'s wearing on her."' },
      { label: 'Smoker — 15 cigarettes/day', quote: '"I smoke — about 15 a day."' },
      { label: 'Alcohol — 20 units/week (increased since back pain; previously 10 units)', quote: '"I drink more than I used to — probably 20 units a week now. I\'m bored and in pain at home." – "Before this I was about 10 units."' },
      { label: 'Exercise — previously active (5-a-side football); stopped entirely since back pain', quote: '"I used to play football. Haven\'t done anything since my back went."' },
    ],
    importantNegatives: [
      'No saddle anaesthesia ("No numbness around my bottom or in my groin.")',
      'No bladder or bowel dysfunction ("My waterworks are fine — no accidents or difficulty." "My bowels are normal.")',
      'No bilateral leg weakness or progressive neurological symptoms ("Both legs are fine — no weakness.")',
      'No fever or weight loss ("No temperature. I haven\'t lost weight.")',
      'No history of cancer ("No cancer.")',
      'No thoracic pain ("No — just the lower back.")',
      'No pain at rest or at night that wakes him ("The night is worse than the day — but pain at night from lying still rather than waking me from a deep sleep.")',
      'No morning stiffness >1 hour (rules out inflammatory back pain) ("It\'s stiff in the morning but loosens in about 20 minutes.")',
      'No use of corticosteroids or immunosuppression ("No.")',
    ],
    ice: {
      ideas: '"I think I\'ve done something permanent — like a disc or something." – "Once you hurt your back it never properly heals, does it?"',
      concerns: '"I\'m worried I\'ll lose my job and my girlfriend will get fed up. I feel completely stuck." [genuine distress]',
      expectations: '"I need something stronger for the pain. And I want to know if I need a scan."',
    },
    onlyIfDirectlyAsked: [
      'Saddle anaesthesia and bladder/bowel changes — explicitly denies both; these are cauda equina red flag symptoms that must be asked about',
      'Whether pain is worse at night/at rest — some night worsening from lying still but not waking from deep sleep; not a true nocturnal rest pain (which would raise cancer/infection concern)',
      'Previous physiotherapy — attended 2 sessions 6 weeks ago but stopped attending: "I went twice but it made it worse — I was too scared to keep going."',
      'Yellow flag recognition — if the student asks about beliefs about recovery: "I just think I\'m broken. Moving will make it worse."',
    ],
    behaviourNotes: [
      'Visibly uncomfortable in the chair; shifts position; winces when changing position — the actor should not exaggerate but should demonstrate genuine discomfort',
      'Defensive when asked about alcohol — "It\'s the only thing that helps at night." If the student is non-judgmental, he acknowledges it has increased',
      'Asks "Can I have a scan?" — student should explain: imaging does not change management for non-specific LBP and findings on MRI may not correlate with pain; MRI is indicated only if red flags are present or surgery is being considered',
      'Asks "Do I need stronger painkillers?" — student should address: oral NSAIDs (ibuprofen + PPI) are more effective than paracetamol for non-specific LBP; consider low-dose amitriptyline or duloxetine for chronic pain with a neuropathic component; opioids are not recommended for long-term LBP management',
      'Asks "Will I ever be able to go back to work?" — student should address occupational factors: staged return to work, referral to occupational health; remaining at home increases risk of chronicity; activity and movement are safe and recommended',
      'Becomes somewhat hopeful when the student explains that bed rest and avoiding activity is actually harmful, and that most back pain — even chronic — can improve with the right approach',
    ],
  },
  markScheme: [
    {
      domain: 'Opening the consultation',
      items: [
        { description: 'Introduces themselves; confirms patient identity', marks: 1 },
        { description: 'Uses an open question to invite Mr Whitfield to describe the current state of his back pain', marks: 1 },
      ],
    },
    {
      domain: 'Characterising the pain',
      items: [
        { description: 'Establishes duration (3 months — chronic), onset (heavy lifting at work), location (central lower back with radiation to left buttock, not below knee)', marks: 1 },
        { description: 'Establishes aggravating and relieving factors; determines neurological distribution is non-radicular', marks: 1 },
        { description: 'Asks about sleep disturbance — distinguishes positional night pain from true nocturnal/rest pain', marks: 1 },
      ],
    },
    {
      domain: 'Red flag screening',
      items: [
        { description: 'Specifically asks about saddle anaesthesia (perineal/perianal numbness)', marks: 2 },
        { description: 'Specifically asks about bladder and bowel dysfunction — urinary retention, incontinence, faecal incontinence', marks: 2 },
        { description: 'Asks about bilateral leg weakness or progressive neurological deficit', marks: 1 },
        { description: 'Asks about systemic red flags: unexplained weight loss, fever, history of cancer, thoracic pain, age >50 with new onset', marks: 2 },
        { description: 'Asks about corticosteroid use or immunosuppression', marks: 1 },
      ],
    },
    {
      domain: 'Yellow flag screening',
      items: [
        { description: 'Identifies psychosocial yellow flags: catastrophising ("this will never get better"), fear-avoidance ("scared to move"), low mood, social withdrawal', marks: 2 },
        { description: 'Asks about occupational factors and work beliefs — identifies fear of reinjury preventing return to work; employer not in contact', marks: 1 },
        { description: 'Assesses mood — identifies pre-existing depression and worsening low mood since back pain onset', marks: 1 },
      ],
    },
    {
      domain: 'Social history and lifestyle',
      items: [
        { description: 'Asks about alcohol — identifies increase from 10 to 20 units/week since back pain onset; addresses sensitively', marks: 1 },
        { description: 'Asks about previous treatments and physiotherapy attendance — identifies that patient stopped after 2 sessions due to fear-avoidance', marks: 1 },
      ],
    },
    {
      domain: 'Interpreting examination / observations',
      items: [
        { description: 'States that straight leg raise and neurological examination of the lower limbs would be performed — notes no signs of radiculopathy', marks: 1 },
      ],
    },
    {
      domain: 'Management plan',
      items: [
        { description: 'Explains that imaging is not indicated for non-specific LBP without red flags', marks: 1 },
        { description: 'Addresses analgesia: recommends regular ibuprofen (with PPI) as more effective than paracetamol for non-specific LBP; discusses low-dose amitriptyline or duloxetine for chronic pain with neuropathic features or mood component', marks: 2 },
        { description: 'Emphasises the importance of remaining active — explains that bed rest and avoidance behaviour worsen prognosis; activity is safe', marks: 2 },
        { description: 'Refers to physiotherapy — specifically addresses the previous non-attendance due to fear-avoidance; a physiotherapist can also provide cognitive-behavioural approaches', marks: 1 },
        { description: 'Discusses return to work: staged return to work with occupational health involvement; advises against prolonged sickness absence given it predicts chronicity', marks: 1 },
      ],
    },
    {
      domain: 'ICE and addressing concerns',
      items: [
        { description: 'Addresses belief that pain means damage — corrects the fear-avoidance model; explains that persistent pain does not mean ongoing structural injury', marks: 1 },
        { description: 'Addresses concern about scan: explains why MRI is not indicated now and would not change management', marks: 1 },
      ],
    },
    {
      domain: 'Closing and safety-netting',
      items: [
        { description: 'Safety-nets: advises urgent attendance/999 if saddle anaesthesia, bladder/bowel dysfunction, or progressive bilateral leg weakness develops (cauda equina)', marks: 2 },
        { description: 'Arranges follow-up in 2–4 weeks to review response to treatment and mood', marks: 1 },
      ],
    },
    {
      domain: 'Key communication skills',
      items: [
        { description: 'Active listening — acknowledges the impact on work, relationship, and mood before problem-solving', marks: 1 },
        { description: 'Signposting and summarising — explains the plan clearly; frames activity and physiotherapy as evidence-based, not dismissive', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Mr Whitfield is a 42-year-old warehouse operative with a 3-month history of central lower back pain following a lifting injury at work — meeting the definition of chronic non-specific low back pain (>12 weeks)',
    'Red flag screen was negative: no saddle anaesthesia, no bladder or bowel dysfunction, no bilateral leg weakness, no fever, no weight loss, no history of cancer, no thoracic pain, no true nocturnal rest pain — no features to suggest cauda equina syndrome, malignancy, infection, or inflammatory back pain',
    'Several psychosocial yellow flags are present: catastrophising ("this will never get better"), fear-avoidance behaviour (stopped physiotherapy, not moving due to fear of worsening), significant functional impairment, low mood, social withdrawal, increased alcohol use, and passive illness behaviour — these are the strongest predictors of chronicity and disability',
    'Occupational concerns: 6 weeks off work; no contact from employer; fear of reinjury; this passivity and prolonged absence significantly increases the risk of permanent work incapacity',
    'Current analgesia (paracetamol) is inadequate — regular oral ibuprofen with a PPI is more effective for musculoskeletal pain; low-dose amitriptyline would address both the chronic pain component and the mood',
    'Management plan: switch to ibuprofen + PPI; add amitriptyline 10 mg nocte; re-refer to physiotherapy with specific explanation that movement is safe; address fear-avoidance beliefs; staged return to work with occupational health; address alcohol increase; continue sertraline and review mood',
    'Safety-netting: cauda equina red flags explained explicitly — if saddle anaesthesia, bladder/bowel dysfunction, or bilateral leg weakness develops, attend A&E immediately',
  ],
  vivaQuestions: [
    {
      question: 'What are the red flags for low back pain that require urgent investigation or referral?',
      keyPoints: [
        'Cauda equina syndrome: saddle anaesthesia, loss of bladder/bowel control (retention or incontinence), bilateral leg weakness — EMERGENCY; refer immediately to A&E for MRI',
        'Malignancy: history of cancer (especially breast, lung, prostate, thyroid, myeloma — most common to metastasise to spine), age >50 with new-onset back pain, unexplained weight loss, pain at rest/night unrelated to movement',
        'Infection: fever, rigors, recent invasive procedure, IV drug use, immunosuppression — consider discitis or epidural abscess; requires urgent bloods and MRI',
        'Fracture: significant trauma, prolonged corticosteroid use, age >70 — vertebral compression fracture',
        'Inflammatory back pain: age <40, gradual onset, morning stiffness >1 hour, improves with exercise — ankylosing spondylitis or axial spondyloarthropathy; refer to rheumatology; HLA-B27 positive in ~90%',
        'Thoracic pain: always a red flag — thoracic spine metastases, aortic aneurysm, or referred visceral pain',
      ],
      source: 'NICE NG59 (Low back pain and sciatica, 2016 updated 2020); geekymedics.com',
    },
    {
      question: 'What are yellow flags in low back pain and why are they clinically important?',
      keyPoints: [
        'Yellow flags are psychosocial factors that predict poor recovery and chronicity — the most important prognostic factors in non-specific LBP',
        'Key yellow flags: catastrophising (belief that pain means serious damage), fear-avoidance (avoiding activity due to fear of worsening), passive coping style, low mood/depression, belief that back pain is highly disabling, no expectation of returning to work',
        'Occupational yellow flags: job dissatisfaction, belief that work caused the injury, poor relationship with employer, heavy manual job, prolonged absence from work',
        'Identification is essential: patients with multiple yellow flags require a biopsychosocial approach — cognitive-behavioural therapy, pain management programme, occupational health involvement',
        'NICE NG59 recommends offering a combined physical and psychological programme (e.g. physiotherapy with CBT elements) for people with chronic LBP and yellow flags',
        'Prolonged sickness absence is itself a yellow flag: >4–6 weeks off work doubles the risk of not returning; >6 months off work = 50% chance of never returning to work',
      ],
      source: 'NICE NG59 (2016 updated 2020); Kendall NAS et al., The New Zealand Acute Low Back Pain Guide (1997) — original yellow flags framework',
    },
    {
      question: 'What is the pharmacological management of chronic non-specific low back pain in primary care?',
      keyPoints: [
        'NICE NG59: paracetamol alone is NOT recommended as first-line for non-specific LBP — weak evidence of efficacy for musculoskeletal pain',
        'NSAIDs (e.g. ibuprofen 400 mg TDS, naproxen 500 mg BD): first-line analgesics for non-specific LBP; add PPI (omeprazole) in patients over 45 or with GI risk factors',
        'Weak opioids (codeine, tramadol): short-term use only (≤4 weeks) for acute exacerbations; avoid long-term opioid prescribing for non-specific LBP — risk of dependence, no long-term benefit demonstrated',
        'Amitriptyline (10–75 mg nocte): useful for chronic pain with neuropathic features, sleep disturbance, or comorbid depression; sedating at low doses — beneficial for night pain',
        'Duloxetine (30–60 mg OD): NICE-approved for chronic low back pain — modest analgesic and mood benefit; fewer anticholinergic side effects than amitriptyline',
        'Gabapentinoids (gabapentin, pregabalin): NOT recommended for non-specific LBP — no evidence of benefit; risk of dependence; controlled substances',
      ],
      source: 'NICE NG59 (2016 updated 2020); BNF — analgesics in chronic pain',
    },
    {
      question: 'What is cauda equina syndrome, and what is the emergency management?',
      keyPoints: [
        'Cauda equina syndrome: compression of the cauda equina nerve roots (below L1) — surgical emergency; most commonly caused by large central lumbar disc prolapse at L4/L5 or L5/S1',
        'Symptoms: saddle anaesthesia (perineal, perianal, inner thigh numbness), bilateral leg weakness, urinary retention (late bladder dysfunction — loss of detrusor tone, overflow incontinence), faecal incontinence',
        'Two types: incomplete (urinary urgency + partial saddle anaesthesia) vs complete (retention + complete saddle anaesthesia) — incomplete has better surgical outcome',
        'Management: emergency referral to A&E for same-day or emergency MRI lumbar spine; neurosurgical or spinal surgical review immediately; surgical decompression within 24–48 hours of symptom onset gives best outcomes',
        'Do NOT wait for GP MRI referral — this is a surgical emergency',
        'Outcome if untreated: permanent bladder and bowel dysfunction, lower limb paralysis; outcome depends on duration and severity of compression before surgery',
      ],
      source: 'NICE NG59 (2016 updated 2020); BOAST Spinal Emergencies Guideline; Gleave & Macfarlane, Br J Neurosurg 2002',
    },
  ],
};

export const CHRONIC_DISEASE_REVIEW_MOCK_EXAMS: MockExamStation[] = [
  hypertensionReview,
  diabetesReview,
  asthmaReview,
  ckdReview,
  lowBackPain,
];
