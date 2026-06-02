import { alcoholSubstanceSteps } from './alcoholSubstanceSteps';
import { ankleSteps } from './ankleSteps';
import { antenatalSteps } from './antenatalSteps';
import { breastSteps } from './breastSteps';
import { cerebellumSteps } from './cerebellumSteps';
import { cognitiveSteps } from './cognitiveSteps';
import { cranialNerveSteps } from './cranialNerveSteps';
import { diabeticFootSteps } from './diabeticFootSteps';
import { earSteps } from './earSteps';
import { elbowSteps } from './elbowSteps';
import { eyeSteps } from './eyeSteps';
import { gynaeHistorySteps } from './gynaeHistorySteps';
import { hipSteps } from './hipSteps';
import { kneeSteps } from './kneeSteps';
import { lowerLimbNeuroSteps } from './lowerLimbNeuroSteps';
import { maleGenitaliaSteps } from './maleGenitaliaSteps';
import { mseSteps } from './mseSteps';
import { neckLumpSteps } from './neckLumpSteps';
import { noseThroatSteps } from './noseThroatSteps';
import { paedAbdominalSteps } from './paedAbdominalSteps';
import { paedCardioSteps } from './paedCardioSteps';
import { paedDevelopmentalSteps } from './paedDevelopmentalSteps';
import { paedRespiratorySteps } from './paedRespiratorySteps';
import { parkinsonsSteps } from './parkinsonsSteps';
import { prostateSteps } from './prostateSteps';
import { rectalSteps } from './rectalSteps';
import { redEyeSteps } from './redEyeSteps';
import { riskAssessmentSteps } from './riskAssessmentSteps';
import { scrotalSteps } from './scrotalSteps';
import { speculumSteps } from './speculumSteps';
import { steps as shoulderSteps } from './steps';
import { spineSteps } from './spineSteps';
import { stomaSteps } from './stomaSteps';
import { thyroidSteps } from './thyroidSteps';
import { ulcerSteps } from './ulcerSteps';
import { upperLimbNeuroSteps } from './upperLimbNeuroSteps';
import { wristHandSteps } from './wristHandSteps';

export interface OsceExam {
  id: string;
  title: string;
  description: string;
  specialtyId: string;
  steps: typeof shoulderSteps;
  highYieldSummary: string[];
  youtubeVideoId?: string;
}

export interface Specialty {
  id: string;
  name: string;
}

export const SPECIALTIES: Specialty[] = [
  { id: 'orthopaedics', name: 'Orthopaedics' },
  { id: 'neurology', name: 'Neurology' },
  { id: 'endocrine', name: 'Endocrine' },
  { id: 'surgery', name: 'Surgery' },
  { id: 'obstetrics-gynaecology', name: 'Obstetrics & Gynaecology' },
  { id: 'urology', name: 'Urology' },
  { id: 'ent', name: 'ENT' },
  { id: 'ophthalmology', name: 'Ophthalmology' },
  { id: 'psychiatry', name: 'Psychiatry' },
  { id: 'paediatrics', name: 'Paediatrics' },
  { id: 'emergency-medicine', name: 'Emergency Medicine' },
  { id: 'general-practice', name: 'GP & Primary Care' },
  { id: 'palliative', name: 'Palliative & End-of-Life Care' },
  { id: 'sexual-health', name: 'Sexual Health' },
];

export const EXAMS: OsceExam[] = [
  {
    id: 'shoulder',
    title: 'Shoulder Examination',
    description: 'Examiner-style questions for each step of the shoulder examination, covering inspection, palpation, movement, special tests, and investigations.',
    specialtyId: 'orthopaedics',
    youtubeVideoId: 'vu1vuugtvIo',
    steps: shoulderSteps,
    highYieldSummary: [
      'SITS rotator cuff: supraspinatus (abduction initiation 0–15°), infraspinatus and teres minor (external rotation), subscapularis (internal rotation).',
      'Painful arc: 60–120° abduction, implicating subacromial impingement of supraspinatus or the subacromial bursa under the coracoacromial arch.',
      'Frozen shoulder capsular pattern: external rotation restricted more than abduction, then internal rotation — anterior capsule tightens first.',
      'Axillary nerve (C5/6) is at risk in anterior dislocation and proximal humeral fractures; test regimental badge sensation and deltoid power before and after reduction.',
      'Bankart lesion (anteroinferior labrum avulsion) + Hill-Sachs lesion (posterosuperior humeral head impaction) coexist in recurrent anterior instability.',
      'Re-dislocation risk under age 20 is approximately 80–90%, supporting early arthroscopic Bankart repair discussion.',
      'Normal subacromial space is 7–14 mm; <6 mm is pathological. Type III hooked acromion is the highest-risk morphology for impingement.',
    ],
  },
  {
    id: 'elbow',
    title: 'Elbow Examination',
    description: 'Systematic elbow examination covering carrying angle, epicondylitis tests, ligament stability, ulnar nerve assessment, and fat pad signs.',
    specialtyId: 'orthopaedics',
    youtubeVideoId: '_Hy3t2Y9HUM',
    steps: elbowSteps,
    highYieldSummary: [
      'Normal carrying angle: 5–15° males, 10–25° females. Cubitus valgus → tardy ulnar nerve palsy. Cubitus varus ("gunstock") → malunited supracondylar fracture.',
      'Posterior fat pad sign on lateral X-ray = intra-articular haemarthrosis; treat as fracture even if no fracture line visible (radial head fracture commonest).',
      'Loss of full extension after elbow trauma is the most sensitive sign of an occult intra-articular fracture.',
      'Lateral epicondylitis (tennis elbow): angiofibroblastic degeneration of ECRB origin — positive Cozen\'s and Mill\'s tests.',
      'Cubital tunnel syndrome: ulnar nerve compressed posterior to the medial epicondyle; paraesthesia in little and ring fingers, intrinsic hand muscle weakness, positive Tinel\'s at cubital tunnel.',
      '"Terrible triad" of elbow dislocation: posterior dislocation + radial head fracture + coronoid fracture — high instability, often requires surgery.',
    ],
  },
  {
    id: 'wrist-hand',
    title: 'Wrist & Hand Examination',
    description: 'Examination of the wrist and hand covering rheumatoid deformities, scaphoid fracture, carpal tunnel syndrome, de Quervain\'s tenosynovitis, and Dupuytren\'s contracture.',
    specialtyId: 'orthopaedics',
    youtubeVideoId: 'sypBEG9F6uU',
    steps: wristHandSteps,
    highYieldSummary: [
      'Scaphoid fracture: snuffbox tenderness after FOOSH — treat as fracture even if X-ray normal; MRI is gold standard. Risk of AVN if proximal pole involvement.',
      'Rheumatoid hand: MCP ulnar deviation, swan-neck (PIP hyperextension + DIP flexion), boutonnière (PIP flexion + DIP hyperextension), Z-thumb.',
      'Carpal tunnel syndrome: median nerve compression at wrist — thenar wasting (APB), Phalen\'s (sensitive), Tinel\'s (specific). Confirm with NCS. Surgical decompression if motor involvement.',
      'De Quervain\'s tenosynovitis: positive Finkelstein\'s test — stenosing tenosynovitis of APL and EPB in the first dorsal compartment.',
      'Dupuytren\'s contracture: ring finger most commonly affected — treat when MCP >30° or PIP >20°. Tabletop test to assess severity.',
      'Active–passive extension discrepancy = extensor tendon rupture. Mallet finger (DIP cannot extend actively) = terminal slip rupture — splint in extension for 6–8 weeks.',
    ],
  },
  {
    id: 'spine',
    title: 'Spine Examination',
    description: 'Cervical and lumbar spine examination covering scoliosis assessment, nerve root tension signs, ankylosing spondylitis screening, and cauda equina red flags.',
    specialtyId: 'orthopaedics',
    youtubeVideoId: '5_txE56X2-8',
    steps: spineSteps,
    highYieldSummary: [
      'Adam\'s forward bend test: rib hump in structural scoliosis (vertebral rotation) that does not correct — distinguishes structural from postural scoliosis.',
      'Schober\'s test: <4 cm increase from 15 cm baseline on forward flexion = restricted lumbar flexion, classic in ankylosing spondylitis.',
      'Straight leg raise <60° reproducing radicular leg pain = L4/L5/S1 nerve root compression. Cross SLR highly specific (>90%) for large central disc herniation.',
      'Cauda equina syndrome: saddle anaesthesia + bladder/bowel dysfunction = surgical emergency — MRI and decompression within 24–48 hours.',
      'Vertebral metastasis red flags: age >50, previous cancer, night pain, weight loss. Spine = most common site of bony metastasis (prostate, breast, lung).',
      'Ankylosing spondylitis: young male, inflammatory back pain, HLA-B27, sacroiliac tenderness, reduced chest expansion, bamboo spine on X-ray.',
    ],
  },
  {
    id: 'hip',
    title: 'Hip Examination',
    description: 'Hip examination covering gait analysis, Trendelenburg test, leg length discrepancy, Thomas\'s test, and femoroacetabular impingement.',
    specialtyId: 'orthopaedics',
    youtubeVideoId: 'Hkqr3mg6IWQ',
    steps: hipSteps,
    highYieldSummary: [
      'Trendelenburg test: contralateral pelvis drops on standing — indicates ipsilateral hip abductor weakness or pain (superior gluteal nerve L4/5).',
      'Thomas\'s test: fixed flexion deformity (FFD) of the hip unmasked by removing lumbar lordosis — the affected hip rises off the couch.',
      'Neck of femur fracture: shortened and externally rotated leg after a fall in elderly patients. Intracapsular (#NOF): AVN risk — hemiarthroplasty/THA. Extracapsular: DHS or IM nail.',
      'Capsular pattern of hip OA: internal rotation restricted first, then flexion, then abduction. Internal rotation pain = most sensitive early sign.',
      'FABER (groin pain = hip OA/labral tear; posterior pain = SI joint). FADIR = most sensitive test for femoroacetabular impingement.',
      'Cam FAI: aspherical femoral head, young athletic males. Pincer FAI: acetabular overcoverage, middle-aged women. Both → labral tears → early OA.',
    ],
  },
  {
    id: 'knee',
    title: 'Knee Examination',
    description: 'Comprehensive knee examination covering effusion tests, ligament assessment (ACL, PCL, MCL, LCL), meniscal tests, and patellofemoral assessment.',
    specialtyId: 'orthopaedics',
    youtubeVideoId: '17ZKya9yR2Y',
    steps: kneeSteps,
    highYieldSummary: [
      'Patellar tap = large effusion. Bulge sign (stroke test) = small effusion. Warm joint = active inflammation or infection.',
      'Lachman\'s test (20–30° flexion) is more sensitive than the anterior drawer (90°) for ACL rupture — soft end-feel with >5 mm translation.',
      'Medial joint line tenderness in a young person after a twisting injury = medial meniscal tear until proven otherwise.',
      'McMurray\'s test: a palpable/audible click with pain at the joint line during flexion–rotation–extension = meniscal tear (most sensitive for posterior horn).',
      'Acute haemarthrosis after a twisting sporting injury: ACL rupture ~70%, meniscal tear ~20%, osteochondral fracture ~10%. X-ray for Segond fracture (ACL pathognomonic).',
      'Patellofemoral pain syndrome: commonest cause of anterior knee pain in young athletes. Treat with VMO and hip abductor strengthening.',
    ],
  },
  {
    id: 'ankle',
    title: 'Ankle & Foot Examination',
    description: 'Ankle and foot examination covering lateral ligament complex, syndesmosis, Achilles tendon, Ottawa ankle rules, and tibialis posterior tendon dysfunction.',
    specialtyId: 'orthopaedics',
    youtubeVideoId: 'NZocTa8RqR8',
    steps: ankleSteps,
    highYieldSummary: [
      'Ottawa ankle rules: X-ray needed if bony tenderness at malleolar tips or base of 5th MT/navicular, OR unable to weight-bear 4 steps. Sensitivity ~99%.',
      'ATFL is the most commonly injured ankle ligament (inversion + plantarflexion mechanism). Anterior drawer test assesses ATFL integrity.',
      'Squeeze test positive = syndesmotic ("high ankle") sprain — longer recovery (6–12 weeks) than lateral sprain. Diastasis >5 mm on X-ray = operative fixation.',
      'Thompson\'s test (calf squeeze) — no plantarflexion = complete Achilles tendon rupture. Palpable gap 2–6 cm above insertion in watershed zone.',
      '"Too many toes" sign + inability to single heel-rise = tibialis posterior tendon dysfunction (PTTD) → progressive flatfoot deformity.',
      'Non-insertional Achilles tendinopathy: treat with eccentric loading (Alfredson protocol). Insertional: eccentric exercises may worsen — use heel raise instead.',
    ],
  },
  {
    id: 'upper-limb-neuro',
    title: 'Upper Limb Neurological Examination',
    description: 'Systematic neurological examination of the upper limbs covering tone, power, coordination, reflexes, and sensation with UMN vs LMN localisation.',
    specialtyId: 'neurology',
    youtubeVideoId: '4uAAjYzi7SY',
    steps: upperLimbNeuroSteps,
    highYieldSummary: [
      'UMN signs: hypertonia (spasticity/clasp-knife), hyperreflexia, upgoing plantar, Hoffman\'s positive, minimal wasting, pronator drift.',
      'LMN signs: hypotonia, hyporeflexia, fasciculations, significant wasting — all reflect anterior horn cell or peripheral nerve injury.',
      'Dermatomes: C5 = deltoid patch, C6 = thumb and index, C7 = middle finger, C8 = little finger, T1 = medial forearm.',
      'Inverted supinator jerk: absent brachioradialis reflex with brisk finger flexors when brachioradialis tendon is struck — pathognomonic of cord lesion at C5/6.',
      'Dissociated sensory loss (pain/temp lost, proprioception preserved) = syringomyelia or anterior cord syndrome; dorsal columns intact, spinothalamic tract damaged.',
      'Brown-Séquard syndrome: ipsilateral UMN signs + proprioception loss, contralateral pain and temperature loss below the lesion level.',
      'Co-existing UMN and LMN signs in the same limb without sensory involvement = motor neurone disease (ALS) until proven otherwise.',
    ],
  },
  {
    id: 'lower-limb-neuro',
    title: 'Lower Limb Neurological Examination',
    description: 'Systematic neurological examination of the lower limbs covering tone, power, coordination, reflexes, sensation, and gait with UMN vs LMN localisation and key pathologies.',
    specialtyId: 'neurology',
    steps: lowerLimbNeuroSteps,
    highYieldSummary: [
      'UMN signs: spasticity (clasp-knife, velocity-dependent), hyperreflexia, extensor plantar (Babinski), clonus, minimal wasting.',
      'LMN signs: hypotonia, hyporeflexia/areflexia, fasciculations, significant wasting — anterior horn cell, root, or peripheral nerve.',
      'Lower limb dermatomes: L2 = medial thigh, L3 = anterior knee, L4 = medial shin, L5 = lateral shin + dorsum foot, S1 = lateral foot/heel, S2 = posterior thigh.',
      'Foot drop: common peroneal nerve palsy (fibular neck) vs L4/5 root — eversion tests the difference (lost in peroneal palsy, preserved in L4/5 root).',
      'Cauda equina syndrome: saddle anaesthesia + bladder/bowel dysfunction = surgical emergency — urgent MRI and decompression within 24–48 hours.',
      'Absent ankle jerks + extensor plantars: subacute combined degeneration of the cord (B12 deficiency), MND, or Friedreich\'s ataxia.',
      'Romberg positive (stable eyes open, falls eyes closed) = sensory/dorsal column ataxia, not cerebellar ataxia.',
    ],
  },
  {
    id: 'cranial-nerves',
    title: 'Cranial Nerve Examination',
    description: 'Systematic examination of all 12 cranial nerves covering olfaction, vision, eye movements, facial sensation and movement, hearing, palatal and bulbar function, and tongue assessment.',
    specialtyId: 'neurology',
    steps: cranialNerveSteps,
    highYieldSummary: [
      'CN III palsy with fixed dilated pupil = posterior communicating artery aneurysm until proven otherwise; pupil-sparing CN III = diabetic microvascular infarct.',
      'Horner\'s syndrome (ptosis + miosis + anhidrosis): first-order = hypothalamus/cord, second-order = lung apex (Pancoast), third-order = internal carotid artery dissection.',
      'Bell\'s palsy (LMN CN VII): all ipsilateral facial muscles affected including forehead. Stroke (UMN): forehead spared due to bilateral cortical input to frontalis.',
      'Bilateral INO (failure of adduction + contralateral abducting nystagmus) = MLF lesion; bilateral in a young patient = multiple sclerosis.',
      'Acoustic neuroma: unilateral SNHL + tinnitus; Rinne positive bilaterally; Weber lateralises to the normal side. MRI IAM with gadolinium.',
      'Bulbar palsy (LMN): wasted fasciculating tongue, absent gag, nasal voice. Pseudobulbar palsy (UMN): spastic tongue, brisk jaw jerk, emotional lability.',
      'CN VI palsy can be a false localising sign of raised ICP — its long intracranial course makes it vulnerable to stretching.',
    ],
  },
  {
    id: 'cerebellum',
    title: 'Cerebellar Examination',
    description: 'Systematic cerebellar examination covering inspection, gait, upper and lower limb coordination, speech, eye movements, and the differential diagnosis of cerebellar ataxia.',
    specialtyId: 'neurology',
    steps: cerebellumSteps,
    highYieldSummary: [
      'DANISH mnemonic: Dysdiadochokinesia, Ataxia, Nystagmus, Intention tremor, Slurred (scanning) speech, Hypotonia — all ipsilateral to the cerebellar lesion.',
      'Cerebellar signs are IPSILATERAL: the cerebellum\'s efferents cross twice (peduncle then corticospinal tract), returning to the ipsilateral side.',
      'Romberg\'s test assesses dorsal columns NOT the cerebellum: a cerebellar patient falls with eyes OPEN; falling only on eye closure = dorsal column/vestibular ataxia.',
      'Alcohol is the commonest UK cause — affects the vermis preferentially, producing gait ataxia with relatively preserved limb coordination.',
      'PICA infarction (Wallenberg syndrome): ipsilateral limb ataxia + ipsilateral facial sensory loss + contralateral body pain/temperature loss + ipsilateral Horner\'s.',
      'Paraneoplastic cerebellar degeneration: anti-Yo antibodies, subacute pan-cerebellar syndrome — always search for occult ovarian, breast, or lung cancer.',
      'Friedreich\'s ataxia: onset <25 years, pes cavus, absent ankle jerks with upgoing plantars, hypertrophic cardiomyopathy — GAA repeat expansion, frataxin gene.',
    ],
  },
  {
    id: 'parkinsons',
    title: 'Parkinson\'s Disease Examination',
    description: 'Systematic examination for Parkinson\'s disease covering observation at rest, tremor, rigidity, bradykinesia, gait, postural instability, and non-motor features.',
    specialtyId: 'neurology',
    steps: parkinsonsSteps,
    highYieldSummary: [
      'UK Brain Bank diagnosis: bradykinesia PLUS at least one of resting tremor, rigidity, or postural instability — bradykinesia is the essential feature.',
      'Resting tremor (4–6 Hz, pill-rolling) is suppressed by voluntary movement and worsened by distraction — distinguishes PD from essential tremor (postural/action).',
      'Lead-pipe rigidity is velocity-independent (unlike spasticity); cogwheeling = rigidity plus superimposed tremor.',
      'Festinant gait: short shuffling steps, reduced arm swing, freezing at doorways, en bloc turning — caused by SMA dependence on dopaminergic basal ganglia input.',
      'Early backward falls suggest PSP not PD; other red flags: no tremor, symmetric onset, early dementia, early autonomic failure, rapid progression, poor levodopa response.',
      'NICE NG71: refer to a specialist before starting dopaminergic therapy; first-line options are levodopa, dopamine agonists, or MAO-B inhibitors depending on patient profile.',
      'Non-motor features (RBD, anosmia, constipation) precede motor symptoms by years; depression ~40%, PD dementia ~80% by 20 years.',
    ],
  },
  {
    id: 'thyroid',
    title: 'Thyroid Examination',
    description: 'Systematic thyroid examination covering peripheral signs of hypo/hyperthyroidism, goitre characterisation, Graves\' orbitopathy, and thyroid cancer assessment.',
    specialtyId: 'endocrine',
    steps: thyroidSteps,
    highYieldSummary: [
      'Graves\' disease triad (pathognomonic only together): diffuse goitre + exophthalmos + pre-tibial myxoedema — caused by TRAb stimulating TSH receptors on thyroid, orbital fibroblasts, and dermal fibroblasts respectively.',
      'Thyroid bruit = increased vascularity in active Graves\' thyrotoxicosis; use the bell; ask patient to hold breath.',
      'A swelling that moves on swallowing = thyroid; moves on swallowing AND tongue protrusion = thyroglossal cyst; does not move = lymph node.',
      'Thyroid cancer types: papillary (70–80%, lymph node spread, best prognosis), follicular (haematogenous to lung/bone), medullary (calcitonin, MEN 2), anaplastic (rapidly fatal).',
      'Solitary nodule investigation: USS → U-score → FNAC if U3–U5; radionuclide scan if hyperthyroid (hot nodule = almost never malignant).',
      'Thyroidectomy complications: recurrent laryngeal nerve injury (hoarseness/stridor), hypoparathyroidism (hypocalcaemia), haematoma (airway emergency).',
    ],
  },
  {
    id: 'diabetic-foot',
    title: 'Diabetic Foot Examination',
    description: 'Structured examination of the diabetic foot covering neuropathic and ischaemic ulcer classification, Charcot\'s arthropathy, vascular assessment, and multidisciplinary management.',
    specialtyId: 'endocrine',
    steps: diabeticFootSteps,
    highYieldSummary: [
      'Neuropathic ulcer: painless, punched-out, callus rim, pressure point (metatarsal heads), warm foot with pulses. Ischaemic: painful, at toe tips/margins, sloughy base, cold pulseless foot.',
      '10 g monofilament: loss of protective sensation at any plantar site = high ulceration risk; annual screening mandated by NICE NG19 for all diabetic patients.',
      'Wagner classification: Grade 0 = pre-ulcer; 1 = superficial; 2 = tendon/capsule; 3 = bone/osteomyelitis; 4 = partial gangrene; 5 = whole foot gangrene.',
      'Charcot\'s neuroarthropathy: unilaterally hot, red, swollen, painless foot in a diabetic = Charcot\'s until proven otherwise; immobilise with total contact cast immediately.',
      'Osteomyelitis: probe-to-bone positive + MRI (gold standard); treat with 6 weeks of targeted antibiotics ± surgical debridement.',
      'ABPI unreliable in diabetes due to medial arterial calcification (falsely elevated >1.4); use toe-brachial index (TBI) instead.',
    ],
  },
  {
    id: 'neck-lump',
    title: 'Neck Lump Examination',
    description: 'Systematic examination of a neck lump covering anatomical localisation, lymph node levels, special tests (transillumination, auscultation), cranial nerve assessment, and investigation pathway.',
    specialtyId: 'surgery',
    steps: neckLumpSteps,
    highYieldSummary: [
      'Movement on swallowing = thyroid. Movement on swallowing AND tongue protrusion = thyroglossal cyst. No movement = lymph node, branchial cyst, or other mass.',
      'Virchow\'s node (left supraclavicular, Troisier\'s sign) = GI malignancy (stomach, pancreas, colon) spread via thoracic duct — always examine for abdominal primary.',
      'Carotid body tumour: pulsatile, moves side-to-side but NOT vertically, soft bruit; lyre sign on angiography; screen for SDH mutations and urinary catecholamines.',
      'Branchial cyst: smooth, fluctuant, junction of upper and middle thirds of SCM (Level II), partial transillumination — treat with excision.',
      'Cystic hygroma (lymphatic malformation): brilliant transillumination, posterior triangle, children; associated with Turner\'s and Down\'s syndrome.',
      'Hard cervical lymph node >2 cm for >3 weeks in a smoker = metastatic SCC from head and neck primary until proven otherwise — 2-week wait ENT referral.',
    ],
  },
  {
    id: 'breast',
    title: 'Breast Examination',
    description: 'Systematic breast examination covering inspection at rest and dynamically, palpation of all quadrants, nipple assessment, and axillary lymph node staging.',
    specialtyId: 'surgery',
    steps: breastSteps,
    highYieldSummary: [
      'Upper outer quadrant contains the most glandular tissue and is the site of ~50% of breast cancers.',
      'Peau d\'orange = dermal lymphatic obstruction by tumour emboli; classic in inflammatory breast cancer (T4d, Stage IIIB).',
      'Paget\'s disease of the nipple = unilateral eczematous rash starting at the nipple; associated with underlying DCIS or invasive cancer in all cases.',
      'Triple assessment: clinical + imaging (USS <40y; mammography ≥40y) + core biopsy — all three required before treatment decisions.',
      'Axillary nodal involvement is the single most important prognostic factor in breast cancer; sentinel lymph node biopsy (SLNB) is standard for clinically node-negative patients.',
      'NICE NG101 2-week-wait: unexplained lump ≥30y; unexplained nipple change ≥50y; skin changes suspicious of malignancy; unilateral axillary node ≥30y with no clear cause.',
    ],
  },
  {
    id: 'scrotal',
    title: 'Scrotal Examination',
    description: 'Systematic scrotal examination covering inspection, transillumination, palpation of the testis and epididymis, inguinoscrotal hernia assessment, varicocele, and lymph node drainage.',
    specialtyId: 'surgery',
    steps: scrotalSteps,
    highYieldSummary: [
      'Testicular torsion: sudden severe pain, high-riding testis, absent cremasteric reflex — surgical emergency, bilateral orchidopexy within 6 hours (~90% salvage). Do NOT wait for USS.',
      'Testicular tumour: painless, hard, non-tender mass inseparable from the testis. Teratoma (15–25 y); seminoma (25–35 y). Orchidectomy via inguinal approach only.',
      'Cremasteric reflex absent = torsion until proven otherwise. Prehn\'s sign positive (elevation relieves pain) suggests epididymo-orchitis.',
      'Testicular lymphatics drain to para-aortic nodes at L1–L2 (not inguinal). Inguinal nodes involved only if scrotal skin is breached.',
      'AFP raised in non-seminomatous GCT only — NEVER in pure seminoma. β-hCG may be raised in both. LDH reflects tumour bulk.',
      'New left varicocele in a man over 40: exclude left renal cell carcinoma obstructing the left renal vein.',
    ],
  },
  {
    id: 'rectal',
    title: 'Rectal Examination (PR)',
    description: 'Digital rectal examination covering inspection of the perineum and anus, anal tone, prostate assessment, rectal mass characterisation, haemorrhoid grading, and investigation planning.',
    specialtyId: 'surgery',
    steps: rectalSteps,
    highYieldSummary: [
      'Internal haemorrhoids are above the dentate line (visceral innervation — painless bleeding); external are below (somatic — painful). Grades I–IV guide treatment.',
      'Anal fissure: posterior midline (~90%), caused by poor blood supply to the posterior commissure. Treat with topical GTN/diltiazem then botulinum toxin or lateral internal sphincterotomy.',
      'Goodsall\'s rule: anterior fistula openings track radially; posterior openings curve to the posterior midline at 6 o\'clock.',
      'Anal tone is controlled by S2/S3/S4 via the pudendal nerve. Reduced voluntary squeeze = external sphincter weakness; consider cauda equina.',
      'NICE NG151 2-week-wait: ≥40 with rectal bleeding + weight loss; ≥50 with unexplained rectal bleeding; ≥60 with iron-deficiency anaemia or change in bowel habit.',
      'Rectal cancer distance from anal verge guides surgery: >10 cm = anterior resection; <5 cm = possible APR with permanent colostomy.',
    ],
  },
  {
    id: 'stoma',
    title: 'Stoma Assessment',
    description: 'Stoma examination covering identification, viability, complications, and surgical scar interpretation — distinguishing colostomy, ileostomy, and urostomy by site, spout, openings, and output.',
    specialtyId: 'surgery',
    steps: stomaSteps,
    highYieldSummary: [
      'Ileostomy: right iliac fossa, everted spout ~2–3 cm (protects skin from proteolytic enzymes), liquid green/yellow effluent. Colostomy: left iliac fossa (sigmoid), flush with skin, formed brown stool.',
      'End colostomy + midline scar = Hartmann\'s procedure (diverticular perforation or sigmoid cancer) or APR (perineal scar = permanent stoma for low rectal cancer).',
      'Loop ileostomy (right iliac fossa, two openings) = defunctioning after low anterior resection (LAR) for rectal cancer — reversed at ~3 months.',
      'Parastomal hernia: up to 50% of colostomies by 5 years. Confirmed by cough impulse around the stoma.',
      'High-output ileostomy (>1.5 L/day): causes dehydration, hyponatraemia, hypokalaemia. Treat with loperamide, oral rehydration solution (Na >90 mmol/L), omeprazole.',
      'Stoma ischaemia: dusky/purple mucosa post-op — assess depth with glass tube and torch. Superficial = monitor; deep/black = surgical emergency.',
    ],
  },
  {
    id: 'ulcer',
    title: 'Arterial Ulcer vs Venous Ulcer Assessment',
    description: 'Systematic leg ulcer assessment covering ulcer characteristics, surrounding skin, vascular and neurological examination, ABPI interpretation, and management of venous, arterial, and neuropathic ulcers.',
    specialtyId: 'surgery',
    steps: ulcerSteps,
    highYieldSummary: [
      'Venous ulcer (~70%): medial gaiter area, sloping edges, shallow moist base, lipodermatosclerosis/varicose eczema. Treat with multilayer compression — DO NOT apply if ABPI <0.8 (NICE NG161).',
      'Arterial ulcer (~10%): toes, heels, pressure points; punched-out, necrotic/pale base, pulseless cold foot. Compression CONTRAINDICATED. Revascularise first.',
      'Neuropathic ulcer (diabetes): plantar metatarsal heads; painless, punched-out, callus rim. Treat with total contact cast offloading (NICE NG19).',
      'ABPI: >0.9 = normal; 0.5–0.9 = PAD; <0.5 = severe ischaemia; >1.3 = falsely elevated (calcified vessels in diabetes).',
      'Mixed arteriovenous ulcer (ABPI 0.6–0.8): modified reduced compression under specialist supervision only.',
      'Marjolin\'s ulcer: SCC arising in a chronic wound — long latency (~20–40 years). Everted edge, failure to heal, exuberant granulation — biopsy any non-healing ulcer.',
    ],
  },
  {
    id: 'gynae-history',
    title: 'Gynaecological History',
    description: 'Structured gynaecological history covering presenting complaint, menstrual and obstetric history, contraceptive and screening history, urinary and bowel symptoms, and systemic review.',
    specialtyId: 'obstetrics-gynaecology',
    steps: gynaeHistorySteps,
    highYieldSummary: [
      'Postmenopausal bleeding = endometrial cancer until proven otherwise — NICE NG12 2-week-wait referral; transvaginal USS (endometrial thickness ≥4 mm requires biopsy).',
      'HMB (NICE NG88): structural causes = fibroids (submucosal), adenomyosis, polyps; systemic = hypothyroidism, coagulopathy. Treat with LNG-IUS first-line.',
      'Endometriosis: secondary dysmenorrhoea + deep dyspareunia + cyclical bowel symptoms + infertility — diagnosis by laparoscopy. Average delay to diagnosis 7–10 years.',
      'PCOS (Rotterdam criteria — 2 of 3): oligo/anovulation, hyperandrogenism, polycystic ovaries on USS. Long-term risks: T2DM, endometrial hyperplasia/cancer.',
      'NHS Cervical Screening: HPV primary screening since 2019. Ages 25–49: 3-yearly. Ages 50–64: 5-yearly. LLETZ for CIN2/3.',
      'Postcoital bleeding: cervical ectropion (benign, common on OCP), cervicitis (Chlamydia/gonorrhoea), or cervical carcinoma — always examine and swab.',
    ],
  },
  {
    id: 'antenatal-abdominal',
    title: 'Antenatal Abdominal Examination',
    description: 'Obstetric abdominal examination from 24 weeks covering inspection, symphysis-fundal height, fetal lie and presentation (Pawlik\'s grip), engagement in fifths, and fetal heart auscultation.',
    specialtyId: 'obstetrics-gynaecology',
    steps: antenatalSteps,
    highYieldSummary: [
      'Wedge under right hip from ~20 weeks: prevents aortocaval compression of the IVC by the gravid uterus, restoring cardiac output.',
      'SFH in cm ≈ gestational age in weeks (±2 cm). SFH <10th centile → USS for fetal biometry, AFI, and umbilical artery Doppler to exclude FGR.',
      'Breech at term (3–4%): offer ECV at 36 weeks (success ~50%). Types: frank (commonest), complete, footling (highest cord prolapse risk).',
      'Fetal engagement in fifths: 2/5 or less palpable abdominally = engaged. Failure to engage in a nullip at term: exclude placenta praevia.',
      'Normal FHR 110–160 bpm. Abnormal on auscultation → continuous CTG. AREDF on Doppler → expedite delivery.',
      'Pre-eclampsia: BP ≥140/90 after 20 weeks + proteinuria. Severe features → admit, labetalol/nifedipine, magnesium sulphate, deliver.',
    ],
  },
  {
    id: 'speculum',
    title: 'Speculum Examination',
    description: 'Systematic pelvic examination using a Cusco\'s speculum to inspect the vulva, vagina, and cervix, take swabs for infection, and identify pathology including cervical carcinoma and prolapse.',
    specialtyId: 'obstetrics-gynaecology',
    steps: speculumSteps,
    highYieldSummary: [
      'Do NOT use lubricant gel before swabs — it inhibits culture media and PCR amplification; use warm water only.',
      'Cervical ectropion: columnar epithelium beyond the os — normal in pregnancy/OCP use; treat with cryotherapy only if symptomatic.',
      'Contact bleeding from an irregular cervix = 2-week-wait referral regardless of age — never reassure without colposcopy.',
      'BV: pH >4.5, clue cells, fishy odour, treat with metronidazole. Candida: pH normal, pseudohyphae, treat with clotrimazole. Trichomonas: strawberry cervix, motile protozoa.',
      'Anterior vaginal wall bulge (cystocoele) = bladder prolapse; posterior bulge (rectocoele) = rectum. Ask patient to strain to demonstrate dynamically.',
      'Postmenopausal bleeding: always investigate — endometrial cancer until proven otherwise; USS pelvis + endometrial biopsy if thickness >4 mm.',
    ],
  },
  {
    id: 'prostate',
    title: 'Prostate Examination (DRE)',
    description: 'Digital rectal examination of the prostate covering insertion technique, palpation of the posterior wall and median sulcus, BPH vs cancer assessment, and investigation planning.',
    specialtyId: 'urology',
    steps: prostateSteps,
    highYieldSummary: [
      'Prostate cancer arises in the peripheral zone (~70%) and is palpable on DRE as a hard, craggy, irregular lobe; BPH arises in the transitional zone and feels smooth, rubbery, and uniformly enlarged.',
      'Loss of the median sulcus indicates tumour crossing the midline (at least T2b); fixation of the gland = T4 disease.',
      'PSA must be taken BEFORE DRE — digital examination elevates PSA for up to a week. PSA also raised by BPH, prostatitis, UTI, and catheterisation.',
      'NICE NG131: offer mpMRI before biopsy. PIRADS ≥3 warrants targeted biopsy. Transperineal biopsy preferred over TRUS to reduce sepsis risk.',
      'Prostatitis: exquisitely tender, boggy prostate + fever + perineal pain. Acute bacterial prostatitis: treat with ciprofloxacin 4 weeks.',
      'LUTS treatment: alpha-blockers (tamsulosin) for all; add 5-alpha reductase inhibitor if prostate >30 g or PSA >1.4. Surgical: TURP.',
    ],
  },
  {
    id: 'male-genitalia',
    title: 'Male Genitalia Examination',
    description: 'Examination of the male genitalia covering penile inspection (phimosis, hypospadias, urethral discharge), scrotal and testicular palpation, and STI investigation planning.',
    specialtyId: 'urology',
    steps: maleGenitaliaSteps,
    highYieldSummary: [
      'Phimosis (unable to retract foreskin): pathological in adults — BXO causes white sclerotic ring; circumcision if refractory. Paraphimosis (foreskin stuck behind glans) = emergency: manual reduction.',
      'Hypospadias (ventral meatus): incidence 1/300 boys; prepuce used in surgical repair — never circumcise. Epispadias (dorsal meatus) is rarer and associated with bladder exstrophy.',
      'Testicular torsion: peak at puberty; horizontal high-lying testis, absent cremasteric reflex; bilateral orchidopexy within 6 hours.',
      'Testicular tumour: hard, painless, irregular testicular mass; does not transilluminate. AFP raised in non-seminoma; β-hCG in both. Radical inguinal orchidectomy.',
      'Varicocele: bag of worms above left testis (left testicular vein drains at 90° into left renal vein). New right varicocele in an older man = exclude right RCC.',
      'Primary syphilis: painless indurated chancre + non-tender inguinal lymphadenopathy. Confirm with serology. Treat with benzathine penicillin G IM.',
    ],
  },
  {
    id: 'ear',
    title: 'Ear Examination',
    description: 'Systematic ear examination covering pinna inspection, otoscopy, Rinne\'s and Weber\'s tuning fork tests, whisper test, facial nerve assessment, and audiological investigations.',
    specialtyId: 'ent',
    steps: earSteps,
    highYieldSummary: [
      'Rinne negative (BC > AC) = conductive hearing loss in that ear. Weber lateralises to the WORSE ear in CHL; to the BETTER ear in SNHL.',
      'Otoscopy TM colours: pearl-grey (normal), red (AOM), amber/dull (OME), white plaques (tympanosclerosis), blue (haemotympanum). Cone of light is anteroinferior.',
      'Central TM perforation = CSOM without cholesteatoma. Attic/marginal perforation = cholesteatoma — erodes ossicles and facial canal.',
      'Ramsay Hunt syndrome: VZV reactivation; LMN facial palsy + ear vesicles + otalgia. Treat with aciclovir + prednisolone.',
      'OME (glue ear): commonest CHL in children; Type B tympanogram; treat conservatively for 3 months, then grommets if bilateral with hearing loss.',
      'Acoustic neuroma (vestibular schwannoma): unilateral SNHL + tinnitus + vertigo. MRI IAM with gadolinium for diagnosis.',
    ],
  },
  {
    id: 'nose-throat',
    title: 'Nose & Throat Examination',
    description: 'Systematic ENT examination of the nose and throat covering anterior rhinoscopy, sinus assessment, oral cavity and oropharynx inspection, and laryngeal assessment.',
    specialtyId: 'ent',
    steps: noseThroatSteps,
    highYieldSummary: [
      'Little\'s area (Kiesselbach\'s plexus) is the site of 90% of epistaxis — five arteries anastomose on the anteroinferior nasal septum; first aid: lean forward and pinch the soft nose 10–20 minutes.',
      'Nasal polyps: bilateral pale glistening masses in the middle meatus — associated with Samter\'s triad (polyps + asthma + aspirin sensitivity) and CF.',
      'Centor score ≥4: treat tonsillitis with phenoxymethylpenicillin 10 days. Scores 0–1: no antibiotics. NICE NG84.',
      'Peritonsillar abscess (quinsy): trismus + hot potato voice + uvula deviation away from affected side — drain surgically + IV antibiotics.',
      'Hoarseness >3 weeks in a smoker = urgent 2-week-wait laryngoscopy referral to exclude laryngeal SCC (NICE NG12).',
      'Left RLN loops under the aortic arch — more commonly injured than the right; causes: lung cancer, aortic aneurysm, mediastinal disease, thyroidectomy.',
    ],
  },
  {
    id: 'eye',
    title: 'Eye Examination',
    description: 'Systematic ophthalmological examination covering visual acuity, colour vision, visual fields, pupillary reactions, eye movements, external examination, and fundoscopy.',
    specialtyId: 'ophthalmology',
    steps: eyeSteps,
    highYieldSummary: [
      'Visual acuity: improvement with pinhole = refractive error; no improvement = pathological (corneal, lens, retinal, or optic nerve disease).',
      'RAPD (Marcus Gunn pupil): optic nerve or severe retinal disease on the affected side; swinging flashlight test — affected pupil dilates when illuminated.',
      'Pupil-involving CN III palsy: posterior communicating artery aneurysm until proven otherwise — urgent CT/CTA; pupil-sparing CN III = ischaemic (diabetic).',
      'Bitemporal hemianopia = chiasmal compression (pituitary macroadenoma most common); homonymous hemianopia = post-chiasmal lesion (stroke, PCA territory).',
      'Diabetic retinopathy: background → pre-proliferative (cotton wool spots) → proliferative (NVD/NVE) — treat proliferative with PRP or intravitreal anti-VEGF.',
      'Cup:disc ratio >0.6 suspicious for glaucoma; normal IOP 10–21 mmHg; normal tension glaucoma occurs in up to 40% of UK POAG cases.',
      'Wet AMD: choroidal neovascularisation — rapid central visual loss; OCT gold standard; treat with intravitreal anti-VEGF (ranibizumab/aflibercept).',
    ],
  },
  {
    id: 'red-eye',
    title: 'Red Eye Assessment',
    description: 'Systematic assessment of the red eye covering history, visual acuity, pattern of redness, corneal staining, pupil examination, and anterior chamber assessment to differentiate conjunctivitis from sight-threatening diagnoses.',
    specialtyId: 'ophthalmology',
    steps: redEyeSteps,
    highYieldSummary: [
      'Reduced VA in a red eye = serious — same-day ophthalmology referral; always test and document VA first.',
      'Ciliary flush (perilimbal redness, does not move with conjunctiva) = intraocular disease: uveitis, keratitis, acute glaucoma.',
      'Acute angle-closure glaucoma: mid-dilated fixed oval pupil + hazy cornea + IOP >40 mmHg + severe pain + halos — EMERGENCY; treat with IV acetazolamide + topical timolol + pilocarpine.',
      'HSV keratitis: dendritic ulcer on fluorescein staining — treat with topical aciclovir; never use steroids alone (accelerates HSV replication).',
      'Anterior uveitis: small irregular pupil (posterior synechiae) + ciliary flush + photophobia; associated with HLA-B27 conditions (AS, psoriasis, IBD, reactive arthritis) in ~50%.',
      'Hypopyon = pus layer in anterior chamber: causes include severe uveitis, corneal ulcer, Behçet\'s, endophthalmitis (post-op = emergency — intravitreal antibiotics).',
    ],
  },
  {
    id: 'mse',
    title: 'Mental State Examination',
    description: 'Structured psychiatric assessment covering appearance and behaviour, speech, mood, affect, thought, perception, cognition, insight, and risk — forming the foundation of every psychiatric assessment.',
    specialtyId: 'psychiatry',
    steps: mseSteps,
    highYieldSummary: [
      'Always document subjective mood (patient\'s own words in quotes) separately from objective mood — incongruence between the two is a key psychosis indicator.',
      'First-rank symptoms of schizophrenia (Schneider): thought insertion/withdrawal/broadcasting, third-person auditory hallucinations, somatic passivity, made acts/impulses/feelings, delusional perception.',
      'Visual hallucinations in a clear conscious state: always consider organic causes (DLB, Charles Bonnet, anti-NMDA-receptor encephalitis) before attributing to functional psychosis.',
      'Lack of insight (anosognosia) predicts non-adherence and relapse; assess capacity to consent if insight is absent — may warrant MHA assessment.',
      'NICE NG225: do NOT use risk stratification tools (SAD PERSONS) to determine care. Use clinical formulation — individual risk factors + protective factors + safety planning.',
      'Previous suicide attempt is the strongest predictor of future completed suicide (100× increased risk) — always document and always ask directly about current ideation.',
    ],
  },
  {
    id: 'cognitive-assessment',
    title: 'Cognitive Assessment (MMSE / MoCA)',
    description: 'Structured cognitive assessment using MMSE and MoCA, covering orientation, registration, attention, language, visuospatial ability, delayed recall, and executive function — with interpretation and investigation planning.',
    specialtyId: 'psychiatry',
    steps: cognitiveSteps,
    highYieldSummary: [
      'MoCA is now preferred over MMSE for MCI detection: sensitivity 90% vs 18% for MMSE; MoCA includes clock drawing, trails B, 5-word recall, and abstraction tasks that MMSE omits.',
      'MMSE cutoffs: ≥27 = normal; 21–26 = mild; 10–20 = moderate; <10 = severe. MoCA: ≥26 = normal; add 1 point for ≤12 years of education.',
      'Delayed free recall failure without improvement with cues = hippocampal encoding deficit → Alzheimer\'s disease.',
      'DLB: fluctuating cognition + complex visual hallucinations + Parkinsonism + REM sleep behaviour disorder. AVOID haloperidol — risk of severe neuroleptic sensitivity reaction.',
      'FTD: onset 45–65 years, behavioural change (disinhibition, apathy, perseveration), executive dysfunction; episodic memory relatively preserved early.',
      'Reversible causes to exclude: hypothyroidism, B12/folate deficiency, subdural haematoma, normal pressure hydrocephalus (triad: dementia + gait apraxia + urinary incontinence).',
    ],
  },
  {
    id: 'alcohol-substance',
    title: 'Alcohol and Substance History',
    description: 'Structured alcohol and substance misuse history covering CAGE screening, unit quantification, dependence features, physical and social consequences, polysubstance use, opioid assessment, readiness to change, and safety planning.',
    specialtyId: 'psychiatry',
    steps: alcoholSubstanceSteps,
    highYieldSummary: [
      'CAGE ≥2 = 87% sensitivity for alcohol dependence. CMO low-risk limit: ≤14 units/week for men and women (2016 guidelines).',
      'ICD-11 alcohol dependence: ≥3 of: craving, impaired control, withdrawal, tolerance, neglect of other activities, continued use despite harm.',
      'Wernicke\'s encephalopathy: thiamine deficiency — give IV Pabrinex BEFORE glucose to all at-risk heavy drinkers; untreated → Korsakoff\'s syndrome (permanent amnesia).',
      'Alcohol withdrawal seizures: 6–48 h after last drink; treat with chlordiazepoxide reducing regime + thiamine. Delirium tremens peaks 48–72 h — 1–5% mortality if untreated.',
      'Opioid substitution: methadone (full agonist, QTc risk) vs buprenorphine-naloxone (partial agonist, safer in overdose, deters IV misuse). Both equally effective for treatment retention.',
      'Stages of change (Prochaska & DiClemente): pre-contemplation → contemplation → preparation → action → maintenance → relapse. Match intervention to stage.',
    ],
  },
  {
    id: 'risk-assessment',
    title: 'Risk Assessment (Self-harm / Suicidality)',
    description: 'Structured psychiatric risk assessment covering suicidal ideation, intent and plan, previous attempts, risk and protective factors, risk formulation, safety planning, and documentation.',
    specialtyId: 'psychiatry',
    steps: riskAssessmentSteps,
    highYieldSummary: [
      'Ask directly about suicidal ideation — direct questioning does NOT increase risk; indirect questions introduce bias and may shame patients into denial.',
      'Hopelessness (Beck Hopelessness Scale) is the single strongest independent predictor of suicide, beyond diagnosis or severity of depression.',
      'Previous suicide attempt: ~100-fold increase in future completed suicide risk; first year after attempt carries the highest risk.',
      'NICE NG225: do NOT use risk stratification tools (SAD PERSONS) — poor predictive validity. Use a clinical formulation: narrative description of individual risk + protective factors.',
      'NSSI (non-suicidal self-injury) ≠ suicide attempt — NSSI serves an emotional regulation function without intent to die; conflating the two leads to inappropriate management.',
      'MHA Section 2: up to 28 days for assessment; requires two medical recommendations + AMHP. Grounds: mental disorder of nature/degree warranting detention for health/safety.',
    ],
  },
  {
    id: 'paed-developmental',
    title: 'Paediatric Developmental Assessment',
    description: 'Structured developmental assessment covering history, gross motor, fine motor and vision, language and hearing, social and play development, with red flags for cerebral palsy, autism, and global developmental delay.',
    specialtyId: 'paediatrics',
    steps: paedDevelopmentalSteps,
    highYieldSummary: [
      'Key gross motor milestones: sit unsupported 6–8 months, walk 12–15 months, run 18 months, stairs one foot/step at 3 years. Failure to walk by 18 months requires investigation.',
      'Early hand preference before 18 months = contralateral hemiplegia (not true laterality) — most commonly from perinatal cortical injury.',
      'ASD red flags: no social smile by 6 weeks, no pointing or waving by 12 months, no words by 16 months, no 2-word phrases by 24 months. Any regression = ALWAYS refer immediately.',
      'Language delay: exclude hearing impairment first (audiological assessment). Parental concern about hearing should always be acted upon promptly.',
      'Chromosomal microarray (CMA) is first-line investigation for global developmental delay with dysmorphic features — yield ~15–20%.',
      'Fragile X: commonest inherited ID in males (FMR1 CGG repeat expansion); macroorchidism, prominent ears, social anxiety, ASD features.',
    ],
  },
  {
    id: 'paed-cardiovascular',
    title: 'Paediatric Cardiovascular Examination',
    description: 'Systematic paediatric cardiac examination covering syndromic features, peripheral signs and radio-femoral delay, precordial auscultation, innocent vs pathological murmur distinction, and key congenital heart lesions.',
    specialtyId: 'paediatrics',
    steps: paedCardioSteps,
    highYieldSummary: [
      'Radio-femoral delay + upper limb hypertension = coarctation of the aorta until proven otherwise — associated with Turner syndrome and bicuspid aortic valve in 80%.',
      'Fixed splitting of S2 = ASD. VSD = pansystolic murmur lower left sternal edge. PDA = continuous machinery murmur left infraclavicular.',
      'TOF: VSD + pulmonary stenosis + overriding aorta + RVH. Boot-shaped heart on CXR. Tet spells treated with knee-chest position + IV morphine + propranolol.',
      'Innocent murmurs: ≤Grade 2, systolic only, no thrill, no radiation, varies with posture/respiration. Still\'s murmur: vibratory/musical, left sternal edge.',
      'Heart failure in infants: poor feeding + sweating on feeding + failure to thrive + tachypnoea + hepatomegaly. Ankle oedema is NOT typical in infants.',
      'Newborn pulse oximetry screening: pre- and post-ductal SpO₂ at 24–48 h; detects CCHD (coarctation, HLHS, TGA) before duct closure.',
    ],
  },
  {
    id: 'paed-respiratory',
    title: 'Paediatric Respiratory Examination',
    description: 'Systematic paediatric respiratory examination with age-appropriate normal ranges, covering inspection, percussion, and auscultation for asthma, cystic fibrosis, bronchiolitis, and pneumonia.',
    specialtyId: 'paediatrics',
    steps: paedRespiratorySteps,
    highYieldSummary: [
      'Normal respiratory rates: neonate 40–60, infant 30–40, toddler 20–30, child 15–25/min. Tachypnoea + recession = respiratory distress requiring urgent assessment.',
      'Clubbing in a child with recurrent chest infections: think cystic fibrosis first. Clubbing does NOT occur in asthma.',
      'Nasal polyps in a child = investigate for CF (sweat test — chloride >60 mmol/L is diagnostic). CFTR modulators (Kaftrio) transform disease course from age 6.',
      'Croup (parainfluenza) vs epiglottitis: croup = barky cough + stridor + hoarse voice, treat with oral dexamethasone; epiglottitis = toxic + drooling + tripod — do NOT examine throat, call senior anaesthetist.',
      'Bronchiolitis (RSV, infants <1 year): wheeze + subcostal recession + fine crackles; supportive treatment only. NICE NG9 — no routine bronchodilators or steroids.',
      'CF: ΔF508 commonest mutation; sweat chloride >60 mmol/L diagnostic; chronic Pseudomonas colonisation; Kaftrio (elexacaftor-tezacaftor-ivacaftor) for eligible patients.',
    ],
  },
  {
    id: 'paed-abdominal',
    title: 'Paediatric Abdominal Examination',
    description: 'Systematic paediatric abdominal examination covering inspection (visible peristalsis, surgical scars), palpation (liver, spleen, kidney masses), percussion, bowel sounds, and hernial orifices.',
    specialtyId: 'paediatrics',
    steps: paedAbdominalSteps,
    highYieldSummary: [
      'Visible epigastric peristalsis in a 2–8-week infant = pyloric stenosis until proven otherwise — confirm with USS (pyloric muscle >3 mm); correct metabolic alkalosis before surgery.',
      'Intussusception: 6 months–2 years, colicky pain + drawing up knees + redcurrant jelly stools (late). USS = target sign. Treat with air enema reduction (80% success).',
      'Wilms\' tumour: smooth firm flank mass + haematuria in a 3–4-year-old. Associations: WAGR, Beckwith-Wiedemann. Prognosis excellent (>90% survival).',
      'Undescended testis: orchidopexy by 18 months to preserve fertility (germ cell damage from 6 months) and allow tumour surveillance.',
      'ALL (commonest childhood cancer): pallor + purpura + hepatosplenomegaly + lymphadenopathy. FBC: anaemia + thrombocytopenia + lymphoblasts.',
      'Coeliac disease (ESPGHAN 2020 no-biopsy pathway): anti-TTG IgA >10× ULN + positive anti-EMA + HLA DQ2/DQ8 = diagnose without biopsy in symptomatic children.',
    ],
  },
];
