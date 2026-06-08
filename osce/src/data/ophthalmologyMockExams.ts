import type { MockExamStation } from './mockExamTypes';

const diabeticRetinopathyMockExam: MockExamStation = {
  id: 'ophthal_diabetic_retinopathy',
  title: 'Ophthalmology Consultation — Fundoscopy Photo and Diabetic Retinopathy Counselling',
  diagnosis: 'Non-proliferative diabetic retinopathy with diabetic maculopathy',
  specialtyId: 'ophthalmology',
  candidateBrief: {
    setting: 'You are an FY1 in an ophthalmology outpatients clinic.',
    scenario:
      'Trevor Hammond, 58, is attending for the results of his diabetic retinopathy screening. The examiner will show you a fundoscopy photograph at the start of the station. Describe the photograph findings to the examiner first, then counsel Trevor about his diagnosis.',
    tasks: [
      'Describe the fundoscopy photograph to the examiner and classify the retinopathy',
      'Counsel Trevor about his diagnosis, treatment, driving implications, and prevention of progression',
    ],
    timeAllowed: 10,
  },
  actorInstructions: {
    patientName: 'Trevor Hammond',
    age: 58,
    occupation: 'Bus driver (Group 2 DVLA licence — PSV)',
    openingLine:
      '"Morning. I\'ve been a bit nervous coming in today, if I\'m honest. I missed my screening last year — I know I shouldn\'t have. My reading\'s been a bit blurry for a few weeks but I just thought I needed new glasses." [fidgeting; avoiding eye contact]',
    historyOfPresentingComplaint: [
      {
        label: 'Student describes photograph to examiner: microaneurysms, dot and blot haemorrhages, hard exudates at the macula; no new vessels',
        quote:
          '[Examiner: "Please describe what you see in this fundoscopy photograph."] Student describes: multiple small red dot lesions (microaneurysms), dot and blot haemorrhages (intraretinal), hard exudates (bright yellow lipid deposits) close to the macula, no neovascularisation — consistent with non-proliferative diabetic retinopathy with maculopathy.',
      },
      {
        label: 'Student classifies the retinopathy to examiner: moderate NPDR with diabetic maculopathy',
        quote:
          '[Examiner: "How would you classify this?"] Student: moderate non-proliferative diabetic retinopathy with clinically significant macular involvement (hard exudates at the macula); no new vessels so not proliferative DR.',
      },
      {
        label: "Trevor's visual symptoms — blurred reading vision; central distortion when reading (metamorphopsia from maculopathy)",
        quote:
          '"My reading has been getting blurry for about 3 or 4 weeks." – "Sometimes when I look at a straight line it looks a bit wobbly — like the text warps in the middle." – "I just thought I needed stronger reading glasses."',
      },
      {
        label: 'Reaction to diagnosis — shocked and worried about vision',
        quote: '"So there\'s actual damage to my eye? How bad is it?" – "Am I going to go blind?" [visibly worried, leans forward]',
      },
      {
        label: 'Question about treatment',
        quote: '"Is there a treatment? Can the damage be reversed?" – "I\'ve heard about laser — is that what I\'d be looking at?"',
      },
      {
        label: 'Question about driving and his PSV licence',
        quote: '"I\'m a bus driver — this is my livelihood. Does this affect my licence?" [anxious; hands grip the chair]',
      },
      {
        label: 'Question about what he can do to prevent progression',
        quote: '"What can I do? Is there anything to stop it getting worse? I know my diabetes hasn\'t been brilliant."',
      },
      {
        label: 'Background: missed retinopathy screening last year; HbA1c 78 mmol/mol; BP 158/96 mmHg today; 30 pack-year smoker',
        quote:
          '"I know I should have gone last year — I just couldn\'t face it." – "My blood sugars haven\'t been great." – "My blood pressure was high at the GP last month."',
      },
    ],
    pastMedicalHistory: [
      { label: 'Type 2 diabetes mellitus — diagnosed 8 years ago', quote: '"I\'ve had type 2 diabetes for 8 years."' },
      { label: 'Hypertension — on amlodipine 10 mg OD', quote: '"I\'ve got blood pressure tablets — amlodipine, 10 mg."' },
      {
        label: 'No previous eye problems; no glaucoma; no prior eye surgery',
        quote: '"No eye problems before this. My vision has always been fine — just readers for close work."',
      },
    ],
    drugHistory: [
      { label: 'Metformin 1 g BD', quote: '"Metformin — 1 gram, twice a day."' },
      { label: 'Gliclazide 80 mg BD', quote: '"Gliclazide — 80 mg twice a day."' },
      { label: 'Insulin glargine 24 units nocte (basal insulin)', quote: '"I take an insulin injection at night — 24 units of the long-acting one."' },
      { label: 'Amlodipine 10 mg OD', quote: '"Amlodipine — 10 mg once a day."' },
      { label: 'No known drug allergies', quote: '"No allergies."' },
    ],
    familyHistory: [
      { label: "Father — T2DM; died of MI aged 64", quote: '"My dad had diabetes too. He died of a heart attack at 64."' },
      { label: 'No family history of glaucoma or macular degeneration', quote: '"No eye problems in the family that I know of."' },
    ],
    socialHistory: [
      {
        label: 'Bus driver — Group 2 DVLA licence (PSV); full-time; driving is his only livelihood',
        quote: '"I\'ve been driving buses for 22 years. It\'s all I know." – "If I lose my licence... I don\'t know what I\'d do."',
      },
      { label: 'Smoker — 20 cigarettes/day for 30 years (30 pack-years)', quote: '"I smoke — I know, I know. About 20 a day, for about 30 years."' },
      { label: 'Alcohol — approximately 10 units per week', quote: '"I have a few pints on a Friday and Saturday — maybe 10 units a week."' },
      { label: 'BMI 31; diet high in refined carbohydrates; has not seen a dietitian', quote: '"I\'m a bit overweight. I eat a lot on the road — it\'s not always healthy."' },
    ],
    importantNegatives: [
      'No sudden or painless total vision loss ("No sudden changes — it\'s been gradual.")',
      'No floaters or flashing lights ("Not that I\'ve noticed.")',
      'No eye pain or redness ("No pain in the eye.")',
      'No diplopia ("No double vision.")',
      'No symptoms of hypoglycaemia while driving ("No — I check my blood sugar before I drive.")',
    ],
    ice: {
      ideas: '"I thought the blurred vision was just age — I didn\'t think diabetes could do that to your eyes."',
      concerns:
        '"I\'m scared about going blind. And I\'m terrified about losing my bus licence — my whole career depends on it." [voice wavers]',
      expectations:
        '"I want to know honestly how serious this is, what the treatment involves, and whether I can carry on working as a bus driver."',
    },
    onlyIfDirectlyAsked: [
      'Whether he monitors his blood glucose at home — yes, checks fasting only; not post-meal',
      'Whether his GP has ever mentioned a statin — no; student should mention atorvastatin 80 mg is indicated',
      'His most recent HbA1c — 78 mmol/mol at his last GP appointment 6 weeks ago',
    ],
    behaviourNotes: [
      'Trevor is anxious and somewhat ashamed about missing his screening and having poor glycaemic control — do not add to the guilt; acknowledge he is here now',
      'He becomes visibly distressed during the DVLA discussion — address this sensitively but honestly; do not offer false reassurance about his PSV licence',
      'Group 2 (PSV/LGV) licence standard is stricter than Group 1: any condition causing significant visual field or acuity deterioration must be reported to DVLA; DVLA decides fitness to hold a Group 2 licence',
      'The student must NOT give a definitive verdict on whether Trevor can continue driving his bus — the correct answer is: "You are legally required to notify DVLA of this diagnosis; they will assess your vision formally and make that decision"',
      'Asks "Am I going to go blind?" — student should explain: with treatment (anti-VEGF for maculopathy) and systemic optimisation, progression can usually be halted; blindness is not inevitable but the current level of disease requires prompt treatment',
      'Asks "Is laser treatment for this?" — student should explain: laser photocoagulation is for proliferative DR; for diabetic maculopathy the treatment is intravitreal anti-VEGF injections (e.g. ranibizumab or aflibercept), not laser',
      'Responds well to a practical, honest approach — does not want platitudes or vagueness about the DVLA question',
    ],
  },
  markScheme: [
    {
      domain: 'Fundoscopy photograph description (to examiner)',
      items: [
        { description: 'Identifies microaneurysms — small red dot lesions from outpouching of weakened retinal capillary walls', marks: 1 },
        { description: 'Identifies dot and blot haemorrhages — intraretinal haemorrhages of varying depth and size', marks: 1 },
        {
          description: 'Identifies hard exudates — bright yellow lipid deposits; correctly notes their proximity to the macula indicating maculopathy',
          marks: 2,
        },
        { description: 'Confirms the absence of new vessels — classifies the disease as non-proliferative (not proliferative) diabetic retinopathy', marks: 1 },
        { description: 'States the full classification: moderate non-proliferative diabetic retinopathy with diabetic maculopathy', marks: 1 },
      ],
    },
    {
      domain: 'Opening the consultation with Trevor',
      items: [
        { description: 'Introduces themselves; explains what the consultation will cover; acknowledges his anxiety sensitively', marks: 1 },
      ],
    },
    {
      domain: 'Explaining the diagnosis',
      items: [
        { description: 'Explains diabetic retinopathy in accessible terms: damage to blood vessels in the retina caused by chronically elevated blood glucose', marks: 1 },
        { description: 'Explains what maculopathy means: the central part of the retina (macula) responsible for fine detail and reading vision is affected', marks: 1 },
        { description: 'Addresses "am I going to go blind?": explains that with prompt treatment and systemic optimisation progression can usually be halted — blindness is not inevitable', marks: 1 },
      ],
    },
    {
      domain: 'Explaining treatment',
      items: [
        {
          description:
            'Explains intravitreal anti-VEGF injections (e.g. ranibizumab or aflibercept) as the treatment for diabetic maculopathy; correctly states laser photocoagulation is for proliferative DR, not maculopathy',
          marks: 2,
        },
        {
          description: 'Explains the importance of systemic optimisation: HbA1c (target <53 mmol/mol), BP (target <130/80 mmHg), lipids (statin therapy)',
          marks: 1,
        },
      ],
    },
    {
      domain: 'DVLA and driving implications',
      items: [
        { description: 'Explains that Trevor is legally required to notify DVLA of his new ocular diagnosis — failure to do so is a criminal offence', marks: 2 },
        { description: 'Explains the difference between Group 1 and Group 2 licence standards; states Group 2 (PSV) has stricter visual field and acuity requirements', marks: 1 },
        { description: 'Does not give a definitive verdict on whether Trevor can continue driving his bus — correctly states DVLA will formally assess visual standards', marks: 1 },
      ],
    },
    {
      domain: 'Prevention and risk factor modification',
      items: [
        {
          description: 'Identifies modifiable risk factors: HbA1c 78 mmol/mol (target <53 mmol/mol), BP 158/96 (target <130/80 mmHg), 30 pack-year smoking history, BMI 31',
          marks: 1,
        },
        { description: 'Recommends smoking cessation; optimise glycaemic and antihypertensive therapy; introduce statin (atorvastatin 80 mg); dietitian referral', marks: 1 },
      ],
    },
    {
      domain: 'ICE and addressing concerns',
      items: [
        { description: "Explores Trevor's ideas, concerns, and expectations; addresses fear of blindness and career impact honestly and sensitively", marks: 1 },
      ],
    },
    {
      domain: 'Closing the consultation',
      items: [
        { description: 'Arranges urgent ophthalmology review for anti-VEGF injection assessment; confirms importance of annual screening going forward', marks: 1 },
        { description: 'Gives safety net: if sudden vision loss, new floaters, or flashing lights — attend eye casualty immediately', marks: 1 },
      ],
    },
    {
      domain: 'Key communication skills',
      items: [
        { description: 'Active listening — addresses the DVLA concern seriously; does not minimise the impact on his livelihood', marks: 1 },
        { description: 'Honest, clear communication about serious findings without causing unnecessary panic', marks: 1 },
      ],
    },
  ],
  expectedPresentation: [
    'The fundoscopy photograph demonstrates moderate non-proliferative diabetic retinopathy with diabetic maculopathy: microaneurysms, dot and blot haemorrhages, and hard exudates at or threatening the macula; no neovascularisation',
    'Trevor Hammond is a 58-year-old bus driver with an 8-year history of T2DM presenting with 3–4 weeks of blurred reading vision and central distortion (metamorphopsia) — symptoms consistent with clinically significant macular involvement',
    'Modifiable risk factor profile is poor: HbA1c 78 mmol/mol (target <53 mmol/mol), BP 158/96 mmHg (target <130/80 mmHg), 30 pack-year smoking history, BMI 31; missed retinopathy screening last year',
    'Treatment for diabetic maculopathy is intravitreal anti-VEGF injections (ranibizumab or aflibercept) — laser photocoagulation is for proliferative DR, not maculopathy',
    'DVLA: Trevor holds a Group 2 PSV licence; he is legally required to notify DVLA of this diagnosis; Group 2 standards require VA ≥6/7.5 in the better eye and ≥6/60 in the worse eye with a full binocular field — DVLA will formally assess fitness',
    'The student must not give a definitive verdict on the PSV licence — this is a DVLA decision, not a clinical one',
    'Management plan: urgent ophthalmology for anti-VEGF assessment; optimise HbA1c (consider SGLT-2 inhibitor addition); intensify antihypertensive therapy; prescribe atorvastatin 80 mg; smoking cessation referral; dietitian referral; annual DR screening from now on',
  ],
  vivaQuestions: [
    {
      question: 'Classify diabetic retinopathy and describe the features of each stage.',
      keyPoints: [
        'Mild NPDR: microaneurysms only — earliest change; focal outpouchings of retinal capillary walls from pericyte loss',
        'Moderate NPDR: microaneurysms + dot/blot haemorrhages + hard exudates; venous beading in fewer than 2 quadrants',
        'Severe NPDR (4-2-1 rule): blot haemorrhages in all 4 quadrants, OR venous beading in ≥2 quadrants, OR IRMA in ≥1 quadrant — 50% risk of progression to PDR within 1 year',
        'Proliferative DR (PDR): neovascularisation — NVD (new vessels on disc) or NVE (new vessels elsewhere); fragile vessels prone to vitreous haemorrhage and traction retinal detachment',
        'Diabetic maculopathy: hard exudates, oedema, or haemorrhages at or within 500 μm of the fovea; causes central visual loss; can occur at any stage of DR and is the most common cause of visual impairment in diabetic eye disease',
      ],
      source: 'Royal College of Ophthalmologists Diabetic Retinopathy Guidelines (2022); NICE NG17 (Diabetic eye screening, 2015)',
    },
    {
      question: 'What is the treatment for proliferative diabetic retinopathy versus diabetic maculopathy?',
      keyPoints: [
        'Proliferative DR: pan-retinal photocoagulation (PRP) laser — destroys ischaemic peripheral retina to reduce VEGF production and cause regression of new vessels; 1200–1600 burns delivered over 2–3 sessions',
        'Diabetic maculopathy (centre-involving): intravitreal anti-VEGF injections are first-line — ranibizumab, aflibercept, or bevacizumab (off-label); given as monthly loading doses then PRN based on visual acuity and OCT',
        'Anti-VEGF mechanism: binds VEGF-A reducing vascular permeability and macular oedema; superior to macular laser for centre-involving maculopathy (RESTORE and PROTOCOL T trials)',
        'Intravitreal steroids (dexamethasone implant, fluocinolone implant): for maculopathy in pseudophakic patients or inadequate response to anti-VEGF',
        'Systemic optimisation is essential alongside ocular treatment: HbA1c <53 mmol/mol, BP <130/80 mmHg, statin, smoking cessation',
        'Vitreoretinal surgery (vitrectomy): for non-clearing vitreous haemorrhage or traction retinal detachment in advanced PDR',
      ],
      source: 'Royal College of Ophthalmologists Diabetic Retinopathy Guidelines (2022); NICE NG28 (Type 2 diabetes, updated 2022)',
    },
    {
      question: 'What are the DVLA guidelines for drivers with diabetic eye disease?',
      keyPoints: [
        'Group 1 (car/motorcycle): visual acuity ≥6/12 on Snellen with both eyes open (or one eye if monocular); normal binocular visual field; no significant diplopia; must notify DVLA if vision deteriorates below standard',
        'Group 2 (LGV/PSV bus and lorry): stricter standards — VA ≥6/7.5 in the better eye and ≥6/60 in the worse; full binocular visual field; no significant pathology in either eye that is likely to impair driving',
        'Any new diagnosis affecting vision must be notified to DVLA by the driver — failure to notify is a criminal offence under the Road Traffic Act',
        'DVLA will request a report from the treating ophthalmologist and may arrange a formal driving assessment',
        'Insulin-treated diabetes and Group 2 licence: permitted since 2011 provided adequate hypoglycaemia awareness, no severe hypoglycaemic episode in the preceding 12 months, and blood glucose is checked and recorded before driving',
        'If the patient refuses to notify DVLA and continues to drive unsafely, the GMC advises the doctor to inform DVLA directly after warning the patient — document all discussions',
      ],
      source: 'DVLA Assessing Fitness to Drive — a guide for medical professionals (2023 edition)',
    },
  ],
};

export const OPHTHAL_MOCK_EXAMS: MockExamStation[] = [diabeticRetinopathyMockExam];
