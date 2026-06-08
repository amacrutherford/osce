import type { MockExamStation } from './mockExamTypes';

const primarySyphilisMockExam: MockExamStation = {
  id: 'primary_syphilis_history',
  title: 'Sexual Health History — Genital Ulcer',
  diagnosis: 'Primary syphilis',
  specialtyId: 'sexual-health',
  candidateBrief: {
    setting: 'You are an FY1 in a GUM (Genitourinary Medicine) clinic.',
    scenario:
      'Sophie Marshall, 26, has self-referred with a 10-day history of a painless genital lesion. She is anxious and has not seen a doctor about this before. The examiner will show you a clinical photograph of the lesion at the start of the station.',
    tasks: [
      'Take a focused sexual health history from Miss Marshall',
      'Describe the clinical photograph and explain the most likely diagnosis and management to the patient',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'Sophie Marshall',
    age: 26,
    occupation: 'Marketing executive',
    openingLine:
      '"I\'ve been putting off coming in, but I found this... sore, down below. I\'ve been Googling it and I\'m really worried. I don\'t know what it is."',
    historyOfPresentingComplaint: [
      {
        label: 'Presenting complaint — painless ulcer, left labia, 10 days; discovered while washing',
        quote: '"I found it about 10 days ago. It\'s like a small sore — here." [gestures to left groin area] "It doesn\'t hurt at all, which is what I thought was weird. I thought genital sores always hurt."',
      },
      {
        label: 'Character of lesion — round, ~1 cm, defined edges, firm base (indurated); no discharge',
        quote: '"It\'s a round ulcer, about the size of a small coin. The edges look quite defined. It feels firm when I press around it." – "There\'s no discharge from it."',
      },
      {
        label: 'Pain — completely absent',
        quote: '"No pain at all — not even when I touch it. Is that normal? That surprised me."',
      },
      {
        label: 'Last sexual contact — 3 weeks ago; new male partner James; single unprotected vaginal intercourse',
        quote: '"About 3 weeks ago. His name\'s James — we met at a work event. It was just the once." – "Before that I was with my previous boyfriend for two years. We split up in the spring."',
      },
      {
        label: 'Type of sexual contact — vaginal only; no oral or anal',
        quote: '"Just vaginal sex. No oral or anal sex."',
      },
      {
        label: 'Contraception — none used; not on pill at the time',
        quote: '"We didn\'t use anything — I know, that was stupid. I\'m not on the pill at the moment." – "I don\'t usually have casual encounters."',
      },
      {
        label: 'Symptoms in partner — unknown; has only texted once since',
        quote: '"I don\'t know — I\'ve only texted him once since. I haven\'t told him about this."',
      },
      {
        label: 'Previous STI screen — full screen 8 months ago, all clear',
        quote: '"I had a full screen at this clinic about 8 months ago. It was all clear."',
      },
      {
        label: 'Systemic symptoms — none; entirely well',
        quote: '"No. I feel completely well. No fever, no rash, no sore throat, no joint pains."',
      },
      {
        label: 'Lymphadenopathy — bilateral inguinal lymph nodes (painless)',
        quote: '"I noticed some swollen glands in my groin, both sides. They\'re not painful."',
      },
      {
        label: 'Gynaecological history — last cervical smear last year (normal); regular periods; no unusual vaginal discharge',
        quote: '"My last cervical smear was last year — normal. Periods are regular." – "No vaginal discharge that\'s unusual for me."',
      },
    ],
    pastMedicalHistory: [
      { label: 'No significant past medical history', quote: '"Nothing. I\'m completely healthy."' },
    ],
    drugHistory: [
      { label: 'No regular prescribed medications; no known allergies', quote: '"No regular medications." – "No allergies."' },
      { label: 'No contraception currently', quote: '"I\'m not on the pill at the moment."' },
    ],
    familyHistory: [],
    socialHistory: [
      { label: 'Marketing executive (26); sexually active; 3 partners in past year', quote: '"I don\'t usually have casual encounters."' },
    ],
    importantNegatives: [
      'No pain in the ulcer ("It\'s completely painless — which is what confused me.")',
      'No multiple lesions ("Just the one.")',
      'No vesicles or crusting ("Not blistery — more like a clean open sore.")',
      'No fever, rash (palms/soles), or sore throat ("Completely well otherwise.")',
      'No prior genital ulcers ("First time I\'ve had anything like this.")',
      'No IV drug use or blood transfusions ("No.")',
      'No sex with men who have sex with men (for risk stratification) — not applicable (heterosexual)',
    ],
    ice: {
      ideas:
        '"I Googled painless genital ulcers and I read about syphilis. I don\'t know if that\'s possible — I didn\'t think it was still common."',
      concerns:
        '"I\'m worried it could be something serious and that I might have passed it to someone or they\'ve given it to me without knowing." – "And I\'d be mortified if anyone found out."',
      expectations:
        '"I want to know what it is and how to get rid of it. And whether I need to tell James."',
    },
    onlyIfDirectlyAsked: [
      'HIV status — never been tested; willing to test today',
      'Number of partners in lifetime — approximately 8; not asked unless student enquires specifically',
      'Whether she has told anyone — has told nobody; student should reassure about confidentiality',
    ],
    behaviourNotes: [
      'Embarrassed throughout; relaxes considerably if the student is matter-of-fact and non-judgemental',
      'Asks "Is it syphilis?" — student should acknowledge the possibility and explain the next steps (serology)',
      'Asks "Is it curable?" — student should reassure that syphilis, if confirmed, is treated with penicillin and is fully curable at this stage',
      'Asks "Do I have to tell James?" — student should explain partner notification and how the GUM clinic can contact him anonymously if she prefers',
      'Reacts with relief when told the treatment is simple and that confidentiality is absolute',
      'Does NOT currently know the diagnosis — the student should avoid stating it with certainty before serology confirms it',
    ],
  },
  markScheme: [
    {
      domain: 'Opening the consultation',
      items: [
        { description: 'Introduces themselves and establishes a private, non-judgemental setting', marks: 1 },
        { description: 'Confirms confidentiality at the outset', marks: 1 },
      ],
    },
    {
      domain: 'History of the lesion',
      items: [
        { description: 'Asks about onset, duration, and site of the ulcer', marks: 1 },
        { description: 'Explores the character — establishes that the ulcer is PAINLESS and indurated', marks: 2 },
        { description: 'Asks about associated lymphadenopathy — identifies bilateral inguinal lymph nodes', marks: 1 },
        { description: 'Asks about systemic symptoms — fever, rash (especially palms/soles), sore throat, arthralgia', marks: 1 },
      ],
    },
    {
      domain: 'Sexual history',
      items: [
        { description: 'Asks about the last sexual contact — timing (3 weeks ago) and partner identity', marks: 1 },
        { description: 'Establishes the type of sexual contact (vaginal, oral, anal)', marks: 1 },
        { description: 'Asks about contraception and condom use', marks: 1 },
        { description: 'Asks about symptoms in partners', marks: 1 },
        { description: 'Asks about previous STI screening — confirms last screen 8 months ago was negative', marks: 1 },
      ],
    },
    {
      domain: 'Risk stratification',
      items: [
        { description: 'Asks about IV drug use', marks: 1 },
        { description: 'Asks about prior HIV test or known HIV status', marks: 1 },
      ],
    },
    {
      domain: 'Past medical and drug history',
      items: [
        { description: 'Takes a drug history including allergies (relevant for penicillin treatment)', marks: 1 },
      ],
    },
    {
      domain: 'Photo description and diagnosis',
      items: [
        {
          description: 'Describes the photograph accurately: single, clean-edged, indurated, painless ulcer — a classic syphilitic chancre',
          marks: 2,
        },
        {
          description:
            'States the most likely diagnosis is primary syphilis — correctly links painless ulcer + inguinal lymphadenopathy + unprotected sex 3 weeks ago',
          marks: 2,
        },
      ],
    },
    {
      domain: 'Explaining the diagnosis and management',
      items: [
        {
          description: 'Explains that diagnosis requires confirmation with serology (TPHA, VDRL/RPR, FTA-ABS or equivalent)',
          marks: 1,
        },
        {
          description: 'Explains treatment: benzathine penicillin G IM single dose (or procaine penicillin for 10 days); doxycycline if penicillin-allergic',
          marks: 1,
        },
        { description: 'Explains partner notification — offers GUM contact tracing service', marks: 1 },
        { description: 'Advises abstaining from sexual contact until treatment complete and lesion healed', marks: 1 },
      ],
    },
    {
      domain: 'Key communication skills',
      items: [
        { description: 'Non-judgemental, sensitive throughout; does not lecture about unprotected sex', marks: 1 },
        { description: 'Summarising — recaps clearly; checks understanding', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Miss Marshall is a 26-year-old woman presenting with a 10-day history of a painless genital ulcer on the left labia following unprotected vaginal intercourse with a new partner 3 weeks ago',
    'The photograph shows a single, clean-edged, indurated, painless ulcer approximately 1 cm in diameter — this is a classic syphilitic chancre, the hallmark of primary syphilis',
    'Associated bilateral painless inguinal lymphadenopathy and incubation period of approximately 3 weeks are both consistent with primary syphilis (Treponema pallidum, incubation 9–90 days)',
    'She is otherwise completely well with no systemic symptoms (no rash, fever, or sore throat) — distinguishing primary from secondary syphilis, where systemic features predominate',
    'Investigations: syphilis serology (TPHA, VDRL/RPR, FTA-ABS); full STI screen (HIV, chlamydia, gonorrhoea, hepatitis B/C); urine NAAT for chlamydia/gonorrhoea',
    'Management: benzathine penicillin G 2.4 MU IM single dose (first-line); doxycycline 100 mg BD for 14 days if penicillin-allergic; advise abstinence until treatment complete; partner notification via GUM contact tracing service',
    'Note: serology may be negative in very early primary syphilis (window period) — if initial screen negative, repeat in 6 weeks',
  ],
  vivaQuestions: [
    {
      question: 'What are the clinical stages of syphilis and how do they present?',
      keyPoints: [
        'Primary syphilis (9–90 days post-exposure): single painless indurated ulcer (chancre) at inoculation site; bilateral painless inguinal lymphadenopathy; heals spontaneously in 3–6 weeks',
        'Secondary syphilis (6–10 weeks after primary): systemic dissemination; maculopapular rash on trunk, PALMS, and SOLES; condylomata lata (flat wart-like lesions); mucous patches; painless lymphadenopathy; malaise, fever, arthralgia',
        'Latent syphilis: serologically positive but asymptomatic; early latent (<2 years), late latent (≥2 years)',
        'Tertiary syphilis (years later): gummas (granulomatous lesions); cardiovascular syphilis (aortic regurgitation, aortic root aneurysm); neurosyphilis (tabes dorsalis, general paresis of the insane)',
        'Congenital syphilis: Hutchinson\'s teeth, interstitial keratitis, saddle nose, saber shins, 8th nerve deafness',
      ],
      source: 'BASHH Syphilis Guidelines (2015); OHCM 10th ed., Ch. 8',
    },
    {
      question: 'What serological tests are used to diagnose syphilis and how do you interpret them?',
      keyPoints: [
        'Treponemal tests (detect specific anti-treponemal antibodies): TPHA (Treponema pallidum haemagglutination assay), FTA-ABS, CLIA/EIA — remain positive after treatment (not useful for monitoring treatment response)',
        'Non-treponemal tests (detect cardiolipin antibodies): VDRL (Venereal Disease Research Laboratory), RPR (Rapid Plasma Reagin) — titre reflects disease activity; used to monitor treatment response; false positives in autoimmune disease, pregnancy',
        'UK screening: treponemal EIA/CLIA first-line; if positive, confirm with TPHA + RPR titre',
        'Window period: tests can be negative in very early primary syphilis; repeat in 6 weeks if high clinical suspicion',
        'Neurosyphilis: CSF VDRL positive in ~30–70%; CSF pleocytosis + elevated protein; LP indicated if neurological symptoms or treatment failure',
      ],
      source: 'BASHH Syphilis Guidelines (2015); PHE Syphilis Testing Algorithm',
    },
    {
      question: 'What is the treatment for primary syphilis, and what is the Jarisch-Herxheimer reaction?',
      keyPoints: [
        'First-line: benzathine penicillin G 2.4 MU IM single dose (primary, secondary, early latent syphilis)',
        'Alternative if penicillin-allergic: doxycycline 100 mg twice daily for 14 days; azithromycin 2 g single dose (resistance documented — not first-line)',
        'Late latent/tertiary: benzathine penicillin G weekly for 3 weeks',
        'Neurosyphilis: IV benzylpenicillin (procaine penicillin 2.4 MU IM daily + probenecid for 17–21 days)',
        'Jarisch-Herxheimer reaction: fever, rigors, tachycardia within 24 hours of first dose of penicillin — caused by release of treponemal antigens; managed with paracetamol and reassurance; self-limiting',
      ],
      source: 'BASHH Syphilis Guidelines (2015); BNF — Syphilis treatment',
    },
  ],
};

const postCoitalBleedingMockExam: MockExamStation = {
  id: 'sexual_health_pcb',
  title: 'Sexual Health History — Post-Coital Bleeding',
  diagnosis: 'Post-coital bleeding — cervical ectropion vs cervical carcinoma; requires urgent investigation with colposcopy',
  specialtyId: 'sexual-health',
  candidateBrief: {
    setting: 'You are an FY1 in a GUM (Genitourinary Medicine) clinic.',
    scenario:
      'Emma Parker, 29, has self-referred with a 3-month history of bleeding after sexual intercourse. She has never had a cervical smear despite repeated reminders from her GP.',
    tasks: [
      'Take a focused sexual health and gynaecological history from Emma',
      'Explain your initial management plan including any urgent referral',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'Emma Parker',
    age: 29,
    occupation: 'Nursery teacher',
    openingLine:
      '"I\'ve been putting this off for a while — I\'m a bit embarrassed. I keep bleeding after sex. It\'s been happening for about 3 months. I\'ve never had a smear test either, which I know I should have done." [slightly embarrassed, concerned]',
    socrates: [
      {
        label: 'Site',
        descriptor: 'post-coital — bleeding occurs with penetrative vaginal intercourse only; likely cervical origin',
        quotes: ['"It\'s always after sex — only after penetrative sex." – "It seems to come from inside, not the skin."'],
      },
      {
        label: 'Onset',
        descriptor: '3 months ago; gradual onset; was not present before this; no triggering event identified',
        quotes: ['"It started about 3 months ago. I can\'t really pin down why it started." – "It wasn\'t there before that — I would have noticed."'],
      },
      {
        label: 'Character',
        descriptor: 'bright red fresh blood; small volume; appears on toilet paper and occasionally on the bedsheet; not heavy',
        quotes: ['"It\'s bright red — a small amount. I notice it on the toilet paper afterwards." – "It\'s not heavy — not like a period. Just a small amount each time."'],
      },
      {
        label: 'Radiation',
        descriptor: 'no associated pelvic or lower abdominal pain; no deep dyspareunia',
        quotes: ['"No pain at all — it doesn\'t hurt during sex and it doesn\'t hurt afterwards." – "No. No pain in my pelvis or anything like that."'],
      },
      {
        label: 'Associated symptoms',
        descriptor: 'occasional intermenstrual spotting noticed between periods; no discharge; no dysuria; no systemic symptoms',
        quotes: ['"Occasionally I notice a little spotting between periods too — not always, but sometimes." – "No unusual discharge. No problems with urination."'],
      },
      {
        label: 'Timing',
        descriptor: 'occurs every time she has penetrative sex for the past 3 months; consistent and predictable',
        quotes: ['"It happens every time without fail — every time we have sex." – "There are no times now when it doesn\'t happen."'],
      },
      {
        label: 'Exacerbating / relieving',
        descriptor: 'only penetrative sex triggers bleeding; tampons do not trigger bleeding; no spontaneous bleeding',
        quotes: ['"It\'s definitely only after penetrative sex. I\'ve tried tampons — no bleeding with those." – "It doesn\'t just happen on its own."'],
      },
      {
        label: 'Severity',
        descriptor: 'small volume; not requiring sanitary protection but visible and persistent; has caused anxiety',
        quotes: ['"It\'s not huge amounts — I don\'t need a pad for it. But it happens every single time and it\'s worrying me." – "It\'s the fact it keeps happening that\'s made me come in."'],
      },
    ],
    pastMedicalHistory: [
      { label: 'No significant past medical history; no previous gynaecological problems; no previous smear (never attended)', quote: '"Nothing. I\'ve always been healthy." – "I know I should have had a smear — I kept getting letters but I just never went."' },
    ],
    drugHistory: [
      { label: 'Combined oral contraceptive pill (COCP) — for 3 years; currently on Microgynon 30', quote: '"I\'ve been on the pill for 3 years — Microgynon 30. I take it every day."' },
      { label: 'No other regular medications; no known drug allergies', quote: '"Nothing else." – "No allergies."' },
    ],
    familyHistory: [],
    socialHistory: [
      { label: 'New partner Tom — together 4 months; no STI symptoms reported by Tom', quote: '"I\'ve been with Tom for 4 months. He hasn\'t mentioned any symptoms — I don\'t think he has anything." – "He\'s my current regular partner."' },
      { label: 'Lifetime sexual partners — 3 in total; last full STI screen was 8 months ago (all clear)', quote: '"I\'ve had 3 partners in total." – "I had a full STI screen here about 8 months ago and it was all clear."' },
      { label: 'Last sexual contact — 5 days ago with Tom; unprotected penetrative vaginal intercourse', quote: '"5 days ago. With Tom." – "We don\'t use condoms — we\'ve both been tested." [technically last test was pre-Tom]' },
      { label: 'Non-smoker; no IVDU; BMI 22; HPV vaccination status unknown', quote: '"I don\'t smoke." – "I\'m not sure if I had the HPV jab at school — I can\'t remember."' },
    ],
    importantNegatives: [
      'No pelvic pain or deep dyspareunia ("No pain at all during sex.")',
      'No abnormal vaginal discharge ("Nothing unusual for me.")',
      'No urinary symptoms — no dysuria or haematuria ("No.")',
      'No systemic symptoms — no weight loss, night sweats, or fatigue ("No — I\'ve felt completely well in myself.")',
      'No anal or rectal bleeding ("No.")',
      'No previous abnormal smear result ("I\'ve never had a smear.")',
    ],
    ice: {
      ideas: '"I\'ve been reading online — I know it could just be the pill or irritation. But I also saw that it can be a sign of cervical cancer and that really scared me."',
      concerns: '"I\'m really worried it might be something serious. The fact I\'ve never had a smear makes me feel like I might have let something go too long." [genuinely worried]',
      expectations: '"I\'d like to know what\'s causing it. And I\'d like to catch anything early if there is something wrong."',
    },
    onlyIfDirectlyAsked: [
      'Whether she has had the HPV vaccine at school — cannot remember; likely not (she is 29 and may have missed the school programme)',
      'Whether Tom has been tested recently — "He had a test about a year ago. Before he was with me." [so not recently — they have been together 4 months]',
      'Cervical smear reminder letters — received 3 reminders from GP since turning 25; did not attend out of embarrassment and anxiety about the test',
    ],
    behaviourNotes: [
      'Slightly embarrassed initially but opens up quickly once the clinician is matter-of-fact and non-judgemental',
      'Visibly anxious when cervical cancer is mentioned online — student should acknowledge this concern early',
      'Responds well to "I\'m glad you came in — this is exactly the right thing to do"',
      'Asks "Do you think it could be cancer?" — student should acknowledge the concern, explain it needs to be excluded, and that the most common causes are benign; urgent referral is the right step regardless',
      'Asks "Will I need a smear today?" — student should explain yes, if she is not actively bleeding and a speculum can be performed, a smear should be taken and a full STI screen sent; urgent colposcopy referral regardless',
      'If the student mentions that the COCP can cause cervical ectropion, Emma is relieved: "Oh — so the pill might be causing it? That\'s good to know."',
    ],
  },
  markScheme: [
    {
      domain: 'Opening the consultation',
      items: [
        { description: 'Introduces themselves; explains confidentiality; creates a non-judgemental and relaxed atmosphere', marks: 1 },
        { description: 'Acknowledges Emma\'s embarrassment and thanks her for attending', marks: 1 },
      ],
    },
    {
      domain: 'Presenting complaint — SOCRATES',
      items: [
        { description: 'Establishes that bleeding is post-coital — only after penetrative vaginal sex; present every time for 3 months', marks: 1 },
        { description: 'Characterises the bleeding — bright red, small volume, not painful, no associated discharge', marks: 1 },
        { description: 'Asks about intermenstrual bleeding — identifies occasional spotting between periods', marks: 1 },
        { description: 'Asks about dyspareunia — none (important negative)', marks: 1 },
      ],
    },
    {
      domain: 'Gynaecological and smear history',
      items: [
        {
          description: 'Asks about cervical smear history — identifies she has NEVER had a smear despite repeated invitations since age 25',
          marks: 2,
        },
        { description: 'Asks about previous gynaecological problems or abnormal results', marks: 1 },
      ],
    },
    {
      domain: 'Sexual history',
      items: [
        { description: 'Asks about current partner, last sexual contact, type of sexual contact, and contraception', marks: 1 },
        { description: 'Asks about number of lifetime sexual partners and previous STI screen', marks: 1 },
        { description: 'Asks about contraception — identifies 3 years of COCP (risk factor for ectropion)', marks: 1 },
      ],
    },
    {
      domain: 'Risk factor assessment',
      items: [
        { description: 'Asks about smoking status — non-smoker (important risk factor for cervical cancer)', marks: 1 },
        { description: 'Asks about HPV vaccination status', marks: 1 },
      ],
    },
    {
      domain: 'Systemic red flags',
      items: [
        { description: 'Screens for systemic symptoms — weight loss, fatigue, night sweats, pelvic pain', marks: 1 },
      ],
    },
    {
      domain: 'ICE',
      items: [
        { description: 'Explores ICE — acknowledges Emma\'s fear of cervical cancer and validates her concern without dismissing it', marks: 1 },
      ],
    },
    {
      domain: 'Management plan',
      items: [
        { description: 'Explains the need for speculum examination and cervical smear today', marks: 1 },
        {
          description: 'States that because Emma has NEVER had a smear, an urgent colposcopy referral is required to exclude cervical pathology — this cannot wait',
          marks: 2,
        },
        { description: 'Sends full STI screen including chlamydia and gonorrhoea swabs, blood-borne viruses', marks: 1 },
      ],
    },
    {
      domain: 'Key communication skills',
      items: [
        { description: 'Active listening — creates a safe space; normalises the consultation without minimising the symptom', marks: 1 },
        { description: 'Summarising and signposting throughout', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Emma is a 29-year-old nursery teacher presenting with a 3-month history of consistent post-coital bleeding — bright red, small volume, occurring every time she has penetrative vaginal sex, with occasional intermenstrual spotting',
    'There is no dyspareunia, no abnormal discharge, no pelvic pain, and no systemic symptoms; she is systemically well',
    'Critically, Emma has never attended for a cervical smear despite 3 reminder letters since she turned 25 — this is the most important feature driving management',
    'Risk factors identified: 3 years of COCP use (causes cervical ectropion), new partner in the last 4 months, never screened; smoking negative; HPV vaccination status unclear',
    'Differential diagnosis: cervical ectropion (most common, especially in COCP users) vs cervical carcinoma (must be excluded given no smear history) vs cervicitis/STI (STI screen required)',
    'Management: speculum examination and cervical smear (LBC) if not actively bleeding; full STI screen; urgent colposcopy referral under NICE NG12 2-week wait pathway given never-screened status with persistent post-coital bleeding',
    'Emma should be counselled about HPV and the importance of regular cervical screening; COCP can be continued; contact trace Tom for STI review',
  ],
  vivaQuestions: [
    {
      question: 'What are the causes of post-coital bleeding and how would you prioritise investigation?',
      keyPoints: [
        'Common: cervical ectropion (columnar epithelium exposed on ectocervix — friable, bleeds on contact; promoted by COCP, pregnancy, adolescence)',
        'Important to exclude: cervical carcinoma — the most dangerous cause; presents with PCB, IMB, or abnormal discharge; associated with persistent HPV infection',
        'Infective: cervicitis from Chlamydia trachomatis or Neisseria gonorrhoeae — causes friable cervix; also consider trichomonas',
        'Other: endometrial pathology (polyp, fibroid, carcinoma — less common cause of PCB); trauma; vaginal lesion',
        'Investigation priority: speculum and cervical smear first; STI screen; urgent colposcopy if never screened or abnormal smear; if smear result abnormal or cervix appears abnormal on speculum, urgent 2WW referral',
      ],
      source: 'NICE NG12 (Suspected cancer: recognition and referral, 2015 updated 2023); BASHH Guideline on the Management of Women with Abnormal Cervical Cytology (2016)',
    },
    {
      question: 'Describe the NHS Cervical Screening Programme in England — who is invited, how frequently, and what happens if the sample is abnormal?',
      keyPoints: [
        'Invitations: women and people with a cervix aged 25–64 are invited; age 25–49 every 3 years; age 50–64 every 5 years',
        'Test: liquid-based cytology (LBC) sample from the transformation zone; primary HPV testing introduced nationally in 2019 — HPV tested first, cytology only if HPV positive',
        'If HPV positive + normal cytology: repeat smear in 12 months',
        'If HPV positive + abnormal cytology (CIN1-3 or worse): urgent referral for colposcopy',
        'If HPV negative: routine recall (3 or 5 years depending on age); very low risk of cervical cancer in next 5 years',
        'HPV 16 and 18 responsible for approximately 70% of cervical cancers; HPV vaccination (Gardasil-9, school programme from age 12–13) now covers 9 HPV types',
      ],
      source: 'PHE: NHS Cervical Screening Programme (NHSCSP) Publication No. 20; NICE NG12 (2015 updated 2023)',
    },
    {
      question: 'What is cervical ectropion, how does it present, and how is it managed?',
      keyPoints: [
        'Cervical ectropion (erosion): the columnar epithelium of the endocervical canal extends onto the ectocervix — it is not a true erosion but a normal variant that is exaggerated by oestrogen',
        'Causes: normal in adolescence and pregnancy; promoted by combined oral contraceptive pill (oestrogen increases columnar epithelium); more common in young women',
        'Presentation: PCB and IMB are classic; may have increased clear mucoid discharge; on speculum — red velvety appearance around the os; bleeds easily on contact',
        'Management: if asymptomatic and HPV negative on smear — reassurance only; if symptomatic (PCB) — cervicitis excluded; consider cryotherapy or thermal ablation (silver nitrate cautery) to destroy ectopic columnar epithelium; advise COCP review if a contributing factor',
        'Colposcopy and biopsy required if the cervix looks suspicious, if smear is abnormal, or if HPV positive',
      ],
      source: 'BASHH Guideline 2016; NHSCSP; Geekymedics.com',
    },
  ],
};

export const SEXUAL_HEALTH_MOCK_EXAMS: MockExamStation[] = [primarySyphilisMockExam, postCoitalBleedingMockExam];
