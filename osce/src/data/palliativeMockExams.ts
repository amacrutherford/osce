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

export const PALLIATIVE_MOCK_EXAMS: MockExamStation[] = [endOfLifeStrokeMockExam];
