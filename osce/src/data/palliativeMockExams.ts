import type { MockExamStation } from './mockExamTypes';

const endOfLifeStrokeMockExam: MockExamStation = {
  id: 'end_of_life_stroke',
  title: 'End-of-Life Communication — Relative of Stroke Patient on Life Support',
  diagnosis: 'Catastrophic brainstem stroke — irreversible; end-of-life care',
  specialtyId: 'palliative',
  candidateBrief: {
    setting: 'You are an FY1 on the Intensive Care Unit.',
    scenario:
      'Linda Harrison, 63, is the wife of Peter Harrison, 65, who was admitted to the ICU 3 days ago following a catastrophic pontine haemorrhage. Peter is ventilated and deeply comatose. The neurosurgical team have assessed him and concluded that there is no possibility of meaningful neurological recovery. Brainstem death testing is planned for later today. Linda has been by Peter\'s bedside and has asked to speak with a doctor to understand what is happening.',
    tasks: [
      'Talk to Mrs Harrison about Peter\'s condition and prognosis',
      'Explain the plan, including brainstem death testing and the next steps in his care',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'Linda Harrison',
    age: 63,
    occupation: 'Retired administrator (Peter\'s wife)',
    openingLine:
      '"I\'ve been sitting with him for three days. Nobody has properly explained to me what\'s happening. I can see the machines are doing everything — he\'s not breathing on his own at all, is he?" [frightened but controlled]',
    historyOfPresentingComplaint: [
      {
        label: 'Current understanding — knows it was a massive brain bleed; has not been told prognosis clearly',
        quote: '"I know it was a massive bleed in his brain — the surgeon explained that part. But when I ask if he\'s going to be okay, they all just look at me." – "I think I know the answer but I can\'t bring myself to say it."',
      },
      {
        label: 'Reaction to hearing prognosis — brief tearful; then quiet and controlled',
        quote: '[After student gently confirms there is no possibility of recovery]: [silent for a moment; eyes fill with tears] "I knew. I think I\'ve known since the first day." [voice breaks briefly; then quiet, controlled] "Okay. Thank you for telling me honestly."',
      },
      {
        label: 'Question: what is brainstem death? Is he already gone legally?',
        quote: '"What does brainstem death mean? Does that mean he\'s already gone?" – "If the brain is dead, is he already dead — legally?"',
      },
      {
        label: 'Question: will he be in pain when the ventilator is stopped?',
        quote: '"This is the thing that\'s been worrying me so much. If they turn off the machine — will he suffer?" – "He won\'t feel like he\'s drowning or gasping?"',
      },
      {
        label: 'Question: can son David be present; can they wait until he arrives from Scotland?',
        quote: '"Can I be with him? And our son is coming — he\'s driving down from Scotland. Can we wait until David gets here?" – "I don\'t want Peter to die alone."',
      },
      {
        label: 'Peter\'s known wishes — would not want to be kept alive by machines; said so explicitly after his father died',
        quote: '"He always said — after his father died — that he would never want to be kept alive by machines if there was no hope. He used to say, \'just let me go, Lindy\'." – [quietly] "I didn\'t want to say it in case you thought I was giving up on him."',
      },
      {
        label: 'Question: organ donation — uncertain of Peter\'s wishes; uncertain if he was registered',
        quote: '"Someone mentioned organ donation briefly. I don\'t know what Peter would have wanted. We never talked about it." – "Is it something we have to decide today?"',
      },
      {
        label: 'Question: will it be a peaceful death?',
        quote: '"I just want him to be comfortable and peaceful at the end. He was such a gentle man." – [quietly emotional]',
      },
    ],
    pastMedicalHistory: [
      { label: 'Peter — hypertension (on amlodipine)', quote: '"He had high blood pressure — he was on a tablet for it." [only if directly asked]' },
      { label: 'No advance directive or ADRT in place', quote: '"We never got round to writing anything down."' },
      { label: 'Not on NHS Organ Donor Register that she knows of', quote: '"I\'m not sure — he never showed me a card."' },
    ],
    drugHistory: [],
    familyHistory: [],
    socialHistory: [
      { label: 'Married 39 years to Peter (65); adult son David (35) driving from Scotland', quote: '"Our son is coming — he\'s driving down from Scotland."' },
      { label: 'Peter — smoked 10 cigarettes/day for 30 years (only if asked)', quote: '[Only if directly asked]' },
      { label: 'Linda has had virtually no sleep for 3 days — "Maybe a few hours. I can\'t leave him."', quote: '"Maybe a few hours. I can\'t leave him." [only if asked]' },
    ],
    importantNegatives: [
      'No advance directive or ADRT in place ("We never got round to writing anything down.")',
      'Peter is not on the NHS Organ Donor Register that she knows of ("I\'m not sure — he never showed me a card.")',
      'No other family members with decision-making authority — son is on his way',
    ],
    ice: {
      ideas: '"I think he\'s dying. I think you\'re about to tell me that he\'s not going to wake up."',
      concerns:
        '"I\'m terrified he\'ll be in pain when they turn the machine off. And I\'m terrified of letting him down — of making the wrong decision."',
      expectations:
        '"I need someone to explain what\'s happening and what happens next. And to tell me he won\'t suffer."',
    },
    onlyIfDirectlyAsked: [
      'Peter\'s health before admission — had hypertension; was on amlodipine; smoked 10 cigarettes a day for 30 years',
      'Whether she has had any sleep — "Maybe a few hours. I can\'t leave him."',
      'Spiritual or religious needs — "We\'re not church-goers but I\'d like the hospital chaplain to come. Would that be possible?"',
    ],
    behaviourNotes: [
      'Frightened and exhausted but controlled; she has been expecting this conversation and has mentally prepared',
      'Becomes tearful when the prognosis is confirmed; brief; composes herself and becomes quietly practical',
      'The student should give Linda space and silence after delivering the news — do not rush to fill the silence',
      'Responds with profound relief when told that Peter\'s comfort will be maintained and he will not suffer',
      'Asks "Can we wait for David?" — student should confirm yes, the timeline is flexible; the priority is the family being together',
      'Volunteers Peter\'s stated wishes about not wanting machines — student should acknowledge and validate this as important information for the best interests decision',
      'If the student is clinical, rushed, or uses jargon, becomes withdrawn and more distressed',
      'If the student is empathetic, honest, and gives her time, becomes more settled and engaged',
    ],
  },
  markScheme: [
    {
      domain: 'Opening the conversation',
      items: [
        { description: 'Introduces themselves; confirms who Linda is and her relationship to Peter', marks: 1 },
        { description: 'Finds a private, quiet setting; offers to have a nurse present', marks: 1 },
        { description: 'Checks who else is present or on their way — acknowledges son\'s imminent arrival', marks: 1 },
      ],
    },
    {
      domain: 'Establishing understanding — Perception (SPIKES)',
      items: [
        {
          description: 'Checks what Linda already understands about Peter\'s condition before adding new information',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Delivering the prognosis',
      items: [
        { description: 'Gives a warning shot: "I have some very difficult news to share with you"', marks: 1 },
        {
          description: 'Explains clearly and honestly that Peter has sustained a catastrophic brainstem injury from which there is no possibility of meaningful recovery',
          marks: 2,
        },
        { description: 'Pauses after delivering the news; allows silence; does not rush to fill it', marks: 1 },
        { description: 'Acknowledges and validates Linda\'s emotional response with empathy', marks: 1 },
      ],
    },
    {
      domain: 'Explaining brainstem death',
      items: [
        {
          description: 'Explains what brainstem death means in plain terms: the brainstem — which controls all basic body functions — has been irreversibly damaged',
          marks: 1,
        },
        {
          description: 'Explains brainstem death testing: two senior doctors perform tests independently; if confirmed, death is pronounced legally even while ventilated',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Addressing distress and comfort care',
      items: [
        {
          description: 'Addresses the pain/suffering concern directly and clearly: Peter will not feel pain or distress; medications will ensure comfort at the end of life',
          marks: 2,
        },
        {
          description: 'Offers that Linda and David can be with Peter; confirms the timing is flexible to allow David to arrive',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Acknowledging Peter\'s wishes',
      items: [
        {
          description: 'Invites Linda to share what she knows of Peter\'s wishes — acknowledges this as an important contribution to the best interests decision',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Organ donation',
      items: [
        {
          description: 'Raises organ donation sensitively — explains it is not a decision she must make immediately; specialist nurse for organ donation will speak with her',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Closing the conversation',
      items: [
        { description: 'Offers to involve the chaplain/spiritual care team and bereavement support', marks: 1 },
        { description: 'Provides a named contact (bedside nurse, CNS, or senior doctor) for further questions', marks: 1 },
        { description: 'Thanks Linda; acknowledges her composure and dignity', marks: 1 },
      ],
    },
    {
      domain: 'Key communication skills',
      items: [
        { description: 'Active listening — does not interrupt; validates feelings; tolerates silence', marks: 1 },
        { description: 'Uses plain language throughout; avoids jargon (does not say "brainstem death" without explaining it)', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Mrs Harrison is the wife of Mr Peter Harrison, 65, who is on ICU following a catastrophic pontine haemorrhage on day 3; she requested a meeting to understand the full picture',
    'The news was delivered honestly: Peter has sustained irreversible brainstem injury; there is no possibility of meaningful neurological recovery; he is being maintained by ventilation alone',
    'Brainstem death testing is planned — this was explained in accessible terms: two independent senior doctors performing reflex tests; if confirmed, Peter will be legally deceased regardless of the ventilator',
    'Linda\'s primary concern was whether Peter would suffer — this was addressed directly: comfort medications (midazolam, morphine) will ensure he is peaceful throughout; the process of ventilator withdrawal is a quiet, dignified process',
    'Peter\'s expressed wishes (not to be kept alive by machines) were acknowledged as important and consistent with the clinical team\'s assessment; Linda was reassured she is not "giving up on him"',
    'Organ donation was raised sensitively — the specialist nurse will speak with the family; no decision required immediately',
    'Practical arrangements: David (son) is en route from Scotland; the team will wait for him; chaplaincy and bereavement support have been offered',
  ],
  vivaQuestions: [
    {
      question: 'What is the legal definition of brainstem death in the UK, and how is it confirmed?',
      keyPoints: [
        'UK: brainstem death (BSD) is legally accepted as death — a person with confirmed BSD is dead even if the heart continues to beat on ventilator support',
        'Code of Practice (Academy of Medical Royal Colleges, 2008): two independent doctors, each registered for ≥5 years, at least one a consultant; neither can be from the transplant team',
        'Preconditions: irreversible structural brainstem damage; no sedatives/analgesics/neuromuscular blockers; normothermia (>34°C); normoglycaemia; no severe metabolic disturbance',
        'BSD tests: absent brainstem reflexes — no pupillary reflex, no corneal reflex, no vestibulo-ocular reflex, no gag/cough reflex, absent motor responses to central stimuli; apnoea test confirms no respiratory drive',
        'Tests performed twice; time of death is recorded as the time of the first set of tests',
      ],
      source: 'Academy of Medical Royal Colleges: A Code of Practice for the Diagnosis and Confirmation of Death (2008)',
    },
    {
      question: 'What is the legal framework for withdrawing life-sustaining treatment in an unconscious patient without an advance directive?',
      keyPoints: [
        'Mental Capacity Act 2005 applies: a person in a vegetative/comatose state lacks capacity; decisions are made in their best interests',
        'Best interests: take into account known wishes and values (as reported by family), clinical prognosis, and whether continued treatment is futile',
        'Family do not have legal authority to consent to withdrawal — but their knowledge of the patient\'s values is essential to the best interests decision',
        'Clinical team makes the final decision, documented after appropriate consultation; in contested cases, refer to the Court of Protection',
        'DNACPR: a Do Not Attempt CPR order is a clinical decision, not a consent decision; family should be informed and given the opportunity to discuss',
      ],
      source: 'Mental Capacity Act 2005; GMC Treatment and Care Towards the End of Life (2010)',
    },
    {
      question: 'What medications are used in the dying phase, and what is their purpose?',
      keyPoints: [
        'Midazolam (or other benzodiazepine): anxiolytic and anticonvulsant; manages terminal agitation and breathlessness; given SC/IV or via syringe driver',
        'Morphine (or diamorphine): analgesic and reduces respiratory distress; does not hasten death at therapeutic doses (doctrine of double effect)',
        'Hyoscine butylbromide (or glycopyrronium): dries secretions — reduces "death rattle" (noisy breathing distressing to relatives, not the patient)',
        'Haloperidol or levomepromazine: for refractory agitation or delirium in the terminal phase',
        'Syringe driver: allows continuous SC infusion of symptom control medications when oral route not available',
      ],
      source: 'NICE CG140 (Care of dying adults, 2015); British National Formulary — Palliative care section',
    },
    {
      question: 'What is the law on organ donation in England, and how should it be raised with families?',
      keyPoints: [
        'England (since May 2020): opt-out system (deemed consent) — adults are presumed to consent to donation unless they have registered an opt-out or are in an excluded group',
        'Excluded groups: under 18, lacked capacity for 12 months before death, not lived in England for 12 months, residents of care homes',
        'Family are not required to consent but are always consulted — family objection does not override deemed consent but is taken into account in practice',
        'Specialist nurses for organ donation (SNODs): dedicated specialist team approach families; should be involved before ventilator withdrawal',
        'Raising donation: sensitively, separately from discussions about withdrawal; not presented as a transactional exchange; acknowledges family grief first',
      ],
      source: 'NHS Blood and Transplant — Organ Donation (Deemed Consent) Act 2019; NHSBT Guidelines for Families',
    },
  ],
};

const eolRefusedTreatmentMockExam: MockExamStation = {
  id: 'eol_refused_treatment_relative',
  title: 'End-of-Life Communication — Relative Distressed by Patient\'s Refusal of Treatment',
  diagnosis: 'Navigating a relative\'s distress when a patient has refused treatment with capacity — end-of-life care for metastatic colorectal cancer',
  specialtyId: 'palliative',
  candidateBrief: {
    setting: 'You are an FY1 on the oncology ward.',
    scenario:
      'Karen Walsh, 46, has asked to speak with a doctor about her father Dennis Walsh, 74, who has metastatic colorectal cancer with liver and lung metastases. Dennis has made an informed decision, with full mental capacity, to decline further chemotherapy. This decision has been discussed with the oncology consultant and is documented in the notes. Karen disagrees with her father\'s decision.',
    tasks: [
      'Speak with Karen about her father\'s decision and address her concerns',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'Karen Walsh',
    age: 46,
    occupation: 'Primary school teacher (Dennis\'s daughter)',
    openingLine:
      '"I need to talk to someone about my dad. He\'s told you he doesn\'t want the chemotherapy, but I know he\'s making a mistake. He\'s giving up and I think the doctors have given up on him too." [upset, slightly confrontational]',
    historyOfPresentingComplaint: [
      {
        label: 'Karen\'s understanding — believes Dennis is depressed and not thinking clearly; equates refusing treatment with "giving up"',
        quote: '"He\'s depressed. He must be. Who in their right mind would refuse treatment that could save their life?" – "I think he\'s just lost all hope and you\'re all letting him."',
      },
      {
        label: 'Karen\'s accusation — feels the doctors have given up on Dennis; does not believe they have done enough',
        quote: '"I feel like nobody is fighting for him. You\'re just letting him die." – "Have you actually spoken to him? Properly? Or did someone just have a 5-minute conversation with him?"',
      },
      {
        label: 'Karen\'s request — wants doctors to override Dennis\'s decision; asks if he can be forced to have chemotherapy',
        quote: '"Can\'t you just... give him the chemotherapy anyway? Override his decision? He doesn\'t know what he\'s choosing." – "What if I sign something? I\'m his next of kin."',
      },
      {
        label: 'Emotional shift — if student is empathetic and explains the legal and ethical framework clearly, Karen becomes less confrontational',
        quote: '[After explanation of the MCA and Dennis\'s capacity]: [quieter, tearful] "I just can\'t bear the thought of losing him. I feel so helpless." – "I know he\'s an adult. I know he can make his own choices. I just thought there was more time."',
      },
      {
        label: 'Dennis\'s reasons — only reveal if student asks what Dennis has said about his decision',
        quote: '"He said he watched his best friend go through chemotherapy and it was absolutely awful. He said he would rather have quality time at home — feeling himself — than be sick in a hospital." – "He said \'I\'d rather have six good months than eighteen bad ones, Karen.\'"',
      },
      {
        label: 'Karen\'s fear — really fears dying without reconciling with her father; has had a difficult relationship with him',
        quote: '[Only if asked very sensitively about her own feelings]: "We\'ve had our difficult patches. I suppose I\'m terrified that if he doesn\'t have treatment, I\'ll lose him before I get to say what I need to say." [tearful]',
      },
    ],
    pastMedicalHistory: [
      { label: 'Dennis — metastatic colorectal cancer; liver and lung metastases; median prognosis approximately 6 months without chemotherapy', quote: '[Clinical background from notes — not disclosed by Karen unless asked]' },
      { label: 'Dennis — has capacity; capacity formally assessed by the oncology consultant and documented', quote: '"The consultant sat with him for a long time. Dad was very clear about what he was saying." [only if student asks whether capacity was properly assessed]' },
    ],
    drugHistory: [],
    familyHistory: [],
    socialHistory: [
      { label: 'Dennis (74) — widower; lives alone; Karen visits twice a week; one other adult child (son Michael) lives abroad', quote: '"Mum died 6 years ago. Dad lives alone — I go twice a week. My brother Michael is in Australia. He\'s flying over." [only if asked]' },
    ],
    importantNegatives: [
      'Dennis has NOT lost capacity — the oncologist formally assessed this and it is documented ("The consultant was very clear that Dad understood everything.")',
      'Dennis is NOT depressed in a way that impairs capacity — he has expressed clear, consistent, values-based reasons for his decision',
      'Karen does NOT have legal authority to override a capacitous adult\'s decision as next of kin ("I know he has the right to decide. But I just can\'t accept it.")',
    ],
    ice: {
      ideas: '"I think he\'s depressed and not thinking clearly — nobody who wants to live would refuse treatment."',
      concerns: '"I\'m terrified of losing him. I\'m not ready. And I\'m scared he\'s making a decision he\'ll regret when it\'s too late to change it."',
      expectations: '"I want you to talk to him again and change his mind. Or tell me there\'s something else — another option."',
    },
    onlyIfDirectlyAsked: [
      'Karen\'s relationship with Dennis — they have had periods of difficulty; she wants to reconcile',
      'Whether Dennis could change his mind — yes, he can revisit the decision at any time; the door is open',
      'What palliative care can offer Dennis — symptom control, quality time at home, pain management, psychological support',
    ],
    behaviourNotes: [
      'Starts confrontational and upset; this is grief and helplessness expressed as anger — not genuine aggression',
      'Responds to empathy before information — if the student jumps straight to legal explanation, Karen becomes more defensive',
      'The student should first acknowledge how difficult this is before explaining the law',
      'Becomes tearful rather than angry once the student explains Dennis\'s reasons (from the notes) and validates that his choice comes from love, not depression',
      'Asks "Can he change his mind?" — student should answer yes, emphasise the team remains available to Dennis',
      'Asks "What happens now? Is he just going to die at home?" — student should explain palliative care: symptom control, community palliative team, hospice if needed',
      'If the student is dismissive or purely legalistic, Karen becomes more upset and says "I came here for help, not a lecture"',
    ],
  },
  markScheme: [
    {
      domain: 'Opening the consultation',
      items: [
        { description: 'Introduces themselves; thanks Karen for coming; confirms her relationship to Dennis', marks: 1 },
        { description: 'Offers a private space; offers to have a nurse or support person present', marks: 1 },
      ],
    },
    {
      domain: 'Establishing understanding',
      items: [
        { description: 'Asks Karen what she already knows about her father\'s diagnosis and the discussions that have taken place', marks: 1 },
        { description: 'Listens to Karen\'s concerns without interrupting before responding', marks: 1 },
      ],
    },
    {
      domain: 'Acknowledging emotion before explaining',
      items: [
        {
          description: 'Acknowledges Karen\'s distress, fear of losing her father, and feeling of helplessness with genuine empathy before any legal or ethical explanation',
          marks: 2,
        },
      ],
    },
    {
      domain: 'Explaining mental capacity',
      items: [
        {
          description: 'Explains that Dennis\'s capacity was formally assessed by the consultant and that Dennis understood his diagnosis, prognosis, and the consequences of refusing treatment',
          marks: 2,
        },
        {
          description: 'Explains the Mental Capacity Act 2005 principle: a capacitous adult has the absolute right to refuse any treatment, including life-prolonging treatment',
          marks: 2,
        },
        { description: 'Clarifies that next of kin status does not give Karen legal authority to override Dennis\'s capacitous decision', marks: 1 },
      ],
    },
    {
      domain: 'Addressing depression concern',
      items: [
        {
          description: 'Addresses Karen\'s belief that Dennis is depressed: explains that depression does not automatically equal incapacity; Dennis\'s decision is consistent, reasoned, and grounded in his values',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Explaining Dennis\'s stated reasons',
      items: [
        {
          description: 'Shares (from the notes/history) Dennis\'s articulated reason — quality time over quantity, avoiding suffering from chemotherapy — reframing this as an autonomous values-based decision rather than "giving up"',
          marks: 1,
        },
      ],
    },
    {
      domain: 'Explaining palliative care and what happens next',
      items: [
        {
          description: 'Explains what the team CAN offer: palliative care input for symptom control, community palliative nursing, pain management, psychological support, and hospice if needed',
          marks: 1,
        },
        { description: 'Confirms Dennis can revisit his decision at any time and that the team remains available to him', marks: 1 },
      ],
    },
    {
      domain: 'Closing the consultation',
      items: [
        { description: 'Offers Karen access to a Macmillan nurse or palliative care support for herself', marks: 1 },
        { description: 'Summarises the conversation; checks Karen has understood; thanks her', marks: 1 },
      ],
    },
    {
      domain: 'Key communication skills',
      items: [
        { description: 'Active listening — does not interrupt Karen\'s emotional expression; validates rather than dismisses', marks: 1 },
        { description: 'Avoids clinical jargon; uses plain accessible language when explaining the law', marks: 1 },
        { description: 'Signposting — signals when moving from emotional support to factual explanation', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Karen Walsh is the daughter of Dennis Walsh, 74, who has metastatic colorectal cancer; Dennis has made an informed, capacitous decision to decline further chemotherapy, documented by the oncology consultant',
    'Karen is distressed and believes her father is depressed and "giving up"; she initially requested that the clinical team override his decision or that she, as next of kin, could countermand it',
    'The meeting began with acknowledgement of Karen\'s grief and fear of losing her father, before explaining the legal and ethical framework',
    'Mental Capacity Act 2005: a competent adult has an absolute right to refuse any medical treatment, including life-prolonging treatment; capacity was formally assessed and is documented',
    'Next of kin has no legal authority to override a capacitous person\'s decision; the team cannot administer treatment a patient has competently refused',
    'Dennis\'s decision was grounded in his personal values — he wished to avoid the suffering of chemotherapy and prioritise quality time at home, consistent with an autonomous, reasoned decision rather than depressive cognition',
    'The team continues to offer palliative care: community palliative nursing, symptom control, and hospice referral if appropriate; Dennis can revisit his decision at any time; Karen was offered support from the Macmillan nursing team',
  ],
  vivaQuestions: [
    {
      question: 'What are the five principles of the Mental Capacity Act 2005, and how do they apply to a patient refusing treatment?',
      keyPoints: [
        'Principle 1: A person is assumed to have capacity unless it is established that they do not',
        'Principle 2: All practicable steps must be taken to help a person make their own decision before concluding they lack capacity',
        'Principle 3: A person is not lacking in capacity merely because they make an unwise decision',
        'Principle 4: Any act done or decision made under the Act must be in the person\'s best interests',
        'Principle 5: Any act or decision must be the least restrictive option available',
        'Application: a capacitous adult\'s refusal of treatment must be respected even if it results in death; the team cannot treat against the patient\'s expressed wishes',
      ],
      source: 'Mental Capacity Act 2005 (England and Wales); GMC Treatment and Care Towards the End of Life (2010)',
    },
    {
      question: 'How does depression interact with mental capacity, and how would you assess capacity in a patient refusing treatment?',
      keyPoints: [
        'Depression does not automatically impair capacity — many patients with depression retain full capacity to make decisions',
        'The Mental Capacity Act 2005 two-stage test: (1) is there an impairment or disturbance of the mind or brain? (2) does it prevent the person from understanding, retaining, using/weighing, or communicating the decision?',
        'Assess capacity for each specific decision at the time of the decision — it is decision-specific and time-specific',
        'A patient with depression may refuse treatment because they want to die (which may indicate impaired capacity) OR because they have weighed the risks and benefits based on their values (which may indicate full capacity)',
        'Seek specialist psychiatric opinion if there is genuine doubt about whether depression is impairing the decision-making process',
      ],
      source: 'Mental Capacity Act 2005; British Medical Association: Mental Capacity Act Toolkit (2016); Beauchamp TL & Childress JF Principles of Biomedical Ethics 8th ed.',
    },
    {
      question: 'What is an Advance Decision to Refuse Treatment (ADRT) and what are its legal requirements in England and Wales?',
      keyPoints: [
        'An ADRT (advance directive) allows a capacitous adult to refuse specific medical treatment in advance, to take effect if they subsequently lose capacity',
        'An ADRT is legally binding under the MCA 2005 if it is valid (made when the person had capacity, not withdrawn, not superseded by a later LPA) and applicable (the circumstances that have arisen match those specified)',
        'To refuse life-sustaining treatment, the ADRT must be in writing, signed by the person and a witness, and include a statement that it applies "even if life is at risk"',
        'An ADRT cannot demand specific treatments — only refuse them; it cannot override a clinician\'s decision to withhold a treatment that is not in the patient\'s best interests',
        'If validity or applicability is uncertain, seek legal advice and apply a best interests standard while the question is resolved',
      ],
      source: 'Mental Capacity Act 2005, Sections 24-26; BMA Advance Decisions guidance (2020)',
    },
    {
      question: 'How do you support a relative who is distressed by a patient\'s end-of-life decision?',
      keyPoints: [
        'Acknowledge the relative\'s distress and grief first — emotional containment before explanation; avoid leading with legal information',
        'Explore their understanding of the situation and what the patient has said to them; the relative may not have heard the patient\'s stated reasons',
        'Explain the patient\'s autonomy and the legal framework in plain language; reinforce that the patient is not "giving up" but exercising a right to choose',
        'Reframe the clinical team\'s role: shifting from cure to comfort is not abandonment; palliative care can offer a great deal',
        'Offer the relative their own support: Macmillan nursing, palliative social work, psychological support, family meetings with senior clinicians',
      ],
      source: 'GMC Treatment and Care Towards the End of Life (2010); Beauchamp TL & Childress JF Principles of Biomedical Ethics 8th ed.',
    },
  ],
};

const mndEolMockExam: MockExamStation = {
  id: 'palliative_mnd_eol_patient',
  title: 'End-of-Life Consultation — Motor Neurone Disease: Symptoms and Decision-Making',
  diagnosis: 'Motor neurone disease — advance care planning and symptom management consultation',
  specialtyId: 'palliative',
  candidateBrief: {
    setting: 'You are an FY1 on the neurology ward.',
    scenario:
      'Graham Scott, 61, was diagnosed with ALS/MND 8 months ago. He is admitted for a planned review. His swallowing has deteriorated and he has increasing dyspnoea on exertion. He is aware of his diagnosis and prognosis but wants to understand what decisions he needs to make and what symptoms can be managed. His wife has stepped out of the room at his request so he can speak frankly.',
    tasks: [
      'Speak with Graham about end-of-life decision-making and how his symptoms can be managed',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'Graham Scott',
    age: 61,
    occupation: 'Retired civil engineer',
    openingLine:
      '"I want to talk about what comes next. My wife finds it difficult — that\'s why I asked her to step out. But I need to know what decisions I should be making now, while I still can. And what you can do about the swallowing and the breathing." [calm, thoughtful, clearly has reflected on this]',
    historyOfPresentingComplaint: [
      {
        label: 'Swallowing — dysphagia to solids for 3 months, now also to liquids; coughing and choking on thin liquids; concern about aspiration',
        quote: '"Swallowing has got much worse. I choke on thin drinks now — water is the worst. I\'m frightened of choking." – "I\'ve lost about 4 kg in the last 3 months."',
      },
      {
        label: 'Breathing — dyspnoea on exertion; some morning headaches; patient suspects early nocturnal hypoventilation',
        quote: '"I get breathless going up the stairs now. And I wake up with headaches most mornings — I read that\'s a sign the breathing isn\'t right at night." – "I\'m not panicking yet but I know what it means."',
      },
      {
        label: 'Communication — speech still intelligible but slower and effortful; concerned about losing voice',
        quote: '"I can still speak but it takes more effort. I want to make recordings for my grandchildren while I still can." – "I know eventually I may not be able to speak at all."',
      },
      {
        label: 'Advance care planning — wants to discuss: decisions about PEG tube, NIV, resuscitation, and place of death; previously watched his father die in ICU "attached to machines" — does NOT want that',
        quote: '"I watched my dad die in intensive care — machines everywhere, no dignity. I don\'t want that." – "I want to make my wishes clear now. I have capacity. I want it all written down." – "I\'d like to die at home if possible."',
      },
      {
        label: 'Current emotional state — realistic and pragmatic; occasional low mood but not clinically depressed; has spoken to a MND specialist nurse',
        quote: '"I\'m not in denial. I\'ve read about it. I\'ve spoken to the specialist nurse." – "I have low moments but overall I\'m okay — I want to get things sorted." [composed]',
      },
    ],
    pastMedicalHistory: [
      { label: 'ALS/MND — diagnosed 8 months ago; predominantly bulbar onset', quote: '"The neurologist said it\'s the type that started with the swallowing and speech."' },
      { label: 'Hypertension — on amlodipine; well controlled', quote: '"Just my blood pressure tablets." [if asked]' },
    ],
    drugHistory: [
      { label: 'Amlodipine 5 mg OD; riluzole 50 mg BD', quote: '"The riluzole and the blood pressure tablet."' },
      { label: 'No known drug allergies', quote: '"No allergies."' },
    ],
    familyHistory: [],
    socialHistory: [
      { label: 'Married 35 years; two adult children; wife is his primary carer; lives in own home', quote: '"My wife\'s been incredible. We\'ve been married 35 years." – "My son and daughter are nearby." [if asked]' },
      { label: 'Non-smoker; no alcohol (stopped at diagnosis)', quote: '"I stopped drinking when I was diagnosed. I don\'t smoke." [if asked]' },
    ],
    importantNegatives: [
      'No acute infection or aspiration pneumonia currently ("I\'ve been careful — taking thickened fluids and sitting upright.")',
      'No cognitive impairment — executive function and memory intact ("My mind is clear. That\'s one thing I\'m grateful for.")',
      'No suicidal ideation — distinguishes from existential suffering ("I\'m not looking to end things early. I just want a good death — at home, comfortable.")',
    ],
    ice: {
      ideas: '"I know what\'s going to happen. I just want to control what I can control."',
      concerns: '"I\'m frightened of choking to death. And of being put on a machine against my wishes. And of losing my ability to speak before I\'ve said everything I need to say."',
      expectations: '"I want to make decisions now about the tube feeding, the breathing support, and what happens at the end. And I want someone to tell me what to do about the symptoms."',
    },
    onlyIfDirectlyAsked: [
      'Whether he has a PEG yet — "No. I\'ve been putting it off. I want to know more about it before I decide."',
      'Whether he has an ADRT — "No — I don\'t have one yet. That\'s part of why I wanted to talk today."',
      'Whether he has an LPA — "My wife and I have already sorted the financial one. We need to do the health one."',
    ],
    behaviourNotes: [
      'Calm, articulate, and autonomous; this is not a breaking bad news station — Graham already knows his diagnosis and prognosis',
      'Responds well to a student who treats him as an equal and respects his expertise on his own condition',
      'Becomes quietly emotional when talking about his grandchildren — student should acknowledge this gently',
      'Very focused on getting the ADRT and LPA completed — student should confirm these need to be done while he has full capacity',
      'Asks specifically about whether PEG tube prevents aspiration — student should explain it does NOT prevent aspiration pneumonia but maintains nutrition and quality of life',
      'Asks about terminal breathlessness — student should explain low-dose opioids (morphine) are effective and do not hasten death',
    ],
  },
  markScheme: [
    {
      domain: 'Opening the consultation',
      items: [
        { description: 'Introduces themselves; acknowledges Graham\'s request to speak frankly; creates a collaborative atmosphere', marks: 1 },
        { description: 'Checks what Graham already understands about his current trajectory before adding information', marks: 1 },
      ],
    },
    {
      domain: 'Symptom management — dysphagia',
      items: [
        { description: 'Explains SLT assessment for modified texture diet and thickened fluids; identifies aspiration risk', marks: 1 },
        { description: 'Discusses PEG tube: nutritional support; does NOT prevent aspiration pneumonia; quality of life benefit; ideally placed while FVC >50%; explains the procedure', marks: 2 },
        { description: 'Respects Graham\'s autonomy to decide on PEG — presents it as his choice, not a recommendation', marks: 1 },
      ],
    },
    {
      domain: 'Symptom management — breathlessness',
      items: [
        { description: 'Explains NIV (BiPAP): indicated when FVC <80% or symptomatic nocturnal hypoventilation; relieves dyspnoea and morning headaches; extends survival; explains the mask and how it works', marks: 1 },
        { description: 'Explains that low-dose opioids (morphine 2.5–5 mg oral) are effective for breathlessness and do NOT hasten death — addresses common fear', marks: 2 },
      ],
    },
    {
      domain: 'Communication support',
      items: [
        { description: 'Refers Graham to SLT for augmentative and alternative communication (AAC) devices — eye-gaze communication technology for when speech is lost', marks: 1 },
        { description: 'Supports his wish to make voice recordings for his grandchildren — offers SLT-facilitated voice banking', marks: 1 },
      ],
    },
    {
      domain: 'Advance care planning',
      items: [
        { description: 'Explains ADRT: legally binding refusal of specific treatments (CPR, ventilation) — must be in writing, signed, witnessed, and state it applies even if life is at risk', marks: 1 },
        { description: 'Explains Health and Welfare LPA: allows Graham\'s wife (or nominated attorney) to make decisions if he loses capacity — strongly encouraged while he has capacity', marks: 1 },
        { description: 'Discusses preferred place of death — supports home death wish; explains community palliative care team, Marie Curie nursing, and hospice as options', marks: 1 },
        { description: 'Introduces Do Not Attempt CPR (DNACPR/ReSPECT form): explains in the context of his stated wishes; documents clearly', marks: 1 },
      ],
    },
    {
      domain: 'Closing',
      items: [
        { description: 'Summarises the plan; offers to involve Graham\'s wife in a subsequent meeting; provides MND Association contacts', marks: 1 },
        { description: 'Acknowledges what Graham is doing as courageous and important — validates his approach', marks: 1 },
      ],
    },
    {
      domain: 'Key communication skills',
      items: [
        { description: 'Maintains a tone of partnership throughout — not paternalistic', marks: 1 },
        { description: 'Active listening; allows Graham to lead the pace; does not rush', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'Graham is a 61-year-old with bulbar-onset ALS/MND (8 months) attending for planned review; he is cognitively intact and has specifically requested a frank discussion about advance care planning and symptom management',
    'Current symptoms: progressive dysphagia (choking on thin liquids; 4 kg weight loss) and early respiratory compromise (dyspnoea on exertion, morning headaches suggesting nocturnal hypoventilation)',
    'Dysphagia management: SLT review; modified diet (IDDSI framework); thickened fluids; PEG feeding discussed — maintains nutrition, does NOT prevent aspiration; ideally placed at FVC >50%; Graham\'s autonomous decision',
    'Respiratory management: lung function (FVC) to be checked; NIV (BiPAP) strongly indicated given symptoms of nocturnal hypoventilation — extends survival and improves QoL; low-dose morphine for breathlessness will NOT hasten death',
    'Communication: SLT referral for AAC device (eye-gaze technology); voice banking while speech is still intelligible',
    'Advance care planning: ADRT to document refusal of CPR and invasive ventilation — must be completed while Graham has capacity; Health and Welfare LPA to be established with wife as attorney; DNACPR discussion and documentation; preferred place of death: home with community palliative care and Marie Curie nursing support',
    'Graham\'s wishes respected throughout — the plan centres on maintaining dignity, quality of life, and autonomous decision-making',
  ],
  vivaQuestions: [
    {
      question: 'What is a ReSPECT form and how does it differ from a DNACPR order?',
      keyPoints: [
        'ReSPECT (Recommended Summary Plan for Emergency Care and Treatment): replaces DNACPR in many UK trusts; a broader document that captures patient preferences for emergency care — not just CPR',
        'Includes: patient\'s wishes and priorities; agreed clinical decisions about CPR (DNACPR); decisions about other emergency interventions (intubation, dialysis, IV fluids)',
        'DNACPR: a clinical decision not to attempt CPR if the patient has a cardiac arrest; does not affect other aspects of care; must be explained to the patient as it is a decision affecting them',
        'ReSPECT travels with the patient across care settings (community, hospice, acute hospital) — improves care continuity and prevents unwanted resuscitation attempts',
        'Both documents are signed by the responsible clinician; should ideally be completed following patient discussion; a DNACPR can be put in place without patient consent only if CPR would be futile (but best practice is to inform the patient)',
      ],
      source: 'Resuscitation Council UK: Decisions relating to cardiopulmonary resuscitation (2016); NICE NG31 (End of life care, 2015)',
    },
    {
      question: 'What are the indications for PEG tube insertion in MND and what does the evidence say?',
      keyPoints: [
        'Indication: dysphagia causing inability to maintain adequate nutrition/hydration; significant weight loss (>10% body weight); aspiration risk on oral intake',
        'Timing: ideally placed while FVC >50% (respiratory reserve for sedation/procedure); once FVC <50%, anaesthetic risk for the procedure increases substantially',
        'Evidence: PEG maintains nutritional status and may prolong survival (RCT evidence limited but observational evidence supports); does NOT prevent aspiration pneumonia (gastric reflux can still cause aspiration)',
        'Radiologically inserted gastrostomy (RIG): alternative if FVC <50%; uses fluoroscopy, lighter sedation; lower procedural risk',
        'Patient autonomy: some patients with MND decline PEG — this is a valid autonomous decision; the team must respect it and ensure comfort eating continues with appropriate SLT support',
      ],
      source: 'NICE NG42 (Motor neurone disease: assessment and management, 2016); ESPEN guidelines on clinical nutrition in neurology (2018)',
    },
    {
      question: 'How do you manage terminal breathlessness in palliative care?',
      keyPoints: [
        'Low-dose opioids (morphine): first-line for breathlessness in palliative care; 2.5–5 mg oral morphine every 4 hours (opioid-naive patients); reduce respiratory drive and perceived air hunger without respiratory depression at palliative doses',
        'Do NOT hasten death: palliative doses of opioids titrated to symptom control do not shorten life — this is supported by the doctrine of double effect and evidence; important to reassure patients and families',
        'Anxiolytics: low-dose midazolam or lorazepam for panic component of breathlessness; often used alongside opioids in the terminal phase',
        'Non-pharmacological: positioning (upright), fan (facial airflow reduces sensation of breathlessness via trigeminal nerve cooling), open window, relaxation techniques',
        'Subcutaneous infusion (syringe driver): used in the terminal phase when oral medications no longer feasible; morphine + midazolam + glycopyrronium (for secretions) is a typical combination',
      ],
      source: 'NICE NG31 (Care of dying adults in the last days of life, 2015); Jennings AL et al. Cochrane Review — Opioids for dyspnoea in MND (2001)',
    },
  ],
};

export const PALLIATIVE_MOCK_EXAMS: MockExamStation[] = [endOfLifeStrokeMockExam, eolRefusedTreatmentMockExam, mndEolMockExam];
