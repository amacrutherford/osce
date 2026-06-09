import type { MockExamStation } from './mockExamTypes';

const metforminCounselling: MockExamStation = {
  id: 'gp_metformin_counselling',
  title: 'GP Consultation — Metformin Counselling for Newly Diagnosed Type 2 Diabetes',
  diagnosis: 'Type 2 diabetes mellitus — metformin initiation counselling',
  specialtyId: 'general-practice',
  candidateBrief: {
    setting: 'You are an FY1 in a GP surgery.',
    scenario:
      'Mrs Helen Marsh, 58, has been newly diagnosed with type 2 diabetes (HbA1c 54 mmol/mol). The GP has prescribed metformin 500 mg twice daily and asks you to counsel her before she leaves.',
    tasks: ['Counsel Mrs Marsh about her new metformin prescription'],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'Helen Marsh',
    age: 58,
    occupation: 'Retired school administrator',
    openingLine:
      '"The doctor said I\'ve got diabetes and I need to take tablets. I\'m a bit overwhelmed, if I\'m honest — I wasn\'t expecting this." [slightly anxious, fidgeting with prescription slip]',
    historyOfPresentingComplaint: [
      {
        label: 'Recent diagnosis — HbA1c 54 mmol/mol found at NHS health check; GP explained diabetes but time was limited',
        quote: '"The doctor explained what diabetes is but we ran out of time. I\'ve been given this prescription but I\'m not really sure what I\'m taking." – "I didn\'t want to ask too many questions in there."',
      },
      {
        label: 'Current symptoms — mild fatigue and thirst over 2–3 months; no polyuria; early and mild presentation',
        quote: '"I\'ve been a bit tired but I put it down to getting older. The test came back at my NHS health check — I didn\'t even go in feeling unwell." – "The doctor said it\'s caught early, which is something."',
      },
      {
        label: 'Prior knowledge of metformin — none; has read online that it causes stomach problems',
        quote: '"I did look it up online last night — it said it can cause quite bad sickness." – "My friend took it and said her stomach was terrible for weeks."',
      },
    ],
    pastMedicalHistory: [
      {
        label: 'Hypertension — on amlodipine 5 mg OD; well-controlled',
        quote: '"High blood pressure — I take amlodipine. Been on it about 3 years, no problems."',
      },
      {
        label: 'Hypercholesterolaemia — on atorvastatin 20 mg; well-controlled',
        quote: '"Cholesterol tablets — atorvastatin. The doctor added it last year after a blood test."',
      },
    ],
    drugHistory: [
      { label: 'Amlodipine 5 mg OD', quote: '"Amlodipine once a day for the blood pressure."' },
      { label: 'Atorvastatin 20 mg at night', quote: '"Atorvastatin at night for cholesterol."' },
      { label: 'No known drug allergies', quote: '"No allergies, no."' },
    ],
    familyHistory: [
      {
        label: 'Mother — type 2 diabetes, died age 72 of stroke',
        quote: '"My mum had diabetes. She had a stroke in her 70s." [slightly concerned; this is in the back of her mind]',
      },
    ],
    socialHistory: [
      {
        label: 'Retired; lives with husband; non-smoker; alcohol 7 units/week (wine with dinner)',
        quote: '"I\'m retired. I have a glass of wine most evenings — about 7 units a week I\'d say." – "I don\'t smoke."',
      },
      {
        label: 'Diet — "fairly healthy" but regular biscuits with tea; limited formal exercise',
        quote: '"I try to eat fairly well. Biscuits with my tea — that\'s my weakness." – "I don\'t really do structured exercise, just pottering around the house."',
      },
    ],
    importantNegatives: [
      'No renal problems ("My kidneys are fine — the doctor checked them.")',
      'No liver problems ("No liver problems.")',
      'No symptoms of lactic acidosis ("No muscle pain or unusual breathlessness.")',
      'No contrast dye procedures planned ("Nothing like that.")',
    ],
    ice: {
      ideas:
        '"I think it\'s because I\'ve been eating too much sugar — or maybe I just inherited it from my mum."',
      concerns:
        '"I\'m worried about the side effects my friend had. And I\'m worried about whether I\'ll have to inject insulin one day." – "My mum had to use insulin in the end and she hated it."',
      expectations:
        '"I just want to know how to take it properly and what to watch out for. And whether this is forever."',
    },
    onlyIfDirectlyAsked: [
      'Whether she drinks alcohol with meals — yes, usually wine with dinner most evenings',
      'Whether she checks her blood glucose at home — no, not been given a monitor',
      'Whether she has had any kidney tests — yes, eGFR reported as normal at health check',
    ],
    behaviourNotes: [
      'Anxious but cooperative; wants information and reassurance; responds well to clear explanations without jargon',
      'Asks "Will the stomach problems go away?" — student should explain: GI side effects are common but usually improve within 2–4 weeks; taking metformin with or immediately after food helps significantly; the dose is started low and titrated slowly for this reason',
      'Asks "Do I need to worry about going too low?" — student should explain: metformin alone does not cause hypoglycaemia — this is an important and reassuring point to make explicitly',
      'Asks "Can I stop taking it once my diet improves?" — student should explain: lifestyle changes are important and can reduce HbA1c, but most patients with T2DM require long-term medication; T2DM is a progressive condition',
      'Asks "What if I feel sick when travelling and can\'t eat?" — student should explain sick day rules: withhold metformin if vomiting or unable to eat; restart when eating normally; this is the key safety message',
      'Does NOT raise insulin unprompted — only responds to this if the student brings it up; does not want to be alarmed unnecessarily',
    ],
  },
  markScheme: [
    {
      domain: 'Opening the consultation',
      items: [
        { description: 'Introduces themselves; confirms patient identity', marks: 1 },
        {
          description: 'Uses an open question to explore what Mrs Marsh already understands about her diagnosis and why she has been prescribed metformin',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Exploring the patient\'s understanding of their condition',
      items: [
        {
          description: 'Asks what Mrs Marsh has already been told or read about type 2 diabetes and metformin — establishes baseline before providing information',
          marks: 1,
        },
        {
          description: 'Checks for prior concerns — identifies the friend\'s experience of GI side effects and underlying worry about insulin',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Explaining the indication — why metformin',
      items: [
        {
          description: 'Explains that metformin is the first-line medication for type 2 diabetes in the UK and is very well established',
          marks: 1,
        },
        {
          description: 'Explains the mechanism in plain English: metformin reduces the amount of glucose the liver releases into the blood and helps the body\'s cells respond better to insulin',
          marks: 1,
        },
        {
          description: 'Clarifies that metformin does not cause hypoglycaemia when used alone — explicitly addresses this common concern',
          marks: 2,
        },
        {
          description: 'Explains that metformin is weight-neutral — does not cause weight gain',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Dosing and administration',
      items: [
        {
          description: 'Explains the starting dose of 500 mg twice daily and the rationale for starting low and titrating up slowly to minimise GI side effects',
          marks: 1,
        },
        {
          description: 'Advises taking metformin with or immediately after food to reduce GI side effects',
          marks: 1,
        },
        {
          description: 'Explains the target dose (up to 500–1000 mg three times daily) and that increases are made gradually over several weeks',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Common side effects',
      items: [
        {
          description: 'Explains that GI side effects (nausea, diarrhoea, abdominal discomfort, metallic taste) are common, especially at initiation, but usually resolve within 2–4 weeks',
          marks: 1,
        },
        {
          description: 'Reassures that slow dose titration and taking with food significantly reduces the likelihood and severity of GI symptoms',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Serious / important side effects and safety advice',
      items: [
        {
          description: 'Explains lactic acidosis — rare but serious; mainly a risk in dehydration, renal impairment, or contrast dye procedures; explains the symptoms to watch for (muscle pain, weakness, breathing difficulty)',
          marks: 1,
        },
        {
          description: 'Gives sick day advice: withhold metformin if vomiting, diarrhoea, or unable to eat; also withheld on the day of and 48 hours after iodine contrast procedures; restart when eating and drinking normally',
          marks: 2,
        },
      ],
    },
    {
      domain: 'Monitoring requirements',
      items: [
        {
          description: 'Explains that kidney function (eGFR) is checked before starting and regularly thereafter — metformin is withheld if eGFR falls below 30',
          marks: 1,
        },
        {
          description: 'Explains that HbA1c blood tests will be done every 3 months initially to assess how well the diabetes is controlled',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Drug interactions / contraindications / things to avoid',
      items: [
        {
          description: 'Advises that alcohol should not be consumed in excess — alcohol combined with metformin increases the risk of lactic acidosis, and excess alcohol worsens diabetes control',
          marks: 1,
        },
        {
          description: 'Advises avoiding excess alcohol (>14 units/week) and mentions that binge drinking in particular should be avoided',
          marks: 1,
        },
      ],
    },
    {
      domain: 'ICE and addressing concerns',
      items: [
        {
          description: 'Explores Mrs Marsh\'s ideas, concerns, and expectations — addresses the specific worry about GI side effects from her friend\'s experience',
          marks: 1,
        },
        {
          description: 'Addresses the concern about insulin: explains that metformin is a first step and many patients remain on oral medication for years; insulin is not inevitable',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Closing the consultation and safety-netting',
      items: [
        {
          description: 'Summarises the key points and checks Mrs Marsh\'s understanding — asks if she has any remaining questions',
          marks: 1,
        },
        {
          description: 'Provides safety-netting: advises when to seek urgent help (inability to keep fluids down, symptoms of lactic acidosis); arranges follow-up blood tests',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Key communication skills',
      items: [
        { description: 'Active listening — responds to the patient\'s emotional concerns before providing factual information', marks: 1 },
        { description: 'Summarising and signposting — uses clear, jargon-free language throughout and checks understanding', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Mrs Marsh is a 58-year-old retired administrator newly diagnosed with type 2 diabetes (HbA1c 54 mmol/mol) who has been started on metformin 500 mg twice daily',
    'Counselling covered the mechanism of metformin in plain English — reduces hepatic glucose output and improves insulin sensitivity — and confirmed it is first-line per NICE NG28',
    'Key reassurance provided: metformin does not cause hypoglycaemia when used alone, and is weight-neutral — both important concerns for newly diagnosed patients',
    'GI side effects explained as common but typically self-limiting within 2–4 weeks; reinforced that taking the tablet with food and starting at a low dose minimises this risk',
    'Sick day rules clearly explained: withhold metformin if vomiting, diarrhoea, or unable to eat; also withhold around contrast dye procedures; restart when eating normally',
    'Alcohol advice given: excess alcohol with metformin increases lactic acidosis risk; advised to keep within safe limits (≤14 units/week)',
    'Safety-netting arranged: HbA1c recheck in 3 months; kidney function monitored; advised to contact surgery if unable to keep tablets down or experiences unusual muscle pain or breathlessness',
  ],
  vivaQuestions: [
    {
      question: 'What is the mechanism of action of metformin and why does it not cause hypoglycaemia?',
      keyPoints: [
        'Biguanide class: primary mechanism is inhibition of hepatic gluconeogenesis — reduces the liver\'s output of glucose',
        'Also increases peripheral insulin sensitivity in muscle and adipose tissue via activation of AMP-activated protein kinase (AMPK)',
        'Does not stimulate insulin secretion from beta cells — therefore glucose-lowering effect is glucose-dependent and does not drive blood glucose below normal',
        'Does not cause weight gain; modest weight loss observed in some patients',
        'Reduces HbA1c by approximately 1–1.5% (11–16 mmol/mol); evidence for cardiovascular benefit from UKPDS trial in overweight T2DM patients',
      ],
      source: 'NICE NG28 (Type 2 diabetes in adults, 2022); OHCM 10th ed., Ch. 5',
    },
    {
      question: 'What are the contraindications and cautions for metformin, and what are the sick day rules?',
      keyPoints: [
        'Absolute contraindication: eGFR <30 mL/min/1.73m² — risk of metformin accumulation and lactic acidosis',
        'Reduce dose or use with caution: eGFR 30–45 (reduce dose); eGFR 45–60 (caution, review regularly)',
        'Also contraindicated in severe hepatic impairment and alcohol excess (both increase lactic acidosis risk)',
        'Withhold for 48 hours before and after iodinated contrast media (CT scan dye) — contrast-induced nephropathy can acutely reduce eGFR and precipitate lactic acidosis',
        'Sick day rules: withhold if vomiting, diarrhoea, dehydration, or unable to eat — restart when eating and drinking normally; patient should know to seek medical advice if unwell for more than 24 hours',
      ],
      source: 'NICE NG28 (2022); BNF — metformin hydrochloride monograph',
    },
    {
      question: 'What is lactic acidosis and how does metformin contribute to it?',
      keyPoints: [
        'Lactic acidosis: accumulation of lactate (>5 mmol/L) with metabolic acidosis (pH <7.35) — high mortality (>50%) if severe',
        'Metformin inhibits mitochondrial complex I → impairs oxidative phosphorylation → shifts cellular metabolism towards anaerobic glycolysis → increased lactate production',
        'Risk is very low in patients with normal renal function; becomes significant when metformin accumulates (impaired clearance)',
        'Key risk factors: renal impairment, hepatic failure, dehydration, sepsis, contrast media, alcohol excess, cardiac failure',
        'Symptoms: nausea, vomiting, abdominal pain, myalgia, hyperventilation, altered consciousness',
      ],
      source: 'BNF — metformin hydrochloride monograph; OHCM 10th ed., Ch. 5',
    },
    {
      question: 'What is the stepwise approach to managing type 2 diabetes according to NICE NG28?',
      keyPoints: [
        'Step 1: metformin as first-line if HbA1c ≥48 mmol/mol; lifestyle interventions (diet, exercise, weight loss) alongside at all stages',
        'Step 2 (dual therapy): add SGLT2 inhibitor, DPP-4 inhibitor, sulfonylurea, or pioglitazone based on individual factors (CV disease → SGLT2i preferred)',
        'SGLT2 inhibitors preferred in patients with established CVD, HF, or CKD due to proven cardiorenal benefits (EMPA-REG, DAPA-HF)',
        'Step 3 (triple therapy): combine two agents from step 2 with metformin; GLP-1 receptor agonist may be considered in obesity (BMI >35)',
        'Insulin: initiated when HbA1c remains above target despite oral/injectable agents, or acutely if symptomatic hyperglycaemia',
        'HbA1c targets: 48 mmol/mol (6.5%) for lifestyle/metformin alone; 53 mmol/mol (7%) on drug therapy with hypoglycaemia risk',
      ],
      source: 'NICE NG28 (Type 2 diabetes in adults, 2022)',
    },
  ],
};

const sglt2Counselling: MockExamStation = {
  id: 'gp_sglt2_counselling',
  title: 'GP Consultation — SGLT2 Inhibitor Counselling (Dapagliflozin)',
  diagnosis: 'Type 2 diabetes mellitus with established cardiovascular disease — SGLT2 inhibitor initiation',
  specialtyId: 'general-practice',
  candidateBrief: {
    setting: 'You are an FY1 in a GP surgery.',
    scenario:
      'Mr James Okafor, 64, has type 2 diabetes and established cardiovascular disease. His diabetologist has recommended adding dapagliflozin 10 mg OD to his metformin. The GP asks you to counsel Mr Okafor about this new medication.',
    tasks: ['Counsel Mr Okafor about his new dapagliflozin prescription'],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'James Okafor',
    age: 64,
    occupation: 'Retired bus driver',
    openingLine:
      '"The specialist said I need another tablet for my diabetes. Something about protecting my heart. I\'m not sure I need another tablet to be honest — I\'m already taking a lot." [mildly reluctant, concerned about tablet burden]',
    historyOfPresentingComplaint: [
      {
        label: 'Current diabetes management — T2DM on metformin 1 g BD; HbA1c 62 mmol/mol at last check — above target',
        quote: '"I take metformin twice a day already. The nurse said my sugar levels are still a bit high — something like 62?" – "I\'ve tried to eat better but the numbers haven\'t come down enough."',
      },
      {
        label: 'Cardiovascular history — MI 2 years ago; stented; on aspirin, statin, and ramipril',
        quote: '"I had a heart attack 2 years ago. They put a stent in. I\'m on aspirin, the cholesterol tablet, and ramipril." – "The specialist said this new tablet is good for my heart as well as the diabetes."',
      },
      {
        label: 'Current understanding of dapagliflozin — none; has not heard of it; concerned about side effects',
        quote: '"The specialist mentioned Forxiga, I think. I looked it up and it said something about infections." – "I\'m already prone to thrush — I had it once last year and it was very uncomfortable."',
      },
    ],
    pastMedicalHistory: [
      {
        label: 'Type 2 diabetes — 8 years; currently on metformin 1 g BD',
        quote: '"Diabetes — about 8 years now. Metformin twice a day."',
      },
      {
        label: 'Myocardial infarction — 2 years ago; percutaneous coronary intervention (PCI) with stent',
        quote: '"Heart attack 2 years ago. They put in a stent. I\'ve been on blood thinners since."',
      },
      {
        label: 'Hypertension — on ramipril 5 mg OD',
        quote: '"High blood pressure — ramipril."',
      },
      {
        label: 'Hypercholesterolaemia — on atorvastatin 80 mg',
        quote: '"Cholesterol — atorvastatin, the high dose one."',
      },
    ],
    drugHistory: [
      { label: 'Metformin 1 g BD', quote: '"Metformin twice a day — with breakfast and dinner."' },
      { label: 'Aspirin 75 mg OD', quote: '"Aspirin — the small one — once a day."' },
      { label: 'Atorvastatin 80 mg at night', quote: '"Atorvastatin at night — 80 mg."' },
      { label: 'Ramipril 5 mg OD', quote: '"Ramipril once a day — 5 mg."' },
      { label: 'No known drug allergies', quote: '"No allergies."' },
    ],
    familyHistory: [
      {
        label: 'Father — type 2 diabetes; died of stroke age 68',
        quote: '"My dad had diabetes too. He died of a stroke at 68." [matter-of-fact; motivates him to protect his heart]',
      },
    ],
    socialHistory: [
      {
        label: 'Retired bus driver; lives with wife; non-smoker (quit after MI); alcohol 8 units/week',
        quote: '"I\'m retired — I drove buses for 30 years. I don\'t smoke — I stopped when I had the heart attack." – "I have a couple of beers on the weekend, about 8 units a week."',
      },
      {
        label: 'Moderately active — daily 20-minute walk; diet has improved since MI but still struggles with portion control',
        quote: '"I go for a walk every day since the heart attack — the cardiac rehab team got me into that." – "My wife cooks healthier now but I\'m a big eater."',
      },
    ],
    importantNegatives: [
      'No recurrent UTIs ("I\'ve had one or two UTIs before but not repeatedly.")',
      'No type 1 diabetes ("Definitely type 2 — the doctor confirmed it years ago.")',
      'No renal problems at last check ("The doctor said my kidneys are OK.")',
      'No Fournier\'s gangrene or perineal symptoms currently ("Nothing like that.")',
    ],
    ice: {
      ideas:
        '"The specialist said it helps the heart — I think it does something with the kidneys too, maybe?" – "I\'m not sure how a diabetes tablet helps the heart."',
      concerns:
        '"I\'m worried about getting thrush again — it was really embarrassing and uncomfortable." – "And I don\'t want anything that will make me feel worse."',
      expectations:
        '"I want to understand why I actually need this and what I need to watch out for. If it\'s genuinely going to protect my heart then I\'ll take it."',
    },
    onlyIfDirectlyAsked: [
      'Whether he has had genital thrush previously — yes, once, about a year ago; was treated with topical clotrimazole',
      'Whether he has experienced DKA symptoms — no, not aware of what that is until asked',
      'Whether he monitors blood glucose at home — no, not routinely; checks occasionally with a test strip',
    ],
    behaviourNotes: [
      'Mildly reluctant at the start due to tablet burden — becomes engaged once the cardiovascular benefit is explained; his father\'s stroke is a strong motivator',
      'Asks "How does a diabetes tablet help my heart?" — student should explain: SGLT2 inhibitors have been shown in large trials (EMPA-REG, DAPA-HF) to reduce heart attacks, hospitalisations for heart failure, and kidney disease progression; mechanism partly via cardiac unloading and renal effects',
      'Asks "Is thrush definitely going to happen?" — student should explain: genital mycotic infections are more common with SGLT2 inhibitors because glucose in the urine encourages yeast growth; it affects roughly 1 in 10 patients; good genital hygiene helps prevent it; antifungal treatment works if it occurs',
      'Asks "What is DKA — is that dangerous?" — student should explain: DKA (diabetic ketoacidosis) is a serious but rare complication; the key message is that if he is unwell, fasting, vomiting, or having surgery, he should STOP dapagliflozin and seek medical advice; his glucose can be normal during DKA with this drug (euglycaemic DKA) so standard low-glucose alarms may not trigger',
      'Asks "Do I need to stop it before my dental check-up?" — student should clarify: dental check-ups are not a reason to stop; withhold only if he is having a procedure requiring fasting or general anaesthetic',
      'Does not respond well to overly paternalistic advice — responds positively to shared decision-making',
    ],
  },
  markScheme: [
    {
      domain: 'Opening the consultation',
      items: [
        { description: 'Introduces themselves; confirms patient identity', marks: 1 },
        {
          description: 'Explores Mr Okafor\'s current understanding of why he has been prescribed dapagliflozin and his concerns about taking it',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Exploring the patient\'s understanding',
      items: [
        {
          description: 'Asks what Mr Okafor has been told by his specialist and what he has read about SGLT2 inhibitors',
          marks: 1,
        },
        {
          description: 'Acknowledges his concern about thrush and his reluctance about adding another medication',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Explaining the indication — why dapagliflozin',
      items: [
        {
          description: 'Explains that SGLT2 inhibitors are recommended for patients with type 2 diabetes and established cardiovascular disease because they reduce the risk of further heart attacks, heart failure, and kidney disease progression',
          marks: 2,
        },
        {
          description: 'Explains the mechanism in accessible language: dapagliflozin works on the kidneys to remove excess glucose in the urine, which also lowers blood glucose, blood pressure, and has direct beneficial effects on the heart',
          marks: 1,
        },
        {
          description: 'Mentions that dapagliflozin can also cause modest weight loss — a beneficial side effect in most patients',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Dosing and administration',
      items: [
        {
          description: 'Explains the dose: dapagliflozin 10 mg once daily, taken orally, with or without food',
          marks: 1,
        },
        {
          description: 'Explains it is taken in addition to metformin, not instead of it',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Common side effects',
      items: [
        {
          description: 'Explains that genital mycotic infections (thrush) are the most common side effect — caused by increased urinary glucose encouraging yeast growth; affects approximately 1 in 10 patients',
          marks: 2,
        },
        {
          description: 'Gives practical hygiene advice to reduce thrush risk: good genital hygiene, keeping the area dry, wearing breathable cotton underwear',
          marks: 1,
        },
        {
          description: 'Mentions increased urinary frequency and urinary tract infections as possible side effects — advises to seek treatment promptly',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Serious side effects and sick day rules',
      items: [
        {
          description: 'Explains euglycaemic DKA: rare but serious; can occur even with near-normal blood glucose; symptoms include nausea, vomiting, abdominal pain, fatigue; advises checking urine/blood ketones if unwell',
          marks: 2,
        },
        {
          description: 'Gives clear sick day rules: WITHHOLD dapagliflozin if unwell with vomiting, unable to eat, fasting for surgery, or during serious illness; restart 24 hours after eating and drinking normally',
          marks: 2,
        },
        {
          description: 'Mentions Fournier\'s gangrene as a very rare but serious infection of the genital/perineal area — advises to seek urgent review if severe pain, redness, or swelling in that area',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Monitoring requirements',
      items: [
        {
          description: 'Explains that renal function (eGFR) and HbA1c should be monitored regularly; dapagliflozin for diabetes should not be started if eGFR <30',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Drug interactions and contraindications',
      items: [
        {
          description: 'Advises that dapagliflozin should be withheld before planned surgery or procedures requiring fasting — explains that combined insulin effect and fasting increases DKA risk',
          marks: 1,
        },
      ],
    },
    {
      domain: 'ICE and addressing concerns',
      items: [
        {
          description: 'Explores Mr Okafor\'s ideas, concerns, and expectations — specifically addresses his concern about thrush and his question about why a diabetes drug helps the heart',
          marks: 1,
        },
        {
          description: 'Links the cardiovascular benefit to his personal history — his father\'s stroke and his own MI — to contextualise the recommendation',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Closing the consultation and safety-netting',
      items: [
        {
          description: 'Summarises key points and confirms Mr Okafor\'s understanding; asks if he has any remaining questions',
          marks: 1,
        },
        {
          description: 'Provides safety-netting: advises to stop dapagliflozin and seek medical help if he becomes unwell with nausea, vomiting, or feeling very unwell; arranges follow-up',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Key communication skills',
      items: [
        { description: 'Active listening — addresses the patient\'s reluctance about tablet burden before moving to factual information', marks: 1 },
        { description: 'Summarising and signposting throughout; checks understanding using teach-back', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Mr Okafor is a 64-year-old retired bus driver with type 2 diabetes (HbA1c 62 mmol/mol on metformin) and established cardiovascular disease (MI 2 years ago, stented) who has been started on dapagliflozin 10 mg OD',
    'The cardiovascular indication was explained clearly: SGLT2 inhibitors are recommended in patients with T2DM and established CVD due to proven reductions in MACE, hospitalisation for heart failure, and CKD progression (EMPA-REG OUTCOME, DECLARE-TIMI 58)',
    'Mechanism explained accessibly: dapagliflozin blocks glucose reabsorption in the kidney → glycosuria → lower blood glucose, blood pressure, and direct cardiorenal benefits; also causes modest weight loss',
    'Thrush (most common side effect) discussed with practical prevention advice; approximately 1 in 10 patients affected; treatable if it occurs',
    'Euglycaemic DKA explained as a serious rare complication — key safety message delivered: WITHHOLD if unwell, vomiting, fasting, or pre-surgery; restart 24 hours after eating normally; ketones may be elevated even with normal glucose',
    'Monitoring plan confirmed: eGFR and HbA1c regularly; dapagliflozin should not be continued if eGFR falls below 30',
    'Patient\'s concerns addressed; linked cardiovascular benefit to his personal history; arranged follow-up with GP or diabetes nurse in 4–6 weeks',
  ],
  vivaQuestions: [
    {
      question: 'What is the mechanism of action of SGLT2 inhibitors and what are their cardiorenal benefits?',
      keyPoints: [
        'SGLT2 (sodium-glucose cotransporter 2) is located in the proximal renal tubule; normally reabsorbs ~90% of filtered glucose',
        'SGLT2 inhibitors block this transporter → glucose and sodium are excreted in urine (glycosuria and natriuresis) → lower blood glucose and blood pressure',
        'Cardiorenal mechanism: reduced preload and afterload, decreased sympathetic tone, anti-inflammatory and anti-fibrotic effects, and possibly direct myocardial energy substrate switching (ketone bodies)',
        'EMPA-REG OUTCOME (empagliflozin): 14% reduction in 3-point MACE, 35% reduction in hospitalisation for HF in T2DM + CVD',
        'DAPA-HF (dapagliflozin): 26% reduction in worsening heart failure or cardiovascular death — also in patients without diabetes',
        'NICE NG28 and NICE TA775: recommend SGLT2i as add-on to metformin in T2DM with established CVD, heart failure, or CKD',
      ],
      source: 'NICE NG28 (2022); Zinman B et al., NEJM 2015 (EMPA-REG); McMurray JJV et al., NEJM 2019 (DAPA-HF)',
    },
    {
      question: 'What is euglycaemic DKA in the context of SGLT2 inhibitor use and how is it managed?',
      keyPoints: [
        'Euglycaemic DKA: metabolic acidosis with raised ketones but blood glucose is usually normal or only mildly elevated (<14 mmol/L)',
        'SGLT2 inhibitors promote glucosuria (lowering glucose) while simultaneously promoting ketogenesis via reduced insulin secretion and increased glucagon — this masks the hyperglycaemia normally used to detect DKA',
        'Precipitants: prolonged fasting, low-carbohydrate diet, alcohol excess, illness, surgery, or reduced insulin dose in type 1 DM',
        'Presentation: nausea, vomiting, abdominal pain, shortness of breath, fatigue — may be misdiagnosed as other conditions because glucose is near-normal',
        'Management: STOP SGLT2 inhibitor; IV fluids and insulin infusion; treat precipitant; check blood or urine ketones in any unwell patient on SGLT2i regardless of glucose level',
        'Prevention: sick day rules — withhold SGLT2i if unwell, fasting, pre-procedure, or unable to eat; restart 24 hours after eating normally',
      ],
      source: 'MHRA Drug Safety Update (SGLT2 inhibitors: risk of DKA, 2020); BNF — dapagliflozin monograph',
    },
    {
      question: 'What are the contraindications and cautions for SGLT2 inhibitors?',
      keyPoints: [
        'Absolute contraindication for diabetes indication: eGFR <30 mL/min (insufficient glycosuria to lower glucose effectively; however HF/CKD indications have different thresholds — dapagliflozin for HF licensed down to eGFR 25)',
        'Not licensed for type 1 diabetes (risk of DKA without the glucose-lowering benefit being predictable)',
        'Caution in recurrent UTIs or genital mycotic infections — patient counselling and hygiene advice essential',
        'Fournier\'s gangrene (necrotising fasciitis of genitoperineum): very rare but life-threatening; requires emergency surgery; advise to seek urgent help if genital pain, swelling, redness, or fever',
        'Withhold before surgery and during acute illness — sick day rules essential; also avoid in hyperosmolar hyperglycaemic state (HHS)',
        'Volume depletion: caution in elderly or those on loop diuretics — risk of dehydration and postural hypotension',
      ],
      source: 'NICE NG28 (2022); BNF — dapagliflozin monograph; MHRA Drug Safety Update (2020)',
    },
    {
      question: 'Which SGLT2 inhibitors are available in the UK and what are their licensed indications?',
      keyPoints: [
        'Dapagliflozin (Forxiga) 10 mg OD: T2DM, symptomatic heart failure (HFrEF and HFpEF), CKD (eGFR ≥25 + proteinuria); multiple licensed indications',
        'Empagliflozin (Jardiance) 10–25 mg OD: T2DM, heart failure (HFrEF), CKD; EMPA-KIDNEY trial showed renal benefits',
        'Canagliflozin (Invokana) 100–300 mg OD: T2DM; highest rate of lower limb amputation risk in early post-marketing surveillance (now thought lower with appropriate patient selection)',
        'NICE TA775 (2021): dapagliflozin for CKD with or without diabetes — reduces progression to ESRD and cardiovascular events',
        'Ertugliflozin (Steglatro): licensed for T2DM only; less evidence base compared to dapagliflozin and empagliflozin',
        'Choice should be guided by comorbidities: established CVD or HF — any of the three with strong trial data; CKD — dapagliflozin or empagliflozin preferred',
      ],
      source: 'NICE NG28 (2022); NICE TA775 (2021); BNF — SGLT2 inhibitors section',
    },
  ],
};

const insulinCounselling: MockExamStation = {
  id: 'gp_insulin_counselling',
  title: 'GP Consultation — Insulin Initiation Counselling for Type 2 Diabetes',
  diagnosis: 'Type 2 diabetes mellitus — insulin initiation counselling',
  specialtyId: 'general-practice',
  candidateBrief: {
    setting: 'You are an FY1 in a GP surgery.',
    scenario:
      'Mr David Chen, 67, has type 2 diabetes that is no longer controlled on his current oral medications. His GP has decided to start basal insulin (Lantus 10 units at bedtime). Mr Chen is anxious about starting insulin and has come to discuss the new prescription.',
    tasks: ['Counsel Mr Chen about starting insulin injections for his type 2 diabetes'],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'David Chen',
    age: 67,
    occupation: 'Retired accountant (drives regularly)',
    openingLine:
      '"I really didn\'t want to hear that I need injections. I\'ve been dreading this for years." [visibly anxious; has needle phobia — not severe, but unsettling]',
    historyOfPresentingComplaint: [
      {
        label: 'Current diabetes control — HbA1c 82 mmol/mol despite metformin 1 g BD and gliclazide 160 mg BD; diet adherence variable',
        quote: '"The doctor said my sugars are still too high — 82, I think. I am taking my tablets, but I know my diet hasn\'t been brilliant." – "I\'ve tried but it\'s hard to keep it up."',
      },
      {
        label: 'Symptoms of hyperglycaemia — fatigue, nocturia ×2 per night, blurred vision on and off',
        quote: '"I\'m very tired — really drained. I get up twice in the night to go to the loo." – "My vision goes a bit blurry sometimes, which worries me."',
      },
      {
        label: 'Prior knowledge and concerns about insulin — fear of injections; believes starting insulin means he has "failed"; has heard it causes weight gain and "makes everything worse"',
        quote: '"I feel like I\'ve failed if I\'m honest. Like I should have tried harder with my diet." – "My neighbour started insulin and he put on a lot of weight and then had low blood sugars all the time."',
      },
    ],
    pastMedicalHistory: [
      {
        label: 'Type 2 diabetes — 12 years; previously on metformin and gliclazide',
        quote: '"Diabetes — 12 years. Metformin and gliclazide."',
      },
      {
        label: 'Hypertension — on amlodipine 10 mg OD and ramipril 5 mg OD',
        quote: '"High blood pressure — amlodipine and ramipril."',
      },
      {
        label: 'Stage 3a CKD — eGFR 52; no proteinuria',
        quote: '"The doctor said my kidneys are slightly reduced — stage 3 they said. Being monitored."',
      },
    ],
    drugHistory: [
      { label: 'Metformin 1 g BD (will continue alongside insulin)', quote: '"Metformin twice a day."' },
      { label: 'Gliclazide 160 mg BD (to be reviewed/reduced once insulin started)', quote: '"Gliclazide — twice a day, with breakfast and dinner."' },
      { label: 'Amlodipine 10 mg OD', quote: '"Amlodipine once a day."' },
      { label: 'Ramipril 5 mg OD', quote: '"Ramipril once a day."' },
      { label: 'No known drug allergies', quote: '"No allergies."' },
    ],
    familyHistory: [
      {
        label: 'Father — type 2 diabetes on insulin from age 65; died of kidney failure',
        quote: '"My dad had diabetes and he had to have dialysis in the end. That really scared me when I was diagnosed." [this underlies much of his anxiety]',
      },
    ],
    socialHistory: [
      {
        label: 'Retired accountant; drives regularly — car and occasional longer journeys; lives alone since wife passed away 2 years ago',
        quote: '"I\'m retired. I live on my own — my wife passed 2 years ago." [brief pause] "I drive to the shops, to see my daughter. I drive quite a lot actually."',
      },
      {
        label: 'Non-smoker; alcohol 6 units/week; diet — eats alone, convenience foods; limited cooking',
        quote: '"I don\'t smoke. I have a couple of glasses of wine a week." – "Since my wife died, I don\'t cook much. Ready meals mostly." [a little shame about this]',
      },
    ],
    importantNegatives: [
      'No previous episodes of severe hypoglycaemia ("No, nothing like that — I\'ve been lucky.")',
      'No visual loss or diabetic eye disease confirmed at last eye check ("My eye test last year was fine they said — no damage.")',
      'No foot ulcers or active foot problems ("My feet are OK — I see the podiatrist.")',
      'No previous insulin use ("Never used it before.")',
    ],
    ice: {
      ideas:
        '"I think my pancreas has just given up, hasn\'t it? I suppose the tablets can\'t do the work anymore." – "Maybe if I\'d been stricter with my diet earlier, I wouldn\'t be here."',
      concerns:
        '"I\'m worried about injecting myself — I\'ve never been good with needles." – "And I drive a lot. Will I be able to drive? My daughter lives far away." [this is his biggest practical concern]',
      expectations:
        '"I just need to know how to do it and whether it\'s going to change my life — especially the driving."',
    },
    onlyIfDirectlyAsked: [
      'Whether he lives alone — yes, since his wife died; daughter visits weekly',
      'Whether he has anyone to help initially with injections — daughter is happy to help; practice nurse can supervise first injections',
      'Whether he has a sharps bin — no; student should mention this needs to be arranged',
    ],
    behaviourNotes: [
      'Anxious and slightly dejected at the start; the student should proactively address his feeling of "failure" — insulin initiation is not a failure, it is the natural progression of T2DM as beta cell function declines',
      'Becomes noticeably more engaged when driving is discussed — this is his most important practical concern',
      'Asks "Can I still drive?" — this is the critical question; student must address DVLA rules: must inform DVLA; must not drive if blood glucose <5 mmol/L; must check blood glucose before driving and every 2 hours on long journeys; always carry fast-acting glucose in the car; DVLA Group 1 licence usually maintained on basal insulin alone',
      'Asks "Will insulin make me put on weight?" — student should acknowledge weight gain is a common side effect; however, starting at a low basal dose and monitoring carefully reduces this; lifestyle remains important',
      'Asks "How do I inject — doesn\'t it hurt?" — student should briefly explain the pen device, needle sizes, injection sites (abdomen, thigh, upper arm); rotate sites to avoid lipohypertrophy; modern insulin pen needles are very fine and most people find it much less painful than they expect',
      'Asks "What do I do if I go low?" — student should explain the rule of 15: 15–20 g fast-acting carbohydrate (4–5 glucose tablets, 150 mL juice), recheck in 15 minutes, repeat if still <4 mmol/L; carry glucose at all times',
      'Visibly relieved when told the initial dose is low (10 units) and will be titrated gradually with support from the diabetes nurse',
    ],
  },
  markScheme: [
    {
      domain: 'Opening the consultation',
      items: [
        { description: 'Introduces themselves; confirms patient identity; acknowledges Mr Chen\'s visible anxiety about starting insulin', marks: 1 },
        {
          description: 'Explores Mr Chen\'s existing understanding and concerns about insulin — including the belief that starting insulin represents personal failure',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Exploring the patient\'s understanding and addressing concerns',
      items: [
        {
          description: 'Addresses the feeling of failure directly: explains that insulin initiation reflects the progressive nature of T2DM (beta cell decline), not a failure of effort or willpower',
          marks: 2,
        },
        {
          description: 'Asks about Mr Chen\'s specific fears — needles, weight gain, driving — and addresses each',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Explaining the indication — why insulin now',
      items: [
        {
          description: 'Explains that insulin is being started because his HbA1c remains high despite maximum oral therapy, putting him at risk of complications (eyes, kidneys, feet, heart)',
          marks: 1,
        },
        {
          description: 'Describes the type of insulin prescribed: basal insulin (Lantus/insulin glargine) — once-daily injection at bedtime; primarily controls overnight and fasting glucose',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Injection technique and equipment',
      items: [
        {
          description: 'Explains the insulin pen device: how to attach a needle, dial the dose, inject into subcutaneous fat (not muscle)',
          marks: 1,
        },
        {
          description: 'Names appropriate injection sites: abdomen (most reliable absorption), anterior thigh, upper outer arm; explains the importance of rotating sites within each area to prevent lipohypertrophy',
          marks: 1,
        },
        {
          description: 'Advises to dispose of used needles safely in a sharps bin — explains this is provided on prescription',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Hypoglycaemia — recognition, treatment, and prevention',
      items: [
        {
          description: 'Explains hypoglycaemia: blood glucose <4 mmol/L; symptoms include sweating, shaking, confusion, pallor, hunger, dizziness',
          marks: 1,
        },
        {
          description: 'Explains the rule of 15: 15–20 g fast-acting carbohydrate (glucose tablets, fruit juice, sugary drink); recheck blood glucose in 15 minutes; repeat if still <4 mmol/L; follow with a slow-release snack',
          marks: 2,
        },
        {
          description: 'Advises to always carry fast-acting glucose (glucose tablets or Lucozade) at all times, especially when driving',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Driving — DVLA rules (critical domain)',
      items: [
        {
          description: 'Explains that Mr Chen MUST inform the DVLA that he is starting insulin — failure to do so could invalidate his insurance and is a legal requirement',
          marks: 2,
        },
        {
          description: 'Explains the DVLA rules: must not drive if blood glucose <5 mmol/L; must check blood glucose before driving and every 2 hours on longer journeys; carry glucose in the vehicle at all times',
          marks: 2,
        },
        {
          description: 'Explains that Group 1 (car/motorcycle) driving licence is usually retained on basal insulin alone — reassures Mr Chen he is likely to continue driving with appropriate precautions',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Insulin storage and sick day rules',
      items: [
        {
          description: 'Explains insulin storage: in-use insulin pen can be kept at room temperature for up to 28 days; spare insulin stored in the fridge (never frozen)',
          marks: 1,
        },
        {
          description: 'Sick day rules: NEVER stop insulin when unwell — illness causes hyperglycaemia and insulin requirement may INCREASE; monitor blood glucose more frequently; seek medical advice if blood glucose persistently >15 mmol/L or unable to eat',
          marks: 2,
        },
      ],
    },
    {
      domain: 'ICE and addressing concerns',
      items: [
        {
          description: 'Explores Mr Chen\'s ideas, concerns, and expectations — specifically addresses driving (his primary concern) and fear of hypoglycaemia',
          marks: 1,
        },
        {
          description: 'Acknowledges the personal loss (wife\'s death, living alone) and ensures he has support (daughter, diabetes nurse) for the transition to insulin',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Closing the consultation and safety-netting',
      items: [
        {
          description: 'Summarises key points; provides written information; confirms Mr Chen will be seen by the diabetes nurse for supervised first injection',
          marks: 1,
        },
        {
          description: 'Safety-nets: advises to call the surgery urgently if blood glucose >15 mmol/L or <3 mmol/L, if he feels unwell, or if he has any concerns about driving safety',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Key communication skills',
      items: [
        { description: 'Active listening — gives time for Mr Chen to express his fears about "failure" and needles before providing information', marks: 1 },
        { description: 'Signposting — structures the consultation clearly so Mr Chen knows what will be covered', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Mr Chen is a 67-year-old retired accountant with type 2 diabetes (12 years, HbA1c 82 mmol/mol on dual oral therapy) who has been started on basal insulin (Lantus 10 units at bedtime)',
    'His main concerns were addressed: his feeling of "failure" (reframed as natural T2DM progression due to beta cell decline, not personal failure), needle fear (modern pen needles are fine, most find it less painful than expected), and weight gain (acknowledged but monitored)',
    'The critical DVLA discussion was held: must notify DVLA; cannot drive if blood glucose <5 mmol/L; must test before driving and 2-hourly on long journeys; carry glucose in vehicle; Group 1 licence likely retained on basal insulin',
    'Hypoglycaemia management explained: rule of 15 (15–20 g fast-acting carbs), recheck after 15 minutes, always carry glucose; gliclazide dose will be reviewed to reduce hypoglycaemia risk once insulin is established',
    'Injection technique covered: subcutaneous administration, site rotation (abdomen preferred), lipohypertrophy prevention; sharps bin to be prescribed',
    'Sick day rules: NEVER stop insulin when unwell; illness increases insulin requirements; monitor blood glucose more frequently; seek advice if BG persistently >15 mmol/L or unable to eat',
    'Follow-up arranged with the diabetes specialist nurse for supervised first injection; contact details given; safety-netting advice provided',
  ],
  vivaQuestions: [
    {
      question: 'What types of insulin are available in the UK and when are they used?',
      keyPoints: [
        'Rapid-acting analogues (e.g. NovoRapid/aspart, Humalog/lispro): onset 10–20 min, peak 1–3 h, duration 3–5 h; used as mealtime (bolus) insulin',
        'Short-acting (soluble) insulin (e.g. Actrapid, Humulin S): onset 30–60 min; used IV in hospital or in premixed preparations',
        'Intermediate-acting (NPH/isophane, e.g. Humulin I, Insulatard): onset 1–2 h, duration 12–18 h; used as basal insulin BD or combined with rapid-acting as premixed',
        'Long-acting analogues (e.g. insulin glargine/Lantus, insulin detemir/Levemir): once-daily flat profile; preferred basal insulin in T2DM initiation; less nocturnal hypoglycaemia than NPH',
        'Premixed insulins (e.g. Novomix 30, Humulin M3): 30% rapid-acting + 70% intermediate; twice-daily injections with meals; used in T2DM for convenience',
        'NICE NG28: basal insulin (once-daily long-acting) preferred for initial insulin therapy in T2DM; move to basal-bolus if HbA1c target not met',
      ],
      source: 'NICE NG28 (2022); BNF — insulins section; Diabetes UK insulin prescribing guide',
    },
    {
      question: 'What are the DVLA regulations for patients with diabetes starting insulin, and what licence restrictions apply?',
      keyPoints: [
        'All patients starting insulin must inform the DVLA and must complete form DIAB1 (or DIAB2 for Group 2 licences) — failure to do so may invalidate motor insurance',
        'Group 1 licence (car, motorcycle): usually retained on insulin if no severe hypoglycaemia episodes; cannot drive if blood glucose <5 mmol/L; must carry fast-acting glucose in vehicle',
        'Must check blood glucose within 2 hours before driving and every 2 hours on long journeys; if BG is 5–8 mmol/L, take a snack',
        'If hypoglycaemia occurs while driving: stop safely as soon as possible; do not restart driving for 45 minutes after recovery and confirmed BG >5 mmol/L',
        'Group 2 licence (HGV, bus/coach): requires 3-monthly review by a DVLA-approved specialist; stricter BG thresholds; some patients lose Group 2 entitlement on insulin',
        'Patients with impaired hypoglycaemia awareness are not permitted to drive until awareness is restored',
      ],
      source: 'DVLA "At a glance guide to the current medical standards of fitness to drive" (2023); Diabetes UK driving guidance',
    },
    {
      question: 'How is basal insulin titrated in type 2 diabetes and what is the sick day rule?',
      keyPoints: [
        'Starting dose: typically 10 units once daily at bedtime (or 0.1–0.2 units/kg); dose adjusted based on fasting blood glucose (FBG)',
        'Titration: increase by 2 units every 3 days until FBG is 4–7 mmol/L (target range); patient should self-adjust or nurse-supported titration',
        'If FBG consistently 7–10 mmol/L: increase by 2 units; if >10 mmol/L: increase by 4 units; if <4 mmol/L: reduce dose by 2–4 units',
        'Sick day rules for insulin: NEVER stop insulin when unwell — illness causes cortisol and glucagon release → hyperglycaemia → insulin requirement often INCREASES',
        'During illness: monitor BG every 4 hours; increase testing frequency; seek medical advice if BG >15 mmol/L, unable to eat, or ketones present',
        'Concurrent oral agents: gliclazide should be reviewed/reduced once insulin is established to minimise hypoglycaemia risk; metformin usually continued',
      ],
      source: 'NICE NG28 (2022); Diabetes UK sick day rules guidance; BNF — insulin glargine monograph',
    },
    {
      question: 'What is lipohypertrophy, how does it affect insulin therapy, and how is it prevented?',
      keyPoints: [
        'Lipohypertrophy: localised accumulation of subcutaneous fat at insulin injection sites due to repeated injection into the same area; forms a firm, rubbery lump',
        'Effect on insulin: insulin absorbed from lipohypertrophic tissue is unpredictable — absorption is delayed and erratic, leading to poor glycaemic control and unexplained hypoglycaemia',
        'Prevalence: found in up to 50% of insulin-treated patients; often unnoticed unless specifically examined',
        'Prevention: rotate injection sites systematically — divide the injection area into quadrants; use a new needle for each injection (blunt needles cause more tissue trauma)',
        'Management: avoid injecting into affected areas; lipohypertrophy usually resolves over months once the site is rested',
        'Lipoatrophy (fat loss at injection site): less common with modern human insulin; more commonly seen with older animal insulins',
      ],
      source: 'Blanco M et al., Diabetes Metab 2013; Diabetes UK injection technique guidance; BNF — insulins section',
    },
  ],
};

const aceInhibitorCounselling: MockExamStation = {
  id: 'gp_ace_inhibitor_counselling',
  title: 'GP Consultation — ACE Inhibitor Counselling (Ramipril for Hypertension)',
  diagnosis: 'Hypertension — ACE inhibitor (ramipril) initiation counselling',
  specialtyId: 'general-practice',
  candidateBrief: {
    setting: 'You are an FY1 in a GP surgery.',
    scenario:
      'Mrs Amara Patel, 42, has been diagnosed with hypertension and type 2 diabetes. The GP has prescribed ramipril 2.5 mg OD as first-line treatment. She has come to discuss the new prescription before leaving the surgery.',
    tasks: ['Counsel Mrs Patel about her new ramipril prescription'],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'Amara Patel',
    age: 42,
    occupation: 'Secondary school teacher',
    openingLine:
      '"The doctor said I need a blood pressure tablet. She mentioned it also helps protect my kidneys because of my diabetes. I\'m not keen on taking medication at 42 — is it really necessary?" [slightly resistant but wants to be convinced; health-conscious]',
    historyOfPresentingComplaint: [
      {
        label: 'Recent diagnosis — BP 158/96 mmHg at two separate readings; type 2 diabetes diagnosed 1 year ago; on metformin',
        quote: '"My blood pressure was high twice when they checked it — 158 over 96 or something. The doctor said it\'s been high at my last two appointments." – "I thought it would come down once I started the diet."',
      },
      {
        label: 'Prior understanding of ramipril — has heard of ACE inhibitors; seen them mentioned in an article about diabetes complications',
        quote: '"I looked it up — it\'s an ACE inhibitor? I read they can cause a cough." – "A colleague at work takes ramipril and she mentioned a cough. I\'m a teacher — I can\'t have a persistent cough in the classroom."',
      },
      {
        label: 'Cardiovascular risk awareness — knows she has raised CV risk due to combination of hypertension and diabetes; wants to understand why the drug helps beyond BP lowering',
        quote: '"I know diabetes and blood pressure together are bad for the heart and kidneys." – "The doctor said ramipril is particularly good for people with diabetes — can you explain why?"',
      },
    ],
    pastMedicalHistory: [
      {
        label: 'Type 2 diabetes — 1 year; on metformin 500 mg BD; HbA1c 54 mmol/mol',
        quote: '"Diabetes — about a year now. I take metformin twice a day. The last HbA1c was 54 I think — almost at target."',
      },
      {
        label: 'Hypertension — newly diagnosed; no target organ damage found at assessment',
        quote: '"Just diagnosed with high blood pressure. They checked my urine and did a heart trace — all fine, the doctor said."',
      },
    ],
    drugHistory: [
      { label: 'Metformin 500 mg BD', quote: '"Metformin — twice a day with meals."' },
      { label: 'No other regular medications; no OTC NSAIDs', quote: '"Nothing else regular." – "I do take ibuprofen occasionally for headaches — is that OK?" [will ask this if student mentions NSAIDs]' },
      { label: 'No known drug allergies; no previous ACE inhibitor use', quote: '"No allergies."' },
    ],
    familyHistory: [
      {
        label: 'Father — hypertension and type 2 diabetes; chronic kidney disease (CKD stage 4)',
        quote: '"My dad has diabetes and high blood pressure. His kidneys are quite bad now — stage 4 they said. The doctor had to stop one of his tablets." [her father\'s kidney disease is her primary motivator to comply]',
      },
      {
        label: 'Mother — no significant medical history',
        quote: '"My mum is healthy — no problems."',
      },
    ],
    socialHistory: [
      {
        label: 'Secondary school teacher; stressful job; does not smoke; alcohol 6 units/week',
        quote: '"I\'m a teacher — full-time. It\'s stressful, especially exam season." – "I don\'t smoke." – "A glass of wine a couple of evenings a week — maybe 6 units."',
      },
      {
        label: 'Married with two children; exercises 3× per week; healthy diet since diabetes diagnosis',
        quote: '"I\'m married with two kids. I run 3 times a week since the diabetes diagnosis." – "I eat really well now — salads, cut out the processed stuff."',
      },
    ],
    importantNegatives: [
      'No current cough ("No cough at the moment — that\'s why I\'m worried about getting one.")',
      'No previous swelling of lips, tongue, or face ("Nothing like that.")',
      'Not pregnant and not planning pregnancy currently ("I\'m not pregnant. We\'re not planning any more children." [if asked about pregnancy — important contraindication])',
      'No kidney artery problems known ("I don\'t think so — the doctor checked my urine and said it was fine.")',
      'No history of hyperkalaemia ("I don\'t know what that means." [if asked, student should explain briefly])',
    ],
    ice: {
      ideas:
        '"I think I need it because my blood pressure and diabetes together are putting stress on my kidneys — like what happened to my dad." – "I suppose the doctor would know best."',
      concerns:
        '"I\'m really worried about the cough — I\'m a teacher and I\'m talking all day. A persistent cough would be really disruptive." – "And I\'m worried about the ibuprofen I take for headaches — is that OK?"',
      expectations:
        '"I want to understand what the tablet does, what to watch out for, and what I should do if I get a cough."',
    },
    onlyIfDirectlyAsked: [
      'Whether she is using contraception — yes, on combined oral contraceptive pill; student should note this does not directly interact with ramipril but blood pressure should be monitored',
      'Whether she checks her blood pressure at home — no; could be suggested as useful for monitoring',
      'Whether she takes ibuprofen regularly — occasionally for headaches; student must advise to avoid NSAIDs or use paracetamol instead',
    ],
    behaviourNotes: [
      'Health-conscious and engaged; asks good questions; responds well to evidence-based explanations',
      'Her father\'s kidney disease is her most powerful motivator — the student should connect the nephroprotective benefit of ramipril to this personal family history',
      'Asks "Will I definitely get a cough?" — student should explain: dry persistent cough affects about 10–15% of patients; it is a class effect of ACE inhibitors; if she develops an intolerable cough, she can be switched to an ARB (e.g. losartan) which does not cause this side effect',
      'Asks "Can I take ibuprofen?" — critical safety message: NSAIDs reduce the antihypertensive effect of ramipril and increase the risk of acute kidney injury (the triple whammy: ACE inhibitor + diuretic + NSAID); advise to use paracetamol instead; if she must take an NSAID, limit to the lowest effective dose and shortest duration',
      'Asks "What is angioedema — is that the swelling I read about?" — student should explain: angioedema is rare but serious swelling of the lips, tongue, or throat; if this happens, stop ramipril immediately and call 999; do NOT rechallenge; switch to an ARB if BP treatment is still needed',
      'Asks about the first dose — student should advise: take the first dose at bedtime to minimise first-dose hypotension; dizziness on standing is most common after the first few doses',
    ],
  },
  markScheme: [
    {
      domain: 'Opening the consultation',
      items: [
        { description: 'Introduces themselves; confirms patient identity', marks: 1 },
        {
          description: 'Uses an open question to explore Mrs Patel\'s understanding of why she has been prescribed ramipril and her initial concerns',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Exploring the patient\'s understanding',
      items: [
        {
          description: 'Asks what Mrs Patel has already been told and what she has read about ACE inhibitors — acknowledges the cough concern before proceeding',
          marks: 1,
        },
        {
          description: 'Acknowledges her reluctance about starting medication at 42 and validates the concern without dismissing it',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Explaining the indication — why ramipril',
      items: [
        {
          description: 'Explains that ramipril is the first-line antihypertensive in patients with diabetes or aged <55 years (ACE inhibitors preferred over calcium channel blockers in this group)',
          marks: 1,
        },
        {
          description: 'Explains the mechanism in accessible language: ramipril blocks angiotensin II production → vasodilation → lower blood pressure; also reduces protein leakage in the kidney (nephroprotective)',
          marks: 1,
        },
        {
          description: 'Explains the nephroprotective benefit specifically — links it to her father\'s kidney disease progression to make it personally meaningful',
          marks: 2,
        },
      ],
    },
    {
      domain: 'Dosing and administration',
      items: [
        {
          description: 'Explains the starting dose: ramipril 2.5 mg OD; will be titrated up (to 5 mg, then 10 mg OD) based on blood pressure and kidney function',
          marks: 1,
        },
        {
          description: 'Advises to take the first dose at bedtime to reduce the risk of first-dose hypotension — explains she may feel briefly dizzy on standing after the first dose',
          marks: 1,
        },
        {
          description: 'Advises that once established, ramipril can be taken at any time of day, but consistently at the same time each day',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Common side effects',
      items: [
        {
          description: 'Explains the dry persistent cough: occurs in 10–15% of patients; it is a class effect of all ACE inhibitors due to increased bradykinin; if intolerable, she can be switched to an ARB (e.g. losartan)',
          marks: 2,
        },
        {
          description: 'Explains first-dose hypotension and dizziness — advises to take the first dose at bedtime; avoid sudden position changes; stay well hydrated',
          marks: 1,
        },
        {
          description: 'Mentions hyperkalaemia (raised potassium) as a possible side effect — this is why kidney function and electrolytes are checked at baseline and after dose changes',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Serious side effects — angioedema',
      items: [
        {
          description: 'Explains angioedema: rare but potentially life-threatening swelling of the lips, tongue, throat or face; if it occurs, STOP ramipril immediately and call 999',
          marks: 2,
        },
        {
          description: 'Advises that if angioedema occurs, she must NOT be rechallenged with any ACE inhibitor; an ARB can be used as an alternative for BP control',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Monitoring requirements',
      items: [
        {
          description: 'Explains that U&Es (urea, electrolytes, creatinine) are checked at baseline, at 1–2 weeks after starting, and after each dose increase — a rise in creatinine up to 30% is acceptable',
          marks: 1,
        },
        {
          description: 'Explains that if eGFR falls significantly or potassium rises above 5.5 mmol/L, the dose may need to be reduced or stopped — this is why monitoring is essential',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Drug interactions — NSAIDs (critical)',
      items: [
        {
          description: 'Advises Mrs Patel to avoid NSAIDs (ibuprofen, naproxen, diclofenac) — NSAIDs reduce the antihypertensive effect of ramipril and, combined with metformin and ramipril, significantly increase the risk of acute kidney injury (the triple whammy)',
          marks: 2,
        },
        {
          description: 'Recommends paracetamol as the safe analgesic alternative for headaches',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Contraindications — pregnancy',
      items: [
        {
          description: 'Asks about pregnancy status and plans — explains that ramipril is absolutely contraindicated in pregnancy (fetotoxic and teratogenic, particularly in 2nd and 3rd trimesters) and must be stopped immediately if pregnancy is confirmed',
          marks: 2,
        },
      ],
    },
    {
      domain: 'ICE and addressing concerns',
      items: [
        {
          description: 'Explores Mrs Patel\'s ideas, concerns, and expectations — specifically addresses the cough concern with the option to switch to an ARB if needed',
          marks: 1,
        },
        {
          description: 'Addresses the NSAID concern clearly — advises to switch to paracetamol for headaches',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Closing the consultation and safety-netting',
      items: [
        {
          description: 'Summarises key points; confirms Mrs Patel knows what to do if she develops a cough, dizziness, or lip/tongue swelling',
          marks: 1,
        },
        {
          description: 'Arranges follow-up blood tests (U&Es) in 1–2 weeks; blood pressure review in 4–6 weeks; advises not to stop the medication without discussing with the GP',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Key communication skills',
      items: [
        { description: 'Active listening — connects the medical advice to the patient\'s personal context (father\'s kidney disease, teaching job)', marks: 1 },
        { description: 'Signposting — structures the consultation clearly; checks understanding throughout', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Mrs Patel is a 42-year-old teacher with newly diagnosed hypertension (BP 158/96 mmHg) and type 2 diabetes (HbA1c 54 mmol/mol on metformin) who has been started on ramipril 2.5 mg OD',
    'The indication was explained: ramipril is first-line in patients with diabetes or aged <55 (NICE CG127); its additional nephroprotective effect (reduces intraglomerular pressure and proteinuria) is particularly relevant given her family history of CKD',
    'Mechanism explained accessibly: inhibits ACE → reduces angiotensin II → vasodilation and reduced aldosterone → lower BP; also reduces protein leakage across the glomerulus',
    'The dry cough was addressed proactively — affects 10–15%; if intolerable, an ARB (e.g. losartan) is an effective and cough-free alternative',
    'Angioedema discussed as a rare but serious risk — STOP ramipril and call 999 if swelling of lips, tongue, or throat; never rechallenge with an ACE inhibitor',
    'NSAID interaction addressed as a critical safety message — advised to avoid ibuprofen and use paracetamol instead; NSAIDs undermine BP control and increase AKI risk (triple whammy with metformin)',
    'Pregnancy contraindication discussed; monitoring plan arranged: U&Es at 1–2 weeks and after each dose increase; BP review in 4–6 weeks; safety-netting given',
  ],
  vivaQuestions: [
    {
      question: 'What is the mechanism of action of ACE inhibitors and why are they particularly beneficial in diabetic nephropathy?',
      keyPoints: [
        'ACE inhibitors block the conversion of angiotensin I to angiotensin II by inhibiting angiotensin-converting enzyme',
        'Angiotensin II normally causes efferent arteriolar vasoconstriction — ACE inhibition preferentially dilates the efferent arteriole → reduces intraglomerular pressure',
        'Lower intraglomerular pressure reduces mechanical stress on the glomerular filtration barrier → reduces proteinuria and slows CKD progression',
        'MICROHOPE substudy of HOPE trial: ramipril reduced proteinuria and diabetic nephropathy progression in T2DM patients; also reduces cardiovascular events',
        'First-line in T2DM with hypertension (NICE NG28, NICE CG127); also first-line in HF and post-MI (reduces remodelling via aldosterone reduction and sympathetic inhibition)',
        'Bradykinin accumulation: ACE also metabolises bradykinin — inhibition → elevated bradykinin → vasodilation and cough (the class side effect)',
      ],
      source: 'NICE CG127 (Hypertension in adults, 2019 updated 2023); NICE NG28 (2022); OHCM 10th ed., Ch. 5',
    },
    {
      question: 'What is angioedema and how does it relate to ACE inhibitor use?',
      keyPoints: [
        'ACE inhibitor-induced angioedema: swelling of the lips, tongue, oropharynx, or larynx due to elevated bradykinin (which normally causes vasodilation and increased vascular permeability)',
        'Incidence: approximately 0.1–0.7% of patients; higher incidence in Afro-Caribbean populations (3–4× higher)',
        'Onset: typically within the first week of starting, but can occur months to years after initiation — delayed presentation makes it difficult to recognise',
        'Management: stop ACE inhibitor immediately; call 999 if airway compromise; IV antihistamine, IV hydrocortisone, IM adrenaline if severe; ICU if stridor',
        'Bradykinin-mediated angioedema does NOT respond to antihistamines or corticosteroids as reliably as histamine-mediated angioedema',
        'After ACE inhibitor angioedema: switch to ARB if BP/HF treatment still needed; ARBs do not raise bradykinin and have a much lower (but not zero) risk of angioedema',
      ],
      source: 'BNF — ACE inhibitors section; NICE CG127 (2019); MHRA Drug Safety Update (ACE inhibitors and angioedema)',
    },
    {
      question: 'What are the important drug interactions with ACE inhibitors and why is the "triple whammy" dangerous?',
      keyPoints: [
        'NSAIDs + ACE inhibitor: NSAIDs cause efferent arteriolar constriction and reduce prostaglandin-mediated renal vasodilation → worsen renal perfusion; also blunt the antihypertensive effect of ACE inhibitors',
        'Triple whammy: ACE inhibitor + NSAID + diuretic — each independently reduces renal perfusion; combined risk of acute kidney injury is substantially higher; advise patients to avoid NSAIDs',
        'Potassium-sparing diuretics / potassium supplements + ACE inhibitor → significant hyperkalaemia risk; avoid combination unless under specialist supervision',
        'Lithium + ACE inhibitor: ACE inhibitor-induced reduction in GFR reduces lithium excretion → lithium toxicity; avoid combination or monitor lithium levels very carefully',
        'Aldosterone antagonists (spironolactone, eplerenone) + ACE inhibitor: used together in HF with specialist supervision but hyperkalaemia monitoring essential',
        'Aliskiren (renin inhibitor) + ACE inhibitor: combination contraindicated in diabetic patients (increased risk of hypotension, hyperkalaemia, and renal impairment based on ALTITUDE trial)',
      ],
      source: 'BNF — ACE inhibitors section; NICE CG127 (2019); Loboz KK & Shenfield GM, Drug Safety 2005',
    },
    {
      question: 'What are the NICE guidelines for managing hypertension in adults, and when are ACE inhibitors the preferred first-line agent?',
      keyPoints: [
        'NICE CG127 step 1: offer ACE inhibitor (or low-cost ARB) as first-line to patients aged <55 years without African or Caribbean origin, OR at any age with type 2 diabetes',
        'For patients aged ≥55 years or of African/Caribbean origin without diabetes: first-line is calcium channel blocker (e.g. amlodipine) — ACE inhibitors less effective due to low-renin hypertension',
        'Step 2: add calcium channel blocker; if not tolerated, add thiazide-like diuretic (e.g. indapamide)',
        'Step 3: ACE inhibitor + CCB + thiazide-like diuretic; if BP still not controlled, investigate for secondary causes and consider adding spironolactone (if K+ <4.5 mmol/L) or alpha/beta-blocker',
        'Blood pressure targets: <140/90 mmHg (clinic BP) for most patients; <130/80 mmHg if diabetes, CKD, or established CVD; <150/90 mmHg if aged ≥80 years',
        'Lifestyle advice at all stages: weight loss, DASH diet, restrict salt (<6 g/day), alcohol moderation, regular aerobic exercise',
      ],
      source: 'NICE CG127 (Hypertension in adults: diagnosis and management, 2019 updated 2023)',
    },
  ],
};

export const MED_COUNSELLING_MOCK_EXAMS_1: MockExamStation[] = [
  metforminCounselling,
  sglt2Counselling,
  insulinCounselling,
  aceInhibitorCounselling,
];
