import type { MockExamStation } from './mockExamTypes';

const alcoholAnxietyMockExam: MockExamStation = {
  id: 'alcohol_anxiety_history',
  title: 'Alcohol Use and Anxiety History',
  diagnosis: 'Harmful alcohol use with comorbid social anxiety disorder',
  specialtyId: 'psychiatry',
  candidateBrief: {
    setting: 'You are an FY1 in the Emergency Department Liaison Psychiatry service.',
    scenario:
      'A 28-year-old man was brought to A&E last night with a right wrist sprain after a fall while intoxicated. He has been asked to attend a follow-up appointment today to discuss his alcohol use.',
    tasks: [
      'Take a focused history of his alcohol use and any contributing psychological factors',
      'Explain your concerns and initial management plan to the patient',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'Tom Henderson',
    age: 28,
    occupation: 'Office administrator',
    openingLine:
      '"Yeah, I\'m back. Look, I know what this is about — last night was embarrassing. I don\'t really think I need to be here, but they said I had to come."',
    historyOfPresentingComplaint: [
      {
        label: 'Last night\'s events — friend\'s birthday; drinking before and during; fall on kerb walking home',
        quote: '"I went to my friend\'s birthday last night. I had a few drinks at home before — about three beers — then had more there. On the way home I tripped on a kerb and landed on my wrist." – "I wouldn\'t say I was drunk. Okay, maybe I had a bit much."',
      },
      {
        label: 'Alcohol — frequency and quantity (approximately 40 units/week; 5–6 days/week)',
        quote: '"Most days, I suppose. Maybe 5 or 6 days a week." – "On a normal weeknight I have a few cans at home — maybe 4 or 5. At weekends when I\'m out it\'s more, maybe 10 or 12 units on a big night."',
      },
      {
        label: 'Alcohol — pattern: pre-social drinking to calm nerves; home drinking as habit',
        quote: '"I always have a drink before I go out somewhere social — just to calm my nerves. Without it I feel really on edge." – "At home it\'s more habit. It helps me wind down and switch my brain off."',
      },
      {
        label: 'CAGE — cut-down attempts (positive): tries but fails within 1–2 days',
        quote: '"I\'ve said to myself I\'ll cut back, yeah. I manage it for a day or two sometimes. But then a work thing comes up or I get invited somewhere and it just doesn\'t happen."',
      },
      {
        label: 'CAGE — annoyed by criticism (positive): flat-mate\'s nagging dismissed',
        quote: '"My flat-mate keeps nagging me about it. He said I drink too much. I told him to mind his own business, to be honest."',
      },
      {
        label: 'CAGE — guilty feelings (positive): feels pathetic after heavy sessions',
        quote: '"Sometimes. After a really heavy one I wake up feeling a bit pathetic about it." [pause] "I don\'t love that I need it to feel normal."',
      },
      {
        label: 'CAGE — eye-opener (positive): occasional beer before work when hands shaking',
        quote: '"...sometimes, yeah." [reluctant, embarrassed] "If I wake up and my hands are shaking I might have a small beer to take the edge off before work. Not always, just sometimes."',
      },
      {
        label: 'Dependence — morning tremor and physiological withdrawal relieved by alcohol',
        quote: '"My hands shake when I wake up, on days when I haven\'t drunk the night before. And I get really sweaty and anxious." – "Once I have a drink it goes away."',
      },
      {
        label: 'Social anxiety — onset following persistent bullying in secondary school (years 9–10)',
        quote: '"I\'ve been anxious since school, really. I got badly bullied in year 9 and 10 — proper nasty stuff. After that I just felt like everyone was watching me and judging me." – "I hate going anywhere new or where I don\'t know people. Even in meetings at work I feel like I\'m going to have a panic attack."',
      },
      {
        label: 'Anxiety — physical symptoms: palpitations, sweating, dry mouth, dizziness, fear of judgement',
        quote: '"My heart races, I start sweating, my mouth goes dry. Sometimes I feel dizzy." – "And I just think everyone is looking at me and thinking I\'m an idiot."',
      },
      {
        label: 'Anxiety — severe functional impairment: declined jobs, cancelled friend\'s wedding',
        quote: '"I\'ve turned down jobs because of the interviews. I cancelled a friend\'s wedding because I couldn\'t face it." – "Basically, anything social I either drink first or avoid."',
      },
      {
        label: 'Alcohol as self-medication for anxiety: works acutely but perpetuates the cycle',
        quote: '"It works, though — that\'s the thing. When I drink, the anxiety just disappears. I feel like a normal person. I can actually talk to people." – "Without it I\'m a nervous wreck at anything social."',
      },
    ],
    pastMedicalHistory: [
      { label: 'No formal medical history; never seen GP for anxiety', quote: '"Nothing. I\'ve never been to a GP about the anxiety — I didn\'t see the point." – "I had a few black eyes from the bullying but nothing medical."' },
    ],
    drugHistory: [
      { label: 'Ibuprofen — occasional for headaches', quote: '"I take ibuprofen sometimes for headaches."' },
      { label: 'No regular prescribed medications; no allergies', quote: '"Nothing. No allergies."' },
    ],
    familyHistory: [
      { label: 'Father — heavy regular alcohol use (every night)', quote: '"My dad drinks a lot. He\'s always had a few drinks every night for as long as I can remember." – "No other health problems that I know of."' },
    ],
    socialHistory: [
      { label: 'Office administrator (3 years); lives in shared flat with flat-mate', quote: '"I live in a shared flat. I work as an admin assistant — been there about 3 years. I manage okay, mostly."' },
      { label: 'Non-smoker; no illicit drug use', quote: '"I don\'t smoke. I haven\'t tried drugs — alcohol does the job."' },
    ],
    importantNegatives: [
      'No blackouts or memory loss ("I remember the whole night. I don\'t black out, no.")',
      'No alcohol-related seizures ("No, nothing like that.")',
      'No delirium tremens or hallucinations ("I\'ve never had a fit or seen things.")',
      'No depressive episodes ("I\'m not depressed — I\'m anxious, it\'s different. I don\'t feel low.")',
      'No suicidal ideation ("I don\'t want to hurt myself, no.")',
      'No jaundice or abdominal pain ("No yellow skin, and my stomach\'s been fine.")',
      'No illicit drug use ("Just alcohol. Nothing else.")',
    ],
    ice: {
      ideas:
        '"Honestly? I think the anxiety is the real problem, not the drinking. The drinking just helps me manage it. If you could sort the anxiety I probably wouldn\'t need to drink as much."',
      concerns:
        '"I\'m worried that if I stop drinking I\'ll never be able to go out or socialise at all. It\'s the only thing that actually works for my nerves."',
      expectations:
        '"I suppose I was hoping there might be something that could help the anxiety without me having to give up alcohol completely."',
    },
    onlyIfDirectlyAsked: [
      'Previous treatment for anxiety — never sought help; too embarrassed, thought everyone would think he was weak',
      'Last drink — had half a can of beer this morning before coming in; hands were visibly shaking beforehand',
      'Severity of morning tremor — hands shaking badly on alcohol-free mornings; calmed after a drink',
    ],
    behaviourNotes: [
      'Opens defensive and dismissive — does not see last night as a serious problem',
      'Becomes progressively more open if the student is non-judgemental and curious rather than critical',
      'Shows genuine vulnerability when discussing the bullying and anxiety — this is the emotional core of the history',
      'Resistant to the idea of stopping drinking entirely: "It\'s all I have for my nerves"',
      'Responds well if the student acknowledges that the anxiety is real and valid before exploring the alcohol-anxiety cycle',
      'Asks "Do I have to stop completely?" — a good opportunity to introduce detox and explore motivation',
      'If the student is judgemental or lectures about alcohol, becomes guarded and shuts down',
    ],
  },
  markScheme: [
    {
      domain: 'Opening the consultation',
      items: [
        { description: 'Washes hands and introduces themselves with name and role', marks: 1 },
        { description: 'Confirms the patient\'s name and date of birth', marks: 1 },
        { description: 'Explains the purpose of the follow-up consultation and gains consent to proceed', marks: 1 },
      ],
    },
    {
      domain: 'Presenting complaint',
      items: [
        {
          description: 'Uses an open question to allow the patient to describe last night\'s events in their own words',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Alcohol history — quantity and pattern',
      items: [
        { description: 'Establishes frequency of drinking (5–6 days per week)', marks: 1 },
        { description: 'Quantifies typical weekly alcohol intake in units', marks: 1 },
        { description: 'Identifies binge-drinking pattern at weekends (>8 units on a single occasion)', marks: 1 },
        {
          description:
            'Establishes the triggering context — alcohol used pre-emptively before social situations',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Screening for alcohol dependence',
      items: [
        {
          description:
            'Uses CAGE or equivalent to screen for dependence — identifies cut-down attempts, criticism from others, guilt, and eye-opener drinks',
          marks: 2,
        },
        {
          description: 'Asks about morning tremor, sweating, or other physiological withdrawal symptoms',
          marks: 2,
        },
        {
          description:
            'Asks about previous blackouts, alcohol-related seizures, or delirium tremens — excludes these',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Anxiety history',
      items: [
        {
          description:
            'Explores when and why the anxiety started — identifies adolescent onset following persistent bullying',
          marks: 2,
        },
        {
          description:
            'Characterises the anxiety: social triggers, physical symptoms (palpitations, sweating, dizziness), fear of negative evaluation',
          marks: 1,
        },
        {
          description:
            'Establishes impact of anxiety on daily life — avoidance of social events and career opportunities',
          marks: 1,
        },
        {
          description:
            'Identifies the self-medication cycle: social anxiety → pre-event drinking → relief → reinforcement of alcohol use',
          marks: 2,
        },
      ],
    },
    {
      domain: 'Screening for associated conditions',
      items: [
        { description: 'Asks about depressive symptoms and screens for suicidal ideation', marks: 1 },
        { description: 'Asks about illicit drug use', marks: 1 },
        {
          description:
            'Screens for physical complications of alcohol — jaundice, abdominal pain, GI symptoms',
          marks: 1,
        },
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
        {
          description: 'Asks about past medical history and any previous mental health treatment',
          marks: 1,
        },
        {
          description:
            'Asks about family history of alcohol use or mental health problems',
          marks: 1,
        },
        { description: 'Takes a drug history including OTC medications', marks: 1 },
      ],
    },
    {
      domain: 'Social history',
      items: [
        {
          description: 'Asks about occupation and impact of alcohol or anxiety on work performance',
          marks: 1,
        },
        { description: 'Asks about social support — living situation and relationships', marks: 1 },
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
        {
          description:
            'Active listening — maintains a non-judgemental, open stance; does not lecture about alcohol use',
          marks: 1,
        },
        {
          description: 'Summarising — recaps key points during the consultation to confirm understanding',
          marks: 1,
        },
        { description: 'Signposting — signals transitions between sections of the history', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Mr Henderson is a 28-year-old office administrator referred following an alcohol-related fall presenting for follow-up today',
    'He drinks approximately 40 units per week across 5–6 days, with pre-social binge drinking of up to 12 units per occasion — well above safe drinking limits',
    'CAGE is positive 4/4: unsuccessful cut-down attempts, criticism from his flat-mate, guilt after heavy sessions, and early-morning drinking to relieve tremor',
    'He has features of alcohol dependence: morning tremor relieved by alcohol (physiological withdrawal), failed attempts to cut down, and continued use despite social consequences',
    'Comorbid social anxiety disorder since adolescence, triggered by persistent bullying at school; characterised by fear of negative evaluation, physiological symptoms (palpitations, sweating), and significant social avoidance including missed career opportunities',
    'Tom identifies alcohol as his primary coping mechanism for anxiety — the self-medication cycle is the central driver of his harmful use, and he fears losing it',
    'Management: urgent assessment for medically supervised alcohol detoxification (physiological dependence with withdrawal tremor); thiamine supplementation; referral to alcohol and psychiatric liaison; once abstinent, treat social anxiety with sertraline and CBT',
  ],
  vivaQuestions: [
    {
      question:
        'How do you assess and classify the severity of alcohol use disorder, and what screening tools are available?',
      keyPoints: [
        'AUDIT (Alcohol Use Disorders Identification Test): 10 questions; ≥8 = hazardous use, ≥16 = harmful use, ≥20 = probable dependence',
        'AUDIT-C (abbreviated): 3 questions on frequency, quantity, binge; ≥5 men / ≥4 women = at-risk',
        'CAGE: 2+ positive = significant alcohol problem; 3–4 = likely dependence; quick bedside screen',
        'ICD-11 alcohol dependence: 3 of 6 criteria — compulsion, impaired control, withdrawal symptoms, tolerance, neglect of other activities, continued use despite harm',
        'CIWA-Ar: Clinical Institute Withdrawal Assessment — quantifies withdrawal severity to guide pharmacological management',
      ],
      source: 'NICE CG115 (2011); Saunders JB et al., Addiction 1993 (AUDIT development)',
    },
    {
      question:
        'What are the risks of sudden alcohol cessation in a dependent patient, and how would you manage alcohol withdrawal?',
      keyPoints: [
        'Withdrawal timeline: tremor and anxiety onset 6–24 h; seizures 6–48 h; delirium tremens (DTs) 48–72 h after last drink',
        'Chlordiazepoxide (fixed or symptom-triggered reducing regimen) is first-line for detoxification; titrated against CIWA-Ar score',
        'Wernicke\'s encephalopathy (confusion, ophthalmoplegia, ataxia): give IV Pabrinex (thiamine) before any glucose to avoid precipitating or worsening',
        'Thiamine: IV Pabrinex in hospital; oral thiamine 100 mg three times daily for outpatient detox',
        'Community detox only if no prior withdrawal seizures or DTs, good nutrition, supportive home environment, and patient reliable',
      ],
      source: 'NICE CG115 (2011); BAP Alcohol Guidelines (2017)',
    },
    {
      question: 'What pharmacological options exist for relapse prevention in alcohol use disorder?',
      keyPoints: [
        'Acamprosate: reduces craving via GABA-ergic/glutamatergic modulation; started after detox; taken three times daily; first-line NICE-recommended',
        'Naltrexone: opioid receptor antagonist; reduces reward and craving; can be used during active drinking or post-detox',
        'Disulfiram (Antabuse): aversion therapy — inhibits acetaldehyde dehydrogenase, causing unpleasant reaction if alcohol is consumed; requires motivated patient',
        'Nalmefene (Selincro): opioid modulator licensed for reduction of consumption (not abstinence) in patients without physical dependence',
        'Psychological treatments: CBT and motivational enhancement therapy are effective and should be offered alongside pharmacotherapy',
      ],
      source: 'NICE CG115 (2011); NICE TA325 (nalmefene 2014); BAP Alcohol Guidelines (2017)',
    },
    {
      question:
        'What is the relationship between anxiety disorders and alcohol use disorder, and how does this affect management?',
      keyPoints: [
        'Self-medication hypothesis: anxiety predates alcohol use in approximately 60% of co-occurring cases; alcohol reduces anxiety acutely via GABA-A receptor potentiation',
        'Chronic alcohol use dysregulates GABA and glutamate receptor function; withdrawal produces rebound anxiety and seizure risk via glutamate hyperactivity',
        'Alcohol perpetuates anxiety long-term — the cycle of use reinforces avoidance behaviour and prevents development of coping skills',
        'Management sequence: achieve sobriety first (anxiety often improves substantially); reassess after 4–6 weeks abstinence before diagnosing a comorbid anxiety disorder',
        'If anxiety disorder persists post-sobriety: SSRIs (sertraline, escitalopram) first-line for social anxiety disorder; CBT with exposure-based elements; avoid benzodiazepines given dependence risk',
      ],
      source: 'Kushner MG et al., Alcohol Clin Exp Res 1990; NICE CG159 (Social anxiety disorder, 2013); NICE CG115',
    },
  ],
};

const lithiumCounsellingMockExam: MockExamStation = {
  id: 'lithium_counselling_parent',
  title: 'Lithium Counselling — Parent of Patient',
  diagnosis: 'Bipolar I disorder',
  specialtyId: 'psychiatry',
  candidateBrief: {
    setting: 'You are an FY1 on the inpatient psychiatric ward.',
    scenario:
      'David Clarke, 58, is the father of Emma Clarke, 26, who was admitted 3 weeks ago following her first manic episode and is now due for discharge in 2 days. Emma has been started on lithium and has consented to her father being involved in her care. Mr Clarke has asked to speak with you — he is worried about the lithium.',
    tasks: [
      'Explore Mr Clarke\'s concerns and establish what he already understands',
      'Explain the purpose, monitoring requirements, side effects, and warning signs of lithium therapy',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'David Clarke',
    age: 58,
    occupation: 'Retired teacher',
    openingLine:
      '"Thank you for seeing me. I\'ve done some reading online about this lithium tablet they\'ve put Emma on and, to be honest, I\'m really worried. I\'ve read some alarming things about kidney damage and that it\'s very dangerous. I just want to make sure she\'s going to be safe."',
    historyOfPresentingComplaint: [
      {
        label: 'Opening concern — alarming online information about kidney damage and toxicity risk',
        quote: '"I looked it up online and it said lithium can cause permanent kidney damage and that the levels in the blood can become toxic." – "One forum said it can kill you if it goes too high. Is that actually true?"',
      },
      {
        label: 'Question: what is lithium used for, and why does Emma need it?',
        quote: '"I know it\'s something to do with her mood, but the doctors spoke to Emma about it and I wasn\'t there. Can you explain to me what it actually does and why she needs it?" – "Is this going to be for life?"',
      },
      {
        label: 'Question: why not something safer?',
        quote: '"Are there no other tablets she could take that are safer? It seems like a very dangerous medication." – "I\'ve heard of others with bipolar who aren\'t on lithium."',
      },
      {
        label: 'Question: monitoring requirements and frequency',
        quote: '"They mentioned she\'ll need regular blood tests. How often? And what exactly are they checking for?" – "She\'s not always great at remembering appointments."',
      },
      {
        label: 'Question: expected side effects',
        quote: '"What side effects should we expect? The website said she might shake and put on weight — is that definitely going to happen?" – "She\'s already upset about how she looks after being in hospital."',
      },
      {
        label: 'Question: signs of toxicity and what to do at home',
        quote: '"How do I know if the levels have got too high? What do I look out for at home?" – "And what do I do if I\'m worried about her?"',
      },
      {
        label: 'Question: drug interactions and things to avoid (specifically ibuprofen)',
        quote: '"Is there anything she shouldn\'t take or eat?" – "She takes ibuprofen quite regularly for period pain. Is that okay?"',
      },
      {
        label: 'Question: long-term prognosis — can she lead a normal life, work, have children?',
        quote: '"Will she have to be on this forever? Can she ever come off it?" – "And can she lead a normal life? Work? Have children one day?"',
      },
      {
        label: 'Question: the lithium treatment card',
        quote: '"They mentioned something about a card she should carry. What is that?" – "I\'ll make sure she keeps it with her."',
      },
    ],
    pastMedicalHistory: [
      { label: 'Emma (patient) — bipolar I disorder; first manic episode (3 weeks ago)', quote: '"I understand she has bipolar — the consultant explained that, I\'m not questioning that."' },
    ],
    drugHistory: [
      { label: 'Emma — lithium (do not share specific dose or serum level without explicit consent)', quote: '"They mentioned something about a card she should carry."' },
    ],
    familyHistory: [
      { label: 'David\'s brother — possible undiagnosed bipolar-type episode in his 30s', quote: '"My brother had a breakdown in his 30s but was never formally diagnosed." [only if directly asked] "Looking back, I wonder if it was similar to what Emma\'s been through."' },
    ],
    socialHistory: [
      { label: 'Retired teacher (58); lives with wife; Emma coming home to stay with them on discharge', quote: '"My wife is also worried but not present — she\'s with Emma right now. She said to ask you everything."' },
    ],
    importantNegatives: [
      'Does not challenge the diagnosis ("I understand she has bipolar — the consultant explained that, I\'m not questioning that.")',
      'Does not know Emma\'s specific lithium dose or current serum level',
      'Emma is not present at this meeting',
    ],
    ice: {
      ideas:
        '"I think I was terrified by some of what I read online — it sounded like a very serious and dangerous medication. But I know she needs something — what happened over the last few weeks was awful to watch."',
      concerns:
        '"My main worry is that the levels could go dangerously high and we wouldn\'t notice in time. I need to know what to look for at home." – "I\'m also worried about the long-term effects — her kidneys, her weight, whether she can have children."',
      expectations:
        '"I\'d like to understand it properly so I can support her. And to know what I should do if something seems wrong."',
    },
    onlyIfDirectlyAsked: [
      'Wife\'s awareness — David\'s wife is also worried but not present; she\'s with Emma right now ("She said to ask you everything.")',
      'Family history of bipolar — reveals his brother had a breakdown in his 30s but was never formally diagnosed ("Looking back, I wonder if it was similar to what Emma\'s been through.")',
      'Possible trigger — Emma broke up with her boyfriend 2 months before admission; father wonders if this contributed',
    ],
    behaviourNotes: [
      'Anxious and distressed at the start — becomes progressively calmer and more reassured as information is delivered clearly',
      'Intelligent and asks follow-up questions — does not need over-simplification but appreciates plain English over jargon',
      'Reacts with visible relief when told that monitoring is specifically designed to prevent harm: "That\'s such a relief — the websites made it sound much scarier"',
      'Becomes emotional when asked how he found the manic episode: "It was terrifying — I didn\'t recognise her at all."',
      'Asks about lithium in pregnancy — student should acknowledge this as an important topic to discuss with Emma and her psychiatrist',
      'Asks "Is this our fault? Did we cause this?" — respond with empathy and appropriate reassurance',
      'The student must not share Emma\'s specific lithium dose or serum level without her explicit consent — general information about lithium is appropriate',
    ],
  },
  markScheme: [
    {
      domain: 'Opening the consultation',
      items: [
        { description: 'Washes hands and introduces themselves with name and role', marks: 1 },
        { description: 'Confirms Mr Clarke\'s identity and his relationship to the patient', marks: 1 },
        {
          description:
            'Confirms that Emma has consented to her father being involved in her care before sharing clinical information',
          marks: 2,
        },
      ],
    },
    {
      domain: 'Exploring concerns',
      items: [
        {
          description:
            'Uses open questioning to explore what Mr Clarke already knows and what specifically concerns him',
          marks: 1,
        },
        {
          description:
            'Acknowledges and validates his anxiety — normalises parental concern after a first manic episode',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Explaining the purpose of lithium',
      items: [
        {
          description:
            'Explains that lithium is a mood stabiliser used to prevent episodes of mania and depression in bipolar disorder',
          marks: 1,
        },
        {
          description:
            'Explains that lithium has a strong evidence base including a demonstrated reduction in suicide risk',
          marks: 1,
        },
        {
          description:
            'Addresses the question of alternatives — explains other options exist but lithium has the strongest evidence for bipolar I prevention',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Monitoring requirements',
      items: [
        {
          description:
            'Explains that regular blood tests monitor lithium levels, kidney function (U&Es/eGFR), and thyroid function',
          marks: 2,
        },
        {
          description: 'Explains that the level must be taken 12 hours after the last dose (trough level) for accuracy',
          marks: 1,
        },
        {
          description: 'States approximate frequency of monitoring once stable — every 3–6 months',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Side effects',
      items: [
        {
          description:
            'Explains common side effects: fine tremor, increased thirst and urination, weight gain, and mild GI symptoms',
          marks: 1,
        },
        {
          description:
            'Mentions potential long-term effects — renal function and hypothyroidism — and explains monitoring exists to detect these early',
          marks: 1,
        },
        {
          description:
            'Reassures that side effects are manageable and that most people on lithium lead normal lives',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Signs of toxicity and what to do',
      items: [
        {
          description:
            'Explains signs of lithium toxicity: coarse tremor, nausea, vomiting, diarrhoea, unsteady gait, drowsiness, confusion',
          marks: 2,
        },
        {
          description: 'Advises seeking emergency medical attention immediately if toxicity symptoms occur',
          marks: 1,
        },
        {
          description:
            'Explains precipitants of toxicity — dehydration, illness, NSAIDs — and specifically advises Emma to avoid ibuprofen',
          marks: 2,
        },
      ],
    },
    {
      domain: 'Lithium card and practical advice',
      items: [
        {
          description:
            'Explains the purpose of the lithium treatment card and advises Emma to carry it at all times',
          marks: 1,
        },
        {
          description:
            'Advises Emma to maintain good hydration and take extra care during illness or hot weather',
          marks: 1,
        },
      ],
    },
    {
      domain: 'ICE and closing',
      items: [
        {
          description:
            'Explores Mr Clarke\'s ideas, concerns, and expectations — specifically addresses the fear of undetected toxic levels',
          marks: 1,
        },
        {
          description: 'Checks understanding by inviting further questions or asking Mr Clarke to summarise key safety points',
          marks: 1,
        },
        {
          description:
            'Signposts ongoing support — Emma\'s community psychiatrist and CMHT as the primary point of contact for lithium-related concerns',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Key communication skills',
      items: [
        {
          description: 'Active listening — allows Mr Clarke to express his concerns fully before responding',
          marks: 1,
        },
        {
          description: 'Summarising — recaps the key safety information clearly at the close of the consultation',
          marks: 1,
        },
        {
          description:
            'Signposting — uses a clear structure and avoids medical jargon; adapts language to a non-medical audience',
          marks: 1,
        },
      ],
    },
  ],
  expectedPresentation: [
    'Mr Clarke is the father of Emma Clarke, 26, who is being discharged after her first manic episode and has been started on lithium — she has consented to her father\'s involvement in her care',
    'His primary concern is the risk of toxic lithium levels and long-term kidney damage, driven by alarming information found online',
    'Lithium is a mood stabiliser with robust evidence for preventing manic and depressive episodes in bipolar I disorder and for reducing suicide risk — it remains the most effective prophylactic agent for bipolar I',
    'Monitoring requirements: serum lithium level (trough, 12 hours post-dose), U&Es/eGFR, and TFTs — every 3–6 months once stable; this monitoring regimen is specifically designed to detect problems before they cause harm',
    'Common side effects include fine tremor, polyuria, polydipsia, weight gain, and mild GI symptoms; long-term monitoring addresses potential renal impairment and hypothyroidism',
    'Toxicity warning signs — coarse tremor, nausea, vomiting, diarrhoea, confusion, unsteady gait — require emergency assessment; Emma must avoid ibuprofen (NSAIDs impair renal lithium excretion) and maintain good hydration',
    'Emma should carry her lithium treatment card at all times; the community mental health team will provide ongoing monitoring and support post-discharge',
  ],
  vivaQuestions: [
    {
      question: 'What is the mechanism of action of lithium, and what is its therapeutic range?',
      keyPoints: [
        'Mechanism not fully understood; inhibits inositol monophosphatase → depletes free inositol → reduces PKC-mediated second-messenger signalling in overactive neurons',
        'Also modulates GSK-3β (involved in circadian rhythms and neuroplasticity) and increases BDNF — neuroprotective effects',
        'Therapeutic range (maintenance prophylaxis): 0.4–1.0 mmol/L; acute mania: 0.8–1.0 mmol/L',
        'Narrow therapeutic index: toxicity begins above 1.5 mmol/L; serum level must be taken 12 hours post-dose (trough) for consistent interpretation',
        'Renally excreted without hepatic metabolism — renal impairment substantially increases toxicity risk',
      ],
      source: 'Marmol F, Prog Neuropsychopharmacol Biol Psychiatry 2008; NICE CG185 (2014)',
    },
    {
      question: 'What monitoring is required for a patient started on lithium, and why is each test performed?',
      keyPoints: [
        'Pre-initiation: U&Es (eGFR baseline), TFTs, ECG, weight, and pregnancy test in women of childbearing potential',
        'Serum lithium level every 3–6 months once stable (12 hours post-dose); target 0.6–0.8 mmol/L for most maintenance patients',
        'U&Es/eGFR every 6 months — lithium causes nephrogenic diabetes insipidus and may cause chronic tubulointerstitial nephritis with long-term use',
        'TFTs every 6 months — lithium inhibits thyroid hormone synthesis; hypothyroidism occurs in 20–40% of long-term users',
        'BMI annually; ECG if cardiac risk factors (lithium causes T-wave changes and may worsen sinus node dysfunction)',
      ],
      source: 'NICE CG185 (2014); BNF — Lithium monitoring guidance',
    },
    {
      question: 'What are the signs, severity grading, and management of lithium toxicity?',
      keyPoints: [
        'Mild toxicity (1.5–2.0 mmol/L): coarse tremor, nausea, vomiting, diarrhoea, polyuria, drowsiness — stop lithium and rehydrate',
        'Moderate toxicity (2.0–2.5 mmol/L): ataxia, dysarthria, confusion, muscle fasciculations, ECG changes',
        'Severe toxicity (>2.5 mmol/L): seizures, coma, cardiac arrhythmias, irreversible neurological damage — can be fatal',
        'Management: stop lithium; IV fluid resuscitation to restore renal clearance; correct electrolyte imbalances; haemodialysis if level >3.5 mmol/L or severe/refractory symptoms',
        'Precipitants: dehydration, renal impairment, NSAIDs, ACE inhibitors/ARBs, thiazide diuretics, sodium depletion',
      ],
      source: 'NICE CG185 (2014); Sadock BJ et al., Kaplan & Sadock\'s Comprehensive Textbook of Psychiatry, 10th ed.',
    },
    {
      question:
        'What are the key drug interactions with lithium, and what practical advice should patients be given?',
      keyPoints: [
        'NSAIDs (e.g. ibuprofen): reduce renal prostaglandin synthesis → impair lithium excretion → increase serum levels; can precipitate toxicity even at therapeutic doses',
        'ACE inhibitors and ARBs: reduce renal lithium clearance via the same mechanism — significant levels rise possible',
        'Thiazide diuretics: increase proximal tubular sodium (and lithium) reabsorption → toxicity risk; loop diuretics are safer if a diuretic is required',
        'Dehydration from any cause (vomiting, diarrhoea, hot weather, vigorous exercise): reduces renal lithium clearance — patients must maintain hydration and seek advice if unable to take tablets',
        'Patients should carry their lithium card at all times, substitute paracetamol for NSAIDs, and inform all healthcare providers including dentists and pharmacists of their lithium use',
      ],
      source: 'NICE CG185 (2014); BNF — Lithium interactions',
    },
  ],
};

const mseManiaMockExam: MockExamStation = {
  id: 'mse_mania',
  title: 'Mental State Examination — Mania',
  diagnosis: 'Bipolar I disorder — first manic episode',
  specialtyId: 'psychiatry',
  candidateBrief: {
    setting: 'You are an FY1 in a psychiatric assessment unit.',
    scenario:
      'Claire Watson, 35, a nursery school teacher, has been brought in by her husband. Over the past week she has not slept more than 1–2 hours per night, has spent over £4,000 online in two days, and has been telling her neighbours she has discovered she has healing powers.',
    tasks: [
      'Perform a full Mental State Examination on Mrs Watson',
      'Present your findings to the examiner and state the most likely diagnosis',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'Claire Watson',
    age: 35,
    occupation: 'Nursery school teacher',
    openingLine:
      '"I really don\'t know why I\'m here — I feel absolutely AMAZING. I\'ve never felt so alive. Your hospital really needs to hear about my healing work, by the way. I\'ve been sent to help people."',
    historyOfPresentingComplaint: [
      {
        label: 'Appearance and behaviour — bright red dress; dishevelled hair; animated; disinhibited; tries to hold examiner\'s hand',
        quote: '[Actor presents]: bright red dress with multiple necklaces; dishevelled hair; animated facial expression; makes intense eye contact; moves around in seat; speaks before student finishes questions; laughs unprompted; disinhibited (tries to hold examiner\'s hand to "send healing energy").',
      },
      {
        label: 'Speech — markedly pressured; rapid; loud; flight of ideas; difficult to interrupt',
        quote: '[Actor presents]: markedly pressured speech — rapid, loud, difficult to interrupt; jumps between topics (flight of ideas); rhymes or puns occasionally; student needs to raise voice slightly to redirect.',
      },
      {
        label: 'Mood (subjective) — "absolutely incredible, electric, powerful, like I\'ve found my purpose"',
        quote: '"I feel absolutely incredible — electric, powerful. Like I\'ve finally woken up and found my purpose." [not distressed, not sad]',
      },
      {
        label: 'Affect (objective) — elated/expansive; labile; briefly irritable if beliefs challenged',
        quote: '[Actor presents]: elated/expansive affect; labile — briefly irritable if beliefs challenged ("You wouldn\'t understand"), then returns to elated; incongruent with the clinical concern.',
      },
      {
        label: 'Thought form — flight of ideas; circumstantial; difficult to redirect',
        quote: '[Actor presents]: flight of ideas — rapid loosely connected associations ("healing energy → crystals → hospitals need crystals → you look tired, do you need healing → my husband doesn\'t believe me but he will"); circumstantial; difficult to redirect; no thought block.',
      },
      {
        label: 'Thought content — grandiose delusion (special healing powers; chosen; healing mission)',
        quote: '"I have been chosen. I can sense the energy of illness in people and draw it out. I\'ve already healed three of my neighbours." — grandiose delusion (special powers/mission); brief paranoid flavour if challenged: "Why does everyone try to stop me? My husband called me crazy."',
      },
      {
        label: 'Perception — possible visual pseudo-hallucinations (golden auras around people)',
        quote: '"Sometimes I see golden light around people — it\'s their healing aura." — possible visual pseudo-hallucinations or over-valued ideas; if probed: "It\'s not like a ghost — I just perceive it. It\'s my gift."',
      },
      {
        label: 'Cognition — fully oriented; attention impaired (distractibility); serial 7s incomplete',
        quote: '[Actor]: fully oriented to time, place, and person; attention impaired (easily distracted mid-sentence); serial 7s — gets to 93 then loses track; short-term registration OK but working memory impaired due to distractibility.',
      },
      {
        label: 'Insight — absent; does not recognise illness; believes husband is jealous of her gifts',
        quote: '"I\'m not ill. I\'ve never been better in my life. My husband is jealous of my gifts — that\'s why he brought me here." — absent insight.',
      },
      {
        label: 'Risk — no suicidal ideation; impulsive risk behaviours (£4,200 spent; 3 am wandering; not eating)',
        quote: '"No, I\'m not going to hurt myself — why would I? I\'m on a mission." — denies suicidal ideation; describes impulsive risk-taking: tried to leave house at 3 am, gave away jewellery to neighbours, spent £4,200 in two days.',
      },
      {
        label: 'Sleep — 1–2 hours/night for 7 days; does not feel the need for sleep',
        quote: '"I don\'t need sleep — sleep is for people who aren\'t fully awakened. Maybe 1 or 2 hours a night this past week."',
      },
    ],
    pastMedicalHistory: [
      { label: 'No prior psychiatric history', quote: '"None. I\'ve never seen a psychiatrist in my life." – "This is the first time anything like this has happened."' },
    ],
    drugHistory: [
      { label: 'No regular medications; gave up alcohol 6 months ago; no illicit drugs', quote: '"I don\'t take drugs. I gave up alcohol 6 months ago actually — it was lowering my vibrational frequency."' },
    ],
    familyHistory: [
      { label: 'Aunt — "breakdown" in her 40s; hospitalised; family does not discuss it', quote: '"She was in hospital for a while — nobody talks about it." [only if directly asked]' },
    ],
    socialHistory: [
      { label: 'Nursery school teacher (35); lives with husband', quote: '"My only concern is that being here is wasting time I should be spending on my healing work."' },
      { label: 'Not eating adequately — only crackers yesterday (self-neglect; only if asked)', quote: '"I\'m not hungry. I had some crackers yesterday." [risk of self-neglect — only if asked]' },
    ],
    importantNegatives: [
      'No suicidal ideation ("Why would I? I feel amazing.")',
      'No auditory command hallucinations ("I don\'t hear voices. I perceive energy.")',
      'No prior psychiatric history ("I\'ve never had an episode like this.")',
      'No illicit drug use or alcohol ("I gave up alcohol 6 months ago.")',
      'No recent steroid use or other organic cause ("No new medications.")',
      'No depressive episode history ("I\'ve had some low days before but nothing requiring treatment.")',
    ],
    ice: {
      ideas: '"I\'m not ill. I\'ve discovered my gift — that\'s all. My husband overreacted."',
      concerns: '"My only concern is that being here is wasting time I should be spending on my healing work."',
      expectations: '"I want you to tell my husband I\'m fine so I can go home and get on with things."',
    },
    onlyIfDirectlyAsked: [
      'Previous low moods — acknowledges "a few low patches over the years, nothing bad" (possible prior depressive episodes — supports bipolar diagnosis)',
      'Family history — aunt had a "breakdown" in her 40s ("She was in hospital for a while — nobody talks about it")',
      'Eating — "I\'m not hungry. I had some crackers yesterday." (not eating adequately — risk of self-neglect)',
    ],
    behaviourNotes: [
      'Animated, loud, and difficult to interrupt throughout — the student must actively manage pace and direction',
      'Briefly irritable if beliefs directly challenged ("You sound like my husband") — quickly returns to elated baseline',
      'Responds slightly better to curious, non-confrontational questions than direct challenges',
      'Asks "Am I going to be sectioned?" — the student should respond honestly but empathetically about the need for assessment and support',
      'Tries to touch or hold the student\'s hand to "send healing energy" — student should politely decline',
      'Do NOT play this as florid psychosis — this is hypomania/mania with grandiose beliefs, not disorganised schizophrenia',
    ],
  },
  markScheme: [
    {
      domain: 'Opening the assessment',
      items: [
        { description: 'Introduces themselves clearly and explains the purpose of the MSE', marks: 1 },
        { description: 'Establishes rapport appropriately despite disinhibited behaviour — does not lecture or confront', marks: 1 },
      ],
    },
    {
      domain: 'Appearance and behaviour',
      items: [
        {
          description: 'Observes and comments on appearance (dress, grooming), behaviour (disinhibited, animated), and eye contact',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Speech',
      items: [
        {
          description: 'Assesses and describes speech: rate (pressured/rapid), volume (loud), and continuity (flight of ideas)',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Mood and affect',
      items: [
        {
          description: 'Elicits subjective mood using the patient\'s own words ("electric", "amazing")',
          marks: 1,
        },
        {
          description: 'Assesses objective affect — identifies elated/expansive/labile affect incongruent with clinical context',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Thought form and content',
      items: [
        {
          description: 'Identifies flight of ideas as the abnormality of thought form',
          marks: 1,
        },
        {
          description: 'Elicits and correctly identifies grandiose delusion (special healing powers/mission) as the abnormality of thought content',
          marks: 2,
        },
      ],
    },
    {
      domain: 'Perception',
      items: [
        {
          description: 'Directly asks about hallucinations in all modalities (auditory, visual, other); correctly characterises any perceptual abnormalities',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Cognition',
      items: [
        {
          description: 'Assesses orientation and concentration — notes distractibility and impaired working memory',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Insight',
      items: [
        {
          description: 'Assesses insight — correctly identifies it as absent (patient does not recognise she is unwell)',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Risk assessment',
      items: [
        {
          description: 'Screens for suicidal ideation, self-harm, and risk to others — excludes active intent',
          marks: 1,
        },
        {
          description: 'Identifies impulsive risk behaviours: financial (£4,200 spent), self-neglect (no sleep, not eating), unsafe nocturnal wandering',
          marks: 2,
        },
      ],
    },
    {
      domain: 'Diagnosis and formulation',
      items: [
        {
          description: 'Presents MSE findings in structured order and states the most likely diagnosis as mania / bipolar I disorder (first episode)',
          marks: 2,
        },
        {
          description: 'Considers organic differential diagnosis (substance-induced, steroid-induced, hyperthyroidism) before concluding functional mania',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Key communication skills',
      items: [
        { description: 'Active listening — does not interrupt excessively; manages pace without becoming dismissive', marks: 1 },
        { description: 'Summarising — summarises findings clearly at close of assessment', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Mrs Watson is a 35-year-old nursery school teacher with no prior psychiatric history presenting acutely with a 7-day history of markedly elevated mood, severe sleep deprivation (1–2 hours per night), impulsive spending (£4,200), and grandiose beliefs',
    'MSE: dishevelled bright clothing, markedly disinhibited behaviour, intense eye contact; speech pressured, rapid, loud with flight of ideas; subjective mood "electric/amazing", objective affect elated/labile/expansive',
    'Thought form: flight of ideas; thought content: grandiose delusion — believes she has healing powers and has been "sent" on a healing mission; absent insight',
    'Perception: describes seeing "golden auras" — possible perceptual disturbance; requires further clarification but likely over-valued ideas rather than true hallucinations',
    'Cognition: fully oriented; concentration impaired by distractibility; working memory reduced',
    'Risk: no suicidal ideation; impulsive risk behaviours include £4,200 spending, self-neglect (not eating or sleeping), and nocturnal wandering',
    'Most likely diagnosis: bipolar I disorder — first manic episode; organic causes (substance use, thyroid, steroid exposure) must be excluded; likely requires inpatient admission under the Mental Health Act given absent insight, inability to care for herself, and impulsive risk',
  ],
  vivaQuestions: [
    {
      question: 'What is the ICD-11 / DSM-5 definition of a manic episode, and how does it differ from hypomania?',
      keyPoints: [
        'Manic episode (ICD-11/DSM-5): elevated/expansive or irritable mood + increased energy/activity, lasting ≥7 days (or any duration if hospitalised); causes marked impairment',
        'Three or more of: decreased need for sleep, grandiosity, pressured speech, flight of ideas, distractibility, increased goal-directed activity, risky behaviour',
        'Hypomania: same features but less severe; ≥4 days; does NOT cause severe impairment or require hospitalisation; no psychotic features',
        'Bipolar I: ≥1 manic episode (depressive episodes common but not required for diagnosis)',
        'Bipolar II: hypomanic episodes + at least one depressive episode — no full manic episode',
      ],
      source: 'ICD-11 (2022) — 6A60; DSM-5 (2013); Sadock BJ et al., Kaplan & Sadock\'s Synopsis, 11th ed.',
    },
    {
      question: 'What are the organic differentials for a first manic presentation, and what investigations would you request?',
      keyPoints: [
        'Substance-induced mania: cocaine, amphetamines, cannabis (high THC), corticosteroids — drug screen essential',
        'Medical causes: hyperthyroidism (TFTs), SLE (ANA, anti-dsDNA), HIV/CNS infections, temporal lobe epilepsy, Cushing\'s syndrome',
        'Medication-induced: antidepressants (can trigger mania in bipolar), steroids, L-dopa, isoniazid',
        'Investigations: FBC, U&Es, LFTs, TFTs, glucose, CRP/ESR, urine drug screen, blood alcohol; consider ANA, HIV, syphilis serology if clinically indicated',
        'Brain imaging (CT/MRI) if first episode, atypical features (focal signs, new severe headache), or no clear precipitant — exclude structural cause',
      ],
      source: 'NICE CG185 (2014); Sadock BJ et al., Kaplan & Sadock\'s Synopsis, 11th ed.',
    },
    {
      question: 'How would you manage this patient acutely, including the legal framework?',
      keyPoints: [
        'Absent insight + severe functional impairment + impulsive risk behaviour: likely requires inpatient admission; voluntary admission preferred but if refused, Mental Health Act (MHA 1983) assessment warranted',
        'MHA Section 2: admission for assessment (up to 28 days); requires two doctors (one approved under s12) + AMHP; used when diagnosis uncertain',
        'MHA Section 3: admission for treatment (up to 6 months); used when diagnosis established',
        'Pharmacological: antipsychotics (haloperidol, olanzapine, risperidone) first-line for acute mania; add benzodiazepine (lorazepam) for acute behavioural disturbance; lithium/valproate as mood stabiliser once stable',
        'Sodium valproate in women of childbearing potential: avoid — highly teratogenic; use alternative mood stabiliser (quetiapine, lamotrigine)',
      ],
      source: 'NICE CG185 (2014); Mental Health Act 1983 (amended 2007); MHRA Valproate safety review (2018)',
    },
    {
      question: 'What is the structure of a full Mental State Examination?',
      keyPoints: [
        'Appearance and behaviour: dress, hygiene, build, eye contact, psychomotor activity, rapport',
        'Speech: rate, rhythm, volume, tone, quantity (poverty vs pressure)',
        'Mood: subjective (patient\'s own words) and objective (observed affect); congruence between the two',
        'Thought: form (loosening, flight of ideas, thought block, perseveration) and content (delusions, obsessions, overvalued ideas, suicidal/homicidal ideation)',
        'Perception: hallucinations (all modalities — auditory, visual, tactile, olfactory, gustatory), illusions, depersonalisation/derealisation',
        'Cognition: orientation (time, place, person), attention (serial 7s/days of week backwards), memory (registration, recall), executive function',
        'Insight: does the patient believe they are unwell? Do they accept treatment is needed?',
        'Risk: suicidal ideation (passive/active, plan, intent, access to means), self-harm, harm to others, vulnerability (exploitation, self-neglect)',
      ],
      source: 'Sims A, Symptoms in the Mind, 5th ed.; OHCM 10th ed., Ch. 20',
    },
  ],
};

const capacityAssessmentMockExam: MockExamStation = {
  id: 'capacity_assessment_amputation',
  title: 'Capacity Assessment — Refusing Amputation',
  diagnosis: 'Mental capacity intact; autonomous refusal of surgery',
  specialtyId: 'psychiatry',
  candidateBrief: {
    setting: 'You are an FY1 on a vascular surgery ward.',
    scenario:
      'Mr Frank Morrison, 68, has type 2 diabetes and peripheral vascular disease. He has developed wet gangrene of his right foot. The vascular surgical team have told him he requires a right below-knee amputation urgently to prevent fatal sepsis. He has refused the operation. His consultant has asked you to formally assess his mental capacity to refuse this procedure.',
    tasks: [
      'Formally assess Mr Morrison\'s mental capacity to refuse a below-knee amputation, using the Mental Capacity Act 2005',
      'Present your findings to the examiner, including your conclusion on capacity',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'Frank Morrison',
    age: 68,
    occupation: 'Retired builder',
    openingLine:
      '"You\'re here to try and change my mind, aren\'t you? I\'ve already told the surgeon — I won\'t have my leg cut off. I understand the risks. I\'m not stupid and I\'m not mad."',
    historyOfPresentingComplaint: [
      {
        label: 'Understanding — diagnosis: gangrenous right foot; tissue dying; blood supply gone',
        quote: '"The gangrene — I know. The tissue is dying because the blood supply has gone. The surgeon showed me the scan."',
      },
      {
        label: 'Understanding — proposed operation: right below-knee amputation under GA; rehabilitation and prosthesis',
        quote: '"They remove the lower leg below the knee. Under general anaesthetic. Then there\'s rehabilitation — walking with a prosthetic leg eventually, apparently." – "I understand all of it. I\'ve read about it."',
      },
      {
        label: 'Understanding — consequences of refusal: infection → sepsis → almost certain death within days to weeks',
        quote: '"The surgeon told me straight — if I don\'t have it done, the infection will spread, I\'ll become very ill, and I will almost certainly die within days to weeks." – "I\'ve heard that and I understand it."',
      },
      {
        label: 'Retention — accurately recalls all key information when tested after a pause',
        quote: '"The gangrene needs to come off to stop the infection killing me. The operation removes the leg below the knee. Without it I die. I know all this." [accurate and consistent]',
      },
      {
        label: 'Weighing — deeply held values about bodily integrity; informed by friend Billy\'s experience',
        quote: '"My best friend Billy lost his leg in 2018 — the same operation. He lived in a nursing home after that, couldn\'t do anything for himself. He was miserable every day until he died." – "I\'ve been a builder all my life. My body is who I am. I\'d rather die with both legs than live like that." – "I\'ve thought about this carefully. I know what I\'m choosing."',
      },
      {
        label: 'Weighing — has considered alternatives; surgeon confirmed none exist',
        quote: '"The surgeon told me there are no other options. IV antibiotics won\'t clear it — the tissue is already dead." – "I asked about saving the foot — he said it\'s beyond that."',
      },
      {
        label: 'Communication — decision clearly and consistently stated: refuses operation',
        quote: '"My decision is no. I refuse the operation. I\'ll say it however many times you need. No."',
      },
      {
        label: 'Psychiatric screen — not depressed; frightened of dying but not suicidal; no psychosis; cognitively intact',
        quote: '"I\'m not depressed. I\'m frightened of dying, yes, but I\'m not low in a clinical way. I\'m not hearing things or seeing things." – "I know what I\'m doing."',
      },
      {
        label: 'Coercion screen — son upset but no pressure or threats; decision entirely his own',
        quote: '"My son thinks I\'m making a terrible mistake — he\'s very upset. But nobody is forcing me or threatening me. This is entirely my own decision."',
      },
    ],
    pastMedicalHistory: [
      { label: 'Type 2 diabetes (longstanding)', quote: '"...the blood supply has gone." [implied from clinical scenario]' },
      { label: 'Peripheral vascular disease', quote: '"The surgeon showed me the scan."' },
    ],
    drugHistory: [],
    familyHistory: [],
    socialHistory: [
      { label: 'Retired builder (68); physical identity central to self-image', quote: '"I\'ve been a builder all my life. My body is who I am."' },
      { label: 'Son — distressed at decision but not coercive', quote: '"My son thinks I\'m making a terrible mistake — he\'s very upset."' },
    ],
    importantNegatives: [
      'No cognitive impairment ("I\'m as sharp as I\'ve ever been. Ask me anything.")',
      'No depression or suicidal ideation ("I don\'t want to die — I just don\'t want to live as an amputee. There\'s a difference.")',
      'No psychosis or delusional beliefs ("I\'m not hearing things. I\'m not being controlled by anyone.")',
      'No evidence of coercion ("My family want me to have it done. That\'s pressure to HAVE the operation, not against it.")',
      'No fluctuating consciousness or delirium ("I\'ve been alert and myself throughout.")',
    ],
    ice: {
      ideas:
        '"I understand the medical situation completely. My decision is based on my values, not ignorance."',
      concerns:
        '"My biggest concern is that people keep trying to override my decision — that I\'ll end up in theatre without having agreed to it."',
      expectations:
        '"I want my refusal to be documented and respected. I want my son to understand, even if he doesn\'t agree."',
    },
    onlyIfDirectlyAsked: [
      'Whether he has an advance directive — he does not, but his verbal refusal should be documented clearly',
      'Spiritual or religious beliefs — not religious; this is about quality of life and his self-image',
      'Whether he has been given time to reconsider — yes, he was told 24 hours ago and has not changed his mind',
    ],
    behaviourNotes: [
      'Defensive and firm at the start — expects to be pressured or to have his competence challenged',
      'Opens up significantly when the student explains they are there to understand his decision, not to overturn it',
      'Becomes slightly emotional when describing his friend Billy — brief; composed quickly',
      'Responds well to being treated with dignity and as an autonomous adult',
      'Will answer all four capacity test questions clearly and consistently — the student must ask them and document the answers',
      'The student MUST NOT try to persuade him to change his decision — this station tests the assessment of capacity, not breaking bad news or persuasion',
    ],
  },
  markScheme: [
    {
      domain: 'Opening the assessment',
      items: [
        { description: 'Introduces themselves and clearly explains the purpose of the visit — assessing capacity, not changing the decision', marks: 1 },
        { description: 'Washes hands; confirms identity', marks: 1 },
        {
          description:
            'Establishes that capacity is decision-specific and time-specific: states they are assessing capacity to refuse this specific procedure on this occasion',
          marks: 1,
        },
      ],
    },
    {
      domain: 'MCA 2005 — understanding',
      items: [
        {
          description: 'Tests understanding: asks patient to explain the diagnosis, what the operation involves, and the consequences of refusing',
          marks: 2,
        },
        {
          description: 'Confirms patient understands in accessible terms — without jargon; re-explains if needed',
          marks: 1,
        },
      ],
    },
    {
      domain: 'MCA 2005 — retention',
      items: [
        {
          description:
            'Tests retention: after an interval or distraction, asks patient to summarise the key information; confirms he retains it consistently',
          marks: 2,
        },
      ],
    },
    {
      domain: 'MCA 2005 — using and weighing',
      items: [
        {
          description: 'Explores reasoning: asks why he is refusing; establishes he can weigh the benefits and risks against his personal values',
          marks: 2,
        },
        {
          description: 'Establishes the decision is free from coercion — asks specifically about family or clinical pressure',
          marks: 1,
        },
      ],
    },
    {
      domain: 'MCA 2005 — communicating the decision',
      items: [
        {
          description: 'Confirms patient can communicate his decision clearly and consistently by any means',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Psychiatric and cognitive screen',
      items: [
        {
          description: 'Screens for depression, psychosis, and cognitive impairment that could affect capacity',
          marks: 1,
        },
        {
          description: 'Establishes patient is alert, oriented, and cognitively intact (not delirious or demented)',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Presenting the conclusion',
      items: [
        {
          description: 'Correctly concludes that Mr Morrison HAS capacity — meets all four criteria of the MCA 2005 test',
          marks: 2,
        },
        {
          description: 'States that a capable adult\'s informed refusal must be respected, regardless of clinical opinion',
          marks: 1,
        },
        {
          description: 'Explains documentation requirements: written record of assessment, witnessed refusal, and discussion with family (with patient consent)',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Key communication skills',
      items: [
        {
          description: 'Treats patient with dignity throughout — does not attempt to persuade or challenge his values',
          marks: 1,
        },
        { description: 'Summarising — recaps the assessment clearly at the close', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Mr Morrison is a 68-year-old retired builder with gangrenous right foot who is refusing a below-knee amputation — I was asked to formally assess his capacity to refuse this procedure under the Mental Capacity Act 2005',
    'He satisfies all four criteria: he UNDERSTANDS the information (accurately described the gangrene, the operation, and the fatal consequences of refusal); he RETAINS it (recalled consistently when tested); he WEIGHS it (reasoned decision based on quality-of-life values informed by his friend\'s experience); and he COMMUNICATES his decision clearly and consistently',
    'Psychiatric screen: no depression, no psychosis, no cognitive impairment, no delirium; he is fully alert and oriented; his decision is free from coercion',
    'His refusal is an autonomous exercise of his values about bodily integrity and quality of life — it does not need to be clinically rational to be valid',
    'Conclusion: Mr Morrison has mental capacity to refuse the below-knee amputation; his refusal is informed, consistent, and must be legally respected',
    'Next steps: document the assessment in writing; obtain a witnessed written refusal if possible; ensure the team has clearly communicated prognosis; involve a second clinician or ethics committee if further doubt; offer palliative support',
  ],
  vivaQuestions: [
    {
      question: 'What are the four criteria for mental capacity under the Mental Capacity Act 2005?',
      keyPoints: [
        'Understand the information relevant to the decision — must be given in accessible terms; complexity does not preclude capacity',
        'Retain the information long enough to make the decision — does not need to retain it permanently; short retention may still be sufficient',
        'Use or weigh the information as part of the decision-making process — must be able to consider pros and cons; decision does not need to be rational to others',
        'Communicate the decision by any means — speech, writing, gesture, AAC device',
        'All four criteria must be met; if any is impaired due to an impairment or disturbance of the mind, the patient lacks capacity for that decision at that time',
      ],
      source: 'Mental Capacity Act 2005, Section 3; MCA Code of Practice (2007)',
    },
    {
      question: 'What are the key principles of the Mental Capacity Act 2005?',
      keyPoints: [
        'Presumption of capacity: every adult is presumed to have capacity unless demonstrated otherwise',
        'Supported decision-making: all practicable steps must be taken to help a person make their own decision before concluding they lack capacity',
        'Unwise decisions: a person is not to be treated as lacking capacity merely because they make a decision others consider unwise',
        'Best interests: any act done or decision made for someone who lacks capacity must be in their best interests',
        'Least restrictive option: where possible, the least restrictive intervention should be used to achieve the desired outcome',
      ],
      source: 'Mental Capacity Act 2005, Section 1; MCA Code of Practice (2007)',
    },
    {
      question: 'If a patient lacks capacity to make a treatment decision, how is that decision made?',
      keyPoints: [
        'Best interests decision: the decision must be made in the patient\'s best interests — considers past wishes, values, and views of family/carers',
        'Lasting Power of Attorney (LPA) for health and welfare: if registered and activated, the attorney can make decisions on the patient\'s behalf',
        'IMCA (Independent Mental Capacity Advocate): must be involved for significant treatment decisions if the patient has no family or carers',
        'Court of Protection: for complex or disputed cases — can appoint a deputy and make declarations on capacity and best interests',
        'Advance decisions (living wills): a validly made advance decision to refuse treatment is legally binding even if the patient now lacks capacity',
      ],
      source: 'Mental Capacity Act 2005, Sections 4–9, 24–26; MCA Code of Practice (2007)',
    },
    {
      question: 'What is the difference between a patient who lacks capacity and a patient detained under the Mental Health Act?',
      keyPoints: [
        'MCA: applies to decisions about medical treatment for any condition where a person lacks capacity; does not authorise detention',
        'Mental Health Act 1983 (amended 2007): allows detention and compulsory treatment specifically for mental disorder only; applicable regardless of capacity',
        'A patient with capacity can refuse treatment under the MCA — but if they have a mental disorder requiring treatment in hospital, they may be detained under the MHA',
        'Deprivation of Liberty Safeguards (DoLS): under MCA, apply when a person lacking capacity needs to be detained in a hospital or care home for their own safety or treatment',
        'MHA cannot be used to impose treatment for physical illness (unless the physical illness is a direct consequence of the mental disorder)',
      ],
      source: 'Mental Capacity Act 2005; Mental Health Act 1983 (amended 2007); MCA Code of Practice (2007)',
    },
  ],
};

const suicideRiskMockExam: MockExamStation = {
  id: 'psych_suicide_risk',
  title: 'Psychiatric Risk Assessment — Suicidal Patient',
  diagnosis:
    'Moderate-to-high suicide risk — recurrent depressive disorder with active suicidal ideation, specific plan, and access to means',
  specialtyId: 'psychiatry',
  candidateBrief: {
    setting: 'You are an FY1 in the psychiatric liaison team in A&E.',
    scenario:
      "Kevin Marshall, a 44-year-old man, has been brought in by ambulance after his GP called 999 following a phone call in which Kevin said he \"couldn't go on\".",
    tasks: ['Assess Kevin\'s mental state and suicide risk, then present your risk formulation to the examiner.'],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'Kevin Marshall',
    age: 44,
    occupation: 'Unemployed carpenter (made redundant 4 months ago)',
    openingLine:
      '"I didn\'t want them to call an ambulance. I\'m fine. [long pause, looks at the floor] I just... I can\'t keep going like this. I don\'t know why I\'m here."',
    historyOfPresentingComplaint: [
      {
        label: 'Active suicidal ideation — present every day for 2 weeks, progressing from passive to active',
        quote:
          '"At first it was just... I\'d think, I\'d be better off dead. Everyone would be better off without me. But in the last week it\'s changed — I\'ve been thinking about actually doing it. About taking an overdose."',
      },
      {
        label: 'Specific plan — overdose of zopiclone sleeping tablets',
        quote:
          '"I\'ve got my sleeping tablets at home — zopiclone. I\'ve been saving them up. I\'ve got about 30 of them in the medicine cupboard."',
      },
      {
        label: 'Intent — has not yet acted but has made preparatory acts',
        quote:
          '"I haven\'t done it. But I wrote a letter. To my kids. [becomes tearful] I didn\'t... I just wanted them to know I loved them. And I gave my brother my dad\'s old watch — the one I always wanted him to have."',
      },
      {
        label: 'Reason for not acting — does not want to hurt his children',
        quote:
          '"The only thing stopping me is Jake and Mia. They\'re 10 and 12. I keep thinking what it would do to them. But then I think maybe they\'d be better off without me dragging everything down."',
      },
      {
        label: 'Depression symptoms — 2 months duration; anhedonia, early morning wakening, weight loss, hopelessness, social withdrawal',
        quote:
          '"I\'ve had no interest in anything for about two months. I used to love the woodwork, even just tinkering at home, but I can\'t face it. I wake up at about 3 in the morning and I just lie there with these thoughts. I\'ve lost about four kilos — food just doesn\'t appeal. And I feel hopeless. Like nothing will ever get better."',
      },
      {
        label: 'Alcohol use — escalated to approximately 6 units per day since redundancy',
        quote:
          '"I\'ve been drinking more since I lost my job. Maybe half a bottle of whisky a day — I know I shouldn\'t. I was like that before. It just numbs things."',
      },
      {
        label: 'Recent stressors — redundancy 4 months ago, relationship breakdown 3 months ago, social isolation',
        quote:
          '"I was made redundant in February — the company folded. Then Sarah — my partner — she left. Said she couldn\'t cope with how I\'d become. I\'m in the flat on my own. The kids are with her. I barely see them."',
      },
      {
        label: 'No previous suicide attempts or self-harm',
        quote: '"No, I\'ve never done anything like this before. Never hurt myself. This is the first time it\'s got this bad."',
      },
      {
        label: "MSE — appearance dishevelled; low eye contact; speech slow and monotone; mood 'terrible, I can't go on'; affect flat and congruent; no psychotic features; partial insight",
        quote:
          '"[Kevin appears unshaven, wearing creased clothes. He maintains poor eye contact throughout, looking at his hands or the floor. He speaks slowly with long pauses.] My mood? Terrible. I can\'t go on like this. [When asked about hearing voices or seeing things:] No, nothing like that. [When asked if he thinks he needs help:] I don\'t know. I don\'t really want to be in hospital. But I know something\'s wrong."',
      },
    ],
    pastMedicalHistory: [
      { label: 'No previous psychiatric admissions', quote: '"I\'ve never been in a psychiatric unit. I saw my GP for low mood about four years ago but it resolved on its own."' },
      { label: 'No significant physical health conditions', quote: '"Nothing physically wrong with me — I\'ve always been pretty healthy."' },
    ],
    drugHistory: [
      { label: 'Zopiclone 7.5 mg — prescribed for insomnia 3 months ago', quote: '"My GP gave me sleeping tablets — zopiclone. Three months ago. I\'ve been saving some up instead of taking them every night."' },
      { label: 'No other regular medications', quote: '"Nothing else. No antidepressants — my GP suggested them but I didn\'t want to start."' },
      { label: 'No known drug allergies', quote: '"No allergies."' },
    ],
    familyHistory: [
      { label: 'Father — depression and heavy alcohol use (died of cirrhosis age 58)', quote: '"My dad had depression — he drank heavily too. He died when I was 20 from his liver. That\'s part of why I\'m scared of where I\'m heading with the drink."' },
      { label: 'No family history of suicide', quote: '"He never tried to kill himself — it was the drink that got him."' },
    ],
    socialHistory: [
      { label: 'Unemployed carpenter — made redundant 4 months ago after company closed', quote: '"I was a carpenter — ran my own jobs for a small building firm. The company went under in February."' },
      { label: 'Separated from partner Sarah 3 months ago; two children aged 10 and 12 living with Sarah', quote: '"Sarah and I split up three months ago. The kids — Jake and Mia — they live with her. I see them every other weekend but even that\'s been hard recently."' },
      { label: 'Lives alone in a flat; estranged from brother', quote: '"I\'m on my own in the flat. Me and my brother had a falling out — I haven\'t spoken to him in a couple of weeks, not since I gave him the watch."' },
      { label: 'Non-smoker', quote: '"I don\'t smoke."' },
      { label: 'Alcohol — approximately 6 units daily, escalated from social drinking', quote: '"About half a bottle of whisky a day at the moment. I know it\'s a lot. I was just a social drinker before — a few pints at the weekend."' },
    ],
    importantNegatives: [
      'No psychotic features — no auditory or visual hallucinations ("No, I\'m not hearing voices or seeing things. I\'m not mad.")',
      'No command hallucinations to harm self ("There\'s nothing telling me to do it — it\'s just my own thoughts.")',
      'No history of previous suicide attempts ("I\'ve never done this before — never tried anything.")',
      'No previous self-harm ("I\'ve never hurt myself deliberately.")',
      'No current homicidal ideation ("I\'ve never wanted to hurt anyone else. Just myself.")',
      'No biological symptoms of mania — no reduced sleep with elevated mood, no grandiosity ("I\'m not high — I wish I was. It\'s the opposite.")',
      'No recent change in zopiclone dose or other new medications ("The dose has been the same — it\'s just me who\'s been saving them.")',
    ],
    ice: {
      ideas: '"I think I\'m just a burden. To the kids, to Sarah, to everyone. I think it would be easier for everyone if I wasn\'t here."',
      concerns:
        '"I\'m scared that I\'m going to do it. Part of me doesn\'t want to. But part of me is scared that one night I\'ll just... not be able to stop myself."',
      expectations: '"I don\'t know. Maybe I need help. I just don\'t want to be locked up."',
    },
    onlyIfDirectlyAsked: [
      'Kevin has been researching methods online — not just zopiclone ("I looked some things up online. I\'m not proud of it.")',
      'He has not told his ex-partner Sarah about his thoughts ("She doesn\'t know. She\'d be horrified. Or maybe relieved — I don\'t know anymore.")',
      'He called his GP this morning because a small part of him wanted to be stopped ("I think I called him because I wanted someone to stop me. I don\'t know.")',
    ],
    behaviourNotes: [
      'Kevin is withdrawn and guarded at the start — he resists being in A&E and makes minimal eye contact. He needs to feel safe before he opens up.',
      'He responds well to a calm, non-judgemental approach. If the student rushes or uses clinical jargon, Kevin should shut down: "I don\'t know what you mean" or fall silent.',
      'When asked directly about the letter to his children, Kevin becomes visibly tearful and may need a moment. The student should acknowledge this empathically before continuing.',
      'When asked about the tablets: Kevin hesitates before admitting he has been saving them. He says it quietly, not dramatically.',
      'Kevin will ask the student directly: "You\'re not going to lock me up, are you?" A good response acknowledges the concern, is honest about the process, and does not make promises. A poor response dismisses the question or gives false reassurance.',
      "Kevin's ambivalence is central — he called his GP, which shows a part of him wants help. If the student reflects this back to him, Kevin should soften: \"Yeah... I suppose I did call him.\"",
      'At the end of the station, if the student has been empathic and thorough, Kevin can say: "I\'m glad I came in. I think."',
    ],
  },
  markScheme: [
    {
      domain: 'Opening the consultation',
      items: [
        { description: 'Washes hands and introduces themselves by name and role', marks: 1 },
        { description: "Confirms patient's name and date of birth; acknowledges the difficult circumstances and thanks Kevin for attending", marks: 1 },
        { description: 'Explains the purpose of the assessment in accessible, non-stigmatising language and gains consent to proceed', marks: 1 },
      ],
    },
    {
      domain: 'Presenting complaint — opening and current mental state',
      items: [
        { description: "Uses an open question to invite Kevin to describe what has been happening in his own words", marks: 1 },
        { description: 'Explores the duration and progression of low mood over the preceding 2 months', marks: 1 },
        { description: 'Assesses core depressive symptoms: anhedonia, early morning wakening, weight change, hopelessness, and concentration', marks: 2 },
      ],
    },
    {
      domain: 'Suicidal ideation — systematic and sensitive exploration',
      items: [
        { description: 'Asks directly and sensitively about thoughts of suicide or not wanting to be alive', marks: 2 },
        { description: 'Distinguishes between passive suicidal ideation and active intent to act', marks: 1 },
        { description: 'Establishes the frequency and duration of suicidal thoughts (daily, 2 weeks)', marks: 1 },
      ],
    },
    {
      domain: 'Plan, means, and intent',
      items: [
        { description: "Asks specifically whether Kevin has a plan for how he would end his life", marks: 2 },
        { description: 'Establishes access to means — identifies the zopiclone tablets at home and quantifies them (approximately 30)', marks: 2 },
        { description: "Asks about preparatory acts and identifies the letter to his children and giving away his father's watch", marks: 2 },
        { description: 'Explores protective factors including his children as the primary anchor and his ambivalence (calling the GP)', marks: 1 },
      ],
    },
    {
      domain: 'Past psychiatric history and previous attempts',
      items: [
        { description: 'Asks about previous suicide attempts and self-harm and establishes there are none', marks: 1 },
        { description: 'Asks about previous contact with mental health services', marks: 1 },
      ],
    },
    {
      domain: 'Drug and alcohol history',
      items: [
        { description: 'Takes a full medication history including zopiclone and establishes the patient has been saving tablets', marks: 1 },
        { description: 'Quantifies alcohol use and identifies the escalation since redundancy', marks: 1 },
      ],
    },
    {
      domain: 'Social history and stressors',
      items: [
        { description: 'Explores recent life stressors and identifies redundancy, relationship breakdown, and social isolation', marks: 1 },
        { description: 'Establishes living situation (alone) and support network (limited)', marks: 1 },
      ],
    },
    {
      domain: 'Risk formulation — presentation to examiner',
      items: [
        { description: 'Presents a structured risk formulation identifying static and dynamic risk factors clearly', marks: 2 },
        { description: 'Identifies protective factors and articulates the risk level (moderate-to-high) with justification', marks: 2 },
        { description: 'Proposes an immediate safety plan including removal of means (zopiclone) and discusses admission or crisis team input', marks: 1 },
      ],
    },
    {
      domain: 'Key communication skills',
      items: [
        { description: 'Active listening — tolerates silences; does not rush Kevin; reflects emotional content back to him', marks: 1 },
        { description: 'Summarising — summarises the key points of the risk assessment clearly at the end', marks: 1 },
        { description: 'Signposting — prepares Kevin before moving to sensitive topics', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Kevin Marshall is a 44-year-old unemployed carpenter attending A&E following a call to his GP in which he expressed he could not go on.',
    'He describes a 2-month history of a depressive episode with anhedonia, early morning wakening at 3am, 4 kg weight loss, profound hopelessness, and social withdrawal.',
    'He has active suicidal ideation — daily for 2 weeks — progressing from passive to active, with a specific plan to overdose on zopiclone 7.5 mg, approximately 30 tablets at home.',
    'He has made preparatory acts: a written letter to his children and giving away a significant possession, indicating intent beyond ideation.',
    'Risk factors include: male sex, age 44, specific plan with access to means, preparatory acts, alcohol escalation to approximately 6 units daily, unemployment, relationship breakdown, social isolation, paternal depression, and hopelessness.',
    'Protective factors include: two young children (aged 10 and 12) as his primary anchor, his ambivalence and help-seeking (calling his GP), no previous attempts, and partial insight into his illness.',
    'My assessment is that Kevin presents a moderate-to-high risk. I would recommend urgent psychiatric review, immediate safety planning including removal of the zopiclone from his home, and likely admission or intensive community crisis team support.',
  ],
  vivaQuestions: [
    {
      question: 'What structured risk assessment tools can be used to assess suicide risk, and what are their limitations?',
      keyPoints: [
        'SAD PERSONS scale: Sex (male), Age (<19 or >45), Depression, Previous attempt, Ethanol use, Rational thinking loss, Social support lacking, Organised plan, No spouse, Sickness — score 0–10; simple but poor predictive validity for individual patients',
        'Columbia Suicide Severity Rating Scale (C-SSRS): widely validated; distinguishes ideation intensity (passive, active without plan, with plan, with intent) from behaviour (attempt, preparatory acts, self-harm)',
        'Manchester Self-Harm Rule: validated for repeat self-harm risk — identifies known psychiatric care, benzodiazepine use, previous self-harm, and current psychiatric treatment as predictors',
        'NICE NG225 (2022) cautions against using structured tools alone to stratify risk — clinical judgement and therapeutic relationship are essential',
        'No tool reliably predicts completed suicide at an individual level — all tools have high false-positive and false-negative rates',
        'Tools are best used as frameworks to structure a comprehensive clinical assessment rather than as algorithmic decision aids',
      ],
      source: 'NICE NG225 Self-harm: assessment, management and preventing recurrence (2022); Columbia C-SSRS (Posner et al., Am J Psychiatry 2011)',
    },
    {
      question: 'What are the key risk factors and protective factors for suicide?',
      keyPoints: [
        'Static risk factors: male sex, age (bimodal: 15–24 and >65), previous attempt (strongest single predictor), family history of suicide, chronic physical illness, psychiatric diagnosis (depression, schizophrenia, substance misuse, borderline personality disorder)',
        'Dynamic (modifiable) risk factors: active suicidal ideation with plan and means, hopelessness (stronger predictor than depression severity alone), alcohol and substance intoxication, recent significant loss, social isolation, unemployment',
        'High-lethality indicators: specific plan, access to lethal means, preparatory acts (letters, giving away possessions, arranging affairs), stating intent, inability to engage with safety planning',
        'Protective factors: strong social supports, responsibility for children or dependants, religious/cultural beliefs, engagement with healthcare, positive therapeutic relationship, reasons for living, ambivalence about dying',
        'The combination of hopelessness + specific plan + access to means represents the highest acute risk triad',
        'Alcohol significantly elevates acute risk by disinhibiting protective factors and impairing judgement — the risk is dynamic and fluctuates with intoxication level',
      ],
      source: 'NICE NG225 (2022); NICE CG90 Depression (updated 2022); Hawton et al., Lancet 2013',
    },
    {
      question: 'What are the key components of a safety plan for a patient with active suicidal ideation?',
      keyPoints: [
        'Warning signs: help patient identify personal triggers, thoughts, and feelings that precede a suicidal crisis',
        'Internal coping strategies: activities the patient can do alone to manage distress (distraction, breathing exercises, going for a walk)',
        'Social contacts for distraction: people and social settings that provide distraction — not for disclosure, just connection',
        'People to contact for support: trusted individuals (friend, family member) who know the situation and can help in a crisis',
        'Professional crisis contacts: crisis team number, Samaritans (116 123), A&E — with explicit instruction to use them',
        'Means restriction: removal or restriction of access to lethal means is one of the most evidence-based interventions — in this case, removing the zopiclone tablets from home (with family assistance or by prescribing smaller quantities)',
      ],
      source: 'NICE NG225 (2022); Stanley & Brown, Cognitive and Behavioral Practice 2012 (Safety Planning Intervention)',
    },
    {
      question: 'What are the criteria for compulsory admission under the Mental Health Act 1983 in England, and which section would you consider for this patient?',
      keyPoints: [
        'Section 2 MHA 1983: admission for assessment for up to 28 days; requires mental disorder warranting detention, necessary for the patient\'s health or safety or for protection of others, and cannot be arranged informally — requires two doctors (one approved under s12) and an Approved Mental Health Professional (AMHP)',
        'Section 3 MHA 1983: admission for treatment for up to 6 months; requires known mental disorder with appropriate treatment available; used when diagnosis is established',
        'Section 136 MHA 1983: police power to remove a person from a public place to a place of safety for assessment (up to 24 hours)',
        'For Kevin: if he refuses voluntary admission and is assessed to pose a serious risk to his life, Section 2 would be the most appropriate — his diagnosis is not yet formally established and he requires assessment',
        'Before compulsory admission, least restrictive alternatives must be considered: voluntary admission, crisis team (CRHT) support at home, crisis house, or day hospital',
        'Mental Capacity Act 2005 is distinct from MHA: if a patient with capacity refuses admission, MHA provides the legal framework to detain — capacity alone does not prevent MHA use if criteria are met',
      ],
      source: 'Mental Health Act 1983 (as amended 2007); NICE NG225 (2022); Mental Capacity Act 2005',
    },
  ],
};

const maniaPregnancyMockExam: MockExamStation = {
  id: 'psych_mania_pregnancy',
  title: 'Psychiatric History — Manic Episode in Pregnancy',
  diagnosis: 'Manic episode — bipolar I disorder, 18 weeks pregnant, stopped lamotrigine',
  specialtyId: 'psychiatry',
  candidateBrief: {
    setting: 'You are an FY1 in the psychiatric liaison service.',
    scenario:
      'Amy Thornton, 29, is 18 weeks pregnant and has been referred by her community midwife following concerns raised by her partner James about significant behavioural changes over the past 2 weeks. Amy has a background of bipolar I disorder. You have been asked to take a psychiatric history.',
    tasks: [
      'Take a focused psychiatric history from Amy',
      'Assess her mental state and identify the key risks',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'Amy Thornton',
    age: 29,
    occupation: 'Graphic designer',
    openingLine:
      '"I feel amazing, actually — better than I have in years. I don\'t really understand why James called the midwife. I\'ve been so productive." [smiling broadly, slightly breathless, speaking quickly]',
    historyOfPresentingComplaint: [
      {
        label: 'Mood — elated and euphoric; subjectively "the best I\'ve felt in years"; incongruent elevated affect',
        quote: '"Everything is brilliant right now. I feel like I\'ve finally cracked it." – "I know I\'m a bit full-on but honestly this is a good thing."',
      },
      {
        label: 'Sleep — 3 days without sleeping; does not feel tired',
        quote: '"I haven\'t really slept in about 3 days. But I don\'t feel tired at all — I don\'t need it right now." – "James keeps telling me to go to bed but I just can\'t switch off."',
      },
      {
        label: 'Racing thoughts and pressured speech — thoughts jumping quickly; difficult to interrupt during history',
        quote: '[Actor: speech is rapid, jumps between topics, difficult to interrupt] "I have so many ideas — they\'re coming faster than I can write them down. I\'ve got this app, and then I was thinking about the colour palette, and it links to this design philosophy I read about last year..." [continues unprompted]',
      },
      {
        label: 'Grandiosity — believes she is developing a revolutionary baby app that will "make millions"; unrealistic business plans',
        quote: '"I\'ve been designing this baby app — it\'s genuinely going to change parenting. Nobody has thought of this before. I\'ve been sending emails to investors at 3 in the morning." – "It\'s going to be worth millions."',
      },
      {
        label: 'Reckless spending — spent £3,000 in 2 weeks on baby equipment and business supplies',
        quote: '"I\'ve been ordering things for the nursery — and for the business. I may have spent a bit. About £3,000." [dismissively] "It\'s an investment."',
      },
      {
        label: 'Distractibility — unable to focus on one task; started multiple projects simultaneously',
        quote: '"I keep starting things and then moving on to the next idea. I have about 15 tabs open." – "James says I\'m chaotic but I prefer \'inspired\'."',
      },
      {
        label: 'Hypersexuality — increased sexual interest commented on by partner (student should ask sensitively)',
        quote: '[Only if directly asked about sexual behaviour changes]: "I\'ve been very... affectionate lately. James can\'t keep up." [laughs] "Is that a problem?"',
      },
      {
        label: 'Insight — limited; does not believe she is unwell; attributes all changes to pregnancy energy and creativity',
        quote: '"I don\'t think I\'m ill. I think I\'m just finally myself." – "The bipolar diagnosis was years ago. I\'ve been stable — I know what an episode feels like and this isn\'t it."',
      },
      {
        label: 'Lamotrigine stopped at 6 weeks — self-discontinued after reading about teratogenicity (cleft palate)',
        quote: '"I stopped my medication when I found out I was pregnant. I read that lamotrigine can cause cleft palate. I didn\'t want to harm the baby." – "I stopped it at about 6 weeks. I didn\'t tell my psychiatrist — I knew she\'d try to talk me out of it."',
      },
      {
        label: 'Last seen by psychiatrist — 3 months ago; was in remission at that appointment',
        quote: '"I saw Dr Patel 3 months ago. Everything was fine then." – "I was completely stable — she didn\'t change anything."',
      },
    ],
    pastMedicalHistory: [
      { label: 'Bipolar I disorder — diagnosed 4 years ago; 2 previous manic episodes requiring inpatient admission', quote: '"I was diagnosed about 4 years ago. I\'ve had two manic episodes before that needed hospital." – "But this is different. I\'m pregnant. I\'m not the same person I was."' },
      { label: '1 previous depressive episode — did not require inpatient admission', quote: '"I had a bad depression too — maybe 2 years ago. I didn\'t need to go in for that."' },
      { label: 'No psychotic features currently', quote: '"I\'m not hearing things or seeing things." [if asked directly about hallucinations]' },
      { label: '18 weeks pregnant — planned pregnancy with partner James; no obstetric complications so far', quote: '"It was planned. James and I have been together 4 years. The pregnancy has been fine." – "I had the 12-week scan — everything was normal."' },
    ],
    drugHistory: [
      { label: 'Lamotrigine 200 mg once daily — stopped at 6 weeks gestation without medical advice', quote: '"I was on lamotrigine — 200 mg. But I stopped it at 6 weeks. I know I should have talked to Dr Patel but I was scared."' },
      { label: 'Pregnancy multivitamins and folic acid', quote: '"Just vitamins. And folic acid."' },
      { label: 'No known drug allergies', quote: '"No allergies."' },
    ],
    familyHistory: [
      { label: 'Mother — bipolar II disorder', quote: '"My mum has bipolar — she\'s bipolar II." [if directly asked]' },
      { label: 'No family history of schizophrenia', quote: '"Nobody else that I know of."' },
    ],
    socialHistory: [
      { label: 'Lives with partner James; supportive relationship; James is concerned about Amy', quote: '"We live together. James is brilliant but he\'s really worried. He\'s not wrong that things have been... intense."' },
      { label: 'Non-smoker; no alcohol (pregnancy); no illicit drug use', quote: '"No smoking. Not drinking — because of the pregnancy. No drugs."' },
      { label: 'Self-employed graphic designer; currently not taking on client work (distracted by app project)', quote: '"I\'m self-employed. I haven\'t taken on much client work recently because of the app." [if asked about work]' },
    ],
    importantNegatives: [
      'No auditory or visual hallucinations ("I\'m not hearing or seeing things that aren\'t there.")',
      'No formal thought disorder (racing thoughts and tangential thinking present but goal-directed when pressed)',
      'No suicidal ideation ("No — absolutely not. I feel the opposite of that.")',
      'No homicidal ideation ("Nothing like that.")',
      'No persecutory delusions ("I don\'t feel like anyone is out to get me.")',
      'No illicit substance use ("I\'m pregnant — I wouldn\'t.")',
    ],
    ice: {
      ideas: '"I think I\'m finally living my best life. I don\'t think anything is wrong — I think James is overreacting."',
      concerns: '"I\'m a bit worried about money if James takes over the finances. And I don\'t want to go back on medication and harm the baby."',
      expectations: '"I want you to tell James I\'m fine. And I want information about whether my medication is actually safe in pregnancy."',
    },
    onlyIfDirectlyAsked: [
      'Whether she has spent money she cannot afford — "£3,000 on a credit card. James doesn\'t know the half of it."',
      'Whether she has sent emails or messages she regrets — "Maybe a few. To clients. They might have been a bit... direct."',
      'Whether she has driven recently — "Yes. I\'ve been driving a lot at night. James doesn\'t know."',
    ],
    behaviourNotes: [
      'Elated, bright, quickly engaged; speech is pressured and difficult to interrupt — actor should keep talking unless student firmly and politely redirects',
      'Does not believe she is unwell; framing everything positively; becomes slightly irritable if the student challenges her diagnosis too directly early on',
      'Responds better to collaborative exploration than confrontation: "I\'d like to understand more about how you\'ve been feeling — can you tell me about your sleep?"',
      'Grandiose themes should be consistent throughout; the app is her main preoccupation',
      'If the student asks sensitively about the lamotrigine decision, Amy explains her reasoning — she stopped it out of genuine concern for the baby, not irresponsibility',
      'Becomes slightly more reflective when the student explains the risks of untreated mania in pregnancy to her and the baby',
    ],
  },
  markScheme: [
    {
      domain: 'Opening the consultation',
      items: [
        { description: 'Introduces themselves; clarifies the purpose of the assessment in a non-threatening way', marks: 1 },
        { description: 'Establishes rapport before diving into symptoms — acknowledges Amy\'s view that she feels well', marks: 1 },
      ],
    },
    {
      domain: 'History of presenting complaint — manic features',
      items: [
        { description: 'Asks about mood — identifies elated, euphoric, and sustained elevation', marks: 1 },
        { description: 'Asks about sleep — identifies 3 days without sleeping and decreased need for sleep (not insomnia)', marks: 1 },
        { description: 'Identifies increased energy, increased goal-directed activity, and reduced ability to complete tasks', marks: 1 },
        { description: 'Identifies grandiose beliefs — the app will "make millions"; unrealistic plans', marks: 1 },
        { description: 'Asks about reckless behaviour — identifies excessive spending (£3,000 in 2 weeks)', marks: 1 },
        { description: 'Asks about hypersexuality and disinhibited behaviour', marks: 1 },
      ],
    },
    {
      domain: 'Mental state examination',
      items: [
        { description: 'Assesses affect — identifies elated, incongruent, and pressured speech during the interview', marks: 1 },
        { description: 'Screens for psychotic features: hallucinations and delusions (grandiose vs. persecutory)', marks: 1 },
        { description: 'Assesses insight — identifies limited insight; Amy does not believe she is unwell', marks: 1 },
      ],
    },
    {
      domain: 'Medication and psychiatric history',
      items: [
        { description: 'Asks about current and previous medications — identifies lamotrigine 200 mg stopped at 6 weeks', marks: 1 },
        { description: 'Explores reason for stopping medication — fear of cleft palate teratogenicity; did not inform psychiatrist', marks: 1 },
        { description: 'Asks about previous episodes — 2 manic episodes requiring admission; 1 depressive episode', marks: 1 },
      ],
    },
    {
      domain: 'Risk assessment',
      items: [
        { description: 'Assesses suicide and self-harm risk explicitly', marks: 1 },
        { description: 'Assesses risk to others — including risks from disinhibition (driving at night, reckless spending, sexual risk)', marks: 2 },
        { description: 'Considers risk to the unborn baby — implications of maternal mania and untreated bipolar disorder in pregnancy', marks: 1 },
      ],
    },
    {
      domain: 'Closing the consultation',
      items: [
        { description: 'Summarises findings back to Amy in a non-confrontational way', marks: 1 },
        { description: 'Explains need for urgent psychiatric review and discussion with her perinatal psychiatry team', marks: 1 },
      ],
    },
    {
      domain: 'Key communication skills',
      items: [
        { description: 'Active listening — follows Amy\'s rapid speech without shutting her down; redirects gently', marks: 1 },
        { description: 'Maintains a non-judgemental, collaborative tone throughout', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Amy is a 29-year-old graphic designer, 18 weeks pregnant, with a background of bipolar I disorder; referred by her midwife following partner-reported behavioural change over 2 weeks',
    'The presentation is consistent with a manic episode: elated mood, 3 days without sleep (decreased need for sleep — not insomnia), pressured speech, grandiosity, reckless spending (£3,000 in 2 weeks), hypersexuality, and distractibility with multiple unfinished projects',
    'Key precipitant: Amy self-discontinued lamotrigine 200 mg at 6 weeks gestation due to concerns about cleft palate teratogenicity, without informing her psychiatrist; she has been unmedicated for 12 weeks',
    'Mental state: elated affect; pressured speech difficult to interrupt; flight of ideas; grandiose beliefs about the app; no hallucinations; no persecutory delusions; limited insight — does not believe she is unwell',
    'Risk: no suicidal ideation; significant risk from disinhibition — night driving, excessive spending on credit, sending unprofessional emails to clients; risk to the pregnancy from untreated mania and future pharmacological decisions',
    'Management: urgent referral to perinatal psychiatry; risk management with partner; discussion of safest mood stabiliser in pregnancy (lamotrigine has lowest teratogenic risk of the main agents); consider informal admission if risk cannot be managed in the community; safeguarding assessment for unborn child',
  ],
  vivaQuestions: [
    {
      question: 'What are the pharmacological options for managing bipolar disorder in pregnancy, and what are the teratogenic risks?',
      keyPoints: [
        'Sodium valproate: CONTRAINDICATED in pregnancy — 10% major congenital malformations, 30–40% neurodevelopmental disorders; MHRA Black Triangle; must not be prescribed to women of childbearing potential without a Pregnancy Prevention Programme',
        'Lithium: risk of Ebstein\'s anomaly (tricuspid valve malformation) — absolute risk small (~0.1-0.2%); requires careful monitoring; therapeutic drug monitoring essential; risk of neonatal toxicity ("floppy baby syndrome")',
        'Lamotrigine: lowest teratogenic risk of the main mood stabilisers; small risk of oral cleft (1–2/1000 vs. 0.37/1000 background); preferred agent in pregnancy for many women with bipolar disorder; dose requires increase in pregnancy (increased renal clearance)',
        'Quetiapine/olanzapine: atypical antipsychotics used in acute mania in pregnancy — no clear teratogenicity but risk of gestational diabetes, neonatal withdrawal; may be preferred for acute treatment',
        'All decisions involve shared risk-benefit discussion: risk of untreated bipolar mania in pregnancy (relapse, postpartum psychosis, risk to fetus) vs. pharmacological risk',
      ],
      source: 'NICE NG185 (Bipolar disorder: assessment and management, 2014 updated 2023); MHRA Drug Safety Update — Valproate and pregnancy (2018)',
    },
    {
      question: 'What are the criteria for involuntary admission under the Mental Health Act 1983, and would they apply here?',
      keyPoints: [
        'Section 2 MHA 1983: admission for assessment; up to 28 days; requires mental disorder warranting detention for assessment; necessary for safety of patient or others; informal admission not appropriate or refused',
        'Section 3 MHA 1983: admission for treatment; up to 6 months; requires mental disorder treatable in hospital; necessary for safety of patient or others; appropriate treatment available',
        'Application to Amy: she has limited insight and refuses to acknowledge she is unwell; if she cannot be safely managed in the community (driving, reckless spending, risk to self and pregnancy) and refuses voluntary admission, Section 2 may be appropriate',
        'Pregnancy does not create additional grounds for detention — it cannot override the statutory criteria',
        'Nearest relative must be consulted (with section 3); nearest relative can be overridden by the courts if unreasonably objecting',
      ],
      source: 'Mental Health Act 1983 (amended 2007); NICE NG185 (2023); Royal College of Psychiatrists CR232',
    },
    {
      question: 'What is the risk of postpartum psychosis in a woman with bipolar I disorder, and how should it be managed?',
      keyPoints: [
        'Postpartum psychosis: severe psychiatric emergency occurring within days to weeks of delivery; affects approximately 1-2 per 1000 deliveries overall',
        'Risk in bipolar I disorder: approximately 25-50% of women with bipolar I will have a postpartum episode; risk substantially higher if they have a personal or family history of postpartum psychosis',
        'Features: acute onset; confusion, disorientation, hallucinations, delusions, labile mood, sleep disturbance; may progress rapidly',
        'Management: requires inpatient admission — ideally mother and baby unit (MBU) to preserve bonding; mood stabilisers +/- antipsychotics; breastfeeding guidance if on lithium; specialist perinatal psychiatric team essential',
        'Prophylaxis: discuss lithium prophylaxis from 36 weeks or immediately post-delivery in high-risk women; perinatal psychiatry must be involved antenatally',
      ],
      source: 'NICE NG185 (2023); Royal College of Psychiatrists: Perinatal Psychiatry (PS05, 2015); SIGN 131 (Perinatal Mental Health, 2012)',
    },
  ],
};

export const PSYCH_MOCK_EXAMS: MockExamStation[] = [
  alcoholAnxietyMockExam,
  lithiumCounsellingMockExam,
  mseManiaMockExam,
  capacityAssessmentMockExam,
  suicideRiskMockExam,
  maniaPregnancyMockExam,
];
