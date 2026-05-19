import type { ExamStep } from './steps';

export const paedRespiratorySteps: ExamStep[] = [
  {
    id: 'pr-general',
    stepNumber: 1,
    title: 'General Inspection',
    subtitle: 'Respiratory distress, growth, and work of breathing',
    description: 'Assess the child from a distance for the presence and severity of respiratory distress, using age-appropriate normal respiratory rate ranges to interpret the findings.',
    checklist: [
      'Observe respiratory rate: normal ranges — neonate 40–60, infant 30–40, toddler 20–30, child 15–25 breaths/min',
      'Assess work of breathing: intercostal recession, subcostal recession, suprasternal recession (increasing severity), nasal flaring, grunting (neonatal alveolar collapse)',
      'Note use of accessory muscles (sternocleidomastoid) — indicates severe respiratory compromise',
      'Assess nutritional status: failure to thrive in cystic fibrosis, chronic hypoxia, severe asthma',
      'Look for chest deformity: barrel chest (chronic air trapping — asthma, CF), pectus carinatum (pigeon chest — asthma), Harrison\'s sulci (horizontal groove above costal margin)',
    ],
    questions: [
      {
        id: 'pr-gen-q1',
        type: 'examiner',
        text: 'What is grunting in a neonate and what does it indicate?',
      },
      {
        id: 'pr-gen-r1',
        type: 'rationale',
        text: '',
        bullets: [
          'Grunting: audible expiratory sound produced by partial closure of the glottis against a closed glottis — creates auto-PEEP to prevent alveolar collapse at end-expiration',
          'Indicates significant respiratory distress and impending respiratory failure in neonates',
          'Causes: neonatal respiratory distress syndrome (NRDS) in preterm infants (surfactant deficiency), transient tachypnoea of the newborn, meconium aspiration syndrome, pneumonia, congenital heart disease with pulmonary oedema',
          'Management: oxygen, CPAP or intubation depending on severity; surfactant (Curosurf) for NRDS in preterms',
        ],
        source: 'OHCM 10th ed., Ch. 12',
      },
    ],
  },
  {
    id: 'pr-hands',
    stepNumber: 2,
    title: 'Hands and Peripheral Signs',
    subtitle: 'Clubbing, cyanosis, and Harrison\'s sulci',
    description: 'Examine the hands and peripheral circulation for clubbing and cyanosis, which indicate chronic respiratory disease, and look for chest wall deformities reflecting increased work of breathing over time.',
    checklist: [
      'Inspect hands for clubbing: present in cystic fibrosis, bronchiectasis, empyema, lung abscess — NOT in asthma',
      'Assess peripheral cyanosis and central cyanosis (lips and tongue)',
      'Measure capillary refill time (<2 s normal)',
      'Look for Harrison\'s sulci: bilateral horizontal grooves along the lower costal margin — result of prolonged diaphragmatic traction with increased work of breathing; seen in poorly controlled asthma and CF',
      'Inspect for pectus carinatum (forward protrusion of the sternum — asthma, Marfan) and pectus excavatum (posterior sternal depression)',
    ],
    questions: [
      {
        id: 'pr-hands-q1',
        type: 'examiner',
        text: 'A 12-year-old with recurrent chest infections has clubbing. What diagnoses should you consider?',
      },
      {
        id: 'pr-hands-p1',
        type: 'pathology',
        text: '',
        bullets: [
          'Cystic fibrosis: commonest cause of clubbing in a child with recurrent chest infections; autosomal recessive, CFTR mutation (ΔF508 most common); clubbing + productive cough + failure to thrive + steatorrhoea',
          'Bronchiectasis (any cause): chronic suppurative lung disease with dilated, thickened bronchi; causes include CF, PCD, immunodeficiency, post-infectious (whooping cough, TB)',
          'Primary ciliary dyskinesia (PCD): immotile cilia → recurrent sinopulmonary infections, bronchiectasis, male infertility; 50% have situs inversus (Kartagener\'s syndrome)',
          'Empyema or lung abscess: subacute onset, systemic upset, localised chest signs; clubbing develops rapidly with suppurative infection',
        ],
        source: 'NICE NG78 (2017)',
      },
    ],
  },
  {
    id: 'pr-face',
    stepNumber: 3,
    title: 'Face and Upper Airway',
    subtitle: 'Allergic facies, nasal polyps, and throat signs',
    description: 'Inspect the face and upper airway for signs of atopic disease, cystic fibrosis-related nasal polyps, and adenoidal hypertrophy, which give clues to the underlying respiratory diagnosis.',
    checklist: [
      'Look for allergic facies: allergic shiners (dark periorbital circles from venous congestion), Dennie-Morgan lines (infra-orbital skin folds), open-mouth breathing',
      'Inspect nares for nasal polyps (grey-white glistening masses — CF in a child; investigate any child with nasal polyps with sweat test)',
      'Note adenoidal facies: open-mouth breathing, elongated face, high-arched palate (mouth-breathing from adenoid hypertrophy)',
      'Check for eczema (atopic triad: asthma + eczema + allergic rhinitis)',
    ],
    questions: [
      {
        id: 'pr-face-q1',
        type: 'examiner',
        text: 'What is the atopic triad and how does it relate to asthma management?',
      },
      {
        id: 'pr-face-r1',
        type: 'rationale',
        text: '',
        bullets: [
          'Atopic triad: asthma + eczema + allergic rhinitis — often co-exist; shared IgE-mediated Th2 inflammatory mechanism',
          'Family history of atopy is a strong risk factor for asthma; a personal history of eczema or rhinitis in a child with wheeze supports an asthma diagnosis',
          'Managing comorbid rhinitis (intranasal steroids) can improve asthma control — "one airway, one disease" concept',
          'Allergen sensitisation (HDM, grass pollen, cat dander): skin prick testing or specific IgE to guide allergen avoidance and potential immunotherapy',
        ],
        source: 'NICE NG80 (2017)',
      },
    ],
  },
  {
    id: 'pr-inspection-palpation',
    stepNumber: 4,
    title: 'Chest Inspection and Palpation',
    subtitle: 'Chest shape, expansion, tracheal position, and tactile vocal fremitus',
    description: 'Inspect and palpate the chest to identify deformity, asymmetric expansion, and tracheal deviation that indicate underlying pathology.',
    checklist: [
      'Inspect the chest shape: barrel chest (increased AP diameter = chronic air trapping); assess symmetry of expansion',
      'Palpate the trachea for deviation: away from the affected side in tension pneumothorax or large effusion; towards in collapse or fibrosis',
      'Place hands on the lower chest to assess expansion: reduced on the affected side in pneumonia, effusion, or pneumothorax',
      'Assess tactile vocal fremitus (TVF): increased over consolidation (sound transmitted better through solid than air), reduced over effusion or pneumothorax',
    ],
    questions: [
      {
        id: 'pr-insp-q1',
        type: 'examiner',
        text: 'A 7-year-old with poorly controlled asthma has a barrel chest and Harrison\'s sulci. Explain the mechanism.',
      },
      {
        id: 'pr-insp-r1',
        type: 'rationale',
        text: '',
        bullets: [
          'Barrel chest: chronic air trapping from expiratory airflow obstruction increases residual volume and FRC — the chest remodels to accommodate the hyperinflated lungs',
          'Harrison\'s sulci: the diaphragm inserts at the lower costal margin; with chronically increased work of breathing, diaphragmatic contraction pulls the ribs inward → groove formation',
          'Both signs reflect chronic poorly controlled asthma with persistent airway inflammation and remodelling',
          'CXR: hyperinflation (≥7 posterior ribs visible above the diaphragm), flattened diaphragms, increased AP diameter',
        ],
        source: 'NICE NG80 (2017)',
      },
    ],
  },
  {
    id: 'pr-percussion',
    stepNumber: 5,
    title: 'Percussion',
    subtitle: 'Compare resonance bilaterally, anterior and posterior',
    description: 'Percuss systematically across the chest comparing both sides at each level, starting anteriorly then posteriorly, to identify consolidation, effusion, or pneumothorax.',
    checklist: [
      'Percuss across the chest in a symmetrical pattern comparing both sides at each level',
      'Identify percussion notes: resonant (normal), hyperresonant (pneumothorax, emphysema), dull (consolidation, collapse), stony dull (pleural effusion)',
      'Percuss the supraclavicular areas and upper, middle, and lower zones anteriorly',
      'Percuss the posterior chest from apex to base, comparing both sides',
      'Note any asymmetry and its location',
    ],
    questions: [
      {
        id: 'pr-perc-q1',
        type: 'examiner',
        text: 'How do the percussion and auscultation findings differ between consolidation and a pleural effusion?',
      },
      {
        id: 'pr-perc-r1',
        type: 'rationale',
        text: '',
        bullets: [
          'Consolidation: dull percussion note, bronchial breathing (patent bronchus transmits high-pitched bronchial sounds), increased TVF and vocal resonance, aegophony at the upper border',
          'Pleural effusion: stony dull percussion (dullest of all — fluid transmits percussion best), absent breath sounds, reduced or absent TVF, reduced vocal resonance, tracheal deviation (if large — away from effusion)',
          'Distinction: TVF and vocal resonance are increased in consolidation (sound transmitted better through solid) but decreased in effusion (fluid damps sound transmission)',
          'In children, pneumonia is commoner than effusion — but parapneumonic effusion develops in up to 40% of bacterial pneumonia',
        ],
        source: 'geekymedics.com',
      },
    ],
  },
  {
    id: 'pr-auscultation',
    stepNumber: 6,
    title: 'Auscultation',
    subtitle: 'Breath sounds, wheeze, crackles, and stridor',
    description: 'Auscultate systematically with a paediatric stethoscope, characterising breath sounds and added sounds to localise the site and nature of respiratory pathology.',
    checklist: [
      'Auscultate with the diaphragm, comparing both sides at each level anteriorly and posteriorly',
      'Characterise breath sounds: vesicular (normal), bronchial (consolidation), reduced/absent (effusion, pneumothorax, collapse)',
      'Identify added sounds: wheeze (expiratory — asthma, bronchiolitis; inspiratory — laryngomalacia, foreign body), crackles (fine = consolidation/oedema; coarse = secretions, CF), stridor (upper airway — croup vs epiglottitis)',
      'Ask child to cough: do coarse crackles clear? (If yes, suggests secretions not fluid)',
      'Assess vocal resonance: say "99" or "one-one-one"; increased over consolidation, absent over effusion',
    ],
    questions: [
      {
        id: 'pr-ausc-q1',
        type: 'examiner',
        text: 'How do you clinically distinguish croup from acute epiglottitis?',
      },
      {
        id: 'pr-ausc-p1',
        type: 'pathology',
        text: '',
        bullets: [
          'Croup (laryngotracheobronchitis): age 6 months–6 years; parainfluenza virus; gradual onset with coryzal prodrome; barking cough + inspiratory stridor + hoarse voice; low-grade fever; child is not toxic',
          'Acute epiglottitis: now rare (due to Hib vaccination); classically age 2–7; sudden onset; high fever, toxic, drooling, no cough, tripod position (sitting forward); DO NOT attempt to examine throat or lay flat — risk of complete airway obstruction',
          'Management distinction: croup — oral dexamethasone 0.15 mg/kg (single dose), nebulised adrenaline for severe; epiglottitis — senior anaesthetist + ENT in theatre, IV antibiotics (ceftriaxone)',
          'Steeple sign on CXR (subglottic narrowing) = croup; thumb sign (swollen epiglottis) = epiglottitis',
        ],
        source: 'NICE CG128 (2019)',
      },
    ],
  },
  {
    id: 'pr-completion',
    stepNumber: 7,
    title: 'Completion',
    subtitle: 'SpO₂, PEFR, spirometry, and investigations',
    description: 'Complete the respiratory examination with bedside respiratory function tests and state a targeted investigation plan.',
    checklist: [
      'Measure oxygen saturation with pulse oximetry (SpO₂): normal ≥95%; <92% in a child requires supplemental oxygen',
      'Measure PEFR (peak expiratory flow rate) in children ≥5 years: compare to predicted for height using charts',
      'State spirometry findings you would expect: obstructive pattern (reduced FEV₁/FVC <0.7) in asthma and CF, reversibility test (salbutamol improves FEV₁ by >12% = reversibility)',
      'State investigations: CXR, sputum MC&S (CF: Pseudomonas, Staphylococcus aureus), sweat test (chloride >60 mmol/L = CF diagnostic — NICE NG78), allergy testing, nasal brushings (PCD)',
    ],
    questions: [
      {
        id: 'pr-comp-q1',
        type: 'examiner',
        text: 'How is cystic fibrosis diagnosed and what are the diagnostic criteria?',
      },
      {
        id: 'pr-comp-p1',
        type: 'pathology',
        text: '',
        bullets: [
          'Newborn blood spot screening (heel prick): immunoreactive trypsinogen (IRT) is elevated in CF — positive screen → sweat test',
          'Sweat chloride test (Macroduct pilocarpine iontophoresis): ≥60 mmol/L = positive (diagnostic); 30–59 = borderline; <30 = normal',
          'CFTR mutation analysis: >2000 mutations known; ΔF508 is the commonest (UK prevalence ~72% of alleles); compound heterozygotes may have atypical presentation',
          'Clinical diagnosis: two CFTR mutations OR positive sweat test × 2 + a clinical feature (chronic pulmonary disease, exocrine pancreatic insufficiency, obstructive azoospermia, elevated nasal potential difference)',
          'CFTR modulators (elexacaftor-tezacaftor-ivacaftor = Kaftrio): approved age ≥6 years in UK for ΔF508 homozygotes; transform disease course — NICE NG78 updated guidance',
        ],
        source: 'NICE NG78 (2017, updated 2021)',
      },
    ],
  },
];

// EXAM_ENTRY_DATA
// {"id":"paed-respiratory","title":"Paediatric Respiratory Examination","description":"Systematic paediatric respiratory examination with age-appropriate respiratory rate ranges, covering inspection (distress, clubbing, Harrison\'s sulci), percussion, auscultation (wheeze, crackles, stridor), and investigations for asthma, cystic fibrosis, bronchiolitis, and pneumonia.","specialtyId":"paediatrics","highYieldSummary":["Normal respiratory rates: neonate 40–60, infant 30–40, toddler 20–30, child 15–25/min. Tachypnoea + recession = respiratory distress requiring urgent assessment.","Clubbing in a child with recurrent chest infections: think cystic fibrosis first. Clubbing does NOT occur in asthma. CF: CFTR mutation, sweat Cl⁻ >60 mmol/L, Pseudomonas colonisation.","Nasal polyps in a child = investigate for CF (sweat test). In Samter\'s triad (adults): nasal polyps + asthma + aspirin sensitivity.","Croup (parainfluenza) vs epiglottitis: croup = barky cough + stridor + hoarse voice, treat with oral dexamethasone; epiglottitis = toxic + drooling + tripod — do NOT examine throat, call senior anaesthetist.","Bronchiolitis (RSV, infants <1 year): wheeze + subcostal recession + fine crackles; treat supportively (oxygen, NG feeds); NICE NG9 — no routine bronchodilators or steroids.","CFTR modulators (Kaftrio/elexacaftor-tezacaftor-ivacaftor): approved in UK for ≥6 years with ΔF508 — transforms CF disease course with ~10% FEV₁ improvement and >50% reduction in exacerbations."]}
