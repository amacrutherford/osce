import type { MockExamStation } from './mockExamTypes';

const nofMockExam: MockExamStation = {
  id: 'ortho-mock-nof',
  title: 'Neck of Femur Fracture',
  specialtyId: 'orthopaedics',
  candidateBrief: {
    setting:
      'You are an FY1 doctor on the Trauma & Orthopaedic ward. It is 22:00. A&E have referred an 80-year-old woman following a fall at home. She has had a plain radiograph of her right hip.',
    scenario:
      'Mrs Margaret Collins, 80 years old, fell at home earlier this evening. On examination in A&E she has a shortened and externally rotated right leg with groin tenderness. The A&E radiograph report reads: "Displaced intracapsular fracture of the right neck of femur — Garden IV." She has been given analgesia and is comfortable at rest. Her observations are stable (HR 88, BP 138/82, SpO2 96% on air, GCS 15). She is listed for the next available trauma list and needs to be consented for surgery.',
    tasks: [
      'Take a focused history to establish what happened and assess her suitability for surgery',
      'Explain the diagnosis and what it means for her',
      'Obtain informed consent for surgical management and answer her questions',
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
      'Margaret is an 80-year-old retired headmistress. She is sharp, articulate, and used to being in control. She fell getting up from her armchair at home. She lives alone in a ground floor flat. Prior to tonight she was independent, walked with a stick outdoors, and managed all her own housework, cooking and shopping. She has atrial fibrillation and hypertension and takes warfarin, ramipril and atorvastatin. She is very frightened about the operation and whether she will walk again. Her daughter lives nearby and has been called.',
    historyToReveal: [
      {
        topic: 'Mechanism of fall',
        response:
          '"I was just getting up from my armchair to make a cup of tea. I felt something give way in my hip as I stood — there was a sort of crack — and I just went down. I couldn\'t get up at all."',
      },
      {
        topic: 'Loss of consciousness / pre-fall symptoms',
        response:
          '"No, I didn\'t black out or feel dizzy beforehand. It wasn\'t a trip — it just happened as I was standing up."',
      },
      {
        topic: 'Pain severity and location',
        response:
          '"It\'s a dreadful pain, mostly in my right hip and groin. I\'d say about 8 out of 10. It\'s a bit better with the injection they gave me, but any movement makes it much worse."',
      },
      {
        topic: 'Weight-bearing since the fall',
        response:
          '"I couldn\'t put any weight on it at all. I lay on the floor for about an hour before my neighbour heard me call out and rang the ambulance."',
      },
      {
        topic: 'Pre-injury mobility',
        response:
          '"Before tonight I walked with a stick outside — to the shops and so on — but I was absolutely fine indoors without it. I do my own cooking and housework."',
      },
      {
        topic: 'Living situation and social history',
        response:
          '"I live on my own in a ground floor flat. My daughter lives about 10 minutes away. She\'s on her way in now."',
      },
      {
        topic: 'Previous falls',
        response:
          '"No, this is the first time I\'ve fallen. I\'ve never broken a bone before in my life."',
      },
      {
        topic: 'Medical history',
        response:
          '"I have an irregular heartbeat — they call it atrial fibrillation — and I have high blood pressure. I have a bit of arthritis in my knees but nothing serious."',
      },
      {
        topic: 'Medications',
        response:
          '"I take warfarin for my heart, ramipril for my blood pressure, and atorvastatin for my cholesterol. That\'s all."',
      },
      {
        topic: 'Warfarin / INR',
        response:
          '"I had my INR checked at the GP last Tuesday — it was 2.4, they said that was fine."',
      },
      {
        topic: 'Allergies',
        response: '"No, I\'m not allergic to anything as far as I know."',
      },
      {
        topic: 'Cognitive function',
        response:
          '"My memory is absolutely fine — my GP says I\'m sharper than most of her patients half my age."',
      },
      {
        topic: 'Bone health / osteoporosis',
        response:
          '"My GP did mention that I might have some thinning in my bones a couple of years ago and suggested a scan, but I never got around to it."',
      },
    ],
    onlyIfDirectlyAsked: [
      'Urinary incontinence since the fall — she is embarrassed about this and will not volunteer it ("A little bit, yes — I was on the floor for an hour so I couldn\'t help it")',
      'Alcohol — drinks one small glass of wine with dinner most evenings',
      'Smoking — never smoked',
    ],
    behaviourNotes: [
      'In noticeable pain throughout — wince if any mention of moving the leg',
      'Frightened about the operation: "I\'ve never had an operation before, doctor — is it dangerous at my age?"',
      'Asks "Will I be able to go home again afterwards?" — responds well to honest reassurance about the rehabilitation pathway',
      'Asks "How long will I be in hospital?" — give a realistic estimate',
      'Becomes tearful briefly when the word "surgery" is mentioned — student should acknowledge this',
      'Responds warmly to empathy and use of her first name if offered',
    ],
  },
  markScheme: [
    {
      domain: 'History — Mechanism and Acute Assessment',
      items: [
        { description: 'Elicits mechanism of fall (stood up from chair, not a trip or faint)', marks: 1 },
        { description: 'Asks about pre-fall symptoms (no LOC, no dizziness, no chest pain)', marks: 1 },
        { description: 'Asks about pain (site, severity, response to analgesia)', marks: 1 },
        { description: 'Asks about weight-bearing since the fall', marks: 1 },
      ],
    },
    {
      domain: 'History — Functional Status and Social Circumstances',
      items: [
        { description: 'Establishes pre-injury mobility baseline (stick outdoors, independent indoors)', marks: 2 },
        { description: 'Establishes living situation (lives alone, ground floor flat)', marks: 1 },
        { description: 'Asks about social support (daughter nearby)', marks: 1 },
      ],
    },
    {
      domain: 'History — Medical and Medication History',
      items: [
        { description: 'Elicits AF and anticoagulation with warfarin', marks: 2 },
        { description: 'Asks about current INR or recent monitoring', marks: 1 },
        { description: 'Asks about allergies', marks: 1 },
        { description: 'Asks about previous fractures or known osteoporosis', marks: 1 },
      ],
    },
    {
      domain: 'Explanation of Diagnosis',
      items: [
        { description: 'Explains what a neck of femur fracture is in lay terms', marks: 1 },
        { description: 'States the fracture is displaced and explains why surgery is required', marks: 2 },
        { description: 'Checks patient understanding before proceeding to consent', marks: 1 },
      ],
    },
    {
      domain: 'Consent for Surgery',
      items: [
        { description: 'Explains the surgical option (hemiarthroplasty for displaced intracapsular fracture)', marks: 2 },
        { description: 'Explains procedure in lay terms (replace the ball of the hip joint)', marks: 1 },
        { description: 'Covers key risks: anaesthetic risk, blood clot, infection, dislocation, leg length discrepancy', marks: 2 },
        { description: 'Explains benefit: restore mobility, relieve pain, return home', marks: 1 },
        { description: 'Mentions need to reverse warfarin before surgery', marks: 1 },
      ],
    },
    {
      domain: 'Communication',
      items: [
        { description: 'Empathetic approach throughout — acknowledges pain and fear', marks: 1 },
        { description: 'Uses clear language free of jargon', marks: 1 },
        { description: 'Invites questions and addresses patient concerns', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Summarises: Mrs Collins is an 80-year-old retired woman who fell from standing, sustaining a displaced intracapsular right neck of femur fracture (Garden IV)',
    'States she has no pre-fall warning symptoms, making a mechanical fall most likely; she was anticoagulated on warfarin with an INR of 2.4 at last check',
    'Notes she was independently mobile with a stick outdoors and fully independent indoors, living alone with nearby family support — good baseline for rehabilitation',
    'Identifies key surgical consideration: warfarin anticoagulation needs reversal (vitamin K ± PCC) before surgery, and INR should be re-checked',
    'States the management plan: hemiarthroplasty (preferred over internal fixation for displaced intracapsular fracture in elderly), urgent consent, target surgery within 36 hours per NHFD standards',
    'Notes she has suspected osteoporosis — should be assessed post-operatively and commenced on a bisphosphonate and calcium/vitamin D supplementation',
    'Confirms she has capacity to consent, understands the diagnosis and surgical plan, and has family support',
  ],
  vivaQuestions: [
    {
      question:
        'What determines whether a neck of femur fracture is managed with internal fixation or arthroplasty?',
      keyPoints: [
        'Intracapsular vs extracapsular location is the primary distinction',
        'Extracapsular (intertrochanteric, subtrochanteric): dynamic hip screw (DHS) or intramedullary nail',
        'Intracapsular undisplaced (Garden I/II): cannulated screws or DHS — blood supply likely preserved',
        'Intracapsular displaced (Garden III/IV): arthroplasty preferred — high risk of avascular necrosis with fixation',
        'In active, younger patients with displaced intracapsular fractures: total hip arthroplasty (THA)',
        'In elderly or low-demand patients: hemiarthroplasty (Austin Moore or cemented bipolar)',
      ],
      source: 'NICE CG124 (2023) Hip Fracture in Adults',
    },
    {
      question:
        'What is the National Hip Fracture Database (NHFD) and what are the key quality standards for hip fracture care?',
      keyPoints: [
        'NHFD: national audit collecting data on all hip fracture admissions in England, Wales and Northern Ireland',
        'NICE/BOA Best Practice Tariff: incentivises surgery within 36 hours of admission (ideally <24h)',
        'Orthogeriatric co-management model: joint orthopaedic and geriatric care from day of admission',
        'All patients should receive a falls risk assessment and bone protection review',
        'Patients should be mobilised on the day after surgery',
        'Target: return to pre-injury place of residence for the majority',
      ],
      source: 'NHFD Annual Report 2023; NICE CG124',
    },
    {
      question: 'How would you manage this patient\'s warfarin anticoagulation before surgery?',
      keyPoints: [
        'Hold warfarin immediately on admission',
        'Recheck INR urgently — if >1.5 surgery should generally be delayed',
        'Vitamin K IV (1–2 mg): reverses warfarin over 6–12 hours; preferred for slower reversal that avoids rebound hypercoagulability',
        'Prothrombin complex concentrate (PCC, e.g. Octaplex): immediate reversal; used if urgent surgery needed within hours',
        'Aim INR <1.5 before spinal or general anaesthesia',
        'Discuss anticoagulation management with haematology/anaesthetics as per local protocol; consider VTE prophylaxis post-op',
      ],
      source: 'British Society for Haematology guidelines on reversal of VKA anticoagulation (2015)',
    },
    {
      question:
        'What are the major complications of hip fracture surgery and how are they prevented?',
      keyPoints: [
        'Surgical: dislocation (especially posterior approach), peri-prosthetic fracture, leg length discrepancy, infection, implant failure',
        'Medical: VTE (DVT/PE) — LMWH thromboprophylaxis for 28–35 days post-op (NICE CG92)',
        'Pressure ulcers: early mobilisation, nutrition review, pressure relief mattress',
        'Delirium: very common post-operatively in elderly — avoid anticholinergics, adequate hydration, early mobilisation, cognitive stimulation',
        'Aspiration pneumonia: early physiotherapy, swallowing assessment if at risk',
        '30-day mortality for hip fracture is approximately 7–10% — highest in cognitively impaired and medically unwell patients',
      ],
      source: 'NICE CG124 (2023); SIGN 111',
    },
  ],
};

const kneeInjuryMockExam: MockExamStation = {
  id: 'ortho-mock-knee-injury',
  title: 'Acute Knee Injury — ACL & Meniscal Tear',
  specialtyId: 'orthopaedics',
  candidateBrief: {
    setting:
      'You are an FY1 in the Emergency Department. A 22-year-old university rugby player attends after a knee injury sustained during a match 3 hours ago. An MRI has been expedited due to concern about an associated meniscal injury; the radiologist\'s report has just been handed to you.',
    scenario:
      'James Walsh, 22, sustained a non-contact twisting injury to his right knee during a rugby match. He reports an audible "pop" and immediate swelling. He can weight-bear with difficulty but describes the knee as feeling "unstable." He is in moderate pain (6/10) and has been given oral analgesia. His observations are normal.\n\nMRI REPORT — Right Knee (1.5T, James Walsh, 22M):\nFindings: Complete tear of the anterior cruciate ligament with loss of normal ligamentous fibre continuity and bone bruising of the lateral femoral condyle and posterior tibial plateau consistent with a pivot-shift mechanism. Posterior horn tear of the medial meniscus — bucket-handle configuration with central displacement of the torn fragment. No significant articular cartilage loss. Intact posterior cruciate and collateral ligaments.\nConclusion: Complete ACL tear with bucket-handle medial meniscal tear.',
    tasks: [
      'Take a focused history of the injury and its impact',
      'Explain the MRI findings and diagnosis to the patient',
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
      'James is a 22-year-old law student who plays university-level rugby and five-a-side football. He is very active and sport is a central part of his life. He is also engaged and his wedding is planned for 4 months\' time. He is devastated at the prospect of missing sport. He has had no previous knee problems or operations. He went down immediately on the pitch, heard the pop, and the knee swelled within 20 minutes. He can hobble to the toilet but the knee feels unstable and he cannot straighten it fully.',
    historyToReveal: [
      {
        topic: 'Mechanism of injury',
        response:
          '"I planted my right foot to sidestep a tackle, twisted my body, and my knee just buckled underneath me. There was a really loud pop — a few people on the sideline heard it."',
      },
      {
        topic: 'Onset of swelling',
        response:
          '"It blew up almost immediately — within about 20 minutes it was the size of a grapefruit. That\'s why the physio sent me straight here."',
      },
      {
        topic: 'Ability to weight-bear',
        response:
          '"I can hobble on it but it hurts and it feels like it might give way again at any moment. I wouldn\'t trust it."',
      },
      {
        topic: 'Locking or block to full extension',
        response:
          '"Yes — I can\'t straighten it fully. There\'s something stopping it going all the way out. It\'s been like that since it happened."',
      },
      {
        topic: 'Giving way / instability',
        response:
          '"It felt like it completely gave way when I twisted — and even now when I try to walk, it feels wobbly, like it might buckle."',
      },
      {
        topic: 'Previous knee problems',
        response:
          '"Nothing at all — this is the first time I\'ve had any trouble with this knee. Both knees were completely fine before today."',
      },
      {
        topic: 'Pain severity and location',
        response:
          '"About 6 out of 10 now with the painkillers — mainly around the inside of my knee and behind the kneecap. It\'s worse if I try to move it."',
      },
      {
        topic: 'Activity level and sport',
        response:
          '"I play rugby three times a week and football at weekends. It\'s a massive part of my life — and I\'m meant to play in the national university cup in six weeks."',
      },
      {
        topic: 'Occupation',
        response:
          '"I\'m a final year law student. I\'ve got exams in 8 weeks and then I start a training contract at a law firm. I\'m going to need to get around."',
      },
      {
        topic: 'Past medical and surgical history',
        response:
          '"I\'ve never had an operation. I\'m fit and healthy — no medical problems. I\'m not on any regular medication."',
      },
      {
        topic: 'Allergies',
        response: '"None that I know of."',
      },
    ],
    onlyIfDirectlyAsked: [
      'Took ibuprofen 400 mg about 2 hours before coming in — relevant if anticoagulation or NSAIDs are discussed',
      'Smokes occasionally socially — 2–3 cigarettes on weekends',
    ],
    behaviourNotes: [
      'Initially tries to minimise — "maybe it\'s just sprained?" — hoping for good news',
      'Visibly deflated when the diagnosis is explained; asks "So I\'m going to need an operation?"',
      'Asks "How long will I be out of sport?" — student should give an honest answer (typically 9–12 months for ACL reconstruction)',
      'Asks "Will I be able to play rugby again at the same level?" — student should be honest but positive about return-to-sport rates',
      'Asks about the wedding — "I\'m getting married in 4 months, I need to be able to walk properly"',
      'Calms down with a structured explanation and clear timeline',
    ],
  },
  markScheme: [
    {
      domain: 'History — Injury Characterisation',
      items: [
        { description: 'Elicits mechanism (non-contact, twisting/pivoting, foot planted)', marks: 2 },
        { description: 'Asks about audible pop at time of injury', marks: 1 },
        { description: 'Asks about speed of onset of swelling (haemarthrosis within 2 hours suggests ligamentous/cruciate injury)', marks: 2 },
      ],
    },
    {
      domain: 'History — Functional Assessment',
      items: [
        { description: 'Asks about weight-bearing ability', marks: 1 },
        { description: 'Asks about instability / giving way', marks: 1 },
        { description: 'Asks about locking or block to extension (suggests meniscal tear with displaced fragment)', marks: 2 },
      ],
    },
    {
      domain: 'History — Relevant Background',
      items: [
        { description: 'Asks about previous knee injury or surgery', marks: 1 },
        { description: 'Establishes activity level and occupation (functional goals for rehabilitation)', marks: 1 },
      ],
    },
    {
      domain: 'MRI Interpretation',
      items: [
        { description: 'Correctly identifies ACL complete tear from the report', marks: 2 },
        { description: 'Correctly identifies bucket-handle medial meniscal tear with displaced fragment', marks: 2 },
        { description: 'Notes significance of locking — consistent with displaced meniscal fragment blocking extension', marks: 1 },
      ],
    },
    {
      domain: 'Explanation and Immediate Management',
      items: [
        { description: 'Explains ACL and meniscal tear in clear lay terms', marks: 1 },
        { description: 'Advises immediate management: RICE, analgesia, crutches, non-weight-bearing or partial weight-bearing', marks: 2 },
        { description: 'Explains that the locked knee (displaced bucket-handle tear) requires urgent orthopaedic review — not a routine referral', marks: 2 },
      ],
    },
    {
      domain: 'Surgical Pathway Explanation',
      items: [
        { description: 'Explains that ACL reconstruction is typically performed electively 4–8 weeks after injury (once swelling resolves)', marks: 1 },
        { description: 'Explains the displaced bucket-handle tear may require more urgent arthroscopic surgery', marks: 1 },
        { description: 'Gives realistic return-to-sport timeline (9–12 months for ACL reconstruction)', marks: 1 },
      ],
    },
    {
      domain: 'Communication',
      items: [
        { description: 'Empathetic — acknowledges impact on sport, study, and wedding', marks: 1 },
        { description: 'Checks understanding; invites questions', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Summarises: James is a 22-year-old active rugby player who sustained a high-energy non-contact pivoting injury to his right knee 3 hours ago, with immediate haemarthrosis and instability',
    'States the key clinical features suggesting significant ligamentous injury: audible pop, rapid swelling (haemarthrosis within 20 minutes), giving way, and inability to fully extend the knee',
    'Interprets the MRI report: complete ACL tear (pivot-shift mechanism confirmed by bone bruising pattern) plus bucket-handle medial meniscal tear with central displacement of the fragment',
    'Explains that the block to full extension is consistent with the displaced bucket-handle fragment — this requires urgent orthopaedic review rather than routine elective referral',
    'States immediate management: analgesia, crutches, non-weight-bearing on right leg, and same-day orthopaedic referral for the locked knee',
    'Outlines the elective surgical pathway: ACL reconstruction (autograft, typically 4–8 weeks post-injury when swelling settles) with expected return to sport at 9–12 months',
    'Confirms good baseline health and no previous injuries — favourable prognostic factors for return to sport',
  ],
  vivaQuestions: [
    {
      question: 'What are the Ottawa Knee Rules and how would you apply them in this case?',
      keyPoints: [
        'Ottawa Knee Rules: X-ray indicated if ≥55 years old, isolated patella tenderness, head of fibula tenderness, inability to flex to 90°, or inability to weight-bear (4 steps) immediately and in ED',
        'Purpose: rule out bony injury — they have high sensitivity (~98%) for fractures but low specificity',
        'In this case: X-ray may be performed to exclude tibial plateau fracture or Segond fracture (lateral capsular avulsion, associated with ACL tear)',
        'Ottawa rules do not assess ligamentous or meniscal injury — MRI is required for soft tissue assessment',
        'Segond fracture: small avulsion fracture of lateral tibial plateau, pathognomonic of ACL tear',
      ],
      source: 'Stiell et al., JAMA 1997; OHCM 10th ed., Ch. 12',
    },
    {
      question:
        'Describe the clinical tests for ACL integrity and how you would interpret them.',
      keyPoints: [
        'Anterior drawer test: knee at 90° flexion, foot stabilised, draw tibia anteriorly — positive if >5 mm or soft endpoint vs contralateral side',
        'Lachman test: knee at 20–30° flexion, proximal tibia drawn anteriorly while distal femur fixed — more sensitive than anterior drawer (less hamstring guarding)',
        'Pivot-shift test: combined valgus stress + internal rotation + knee extension — positive if lateral tibial plateau subluxes anteriorly and reduces with a clunk',
        'In the acute setting, haemarthrosis and pain limit examination — examination under anaesthesia at time of arthroscopy more reliable',
        'MRI has sensitivity ~95% and specificity ~95% for complete ACL tear',
      ],
      source: 'Solomon DH et al., JAMA 2001; OHCM 10th ed., Ch. 12',
    },
    {
      question:
        'What is the "unhappy triad" and what mechanism produces it?',
      keyPoints: [
        'O\'Donoghue\'s unhappy triad: ACL + MCL + medial meniscus injury',
        'Mechanism: valgus stress with external rotation and knee flexion (e.g., clipped on the outside of the knee)',
        'However, MRI studies show the lateral meniscus is more commonly injured in ACL tears (lateral compartment bone bruising pattern)',
        'This case demonstrates a non-contact ACL injury (pivot-shift) — more common in cutting sports; different from contact valgus mechanism',
        'Bucket-handle meniscal tears are associated with ACL deficiency — secondary to anterolateral rotational instability',
      ],
      source: 'Griffin LY et al., Am J Sports Med 2000; Seroyer et al., Sports Health 2010',
    },
    {
      question:
        'What are the principles of ACL reconstruction and what graft choices are available?',
      keyPoints: [
        'Principles: restore anteroposterior and rotational stability; recreate anatomical footprint of native ACL',
        'Timing: typically 4–8 weeks after injury to allow inflammation to resolve and regain ROM — reduces risk of arthrofibrosis',
        'Urgent arthroscopy may be required for locked knee (displaced bucket-handle tear) before formal reconstruction',
        'Autograft options: bone-patellar tendon-bone (BPTB — gold standard, "stiff"), hamstring tendons (gracilis + semitendinosus — lower donor site morbidity), quadriceps tendon',
        'Allograft: less popular in young athletes — higher re-tear rate',
        'Return to sport: minimum 9 months; often 12 months for contact sport; guided by functional criteria not time alone',
      ],
      source: 'BASK (British Association for Surgery of the Knee) ACL guidelines; NICE IPG440',
    },
  ],
};

const caudaEquinaMockExam: MockExamStation = {
  id: 'ortho-mock-cauda-equina',
  title: 'Cauda Equina Syndrome',
  specialtyId: 'orthopaedics',
  candidateBrief: {
    setting:
      'You are an FY1 on the Surgical Assessment Unit (SAU). A 45-year-old man has been referred urgently by his GP with severe back pain and new symptoms this morning. The GP\'s referral letter reads: "Query cauda equina syndrome — please assess urgently."',
    scenario:
      'David Moore, 45, a delivery driver. He has a 2-year history of lower back pain with previous imaging showing an L4/L5 disc prolapse. Two days ago he developed a sudden severe exacerbation of back pain after lifting a heavy parcel at work. This morning he noticed difficulty initiating urination, and his wife noticed a change in his walking. He has taken his usual analgesia but the pain is not controlled. His observations are normal (HR 82, BP 126/78, SpO2 98% on air). GCS 15.',
    tasks: [
      'Take a focused history to determine whether this is a surgical emergency',
      'Explain the significance of his symptoms and your working diagnosis',
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
      'David is a 45-year-old delivery driver with a 2-year history of chronic lower back pain. He has had one MRI 18 months ago which showed an L4/L5 disc prolapse — he was managed conservatively with physiotherapy and analgesia. The current episode started 2 days ago with a sudden severe exacerbation after lifting a parcel. This morning he has had difficulty initiating urination (has not been unable to pass urine completely, but it took 5 minutes to start and came out weakly). He is minimising his symptoms and reluctant to think it is serious — he is worried about losing his job if he is off sick. He drives for a living and is the sole earner.',
    historyToReveal: [
      {
        topic: 'Back pain onset and character',
        response:
          '"Two days ago I bent down to lift a heavy parcel from the van and felt an almighty tearing pain across my lower back — much worse than my usual back pain. It\'s been agony since then."',
      },
      {
        topic: 'Radiation of pain',
        response:
          '"It shoots down both legs — the right is worse than the left. It goes right down the back of my thigh and into my calf on the right. On the left it just goes to my thigh."',
      },
      {
        topic: 'Saddle anaesthesia',
        response:
            '"You know... now you mention it, my bottom area does feel a bit numb or tingly — like when you sit on a bike saddle for too long. I\'d kind of put it down to sitting awkwardly with the pain."',
      },
      {
        topic: 'Bladder — difficulty urinating',
        response:
          '"This morning I needed to go but it took about 5 minutes to get going. When it did come, it was slow and weak. It\'s never happened like that before."',
      },
      {
        topic: 'Bladder — urinary retention or incontinence',
        response:
          '"I haven\'t been unable to go, but it was very hard to start. I haven\'t leaked or wet myself."',
      },
      {
        topic: 'Bowel symptoms',
        response:
          '"I haven\'t been to the toilet for 2 days — I thought that was the codeine I\'ve been taking. I haven\'t had any accidents."',
      },
      {
        topic: 'Leg weakness',
        response:
          '"My legs feel very heavy and weak — I nearly fell getting out of the car. I had to hold onto the door. My wife noticed I was limping badly."',
      },
      {
        topic: 'Previous back pain history',
        response:
          '"I\'ve had back pain for about 2 years. An MRI 18 months ago showed a disc problem at L4/L5. I saw a physiotherapist for 6 months and it settled down. This is much, much worse."',
      },
      {
        topic: 'Current medications',
        response:
          '"I take naproxen and amitriptyline for the back pain. I\'ve been taking codeine too for the last 2 days but it\'s barely touched it."',
      },
      {
        topic: 'Occupation and driving',
        response:
          '"I\'m a delivery driver. I\'m the only one earning at the moment — my wife is looking after our two children. I really can\'t afford to be off."',
      },
      {
        topic: 'Previous surgeries',
        response: '"No, I\'ve never had an operation."',
      },
    ],
    onlyIfDirectlyAsked: [
      'Sexual dysfunction: "Actually... yes, it has felt different down there — less sensation. I didn\'t want to mention it." (only if directly asked about sexual function or perineal sensation)',
      'Steroid injection: "I had an epidural steroid injection for my back about 8 months ago — it helped for a while."',
    ],
    behaviourNotes: [
      'Initially minimises symptoms — "I\'m sure it\'s just the disc" — student must actively probe for red flags',
      'Becomes visibly frightened when the doctor expresses urgency: "Are you saying this is serious? Could I be paralysed?"',
      'When told about emergency MRI: "Does this really need to be tonight? Can\'t I come back tomorrow?"',
      'Worried about his job and income throughout — student should acknowledge this concern while being clear about the urgency',
      'Does not volunteer saddle anaesthesia, sexual dysfunction, or bowel change — these must be specifically asked',
      'Responds well to a calm, structured explanation of why speed matters',
    ],
  },
  markScheme: [
    {
      domain: 'History — Back Pain Characterisation',
      items: [
        { description: 'Elicits mechanism (sudden onset with lifting) and duration (2 days)', marks: 1 },
        { description: 'Establishes bilateral leg pain/radiation (bilateral sciatica)', marks: 2 },
        { description: 'Asks about previous back history and prior imaging', marks: 1 },
      ],
    },
    {
      domain: 'History — Bladder Symptoms',
      items: [
        { description: 'Directly asks about urinary hesitancy, difficulty initiating urination', marks: 2 },
        { description: 'Asks about urinary retention or incontinence (overflow)', marks: 1 },
        { description: 'Identifies new onset urinary dysfunction as a red flag', marks: 1 },
      ],
    },
    {
      domain: 'History — Saddle Anaesthesia and Perineal Sensation',
      items: [
        { description: 'Directly asks about saddle anaesthesia (numbness in the perineum, inner thighs, genitalia)', marks: 2 },
        { description: 'Asks about sexual dysfunction or perineal sensation change', marks: 1 },
      ],
    },
    {
      domain: 'History — Lower Limb Neurology and Bowel',
      items: [
        { description: 'Asks about lower limb weakness (bilateral leg weakness, near fall)', marks: 2 },
        { description: 'Asks about bowel symptoms (constipation, incontinence)', marks: 1 },
      ],
    },
    {
      domain: 'Working Diagnosis and Red Flag Explanation',
      items: [
        { description: 'States working diagnosis of cauda equina syndrome (incomplete)', marks: 2 },
        { description: 'Explains significance clearly and sensitively — potential for permanent neurological deficit', marks: 1 },
      ],
    },
    {
      domain: 'Immediate Management Plan',
      items: [
        { description: 'Emergency MRI lumbar spine — states this should happen tonight, not tomorrow', marks: 2 },
        { description: 'Urological assessment — catheterisation if bladder scan shows significant residual volume', marks: 2 },
        { description: 'Urgent neurosurgical or spinal surgical referral once MRI confirmed', marks: 1 },
        { description: 'Analgesia review — adequate pain control while awaiting imaging', marks: 1 },
      ],
    },
    {
      domain: 'Communication',
      items: [
        { description: 'Conveys urgency without causing panic; acknowledges patient\'s concerns about work', marks: 1 },
        { description: 'Clear explanation — avoids dismissing or downplaying', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Summarises: David Moore is a 45-year-old delivery driver with a known L4/L5 disc prolapse, presenting with a 2-day history of sudden-onset severe back pain after lifting, with new bladder dysfunction this morning',
    'Identifies the key red flag triad: bilateral sciatica, new urinary hesitancy (incomplete cauda equina syndrome), and saddle anaesthesia — in combination, these are highly suspicious for cauda equina syndrome',
    'Notes bilateral leg weakness (nearly fell getting out of car) and 2-day bowel change — further supporting significant cauda equina compression',
    'States working diagnosis: incomplete cauda equina syndrome, likely secondary to central disc prolapse at L4/L5 compressing multiple sacral nerve roots',
    'States this is a surgical emergency: emergency MRI lumbar spine tonight; bladder scan and urological assessment; spinal surgical referral once imaging confirmed',
    'Identifies that urgency of surgery is determined by whether CES is complete or incomplete — incomplete CES requires decompression within 48 hours; complete CES within 24 hours',
    'Acknowledges patient\'s concerns about employment but is clear that delay risks permanent neurological deficit including bladder, bowel, and sexual dysfunction',
  ],
  vivaQuestions: [
    {
      question: 'What is the anatomical basis of cauda equina syndrome?',
      keyPoints: [
        'The spinal cord ends at the conus medullaris at approximately the L1–L2 vertebral level in adults',
        'Below this, the spinal canal contains the cauda equina: the lumbosacral nerve roots (L2–S5) descending to their respective foramina',
        'Cauda equina roots are peripheral nerves (not spinal cord) — they are more resilient to compression but still vulnerable to ischaemia',
        'CES results from compression of multiple cauda equina roots, most commonly by a large central L4/L5 or L5/S1 disc herniation',
        'Bladder, bowel and sexual function depend on S2–S4 roots — early involvement signals significant central compression',
        'Incomplete CES (some sacral function preserved) has better prognosis than complete CES (no sacral function)',
      ],
      source: 'Todd NV, Spine J 2009; OHCM 10th ed., Ch. 12',
    },
    {
      question:
        'How does cauda equina syndrome differ from conus medullaris syndrome?',
      keyPoints: [
        'Conus medullaris syndrome: injury at L1–L2; mixed UMN and LMN features; can cause brisk reflexes in lower limbs alongside absent ankle jerks',
        'Cauda equina syndrome: below L1–L2; pure LMN pattern — flaccid paraparesis, absent reflexes, saddle anaesthesia',
        'Both cause bladder/bowel dysfunction — conus more likely to cause hyperreflexic (spastic) bladder; cauda equina causes atonic (areflexic) bladder with overflow',
        'CES: variable dermatomal loss, often asymmetric, radicular pain common',
        'Conus: more symmetric, sacral dermatomal loss, less radicular pain',
        'Distinction matters prognostically and surgically — conus injury has worse prognosis for recovery',
      ],
      source: 'Greenberg MS, Handbook of Neurosurgery, 8th ed.; OHCM 10th ed., Ch. 10',
    },
    {
      question:
        'What does NICE guidance say about suspected cauda equina syndrome, and what investigations are required?',
      keyPoints: [
        'NICE CG88 (back pain and sciatica): patients with symptoms suggesting CES should be referred immediately for MRI',
        'Emergency MRI lumbar spine should be performed within 4 hours of presentation',
        'CT is second-line only if MRI unavailable — less sensitive for disc/soft tissue pathology',
        'Bladder ultrasound (post-void residual) should be performed — residual >200–300 mL indicates urinary retention; insert urinary catheter',
        'Blood tests: FBC, CRP, ESR (to exclude infection/malignancy); PSA if prostate malignancy possible',
        'NICE does not recommend steroids for mechanical CES; spinal surgical referral required for confirmed CES',
      ],
      source: 'NICE CG88 (2016); BSSG CES Guidelines 2020',
    },
    {
      question:
        'What determines the urgency of surgery in cauda equina syndrome?',
      keyPoints: [
        'Incomplete CES (CESI): some sacral sensory/motor function preserved — better prognosis; decompression should occur within 48 hours',
        'Complete CES (CESC): no sacral function — poorer prognosis; surgery within 24 hours recommended, though evidence is debated',
        'Outcome of bladder function correlates with duration of complete urinary retention before decompression',
        'Key prognostic factor: baseline neurological status at presentation — the worse the deficit, the more urgent surgery',
        'Surgical approach: discectomy ± laminectomy; typically performed by neurosurgery or specialist spinal surgeons',
        'The BSSG (British Spine Society Group) recommends a dedicated 24-hour CES pathway in all major centres',
      ],
      source: 'Todd NV, Eur Spine J 2011; BSSG CES Standards 2020',
    },
  ],
};

const compartmentMockExam: MockExamStation = {
  id: 'ortho-mock-compartment',
  title: 'Acute Compartment Syndrome',
  specialtyId: 'orthopaedics',
  candidateBrief: {
    setting:
      'You are the FY1 covering the Trauma & Orthopaedic ward overnight. It is 02:00. A staff nurse has called you urgently about a patient admitted earlier this evening following a road traffic collision.',
    scenario:
      'Tom Carter, 25, was admitted at 20:00 following a motorcycle accident. He sustained a closed midshaft tibial fracture of the right leg and a below-knee backslab plaster cast was applied in A&E. He was started on a PCA morphine pump and admitted for observation. The nurse is concerned because he is pressing the PCA button repeatedly, appears distressed, and says his pain has worsened significantly over the last hour. His observations: HR 110, BP 122/74, SpO2 98% on air, Temp 37.1°C.',
    tasks: [
      'Assess this patient and determine whether his deterioration represents a surgical emergency',
      'Explain your clinical concern and diagnosis to the patient',
      'State your immediate management plan and who you would escalate to',
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
      'Tom is a 25-year-old construction worker who was riding his motorbike home from a late shift when a car pulled out in front of him. He went over the bonnet at approximately 40 mph. He has a closed midshaft tibial fracture of his right leg. The backslab was applied in A&E at approximately 20:30. He has been using his PCA pump frequently with minimal effect. Over the last hour his pain has changed in character — it is now burning and feels like pressure building inside his leg. He is a fit, healthy non-smoker with no past medical history. He is very anxious and frightened.',
    historyToReveal: [
      {
        topic: 'Current pain character and severity',
        response:
          '"It\'s completely different to when I first came in — this isn\'t the bone pain from the break. It\'s like a burning, squeezing feeling inside my leg, like it\'s filling up with pressure. I\'d say 10 out of 10 — I\'ve never felt anything like it."',
      },
      {
        topic: 'Pain change over time',
        response:
          '"It\'s been getting worse and worse since about midnight. The morphine was sort of taking the edge off before but now it\'s not doing anything. Nothing touches it."',
      },
      {
        topic: 'Pain on moving or straightening toes',
        response:
          '"Ow — yes! Just doing that makes it so much worse. Can you stop, please?"',
      },
      {
        topic: 'Sensation in the foot',
        response:
          '"The top of my foot feels a bit tingly and numb — and the bit between my big toe and the next toe."',
      },
      {
        topic: 'Ability to move toes',
        response:
          '"I can move them a tiny bit but it hurts terribly to try, and they feel weak."',
      },
      {
        topic: 'Cast tightness',
        response:
          '"Yes — the plaster feels really tight. It started feeling tight maybe an hour after they put it on. I told the nurse but she said it was normal."',
      },
      {
        topic: 'Mechanism of injury',
        response:
          '"A car pulled out right in front of me — I had no time to brake. I went straight over the bonnet. I don\'t remember much after that until I woke up here."',
      },
      {
        topic: 'Injury details',
        response:
          '"They said I\'d broken my tibia — the main bone in my leg — but they said it was a clean break with no damage to the skin. They put me in this plaster and said they\'d review me in the morning."',
      },
      {
        topic: 'Urinary output',
        response:
          '"I haven\'t been to the toilet since I came in — no one brought me a bottle. I feel like I need to go, actually."',
      },
      {
        topic: 'Past medical history and medications',
        response: '"I\'m fit and healthy — no medical problems, not on any medication."',
      },
    ],
    onlyIfDirectlyAsked: [
      'Drug use: "I had some cocaine at a party two nights ago" — relevant to vasospasm and rhabdomyolysis risk; embarrassed to volunteer this',
      'Smoking: "Yes, about 10 a day" — relevant to healing and vascular supply',
    ],
    behaviourNotes: [
      'Clearly in severe pain throughout — does not settle with reassurance, visibly distressed',
      'Anxious and frightened: "Is something going wrong with my leg? Why isn\'t the morphine working?"',
      'Winces and pulls away during passive stretching of toes — student must note this reaction',
      'Asks "Am I going to lose my leg?" — needs honest, calm response with action taken promptly',
      'Becomes more cooperative when he senses the doctor is taking him seriously and acting quickly',
    ],
  },
  markScheme: [
    {
      domain: 'History — Pain Assessment',
      items: [
        { description: 'Elicits change in character of pain (now burning/pressure, not just fracture pain)', marks: 2 },
        { description: 'Establishes that pain is out of proportion to injury and not responding to analgesia', marks: 2 },
        { description: 'Asks about pain on passive stretch of toes/ankle (hallmark feature)', marks: 2 },
      ],
    },
    {
      domain: 'History — Neurovascular Assessment',
      items: [
        { description: 'Asks about sensation changes in foot (tingling/numbness — first web space = deep peroneal nerve)', marks: 2 },
        { description: 'Asks about ability to move toes (weakness)', marks: 1 },
        { description: 'Asks about cast tightness and when it started', marks: 1 },
      ],
    },
    {
      domain: 'Risk Recognition',
      items: [
        { description: 'Identifies high-energy mechanism (RTC at speed) as risk factor for compartment syndrome', marks: 1 },
        { description: 'Recognises tight cast as a contributing / exacerbating factor', marks: 1 },
        { description: 'Identifies tachycardia as physiological response to severe pain / early clinical concern', marks: 1 },
      ],
    },
    {
      domain: 'Immediate Management',
      items: [
        { description: 'States bivalving the cast immediately (split cast and padding down to skin)', marks: 2 },
        { description: 'States elevation to heart level (not higher — avoids reducing arterial inflow)', marks: 2 },
        { description: 'States urgent compartment pressure measurement (or immediate surgical referral if diagnosis clinically clear)', marks: 1 },
      ],
    },
    {
      domain: 'Escalation and Definitive Management',
      items: [
        { description: 'Escalates immediately to orthopaedic registrar / on-call consultant', marks: 2 },
        { description: 'States definitive treatment is emergency fasciotomy — 4-compartment lower leg release', marks: 2 },
        { description: 'Mentions monitoring urinary output (myoglobin / rhabdomyolysis risk; IV fluids)', marks: 1 },
      ],
    },
    {
      domain: 'Communication',
      items: [
        { description: 'Takes patient seriously, acknowledges pain and fear promptly', marks: 1 },
        { description: 'Explains actions being taken clearly without causing panic', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Summarises: Tom Carter is a 25-year-old with a closed tibial shaft fracture following a high-energy RTC, now 6 hours post-backslab application, presenting with escalating pain out of proportion to injury that is unresponsive to PCA morphine',
    'Identifies the clinical features consistent with acute compartment syndrome: pain out of proportion, burning/pressure character, marked worsening on passive toe dorsiflexion, paraesthesia in the first web space (deep peroneal nerve — anterior compartment), and tense cast noted by patient',
    'States this is an orthopaedic emergency — acute compartment syndrome if untreated causes irreversible muscle and nerve ischaemia within 6–8 hours',
    'Immediate actions: bivalve the cast down to skin to relieve extrinsic compression; elevate to heart level (not above — reduces arterial perfusion); urgent compartment pressure measurement or immediate surgical referral',
    'Definitive treatment: emergency 4-compartment fasciotomy of the lower leg — releases anterior, lateral, superficial posterior, and deep posterior compartments via two incisions',
    'Escalation: immediate call to on-call orthopaedic registrar/consultant; theatre to be alerted; IV access and fluid resuscitation; catheterise for hourly urinary output monitoring and watch for myoglobinuria (rhabdomyolysis)',
    'Documents all findings, time of assessment, and escalation clearly in the notes',
  ],
  vivaQuestions: [
    {
      question:
        'What are the clinical features of acute compartment syndrome — the "6 Ps"?',
      keyPoints: [
        'Pain: severe, out of proportion to injury; escalating and unresponsive to analgesia — the earliest and most reliable sign',
        'Pain on passive stretch: most specific early sign — passively stretching muscles within the affected compartment reproduces or worsens pain',
        'Pressure: tense, woody feel to the compartment on palpation',
        'Paraesthesia: tingling or numbness in the cutaneous distribution of nerves within the affected compartment — indicates nerve ischaemia',
        'Paralysis: weakness or inability to move muscles — a late sign indicating significant ischaemia',
        'Pallor and Pulselessness: very late signs — loss of pulses indicates arterial compromise; compartment syndrome can occur with pulses present',
      ],
      source: 'McQueen MM & Court-Brown CM, JBJS Br 1996; OHCM 10th ed., Ch. 12',
    },
    {
      question:
        'What is the threshold compartment pressure at which fasciotomy is indicated?',
      keyPoints: [
        'Absolute pressure threshold: fasciotomy indicated when compartment pressure exceeds 30 mmHg (some guidelines use 30–35 mmHg)',
        'Delta pressure (ΔP): difference between diastolic blood pressure and compartment pressure — fasciotomy indicated when ΔP <30 mmHg',
        'ΔP is more physiologically relevant as it accounts for individual variation in perfusion pressure',
        'Example: if diastolic BP = 60 mmHg and compartment pressure = 35 mmHg, ΔP = 25 mmHg — fasciotomy indicated',
        'Measurement: Stryker intracompartmental pressure monitoring device (needle inserted into compartment); all 4 compartments should be measured',
        'In practice, in the context of a convincing clinical picture, do not delay fasciotomy to obtain measurements',
      ],
      source: 'McQueen MM & Court-Brown CM, JBJS Br 1996; BOA/BAPRAS Open Fracture Guidelines 2020',
    },
    {
      question:
        'Which compartments of the lower leg are released in a fasciotomy, and through which incisions?',
      keyPoints: [
        'Four compartments of the lower leg: anterior, lateral, superficial posterior, deep posterior',
        'Two-incision technique is standard for 4-compartment decompression',
        'Lateral incision (anterolateral): releases anterior compartment (tibialis anterior, EHL, EDL, deep peroneal nerve) and lateral compartment (peronei, superficial peroneal nerve)',
        'Medial incision: releases superficial posterior (gastrocnemius, soleus) and deep posterior compartments (FHL, FDL, tibialis posterior, posterior tibial neurovascular bundle)',
        'Medial incision must be at least 2 cm posterior to the tibial border to avoid the saphenous vein and nerve',
        'Wounds are left open and closed secondarily at 48–72 hours or with split-skin grafting if required',
      ],
      source: 'BOA/BAPRAS Open Fracture Guidelines 2020; Rockwood & Green\'s Fractures, 9th ed.',
    },
    {
      question:
        'What are the consequences of delayed or missed compartment syndrome?',
      keyPoints: [
        'Irreversible ischaemic necrosis of muscle and nerve begins within 6–8 hours of ischaemia onset',
        'Volkmann\'s ischaemic contracture: fixed flexion deformity of wrist and fingers (or foot and ankle in lower leg) due to fibrosis of ischaemic muscle',
        'Peripheral nerve damage: permanent paraesthesia, weakness, or paralysis in affected nerve territory',
        'Myonecrosis and rhabdomyolysis: myoglobin release → acute tubular necrosis → acute kidney injury (AKI) — monitor urine output and creatinine; treat with aggressive IV fluids',
        'Infection and gangrene if tissue necrosis is extensive — may require amputation',
        'Significant medico-legal risk: missed compartment syndrome is one of the most common causes of orthopaedic litigation in the UK',
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
