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
    backgroundInfo:
      'Sophie is a 26-year-old marketing executive who is embarrassed and anxious. She noticed a painless ulcer on her left labia approximately 10 days ago. She had unprotected vaginal intercourse with a new male partner (James) 3 weeks ago — she has not had sex since. She has had 3 sexual partners in total over the past year. She uses no contraception (the previous partner was long-term; she had not planned on James being a casual encounter). She had a sexual health screen 8 months ago which was negative. She takes no regular medications and has no known allergies. She has mild bilateral inguinal lymphadenopathy. The photo the examiner shows depicts a clean-edged, indurated, painless ulcer approximately 1 cm in diameter on the labium — a classic syphilitic chancre. Sophie is otherwise entirely well with no systemic symptoms.',
    historyToReveal: [
      {
        topic: 'Presenting complaint — the ulcer',
        response:
          '"I found it about 10 days ago. It\'s like a small sore — here." [gestures to left groin area] "It doesn\'t hurt at all, which is what I thought was weird. I thought genital sores always hurt."',
      },
      {
        topic: 'Character of the lesion',
        response:
          '"It\'s a round ulcer, about the size of a small coin. The edges look quite defined. It feels firm when I press around it." – "There\'s no discharge from it."',
      },
      {
        topic: 'Pain',
        response: '"No pain at all — not even when I touch it. Is that normal? That surprised me."',
      },
      {
        topic: 'Last sexual contact and partners',
        response:
          '"About 3 weeks ago. His name\'s James — we met at a work event. It was just the once." – "Before that I was with my previous boyfriend for two years. We split up in the spring."',
      },
      {
        topic: 'Type of sexual contact',
        response: '"Just vaginal sex. No oral or anal sex."',
      },
      {
        topic: 'Contraception and condoms',
        response:
          '"We didn\'t use anything — I know, that was stupid. I\'m not on the pill at the moment." – "I don\'t usually have casual encounters."',
      },
      {
        topic: 'Symptoms in partner',
        response: '"I don\'t know — I\'ve only texted him once since. I haven\'t told him about this."',
      },
      {
        topic: 'Previous STI screen',
        response: '"I had a full screen at this clinic about 8 months ago. It was all clear."',
      },
      {
        topic: 'Systemic symptoms',
        response: '"No. I feel completely well. No fever, no rash, no sore throat, no joint pains."',
      },
      {
        topic: 'Lymph nodes',
        response: '"I noticed some swollen glands in my groin, both sides. They\'re not painful."',
      },
      {
        topic: 'Gynaecological history',
        response:
          '"My last cervical smear was last year — normal. Periods are regular." – "No vaginal discharge that\'s unusual for me."',
      },
      {
        topic: 'Past medical history and medications',
        response: '"Nothing. I\'m completely healthy. No regular medications." – "No allergies."',
      },
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

export const SEXUAL_HEALTH_MOCK_EXAMS: MockExamStation[] = [primarySyphilisMockExam];
