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
    backgroundInfo:
      'Tom is a 28-year-old office administrator who presents slightly defensive and embarrassed after last night\'s A&E attendance. He drinks approximately 40 units per week but does not see this as a serious problem. He has had social anxiety since he was a teenager, following persistent bullying at secondary school, and uses alcohol as a "social lubricant" — he cannot imagine going to a party or social event without drinking beforehand. He is developing features of alcohol dependence: morning tremor on days without alcohol, and an occasional early-morning drink before work to steady his hands. His flat-mate has expressed concern, which he has dismissed. He becomes progressively more open and honest if the student is non-judgemental.',
    historyToReveal: [
      {
        topic: 'Presenting complaint — last night',
        response:
          '"I went to my friend\'s birthday last night. I had a few drinks at home before — about three beers — then had more there. On the way home I tripped on a kerb and landed on my wrist. They did an X-ray, it\'s fine." – "I wouldn\'t say I was drunk. Okay, maybe I had a bit much."',
      },
      {
        topic: 'Alcohol — quantity and frequency',
        response:
          '"Most days, I suppose. Maybe 5 or 6 days a week." – "On a normal weeknight I have a few cans at home — maybe 4 or 5. At weekends when I\'m out it\'s more, maybe 10 or 12 units on a big night."',
      },
      {
        topic: 'Alcohol — pattern and triggers',
        response:
          '"I always have a drink before I go out somewhere social — just to calm my nerves. Without it I feel really on edge." – "At home it\'s more habit. It helps me wind down and switch my brain off."',
      },
      {
        topic: 'CAGE — Cut down attempts',
        response:
          '"I\'ve said to myself I\'ll cut back, yeah. I manage it for a day or two sometimes. But then a work thing comes up or I get invited somewhere and it just doesn\'t happen."',
      },
      {
        topic: 'CAGE — Annoyed by criticism',
        response:
          '"My flat-mate keeps nagging me about it. He said I drink too much. I told him to mind his own business, to be honest."',
      },
      {
        topic: 'CAGE — Guilty feelings',
        response:
          '"Sometimes. After a really heavy one I wake up feeling a bit pathetic about it." [pause] "I don\'t love that I need it to feel normal."',
      },
      {
        topic: 'CAGE / dependence — Eye opener',
        response:
          '"...sometimes, yeah." [reluctant, embarrassed] "If I wake up and my hands are shaking I might have a small beer to take the edge off before work. Not always, just sometimes."',
      },
      {
        topic: 'Dependence — morning tremor and withdrawal symptoms',
        response:
          '"My hands shake when I wake up, on days when I haven\'t drunk the night before. And I get really sweaty and anxious." – "Once I have a drink it goes away."',
      },
      {
        topic: 'Anxiety history — onset and triggers',
        response:
          '"I\'ve been anxious since school, really. I got badly bullied in year 9 and 10 — proper nasty stuff. After that I just felt like everyone was watching me and judging me." – "I hate going anywhere new or where I don\'t know people. Even in meetings at work I feel like I\'m going to have a panic attack."',
      },
      {
        topic: 'Anxiety — physical symptoms',
        response:
          '"My heart races, I start sweating, my mouth goes dry. Sometimes I feel dizzy." – "And I just think everyone is looking at me and thinking I\'m an idiot."',
      },
      {
        topic: 'Anxiety — impact on daily life',
        response:
          '"I\'ve turned down jobs because of the interviews. I cancelled a friend\'s wedding because I couldn\'t face it." – "Basically, anything social I either drink first or avoid."',
      },
      {
        topic: 'Alcohol as anxiety self-medication',
        response:
          '"It works, though — that\'s the thing. When I drink, the anxiety just disappears. I feel like a normal person. I can actually talk to people." – "Without it I\'m a nervous wreck at anything social."',
      },
      {
        topic: 'Past medical history',
        response:
          '"Nothing. I\'ve never been to a GP about the anxiety — I didn\'t see the point." – "I had a few black eyes from the bullying but nothing medical."',
      },
      {
        topic: 'Medications',
        response: '"Nothing. I take ibuprofen sometimes for headaches." – "No allergies."',
      },
      {
        topic: 'Family history',
        response:
          '"My dad drinks a lot. He\'s always had a few drinks every night for as long as I can remember." – "No other health problems that I know of."',
      },
      {
        topic: 'Social history',
        response:
          '"I live in a shared flat. I work as an admin assistant — been there about 3 years. I manage okay, mostly." – "I don\'t smoke. I haven\'t tried drugs — alcohol does the job."',
      },
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
    backgroundInfo:
      'David is a 58-year-old retired secondary school teacher. He is intelligent and articulate but anxious and distressed — this is the first time his daughter has been seriously unwell, and he found the manic episode frightening and bewildering. He has done extensive internet research which has given him an alarming and incomplete picture of lithium. He lives with his wife and Emma will be coming home to stay with them on discharge. He is not hostile — he becomes progressively reassured when given clear, honest information. He genuinely wants to understand lithium so he can support Emma at home, and he needs to know what warning signs to look for. He is aware Emma has consented to him being involved.',
    historyToReveal: [
      {
        topic: 'Opening concern — online information',
        response:
          '"I looked it up online and it said lithium can cause permanent kidney damage and that the levels in the blood can become toxic." – "One forum said it can kill you if it goes too high. Is that actually true?"',
      },
      {
        topic: 'Question — what is lithium used for?',
        response:
          '"I know it\'s something to do with her mood, but the doctors spoke to Emma about it and I wasn\'t there. Can you explain to me what it actually does and why she needs it?" – "Is this going to be for life?"',
      },
      {
        topic: 'Question — why not something safer?',
        response:
          '"Are there no other tablets she could take that are safer? It seems like a very dangerous medication." – "I\'ve heard of others with bipolar who aren\'t on lithium."',
      },
      {
        topic: 'Question — monitoring',
        response:
          '"They mentioned she\'ll need regular blood tests. How often? And what exactly are they checking for?" – "She\'s not always great at remembering appointments."',
      },
      {
        topic: 'Question — side effects',
        response:
          '"What side effects should we expect? The website said she might shake and put on weight — is that definitely going to happen?" – "She\'s already upset about how she looks after being in hospital."',
      },
      {
        topic: 'Question — signs of toxicity and what to do',
        response:
          '"How do I know if the levels have got too high? What do I look out for at home?" – "And what do I do if I\'m worried about her?"',
      },
      {
        topic: 'Question — things to avoid',
        response:
          '"Is there anything she shouldn\'t take or eat?" – "She takes ibuprofen quite regularly for period pain. Is that okay?"',
      },
      {
        topic: 'Question — long-term outlook',
        response:
          '"Will she have to be on this forever? Can she ever come off it?" – "And can she lead a normal life? Work? Have children one day?"',
      },
      {
        topic: 'Question — lithium card',
        response:
          '"They mentioned something about a card she should carry. What is that?" – "I\'ll make sure she keeps it with her."',
      },
    ],
    importantNegatives: [
      'Does not challenge the diagnosis ("I understand she has bipolar — the consultant explained that, I\'m not questioning that.")',
      'Does not know Emma\'s specific lithium dose or current serum level — the student should not share these specific clinical details without Emma\'s explicit consent for each item',
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
    backgroundInfo:
      'Claire is 35 years old and has never had a psychiatric episode before. She has not slept more than 1–2 hours for 7 days, has spent £4,200 on crystals and equipment for her "healing practice", and has been neglecting meals. Her husband brought her in after she attempted to leave the house at 3 am to "begin her healing mission". She is dressed in a bright red floor-length dress with multiple necklaces; her hair is dishevelled. She is animated, disinhibited, and speaks rapidly. She has no insight into her illness and believes she is completely well. She becomes briefly irritable if the student challenges her beliefs directly. She has no prior psychiatric history, no current medications, and no illicit drug use.',
    historyToReveal: [
      {
        topic: 'MSE — Appearance and behaviour',
        response:
          '[Actor presents]: bright red dress with multiple necklaces; dishevelled hair; animated facial expression; makes intense eye contact; moves around in seat; speaks before student finishes questions; laughs unprompted; disinhibited (tries to hold examiner\'s hand to "send healing energy")',
      },
      {
        topic: 'MSE — Speech (rate, rhythm, volume)',
        response:
          '[Actor presents]: markedly pressured speech — rapid, loud, difficult to interrupt; jumps between topics (flight of ideas); rhymes or puns occasionally; student needs to raise voice slightly to redirect',
      },
      {
        topic: 'MSE — Mood (subjective)',
        response:
          '"I feel absolutely incredible — electric, powerful. Like I\'ve finally woken up and found my purpose." [not distressed, not sad]',
      },
      {
        topic: 'MSE — Affect (objective)',
        response:
          '[Actor presents]: elated/expansive affect; labile — briefly irritable if beliefs challenged ("You wouldn\'t understand"), then returns to elated; incongruent with the clinical concern',
      },
      {
        topic: 'MSE — Thought form',
        response:
          '[Actor presents]: flight of ideas — rapid loosely connected associations ("healing energy → crystals → hospitals need crystals → you look tired, do you need healing → my husband doesn\'t believe me but he will"); circumstantial; difficult to redirect; no thought block or formal thought disorder',
      },
      {
        topic: 'MSE — Thought content',
        response:
          '"I have been chosen. I can sense the energy of illness in people and draw it out. I\'ve already healed three of my neighbours." — grandiose delusion (special powers/mission); no suicidal ideation; no homicidal ideation; brief paranoid flavour if challenged: "Why does everyone try to stop me? My husband called me crazy."',
      },
      {
        topic: 'MSE — Perception',
        response:
          '"Sometimes I see golden light around people — it\'s their healing aura." — possible visual pseudo-hallucinations or over-valued ideas; if probed further: "It\'s not like a ghost — I just perceive it. It\'s my gift."',
      },
      {
        topic: 'MSE — Cognition',
        response:
          '[Actor]: fully oriented to time, place, and person; attention impaired (easily distracted mid-sentence); serial 7s — gets to 93 then loses track; short-term registration OK but working memory impaired due to distractibility',
      },
      {
        topic: 'MSE — Insight',
        response:
          '"I\'m not ill. I\'ve never been better in my life. My husband is jealous of my gifts — that\'s why he brought me here." — absent insight',
      },
      {
        topic: 'MSE — Risk',
        response:
          '"No, I\'m not going to hurt myself — why would I? I\'m on a mission." — denies suicidal or self-harm ideation; describes impulsive risk-taking: tried to leave house at 3 am, gave away jewellery to neighbours, spent £4,200 in two days',
      },
      {
        topic: 'History — sleep',
        response: '"I don\'t need sleep — sleep is for people who aren\'t fully awakened. Maybe 1 or 2 hours a night this past week."',
      },
      {
        topic: 'History — past psychiatric history',
        response: '"None. I\'ve never seen a psychiatrist in my life." – "This is the first time anything like this has happened."',
      },
      {
        topic: 'History — drugs and alcohol',
        response: '"I don\'t take drugs. I gave up alcohol 6 months ago actually — it was lowering my vibrational frequency."',
      },
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
    backgroundInfo:
      'Frank is a 68-year-old retired builder with longstanding type 2 diabetes and peripheral vascular disease. He is fully alert, oriented, and cognitively intact. He has read about the surgery online and has spoken to the vascular team; he understands that refusing amputation is likely to lead to his death from sepsis. His refusal is based on deeply held values about quality of life and bodily integrity — he watched his friend lose a leg and spend his final years in a nursing home, and he says he would rather die with his body intact than live as an amputee. He is not depressed and does not have a death wish. He has CAPACITY TO REFUSE. His decision must ultimately be respected. He is defensive at first (expects to be pressured) but becomes more open if the student explains they are there to understand his decision, not to change it.',
    historyToReveal: [
      {
        topic: 'Understanding — what is the problem with his foot?',
        response:
          '"The gangrene — I know. The tissue is dying because the blood supply has gone. The surgeon showed me the scan." – "Without the operation, the infection spreads and I\'ll go into sepsis and die. I understand that."',
      },
      {
        topic: 'Understanding — what does the amputation involve?',
        response:
          '"They remove the lower leg below the knee. Under general anaesthetic. Then there\'s rehabilitation — walking with a prosthetic leg eventually, apparently." – "I understand all of it. I\'ve read about it."',
      },
      {
        topic: 'Understanding — what are the risks of refusing?',
        response:
          '"The surgeon told me straight — if I don\'t have it done, the infection will spread, I\'ll become very ill, and I will almost certainly die within days to weeks." – "I\'ve heard that and I understand it."',
      },
      {
        topic: 'Retention — can he recall the information?',
        response:
          '[When asked to summarise his understanding after a pause]: "The gangrene needs to come off to stop the infection killing me. The operation removes the leg below the knee. Without it I die. I know all this." [accurate and consistent]',
      },
      {
        topic: 'Weighing — reasoning behind the decision',
        response:
          '"My best friend Billy lost his leg in 2018 — the same operation. He lived in a nursing home after that, couldn\'t do anything for himself. He was miserable every day until he died." – "I\'ve been a builder all my life. My body is who I am. I\'d rather die with both legs than live like that." – "I\'ve thought about this carefully. I know what I\'m choosing."',
      },
      {
        topic: 'Weighing — has he considered alternatives?',
        response:
          '"The surgeon told me there are no other options. IV antibiotics won\'t clear it — the tissue is already dead." – "I asked about saving the foot — he said it\'s beyond that."',
      },
      {
        topic: 'Communication — ability to communicate decision',
        response: '"My decision is no. I refuse the operation. I\'ll say it however many times you need. No."',
      },
      {
        topic: 'Mood and psychiatric screen',
        response:
          '"I\'m not depressed. I\'m frightened of dying, yes, but I\'m not low in a clinical way. I\'m not hearing things or seeing things." – "I know what I\'m doing."',
      },
      {
        topic: 'Any pressure or coercion from family?',
        response:
          '"My son thinks I\'m making a terrible mistake — he\'s very upset. But nobody is forcing me or threatening me. This is entirely my own decision." – "If anything, I wish they would stop trying to change my mind."',
      },
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

export const PSYCH_MOCK_EXAMS: MockExamStation[] = [
  alcoholAnxietyMockExam,
  lithiumCounsellingMockExam,
  mseManiaMockExam,
  capacityAssessmentMockExam,
];
