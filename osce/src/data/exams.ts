import { steps as shoulderSteps } from './steps';
import { upperLimbNeuroSteps } from './upperLimbNeuroSteps';

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
