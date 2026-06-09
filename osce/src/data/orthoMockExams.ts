import type { MockExamStation } from './mockExamTypes';

const nofMockExam: MockExamStation = {
  id: 'hip_pain_after_fall',
  title: 'Hip Pain After a Fall — History and Consent',
  diagnosis: 'Displaced intracapsular right neck of femur fracture (Garden IV)',
  specialtyId: 'orthopaedics',
  candidateBrief: {
    setting: 'You are an FY1 on the Trauma & Orthopaedic ward at 22:00.',
    scenario:
      'Mrs Margaret Collins, 80, has been referred from A&E after a fall at home. She has been given analgesia and is comfortable at rest. Her observations are stable (HR 88, BP 138/82, SpO₂ 96% on air). A radiology report has been placed in her notes.',
    tasks: [
      'Take a focused history from Mrs Collins',
      'Explain the diagnosis and what it means for her',
      'Discuss and obtain consent for surgical management',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'Margaret Collins',
    age: 80,
    occupation: 'Retired headmistress',
    openingLine:
      '"Oh, hello doctor. I\'m sorry to be such a nuisance at this time of night. My hip is terribly painful — can you tell me what\'s happened?"',
    socrates: [
      {
        label: 'Mechanism of injury',
        descriptor: 'felt something give in the right hip whilst standing from armchair — not a trip or pre-syncopal event',
        quotes: ['"I was just standing up from my armchair to make a cup of tea. I felt something give in my hip as I stood — there was a sort of crack — and I went straight down. I couldn\'t get up at all."'],
      },
      {
        label: 'Site',
        descriptor: 'right hip and groin pain',
        quotes: ['"It\'s in my right hip and groin — dreadful, about 8 out of 10."'],
      },
      {
        label: 'Severity and relief',
        descriptor: '8/10; worse with any movement; partially relieved by analgesia in A&E',
        quotes: ['"Dreadful, about 8 out of 10. The injection they gave me helped a little but any movement makes it much worse."'],
      },
      {
        label: 'Associated symptoms',
        descriptor: 'unable to weight-bear at all; lay on floor approximately 1 hour before found by neighbour',
        quotes: ['"I couldn\'t put any weight on it at all. I lay on the floor for about an hour before my neighbour heard me and called the ambulance."'],
      },
      {
        label: 'Pre-injury symptoms',
        descriptor: 'no dizziness, pre-syncope, palpitations, or chest pain before the fall',
        quotes: ['"No, I didn\'t feel dizzy or faint beforehand. It wasn\'t a trip — it wasn\'t the ground, it was something in the hip itself."'],
      },
    ],
    pastMedicalHistory: [
      { label: 'Atrial fibrillation — on warfarin (INR 2.4 at last check on Tuesday)', quote: '"I have an irregular heartbeat — atrial fibrillation they call it — and high blood pressure. I take warfarin for my heart." – "I had my INR checked at the GP last Tuesday — it was 2.4, they said that was fine."' },
      { label: 'Hypertension — on ramipril', quote: '"Ramipril for blood pressure."' },
      { label: 'Hypercholesterolaemia — on atorvastatin', quote: '"Atorvastatin for cholesterol."' },
      { label: 'Knee osteoarthritis — mild', quote: '"I have some arthritis in my knees but nothing serious."' },
      { label: 'Possible osteoporosis — GP suggested DEXA scan 2 years ago, never completed', quote: '"My GP mentioned a couple of years ago that my bones might be thinning and suggested a scan, but I never got around to having it done."' },
    ],
    drugHistory: [
      { label: 'Warfarin (AF anticoagulation)', quote: '"I take warfarin for my heart."' },
      { label: 'Ramipril (hypertension)', quote: '"Ramipril for blood pressure."' },
      { label: 'Atorvastatin (cholesterol)', quote: '"Atorvastatin for cholesterol."' },
      { label: 'No known allergies', quote: '"No, I\'m not allergic to anything as far as I know."' },
    ],
    familyHistory: [],
    socialHistory: [
      { label: 'Lives alone in ground-floor flat; daughter 10 minutes away (on her way in)', quote: '"I live on my own in a ground-floor flat. My daughter lives about 10 minutes away — she\'s on her way in now."' },
      { label: 'Pre-injury mobility: walking stick outdoors; fully independent indoors; does own housework and cooking', quote: '"Before tonight I walked with a stick outdoors — to the shops and so on — but I was completely fine indoors without it. I do my own cooking, housework, everything."' },
      { label: 'No previous falls; no previous fractures', quote: '"No, this is the first time I\'ve fallen. I\'ve never broken a bone before in my life."' },
      { label: 'Alcohol: small glass of wine with dinner most evenings; non-smoker', quote: '"[One small glass of wine with dinner most evenings]" [only if directly asked]' },
    ],
    importantNegatives: [
      'No pre-fall loss of consciousness ("No, I didn\'t black out. It wasn\'t a faint.")',
      'No chest pain or palpitations before the fall ("Nothing like that — I just stood and felt it give.")',
      'No head injury during the fall ("I went straight down on my side. I didn\'t hit my head.")',
      'No neck pain or back pain ("No — just my hip and groin.")',
      'No recent illness or infection ("I\'ve been perfectly well otherwise.")',
      'No previous fractures ("Never broken a bone before in my life.")',
    ],
    ice: {
      ideas:
        '"I suppose the bones must have just... snapped? I knew they weren\'t as strong as they used to be."',
      concerns:
        '"I\'m terrified about the operation, honestly — I\'ve never had one. And I\'m scared I won\'t be able to go home again. Will I end up in a care home?"',
      expectations:
        '"I just want to get back to my flat and manage on my own. That\'s all I care about."',
    },
    onlyIfDirectlyAsked: [
      'Urinary incontinence since the fall — embarrassed: "A little bit, yes. I was on the floor for an hour so I couldn\'t help it."',
      'Alcohol — drinks one small glass of wine with dinner most evenings',
      'Smoking — never smoked',
    ],
    behaviourNotes: [
      'In noticeable pain throughout — wince if movement of the leg is mentioned',
      'Frightened about the operation: "I\'ve never had an operation — is it very dangerous at my age?"',
      'Becomes briefly tearful when surgery is mentioned — student must acknowledge this',
      'Asks directly: "Will I be able to go home again?" — responds well to an honest, structured answer about rehabilitation',
      'Responds warmly to empathy and use of her first name if offered',
    ],
  },
  markScheme: [
    {
      domain: 'Opening the consultation',
      items: [
        { description: 'Washes hands and introduces themselves with name and role', marks: 1 },
        { description: 'Confirms the patient\'s name and date of birth', marks: 1 },
        { description: 'Explains the purpose of the consultation and gains consent to proceed', marks: 1 },
      ],
    },
    {
      domain: 'Presenting complaint',
      items: [
        { description: 'Uses open questioning to invite the patient to describe what happened', marks: 1 },
      ],
    },
    {
      domain: 'History — mechanism and acute injury assessment',
      items: [
        { description: 'Elicits mechanism of fall — stood from chair, felt hip give, not a trip or pre-syncopal episode', marks: 2 },
        { description: 'Asks about pre-fall symptoms — specifically absence of dizziness, palpitations, or LOC', marks: 1 },
        { description: 'Asks about pain: site (hip and groin), severity, and response to analgesia', marks: 1 },
        { description: 'Asks about ability to weight-bear after the fall', marks: 1 },
      ],
    },
    {
      domain: 'History — functional status and social circumstances',
      items: [
        { description: 'Establishes pre-injury mobility baseline (stick outdoors, independent indoors)', marks: 2 },
        { description: 'Asks about living situation and social support (alone in flat, daughter nearby)', marks: 1 },
        { description: 'Asks about previous falls and previous fractures', marks: 1 },
      ],
    },
    {
      domain: 'History — pre-operative fitness',
      items: [
        { description: 'Identifies AF and warfarin use; asks about most recent INR result', marks: 2 },
        { description: 'Asks about allergies', marks: 1 },
        { description: 'Asks about previous anaesthetic or surgery', marks: 1 },
        { description: 'Enquires about bone health or known osteoporosis', marks: 1 },
      ],
    },
    {
      domain: 'ICE — ideas, concerns and expectations',
      items: [
        { description: 'Asks what the patient thinks has happened or what she understands so far', marks: 1 },
        { description: 'Elicits her concerns — specifically addresses fear about the operation and going home', marks: 1 },
        { description: 'Asks what she is hoping the outcome of treatment will be', marks: 1 },
      ],
    },
    {
      domain: 'Past medical, drug and social history',
      items: [
        { description: 'Establishes full medication list (warfarin, ramipril, atorvastatin)', marks: 1 },
        { description: 'Asks about alcohol and smoking status', marks: 1 },
      ],
    },
    {
      domain: 'Explanation of diagnosis',
      items: [
        { description: 'Uses the radiology report to confirm a displaced fracture of the neck of the femur', marks: 1 },
        { description: 'Explains the fracture and its significance in clear lay terms', marks: 1 },
        { description: 'States that surgery is necessary and explains why non-operative management is not appropriate', marks: 2 },
      ],
    },
    {
      domain: 'Consent for surgery',
      items: [
        { description: 'Explains the surgical procedure — hemiarthroplasty — in lay terms (replacing the ball of the hip joint)', marks: 2 },
        { description: 'Covers key surgical risks: infection, dislocation, leg length discrepancy, peri-prosthetic fracture', marks: 1 },
        { description: 'Covers key medical risks: anaesthetic risk, VTE, cardiac events given AF', marks: 1 },
        { description: 'Explains benefit of surgery: restores mobility, relieves pain, enables rehabilitation and return home', marks: 1 },
        { description: 'Mentions that warfarin will need to be reversed before surgery can proceed', marks: 1 },
      ],
    },
    {
      domain: 'Closing the consultation',
      items: [
        { description: 'Summarises the discussion and checks the patient\'s understanding', marks: 1 },
        { description: 'Invites questions and addresses patient concerns before closing', marks: 1 },
      ],
    },
    {
      domain: 'Communication skills',
      items: [
        { description: 'Acknowledges pain and fear empathetically throughout — does not rush', marks: 1 },
        { description: 'Uses lay language consistently; avoids unexplained medical jargon', marks: 1 },
        { description: 'Demonstrates active listening — responds to emotion rather than ploughing through a checklist', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Summarises: Mrs Collins is an 80-year-old retired headmistress who fell from standing — she felt her hip give way, making a mechanical fracture (rather than collapse or trip) the most likely mechanism',
    'States the diagnosis: displaced intracapsular right neck of femur fracture (Garden IV) based on the radiology report; explains why this mandates surgical rather than conservative management',
    'Identifies the key pre-operative concern: warfarin anticoagulation (AF, INR 2.4 at last check) — will need reversal with vitamin K ± PCC before surgery can proceed safely',
    'Notes pre-injury functional baseline: independently mobile with stick outdoors, fully independent indoors — this is an important benchmark for rehabilitation and discharge planning',
    'States the preferred operation: hemiarthroplasty, as this is a displaced intracapsular fracture in an elderly low-demand patient; discusses key risks and benefits',
    'Identifies suspected osteoporosis — no DEXA scan ever performed; should be assessed post-operatively and commenced on bone protection (bisphosphonate + calcium/vitamin D)',
    'Confirms patient has capacity to consent, understands the plan, and has nearby family support for discharge planning',
  ],
  vivaQuestions: [
    {
      question:
        'What determines whether a neck of femur fracture is managed with internal fixation or arthroplasty?',
      keyPoints: [
        'Primary distinction is intracapsular vs extracapsular fracture location',
        'Extracapsular (intertrochanteric, subtrochanteric): dynamic hip screw or intramedullary nail — blood supply to femoral head unaffected',
        'Intracapsular undisplaced (Garden I/II): cannulated screws — blood supply may be preserved',
        'Intracapsular displaced (Garden III/IV): arthroplasty preferred — high risk of avascular necrosis with fixation alone',
        'Elderly, low-demand patients: hemiarthroplasty (cemented Austin Moore or bipolar); younger or more active patients: total hip arthroplasty',
      ],
      source: 'NICE NG124 (2023) Hip Fracture in Adults',
    },
    {
      question:
        'What are the key quality standards for hip fracture care in the UK?',
      keyPoints: [
        'NICE Best Practice Tariff: surgery within 36 hours of admission is the standard (ideally <24 h)',
        'Orthogeriatric co-management model: joint orthopaedic and geriatric input from day of admission reduces mortality',
        'All patients should receive a falls risk assessment and bone protection review',
        'Patients should be mobilised on the day after surgery',
        'National Hip Fracture Database (NHFD) audits all UK hip fractures — 30-day mortality benchmark is ~7%',
      ],
      source: 'NICE NG124 (2023); NHFD Annual Report 2023',
    },
    {
      question: 'How would you manage this patient\'s warfarin before surgery?',
      keyPoints: [
        'Hold warfarin immediately on admission and recheck INR urgently',
        'Surgery generally deferred if INR >1.5 — target INR <1.5 before spinal or general anaesthesia',
        'Vitamin K 1–2 mg IV: reverses VKA over 6–12 hours; preferred for planned reversal to avoid rebound hypercoagulability',
        'Prothrombin complex concentrate (PCC, e.g. Octaplex): immediate reversal within minutes; used if surgery needed urgently',
        'Liaise with haematology and anaesthetics; plan VTE prophylaxis (LMWH) post-operatively',
      ],
      source: 'British Society for Haematology: Guideline for reversal of VKA anticoagulation (2022)',
    },
    {
      question:
        'What are the major complications of hip fracture surgery and how are they prevented?',
      keyPoints: [
        'Surgical: dislocation (especially posterior approach), peri-prosthetic fracture, leg length discrepancy, infection, implant failure',
        'VTE: DVT/PE — LMWH thromboprophylaxis for 28–35 days post-op (NICE NG89)',
        'Delirium: common post-operatively in elderly — avoid anticholinergics, early mobilisation, adequate hydration, cognitive stimulation',
        'Pressure ulcers: regular repositioning, pressure-relieving mattress, nutritional assessment',
        '30-day mortality approximately 7–10% — highest in cognitively impaired and medically unwell patients',
      ],
      source: 'NICE NG124 (2023); SIGN 111',
    },
  ],
};

const kneeInjuryMockExam: MockExamStation = {
  id: 'acute_knee_injury',
  title: 'Acute Knee Injury',
  diagnosis: 'Complete ACL tear with bucket-handle medial meniscal tear',
  specialtyId: 'orthopaedics',
  candidateBrief: {
    setting: 'You are an FY1 in the Emergency Department.',
    scenario:
      'James Walsh, 22, a university rugby player, attends 3 hours after a knee injury sustained during a match. He can weight-bear with difficulty and describes the knee as unstable. He is in moderate pain (6/10) and has been given analgesia. A radiology report has been placed in the notes.',
    tasks: [
      'Take a focused history of the knee injury and its impact',
      'Interpret the MRI report provided and explain the findings to the patient',
      'Discuss immediate management and the likely surgical pathway',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'James Walsh',
    age: 22,
    occupation: 'Law student and university rugby player',
    openingLine:
      '"Hi doctor, please tell me it\'s not as bad as it looks — I\'ve got a big tournament in six weeks and I\'ve never had anything like this before."',
    socrates: [
      {
        label: 'Mechanism',
        descriptor: 'non-contact pivoting injury — planted right foot to sidestep; body twisted; immediate collapse with audible pop',
        quotes: ['"I was running with the ball, planted my right foot to sidestep and my knee just buckled. There was a really loud pop — people on the sideline heard it — and I went straight down." – "There was no contact — no tackle, no kick. I planted my foot and twisted, and it just went."'],
      },
      {
        label: 'Site',
        descriptor: 'right knee — medial and posterior pain; haemarthrosis to grapefruit size within 20 minutes',
        quotes: ['"It blew up almost immediately — within about 20 minutes it was the size of a grapefruit." – "About 6 out of 10 now with the painkillers — mainly inside the knee and behind the kneecap."'],
      },
      {
        label: 'Character',
        descriptor: 'audible pop at injury; immediate instability; giving-way sensation; cannot fully weight-bear',
        quotes: ['"There was a really loud pop — people on the sideline heard it." – "I can hobble on it but it really hurts and it feels like it might give way again at any moment."'],
      },
      {
        label: 'Associated symptoms',
        descriptor: 'mechanical block to full extension (locked knee) since the moment of injury; instability; haemarthrosis',
        quotes: ['"Yes — I cannot straighten it fully. There\'s something stopping it going all the way out. It\'s been like that since the moment it happened." – "It really hurts and it feels like it might give way again at any moment."'],
      },
      {
        label: 'Timing',
        descriptor: '3 hours ago; acute haemarthrosis; no previous knee injury or surgery on either knee',
        quotes: ['"Absolutely nothing. Both knees have been completely fine before today — no previous injuries, no surgery, no physio for either knee."'],
      },
    ],
    pastMedicalHistory: [
      { label: 'No past medical history; no previous surgery or operations', quote: '"I\'ve never had an operation. I\'m completely fit and healthy — no medical conditions, no regular medications."' },
    ],
    drugHistory: [
      { label: 'Ibuprofen 400 mg — taken approximately 2 hours ago (analgesia for today\'s injury only)', quote: '[Only if directly asked]' },
      { label: 'No regular prescribed medications; no known allergies', quote: '"None that I know of."' },
    ],
    familyHistory: [],
    socialHistory: [
      { label: 'Law student (final year); training contract starting September — needs to be mobile', quote: '"I\'m finishing law school and starting a training contract at a City firm in September. I\'ve also got exams in 8 weeks. I\'m going to need to be mobile."' },
      { label: 'University-level rugby (3× week) and 5-a-side football (weekends) — sport central to life', quote: '"I play rugby three times a week and football at weekends. Sport is everything to me — and I\'m meant to play in the national university cup in six weeks."' },
      { label: 'Engaged — wedding in 4 months', quote: '"I\'m getting married in four months." – "How long am I going to be out of sport?"' },
      { label: 'Social smoker (2–3 cigarettes on weekends)', quote: '[Only if directly asked]' },
    ],
    importantNegatives: [
      'No contact mechanism ("Completely non-contact — my foot planted and I twisted, nothing hit me.")',
      'No gradual onset of swelling ("It came up immediately — within 20 minutes.")',
      'No previous knee swelling or giving way ("Never had any trouble with this knee before.")',
      'No medial or lateral ligament tenderness on the outer aspect ("The pain is mostly inside and behind the knee.")',
      'No numbness or tingling in the foot ("No, my foot feels completely normal.")',
      'No groin or hip pain ("No, it\'s purely the knee.")',
    ],
    ice: {
      ideas:
        '"Maybe it\'s just badly sprained? Could it be? I\'m really hoping it\'s not as serious as it feels."',
      concerns:
        '"I\'m terrified I\'m going to miss the cup — and I\'m getting married in four months. I need to be able to walk down the aisle." – "How long am I going to be out of sport?"',
      expectations:
        '"I want to know exactly what\'s wrong and what the plan is. I\'m a details person — please be straight with me."',
    },
    onlyIfDirectlyAsked: [
      'Ibuprofen 400 mg taken about 2 hours before attending — relevant if anticoagulation or NSAID management is discussed',
      'Social smoking — 2–3 cigarettes on weekends; does not consider himself a smoker',
    ],
    behaviourNotes: [
      'Initially minimises — "maybe it\'s just sprained?" — hoping for reassurance',
      'Visibly deflated when seriousness of the diagnosis is explained; asks "So I\'m going to need an operation?"',
      'Becomes distressed about the 9–12 month return-to-sport timeline — needs empathy before moving on',
      'Asks specifically about the wedding: "I\'m getting married in 4 months — will I be able to walk properly by then?"',
      'Calms down with a structured, honest explanation and a clear timeline',
    ],
  },
  markScheme: [
    {
      domain: 'Opening the consultation',
      items: [
        { description: 'Washes hands and introduces themselves with name and role', marks: 1 },
        { description: 'Confirms the patient\'s name and date of birth', marks: 1 },
        { description: 'Explains the purpose of the consultation and gains consent to proceed', marks: 1 },
      ],
    },
    {
      domain: 'Presenting complaint',
      items: [
        { description: 'Uses open questioning to invite the patient to describe the injury in their own words', marks: 1 },
      ],
    },
    {
      domain: 'History — injury mechanism and onset',
      items: [
        { description: 'Establishes non-contact, pivoting/planting mechanism (foot planted, body twisted)', marks: 2 },
        { description: 'Asks about an audible or felt pop at the moment of injury', marks: 1 },
        { description: 'Asks about speed of swelling onset — rapid onset (haemarthrosis within 1–2 hours) is highly suspicious for ligamentous or cruciate injury', marks: 2 },
      ],
    },
    {
      domain: 'History — functional assessment',
      items: [
        { description: 'Asks about ability to weight-bear immediately and now', marks: 1 },
        { description: 'Asks about instability or giving way of the knee', marks: 1 },
        { description: 'Asks about locking or block to full extension — suggests displaced meniscal fragment', marks: 2 },
      ],
    },
    {
      domain: 'History — context and impact',
      items: [
        { description: 'Asks about previous knee injury or surgery on either knee', marks: 1 },
        { description: 'Establishes activity level, occupation, and upcoming commitments — relevant to rehabilitation goals and urgency', marks: 1 },
      ],
    },
    {
      domain: 'ICE — ideas, concerns and expectations',
      items: [
        { description: 'Explores whether the patient has a sense of how serious the injury is', marks: 1 },
        { description: 'Elicits specific concerns — sport, wedding, employment — before delivering the diagnosis', marks: 1 },
      ],
    },
    {
      domain: 'Past medical, drug and social history',
      items: [
        { description: 'Confirms no relevant past medical history, medications, or allergies', marks: 1 },
      ],
    },
    {
      domain: 'MRI interpretation',
      items: [
        { description: 'Correctly identifies complete ACL tear from the report', marks: 2 },
        { description: 'Correctly identifies bucket-handle medial meniscal tear with displaced central fragment', marks: 2 },
        { description: 'Links the locked knee to the displaced meniscal fragment — explains the mechanism in lay terms', marks: 1 },
      ],
    },
    {
      domain: 'Immediate management and surgical pathway',
      items: [
        { description: 'Advises immediate management: analgesia, crutches, protected weight-bearing', marks: 1 },
        { description: 'Explains that the locked knee requires urgent orthopaedic referral — not routine', marks: 2 },
        { description: 'Explains ACL reconstruction is typically elective (4–8 weeks after injury when swelling settles)', marks: 1 },
        { description: 'Gives an honest return-to-sport timeline for ACL reconstruction — typically 9–12 months', marks: 1 },
      ],
    },
    {
      domain: 'Closing the consultation',
      items: [
        { description: 'Summarises the key findings and management plan; checks patient understanding', marks: 1 },
        { description: 'Invites questions and addresses the patient\'s concerns before ending', marks: 1 },
      ],
    },
    {
      domain: 'Communication skills',
      items: [
        { description: 'Acknowledges the emotional impact — sport, wedding, exams — before moving to clinical detail', marks: 1 },
        { description: 'Delivers honest but sensitive news about the timeline without being dismissive', marks: 1 },
        { description: 'Uses clear lay language to explain MRI findings and surgical plans', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Summarises: James is a 22-year-old active rugby player who sustained a non-contact pivoting injury to the right knee 3 hours ago, with an immediate audible pop followed by rapid-onset haemarthrosis and instability',
    'States the clinical features pointing to significant ligamentous injury: pop, haemarthrosis within 20 minutes, instability, and a mechanical block to full extension',
    'Interprets the MRI: complete ACL tear confirmed by loss of fibre continuity and lateral compartment bone bruising (pivot-shift pattern); bucket-handle medial meniscal tear with central displacement of the fragment',
    'Links the locked knee to the displaced bucket-handle fragment — this is a mechanical block requiring urgent rather than routine orthopaedic review',
    'States immediate management: analgesia, crutches, protected weight-bearing, and same-day orthopaedic referral for the locked knee',
    'Outlines the surgical pathway: urgent arthroscopy for the bucket-handle tear; elective ACL reconstruction 4–8 weeks later when swelling settles; realistic return to contact sport at 9–12 months minimum',
    'Confirms no previous knee injury and good baseline health — prognostically favourable for return to sport',
  ],
  vivaQuestions: [
    {
      question: 'What are the Ottawa Knee Rules and how would you apply them here?',
      keyPoints: [
        'Ottawa Knee Rules: X-ray indicated if ≥55 years, isolated patella tenderness, fibular head tenderness, inability to flex to 90°, or inability to weight-bear (4 steps) immediately and in ED',
        'High sensitivity (~98%) for fractures; purpose is to rule out bony injury, not soft tissue',
        'In this case, X-ray may exclude a tibial plateau fracture or Segond fracture (lateral capsular avulsion pathognomonic of ACL tear)',
        'Ottawa rules do not detect ligamentous or meniscal injury — MRI is required for soft tissue assessment',
      ],
      source: 'Stiell IG et al., JAMA 1997',
    },
    {
      question: 'Describe the clinical tests for ACL integrity and their interpretation.',
      keyPoints: [
        'Lachman test: knee at 20–30° flexion, proximal tibia drawn anteriorly while distal femur fixed — most sensitive clinical test (sensitivity ~85%)',
        'Anterior drawer: knee at 90° flexion, foot stabilised, tibia drawn anteriorly — positive if >5 mm or soft end-point',
        'Pivot-shift test: valgus + internal rotation + extension causes anterolateral subluxation of the tibial plateau with a clunk on reduction — most specific (specificity ~98%) but difficult in acute setting',
        'Haemarthrosis and pain limit examination in the acute setting — examination under anaesthesia at arthroscopy is more reliable',
        'MRI sensitivity and specificity for complete ACL tear approximately 95%',
      ],
      source: 'Solomon DH et al., JAMA 2001; OHCM 10th ed., Ch. 12',
    },
    {
      question: 'What is a bucket-handle meniscal tear and what are its clinical features?',
      keyPoints: [
        'Bucket-handle tear: a longitudinal full-thickness tear of the meniscus with the inner rim displaced centrally into the intercondylar notch',
        'Most commonly involves the medial meniscus; associated with ACL-deficient knees due to increased anteroposterior instability',
        'Classic presentation: mechanical locking (block to full extension), pain, and effusion',
        'The displaced fragment physically blocks extension — distinguishes it from a simple meniscal tear',
        'Urgent arthroscopic surgery (meniscal repair or partial meniscectomy) is required for locked knee — delay risks cartilage damage and irreducible locking',
      ],
      source: 'Greis PE et al., J Am Acad Orthop Surg 2002',
    },
    {
      question: 'What are the graft options for ACL reconstruction and when is surgery performed?',
      keyPoints: [
        'Surgery typically delayed 4–8 weeks after injury — allows swelling to resolve and ROM to return, reducing risk of arthrofibrosis',
        'Autograft options: bone-patellar tendon-bone (BPTB — gold standard for high-demand athletes), hamstring tendons (gracilis + semitendinosus — lower donor site morbidity), quadriceps tendon',
        'Allograft: higher re-tear rates in young athletes; generally avoided under 25 years',
        'Return-to-sport criteria: time-based (minimum 9 months) plus functional criteria (limb symmetry index ≥90%, psychological readiness)',
        'Concurrent meniscal repair done at the time of reconstruction when tissue quality permits',
      ],
      source: 'BASK ACL guidelines; NICE IPG440',
    },
  ],
};

const caudaEquinaMockExam: MockExamStation = {
  id: 'back_pain_with_neurological_symptoms',
  title: 'Back Pain with Neurological Symptoms',
  diagnosis: 'Incomplete cauda equina syndrome (L4/L5 central disc prolapse)',
  specialtyId: 'orthopaedics',
  candidateBrief: {
    setting: 'You are an FY1 on the Surgical Assessment Unit.',
    scenario:
      'David Moore, 45, a delivery driver, has been referred urgently by his GP with worsening back pain and new symptoms this morning. He has a known history of lumbar disc disease. His observations are normal (HR 82, BP 126/78, SpO₂ 98% on air).',
    tasks: [
      'Take a focused history to determine the urgency of this presentation',
      'Explain your working diagnosis and its significance to the patient',
      'State your immediate management plan',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'David Moore',
    age: 45,
    occupation: 'Delivery driver',
    openingLine:
      '"I think this is just my disc playing up again, doctor — it happens every now and then. My wife insisted I come in because I had a bit of trouble having a wee this morning."',
    socrates: [
      {
        label: 'Site',
        descriptor: 'lower back with bilateral leg radiation — right (posterior thigh to calf) >> left (thigh only)',
        quotes: ['"My back went two days ago when I was lifting a parcel from the van — an almighty tearing pain across my lower back." – "It shoots down both legs — the right is much worse. It goes right down the back of the right thigh and into my calf. On the left it just goes to my thigh."'],
      },
      {
        label: 'Onset',
        descriptor: 'sudden onset 2 days ago while lifting a parcel at work — much worse than usual disc pain',
        quotes: ['"I bent down and felt it go immediately. Much worse than my usual back pain. It\'s constant and I\'d say 8 out of 10."'],
      },
      {
        label: 'Associated symptoms — bladder',
        descriptor: 'new this morning: urinary hesitancy (5 minutes to initiate); weak slow stream; not complete retention',
        quotes: ['"This morning I needed to go but it took about 5 minutes to get going. When it did come, it was slow and weak. It\'s never happened like that before." – "I haven\'t been completely unable to go, but it was very hard to start. I haven\'t leaked or wet myself."'],
      },
      {
        label: 'Associated symptoms — saddle anaesthesia',
        descriptor: 'numbness/tingling in the perineal area — like sitting on a bike saddle; onset this morning',
        quotes: ['"You know... now you mention it, my bottom area does feel a bit numb or tingly — like when you sit on a bike saddle for too long. I\'d put it down to sitting awkwardly with the pain."'],
      },
      {
        label: 'Associated symptoms — bowel',
        descriptor: 'no bowel movement for 2 days; attributed to codeine; no faecal incontinence',
        quotes: ['"I haven\'t been to the toilet for 2 days — I thought that was the codeine I\'ve been taking. I haven\'t had any accidents."'],
      },
      {
        label: 'Associated symptoms — lower limb weakness',
        descriptor: 'bilateral leg weakness; almost fell getting out of the car; wife noticed severe limp',
        quotes: ['"My legs feel very heavy and weak — I nearly fell getting out of the car. I had to hold onto the door. My wife noticed I was limping badly."'],
      },
    ],
    pastMedicalHistory: [
      { label: 'Chronic lower back pain (2 years) — MRI 18 months ago: L4/L5 disc prolapse; managed with physiotherapy', quote: '"I\'ve had back pain for about 2 years. An MRI 18 months ago showed a disc problem at L4/L5. I had physio for 6 months and it settled. This is much, much worse."' },
      { label: 'Epidural steroid injection 8 months ago — temporary benefit', quote: '"I had a jab in my back — an epidural — about 8 months ago. It helped for a while." [only if directly asked]' },
    ],
    drugHistory: [
      { label: 'Naproxen (chronic back pain)', quote: '"I take naproxen..."' },
      { label: 'Amitriptyline (neuropathic back pain)', quote: '"...and amitriptyline for the back pain."' },
      { label: 'Codeine — taken for 2 days during this exacerbation (barely effective)', quote: '"I\'ve been taking codeine for the last 2 days but it\'s barely touched it."' },
    ],
    familyHistory: [],
    socialHistory: [
      { label: 'Delivery driver — sole earner; wife at home with two children', quote: '"I\'m a delivery driver — I\'m the only one earning. My wife is at home with our two children. I really can\'t afford to be off work."' },
    ],
    importantNegatives: [
      'No urinary incontinence or overflow ("I haven\'t leaked or wet myself.")',
      'No faecal incontinence ("No accidents — I just haven\'t been able to go.")',
      'No fever or night sweats ("I\'ve been well otherwise — no temperature.")',
      'No significant weight loss ("No, my weight\'s been stable.")',
      'No history of malignancy ("No, I\'ve never had cancer.")',
      'No recent trauma ("No falls or accidents other than the lifting injury.")',
    ],
    ice: {
      ideas:
        '"I think it\'s the disc again — it\'s just a really bad flare-up. The wee thing is probably just because I\'ve been moving around less."',
      concerns:
        '"I\'m worried I\'m going to be signed off work and we can\'t afford that. I\'m the only earner." – "Could I end up paralysed from this?"',
      expectations:
        '"I\'m hoping you\'ll give me some stronger painkillers and send me home to rest for a few days."',
    },
    onlyIfDirectlyAsked: [
      'Sexual dysfunction — reduced perineal sensation: "Actually... yes, it has felt different down there — less sensation. I didn\'t want to mention it."',
      'Epidural steroid injection 8 months ago — helped temporarily',
    ],
    behaviourNotes: [
      'Initially minimises symptoms — "I\'m sure it\'s just the disc" — student must actively probe for red flags',
      'Does not volunteer saddle anaesthesia, sexual dysfunction, or bowel change — these must be specifically asked about',
      'Becomes visibly frightened when the doctor expresses urgency: "Are you saying this is serious? Could I be paralysed?"',
      'When told about emergency MRI: "Does this really need to be tonight? Can\'t I come back tomorrow?"',
      'Responds well to a calm, structured explanation of why speed matters and what is at stake',
    ],
  },
  markScheme: [
    {
      domain: 'Opening the consultation',
      items: [
        { description: 'Washes hands and introduces themselves with name and role', marks: 1 },
        { description: 'Confirms the patient\'s name and date of birth', marks: 1 },
        { description: 'Explains the purpose of the consultation and gains consent to proceed', marks: 1 },
      ],
    },
    {
      domain: 'Presenting complaint',
      items: [
        { description: 'Uses open questioning to invite the patient to describe his symptoms', marks: 1 },
      ],
    },
    {
      domain: 'History — back pain and radiation',
      items: [
        { description: 'Elicits sudden-onset severe exacerbation with a lifting mechanism', marks: 1 },
        { description: 'Asks about bilateral leg pain or radiation — identifies bilateral sciatica (right worse than left)', marks: 2 },
        { description: 'Asks about previous back history and prior MRI findings', marks: 1 },
      ],
    },
    {
      domain: 'History — bladder symptoms',
      items: [
        { description: 'Directly asks about urinary hesitancy and difficulty initiating urination', marks: 2 },
        { description: 'Asks specifically about urinary incontinence or retention (inability to void)', marks: 1 },
        { description: 'Identifies new-onset urinary dysfunction as a surgical red flag', marks: 1 },
      ],
    },
    {
      domain: 'History — saddle anaesthesia and perineal sensation',
      items: [
        { description: 'Directly asks about numbness or tingling in the perineum, inner thighs, or genitalia', marks: 2 },
        { description: 'Asks about sexual dysfunction or altered perineal sensation', marks: 1 },
      ],
    },
    {
      domain: 'History — bowel and lower limb neurology',
      items: [
        { description: 'Asks about bowel symptoms — constipation, faecal incontinence', marks: 1 },
        { description: 'Asks about lower limb weakness — bilateral leg weakness (nearly fell)', marks: 2 },
      ],
    },
    {
      domain: 'ICE — ideas, concerns and expectations',
      items: [
        { description: 'Explores the patient\'s belief that this is a routine disc flare-up and corrects this sensitively', marks: 1 },
        { description: 'Elicits his concerns about work and financial impact and addresses them within the context of urgency', marks: 1 },
      ],
    },
    {
      domain: 'Past medical, drug and social history',
      items: [
        { description: 'Establishes current medications (naproxen, amitriptyline, codeine)', marks: 1 },
        { description: 'Asks about any previous back surgery or interventions (epidural injection)', marks: 1 },
      ],
    },
    {
      domain: 'Working diagnosis and immediate management',
      items: [
        { description: 'States working diagnosis of incomplete cauda equina syndrome', marks: 2 },
        { description: 'Explains the significance clearly — risk of permanent bladder, bowel, and sexual dysfunction if untreated', marks: 1 },
        { description: 'States emergency MRI lumbar spine is needed tonight, not the next day', marks: 2 },
        { description: 'Mentions bladder scan and urinary catheterisation if post-void residual is elevated', marks: 1 },
        { description: 'States urgent spinal surgical referral once MRI confirms diagnosis', marks: 1 },
      ],
    },
    {
      domain: 'Closing the consultation',
      items: [
        { description: 'Summarises the situation and checks the patient understands the plan and the urgency', marks: 1 },
        { description: 'Invites questions and addresses concerns — particularly the worry about work and paralysis', marks: 1 },
      ],
    },
    {
      domain: 'Communication skills',
      items: [
        { description: 'Conveys urgency clearly without causing panic — measured and direct', marks: 1 },
        { description: 'Acknowledges the patient\'s concerns about work and income empathetically before pressing the clinical urgency', marks: 1 },
        { description: 'Avoids dismissing the patient\'s initial minimisation — uses open questions to draw out the red-flag symptoms', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Summarises: Mr Moore is a 45-year-old delivery driver with a known L4/L5 disc prolapse presenting with a 2-day history of sudden-onset severe back pain after lifting, with new bladder dysfunction this morning',
    'Identifies the red-flag triad: bilateral sciatica, new urinary hesitancy with a weak stream (incomplete cauda equina syndrome), and saddle anaesthesia — in combination, these are diagnostic of cauda equina compression until proven otherwise',
    'Notes bilateral lower limb weakness (nearly fell getting out of the car) and 2-day constipation — further supporting significant nerve root compression',
    'States working diagnosis: incomplete cauda equina syndrome, most likely secondary to a large central L4/L5 disc prolapse compressing multiple sacral nerve roots',
    'States this is a surgical emergency: emergency MRI lumbar spine tonight; bladder scan and catheterisation if residual >200 mL; urgent referral to spinal surgery',
    'Explains the time-critical nature — incomplete CES has better prognosis than complete CES; outcome depends on speed of decompression, particularly for bladder function',
    'Acknowledges the patient\'s financial concerns but is clear that delay risks permanent neurological deficit including bladder, bowel, and sexual dysfunction',
  ],
  vivaQuestions: [
    {
      question: 'What is the anatomical basis of cauda equina syndrome?',
      keyPoints: [
        'The spinal cord ends at the conus medullaris at approximately L1–L2 in adults',
        'Below this the spinal canal contains the cauda equina — the descending lumbosacral nerve roots (L2–S5)',
        'These are peripheral nerves, not spinal cord — more resilient to compression but still vulnerable to ischaemia',
        'CES results from compression of multiple roots, most commonly by a large central L4/L5 or L5/S1 disc herniation',
        'Bladder, bowel, and sexual function depend on S2–S4 roots — early involvement signals significant central compression',
        'Incomplete CES (CESI, some sacral function preserved) carries a better prognosis than complete CES (CESC)',
      ],
      source: 'Todd NV, Spine J 2009; OHCM 10th ed., Ch. 12',
    },
    {
      question: 'What does NICE guidance say about suspected cauda equina syndrome?',
      keyPoints: [
        'NICE NG59 (2016): immediate same-day MRI for all patients with suspected CES — do not wait until morning',
        'CT is second-line only if MRI is unavailable or contraindicated',
        'Bladder ultrasound (post-void residual): >200–300 mL indicates significant retention — catheterise',
        'Blood tests: FBC, CRP, ESR to exclude infective or malignant aetiology',
        'Spinal surgical team must be involved once imaging confirms diagnosis',
      ],
      source: 'NICE NG59 (2016); BSSG CES Standards 2020',
    },
    {
      question: 'What determines the urgency of surgical decompression in cauda equina syndrome?',
      keyPoints: [
        'Incomplete CES (CESI): some sacral sensory or motor function preserved — decompression within 48 hours; better bladder recovery',
        'Complete CES (CESC): no sacral function — surgery within 24 hours; worse prognosis even with urgent intervention',
        'Outcome of bladder function correlates most strongly with duration of complete urinary retention before decompression',
        'Surgical approach: discectomy ± laminectomy performed by neurosurgery or specialist spinal surgeons',
        'BSSG recommends a dedicated 24-hour CES pathway in all major spinal centres',
      ],
      source: 'Todd NV, Eur Spine J 2011; BSSG CES Standards 2020',
    },
    {
      question: 'How does cauda equina syndrome differ from conus medullaris syndrome?',
      keyPoints: [
        'Conus medullaris syndrome: injury at L1–L2; mixed UMN and LMN features — brisk reflexes possible alongside absent ankle jerks',
        'Cauda equina syndrome: below L1–L2; pure LMN pattern — flaccid paraparesis, absent reflexes, saddle anaesthesia',
        'Conus causes a hyperreflexic (spastic) bladder; cauda equina causes an atonic (areflexic) bladder with overflow incontinence',
        'CES: often asymmetric, radicular pain common; conus: more symmetric sacral dermatomal loss, less radicular pain',
        'Conus injury has a worse prognosis for neurological recovery',
      ],
      source: 'Greenberg MS, Handbook of Neurosurgery, 8th ed.; OHCM 10th ed., Ch. 10',
    },
  ],
};

const compartmentMockExam: MockExamStation = {
  id: 'worsening_limb_pain_after_fracture',
  title: 'Worsening Limb Pain After Fracture',
  diagnosis: 'Acute compartment syndrome — right lower leg (anterior compartment)',
  specialtyId: 'orthopaedics',
  candidateBrief: {
    setting: 'You are the FY1 covering the Trauma & Orthopaedic ward overnight at 02:00.',
    scenario:
      'Tom Carter, 25, was admitted at 20:00 following a motorcycle accident with a closed right tibial shaft fracture. A backslab plaster was applied in A&E and he was started on a PCA morphine pump. A staff nurse has called you urgently — he is pressing the PCA repeatedly and his pain has escalated significantly in the last hour. Observations: HR 110, BP 122/74, SpO₂ 98% on air.',
    tasks: [
      'Assess this patient and determine whether this is a surgical emergency',
      'Explain your working diagnosis to the patient',
      'State your immediate management plan and escalation',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'Tom Carter',
    age: 25,
    occupation: 'Construction worker',
    openingLine:
      '"Doctor, thank god someone\'s here — the pain is absolutely unbearable. I\'ve been pressing this button constantly but it\'s not helping at all."',
    historyOfPresentingComplaint: [
      {
        label: 'Pain character — changed from bone pain to burning pressured sensation inside the leg (10/10); PCA ineffective',
        quote: '"The pain has changed — this isn\'t just the broken bone. It feels like there\'s burning pressure inside my leg, like it\'s going to explode from the inside. I\'d say 10 out of 10. The morphine is doing nothing."',
      },
      {
        label: 'Onset and progression — initially partially controlled by PCA; escalating since midnight; worsening every hour',
        quote: '"The morphine was sort of helping at first. It started getting worse again around midnight, and for the last hour it\'s been completely uncontrollable. It\'s getting worse and worse."',
      },
      {
        label: 'Pain on passive toe dorsiflexion — markedly worsened; pulls away sharply',
        quote: '"Ow — yes! Just doing that makes it so much worse. Please stop." [flinches and pulls away]',
      },
      {
        label: 'Sensation — numbness and tingling in first web space (deep peroneal nerve territory); onset ~1 hour ago',
        quote: '"The top of my foot feels tingly and numb — particularly the bit between my big toe and the next toe. It started about an hour ago."',
      },
      {
        label: 'Power — toe extension weak; movement extremely painful',
        quote: '"I can move them a tiny bit but it hurts terribly and they feel weak. I can\'t lift them properly."',
      },
      {
        label: 'Cast tightness — noticed extreme tightness ~1 hour after application; reported to nurse',
        quote: '"Yes — the plaster feels extremely tight. It started feeling tight maybe an hour after they put it on. I told the nurse but she said swelling after a fracture was normal."',
      },
      {
        label: 'Mechanism — high-energy RTC at speed; car pulled out; went over bonnet; regained consciousness in A&E',
        quote: '"A car pulled out right in front of me — I had no time to brake. I went straight over the bonnet. I don\'t remember much after that until I woke up in A&E."',
      },
      {
        label: 'Urinary output — has not voided since admission; needs to go now',
        quote: '"I haven\'t been to the toilet since I came in — no one brought me a bottle. I feel like I need to go, actually."',
      },
    ],
    pastMedicalHistory: [
      { label: 'No significant past medical history', quote: '"I\'m completely fit and healthy — no medical problems, not on any medication."' },
    ],
    drugHistory: [
      { label: 'No regular medications; no known allergies', quote: '"Nothing. No tablets." – "None that I know of."' },
    ],
    familyHistory: [],
    socialHistory: [
      { label: 'Construction worker (25); recreational cocaine 2 nights ago (embarrassed, only if asked)', quote: '"I had some at a party two nights ago." [very embarrassed; only if directly asked]' },
      { label: 'Smoker — approximately 10 cigarettes per day', quote: '[Only if directly asked]' },
    ],
    importantNegatives: [
      'No foot pallor or mottling ("My foot looks the same colour as normal — not white or blue.")',
      'No loss of pedal pulses ("It feels like my pulse is still there in my foot — I can feel it throbbing.")',
      'No other significant injuries ("They said it was just the leg — nothing else broken, no head injury.")',
      'No vascular disease or peripheral vascular disease ("Nothing wrong with my circulation before tonight.")',
      'No allergies ("None that I know of.")',
    ],
    ice: {
      ideas:
        '"I thought the pain was just from the fracture, but now I\'m not sure — this feels completely different. Something is wrong inside my leg."',
      concerns:
        '"Am I going to lose my leg? Why isn\'t the morphine working? Something must be going wrong."',
      expectations:
        '"I need you to do something right now — I can\'t cope with this. I don\'t care what it is, just make it stop."',
    },
    onlyIfDirectlyAsked: [
      'Recreational drug use — cocaine two nights ago: "I had some at a party two nights ago" — relevant to vasospasm and rhabdomyolysis risk; very embarrassed to volunteer this',
      'Smoking — approximately 10 cigarettes per day',
    ],
    behaviourNotes: [
      'Clearly in severe, escalating pain throughout — does not settle with reassurance, visibly distressed',
      'Winces and pulls away sharply when passive dorsiflexion of the toes is attempted — student must note this reaction',
      'Anxious and frightened: "Is something going wrong with my leg? Why isn\'t the morphine working?"',
      'Asks "Am I going to lose my leg?" — needs a calm, action-focused response',
      'Becomes more cooperative when he senses the doctor is taking him seriously and acting immediately',
    ],
  },
  markScheme: [
    {
      domain: 'Opening the consultation',
      items: [
        { description: 'Introduces themselves with name and role; acknowledges the patient is in significant pain', marks: 1 },
        { description: 'Confirms the patient\'s name and date of birth', marks: 1 },
        { description: 'Briefly explains the purpose of the assessment and gains cooperation to proceed', marks: 1 },
      ],
    },
    {
      domain: 'Presenting complaint',
      items: [
        { description: 'Invites the patient to describe the pain and how it has changed since admission', marks: 1 },
      ],
    },
    {
      domain: 'History — pain characterisation',
      items: [
        { description: 'Elicits change in pain character — burning or pressure sensation distinct from the original fracture pain', marks: 2 },
        { description: 'Establishes that pain is disproportionate to the injury and unresponsive to PCA morphine', marks: 2 },
        { description: 'Performs or asks about passive stretch of the toes — notes marked pain on passive dorsiflexion', marks: 2 },
      ],
    },
    {
      domain: 'History — neurovascular assessment',
      items: [
        { description: 'Asks about altered sensation in the foot — identifies numbness/tingling in first web space (deep peroneal nerve territory)', marks: 2 },
        { description: 'Asks about power — ability to move toes and ankle (weakness of toe extension = anterior compartment)', marks: 1 },
        { description: 'Asks about or assesses peripheral perfusion — colour, capillary refill, pulse (may still be present in early compartment syndrome)', marks: 1 },
      ],
    },
    {
      domain: 'History — cast and contextual factors',
      items: [
        { description: 'Asks about tightness of the cast and when this was first noticed', marks: 1 },
        { description: 'Recognises high-energy mechanism (RTC at speed) as a significant risk factor for compartment syndrome', marks: 1 },
      ],
    },
    {
      domain: 'ICE — ideas, concerns and expectations',
      items: [
        { description: 'Validates the patient\'s sense that something is wrong — takes his concern seriously', marks: 1 },
        { description: 'Addresses his concern about losing his leg — honest, action-focused response', marks: 1 },
      ],
    },
    {
      domain: 'Past medical, drug and social history',
      items: [
        { description: 'Confirms no relevant past medical history or regular medications', marks: 1 },
      ],
    },
    {
      domain: 'Working diagnosis and immediate management',
      items: [
        { description: 'States working diagnosis of acute compartment syndrome', marks: 2 },
        { description: 'Explains significance to the patient — irreversible muscle and nerve damage within hours if untreated', marks: 1 },
        { description: 'Bivalves (splits) the cast immediately down to the skin to relieve extrinsic compression', marks: 2 },
        { description: 'Positions limb at heart level — not elevated (elevation reduces arterial perfusion pressure)', marks: 2 },
        { description: 'Escalates immediately to on-call orthopaedic registrar or consultant', marks: 1 },
        { description: 'States definitive treatment — emergency 4-compartment fasciotomy of the lower leg', marks: 2 },
        { description: 'Mentions urinary catheter for hourly output monitoring; IV fluids; awareness of rhabdomyolysis risk', marks: 1 },
      ],
    },
    {
      domain: 'Closing the consultation',
      items: [
        { description: 'Explains the immediate next steps to the patient clearly and reassures him that help is coming', marks: 1 },
        { description: 'Documents findings, time of assessment, and escalation in the notes', marks: 1 },
      ],
    },
    {
      domain: 'Communication skills',
      items: [
        { description: 'Takes the patient\'s pain and distress seriously from the outset — does not dismiss or minimise', marks: 1 },
        { description: 'Explains actions clearly and quickly — maintains calm while conveying urgency', marks: 1 },
        { description: 'Avoids lengthy explanation before acting — treats this as an emergency from the start', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Summarises: Tom Carter is a 25-year-old with a closed right tibial shaft fracture sustained in a high-energy RTC, now 6 hours post-backslab application, presenting with escalating pain that is out of proportion to injury, burning in character, and completely unresponsive to PCA morphine',
    'States the clinical features consistent with acute compartment syndrome: pain out of proportion (10/10, burning/pressure), marked worsening on passive toe dorsiflexion, paraesthesia in the first web space (deep peroneal nerve — anterior compartment), and progressive toe weakness',
    'States this is an orthopaedic emergency — irreversible muscle and nerve ischaemia begins within 6–8 hours; any further delay risks Volkmann\'s contracture or loss of limb',
    'Immediate actions taken: bivalve the cast down to skin; position limb at heart level (not elevated); establish IV access; call the on-call orthopaedic registrar immediately',
    'Definitive treatment: emergency 4-compartment fasciotomy via two incisions — releases anterior, lateral, superficial and deep posterior compartments',
    'Escalation: on-call registrar/consultant alerted; theatre team informed; urinary catheter inserted for hourly output monitoring; IV fluid resuscitation; creatinine and CK monitored for rhabdomyolysis',
    'All findings, time of assessment, escalation calls, and actions documented clearly in the notes',
  ],
  vivaQuestions: [
    {
      question: 'What are the clinical features of acute compartment syndrome?',
      keyPoints: [
        'Pain out of proportion to injury: severe, escalating, unresponsive to analgesia — the earliest and most reliable feature',
        'Pain on passive stretch: passively stretching muscles in the affected compartment reproduces or worsens pain — the most specific early sign',
        'Pressure: tense, woody firmness of the compartment on palpation',
        'Paraesthesia: tingling or numbness in the cutaneous territory of nerves within the compartment — indicates early nerve ischaemia',
        'Paralysis: weakness of muscles within the compartment — a later sign indicating significant ischaemia',
        'Pallor and pulselessness: very late signs — pulses may remain present in early and moderate compartment syndrome',
      ],
      source: 'McQueen MM & Court-Brown CM, JBJS Br 1996; OHCM 10th ed., Ch. 12',
    },
    {
      question: 'What are the pressure thresholds for fasciotomy in compartment syndrome?',
      keyPoints: [
        'Absolute threshold: fasciotomy indicated when compartment pressure exceeds 30 mmHg',
        'Delta pressure (ΔP = diastolic BP − compartment pressure): fasciotomy indicated when ΔP <30 mmHg — more physiologically meaningful as it accounts for individual perfusion pressure',
        'Example: diastolic BP 60 mmHg, compartment pressure 35 mmHg → ΔP = 25 mmHg → fasciotomy indicated',
        'Stryker device used for intracompartmental pressure measurement — all four compartments should be measured',
        'In a convincing clinical picture, do not delay fasciotomy to obtain pressure measurements',
      ],
      source: 'McQueen MM & Court-Brown CM, JBJS Br 1996; BOA/BAPRAS Open Fracture Guidelines 2020',
    },
    {
      question: 'Describe the four compartments of the lower leg and the two-incision fasciotomy technique.',
      keyPoints: [
        'Four compartments: anterior (tibialis anterior, EHL, EDL, deep peroneal nerve), lateral (peronei, superficial peroneal nerve), superficial posterior (gastrocnemius, soleus), deep posterior (FHL, FDL, tibialis posterior, posterior tibial bundle)',
        'Lateral incision (anterolateral): decompresses anterior and lateral compartments',
        'Medial incision: decompresses superficial and deep posterior compartments; must be ≥2 cm posterior to the tibial border to protect the saphenous vein and nerve',
        'Fasciotomy wounds are left open — closed secondarily at 48–72 hours or with split-skin grafts if primary closure is not possible',
        'Skin and fascia must both be fully divided — skin closure alone is insufficient',
      ],
      source: 'BOA/BAPRAS Open Fracture Guidelines 2020; Rockwood & Green\'s Fractures, 9th ed.',
    },
    {
      question: 'What are the consequences of delayed or missed compartment syndrome?',
      keyPoints: [
        'Irreversible ischaemic necrosis of muscle and peripheral nerve begins within 6–8 hours of raised compartment pressure',
        'Volkmann\'s ischaemic contracture: fixed flexion deformity of the foot and ankle due to fibrosis of ischaemic muscle in the posterior compartment',
        'Permanent nerve damage: foot drop (deep peroneal nerve) or sensory loss in the affected territory',
        'Rhabdomyolysis: myoglobin release → acute tubular necrosis → AKI — monitor urine (myoglobinuria = cola-coloured urine), creatinine, and CK; treat with aggressive IV fluid resuscitation',
        'Missed compartment syndrome is one of the most common causes of orthopaedic litigation in the UK',
      ],
      source: 'Bhatt RA & Richards AM, Injury 2012; MDU UK Orthopaedic Litigation Report 2019',
    },
  ],
};

const shoulderRotatorCuffMockExam: MockExamStation = {
  id: 'ortho_shoulder_rotator_cuff',
  title: 'Shoulder Pain — History and Examination',
  diagnosis: 'Full-thickness supraspinatus tear — rotator cuff tear',
  specialtyId: 'orthopaedics',
  candidateBrief: {
    setting: 'You are an FY2 doctor in an orthopaedic outpatient clinic.',
    scenario: 'Brian Collins, 61, a farmer, has been referred by his GP with a 6-month history of right shoulder pain and progressive weakness. He is right-handed.',
    tasks: [
      'Take a focused history and perform a targeted shoulder examination',
      'Explain your working diagnosis and management plan to the patient',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'Brian Collins',
    age: 61,
    occupation: 'Farmer (arable and livestock)',
    openingLine: '"Hello doctor. This shoulder has been giving me grief for months now. It\'s getting worse and I can\'t do half the things I need to do on the farm."',
    socrates: [
      {
        label: 'Site',
        descriptor: 'right shoulder, lateral deltoid region — not neck, not below elbow',
        quotes: ['"It\'s right here — the top and outside of the shoulder." [points to lateral deltoid region] "Not in my neck. Not really down the arm, mainly just here."'],
      },
      {
        label: 'Onset',
        descriptor: 'insidious onset 6 months ago; acute-on-chronic worsening after heavy lifting (hay bales) 3 months ago',
        quotes: ['"It crept up on me over last summer — I can\'t pinpoint an exact day." – "But 3 months ago I was lifting heavy hay bales and it got much, much worse after that." – "No single injury as such. It built up."'],
      },
      {
        label: 'Character',
        descriptor: 'dull aching at rest; sharp on movement, especially overhead or reaching behind back',
        quotes: ['"At rest it\'s a dull ache — always there in the background." – "When I try to lift my arm up or reach for something above my head, it goes very sharp." – "Reaching behind my back to do my jacket up is the worst."'],
      },
      {
        label: 'Radiation',
        descriptor: 'radiates into lateral upper arm to elbow; not below elbow; no neurological symptoms',
        quotes: ['"It goes down the outside of my arm — to about here." [points to lateral upper arm, elbow level] "Not further than that." – "No tingling or pins and needles in my hand."'],
      },
      {
        label: 'Associated symptoms',
        descriptor: 'night pain waking from sleep; cannot lie on right side; progressive weakness — cannot abduct above shoulder height',
        quotes: ['"The night is the worst. I wake up at about 3 in the morning in pain. I cannot lie on this side at all." – "And it\'s getting weaker — I can\'t lift things above my shoulder height anymore. I used to be able to throw a bale."'],
      },
      {
        label: 'Timing',
        descriptor: 'constant background ache; 6-month duration; no improvement; worsening trend',
        quotes: ['"It\'s there all the time — not just when I use it." – "It hasn\'t got any better. If anything it\'s worse than it was 6 months ago."'],
      },
      {
        label: 'Exacerbating and relieving',
        descriptor: 'worse: overhead activity, reaching behind back, lying on right side; partially relieved by ibuprofen and rest',
        quotes: ['"Anything above my head is terrible. Reaching for something on a high shelf. Lying on it." – "Ibuprofen helps a bit. Resting helps. But I can\'t rest on a farm."'],
      },
      {
        label: 'Severity',
        descriptor: '7/10 on lifting; 4/10 at rest; disrupting sleep and limiting work capacity',
        quotes: ['"At its worst — lifting something — it\'s about a 7 out of 10." – "At rest it\'s more like a 4, always there." – "I\'m losing sleep over it and I\'m slowing down at work. My wife\'s taken on tasks she shouldn\'t have to."'],
      },
    ],
    historyOfPresentingComplaint: [
      {
        label: 'Examination: inspection — no wasting; no deformity; no swelling; guarding of right arm',
        quote: '[Actor at rest]: no visible muscle wasting of deltoid or supraspinatus fossa; no bony deformity; no swelling; holds right arm slightly close to the body (guarding). Right shoulder contour symmetric with left.',
      },
      {
        label: 'Examination: palpation — tender at greater tuberosity and subacromial bursa; AC joint non-tender',
        quote: '[When palpated]: tender at the greater tuberosity of the humerus and in the subacromial space just below the anterior acromion. No tenderness at the AC joint or along the clavicle.',
      },
      {
        label: 'Examination: active ROM — abduction limited to 80°; forward flexion to 100°; external rotation reduced',
        quote: '[When active ROM tested]: abduction stops at approximately 80° due to pain and weakness; forward flexion reaches 100°; external rotation visibly reduced compared with left side.',
      },
      {
        label: 'Examination: passive ROM — near-full passive range (distinguishes from adhesive capsulitis)',
        quote: '[When passive ROM tested]: near-full range achieved passively with mild end-range discomfort; passive abduction approaches 160°. [This distinguishes from frozen shoulder where passive range is also restricted.]',
      },
      {
        label: 'Examination: painful arc — positive; pain between 60° and 120° of abduction, resolving above 120°',
        quote: '[When painful arc tested]: pain clearly provoked between 60° and 120° of abduction — actor grimaces. Pain resolves above 120°. "Yes — that\'s the sore range right there."',
      },
      {
        label: 'Examination: strength — abduction markedly weak (0–1/5 right); cannot initiate against gravity; left 5/5',
        quote: '[When abduction strength tested against resistance]: cannot abduct right arm against any resistance; can barely initiate the movement even without resistance. Left arm full power (5/5).',
      },
      {
        label: 'Examination: Neer\'s impingement sign — positive',
        quote: '[When Neer\'s test performed — scapula stabilised, arm passively forward-flexed in internal rotation]: positive — pain reproduced at approximately 90°. "Yes — that\'s it exactly."',
      },
      {
        label: 'Examination: Hawkins-Kennedy test — positive',
        quote: '[When Hawkins-Kennedy performed — arm at 90° flexion, examiner internally rotates]: positive — pain reproduced. "That hurts — yes."',
      },
      {
        label: 'Examination: empty can test (Jobe\'s) — positive; marked pain and weakness',
        quote: '[When empty can test performed — arm at 90° abduction, 30° forward flexion, thumb down, downward pressure]: markedly weak and painful; cannot maintain position against any resistance. "I can\'t hold it at all — it just gives way."',
      },
      {
        label: 'Examination: Gerber\'s lift-off — negative (subscapularis intact)',
        quote: '[When Gerber\'s lift-off tested — hand placed on lower back, asked to push away against resistance]: can perform normally — subscapularis intact. No pain or weakness.',
      },
    ],
    pastMedicalHistory: [
      { label: 'Type 2 diabetes — diet-controlled', quote: '"I have diabetes — diet-controlled. No tablets for it at the moment."' },
      { label: 'No previous shoulder surgery or significant shoulder injury', quote: '"No operations on this shoulder. I\'ve knocked it about over the years on the farm but nothing serious before."' },
    ],
    drugHistory: [
      { label: 'Ibuprofen 400 mg three times daily (GP prescribed)', quote: '"Ibuprofen — 400 mg three times a day with meals. My GP gave me that for the shoulder."' },
      { label: 'No other regular medications; no known allergies', quote: '"Nothing else regular. No allergies."' },
    ],
    familyHistory: [
      { label: 'No family history of shoulder problems or inflammatory arthritis', quote: '"No — none of the family have had anything like this as far as I know."' },
    ],
    socialHistory: [
      { label: 'Farmer (arable and livestock); heavy overhead and lifting demands; right-handed dominant arm affected', quote: '"I\'ve been farming all my life — 200 acres, arable and sheep. A lot of heavy lifting and overhead work." – "I\'m right-handed, so this is my dominant arm."' },
      { label: 'Married; wife now helping with tasks he previously managed alone', quote: '"My wife\'s been doing more than she should have to. I\'m not happy about that at all."' },
      { label: 'Non-smoker; alcohol 10 units/week (weekends)', quote: '"I don\'t smoke. I have a few pints at the weekend — maybe 10 units."' },
    ],
    importantNegatives: [
      'No neck pain or cervical symptoms ("My neck is fine.")',
      'No pins and needles or numbness in hand ("No tingling — my hand feels completely normal.")',
      'No bilateral symptoms — left shoulder entirely normal ("Left shoulder is completely fine.")',
      'No systemic symptoms — no weight loss, fever, or night sweats ("Nothing like that — just the shoulder.")',
      'No history of shoulder dislocation ("It\'s never come out of the socket.")',
    ],
    ice: {
      ideas: '"I think I\'ve probably torn something. My neighbour had the same — had an operation in the end. Is that what I\'ve done?"',
      concerns: '"I\'m worried it\'s going to need surgery. I can\'t afford to be off the farm for months — harvest is in 8 weeks."',
      expectations: '"I want to know what\'s wrong and what needs to happen. And if there\'s anything that can buy me some time until after harvest."',
    },
    onlyIfDirectlyAsked: [
      'Whether he has had physiotherapy — GP mentioned it but not yet referred; open to it if recommended',
      'Whether he has had a steroid injection — not yet; open to trying if it would help',
      'Sleep impact — wakes at approximately 3 am most nights; significant disruption for 3 months',
    ],
    behaviourNotes: [
      'Stoic and practical — a farmer who does not visit the doctor unless necessary; minimises symptoms initially',
      'Responds well to a clear anatomical explanation and a structured plan — wants to understand what has happened',
      'The harvest deadline is his primary concern — acknowledge it explicitly and incorporate it into the management discussion',
      'Asks "Will I need an operation?" — student should explain that most tears are managed conservatively first but a full-thickness tear with significant weakness may ultimately require surgical referral; be honest',
      'If the student dismisses the harvest concern or says "just rest it", Brian will look sceptical: "Doctor, I run a 200-acre farm. I can\'t just rest."',
    ],
  },
  markScheme: [
    {
      domain: 'Opening the consultation',
      items: [
        { description: 'Washes hands and introduces themselves; confirms patient\'s identity and gains consent', marks: 1 },
        { description: 'Uses an open question to invite the patient to describe the presenting complaint', marks: 1 },
      ],
    },
    {
      domain: 'History — SOCRATES',
      items: [
        { description: 'Establishes site (lateral shoulder), onset (insidious with acute-on-chronic exacerbation), and character (aching at rest, sharp on movement)', marks: 1 },
        { description: 'Asks about night pain — identifies waking from sleep and inability to lie on the shoulder (highly suggestive of rotator cuff pathology)', marks: 2 },
        { description: 'Identifies progressive weakness — unable to abduct above shoulder height; degree of weakness suggests full-thickness tear rather than impingement alone', marks: 2 },
        { description: 'Asks about radiation and neurological symptoms — excludes cervical radiculopathy pattern', marks: 1 },
      ],
    },
    {
      domain: 'Shoulder examination — inspection and palpation',
      items: [
        { description: 'Inspects from front, side, and behind — notes absence of wasting, guarding posture', marks: 1 },
        { description: 'Palpates bony landmarks (greater tuberosity, AC joint) and subacromial space — identifies point tenderness in subacromial region', marks: 1 },
      ],
    },
    {
      domain: 'Shoulder examination — movement',
      items: [
        { description: 'Tests active and passive ROM and identifies the discrepancy — passive near-full, active limited (impingement/tear pattern, not frozen shoulder)', marks: 2 },
        { description: 'Identifies a positive painful arc (60–120° of abduction)', marks: 1 },
        { description: 'Tests abduction strength and identifies severe weakness (0–1/5) — distinguishes full-thickness tear from impingement alone', marks: 2 },
      ],
    },
    {
      domain: 'Shoulder examination — special tests',
      items: [
        { description: 'Performs Neer\'s impingement sign and identifies a positive result', marks: 1 },
        { description: 'Performs Hawkins-Kennedy test and identifies a positive result', marks: 1 },
        { description: 'Performs empty can (Jobe\'s) test and identifies marked pain and weakness — consistent with supraspinatus tear', marks: 2 },
        { description: 'Performs Gerber\'s lift-off test and correctly identifies a normal result (subscapularis intact)', marks: 1 },
      ],
    },
    {
      domain: 'ICE and closing',
      items: [
        { description: 'Explores ICE — specifically acknowledges the harvest deadline and incorporates it into the plan', marks: 1 },
        { description: 'Summarises findings and working diagnosis; explains investigation (MRI) and management plan', marks: 1 },
      ],
    },
    {
      domain: 'Key communication skills',
      items: [
        { description: 'Active listening — acknowledges the patient\'s occupational concerns and adapts the discussion accordingly', marks: 1 },
        { description: 'Summarising — presents findings and plan in a structured, accessible way', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Mr Collins is a 61-year-old right-handed farmer with a 6-month history of right shoulder pain and progressive weakness, with an acute-on-chronic exacerbation after heavy lifting 3 months ago — consistent with a full-thickness supraspinatus tear',
    'Key history features: night pain (waking at 3 am), inability to lie on the right shoulder, and progressive loss of abduction above shoulder height — this triad is highly suggestive of significant rotator cuff pathology',
    'Examination: positive painful arc (60–120°); active abduction limited to 80°; passive range near-full — confirms subacromial pathology rather than glenohumeral or capsular disease',
    'Strength testing: severe weakness of abduction (0–1/5) — the degree of weakness exceeds what pain inhibition alone can explain, indicating a structural full-thickness tear',
    'Special tests: Neer\'s positive; Hawkins-Kennedy positive; empty can (Jobe\'s) positive for supraspinatus; Gerber\'s lift-off negative (subscapularis intact)',
    'Investigation: MRI shoulder (gold standard to characterise tear size, retraction, and muscle atrophy)',
    'Management: regular analgesia (NSAIDs, paracetamol); subacromial corticosteroid injection for symptom relief; physiotherapy (rotator cuff rehabilitation); if conservative management fails — referral for surgical opinion (arthroscopic rotator cuff repair)',
  ],
  vivaQuestions: [
    {
      question: 'What is the anatomy of the rotator cuff, and which tendons are most commonly torn?',
      keyPoints: [
        'Rotator cuff = SITS: Supraspinatus (initiates abduction above 15°), Infraspinatus (external rotation), Teres minor (external rotation), Subscapularis (internal rotation)',
        'Supraspinatus is most commonly torn — it runs in the supraspinatus outlet beneath the acromion; vulnerable to impingement with repetitive overhead activity and age-related degeneration',
        'The "critical zone" — ~1 cm proximal to the insertion at the greater tuberosity — is the watershed area with the poorest blood supply, predisposing to degenerative tearing',
        'Full-thickness tears allow communication between the glenohumeral joint and subacromial bursa — demonstrated on MRI arthrogram or ultrasound',
        'Tear spectrum: partial thickness → full-thickness → massive tear (involving ≥2 tendons); progressive weakness of abduction is the hallmark of a full-thickness tear',
      ],
      source: 'OHCM 10th ed., Ch.11; Neer CS II, Clin Orthop 1983',
    },
    {
      question: 'What special tests assess rotator cuff function and what does each test specifically?',
      keyPoints: [
        'Empty can (Jobe\'s): arm at 90° abduction, 30° forward flexion, thumb down; downward pressure — pain/weakness indicates supraspinatus pathology; sensitivity ~70%, specificity ~70%',
        'Neer\'s impingement sign: scapula stabilised, arm passively forward-flexed in internal rotation — pain indicates supraspinatus/bursa impingement under the coracoacromial arch; sensitivity ~72%',
        'Hawkins-Kennedy: arm at 90° flexion, examiner internally rotates — pain indicates impingement against the coracoacromial ligament; sensitivity ~79%',
        'Gerber\'s lift-off: hand on lower back, lift away against resistance — weakness indicates subscapularis tear',
        'External rotation lag sign: arm passively externally rotated then released — lag (failure to maintain position) indicates infraspinatus or teres minor tear',
      ],
      source: 'Geekymedics.com (Shoulder Examination); Hegedus EJ et al., Br J Sports Med 2008',
    },
    {
      question: 'How are rotator cuff tears managed, and what are the indications for surgical referral?',
      keyPoints: [
        'Conservative first-line: regular analgesia (NSAIDs, paracetamol), physiotherapy (rotator cuff strengthening, scapular stabilisation, posture correction), activity modification',
        'Subacromial corticosteroid injection: short-term (6–12 weeks) symptom relief; maximum 3 injections/year; ultrasound guidance improves accuracy; does not promote tendon healing',
        'MRI shoulder: gold standard — characterises tear size, retraction, and degree of muscle atrophy (Goutallier fatty infiltration grade); guides surgical planning',
        'Surgical indications: failure of 3–6 months conservative management; acute full-thickness tear in active patient with significant functional deficit; young patient with traumatic tear',
        'Arthroscopic rotator cuff repair (primary surgical technique); massive irreparable tears — debridement, biceps tenotomy, or reverse shoulder arthroplasty in older patients',
      ],
      source: 'NICE CKS Shoulder pain (updated 2023); British Elbow and Shoulder Society (BESS) guidelines',
    },
  ],
};

const psoriticArthritisMockExam: MockExamStation = {
  id: 'ortho_psoriatic_arthritis',
  title: 'Rheumatology Consultation — Psoriatic Arthritis: Image Interpretation and Management',
  diagnosis: 'Psoriatic arthritis — polyarticular, with nail psoriasis',
  specialtyId: 'orthopaedics',
  candidateBrief: {
    setting: 'You are an FY1 in a rheumatology outpatient clinic.',
    scenario:
      'Marcus Allen, 38, has a 6-year history of plaque psoriasis and has been referred by his GP with a 9-month history of joint pain and swelling. He has had inflammatory markers taken (CRP 34 mg/L, ESR 52 mm/hr). Two images of his nails have been placed on the desk. Please review the images and then speak with Marcus about the diagnosis and management options.',
    tasks: [
      'Describe the nail changes visible in the images to the examiner',
      'Discuss the diagnosis and management plan with Marcus',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'Marcus Allen',
    age: 38,
    occupation: 'Self-employed builder',
    openingLine:
      '"My joints have been getting worse and worse. I\'ve had the skin thing for years but now my fingers and toes are swollen and stiff in the mornings. It\'s affecting my work." [frustrated, rubbing swollen DIP joints]',
    historyOfPresentingComplaint: [
      {
        label: 'Joint symptoms — 9 months; asymmetric; mainly DIP and MCP joints of hands and feet; morning stiffness >1 hour; swollen "sausage" right index finger (dactylitis)',
        quote: '"It\'s mainly my fingers and toes. The stiffness in the morning is awful — it takes over an hour to get going." – "This finger" [points to right index] "has been swollen like a sausage for 2 months now."',
      },
      {
        label: 'Nail changes — pitting, ridging, onycholysis (nail lifting from bed) on examination image; patient aware of nail changes but thought they were part of the psoriasis',
        quote: '"My nails have been a mess for years. I just thought it was the skin thing." – "They\'re pitted and some are lifting off."',
      },
      {
        label: 'Psoriasis — plaque psoriasis on elbows and lower back for 6 years; managed with topical steroids and emollients',
        quote: '"I\'ve had the skin patches for 6 years — elbows, lower back mainly. I use creams for it." – "My dermatologist said it was well controlled on the creams."',
      },
      {
        label: 'Functional impact — cannot grip tools properly; losing days of work; significant income concern',
        quote: '"I can\'t grip properly. I\'m losing money because I can\'t work some days." – "Being self-employed, I can\'t afford to take sick days."',
      },
    ],
    pastMedicalHistory: [
      { label: 'Plaque psoriasis — 6 years; no previous joint problems', quote: '"Just the psoriasis. Nothing else." [if asked]' },
    ],
    drugHistory: [
      { label: 'Topical steroids (betamethasone valerate) and emollients for psoriasis', quote: '"Steroid cream and moisturiser for the skin."' },
      { label: 'Ibuprofen 400 mg PRN for joint pain — partial relief only', quote: '"I take ibuprofen but it only takes the edge off."' },
      { label: 'No known drug allergies', quote: '"No allergies."' },
    ],
    familyHistory: [
      { label: 'Father — plaque psoriasis; no family history of arthritis known', quote: '"My dad has the skin thing too." [if asked]' },
    ],
    socialHistory: [
      { label: 'Smokes 10/day; drinks approximately 14 units/week', quote: '"I smoke about 10 a day. I drink — probably 14 units a week." [if asked]' },
      { label: 'Self-employed builder; job involves heavy grip and fine motor work', quote: '"I build — so I need my hands. It\'s my livelihood."' },
    ],
    importantNegatives: [
      'No eye symptoms — no uveitis ("My eyes have been fine.")',
      'No spinal pain or sacroiliac symptoms ("My back psoriasis is there but no back pain.")',
      'No IBD symptoms — no diarrhoea, rectal bleeding ("No.")',
      'No recent infection or preceding sore throat before joint onset ("Nothing like that.")',
      'Negative RF and anti-CCP (provided by examiner if asked — differentiates from RA)',
    ],
    ice: {
      ideas: '"I thought maybe my psoriasis had spread to my joints. I\'ve read a little about that."',
      concerns: '"I\'m worried about whether I\'ll be able to keep working. I can\'t afford not to."',
      expectations: '"I want to know what\'s happening and what the treatment options are — especially anything that won\'t make me too tired to work."',
    },
    onlyIfDirectlyAsked: [
      'Eye check-up — "I haven\'t had one in a few years."',
      'RF and anti-CCP — [Examiner provides]: "RF negative, anti-CCP negative." [confirms sero-negative inflammatory arthritis]',
    ],
    behaviourNotes: [
      'Frustrated by the impact on his income; not distressed but clearly stressed',
      'Very receptive to information about biologics when the student explains they can treat both skin and joints simultaneously',
      'Asks "Will the treatment cure it?" — student should explain that PsA is a chronic condition but treatment can achieve remission and prevent joint damage',
      'Asks about methotrexate — "I\'ve heard that can affect your liver. I like a drink." — student should address this honestly and note alcohol should be minimised on methotrexate',
    ],
  },
  markScheme: [
    {
      domain: 'Image description to examiner',
      items: [
        { description: 'Describes nail pitting — multiple punctate depressions on the nail plate surface (most specific nail sign of psoriasis)', marks: 1 },
        { description: 'Describes onycholysis — separation of the distal nail plate from the nail bed (oil-drop sign if subungual discolouration present)', marks: 1 },
        { description: 'Correctly identifies these as nail psoriasis changes, not onychomycosis', marks: 1 },
      ],
    },
    {
      domain: 'History of presenting complaint',
      items: [
        { description: 'Establishes inflammatory arthritis features: morning stiffness >1 hour, bilateral involvement, elevated CRP/ESR', marks: 1 },
        { description: 'Identifies dactylitis ("sausage digit") — pathognomonic feature of psoriatic arthritis', marks: 2 },
        { description: 'Screens for enthesitis (tendon insertion pain — Achilles, plantar fascia)', marks: 1 },
        { description: 'Asks about axial involvement — spinal stiffness, sacroiliac pain (SpA component)', marks: 1 },
      ],
    },
    {
      domain: 'Confirming the diagnosis',
      items: [
        { description: 'States the likely diagnosis is psoriatic arthritis given: psoriasis + inflammatory seronegative arthritis + nail changes + dactylitis', marks: 1 },
        { description: 'Differentiates from RA: RF and anti-CCP negative; DIP joint involvement; nail changes; dactylitis — all features more consistent with PsA', marks: 1 },
      ],
    },
    {
      domain: 'Management discussion',
      items: [
        { description: 'Explains that NSAIDs can help symptoms but do not prevent joint damage', marks: 1 },
        { description: 'Discusses DMARDs: methotrexate first-line; addresses alcohol concern; mentions liver monitoring; alternative options (sulfasalazine, leflunomide)', marks: 1 },
        { description: 'Explains biologic therapy: TNF inhibitors (adalimumab, etanercept) or IL-17 inhibitors (secukinumab) — treat both skin and joints; used after DMARD failure or severe disease', marks: 1 },
        { description: 'Refers to rheumatology specialist for DMARD initiation; physiotherapy; occupational therapy for hand function', marks: 1 },
      ],
    },
    {
      domain: 'Screening',
      items: [
        { description: 'Recommends annual ophthalmology review for uveitis screening', marks: 1 },
        { description: 'Addresses cardiovascular risk: psoriasis and PsA carry increased CV risk; smoking cessation advice; lipid and BP check', marks: 1 },
      ],
    },
    {
      domain: 'Key communication skills',
      items: [
        { description: 'Addresses Marcus\'s occupational concerns; reassures that remission is achievable', marks: 1 },
        { description: 'Active listening; avoids jargon; summarises and signposts throughout', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Marcus is a 38-year-old builder with 6-year plaque psoriasis presenting with a 9-month history of inflammatory seronegative polyarthritis with DIP and MCP joint involvement, dactylitis (sausage right index finger), morning stiffness >1 hour, and elevated inflammatory markers (CRP 34, ESR 52)',
    'Nail images show nail pitting (multiple punctate depressions — most specific nail sign of psoriasis) and onycholysis (nail plate separation from bed); these are nail psoriasis changes, not onychomycosis',
    'Diagnosis: psoriatic arthritis — established psoriasis + seronegative inflammatory arthritis + nail changes + dactylitis (pathognomonic); RF and anti-CCP negative excludes RA',
    'Management: NSAIDs for symptom relief only; first-line DMARD: methotrexate 15–25 mg weekly + folic acid 5 mg weekly; alcohol minimisation required; LFTs monitored',
    'Biologic options if DMARD failure: TNF inhibitors (adalimumab, etanercept) or IL-17 inhibitors (secukinumab) — treat both skin disease and arthritis simultaneously; NICE-approved after 2 DMARD failures',
    'Additional monitoring: annual eye review (uveitis in ~25%); cardiovascular risk assessment (smoking cessation, lipids, BP — psoriasis carries ~50% increased CV risk); occupational therapy for hand splinting and ergonomic tools',
    'Prognosis: with DMARD therapy, most patients achieve low disease activity or remission; early treatment prevents irreversible joint damage',
  ],
  vivaQuestions: [
    {
      question: 'What are the five clinical subtypes of psoriatic arthritis?',
      keyPoints: [
        'Oligoarticular asymmetric (most common, ~50%): <5 joints; asymmetric; large and small joints; often includes DIP joints',
        'Polyarticular symmetric (~25%): >5 joints; resembles RA clinically but RF and anti-CCP negative; can cause joint erosion',
        'DIP predominant (~5%): isolated distal interphalangeal joint involvement; almost always accompanied by nail psoriasis',
        'Spondyloarthritis (~5%): sacroiliitis and spinal involvement; similar to ankylosing spondylitis; HLA-B27 associated',
        'Arthritis mutilans (<5%): most severe form; osteolysis of small bones; "telescoping" digits; opera-glass hand',
        'Clinical note: dactylitis (whole-digit sausage swelling — tenosynovitis + soft tissue oedema) and enthesitis (tenderness at tendon insertions) are seen across all subtypes and are pathognomonic features of PsA',
      ],
      source: 'Moll JM & Wright V (1973); GRAPPA PsA Treatment Recommendations (2021); geekymedics.com',
    },
    {
      question: 'What is the mechanism of action and key monitoring requirements for methotrexate?',
      keyPoints: [
        'Mechanism: folate antagonist — inhibits dihydrofolate reductase, reducing DNA synthesis and T-cell activation; anti-inflammatory independent of its anti-proliferative effect at low weekly doses',
        'Dose: 7.5–25 mg once weekly (oral or SC); co-prescribe folic acid 5 mg once weekly (different day) to reduce side effects',
        'Monitoring: FBC and LFTs at baseline, fortnightly for 3 months, then 3-monthly; chest X-ray at baseline (exclude pulmonary disease); calculate GFR (renal excretion)',
        'Hepatotoxicity: risk increased with alcohol (advise maximum 1–2 units/week or abstinence); liver biopsy if cumulative dose >1.5g or persistent LFT elevation',
        'Contraindications: pregnancy (teratogenic — class X; women must use reliable contraception; discontinue 3+ months before conception); breast-feeding; significant hepatic or renal impairment; active infection',
      ],
      source: 'BSR/BHPR Guidelines: Monitoring Methotrexate (2010 updated 2017); NICE NG65 (Psoriatic arthritis, 2017)',
    },
  ],
};

const kneeOaMockExam: MockExamStation = {
  id: 'ortho_knee_oa_xray',
  title: 'Orthopaedic Consultation — Knee Osteoarthritis: X-ray Interpretation and Management',
  diagnosis: 'Severe bilateral knee osteoarthritis — candidacy for total knee replacement',
  specialtyId: 'orthopaedics',
  candidateBrief: {
    setting: 'You are an FY1 in an orthopaedic outpatient clinic.',
    scenario:
      'Margaret Thompson, 68, has been referred with a 5-year history of bilateral knee pain that is significantly worsening. She walks with a stick and can only manage 100 metres before stopping in pain. Her BMI is 33. A weight-bearing AP radiograph of both knees has been placed on the desk. Please review the X-ray and then discuss the diagnosis and management with Mrs Thompson.',
    tasks: [
      'Describe the X-ray findings to the examiner',
      'Explain the diagnosis and management options to Mrs Thompson',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'Margaret Thompson',
    age: 68,
    occupation: 'Retired school dinner lady',
    openingLine:
      '"I can\'t carry on like this. My knees are terrible — I can barely get to the shops. I need something done." [walks with a stick, visible knee varus deformity, frustrated]',
    historyOfPresentingComplaint: [
      {
        label: 'Pain — bilateral; medial compartment worse; worse on weight bearing, stairs, and getting up from a chair; some rest pain at night',
        quote: '"Both knees — the inside is the worst. Getting up from a chair is agony." – "I wake up at night sometimes with the pain now."',
      },
      {
        label: 'Stiffness — <30 minutes morning stiffness (consistent with OA, not inflammatory)',
        quote: '"They\'re stiff in the morning — maybe 15 to 20 minutes. Then they ease off a bit."',
      },
      {
        label: 'Function — only 100 metres before stopping; needs a stick; can no longer use stairs without a rail; isolated at home',
        quote: '"I use my stick everywhere now. The stairs in my house are becoming a problem." – "I can\'t visit my grandchildren like I used to." [sad]',
      },
      {
        label: 'Previous treatment — physiotherapy, NSAIDs, knee injections ×2 (short-term relief only); none providing adequate long-term improvement',
        quote: '"I\'ve had physio. I\'ve had injections twice — the second one barely did anything." – "The anti-inflammatories upset my stomach."',
      },
      {
        label: 'Varus deformity — bow-legged appearance bilaterally (medial compartment loading)',
        quote: '[Examiner describes]: Bilateral varus knee deformity visible on standing examination.',
      },
    ],
    pastMedicalHistory: [
      { label: 'Hypertension — on amlodipine 5 mg; well controlled', quote: '"I have blood pressure — taking a tablet for it." [if asked]' },
      { label: 'T2DM — diet-controlled; last HbA1c 48 mmol/mol', quote: '"I have a touch of diabetes — they said I could control it with diet. It\'s been stable." [if asked]' },
      { label: 'No previous knee surgery', quote: '"I\'ve never had an operation on my knees."' },
    ],
    drugHistory: [
      { label: 'Amlodipine 5 mg OD; paracetamol 1 g QDS regularly; topical diclofenac gel to knees', quote: '"My blood pressure tablet, regular paracetamol, and some gel on the knees."' },
      { label: 'NSAIDs previously — stopped due to dyspepsia', quote: '"I tried ibuprofen tablets but they really upset my stomach." [if asked]' },
    ],
    familyHistory: [
      { label: 'Mother had knee replacements in her 70s', quote: '"My mum had her knees done when she was in her 70s. She said it was the best thing she ever did." [if asked]' },
    ],
    socialHistory: [
      { label: 'Lives alone in a first-floor flat; increasingly isolated due to mobility; family support available', quote: '"I live on my own on the first floor — there are stairs to get in." – "My daughter visits twice a week."' },
      { label: 'Non-smoker; minimal alcohol', quote: '"I don\'t smoke. I have a sherry at Christmas." [if asked]' },
      { label: 'BMI 33 — has tried to lose weight without sustained success', quote: '"I know I need to lose weight. I\'ve tried but it\'s hard when you can\'t exercise." [if mentioned]' },
    ],
    importantNegatives: [
      'No locking or giving way suggesting meniscal or ligamentous cause ("They sometimes feel weak but they don\'t give way suddenly.")',
      'No hot swollen joints suggesting acute inflammatory component ("They\'re not hot or swollen — just painful.")',
      'No fever or weight loss ("No.")',
      'No knee trauma or previous fractures ("No injuries.")',
    ],
    ice: {
      ideas: '"I know it\'s wear and tear — the joints are just worn out. I think I need new knees."',
      concerns: '"I\'m worried I\'ll be left housebound. And I\'m not sure about having a big operation at my age."',
      expectations: '"I want to know if I can have the operation and what the recovery is like."',
    },
    onlyIfDirectlyAsked: [
      'Whether she wants a knee replacement — "Yes — I\'ve talked to my daughter and we think it\'s time."',
      'Surgical anxiety — "I\'m a bit scared of anaesthetic. My husband died on the table 10 years ago." [student should acknowledge this sensitively]',
    ],
    behaviourNotes: [
      'Frustrated but compliant; clearly in pain and wants definitive management',
      'Visibly reassured when told TKR is appropriate and has good outcomes',
      'Mentions husband died under anaesthetic — student should acknowledge this fear sensitively without dismissing it',
      'Asks about recovery time — "How long will I be off my feet?" — student should explain: expect 6–12 weeks for walking independently; physiotherapy essential',
      'Asks "Will I need both done?" — student should explain staged bilateral (6–12 months apart) is standard; simultaneous bilateral has higher complication risk',
    ],
  },
  markScheme: [
    {
      domain: 'X-ray description to examiner',
      items: [
        { description: 'States: weight-bearing AP radiograph of both knees', marks: 1 },
        { description: 'Identifies joint space narrowing — predominantly medial compartments bilaterally (varus alignment)', marks: 1 },
        { description: 'Identifies subchondral sclerosis (increased bone density at articular surfaces)', marks: 1 },
        { description: 'Identifies osteophytes — bony spurs at joint margins (medial and lateral compartments)', marks: 1 },
        { description: 'Identifies subchondral cysts (if visible on image description)', marks: 1 },
        { description: 'Concludes: bilateral severe knee OA with medial compartment predominance and varus deformity', marks: 1 },
      ],
    },
    {
      domain: 'History and examination',
      items: [
        { description: 'Establishes functional limitation: walking distance 100 m, stair difficulty, social isolation', marks: 1 },
        { description: 'Confirms adequate trial of conservative management: physiotherapy, analgesia, injections — all tried and failed', marks: 1 },
      ],
    },
    {
      domain: 'Management discussion',
      items: [
        { description: 'Explains osteoarthritis in plain language: cartilage wear causing bone-on-bone contact; degenerative not inflammatory', marks: 1 },
        { description: 'Confirms that Mrs Thompson meets criteria for total knee replacement: functional impairment + failed conservative management + X-ray confirmation of severe OA', marks: 1 },
        { description: 'Describes total knee replacement: resurfacing of tibial and femoral articular surfaces; cemented prosthesis; expected 90%+ 10-year implant survival', marks: 1 },
        { description: 'Discusses staged bilateral approach (not simultaneous): right knee first given functional priority; left knee 6–12 months later', marks: 1 },
      ],
    },
    {
      domain: 'Pre-operative preparation',
      items: [
        { description: 'Addresses modifiable risk: weight loss reduces implant wear and anaesthetic risk; physiotherapy to strengthen quadriceps pre-operatively', marks: 1 },
        { description: 'Acknowledges anaesthetic concern about her husband; reassures about modern anaesthetic safety and pre-operative assessment; offers spinal anaesthetic option', marks: 1 },
      ],
    },
    {
      domain: 'Complications and recovery',
      items: [
        { description: 'Briefly mentions surgical risks: DVT/PE (prophylaxis with LMWH and TED stockings), infection, implant loosening; overall low major complication rate', marks: 1 },
        { description: 'Explains recovery: mobilising day 1 post-operatively; 6–12 weeks to independent walking; physiotherapy essential; full recovery 3–6 months', marks: 1 },
      ],
    },
    {
      domain: 'Key communication skills',
      items: [
        { description: 'Listens to Margaret\'s concerns about anaesthesia and addresses sensitively', marks: 1 },
        { description: 'Summarises and checks understanding; offers written information', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Mrs Thompson is a 68-year-old woman with bilateral severe knee osteoarthritis presenting with functional limitation (100 m walking distance, stair difficulty, social isolation) despite adequate conservative management',
    'X-ray findings: weight-bearing AP both knees — bilateral medial compartment joint space narrowing, subchondral sclerosis, osteophyte formation, and subchondral cyst formation consistent with severe OA; bilateral varus deformity',
    'Diagnosis confirmed: severe bilateral knee OA (Kellgren-Lawrence Grade III–IV) with failed conservative management — meets criteria for total knee replacement',
    'Management: total knee arthroplasty (TKA/TKR) — resurfacing of tibial and femoral articular surfaces; cemented prosthesis; 90%+ 10-year survival; staged bilateral approach recommended (right knee first, left 6–12 months later)',
    'Pre-operative optimisation: weight loss (BMI 33 — target <30); quadriceps strengthening; full pre-operative assessment including ECG, bloods; anaesthetic review given anaesthetic anxiety (spinal anaesthetic offered as option)',
    'Recovery: mobilising day 1; TED stockings and LMWH for DVT prophylaxis; physiotherapy critical; independent walking 6–12 weeks; full recovery 3–6 months; expected significant pain relief and functional improvement',
    'Risks discussed: DVT/PE, wound infection, implant loosening; overall complication rate low in a well-prepared patient; benefits substantially outweigh risks in this case',
  ],
  vivaQuestions: [
    {
      question: 'What are the four radiological features of osteoarthritis on plain X-ray?',
      keyPoints: [
        'Loss of joint space: represents cartilage thinning; asymmetric (medial > lateral in varus knee); weight-bearing views essential to demonstrate true cartilage loss',
        'Subchondral sclerosis: increased bone density at the articular surface (bone remodelling response to increased loading)',
        'Osteophytes: bony outgrowths at joint margins from periosteal proliferation; seen at medial and lateral tibial spines, femoral condyles, patella',
        'Subchondral cysts: fluid-filled defects in the subchondral bone; thought to arise from synovial fluid forced into bone or from bone infarcts',
        'Mnemonic LOSS: Loss of joint space, Osteophytes, Subchondral sclerosis, Subchondral cysts',
      ],
      source: 'OHCM 10th ed., Ch. 12; Kellgren JH & Lawrence JS (1957) — Kellgren-Lawrence grading system; geekymedics.com',
    },
    {
      question: 'What are the non-surgical management options for knee OA and when should surgery be considered?',
      keyPoints: [
        'NICE NG226 (2022): core treatments for all patients — therapeutic exercise (land or aquatic), weight loss if BMI >25, patient education; these are first-line regardless of severity',
        'Analgesia: paracetamol + topical NSAIDs first; oral NSAIDs (lowest dose, shortest duration, with PPI cover); avoid opioids for long-term OA management',
        'Intra-articular corticosteroid injection: short-term relief (4–12 weeks); maximum 3 per year in the same joint; useful for flares',
        'Consider hyaluronic acid injection (visco-supplementation): evidence weak; not routinely recommended by NICE but may help some patients',
        'Surgery: total knee replacement when pain and functional limitation are severe AND conservative management has failed; Oxford (unicompartmental) knee replacement for isolated medial or lateral OA in suitable patients',
      ],
      source: 'NICE NG226 (Osteoarthritis in over 16s: diagnosis and management, 2022)',
    },
  ],
};

export const ORTHO_MOCK_EXAMS: MockExamStation[] = [
  nofMockExam,
  kneeInjuryMockExam,
  caudaEquinaMockExam,
  compartmentMockExam,
  shoulderRotatorCuffMockExam,
  psoriticArthritisMockExam,
  kneeOaMockExam,
];
