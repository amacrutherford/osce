import type { ExamStep } from './steps';

export const redEyeSteps: ExamStep[] = [
  {
    id: 're-history',
    stepNumber: 1,
    title: 'Focused History',
    subtitle: 'Directed questions to differentiate causes of red eye',
    description: 'Take a focused history to stratify the likely diagnosis before examination, as the pattern of symptoms (pain, vision change, discharge) reliably differentiates serious from benign causes.',
    checklist: [
      'Ask about onset (sudden vs gradual), unilateral vs bilateral',
      'Characterise pain: absent or gritty (conjunctivitis/dry eye), severe aching (uveitis/keratitis/scleritis), explosive with nausea/vomiting (acute angle-closure glaucoma)',
      'Ask about visual disturbance: reduced VA or halos around lights = serious until proven otherwise',
      'Ask about discharge: purulent (bacterial conjunctivitis), watery (viral/allergic), absent (uveitis/keratitis/glaucoma)',
      'Ask about contact lens wear (Pseudomonas/Acanthamoeba keratitis risk) and systemic disease (HLA-B27 associated anterior uveitis)',
      'Ask about photophobia (anterior uveitis, keratitis) and previous episodes',
    ],
    questions: [
      {
        id: 're-hist-q1',
        type: 'examiner',
        text: 'Which features in a red eye history suggest a serious (sight-threatening) cause?',
      },
      {
        id: 're-hist-r1',
        type: 'rationale',
        text: '',
        bullets: [
          'Reduced visual acuity in a red eye = serious until proven otherwise — same-day ophthalmology review',
          'Severe pain with nausea/vomiting + halos around lights = acute angle-closure glaucoma (EMERGENCY)',
          'Photophobia + perilimbal injection (ciliary flush) = intraocular inflammation (uveitis, keratitis)',
          'Contact lens wear + pain + photophobia = keratitis (risk of corneal ulcer and vision loss)',
          'Absent discharge with significant pain differentiates iritis/glaucoma from conjunctivitis',
        ],
        source: 'Royal College of Ophthalmologists Red Eye Guidelines (2022)',
      },
    ],
  },
  {
    id: 're-va',
    stepNumber: 2,
    title: 'Visual Acuity',
    subtitle: 'Test VA in each eye before any other examination',
    description: 'Always measure visual acuity as the first step in any eye examination — reduced VA in a red eye mandates urgent ophthalmology referral.',
    checklist: [
      'Test each eye separately with glasses/contact lenses if worn (distance correction)',
      'Use Snellen chart at 6 metres or LogMAR chart at 4 metres',
      'Record as fraction (e.g. 6/6) or LogMAR value',
      'If unable to read chart: test finger counting, hand movements, light perception',
      'Test with pinhole: improvement = refractive error; no improvement = pathological',
    ],
    questions: [
      {
        id: 're-va-q1',
        type: 'examiner',
        text: 'Why do you measure visual acuity first in any red eye assessment?',
      },
      {
        id: 're-va-r1',
        type: 'rationale',
        text: '',
        bullets: [
          'VA is the single most important indicator of the severity of ocular disease',
          'Reduced VA in a red eye mandates same-day urgent ophthalmology referral — it indicates corneal, lens, vitreous, retinal, or optic nerve pathology',
          'Normal VA in a red eye generally (but not always) indicates a more benign cause such as conjunctivitis',
          'It also provides a medicolegal baseline — all consultations involving the eye must document VA',
        ],
        source: 'Royal College of Ophthalmologists Red Eye Guidelines (2022)',
      },
    ],
  },
  {
    id: 're-pattern',
    stepNumber: 3,
    title: 'Pattern of Redness',
    subtitle: 'Localise conjunctival injection, ciliary flush, or subconjunctival haemorrhage',
    description: 'Identify the distribution and nature of the redness to differentiate conjunctival disease (superficial) from intraocular disease (perilimbal ciliary flush).',
    checklist: [
      'Inspect the entire conjunctiva in good light with a pen torch',
      'Assess whether redness is diffuse (more toward fornices = conjunctivitis) or perilimbal (ciliary/circumcorneal flush = intraocular disease)',
      'Attempt to move the conjunctiva with a cotton bud: conjunctival injection moves with it; ciliary flush does not',
      'Look for a well-demarcated bright red patch (subconjunctival haemorrhage)',
      'Inspect the sclera for deep violaceous redness (scleritis — tender globe)',
    ],
    questions: [
      {
        id: 're-pattern-q1',
        type: 'examiner',
        text: 'How do you distinguish conjunctival injection from a ciliary (circumcorneal) flush?',
      },
      {
        id: 're-pattern-r1',
        type: 'rationale',
        text: '',
        bullets: [
          'Conjunctival injection: diffuse redness of bulbar and palpebral conjunctiva, brighter toward the fornices; the redness moves with the conjunctiva — indicates superficial disease (conjunctivitis)',
          'Ciliary flush (perilimbal injection): ring of deep redness surrounding the limbus; does NOT move with conjunctiva; indicates anterior segment inflammation — uveitis, keratitis, or acute glaucoma',
          'Scleritis: deep, immovable, violaceous redness; tender on palpation of globe; associated with RA and other CTDs',
          'Episcleritis: sectoral bright redness, blanches with phenylephrine drops, mild discomfort — benign, self-limiting',
        ],
        source: 'OHCM 10th ed., Ch. 7',
      },
      {
        id: 're-pattern-q2',
        type: 'examiner',
        text: 'A patient has a sudden, painless, bright red patch on the white of one eye after coughing. What is this and what is your management?',
      },
      {
        id: 're-pattern-p2',
        type: 'pathology',
        text: '',
        bullets: [
          'Subconjunctival haemorrhage: spontaneous rupture of small conjunctival blood vessels — well-demarcated, bright red, unilateral, no pain, normal VA',
          'Usually spontaneous (Valsalva, coughing, straining) or trivial trauma — reassure and explain it will resolve over 2–3 weeks',
          'Recurrent bilateral subconjunctival haemorrhages: check blood pressure and coagulation screen (warfarin, antiplatelet drugs)',
          'If posterior border not visible (haemorrhage extends posteriorly) and there is a history of head trauma: exclude base of skull fracture',
        ],
        source: 'geekymedics.com',
      },
    ],
  },
  {
    id: 're-cornea',
    stepNumber: 4,
    title: 'Corneal Assessment',
    subtitle: 'Inspect corneal clarity and perform fluorescein staining',
    description: 'Assess corneal clarity with a pen torch and apply fluorescein stain to identify epithelial defects — essential for diagnosing keratitis and corneal abrasions.',
    checklist: [
      'Inspect the cornea with a pen torch: assess clarity (hazy = oedema in acute glaucoma or iritis; opaque = ulcer)',
      'Instil fluorescein drops or strip; examine under blue (cobalt) light',
      'Look for epithelial defects: linear (abrasion), dendritic (herpes simplex — branching pattern), geographic (HSV with incomplete healing)',
      'Assess fluorescein staining pattern: punctate = keratoconjunctivitis sicca or UV keratitis; circumferential = contact lens overwear',
      'Note any corneal vascularisation or scarring from previous keratitis',
    ],
    questions: [
      {
        id: 're-cornea-q1',
        type: 'examiner',
        text: 'Describe the fluorescein staining pattern of herpes simplex keratitis and how you manage it.',
      },
      {
        id: 're-cornea-p1',
        type: 'pathology',
        text: '',
        bullets: [
          'HSV keratitis: dendritic ulcer — branching linear pattern with terminal bulbs, stains with fluorescein; a geographic ulcer is a larger confluent version indicating more advanced disease',
          'Photophobia, reduced VA, circumcorneal flush, reduced corneal sensation (CN V involvement)',
          'Treatment: topical aciclovir ointment 5× daily for 14 days (first-line — Royal College of Ophthalmologists)',
          'Do NOT use topical steroids alone without antiviral cover — steroids accelerate HSV replication and cause geographic ulceration',
          'Recurrent HSV keratitis → corneal scarring and eventual visual loss — prophylactic oral aciclovir considered',
        ],
        source: 'Royal College of Ophthalmologists HSV Keratitis Guidelines (2022)',
      },
    ],
  },
  {
    id: 're-pupil',
    stepNumber: 5,
    title: 'Pupil Examination',
    subtitle: 'Pupil shape, size, and reaction to light',
    description: 'Examine both pupils for size, shape, and reactivity to light — pupil abnormalities narrow the differential of a red eye to specific underlying diagnoses.',
    checklist: [
      'Inspect both pupils in dim light: note size (mm) and compare symmetry',
      'Test direct and consensual pupillary light reflexes with a pen torch',
      'Perform the swinging flashlight test for relative afferent pupillary defect (RAPD)',
      'Note pupil shape: irregular = posterior synechiae (uveitis); mid-dilated fixed oval = acute angle-closure glaucoma; small constricted = uveitis or Horner\'s',
      'Assess for iris bombe (forward bowing of iris from 360° synechiae blocking aqueous flow)',
    ],
    questions: [
      {
        id: 're-pupil-q1',
        type: 'examiner',
        text: 'What pupillary findings do you expect in acute anterior uveitis versus acute angle-closure glaucoma?',
      },
      {
        id: 're-pupil-p1',
        type: 'pathology',
        text: '',
        bullets: [
          'Anterior uveitis (iritis): small, irregular pupil due to posterior synechiae (adhesions between iris and anterior lens capsule); circumcorneal flush; photophobia; reduced VA',
          'Acute angle-closure glaucoma: mid-dilated (4–6 mm), fixed, oval pupil — sphincter muscle ischaemia from raised IOP prevents constriction; hazy cornea; IOP often >40–60 mmHg; severe pain; EMERGENCY',
          'Key distinction: both have perilimbal injection; glaucoma has a mid-dilated fixed pupil; uveitis has a small irregular pupil with a direct light reaction that may be sluggish',
        ],
        source: 'Royal College of Ophthalmologists Acute Angle Closure Guidelines (2022)',
      },
    ],
  },
  {
    id: 're-differentials',
    stepNumber: 6,
    title: 'Anterior Chamber and Differential Diagnosis',
    subtitle: 'Assess for hypopyon, hyphaema, and formulate a differential',
    description: 'Inspect the anterior chamber for abnormal contents and construct a differential diagnosis based on all clinical findings to guide urgent management.',
    checklist: [
      'Inspect the anterior chamber depth (shallow = angle-closure risk; assess with oblique pen torch)',
      'Look for hyphaema (blood level in anterior chamber — red/orange fluid level)',
      'Look for hypopyon (pus level in anterior chamber — white/cream fluid level)',
      'Assess for flare in the anterior chamber (requires slit lamp — hazy appearance from protein exudate = active uveitis)',
      'Formulate the differential: conjunctivitis vs keratitis vs uveitis vs acute glaucoma vs scleritis',
    ],
    questions: [
      {
        id: 're-ac-q1',
        type: 'examiner',
        text: 'What is a hypopyon and what conditions cause it?',
      },
      {
        id: 're-ac-p1',
        type: 'pathology',
        text: '',
        bullets: [
          'Hypopyon: a white fluid level of pus cells in the anterior chamber, gravitating to form a horizontal level at the inferior angle',
          'Causes: severe anterior uveitis (especially HLA-B27 associated), corneal ulcer with anterior chamber involvement, endophthalmitis (post-operative infection — EMERGENCY), Behçet\'s disease',
          'Endophthalmitis: sudden severe painful red eye post-surgery or post-injection; VA <6/60; globe tender; hypopyon; treat with intravitreal antibiotics as an emergency',
          'Distinguish from hyphaema (blood — red level; trauma, anticoagulation, iris neovascularisation)',
        ],
        source: 'Royal College of Ophthalmologists Endophthalmitis Guidelines (2022)',
      },
    ],
  },
  {
    id: 're-completion',
    stepNumber: 7,
    title: 'Completion',
    subtitle: 'Investigations, acute management, and referral criteria',
    description: 'State the targeted investigations and management for the most likely diagnosis, with clear criteria for same-day ophthalmology referral.',
    checklist: [
      'State the diagnosis or differential based on all findings',
      'Measure IOP if acute angle-closure glaucoma is suspected (normal 10–21 mmHg; AAC typically >40 mmHg)',
      'Refer same-day to ophthalmology if: reduced VA, corneal opacity, fixed mid-dilated pupil, hypopyon, or severe pain',
      'For bacterial conjunctivitis: topical chloramphenicol and safety-net advice',
      'State investigations: slit lamp (essential for uveitis, keratitis), tonometry (IOP), corneal swab (keratitis), HLA-B27 (recurrent uveitis), autoimmune screen (scleritis)',
    ],
    questions: [
      {
        id: 're-comp-q1',
        type: 'examiner',
        text: 'Describe the emergency management of acute angle-closure glaucoma.',
      },
      {
        id: 're-comp-p1',
        type: 'pathology',
        text: '',
        bullets: [
          'Immediate: IV/oral acetazolamide 500 mg (carbonic anhydrase inhibitor — reduces aqueous production); topical timolol (beta-blocker — reduces aqueous); topical pilocarpine 2% (miotic — pulls iris away from angle)',
          'Position patient supine (promotes lens to fall back); systemic analgesia and antiemetic',
          'Definitive: urgent laser peripheral iridotomy (LPI) to both eyes once IOP controlled — creates a bypass channel for aqueous drainage; prevents future attacks',
          'IOP target: reduce to <21 mmHg; ophthalmology admission — monitor IOP every 30 minutes initially',
        ],
        source: 'Royal College of Ophthalmologists Acute Angle Closure Guidelines (2022)',
      },
      {
        id: 're-comp-q2',
        type: 'examiner',
        text: 'Which systemic diseases are associated with recurrent anterior uveitis?',
      },
      {
        id: 're-comp-p2',
        type: 'pathology',
        text: '',
        bullets: [
          'HLA-B27 associated conditions (account for ~50% of anterior uveitis): ankylosing spondylitis, psoriatic arthritis, reactive arthritis (Reiter\'s syndrome), IBD (Crohn\'s, UC)',
          'Sarcoidosis: bilateral granulomatous uveitis, may be posterior — check CXR and ACE level',
          'JIA (juvenile idiopathic arthritis): chronic bilateral uveitis in children — may be asymptomatic, no red eye; pauciarticular JIA + ANA positive carries highest risk',
          'Behçet\'s disease: recurrent hypopyon uveitis + oral + genital ulcers',
        ],
        source: 'OHCM 10th ed., Ch. 7',
      },
    ],
  },
];

// EXAM_ENTRY_DATA
// {"id":"red-eye","title":"Red Eye Assessment","description":"Systematic assessment of the red eye covering history, visual acuity, pattern of redness, corneal staining, pupil examination, and anterior chamber assessment to differentiate conjunctivitis from sight-threatening diagnoses including uveitis, keratitis, and acute angle-closure glaucoma.","specialtyId":"ophthalmology","highYieldSummary":["Reduced VA in a red eye = serious — same-day ophthalmology referral; always test and document VA first.","Ciliary flush (perilimbal redness, does not move with conjunctiva) = intraocular disease: uveitis, keratitis, acute glaucoma.","Acute angle-closure glaucoma: mid-dilated fixed oval pupil + hazy cornea + IOP >40 mmHg + severe pain + halos — EMERGENCY; treat with IV acetazolamide + topical timolol + pilocarpine.","HSV keratitis: dendritic ulcer on fluorescein staining — treat with topical aciclovir; never use steroids alone (accelerates HSV replication).","Anterior uveitis: small irregular pupil (posterior synechiae) + ciliary flush + photophobia; associated with HLA-B27 conditions (AS, psoriasis, IBD, reactive arthritis) in ~50%.","Hypopyon = pus layer in anterior chamber: causes include severe uveitis, corneal ulcer, Behçet\'s, endophthalmitis (post-op = emergency — intravitreal antibiotics)."]}
