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
];
