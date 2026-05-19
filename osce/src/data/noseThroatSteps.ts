import type { ExamStep } from './steps';

export const noseThroatSteps: ExamStep[] = [
  {
    id: 'nt-nose-ext',
    stepNumber: 1,
    title: 'External Nose Inspection',
    subtitle: 'Inspect nasal shape, skin, and bony dorsum',
    description: 'Inspect the external nose for deformity, skin changes, and nasal deviation that indicate trauma, systemic disease, or chronic inflammatory conditions.',
    checklist: [
      'Inspect the nasal dorsum for deviation, depression (saddle deformity), or widening',
      'Look for skin changes: erythema and telangiectasia (rosacea/rhinophyma), pustules, scarring',
      'Assess bony and cartilaginous structure from the front and from the side',
      'Note any septal haematoma bulge visible at the nares',
    ],
    questions: [
      {
        id: 'nt-ext-q1',
        type: 'examiner',
        text: 'What causes a saddle deformity of the nose and what systemic diseases are associated?',
      },
      {
        id: 'nt-ext-p1',
        type: 'pathology',
        text: '',
        bullets: [
          'Saddle deformity: collapse of the nasal dorsum from loss of cartilaginous or bony support',
          'Causes: nasal septal perforation (cocaine misuse, granulomatous disease), previous surgery or trauma, septal haematoma that was untreated',
          'Systemic associations: granulomatosis with polyangiitis (GPA/Wegener\'s — c-ANCA positive), relapsing polychondritis, tertiary syphilis',
          'GPA: also causes bloody crusting discharge, saddle nose, subglottic stenosis, pulmonary nodules, glomerulonephritis',
        ],
        source: 'OHCM 10th ed., Ch. 6',
      },
    ],
  },
  {
    id: 'nt-rhinoscopy',
    stepNumber: 2,
    title: 'Anterior Rhinoscopy',
    subtitle: 'Inspect nasal septum, turbinates, and mucosa',
    description: 'Perform anterior rhinoscopy using an auriscope or Thudicum speculum to inspect the nasal vestibule, septum, turbinates, and detect polyps or foreign bodies.',
    checklist: [
      'Tilt the patient\'s head slightly back to open the nasal vestibule',
      'Use an auriscope without speculum, or a Thudicum nasal speculum with a headlight',
      'Inspect Little\'s area (Kiesselbach\'s plexus) on the anteroinferior septum for vessels, crusting, or perforation',
      'Assess the inferior turbinate: size, colour (pale/boggy = allergy; erythematous = infective rhinitis)',
      'Look for nasal polyps in the middle meatus: pale, grey, glistening, smooth masses',
      'Check for septal deviation: note direction and whether it causes obstruction',
    ],
    questions: [
      {
        id: 'nt-rhino-q1',
        type: 'examiner',
        text: 'Where is Little\'s area and why is it clinically important?',
      },
      {
        id: 'nt-rhino-r1',
        type: 'rationale',
        text: '',
        bullets: [
          'Little\'s area (Kiesselbach\'s plexus): anteroinferior nasal septum — anastomosis of sphenopalatine, greater palatine, superior labial, and anterior ethmoidal arteries',
          'Site of ~90% of all epistaxis — most are anterior bleeds (visible, manageable with first aid)',
          'First aid: lean forward, pinch soft part of nose for 10–20 minutes; cauterise with silver nitrate if recurrent',
          'Posterior epistaxis (sphenopalatine artery): cannot be seen anteriorly, usually in older/hypertensive patients — requires nasal packing or surgical ligation',
        ],
        source: 'NICE NG145 (2019)',
      },
      {
        id: 'nt-rhino-q2',
        type: 'examiner',
        text: 'You see pale, grey, glistening masses in the middle meatus bilaterally. What is your diagnosis and what conditions are associated?',
      },
      {
        id: 'nt-rhino-p2',
        type: 'pathology',
        text: '',
        bullets: [
          'Nasal polyps: benign oedematous outgrowths of the nasal mucosa, arising from the middle meatus and ethmoid sinuses',
          'Associated conditions: chronic rhinosinusitis, allergic rhinitis, asthma (Samter\'s triad: nasal polyps + asthma + aspirin sensitivity), cystic fibrosis',
          'Unilateral polyp in a child = investigate for CF (sweat chloride); in adults = exclude malignancy (antrochoanal polyp or inverting papilloma)',
          'Treat: intranasal corticosteroids (first-line), short-course oral steroids, FESS (functional endoscopic sinus surgery) if refractory; NICE NG159',
        ],
        source: 'NICE NG159 (2021)',
      },
    ],
  },
  {
    id: 'nt-sinuses',
    stepNumber: 3,
    title: 'Sinus Assessment',
    subtitle: 'Percussion and palpation of frontal and maxillary sinuses',
    description: 'Assess the paranasal sinuses by palpation and percussion for tenderness, which localises sinusitis to specific sinus compartments.',
    checklist: [
      'Palpate over the frontal sinuses (supraorbital ridges) for tenderness',
      'Palpate over the maxillary sinuses (cheeks, below the orbital rim) for tenderness',
      'Gently percuss over each sinus and compare sides',
      'Note any facial swelling or periorbital oedema (orbital cellulitis = emergency complication)',
      'Ask about postnasal drip, pressure sensation, and whether symptoms worsen on bending forward',
    ],
    questions: [
      {
        id: 'nt-sinus-q1',
        type: 'examiner',
        text: 'What are the criteria for diagnosing acute rhinosinusitis and when should you prescribe antibiotics?',
      },
      {
        id: 'nt-sinus-r1',
        type: 'rationale',
        text: '',
        bullets: [
          'Acute rhinosinusitis: nasal blockage/obstruction + one of: facial pain/pressure, purulent nasal discharge, reduced smell; symptoms <12 weeks',
          'Most cases are viral (rhinovirus) and self-limiting within 2–3 weeks — antibiotics not routinely indicated',
          'NICE NG9 (2008): prescribe antibiotics only if: severe systemically unwell, symptoms not improving after 10 days, or high risk of complications',
          'Complications requiring urgent referral: periorbital oedema (orbital cellulitis), intracranial spread (meningitis, brain abscess), Pott\'s puffy tumour (frontal sinus osteomyelitis)',
        ],
        source: 'NICE NG9 (2008)',
      },
    ],
  },
  {
    id: 'nt-oral-cavity',
    stepNumber: 4,
    title: 'Oral Cavity Inspection',
    subtitle: 'Inspect lips, mucosa, tongue, and floor of mouth',
    description: 'Systematically inspect the oral cavity before examining the oropharynx, looking for ulcers, lesions, and dentition relevant to ENT pathology and systemic disease.',
    checklist: [
      'Inspect the lips for ulcers, angular cheilitis (iron/B12 deficiency), or herpes labialis',
      'Inspect buccal mucosa and hard palate for ulcers (aphthous, herpetic, Behçet\'s) or candidiasis',
      'Inspect the tongue: size, colour, fasciculations (CN XII/MND), coating, and geographic tongue',
      'Ask patient to lift the tongue: inspect the floor of mouth for ranula or submandibular duct stones',
      'Assess dentition and note poor oral hygiene (risk factor for aspiration pneumonia, peritonsillar abscess)',
    ],
    questions: [
      {
        id: 'nt-oral-q1',
        type: 'examiner',
        text: 'What are the causes of oral ulcers and which features suggest malignancy?',
      },
      {
        id: 'nt-oral-p1',
        type: 'pathology',
        text: '',
        bullets: [
          'Aphthous ulcers: most common, shallow, painful, yellow base with red halo — usually self-limiting; recurrent aphthous stomatitis associated with Crohn\'s, coeliac, Behçet\'s',
          'Malignant ulcer (oral SCC): painless in early stages, indurated edge, fixed base, does not heal in 3 weeks — associated with smoking + alcohol; 2-week-wait referral',
          'Herpetic stomatitis: multiple painful vesicles/ulcers, systemic upset, recurrence on lip (herpes labialis); treat severe cases with aciclovir',
          'Behçet\'s disease: recurrent oral + genital ulcers + uveitis — treat with colchicine, immunosuppression',
        ],
        source: 'NICE NG12 (2015)',
      },
    ],
  },
  {
    id: 'nt-oropharynx',
    stepNumber: 5,
    title: 'Oropharynx Inspection',
    subtitle: 'Inspect tonsils, posterior pharyngeal wall, and uvula',
    description: 'Inspect the oropharynx with a tongue depressor and good lighting to assess tonsillar size, exudate, and the posterior pharyngeal wall for pathology.',
    checklist: [
      'Ask the patient to open wide and say "aah" — observe palatal elevation (CN IX/X)',
      'Use a tongue depressor to depress the tongue and visualise the oropharynx',
      'Grade tonsillar size: Grade 1 = within tonsillar pillars; 2 = pillar to midline; 3 = touching uvula; 4 = kissing tonsils',
      'Look for exudate on tonsils, membrane (diphtheria), asymmetric tonsillar enlargement',
      'Note uvular deviation (away from the affected side in peritonsillar abscess)',
      'Inspect the posterior pharyngeal wall for lymphoid follicles or mucopus',
    ],
    questions: [
      {
        id: 'nt-oropharynx-q1',
        type: 'examiner',
        text: 'Using the Centor criteria, when would you prescribe antibiotics for a sore throat?',
      },
      {
        id: 'nt-oropharynx-r1',
        type: 'rationale',
        text: '',
        bullets: [
          'Centor criteria: tonsillar exudate, tender anterior cervical lymphadenopathy, absence of cough, history of fever (score 0–4)',
          'Score 0–1: no antibiotics; score 2–3: consider delayed antibiotic prescription or rapid antigen test; score 4: prescribe phenoxymethylpenicillin (penicillin V) 10 days',
          'Most sore throats are viral — antibiotics shorten duration by only 16–24 hours but cause side effects and antibiotic resistance',
          'NICE NG84 (2018): use FeverPAIN or Centor score to guide antibiotic prescribing',
        ],
        source: 'NICE NG84 (2018)',
      },
      {
        id: 'nt-oropharynx-q2',
        type: 'examiner',
        text: 'A patient with tonsillitis now has a hot potato voice, trismus, and the uvula is deviated to the right. What is the diagnosis and management?',
      },
      {
        id: 'nt-oropharynx-p2',
        type: 'pathology',
        text: '',
        bullets: [
          'Peritonsillar abscess (quinsy): collection of pus between the tonsil and superior pharyngeal constrictor — complication of tonsillitis',
          'Features: severe unilateral throat pain, trismus (pterygoid muscle spasm), drooling, muffled "hot potato" voice, uvular deviation away from the abscess, ipsilateral tender cervical nodes',
          'Treat: IV antibiotics (co-amoxiclav or benzylpenicillin) + surgical drainage (needle aspiration or incision and drainage); consider tonsillectomy after second episode',
          'Complications if untreated: parapharyngeal spread, airway compromise, sepsis, parapharyngeal abscess',
        ],
        source: 'NICE CG69 (2008)',
      },
    ],
  },
  {
    id: 'nt-larynx',
    stepNumber: 6,
    title: 'Laryngeal Assessment',
    subtitle: 'Hoarseness, indirect laryngoscopy description, neck palpation',
    description: 'Assess the larynx by listening to the voice and explaining the technique of laryngeal examination, as hoarseness indicates pathology that must always be investigated.',
    checklist: [
      'Listen to the voice: hoarse (vocal fold pathology), muffled (supraglottic), breathy (paralysis), strained (spasmodic dysphonia)',
      'Ask about duration of hoarseness: >3 weeks in a smoker = urgent referral for laryngoscopy',
      'Palpate the larynx for tenderness and crepitus; assess for laryngeal elevation on swallowing',
      'Describe flexible nasendoscopy or indirect laryngoscopy as the technique to visualise the vocal cords',
      'Assess for bovine cough (weak, non-explosive — vocal cord paralysis)',
    ],
    questions: [
      {
        id: 'nt-larynx-q1',
        type: 'examiner',
        text: 'A 60-year-old smoker has had a hoarse voice for 6 weeks. What is your differential and management?',
      },
      {
        id: 'nt-larynx-p1',
        type: 'pathology',
        text: '',
        bullets: [
          'Hoarseness >3 weeks in a smoker: refer urgently for flexible nasendoscopy to exclude laryngeal carcinoma (SCC) — 2-week-wait under NICE NG12',
          'Laryngeal SCC: associated with smoking (95%) and alcohol; commonest on true vocal fold (glottic); presents early with hoarseness (good prognosis); treat with radiotherapy (early) or surgery (advanced)',
          'Other differentials: vocal fold polyp (benign, unilateral), vocal cord paralysis (left RLN: lung cancer, aortic aneurysm, mediastinal disease, thyroidectomy), laryngitis, hypothyroidism',
          'Bovine cough + hoarse voice = vocal cord paralysis — check for left hilar mass on CXR; CT chest/neck',
        ],
        source: 'NICE NG12 (2015)',
      },
      {
        id: 'nt-larynx-q2',
        type: 'examiner',
        text: 'Why is the left recurrent laryngeal nerve more commonly injured than the right?',
      },
      {
        id: 'nt-larynx-r2',
        type: 'rationale',
        text: '',
        bullets: [
          'Left RLN has a longer intrathoracic course — loops under the arch of the aorta before ascending in the tracheo-oesophageal groove',
          'Right RLN loops under the right subclavian artery and has a shorter, more extrathoracic course',
          'Left RLN vulnerable to: lung cancer (left hilar), aortic aneurysm, mediastinal lymphadenopathy, oesophageal cancer, thoracic surgery',
          'Both RLNs are vulnerable to thyroid surgery (pass posterior to the thyroid — identify and protect intraoperatively)',
        ],
        source: 'OHCM 10th ed., Ch. 6',
      },
    ],
  },
  {
    id: 'nt-completion',
    stepNumber: 7,
    title: 'Completion',
    subtitle: 'Lymph nodes, investigations, and referral',
    description: 'Complete the ENT examination by palpating the cervical lymph nodes and stating an investigation plan appropriate to the clinical findings.',
    checklist: [
      'Palpate all cervical lymph node groups (Levels I–VI) for lymphadenopathy',
      'Assess any lymphadenopathy: size, consistency, tenderness, mobility',
      'State investigations based on findings (CT sinuses, nasendoscopy, audiogram, allergy testing)',
      'Offer to perform an ear examination (otoscopy, Rinne and Weber tests) to complete the ENT assessment',
      'Summarise findings and state appropriate referral pathways',
    ],
    questions: [
      {
        id: 'nt-comp-q1',
        type: 'examiner',
        text: 'What investigations would you request for a patient presenting with a unilateral neck mass and a hoarse voice?',
      },
      {
        id: 'nt-comp-r1',
        type: 'rationale',
        text: '',
        bullets: [
          'Neck USS and fine needle aspiration cytology (FNAC) — first-line for any neck lump to determine origin and cytology',
          'Flexible nasendoscopy — visualise the larynx, base of tongue, post-nasal space for primary tumour',
          'CT neck + chest + abdomen — staging of head and neck SCC; detect mediastinal pathology causing RLN palsy',
          'HPV testing on biopsy material — HPV-positive oropharyngeal cancer (tonsil, tongue base) has better prognosis; PET-CT if unknown primary suspected',
        ],
        source: 'NICE NG36 (2016)',
      },
    ],
  },
];

// EXAM_ENTRY_DATA
// {"id":"nose-throat","title":"Nose & Throat Examination","description":"Systematic ENT examination of the nose and throat covering anterior rhinoscopy, sinus assessment, oral cavity and oropharynx inspection, laryngeal assessment, and cervical lymph nodes.","specialtyId":"ent","highYieldSummary":["Little\'s area (Kiesselbach\'s plexus) is the site of 90% of epistaxis — five arteries anastomose on the anteroinferior nasal septum; first aid is to lean forward and pinch the soft nose for 10–20 minutes.","Nasal polyps: bilateral pale glistening masses in the middle meatus — associated with Samter\'s triad (polyps + asthma + aspirin sensitivity) and CF. Unilateral polyp in a child = CF until proven otherwise.","Centor score ≥4: treat tonsillitis with phenoxymethylpenicillin 10 days. Scores 0–1: no antibiotics (most sore throats are viral). NICE NG84.","Peritonsillar abscess (quinsy): trismus + hot potato voice + uvula deviation away from affected side — drain surgically + IV antibiotics.","Hoarseness >3 weeks in a smoker = urgent 2-week-wait laryngoscopy referral to exclude laryngeal SCC (NICE NG12).","Left RLN loops under the aortic arch — more commonly injured than the right; causes: lung cancer, aortic aneurysm, mediastinal disease, thyroidectomy."]}
