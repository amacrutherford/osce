import type { ExamStep } from './steps';

export const paedDevelopmentalSteps: ExamStep[] = [
  {
    id: 'paed-dev-history',
    stepNumber: 1,
    title: 'History Taking',
    subtitle: 'Antenatal, birth, neonatal, and family history',
    description: 'Gather a structured developmental history from the parent or carer, covering antenatal exposures, birth complications, and the neonatal period to identify potential causes of developmental delay.',
    checklist: [
      'Ask about antenatal history: maternal infections (rubella, CMV, toxoplasmosis, Zika), alcohol (FASD), drugs, smoking, medications, gestational diabetes',
      'Ask about birth history: gestation (preterm <37 weeks), mode of delivery, birth weight (SGA <2nd centile), Apgar scores, need for resuscitation',
      'Ask about neonatal period: NICU admission, neonatal jaundice requiring exchange transfusion, feeding difficulties, seizures',
      'Ask about family history: consanguinity, developmental delay, genetic conditions, intellectual disability, autism',
      'Ask about parental concerns: what specifically worried them, when they first noticed, whether the child is regressing',
    ],
    questions: [
      {
        id: 'paed-dev-hist-q1',
        type: 'examiner',
        text: 'What antenatal exposures can cause developmental delay and what are their mechanisms?',
      },
      {
        id: 'paed-dev-hist-p1',
        type: 'pathology',
        text: '',
        bullets: [
          'Congenital rubella syndrome: deafness, cataracts, congenital heart disease, intellectual disability — prevented by MMR vaccination; notifiable',
          'Congenital CMV: most common infectious cause of sensorineural hearing loss; periventricular calcification on head CT; treat with valganciclovir',
          'Foetal alcohol spectrum disorder (FASD): no safe level of alcohol; microcephaly, thin vermilion border, smooth philtrum, intellectual disability, behavioural problems',
          'Preterm birth (<37 weeks): periventricular leukomalacia (PVL) → spastic diplegia (CP); IVH (intraventricular haemorrhage) → hydrocephalus, CP, global delay',
        ],
        source: 'OHCM 10th ed., Ch. 12',
      },
    ],
  },
  {
    id: 'paed-dev-observation',
    stepNumber: 2,
    title: 'Observation of the Child',
    subtitle: 'Behaviour, interaction, and spontaneous activity',
    description: 'Observe the child\'s spontaneous behaviour in the room before formal testing, as natural interaction with parent and examiner provides important developmental information.',
    checklist: [
      'Observe whether the child makes eye contact with the examiner and parent',
      'Note response to name being called (key red flag if absent by 12 months)',
      'Observe play: is it age-appropriate? Does the child engage in symbolic/pretend play?',
      'Note motor activity: are movements symmetric? Any abnormal posturing or involuntary movements?',
      'Observe communication: does the child use words, pointing, gestures? Does the child initiate communication?',
    ],
    questions: [
      {
        id: 'paed-dev-obs-q1',
        type: 'examiner',
        text: 'What are the red flag signs for autism spectrum disorder at 18 months?',
      },
      {
        id: 'paed-dev-obs-p1',
        type: 'pathology',
        text: '',
        bullets: [
          'No social smile by 6 weeks; no response to name by 12 months; no pointing (protodeclarative) or waving by 12 months',
          'No single words by 16 months; no two-word phrases by 24 months',
          'Any regression in language, social skills, or motor skills at any age is ALWAYS a red flag — refer immediately',
          'Additional ASD signs: reduced eye contact, limited joint attention, restricted interests, repetitive behaviours (stereotypies), sensory sensitivities',
          'ASD diagnosis requires MDT assessment using ADI-R and ADOS-2; NICE NG180',
        ],
        source: 'NICE NG180 (2021)',
      },
    ],
  },
  {
    id: 'paed-dev-gross-motor',
    stepNumber: 3,
    title: 'Gross Motor Assessment',
    subtitle: 'Milestones from birth to 5 years',
    description: 'Assess gross motor development against expected milestones, testing age-appropriate skills with toys and observation of spontaneous movement.',
    checklist: [
      'Ask parent about current gross motor skills: can the child sit, stand, walk, run, jump, hop?',
      'For infants: observe head control (complete by 4 months), sitting (unsupported by 8 months), pulling to stand (9–10 months)',
      'Offer a toy to a lying infant — observe trunk rotation and whether the child can sit up',
      'For toddlers: ask to walk, run, go up stairs (2 feet/step at 2 years; one foot/step at 3 years), kick a ball',
      'For older children: hop on one foot at 4 years; ride a bicycle without stabilisers at 5 years',
      'Check for primitive reflexes (should disappear by 4–6 months): persistence = cerebral palsy',
    ],
    questions: [
      {
        id: 'paed-dev-gm-q1',
        type: 'examiner',
        text: 'A 10-month-old infant is not yet sitting unsupported. What is your differential and investigation plan?',
      },
      {
        id: 'paed-dev-gm-p1',
        type: 'pathology',
        text: '',
        bullets: [
          'Sitting unsupported expected by 8 months (normal range 6–9 months) — 10 months is borderline delayed',
          'Differential: cerebral palsy (hypotonia, hypertonia, persistent primitive reflexes), spinal muscular atrophy (hypotonia, areflexia, tongue fasciculations), developmental delay from prematurity, chromosomal disorder',
          'Investigations: MRI brain and spine, genetic testing (chromosomal microarray, SMA gene deletion), FBC, TFTs, metabolic screen',
          'Early physiotherapy referral improves outcomes regardless of aetiology',
        ],
        source: 'RCPCH Developmental Charts (2012)',
      },
    ],
  },
  {
    id: 'paed-dev-fine-motor',
    stepNumber: 4,
    title: 'Fine Motor and Vision',
    subtitle: 'Milestones for hand function and visual development',
    description: 'Assess fine motor development and visual function, noting early hand preference or asymmetry which may indicate underlying hemiplegia.',
    checklist: [
      'Offer small objects (brick, raisin) appropriate to age and observe grasp: palmar grasp at 4 months, radial palmar at 6 months, pincer grip (index + thumb) at 9–12 months',
      'For toddlers: stacking bricks (6 at 2 years, 9 at 3 years), scribbling (18 months), copying circle (3 years), copying cross (4 years)',
      'Note any asymmetry in hand use — early hand preference before 18 months suggests contralateral hemiplegia',
      'Assess vision: fix and follow at 6 weeks, smile at a face at 6 weeks, visual acuity 6/6 by age 4 (Kay pictures)',
      'Test for squint (cover test) and amblyopia — refer all squints promptly to paediatric ophthalmology',
    ],
    questions: [
      {
        id: 'paed-dev-fm-q1',
        type: 'examiner',
        text: 'Why is early hand preference before 18 months an important developmental red flag?',
      },
      {
        id: 'paed-dev-fm-r1',
        type: 'rationale',
        text: '',
        bullets: [
          'Established hand dominance before 18 months suggests a preference driven by weakness or inability to use the other hand — not true laterality preference',
          'Most commonly indicates hemiplegia affecting the opposite (non-preferred) hand — typically from perinatal cortical injury',
          'Cerebral palsy hemiplegic type: unilateral spasticity, circumduction gait, fisted hand; MRI brain shows periventricular white matter injury or cortical/subcortical stroke',
          'Refer to community paediatrics and physiotherapy — early identification and intervention improves long-term motor outcomes',
        ],
        source: 'OHCM 10th ed., Ch. 12',
      },
    ],
  },
  {
    id: 'paed-dev-language',
    stepNumber: 5,
    title: 'Language and Hearing',
    subtitle: 'Expressive and receptive language milestones; hearing assessment',
    description: 'Assess expressive and receptive language development and screen hearing, as speech delay is the most common developmental concern in primary care.',
    checklist: [
      'Ask: what sounds does the child make? Any words? (mama/dada specific by 12 months; 50 words and 2-word phrases by 2 years)',
      'Test receptive language: does the child understand simple commands? ("Give me the ball") — comprehension precedes expression',
      'Ask parent to rate the child\'s vocabulary: 50+ words at 2 years, sentences at 3 years, fluent intelligible speech at 4 years',
      'Ask about hearing: did the baby startle to sounds, babble at 6 months? Has the newborn hearing screen (AABR) result been given?',
      'Refer to audiology if any concern — parental concern about hearing should always be acted upon promptly',
    ],
    questions: [
      {
        id: 'paed-dev-lang-q1',
        type: 'examiner',
        text: 'What are the causes of speech and language delay and how do you prioritise investigation?',
      },
      {
        id: 'paed-dev-lang-p1',
        type: 'pathology',
        text: '',
        bullets: [
          'Hearing impairment: most important reversible cause — refer to audiology (play audiometry, AABR); otitis media with effusion (glue ear) is the commonest conductive cause in young children',
          'Global developmental delay: speech delay in the context of delay in all other domains suggests a global cause (chromosomal, metabolic, structural brain)',
          'ASD: language delay + social communication difficulties + restricted repetitive behaviours — refer to ASD assessment team',
          'Specific language impairment (DLD — developmental language disorder): isolated language delay without social or cognitive concerns; support with SALT (speech and language therapy)',
        ],
        source: 'NICE NG93 (2017)',
      },
    ],
  },
  {
    id: 'paed-dev-social',
    stepNumber: 6,
    title: 'Social and Play Development',
    subtitle: 'Social milestones and screening for autism',
    description: 'Assess social and play development, which is the domain most sensitive for early identification of autism spectrum disorder.',
    checklist: [
      'Ask: does the child smile responsively? (6 weeks); does the child point to share interest (protodeclarative pointing, not just requesting)? (12 months)',
      'Ask about pretend/symbolic play: feeding a doll, using a spoon as a phone — expected from 18 months',
      'Ask about parallel play (2 years), cooperative play (3–4 years)',
      'Screen for ASD using M-CHAT-R/F (Modified Checklist for Autism in Toddlers) at 18 months if any concern',
      'Ask about rigid routines, restricted interests, repetitive behaviours, and sensory sensitivities',
    ],
    questions: [
      {
        id: 'paed-dev-soc-q1',
        type: 'examiner',
        text: 'What is joint attention and why is it significant in developmental assessment?',
      },
      {
        id: 'paed-dev-soc-r1',
        type: 'rationale',
        text: '',
        bullets: [
          'Joint attention: the ability to coordinate attention between a person and an object to share an experience — established by 9–12 months',
          'Involves: protodeclarative pointing (pointing to share interest, not just to request), gaze-following, and showing objects to others',
          'Absent or reduced joint attention is one of the earliest and most sensitive markers of ASD — predicts subsequent language and social development',
          'Distinguished from protoimperative pointing (pointing to request something — may be preserved in ASD)',
        ],
        source: 'NICE NG180 (2021)',
      },
    ],
  },
  {
    id: 'paed-dev-completion',
    stepNumber: 7,
    title: 'Completion and Investigations',
    subtitle: 'Assess growth, refer, and investigate',
    description: 'Summarise developmental findings, plot growth parameters on centile charts, and plan appropriate investigations and specialist referrals.',
    checklist: [
      'Plot height, weight, and head circumference (OFC) on centile charts — microcephaly (OFC <2nd centile) suggests brain pathology',
      'Assess for dysmorphic features systematically (face, hands, feet, skin)',
      'State investigations: chromosomal microarray (first-line for GDD + dysmorphic features), metabolic screen (TMS, urine organic/amino acids), MRI brain, hearing test, vision assessment, TFTs',
      'Refer to community paediatrics or neurodevelopmental team for formal assessment',
      'Refer to MDT: speech and language therapy, physiotherapy, occupational therapy, educational psychologist as indicated',
    ],
    questions: [
      {
        id: 'paed-dev-comp-q1',
        type: 'examiner',
        text: 'What chromosomal microarray findings are associated with autism and intellectual disability?',
      },
      {
        id: 'paed-dev-comp-p1',
        type: 'pathology',
        text: '',
        bullets: [
          'Chromosomal microarray (CMA) detects copy number variants (CNVs) — submicroscopic deletions and duplications missed on standard karyotype',
          'Down syndrome (Trisomy 21): commonest chromosomal cause of intellectual disability; CMA + FISH or karyotype to confirm',
          '22q11.2 deletion (DiGeorge/VCFS): cardiac defects, palatal abnormalities, immune deficiency, learning disability, schizophrenia risk',
          'Fragile X syndrome (FMR1 trinucleotide repeat expansion): commonest inherited cause of intellectual disability in males; macroorchidism, prominent ears, social anxiety, ASD features; test with FMR1 PCR',
          'CMA is first-line for GDD/ASD/ID without a specific clinical diagnosis — yield ~15–20%',
        ],
        source: 'RCPCH Developmental Paediatrics (2012)',
      },
    ],
  },
];

// EXAM_ENTRY_DATA
// {"id":"paed-developmental","title":"Paediatric Developmental Assessment","description":"Structured developmental assessment covering history, gross motor, fine motor and vision, language and hearing, social and play development, with red flags for cerebral palsy, autism, and global developmental delay.","specialtyId":"paediatrics","highYieldSummary":["Key gross motor milestones: sit unsupported 6–8 months, walk 12–15 months, run 18 months, stairs one foot/step at 3 years. Failure to walk by 18 months requires investigation.","Early hand preference before 18 months = contralateral hemiplegia (not true laterality) — most commonly from perinatal cortical injury; refer for MRI brain and physiotherapy.","ASD red flags: no social smile by 6 weeks, no pointing or waving by 12 months, no words by 16 months, no 2-word phrases by 24 months. Any regression in skills = ALWAYS refer immediately.","Language delay: exclude hearing impairment first (audiological assessment). Parental concern about hearing should always be acted upon promptly — never dismiss.","Chromosomal microarray (CMA) is first-line investigation for global developmental delay with dysmorphic features — yield ~15–20%; detects CNVs missed on standard karyotype.","Fragile X: commonest inherited ID in males (FMR1 CGG repeat expansion); macroorchidism, prominent ears, social anxiety, ASD features. Down syndrome: commonest chromosomal cause of ID (Trisomy 21)."]}
