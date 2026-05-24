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
    backgroundInfo:
      'Margaret is a sharp, articulate 80-year-old retired headmistress. She is used to being in control and is frightened. She fell getting up from her armchair — she felt something give way before she went down. She lived independently before tonight: indoors without any aids, outdoors with a walking stick. She manages all her own housework and cooking. She lives alone in a ground-floor flat; her daughter lives 10 minutes away and is on her way in. She takes warfarin for AF and is worried about the operation and whether she will go home again.',
    historyToReveal: [
      {
        topic: 'Presenting complaint',
        response:
          '"I was just standing up from my armchair to make a cup of tea. I felt something give in my hip as I stood — there was a sort of crack — and I went straight down. I couldn\'t get up at all."',
      },
      {
        topic: 'Pre-fall symptoms — onset and warning',
        response:
          '"No, I didn\'t feel dizzy or faint beforehand. It wasn\'t a trip — it wasn\'t the ground, it was something in the hip itself."',
      },
      {
        topic: 'Pain — site, severity, and response to analgesia',
        response:
          '"It\'s in my right hip and groin — dreadful, about 8 out of 10. The injection they gave me helped a little but any movement makes it much worse."',
      },
      {
        topic: 'Weight-bearing and time on the floor',
        response:
          '"I couldn\'t put any weight on it at all. I lay on the floor for about an hour before my neighbour heard me and called the ambulance."',
      },
      {
        topic: 'Pre-injury mobility',
        response:
          '"Before tonight I walked with a stick outdoors — to the shops and so on — but I was completely fine indoors without it. I do my own cooking, housework, everything."',
      },
      {
        topic: 'Living situation and social support',
        response:
          '"I live on my own in a ground-floor flat. My daughter lives about 10 minutes away — she\'s on her way in now."',
      },
      {
        topic: 'Previous falls',
        response:
          '"No, this is the first time I\'ve fallen. I\'ve never broken a bone before in my life."',
      },
      {
        topic: 'Past medical history — AF and hypertension',
        response:
          '"I have an irregular heartbeat — atrial fibrillation they call it — and high blood pressure. I have some arthritis in my knees but nothing serious."',
      },
      {
        topic: 'Medications and warfarin',
        response:
          '"I take warfarin for my heart, ramipril for blood pressure, and atorvastatin for cholesterol. I had my INR checked at the GP last Tuesday — it was 2.4, they said that was fine."',
      },
      {
        topic: 'Allergies',
        response: '"No, I\'m not allergic to anything as far as I know."',
      },
      {
        topic: 'Bone health and previous bone density',
        response:
          '"My GP mentioned a couple of years ago that my bones might be thinning and suggested a scan, but I never got around to having it done."',
      },
      {
        topic: 'Cognitive function',
        response:
          '"My memory is absolutely fine — my GP says I\'m sharper than most of her patients half my age."',
      },
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
    backgroundInfo:
      'James is a 22-year-old final-year law student who plays university-level rugby three times a week and five-a-side football at weekends. Sport is central to his life. He went down immediately on the pitch, heard the pop, and the knee swelled rapidly. He is devastated at the prospect of missing sport and worried about his upcoming law firm training contract — he needs to get around. He is also engaged and his wedding is in 4 months. He cannot fully straighten the knee; it locks if he tries. He has no previous knee problems.',
    historyToReveal: [
      {
        topic: 'Presenting complaint',
        response:
          '"I was running with the ball, planted my right foot to sidestep and my knee just buckled. There was a really loud pop — people on the sideline heard it — and I went straight down."',
      },
      {
        topic: 'Onset and character of swelling',
        response:
          '"It blew up almost immediately — within about 20 minutes it was the size of a grapefruit. That\'s why the physio sent me straight here."',
      },
      {
        topic: 'Pain — site and severity',
        response:
          '"About 6 out of 10 now with the painkillers — mainly inside the knee and behind the kneecap. It\'s worse if I try to move it."',
      },
      {
        topic: 'Weight-bearing and instability',
        response:
          '"I can hobble on it but it really hurts and it feels like it might give way again at any moment. I wouldn\'t trust it."',
      },
      {
        topic: 'Locking — block to full extension',
        response:
          '"Yes — I cannot straighten it fully. There\'s something stopping it going all the way out. It\'s been like that since the moment it happened."',
      },
      {
        topic: 'Mechanism — non-contact pivoting injury',
        response:
          '"There was no contact — no tackle, no kick. I planted my foot and twisted, and it just went. It was a pure non-contact injury."',
      },
      {
        topic: 'Previous knee injury or surgery',
        response:
          '"Absolutely nothing. Both knees have been completely fine before today — no previous injuries, no surgery, no physio for either knee."',
      },
      {
        topic: 'Activity level and sporting goals',
        response:
          '"I play rugby three times a week and football at weekends. Sport is everything to me — and I\'m meant to play in the national university cup in six weeks."',
      },
      {
        topic: 'Occupation and upcoming commitments',
        response:
          '"I\'m finishing law school and starting a training contract at a City firm in September. I\'ve also got exams in 8 weeks. I\'m going to need to be mobile."',
      },
      {
        topic: 'Past medical and surgical history',
        response:
          '"I\'ve never had an operation. I\'m completely fit and healthy — no medical conditions, no regular medications."',
      },
      {
        topic: 'Allergies',
        response: '"None that I know of."',
      },
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
    backgroundInfo:
      'David is a 45-year-old delivery driver with a 2-year history of chronic lower back pain. An MRI 18 months ago showed an L4/L5 disc prolapse — he was managed conservatively with physiotherapy and analgesia. This episode started 2 days ago with a sudden severe exacerbation after lifting a parcel at work. This morning he struggled to initiate urination (took 5 minutes to start, weak stream). He is the sole earner and worried about losing his job. He is minimising the severity of his symptoms and reluctant to believe this is serious.',
    historyToReveal: [
      {
        topic: 'Presenting complaint',
        response:
          '"My back went two days ago when I was lifting a parcel from the van — an almighty tearing pain across my lower back. It\'s been agony since then. Then this morning I had trouble starting a wee."',
      },
      {
        topic: 'Back pain — onset and character',
        response:
          '"It was sudden — I bent down and felt it go immediately. Much worse than my usual back pain. It\'s constant and I\'d say 8 out of 10."',
      },
      {
        topic: 'Radiation of pain',
        response:
          '"It shoots down both legs — the right is much worse. It goes right down the back of the right thigh and into my calf. On the left it just goes to my thigh."',
      },
      {
        topic: 'Bladder — urinary hesitancy and stream',
        response:
          '"This morning I needed to go but it took about 5 minutes to get going. When it did come, it was slow and weak. It\'s never happened like that before."',
      },
      {
        topic: 'Bladder — retention or incontinence',
        response:
          '"I haven\'t been completely unable to go, but it was very hard to start. I haven\'t leaked or wet myself."',
      },
      {
        topic: 'Saddle anaesthesia',
        response:
          '"You know... now you mention it, my bottom area does feel a bit numb or tingly — like when you sit on a bike saddle for too long. I\'d put it down to sitting awkwardly with the pain."',
      },
      {
        topic: 'Bowel symptoms',
        response:
          '"I haven\'t been to the toilet for 2 days — I thought that was the codeine I\'ve been taking. I haven\'t had any accidents."',
      },
      {
        topic: 'Lower limb weakness',
        response:
          '"My legs feel very heavy and weak — I nearly fell getting out of the car. I had to hold onto the door. My wife noticed I was limping badly."',
      },
      {
        topic: 'Previous back history and imaging',
        response:
          '"I\'ve had back pain for about 2 years. An MRI 18 months ago showed a disc problem at L4/L5. I had physio for 6 months and it settled. This is much, much worse."',
      },
      {
        topic: 'Current medications',
        response:
          '"I take naproxen and amitriptyline for the back pain. I\'ve been taking codeine for the last 2 days but it\'s barely touched it."',
      },
      {
        topic: 'Occupation and financial concerns',
        response:
          '"I\'m a delivery driver — I\'m the only one earning. My wife is at home with our two children. I really can\'t afford to be off work."',
      },
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
      'Sexual dysfunction — reduced perineal sensation: "Actually... yes, it has felt different down there — less sensation. I didn\'t want to mention it." (only if directly asked)',
      'Epidural steroid injection 8 months ago — helped temporarily: "I had a jab in my back — an epidural — about 8 months ago. It helped for a while."',
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
    backgroundInfo:
      'Tom is a 25-year-old construction worker who was riding his motorbike home when a car pulled out in front of him. He sustained a closed midshaft tibial fracture. The backslab was applied at approximately 20:30 in A&E. He has been using the PCA with minimal effect. Over the last hour his pain has changed in character — it is now a burning, pressured feeling inside the leg, quite different to the bone pain earlier. He is otherwise fit and healthy with no past medical history. He is very frightened and has been asking the nurses repeatedly if something is going wrong.',
    historyToReveal: [
      {
        topic: 'Presenting complaint',
        response:
          '"The pain has changed — this isn\'t just the broken bone. It feels like there\'s burning pressure inside my leg, like it\'s going to explode from the inside. I\'d say 10 out of 10. The morphine is doing nothing."',
      },
      {
        topic: 'Onset and progression of the new pain',
        response:
          '"The morphine was sort of helping at first. It started getting worse again around midnight, and for the last hour it\'s been completely uncontrollable. It\'s getting worse and worse."',
      },
      {
        topic: 'Pain on passive movement of the toes',
        response:
          '"Ow — yes! Just doing that makes it so much worse. Please stop." [flinches and pulls away]',
      },
      {
        topic: 'Sensation in the foot — first web space',
        response:
          '"The top of my foot feels tingly and numb — particularly the bit between my big toe and the next toe. It started about an hour ago."',
      },
      {
        topic: 'Power — ability to move toes',
        response:
          '"I can move them a tiny bit but it hurts terribly and they feel weak. I can\'t lift them properly."',
      },
      {
        topic: 'Tightness of the cast',
        response:
          '"Yes — the plaster feels extremely tight. It started feeling tight maybe an hour after they put it on. I told the nurse but she said swelling after a fracture was normal."',
      },
      {
        topic: 'Mechanism of injury',
        response:
          '"A car pulled out right in front of me — I had no time to brake. I went straight over the bonnet. I don\'t remember much after that until I woke up in A&E."',
      },
      {
        topic: 'Urinary output since admission',
        response:
          '"I haven\'t been to the toilet since I came in — no one brought me a bottle. I feel like I need to go, actually."',
      },
      {
        topic: 'Past medical history and medications',
        response: '"I\'m completely fit and healthy — no medical problems, not on any medication."',
      },
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

export const ORTHO_MOCK_EXAMS: MockExamStation[] = [
  nofMockExam,
  kneeInjuryMockExam,
  caudaEquinaMockExam,
  compartmentMockExam,
];
