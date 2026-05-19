import type { ExamStep } from './steps';

export const paedCardioSteps: ExamStep[] = [
  {
    id: 'pc-general',
    stepNumber: 1,
    title: 'General Inspection',
    subtitle: 'From the end of the bed — dysmorphic features, cyanosis, distress',
    description: 'Inspect the child from a distance before approaching, assessing for syndromic features, cyanosis, respiratory distress, and nutritional status that indicate significant cardiac disease.',
    checklist: [
      'Approach child-friendly: introduce yourself to the child and parent, get down to the child\'s level',
      'Inspect for dysmorphic features: Down syndrome (AVSD), Turner (bicuspid AoV + coarctation), Noonan (pulmonary stenosis), Williams (supravalvular AS), Marfan (aortic root dilatation)',
      'Assess for central cyanosis: inspect lips and tongue (peripheral cyanosis is less reliable in children)',
      'Note nutritional status and growth: failure to thrive suggests significant cardiac disease with increased metabolic demand or reduced oral intake',
      'Observe respiratory rate and distress: tachypnoea + intercostal recession = heart failure in children',
      'Look for surgical scars before examining (see step 4)',
    ],
    questions: [
      {
        id: 'pc-gen-q1',
        type: 'examiner',
        text: 'Which syndromes are associated with congenital heart disease and what cardiac lesion does each typically cause?',
      },
      {
        id: 'pc-gen-p1',
        type: 'pathology',
        text: '',
        bullets: [
          'Down syndrome (Trisomy 21): AVSD (atrioventricular septal defect) and VSD — ~50% have cardiac defect',
          'Turner syndrome (45,XO): bicuspid aortic valve, coarctation of the aorta — screen all Turner girls with cardiac MRI',
          'Noonan syndrome: pulmonary valve stenosis (50%), HCM — autosomal dominant, PTPN11 gene; also short stature and webbed neck (similar to Turner)',
          'Williams syndrome (7q11.23 deletion): supravalvular aortic stenosis — "elfin facies", hypercalcaemia, intellectual disability',
          'Marfan syndrome (FBN1): aortic root dilatation and AR, MR — annual surveillance echo; beta-blockers; elective aortic root repair if >4.5–5 cm',
        ],
        source: 'OHCM 10th ed., Ch. 12',
      },
    ],
  },
  {
    id: 'pc-hands',
    stepNumber: 2,
    title: 'Hands, Pulses, and Peripheral Signs',
    subtitle: 'Clubbing, cyanosis, pulses, and radio-femoral delay',
    description: 'Examine the hands and peripheral pulses, checking for clubbing (cyanotic CHD), peripheral cyanosis, and the critical sign of radio-femoral delay which indicates coarctation of the aorta.',
    checklist: [
      'Inspect hands for clubbing: loss of nail fold angle, drumstick fingers — present in cyanotic CHD and infective endocarditis',
      'Assess capillary refill time (<2 s normal) and temperature',
      'Palpate radial pulse: rate (normal resting rates: neonate 110–160, infant 100–160, child 70–140, adolescent 60–100) and rhythm',
      'Check femoral pulses simultaneously with radial pulses: radio-femoral delay (radial stronger and earlier) = coarctation of the aorta',
      'Compare all four limb saturations if coarctation or duct-dependent circulation is suspected',
    ],
    questions: [
      {
        id: 'pc-hands-q1',
        type: 'examiner',
        text: 'How do you detect coarctation of the aorta on clinical examination?',
      },
      {
        id: 'pc-hands-p1',
        type: 'pathology',
        text: '',
        bullets: [
          'Radio-femoral delay: simultaneous palpation of radial and femoral pulses — radial is felt earlier (or femoral is weak/absent) in coarctation',
          'Upper limb hypertension with lower limb hypotension: BP discrepancy >20 mmHg between arms and legs is diagnostic',
          'Ejection systolic murmur radiating to the back (inter-scapular) and an ejection click; associated bicuspid aortic valve (80%)',
          'Rib notching on CXR (age >8 years): intercostal artery collateral formation erodes the inferior rib borders',
          'Turner syndrome: screen all patients for coarctation; treat with balloon angioplasty ± stent or surgical repair; left lateral thoracotomy scar post-repair',
        ],
        source: 'OHCM 10th ed., Ch. 12',
      },
    ],
  },
  {
    id: 'pc-face',
    stepNumber: 3,
    title: 'Face and Sclerae',
    subtitle: 'Anaemia, jaundice, and syndromic facies',
    description: 'Inspect the face for anaemia, jaundice, and dysmorphic features that indicate syndromic CHD, and check for central cyanosis at the lips and tongue.',
    checklist: [
      'Inspect sclerae for pallor (anaemia, which worsens cardiac failure) and jaundice (hepatic congestion from right heart failure)',
      'Look at the lips and tongue for central cyanosis',
      'Note periorbital oedema (heart failure, though less common in children than adults)',
      'Identify syndromic facies: broad flat face + epicanthic folds (Down); low-set ears + micrognathia (DiGeorge/22q11); strabismus + stellate iris (Williams)',
    ],
    questions: [
      {
        id: 'pc-face-q1',
        type: 'examiner',
        text: 'What is DiGeorge syndrome and what cardiac defects does it cause?',
      },
      {
        id: 'pc-face-p1',
        type: 'pathology',
        text: '',
        bullets: [
          'DiGeorge syndrome (22q11.2 deletion): conotruncal cardiac defects — Tetralogy of Fallot (commonest), truncus arteriosus, interrupted aortic arch, VSD',
          'Also: thymic aplasia (T-cell immunodeficiency), hypoparathyroidism (hypocalcaemia), palatal abnormalities (submucous cleft, velopharyngeal insufficiency — nasal speech)',
          'Behavioural/cognitive: learning disability, increased risk of schizophrenia in adulthood (~25%)',
          'CATCH-22 mnemonic: Cardiac, Abnormal facies, Thymic hypoplasia, Cleft palate, Hypocalcaemia, 22q11 deletion',
        ],
        source: 'OHCM 10th ed., Ch. 12',
      },
    ],
  },
  {
    id: 'pc-precordium',
    stepNumber: 4,
    title: 'Precordium Inspection and Palpation',
    subtitle: 'Apex beat, scars, thrills, and heaves',
    description: 'Inspect and palpate the precordium to identify surgical scars, localise the apex beat, and feel for thrills and heaves that indicate haemodynamically significant cardiac pathology.',
    checklist: [
      'Inspect for surgical scars: midline sternotomy (VSD repair, ASD repair, TOF repair, arterial switch); left lateral thoracotomy (PDA ligation, coarctation repair, Blalock-Taussig shunt)',
      'Locate apex beat: normal position is 4th ICS MCL in <5 years, 5th ICS MCL in >5 years; displacement indicates cardiomegaly',
      'Feel for a left parasternal heave (sustained outward movement = RV hypertrophy — pulmonary hypertension, pulmonary stenosis)',
      'Feel for thrills (palpable murmurs): at the left sternal edge (VSD), at the pulmonary area (PS), and at the aortic area (AS)',
    ],
    questions: [
      {
        id: 'pc-prec-q1',
        type: 'examiner',
        text: 'What do each of the common surgical scars in congenital heart disease indicate?',
      },
      {
        id: 'pc-prec-r1',
        type: 'rationale',
        text: '',
        bullets: [
          'Midline sternotomy: open heart surgery requiring cardiopulmonary bypass — VSD patch, ASD closure, TOF repair (RVOT patch + VSD), arterial switch for TGA, Fontan procedure',
          'Left lateral thoracotomy: Blalock-Taussig shunt (subclavian-to-pulmonary artery shunt — palliative for cyanotic CHD), coarctation repair, PDA ligation',
          'Right lateral thoracotomy: less common; some older coarctation repairs, lung procedures',
          'Median sternotomy + bilateral thoracotomy ("clamshell"): heart-lung transplant',
        ],
        source: 'geekymedics.com',
      },
    ],
  },
  {
    id: 'pc-auscultation',
    stepNumber: 5,
    title: 'Auscultation',
    subtitle: 'Heart sounds, murmurs, and innocent vs pathological distinction',
    description: 'Auscultate systematically in all four areas with bell and diaphragm, characterising any murmur and distinguishing innocent from pathological murmurs.',
    checklist: [
      'Auscultate in all four areas: apex (mitral), lower left sternal edge (tricuspid), upper left sternal edge (pulmonary), upper right sternal edge (aortic); also axilla and back',
      'Assess S1 and S2: note fixed splitting of S2 (classic for ASD — equalises right and left ventricular outflow times)',
      'Characterise any murmur: Grade (I–VI Levine), timing (systolic/diastolic/continuous), quality (harsh/blowing/machinery), location, radiation',
      'Innocent murmur features: soft (≤Grade 2), systolic only, no thrill, no radiation, varies with posture and respiration, no associated symptoms',
      'Still\'s murmur: most common innocent murmur; low-pitched vibratory/musical quality, left sternal edge, decreases on standing',
    ],
    questions: [
      {
        id: 'pc-ausc-q1',
        type: 'examiner',
        text: 'Describe the murmur of a VSD and how its character relates to the size of the defect.',
      },
      {
        id: 'pc-ausc-p1',
        type: 'pathology',
        text: '',
        bullets: [
          'VSD: pansystolic murmur, harsh, best heard at the lower left sternal edge, radiates throughout the precordium',
          'Small ("restrictive") VSD: loud harsh pansystolic murmur (high pressure gradient across the defect) but little haemodynamic consequence — "maladie de Roger"',
          'Large ("non-restrictive") VSD: quieter murmur (lower gradient as pressures equalise) but significant left-to-right shunt, pulmonary plethora, heart failure, failure to thrive',
          'Eisenmenger syndrome: large unrepaired VSD equalises pressures → right-to-left shunt → central cyanosis; pulmonary vascular resistance becomes fixed — cardiac transplant required',
        ],
        source: 'OHCM 10th ed., Ch. 12',
      },
      {
        id: 'pc-ausc-q2',
        type: 'examiner',
        text: 'What are the clinical features of Tetralogy of Fallot?',
      },
      {
        id: 'pc-ausc-p2',
        type: 'pathology',
        text: '',
        bullets: [
          'Tetralogy of Fallot (TOF): 4 components — VSD, pulmonary stenosis (RVOT obstruction), overriding aorta, right ventricular hypertrophy',
          'Commonest cyanotic CHD (~5% of all CHD); typically presents with cyanosis from birth or early infancy',
          'Hypercyanotic ("Tet") spells: acute episodes of severe cyanosis (spasm of RVOT), distress, syncope — treat with knee-chest position, oxygen, IV morphine, propranolol; calm the child',
          'CXR: "boot-shaped heart" (RVH upturns the cardiac apex) + decreased pulmonary vascularity (oligaemia)',
          'Repair at 3–6 months: patch VSD + relieve RVOT obstruction; midline sternotomy scar',
        ],
        source: 'OHCM 10th ed., Ch. 12',
      },
    ],
  },
  {
    id: 'pc-abdomen',
    stepNumber: 6,
    title: 'Abdomen and Femoral Pulses',
    subtitle: 'Hepatomegaly, femoral pulses, and oedema',
    description: 'Palpate the liver for hepatomegaly (right heart failure), check femoral pulses for coarctation, and assess for peripheral oedema.',
    checklist: [
      'Palpate the liver: start from the right iliac fossa, move upward; hepatomegaly (>2 cm below costal margin in infants) indicates right heart failure or cardiac cirrhosis',
      'Feel both femoral pulses simultaneously with the radial pulse for radio-femoral delay',
      'Note whether femoral pulses are weak or absent (coarctation)',
      'Assess for peripheral oedema: in infants this is typically periorbital and sacral (not ankle); in older children, check ankles',
      'Note any ascites (rare in children, suggests severe cardiac failure or hepatic pathology)',
    ],
    questions: [
      {
        id: 'pc-abd-q1',
        type: 'examiner',
        text: 'How does heart failure present differently in infants compared to adults?',
      },
      {
        id: 'pc-abd-p1',
        type: 'pathology',
        text: '',
        bullets: [
          'Infants: poor feeding (unable to take full feeds, sweating on feeding), failure to thrive, tachypnoea, tachycardia, hepatomegaly, periorbital oedema — ankle oedema not typical',
          'Adults: ankle oedema, orthopnoea, PND, raised JVP — not seen in infants due to different anatomy and body composition',
          'Causes in neonates: duct-dependent lesions presenting as duct closes (coarctation, hypoplastic left heart, critical AS/PS) — tachycardia, hepatomegaly, poor perfusion, metabolic acidosis; emergency prostaglandin E1 (alprostadil) to keep PDA open',
          'Causes in infants: large L-R shunt (VSD, AVSD, PDA) — L-R shunt increases once pulmonary vascular resistance falls at 4–6 weeks',
        ],
        source: 'OHCM 10th ed., Ch. 12',
      },
    ],
  },
  {
    id: 'pc-completion',
    stepNumber: 7,
    title: 'Completion',
    subtitle: 'Four-limb saturations, investigations, and referral',
    description: 'Complete the cardiovascular examination by measuring four-limb blood pressures and saturations, and plan appropriate investigations.',
    checklist: [
      'Measure four-limb blood pressures: upper limb higher than lower limb by >20 mmHg = coarctation',
      'Measure pulse oximetry: pre-ductal (right hand) and post-ductal (either foot) saturation; discrepancy >3% = duct-dependent circulation',
      'State investigations: CXR (cardiothoracic ratio, pulmonary vascularity), ECG, echocardiogram (gold standard), pulse oximetry screening (NICE guidance)',
      'Summarise findings and formulate a differential for the murmur or abnormality found',
    ],
    questions: [
      {
        id: 'pc-comp-q1',
        type: 'examiner',
        text: 'What is the rationale for pulse oximetry screening of newborns and what does it detect?',
      },
      {
        id: 'pc-comp-r1',
        type: 'rationale',
        text: '',
        bullets: [
          'Pulse oximetry screening (CCHD screen): performed at 24–48 h in well newborns; measures pre-ductal (right hand) and post-ductal (foot) SpO₂',
          'Detects critical congenital heart disease (CCHD) before duct closure: coarctation, hypoplastic left heart, transposition of great arteries, pulmonary atresia',
          'Positive screen (SpO₂ <95% or >3% pre-post discrepancy): refers for urgent echocardiogram',
          'NICE endorses newborn pulse oximetry screening — added to NHS newborn check in England; sensitivity ~75% for CCHD when combined with physical examination',
        ],
        source: 'NICE NG62 (2016)',
      },
    ],
  },
];

// EXAM_ENTRY_DATA
// {"id":"paed-cardiovascular","title":"Paediatric Cardiovascular Examination","description":"Systematic paediatric cardiac examination covering syndromic features, peripheral signs and radio-femoral delay, precordial auscultation, innocent vs pathological murmur distinction, and key congenital heart lesions.","specialtyId":"paediatrics","highYieldSummary":["Radio-femoral delay + upper limb hypertension = coarctation of the aorta until proven otherwise — associated with Turner syndrome and bicuspid aortic valve in 80%.","Fixed splitting of S2 = ASD (equalised right and left ventricular outflow times). VSD = pansystolic murmur lower left sternal edge. PDA = continuous machinery murmur left infraclavicular.","TOF (tetralogy of Fallot): VSD + pulmonary stenosis + overriding aorta + RVH. Boot-shaped heart on CXR. Tet spells treated with knee-chest position + IV morphine + propranolol.","Innocent murmurs: ≤Grade 2, systolic only, no thrill, no radiation, varies with posture/respiration. Still\'s murmur: vibratory/musical, left sternal edge — commonest innocent murmur.","Heart failure in infants: poor feeding + sweating on feeding + failure to thrive + tachypnoea + hepatomegaly. Ankle oedema is NOT typical in infants (vs adults).","Newborn pulse oximetry screening: pre- and post-ductal SpO₂ at 24–48 h; detects CCHD (coarctation, HLHS, TGA) before duct closure — refer for echo if SpO₂ <95% or >3% discrepancy."]}
