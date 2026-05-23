import type { MockExamStation } from './mockExamTypes';

const seizureMockExam: MockExamStation = {
  id: 'neuro-mock-seizure',
  title: 'Seizure / Loss of Consciousness History',
  specialtyId: 'neurology',
  candidateBrief: {
    setting: 'You are an FY1 doctor working in the Emergency Department.',
    scenario:
      'Ryan Murphy, a 22-year-old university student, has been brought in by ambulance after collapsing at the university library. A bystander called 999 after witnessing the event but is no longer present. Ryan is now alert and orientated. This is his first episode.',
    tasks: [
      'Take a focused history from Ryan',
      'State your differential diagnosis',
      'Explain to Ryan what happens next and address any concerns he raises',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'Ryan Murphy',
    age: 22,
    occupation: 'University student (2nd year, Biology)',
    openingLine:
      '"I don\'t really know what happened — one minute I was in the library and the next I woke up on the floor with everyone staring at me."',
    backgroundInfo:
      'Ryan is anxious and embarrassed. He is worried about his driving licence as he recently passed his test and uses his car to travel home for weekends. He had very little sleep the night before (cramming for an exam) and had consumed three energy drinks. He has no significant past medical history and takes no regular medications.',
    historyToReveal: [
      {
        topic: 'Prodrome / aura',
        response:
          '"I felt a bit odd — like a funny smell, almost like burning rubber — for a few seconds before it happened. Then I just can\'t remember anything."',
      },
      {
        topic: 'During the episode — focal onset features',
        response:
          '"I don\'t remember any of it. Someone told me my right hand started twitching first — then my head turned to the right — and then I went completely stiff and started shaking all over. They said the whole thing lasted about two minutes."',
      },
      {
        topic: 'Tongue biting',
        response: '"Yeah, my tongue is really sore — I must have bitten it. Here, look." (points to lateral tongue laceration on the left side)',
      },
      {
        topic: 'Incontinence',
        response: '"This is embarrassing but… yes, I wet myself. I noticed when I came round."',
      },
      {
        topic: 'Post-ictal state',
        response:
          '"I was really confused when I woke up — the paramedics said I didn\'t know where I was for about 15 minutes. I had a terrible headache after. And my right hand felt really weak — like I couldn\'t grip properly. That\'s mostly gone now but it\'s still a bit clumsy." (this is Todd\'s paresis — resolving right hand weakness)',
      },
      {
        topic: 'Previous neurological episodes',
        response: '"Nothing like this before, no. I did have febrile convulsions as a baby — mum mentioned that once. No previous headaches, no meningitis, no head injuries."',
      },
      {
        topic: 'Family history',
        response: '"My mum had epilepsy — she grew out of it apparently, or it\'s well controlled now."',
      },
      {
        topic: 'Sleep and triggers',
        response:
          '"I\'d only slept about three hours. I had a big exam today and I was up all night revising. I also had three cans of energy drink in the morning."',
      },
      {
        topic: 'Alcohol and drugs',
        response: '"A few drinks at the weekend, nothing heavy. No drugs."',
      },
      {
        topic: 'Driving',
        response:
          '"I passed my test six months ago. I drive home most weekends. Am I going to lose my licence?" (appears distressed)',
      },
      {
        topic: 'Medications',
        response: '"Nothing regular. Just ibuprofen occasionally."',
      },
      {
        topic: 'Head injury or CNS infection history',
        response: '"No, never had a serious head injury. No meningitis or anything like that."',
      },
    ],
    onlyIfDirectlyAsked: [
      'Tongue biting and urinary incontinence — too embarrassed to volunteer; lateral tongue bite (left side) is the clinically specific finding',
      'The right-hand twitching and head deviation before generalisation — does not realise these are medically significant focal features',
      'Todd\'s paresis — mentions the residual right hand weakness only if asked how they feel now or about any weakness after the episode',
      'Family history of epilepsy — does not consider it relevant unless directly asked',
      'The olfactory aura (burning rubber smell) — only if asked specifically about any warning, odd sensation, or unusual perception beforehand',
    ],
    behaviourNotes: [
      'Anxious and embarrassed throughout — especially about incontinence and driving licence',
      'Minimises symptoms initially ("I just fainted or something") — candidate must probe carefully',
      'Shows genuine distress when driving licence is raised — this is the key emotional moment in the station',
      'Mild residual headache and slight right hand clumsiness on examination (Todd\'s paresis resolving)',
      'Right hand grip noticeably weaker than left if examined — mention this if the doctor examines limb power',
    ],
  },
  markScheme: [
    {
      domain: 'History — Pre-ictal',
      items: [
        { description: 'Asks about any warning or aura before the episode', marks: 1 },
        { description: 'Identifies olfactory aura (burning smell) suggesting focal onset', marks: 1 },
        { description: 'Asks about preceding posture, activity, and context (library, studying)', marks: 1 },
        { description: 'Elicits sleep deprivation as a precipitant', marks: 1 },
        { description: 'Asks about caffeine / stimulant intake', marks: 1 },
      ],
    },
    {
      domain: 'History — Ictal and Post-ictal',
      items: [
        { description: 'Asks for witness account of what was observed', marks: 1 },
        { description: 'Elicits tonic-clonic movements (stiffening then rhythmic shaking)', marks: 1 },
        { description: 'Establishes duration of convulsion (~2 minutes)', marks: 1 },
        { description: 'Asks about tongue biting (lateral bite consistent with seizure)', marks: 1 },
        { description: 'Asks about urinary / faecal incontinence', marks: 1 },
        { description: 'Establishes post-ictal confusion and its duration (~15 minutes)', marks: 1 },
        { description: 'Asks about headache after episode (post-ictal headache)', marks: 1 },
      ],
    },
    {
      domain: 'History — Background and Risk Factors',
      items: [
        { description: 'Asks about previous similar or any neurological episodes', marks: 1 },
        { description: 'Elicits history of childhood febrile convulsions', marks: 1 },
        { description: 'Takes family history — elicits maternal epilepsy', marks: 1 },
        { description: 'Asks about medications (including sodium valproate exposure if female)', marks: 1 },
        { description: 'Asks about alcohol and recreational drug use', marks: 1 },
        { description: 'Asks about head injury or meningitis / encephalitis history', marks: 1 },
      ],
    },
    {
      domain: 'Safety and Communication',
      items: [
        { description: 'Proactively addresses driving — advises must not drive (DVLA: 6 months seizure-free for group 1 licence)', marks: 2 },
        { description: 'Advises on other safety: not swimming alone, baths vs showers, heights', marks: 1 },
        { description: 'Explains investigations clearly: bloods, ECG, EEG, MRI brain', marks: 1 },
        { description: 'Explains referral to neurology for first seizure assessment', marks: 1 },
        { description: 'Shows empathy regarding embarrassment and anxiety', marks: 1 },
      ],
    },
    {
      domain: 'Clinical Reasoning',
      items: [
        { description: 'States likely diagnosis: first unprovoked generalised tonic-clonic seizure with focal (olfactory) aura suggesting focal-to-bilateral tonic-clonic', marks: 2 },
        { description: 'Mentions provoking factors (sleep deprivation, caffeine) — provoked vs unprovoked distinction', marks: 1 },
        { description: 'Includes reasonable differentials: syncope, psychogenic non-epileptic seizure (PNES), hypoglycaemia', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Introduces the patient concisely: name, age, and the presenting complaint in one sentence.',
    'States the headline diagnosis upfront: first focal-to-bilateral tonic-clonic seizure, with provoking factors of sleep deprivation and caffeine excess.',
    'Supports the diagnosis with specific ictal features: olfactory aura suggesting temporal lobe onset, witnessed tonic then clonic movements lasting approximately 2 minutes, lateral tongue biting, and urinary incontinence.',
    'Describes the post-ictal phase: 15 minutes of confusion and a residual right-hand weakness (Todd\'s paresis), which further supports a focal-onset seizure.',
    'Acknowledges relevant background: childhood febrile convulsions and a maternal history of epilepsy.',
    'States differentials considered and why they are less likely: syncope (no prodromal presyncope, prolonged post-ictal confusion, tongue bite), PNES (witness account consistent with tonic-clonic, post-ictal features), hypoglycaemia (no diabetes or relevant medication).',
    'Closes with a clear plan: bloods, ECG, MRI brain, neurology referral, and confirms DVLA advice has been given.',
  ],
  vivaQuestions: [
    {
      question:
        'How do you classify seizures, and what features of this history suggest a focal onset rather than a primarily generalised seizure?',
      keyPoints: [
        'ILAE 2017 classification: focal (aware/impaired awareness/focal-to-bilateral tonic-clonic) vs generalised (tonic-clonic, absence, myoclonic, tonic, atonic)',
        'Focal onset suggested by: olfactory aura (burning smell) — indicates temporal lobe involvement; aura = ictal activity before loss of awareness',
        'Progression to bilateral tonic-clonic = focal-to-bilateral; distinguishes from a primarily generalised seizure',
        'Tongue biting and post-ictal confusion also consistent with tonic-clonic seizure but do not localise the focus',
        'Primarily generalised seizures (e.g., juvenile myoclonic epilepsy) typically have no aura, onset at adolescence, myoclonic jerks in the morning',
      ],
      source: 'ILAE Seizure Classification 2017; NICE CG137 Epilepsies (2012, updated 2022)',
    },
    {
      question:
        'What investigations would you arrange for a first seizure, and what are you looking for with each?',
      keyPoints: [
        'Bloods: FBC, U&E, glucose, calcium, magnesium, LFTs, TFTs — exclude metabolic causes (hypoglycaemia, hyponatraemia, hypocalcaemia)',
        'ECG: exclude long-QT, Brugada, arrhythmia as cause of collapse and syncope mimic',
        'EEG: not diagnostic in isolation; interictal epileptiform discharges support epilepsy diagnosis; ideally within 24–48 hours if possible',
        'MRI brain (preferred over CT): structural lesion — tumour, cortical dysplasia, hippocampal sclerosis, vascular malformation',
        'CT head urgently if: head injury, focal deficit, immunosuppression, anticoagulation, or cannot exclude raised ICP',
        'Prolactin level within 1 hour of event: elevated in 60–80% of tonic-clonic seizures but not routinely recommended (poor sensitivity/specificity)',
      ],
      source: 'NICE CG137 (2012, updated 2022); SIGN 143 Epilepsy (2018)',
    },
    {
      question: 'What are the DVLA driving regulations after a first seizure in the UK?',
      keyPoints: [
        'Group 1 licence (car/motorcycle): must not drive for 6 months after a single unprovoked seizure; DVLA must be notified by patient',
        'If seizure is provoked (e.g., hypoglycaemia, sleep deprivation only) and provoking factor fully corrected: may be able to return to driving sooner — DVLA decides',
        'Group 2 licence (HGV/bus): must be seizure-free and off AEDs for 10 years',
        'Doctor has a duty to advise patient not to drive; if patient refuses to inform DVLA and continues to drive, doctor may breach confidentiality',
        'Patients must also notify their car insurance',
      ],
      source: 'DVLA Assessing Fitness to Drive, 2024 edition; GMC Confidentiality guidance (2017)',
    },
    {
      question:
        'If this patient turns out to have juvenile myoclonic epilepsy (JME), what anti-epileptic drug would you first-line recommend, and are there any special considerations?',
      keyPoints: [
        'JME: onset 12–18 years, myoclonic jerks on waking, generalised tonic-clonic seizures, absences in ~30%; lifelong condition',
        'First-line AED for JME: sodium valproate — highly effective for all three seizure types in JME',
        'Critical consideration: sodium valproate is a Category X teratogen — folic acid 5 mg/day if woman of childbearing age; sodium valproate is contraindicated in women of childbearing potential unless PASS (Pregnancy Prevention Programme) in place (NICE 2024)',
        'Ryan is male, so valproate is appropriate without the PASS restriction',
        'Alternatives if female: lamotrigine (less effective for myoclonic jerks) or levetiracetam',
        'Avoid sodium valproate if female and no effective contraception — MHRA 2024 guidance',
      ],
      source: 'NICE CG137 (2012, updated 2022); MHRA Valproate Safety 2024; OHCM 10th ed., Ch. 10',
    },
  ],
};

const headacheMockExam: MockExamStation = {
  id: 'neuro-mock-headache',
  title: 'Headache & Visual Loss History',
  specialtyId: 'neurology',
  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Hemianopsia_en.jpg',
  candidateBrief: {
    setting:
      'You are an FY1 doctor on the Medical Assessment Unit (MAU). A visual pathway diagram is displayed above — identify which numbered lesion site corresponds to the patient\'s visual defect.',
    scenario:
      'Margaret Thompson, a 68-year-old retired school teacher, has been referred by her GP with a 2-day history of new-onset occipital headache and visual disturbance. She has no prior history of headache disorder. Her observations on arrival: BP 178/102, HR 84 irregular, RR 16, SpO₂ 98% on air, GCS 15.',
    tasks: [
      'Take a focused history from Mrs Thompson',
      'Use the diagram displayed above to support your assessment',
      'Explain your working diagnosis and what happens next to Mrs Thompson',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'Margaret Thompson',
    age: 68,
    occupation: 'Retired school teacher',
    openingLine:
      '"I\'ve had this awful headache for two days now — it came on very suddenly yesterday morning when I was having breakfast. And my vision has been strange since then too."',
    backgroundInfo:
      'Margaret lives alone, drives herself to appointments, and is independent. She has a background of hypertension (on amlodipine) and was recently diagnosed with atrial fibrillation but has not yet started anticoagulation (awaiting cardiology review next week). She is intelligent and asks questions.',
    historyToReveal: [
      {
        topic: 'Headache onset — quality and speed',
        response:
          '"It came on in an instant — literally like someone hit me over the back of the head. One second I was fine eating my toast, and then — bang. I\'ve never felt pain like it in my life. Probably a 9 out of 10."',
      },
      {
        topic: 'Prior headache history',
        response: '"I\'ve never had headaches like this before. I get the occasional tension headache but nothing severe. This is completely different."',
      },
      {
        topic: 'Headache site and radiation',
        response:
          '"It\'s mainly at the back of my head — right at the base of the skull — and it spread into my neck. By the evening it had moved up to behind both eyes."',
      },
      {
        topic: 'Associated symptoms at onset',
        response:
          '"I felt sick and was sick once straight away. I was very frightened but I didn\'t pass out. I didn\'t notice neck stiffness and I\'m not particularly bothered by the light."',
      },
      {
        topic: 'Photophobia and phonophobia',
        response: '"Not really, no. The light doesn\'t bother me particularly. No ringing in my ears."',
      },
      {
        topic: 'Visual disturbance — description',
        response:
          '"The left side of my vision seems darker — like there\'s a dark curtain on the left side of both eyes. I noticed it when I woke up the morning after. I keep bumping into things on my left and I nearly walked into a door frame this morning."',
      },
      {
        topic: 'Diplopia',
        response: '"No double vision — it\'s not that. Both eyes are affected the same way on the left side."',
      },
      {
        topic: 'Eye pain or redness',
        response: '"No pain in my eyes. They\'re not red or sore."',
      },
      {
        topic: 'Limb weakness, facial droop, speech problems',
        response: '"No, my arms and legs are working fine. My face feels normal and I\'m speaking normally — you can tell, can\'t you?"',
      },
      {
        topic: 'Pain relief attempted',
        response: '"I took two paracetamol yesterday and again this morning but they\'ve barely touched it. It\'s still about a 5 out of 10 now."',
      },
      {
        topic: 'Past medical history',
        response:
          '"High blood pressure for about 10 years. And they recently told me I have an irregular heartbeat — atrial fibrillation. I was meant to start a blood thinner — warfarin or something — but they said to wait until I\'ve seen the cardiologist next Thursday."',
      },
      {
        topic: 'Medications',
        response: '"Just amlodipine 5 mg once a day for the blood pressure. Nothing else."',
      },
      {
        topic: 'Cholesterol and diabetes',
        response: '"I don\'t know about my cholesterol — it\'s never been mentioned to me. I\'m not diabetic."',
      },
      {
        topic: 'Smoking and alcohol',
        response: '"I gave up smoking when I was 50 — I smoked about 20 a day for 30 years, so about 30 pack-years. I have a glass of wine most evenings."',
      },
      {
        topic: 'Family history',
        response: '"My father had a stroke in his 70s. My mother had high blood pressure."',
      },
      {
        topic: 'Previous TIA or amaurosis fugax',
        response: '"No, I\'ve never had anything like this before. No episodes of sudden vision loss that came and went, no."',
      },
    ],
    onlyIfDirectlyAsked: [
      'AF and lack of anticoagulation — she thinks it is unrelated; only discloses the detail about the cardiology appointment if specifically asked about anticoagulants or blood thinners',
      'Exact thunderclap quality — opens with "very suddenly" but the "hit over the head, bang" characterisation only emerges if asked to describe exactly how fast it came on',
      'Pack-year calculation — she says "20 a day for 30 years" but only quantifies it as pack-years if prompted',
      'Paracetamol ineffectiveness — only mentions if asked whether she tried anything for the pain',
    ],
    behaviourNotes: [
      'Calm, articulate, and cooperative — retired teacher, used to speaking clearly',
      'Visibly anxious under the surface; asks "Is this serious?" when investigations are mentioned',
      'Will raise driving unprompted if the doctor mentions stroke: "Will I still be able to drive?"',
      'Wants plain English; asks for clarification if medical jargon is used without explanation',
      'Slightly embarrassed to admit she has been putting off going to the GP for two days',
    ],
  },
  markScheme: [
    {
      domain: 'History — Headache Characterisation',
      items: [
        { description: 'Asks about onset — establishes sudden/thunderclap onset ("worst headache of life")', marks: 2 },
        { description: 'Asks about site and radiation — occipital with radiation forward', marks: 1 },
        { description: 'Asks about severity (NRS score)', marks: 1 },
        { description: 'Asks about associated nausea and vomiting', marks: 1 },
        { description: 'Asks about loss of consciousness at onset', marks: 1 },
        { description: 'Asks about neck stiffness / photophobia (red flags for SAH/meningitis)', marks: 1 },
      ],
    },
    {
      domain: 'History — Visual Symptoms and Neurology',
      items: [
        { description: 'Characterises visual loss: left-sided, affecting both eyes (binocular), homonymous pattern', marks: 2 },
        { description: 'Asks specifically about diplopia (to exclude CN III/IV/VI palsy)', marks: 1 },
        { description: 'Asks about eye pain (to exclude acute angle-closure glaucoma)', marks: 1 },
        { description: 'Screens for other focal neurology: arm/leg weakness, facial droop, speech, coordination', marks: 1 },
      ],
    },
    {
      domain: 'History — Vascular Risk Factors',
      items: [
        { description: 'Elicits hypertension and current medication (amlodipine)', marks: 1 },
        { description: 'Elicits atrial fibrillation and lack of anticoagulation', marks: 2 },
        { description: 'Asks about smoking history (quantifies pack-years)', marks: 1 },
        { description: 'Asks about diabetes, hypercholesterolaemia, family history of stroke', marks: 1 },
      ],
    },
    {
      domain: 'Visual Field Interpretation',
      items: [
        { description: 'Correctly identifies left homonymous hemianopia from the diagram', marks: 2 },
        { description: 'Localises defect to post-chiasmal right hemisphere (right optic radiation or occipital cortex)', marks: 1 },
        { description: 'Notes macular sparing if present on diagram — suggests occipital cortex lesion (dual blood supply to macula)', marks: 1 },
      ],
    },
    {
      domain: 'Diagnosis and Management Communication',
      items: [
        { description: 'States working diagnosis: posterior circulation (PCA territory) ischaemic stroke', marks: 2 },
        { description: 'Explains urgent CT head to exclude haemorrhage before treatment', marks: 1 },
        { description: 'Mentions thrombolysis if within 4.5-hour window and haemorrhage excluded', marks: 1 },
        { description: 'Discusses aspirin 300 mg loading and anticoagulation for AF (after haemorrhage excluded)', marks: 1 },
        { description: 'Mentions stroke unit admission, NIHSS assessment, swallowing screen', marks: 1 },
        { description: 'Advises must not drive (6 months after stroke, DVLA notification)', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Introduces the patient concisely: name, age, key vascular risk factors, and the presenting complaint.',
    'States the headline diagnosis upfront: acute right posterior cerebral artery territory ischaemic stroke, presenting with thunderclap occipital headache and left homonymous hemianopia.',
    'Supports the diagnosis with history: sudden-onset severe occipital headache, vomiting, no loss of consciousness, and visual symptoms beginning the following morning.',
    'Correctly identifies and interprets the visual field diagram: loss of the left visual field in both eyes — left homonymous hemianopia — localised to a post-chiasmal lesion in the right hemisphere (right optic radiation or occipital cortex).',
    'Notes the key negative findings that help exclude differentials: no neck stiffness or photophobia (against meningitis/SAH), no diplopia (against CN III palsy), no limb weakness or speech disturbance (against anterior circulation stroke).',
    'Highlights the high-risk vascular context: known AF not yet anticoagulated, hypertension, 30 pack-year smoking history, and a family history of stroke.',
    'Presents a clear management plan: urgent CT head to exclude haemorrhage, aspirin 300 mg, stroke unit admission, and anticoagulation with a DOAC at 2 weeks; advises patient regarding driving.',
  ],
  vivaQuestions: [
    {
      question:
        'What is the vascular anatomy of the posterior circulation, and what structures does the posterior cerebral artery supply?',
      keyPoints: [
        'Posterior circulation: vertebral arteries → basilar artery → posterior cerebral arteries (PCAs)',
        'PCA supplies: occipital cortex (primary visual cortex, V1), posterior parietal cortex, thalamus (penetrating branches), medial temporal lobe (hippocampus)',
        'PCA territory stroke: contralateral homonymous hemianopia (with macular sparing due to dual MCA/PCA supply to macula)',
        'PICA (posterior inferior cerebellar artery): Wallenberg syndrome — ipsilateral facial sensory loss, contralateral body pain/temperature loss, ipsilateral Horner\'s, dysphagia, ataxia',
        'Basilar artery occlusion: locked-in syndrome or coma — catastrophic; requires emergent thrombectomy',
      ],
      source: 'OHCM 10th ed., Ch. 10; Stroke (Donnan et al., Lancet 2008)',
    },
    {
      question:
        'What is the difference between FAST and ROSIER, and which is more appropriate to use in this setting?',
      keyPoints: [
        'FAST (Face-Arm-Speech-Time): public awareness tool, 72% sensitivity — misses posterior circulation strokes (no face/arm/speech involvement)',
        'ROSIER (Recognition of Stroke in the Emergency Room): validated clinical tool, 93% sensitivity — includes visual loss, diplopia, and loss of consciousness',
        'ROSIER score: +1 for facial weakness, arm weakness, leg weakness, speech disturbance, visual field defect; -1 for seizure activity or syncope. Score >0 suggests stroke',
        'In this case, FAST would be NEGATIVE (no face droop, arm weakness, or speech problem) — this is a key teaching point',
        'ROSIER correctly captures this presentation via the visual field defect criterion',
      ],
      source: 'ROSIER (Nor et al., Lancet Neurology 2005); NICE NG128 Stroke (2019)',
    },
    {
      question:
        'Margaret has AF and no anticoagulation. How does this alter the acute management of her stroke, and what anticoagulant would you start?',
      keyPoints: [
        'AF is the likely embolic source — cardioembolic stroke is the most common stroke mechanism in AF',
        'Acute phase: give aspirin 300 mg immediately (after CT excludes haemorrhage); continue for 2 weeks',
        'Do NOT start anticoagulation immediately — risk of haemorrhagic transformation in first 2 weeks',
        'NICE NG128: start anticoagulation at 2 weeks post-ischaemic stroke in AF (DOAC preferred over warfarin)',
        'DOACs of choice: apixaban or rivaroxaban (ARISTOTLE/ROCKET-AF evidence); avoid warfarin unless valve disease or renal impairment precluding DOACs',
        'CHA₂DS₂-VASc score for AF: Margaret scores ≥4 (female, age ≥65, hypertension, stroke history) — high annual thromboembolic risk, anticoagulation clearly indicated',
      ],
      source: 'NICE NG128 Stroke (2019); NICE NG196 AF (2021); OHCM 10th ed., Ch. 10',
    },
    {
      question: 'What is the thrombolysis window for ischaemic stroke, and what are the absolute contraindications?',
      keyPoints: [
        'Alteplase (tPA) licensed up to 4.5 hours from symptom onset (or last known well) — NICE NG128',
        'Thrombectomy (mechanical): up to 24 hours in selected patients with large vessel occlusion on CTA and salvageable penumbra (DAWN/DEFUSE-3 criteria)',
        'Absolute contraindications to thrombolysis: haemorrhage on CT, BP >185/110 uncontrolled, INR >1.7, platelet <100, recent surgery/trauma (<14 days), GI bleed (<21 days), previous intracranial haemorrhage, blood glucose <2.8 or >22 mmol/L',
        'Uncertain stroke onset (woke with symptoms): use MRI DWI-FLAIR mismatch to determine eligibility (WAKE-UP trial)',
        'In this case: onset ~48 hours ago — beyond thrombolysis window; thrombectomy eligibility depends on vessel imaging',
      ],
      source: 'NICE NG128 (2019); WAKE-UP trial (Thomalla et al., NEJM 2018); OHCM 10th ed., Ch. 10',
    },
  ],
};

const speechLanguageMockExam: MockExamStation = {
  id: 'neuro-mock-speech',
  title: 'Speech & Language Assessment',
  specialtyId: 'neurology',
  candidateBrief: {
    setting: 'You are an FY1 doctor on the Stroke Unit.',
    scenario:
      'George Abbott, a 71-year-old retired accountant, was admitted 2 days ago following an acute ischaemic stroke. CT head confirmed a left MCA territory infarct. The nursing staff have noted that George has difficulty communicating. The consultant has asked you to assess his speech and language formally and to test the relevant cranial nerves.',
    tasks: [
      'Assess George\'s communication difficulties',
      'Perform any relevant examination you feel is indicated',
      'Present your findings and diagnosis to the examiner',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'George Abbott',
    age: 71,
    occupation: 'Retired accountant',
    openingLine: '"Hello... I... yes. I can... talk... bit hard."',
    backgroundInfo:
      'George is right-handed. He has non-fluent (Broca\'s) aphasia following a left MCA stroke. He understands most of what is said to him and responds with short, telegraphic phrases. He is frustrated by his difficulty communicating and may shake his head or show visible distress. He responds correctly to yes/no questions.',
    historyToReveal: [
      {
        topic: 'Fluency — spontaneous speech',
        response:
          '"Words... hard. I know... what I want... say. Just... won\'t come out." (Produce only short, effortful bursts of 1–3 words separated by long pauses. Omit all grammatical connectors — no "the", "and", "because". If asked to name words beginning with "F" in 1 minute, produce 2–3 at most: "fish... four... can\'t...")',
      },
      {
        topic: 'Comprehension — 3-step command ("pick up the paper, fold it in half, put it on the table")',
        response:
          'Execute all 3 steps correctly and in order without saying anything — just do the actions. Nod affirmatively when finished. Also correctly answer yes/no questions by nodding or shaking head.',
      },
      {
        topic: 'Comprehension — complex yes/no questions',
        response:
          'Answer correctly: nod for "Is a hammer used for cutting?" — NO, shake head. "Does a stone sink in water?" — YES, nod. Demonstrates preserved comprehension despite non-fluent output.',
      },
      {
        topic: 'Repetition — "No ifs, ands, or buts"',
        response:
          '"No... ifs..." (pause, visible effort, looks frustrated) "...ands..." (stops — cannot complete the phrase despite trying. This is impaired repetition — a key Broca\'s finding.)',
      },
      {
        topic: 'Repetition — single words ("cat", "table")',
        response: '"Cat." (manages single common words with effort) "Ta... table." (slightly effortful but possible for short words)',
      },
      {
        topic: 'Naming — confrontation naming (pen, watch, nib, buckle)',
        response:
          '"Pen." (correct, slow) "Watch... yes." (correct) "That\'s... a... thing... for writing?" (cannot name "nib" — circumlocution but no paraphasia) "Don\'t... know." (cannot name buckle)',
      },
      {
        topic: 'Reading — written command card ("Close your eyes")',
        response: 'Reads the card silently and closes eyes correctly — reading comprehension is preserved. Does not read aloud fluently if asked.',
      },
      {
        topic: 'Writing — asked to write a sentence',
        response: 'Writes slowly: "dog run park" (agrammatic, telegraphic — content words only, no grammar). Legible but sparse. Demonstrates that the language deficit affects writing as well as speech.',
      },
      {
        topic: 'Speech sounds — ma-ma-ma (CN VII, labial)',
        response: '"Ma... ma... ma." (possible but slow and slightly imprecise — right facial weakness affects labial sounds; not completely absent)',
      },
      {
        topic: 'Speech sounds — la-la-la (CN XII, tongue) and ka-ka-ka (CN IX/X, palatal)',
        response: '"La... la." (can attempt but effortful) "Ka-ka-ka." (relatively better — palatal sounds less affected than labial)',
      },
      {
        topic: 'Cranial nerve VII — smile and show teeth',
        response:
          'Right nasolabial fold is flattened and right corner of mouth droops. When asked to smile, left side lifts normally but right side barely moves. FOREHEAD: when asked to raise eyebrows, BOTH sides raise equally — forehead is SPARED (UMN pattern). Eye closure bilaterally intact.',
      },
      {
        topic: 'Cranial nerve VII — puff out cheeks',
        response: 'Can puff cheeks but air escapes slightly from right corner of mouth due to weakness.',
      },
      {
        topic: 'Cranial nerve IX/X — palate elevation ("say ahh")',
        response: 'Palate elevates symmetrically on both sides; uvula remains in the midline. Gag reflex present bilaterally if tested (patient grimaces and finds it uncomfortable).',
      },
      {
        topic: 'Cranial nerve XII — tongue protrusion',
        response:
          'Tongue deviates to the RIGHT on protrusion. Tongue is not wasted or fasciculating (UMN pattern — no LMN features). If asked to push tongue into cheek, right side is noticeably weaker than left.',
      },
      {
        topic: 'Cranial nerve V — facial sensation',
        response: 'Facial sensation is intact bilaterally to light touch and pin prick — CN V is not affected by the left MCA stroke.',
      },
      {
        topic: 'Cranial nerve VIII — hearing',
        response: 'Hearing is intact bilaterally — no hearing loss. Responds to whispered numbers correctly.',
      },
      {
        topic: 'Right arm and leg (if examined)',
        response:
          'Right arm is held slightly flexed at the elbow and internally rotated at rest (spastic posture). Right-hand grip is weak — cannot grip as firmly as left. Right leg power is reduced. These are expected UMN signs from the left MCA stroke.',
      },
    ],
    onlyIfDirectlyAsked: [
      'Handedness — only reveals he is right-handed if directly asked; confirms left hemisphere is dominant for language',
      'Whether he worked as an accountant — only if asked about occupation; useful context for premorbid literacy level',
    ],
    behaviourNotes: [
      'Non-fluent throughout — NEVER produce long sentences or fluent speech; short effortful bursts only',
      'Frustrated when unable to find words — sigh, shake head, show visible distress at repetition failure',
      'Responds to yes/no questions reliably by nodding or shaking head',
      'Appreciates patience — if the student rushes or interrupts, show frustration; if they are patient and encouraging, visibly relax',
      'Right facial droop visible on inspection before examination begins',
      'Right arm held in mild spastic posture — mention this if the doctor examines limbs',
    ],
  },
  markScheme: [
    {
      domain: 'Contextual Assessment',
      items: [
        { description: 'Introduces self, confirms patient name, obtains consent', marks: 1 },
        { description: 'Asks about handedness (establishes left hemisphere dominance)', marks: 1 },
        { description: 'Asks about hearing aids or communication aids', marks: 1 },
        { description: 'Notes obvious facial asymmetry on inspection before beginning', marks: 1 },
      ],
    },
    {
      domain: 'Language Assessment — All 6 Components',
      items: [
        { description: 'Tests fluency: asks patient to speak freely; notes non-fluent, telegraphic output', marks: 2 },
        { description: 'Tests comprehension: 3-step command or yes/no questions; establishes comprehension is relatively intact', marks: 2 },
        { description: 'Tests repetition: "No ifs, ands, or buts"; establishes repetition is impaired', marks: 2 },
        { description: 'Tests naming: confrontation naming of objects; mostly preserved with effort', marks: 1 },
        { description: 'Tests reading: asks patient to read a written command and execute it; comprehension preserved', marks: 1 },
        { description: 'Tests writing: asks patient to write a sentence; telegraphic agrammatic output', marks: 1 },
      ],
    },
    {
      domain: 'Cranial Nerve Assessment',
      items: [
        { description: 'Tests CN VII: asks to smile, show teeth, close eyes, raise eyebrows — identifies right lower face weakness with forehead sparing (UMN pattern)', marks: 2 },
        { description: 'Tests CN IX/X: asks to say "ahh", observes palate elevation; notes symmetry or asymmetry', marks: 1 },
        { description: 'Tests CN XII: asks to protrude tongue — notes rightward deviation (towards side of weakness, UMN pattern)', marks: 2 },
        { description: 'Tests speech sounds: ma-ma-ma (labial), la-la-la (tongue), ka-ka-ka (palatal)', marks: 1 },
      ],
    },
    {
      domain: 'Classification and Localisation',
      items: [
        { description: 'Correctly classifies as Broca\'s (non-fluent/expressive) aphasia', marks: 2 },
        { description: 'States key features: non-fluent output, impaired repetition, intact comprehension', marks: 2 },
        { description: 'Localises to Broca\'s area (inferior frontal gyrus, Brodmann areas 44/45), left hemisphere', marks: 2 },
        { description: 'Explains UMN pattern of CN VII and XII deficits consistent with cortical/subcortical stroke', marks: 1 },
      ],
    },
    {
      domain: 'Professionalism',
      items: [
        { description: 'Speaks clearly and slowly; allows adequate time for patient responses', marks: 1 },
        { description: 'Does not show frustration; shows empathy and validates patient\'s difficulty', marks: 1 },
        { description: 'Mentions SALT referral and communication support', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Introduces the patient: right-handed retired accountant, 2 days post-left MCA ischaemic stroke, referred for communication assessment.',
    'States the headline finding upfront: non-fluent aphasia with impaired repetition and relatively preserved comprehension, consistent with Broca\'s aphasia.',
    'Supports the classification with specific findings: effortful telegraphic speech output, intact 3-step command following and correct yes/no responses, failure to repeat "no ifs, ands, or buts", and agrammatic writing.',
    'Presents the cranial nerve findings in sequence: right lower facial weakness with forehead sparing (UMN pattern of CN VII), rightward tongue deviation on protrusion (UMN CN XII), symmetric palatal elevation (CN IX/X intact).',
    'Localises the lesion: Broca\'s area (inferior frontal gyrus, Brodmann areas 44/45) of the left hemisphere, consistent with the known left MCA superior division infarct.',
    'Notes the UMN pattern of all cranial nerve signs and explains this is consistent with a cortical or subcortical lesion rather than a brainstem or peripheral nerve lesion.',
    'Closes with a management point: confirms SALT referral is required for both swallowing screen and formal aphasia rehabilitation, and that augmentative communication aids should be considered.',
  ],
  vivaQuestions: [
    {
      question:
        'Describe the classical features of Broca\'s, Wernicke\'s, and conduction aphasia — and localise each to a brain region.',
      keyPoints: [
        'Broca\'s aphasia: non-fluent, effortful, telegraphic output; comprehension relatively intact; impaired repetition; located in inferior frontal gyrus (Broca\'s area, BA 44/45), left hemisphere; caused by MCA superior division infarct',
        'Wernicke\'s aphasia: fluent but paraphasic (neologisms, word substitutions); comprehension severely impaired; impaired repetition; located in superior temporal gyrus (Wernicke\'s area, BA 22), left hemisphere; caused by MCA inferior division infarct',
        'Conduction aphasia: fluent output; comprehension intact; severely impaired repetition — hallmark feature; caused by arcuate fasciculus damage connecting Broca\'s and Wernicke\'s areas',
        'Global aphasia: all components impaired; large left MCA territory infarct — Broca\'s + Wernicke\'s areas both affected',
        'Anomic aphasia: isolated naming difficulty; other components intact; non-localising, can occur in any aphasia or as a residual',
      ],
      source: 'OHCM 10th ed., Ch. 10; Neurological Examination (Aids to the Examination of the Peripheral Nervous System, 5th ed.)',
    },
    {
      question: 'What is the difference between dysphasia and dysarthria, and how would you distinguish them clinically?',
      keyPoints: [
        'Dysphasia: disorder of language (linguistic processing) — content and structure of language is abnormal; due to cortical or subcortical lesion in language-dominant hemisphere',
        'Dysarthria: disorder of motor speech production — language content is normal but articulation is impaired; speech is slurred or imprecise but grammatically intact',
        'Clinically: ask patient to write — dysphasia impairs writing (agrammatic, misspelled); dysarthria leaves writing intact',
        'Dysarthria causes: UMN (spastic dysarthria, pseudobulbar palsy), cerebellar (ataxic dysarthria, scanning speech), LMN/bulbar palsy, Parkinson\'s (hypokinetic dysarthria)',
        'This patient has both dysphasia (Broca\'s) AND UMN dysarthria — common after large MCA stroke',
      ],
      source: 'OHCM 10th ed., Ch. 10; geekymedics.com',
    },
    {
      question: 'When should you refer to Speech and Language Therapy (SALT) after a stroke, and what does SALT assess?',
      keyPoints: [
        'NICE NG128: all stroke patients should have a swallowing screen (water swallow test) before eating/drinking — if fail, nil by mouth and urgent SALT referral',
        'SALT assesses: swallowing safety (videofluoroscopy or FEES if bedside screen fails), communication (aphasia type, severity, and rehabilitation potential), augmentative communication (letter boards, devices)',
        'Communication rehabilitation: constraint-induced aphasia therapy (CIAT), intensive speech therapy — best outcomes with early intervention',
        'Dysphagia after stroke: ~50% acutely; aspiration pneumonia is a major cause of post-stroke mortality — early SALT reduces risk',
        'National Clinical Guideline for Stroke (2023): formal aphasia assessment within 72 hours; individualised communication rehabilitation plan',
      ],
      source: 'NICE NG128 (2019); Intercollegiate Stroke Working Party, National Clinical Guideline for Stroke (2023)',
    },
    {
      question: 'Explain the UMN pattern of cranial nerve VII palsy and why the forehead is spared.',
      keyPoints: [
        'UMN (central) lesion of CN VII: affects contralateral lower face only — nasolabial flattening, mouth droop, weakness of lip retraction; forehead wrinkles and eye closure intact',
        'Forehead is spared because the frontalis muscle receives bilateral cortical representation — ipsilateral and contralateral motor cortices both project to the frontalis',
        'LMN (peripheral) lesion of CN VII (Bell\'s palsy, parotid tumour, Ramsay Hunt): entire ipsilateral face affected including forehead; eye closure weak (Bell\'s sign — globe rolls upward)',
        'Clinically: stroke (UMN) → forehead spared; Bell\'s palsy (LMN) → forehead not spared — a key exam distinction',
        'In this patient: right lower face weakness with forehead sparing = UMN lesion consistent with left hemisphere stroke',
      ],
      source: 'OHCM 10th ed., Ch. 10; Gray\'s Anatomy for Students, 4th ed.',
    },
  ],
};

const dizzinessMockExam: MockExamStation = {
  id: 'neuro-mock-dizziness',
  title: 'Dizziness & Vertigo History',
  specialtyId: 'neurology',
  candidateBrief: {
    setting: 'You are an FY2 doctor in General Practice.',
    scenario:
      'Sarah Patel, a 55-year-old school teacher, presents with a 3-week history of episodic dizziness. Her observations are normal: BP 128/78 mmHg (no postural drop), HR 76 regular, SpO₂ 99%.',
    tasks: [
      'Take a focused history from Sarah',
      'Perform any bedside assessment you feel is appropriate',
      'State your diagnosis and management plan',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'Sarah Patel',
    age: 55,
    occupation: 'Primary school teacher',
    openingLine:
      '"I\'ve been having these horrible dizzy spells — it\'s been going on for three weeks now and I\'m really worried. I nearly fell over last week."',
    backgroundInfo:
      'Sarah is otherwise healthy. She takes no regular medications. The dizziness is triggered by positional changes — specifically rolling over in bed to the right, looking up at the whiteboard in class, and bending down to pick things up. Episodes last less than 30 seconds and she feels fine between them. There is no hearing loss, tinnitus, aural fullness, diplopia, dysphagia, or limb weakness.',
    historyToReveal: [
      {
        topic: 'Type of dizziness — quality',
        response:
          '"It\'s a definite spinning sensation — like the room is rotating around me, or like I\'ve just stepped off a roundabout. It\'s not like I\'m going to faint or black out. Everything just rotates."',
      },
      {
        topic: 'Torsional quality',
        response:
          '"It\'s more of a rotational spin — the ceiling seems to tilt and rotate. It\'s mainly when I roll to the right; rolling to the left isn\'t as bad."',
      },
      {
        topic: 'Duration of each episode',
        response:
          '"Each one is really brief — definitely under a minute. Usually about 15 to 20 seconds, maybe 30 at most, then it stops completely. I\'ve counted sometimes."',
      },
      {
        topic: 'Triggering positions',
        response:
          '"Definitely when I roll over to the right in bed — that\'s the worst one. And looking up at the whiteboard at school, and bending down to pick things up. It\'s always a head movement that sets it off."',
      },
      {
        topic: 'Symptoms between episodes',
        response:
          '"Between the spins I feel completely normal — no dizziness at all. I can walk around fine, I\'m not wobbly. It\'s only when I make those specific movements."',
      },
      {
        topic: 'Nausea and vomiting',
        response: '"Yes, I feel quite sick when it happens — I have to hold on to something and wait for it to pass. I haven\'t actually vomited but I\'ve come close."',
      },
      {
        topic: 'Episode trajectory over 3 weeks',
        response:
          '"It\'s been about the same for the past three weeks — maybe very slightly better in the last few days but not much. It hasn\'t got worse at least."',
      },
      {
        topic: 'Previous similar episodes',
        response: '"No, I\'ve never had anything like this before. This is the first time."',
      },
      {
        topic: 'Hearing loss',
        response: '"No, my hearing is completely normal — both ears."',
      },
      {
        topic: 'Tinnitus or ear fullness/pressure',
        response: '"No ringing, no buzzing, no feeling of pressure or fullness in my ears — nothing like that."',
      },
      {
        topic: 'Headache',
        response: '"No headache at all — not during the episodes and not between them."',
      },
      {
        topic: 'Diplopia, dysarthria, dysphagia',
        response: '"No double vision, my speech is normal, swallowing is fine — I specifically checked for those after reading about vertigo online."',
      },
      {
        topic: 'Limb weakness, facial numbness, coordination',
        response: '"No weakness in my arms or legs. My face feels normal. I\'m not dropping things or bumping into things — just the spinning when I move my head."',
      },
      {
        topic: 'Preceding illness',
        response: '"Actually, I did have a bad cold about four weeks ago — blocked nose, sore throat, the full works. It lasted about a week and then this started shortly after."',
      },
      {
        topic: 'Medications',
        response: '"I take nothing regularly. I haven\'t taken any antibiotics recently, or any ear drops, or anything like that. I had ibuprofen and paracetamol for the cold."',
      },
      {
        topic: 'Past medical history and ear problems',
        response: '"No previous ear problems, no operations on my ears. No meningitis. I\'ve never had tinnitus before. No history of migraines."',
      },
      {
        topic: 'Cardiovascular history and orthostatic symptoms',
        response: '"No heart problems. I don\'t get dizzy standing up — this is completely different to that."',
      },
      {
        topic: 'Impact on life',
        response: '"It\'s really affecting my work. I\'m scared to look up at the board and I\'ve been avoiding driving — I nearly had an accident last week when I turned to check my blind spot."',
      },
    ],
    onlyIfDirectlyAsked: [
      'The torsional/rotational quality of spinning — describes as "spinning" unprompted but only specifies the rotational ceiling-tilting character if asked to describe it more precisely',
      'Exact episode duration (15–30 seconds) — says "brief" initially; only gives the specific duration if directly asked',
      'The preceding URTI — only mentions the cold if asked about recent illness, ear infections, or anything new before the dizziness started',
      'Lateralisation (rolling RIGHT is worse than left) — mentions rolling in bed as a trigger but only specifies right vs left if directly asked',
    ],
    behaviourNotes: [
      'Anxious and frustrated — three weeks of disruption to work and driving is a significant concern',
      'Mentions having looked it up online; will ask "could it be BPPV?" if the doctor seems to be leading towards that diagnosis',
      'Responds very well to reassurance — visibly relieved if told it is benign and treatable',
      'Will ask "Can this be fixed?" or "How long will it last?" — candidate should mention the Epley manoeuvre and prognosis',
      'Worried about driving — candidate should advise caution during active episodes',
    ],
  },
  markScheme: [
    {
      domain: 'Dizziness Characterisation',
      items: [
        { description: 'Asks open question then clarifies the type of dizziness — establishes true rotational vertigo (not presyncope or lightheadedness)', marks: 2 },
        { description: 'Establishes episodic nature (not constant) and duration of each episode (< 30 seconds)', marks: 2 },
        { description: 'Identifies clear positional triggers (rolling right in bed, looking up, bending)', marks: 2 },
        { description: 'Confirms symptoms are absent between episodes (normal interictal function)', marks: 1 },
      ],
    },
    {
      domain: 'Peripheral vs Central Differentiation — ENT Screen',
      items: [
        { description: 'Asks about hearing loss', marks: 1 },
        { description: 'Asks about tinnitus', marks: 1 },
        { description: 'Asks about aural fullness or pressure (→ Ménière\'s if present)', marks: 1 },
        { description: 'Asks about ear discharge or otalgia', marks: 1 },
      ],
    },
    {
      domain: 'Peripheral vs Central Differentiation — Neurological Screen',
      items: [
        { description: 'Asks about diplopia (CN VI/III palsy → posterior fossa)', marks: 1 },
        { description: 'Asks about dysphagia and dysarthria (bulbar involvement)', marks: 1 },
        { description: 'Asks about limb weakness, numbness, or incoordination', marks: 1 },
        { description: 'Asks about headache (migraine, posterior fossa tumour)', marks: 1 },
        { description: 'Asks about preceding upper respiratory tract infection (→ vestibular neuritis)', marks: 1 },
      ],
    },
    {
      domain: 'Dix-Hallpike Test',
      items: [
        { description: 'Explains purpose of the test to patient before performing', marks: 1 },
        { description: 'Describes or demonstrates correct technique: patient sitting, head turned 45° to one side, rapidly moved to supine with head hanging 20–30° below horizontal', marks: 2 },
        { description: 'States what a positive result looks like: geotropic torsional nystagmus with 5–20 second latency, <60 second duration, fatigues on repeated testing', marks: 2 },
        { description: 'Tests both sides (right then left) to identify the affected posterior semicircular canal', marks: 1 },
      ],
    },
    {
      domain: 'Diagnosis and Management',
      items: [
        { description: 'States correct diagnosis: benign paroxysmal positional vertigo (BPPV), right posterior semicircular canal', marks: 2 },
        { description: 'Explains Epley canalith repositioning manoeuvre as first-line treatment', marks: 2 },
        { description: 'Advises no routine vestibular suppressants for BPPV (only for severe nausea short-term)', marks: 1 },
        { description: 'Safety netting: if neurological symptoms develop, no improvement after Epley, or Dix-Hallpike negative → refer for MRI to exclude central cause', marks: 1 },
        { description: 'Addresses driving — advise caution; episodes triggered by head movement; reassess after successful treatment', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Introduces the patient: 55-year-old teacher with a 3-week history of episodic dizziness, onset following an URTI.',
    'States the headline diagnosis upfront: benign paroxysmal positional vertigo (BPPV), most likely affecting the right posterior semicircular canal.',
    'Supports the diagnosis from the history: true rotational vertigo (not presyncope or imbalance), triggered by rolling right in bed, looking up, and bending down, lasting under 30 seconds, with complete resolution between episodes.',
    'Highlights the key negative findings that exclude serious central pathology: no headache, no diplopia, no dysphagia or dysarthria, no limb weakness or facial numbness, and normal balance between episodes.',
    'Notes the absence of features that would suggest Ménière\'s disease: no unilateral hearing loss, no tinnitus, and no aural fullness.',
    'Describes the bedside test performed and the expected positive result: Dix-Hallpike with head turned right elicits geotropic torsional nystagmus with a short latency, duration under 60 seconds, and fatigability on repeat testing.',
    'Presents a clear management plan: Epley canalith repositioning manoeuvre, written home exercise instructions, safety advice regarding driving during active episodes, and safety-netting to return if neurological symptoms develop.',
  ],
  vivaQuestions: [
    {
      question:
        'Explain the pathophysiology of BPPV and why the posterior semicircular canal is most commonly affected.',
      keyPoints: [
        'BPPV is caused by displaced otoconia (calcium carbonate crystals from the utricle macula) migrating into a semicircular canal — most commonly the posterior canal (~80–90% of cases)',
        'Otoconia in the canal: as the head moves, crystals move through the endolymph, causing abnormal cupular deflection and false sense of rotation',
        'Posterior canal most affected because it is the most dependent (lowest) canal in upright position, making it the most likely target for gravitational displacement of otoconia',
        'Horizontal canal BPPV (~10%): positive Dix-Hallpike with direction-changing nystagmus in roll test (Barbecue manoeuvre for treatment)',
        'Precipitants: idiopathic (most common), head trauma, prolonged recumbency, vestibular neuritis (otoconia liberated by viral inflammation of utricular macula)',
      ],
      source: 'OHCM 10th ed., Ch. 10; Bhattacharyya et al., AAO-HNS BPPV Guideline (2017)',
    },
    {
      question:
        'Describe the Dix-Hallpike test in detail and how you differentiate a positive BPPV result from a false-positive central cause.',
      keyPoints: [
        'Technique: patient seated, examiner turns head 45° to the tested side; patient rapidly moved to supine with head hanging 20–30° below couch level; observe eyes for nystagmus for 60 seconds',
        'Positive BPPV (posterior canal): geotropic (towards the ground) torsional/rotational nystagmus; latency 5–20 seconds; duration <60 seconds; fatigues on repeated testing; vertigo accompanies nystagmus',
        'Central causes of positive Dix-Hallpike: immediate onset (no latency), purely vertical or direction-changing nystagmus, does not fatigue, may have no vertigo despite nystagmus, neurological signs present',
        'Red flags requiring MRI: bilateral BPPV, no fatigability, purely vertical nystagmus, headache, neurological deficit, age <40 without precipitant',
        'HINTS exam (Head Impulse, Nystagmus, Test of Skew): distinguishes peripheral (high-sensitivity) from central (high-risk) acute vertigo at the bedside',
      ],
      source: 'Bhattacharyya et al., AAO-HNS BPPV Guideline (2017); HINTS (Kattah et al., Stroke 2009)',
    },
    {
      question: 'How do you distinguish BPPV from Ménière\'s disease and vestibular neuritis clinically?',
      keyPoints: [
        'BPPV: episodic vertigo <1 minute; triggered by position change; no hearing loss, tinnitus, or aural fullness; positive Dix-Hallpike; between attacks completely normal',
        "Ménière's disease: episodic vertigo lasting 20 minutes–12 hours (much longer than BPPV); associated with unilateral fluctuating sensorineural hearing loss, tinnitus, and aural fullness (Bárány Society criteria); due to endolymphatic hydrops",
        "Vestibular neuritis: single prolonged episode of severe vertigo (days) without hearing loss; follows URTI; horizontal direction-fixed nystagmus away from affected ear; positive head impulse test towards affected side; Dix-Hallpike negative; resolves over weeks",
        "Labyrinthitis: as vestibular neuritis but WITH cochlear involvement (unilateral hearing loss)",
        "Key distinguishing feature: episode duration is the most discriminating: seconds = BPPV; hours = Ménière's; days = neuritis/labyrinthitis",
      ],
      source: "Bárány Society Ménière's Criteria (2015); OHCM 10th ed., Ch. 10; geekymedics.com",
    },
    {
      question:
        'What is the HINTS exam, and when should you use it?',
      keyPoints: [
        'HINTS: Head Impulse, Nystagmus type, Test of Skew — bedside 3-part exam for acute persistent vertigo lasting hours/days (NOT episodic vertigo like BPPV)',
        'Head impulse test (HIT): positive (catch-up saccade when head rapidly thrust towards affected side) = peripheral lesion; NORMAL head impulse in acute vertigo = central (posterior fossa stroke) until proven otherwise',
        'Nystagmus: direction-fixed (peripheral) vs direction-changing or purely vertical (central)',
        'Skew deviation (vertical ocular misalignment): present = central (brainstem or cerebellar lesion)',
        'HINTS sensitivity >99% and specificity >97% for central cause in acute vestibular syndrome — more sensitive than early MRI DWI for posterior circulation stroke',
        'Use in: acute vestibular syndrome with sustained nystagmus at rest; NOT indicated in BPPV (where episodes are brief and positional)',
      ],
      source: 'Kattah et al., Stroke 2009; Newman-Toker et al., JAMA 2013; OHCM 10th ed., Ch. 10',
    },
  ],
};

export const NEURO_MOCK_EXAMS: MockExamStation[] = [
  seizureMockExam,
  headacheMockExam,
  speechLanguageMockExam,
  dizzinessMockExam,
];
