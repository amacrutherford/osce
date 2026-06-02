import type { MockExamStation } from './mockExamTypes';

const ovarianTumourExplanationMockExam: MockExamStation = {
  id: 'ovarian_tumour_explanation',
  title: 'Communication — Explaining Ovarian Cancer Investigation Results',
  diagnosis: 'Suspected ovarian malignancy (complex ovarian mass, elevated CA-125)',
  specialtyId: 'obstetrics-gynaecology',
  candidateBrief: {
    setting: 'You are an FY1 in a gynaecology outpatient clinic.',
    scenario:
      'Mrs Helen Davies, 58, attended her GP three weeks ago with a 3-month history of progressive bloating and lower abdominal discomfort. She was referred urgently and has had a pelvic ultrasound and a CA-125 blood test. She has come today to receive her results. Her ultrasound report states: "Right ovary 8 cm complex cystic-solid mass with internal septations. Left ovary normal. No ascites." Her CA-125 is 487 U/mL (normal <35 U/mL).',
    tasks: [
      'Explain the results of Mrs Davies\'s investigations to her',
      'Discuss the likely diagnosis and the next steps in her management',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'Helen Davies',
    age: 58,
    occupation: 'Retired nurse',
    openingLine:
      '"Hello doctor. I\'ve been counting the days since the scan. I knew something was wrong — I could feel it. Please just tell me what it shows."',
    backgroundInfo:
      'Helen is a 58-year-old retired nurse — she has medical knowledge that is helpful but also makes her more frightened. She has been experiencing progressive bloating and a dull ache in her lower abdomen for 3 months, with increasing urinary frequency. She is postmenopausal (since age 52). She is aware that her symptoms could indicate something serious, and she has prepared herself for difficult news. Her husband is in the waiting room; she will ask if he can come in. She has no children (nulliparous). She has a history of BRCA1 gene testing which she declined 10 years ago after her sister was diagnosed with breast cancer. She takes atorvastatin and amlodipine. No known allergies. She becomes upset on hearing the news but is dignified and quickly tries to be practical. She has many questions about prognosis, treatment, and what happens next.',
    historyToReveal: [
      {
        topic: 'Reaction to the news',
        response:
          '[After being told the scan shows a concerning mass on the right ovary]: "I knew it. I think I\'ve known for weeks." [eyes fill; composes quickly] "Okay. Tell me everything."',
      },
      {
        topic: 'Question — is it definitely cancer?',
        response:
          '"So the blood test is very abnormal — is it definitely cancer?" – "As a nurse I know CA-125 isn\'t perfect, but that number looks very worrying."',
      },
      {
        topic: 'Question — what happens next?',
        response:
          '"What do I need to have done now? Is it a biopsy? An operation?" – "How quickly will this happen?"',
      },
      {
        topic: 'Question — is it curable?',
        response:
          '"What\'s the prognosis if it is cancer? I need to know what I\'m dealing with." – "I\'ve nursed patients with ovarian cancer. I know it can be caught late."',
      },
      {
        topic: 'Question — can her husband come in?',
        response:
          '"Can my husband come in? I don\'t want to be alone when you tell me the details." – "He\'s in the waiting room."',
      },
      {
        topic: 'Question — risk factors and BRCA',
        response:
          '"I was offered BRCA testing years ago when my sister had breast cancer — I didn\'t go through with it. Could that have made a difference?" – "Is that what\'s caused this?"',
      },
      {
        topic: 'Symptoms history',
        response:
          '"The bloating has been getting worse. And I keep needing to wee more often — especially at night." – "I\'ve been more tired than usual too. I think I\'ve lost a few kilos without trying."',
      },
    ],
    importantNegatives: [
      'No prior diagnosis of ovarian or other gynaecological malignancy ("No previous gynaecological problems.")',
      'No current HRT use ("I tried it for a year but stopped — that\'s 5 years ago.")',
      'No bowel changes — no blood per rectum, no change in bowel habit ("Normal.")',
      'No family history of ovarian cancer — sister had breast cancer only',
    ],
    ice: {
      ideas:
        '"I think it\'s cancer — the symptoms, the scan, the blood test. I know enough to know this doesn\'t look good."',
      concerns:
        '"I\'m frightened about whether it\'s too late. Whether I\'ve had it for years without noticing." – "I\'m worried about my husband — he depends on me."',
      expectations:
        '"I want to know exactly what the plan is, how quickly things move, and what my chances are. I can handle honesty — I\'m a nurse."',
    },
    onlyIfDirectlyAsked: [
      'Whether she has told her children — she has no children (nulliparous)',
      'Hormone replacement therapy details — took HRT for 1 year after menopause; stopped 5 years ago',
      'Whether she has noticed her clothes fitting differently — yes, her abdomen feels larger; has gone up one dress size',
    ],
    behaviourNotes: [
      'Opens the consultation ready for bad news — she has prepared herself; she does not need excessive softening',
      'Becomes tearful briefly on hearing the result, then composes herself and becomes practical and direct',
      'Appreciates clear, honest, direct communication without unnecessary jargon — she is a retired nurse',
      'Ask "Can my husband come in?" — the student should offer to bring him in',
      'Asks about prognosis — student should be honest that prognosis depends on stage, which is not yet known; explain that staging CT and MDT will inform this',
      'Asks about BRCA — student should explain that BRCA1/2 increases risk of ovarian and breast cancer; this will be part of the investigation/family discussion going forward',
      'Does NOT need to be given false hope but does respond well to the message that treatment is available and that the team will act quickly',
    ],
  },
  markScheme: [
    {
      domain: 'Opening the consultation',
      items: [
        { description: 'Introduces themselves; confirms identity and that Mrs Davies consents to receiving results', marks: 1 },
        { description: 'Checks who the patient has brought for support and offers to involve them', marks: 1 },
        { description: 'Establishes what the patient already knows or suspects (Perception — part of SPIKES)', marks: 1 },
      ],
    },
    {
      domain: 'Delivering the news (SPIKES framework)',
      items: [
        {
          description: 'Gives a warning shot before delivering the news ("I\'m afraid the results show something concerning")',
          marks: 1,
        },
        {
          description: 'Explains the ultrasound findings clearly: a complex cystic-solid mass on the right ovary with septations',
          marks: 1,
        },
        {
          description: 'Explains the CA-125 result: significantly elevated (487 vs normal <35); explains that this protein can be raised in ovarian cancer and other conditions',
          marks: 2,
        },
        {
          description: 'States honestly that together these findings are concerning for a possible ovarian cancer — while acknowledging this is not yet confirmed',
          marks: 2,
        },
      ],
    },
    {
      domain: 'Responding to the patient\'s emotion',
      items: [
        { description: 'Pauses after delivering the news; allows the patient time to respond', marks: 1 },
        { description: 'Acknowledges and validates the patient\'s distress with empathy — does not immediately move to information-giving', marks: 1 },
      ],
    },
    {
      domain: 'Explaining next steps',
      items: [
        {
          description: 'Explains that a CT scan of chest/abdomen/pelvis is needed for staging',
          marks: 1,
        },
        {
          description: 'Explains that the case will be discussed at the gynaecological oncology MDT meeting',
          marks: 1,
        },
        {
          description: 'Explains that definitive diagnosis will come from surgical staging (and histology) rather than needle biopsy for suspected ovarian cancer',
          marks: 1,
        },
        {
          description: 'Gives realistic timeline — 2-week wait pathway; aims to proceed quickly; specialist appointment within days',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Addressing ICE and patient questions',
      items: [
        { description: 'Addresses the prognosis question honestly — explains prognosis depends on stage which is not yet known', marks: 1 },
        { description: 'Addresses the BRCA question — explains what BRCA means and that genetic counselling will be available', marks: 1 },
      ],
    },
    {
      domain: 'Closing the consultation',
      items: [
        { description: 'Offers written information; provides contact details for the gynae oncology CNS (clinical nurse specialist)', marks: 1 },
        { description: 'Summarises the key points and next steps clearly', marks: 1 },
        { description: 'Checks if Mrs Davies has any final questions; thanks her', marks: 1 },
      ],
    },
    {
      domain: 'Key communication skills',
      items: [
        { description: 'Active listening — patient-led pace; does not rush through the information', marks: 1 },
        { description: 'Uses clear, accessible language; avoids jargon despite patient\'s nursing background', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Mrs Davies is a 58-year-old nulliparous postmenopausal retired nurse presenting with a 3-month history of progressive bloating, lower abdominal discomfort, urinary frequency, and unintentional weight loss',
    'Investigations show a right ovarian 8 cm complex cystic-solid mass with internal septations on pelvic ultrasound, with a markedly elevated CA-125 at 487 U/mL (normal <35 U/mL) — these findings are highly suspicious for an ovarian malignancy',
    'CA-125 alone is not diagnostic (elevated in endometriosis, fibroids, and other conditions) but in combination with the USS features, the Risk of Malignancy Index (RMI) would be very high, warranting urgent gynaecological oncology referral',
    'The news was delivered honestly and compassionately using a structured approach; patient\'s distress was acknowledged; her husband was offered the opportunity to join the consultation',
    'Next steps: urgent staging CT chest/abdomen/pelvis; gynaecological oncology MDT discussion; specialist review within days under the 2-week wait pathway',
    'Definitive diagnosis: surgical staging with bilateral salpingo-oophorectomy and histology — needle biopsy is not indicated for suspected ovarian malignancy as it risks tumour spill',
    'Risk factors discussed: nulliparity, BRCA1/2 mutation (sister with breast cancer — genetic counselling to be offered); treatment will be guided by stage: typically debulking surgery + platinum-based chemotherapy (carboplatin + paclitaxel)',
  ],
  vivaQuestions: [
    {
      question: 'What is the Risk of Malignancy Index (RMI) and how is it used in ovarian cancer assessment?',
      keyPoints: [
        'RMI = USS score × menopausal status × CA-125 level',
        'USS score (U): 1 point each for multilocular cyst, solid areas, metastases, ascites, bilateral lesions; U=0 (score 1), U=1 (score 1), U=2–5 (score 3)',
        'Menopausal status (M): premenopausal = 1, postmenopausal = 3',
        'CA-125: actual value in U/mL',
        'RMI >200: high risk — refer urgently to gynaecological oncology MDT; sensitivity ~70–80%, specificity ~90%',
        'This patient: U=3 (complex mass with septations, solid component), M=3 (postmenopausal), CA-125=487 → RMI = 3 × 3 × 487 = 4383 — very high risk',
      ],
      source: 'NICE NG12 (Ovarian cancer, 2011, updated 2023); Jacobs I et al., BJOG 1990 (original RMI paper)',
    },
    {
      question: 'What is the FIGO staging for ovarian cancer, and how does stage affect prognosis?',
      keyPoints: [
        'Stage I: confined to ovaries; Ia (one ovary, capsule intact), Ib (both ovaries), Ic (ruptured or ascites/washings positive)',
        'Stage II: pelvic extension',
        'Stage III: peritoneal implants beyond pelvis or lymph node involvement (most common at diagnosis — ~60–70% of cases)',
        'Stage IV: distant metastases (liver parenchyma, pleural effusion with malignant cells)',
        'Five-year survival: stage I ~90%; stage II ~70%; stage III ~25–35%; stage IV ~10–15% — most cases diagnosed at stage III or IV, explaining overall poor prognosis',
      ],
      source: 'FIGO Staging of Ovarian Cancer (2014); NICE NG12; Cancer Research UK statistics',
    },
    {
      question: 'What is the role of BRCA1/2 mutations in ovarian cancer, and what genetic counselling should be offered?',
      keyPoints: [
        'BRCA1 mutation: lifetime risk of ovarian cancer ~40–60% (vs 1.5% general population); also confers ~55–65% lifetime risk of breast cancer',
        'BRCA2 mutation: lifetime risk of ovarian cancer ~15–25%; also confers ~45% lifetime risk of breast cancer',
        'Hereditary breast-ovarian cancer (HBOC) syndrome: autosomal dominant; testing indicated if personal or family history of ovarian cancer, or breast cancer under 50',
        'Prophylactic risk-reducing salpingo-oophorectomy (RRSO): reduces ovarian cancer risk by ~80–95% in BRCA carriers — recommended after family completion, typically age 35–40 (BRCA1), 40–45 (BRCA2)',
        'Genetic counselling: discuss testing with patient and family; implications for children; insurance and employment considerations; refer to clinical genetics',
      ],
      source: 'NICE DG27 (BRCA testing, 2019); NICE NG12; Antoniou AC et al., NEJM 2003',
    },
    {
      question: 'What is the first-line management of advanced (stage III/IV) epithelial ovarian cancer?',
      keyPoints: [
        'Staging laparotomy + debulking surgery (cytoreductive surgery): bilateral salpingo-oophorectomy, hysterectomy, omentectomy, removal of all visible tumour; "optimal debulking" = residual disease <1 cm',
        'Adjuvant chemotherapy: carboplatin + paclitaxel 6 cycles (standard first-line); bevacizumab added in high-risk stage III/IV',
        'PARP inhibitors (olaparib, niraparib): maintenance therapy after platinum-sensitive relapse or as first-line maintenance in BRCA-mutated disease — approved by NICE',
        'Neoadjuvant chemotherapy: 3 cycles carboplatin/paclitaxel before interval debulking surgery (IDS) if patient unfit for primary surgery or disease too extensive',
        'Response assessment: CA-125 monitoring; CT after 3 cycles; platinum-sensitive relapse (>6 months) vs platinum-resistant (<6 months) determines second-line options',
      ],
      source: 'NICE NG12 (2011, updated 2023); NICE TA389 (olaparib); ESMO Ovarian Cancer Guidelines 2020',
    },
  ],
};

export const GYNAE_MOCK_EXAMS: MockExamStation[] = [ovarianTumourExplanationMockExam];
