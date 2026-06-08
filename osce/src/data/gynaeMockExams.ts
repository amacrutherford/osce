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
    historyOfPresentingComplaint: [
      {
        label: 'Reaction to the news — expects it; composes quickly; wants full information',
        quote: '[After being told the scan shows a concerning mass on the right ovary]: "I knew it. I think I\'ve known for weeks." [eyes fill; composes quickly] "Okay. Tell me everything."',
      },
      {
        label: 'Question: is it definitely cancer?',
        quote: '"So the blood test is very abnormal — is it definitely cancer?" – "As a nurse I know CA-125 isn\'t perfect, but that number looks very worrying."',
      },
      {
        label: 'Question: what happens next?',
        quote: '"What do I need to have done now? Is it a biopsy? An operation?" – "How quickly will this happen?"',
      },
      {
        label: 'Question: prognosis',
        quote: '"What\'s the prognosis if it is cancer? I need to know what I\'m dealing with." – "I\'ve nursed patients with ovarian cancer. I know it can be caught late."',
      },
      {
        label: 'Request: husband to join the consultation (in waiting room)',
        quote: '"Can my husband come in? I don\'t want to be alone when you tell me the details." – "He\'s in the waiting room."',
      },
      {
        label: 'Question: BRCA testing — sister had breast cancer; patient declined BRCA testing 10 years ago',
        quote: '"I was offered BRCA testing years ago when my sister had breast cancer — I didn\'t go through with it. Could that have made a difference?" – "Is that what\'s caused this?"',
      },
      {
        label: 'Symptoms history — progressive bloating; urinary frequency (especially at night); fatigue; weight loss',
        quote: '"The bloating has been getting worse. And I keep needing to wee more often — especially at night." – "I\'ve been more tired than usual too. I think I\'ve lost a few kilos without trying."',
      },
    ],
    pastMedicalHistory: [
      { label: 'Postmenopausal since age 52', quote: '"I\'ve been postmenopausal since 52."' },
      { label: 'No prior gynaecological malignancy', quote: '"No previous gynaecological problems."' },
    ],
    drugHistory: [
      { label: 'Atorvastatin and amlodipine (background medications)', quote: '[From background history]' },
      { label: 'HRT — tried for 1 year post-menopause; stopped 5 years ago', quote: '"I tried it for a year but stopped — that\'s 5 years ago."' },
      { label: 'No known allergies', quote: '[Not specifically mentioned]' },
    ],
    familyHistory: [
      { label: 'Sister — breast cancer (BRCA testing offered to patient 10 years ago; declined)', quote: '"I was offered BRCA testing years ago when my sister had breast cancer."' },
      { label: 'No known ovarian cancer in the family', quote: '"No ovarian cancer that I know of."' },
    ],
    socialHistory: [
      { label: 'Retired nurse (58); lives with husband (in waiting room)', quote: '"He\'s in the waiting room."' },
      { label: 'Nulliparous (no children)', quote: '[From background — she has no children]' },
      { label: 'Abdomen feels larger; gone up one dress size (only if directly asked)', quote: '"Yes, I have noticed — I\'ve gone up a dress size." [only if directly asked]' },
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
      'Asks "Can my husband come in?" — the student should offer to bring him in',
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

const domesticViolenceMockExam: MockExamStation = {
  id: 'obs_domestic_violence',
  title: 'Obstetric Consultation — Antenatal Low Mood and Domestic Violence Safeguarding',
  diagnosis: 'Antenatal depression with domestic violence disclosure — safeguarding concern',
  specialtyId: 'obstetrics-gynaecology',
  candidateBrief: {
    setting: 'You are an FY1 in the antenatal clinic.',
    scenario:
      'Jade Cooper, 24, is attending for her routine 20-week antenatal appointment (G1P0). Her midwife has noted on the referral that Jade mentioned feeling "a bit low" at her last appointment.',
    tasks: [
      'Take a focused history of her mood and home situation',
      'Explore any safeguarding concerns and explain the next steps in her care',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'Jade Cooper',
    age: 24,
    occupation: 'Retail worker',
    openingLine:
      '"I\'m fine, really — I just said I was feeling a bit low to the midwife. I don\'t want to make a fuss. I\'m 20 weeks now, everything with the baby is fine." [looks down; avoids eye contact]',
    historyOfPresentingComplaint: [
      {
        label: 'Low mood — onset 6 weeks ago, gradual, worsening; tearful most days',
        quote: '"It started about six weeks ago I suppose. I just feel really flat. I cry most days — sometimes I don\'t even know why." – "I didn\'t think it was serious enough to mention, but it\'s been getting worse."',
      },
      {
        label: 'Sleep disturbance — difficulty getting off to sleep; waking 2–3 times per night',
        quote: '"I struggle to get to sleep. My mind just races. And then I wake up a few times in the night and can\'t get back off." – "I\'m exhausted but I still can\'t sleep."',
      },
      {
        label: 'Appetite — poor; not eating properly; skipping meals',
        quote: '"I\'m not really hungry. I know I should eat for the baby but I just don\'t have the appetite." – "I maybe have one proper meal a day."',
      },
      {
        label: 'Low energy and concentration — struggling at work; making mistakes',
        quote: '"I\'m tired all the time. My concentration is terrible — I keep making silly mistakes at work and my manager has noticed." – "I just feel like I\'m going through the motions."',
      },
      {
        label: 'Worthlessness — feels like a failure as a mother before the baby is even born',
        quote: '"I know this sounds awful, but I feel like I\'m already failing as a mum and the baby isn\'t even here yet." – "I just feel really worthless."',
      },
      {
        label: 'No suicidal ideation — no thoughts of harming herself or the baby',
        quote: '"No — absolutely not. I would never hurt myself or the baby. That\'s the last thing I\'d want." [said firmly]',
      },
      {
        label: 'Antenatal history — 20 weeks, first pregnancy; booking scan and bloods normal',
        quote: '"The 12-week scan was fine — the midwife said everything looked normal. The booking bloods were all fine too." – "I\'m not sure what to expect now, at 20 weeks."',
      },
      {
        label: 'Home situation — initially vague; discloses DV only if student asks sensitively about feeling safe at home',
        quote: '[If asked "how are things at home?"]: "Fine... I mean, things are a bit tense." [looks away] [If student asks about feeling safe, or partner\'s behaviour]: "He\'s just been under a lot of stress. He doesn\'t mean it." [pause] "He... he grabbed my arm really hard last month when we had an argument. And the week before that he shouted in my face." – "I\'ve never told anyone. I don\'t want to get him in trouble. I just want things to go back to normal."',
      },
      {
        label: 'Dean\'s controlling behaviour — monitors her phone, restricted contact with her mother',
        quote: '"He checks my phone. He doesn\'t like me seeing my mum — he says she\'s a bad influence." – "I haven\'t seen her in about three months now." [only if student probes home situation further]',
      },
      {
        label: 'Jade\'s wishes — wants to protect herself and the baby but does not want Dean arrested',
        quote: '"I don\'t want the police involved. He\'s not a bad person — he\'s just angry a lot at the moment." – "I just want to know what my options are." [frightened but thoughtful]',
      },
    ],
    pastMedicalHistory: [
      { label: 'No significant past medical history', quote: '"Nothing. I\'ve always been healthy."' },
      { label: 'No previous mental health problems', quote: '"I\'ve never had depression or anything like that before."' },
    ],
    drugHistory: [
      { label: 'Folic acid 400 mcg daily (stopped at 12 weeks)', quote: '"I took the folic acid early on. The midwife said I could stop it at 12 weeks."' },
      { label: 'No other medications; no allergies', quote: '"Nothing else. No allergies."' },
    ],
    familyHistory: [
      { label: 'No family history of mental illness', quote: '"Not that I know of."' },
      { label: 'Mother — estranged (Dean won\'t allow contact)', quote: '"My mum is fine as far as I know. We\'re just... not in contact at the moment."' },
    ],
    socialHistory: [
      { label: 'Lives with partner Dean (30, works in logistics); no other support; socially isolated', quote: '"I live with my boyfriend Dean. He works in logistics." – "I don\'t really see anyone else much at the moment."' },
      { label: 'Estranged from mother on Dean\'s insistence; no close friends currently', quote: '"My mum and I used to be close." [said quietly] "I miss her."' },
      { label: 'Non-smoker; no alcohol during pregnancy; no illicit drugs', quote: '"I stopped drinking as soon as I found out I was pregnant. I don\'t smoke. Nothing like that."' },
    ],
    importantNegatives: [
      'No suicidal ideation ("Absolutely not — I would never hurt myself or my baby.")',
      'No previous mental health history ("I\'ve never had depression or been referred to anyone like that before.")',
      'No thoughts of harming the baby ("No. Never.")',
      'No physical injuries currently visible ("He grabbed my arm — it bruised but it\'s healed now.")',
      'No previous episodes of domestic violence in the relationship ("It started about six weeks ago. Before that he was fine.")',
    ],
    ice: {
      ideas: '"I think it\'s probably just the pregnancy making me feel like this. And things at home being tense. I didn\'t think it was bad enough to come and talk about."',
      concerns: '"I\'m worried about what happens if I tell someone about Dean. I don\'t want him to be arrested or for social services to take the baby."',
      expectations: '"I suppose I\'d like to know what help is available without everything escalating. I just want to feel safe."',
    },
    onlyIfDirectlyAsked: [
      'Previous incidents of violence ("The arm grabbing was the second time — the first time was shouting in my face. Before that it was just arguments.")',
      'Dean\'s knowledge of this appointment ("He doesn\'t know I mentioned the low mood. He thinks this is just a routine check-up.")',
      'Contact with mother ("She doesn\'t know about Dean. I haven\'t been able to tell her.")',
    ],
    behaviourNotes: [
      'Jade opens the consultation minimising her symptoms — she does not want to make a fuss and initially deflects with reassurances about the baby',
      'Builds trust slowly; the DV disclosure only comes if the student asks directly and sensitively about the home situation and safety — a blunt "is your partner hurting you?" at the start will shut her down',
      'Becomes emotional when disclosing Dean\'s behaviour, particularly the arm grabbing — brief tearfulness; recovers when the student responds with calm empathy rather than urgency',
      'Responds very poorly to any judgement of Dean or dramatic language — phrases like "that\'s abuse, we must call the police" cause her to retract the disclosure',
      'Responds well to the student validating her feelings and explaining confidentiality limits calmly before they arise',
      'Asks "Will social services take my baby?" — the student should address this honestly: a referral does not automatically mean removal; the focus is on safety planning',
      'Asks "Do you have to tell anyone?" — the student must explain the limits of confidentiality in safeguarding contexts without making promises they cannot keep',
    ],
  },
  markScheme: [
    {
      domain: 'Opening the consultation',
      items: [
        { description: 'Washes hands and introduces themselves with name and role', marks: 1 },
        { description: 'Confirms patient\'s name and DOB; ensures privacy; explains purpose of the appointment', marks: 1 },
        { description: 'Uses an open question to invite Jade to describe how she has been feeling', marks: 1 },
      ],
    },
    {
      domain: 'History of antenatal depression',
      items: [
        { description: 'Asks about onset, duration, and progression of low mood', marks: 1 },
        { description: 'Screens for core depressive symptoms: low mood, anhedonia, fatigue, sleep disturbance, appetite change, poor concentration, worthlessness', marks: 2 },
        { description: 'Directly asks about suicidal ideation and thoughts of harming the baby', marks: 2 },
      ],
    },
    {
      domain: 'Domestic violence enquiry',
      items: [
        { description: 'Asks sensitively about the home situation and how things are at home', marks: 1 },
        { description: 'Asks directly whether Jade feels safe at home or whether her partner has ever hurt, frightened, or controlled her', marks: 2 },
        { description: 'Responds to the disclosure with empathy — does not project alarm or urgency that risks Jade retracting', marks: 1 },
        { description: 'Explores the nature and frequency of the incidents without leading questions', marks: 1 },
      ],
    },
    {
      domain: 'Safeguarding and confidentiality',
      items: [
        { description: 'Explains the limits of confidentiality honestly — states that safeguarding the unborn child may require sharing information', marks: 2 },
        { description: 'Explains that the aim is to keep Jade and her baby safe, not to punish Dean or remove the baby', marks: 1 },
        { description: 'Mentions referral to specialist domestic violence services (e.g. IDVA) and explains what this means', marks: 1 },
      ],
    },
    {
      domain: 'ICE',
      items: [
        { description: 'Explores Jade\'s ideas, concerns, and expectations — specifically addresses fears about social services and the baby', marks: 1 },
      ],
    },
    {
      domain: 'Past medical, drug, and social history',
      items: [
        { description: 'Asks about past medical and mental health history', marks: 1 },
        { description: 'Asks about social support, living situation, and relationship with her mother', marks: 1 },
        { description: 'Takes a drug history including any current antenatal medications', marks: 1 },
      ],
    },
    {
      domain: 'Closing and next steps',
      items: [
        { description: 'Summarises the history back to Jade and checks for accuracy', marks: 1 },
        { description: 'Explains the next steps: referral for antenatal depression support; safety planning; documentation; multi-agency referral if threshold met', marks: 1 },
        { description: 'Asks if Jade has any final questions and thanks her', marks: 1 },
      ],
    },
    {
      domain: 'Key communication skills',
      items: [
        { description: 'Active listening — allows Jade to disclose at her own pace; does not interrupt or escalate prematurely', marks: 1 },
        { description: 'Summarising — reflects back key concerns including both the mood symptoms and the safety concerns', marks: 1 },
        { description: 'Signposting — clearly signals transitions in the consultation, particularly before asking about the home situation', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Jade Cooper is a 24-year-old retail worker, G1P0 at 20 weeks gestation, presenting with a 6-week history of progressive low mood, insomnia, poor appetite, fatigue, poor concentration, and feelings of worthlessness — consistent with antenatal depression',
    'PHQ-9 equivalent screening is positive across multiple domains; importantly, she denies suicidal ideation and any thoughts of harming the baby',
    'During sensitively conducted enquiry about the home situation, Jade disclosed two incidents of physical violence by her partner Dean in the past month — arm grabbing and aggressive shouting — and describes controlling behaviour including phone monitoring and restricting contact with her mother',
    'She is frightened of escalation and does not want Dean arrested; she has told nobody previously and is socially isolated with no support network',
    'This constitutes a safeguarding concern: domestic violence in pregnancy is associated with adverse fetal and maternal outcomes; antenatal care provides a key opportunity for routine enquiry per NICE NG194',
    'Management: document the disclosure carefully; offer immediate safety planning; refer to IDVA (Independent Domestic Violence Advocate); consider MARAC referral if high-risk criteria met; refer to perinatal mental health for antenatal depression assessment; inform the safeguarding midwife',
    'Confidentiality limits must be explained honestly — if there is a risk to the unborn child, information sharing may be required even without Jade\'s consent',
  ],
  vivaQuestions: [
    {
      question: 'What is the prevalence of domestic violence in pregnancy, and why is pregnancy a particularly high-risk period?',
      keyPoints: [
        'Domestic violence affects approximately 30% of women during their lifetime; prevalence in pregnancy is estimated at 5–9% in UK studies',
        'Pregnancy is a high-risk period: violence may begin or escalate during pregnancy due to stress, financial pressure, jealousy of the baby, and loss of control by the perpetrator',
        'Associated with miscarriage, placental abruption, preterm birth, low birthweight, and fetal injury from direct trauma',
        'NICE NG194 recommends routine enquiry about domestic violence and abuse at the first antenatal contact in a safe, private setting',
        'Barriers to disclosure include fear of losing the baby, shame, financial dependence on the perpetrator, and lack of trust in services',
        'Healthcare settings — particularly antenatal care — represent a key opportunity to identify abuse as women attend regularly',
      ],
      source: 'NICE NG194 (Domestic violence and abuse, 2023); RCOG Green-top Guideline 48A (2015)',
    },
    {
      question: 'What safeguarding actions are required when domestic violence is disclosed in pregnancy?',
      keyPoints: [
        'Immediate: ensure the patient is safe and alone before exploring further; never ask about DV in front of the suspected perpetrator',
        'Document the disclosure clearly and accurately using the patient\'s own words, including dates and nature of incidents',
        'Refer to the named safeguarding midwife and follow Trust safeguarding policy; an unborn child can be subject to a pre-birth child protection plan',
        'Safety planning: discuss where Jade can go if she feels unsafe; provide the National DV Helpline number (0808 2000 247)',
        'Refer to IDVA (Independent Domestic Violence Advocate) — a specialist DV professional who provides safety planning and support',
        'Consider MARAC referral if high-risk criteria met (DASH risk assessment score ≥14, or professional judgement of high risk)',
      ],
      source: 'NICE NG194 (2023); RCOG Green-top Guideline 48A (2015); SafeLives MARAC guidance',
    },
    {
      question: 'What is MARAC, and when should a referral be made?',
      keyPoints: [
        'MARAC (Multi-Agency Risk Assessment Conference): regular meeting of statutory and voluntary agencies (police, health, housing, social services, IDVA) to share information and coordinate safety plans for high-risk DV victims',
        'Referral criteria: DASH (Domestic Abuse, Stalking and Honour-based Violence) risk assessment score ≥14, or professional judgement override indicating high risk',
        'MARAC produces an action plan to increase victim safety; it does not require the victim\'s consent but she should be informed it is taking place',
        'Healthcare professionals including midwives can and should make direct MARAC referrals — this is a professional duty, not an option',
        'MARAC does not automatically lead to criminal proceedings or removal of children — the focus is on reducing risk to the victim',
        'Pregnancy is specifically considered a high-risk indicator on the DASH risk assessment tool',
      ],
      source: 'SafeLives MARAC guidance (2019); NICE NG194 (2023); RCOG Green-top Guideline 48A (2015)',
    },
  ],
};

const uterineCancerMockExam: MockExamStation = {
  id: 'gynae_uterine_cancer',
  title: 'Communication — Explaining Uterine Cancer USS Results',
  diagnosis: 'Suspected endometrial cancer — thickened endometrium post-menopause',
  specialtyId: 'obstetrics-gynaecology',
  candidateBrief: {
    setting: 'You are an FY1 in a gynaecology outpatient clinic.',
    scenario:
      'Joan Fletcher, 67, was referred urgently by her GP 3 weeks ago with a 2-month history of postmenopausal bleeding. She has had a pelvic ultrasound and has come today to receive the results. The USS report states: "Endometrial thickness 18 mm (normal postmenopausal <4 mm). Uterus mildly bulky. Both ovaries normal. No free fluid."',
    tasks: [
      'Explain the results of Mrs Fletcher\'s pelvic ultrasound to her',
      'Discuss the likely significance of the findings and the next steps in her management',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'Joan Fletcher',
    age: 67,
    occupation: 'Retired teacher',
    openingLine:
      '"Hello. I\'ve been anxious since the scan — I don\'t know what to expect. Please just tell me what it shows." [composed but visibly tense; hands clasped in lap]',
    historyOfPresentingComplaint: [
      {
        label: 'Reaction to the news — composed but frightened; asks clearly "is it definitely cancer?"',
        quote: '[After being told the lining is significantly thickened]: "Right." [pause; swallows] "So... is it definitely cancer? Or is there still a chance it\'s something else?"',
      },
      {
        label: 'Question: what does thickened endometrium mean?',
        quote: '"I don\'t really know what the endometrium is — can you explain what you mean by thickened, and why that\'s a concern?" – "On the letter it just said \'urgent\' and I\'ve been terrified ever since."',
      },
      {
        label: 'Question: what happens next?',
        quote: '"So what do I need to have done now?" – "Will it be a biopsy? An operation? How quickly will this happen?"',
      },
      {
        label: 'Question: treatment — has heard of hysterectomy',
        quote: '"A friend of mine had a hysterectomy for something similar. Is that what I\'m looking at?" – "What does the treatment involve if it is cancer?"',
      },
      {
        label: 'Background on PMB symptoms — 3 episodes of spotting over 2 months, now stopped',
        quote: '"It was three times over about two months. Just spotting — spots on the tissue, nothing dramatic. It seems to have stopped now." – "I thought it might just be nothing, which is why I waited a little while before going to the GP."',
      },
      {
        label: 'Question: prognosis — asks directly if this can be cured',
        quote: '"I need to ask — if it is cancer, what are my chances? I know you might not know yet, but I\'d rather know what we\'re dealing with." – "I have two grandchildren. I need to be around for them."',
      },
    ],
    pastMedicalHistory: [
      { label: 'Postmenopausal since age 53', quote: '"I went through the menopause at 53 — so it\'s been 14 years since I last had a period."' },
      { label: 'Type 2 diabetes on metformin', quote: '"I have type 2 diabetes — I\'ve been on metformin for about 8 years."' },
      { label: 'Hypertension on ramipril', quote: '"And blood pressure tablets — ramipril."' },
      { label: 'Nulliparous — no children', quote: '"I never had children, no. We tried but it just didn\'t happen."' },
    ],
    drugHistory: [
      { label: 'Metformin 500 mg twice daily', quote: '"Metformin twice a day for the diabetes."' },
      { label: 'Ramipril 5 mg once daily', quote: '"Ramipril 5 mg for the blood pressure."' },
      { label: 'HRT — oestrogen-only for 5 years post-menopause; stopped 9 years ago', quote: '"I took HRT for about 5 years after the menopause — just oestrogen. I stopped about 9 years ago." [only if asked]' },
      { label: 'No known drug allergies', quote: '"No allergies."' },
    ],
    familyHistory: [
      { label: 'No family history of endometrial or ovarian cancer', quote: '"No gynaecological cancers that I know of in my family."' },
      { label: 'Mother — breast cancer in her 70s', quote: '"My mother had breast cancer in her 70s but she was treated successfully." [only if asked]' },
    ],
    socialHistory: [
      { label: 'Retired teacher; lives alone since husband died 4 years ago', quote: '"I retired about 6 years ago. I live on my own — my husband passed away 4 years ago." [said matter-of-factly but a little sad]' },
      { label: 'BMI approximately 32 — overweight', quote: '[From background — not spontaneously mentioned]' },
      { label: 'Non-smoker; minimal alcohol (1–2 units per week)', quote: '"I\'ve never smoked. I have the odd glass of wine — not much."' },
      { label: 'Two grandchildren — source of motivation', quote: '"I have two grandchildren. They\'re the most important thing to me."' },
    ],
    importantNegatives: [
      'No current vaginal bleeding ("It seems to have stopped in the last couple of weeks.")',
      'No pelvic pain or pressure ("No — no pain at all.")',
      'No bowel or urinary symptoms ("Everything\'s normal in that regard.")',
      'No weight loss or night sweats ("I haven\'t lost weight unexpectedly — if anything I\'ve gained a bit.")',
      'No current HRT use ("I stopped the HRT about 9 years ago.")',
    ],
    ice: {
      ideas: '"I think it might be serious — the urgency of the referral worried me. I\'m trying to stay calm but I\'ve been imagining the worst."',
      concerns: '"I\'m worried it\'s too late to do anything — that it\'s spread. And I\'m worried about what treatment means for my life." – "I live alone. I don\'t know how I\'d manage recovering from an operation on my own."',
      expectations: '"I want to understand what is happening and what the plan is. I\'d like to know what I\'m facing so I can make arrangements if needed."',
    },
    onlyIfDirectlyAsked: [
      'HRT history — oestrogen-only HRT for 5 years post-menopause; stopped 9 years ago ("I took it because the hot flushes were terrible — I didn\'t know it could be a risk factor.")',
      'Whether she has anyone with her — she is alone today; her daughter is in Edinburgh and offered to come but Joan said not to bother ("I told her not to worry — I didn\'t want to alarm her prematurely.")',
      'BMI and weight — she acknowledges she is "a bit overweight" but does not know her exact BMI',
    ],
    behaviourNotes: [
      'Opens the consultation composed but visibly anxious — she is a former teacher and is articulate and organised; she has clearly been mentally preparing questions',
      'Becomes briefly tearful when the seriousness of the findings is confirmed, then recovers and becomes practical and direct',
      'Asks "Is it definitely cancer?" — student should explain the findings are concerning and require further investigation, but confirm that the ultrasound is not a diagnosis; a hysteroscopy and biopsy are needed',
      'Responds well to honest, clear language and a structured explanation — she dislikes vagueness or being managed with false reassurance',
      'Asks about prognosis — student should explain that prognosis depends on the histology and stage, which are not yet known; stage I endometrial cancer has a very good prognosis (>90% 5-year survival)',
      'Asks about living alone and recovering from surgery — the student should acknowledge this practical concern and mention the clinical nurse specialist and community support',
      'Becomes briefly emotional when mentioning her grandchildren — the student should acknowledge this sensitively',
    ],
  },
  markScheme: [
    {
      domain: 'Opening the consultation',
      items: [
        { description: 'Introduces themselves; confirms Mrs Fletcher\'s identity and her understanding of the purpose of the appointment', marks: 1 },
        { description: 'Checks who she has with her for support and acknowledges she has attended alone', marks: 1 },
        { description: 'Establishes what she already knows or suspects about the results (Perception — part of SPIKES)', marks: 1 },
      ],
    },
    {
      domain: 'Delivering the news',
      items: [
        { description: 'Gives a warning shot before stating the concern ("I\'m afraid the scan has shown something we need to investigate further")', marks: 1 },
        { description: 'Explains the USS finding clearly: the lining of the womb (endometrium) is significantly thickened at 18 mm (normal <4 mm after menopause)', marks: 2 },
        { description: 'States honestly that this finding is concerning and requires urgent further investigation to rule out womb cancer — does not diagnose cancer from USS alone', marks: 2 },
      ],
    },
    {
      domain: 'Responding to emotion',
      items: [
        { description: 'Pauses after delivering the news; allows Mrs Fletcher time to respond before proceeding', marks: 1 },
        { description: 'Acknowledges distress with empathy — validates her feelings without minimising the concern', marks: 1 },
      ],
    },
    {
      domain: 'Explaining next steps',
      items: [
        { description: 'Explains that a hysteroscopy and endometrial biopsy are the next step — allows direct visualisation of the uterine cavity and histological diagnosis', marks: 2 },
        { description: 'Explains that the case will be referred to the gynaecological oncology MDT and that she will be seen promptly under the 2-week wait pathway', marks: 1 },
        { description: 'Explains what a hysteroscopy involves — a small camera passed through the cervix into the womb, usually as a day procedure under local or general anaesthetic', marks: 1 },
      ],
    },
    {
      domain: 'Addressing patient questions',
      items: [
        { description: 'Addresses the prognosis question — explains prognosis is not yet known but that if caught at an early stage, endometrial cancer has one of the best prognoses of all gynaecological cancers', marks: 1 },
        { description: 'Addresses treatment — explains that if cancer is confirmed, surgery (hysterectomy) is the mainstay of treatment, and discusses this sensitively', marks: 1 },
        { description: 'Addresses the practical concern about living alone and recovering from surgery — mentions the specialist nurse and community support', marks: 1 },
      ],
    },
    {
      domain: 'ICE',
      items: [
        { description: 'Explores Mrs Fletcher\'s ideas, concerns, and expectations — specifically addresses fear of spread and practical concerns about living alone', marks: 1 },
      ],
    },
    {
      domain: 'Closing the consultation',
      items: [
        { description: 'Offers written information and contact details for the gynaecological oncology clinical nurse specialist', marks: 1 },
        { description: 'Summarises the key findings and next steps clearly', marks: 1 },
        { description: 'Checks for any outstanding questions and thanks Mrs Fletcher', marks: 1 },
      ],
    },
    {
      domain: 'Key communication skills',
      items: [
        { description: 'Active listening — patient-led pace; does not rush through information', marks: 1 },
        { description: 'Summarising — recaps the information clearly before closing', marks: 1 },
        { description: 'Signposting — signals each section of the consultation clearly', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Mrs Fletcher is a 67-year-old nulliparous retired teacher presenting with a 2-month history of postmenopausal bleeding (3 episodes of spotting) referred urgently to gynaecology',
    'Pelvic ultrasound shows a significantly thickened endometrium at 18 mm (normal postmenopausal threshold <4 mm) with a mildly bulky uterus; both ovaries normal, no ascites',
    'These findings are highly suspicious for endometrial cancer — the most common gynaecological cancer in the UK — and require urgent investigation with hysteroscopy and endometrial biopsy for histological diagnosis',
    'She has multiple risk factors for endometrial cancer: postmenopausal, nulliparous, type 2 diabetes, hypertension, overweight (BMI ~32), and prior oestrogen-only HRT use for 5 years',
    'The news was delivered using a structured approach with empathy; she was reassured that the ultrasound is not a diagnosis, and that further investigation is needed before any conclusions are drawn',
    'Next steps: hysteroscopy and endometrial biopsy under the 2-week wait pathway; gynaecological oncology MDT review; if cancer confirmed, staging CT and likely total hysterectomy ± bilateral salpingo-oophorectomy ± radiotherapy',
    'If confirmed as stage I endometrial cancer, 5-year survival is approximately 90%; prognosis is considerably better than ovarian cancer, which was emphasised in the consultation',
  ],
  vivaQuestions: [
    {
      question: 'What are the risk factors and presenting symptoms of endometrial cancer?',
      keyPoints: [
        'Most common gynaecological cancer in the UK; >9,000 new cases/year; predominantly postmenopausal women',
        'Risk factors: oestrogen excess — obesity (peripheral aromatisation), nulliparity, polycystic ovary syndrome, oestrogen-only HRT, early menarche/late menopause',
        'Other risk factors: type 2 diabetes, hypertension, Lynch syndrome (hereditary non-polyposis colorectal cancer — endometrial cancer risk ~40–60%)',
        'Protective factors: combined OCP, multiparity, physical activity',
        'Cardinal symptom: postmenopausal bleeding (PMB) — any PV bleeding after 12 months of amenorrhoea in a woman >50 is PMB until proved otherwise',
        'PMB is endometrial cancer in approximately 10% of cases; all PMB must be investigated urgently',
      ],
      source: 'NICE NG12 (2015, updated 2023); Cancer Research UK endometrial cancer statistics',
    },
    {
      question: 'How is endometrial cancer investigated and staged?',
      keyPoints: [
        'USS pelvic: first-line investigation for PMB; endometrial thickness ≥4 mm postmenopause = abnormal; requires further investigation',
        'Hysteroscopy + endometrial biopsy: gold standard for histological diagnosis; allows direct visualisation and targeted biopsy of suspicious areas',
        'Pipelle endometrial biopsy: outpatient sampling device; adequate sample in ~80% of cases; cannot visualise cavity',
        'Staging: FIGO staging system — Stage I: confined to uterus; Stage II: cervical stroma invasion; Stage III: local/regional spread; Stage IV: distant metastases',
        'CT chest/abdomen/pelvis: standard staging investigation once cancer confirmed histologically',
        'MRI pelvis: preferred for assessing depth of myometrial invasion and cervical involvement prior to surgery',
      ],
      source: 'RCOG Green-top Guideline 67 (Endometrial hyperplasia, 2016); NICE NG12 (2023); FIGO staging 2023',
    },
    {
      question: 'What is the treatment for endometrial cancer?',
      keyPoints: [
        'Stage I/II (disease confined to uterus ± cervix): total hysterectomy + bilateral salpingo-oophorectomy (THBSO) ± pelvic lymphadenectomy; laparoscopic approach preferred',
        'Adjuvant radiotherapy: offered based on risk stratification — external beam radiotherapy or vault brachytherapy for intermediate/high-risk stage I disease',
        'Advanced disease (stage III/IV): combination of surgery, external beam radiotherapy, and chemotherapy (carboplatin + paclitaxel)',
        'Hormonal therapy: progestogens (medroxyprogesterone acetate) used for advanced/recurrent disease or in women unfit for surgery; particularly for grade 1 endometrioid tumours',
        'Prognosis: stage I overall 5-year survival ~85–90%; stage IV ~15–20%; outcome strongly linked to histological type (endometrioid grade 1 = best, serous/clear cell = worst)',
      ],
      source: 'RCOG/BGCS Endometrial Cancer Guidelines (2022); NICE NG12 (2023)',
    },
  ],
};

export const GYNAE_MOCK_EXAMS: MockExamStation[] = [
  ovarianTumourExplanationMockExam,
  domesticViolenceMockExam,
  uterineCancerMockExam,
];
