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

export const GP_MOCK_EXAMS: MockExamStation[] = [weightLossCounsellingMockExam];
