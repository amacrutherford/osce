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

export const EMERGENCY_MOCK_EXAMS: MockExamStation[] = [tensionPneumothoraxMockExam];
