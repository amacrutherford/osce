import type { MockExamStation } from './mockExamTypes';

const seizureMockExam: MockExamStation = {
  id: 'seizure_loss_of_consciousness_history',
  title: 'Seizure / Loss of Consciousness History',
  diagnosis: 'Focal-onset bilateral tonic-clonic seizure (first seizure)',
  specialtyId: 'neurology',
  candidateBrief: {
    setting: 'You are an FY1 doctor in the Emergency Department.',
    scenario: 'A 22-year-old man has been brought in by ambulance after collapsing at the university library. He is now alert and orientated. This is his first episode.',
    tasks: [
      'Take a focused history from the patient',
      'Explain your working diagnosis and what happens next, including any relevant safety advice',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'Ryan Murphy',
    age: 22,
    occupation: 'University student (2nd year, Biology)',
    openingLine: '"I don\'t really know what happened — one minute I was reading in the library and the next I woke up on the floor with paramedics around me. It\'s really frightened me."',
    historyOfPresentingComplaint: [
      {
        label: 'Presenting complaint — witnessed collapse in library',
        quote: '"I collapsed in the library. My friends said I fell off my chair and was shaking. I don\'t remember any of it." – "Apparently someone called an ambulance. I just came round on the floor feeling completely exhausted."',
      },
      {
        label: 'Pre-ictal aura — olfactory (burning rubber smell)',
        quote: '"Actually, now you mention it — I did notice a really strange smell just before, like burning rubber. It only lasted a few seconds." – "I thought it was something in the library at first. I didn\'t connect it."',
      },
      {
        label: 'Focal onset — right hand twitching, right arm, head version right before generalisation',
        quote: '"My friends said my right hand started twitching first, then my right arm, and my head turned to the right — before the whole body shaking started." – "I don\'t remember any of that bit."',
      },
      {
        label: 'Ictal phase — tonic stiffening then tonic-clonic shaking; approximately 2–3 minutes',
        quote: '"They said I went stiff first and then started shaking all over. The whole thing was about 2–3 minutes of shaking. Then I just lay still."',
      },
      {
        label: 'Post-ictal — confused 15–20 minutes; severe headache; exhausted',
        quote: '"When I came round I had no idea where I was. The paramedics said I was confused for about 15–20 minutes. I had a really bad headache afterwards." – "I just wanted to sleep."',
      },
      {
        label: 'Post-ictal — right hand weakness (Todd\'s paresis, resolving over ~1 hour)',
        quote: '"My right hand felt really weak when I woke up — I couldn\'t grip properly. It\'s mostly better now but still feels a bit clumsy." – "It\'s been getting better over the last hour."',
      },
      {
        label: 'No previous episodes of any kind — first event',
        quote: '"Nothing like this ever before. I\'ve never lost consciousness, no blackouts, no funny turns." – "Completely out of the blue."',
      },
      {
        label: 'Precipitating factors — severe sleep deprivation (3 hours); 3 energy drinks',
        quote: '"I only slept about 3 hours. I had a big exam this morning and I was up all night revising." – "I also had three cans of energy drink. I know, I know."',
      },
    ],
    pastMedicalHistory: [
      { label: 'No significant past medical history', quote: '"Nothing. I\'ve never been diagnosed with anything. Never in hospital before."' },
      { label: 'Febrile convulsions in infancy', quote: '"Mum says I had febrile convulsions as a baby but nothing since."' },
    ],
    drugHistory: [
      { label: 'Ibuprofen — occasional for headaches only', quote: '"Nothing regular — just ibuprofen occasionally for headaches."' },
    ],
    familyHistory: [
      { label: 'Mother — epilepsy in her twenties (now well controlled on medication)', quote: '"My mum had epilepsy when she was in her twenties. I think she grew out of it — it\'s well controlled now with medication." – "No one else that I know of."' },
    ],
    socialHistory: [
      { label: 'University student (2nd year Biology); lives in halls during term', quote: '"I\'m a second year Biology student. I live in halls during term time."' },
      { label: 'Driving licence — passed 6 months ago; drives home at weekends [visibly distressed]', quote: '"I passed my test six months ago. I drive home most weekends to see my family. Am I going to lose my licence?" [visibly distressed]' },
      { label: 'Alcohol: approximately 8–10 units/week, mainly weekends', quote: '"About 8–10 units a week, mostly at weekends. I had a few drinks at a party two nights ago."' },
    ],
    importantNegatives: [
      'No head injury ("No, I haven\'t hit my head recently or had any trauma.")',
      'No fever, neck stiffness, or rash ("I\'ve been well — no temperature or anything like that. My neck is fine.")',
      'No preceding cardiac symptoms ("No palpitations or chest pain before it. I didn\'t feel faint — it was completely sudden.")',
      'No previous absences, jerks, or déjà vu ("No. Nothing like that. Never.")',
      'No photophobia ("No, light doesn\'t bother me.")',
      'No tongue bite on right side ("It\'s sore on the left side of my tongue.")',
    ],
    ice: {
      ideas: '"I honestly don\'t know what to think — could it be a faint? Or maybe the energy drinks and no sleep?"',
      concerns: '"I\'m really worried about my driving licence. I only passed six months ago and I use my car to get home." – "And I suppose I\'m scared it could happen again."',
      expectations: '"I just want to know if I\'m going to be okay and whether this is going to affect my life."',
    },
    onlyIfDirectlyAsked: [
      'Urinary incontinence — wet himself during the episode; very embarrassed ("Yes... I did. I noticed when I came round. Please don\'t put that in my notes.")',
      'Recreational drug use — smoked cannabis twice in the last month ("I\'ve tried cannabis a couple of times recently. I don\'t do it regularly.")',
      'Tongue bite — only mentions the left-sided tongue bite if specifically asked; didn\'t think it was relevant ("My tongue is really sore — you can see the bite mark on the left side.")',
    ],
    behaviourNotes: [
      'Visibly embarrassed and shaken throughout — this is an extremely frightening and humiliating experience for him',
      'Becomes anxious and tearful when driving is mentioned — this is his primary concern',
      'Asks "How long will I have to stop driving?" — student should give the 6-month DVLA advice for first unprovoked seizure',
      'Asks "Will I have to take medication?" — respond well to an honest explanation',
      'Responds well to empathy and normalisation — "this must have been very frightening"',
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
        { description: 'Uses open questioning to elicit the presenting complaint', marks: 1 },
      ],
    },
    {
      domain: 'History — pre-ictal features',
      items: [
        { description: 'Asks about any warning, aura, or unusual sensation before the episode', marks: 2 },
        { description: 'Asks about focal onset features (limb twitching, head turning) — identifies focal-to-bilateral pattern', marks: 2 },
      ],
    },
    {
      domain: 'History — ictal and post-ictal features',
      items: [
        { description: 'Asks about the character and duration of the episode (tonic-clonic movements, stiffening)', marks: 1 },
        { description: 'Asks about tongue biting', marks: 1 },
        { description: 'Asks about urinary incontinence', marks: 1 },
        { description: 'Asks about the post-ictal period — confusion, duration, and any focal weakness', marks: 2 },
        { description: 'Asks whether there were witnesses and what they observed', marks: 1 },
      ],
    },
    {
      domain: 'Screening for differentials and red flags',
      items: [
        { description: 'Asks about preceding cardiac symptoms (palpitations, chest pain, prodrome of faintness)', marks: 2 },
        { description: 'Asks about recent head injury, illness, or fever', marks: 1 },
        { description: 'Asks about previous similar episodes, absences, or déjà vu', marks: 1 },
      ],
    },
    {
      domain: 'ICE',
      items: [
        { description: 'Explores the patient\'s ideas, concerns, and expectations', marks: 1 },
      ],
    },
    {
      domain: 'Past medical, drug, and family history',
      items: [
        { description: 'Asks about past medical history and previous neurological diagnoses', marks: 1 },
        { description: 'Asks about family history of epilepsy or neurological conditions', marks: 1 },
        { description: 'Takes a drug history including prescribed medications and OTC remedies', marks: 1 },
      ],
    },
    {
      domain: 'Social history and safety',
      items: [
        { description: 'Asks about driving and proactively addresses DVLA implications for a first seizure', marks: 2 },
        { description: 'Quantifies alcohol intake and asks about recreational drug use as precipitants', marks: 1 },
        { description: 'Identifies sleep deprivation and stimulant use as precipitating factors', marks: 1 },
      ],
    },
    {
      domain: 'Closing the consultation',
      items: [
        { description: 'Summarises the key history back to the patient and checks for accuracy', marks: 1 },
        { description: 'Asks if there is anything the patient feels has been missed', marks: 1 },
        { description: 'Thanks the patient for their time', marks: 1 },
      ],
    },
    {
      domain: 'Key communication skills',
      items: [
        { description: 'Active listening — maintains eye contact, does not interrupt, uses brief verbal affirmations', marks: 1 },
        { description: 'Summarising — recaps key points during the consultation to confirm understanding', marks: 1 },
        { description: 'Signposting — signals transitions between sections of the history', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Ryan is a 22-year-old Biology student presenting after a witnessed tonic-clonic episode in the library — this appears to be his first seizure',
    'The history suggests a focal onset: he experienced an olfactory aura (burning rubber smell), followed by right-hand twitching and head turning to the right before secondary generalisation',
    'Post-ictally he was confused for 15–20 minutes and had right hand weakness (consistent with Todd\'s paresis), now resolving — supporting focal cortical involvement',
    'Tongue bite was on the left side, consistent with a right-hemisphere focal onset; urinary incontinence occurred during the episode',
    'Likely precipitants include severe sleep deprivation (3 hours), three energy drinks, and recent alcohol use — though these do not fully account for focal features',
    'Relevant risk factors: maternal history of epilepsy; febrile convulsions in infancy',
    'Management: urgent neurology referral; MRI brain; EEG; DVLA advice (6 months off driving for first unprovoked seizure); safety-netting regarding seizure first aid',
  ],
  vivaQuestions: [
    {
      question: 'How do you classify seizures, and what features in this history suggest a focal onset?',
      keyPoints: [
        'ILAE 2017 classification: focal onset (aware/impaired awareness) vs generalised onset vs unknown onset',
        'Focal features here: olfactory aura (suggests temporal lobe), right arm twitching, head version to right, then bilateral spread (focal to bilateral tonic-clonic)',
        'Todd\'s paresis (resolving right hand weakness) further localises to left hemisphere',
        'Lateral tongue bite — in contrast to central bite seen in some syncopes',
        'Post-ictal confusion lasting >15 minutes is more consistent with seizure than syncope',
      ],
      source: 'Fisher RS et al., Epilepsia 2017 (ILAE Classification); NICE CG137',
    },
    {
      question: 'What investigations would you request for a first seizure?',
      keyPoints: [
        'Bloods: glucose, electrolytes, calcium, magnesium, FBC, LFTs, CRP — exclude metabolic and infective causes',
        'ECG — exclude prolonged QT, Brugada, arrhythmia (cardiac syncope mimics seizure)',
        'MRI brain — first-line neuroimaging for focal-onset seizures; CT if MRI unavailable or urgent',
        'EEG — not diagnostic alone but supports classification; ideally within 24–48 hours of first seizure',
        'Prolactin level (if taken within 20 minutes) — raised after generalised tonic-clonic, normal in syncope; limited sensitivity/specificity',
      ],
      source: 'NICE CG137 (2012, updated 2022) — Epilepsies: diagnosis and management',
    },
    {
      question: 'What DVLA advice would you give this patient, and why?',
      keyPoints: [
        'First unprovoked seizure: must not drive for 6 months (Group 1 — car/motorcycle licence)',
        'Patient must inform DVLA voluntarily; doctor has a duty to advise; if patient refuses, doctor may notify DVLA',
        'DVLA will review after 6 seizure-free months — licence usually restored if no seizures',
        'Vocational (Group 2 — HGV/bus) licence: off driving for 5 years after a single seizure',
        'If seizures were provoked only (e.g. acute symptomatic) and cause removed: 6 months from seizure date',
      ],
      source: 'DVLA Assessing Fitness to Drive (March 2024); NICE CG137',
    },
    {
      question: 'If this patient is started on an anti-epileptic drug, which agent would you avoid and why?',
      keyPoints: [
        'Sodium valproate is highly effective for generalised and focal epilepsy but is teratogenic — avoid in women of childbearing potential without a Pregnancy Prevention Programme (Valproate Risk Acknowledgement Form)',
        'For focal-onset seizures: levetiracetam or lamotrigine are first-line in younger patients',
        'Lamotrigine has a favourable side-effect profile; titrated slowly to reduce Steven-Johnson syndrome risk',
        'Carbamazepine is effective for focal epilepsy but has significant drug interactions',
        'This patient is male — valproate avoidance guidance is most relevant for female patients, but the examiner may probe teratogenicity generally',
      ],
      source: 'NICE CG137; MHRA Valproate Safety Review 2018',
    },
  ],
};

const headacheMockExam: MockExamStation = {
  id: 'headache_and_visual_loss_history',
  title: 'Headache and Visual Loss History',
  diagnosis: 'Posterior circulation ischaemic stroke',
  specialtyId: 'neurology',
  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Hemianopsia_en.jpg',
  candidateBrief: {
    setting: 'You are an FY1 doctor on the Medical Assessment Unit.',
    scenario: 'A 68-year-old woman has been referred by her GP with a 2-day history of headache and visual disturbance. A visual pathway diagram is displayed above — you may refer to it during the station.',
    tasks: [
      'Take a focused history',
      'Identify which lesion site on the diagram explains the patient\'s visual symptoms',
      'Explain your working diagnosis and immediate management plan to the patient',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'Margaret Thompson',
    age: 68,
    occupation: 'Retired secondary school teacher',
    openingLine: '"I\'ve had this terrible headache since yesterday morning and my vision has gone funny on one side. My husband insisted I come in — I thought it might just be a migraine but it\'s not going away."',
    socrates: [
      {
        label: 'Site',
        descriptor: 'occipital headache — back of the head',
        quotes: ['"It\'s at the back of my head, mostly." – "Right in the occipital area — here." [touches back of head]'],
      },
      {
        label: 'Onset',
        descriptor: 'sudden thunderclap — instantaneous, worst headache ever, whilst making breakfast Thursday morning',
        quotes: ['"It came on like a thunderclap — bang, instantly, the worst headache I\'ve ever had in my life." – "I was making breakfast and it just hit me. I nearly dropped my cup."'],
      },
      {
        label: 'Character',
        descriptor: 'severe aching and pressure — completely unlike usual headaches',
        quotes: ['"It\'s a really severe aching and pressure feeling." – "Nothing like my usual headaches — this is completely different."'],
      },
      {
        label: 'Radiation',
        descriptor: 'none reported',
        quotes: [],
      },
      {
        label: 'Associated symptoms',
        descriptor: 'sudden-onset left homonymous visual field loss — blurring and missing vision on the left in both eyes simultaneously with headache',
        quotes: ['"The left side of my vision in both eyes is blurry and missing." – "I keep bumping into things on my left — I nearly walked into a doorframe this morning."'],
      },
      {
        label: 'Timing',
        descriptor: 'continuous since Thursday morning (2 days); first ever episode of this type',
        quotes: ['"It\'s been there continuously since Thursday morning. That\'s 2 days now. It hasn\'t come and gone." – "No, I\'ve never had anything like this before in my life."'],
      },
      {
        label: 'Exacerbating / relieving',
        descriptor: 'paracetamol every 4 hours — only marginally effective',
        quotes: ['"I\'ve been taking paracetamol every 4 hours since Thursday. It takes the edge off slightly but doesn\'t come close to clearing it."'],
      },
      {
        label: 'Severity',
        descriptor: '9/10 initially; 6–7/10 with analgesia — still constant',
        quotes: ['"At its worst it was 9 out of 10. With the paracetamol it\'s about a 6 or 7 now, but it\'s still there constantly."'],
      },
    ],
    pastMedicalHistory: [
      { label: 'Atrial fibrillation — diagnosed 2 years ago; not anticoagulated (on ramipril only)', quote: '"I was told I have an irregular heartbeat — AF, they called it — about 2 years ago." – "The GP said I didn\'t need blood thinners at the time. I\'m just on the blood pressure tablet."' },
      { label: 'Hypertension — 8 years, well controlled on ramipril', quote: '"Yes, high blood pressure for about 8 years. It\'s been well controlled on ramipril — the last reading at the GP was about 136/82."' },
    ],
    drugHistory: [
      { label: 'Ramipril 5 mg once daily (hypertension)', quote: '"Just ramipril 5 mg once a day."' },
      { label: 'Paracetamol — regularly since Thursday', quote: '"Paracetamol every 4 hours since Thursday."' },
      { label: 'No anticoagulants, antiplatelets, or other medications', quote: '"Nothing else." – "No aspirin, no blood thinners."' },
    ],
    familyHistory: [
      { label: 'Father — stroke at age 70', quote: '"My father had a stroke at 70."' },
      { label: 'Mother — hypertension', quote: '"My mother had high blood pressure too."' },
    ],
    socialHistory: [
      { label: 'Retired secondary school teacher; lives with husband (drove her in today)', quote: '"I\'m retired. I live with my husband — he drove me in today."' },
      { label: 'Non-smoker', quote: '"I don\'t smoke."' },
      { label: 'Alcohol: approximately 7 units/week (glass of wine with dinner)', quote: '"I have a small glass of wine with dinner most evenings, maybe 7 units a week."' },
      { label: 'No known diabetes', quote: '"I\'ve never had diabetes as far as I know."' },
    ],
    importantNegatives: [
      'No diplopia ("No, I\'m not seeing double — it\'s just the blurring on the left side.")',
      'No eye pain ("No pain in my eye itself.")',
      'No neck stiffness ("My neck is fine, no.")',
      'No photophobia ("I\'m not particularly sensitive to light with this one.")',
      'No nausea or vomiting ("I felt a bit nauseous on Thursday but nothing since.")',
      'No speech difficulty ("No problems speaking.")',
      'No limb weakness or facial drooping ("No weakness in my arms or legs. My face feels normal.")',
      'No previous TIA or stroke ("No, nothing like this has happened before.")',
    ],
    ice: {
      ideas: '"I thought at first it might be a migraine — but I\'ve never had a migraine before and this is nothing like what people describe."',
      concerns: '"I\'m really frightened about whether my vision is going to come back. I rely on my vision for reading." – "And my husband is worried it could be something very serious."',
      expectations: '"I want to know what\'s happening and whether there\'s something that can be done to help my vision."',
    },
    onlyIfDirectlyAsked: [
      'Cholesterol — has had mildly elevated cholesterol previously ("The GP mentioned my cholesterol was slightly high a couple of years ago but said it wasn\'t bad enough to need treatment.")',
      'Diabetes screening — has not been formally tested ("I\'ve never been checked for diabetes.")',
    ],
    behaviourNotes: [
      'Anxious and frightened throughout — her vision not improving is the most frightening aspect',
      'Reassured by clear, calm explanations; becomes more distressed if uncertainty is conveyed without empathy',
      'Asks "Is my vision going to come back?" — student should be honest but compassionate',
      'Asks "Am I going to have another one?" — use to explore anticoagulation and secondary prevention',
      'Mentions husband is in the waiting room and asks if he can come in — student should acknowledge this',
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
        { description: 'Uses open questioning to elicit both the headache and the visual symptoms', marks: 1 },
      ],
    },
    {
      domain: 'History — headache (SOCRATES)',
      items: [
        { description: 'Explores onset and identifies thunderclap character — instantaneous, worst ever headache', marks: 2 },
        { description: 'Establishes site (occipital), severity, and response to analgesia (not relieved)', marks: 1 },
        { description: 'Establishes that the headache is continuous and unchanged since onset 2 days ago', marks: 1 },
        { description: 'Asks about previous identical headache — establishes this is a first-ever episode', marks: 1 },
      ],
    },
    {
      domain: 'History — visual symptoms',
      items: [
        { description: 'Explores the site, onset, and character of the visual disturbance', marks: 1 },
        { description: 'Identifies that visual loss affects the same side (left) in both eyes — homonymous pattern', marks: 2 },
        { description: 'Establishes that visual symptoms began simultaneously with the headache', marks: 1 },
        { description: 'Asks about diplopia, eye pain, and transient loss of vision (amaurosis fugax)', marks: 1 },
      ],
    },
    {
      domain: 'Screening for red flags and differentials',
      items: [
        { description: 'Screens for meningism — neck stiffness, photophobia, rash', marks: 1 },
        { description: 'Asks about focal neurological symptoms — speech, limb weakness, facial drooping', marks: 1 },
        { description: 'Asks about previous TIA or stroke episodes', marks: 1 },
      ],
    },
    {
      domain: 'ICE',
      items: [
        { description: 'Explores the patient\'s ideas, concerns, and expectations', marks: 1 },
      ],
    },
    {
      domain: 'Vascular risk factors, PMH, and drug history',
      items: [
        { description: 'Elicits AF and establishes the patient is not anticoagulated', marks: 2 },
        { description: 'Asks about hypertension, diabetes, smoking, cholesterol, and family history of stroke', marks: 1 },
        { description: 'Takes a full drug history including antiplatelet and anticoagulant medications', marks: 1 },
      ],
    },
    {
      domain: 'Visual field diagram interpretation',
      items: [
        { description: 'Correctly identifies the lesion site as a right posterior cerebral artery (PCA) territory infarct causing left homonymous hemianopia', marks: 2 },
      ],
    },
    {
      domain: 'Closing the consultation',
      items: [
        { description: 'Summarises the key history back to the patient and checks for accuracy', marks: 1 },
        { description: 'Asks if there is anything the patient feels has been missed', marks: 1 },
        { description: 'Thanks the patient for their time', marks: 1 },
      ],
    },
    {
      domain: 'Key communication skills',
      items: [
        { description: 'Active listening — maintains eye contact, does not interrupt, uses brief verbal affirmations', marks: 1 },
        { description: 'Summarising — recaps key points during the consultation to confirm understanding', marks: 1 },
        { description: 'Signposting — signals transitions between sections of the history', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Mrs Thompson is a 68-year-old retired teacher with hypertension and AF (not anticoagulated) presenting with sudden-onset occipital headache and left homonymous hemianopia of 2 days\' duration',
    'The headache was thunderclap in onset — instantaneous, worst ever, occipital — beginning simultaneously with the visual disturbance on Thursday morning',
    'Left homonymous hemianopia (visual loss on the left in both eyes) localises to the right optic radiation or right occipital cortex — consistent with right PCA territory infarction',
    'Red flags have been excluded: no neck stiffness, photophobia, or rash; no focal limb weakness or speech difficulty; no eye pain; no diplopia',
    'Key risk factors: uncontrolled hypertension, AF not anticoagulated (a significant omission in management), father had a stroke at 70',
    'This is a stroke until proven otherwise — requires urgent CT/MRI, thrombolysis assessment within the time window, and initiation of anticoagulation for AF',
    'Secondary prevention: anticoagulation (DOAC first-line for AF-related stroke) should be started once haemorrhagic stroke excluded; blood pressure optimisation; statin therapy',
  ],
  vivaQuestions: [
    {
      question: 'What is the posterior circulation, and what are the typical features of a posterior circulation stroke?',
      keyPoints: [
        'Posterior circulation: vertebral arteries → basilar artery → posterior cerebral arteries (PCAs); supplies brainstem, cerebellum, thalami, occipital lobes',
        'Posterior circulation stroke features: headache (more prominent than anterior), visual field defects, diplopia, ataxia, dysphagia, dysarthria, vertigo, crossed deficits',
        'FAST criteria miss ~20% of posterior circulation strokes — headache + visual symptoms without facial drooping or arm weakness',
        'ROSIER score and ABCD2 score help assess stroke probability; consider FAST-ED or BE-FAST (Balance, Eyes, FAST)',
        'Right PCA territory infarct → left homonymous hemianopia; may spare macular vision (dual blood supply)',
      ],
      source: 'Stroke Association UK; NICE CG68; Sims JR et al., Stroke 2009',
    },
    {
      question: 'How would you acutely manage this patient?',
      keyPoints: [
        'Immediate CT head — exclude haemorrhagic stroke before thrombolysis or anticoagulation',
        'If within 4.5 hours of onset and haemorrhage excluded: IV alteplase (thrombolysis) or mechanical thrombectomy if eligible',
        'Aspirin 300 mg once haemorrhage excluded (start within 24 hours; continue for 2 weeks, then switch to anticoagulation for AF)',
        'Admit to hyper-acute stroke unit (HASU) for monitoring, swallowing assessment, early physiotherapy/OT/SALT',
        'Do NOT anticoagulate immediately with a DOAC — wait 2–3 weeks after ischaemic stroke in AF to reduce haemorrhagic transformation risk',
      ],
      source: 'NICE CG68 (2019 update); RCP National Clinical Guideline for Stroke (2023)',
    },
    {
      question: 'This patient has AF and was not anticoagulated. How would you assess her stroke risk, and what would you now recommend?',
      keyPoints: [
        'CHA₂DS₂-VASc score: C=0, H=1 (hypertension), A=0, D=1 (age 65–74), S=0, V=0, A=0, S=0, C=0, female sex category +1 = score ≥2 — anticoagulation was indicated before this event',
        'DOAC first-line for AF-related stroke prevention (apixaban, rivaroxaban, edoxaban, dabigatran) — superior to warfarin for AF stroke prevention',
        'Timing after ischaemic stroke: typically 2 weeks before starting DOAC (risk of haemorrhagic transformation); earlier in TIA',
        'HAS-BLED score to assess bleeding risk — high score should prompt addressing modifiable factors, not withholding anticoagulation',
        'Statin, antihypertensive, and lifestyle modification for secondary prevention',
      ],
      source: 'NICE NG196; ESC AF Guidelines 2020; RCP Stroke Guidelines 2023',
    },
    {
      question: 'What is the difference between a homonymous hemianopia and other types of visual field defect, and how does the anatomy explain them?',
      keyPoints: [
        'Monocular visual loss: lesion anterior to optic chiasm (retina or optic nerve — e.g. CRAO, optic neuritis)',
        'Bitemporal hemianopia: chiasmal lesion compressing decussating nasal fibres (e.g. pituitary adenoma)',
        'Homonymous hemianopia: post-chiasmal lesion — optic tract, lateral geniculate, optic radiation, or occipital cortex',
        'Macular sparing in homonymous hemianopia suggests occipital cortex lesion (dual middle/posterior cerebral artery supply to macula)',
        'This patient: left homonymous hemianopia → lesion in right optic radiation or right occipital cortex → right PCA territory',
      ],
      source: 'OHCM 10th ed., Ch. 10; Purvin VA & Kawasaki A, Practical Neuro-Ophthalmology (2012)',
    },
  ],
};

const speechLanguageMockExam: MockExamStation = {
  id: 'speech_and_language_assessment',
  title: 'Speech and Language Assessment',
  diagnosis: 'Broca\'s (expressive) aphasia',
  specialtyId: 'neurology',
  candidateBrief: {
    setting: 'You are an FY1 doctor on the stroke ward.',
    scenario: 'A 71-year-old man is on day 2 following a left MCA ischaemic stroke. The consultant has asked you to assess his speech and language and document your findings.',
    tasks: [
      'Assess this patient\'s communication and present your findings',
      'Classify the type of speech and language problem and localise the lesion',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'George Abbott',
    age: 71,
    occupation: 'Retired civil engineer',
    openingLine: '"H... hello. I\'m... George." [long pause, effortful] "Stroke. Yesterday." [frustrated expression]',
    historyOfPresentingComplaint: [
      {
        label: 'Fluency — non-fluent, effortful, telegraphic output; visible frustration',
        quote: 'Non-fluent, effortful output. Short, telegraphic phrases only. Long pauses between words. Simplified grammar. Examples: "Yes... hospital." "Wife... morning... came." "Better... today... little." Actor should demonstrate visible effort and frustration with each sentence.',
      },
      {
        label: 'Comprehension — yes/no questions: intact',
        quote: 'Intact for simple yes/no questions. Answers correctly: "Is your name George?" → nods. "Are you in a hotel?" → shakes head. "Did your wife visit today?" → nods. "Are you feeling better?" → slight nod with uncertain expression.',
      },
      {
        label: 'Comprehension — 3-step command: follows all 3 steps correctly (slowly)',
        quote: 'Can follow a 3-step command correctly: "Point to the ceiling, then touch your nose, then hold up 2 fingers." Completes all 3 steps correctly though slowly.',
      },
      {
        label: 'Repetition — impaired; cannot repeat phrases; frustrated',
        quote: 'Impaired. Cannot repeat phrases. For "No ifs, ands, or buts": attempts "No... ifs... and..." then stops, shakes head in frustration. For short phrases like "the cat sat": manages "cat... sat" only.',
      },
      {
        label: 'Naming — confrontation naming: impaired for less common objects',
        quote: 'Impaired for less common objects. Can name: watch, pen, hand. Struggles with: knuckle, lapel, thumbnail. For difficult items: long pause, sometimes produces first sound only, then shakes head.',
      },
      {
        label: 'Reading — follows simple written command; cannot read aloud fluently',
        quote: 'Can follow a simple written command (point to window) correctly when shown a card. Cannot read aloud fluently — effortful, misses words.',
      },
      {
        label: 'Writing — can write name; written sentences agrammatic (mirrors spoken output)',
        quote: 'Can write his name legibly. Written sentences are abbreviated and agrammatic — mirrors his spoken output. "George. Wife visit."',
      },
      {
        label: 'CN VII — right-sided lower facial weakness (UMN pattern; forehead spared)',
        quote: 'UMN pattern right-sided lower facial weakness. Right nasolabial fold flattened. Right corner of mouth droops slightly at rest. Forehead wrinkles symmetrically (forehead spared — UMN lesion above facial nerve nucleus).',
      },
      {
        label: 'CN IX/X — mild dysarthria; soft palate elevates symmetrically; gag intact',
        quote: 'Mild dysarthria present — slurred quality to speech. Soft palate elevates symmetrically on "aah". Gag reflex present bilaterally.',
      },
      {
        label: 'CN XII — tongue deviates right on protrusion (UMN pattern; no wasting)',
        quote: 'Tongue deviates to the right on protrusion (UMN pattern — deviates towards the weak side). No wasting or fasciculations (UMN lesion, not LMN).',
      },
      {
        label: 'Right arm — UMN posture; increased tone; reduced extension against resistance',
        quote: 'Right arm held in UMN posture — flexed at elbow, wrist flexion. Tone increased. Patient cannot fully extend right elbow against resistance.',
      },
      {
        label: 'Left side — normal throughout (face, arm, leg, tongue)',
        quote: 'Left face normal. Left arm and leg normal power and tone. Left tongue movement normal.',
      },
    ],
    pastMedicalHistory: [
      { label: 'Left MCA ischaemic stroke — 36 hours ago', quote: '"Stroke. Yesterday." [effortful, points to head]' },
    ],
    drugHistory: [],
    familyHistory: [],
    socialHistory: [
      { label: 'Retired civil engineer', quote: '"George." [cooperative, maintains good eye contact]' },
      { label: 'Wife visited this morning', quote: '"Wife..." [emotional, eyes fill] "Talk... back?" [gestures asking if speech will return]' },
    ],
    importantNegatives: [
      'No jargon or paraphasias ("George does not substitute wrong words or produce nonsense words — his output is reduced and effortful, not fluent with errors")',
      'No comprehension impairment to simple commands (distinguishes Broca\'s from Wernicke\'s or global aphasia)',
      'No CN V sensory loss on either side',
      'No hearing loss — responds appropriately to spoken questions',
      'No ptosis or pupil asymmetry',
      'Left-sided cranial nerves and limbs are normal',
    ],
    ice: {
      ideas: '"Stroke..." [points to head, gestures frustration] [nods when asked if he understands he\'s had a stroke]',
      concerns: '"Wife..." [emotional, eyes fill] "Talk... back?" [gestures asking if speech will return]',
      expectations: '"Better..." [hopeful expression] [nods emphatically when asked if he wants to work on his speech]',
    },
    onlyIfDirectlyAsked: [
      'Pain — shakes head when asked if he is in pain',
      'Mood — when specifically asked, he acknowledges low mood with a sad expression and a nod',
    ],
    behaviourNotes: [
      'Demonstrate effortful, telegraphic speech throughout — not fluent aphasia; avoid jargon or nonsensical words',
      'Show visible frustration when unable to find words — brow furrowing, hand gestures to compensate',
      'Maintain good eye contact and cooperative engagement — he wants to communicate and tries hard',
      'Respond appropriately to yes/no questions (nod/shake head) — comprehension is relatively preserved',
      'Become emotional when asked about wife or returning to normal — wipe eyes, composed quickly',
      'If the student communicates poorly (fast speech, complex sentences, no time given), visibly struggle more',
      'If the student adapts communication style (slow, simple, closed questions), respond slightly more easily',
    ],
  },
  markScheme: [
    {
      domain: 'Opening the consultation',
      items: [
        { description: 'Introduces themselves clearly and appropriately adapts communication style for the patient', marks: 1 },
        { description: 'Confirms the patient\'s identity and explains the purpose of the assessment', marks: 1 },
        { description: 'Checks for pain and gains consent before proceeding', marks: 1 },
      ],
    },
    {
      domain: 'Contextual assessment',
      items: [
        { description: 'Assesses orientation and general comprehension before starting formal testing', marks: 1 },
        { description: 'Observes spontaneous speech — notes non-fluent, effortful, telegraphic output', marks: 2 },
      ],
    },
    {
      domain: 'Language assessment — 6 components',
      items: [
        { description: 'Formally assesses fluency — observes phrase length, effort, and grammar in spontaneous speech', marks: 1 },
        { description: 'Formally assesses comprehension — tests yes/no questions and a multi-step command', marks: 1 },
        { description: 'Formally assesses repetition — asks patient to repeat a phrase; identifies impairment', marks: 2 },
        { description: 'Formally assesses naming — uses confrontation naming with objects; identifies word-finding difficulty', marks: 1 },
        { description: 'Assesses reading — written command card; assesses reading aloud', marks: 1 },
        { description: 'Assesses writing — asks patient to write name or a sentence', marks: 1 },
      ],
    },
    {
      domain: 'Cranial nerve assessment',
      items: [
        { description: 'Assesses CN VII: inspects for facial asymmetry, tests forehead separately to identify UMN pattern', marks: 2 },
        { description: 'Assesses CN IX/X: checks voice quality and palatal elevation', marks: 1 },
        { description: 'Assesses CN XII: asks patient to protrude tongue and identifies rightward deviation (UMN pattern)', marks: 2 },
      ],
    },
    {
      domain: 'Classification and localisation',
      items: [
        { description: 'Correctly classifies as non-fluent aphasia with preserved comprehension and impaired repetition — consistent with Broca\'s aphasia', marks: 2 },
        { description: 'Localises to the left posterior inferior frontal gyrus (Broca\'s area) in the dominant hemisphere', marks: 2 },
        { description: 'Distinguishes aphasia from dysarthria — speech content is impaired, not just articulation', marks: 1 },
      ],
    },
    {
      domain: 'Closing the consultation',
      items: [
        { description: 'Explains findings to the patient in accessible terms and acknowledges his frustration with empathy', marks: 1 },
        { description: 'Mentions SALT referral as next step', marks: 1 },
        { description: 'Thanks the patient for his cooperation', marks: 1 },
      ],
    },
    {
      domain: 'Key communication skills',
      items: [
        { description: 'Adapts communication throughout — uses slow, simple language; allows time for responses; uses closed questions', marks: 2 },
        { description: 'Summarising — recaps findings clearly at the end', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Mr Abbott is a 71-year-old man on day 2 post-left MCA ischaemic stroke presenting with a non-fluent, effortful aphasia',
    'Language assessment reveals: non-fluent spontaneous speech (telegraphic, effortful, agrammatic); relatively preserved comprehension (follows 3-step commands); impaired repetition; impaired naming; impaired reading aloud and writing',
    'This pattern — non-fluent speech, preserved comprehension, impaired repetition — is consistent with Broca\'s (expressive) aphasia, localising to the left posterior inferior frontal gyrus (Broca\'s area)',
    'Cranial nerve examination: right-sided lower facial weakness in UMN pattern (forehead spared, consistent with a supranuclear lesion); tongue deviates right on protrusion (UMN — no wasting or fasciculations)',
    'Right arm shows increased tone and UMN posturing — consistent with left internal capsule or MCA territory involvement',
    'Aphasia differs from dysarthria: the problem is with the content and structure of language, not just articulation',
    'Plan: urgent SALT referral; ongoing speech therapy; swallowing assessment if not already done; psychological support for patient and family',
  ],
  vivaQuestions: [
    {
      question: 'Compare Broca\'s, Wernicke\'s, and conduction aphasia.',
      keyPoints: [
        'Broca\'s (expressive): non-fluent, effortful; comprehension relatively intact; repetition impaired; patient aware of deficit and frustrated; Broca\'s area (BA 44/45), left inferior frontal gyrus',
        'Wernicke\'s (receptive): fluent but meaningless (jargon/paraphasias); comprehension severely impaired; repetition impaired; patient often unaware of deficit; Wernicke\'s area (BA 22), left posterior superior temporal gyrus',
        'Conduction aphasia: fluent; comprehension intact; repetition severely impaired out of proportion to other deficits; arcuate fasciculus lesion connecting Broca\'s and Wernicke\'s areas',
        'Global aphasia: non-fluent, comprehension severely impaired, repetition impaired — large MCA territory infarct',
        'Key test to distinguish: repetition task differentiates conduction from Broca\'s; comprehension tasks differentiate Broca\'s from Wernicke\'s',
      ],
      source: 'Mesulam MM, Ann Neurol 1998; OHCM 10th ed., Ch. 10',
    },
    {
      question: 'Where exactly is Broca\'s area, and what is the arcuate fasciculus?',
      keyPoints: [
        'Broca\'s area: Brodmann areas 44 (pars opercularis) and 45 (pars triangularis) of the left inferior frontal gyrus',
        'Located in the dominant hemisphere (left in ~96% of right-handed people, ~70% of left-handed)',
        'Arcuate fasciculus: white matter tract connecting Broca\'s area (frontal) to Wernicke\'s area (temporal) via parietal lobe',
        'Damage to arcuate fasciculus → conduction aphasia; damage to Broca\'s area → expressive aphasia',
        'MCA superior division supplies Broca\'s area; inferior division supplies Wernicke\'s area — division determines aphasia type',
      ],
      source: 'Catani M & Mesulam MM, Cortex 2008; Blumenfeld H, Neuroanatomy Through Clinical Cases (2nd ed.)',
    },
    {
      question: 'What is the role of the Speech and Language Therapy team in stroke rehabilitation?',
      keyPoints: [
        'SALT assessment: screens for dysphagia (risk of aspiration pneumonia), assesses communication and swallowing',
        'Aphasia therapy: intensive therapy improves language outcomes, especially in first 3 months; constraint-induced aphasia therapy, augmentative communication',
        'Dysarthria management: exercises to improve articulation, voice projection, and breath support',
        'Swallowing: nil by mouth if aspiration risk; modified diet/thickened fluids; NG tube if unable to swallow safely',
        'NICE recommends SALT assessment within 4 hours of stroke admission; ongoing therapy as tolerated',
        'Family education: strategies to improve communication at home',
      ],
      source: 'RCP National Clinical Guideline for Stroke (2023); NICE CG68',
    },
    {
      question: 'How do you distinguish dysphasia from dysarthria at the bedside?',
      keyPoints: [
        'Dysphasia (aphasia): disorder of language — impaired word selection, grammar, comprehension, reading, or writing; content of language is affected',
        'Dysarthria: motor speech disorder — articulatory muscles weak or incoordinated; content of language is normal; written language intact',
        'Key test: ask patient to write a sentence — dysarthric patient writes normally; aphasic patient\'s writing mirrors spoken impairment',
        'Dysarthria causes: UMN (pseudobulbar palsy — spastic dysarthria), LMN (bulbar palsy), cerebellar (ataxic dysarthria), extrapyramidal (hypokinetic dysarthria in Parkinson\'s)',
        'Both can coexist after a stroke; detailed language testing is required to distinguish',
      ],
      source: 'Duffy JR, Motor Speech Disorders (3rd ed.); OHCM 10th ed., Ch. 10',
    },
  ],
};

const dizzinessMockExam: MockExamStation = {
  id: 'dizziness_and_vertigo_history',
  title: 'Dizziness and Vertigo History',
  diagnosis: 'Benign paroxysmal positional vertigo (BPPV) — right posterior canal',
  specialtyId: 'neurology',
  candidateBrief: {
    setting: 'You are an FY1 doctor in a GP surgery.',
    scenario: 'A 55-year-old woman has presented with a 3-week history of episodic dizziness.',
    tasks: [
      'Take a focused history',
      'Explain your working diagnosis and management plan to the patient',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'Sarah Patel',
    age: 55,
    occupation: 'Secondary school teacher',
    openingLine: '"I\'ve been getting these awful dizzy spells for about three weeks now. They come on when I turn over in bed or look up at the whiteboard at school. I\'m a bit worried — could it be something serious?"',
    socrates: [
      {
        label: 'Site / character',
        descriptor: 'true rotational vertigo — room spinning; not faintness or non-specific dizziness',
        quotes: ['"I get these spinning dizzy spells — the room rotates." – "It definitely feels like the room is going round, not just that I feel faint or lightheaded."'],
      },
      {
        label: 'Onset',
        descriptor: 'sudden onset 3 weeks ago; first episode on rolling over in bed',
        quotes: ['"They started about 3 weeks ago, quite suddenly." – "The first time it happened I\'d just turned over in bed and the room just spun violently."'],
      },
      {
        label: 'Duration of each episode',
        descriptor: 'very brief — 20 to 30 seconds; resolves suddenly; never more than 1 minute',
        quotes: ['"Each episode is very brief — probably 20 to 30 seconds at most." – "Then it just stops, as suddenly as it started. It doesn\'t last more than a minute."'],
      },
      {
        label: 'Triggers',
        descriptor: 'specific positional triggers — rolling right in bed; tilting head back; looking up at whiteboard; no symptoms at rest',
        quotes: ['"It happens when I roll to the right in bed — every single time." – "Also when I look up at the whiteboard at school, or if I tilt my head back." – "It doesn\'t happen when I\'m just sitting still or standing still."'],
      },
      {
        label: 'Associated symptoms',
        descriptor: 'nausea with each episode (no vomiting); completely normal between episodes',
        quotes: ['"Yes, I do feel quite nauseous when it happens — it\'s unpleasant." – "I haven\'t actually been sick with it." – "Between the episodes I\'m completely normal — no dizziness at all."'],
      },
      {
        label: 'Preceding illness',
        descriptor: 'mild URTI (cold) approximately 4 weeks ago, fully resolved; dizziness started ~1 week later',
        quotes: ['"I had a cold about 4 weeks ago — just a mild one, blocked nose and sore throat. It\'s fully cleared up now." – "The dizziness started about a week after the cold."'],
      },
    ],
    pastMedicalHistory: [
      { label: 'Mild hypertension — well controlled on amlodipine (3 years)', quote: '"Just mild high blood pressure — I\'ve been on amlodipine for about 3 years. It\'s well controlled." – "Never had anything like this before."' },
    ],
    drugHistory: [
      { label: 'Amlodipine 5 mg once daily (hypertension)', quote: '"Amlodipine 5 mg once a day for my blood pressure."' },
      { label: 'Vitamin D — occasional', quote: '"I take vitamin D sometimes."' },
      { label: 'No other prescribed medications', quote: '"No other prescribed medications."' },
    ],
    familyHistory: [
      { label: 'Mother — vertigo in her 60s (labyrinthitis)', quote: '"My mother had vertigo in her 60s — I think it was called labyrinthitis or something." – "No history of neurological problems in the family."' },
    ],
    socialHistory: [
      { label: 'Secondary school teacher (25 years); cycles to work — stopped due to dizziness concerns', quote: '"I\'m a secondary school teacher, been teaching for 25 years." – "I cycle to work — I haven\'t been because I\'m worried about the dizziness."' },
      { label: 'Married with two teenage children; not driving for 3 weeks (considers it unsafe)', quote: '"I\'m married with two teenagers." – "I haven\'t driven for 3 weeks — I don\'t feel it\'s safe."' },
      { label: 'Non-smoker; alcohol 6–7 units/week (weekends only)', quote: '"I don\'t smoke. Maybe 6–7 units of alcohol a week, weekends only."' },
    ],
    importantNegatives: [
      'No hearing loss ("My hearing is completely normal — no change at all.")',
      'No tinnitus ("No ringing or buzzing in my ears.")',
      'No ear fullness or pressure ("No.")',
      'No diplopia ("My vision is completely normal during the episodes.")',
      'No dysphagia or dysarthria ("No problems swallowing or speaking.")',
      'No limb weakness or incoordination ("My arms and legs are completely fine.")',
      'No headache associated with the episodes ("No headache with the dizziness.")',
      'No facial numbness ("No.")',
      'No falls or injury from the episodes ("I\'ve grabbed onto things but haven\'t actually fallen.")',
      'No constant background dizziness between episodes ("Completely fine between attacks — I\'m not dizzy right now.")',
    ],
    ice: {
      ideas: '"I wondered if it might be an ear problem — my mum had something similar. Or could it be my blood pressure tablets?"',
      concerns: '"I\'m most worried it could be something serious — a brain tumour or something like that. My colleague had a brain tumour last year and it started with dizziness." – "I\'m also worried because I don\'t feel safe driving."',
      expectations: '"I\'d really like to know what\'s causing it and whether there\'s a treatment — I want to get back to normal."',
    },
    onlyIfDirectlyAsked: [
      'Driving — has not driven since the dizziness started because she is worried it could happen at the wheel ("I haven\'t driven for 3 weeks — I don\'t feel it\'s safe.")',
      'Alcohol — confirms 6–7 units/week on weekends only; not during the week',
    ],
    behaviourNotes: [
      'Genuinely anxious about the possibility of a brain tumour — this needs to be addressed explicitly and sensitively',
      'Responds very well to a clear, confident diagnosis with a simple explanation (canaliths, no serious cause)',
      'Asks "Is it safe for me to drive?" — student should address this (safe once asymptomatic; advise to wait until symptoms resolved)',
      'Asks "Will this go away on its own?" — answer: often resolves spontaneously over weeks; Epley manoeuvre hastens resolution',
      'Demonstrates relief when reassured — "Oh, that\'s such a relief — I was so frightened it was something terrible"',
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
        { description: 'Uses open questioning to elicit the presenting complaint', marks: 1 },
      ],
    },
    {
      domain: 'History — vertigo characterisation',
      items: [
        { description: 'Distinguishes true rotational vertigo (room spinning) from non-specific dizziness or presyncope', marks: 2 },
        { description: 'Establishes the brief duration of each episode (<1 minute)', marks: 1 },
        { description: 'Identifies the positional trigger — rolling to one side in bed and looking up', marks: 2 },
        { description: 'Confirms normal function between episodes — no constant dizziness', marks: 1 },
      ],
    },
    {
      domain: 'Screening — ENT symptoms',
      items: [
        { description: 'Asks about hearing loss', marks: 1 },
        { description: 'Asks about tinnitus', marks: 1 },
        { description: 'Asks about aural fullness or ear discharge', marks: 1 },
      ],
    },
    {
      domain: 'Screening — neurological symptoms',
      items: [
        { description: 'Asks about diplopia, dysarthria, and dysphagia (posterior fossa red flags)', marks: 2 },
        { description: 'Asks about limb weakness, incoordination, or falls', marks: 1 },
        { description: 'Asks about headache associated with the episodes', marks: 1 },
      ],
    },
    {
      domain: 'ICE',
      items: [
        { description: 'Explores the patient\'s ideas, concerns, and expectations — addresses brain tumour fear specifically', marks: 2 },
      ],
    },
    {
      domain: 'Past medical, drug, and social history',
      items: [
        { description: 'Asks about previous ear problems, head injury, or recent viral illness', marks: 1 },
        { description: 'Takes a drug history — considers ototoxic medications and antihypertensives', marks: 1 },
        { description: 'Asks about driving and impact on daily life', marks: 1 },
      ],
    },
    {
      domain: 'Closing the consultation',
      items: [
        { description: 'Summarises the key history back to the patient and checks for accuracy', marks: 1 },
        { description: 'Asks if there is anything the patient feels has been missed', marks: 1 },
        { description: 'Thanks the patient for their time', marks: 1 },
      ],
    },
    {
      domain: 'Key communication skills',
      items: [
        { description: 'Active listening — maintains eye contact, does not interrupt, uses brief verbal affirmations', marks: 1 },
        { description: 'Summarising — recaps key points during the consultation to confirm understanding', marks: 1 },
        { description: 'Signposting — signals transitions between sections of the history', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Mrs Patel is a 55-year-old teacher presenting with a 3-week history of episodic rotational vertigo, onset approximately one week after a mild URTI',
    'Each episode is brief (<30 seconds), triggered by specific head movements — rolling to the right in bed and extending the neck — with complete resolution between episodes',
    'This is true rotational vertigo, not presyncope or non-specific dizziness; absence of constant background imbalance supports a peripheral rather than central cause',
    'ENT screen is negative: no hearing loss, tinnitus, or aural fullness — this excludes Ménière\'s disease and other causes of recurrent vertigo with hearing involvement',
    'Neurological screen is negative: no diplopia, dysarthria, dysphagia, limb weakness, or headache — this makes a central (posterior fossa) cause unlikely',
    'Working diagnosis: BPPV, right posterior canal — right-sided positional trigger, brief episodes, post-viral onset',
    'Management: Epley manoeuvre (right-sided); reassurance regarding prognosis; review driving once symptom-free; safety-netting for red flags suggesting central pathology',
  ],
  vivaQuestions: [
    {
      question: 'What is the pathophysiology of BPPV?',
      keyPoints: [
        'Otoliths (calcium carbonate crystals — otoconia) from the utricle become displaced into a semicircular canal, most commonly the posterior canal',
        'Displaced otoliths create abnormal endolymph movement when the head changes position, stimulating the ampullary hair cells inappropriately',
        'This generates a sensation of rotational movement and triggers nystagmus — the characteristic geotropic, fatigable nystagmus of posterior canal BPPV',
        'Precipitants: head trauma, prolonged recumbency, viral labyrinthitis, osteoporosis (calcium crystal fragility), idiopathic',
        'Right posterior canal BPPV: Dix-Hallpike right side positive — upbeat-torsional nystagmus with latency of 5–20 seconds, fatigable, resolves <1 minute',
      ],
      source: 'Bhattacharyya N et al., Otolaryngol Head Neck Surg 2017 (AAO-HNS BPPV Guidelines)',
    },
    {
      question: 'How do you perform the Dix-Hallpike test, and what constitutes a positive result?',
      keyPoints: [
        'Patient seated on examination couch, head turned 45° to the tested side',
        'Rapidly reclined to supine with head extended 20–30° below the horizontal (head hanging position)',
        'Observe for nystagmus — latency of 5–20 seconds before onset; upbeat-torsional nystagmus (top pole beats toward the ground) for posterior canal BPPV',
        'Patient reports vertigo coinciding with nystagmus; both resolve within 60 seconds (fatigable)',
        'Repeat on opposite side to test the other posterior canal',
        'Contraindications: cervical instability, severe carotid stenosis, limited neck extension',
      ],
      source: 'Dix MR & Hallpike CS, Proc R Soc Med 1952; NICE CKS BPPV (2023)',
    },
    {
      question: 'Describe the Epley manoeuvre and how it works.',
      keyPoints: [
        'Canalith repositioning procedure: moves otoliths out of the semicircular canal back into the utricle',
        'Steps (right posterior canal): Dix-Hallpike position (right) → head rotated 90° to left → body rolled onto left side with head rotated further 90° → patient sits up',
        'Each position held for 30–60 seconds until nystagmus and vertigo resolve',
        'Single Epley manoeuvre resolves BPPV in ~80% of cases; repeat if required',
        'Vestibular suppressants (prochlorperazine, cyclizine) do not treat BPPV and may delay recovery — avoid as first-line in BPPV',
      ],
      source: 'Epley JM, Otolaryngol Head Neck Surg 1992; Bhattacharyya N et al., AAO-HNS 2017',
    },
    {
      question: 'When would you be concerned about a central cause of vertigo, and what is the HINTS exam?',
      keyPoints: [
        'Central red flags: acute severe headache, diplopia, dysarthria, dysphagia, limb ataxia, new onset hearing loss, nystagmus that is purely vertical or direction-changing, no fatigability',
        'HINTS exam (for acute continuous vertigo in ED setting): Head Impulse, Nystagmus, Test of Skew',
        'Normal head impulse + direction-changing nystagmus + vertical skew deviation → central cause (HINTS PLUS positive)',
        'Abnormal head impulse + unidirectional nystagmus + no skew → peripheral cause',
        'HINTS has higher sensitivity for posterior fossa stroke than early MRI in first 24–48 hours',
        'BPPV is positional and episodic; HINTS is used for acute spontaneous persistent vertigo (e.g. vestibular neuritis vs brainstem stroke)',
      ],
      source: 'Kattah JC et al., Stroke 2009; Newman-Toker DE et al., Acad Emerg Med 2013',
    },
  ],
};

const parkinsonsExaminationMockExam: MockExamStation = {
  id: 'parkinsons_examination',
  title: 'Parkinsonism Examination — Drug Side Effects',
  diagnosis: 'Drug-induced Parkinsonism (metoclopramide)',
  specialtyId: 'neurology',
  candidateBrief: {
    setting: 'You are an FY1 in a general neurology outpatient clinic.',
    scenario:
      'Mrs Dorothy Lee, 70, has been referred by her GP with a 4-month history of tremor, slowness, and a change in her walking. Her GP\'s letter notes she has been taking metoclopramide 10 mg three times a day for reflux for the past 10 months.',
    tasks: [
      'Perform a focused neurological examination for parkinsonism',
      'Present your findings and explain the likely diagnosis to the examiner',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'Dorothy Lee',
    age: 70,
    occupation: 'Retired librarian',
    openingLine:
      '"Hello doctor. My GP sent me — she\'s worried about my shaking and the way I\'ve been walking. It\'s been getting worse over the last few months."',
    historyOfPresentingComplaint: [
      {
        label: 'Presenting complaint — bilateral tremor, bradykinesia, shuffling gait (onset 4 months ago)',
        quote: '"My hands shake when they\'re resting in my lap — it started about 4 months ago. I\'ve slowed right down; simple things like buttoning my coat take forever. My walk has changed — I shuffle." – "I feel stiff, especially in my arms."',
      },
      {
        label: 'Timeline — symptoms began 4–5 months after starting metoclopramide (10 months ago)',
        quote: '"The shaking started maybe 4 or 5 months after I started that tablet. I didn\'t connect the two at first." – "My GP noticed and sent me here."',
      },
      {
        label: 'Examination: general appearance — masked facies; stooped; bilateral resting tremor right > left; slow to rise',
        quote: '[Actor displays]: mildly reduced facial expression (soft masking); stooped posture; seated with both hands showing slight bilateral resting tremor — right hand visibly more than left; slow to rise from the chair.',
      },
      {
        label: 'Examination: speech — mildly hypophonic and monotonous; fully intelligible',
        quote: '[Actor presents]: mildly hypophonic; monotonous; fully intelligible and coherent.',
      },
      {
        label: 'Examination: tremor — bilateral resting (4–5 Hz, pill-rolling, right > left); reduces with action; no intention tremor',
        quote: '[Actor presents]: bilateral resting tremor (right > left, 4–5 Hz, pill-rolling quality); tremor REDUCES when the patient holds arms outstretched or reaches for an object; no intention tremor on finger-nose testing.',
      },
      {
        label: 'Examination: tone — bilateral cogwheel rigidity (right > left); increases with reinforcement',
        quote: '[Actor complies]: bilateral cogwheel rigidity at wrists and elbows, right slightly > left; increased with reinforcement (contralateral hand clenching).',
      },
      {
        label: 'Examination: bradykinesia — bilateral slowing with fatiguing on finger tapping and heel tapping',
        quote: '[Actor performs]: bilateral slowing and reduced amplitude on finger tapping with fatiguing; slowing on hand opening/closing; bilateral heel tapping reduced speed.',
      },
      {
        label: 'Examination: gait — shuffling small steps; reduced bilateral arm swing; stooped; en-bloc turning; no freezing',
        quote: '[Actor walks]: short shuffling steps; reduced bilateral arm swing; stooped posture; en-bloc turning (multiple small steps); no freezing or festination demonstrated.',
      },
      {
        label: 'Examination: postural stability — abnormal retropulsion test (one step back to recover)',
        quote: '[Actor]: after being warned, examiner pulls shoulders back — actor takes one step backwards to recover; recovers independently.',
      },
      {
        label: 'Examination: glabellar tap — positive Myerson\'s sign (fails to habituate after 5+ taps)',
        quote: '[Actor]: fails to habituate to repeated glabellar tapping — continues blinking after 5+ taps (positive Myerson\'s sign).',
      },
      {
        label: 'Examination: lower limb reflexes and plantars — present, symmetric; plantars flexor bilaterally',
        quote: '[Actor]: knee and ankle jerks present and symmetric; plantar responses flexor bilaterally (normal — distinguishes from vascular Parkinsonism or UMN pathology).',
      },
    ],
    pastMedicalHistory: [
      { label: 'GORD — on metoclopramide 10 mg TDS for 10 months', quote: '"I take metoclopramide 10 mg three times a day — been on it about 10 months for my reflux."' },
    ],
    drugHistory: [
      { label: 'Metoclopramide 10 mg three times daily — GORD (KEY causative agent)', quote: '"I take metoclopramide 10 mg three times a day — been on it about 10 months for my reflux."' },
      { label: 'Omeprazole (GORD)', quote: '"I also take omeprazole..."' },
      { label: 'Amlodipine (hypertension)', quote: '"...and amlodipine for my blood pressure."' },
    ],
    familyHistory: [
      { label: 'Father — idiopathic Parkinson\'s disease', quote: '"My father had it, but no siblings or children as far as I know."' },
    ],
    socialHistory: [
      { label: 'Retired librarian; lives alone', quote: '"I\'m worried I\'m going to deteriorate like he did. I live alone and I already find some things quite hard."' },
    ],
    importantNegatives: [
      'No family history of Parkinson\'s disease in siblings or children ("My father had it, but no siblings or children as far as I know.")',
      'Symptoms did not predate metoclopramide ("I was completely fine before those tablets.")',
      'Bilateral onset — not asymmetric ("Both sides started together — the right is a bit worse.")',
      'No cognitive decline or hallucinations ("My memory is fine. I\'m not seeing or hearing things.")',
      'No anosmia ("My sense of smell is the same as ever.")',
      'No REM sleep behaviour disorder ("I sleep normally — no acting out dreams.")',
    ],
    ice: {
      ideas:
        '"My GP thinks it might be Parkinson\'s — I\'m terrified. My father had it and it was very difficult at the end."',
      concerns:
        '"I\'m worried I\'m going to deteriorate like he did. I live alone and I already find some things quite hard."',
      expectations: '"I\'d like to know what\'s causing it and whether anything can be done."',
    },
    onlyIfDirectlyAsked: [
      'Anosmia — sense of smell unchanged (negative; hyposmia characterises idiopathic PD)',
      'Autonomic symptoms — no orthostatic dizziness, no constipation, no urinary problems (negative; common in idiopathic PD)',
      'Whether she takes the metoclopramide as prescribed — yes, three times a day without fail for 10 months',
    ],
    behaviourNotes: [
      'Cooperative and polite; visibly anxious about the diagnosis being Parkinson\'s disease',
      'Visibly relieved if the student raises the possibility that metoclopramide is the cause: "Really? So it might not be Parkinson\'s disease?"',
      'Asks "What happens now? Do I need to stop the tablet?" — student should advise stopping metoclopramide and explain the plan',
      'Becomes briefly emotional when mentioning her father\'s illness — composes herself quickly',
    ],
  },
  markScheme: [
    {
      domain: 'Opening the consultation',
      items: [
        { description: 'Introduces themselves, explains the purpose of the examination, and gains consent', marks: 1 },
        { description: 'Washes or gels hands before beginning', marks: 1 },
        {
          description:
            'Takes a brief drug history before examining — identifies metoclopramide as the causative agent',
          marks: 2,
        },
      ],
    },
    {
      domain: 'General inspection',
      items: [
        {
          description: 'Inspects from the end of the bed: notes resting tremor, masked facies, stooped posture',
          marks: 1,
        },
        { description: 'Assesses speech — notes hypophonia and monotonous quality', marks: 1 },
      ],
    },
    {
      domain: 'Upper limb examination',
      items: [
        {
          description: 'Tests tone for cogwheel rigidity at wrists and elbows using reinforcement technique',
          marks: 2,
        },
        {
          description:
            'Assesses resting tremor and demonstrates it diminishes with posture/action (distinguishes from essential tremor)',
          marks: 2,
        },
        {
          description: 'Tests bradykinesia — finger tapping and hand opening/closing; notes bilateral slowing with fatiguing',
          marks: 2,
        },
      ],
    },
    {
      domain: 'Lower limb examination',
      items: [
        { description: 'Tests heel tapping for lower limb bradykinesia', marks: 1 },
        {
          description: 'Checks reflexes and plantars — correctly identifies flexor plantars (distinguishes from UMN pathology)',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Gait and postural stability',
      items: [
        {
          description: 'Asks patient to walk and observes stride length, arm swing, posture, and turning',
          marks: 2,
        },
        {
          description: 'Performs the retropulsion test — warns patient before pulling; correctly identifies abnormal response',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Special tests',
      items: [
        { description: 'Performs glabellar tap and identifies failure to habituate (Myerson\'s sign)', marks: 1 },
      ],
    },
    {
      domain: 'Presenting findings and diagnosis',
      items: [
        {
          description:
            'Presents findings in structured format: bilateral symmetric tremor, cogwheel rigidity, bradykinesia; notes bilateral symmetric onset (atypical for idiopathic PD)',
          marks: 2,
        },
        {
          description:
            'Correctly identifies drug-induced Parkinsonism as the likely diagnosis, citing metoclopramide as a dopamine D2-receptor antagonist',
          marks: 2,
        },
        { description: 'Explains next steps: stop metoclopramide; switch to an alternative antiemetic; neurology follow-up', marks: 1 },
      ],
    },
    {
      domain: 'Key communication skills',
      items: [
        { description: 'Explains each examination step before performing it', marks: 1 },
        {
          description: 'Responds to patient\'s fear about Parkinson\'s disease with empathy and appropriate reassurance',
          marks: 1,
        },
      ],
    },
  ],
  expectedPresentation: [
    'Mrs Lee is a 70-year-old retired librarian presenting with a 4-month history of bilateral tremor, bradykinesia, and shuffling gait, beginning approximately 4 months after starting metoclopramide 10 mg TDS',
    'Examination reveals bilateral symmetric parkinsonism: resting tremor (right > left, diminishes with action), cogwheel rigidity bilaterally, and bilateral bradykinesia on finger tapping with fatiguing',
    'Gait shows shuffling small steps, reduced bilateral arm swing, stooped posture, and en-bloc turning; postural instability demonstrated on retropulsion testing; Myerson\'s sign positive',
    'Crucially, the onset is BILATERAL AND SYMMETRIC — in idiopathic Parkinson\'s disease, onset is characteristically asymmetric (one side first)',
    'Plantar responses are flexor bilaterally and reflexes symmetric — this excludes UMN pathology or vascular Parkinsonism as the primary cause',
    'The most likely diagnosis is drug-induced Parkinsonism secondary to metoclopramide, a dopamine D2-receptor antagonist that crosses the blood-brain barrier and depletes striatal dopamine signalling',
    'Management: stop metoclopramide immediately; switch to domperidone (does not cross the BBB) for reflux; symptoms may resolve over weeks to months; arrange neurology follow-up; if symptoms persist beyond 6 months after stopping the drug, consider DaTSCAN to exclude idiopathic PD',
  ],
  vivaQuestions: [
    {
      question: 'Which drugs commonly cause drug-induced Parkinsonism, and what is the mechanism?',
      keyPoints: [
        'Dopamine D2-receptor antagonists block nigrostriatal dopaminergic transmission: metoclopramide, prochlorperazine (both cross the BBB — domperidone does not)',
        'Typical antipsychotics: haloperidol, chlorpromazine — high D2 affinity; extrapyramidal side effects (EPS) common',
        'Atypical antipsychotics: clozapine, quetiapine — lower D2 affinity, lower EPS risk; aripiprazole has partial D2 agonist activity',
        'Drug-induced Parkinsonism: bilateral symmetric onset, little or no tremor (or symmetric tremor), onset weeks to months after starting offending drug',
        'DaTSCAN differentiates: normal in drug-induced Parkinsonism (presynaptic dopamine transporters intact), abnormal in idiopathic PD (reduced putamen uptake)',
      ],
      source: 'NICE NG71 (2017, updated 2022); Thanvi B & Lo TCN, Postgrad Med J 2004',
    },
    {
      question: 'How do you distinguish drug-induced Parkinsonism from idiopathic Parkinson\'s disease clinically and on investigation?',
      keyPoints: [
        'Idiopathic PD: asymmetric onset, prominent resting tremor, anosmia, autonomic features (constipation, orthostatic hypotension), REM sleep behaviour disorder, progressive',
        'Drug-induced: bilateral symmetric, often no tremor or symmetric tremor, no anosmia, no autonomic features, onset after offending drug, may improve after stopping',
        'DaTSCAN (123I-FP-CIT SPECT): normal in drug-induced Parkinsonism; abnormal (reduced striatal uptake, especially putamen) in idiopathic PD — most useful differentiating investigation',
        'If symptoms persist >6 months after stopping causative drug, idiopathic PD becomes more likely — arrange DaTSCAN and neurology referral',
        'L-dopa trial: idiopathic PD typically shows good response; drug-induced may not respond while receptors remain blocked',
      ],
      source: 'NICE NG71 (2017); Brigo F et al., J Neurol 2014',
    },
    {
      question: 'What are the cardinal features of Parkinson\'s disease, and which is required to make the diagnosis?',
      keyPoints: [
        'Bradykinesia is mandatory (UK Brain Bank Criteria): slowness and decrement in amplitude of repetitive movements',
        'Plus at least one of: resting tremor (pill-rolling, 4–6 Hz, diminishes with action), or muscular rigidity (lead-pipe or cogwheel)',
        'Postural instability is a fourth feature (Hoehn & Yahr 3+) — occurs late, not part of initial diagnostic criteria',
        'Supportive features: unilateral onset, asymmetric progression, excellent and sustained L-dopa response',
        'Red flags against PD: early falls, early autonomic failure, cerebellar signs, early dementia, no L-dopa response — suggest atypical Parkinsonism (MSA, PSP, DLB)',
      ],
      source: 'UK Parkinson\'s Disease Society Brain Bank Criteria; NICE NG71 (2017)',
    },
    {
      question: 'What are the first-line pharmacological treatments for idiopathic Parkinson\'s disease?',
      keyPoints: [
        'Levodopa + peripheral dopa decarboxylase inhibitor (co-careldopa/co-beneldopa): most effective; first-line if functional disability significant; long-term complications include dyskinesias and motor fluctuations',
        'Dopamine agonists (ropinirole, pramipexole, rotigotine): used as monotherapy in younger patients to delay L-dopa; risk of impulse control disorders and excessive daytime somnolence',
        'MAO-B inhibitors (rasagiline, selegiline): modest symptomatic benefit; may have neuroprotective properties; fewer motor fluctuations',
        'COMT inhibitors (entacapone, opicapone): adjunct to L-dopa; extend duration of action; manage "wearing off"',
        'Advanced therapies for refractory motor fluctuations: duodopa (jejunal infusion), apomorphine infusion, deep brain stimulation (subthalamic nucleus or GPi)',
      ],
      source: 'NICE NG71 (2017); BNF — Antiparkinson drugs',
    },
  ],
};

const serotoninSyndromeMockExam: MockExamStation = {
  id: 'neuro_serotonin_syndrome',
  title: 'Serotonin Syndrome — History and Examination',
  diagnosis: 'Serotonin syndrome',
  specialtyId: 'neurology',
  candidateBrief: {
    setting: 'You are an FY1 in the Medical Assessment Unit.',
    scenario:
      'Robert Yates, a 62-year-old retired teacher, has been brought in by his wife Dorothy. Robert is too confused to give a reliable history. Observations: temp 38.8°C, HR 118 bpm, BP 148/88 mmHg. He is visibly agitated and sweating.',
    tasks: [
      'Take a focused history from Dorothy and examine Robert, then present your findings and diagnosis to the examiner.',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'Robert Yates (history given by wife Dorothy)',
    age: 62,
    occupation: 'Retired teacher',
    openingLine:
      '"Thank you for seeing us — I\'m Dorothy, Robert\'s wife. He\'s been getting worse and worse over the last two days and I\'m really frightened. He\'s not himself at all — he\'s confused and he can\'t stop shaking."',
    historyOfPresentingComplaint: [
      {
        label: 'Onset of confusion — 2 days after tramadol started',
        quote:
          '"He\'s been on his antidepressant for about six months without any trouble. But then four days ago the GP gave him tramadol for his back, and about two days after he started that he started getting confused and agitated."',
      },
      {
        label: 'Agitation and restlessness',
        quote: '"He keeps picking at the bedsheets and he can\'t sit still. He was trying to get out of bed last night — it\'s very unlike him."',
      },
      {
        label: 'Diaphoresis — profuse sweating',
        quote:
          '"He\'s been absolutely drenched in sweat — I had to change his pyjamas twice last night. He\'s not usually a sweaty person at all."',
      },
      {
        label: 'Tremor of hands and legs',
        quote:
          '"His hands have been shaking badly since yesterday — a real coarse shake. And his legs too, I noticed them trembling."',
      },
      {
        label: 'Myoclonus — sudden jerking movements',
        quote: '"He keeps having these sudden jerks — like he\'s startled, but he\'s not. His whole body jolts. It started yesterday."',
      },
      {
        label: 'Diarrhoea',
        quote: '"He\'s had loose stools since the day after the tramadol — about four or five times yesterday."',
      },
      {
        label: 'Current medications — sertraline 50 mg once daily (6 months) and tramadol 50 mg four times daily (4 days)',
        quote:
          '"He takes sertraline for his depression — has done for six months. And then the GP added tramadol four days ago for his back. He\'s not on anything else, apart from the tramadol that was just added."',
      },
      {
        label: 'Examination finding — bilateral coarse tremor (reveal when tremor assessed)',
        quote:
          '[Robert holds out his hands — a visible coarse bilateral tremor is present at rest and with action. His legs also show intermittent trembling.]',
      },
      {
        label: 'Examination finding — hyperreflexia lower limbs 3+ bilaterally (reveal when reflexes tested)',
        quote:
          "[Robert's knee and ankle jerks are brisk and exaggerated bilaterally — grade 3+. The examiner provides this to the student.]",
      },
      {
        label: 'Examination finding — bilateral ankle clonus 3 beats (reveal when clonus tested)',
        quote: '[Sustained ankle clonus of 3 beats is elicited bilaterally. The examiner provides this to the student.]',
      },
      {
        label: 'Examination finding — no focal power deficit (reveal when power tested)',
        quote: '[Power is 5/5 in all groups bilaterally. There is no focal weakness. The examiner confirms this to the student.]',
      },
      {
        label: 'Examination finding — temperature 38.8°C on examination',
        quote: '[Axillary temperature confirmed as 38.8°C during examination.]',
      },
    ],
    pastMedicalHistory: [
      {
        label: 'Depression — 6 months',
        quote: '"He was diagnosed with depression about six months ago after he retired. He\'s been on sertraline since then."',
      },
      {
        label: 'Acute back pain — mechanical, started one week ago',
        quote: '"He\'s been having bad back pain for about a week — the GP thought it was muscular. That\'s why he prescribed the tramadol."',
      },
      { label: 'No other significant medical history', quote: '"He\'s otherwise been perfectly healthy — no heart problems, no kidney problems, nothing like that."' },
    ],
    drugHistory: [
      { label: 'Sertraline 50 mg once daily — 6 months', quote: '"He takes one sertraline tablet every morning. He\'s been on it for six months and never had any trouble with it before."' },
      { label: 'Tramadol 50 mg four times daily — started 4 days ago', quote: '"The GP gave him tramadol four days ago — one tablet four times a day for the back pain."' },
      { label: 'No OTC medications or herbal supplements', quote: '"He doesn\'t take any over-the-counter painkillers or any herbal things — I always check."' },
      { label: 'No known drug allergies', quote: '"No allergies that we know of."' },
    ],
    familyHistory: [
      { label: 'No relevant family history', quote: '"No, nothing like this in the family. His father had heart trouble but there\'s nothing neurological."' },
    ],
    socialHistory: [
      { label: 'Retired teacher — retired 6 months ago', quote: '"He retired six months ago — that\'s partly when the depression started, I think. He found the transition quite hard."' },
      { label: 'Non-smoker', quote: '"He\'s never smoked."' },
      { label: 'Alcohol — occasional, 2–3 units per week', quote: '"He barely drinks — maybe a glass of wine at the weekend."' },
      { label: 'Lives with wife Dorothy at home', quote: '"We live together at home — we\'ve been married 35 years. He\'s my whole world."' },
    ],
    importantNegatives: [
      'No recent medication changes other than tramadol ("The only thing that changed was the tramadol four days ago. Nothing else.")',
      'No illicit drug use or recreational substances ("Absolutely not — that\'s not Robert at all.")',
      'No head injury or fall prior to onset ("No, he hasn\'t fallen or banged his head.")',
      'No fever or infection symptoms before the tramadol ("He wasn\'t unwell before the tramadol — just the back pain.")',
      'No seizure activity witnessed ("He hasn\'t had a proper seizure — the jerks are more like sudden jolts, not a full fit.")',
      'No neck stiffness or photophobia ("He hasn\'t complained of neck stiffness or being bothered by the light.")',
      'No focal limb weakness ("His arms and legs seem to move normally, just the shaking.")',
    ],
    ice: {
      ideas: '"I looked it up online and I wondered if the two tablets were interacting somehow — is that possible?"',
      concerns: '"I\'m terrified something permanent is happening to his brain. He\'s not Robert at all."',
      expectations: '"I just want you to find out what\'s causing this and make him better — tell me what to do."',
    },
    onlyIfDirectlyAsked: [
      'Robert tried to leave the house last night — Dorothy stopped him ("He tried to go out in the middle of the night in his pyjamas. I had to physically guide him back to bed.")',
      'Robert has been incontinent of urine once ("He was incontinent last night — that\'s never happened before. I didn\'t mention it because I thought it was embarrassing for him.")',
    ],
    behaviourNotes: [
      'Dorothy is visibly distressed and frightened — she should appear close to tears at moments but composed enough to give a clear history.',
      'She is attentive and precise — she has been closely observing Robert and can describe the timeline clearly.',
      'Robert (if the student addresses him directly) should appear confused and distractable — give short, confused responses and trail off mid-sentence. He is not aggressive but is clearly not himself.',
      'If the student asks specifically about the combination of sertraline and tramadol, Dorothy should say she didn\'t know they could interact.',
      'If the student is empathic and explains what they think is happening, Dorothy should visibly relax slightly and say: "So it\'s the tablets doing this? Can you stop them?"',
      "If the student ignores Dorothy or fails to introduce themselves to Robert as well, Dorothy should prompt: \"Are you going to speak to him too?\"",
    ],
  },
  markScheme: [
    {
      domain: 'Opening the consultation',
      items: [
        { description: 'Washes hands and introduces themselves to both Robert and Dorothy by name and role', marks: 1 },
        { description: "Confirms patient's name, date of birth, and Dorothy's relationship to Robert", marks: 1 },
        { description: 'Explains purpose of the assessment and gains consent to take history from Dorothy', marks: 1 },
      ],
    },
    {
      domain: 'History of presenting complaint — symptom timeline',
      items: [
        { description: 'Establishes that confusion and agitation began approximately 2 days after tramadol was started', marks: 2 },
        { description: 'Identifies and quantifies the diaphoresis (profuse sweating, requiring pyjama changes)', marks: 1 },
        { description: 'Identifies the coarse bilateral tremor affecting hands and legs', marks: 1 },
        { description: 'Identifies the myoclonic jerks described by Dorothy', marks: 1 },
        { description: 'Asks about gastrointestinal symptoms and identifies diarrhoea', marks: 1 },
      ],
    },
    {
      domain: 'Medication history — identification of serotonergic combination',
      items: [
        { description: 'Takes a full medication history and identifies sertraline (SSRI) and tramadol as current medications', marks: 2 },
        { description: 'Establishes the dose and duration of sertraline (50 mg, 6 months) and tramadol (50 mg QDS, 4 days)', marks: 1 },
        { description: 'Asks specifically about OTC medications, herbal remedies, and recreational drugs', marks: 1 },
      ],
    },
    {
      domain: 'Focused neurological examination',
      items: [
        { description: 'Assesses tone in lower limbs and identifies bilateral increased (spastic) tone', marks: 1 },
        { description: 'Tests lower limb reflexes and identifies hyperreflexia bilaterally (3+)', marks: 1 },
        { description: 'Tests for clonus at ankles and identifies bilateral sustained clonus', marks: 2 },
        { description: 'Assesses power in lower limbs (confirms no focal deficit)', marks: 1 },
        { description: 'Observes and documents temperature as part of examination findings', marks: 1 },
      ],
    },
    {
      domain: 'Past medical, family, and social history',
      items: [
        { description: 'Establishes past medical history including the depression diagnosis and its timeline', marks: 1 },
        { description: 'Takes social history including living situation, alcohol, and smoking', marks: 1 },
      ],
    },
    {
      domain: 'Closing the consultation',
      items: [
        { description: 'Summarises the history back to Dorothy and checks for any missed information', marks: 1 },
        { description: 'Thanks Dorothy and acknowledges her distress with an empathic statement', marks: 1 },
      ],
    },
    {
      domain: 'Key communication skills',
      items: [
        { description: 'Active listening — does not interrupt Dorothy; uses appropriate non-verbal cues', marks: 1 },
        { description: 'Summarising — recaps key points at a natural break in the consultation', marks: 1 },
        { description: 'Signposting — prepares Dorothy before moving from history to examination', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Robert Yates is a 62-year-old retired teacher presenting with a 2-day history of confusion, agitation, profuse sweating, bilateral coarse tremor, myoclonic jerks, and diarrhoea.',
    'He is on sertraline 50 mg daily (6 months) and tramadol 50 mg QDS was added 4 days ago — symptoms began 2 days after tramadol was started.',
    'On examination: temperature 38.8°C, HR 118; bilateral coarse tremor, bilateral lower limb hyperreflexia (3+), and bilateral ankle clonus (3 beats); no focal power deficit.',
    'The combination of sertraline (SSRI) and tramadol (weak serotonin reuptake inhibitor + opioid) has precipitated serotonin syndrome.',
    'He meets Hunter criteria: inducible clonus plus agitation, and tremor plus hyperreflexia.',
    'Management: immediate cessation of both sertraline and tramadol, supportive care, and consideration of cyproheptadine (serotonin antagonist). Senior and toxicology review required.',
  ],
  vivaQuestions: [
    {
      question: 'What are the Hunter criteria for serotonin syndrome, and how do they differ from the Sternbach criteria?',
      keyPoints: [
        'Hunter criteria require one of: spontaneous clonus; inducible clonus + agitation or diaphoresis; ocular clonus + agitation or diaphoresis; tremor + hyperreflexia; hypertonia + temperature >38°C + ocular clonus or inducible clonus',
        'Hunter criteria have higher sensitivity (84%) and specificity (97%) than Sternbach criteria for serotonin toxicity',
        'Sternbach criteria require 3+ of: agitation, myoclonus, hyperreflexia, diaphoresis, tremor, diarrhoea, incoordination, fever, after excluding other causes',
        'Hunter criteria are preferred clinically — clonus is the most discriminating sign and is not included in Sternbach',
        'Sternbach criteria are older (1991) and less specific — they generate more false positives in practice',
        'Both require recent addition of a serotonergic agent and exclusion of other causes (NMS, meningitis, anticholinergic toxicity)',
      ],
      source: 'Boyer EW & Shannon M, NEJM 2005; Dunkley et al., QJM 2003 (Hunter criteria validation)',
    },
    {
      question: 'Name the drug classes and specific agents that can cause serotonin syndrome.',
      keyPoints: [
        'SSRIs (sertraline, fluoxetine, citalopram) and SNRIs (venlafaxine, duloxetine) — increase serotonin availability via reuptake inhibition',
        'Tramadol — weak serotonin reuptake inhibitor plus opioid agonist; one of the most common precipitants when combined with SSRIs',
        'MAOIs (phenelzine, moclobemide, linezolid — an antibiotic with MAOI properties) — prevent serotonin breakdown; highest risk of severe syndrome',
        'Triptans (sumatriptan), lithium, and St John\'s Wort can contribute to serotonergic excess, particularly in combination',
        'Opioids with serotonergic properties: pethidine (meperidine), fentanyl, and methadone in addition to tramadol',
        'Combination risk is greatest with MAOI + SSRI or MAOI + tramadol — can be fatal',
      ],
      source: 'Boyer EW & Shannon M, NEJM 2005; TOXBASE (UK National Poisons Information Service)',
    },
    {
      question: 'How would you manage a confirmed case of serotonin syndrome in the acute setting?',
      keyPoints: [
        'Stop all serotonergic agents immediately — this is the single most important intervention',
        'Supportive care: IV fluids, continuous cardiac monitoring, oxygen, temperature management for hyperthermia',
        'Benzodiazepines (IV diazepam or lorazepam) for agitation, myoclonus, and seizure control — first-line sedation',
        'Cyproheptadine (5-HT2A antagonist) 12 mg loading dose then 2 mg every 2 hours orally — evidence from case series; not available IV in UK',
        'For hyperthermia >41°C: external cooling, consider intubation and paralysis (non-depolarising agent — avoid suxamethonium due to hyperkalaemia risk with rhabdomyolysis)',
        'Refer to TOXBASE / National Poisons Information Service and escalate to ICU if severe; most mild-moderate cases resolve within 24–72 hours of stopping causative agents',
      ],
      source: 'TOXBASE (UK National Poisons Information Service); Boyer EW & Shannon M, NEJM 2005',
    },
  ],
};

const lowerLimbNeuroMockExam: MockExamStation = {
  id: 'neuro_lower_limb_exam',
  title: 'Lower Limb Neurological Examination',
  diagnosis: "Left-sided upper motor neurone lesion — previous right MCA territory ischaemic stroke",
  specialtyId: 'neurology',
  candidateBrief: {
    setting: 'You are an FY2 in neurology outpatients.',
    scenario: 'Michael Brennan, a 68-year-old retired builder, has been referred for a follow-up appointment 8 months after a stroke.',
    tasks: ['Perform a lower limb neurological examination and present your findings to the examiner.'],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'Michael Brennan',
    age: 68,
    occupation: 'Retired builder',
    openingLine: '"Hello — I\'ve been coming here since my stroke. The left side has never quite been right since."',
    historyOfPresentingComplaint: [
      {
        label: 'Inspection — no wasting; left foot equinus posture and slight circumduction on walking',
        quote:
          '[Michael stands and walks when asked: left foot shows slight equinus (foot drop posture); he circumducts his left leg slightly when walking. No muscle wasting visible bilaterally.]',
      },
      {
        label: 'Tone LEFT lower limb — increased spastic tone, clasp-knife quality',
        quote:
          '[When the examiner passively flexes and extends the left knee and ankle, increased resistance is felt with a clasp-knife quality (resistance that gives way on sustained stretch). The examiner confirms: "You notice increased tone on the left — spastic in character."]',
      },
      {
        label: 'Tone RIGHT lower limb — normal',
        quote: '[Right lower limb tone is normal on passive movement. The examiner confirms: "Right sided tone is normal."]',
      },
      {
        label: 'Power LEFT: hip flexion 4/5, knee extension 4/5, ankle dorsiflexion 3/5, plantarflexion 4/5',
        quote:
          '[Michael resists testing but has reduced power on the left. Ankle dorsiflexion is most affected at 3/5. The examiner provides findings: hip flexion 4/5, knee extension 4/5, ankle dorsiflexion 3/5, plantarflexion 4/5.]',
      },
      {
        label: 'Power RIGHT: 5/5 all groups',
        quote: '[Full power 5/5 in all right lower limb muscle groups. The examiner confirms: "Right-sided power is normal throughout."]',
      },
      {
        label: 'Reflexes LEFT: knee jerk 3+, ankle jerk 3+ (brisk and exaggerated)',
        quote: '[Left knee jerk and ankle jerk are both brisk and exaggerated — grade 3+. The examiner confirms this when reflexes are tested on the left.]',
      },
      {
        label: 'Reflexes RIGHT: knee jerk 2+, ankle jerk 2+ (normal)',
        quote: '[Right knee jerk and ankle jerk are both normal — grade 2+. The examiner confirms this.]',
      },
      {
        label: 'Plantar response LEFT: upgoing (extensor plantar — positive Babinski sign)',
        quote: '[Stroking the lateral sole of the left foot produces extension (upgoing) of the big toe. The examiner confirms: "Left plantar is extensor."]',
      },
      {
        label: 'Plantar response RIGHT: downgoing (normal)',
        quote: '[Right plantar response is flexor (downgoing) — normal. The examiner confirms: "Right plantar is flexor — normal."]',
      },
      {
        label: 'Clonus LEFT: ankle clonus 4 beats',
        quote: '[Rapid dorsiflexion of the left ankle elicits 4 beats of sustained clonus before settling. The examiner confirms this finding.]',
      },
      {
        label: 'Clonus RIGHT: nil',
        quote: '[No clonus on the right. The examiner confirms: "No clonus on the right."]',
      },
      {
        label: 'Sensation — mildly reduced pinprick left leg (subtle, only if tested with neurotip)',
        quote:
          '[If pinprick sensation is tested: mildly reduced on the left leg compared to right, but not absent. Michael says: "That feels a bit duller on the left — less sharp." The examiner confirms mild hemisensory loss on the left.]',
      },
      {
        label: 'Coordination — heel-shin test normal bilaterally (cerebellar function intact)',
        quote:
          '[Heel-shin test is performed smoothly and accurately on both sides. Michael says: "Is that the one where I slide my heel down my shin?" He performs it correctly bilaterally. Examiner confirms: "Coordination is intact bilaterally."]',
      },
      {
        label: 'Gait — circumduction of left leg; hemiplegic pattern; uses a single walking stick',
        quote:
          '[Michael stands and walks when asked. He uses a single walking stick in his right hand. He circumducts his left leg in a hemiplegic gait pattern. He says: "I\'ve had this stick since the stroke — I manage, but the left leg just doesn\'t do what I tell it."]',
      },
    ],
    pastMedicalHistory: [
      { label: 'Right MCA territory ischaemic stroke — 8 months ago', quote: '"I had the stroke eight months ago — right side of the brain they said, which is why my left side is affected."' },
      { label: 'Hypertension', quote: '"I\'ve had high blood pressure for years — that\'s what they said caused the stroke."' },
      { label: 'Hypercholesterolaemia', quote: '"My cholesterol was high — that\'s why they put me on the statin."' },
    ],
    drugHistory: [
      { label: 'Aspirin 75 mg once daily', quote: '"I take a small aspirin every day since the stroke."' },
      { label: 'Atorvastatin 40 mg once daily', quote: '"I\'m on a statin for the cholesterol."' },
      { label: 'Amlodipine 5 mg once daily — for hypertension', quote: '"I\'m on a blood pressure tablet — amlodipine."' },
      { label: 'No known drug allergies', quote: '"No allergies."' },
    ],
    familyHistory: [
      { label: 'Father — hypertension and ischaemic heart disease', quote: '"My dad had heart trouble and high blood pressure — he had a heart attack in his 60s."' },
    ],
    socialHistory: [
      { label: 'Retired builder', quote: '"I\'m retired now — I was a builder for 40 years. Can\'t do much with the leg how it is."' },
      { label: 'Ex-smoker — stopped at time of stroke, 30 pack-year history', quote: '"I stopped smoking when I had the stroke — smoked for 30 years, about 20 a day."' },
      { label: 'Alcohol — 8 units per week (within recommended limits)', quote: '"I have a couple of pints at the weekend — nothing heavy."' },
      { label: 'Lives with wife; independently mobile with a walking stick', quote: '"I live with my wife. I manage at home — the stick helps a lot."' },
    ],
    importantNegatives: [
      'No new weakness or deterioration since the stroke ("The left side has been the same for the last four or five months — it\'s not getting worse.")',
      'No diplopia, dysarthria, or dysphagia ("No double vision or trouble swallowing.")',
      'No bladder or bowel dysfunction ("No problems with that.")',
      'No cognitive impairment or memory problems ("My mind is fine — it was just the physical side.")',
      'No falls since stroke ("I haven\'t fallen — I\'m careful with the stick.")',
    ],
    ice: {
      ideas: '"I know it\'s the stroke — they told me the damage is done, but I wonder if it could still improve."',
      concerns: '"I\'m worried I might have another stroke — should I be on more tablets?"',
      expectations: '"I\'d like to know if there\'s any more physio that could help the leg."',
    },
    onlyIfDirectlyAsked: [
      'Michael had a mild expressive dysphasia immediately post-stroke but it fully resolved ("I had trouble finding words after the stroke for a few weeks but that\'s completely gone now.")',
      'He has been attending physiotherapy weekly but feels progress has plateaued ("The physio has been helpful but it seems to have levelled off over the last couple of months.")',
    ],
    behaviourNotes: [
      'Michael is friendly, cooperative, and used to being examined — he has attended neurology follow-up several times.',
      'He complies willingly with all examination requests but moves slowly; the examiner should allow adequate time.',
      'He may prompt if the student forgets a component: "Do you want me to walk for you?" — only if the student has not asked by the time they reach the end of their examination.',
      'The examiner (not Michael) provides neurological findings when specific tests are performed — Michael does not describe his own findings beyond what is scripted above.',
      'If the student fails to compare left and right sides, Michael may ask: "Aren\'t you going to check the other side?"',
    ],
  },
  markScheme: [
    {
      domain: 'Opening the examination',
      items: [
        { description: 'Washes hands and introduces themselves to the patient by name and role', marks: 1 },
        { description: "Confirms patient's name and date of birth; explains what the examination involves and gains consent", marks: 1 },
        { description: 'Positions the patient appropriately — lying flat on the couch with legs exposed', marks: 1 },
      ],
    },
    {
      domain: 'Inspection',
      items: [
        { description: 'Inspects both lower limbs for wasting, asymmetry, fasciculations, and abnormal posture', marks: 1 },
        { description: 'Observes the patient\'s gait and identifies the hemiplegic (circumduction) pattern on the left', marks: 2 },
      ],
    },
    {
      domain: 'Tone',
      items: [
        { description: 'Assesses tone in both lower limbs using passive movement at knee and ankle', marks: 1 },
        { description: 'Identifies increased (spastic/clasp-knife) tone on the left and normal tone on the right', marks: 1 },
      ],
    },
    {
      domain: 'Power',
      items: [
        { description: 'Tests power systematically in hip flexion, knee extension, ankle dorsiflexion, and plantarflexion bilaterally', marks: 1 },
        { description: 'Identifies weakness in left lower limb (dorsiflexion most affected at 3/5) and full power on the right', marks: 2 },
      ],
    },
    {
      domain: 'Reflexes and plantar responses',
      items: [
        { description: 'Elicits knee and ankle jerks bilaterally and identifies hyperreflexia on the left (3+) vs normal on the right (2+)', marks: 2 },
        { description: 'Tests plantar responses using Babinski technique and identifies upgoing left plantar and normal right plantar', marks: 2 },
        { description: 'Tests for ankle clonus bilaterally and identifies sustained clonus on the left', marks: 1 },
      ],
    },
    {
      domain: 'Sensation and coordination',
      items: [
        { description: 'Tests sensation (pinprick or light touch) in lower limbs and identifies mild hemisensory reduction on the left', marks: 1 },
        { description: 'Tests coordination with heel-shin test bilaterally and confirms cerebellar function is intact', marks: 1 },
      ],
    },
    {
      domain: 'Presentation of findings',
      items: [
        { description: 'Presents findings in a structured format: inspection → tone → power → reflexes → plantars → sensation → gait', marks: 2 },
        { description: 'Correctly identifies a left-sided UMN lesion and attributes it to a previous right-sided stroke', marks: 2 },
      ],
    },
    {
      domain: 'Key communication skills',
      items: [
        { description: 'Active listening — responds appropriately to patient cues and comments throughout', marks: 1 },
        { description: 'Summarising — recaps findings to the examiner clearly and concisely', marks: 1 },
        { description: 'Signposting — warns the patient before each component of the examination', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Michael Brennan is a 68-year-old retired builder attending neurology follow-up 8 months after a right MCA territory ischaemic stroke.',
    'On inspection, he has no lower limb wasting but has a left equinus foot posture and a hemiplegic (circumduction) gait, requiring a single walking stick.',
    'Tone is increased on the left with a clasp-knife quality consistent with spasticity; tone is normal on the right.',
    'Power is reduced in the left lower limb — hip flexion and knee extension 4/5, ankle dorsiflexion 3/5 (most affected), and plantarflexion 4/5; power is 5/5 throughout the right.',
    'Reflexes are hyperreflexic on the left (knee and ankle jerks 3+) with an upgoing plantar response and 4 beats of ankle clonus; right-sided reflexes are normal (2+) with a downgoing plantar.',
    'Sensation is mildly reduced to pinprick on the left leg; heel-shin coordination is intact bilaterally.',
    'These findings are consistent with a left-sided upper motor neurone lesion, attributable to the known right MCA territory ischaemic stroke.',
  ],
  vivaQuestions: [
    {
      question: 'What are the differences between upper and lower motor neurone lesion signs on examination?',
      keyPoints: [
        'UMN: increased tone (spastic/clasp-knife), hyperreflexia, upgoing plantar (Babinski positive), clonus, minimal wasting',
        'LMN: decreased tone (flaccid), hyporeflexia or areflexia, downgoing or absent plantar, no clonus, significant wasting and fasciculations',
        'UMN lesions: caused by cortex, internal capsule, brainstem, or spinal cord pathology above the anterior horn cell',
        'LMN lesions: caused by anterior horn cell, nerve root, peripheral nerve, or neuromuscular junction pathology',
        'In acute UMN lesions (e.g. immediately post-stroke) tone may initially be flaccid (spinal shock) — spasticity develops over days to weeks',
        'Pattern of weakness differs: UMN causes pyramidal distribution weakness (extensors in upper limb, flexors in lower limb most affected)',
      ],
      source: 'Geekymedics.com Lower Limb Neurological Examination; OHCM 10th ed., Ch. 6',
    },
    {
      question: 'Describe the MRC grading scale for muscle power.',
      keyPoints: [
        'Grade 0: no muscle contraction visible or palpable',
        'Grade 1: flicker of contraction but no movement at the joint',
        'Grade 2: movement possible with gravity eliminated (tested in horizontal plane)',
        'Grade 3: movement against gravity but not against any added resistance',
        'Grade 4: movement against gravity and some resistance — subdivided into 4-, 4, and 4+ in clinical practice',
        'Grade 5: normal power — full movement against full resistance',
      ],
      source: 'MRC Aids to the Examination of the Peripheral Nervous System, 5th ed. (2010)',
    },
    {
      question: 'What are the clinical features of right, left, and posterior cerebral artery territory strokes?',
      keyPoints: [
        'Right MCA territory: left hemiplegia/hemiparesis, left hemisensory loss, left homonymous hemianopia, hemispatial neglect (left-sided), dysarthria',
        'Left MCA territory: right hemiplegia/hemiparesis, right hemisensory loss, right homonymous hemianopia, aphasia (Broca\'s or Wernicke\'s depending on area affected)',
        'Anterior cerebral artery: contralateral leg weakness > arm weakness (leg area at the medial cortex), urinary incontinence, frontal lobe behavioural change',
        'Posterior cerebral artery: contralateral homonymous hemianopia (often with macular sparing), memory impairment (hippocampal involvement), visual agnosia',
        'Brainstem (basilar artery): cranial nerve palsies ipsilateral + contralateral limb weakness (crossed deficits), locked-in syndrome in severe occlusion',
        'Cerebellar (PICA/AICA): ipsilateral cerebellar signs (ataxia, dysmetria, nystagmus), Wallenberg syndrome with PICA occlusion (ipsilateral facial sensory loss, Horner\'s, contralateral limb sensory loss)',
      ],
      source: 'OHCM 10th ed., Ch. 6; Geekymedics.com Stroke Overview',
    },
  ],
};

const cerebellumExamMockExam: MockExamStation = {
  id: 'neuro_cerebellar_exam_normal',
  title: 'Neurological Examination — Cerebellar System (Normal Examination)',
  diagnosis: 'Normal cerebellar examination — differential diagnosis of unsteadiness and ataxia',
  specialtyId: 'neurology',
  candidateBrief: {
    setting: 'You are an FY1 in a neurology outpatient clinic.',
    scenario:
      'Robert Stafford, 52, has been referred by his GP with a 4-month history of intermittent unsteadiness on his feet. His examination today is normal. Please perform a cerebellar examination. At the end of the station, the examiner will ask you questions about causes of unsteadiness.',
    tasks: [
      'Perform a systematic cerebellar examination on the patient',
      'Respond to the examiner\'s questions about the differential diagnosis',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'Robert Stafford',
    age: 52,
    occupation: 'Secondary school maths teacher',
    openingLine:
      '"Come in. I\'ve been asked to co-operate with whatever tests you need to do." [cooperative, no visible abnormality, normal gait entering the room]',
    historyOfPresentingComplaint: [
      {
        label: 'Gait — normal tandem gait; normal broad gait; no Romberg sign; all cerebellar signs absent',
        quote: '[Examiner]: Gait is normal. Tandem gait (heel-to-toe) is performed without difficulty. No truncal ataxia or widened base.',
      },
      {
        label: 'Nystagmus — ABSENT; full eye movements; no gaze-evoked nystagmus',
        quote: '[Examiner]: Eye movements are full in all directions. No nystagmus on lateral gaze. No internuclear ophthalmoplegia.',
      },
      {
        label: 'Speech — normal fluency and articulation; no dysarthria or scanning speech',
        quote: '[Examiner]: Speech is normal. No dysarthria. No scanning or staccato speech pattern.',
      },
      {
        label: 'Coordination — finger-nose: accurate, no past-pointing or intention tremor; heel-shin: normal; no dysdiadochokinesia',
        quote: '[Examiner]: Finger-nose test: no past-pointing; no tremor; accurate. Rapid alternating movements: normal (no dysdiadochokinesia). Heel-shin test: smooth and accurate.',
      },
      {
        label: 'Tone — normal; no hypotonia',
        quote: '[Examiner]: Tone is normal throughout all four limbs.',
      },
      {
        label: 'Romberg test — NEGATIVE (steady with eyes closed)',
        quote: '[Examiner]: Romberg test negative — patient stands steadily with eyes open and eyes closed. No significant sway on eye closure.',
      },
    ],
    pastMedicalHistory: [
      { label: 'Intermittent unsteadiness for 4 months — mild, worse on uneven surfaces and in the dark', quote: '"It comes and goes. I notice it most when I\'m walking on rough ground or when it\'s dark." [if asked]' },
      { label: 'Moderate alcohol intake — 18–20 units per week', quote: '"I probably drink more than I should — maybe 3 or 4 glasses of wine most evenings." [if specifically asked about alcohol]' },
    ],
    drugHistory: [
      { label: 'No regular medications', quote: '"Nothing regular."' },
    ],
    familyHistory: [],
    socialHistory: [
      { label: 'Moderate to heavy alcohol intake; stressful job; not a smoker', quote: '"Teaching is stressful. I wind down with a drink." [if asked]' },
    ],
    importantNegatives: [
      'No falls or injuries from unsteadiness ("I\'ve only nearly tripped — nothing serious.")',
      'No diplopia, no dysarthria, no headache ("No.")',
      'No bladder or bowel symptoms ("No.")',
    ],
    ice: {
      ideas: '"I\'m not sure what\'s causing it. I thought it might be inner ear trouble."',
      concerns: '"I\'m a bit worried it might be something sinister — like MS or something."',
      expectations: '"I\'d like to know what the tests show and whether there\'s anything to worry about."',
    },
    onlyIfDirectlyAsked: [
      'Alcohol units — "Probably 18–20 units a week. Sometimes more."',
      'Whether symptoms are progressive — "I don\'t think it\'s getting worse. Some days are better than others."',
    ],
    behaviourNotes: [
      'Normal actor throughout — fully co-operative; demonstrates all tasks correctly with normal results',
      'If the examiner asks student "what did you find?" — student should clearly state all signs are normal (DANISH features absent)',
      'During examiner viva, student should discuss causes of unsteadiness including cerebellar, vestibular, sensory/dorsal column, and multifactorial',
    ],
  },
  markScheme: [
    {
      domain: 'Introduction and consent',
      items: [
        { description: 'Introduces themselves; explains what the examination involves; gains consent', marks: 1 },
      ],
    },
    {
      domain: 'Gait assessment',
      items: [
        { description: 'Observes normal gait entering the room and asks patient to walk across the room', marks: 1 },
        { description: 'Performs tandem (heel-to-toe) gait test — identifies normal result', marks: 1 },
        { description: 'Performs Romberg test correctly (feet together, arms folded, eyes open then closed) — negative', marks: 1 },
      ],
    },
    {
      domain: 'Eye movements and nystagmus',
      items: [
        { description: 'Tests eye movements in all directions (H pattern); correctly identifies no nystagmus', marks: 1 },
      ],
    },
    {
      domain: 'Speech',
      items: [
        { description: 'Assesses speech for dysarthria — asks patient to repeat a phrase; identifies normal articulation', marks: 1 },
      ],
    },
    {
      domain: 'Upper limb coordination',
      items: [
        { description: 'Performs finger-nose test bilaterally — no past-pointing or intention tremor identified', marks: 1 },
        { description: 'Tests rapid alternating movements (dysdiadochokinesia) — normal bilaterally', marks: 1 },
      ],
    },
    {
      domain: 'Lower limb coordination',
      items: [
        { description: 'Performs heel-shin test — smooth and accurate bilaterally', marks: 1 },
      ],
    },
    {
      domain: 'Tone',
      items: [
        { description: 'Assesses limb tone — normal; no hypotonia', marks: 1 },
      ],
    },
    {
      domain: 'Presentation to examiner',
      items: [
        { description: 'Clearly presents findings: "The cerebellar examination is normal — gait, coordination, speech, and eye movements are all intact; Romberg is negative"', marks: 1 },
      ],
    },
    {
      domain: 'Examiner viva — differential diagnosis of unsteadiness',
      items: [
        { description: 'Names at least 3 categories of unsteadiness: cerebellar (ataxia with DANISH), vestibular (vertigo, nystagmus), sensory (Romberg positive, dorsal column), and multifactorial (elderly)', marks: 2 },
        { description: 'Correctly distinguishes Romberg positive (sensory ataxia — falls on eye closure) from cerebellar ataxia (falls with eyes open)', marks: 1 },
        { description: 'Names common causes of cerebellar ataxia: alcohol (most common UK), MS, stroke (PICA), medication (phenytoin), paraneoplastic, Friedreich\'s ataxia', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Mr Stafford underwent a full cerebellar examination; all findings were normal: gait was steady and tandem gait was performed without difficulty; Romberg test was negative',
    'Eye movements were full; no nystagmus on lateral or primary gaze; speech was clear with no dysarthria or scanning quality',
    'Upper limb coordination: finger-nose test accurate bilaterally with no intention tremor or past-pointing; rapid alternating movements normal (no dysdiadochokinesia)',
    'Lower limb coordination: heel-shin test smooth and accurate bilaterally; tone normal throughout',
    'Summary: the cerebellar examination is entirely normal — a normal DANISH screen (Dysdiadochokinesia, Ataxia, Nystagmus, Intention tremor, Slurred speech, Hypotonia) excludes acute cerebellar pathology today',
    'Differential for his unsteadiness: given normal cerebellar exam and negative Romberg, the most likely differential is benign positional vertigo (vestibular), medication-related, or early multifactorial unsteadiness; history of moderately elevated alcohol intake should prompt consideration of alcohol-related cerebellar disease (vermian atrophy)',
    'Investigations to consider: MRI brain and posterior fossa (exclude structural cause — tumour, MS, stroke); formal audiometry; medication review; thyroid function',
  ],
  vivaQuestions: [
    {
      question: 'What are the causes of cerebellar ataxia and how do you classify them?',
      keyPoints: [
        'Acute onset (<72 hours): stroke (PICA/AICA territory), MS relapse, Wernicke\'s encephalopathy, acute alcohol toxicity, drug toxicity (phenytoin, carbamazepine), cerebellar abscess',
        'Subacute (days to weeks): paraneoplastic cerebellar degeneration (anti-Yo/Hu; occult ovarian, breast, lung), Miller Fisher syndrome, autoimmune (anti-GAD)',
        'Chronic progressive: alcohol-related cerebellar degeneration (most common UK — vermis affected preferentially); hereditary ataxias (Friedreich\'s — GAA repeat, SCA1/2/3); hypothyroidism; normal pressure hydrocephalus',
        'DANISH mnemonic: Dysdiadochokinesia, Ataxia (gait), Nystagmus (gaze-evoked), Intention tremor, Slurred speech (scanning), Hypotonia; all ipsilateral to the lesion',
        'Alcohol causes vermian atrophy: predominantly truncal ataxia and gait ataxia with relatively preserved limb coordination — characteristic pattern',
      ],
      source: 'OHCM 10th ed., Ch. 6; geekymedics.com Cerebellar Examination',
    },
    {
      question: 'How do you differentiate cerebellar ataxia from sensory ataxia clinically?',
      keyPoints: [
        'Cerebellar ataxia: falls/unsteady with eyes OPEN; Romberg negative (falls on both eyes open and closed); broad-based gait; past-pointing; intention tremor; scanning speech; signs ipsilateral to lesion',
        'Sensory ataxia (dorsal column): Romberg POSITIVE — stable with eyes open, falls when eyes closed (relies on visual compensation); high-stepping stamping gait; loss of proprioception and vibration sense',
        'Vestibular ataxia: Romberg positive; falls in one direction; associated with vertigo and nystagmus (fast phase away from lesion in peripheral vestibular disease)',
        'Key distinguishing point: if the patient sways/falls with eyes open → cerebellar; if only falls with eyes closed → sensory or vestibular',
        'Causes of sensory ataxia: subacute combined degeneration (B12), tabes dorsalis, Friedreich\'s, peripheral neuropathy, Guillain-Barré',
      ],
      source: 'OHCM 10th ed., Ch. 6; geekymedics.com',
    },
  ],
};

const mndRelativeMockExam: MockExamStation = {
  id: 'neuro_mnd_relative_communication',
  title: 'Communication — Motor Neurone Disease: Speaking to a Relative',
  diagnosis: 'Motor neurone disease (ALS) — communication with a relative about diagnosis, prognosis, and palliative care',
  specialtyId: 'neurology',
  candidateBrief: {
    setting: 'You are an FY1 on the neurology ward.',
    scenario:
      'Thomas Harding, 62, was admitted last week with progressive limb weakness and dysarthria. He has today been given a diagnosis of amyotrophic lateral sclerosis (ALS/MND) by the consultant neurologist. Mr Harding has consented for his diagnosis to be shared with his wife, Patricia, 60, who has come in to speak with a member of the team. Please speak with Patricia.',
    tasks: [
      'Speak with Patricia about her husband\'s diagnosis, prognosis, and the support available',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'Patricia Harding',
    age: 60,
    occupation: 'Retired nurse (Thomas\'s wife)',
    openingLine:
      '"I know Thomas was being tested but I\'m not sure they\'ve told me the full picture. The consultant used a lot of medical words. Can you explain it to me?" [anxious, tearful when diagnosis is confirmed, composed but frightened]',
    historyOfPresentingComplaint: [
      {
        label: 'Patricia\'s understanding — knows Thomas has been having weakness and slurred speech; not sure of the diagnosis; has heard of MND and is frightened',
        quote: '"They said something about motor neurones. I\'ve heard of motor neurone disease. Is that what he has?" [tearful] – "I\'m a retired nurse — I know what that means. I just need to hear it properly."',
      },
      {
        label: 'Shock and grief — even as a nurse, the personal reality is devastating; needs time to process',
        quote: '"I know what it means professionally. But he\'s my husband." [tearful pause] "How long does he have?"',
      },
      {
        label: 'Questions about symptoms — worried about choking, breathlessness, communication',
        quote: '"Is he going to lose his voice completely? I\'ve heard people lose the ability to swallow." – "He\'s already slurring. Is it going to get worse quickly?"',
      },
      {
        label: 'Questions about treatment — asks if anything can slow it down; has read about riluzole',
        quote: '"I\'ve read about a drug — riluzole. Is he going to get that? Is there nothing else?" – "What about clinical trials?"',
      },
      {
        label: 'Practical questions — worried about who will look after him; her own health; caring role',
        quote: '"I want to look after him at home as long as possible. But I had a back operation 2 years ago." – "Is there support for us? Who organises it all?"',
      },
      {
        label: 'Questions about decision-making — asks about what happens at the end',
        quote: '"Should we be thinking about a will? He mentioned he might want to think about a \'living will\' or something like that." – "What are his choices about what happens at the end?"',
      },
    ],
    pastMedicalHistory: [],
    drugHistory: [],
    familyHistory: [],
    socialHistory: [
      { label: 'Retired; lives with Thomas in their own home; two adult children (son in Leeds, daughter lives nearby)', quote: '"Our daughter is nearby — she\'s been wonderful. Our son is in Leeds." [if asked about support network]' },
    ],
    importantNegatives: [],
    ice: {
      ideas: '"I\'m trying to hold it together. I think I always suspected something like this — he\'s been deteriorating for months."',
      concerns: '"I\'m terrified he\'s going to suffer. And I\'m scared of not being able to cope."',
      expectations: '"I want to know what to expect, what help is available, and that he won\'t be alone or in pain at the end."',
    },
    onlyIfDirectlyAsked: [
      'Thomas\'s wishes about end of life — "He has mentioned he doesn\'t want to be put on a machine if there\'s no hope. He\'s mentioned that before his dad died in ICU."',
      'Whether Thomas has a health and welfare LPA — "Not yet. He\'s always meant to sort it."',
    ],
    behaviourNotes: [
      'Tearful but composed initially; becomes more openly tearful when prognosis is confirmed',
      'As a retired nurse, she understands the medical language but needs to hear it clearly in the context of her husband — do not underestimate her, but do not use jargon without explanation',
      'Responds well to having her feelings acknowledged before factual information is given',
      'Asks directly "How long?" — student should give an honest answer about the wide variation in prognosis without being blunt or cruel (median survival ~2–5 years from symptom onset; some live 10+ years)',
      'When riluzole is discussed, she is reassured that something slows progression slightly',
      'Responds to the ADRT/LPA discussion positively — "Good. He should do that while he can still express himself."',
      'At the end: "Thank you for not making me feel rushed." — rewards a calm, unhurried consultation',
    ],
  },
  markScheme: [
    {
      domain: 'Opening the consultation',
      items: [
        { description: 'Introduces themselves; offers a private space; has tissues available; asks what Patricia already knows', marks: 1 },
        { description: 'Checks Thomas has consented for his diagnosis to be shared before disclosing any clinical information', marks: 1 },
      ],
    },
    {
      domain: 'Breaking the diagnosis',
      items: [
        { description: 'Gives a warning shot before confirming the diagnosis — "I need to share some difficult news with you"', marks: 1 },
        { description: 'Confirms the diagnosis of motor neurone disease (MND/ALS) in clear plain language; pauses for Patricia to absorb the information', marks: 2 },
        { description: 'Acknowledges Patricia\'s distress and allows silence before continuing', marks: 1 },
      ],
    },
    {
      domain: 'Explaining MND',
      items: [
        { description: 'Explains MND in plain language: progressive degeneration of motor neurones causing weakness of limbs, swallowing, and breathing', marks: 1 },
        { description: 'Explains that cognitive function is usually preserved in ALS (though some patients develop frontotemporal dementia)', marks: 1 },
      ],
    },
    {
      domain: 'Prognosis',
      items: [
        { description: 'Gives honest prognosis: wide variation; median survival 2–5 years from symptom onset; some patients live longer; progression rate predicts outcome better than any single test', marks: 1 },
        { description: 'Avoids giving specific timelines; acknowledges uncertainty while being honest', marks: 1 },
      ],
    },
    {
      domain: 'Treatment and MDT support',
      items: [
        { description: 'Explains riluzole: only licensed disease-modifying drug; modest effect (extends survival by approximately 3 months); still used and worthwhile', marks: 1 },
        { description: 'Describes the MND MDT: neurologist, specialist nurse, physiotherapy, speech and language therapy (AAC devices for communication), OT, respiratory physician, palliative care', marks: 1 },
        { description: 'Mentions PEG (percutaneous endoscopic gastrostomy) for nutritional support when swallowing becomes unsafe; NIV (non-invasive ventilation) for breathlessness', marks: 1 },
      ],
    },
    {
      domain: 'End-of-life planning',
      items: [
        { description: 'Raises ADRT (Advance Decision to Refuse Treatment): explains Thomas can document his wishes about ventilation and resuscitation while he has capacity', marks: 1 },
        { description: 'Mentions Lasting Power of Attorney (Health and Welfare LPA) — encourages completion while Thomas can participate', marks: 1 },
      ],
    },
    {
      domain: 'Support for Patricia as carer',
      items: [
        { description: 'Acknowledges Patricia\'s caring role and her own health concerns; offers carer\'s assessment; refers to social services and MND Association', marks: 1 },
        { description: 'Provides MND Association contact details; advises she can access them independently', marks: 1 },
      ],
    },
    {
      domain: 'Closing',
      items: [
        { description: 'Checks understanding; offers to answer further questions; confirms the consultant will meet with both Thomas and Patricia together', marks: 1 },
      ],
    },
    {
      domain: 'Key communication skills',
      items: [
        { description: 'Active listening — allows Patricia to lead the pace; does not rush through information', marks: 1 },
        { description: 'Empathy and compassion maintained throughout without becoming detached or clinical', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Patricia Harding is the wife of Thomas, 62, newly diagnosed with ALS/MND; she attended as his nominated relative for a consultation following his consent to share the diagnosis',
    'The diagnosis was confirmed clearly in plain language after checking Patricia\'s prior understanding and providing a warning shot; her distress was acknowledged before continuing',
    'MND explained: progressive degeneration of upper and lower motor neurones causing weakness of limbs, speech (dysarthria), swallowing (dysphagia), and eventually breathing (respiratory failure); cognitive function typically preserved in ALS',
    'Prognosis: honest but compassionate — median survival 2–5 years from symptom onset; significant individual variation; bulbar onset (speech and swallowing first, as in Thomas) carries a slightly worse prognosis than limb onset',
    'Treatment: riluzole (only licensed disease-modifying drug — modest 3-month survival benefit); MDT approach: SLT for communication (AAC devices), dietitian/PEG for swallowing, NIV for respiratory support, OT and physio for function',
    'Advance planning raised while Thomas has capacity: ADRT to document wishes on ventilation and CPR; LPA (Health and Welfare) strongly encouraged; palliative care team to be introduced early',
    'Patricia offered carer\'s assessment via social services; MND Association details provided; follow-up joint meeting with consultant and Thomas arranged',
  ],
  vivaQuestions: [
    {
      question: 'What are the clinical features of ALS and how do you distinguish upper from lower motor neurone involvement?',
      keyPoints: [
        'ALS (amyotrophic lateral sclerosis): the most common form of MND (~85%); affects both UMN and LMN simultaneously in the same patient — this combination is pathognomonic',
        'UMN signs: spasticity, hyperreflexia, Babinski (upgoing plantar), pseudobulbar palsy (spastic dysarthria, brisk jaw jerk, emotional lability)',
        'LMN signs: wasting, fasciculations, hyporeflexia/areflexia, bulbar palsy (flaccid dysarthria, fasciculating tongue, absent gag)',
        'Co-existing UMN and LMN signs in the same limb without sensory involvement is the diagnostic hallmark of MND/ALS',
        'Sensory sparing: sensory examination is normal in ALS — sensory involvement suggests another diagnosis (multifocal motor neuropathy, cervical myelopathy)',
      ],
      source: 'OHCM 10th ed., Ch. 6; NICE NG42 (Motor neurone disease: assessment and management, 2016)',
    },
    {
      question: 'What is riluzole, how does it work, and what is the role of non-invasive ventilation in MND?',
      keyPoints: [
        'Riluzole: glutamate antagonist; reduces excitotoxic neuronal death; the only licensed disease-modifying drug for ALS; extends median survival by approximately 3 months',
        'Indication: patients with probable or definite ALS; not clearly effective in bulbar-onset ALS or late disease; monitor LFTs (hepatotoxicity)',
        'Non-invasive ventilation (NIV/BiPAP): indicated when FVC falls below 80% or when symptomatic nocturnal hypoventilation occurs (morning headache, poor sleep, orthopnoea)',
        'NIV improves quality of life and extends survival by approximately 7 months in patients with good bulbar function; less effective in severe bulbar disease (mask fit issues, secretion problems)',
        'Advance care planning for ventilation: patient must make an informed decision about long-term invasive ventilation (tracheostomy) vs. NIV only — ADRT essential to document preferences before losing capacity',
      ],
      source: 'NICE NG42 (Motor neurone disease: assessment and management, 2016)',
    },
    {
      question: 'What is an Advance Decision to Refuse Treatment (ADRT) and when should it be discussed in MND?',
      keyPoints: [
        'ADRT: a legally binding document (Mental Capacity Act 2005) allowing a capacitous adult to refuse specific treatments in advance should they later lack capacity',
        'Must be in writing, signed by the patient and a witness; must state the treatment being refused and the specific circumstances; must include a statement that it applies "even if life is at risk" if refusing life-sustaining treatment',
        'Discuss early in MND — ideally at the time of diagnosis or shortly after — while the patient retains full capacity and can express complex preferences',
        'Common decisions in MND: refusal of invasive mechanical ventilation (tracheostomy), CPR, artificial nutrition via PEG (though this is often accepted for comfort); preferences about place of death',
        'Complement ADRT with Health and Welfare LPA: allows an attorney to make decisions if the ADRT does not cover all circumstances; should be registered while the patient can participate',
      ],
      source: 'Mental Capacity Act 2005; NICE NG42 (2016); MND Association: Advance Care Planning in MND',
    },
  ],
};

export const NEURO_MOCK_EXAMS: MockExamStation[] = [
  seizureMockExam,
  headacheMockExam,
  speechLanguageMockExam,
  dizzinessMockExam,
  parkinsonsExaminationMockExam,
  serotoninSyndromeMockExam,
  lowerLimbNeuroMockExam,
  cerebellumExamMockExam,
  mndRelativeMockExam,
];
