import type { MockExamStation } from './mockExamTypes';

const tensionPneumothoraxMockExam: MockExamStation = {
  id: 'ae_tension_pneumothorax',
  title: 'A-E Assessment — Traumatic Tension Pneumothorax',
  diagnosis: 'Right-sided tension pneumothorax secondary to chest trauma',
  specialtyId: 'emergency-medicine',
  candidateBrief: {
    setting: 'You are an FY1 in the Emergency Department resuscitation bay.',
    scenario:
      'Ryan Cole, 22, has been brought in by ambulance following a road traffic accident 20 minutes ago. He was the driver; his car hit a tree at 40 mph. He was wearing a seatbelt. On arrival: GCS 13 (E3 V4 M6), HR 128, BP 88/54, SpO₂ 88% on 15L O₂ via non-rebreathe mask, RR 30. The paramedics report he was speaking on scene but has been deteriorating.',
    tasks: [
      'Perform a systematic A-E assessment of this patient',
      'Identify the diagnosis and initiate immediate management at each step',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'Ryan Cole',
    age: 22,
    occupation: 'Apprentice electrician',
    openingLine: '"Can\'t... breathe properly. My chest..." [distressed, short of breath, gripping the bed rail]',
    historyOfPresentingComplaint: [
      {
        label: 'A — Airway: patent; speaking in short phrases; no stridor',
        quote: '[Actor]: airway patent — patient is speaking in short phrases; no stridor; no visible foreign body.',
      },
      {
        label: 'B — Breathing: inspection — RR 30; SpO₂ 88%; right chest reduced expansion; trachea deviated LEFT',
        quote: '[Examiner reports]: RR 30; SpO₂ 88% on 15L O₂ non-rebreathe; right chest visibly expanding less than left; trachea — examine by palpating the suprasternal notch — deviated to the LEFT.',
      },
      {
        label: 'B — Breathing: percussion — right HYPERRESONANT; left resonant (normal)',
        quote: '[Examiner reports]: right side HYPERRESONANT; left side resonant (normal).',
      },
      {
        label: 'B — Breathing: auscultation — breath sounds ABSENT on right; normal on left',
        quote: '[Examiner reports]: breath sounds ABSENT on the right; breath sounds normal on the left.',
      },
      {
        label: 'C — Circulation: HR 128; BP 88/54 (obstructive shock); CRT 4s; JVD; pale and clammy',
        quote: '[Examiner reports]: HR 128 (sinus tachycardia); BP 88/54 (obstructive shock); capillary refill 4 seconds peripherally; neck veins distended (JVD) — raised JVP visible; skin pale and clammy; no external haemorrhage identified.',
      },
      {
        label: 'D — Disability: GCS 13 (E3V4M6); pupils equal and reactive; BM 5.6 mmol/L',
        quote: '[Examiner reports]: GCS 13 — E3 V4 M6 (confused but following commands); pupils 4 mm and equal, reactive to light; BM 5.6 mmol/L.',
      },
      {
        label: 'E — Exposure: right-sided chest bruising and abrasions; trachea deviated left (confirmed); abdomen soft; no long bone injury',
        quote: '[Examiner reports]: right-sided chest bruising and abrasions; no obvious open wound; trachea deviated left on re-examination (confirmed); abdomen soft; pelvis stable; long bones intact; temperature 35.8°C.',
      },
      {
        label: 'History — mechanism: driver in RTA at 40 mph; seatbelt worn; was speaking at scene; deteriorating',
        quote: '"Car hit... a tree. Did my seatbelt." [short of breath, short phrases] "Was fine... at first. Getting worse."',
      },
      {
        label: 'Response to needle decompression — immediate improvement: SpO₂ 94%; BP 102/68; HR 108; trachea re-centralises',
        quote: '[Examiner]: after correct needle decompression (2nd ICS, MCL, right side) — rush of air; immediate improvement in SpO₂ (rises to 94%); BP improves to 102/68; HR reduces to 108; trachea re-centralises; patient says "I can breathe a bit better".',
      },
    ],
    pastMedicalHistory: [
      { label: 'No significant past medical history', quote: '"Nothing." [short of breath]' },
    ],
    drugHistory: [
      { label: 'No regular medications; no known allergies', quote: '"No tablets." [short of breath] – "None." [no allergies]' },
    ],
    familyHistory: [],
    socialHistory: [
      { label: 'Apprentice electrician (22)', quote: '[From candidate brief]' },
    ],
    importantNegatives: [
      'No stridor or upper airway obstruction',
      'No pericardial rub or muffled heart sounds (not cardiac tamponade — though should be excluded by the student)',
      'No obvious haemothorax — percussion hyperresonant not dull (dull percussion would suggest haemothorax)',
      'No pelvis instability or long bone fractures detected on exposure',
    ],
    ice: {
      ideas: '"Something\'s... wrong with my chest."',
      concerns: '"Am I... going to be okay?" [distressed]',
      expectations: '"Just... help me breathe."',
    },
    onlyIfDirectlyAsked: [
      'Allergies — none known ("No." [brief])',
      'Last meal — "Breakfast... this morning."',
    ],
    behaviourNotes: [
      'Acutely unwell throughout — short of breath, agitated, gripping the bed rail',
      'Can speak in short phrases only — deteriorates if the student talks too long without acting',
      'Responds with visible relief after needle decompression: calmer, breathing slightly easier',
      'The examiner should drive the pace: if the student spends more than 90 seconds on any one system without acting on critical findings, prompt them',
      'If the student performs needle decompression correctly, describe the rush of air and immediate clinical improvement to reinforce the diagnosis',
    ],
  },
  markScheme: [
    {
      domain: 'Airway (A)',
      items: [
        { description: 'Calls for help (2222/emergency team) and high-flow oxygen at the start', marks: 1 },
        { description: 'Assesses airway patency — confirms patent airway; no airway manoeuvres required', marks: 1 },
      ],
    },
    {
      domain: 'Breathing (B)',
      items: [
        { description: 'Inspects chest — notes asymmetric expansion (reduced right), tachypnoea', marks: 1 },
        { description: 'Palpates trachea — identifies deviation to the LEFT (away from tension side)', marks: 2 },
        { description: 'Percusses chest — identifies HYPERRESONANCE on the right', marks: 2 },
        { description: 'Auscultates — identifies ABSENT breath sounds on the right', marks: 1 },
        {
          description:
            'Correctly identifies tension pneumothorax based on B findings: absent breath sounds + hyperresonance + tracheal deviation',
          marks: 2,
        },
      ],
    },
    {
      domain: 'Circulation (C)',
      items: [
        { description: 'Assesses HR, BP, capillary refill — identifies obstructive shock (tachycardia, hypotension, poor perfusion)', marks: 1 },
        { description: 'Identifies raised JVP / distended neck veins — supports tension physiology', marks: 1 },
        { description: 'Establishes IV access (states 2 large-bore cannulae); requests IV fluid', marks: 1 },
      ],
    },
    {
      domain: 'Disability and Exposure (D+E)',
      items: [
        { description: 'Assesses GCS, pupils, and blood glucose', marks: 1 },
        { description: 'Exposes patient fully — identifies right-sided chest bruising/abrasions', marks: 1 },
      ],
    },
    {
      domain: 'Immediate management — needle decompression',
      items: [
        {
          description: 'Calls for immediate needle decompression before completing full A-E (tension pneumothorax = life-threatening emergency requiring treatment at B)',
          marks: 2,
        },
        {
          description:
            'Correctly identifies the site: 2nd intercostal space, midclavicular line, right side (or 4th/5th ICS, anterior axillary line)',
          marks: 2,
        },
        { description: 'States immediate follow-up with chest drain insertion (4th/5th ICS, anterior axillary line, triangle of safety)', marks: 1 },
      ],
    },
    {
      domain: 'Further management',
      items: [
        {
          description: 'Requests investigations: CXR (once stable), bloods (FBC, U&Es, clotting, cross-match, ABG), trauma series',
          marks: 1,
        },
        { description: 'Activates trauma team / major trauma centre transfer; states need for CT trauma survey', marks: 1 },
      ],
    },
    {
      domain: 'Key communication skills',
      items: [
        { description: 'Communicates with the team clearly; calls for help and delegates tasks', marks: 1 },
        { description: 'Maintains brief reassuring communication with the patient throughout', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Ryan is a 22-year-old man presenting acutely following a high-speed RTA with blunt chest trauma; on arrival HR 128, BP 88/54, SpO₂ 88% on 15L O₂, GCS 13, RR 30',
    'Airway is patent; breathing assessment reveals the critical diagnosis: absent breath sounds right, hyperresonant percussion right, tracheal deviation to the LEFT — the classical triad of tension pneumothorax',
    'Circulation shows obstructive shock: tachycardia, hypotension, poor perfusion, and raised JVP — raised JVP distinguishes tension pneumothorax from simple pneumothorax and haemothorax (where JVP is low)',
    'Immediately life-threatening: needle decompression was performed at the 2nd intercostal space, midclavicular line on the right, producing a rush of air and immediate haemodynamic improvement',
    'Follow-up: definitive management with right chest drain insertion (4th/5th ICS, anterior axillary line, triangle of safety); continuous monitoring; CT trauma survey when haemodynamically stable to exclude associated injuries (haemothorax, rib fractures, pneumothorax, aortic injury)',
    'Major trauma team activated; plan for transfer to major trauma centre',
  ],
  vivaQuestions: [
    {
      question: 'What are the six immediately life-threatening conditions identified in the primary survey (C-ABCDE), and how does tension pneumothorax fit within this framework?',
      keyPoints: [
        'C-ABCDE primary survey: Catastrophic haemorrhage → Airway → Breathing → Circulation → Disability → Exposure',
        'Six immediately life-threatening breathing conditions: tension pneumothorax, open pneumothorax, massive haemothorax, flail chest, cardiac tamponade, airway obstruction',
        'Tension pneumothorax: air accumulates in the pleural space under pressure → mediastinal shift → compression of contralateral lung and great veins → obstructive shock',
        'Tension pneumothorax = B emergency: treat AT B, do not wait until C or D',
        'Clinical diagnosis: do not wait for CXR to treat tension pneumothorax — needle decompression based on clinical signs',
      ],
      source: 'ATLS 10th ed. (American College of Surgeons); JRCALC Pre-hospital Guidelines; NICE TG7',
    },
    {
      question: 'How do you perform needle decompression for tension pneumothorax, and what are the sites?',
      keyPoints: [
        'Traditional site: 2nd intercostal space, midclavicular line (MCL) — insert large-bore cannula (14G) over the UPPER border of the 3rd rib (avoids neurovascular bundle running beneath each rib)',
        'Alternative site: 4th/5th intercostal space, anterior axillary line — increasingly preferred in trauma (less soft tissue, higher success rate in obese patients)',
        'Confirm decompression: rush of air on insertion; immediate clinical improvement (SpO₂ rises, BP improves, trachea re-centralises)',
        'Needle decompression is temporary: must be followed promptly by definitive chest drain insertion (4th/5th ICS, anterior axillary line, triangle of safety)',
        'Triangle of safety: bounded by anterior border of latissimus dorsi, lateral border of pectoralis major, and a line above the horizontal level of the nipple',
      ],
      source: 'ATLS 10th ed.; BTS Pleural Disease Guidelines (2010); JRCALC 2021',
    },
    {
      question: 'How do you distinguish tension pneumothorax from cardiac tamponade clinically?',
      keyPoints: [
        'Both present with obstructive shock: hypotension, tachycardia, raised JVP (Beck\'s triad for tamponade)',
        'Tension pneumothorax: absent breath sounds unilaterally, hyperresonance, tracheal deviation AWAY from affected side — unique to pneumothorax',
        'Cardiac tamponade (Beck\'s triad): muffled heart sounds, hypotension, raised JVP — NO unilateral respiratory signs; ECG shows electrical alternans',
        'Tension pneumothorax: trachea deviates AWAY from tension side; in tamponade, trachea midline',
        'If in doubt after needle decompression (no improvement): consider pericardiocentesis for tamponade; both may coexist after thoracic trauma',
      ],
      source: 'ATLS 10th ed.; Spodick DH, NEJM 2003 (cardiac tamponade)',
    },
    {
      question: 'What are the indications for chest drain insertion, and how do you insert one safely?',
      keyPoints: [
        'Indications: pneumothorax (large or tension after decompression), haemothorax, empyema, chylothorax, pleural effusion requiring drainage',
        'Site: triangle of safety — 4th/5th ICS, anterior axillary line; confirmed by USS where possible (except emergency)',
        'Technique: skin incision over upper border of rib below chosen ICS; blunt dissection through intercostal muscles; finger sweep to clear pleura; insert drain with trocar removed (blunt technique); connect to underwater seal; confirm with CXR',
        'BTS guidelines: USS guidance recommended for elective drains; size 28–32 Fr for trauma; smaller drains (8–14 Fr) for effusion',
        'Complications: incorrect positioning, subcutaneous emphysema, infection, haemothorax, organ injury (liver, spleen, lung)',
      ],
      source: 'BTS Pleural Disease Guidelines (2010); ATLS 10th ed.',
    },
  ],
};

const pvHaemorrhageMockExam: MockExamStation = {
  id: 'ae_antepartum_haemorrhage',
  title: 'A-E Assessment — Major Antepartum Haemorrhage',
  diagnosis: 'Major antepartum haemorrhage — likely placenta praevia at 34 weeks',
  specialtyId: 'emergency-medicine',
  candidateBrief: {
    setting: 'You are an FY1 in the Emergency Department resuscitation bay.',
    scenario:
      'Fatima Al-Hassan, 31, G2P1, is 34 weeks pregnant. She arrived by ambulance after calling 999 with sudden, painless, heavy vaginal bleeding soaking through her clothes. On arrival: HR 124, BP 88/56, SpO2 97% on air, RR 22. She is pale, tremulous, and alert.',
    tasks: [
      'Perform a systematic A-E assessment and initiate immediate management at each step',
      'Identify the likely diagnosis and explain your management priorities',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'Fatima Al-Hassan',
    age: 31,
    occupation: 'Primary school teaching assistant',
    openingLine:
      '"I\'m bleeding — there\'s so much blood. Please help my baby." [pale, tremulous, frightened, speaking in full sentences]',
    historyOfPresentingComplaint: [
      {
        label: 'A — Airway: patent; speaking in full sentences; no stridor or airway compromise',
        quote: '[Actor]: Fatima is speaking in full sentences; no stridor; airway patent and self-maintained.',
      },
      {
        label: 'B — Breathing: RR 22; SpO2 97% on air; equal bilateral air entry; no wheeze or crackles',
        quote: '[Examiner reports]: RR 22; SpO2 97% on room air; chest expansion equal bilaterally; percussion resonant; auscultation clear — no wheeze or crackles.',
      },
      {
        label: 'C — Circulation: HR 124; BP 88/56 (haemorrhagic shock); CRT 4s; pale and tremulous; heavy fresh vaginal bleeding soaking bed pad',
        quote: '[Examiner reports]: HR 124 sinus tachycardia; BP 88/56 — haemorrhagic shock; capillary refill 4 seconds; skin pale, cool, and clammy. Heavy fresh red vaginal bleeding visible soaking the bed pad. No IV access yet.',
      },
      {
        label: 'D — Disability: GCS 15, AVPU Alert; pupils equal and reactive; BM 5.1 mmol/L; no headache, no visual disturbance, no epigastric pain',
        quote: '[Examiner reports]: GCS 15, E4V5M6; Alert on AVPU; pupils 3 mm equal and reactive; BM 5.1 mmol/L. [If asked about headache, visual disturbance, or epigastric pain]: "No — none of those." [Rules out pre-eclampsia]',
      },
      {
        label: 'E — Exposure: gravid uterus 34 weeks; uterus SOFT and NON-TENDER (not abruption); fetal HR on doptone 148 bpm; no VE performed',
        quote: '[Examiner reports]: Gravid abdomen consistent with 34 weeks; uterus is SOFT and NON-TENDER on palpation — no rigidity or tenderness. Doptone fetal heart rate 148 bpm — reassuring. Temperature 36.8°C. [If student attempts or requests VE]: Do NOT perform a vaginal examination — this is contraindicated in suspected placenta praevia and may precipitate catastrophic haemorrhage.',
      },
      {
        label: 'History: sudden painless bleeding starting 30 minutes ago; no contractions; no trauma; previous scan showed low-lying placenta at 20 weeks',
        quote: '"It just started — pouring out. No pain at all." – "No pain, no tightenings, nothing like that." [If asked about previous scans]: "They said at my 20-week scan the placenta was low down — they said to come back for another scan at 32 weeks but I missed the appointment."',
      },
    ],
    pastMedicalHistory: [
      { label: 'G2P1 — previous normal vaginal delivery at term (2 years ago)', quote: '"My first pregnancy was fine — normal delivery, healthy baby girl."' },
      { label: 'Low-lying placenta noted at 20-week anomaly scan — follow-up scan missed', quote: '"They said the placenta was low at the 20-week scan. I missed the follow-up." [only if directly asked]' },
      { label: 'No other significant medical history', quote: '"Nothing else — I\'ve been healthy."' },
    ],
    drugHistory: [
      { label: 'Pregnancy multivitamins and folic acid', quote: '"Just pregnancy vitamins and folic acid."' },
      { label: 'No known drug allergies', quote: '"No allergies."' },
    ],
    familyHistory: [],
    socialHistory: [
      { label: 'Non-smoker; no alcohol during pregnancy', quote: '"I don\'t smoke and I haven\'t had any alcohol since I found out I was pregnant."' },
      { label: 'Lives with husband and 2-year-old daughter', quote: '"My husband is coming — he has our daughter."' },
    ],
    importantNegatives: [
      'No abdominal pain or uterine tenderness ("No pain at all — it started completely out of the blue.")',
      'No headache, visual disturbance, or epigastric pain — excludes pre-eclampsia ("No — none of those.")',
      'No uterine contractions ("No tightenings at all.")',
      'No recent trauma or intercourse ("No — nothing like that.")',
      'No fever or signs of infection ("I haven\'t felt unwell before this.")',
    ],
    ice: {
      ideas: '"I don\'t know what\'s happening — is it the placenta? I\'m so scared."',
      concerns: '"Please — is my baby okay? She\'s moving still." [touches abdomen]',
      expectations: '"I just want to know my baby is safe and that you can stop the bleeding."',
    },
    onlyIfDirectlyAsked: [
      'Fetal movements — "Yes — she\'s been moving today, just before this happened. She felt fine."',
      'Blood group — "I\'m not sure — O positive I think."',
      'Rhesus status — "O positive." [student should note Anti-D may be required if Rhesus negative]',
    ],
    behaviourNotes: [
      'Frightened and pale throughout — speaks in short bursts but sentences are complete (she is not in respiratory distress)',
      'Becomes more panicked if the student attempts or mentions vaginal examination — "Is that safe? I\'m scared."',
      'Visibly reassured when told the baby\'s heartbeat is being monitored: "Thank you — that\'s such a relief."',
      'If the student correctly positions her in left lateral tilt, she can say "This feels better actually."',
      'If asked about the low-lying placenta history, reveals the missed scan — this is the key piece of history linking to placenta praevia',
    ],
  },
  markScheme: [
    {
      domain: 'Immediate safety and positioning',
      items: [
        { description: 'Calls for help — activates the emergency team / 2222 and senior obstetric input immediately', marks: 1 },
        { description: 'Positions patient in left lateral tilt (15-30 degrees) to relieve aortocaval compression', marks: 2 },
        { description: 'Applies high-flow oxygen via non-rebreathe mask', marks: 1 },
      ],
    },
    {
      domain: 'Airway (A)',
      items: [
        { description: 'Assesses airway — confirms patent; identifies she is speaking in full sentences', marks: 1 },
      ],
    },
    {
      domain: 'Breathing (B)',
      items: [
        { description: 'Assesses RR and SpO2; auscultates chest — identifies no respiratory cause; SpO2 97% on air', marks: 1 },
      ],
    },
    {
      domain: 'Circulation (C)',
      items: [
        { description: 'Identifies haemorrhagic shock: HR 124, BP 88/56, CRT 4s, pallor, heavy vaginal bleeding', marks: 1 },
        { description: 'Establishes 2 large-bore IV cannulae and sends blood tests: FBC, U&Es, clotting, LFTs, group and save, cross-match 6 units', marks: 2 },
        { description: 'Activates major haemorrhage protocol', marks: 1 },
        { description: 'Initiates IV crystalloid resuscitation (cautious — maintain systolic >90 until definitive haemostasis)', marks: 1 },
      ],
    },
    {
      domain: 'Disability and Exposure (D+E)',
      items: [
        { description: 'Assesses GCS/AVPU, pupils, and blood glucose; asks about headache, visual disturbance, epigastric pain to exclude pre-eclampsia', marks: 1 },
        { description: 'Palpates uterus on exposure — identifies SOFT, non-tender uterus (distinguishing from abruption)', marks: 1 },
        { description: 'Checks fetal heart rate with doptone — 148 bpm (reassuring)', marks: 1 },
        { description: 'Explicitly states: NO vaginal examination to be performed — risk of precipitating catastrophic haemorrhage in placenta praevia', marks: 2 },
      ],
    },
    {
      domain: 'Further management',
      items: [
        { description: 'Calls obstetric registrar or senior obstetrician urgently for immediate review', marks: 1 },
        { description: 'Inserts urinary catheter; commences strict fluid balance monitoring', marks: 1 },
        { description: 'Requests continuous CTG for fetal monitoring', marks: 1 },
        { description: 'Administers betamethasone IM (2 doses 24 hours apart) for fetal lung maturity at 34 weeks', marks: 2 },
      ],
    },
    {
      domain: 'Key communication skills',
      items: [
        { description: 'Communicates clearly with the team; delegates tasks (blood tests, monitoring) explicitly', marks: 1 },
        { description: 'Reassures Fatima in plain language; addresses her concern about the baby\'s wellbeing', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Fatima is a 31-year-old woman, G2P1, 34 weeks pregnant, presenting with sudden painless major antepartum haemorrhage; observations consistent with haemorrhagic shock: HR 124, BP 88/56, CRT 4s, SpO2 97%',
    'Airway patent; breathing uncompromised; circulation in haemorrhagic shock requiring immediate resuscitation — 2 large-bore cannulae, major haemorrhage protocol activated, IV crystalloid commenced',
    'The likely diagnosis is placenta praevia: the haemorrhage is painless, the uterus is soft and non-tender (distinguishing it from placental abruption where uterus is rigid and tender), and she had a low-lying placenta at 20 weeks with a missed follow-up scan',
    'Critical safety point: NO vaginal examination — this could precipitate uncontrollable haemorrhage if placenta praevia is confirmed; ultrasound is required to determine placental location',
    'Left lateral tilt applied to relieve aortocaval compression; fetal heart rate 148 bpm on doptone (reassuring); continuous CTG commenced; obstetric registrar called urgently',
    'Betamethasone IM prescribed for fetal lung maturity at 34 weeks; urinary catheter inserted; blood tests sent including cross-match 6 units, clotting, FBC',
    'Likely definitive management: emergency Caesarean section when haemodynamically optimised; senior obstetric input essential',
  ],
  vivaQuestions: [
    {
      question: 'What are the main causes of antepartum haemorrhage and how do you clinically distinguish placenta praevia from placental abruption?',
      keyPoints: [
        'APH causes: placenta praevia (20%), placental abruption (30%), uterine rupture (rare), vasa praevia, show/cervical/vaginal causes (50%)',
        'Placenta praevia: painless bright red haemorrhage; uterus soft and non-tender; fetal lie may be abnormal (oblique/transverse); no uterine tenderness; can present with no warning',
        'Placental abruption: painful (often severe); uterine rigidity and tenderness; concealed or revealed haemorrhage; associated with hypertension, cocaine use, trauma; DIC risk',
        'Vasa praevia: rupture of membranes triggers sudden fetal vessel haemorrhage — fetal tachycardia/bradycardia; Apt test (sodium hydroxide) distinguishes fetal from maternal blood',
        'Neither should have vaginal examination in the emergency setting until placental location confirmed by USS',
      ],
      source: 'RCOG Green-top Guideline No. 63 (Antepartum Haemorrhage, 2011 updated 2018)',
    },
    {
      question: 'What are the indications for corticosteroid therapy in preterm labour, what drug is used, and what is the dose?',
      keyPoints: [
        'Indication: threatened or anticipated preterm delivery between 24+0 and 34+6 weeks to accelerate fetal lung maturity',
        'Drug: betamethasone — two IM doses of 12 mg, 24 hours apart (total 24 mg)',
        'Mechanism: induces surfactant production in type II pneumocytes; reduces risk of neonatal respiratory distress syndrome, intraventricular haemorrhage, and necrotising enterocolitis',
        'NICE NG25 recommends a single rescue course if preterm birth did not occur after initial course and is now imminent',
        'Steroids should not delay emergency delivery if mother or fetus is at immediate risk',
      ],
      source: 'RCOG Green-top Guideline No. 7 (Antenatal Corticosteroids to Reduce Neonatal Morbidity, 2010); NICE NG25 (2015)',
    },
    {
      question: 'Define and outline the management of postpartum haemorrhage (PPH).',
      keyPoints: [
        'PPH: primary (within 24 hours of delivery) — blood loss >500 mL vaginal delivery or >1000 mL Caesarean; severe PPH >1000 mL',
        'Causes (4 Ts): Tone (uterine atony — 70%), Trauma (lacerations, uterine rupture), Tissue (retained placenta), Thrombin (coagulopathy)',
        'Management: call for help; massage uterus bimanually; IV oxytocin 5-10 units (first-line); ergometrine 500 mcg IM; carboprost (Hemabate) 250 mcg IM; misoprostol 800 mcg SL',
        'Activate major haemorrhage protocol; transfuse packed red cells and FFP in 1:1 ratio; cryoprecipitate if fibrinogen <2 g/L; TXA 1 g IV within 3 hours',
        'Surgical: Bakri balloon tamponade; B-Lynch suture; uterine artery ligation; hysterectomy as last resort',
      ],
      source: 'RCOG Green-top Guideline No. 52 (Postpartum Haemorrhage, 2016); ATLS 10th ed.',
    },
    {
      question: 'Why is left lateral tilt used in pregnant women in the resuscitation bay, and when is it applied?',
      keyPoints: [
        'After 20 weeks gestation the gravid uterus compresses the inferior vena cava (IVC) when the patient is supine — reducing venous return to the heart by up to 30%',
        'Aortocaval compression reduces cardiac output, causing supine hypotension syndrome: dizziness, hypotension, fetal bradycardia',
        'Left lateral tilt of 15–30 degrees displaces the uterus off the IVC, restoring venous return and improving cardiac output',
        'Applied immediately in any pregnant woman from 20 weeks gestation receiving resuscitation or in the lateral recumbent position',
        'In cardiac arrest in pregnancy: manual left uterine displacement (one hand) is used alongside CPR if tilt is not feasible',
      ],
      source: 'RCOG Green-top Guideline No. 63 (2018); Resuscitation Council UK — Cardiac Arrest in Special Circumstances (2021)',
    },
  ],
};

const anaphylaxisMockExam: MockExamStation = {
  id: 'ae_anaphylaxis_drug_reaction',
  title: 'A-E Assessment — Anaphylaxis to IV Flucloxacillin',
  diagnosis: 'Anaphylaxis — IgE-mediated reaction to IV flucloxacillin',
  specialtyId: 'emergency-medicine',
  candidateBrief: {
    setting: 'You are an FY1 on the surgical assessment ward.',
    scenario:
      'Sophie Clarke, 28, was admitted yesterday with right leg cellulitis and commenced on IV flucloxacillin 500 mg QDS. The ward nurse has called you urgently fifteen minutes into her second dose this morning. Sophie is complaining of throat tightness and itching. On arrival: HR 132, BP 78/48, SpO2 94% on air, RR 28. Visible urticaria on neck and chest. Audible inspiratory stridor.',
    tasks: [
      'Perform a systematic A-E assessment and initiate immediate management at each step',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'Sophie Clarke',
    age: 28,
    occupation: 'Primary school teacher',
    openingLine:
      '"My throat — it\'s tight. I can\'t breathe properly. Something\'s wrong with the drip." [hoarse voice, visibly distressed, audible inspiratory stridor, urticaria on neck and chest]',
    historyOfPresentingComplaint: [
      {
        label: 'A — Airway: COMPROMISED — audible inspiratory stridor; hoarse voice; angioedema of lips and tongue; throat tightness',
        quote: '"My throat feels like it\'s closing." [hoarse, stridorous] [Examiner]: Stridor audible from the bedside. Patient speaks in short phrases only.',
      },
      {
        label: 'B — Breathing: RR 28; SpO2 94% on air; bilateral expiratory wheeze; accessory muscle use',
        quote: '[Examiner reports]: RR 28; SpO2 94% on air. Bilateral expiratory wheeze. Trachea central. No pneumothorax.',
      },
      {
        label: 'C — Circulation: HR 132 sinus tachycardia; BP 78/48 (distributive shock); CRT 5 seconds; warm peripheries; urticaria on chest and arms',
        quote: '[Examiner reports]: HR 132; BP 78/48; CRT 5 seconds — warm peripheries. IV line in right antecubital fossa with flucloxacillin running. Urticaria visible on chest, neck, and arms.',
      },
      {
        label: 'D — Disability: GCS 14 (slightly confused from hypoperfusion); pupils equal and reactive; BM 5.8 mmol/L',
        quote: '[Examiner reports]: GCS 14 — anxious and slightly confused. Pupils equal and reactive. BM 5.8 mmol/L.',
      },
      {
        label: 'E — Exposure: widespread urticaria on trunk and upper limbs; angioedema of lips and tongue; IV flucloxacillin infusion still running',
        quote: '[Examiner reports]: Widespread urticaria trunk and upper limbs. Angioedema of lips and tongue. Temp 36.8°C. [If student does not stop the infusion within the first minute]: The flucloxacillin infusion is still running.',
      },
    ],
    pastMedicalHistory: [
      { label: 'No known drug allergies — this is the first anaphylactic reaction', quote: '"I\'m not allergic to anything — at least I wasn\'t."' },
      { label: 'Right leg cellulitis — admitted yesterday; no previous penicillin reaction', quote: '"I had antibiotics before — years ago for a chest infection. Nothing happened then."' },
      { label: 'No asthma, no atopy', quote: '"No asthma, no hay fever, nothing like that." [if asked]' },
    ],
    drugHistory: [
      { label: 'IV flucloxacillin 500 mg QDS — second dose, started 15 minutes ago', quote: '"Just the antibiotic drip for my leg."' },
      { label: 'No regular medications; no known drug allergies documented', quote: '"Nothing else."' },
    ],
    familyHistory: [],
    socialHistory: [
      { label: 'Non-smoker; no regular alcohol', quote: '"I don\'t smoke."' },
    ],
    importantNegatives: [
      'No previous penicillin allergy ("I\'ve had antibiotics before without any problem.")',
      'No background asthma ("I\'ve never had breathing problems before this.")',
      'No bee sting or food allergies ("No — nothing.")',
      'No fever or rigors before the reaction — not septic shock ("I was fine until the drip started.")',
    ],
    ice: {
      ideas: '"Am I allergic to the antibiotic? Is this a reaction?"',
      concerns: '"My throat — I\'m scared it\'s going to close completely."',
      expectations: '"Please do something — I can\'t breathe properly."',
    },
    onlyIfDirectlyAsked: [
      'Previous penicillin — "Amoxicillin for a chest infection, maybe 5 years ago. No reaction."',
      'When symptoms started — "About 15 minutes after the drip started."',
    ],
    behaviourNotes: [
      'Visibly frightened; voice hoarse due to laryngeal oedema; audible inspiratory stridor throughout',
      'Becomes more distressed if the infusion is not stopped promptly — "The drip is still going — should it be?"',
      'Reassured once IM adrenaline is given: stridor audibly begins to improve within 1–2 minutes — "That\'s helping. I can breathe a bit better."',
      'Do NOT lie flat if student attempts this — with stridor and airway compromise, patient should be kept sitting upright',
      'If student gives IV adrenaline rather than IM: examiner prompts "Are you sure about the route?"',
    ],
  },
  markScheme: [
    {
      domain: 'Immediate recognition and response',
      items: [
        { description: 'Recognises anaphylaxis and calls for senior help immediately (2222)', marks: 1 },
        { description: 'Stops the IV flucloxacillin infusion immediately — removes the trigger', marks: 2 },
      ],
    },
    {
      domain: 'Airway (A)',
      items: [
        { description: 'Identifies airway compromise: audible stridor, hoarse voice, angioedema — escalates to anaesthetics for potential intubation', marks: 2 },
        { description: 'Positions patient sitting upright (not lying flat given stridor) and applies high-flow O2 via non-rebreathe mask', marks: 1 },
      ],
    },
    {
      domain: 'Breathing (B)',
      items: [
        { description: 'Assesses RR and SpO2; auscultates and identifies bilateral wheeze (bronchospasm component)', marks: 1 },
      ],
    },
    {
      domain: 'Circulation (C)',
      items: [
        { description: 'Identifies distributive shock: HR 132, BP 78/48, warm peripheries, urticaria', marks: 1 },
        { description: 'Administers IM adrenaline 500 micrograms (0.5 mL of 1:1000) into the anterolateral thigh', marks: 2 },
        { description: 'Establishes/uses IV access and gives IV fluid bolus 500 mL 0.9% NaCl', marks: 1 },
        { description: 'Administers IV chlorphenamine 10 mg and IV hydrocortisone 200 mg as adjuncts', marks: 1 },
      ],
    },
    {
      domain: 'Disability and Exposure (D+E)',
      items: [
        { description: 'Assesses GCS, pupils, and BM; identifies mild confusion from cerebral hypoperfusion', marks: 1 },
        { description: 'Identifies angioedema of lips/tongue and widespread urticaria on full exposure', marks: 1 },
      ],
    },
    {
      domain: 'Monitoring and follow-up',
      items: [
        { description: 'Commences continuous monitoring: cardiac monitor, SpO2, BP every 5 minutes', marks: 1 },
        { description: 'States plan to repeat IM adrenaline at 5 minutes if no improvement', marks: 1 },
        { description: 'Plans admission for minimum 6–12 hours due to biphasic reaction risk', marks: 1 },
        { description: 'Documents reaction; flags allergy on drug chart; refers to allergy clinic; prescribes 2 × adrenaline auto-injectors on discharge', marks: 1 },
      ],
    },
    {
      domain: 'Key communication skills',
      items: [
        { description: 'Provides brief reassurance to Sophie throughout without delaying treatment', marks: 1 },
        { description: 'Delegates tasks clearly to nursing staff and colleagues', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Sophie is a 28-year-old woman admitted with cellulitis who developed anaphylaxis 15 minutes into her second dose of IV flucloxacillin: HR 132, BP 78/48, SpO2 94% on air, RR 28',
    'Airway COMPROMISED: audible inspiratory stridor, hoarse voice, angioedema of lips and tongue — anaesthetics alerted urgently for potential emergency airway management',
    'Breathing: bilateral expiratory wheeze (bronchospasm component); supplemental O2 via NRB mask applied; SpO2 improving',
    'Circulation: distributive shock — IV flucloxacillin stopped immediately; IM adrenaline 0.5 mg (1:1000) given into anterolateral thigh; IV 0.9% NaCl 500 mL bolus; IV chlorphenamine 10 mg and hydrocortisone 200 mg administered',
    'Diagnosis: IgE-mediated anaphylaxis to flucloxacillin (penicillinase-resistant penicillin); allergy documented prominently; patient must never receive penicillins again',
    'Plan: continuous monitoring; repeat IM adrenaline at 5 minutes if no response; admit minimum 6–12 hours for biphasic reaction surveillance',
    'Discharge: prescribe 2 × adrenaline auto-injectors (EpiPen 300 mcg); written anaphylaxis action plan; urgent allergy clinic referral for skin prick testing and formal penicillin allergy assessment',
  ],
  vivaQuestions: [
    {
      question: 'What are the diagnostic criteria for anaphylaxis?',
      keyPoints: [
        'Anaphylaxis is highly likely when: sudden onset + skin/mucosal changes AND life-threatening airway/breathing/circulation compromise; OR two of those features after known allergen exposure',
        'Must include life-threatening airway, breathing, or circulatory involvement — urticaria alone without systemic features is not anaphylaxis',
        'Confirmatory investigation: serum tryptase — peak at 1–2 hours; sample at presentation, 1–2 hours, and 24 hours confirms mast cell degranulation',
        'Common in-hospital triggers: antibiotics (penicillins most common), contrast media, NMB agents, latex, blood products, NSAIDs',
        'Differential: vasovagal (pallor, bradycardia, no urticaria/wheeze), septic shock (fever, warm, no urticaria), angio-oedema alone (no hypotension)',
      ],
      source: 'Resuscitation Council UK: Emergency treatment of anaphylaxis (2021); NICE CG134 (2011 updated 2020)',
    },
    {
      question: 'What is the correct dose, route, and timing of adrenaline in anaphylaxis?',
      keyPoints: [
        'Adults: 500 micrograms (0.5 mL of 1:1000) IM into anterolateral mid-thigh — repeat at 5 minutes if no improvement',
        'Children: <6 years 150 mcg; 6–12 years 300 mcg; >12 years 500 mcg',
        'IM anterolateral thigh: faster absorption and higher peak plasma level than deltoid; predictable pharmacokinetics',
        'IV adrenaline (1:10,000, titrated): ONLY in cardiac arrest or by experienced practitioners in ICU/resus with continuous monitoring — risk of VF and hypertensive crisis if undiluted IV given',
        'Chlorphenamine and hydrocortisone are adjuncts given after adrenaline — they act over hours and do not treat acute cardiovascular collapse',
      ],
      source: 'Resuscitation Council UK: Emergency treatment of anaphylaxis (2021)',
    },
    {
      question: 'What is a biphasic anaphylactic reaction and how long should patients be observed?',
      keyPoints: [
        'Biphasic reaction: recurrence of anaphylaxis symptoms after apparent full resolution, without re-exposure to the allergen',
        'Occurs in approximately 5–20% of cases; typically within 1–72 hours (most within 8 hours) of the initial reaction',
        'Risk factors: severe initial reaction, delayed or inadequate first-line treatment, unknown trigger',
        'Resuscitation Council UK: minimum 6–12 hours observation after recovery; 12–24 hours for severe reactions or those requiring multiple doses of adrenaline',
        'All patients discharged with 2 × adrenaline auto-injectors, written management plan, and allergy clinic referral',
      ],
      source: 'Resuscitation Council UK: Emergency treatment of anaphylaxis (2021); NICE CG134 (2020)',
    },
  ],
};

const ectopicRuptureMockExam: MockExamStation = {
  id: 'ae_ectopic_pregnancy_rupture',
  title: 'A-E Assessment — Ruptured Ectopic Pregnancy',
  diagnosis: 'Ruptured right tubal ectopic pregnancy — haemoperitoneum and haemorrhagic shock',
  specialtyId: 'emergency-medicine',
  candidateBrief: {
    setting: 'You are an FY1 in the Emergency Department resuscitation bay.',
    scenario:
      'Chloe Bennett, 24, has been brought by ambulance with sudden severe right-sided lower abdominal pain and light vaginal bleeding. Her last menstrual period was 7 weeks ago and she took a home pregnancy test 2 weeks ago which was positive. On arrival: HR 128, BP 82/52, SpO2 96% on air, RR 22. She is pale, cold, and in significant pain.',
    tasks: [
      'Perform a systematic A-E assessment and initiate immediate management at each step',
      'Identify the likely diagnosis and explain your management priorities',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'Chloe Bennett',
    age: 24,
    occupation: 'Barista',
    openingLine:
      '"The pain came out of nowhere — right side, really severe. I didn\'t know what to do." [pale, cold and clammy, guarding right side, visibly distressed]',
    historyOfPresentingComplaint: [
      {
        label: 'A — Airway: patent; speaking in full sentences though clearly in pain',
        quote: '[Actor]: Chloe is speaking in full sentences but wincing with pain. Airway patent and self-maintained.',
      },
      {
        label: 'B — Breathing: RR 22; SpO2 96% on air; chest clear; splinting from abdominal pain',
        quote: '[Examiner reports]: RR 22; SpO2 96% on air. Equal air entry bilaterally. No wheeze or crackles. Tachypnoea from pain and hypoperfusion.',
      },
      {
        label: 'C — Circulation: HR 128; BP 82/52 (haemorrhagic shock); CRT 4 seconds; cold and pale; small amount of dark vaginal bleeding',
        quote: '[Examiner reports]: HR 128 sinus tachycardia; BP 82/52. CRT 4 seconds — cold, pale, clammy peripheries. Small amount of dark vaginal bleeding on pelvic pad.',
      },
      {
        label: 'D — Disability: GCS 14 (pain and hypoperfusion); AVPU Alert; BM 5.1 mmol/L; severe right iliac fossa and suprapubic pain',
        quote: '[Examiner reports]: GCS 14; Alert on AVPU. Pupils equal and reactive. BM 5.1 mmol/L. [If abdomen examined]: Peritoneal guarding and tenderness in right iliac fossa and suprapubic region. Rebound tenderness present. [If student attempts VE]: Do NOT perform a vaginal examination — await transvaginal USS.',
      },
      {
        label: 'E — Exposure: abdomen rigid and guarded right side; shoulder tip pain (referred pain from diaphragmatic irritation by haemoperitoneum)',
        quote: '[Examiner reports]: Abdomen rigid with guarding predominantly right iliac fossa and suprapubic. [If asked about shoulder]: "Yes — I\'ve got this strange ache in my right shoulder. It came on with the pain." [Kehr\'s sign — diaphragmatic irritation from haemoperitoneum]',
      },
      {
        label: 'Obstetric history: LMP 7 weeks ago; positive home pregnancy test 2 weeks ago; not registered with GP for antenatal care yet; no previous USS',
        quote: '"My period was about 7 weeks ago. I did a test 2 weeks ago — it was positive. I wasn\'t expecting it but I was happy about it." – "I hadn\'t been to the doctor yet — I was going to book this week."',
      },
    ],
    pastMedicalHistory: [
      { label: 'Previous right-sided pelvic inflammatory disease (PID) 2 years ago — treated with antibiotics', quote: '"I had a pelvic infection 2 years ago — PID they called it. I was given antibiotics."' },
      { label: 'No previous pregnancies; no previous ectopic; no surgical history', quote: '"No. This is my first pregnancy." – "I\'ve never had surgery."' },
    ],
    drugHistory: [
      { label: 'No regular medications; previously on COCP but stopped 3 months ago', quote: '"I came off the pill about 3 months ago." – "Nothing else."' },
      { label: 'No known drug allergies', quote: '"No allergies."' },
    ],
    familyHistory: [],
    socialHistory: [
      { label: 'Non-smoker; occasional alcohol; lives with partner Tom', quote: '"I don\'t smoke. I\'ve not been drinking since the positive test." – "My partner Tom is on his way."' },
    ],
    importantNegatives: [
      'No diarrhoea or vomiting prior to pain onset — not gastroenteritis ("No — the pain just came suddenly.")',
      'No urinary symptoms — not ureteric colic ("No burning or frequency.")',
      'No fever or discharge — not primary PID presentation ("I haven\'t had a temperature.")',
      'No history of using an IUCD ("No — I came off the pill.")',
    ],
    ice: {
      ideas: '"Could it be the pregnancy? Is the baby okay?"',
      concerns: '"I\'m terrified. The pain is unbearable and I can feel myself going... faint."',
      expectations: '"Please find out what\'s happening and make the pain stop."',
    },
    onlyIfDirectlyAsked: [
      'Previous PID — "I had a pelvic infection 2 years ago. They said my tubes might have been affected."',
      'Blood group — "I don\'t know my blood group." [Rhesus status unknown — anti-D required if Rh negative]',
      'Whether pregnancy was wanted — "Yes — we were happy about it."',
    ],
    behaviourNotes: [
      'Pale, cold, and clearly shocked throughout — in significant pain, clutching right side',
      'Becoming increasingly drowsy if management is delayed — "I feel really dizzy. Everything\'s going grey."',
      'Distressed when told the pregnancy may not be viable — student should acknowledge this sensitively while managing the emergency',
      'If the student correctly identifies the shoulder tip pain as Kehr\'s sign, examiner may prompt: "What does this suggest?"',
      'Do NOT allow VE — examiner states this is contraindicated until USS confirms intrauterine or ectopic location',
    ],
  },
  markScheme: [
    {
      domain: 'Immediate priority and recognition',
      items: [
        { description: 'Recognises haemorrhagic shock and calls for immediate senior help (senior ED doctor, obstetric registrar, surgical team)', marks: 1 },
        { description: 'Identifies high suspicion for ectopic pregnancy: positive pregnancy test + haemorrhagic shock + peritoneal signs', marks: 2 },
      ],
    },
    {
      domain: 'Airway (A)',
      items: [
        { description: 'Assesses airway — patent; applies high-flow O2 via non-rebreathe mask', marks: 1 },
      ],
    },
    {
      domain: 'Breathing (B)',
      items: [
        { description: 'Assesses RR and SpO2; auscultates chest — identifies tachypnoea from pain and shock; no respiratory cause', marks: 1 },
      ],
    },
    {
      domain: 'Circulation (C)',
      items: [
        { description: 'Identifies haemorrhagic shock: HR 128, BP 82/52, CRT 4s, cold peripheries', marks: 1 },
        { description: 'Establishes 2 large-bore IV cannulae and sends: FBC, U&Es, clotting, group and save/cross-match, serum βhCG, LFTs', marks: 2 },
        { description: 'Activates major haemorrhage protocol', marks: 1 },
        { description: 'Initiates IV crystalloid resuscitation; positions patient supine', marks: 1 },
      ],
    },
    {
      domain: 'Disability and Exposure (D+E)',
      items: [
        { description: 'Assesses GCS/AVPU and BM; identifies right iliac fossa peritonism and guarding on abdominal examination', marks: 1 },
        { description: 'Identifies right shoulder tip pain (Kehr\'s sign) as evidence of haemoperitoneum irritating the diaphragm', marks: 1 },
        { description: 'Explicitly states: NO vaginal examination until transvaginal USS confirms pregnancy location', marks: 1 },
      ],
    },
    {
      domain: 'Further management',
      items: [
        { description: 'Requests urgent bedside transvaginal USS to confirm ectopic pregnancy and assess free fluid', marks: 1 },
        { description: 'Catheterises patient and commences strict fluid balance monitoring', marks: 1 },
        { description: 'Provides adequate analgesia (IV morphine with anti-emetic)', marks: 1 },
        { description: 'Identifies previous PID as a risk factor; checks rhesus status and prescribes anti-D if Rh negative', marks: 1 },
        { description: 'Consents patient for emergency laparoscopy/laparotomy — communicates sensitively about pregnancy loss', marks: 1 },
      ],
    },
    {
      domain: 'Key communication skills',
      items: [
        { description: 'Acknowledges Chloe\'s distress about the pregnancy sensitively while managing the emergency', marks: 1 },
        { description: 'Communicates clearly with the resuscitation team; delegates tasks explicitly', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Chloe is a 24-year-old woman, 7 weeks pregnant (positive home test 2 weeks ago), presenting with sudden severe right-sided lower abdominal pain and haemorrhagic shock: HR 128, BP 82/52, SpO2 96%, pale and cold',
    'A-E: airway patent; breathing tachypnoeic from pain and shock; circulation — haemorrhagic shock requiring major haemorrhage protocol activation, 2 large-bore cannulae, IV crystalloid, group and crossmatch 4 units',
    'The diagnosis is ruptured right tubal ectopic pregnancy: haemorrhagic shock in a woman of reproductive age with a positive pregnancy test + peritoneal guarding + Kehr\'s sign (right shoulder tip pain = haemoperitoneum)',
    'Key risk factor: previous right-sided PID causing tubal scarring and impaired embryo transport',
    'Critical safety point: no vaginal examination until transvaginal USS confirms ectopic location; serum βhCG sent to confirm viability; Rhesus status checked — anti-D 250 IU IM if Rh negative',
    'Urgent transvaginal USS shows empty uterus with adnexal mass and free fluid in the pouch of Douglas — confirming ruptured ectopic',
    'Definitive management: emergency laparoscopic salpingectomy (right tube); consent sensitively given that the pregnancy cannot survive; post-operative counselling and follow-up βhCG monitoring',
  ],
  vivaQuestions: [
    {
      question: 'What are the risk factors for ectopic pregnancy and why do they increase risk?',
      keyPoints: [
        'Previous PID (most common UK risk factor): tubal scarring and ciliary damage impairs embryo transport to the uterus',
        'Previous ectopic pregnancy: recurrence risk approximately 10–15% in the same tube; 10% in the contralateral tube',
        'Previous tubal surgery (salpingotomy, sterilisation reversal, or failed sterilisation)',
        'Intrauterine contraceptive device: IUCD prevents intrauterine implantation; if it fails, ectopic is more likely than intrauterine pregnancy',
        'Assisted conception (IVF): increased risk possibly due to tubal pathology or embryo transfer technique',
        'Smoking: nicotine impairs tubal ciliary motility and smooth muscle contractility',
      ],
      source: 'RCOG Green-top Guideline No. 21 (Diagnosis and Management of Ectopic Pregnancy, 2016)',
    },
    {
      question: 'What is Kehr\'s sign and what does it indicate?',
      keyPoints: [
        'Kehr\'s sign: referred pain to the ipsilateral shoulder tip — classically occurs in the left shoulder when the patient is lying supine',
        'Mechanism: free blood or fluid in the peritoneal cavity irritates the undersurface of the diaphragm; the phrenic nerve (C3, C4, C5) refers this pain to the shoulder dermatomal distribution',
        'Positive Kehr\'s sign is a strong indicator of haemoperitoneum (ruptured ectopic, ruptured spleen, other intraperitoneal haemorrhage)',
        'Accentuated by the Trendelenburg position (blood pools under the diaphragm)',
        'Clinical significance: an ectopic pregnancy with Kehr\'s sign usually indicates significant haemoperitoneum and requires urgent surgical intervention',
      ],
      source: 'RCOG Green-top Guideline No. 21 (2016); OHCM 10th ed., Ch. 6',
    },
    {
      question: 'How do you manage a ruptured ectopic pregnancy and what are the surgical options?',
      keyPoints: [
        'Immediate: A-E resuscitation, major haemorrhage protocol, 2 large-bore IV cannulae, crossmatch; urgent laparoscopy/laparotomy',
        'Salpingectomy (removal of the affected tube): preferred in a ruptured ectopic with haemodynamic instability — definitive, lower recurrence risk',
        'Salpingotomy (linear incision to remove embryo, tube preserved): considered only in haemodynamically stable patient with contralateral tubal damage and desire for future fertility — risk of persistent trophoblast (~8%)',
        'Anti-D 250 IU IM for all Rh-negative women with ectopic pregnancy to prevent sensitisation',
        'Post-operative: serial serum βhCG until undetectable (confirms no persistent trophoblast); counselling about future pregnancy risk and early USS in subsequent pregnancies from 6 weeks',
      ],
      source: 'RCOG Green-top Guideline No. 21 (2016)',
    },
  ],
};

export const EMERGENCY_MOCK_EXAMS: MockExamStation[] = [tensionPneumothoraxMockExam, pvHaemorrhageMockExam, anaphylaxisMockExam, ectopicRuptureMockExam];
