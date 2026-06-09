import type { MockExamStation } from './mockExamTypes';

const contraceptionCounselling: MockExamStation = {
  id: 'gp_contraception_counselling',
  title: 'GP Consultation — Contraception Counselling',
  diagnosis: 'Combined oral contraceptive pill (COCP) initiation — screening complete, no contraindications identified',
  specialtyId: 'general-practice',
  candidateBrief: {
    setting: 'You are an FY1 in a GP surgery.',
    scenario:
      'Chloe Harrison, 22, has booked an appointment to discuss starting contraception. She is currently in a new relationship and has not used hormonal contraception before.',
    tasks: [
      'Take a focused history and counsel Chloe on suitable contraceptive options',
      'Agree a contraceptive method with her and explain how to start it safely',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'Chloe Harrison',
    age: 22,
    occupation: 'Dental nurse',
    openingLine:
      '"Hi — I\'d like to talk about going on the pill. I\'ve never been on any contraception before and I\'m not really sure what\'s best for me." [open, slightly uncertain]',
    historyOfPresentingComplaint: [
      {
        label: 'Reason for request — new relationship, wants reliable contraception; condoms used so far but wants something more reliable',
        quote: '"I\'ve been with my boyfriend for about 2 months. We\'ve been using condoms but I\'d like something more reliable." – "My friend is on the combined pill and she says it\'s easy."',
      },
      {
        label: 'Last menstrual period — 10 days ago; regular 28-day cycle; no current pregnancy risk',
        quote: '"My last period started about 10 days ago. It was completely normal." – "We haven\'t had unprotected sex, so I don\'t think I\'m pregnant."',
      },
      {
        label: 'Menstrual history — regular cycles, moderate flow, mild dysmenorrhoea managed with ibuprofen',
        quote: '"My periods are regular — every 28 days, usually 5 days. They\'re a bit painful but ibuprofen sorts it." – "Not particularly heavy."',
      },
      {
        label: 'Attitude to LARC — open to the idea but slightly nervous; would prefer something reversible she can control',
        quote: '"I\'m not sure about something that goes inside me, like a coil. I think I\'d want something I can stop easily." – "Could you explain what all the options are?"',
      },
    ],
    pastMedicalHistory: [
      { label: 'No significant past medical history; specifically no migraines, VTE, breast cancer, or liver disease', quote: '"Nothing. I\'m very healthy." – "No headaches apart from normal tension ones — nothing that affects my vision or gives me an aura."' },
      { label: 'No previous surgery or prolonged immobility', quote: '"No operations." – "No, I\'ve never had a DVT or blood clot."' },
    ],
    drugHistory: [
      { label: 'Ibuprofen PRN (dysmenorrhoea) — OTC', quote: '"Just ibuprofen when my periods are bad."' },
      { label: 'No regular prescribed medications; no enzyme-inducing drugs (no rifampicin, no anticonvulsants)', quote: '"Nothing else." – "No anti-epileptic medications or anything like that."' },
      { label: 'No known drug allergies', quote: '"No allergies."' },
    ],
    familyHistory: [
      { label: 'Mother — no VTE or breast cancer; no known thrombophilia', quote: '"My mum is fine. No blood clots, no breast cancer that I know of."' },
      { label: 'No family history of hereditary thrombophilia or breast cancer under 40', quote: '"Not that I\'m aware of."' },
    ],
    socialHistory: [
      { label: 'Non-smoker', quote: '"I\'ve never smoked."' },
      { label: 'Alcohol — approximately 8 units per week (weekend social drinking)', quote: '"I drink socially — maybe 8 units a week, mainly at weekends."' },
      { label: 'Dental nurse, no prolonged immobility planned', quote: '"I\'m on my feet all day at work — no plans for long trips or anything like that."' },
    ],
    importantNegatives: [
      'No migraine with aura ("I get the odd tension headache but never with visual disturbance, flashing lights, or numbness.")',
      'No personal or family history of VTE ("No blood clots." – "Not in my family either.")',
      'No breast lumps or personal history of breast cancer ("No.")',
      'No liver disease or jaundice ("No.")',
      'No hypertension — if asked, BP is 118/72 mmHg today ("Fine, I think.")',
      'No current or recent pregnancy ("My period was 10 days ago and we\'ve used condoms.")',
      'Not breastfeeding ("No.")',
    ],
    ice: {
      ideas:
        '"My friend says the pill is easy and it makes her periods more regular. I thought it would suit me." – "I don\'t know much about the coil — I think of that as for older women."',
      concerns:
        '"I\'ve read that the pill can cause blood clots. Is that something I should worry about?" – "And I don\'t want to put on weight."',
      expectations:
        '"I\'d like to walk out with a prescription if I\'m suitable. And to understand what I need to do to make sure it works."',
    },
    onlyIfDirectlyAsked: [
      'Whether she has a current smear test — no (she is 22; NHS invites from age 25 in England)',
      'Whether her boyfriend has been STI-tested — "Not recently. We\'ve talked about it." [condoms provide STI protection — important to discuss dual protection]',
      'Her attitude to periods on the pill — "Would I still have a period? My friend says hers are much lighter." [student should explain the withdrawal bleed concept]',
    ],
    behaviourNotes: [
      'Friendly and engaged; open to a conversation about options but has come in with a preference for the pill',
      'Asks "What are the different options?" — student should give a brief overview of LARC (implant, IUS, copper IUD, injectable) and short-acting methods (COCP, POP) before discussing in detail',
      'Asks "Could the pill give me a blood clot?" — student should explain the absolute risk (approximately 2 per 10,000 per year on COCP vs 1 per 10,000 in non-users) and that she has no additional risk factors; contextualise against pregnancy risk',
      'Asks "Will I put on weight?" — student should explain current evidence does not support significant weight gain from COCP; POP and implant are sometimes associated with minor weight changes',
      'Asks "When do I start it and when is it effective?" — student should explain Day 1 start (immediately effective) or quick start (additional condom cover for 7 days if starting at any other time)',
      'Does NOT want an implant or coil today — accept this preference; student should respect patient autonomy without being dismissive of LARCs',
    ],
  },
  markScheme: [
    {
      domain: 'Opening the consultation',
      items: [
        { description: 'Introduces themselves; confirms patient identity', marks: 1 },
        { description: 'Uses an open question to explore the patient\'s reason for attending and their current understanding', marks: 1 },
      ],
    },
    {
      domain: 'Exploring the patient\'s history and request',
      items: [
        { description: 'Asks about current contraceptive method and reason for change', marks: 1 },
        { description: 'Asks about last menstrual period to assess current pregnancy risk', marks: 1 },
        { description: 'Asks about menstrual history — cycle regularity, flow, and dysmenorrhoea', marks: 1 },
      ],
    },
    {
      domain: 'Key screening questions',
      items: [
        { description: 'Asks about migraines — specifically migraine with aura (UKMEC 4 contraindication to COCP)', marks: 2 },
        { description: 'Asks about personal or family history of VTE or thrombophilia', marks: 1 },
        { description: 'Asks about smoking status', marks: 1 },
        { description: 'Asks about blood pressure (or notes BP taken today)', marks: 1 },
        { description: 'Asks about liver disease, breast cancer, and current medications including enzyme inducers', marks: 1 },
      ],
    },
    {
      domain: 'Explaining contraceptive options',
      items: [
        { description: 'Provides a brief overview of available methods — LARC (implant, IUS, Cu-IUD, injectable) and short-acting (COCP, POP)', marks: 1 },
        { description: 'Explains the advantages of LARC over short-acting methods — highest efficacy, "fit and forget"', marks: 1 },
        { description: 'Discusses COCP benefits relevant to this patient — regular, lighter, less painful periods; reliable if taken correctly', marks: 1 },
      ],
    },
    {
      domain: 'Eligibility criteria and contraindications (UKMEC)',
      items: [
        { description: 'Confirms that no UKMEC 3 or 4 contraindications to COCP are present in this patient', marks: 1 },
        { description: 'Explains the VTE risk of COCP in appropriate, contextualised terms — absolute risk small; no additional risk factors in this patient', marks: 1 },
      ],
    },
    {
      domain: 'How to use and quick start',
      items: [
        { description: 'Explains Day 1 start (immediately effective) versus quick start at any point in cycle (additional contraception — condoms — for 7 days)', marks: 2 },
        { description: 'Explains missed pill rules: if >24 hours late — take last missed pill, use condoms for 7 days; consider EC if missed in week 1 after unprotected sex', marks: 1 },
      ],
    },
    {
      domain: 'Efficacy and typical use failure rates',
      items: [
        { description: 'States COCP efficacy — 99.7% with perfect use; 91% with typical use; explains the importance of consistent daily timing', marks: 1 },
      ],
    },
    {
      domain: 'Side effects',
      items: [
        { description: 'Addresses weight gain concern — explains current evidence does not support significant weight gain with COCP', marks: 1 },
        { description: 'Mentions common side effects — nausea, breast tenderness, mood changes — typically improve after first 3 months', marks: 1 },
      ],
    },
    {
      domain: 'STI discussion and dual protection',
      items: [
        { description: 'Explains the COCP does not protect against STIs; advises continued condom use until both partners have been tested', marks: 1 },
      ],
    },
    {
      domain: 'ICE and addressing concerns',
      items: [
        { description: 'Explores ideas, concerns, and expectations — addresses the VTE concern with accurate, contextualised information', marks: 1 },
      ],
    },
    {
      domain: 'Closing and safety-netting',
      items: [
        { description: 'Prescribes or discusses a specific pill (e.g. Microgynon 30 or Rigevidon) and explains the start instructions clearly', marks: 1 },
        { description: 'Advises to return if she develops migraine with aura, leg pain or swelling, chest pain, or severe headache', marks: 1 },
        { description: 'Arranges follow-up review at 3 months', marks: 1 },
      ],
    },
    {
      domain: 'Key communication skills',
      items: [
        { description: 'Active listening — responds to the patient\'s preferences without dismissing LARCs; respects patient autonomy', marks: 1 },
        { description: 'Summarising and signposting — checks understanding before the end of the consultation', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Chloe is a 22-year-old non-smoking dental nurse in a new relationship who is requesting contraception; she has not used hormonal contraception previously',
    'Screening is complete: LMP 10 days ago (not pregnant), BP 118/72 mmHg, no migraines with aura, no personal or family history of VTE, no liver disease, no breast cancer, no enzyme-inducing medications — no UKMEC 3 or 4 contraindications to COCP',
    'Her preference is for the combined pill; she was counselled that LARC methods are more effective and she acknowledged this; her preference for a reversible, patient-controlled method was respected',
    'COCP Microgynon 30 was agreed; she will use quick start today with condoms for 7 days; missed pill rules and symptoms requiring urgent review were explained',
    'The VTE risk was contextualised — approximately 2 per 10,000 per year on COCP compared to 1 per 10,000 in non-users; this is lower than the risk in pregnancy (~6 per 10,000); she has no additional risk factors',
    'Dual protection discussed — continued condom use advised until both she and her partner have had STI screening',
    'Review appointment arranged at 3 months; safety-netting given for red flag symptoms including migraine with aura, leg pain, and chest pain',
  ],
  vivaQuestions: [
    {
      question: 'What are the UKMEC category 4 contraindications to the combined oral contraceptive pill?',
      keyPoints: [
        'UKMEC 4 = absolute contraindication; risks outweigh any benefit; do not use',
        'Migraine with aura at any age — risk of ischaemic stroke significantly increased (RR ~2–4× compared to migraine without aura)',
        'Current or past VTE; known thrombogenic mutation (e.g. Factor V Leiden, antiphospholipid syndrome)',
        'Age >35 years AND smoking >15 cigarettes per day; or age >35 who smoked and quit <12 months ago',
        'BP ≥160/100 mmHg; personal history of ischaemic heart disease or stroke',
        'Current or past breast cancer; active viral hepatitis; severe cirrhosis; hepatocellular adenoma',
      ],
      source: 'FSRH UK Medical Eligibility Criteria for Contraceptive Use (UKMEC 2019, amended 2023)',
    },
    {
      question: 'What long-acting reversible contraception (LARC) methods are available in the UK, and what are their relative efficacies?',
      keyPoints: [
        'Nexplanon implant (etonogestrel): subdermal, upper inner arm; lasts 3 years; >99.9% effective; suitable if oestrogen is contraindicated',
        'Levonorgestrel IUS (Mirena 52 mg: 8 years; Kyleena 19.5 mg: 5 years): 99.9% effective; reduces menstrual blood loss by up to 90% — useful for heavy periods and dysmenorrhoea',
        'Copper IUD: hormone-free; lasts 5–10 years depending on device; 99.4% effective; can cause heavier and more painful periods; also used as emergency contraception up to 120 hours',
        'DMPA injectable (Depo-Provera): 150 mg IM every 12 weeks; >99% effective; may cause prolonged amenorrhoea; return of fertility can be delayed up to 12 months after stopping — counsel carefully',
        'All LARC methods are more effective than short-acting methods because they remove user error; NICE recommends LARC be offered to all women as first-line discussion',
      ],
      source: 'FSRH LARC Guideline (2023); NICE PH51 (Long-acting reversible contraception, 2014 updated 2023)',
    },
    {
      question: 'What is a "quick start" for contraception, and what additional precautions are needed?',
      keyPoints: [
        'Quick start: initiating contraception on any day of the cycle when the clinician is reasonably certain the patient is not pregnant',
        'Criteria for "reasonably certain not pregnant": LMP within last 7 days and no unprotected sex since; or abstinent since LMP; or correctly using another method; or within 21 days postpartum',
        'COCP quick start (days 2–5 onwards): additional contraception (condoms) for 7 days; if UPS in previous 7 days — consider EC first, then quick start',
        'Desogestrel POP (Cerazette) quick start after day 1: condoms for 2 days; older POPs (3-hour window) require 2 days additional cover',
        'Implant or IUS quick start: 7 days additional contraception required; document that a pregnancy test was done or will be repeated 3 weeks after quick start',
        'Urine pregnancy test is not reliable until 3–4 weeks after the last unprotected sex — if any doubt, repeat test at 3 weeks and advise patient to return if symptoms of pregnancy develop',
      ],
      source: 'FSRH Quick Starting Contraception Guideline (2017, updated 2023)',
    },
    {
      question: 'What are the missed pill rules for the combined oral contraceptive pill?',
      keyPoints: [
        'A pill is missed if >24 hours late for most 30–35 mcg ethinylestradiol formulations (e.g. Microgynon 30); take the missed pill as soon as remembered, continue pack, no additional precautions needed if only 1 pill missed',
        'If ≥2 pills missed: take the most recently missed pill immediately, leave earlier missed pills, continue pack; use condoms for the next 7 days',
        'If ≥2 pills missed in week 1 (days 1–7) AND unprotected sex in pill-free week or week 1: emergency contraception is indicated',
        'If ≥2 pills missed in week 3 (days 15–21): finish the active pills and start a new pack immediately — omit the hormone-free interval to avoid ovulation; no EC required if no UPS',
        'Vomiting within 2 hours of taking the pill: treat as missed pill; diarrhoea for >24 hours also reduces absorption — additional precautions apply',
      ],
      source: 'FSRH Combined Hormonal Contraception Guideline (2019, amended 2023)',
    },
  ],
};

const fraserGuidelines: MockExamStation = {
  id: 'gp_fraser_guidelines',
  title: 'GP Consultation — Contraception Under 16 (Fraser Guidelines / Gillick Competence)',
  diagnosis: 'Gillick-competent young person — contraception provided under Fraser guidelines; no safeguarding concerns',
  specialtyId: 'general-practice',
  candidateBrief: {
    setting: 'You are an FY1 in a GP surgery.',
    scenario:
      'Mia Fletcher, 15, has attended the GP surgery alone and asked to speak to a doctor about contraception. She has not been seen at this practice before for this issue.',
    tasks: [
      'Consult with Mia, assess her needs, and manage the consultation appropriately',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'Mia Fletcher',
    age: 15,
    occupation: 'GCSE student',
    openingLine:
      '"Hi. I wanted to talk to someone about the pill. I\'ve got a boyfriend and... I just want to be safe. I don\'t want my mum to know I\'m here though." [nervous, speaks quietly, glances at the door]',
    historyOfPresentingComplaint: [
      {
        label: 'Reason for request — sexually active with 17-year-old boyfriend Jake; together 4 months; condoms used but wants more reliable contraception',
        quote: '"Me and my boyfriend Jake have been together for 4 months. We have been having sex. We use condoms but I want to be more careful." – "He\'s 17. We\'re at the same school — well, he\'s in sixth form."',
      },
      {
        label: 'Last sexual contact — 2 weeks ago; protected with condom; no emergency contraception needed',
        quote: '"Last time was about 2 weeks ago. We used a condom and it was fine." – "I don\'t think I need the morning-after pill or anything like that."',
      },
      {
        label: 'Understanding of contraception — knows the pill is taken daily; aware it does not protect against STIs; has thought about it for several weeks',
        quote: '"I know you have to take it every day. My older sister is on it." – "I know it doesn\'t stop infections, that\'s why we still use condoms."',
      },
      {
        label: 'Parental involvement — does not want parents informed; specific concern that parents would be angry and restrict the relationship',
        quote: '"Please don\'t tell my mum. She\'d go mad. She doesn\'t know I\'m in a relationship." – "I know you might have to sometimes — but I\'m asking you not to."',
      },
      {
        label: 'Relationship dynamic — consensual; no coercion or pressure reported; Mia describes the relationship positively',
        quote: '"It\'s my choice. Jake has never pushed me into anything — it was my idea to come here today." – "We\'re fine. I\'m not scared of him or anything."',
      },
    ],
    pastMedicalHistory: [
      { label: 'No significant medical history; no migraines with aura; no VTE; no liver disease', quote: '"Nothing, I\'m healthy." – "No migraines with the flashing lights or anything."' },
    ],
    drugHistory: [
      { label: 'No regular medications; no known allergies', quote: '"Nothing." – "No allergies."' },
    ],
    familyHistory: [
      { label: 'No relevant family history', quote: '"Not that I know of."' },
    ],
    socialHistory: [
      { label: 'Year 11 student; lives with mother and younger sibling; relationship with mother described as close but she fears her reaction', quote: '"I\'m in Year 11. I live with my mum and my little brother." – "Mum and I are close normally but she\'s quite traditional about this stuff."' },
      { label: 'Non-smoker; no alcohol; no recreational drugs', quote: '"I don\'t smoke or drink." – "No."' },
      { label: 'Boyfriend Jake is 17, in sixth form at the same school; relationship consensual with no signs of coercion or exploitation', quote: '"He\'s in sixth form. We\'ve been together 4 months." – "He\'s lovely. There\'s no pressure."' },
    ],
    importantNegatives: [
      'No signs of coercion or sexual exploitation ("It was my choice." – "He\'s never pressured me.")',
      'No significant age gap suggesting abuse — 15 and 17 years old (2-year gap; both minors; within normal range)',
      'No other sexual partners ("Just Jake.")',
      'No history of previous sexual abuse ("No.")',
      'No symptoms of STI — no discharge, dysuria, or lower abdominal pain ("I\'m fine." – "No, nothing like that.")',
      'No suicidal ideation or mental health concerns ("I\'m fine, just a bit nervous talking about this.")',
    ],
    ice: {
      ideas:
        '"I just want to be safe. The pill seems the easiest thing." – "I know there are other options but I think the pill is what I want."',
      concerns:
        '"I\'m worried you\'ll tell my mum." – "And I\'m a bit worried about whether the pill will affect my periods."',
      expectations:
        '"I\'d like a prescription please. I\'ve thought about this properly." – "I just want you to know I\'ve really thought about it."',
    },
    onlyIfDirectlyAsked: [
      'Whether she has discussed this with anyone — told her older sister, who was supportive',
      'Whether she understands the implications of sex at her age — "I know I\'m under 16 and technically... I know it\'s complicated." [student should handle this sensitively, not punitively]',
      'Whether her boyfriend knows she is at the GP — "Yes. He was supportive of me coming."',
    ],
    behaviourNotes: [
      'Nervous and quiet at the start; relaxes considerably when the student is warm, non-judgemental, and takes her seriously',
      'MUST ask: "Will you have to tell my mum?" — this is the pivotal clinical question; if the student says yes, Mia becomes distressed and says she will leave and not come back; a correct response is that confidentiality is maintained unless there is a serious safety concern, which there is not here',
      'If the student incorrectly says they must inform parents, Mia says "Then I\'m leaving. I\'ll just not use anything." — this is a deliberate patient safety moment; the student must correct the error or the station reflects a fail',
      'Responds well to being told her views and maturity will be assessed; appreciates being treated as a capable individual',
      'Asks "Am I allowed to ask for this at my age?" — student should explain Gillick competence and Fraser guidelines in accessible terms',
      'Asks "What if Jake and I break up — can I stop the pill easily?" — student should explain yes, and briefly outline what happens to fertility',
      'Does NOT require a pelvic examination to prescribe the pill — student should not suggest this without clinical indication',
    ],
  },
  markScheme: [
    {
      domain: 'Opening the consultation',
      items: [
        { description: 'Introduces themselves; creates a private, non-judgemental atmosphere', marks: 1 },
        { description: 'Confirms confidentiality at the outset — explains it will be maintained unless there is a serious safety concern', marks: 2 },
      ],
    },
    {
      domain: 'Exploring the patient\'s request',
      items: [
        { description: 'Uses open questioning to understand why Mia has attended and what she is requesting', marks: 1 },
        { description: 'Establishes she is sexually active, the identity and age of her partner, and that the relationship is consensual', marks: 1 },
        { description: 'Asks about last sexual contact and pregnancy risk (LMP, use of condoms)', marks: 1 },
      ],
    },
    {
      domain: 'Gillick competence and Fraser guidelines assessment',
      items: [
        { description: 'Assesses whether Mia understands the nature and implications of contraception and sexual activity — confirms she does', marks: 2 },
        { description: 'Applies the Fraser guidelines criteria: understands advice; cannot be persuaded to involve parents; likely to have sex regardless; physical/mental health will suffer without treatment; in best interests to provide contraception', marks: 2 },
        { description: 'Documents (or states intention to document) Gillick competence assessment in the notes', marks: 1 },
      ],
    },
    {
      domain: 'Safeguarding assessment',
      items: [
        { description: 'Screens for signs of coercion, abuse, or exploitation — asks about pressure from partner and other adults', marks: 2 },
        { description: 'Assesses the age gap — Jake is 17, Mia is 15 (2-year gap, both minors); correctly identifies this does not meet the threshold for mandatory safeguarding referral', marks: 1 },
        { description: 'States that if signs of exploitation or abuse were present (e.g. much older partner, signs of grooming), a safeguarding referral to children\'s services would be required regardless of confidentiality', marks: 1 },
      ],
    },
    {
      domain: 'Confidentiality discussion',
      items: [
        { description: 'Correctly states that confidentiality WILL be maintained — does NOT say parents will be informed', marks: 2 },
        { description: 'Encourages Mia to consider involving a trusted adult (parent/carer) — but does not coerce or pressure her', marks: 1 },
      ],
    },
    {
      domain: 'Key screening questions',
      items: [
        { description: 'Screens for UKMEC 3/4 contraindications to COCP — migraines with aura, VTE, liver disease, BP', marks: 1 },
        { description: 'Confirms no current pregnancy risk — condoms used at last UPS two weeks ago; LMP normal', marks: 1 },
      ],
    },
    {
      domain: 'Contraception counselling and prescribing',
      items: [
        { description: 'Explains the COCP — how to take it, quick start, missed pill rules, efficacy', marks: 1 },
        { description: 'Discusses dual protection — continues using condoms for STI protection; offers STI screening', marks: 1 },
        { description: 'Agrees a prescription and explains when to return — review at 3 months', marks: 1 },
      ],
    },
    {
      domain: 'ICE and addressing concerns',
      items: [
        { description: 'Explores Mia\'s concerns — addresses the confidentiality concern correctly and sensitively', marks: 1 },
      ],
    },
    {
      domain: 'Closing the consultation',
      items: [
        { description: 'Summarises the discussion, checks understanding, and provides written information about the pill', marks: 1 },
        { description: 'Safety-nets — advises on symptoms to watch for (migraine with aura, leg pain); gives contact details for young people\'s sexual health services', marks: 1 },
      ],
    },
    {
      domain: 'Key communication skills',
      items: [
        { description: 'Active listening — takes Mia\'s concerns seriously; does not morally judge or lecture', marks: 1 },
        { description: 'Signposting — explains each step of the consultation so Mia knows what to expect', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Mia is a 15-year-old student who presented alone requesting the combined contraceptive pill; she has been in a consensual relationship with a 17-year-old school peer for 4 months and is sexually active using condoms',
    'Gillick competence was assessed and confirmed: Mia understands the nature, implications, and risks of contraception and sexual activity; she cannot be persuaded to involve a parent; all five Fraser criteria are met',
    'Safeguarding was considered: the 2-year age gap (15 and 17, both minors) is within normal range; no evidence of coercion, exploitation, grooming, or significant power imbalance; no mandatory safeguarding referral required, but the assessment was documented',
    'Confidentiality is maintained — Mia was correctly advised that her parents will not be contacted; she was gently encouraged to consider involving a trusted adult but was not pressured',
    'UKMEC screening is clear: no migraines with aura, no VTE, BP normal, no enzyme-inducing medications, not pregnant',
    'COCP prescribed (e.g. Microgynon 30) with quick start instructions, missed pill rules explained, dual protection with condoms reinforced; STI screen offered; review in 3 months',
    'The consultation was documented carefully including the Gillick/Fraser assessment; a copy retained in the notes',
  ],
  vivaQuestions: [
    {
      question: 'What are the Fraser guidelines and when do they apply?',
      keyPoints: [
        'The Fraser guidelines (from Gillick v West Norfolk and Wisbech AHA, House of Lords, 1985) specifically govern contraceptive advice and treatment for under-16s in the UK',
        'Five criteria must all be met: (1) the young person understands the advice; (2) they cannot be persuaded to inform a parent/carer; (3) they are likely to begin or continue having sex with or without contraception; (4) their physical or mental health is likely to suffer without treatment; (5) it is in their best interests to receive contraceptive advice or treatment without parental consent',
        'The doctor should always encourage the young person to involve a parent — but this is not a precondition for providing contraception',
        'Gillick competence is the broader principle: a child under 16 can consent to medical treatment if they have sufficient maturity and intelligence to understand fully what is proposed',
        'Both principles require careful, documented assessment — the clinical notes must record that the assessment was made',
      ],
      source: 'Gillick v West Norfolk and Wisbech AHA [1985] UKHL 7; FSRH Guideline on Contraceptive Choices for Young People (2010, reviewed 2019)',
    },
    {
      question: 'When would you breach confidentiality and make a safeguarding referral for a young person requesting contraception?',
      keyPoints: [
        'Confidentiality should be maintained in the vast majority of cases where Fraser criteria are met — do NOT routinely inform parents',
        'Mandatory safeguarding referral is required if: the clinician suspects the young person is at risk of abuse, exploitation, or significant harm; there is evidence of grooming or coercion; the partner is significantly older (e.g. adult + under-16 relationship); the young person discloses abuse',
        'The Sexual Offences Act 2003 criminalises sexual activity with a person under 16 — but this does not mean every sexual encounter between young people requires police referral; clinical judgment is required',
        'Significant age gap guidance (FSRH/BMA): a relationship between a 15-year-old and a 25-year-old would be a clear concern; a 15-year-old and a 17-year-old would not normally trigger a safeguarding referral absent other concerns',
        'The Fraser guidelines explicitly permit confidential treatment even when the sexual encounter is technically unlawful — the purpose is to protect the young person\'s health',
        'Document the safeguarding assessment in the notes regardless of the outcome',
      ],
      source: 'FSRH Guideline on Contraceptive Choices for Young People (2019); BMA Guidance on Consent (2020); NICE NG76 (Child maltreatment, 2017)',
    },
    {
      question: 'How do the contraceptive options available to under-16s differ from those for adults, if at all?',
      keyPoints: [
        'All licensed contraceptive methods are available to Gillick-competent young people under 16 — there are no legal or clinical restrictions unique to this age group',
        'LARC (implant, IUS, Cu-IUD) can all be offered; the implant is particularly useful in young people who may have difficulty remembering a daily pill',
        'DMPA (Depo-Provera) injectable: concerns about bone mineral density loss in under-18s — FSRH states it can be used but review every 2 years; it is not an absolute contraindication in young people',
        'COCP and POP: as for adults — apply UKMEC criteria; migraine with aura is a UKMEC 4 contraindication at any age',
        'Emergency contraception (Cu-IUD, UPA, LNG) is also available without restriction; condoms and STI screening should be discussed at every visit',
      ],
      source: 'FSRH Guideline on Contraceptive Choices for Young People (2010, reviewed 2019); FSRH LARC Guideline (2023)',
    },
    {
      question: 'How should a GP respond if a 14-year-old presents requesting contraception and discloses that her partner is 28 years old?',
      keyPoints: [
        'This is a safeguarding emergency: a 14-year-old with a 28-year-old partner represents a significant age gap and a clear risk of exploitation under the Sexual Offences Act 2003',
        'Sexual activity between a 14-year-old and a 28-year-old is a criminal offence; the adult partner has committed a serious sexual offence regardless of perceived consent',
        'Confidentiality is overridden: the GP must make a referral to children\'s social services and/or the police without the young person\'s consent if necessary',
        'The young person should be treated sensitively — not blamed; the harm may not be recognised by the young person; contraception and STI screening may still be provided as part of safeguarding the young person\'s immediate health',
        'The GP must document the disclosure, the decision-making process, and any referrals made; seek advice from the practice safeguarding lead or NSPCC helpline if uncertain',
        'Under the Fraser guidelines, the criterion that "it is in their best interests" cannot be met in isolation if there is a safeguarding concern — the clinician has a duty to act',
      ],
      source: 'Sexual Offences Act 2003; NICE NG76 (Child maltreatment, 2017); FSRH Guideline on Contraceptive Choices for Young People (2019)',
    },
  ],
};

const emergencyContraception: MockExamStation = {
  id: 'gp_emergency_contraception',
  title: 'GP Consultation — Emergency Contraception Counselling',
  diagnosis: 'Unprotected sexual intercourse 58 hours ago — ulipristal acetate (EllaOne) recommended; ongoing contraception discussed',
  specialtyId: 'general-practice',
  candidateBrief: {
    setting: 'You are an FY1 in a GP surgery.',
    scenario:
      'Priya Sharma, 27, has attended as an urgent walk-in after unprotected sexual intercourse approximately 58 hours ago. She is not currently using any contraception.',
    tasks: [
      'Assess Priya\'s eligibility for emergency contraception and counsel her on the appropriate method',
      'Discuss ongoing contraception and arrange appropriate follow-up',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'Priya Sharma',
    age: 27,
    occupation: 'Secondary school teacher',
    openingLine:
      '"Hi — I\'m really embarrassed to be here. I had unprotected sex about two and a half days ago. I wasn\'t using anything and I need to know if I can still take the morning-after pill or if it\'s too late." [anxious, slightly rushed]',
    historyOfPresentingComplaint: [
      {
        label: 'Time since unprotected sex — approximately 58 hours (2 days 10 hours); the student must calculate this precisely',
        quote: '"It was Friday night — so about 58 hours ago. I wanted to come yesterday but I kept putting it off." – "I\'m worried I\'ve left it too long."',
      },
      {
        label: 'Number of episodes of UPS — one episode since LMP; on Friday night only',
        quote: '"Just the once — Friday night." – "I haven\'t had unprotected sex since my last period."',
      },
      {
        label: 'Last menstrual period — 12 days ago; regular 28-day cycle; therefore likely approaching ovulation',
        quote: '"My period started 12 days ago — it was normal. I have a 28-day cycle." – "I think I ovulate around now... is that a problem?"',
      },
      {
        label: 'Previous contraception — was on COCP until 3 months ago; stopped due to low mood; nothing since',
        quote: '"I was on Microgynon for years but I stopped 3 months ago because I was feeling low." – "I haven\'t used anything since then — stupid, I know."',
      },
      {
        label: 'Current medications — none; no enzyme-inducing drugs; not breastfeeding',
        quote: '"Nothing at the moment." – "No, I\'m definitely not breastfeeding." – "No anticonvulsants or anything like that."',
      },
      {
        label: 'Partner and relationship — regular partner Ravi; no known STI symptoms; no plan for ongoing condom use',
        quote: '"He\'s my regular boyfriend. I don\'t think he has any infections." – "We haven\'t been using condoms — I thought I was being careful about timing, which clearly didn\'t work."',
      },
    ],
    pastMedicalHistory: [
      { label: 'Low mood 3 months ago — attributed to COCP; resolved after stopping; no formal diagnosis of depression; not on antidepressants', quote: '"I felt quite low on the pill — it lifted when I stopped. I\'m fine now." – "I wasn\'t formally diagnosed with depression. No medication."' },
      { label: 'No VTE, migraine with aura, liver disease, or breast cancer', quote: '"No blood clots." – "No, my migraines don\'t come with any visual symptoms." – "Nothing else."' },
    ],
    drugHistory: [
      { label: 'No current medications', quote: '"Nothing at the moment."' },
      { label: 'No known drug allergies', quote: '"No allergies."' },
      { label: 'Previously: Microgynon 30 — stopped 3 months ago (mood side effect)', quote: '"I was on Microgynon 30 for about 4 years. Stopped 3 months ago."' },
    ],
    familyHistory: [
      { label: 'No relevant family history of thrombophilia or breast cancer', quote: '"No blood clots in the family." – "No breast cancer."' },
    ],
    socialHistory: [
      { label: 'Secondary school teacher; regular partner Ravi; not currently trying to conceive', quote: '"I\'m a teacher — secondary school. I\'m with my boyfriend Ravi." – "No, we\'re not trying for a baby."' },
      { label: 'Non-smoker; alcohol — 6 units per week', quote: '"I don\'t smoke." – "I drink a bit at weekends — maybe 6 units a week."' },
      { label: 'BMI 23 (54 kg, 1.53 m)', quote: '"I\'m not sure of my exact weight but I\'m fairly slim." [If asked: BMI approximately 23 — student should ask for weight or BMI]' },
    ],
    importantNegatives: [
      'No other episodes of unprotected sex since LMP ("Just the one time, Friday night.")',
      'No enzyme-inducing medications — not on rifampicin, anticonvulsants, or St John\'s Wort ("Nothing like that.")',
      'Not pregnant currently ("My period was 12 days ago." – "I definitely haven\'t been pregnant.")',
      'Not breastfeeding ("No.")',
      'No current STI symptoms — no discharge, dysuria, or pelvic pain ("I feel fine physically.")',
      'Did not use emergency contraception already ("No, I came straight here.")',
    ],
    ice: {
      ideas:
        '"I thought the morning-after pill had to be taken within 72 hours. I think I\'m still within that, just about?" – "I\'m not sure there\'s another option."',
      concerns:
        '"I\'m worried it\'s too late and I might be pregnant." – "And I\'m worried about taking these pills — are they safe? Are there side effects?"',
      expectations:
        '"I want to take the emergency pill if I can. And then I want to sort out proper contraception so this doesn\'t happen again." – "Can you help me with that too?"',
    },
    onlyIfDirectlyAsked: [
      'Her weight — approximately 54 kg, height 1.53 m (BMI ~23); oral EC is effective at this BMI',
      'Whether she has used emergency contraception before — once, about 2 years ago (levonorgestrel); no problems',
      'Whether she has thought about going back on the pill — "I\'d consider it, but I\'m worried about the mood side effects again. Is there something different I could try?"',
    ],
    behaviourNotes: [
      'Anxious and slightly embarrassed on arrival; relaxes when treated in a matter-of-fact, non-judgemental way',
      'Asks "Is 58 hours too late for the morning-after pill?" — student must clarify there are TWO oral options: LNG (Levonelle) is licensed to 72 hours but UPA (EllaOne) is more effective up to 120 hours; at 58 hours UPA is strongly preferred over LNG',
      'Asks "What is EllaOne — I\'ve only heard of Levonelle?" — student should explain UPA is a progesterone receptor modulator; more effective than LNG especially at 48–120 hours; safe and well-tolerated',
      'Asks "Does EllaOne affect the pill if I start it afterwards?" — student must explain UPA and hormonal contraception interact: after UPA, hormonal contraception should NOT be started for 5 days; additional barrier contraception needed for 14 days after starting hormonal method',
      'Asks "What if I were heavier? Would it still work?" — student should explain that Cu-IUD is the most effective EC at any BMI; oral EC is less effective in women with BMI >26 (FSRH guidance) and Cu-IUD is strongly preferred; for this patient (BMI 23), UPA is appropriate',
      'Does NOT want the Cu-IUD today — accept this; she did not consider it and it feels too invasive for today; discuss it as an option without pressuring her',
    ],
  },
  markScheme: [
    {
      domain: 'Opening the consultation',
      items: [
        { description: 'Introduces themselves; establishes a private, confidential, non-judgemental setting', marks: 1 },
        { description: 'Takes an open history — confirms the reason for attending before asking structured questions', marks: 1 },
      ],
    },
    {
      domain: 'Time since unprotected sex',
      items: [
        { description: 'Establishes the precise time since UPS — calculates approximately 58 hours', marks: 2 },
        { description: 'Confirms this is the only episode of UPS since the last menstrual period', marks: 1 },
      ],
    },
    {
      domain: 'Key screening questions',
      items: [
        { description: 'Asks about LMP — identifies that LMP was 12 days ago in a 28-day cycle; patient is approaching or at ovulation (highest risk window)', marks: 2 },
        { description: 'Asks about current medications — confirms no enzyme-inducing drugs (which reduce LNG efficacy and require double dose or Cu-IUD)', marks: 1 },
        { description: 'Asks about BMI or weight — confirms BMI 23; oral EC is effective', marks: 1 },
        { description: 'Confirms not currently pregnant and not breastfeeding', marks: 1 },
      ],
    },
    {
      domain: 'Explaining the emergency contraception options',
      items: [
        { description: 'Explains all three EC methods: Cu-IUD (most effective, up to 120 hours), UPA/EllaOne (up to 120 hours), LNG/Levonelle (up to 72 hours, less effective after 72 hours)', marks: 2 },
        { description: 'Correctly recommends UPA (EllaOne) as the preferred oral option at 58 hours — more effective than LNG in the 48–120 hour window', marks: 2 },
        { description: 'Discusses the Cu-IUD as the most effective option (>99%) and explains the patient can decline it; does not pressurise', marks: 1 },
      ],
    },
    {
      domain: 'Efficacy window for each method',
      items: [
        { description: 'States LNG (Levonelle): licensed to 72 hours; efficacy falls significantly after 72 hours — NOT the preferred option at 58 hours', marks: 1 },
        { description: 'States UPA (EllaOne): licensed to 120 hours; maintains better efficacy than LNG in the 48–120 hour window; recommended by FSRH 2023', marks: 1 },
        { description: 'States Cu-IUD: licensed to 120 hours OR within 5 days of earliest expected ovulation; highest efficacy >99%; provides ongoing contraception', marks: 1 },
      ],
    },
    {
      domain: 'UPA and subsequent hormonal contraception interaction',
      items: [
        { description: 'Explains that after UPA, hormonal contraception must NOT be started for 5 days (UPA is a progesterone receptor modulator; concurrent progesterone reduces its efficacy)', marks: 2 },
        { description: 'Advises additional barrier contraception (condoms) for 14 days after starting a hormonal method post-UPA', marks: 1 },
      ],
    },
    {
      domain: 'Ongoing contraception',
      items: [
        { description: 'Explores Priya\'s contraceptive preferences and reasons for stopping the COCP (low mood)', marks: 1 },
        { description: 'Discusses alternative options that may suit her better — progestogen-only pill (especially desogestrel), implant, or IUS (lower systemic hormone levels; mood side effect less common)', marks: 1 },
        { description: 'Explains quick start for ongoing contraception after EC — start 5 days after UPA; use condoms for 14 days', marks: 1 },
      ],
    },
    {
      domain: 'STI discussion',
      items: [
        { description: 'Offers STI screening — chlamydia and gonorrhoea NAAT; advises testing for herself and ideally for Ravi', marks: 1 },
      ],
    },
    {
      domain: 'ICE and addressing concerns',
      items: [
        { description: 'Explores concerns about whether it is "too late" — reassures correctly that UPA is effective to 120 hours', marks: 1 },
        { description: 'Addresses concern about mood side effects and the previous COCP experience — explores alternative methods', marks: 1 },
      ],
    },
    {
      domain: 'Closing and safety-netting',
      items: [
        { description: 'Advises that her next period may be early or late after EC — this is normal', marks: 1 },
        { description: 'Advises to take a pregnancy test if her next period is >7 days late or abnormal in character', marks: 1 },
        { description: 'Arranges follow-up to discuss ongoing contraception in 5–7 days', marks: 1 },
      ],
    },
    {
      domain: 'Key communication skills',
      items: [
        { description: 'Active listening — does not make the patient feel judged for the delay in seeking help', marks: 1 },
        { description: 'Signposting — clearly explains the difference between UPA and LNG and why UPA is preferred today', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Priya is a 27-year-old teacher presenting 58 hours after a single episode of unprotected vaginal intercourse with her regular partner; she is not using any contraception',
    'Her LMP was 12 days ago in a regular 28-day cycle, placing her at or near ovulation — this is the highest-risk window for pregnancy and strengthens the indication for effective EC',
    'She has no enzyme-inducing medications and BMI is 23 — oral EC is effective; Cu-IUD remains the most effective option but was declined',
    'Ulipristal acetate (EllaOne 30 mg) was recommended as the preferred oral EC at 58 hours — it maintains superior efficacy over levonorgestrel in the 48–120-hour window and is licensed to 120 hours; LNG (Levonelle) is less effective after 72 hours and was therefore not the first choice',
    'Key counselling point: UPA interacts with hormonal contraception — starting hormonal contraception within 5 days of UPA reduces EC efficacy; Priya was advised to use condoms for 5 days, then start hormonal contraception, and use additional barrier contraception for a further 14 days',
    'Ongoing contraception discussed — previous COCP caused low mood; alternatives including desogestrel POP, implant, or IUS were discussed as options with lower systemic oestrogen exposure; follow-up in 5 days to prescribe',
    'Safety-netting: next period may be early or late; pregnancy test if period >7 days late or abnormal; STI screen offered for Priya and partner',
  ],
  vivaQuestions: [
    {
      question: 'Compare the three methods of emergency contraception available in the UK — efficacy, timing, and key differences.',
      keyPoints: [
        'Copper IUD: most effective EC (>99%); can be inserted up to 120 hours after UPS, or up to 5 days after earliest expected ovulation; works by preventing fertilisation and implantation; provides ongoing contraception; does not interact with medications; preferred in obesity (BMI >26)',
        'Ulipristal acetate (UPA, EllaOne 30 mg): progesterone receptor modulator; licensed to 120 hours; approximately 98–99% effective; superior to LNG at 48–120 hours; NOT to be used with concurrent hormonal contraception (reduces efficacy); avoid breastfeeding for 1 week after use',
        'Levonorgestrel (LNG, Levonelle 1500 mcg): synthetic progestogen; licensed to 72 hours; can be used to 120 hours (off-label, reduced efficacy); approximately 85% effective overall within 72 hours; efficacy falls significantly with time; less effective in obesity (BMI >26) — consider double dose (3 mg) or Cu-IUD; safe in breastfeeding',
        'FSRH 2023 hierarchy: Cu-IUD first (always discuss); then UPA (if oral preferred and within 120 hours); LNG only if UPA unavailable or contraindicated',
        'After UPA: delay starting hormonal contraception 5 days; use additional contraception for 14 days after starting hormonal method; after LNG: can start hormonal contraception immediately; use additional contraception per method-specific rules',
      ],
      source: 'FSRH Guideline on Emergency Contraception (2023)',
    },
    {
      question: 'What is the mechanism of action of ulipristal acetate and why does it interact with hormonal contraception?',
      keyPoints: [
        'UPA is a selective progesterone receptor modulator (SPRM) — it binds to the progesterone receptor with high affinity and inhibits or delays ovulation even after the LH surge has started',
        'This distinguishes it from LNG, which works primarily by preventing/delaying the LH surge and is less effective once the surge has begun',
        'The interaction: UPA and progestogens (in combined and progestogen-only pills, implant, IUS, injectable) compete at the progesterone receptor — concurrent progestogen reduces UPA\'s efficacy as an EC',
        'Clinically: do NOT start hormonal contraception until 5 days after UPA; advise barrier contraception during these 5 days and for 14 days after starting the hormonal method',
        'The reverse is also true: if a patient on hormonal contraception requires EC, UPA is less effective — a Cu-IUD is strongly preferred in these patients',
      ],
      source: 'FSRH Guideline on Emergency Contraception (2023); BNF — ulipristal acetate monograph',
    },
    {
      question: 'When would you prescribe a double dose of levonorgestrel for emergency contraception?',
      keyPoints: [
        'FSRH recommends considering a double dose of LNG (3 mg, i.e. two Levonelle 1500 mcg tablets) in women taking enzyme-inducing medications — these accelerate LNG metabolism and reduce plasma levels',
        'Key enzyme inducers: rifampicin (most potent — doubles LNG clearance); rifabutin; anticonvulsants (carbamazepine, phenytoin, phenobarbital, oxcarbazepine, topiramate); St John\'s Wort; efavirenz, nevirapine (antiretrovirals)',
        'Important: even with double-dose LNG, efficacy in women on potent enzyme inducers (especially rifampicin) is significantly reduced — Cu-IUD is the preferred option in these patients',
        'Obesity (BMI >26 kg/m²): both oral EC methods are less effective; FSRH 2023 recommends Cu-IUD as first choice; if Cu-IUD declined and LNG used, double dose (3 mg) may be considered — note this is unlicensed; UPA at standard dose is preferred over double-dose LNG in this group',
      ],
      source: 'FSRH Guideline on Emergency Contraception (2023)',
    },
    {
      question: 'A woman presents 90 hours after unprotected intercourse. She is on carbamazepine for epilepsy and her BMI is 30. What is the most appropriate emergency contraception?',
      keyPoints: [
        'Copper IUD is the only appropriate option in this case — it is the only EC method that remains fully effective in the presence of enzyme inducers and obesity',
        'Timing: 90 hours is within the 120-hour (5-day) window for Cu-IUD insertion; effective if inserted within 5 days of earliest expected ovulation',
        'Oral EC considerations: UPA is a substrate for CYP3A4 — carbamazepine significantly reduces UPA plasma levels, rendering it ineffective; double-dose LNG is also unreliable with potent enzyme inducers',
        'After Cu-IUD insertion: patient should continue her carbamazepine as prescribed; if ongoing contraception required, the Cu-IUD can remain in situ or be removed after her next period',
        'Document the clinical decision-making: three factors (>72 hours, enzyme inducer, BMI >26) all independently indicate Cu-IUD; this is a high-stakes scenario and the rationale should be clearly communicated to the patient',
      ],
      source: 'FSRH Guideline on Emergency Contraception (2023); FSRH Drug Interactions with Hormonal Contraception (2022)',
    },
  ],
};

export const CONTRACEPTION_MOCK_EXAMS: MockExamStation[] = [
  contraceptionCounselling,
  fraserGuidelines,
  emergencyContraception,
];
