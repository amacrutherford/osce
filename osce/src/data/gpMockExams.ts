import type { MockExamStation } from './mockExamTypes';

const weightLossCounsellingMockExam: MockExamStation = {
  id: 'weight_loss_counselling_presurgical',
  title: 'GP Consultation — Weight Loss Counselling Before Surgery',
  diagnosis: 'Obesity (BMI 38) — pre-surgical weight management',
  specialtyId: 'general-practice',
  candidateBrief: {
    setting: 'You are an FY1 in a GP surgery.',
    scenario:
      'Mr Gary Peters, 52, has been referred by his orthopaedic surgeon, who has told him that he cannot proceed with a right total knee replacement for osteoarthritis until his BMI falls below 35. His current BMI is 38 (weight 115 kg, height 1.74 m). Mr Peters has an appointment today to discuss weight management.',
    tasks: [
      'Explore Mr Peters\'s understanding of the situation and his motivation to change',
      'Provide appropriate advice and agree a weight management plan',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'Gary Peters',
    age: 52,
    occupation: 'HGV driver',
    openingLine:
      '"The surgeon told me I\'ve got to lose weight or he won\'t do the operation. I\'ve tried diets before and they never work. I\'m not sure this is going to be any different." [resigned, slightly defensive]',
    historyOfPresentingComplaint: [
      {
        label: 'Current situation — severe right knee OA; can walk ~100 metres before severe pain',
        quote: '"I can barely walk to the end of the street. I used to go fishing with my mate on weekends but I haven\'t been able to for two years." – "I just want my life back. That\'s what I want."',
      },
      {
        label: 'Previous weight loss attempts — slimming club (lost 5 kg, couldn\'t sustain); internet diet (lost then regained)',
        quote: '"I did a slimming club — lost about 5 kilos and then I just couldn\'t keep it up. The evenings are the hardest; I eat in front of the telly." – "I tried a diet on the internet too. Lost a bit, put it all back."',
      },
      {
        label: 'Typical diet — no breakfast (or biscuits); lorry meal deal at lunch; proper dinner (wife cooks); evening biscuits',
        quote: '"Breakfast: nothing usually, or maybe a couple of biscuits. Lunch in the lorry — usually a pasty or a meal deal. Dinner\'s a proper meal, my wife cooks." – "I eat too many biscuits in the evenings. It\'s habit more than hunger."',
      },
      {
        label: 'Physical activity — severely limited by knee pain; used to cycle; cannot now',
        quote: '"I can\'t do much with this knee — even walking is agony after 100 metres." – "I used to cycle before my knee got bad. Can\'t do that now."',
      },
      {
        label: 'Motivations for change — fishing with friend; playing with grandchildren; reducing burden on wife',
        quote: '"I want to be able to do things again. Not just the fishing — I can\'t play with my grandkids properly." – "My wife is having to do everything. I don\'t want to be like this." [some emotion here]',
      },
      {
        label: 'Readiness to change — cautiously willing if convinced it will work; past failures cause pessimism',
        quote: '"If I thought it would actually work... I\'d give it a proper go. I just feel like I\'ve failed before and I\'ll fail again." – "What\'s different this time?"',
      },
    ],
    pastMedicalHistory: [
      { label: 'Type 2 diabetes — HbA1c 61 mmol/mol; on metformin', quote: '"Diabetes — I take metformin. The nurse at the surgery said my diabetes control isn\'t brilliant — my HbA1c was 61."' },
      { label: 'Hypertension — on amlodipine', quote: '"High blood pressure — amlodipine."' },
      { label: 'Hypercholesterolaemia — on atorvastatin', quote: '"Cholesterol — atorvastatin."' },
      { label: 'Severe right knee osteoarthritis — requires TKR; surgeon stipulates BMI <35 first', quote: '"The surgeon told me I\'ve got to lose weight or he won\'t do the operation."' },
    ],
    drugHistory: [
      { label: 'Metformin (type 2 diabetes)', quote: '"Diabetes — I take metformin."' },
      { label: 'Amlodipine (hypertension)', quote: '"High blood pressure — amlodipine."' },
      { label: 'Atorvastatin (hypercholesterolaemia)', quote: '"Cholesterol — atorvastatin."' },
    ],
    familyHistory: [],
    socialHistory: [
      { label: 'HGV driver (52); physically sedentary job; eats meals in lorry cab', quote: '"I\'m an HGV driver, been doing it for years."' },
      { label: 'Lives with wife who does all cooking; very supportive if given guidance', quote: '"My wife is having to do everything." – "She\'d cook whatever I need if I told her what to do." [only if asked]' },
      { label: 'Alcohol: approximately 20 units/week (4–5 pints most weeknights)', quote: '"I have a few beers in the evening — about 4 or 5 pints on weekdays after work. Not every night, but most nights." – "I know it\'s a lot, but I haven\'t thought of it as a problem."' },
      { label: 'Non-smoker (quit 15 years ago)', quote: '"Gave up 15 years ago."' },
    ],
    importantNegatives: [
      'No secondary causes of obesity ("I\'ve never been tested for a thyroid problem — could that be it?")',
      'No eating disorder features ("I eat too much, but I\'m not binge-eating in secret or anything like that.")',
      'No depression or mood disorder ("I\'m not depressed. Just frustrated with my knee.")',
      'Does not smoke ("Gave up 15 years ago.")',
    ],
    ice: {
      ideas:
        '"I know I need to lose weight. I\'m not stupid. I just don\'t know if I can do it this time when I\'ve failed before."',
      concerns:
        '"I\'m worried that I\'ll put the effort in, lose some weight, and then the surgeon will still find another reason not to do the operation." – "And I\'m worried about my diabetes getting worse."',
      expectations:
        '"I want some practical advice — not just \'eat less and move more\', I\'ve heard that a hundred times." – "Tell me something that will actually help."',
    },
    onlyIfDirectlyAsked: [
      'Thyroid function — never been checked; worth checking to exclude hypothyroidism as a contributing factor',
      'Sleep — "I\'ve been told I snore — my wife says I stop breathing sometimes." [possible obstructive sleep apnoea — relevant to weight management and surgical fitness]',
      'Support at home — wife is very supportive: "She\'d cook whatever I need if I told her what to do."',
    ],
    behaviourNotes: [
      'Opens resigned and slightly defensive; expects generic advice he has heard before',
      'Becomes more engaged when the student asks about what matters to him (fishing, grandchildren, independence) rather than leading with BMI numbers',
      'Responds well to affirmations and to the student acknowledging that previous attempts were difficult, not failures of willpower',
      'Becomes emotional briefly when mentioning his grandchildren and wife — this is the motivational core',
      'Asks "What\'s different this time?" — the student should outline specific interventions (structured programme, dietitian, possibly medication) rather than general advice',
      'Asks "Do I have to give up beer?" — student should address the caloric contribution of alcohol (significant: ~20 units = ~1400 kcal/week); not "give up" but reduce substantially',
      'Does NOT want to be told what to do; responds best to collaborative goal-setting',
    ],
  },
  markScheme: [
    {
      domain: 'Opening the consultation',
      items: [
        { description: 'Introduces themselves; confirms identity', marks: 1 },
        { description: 'Uses open questioning to explore what Mr Peters understands about the situation and how he feels about it', marks: 1 },
      ],
    },
    {
      domain: 'Exploring motivation (motivational interviewing)',
      items: [
        {
          description: 'Assesses readiness to change and ambivalence using an open, non-judgemental approach',
          marks: 1,
        },
        {
          description: 'Explores what matters most to the patient — elicits intrinsic motivators (fishing, grandchildren, independence)',
          marks: 2,
        },
        {
          description: 'Acknowledges previous attempts without framing them as failures; validates the difficulty of sustained weight loss',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Dietary history and alcohol',
      items: [
        { description: 'Takes a brief dietary history — identifies calorie-dense snacking, skipped breakfasts, and high-calorie lunches', marks: 1 },
        {
          description: 'Asks about alcohol consumption — identifies 20 units/week; explains the significant caloric contribution of alcohol (~1400 kcal/week)',
          marks: 2,
        },
      ],
    },
    {
      domain: 'ICE and addressing concerns',
      items: [
        { description: 'Explores the patient\'s ideas, concerns, and expectations — addresses fear of failure and desire for practical advice', marks: 1 },
      ],
    },
    {
      domain: 'Weight management advice',
      items: [
        {
          description: 'Explains the target — needs to lose approximately 10 kg (BMI 38 → <35); puts this in context (realistic, achievable over 3–6 months)',
          marks: 1,
        },
        {
          description: 'Recommends referral to a structured Tier 2/3 weight management programme (dietitian-led, group-based, or 1:1)',
          marks: 1,
        },
        {
          description: 'Discusses dietary strategies in accessible terms: calorie deficit, portion sizes, reducing alcohol, avoiding high-calorie snacks',
          marks: 1,
        },
        {
          description: 'Discusses physical activity appropriate to his limitations — chair-based exercises, swimming, or hydrotherapy while knee remains painful',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Pharmacotherapy and further options',
      items: [
        {
          description: 'Discusses orlistat as an adjunct if lifestyle measures inadequate — explains mechanism (fat malabsorption); notes it works best with a low-fat diet',
          marks: 1,
        },
        {
          description: 'Mentions GLP-1 receptor agonists (e.g. semaglutide/liraglutide) as an option for significant obesity — particularly useful given co-existing type 2 diabetes',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Associated conditions',
      items: [
        { description: 'Addresses diabetes management — explains weight loss will likely improve HbA1c and may allow reduction in metformin dose', marks: 1 },
        { description: 'Considers checking TFTs to exclude hypothyroidism', marks: 1 },
      ],
    },
    {
      domain: 'Closing the consultation',
      items: [
        { description: 'Agrees a specific first step with Mr Peters — a collaborative SMART goal (e.g. reduce to 2 pints/night, refer to weight management programme)', marks: 1 },
        { description: 'Arranges follow-up to monitor progress and weigh; thanks Mr Peters', marks: 1 },
      ],
    },
    {
      domain: 'Key communication skills',
      items: [
        { description: 'Active listening — does not lecture; reflects back patient\'s own words and values', marks: 1 },
        { description: 'Uses motivational interviewing style: open questions, affirmations, reflective listening, summarising (OARS)', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Mr Peters is a 52-year-old HGV driver with severe right knee OA who requires weight loss (BMI 38 → <35, approximately 10 kg) before his orthopaedic surgeon will proceed with knee replacement',
    'His motivators are strong: fishing with friends, playing with grandchildren, and relieving his wife of caring responsibilities — these were explored to frame the weight loss goal in terms of what matters to him',
    'Key contributors to his weight: sedentary lifestyle forced by knee pain, high-calorie lunchtime eating during long drives, evening snacking, and approximately 20 units of alcohol per week (approximately 1,400 kcal/week from alcohol alone)',
    'He has comorbid type 2 diabetes (HbA1c 61 — suboptimal), hypertension, and hypercholesterolaemia — weight loss would benefit all three conditions and improve surgical fitness',
    'Sleep history flagged possible obstructive sleep apnoea — this may require investigation and is relevant to surgical anaesthetic risk',
    'Management plan: referral to structured Tier 2/3 weight management programme; dietary advice (calorie deficit, reduce alcohol to ≤14 units/week); accessible exercise (swimming/hydrotherapy); consider GLP-1 receptor agonist (e.g. semaglutide) given type 2 diabetes and BMI ≥35; check TFTs',
    'A collaborative first step was agreed: reduce alcohol to 2 pints on 3 nights per week and attend weight management referral; review weight in 4 weeks',
  ],
  vivaQuestions: [
    {
      question: 'What is motivational interviewing and how do you apply it to a patient with obesity?',
      keyPoints: [
        'MI is a patient-centred, directive counselling method that helps patients explore and resolve ambivalence about behaviour change — developed by Miller & Rollnick',
        'OARS: Open questions, Affirming, Reflecting, Summarising — the core microskills',
        'Stages of change (Prochaska & DiClemente): precontemplation → contemplation → preparation → action → maintenance; tailor advice to the patient\'s current stage',
        'Roll with resistance: do not argue; use reflective listening when ambivalence or resistance is expressed',
        'Elicit change talk: ask about importance ("How important is this to you?") and confidence ("How confident are you?"); explore discrepancy between current behaviour and valued goals',
      ],
      source: 'Miller WR & Rollnick S, Motivational Interviewing, 3rd ed. (2012); NICE NG189 (Obesity, 2022)',
    },
    {
      question: 'What weight management interventions are available in the NHS, and what are the indications for each?',
      keyPoints: [
        'Tier 1: public health lifestyle advice; brief interventions in primary care',
        'Tier 2: structured multicomponent weight management programmes (dietitian + exercise + behavioural support); for BMI ≥30 (or ≥27.5 in South Asian populations)',
        'Tier 3: specialist weight management services; for complex obesity with comorbidities; includes intensive dietary interventions (very-low-calorie diets, 800 kcal/day)',
        'Pharmacotherapy: orlistat (fat absorption inhibitor) — BMI ≥30 or ≥28 with comorbidity; GLP-1 receptor agonists (semaglutide 2.4 mg SC — Wegovy; liraglutide — Saxenda) — BMI ≥35 with comorbidities; significant efficacy (semaglutide ≈15% body weight reduction)',
        'Bariatric surgery (Tier 4): BMI ≥40 or BMI ≥35 with significant comorbidity; most effective long-term intervention; gastric sleeve and Roux-en-Y gastric bypass most common',
      ],
      source: 'NICE NG189 (Obesity in adults, 2022); NICE TA664 (semaglutide, 2023)',
    },
    {
      question: 'What are the surgical risks of obesity in a patient undergoing total knee replacement, and why do surgeons set a BMI threshold?',
      keyPoints: [
        'Anaesthetic risks: difficult airway, aspiration risk, OSA (may require CPAP perioperatively), increased oxygen demand, difficult regional anaesthesia',
        'Wound complications: poor vascularisation of adipose tissue → increased surgical site infection, wound dehiscence',
        'Mechanical failure: increased mechanical stress on implant → higher risk of aseptic loosening, implant failure, and early revision surgery',
        'VTE: obesity significantly increases DVT/PE risk; prolonged operative time in obese patients',
        'Functional outcome: evidence suggests reduced functional gain and higher complication rates in patients with BMI >40 compared to BMI <35; hence the threshold for many surgeons is BMI <35–40',
      ],
      source: 'BOAST Knee Replacement Guidelines; NICE NG157 (Joint replacement); Dowsey MM et al., J Arthroplasty 2010',
    },
    {
      question: 'GLP-1 receptor agonists (e.g. semaglutide) are increasingly used for obesity. What is their mechanism and what are the key side effects and contraindications?',
      keyPoints: [
        'Mechanism: GLP-1 receptor agonists activate GLP-1 receptors in the hypothalamus and brainstem → reduced appetite, increased satiety; also slow gastric emptying',
        'Efficacy: semaglutide 2.4 mg SC weekly (Wegovy) — mean ~15% body weight reduction in STEP trials; also improves glycaemic control in type 2 diabetes',
        'Side effects: nausea, vomiting, diarrhoea (most common, usually mild, improve with time); rare: pancreatitis, gallstones, tachycardia',
        'Contraindications: personal/family history of medullary thyroid carcinoma or MEN-2 (risk of C-cell tumours in rodents); pregnancy; severe renal impairment',
        'NICE TA664: semaglutide 2.4 mg approved for BMI ≥35 + weight-related comorbidity OR BMI 30–34.9 in South Asian/Black/Hispanic populations; adjunct to lifestyle',
      ],
      source: 'NICE TA664 (semaglutide 2.4 mg, 2023); Wilding JPH et al., NEJM 2021 (STEP-1 trial)',
    },
  ],
};

const raArthritisMockExam: MockExamStation = {
  id: 'gp_ra_arthritis',
  title: 'GP Consultation — Rheumatoid Arthritis History, Examination, and Blood Result Explanation',
  diagnosis: 'Rheumatoid arthritis (seropositive)',
  specialtyId: 'general-practice',
  candidateBrief: {
    setting: 'You are a GP registrar in a general practice surgery.',
    scenario:
      'Judith Clarke, 48, is attending for the results of blood tests ordered at her previous appointment. She has a 4-month history of symmetrical joint pain and swelling. Blood results: RF 128 IU/mL (positive), anti-CCP 85 U/mL (positive), CRP 42 mg/L (elevated), ESR 68 mm/hr (elevated), Hb 108 g/L normocytic anaemia; eGFR and LFTs normal.',
    tasks: [
      'Take a focused history and assess Judith\'s joint symptoms',
      'Explain the blood results, discuss the diagnosis, and outline the management plan',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'Judith Clarke',
    age: 48,
    occupation: 'Part-time librarian',
    openingLine:
      '"Good morning. I\'ve been quite anxious about these results, if I\'m honest. My joints have been so much worse this month — I couldn\'t do up my coat buttons this morning." [holds up hands to show swollen knuckles]',
    socrates: [
      {
        label: 'Site',
        descriptor: 'symmetrical — MCPs, PIPs, and wrists bilaterally; also MTP joints in both feet',
        quotes: [
          '"It\'s both hands — the knuckles and the middle joints of my fingers." – "My wrists too. And actually my feet have been aching — in the balls of my feet, first thing in the morning."',
        ],
      },
      {
        label: 'Onset',
        descriptor: 'insidious onset 4 months ago; started in right hand, now bilateral and symmetrical',
        quotes: ['"It crept up on me over about 4 months. It started in my right hand — I thought I\'d just overdone it. Then both hands." – "No injury or anything like that."'],
      },
      {
        label: 'Character',
        descriptor: 'deep aching and stiffness; swollen, warm, and red during flares; not sharp',
        quotes: [
          '"It\'s a deep ache — and stiff. The joints are puffy and warm." – "When it flares up they go quite red." – "It\'s less a sharp pain and more a constant stiffness."',
        ],
      },
      {
        label: 'Radiation',
        descriptor: 'does not radiate',
        quotes: ['"It stays in the joints — it doesn\'t go anywhere else."'],
      },
      {
        label: 'Associated symptoms',
        descriptor: 'morning stiffness >1 hour; profound fatigue; 3 kg unintentional weight loss; no rash; no dry eyes or mouth; no back pain; no psoriasis',
        quotes: [
          '"The stiffness in the morning is terrible — it takes well over an hour before my hands feel usable." – "I\'m exhausted all the time. Really exhausted — not just tired." – "I\'ve lost about 3 kg without trying."',
        ],
      },
      {
        label: 'Timing',
        descriptor: 'constant with flares; worst in the morning, gradually improves throughout the day with activity',
        quotes: ['"It\'s there all the time but mornings are worst. By the afternoon it\'s a bit better." – "Movement loosens it — the opposite of my mother\'s hip problem."'],
      },
      {
        label: 'Exacerbating / relieving',
        descriptor: 'worse with cold and rest; better with warmth and gentle movement; NSAIDs provide partial relief',
        quotes: [
          '"Cold weather and sitting still make it worse." – "Warm water helps — I run my hands under warm water in the morning to get them going." – "Ibuprofen takes the edge off but doesn\'t fix it."',
        ],
      },
      {
        label: 'Severity',
        descriptor: '6–7/10; unable to open jars, do up buttons, or carry heavy books; affecting work as a librarian',
        quotes: [
          '"About 6 or 7 out of 10 on a bad day." – "I can\'t open jars. I couldn\'t do up my coat this morning — that was the last straw." – "At work, shelving heavy books is really painful now."',
        ],
      },
    ],
    pastMedicalHistory: [
      { label: 'Hypothyroidism — on levothyroxine 75 mcg; well-controlled', quote: '"I have an underactive thyroid — been on tablets for 6 years. My last thyroid test was fine."' },
      { label: 'No prior joint problems or inflammatory arthritis', quote: '"Nothing like this before. My joints were completely fine until 4 months ago."' },
    ],
    drugHistory: [
      { label: 'Levothyroxine 75 mcg OD', quote: '"Levothyroxine — 75 micrograms, every morning."' },
      { label: 'Ibuprofen 400 mg TDS PRN (OTC) — partial symptom relief', quote: '"I\'ve been buying ibuprofen over the counter — 400 mg three times a day when it\'s bad."' },
      { label: 'No known drug allergies', quote: '"No allergies."' },
    ],
    familyHistory: [
      { label: 'Mother — osteoarthritis of hips and knees in her 70s', quote: '"My mum had bad arthritis in her hips and knees — but that was in her 70s, and it was different. She said it was wear and tear."' },
      { label: 'No known family history of rheumatoid arthritis', quote: '"Not that I know of — nobody had what you\'re describing."' },
    ],
    socialHistory: [
      { label: 'Part-time librarian — 3 days per week; physically demanding; considering reducing hours', quote: '"I work 3 days a week as a librarian. It\'s more physical than people think." – "I\'ve been thinking about asking to reduce my hours."' },
      { label: 'Non-smoker; ~8 units alcohol per week (wine); lives with husband and two teenage children', quote: '"I don\'t smoke. I have a glass of wine most evenings — maybe 8 units a week." – "I live with my husband and our two teenagers."' },
      { label: 'Impact on daily activities — unable to open jars, do up buttons, carry shopping', quote: '"Simple things are really difficult now — opening jars, doing buttons, carrying shopping. It\'s affecting my independence."' },
    ],
    importantNegatives: [
      'No skin rash or psoriasis ("No rashes.")',
      'No dry eyes or dry mouth ("No problem with that.")',
      'No back pain or sacroiliac joint pain ("No back problems.")',
      'No eye redness or uveitis ("No.")',
      'No Raynaud\'s phenomenon ("My hands don\'t go white or blue in the cold.")',
      "DIP joints spared — key distinguishing feature from OA (\"The end joints of my fingers are actually fine — it's the middle ones and the knuckles.\")",
    ],
    ice: {
      ideas:
        '"I\'ve been looking it up online — I think it might be rheumatoid arthritis. The words \'rheumatoid factor\' in the blood test jumped out at me." – "My mother always said I had her hands."',
      concerns:
        '"I\'m scared this is going to get worse and I\'ll end up disabled like my mother." – "And I\'m worried about the medications — I\'ve heard the drugs for RA are quite strong and have side effects."',
      expectations:
        '"I\'d like a clear diagnosis and to understand the treatment options. And I need to know whether I can carry on working."',
    },
    onlyIfDirectlyAsked: [
      'Whether she has tried other medications — yes, topical diclofenac gel (minimal effect)',
      'How her husband has responded — supportive; has been helping with tasks she struggles with',
      'Whether she has had eye symptoms — no uveitis, no red eye, no visual changes',
    ],
    behaviourNotes: [
      'Composed but anxious; shows swollen MCP joints unprompted — allow the student to observe them',
      'Emotional when discussing impact on work and independence: "I used to be very capable — I prided myself on it." — student should acknowledge this',
      'Asks "Is this definitely RA?" — student should explain the clinical features and blood results strongly support the diagnosis; an urgent rheumatology referral will confirm it',
      'Asks "What does methotrexate involve?" — student should explain: weekly oral tablet, slow onset over 4–6 weeks, regular blood monitoring (FBC and LFTs every 2–3 months), prescribed with folic acid',
      'Asks "Will I have to take it forever?" — student should explain: likely long-term, but well-controlled RA on DMARDs allows most patients to maintain function and quality of life',
      'Asks "Can I carry on drinking wine?" — student must explain: alcohol should be minimised or avoided on methotrexate due to hepatotoxicity risk — this is important and must not be glossed over',
      'Examination findings (actor demonstrates): bilateral MCP and PIP swelling and tenderness; warm joints; no Boutonnière or swan-neck deformities yet; mild ulnar drift bilaterally; DIP joints spared; positive squeeze test across MCPs; reduced grip strength',
    ],
  },
  markScheme: [
    {
      domain: 'Opening the consultation',
      items: [
        { description: "Introduces themselves; confirms patient's identity and date of birth", marks: 1 },
        { description: "Acknowledges Judith's anxiety about the results and invites her to share her main concern", marks: 1 },
      ],
    },
    {
      domain: 'History of presenting complaint — SOCRATES',
      items: [
        { description: 'Establishes symmetrical joint distribution — MCPs, PIPs, wrists bilaterally, and MTP joints', marks: 1 },
        { description: 'Identifies prolonged morning stiffness lasting more than 1 hour — a key hallmark of inflammatory arthritis', marks: 2 },
        { description: 'Confirms stiffness improves with activity throughout the day (inflammatory pattern)', marks: 1 },
        { description: 'Asks about systemic features — fatigue and weight loss', marks: 1 },
      ],
    },
    {
      domain: 'Differentiating inflammatory from non-inflammatory arthritis',
      items: [
        { description: 'Specifically confirms DIP joint sparing — distinguishes RA from OA (DIP involved) and psoriatic arthritis (DIP/DIP asymmetric)', marks: 1 },
        { description: 'Screens for extra-articular features: rash, dry eyes/mouth, back pain, uveitis — to exclude psoriatic arthritis, Sjögren\'s, seronegative spondyloarthropathy', marks: 1 },
      ],
    },
    {
      domain: 'Past medical, drug, and family history',
      items: [
        { description: 'Takes a drug history including OTC NSAIDs; asks about drug allergies', marks: 1 },
        { description: 'Asks about past medical history — notes hypothyroidism as a co-existing autoimmune condition', marks: 1 },
      ],
    },
    {
      domain: 'Examination',
      items: [
        { description: 'Describes bilateral MCP and PIP swelling, warmth, and tenderness on examination', marks: 1 },
        { description: 'Confirms DIP sparing; identifies mild ulnar drift; performs squeeze test across MCPs and interprets result', marks: 1 },
        { description: 'Assesses grip strength and wrist range of movement bilaterally', marks: 1 },
      ],
    },
    {
      domain: 'Explaining blood results and diagnosis',
      items: [
        {
          description:
            'Explains each result in plain English: RF and anti-CCP positive (antibodies associated with RA), CRP and ESR elevated (active inflammation), Hb 108 (anaemia of chronic disease)',
          marks: 2,
        },
        { description: 'States the diagnosis clearly: the combination of symptoms and blood tests strongly suggests rheumatoid arthritis; rheumatology referral will confirm', marks: 1 },
      ],
    },
    {
      domain: 'Management plan',
      items: [
        { description: 'Explains urgent rheumatology referral within 3 weeks per NICE NG100 for DMARD initiation', marks: 1 },
        {
          description: 'Explains first-line DMARD: methotrexate weekly with folic acid; regular monitoring required (FBC, LFTs, U&Es)',
          marks: 2,
        },
        { description: 'Addresses alcohol and methotrexate interaction — advises minimising alcohol intake due to hepatotoxicity risk', marks: 1 },
      ],
    },
    {
      domain: 'ICE and functional impact',
      items: [
        { description: 'Explores concern about disability and addresses it: early DMARD treatment prevents joint destruction; good prognosis with prompt treatment', marks: 1 },
        { description: 'Discusses occupational impact; refers to occupational therapy and physiotherapy for joint protection', marks: 1 },
      ],
    },
    {
      domain: 'Key communication skills',
      items: [
        { description: 'Active listening — acknowledges the emotional impact on independence and work before moving to management', marks: 1 },
        { description: 'Summarising and signposting throughout the consultation', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Judith Clarke is a 48-year-old librarian with a 4-month history of symmetrical small joint arthritis affecting MCPs, PIPs, wrists bilaterally, and MTP joints in the feet',
    'Key inflammatory features: morning stiffness lasting >1 hour that improves with activity, bilateral MCP and PIP swelling with warmth and tenderness, DIP joint sparing, systemic fatigue and 3 kg weight loss',
    'Blood results confirm seropositive rheumatoid arthritis: RF 128 IU/mL and anti-CCP 85 U/mL both positive (anti-CCP >95% specific for RA), CRP 42 mg/L and ESR 68 mm/hr confirming active systemic inflammation, Hb 108 g/L normocytic anaemia consistent with anaemia of chronic disease',
    'ACR/EULAR 2010 criteria met: small joint involvement symmetrically, RF and anti-CCP positive (score 3 for high-positive serology), CRP/ESR elevated, duration >6 weeks — total score ≥6',
    'Differentials considered and excluded: OA (morning stiffness <30 minutes, DIP involvement, no systemic features, seronegative), psoriatic arthritis (no skin or nail changes, no axial disease, no DIP predominance)',
    'Management: urgent rheumatology referral within 3 weeks (NICE NG100); first-line DMARD methotrexate + folic acid once confirmed; NSAIDs as bridge; regular monitoring FBC/LFTs; occupational therapy and physiotherapy referral',
    'Alcohol must be minimised or avoided on methotrexate — this was discussed explicitly with Judith',
  ],
  vivaQuestions: [
    {
      question: 'What are the ACR/EULAR 2010 diagnostic criteria for rheumatoid arthritis?',
      keyPoints: [
        'Score-based system: definite RA requires ≥6 out of 10 points across four domains',
        'Joint involvement (0–5 points): 1 large joint = 0; 2–10 large joints = 1; 1–3 small joints = 2; 4–10 small joints = 3; >10 joints including ≥1 small joint = 5',
        'Serology (0–3 points): negative RF and anti-CCP = 0; low-positive (1–3× ULN) = 2; high-positive (>3× ULN) = 3',
        'Acute phase reactants (0–1 point): abnormal CRP or ESR = 1; both normal = 0',
        'Duration of symptoms (0–1 point): ≥6 weeks = 1; <6 weeks = 0',
        'Anti-CCP antibody is >95% specific for RA and can be positive years before clinical onset; RF is less specific (positive in SLE, Sjögren\'s, and 5% of the normal population)',
      ],
      source: 'ACR/EULAR 2010 Classification Criteria for RA; Aletaha D et al., Arthritis Rheum 2010',
    },
    {
      question: 'What is the first-line treatment for rheumatoid arthritis and how is it monitored?',
      keyPoints: [
        'First-line DMARD: methotrexate (MTX) weekly oral or SC dose 7.5–25 mg/week; must be co-prescribed with folic acid 5 mg once weekly (taken 24 hours after MTX) to reduce mucosal and haematological side effects',
        'Takes 4–6 weeks for initial effect; full benefit at 3–6 months; continue NSAIDs or a short course of prednisolone as a bridge',
        'Monitoring: FBC, LFTs, U&Es and creatinine at baseline, then every 2 weeks until stable dose for 6 weeks, then every 3 months',
        'Contraindications: significant hepatic disease or alcohol excess, eGFR <30, active infection, pregnancy (teratogenic — requires effective contraception)',
        'If MTX inadequate or not tolerated: leflunomide or sulfasalazine; consider triple therapy; escalate to biologic DMARD (anti-TNF: etanercept, adalimumab) if DAS28 >5.1 on two csDMARDs',
        'Treat-to-target: aim for remission (DAS28 <2.6) or low disease activity (DAS28 <3.2); review disease activity every 1–3 months until target achieved',
      ],
      source: 'NICE NG100 (Rheumatoid arthritis in adults, 2018); BNF — DMARDs section',
    },
    {
      question: 'What are the extra-articular manifestations of rheumatoid arthritis?',
      keyPoints: [
        'Haematological: normocytic normochromic anaemia of chronic disease; Felty\'s syndrome (RA + splenomegaly + neutropenia)',
        'Pulmonary: pleuritis and pleural effusion, interstitial lung disease, rheumatoid nodules in lung parenchyma, organising pneumonia',
        'Cardiovascular: accelerated atherosclerosis (approximately 2× increased MI risk); pericarditis; pericardial effusion',
        'Ocular: episcleritis (painless, self-limiting), scleritis (painful, vision-threatening), secondary Sjögren\'s syndrome (dry eyes and mouth)',
        'Skin and subcutaneous: rheumatoid nodules (firm, painless, subcutaneous — over olecranon, Achilles tendon, sacrum); vasculitic nail fold infarcts; leg ulcers',
        'Neurological: peripheral neuropathy; atlantoaxial subluxation from C1–C2 erosion causing cervical myelopathy; carpal tunnel syndrome from tenosynovitis',
      ],
      source: 'OHCM 10th ed., Ch. 11; NICE NG100 (2018)',
    },
  ],
};

const gpBloatingTwoWeekWaitMockExam: MockExamStation = {
  id: 'gp_bloating_2ww',
  title: 'GP History — Bloating and Urinary Frequency in a Post-Menopausal Woman',
  diagnosis: 'Suspected ovarian cancer — CA-125 and pelvic ultrasound required; NICE NG12 criteria met',
  specialtyId: 'general-practice',
  candidateBrief: {
    setting: 'You are a GP registrar in a general practice surgery.',
    scenario:
      'Patricia Morris, 57, a retired accountant, has booked an appointment with a 3-month history of persistent abdominal bloating, urinary frequency, early satiety, and unintentional weight loss. She is post-menopausal.',
    tasks: [
      'Take a focused history from Mrs Morris',
      'Explain your differential diagnosis and initial investigation plan',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'Patricia Morris',
    age: 57,
    occupation: 'Retired accountant',
    openingLine:
      '"I\'ve had this bloating for about 3 months — my tummy just feels full and swollen all the time. And I\'m needing to go to the loo to wee much more often than I used to." [slightly downplaying; has been putting off coming in]',
    socrates: [
      {
        label: 'Site',
        descriptor: 'bilateral lower abdominal bloating — constant, diffuse; feels like her abdomen is swollen and distended',
        quotes: ['"It\'s all across my lower tummy — both sides. It just feels blown up." – "I look like I\'m several months pregnant." [self-conscious laugh]'],
      },
      {
        label: 'Onset',
        descriptor: 'gradual onset over 3 months; persistent and worsening; was not there before that',
        quotes: ['"It\'s been building up over about 3 months. It was mild at first and now it\'s there all the time." – "I kept thinking it would pass but it hasn\'t."'],
      },
      {
        label: 'Character',
        descriptor: 'sensation of distension and fullness; not colicky; constant rather than intermittent; worse after meals',
        quotes: ['"It\'s a constant sensation of being full and swollen." – "It\'s worse after I eat — even a small amount makes me feel stuffed."'],
      },
      {
        label: 'Radiation',
        descriptor: 'no radiation; no back pain; no leg swelling',
        quotes: ['"No — it stays in my abdomen." – "No back pain."'],
      },
      {
        label: 'Associated symptoms',
        descriptor: 'urinary frequency 10+ times per day (no dysuria, no haematuria); early satiety (eating less than half normal portions); 3 kg unintentional weight loss over 3 months; fatigue',
        quotes: ['"I\'m going to the toilet to wee probably 10 or more times a day. It\'s more than normal — I\'m definitely going more often." – "I\'ve lost about 3 kilos in the last 3 months and I haven\'t been trying to."', '"I feel full after a few mouthfuls. I used to have a proper appetite." – "I\'m tired a lot too."'],
      },
      {
        label: 'Timing',
        descriptor: 'persistent, daily, and worsening over 3 months; no periodicity',
        quotes: ['"It\'s there every day without fail. It doesn\'t come and go." – "It\'s been getting worse, not better."'],
      },
      {
        label: 'Exacerbating / relieving',
        descriptor: 'worse after eating; no relief from antacids or wind remedies; no relieving factors identified',
        quotes: ['"Eating makes it worse — even a small amount." – "I\'ve tried those wind tablets and they haven\'t done anything."'],
      },
      {
        label: 'Severity',
        descriptor: 'significant impact on quality of life; affecting eating, activity, and causing distress; has missed social events due to bloating',
        quotes: ['"It\'s affecting my life — I\'ve stopped going to my book club because I feel so uncomfortable." – "I\'m not eating properly. I used to love food."'],
      },
    ],
    pastMedicalHistory: [
      { label: 'Hypertension — on amlodipine 5 mg once daily; well controlled', quote: '"I have high blood pressure — I take amlodipine. It\'s been fine for years."' },
      { label: 'No previous malignancy; no previous abdominal surgery', quote: '"No cancer. No operations on my tummy."' },
      { label: 'Post-menopausal — 5 years; natural menopause at 52; no HRT', quote: '"I went through the menopause about 5 years ago. It was natural — not too bad. I decided not to take HRT."' },
    ],
    drugHistory: [
      { label: 'Amlodipine 5 mg once daily (hypertension)', quote: '"Just my amlodipine."' },
      { label: 'No NSAIDs, no aspirin, no OTC supplements', quote: '"Nothing else." – "No vitamins or herbal things."' },
      { label: 'No known drug allergies', quote: '"No allergies."' },
    ],
    familyHistory: [
      { label: 'Mother — died age 62 of "women\'s cancer" (likely ovarian or gynaecological)', quote: '"My mother died at 62. They called it a women\'s cancer — I think it was of the ovaries or the womb. She was very ill very quickly." [significant positive family history]' },
      { label: 'Father — died of a heart attack age 70; no bowel or other cancer', quote: '"Dad had a heart attack at 70." – "No bowel cancer that I know of."' },
    ],
    socialHistory: [
      { label: 'Retired accountant; lives with husband; 2 adult children; active lifestyle before onset of symptoms', quote: '"I\'m retired. I live with my husband — he\'s been very worried." – "I used to walk every day but I\'ve been less active lately because I\'m so uncomfortable."' },
      { label: 'Non-smoker; alcohol 7 units per week (within recommended limits)', quote: '"I\'ve never smoked." – "I drink a little — a glass of wine most evenings. Maybe 7 units a week."' },
    ],
    importantNegatives: [
      'No PR bleeding or change in bowel habit ("No blood in my stools. My bowels are fine — same as always.")',
      'No jaundice ("No yellowing.")',
      'No dysuria or haematuria ("Just frequency — no pain, no blood.")',
      'No nocturia ("It\'s mainly in the day.")',
      'No vomiting or nausea ("No vomiting — just the fullness.")',
      'No night sweats ("No — just the normal fatigue.")',
      'No HRT use ("I chose not to take it.")',
    ],
    ice: {
      ideas: '"My husband thinks it\'s IBS. And I thought maybe it\'s something to do with the menopause — people say you can get bloating." – "But then I thought about my mum... and I got worried."',
      concerns: '"My mum died of a women\'s cancer at 62 and I\'m 57. It keeps going through my mind." [quietly frightened] "I\'ve been putting this off because I was scared of what you might say."',
      expectations: '"I suppose I need to know what\'s causing it. I need to know if I need to worry."',
    },
    onlyIfDirectlyAsked: [
      'Whether she has told her husband about her concern about cancer — "I haven\'t said the word cancer to him. I don\'t want to worry him until I know."',
      'Whether she has lost her appetite or just becomes full quickly — "It\'s mainly that I feel full very quickly rather than not wanting to eat."',
      'Whether the frequency is worse at night — "No — mainly during the day."',
    ],
    behaviourNotes: [
      'Appears calm but is quietly frightened; has been putting the appointment off for weeks because she is scared',
      'Mentions her mother spontaneously when asked about family history — becomes emotional briefly; says "I know. I\'ve been thinking about her."',
      'Responds to a calm, matter-of-fact approach; does not want to be over-reassured',
      'Asks "Could this be ovarian cancer?" — student should acknowledge the concern honestly: these symptoms need investigating urgently; the first step is a blood test and scan, not a diagnosis',
      'Asks "What happens if the blood test is abnormal?" — student should explain the pathway: CA-125, USS, referral if suspicious',
      'If the student does not mention the urgent investigation pathway by the end of the station, Patricia asks "So what do we do now?"',
    ],
  },
  markScheme: [
    {
      domain: 'Opening the consultation',
      items: [
        { description: 'Introduces themselves; confirms patient identity; creates a comfortable, unhurried environment', marks: 1 },
      ],
    },
    {
      domain: 'Presenting complaint',
      items: [
        { description: 'Uses an open question to allow Mrs Morris to describe her symptoms in her own words', marks: 1 },
      ],
    },
    {
      domain: 'History of presenting complaint — SOCRATES',
      items: [
        { description: 'Establishes that bloating is persistent, progressive, and daily over 3 months — not intermittent or positional', marks: 2 },
        { description: 'Identifies urinary frequency (10+ times/day) and asks specifically about dysuria and haematuria (both absent)', marks: 1 },
        { description: 'Asks about early satiety — identifies eating less than half normal portions', marks: 1 },
        { description: 'Quantifies unintentional weight loss — 3 kg over 3 months', marks: 1 },
        { description: 'Asks about fatigue', marks: 1 },
      ],
    },
    {
      domain: 'Gynaecological and menstrual history',
      items: [
        { description: 'Asks about menopausal status — identifies post-menopausal for 5 years; no HRT', marks: 1 },
        { description: 'Asks about postmenopausal bleeding (none)', marks: 1 },
      ],
    },
    {
      domain: 'Red flag screening',
      items: [
        { description: 'Asks about PR bleeding and change in bowel habit — both absent (screens for colorectal cancer)', marks: 1 },
        { description: 'Asks about jaundice and dysphagia (screens for upper GI malignancy)', marks: 1 },
      ],
    },
    {
      domain: 'Family history',
      items: [
        {
          description: 'Asks specifically about family history of ovarian, breast, bowel, and gynaecological malignancy — identifies mother died of "women\'s cancer" at 62',
          marks: 2,
        },
      ],
    },
    {
      domain: 'ICE',
      items: [
        { description: 'Explores ICE — identifies fear of cancer (linked to mother\'s death); acknowledges this sensitively', marks: 1 },
      ],
    },
    {
      domain: 'Investigation and management plan',
      items: [
        {
          description: 'Identifies that NICE NG12 criteria for suspected ovarian cancer are met: persistent bloating, early satiety, urinary frequency, weight loss, post-menopausal, positive family history',
          marks: 2,
        },
        {
          description: 'States that first-line investigation is CA-125 blood test (not immediate 2WW referral — NICE pathway: CA-125 first in primary care)',
          marks: 2,
        },
        { description: 'Explains that if CA-125 >= 35 IU/mL, pelvic and abdominal ultrasound is the next step; if both suspicious, urgent 2WW gynae-oncology referral follows', marks: 1 },
      ],
    },
    {
      domain: 'Closing the consultation',
      items: [
        { description: 'Summarises the history and explains the plan clearly and compassionately to Mrs Morris', marks: 1 },
        { description: 'Safety-nets: advises Mrs Morris to return urgently if symptoms worsen or new symptoms develop before the results are back', marks: 1 },
      ],
    },
    {
      domain: 'Key communication skills',
      items: [
        { description: 'Active listening — acknowledges Mrs Morris\'s underlying fear relating to her mother without dismissing it', marks: 1 },
        { description: 'Signposting — explains what each step of the investigation involves so Mrs Morris knows what to expect', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Mrs Morris is a 57-year-old post-menopausal woman presenting with a 3-month history of progressive, persistent abdominal bloating, urinary frequency (10+ times/day), early satiety, 3 kg unintentional weight loss, and fatigue — all daily and worsening',
    'The combination of these persistent symptoms in a post-menopausal woman meets the NICE NG12 criteria for suspected ovarian cancer and mandates urgent investigation',
    'Key positive features: post-menopausal status, persistent bloating and early satiety (typical of ovarian mass causing pressure), urinary frequency without dysuria (pelvic mass compressing bladder), weight loss, and a family history of maternal death from "women\'s cancer" at age 62 — likely gynaecological',
    'Important negatives: no PR bleeding or change in bowel habit (less suggestive of colorectal cancer), no postmenopausal bleeding (less suggestive of endometrial cancer), no dysuria or haematuria (not UTI)',
    'Differential: ovarian cancer (highest priority to exclude), ovarian cyst, IBS (symptoms not intermittent and not relieved by bowel movements — less likely), fibroid (post-menopausal with no HRT — less likely)',
    'NICE NG12 pathway: CA-125 blood test is first-line in primary care for women with these symptoms; if CA-125 >= 35 IU/mL, arrange pelvic USS; if USS is suspicious, urgent 2WW referral to gynaecological oncology',
    'Mrs Morris was informed compassionately about the investigation plan; her concern relating to her mother was acknowledged; safety-netting advice given',
  ],
  vivaQuestions: [
    {
      question: 'What are the NICE NG12 criteria for suspected ovarian cancer and what is the investigation pathway in primary care?',
      keyPoints: [
        'NICE NG12: consider CA-125 in women of any age with persistent or frequent symptoms of bloating, early satiety/loss of appetite, pelvic or abdominal pain, or increased urinary frequency/urgency — especially if > 12 times per month',
        'Post-menopausal women: new-onset IBS-type symptoms after 50 years should raise suspicion of ovarian cancer',
        'CA-125 >= 35 IU/mL: arrange pelvic and abdominal USS; if USS suspicious → urgent 2WW referral to gynaecological oncology',
        'CA-125 < 35 IU/mL in a symptomatic patient: do not dismiss — reassess if symptoms persist; a normal CA-125 does not exclude ovarian cancer (sensitivity 80% for epithelial cancer, lower for early-stage)',
        'Note: CA-125 is first-line investigation in primary care — NOT a direct urgent 2WW referral; the referral is triggered by USS findings',
      ],
      source: 'NICE NG12 (Suspected cancer: recognition and referral, 2015 updated 2023)',
    },
    {
      question: 'What are the differential diagnoses for persistent abdominal bloating in a 57-year-old post-menopausal woman?',
      keyPoints: [
        'Ovarian cancer: most important to exclude given age, post-menopausal, persistent symptoms, family history',
        'Ovarian cyst (benign or borderline): common in pre-menopausal women; post-menopausal cysts require imaging and CA-125',
        'Colorectal cancer: change in bowel habit, PR bleeding, weight loss — absent here but should be screened for',
        'Endometrial cancer: post-menopausal bleeding is the key feature — absent here',
        'IBS: typically affects younger women; intermittent; related to bowel habit; relieved by defecation; ROME IV criteria require onset > 6 months; not typically causing weight loss',
        'Ascites from other causes: hepatic (cirrhosis, malignancy), cardiac failure, lymphoma',
      ],
      source: 'NICE NG12 (2015 updated 2023); RCOG Green-top Guideline No. 34 (Ovarian Cysts in Postmenopausal Women, 2016)',
    },
    {
      question: 'What are the risk factors for ovarian cancer and how does hereditary ovarian cancer syndrome present?',
      keyPoints: [
        'Sporadic risk factors: nulliparity, early menarche/late menopause, HRT (especially oestrogen-only), endometriosis, obesity; COCP is protective (each year of use reduces risk by approximately 5%)',
        'Hereditary: BRCA1 mutation carries lifetime ovarian cancer risk of 40-60%; BRCA2 carries 10-30%; Lynch syndrome (MLH1/MSH2 mutations) increases risk of ovarian and endometrial cancer',
        'Family history: first-degree relative with ovarian cancer doubles lifetime risk; two first-degree relatives significantly higher risk; referral to clinical genetics appropriate',
        'Epithelial ovarian cancers comprise 85-90% of cases; serous carcinoma most common (60%); peak incidence age 55-65 years',
        'Prevention: risk-reducing bilateral salpingo-oophorectomy (RRBSO) offered to BRCA1 carriers typically after 35-40 years once family complete',
      ],
      source: 'RCOG Green-top Guideline No. 34 (2016); Cancer Research UK Ovarian Cancer Statistics; NICE NG12 (2023)',
    },
    {
      question: 'How is CA-125 interpreted in clinical practice — what are its limitations?',
      keyPoints: [
        'CA-125 >= 35 IU/mL: trigger for USS and further investigation in symptomatic women; diagnostic threshold, not a cut-off for cancer vs. no cancer',
        'Sensitivity: approximately 80% for advanced-stage epithelial ovarian cancer; lower for early-stage (Stage I — ~50%); not all ovarian cancers elevate CA-125',
        'False positives: elevated in endometriosis, fibroids, pelvic inflammatory disease, liver disease, menstruation, pregnancy — CA-125 is not specific to cancer',
        'False negatives: mucinous and clear cell ovarian cancers may not elevate CA-125; early-stage disease may be CA-125 negative',
        'RMI (Risk of Malignancy Index): combines CA-125, USS score, and menopausal status to stratify risk; RMI >200 = high risk, refer to cancer centre',
      ],
      source: 'NICE NG12 (2015 updated 2023); RCOG Green-top Guideline No. 34 (2016)',
    },
  ],
};


export const GP_MOCK_EXAMS: MockExamStation[] = [weightLossCounsellingMockExam, raArthritisMockExam, gpBloatingTwoWeekWaitMockExam];
