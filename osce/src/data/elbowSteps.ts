import type { ExamStep } from './steps';

export const elbowSteps: ExamStep[] = [
  {
    id: 'elbow-inspection',
    stepNumber: 1,
    title: 'Inspection',
    subtitle: 'Patient standing, arms exposed and hanging by sides',
    questions: [
      {
        id: 'el-ins-q1',
        type: 'examiner',
        text: 'What do you look for when inspecting the elbows from the front and back?',
      },
      {
        id: 'el-ins-r1',
        type: 'rationale',
        text: 'Inspect from front, back, and sides. Look for: skin changes (rheumatoid nodules, psoriatic plaques, gouty tophi), swelling (olecranon bursa posteriorly, joint effusion in the triangle between radial head–lateral epicondyle–olecranon), muscle wasting (forearm or biceps), deformity, and scars. Compare both elbows.',
      },
      {
        id: 'el-ins-q2',
        type: 'examiner',
        text: 'What is the normal carrying angle and what are the abnormal variants?',
      },
      {
        id: 'el-ins-p2',
        type: 'pathology',
        text: 'The carrying angle is the valgus angle between the humerus and forearm when the elbow is fully extended and supinated. Normal: 5–15° in males, 10–25° in females. Cubitus valgus (>normal) is associated with lateral condyle fractures and can cause a tardy ulnar nerve palsy decades later. Cubitus varus (reduced or reversed angle — "gunstock deformity") typically results from a malunited supracondylar fracture in childhood.',
      },
    ],
  },
  {
    id: 'elbow-palpation',
    stepNumber: 2,
    title: 'Palpation',
    subtitle: 'Systematic palpation of bony landmarks and soft tissues',
    questions: [
      {
        id: 'el-pal-q1',
        type: 'examiner',
        text: 'Describe your approach to palpating the elbow and the key landmarks.',
      },
      {
        id: 'el-pal-r1',
        type: 'rationale',
        text: 'With the elbow at 90° flexion, palpate: lateral epicondyle → common extensor origin → radial head (rotates on pronation/supination) → annular ligament → olecranon → olecranon bursa → medial epicondyle → common flexor origin → cubital tunnel (ulnar nerve). The triangle formed by the two epicondyles and olecranon should be equilateral in 90° flexion — disrupted in dislocation or fracture.',
      },
      {
        id: 'el-pal-q2',
        type: 'examiner',
        text: 'Where exactly is the ulnar nerve palpable at the elbow and what symptoms does entrapment cause?',
      },
      {
        id: 'el-pal-p2',
        type: 'pathology',
        text: 'The ulnar nerve runs in the cubital tunnel posterior to the medial epicondyle, between the two heads of flexor carpi ulnaris. It is palpable — and often reproducibly tender — in cubital tunnel syndrome. Symptoms: paraesthesia in the little and ring fingers, weak intrinsic hand muscles (interossei, hypothenar, medial two lumbricals), positive Froment\'s paper sign, and a positive Tinel\'s sign at the cubital tunnel on percussion.',
      },
    ],
  },
  {
    id: 'elbow-movement',
    stepNumber: 3,
    title: 'Movement',
    subtitle: 'Active and passive flexion/extension, pronation/supination',
    questions: [
      {
        id: 'el-mov-q1',
        type: 'examiner',
        text: 'What are the normal ranges of motion at the elbow and what restricts them in pathology?',
      },
      {
        id: 'el-mov-r1',
        type: 'rationale',
        text: 'Flexion: 0–150° (biceps/brachialis, musculocutaneous C5/6). Extension: 0° (triceps, radial nerve C7). Hyperextension to −10° in hypermobile individuals. Pronation: 0–90° (pronator teres/quadratus, median nerve C6–8). Supination: 0–90° (biceps/supinator, musculocutaneous/radial C5–6). A fixed flexion deformity is a classic early sign of elbow OA. Loss of full extension is also the most sensitive sign of an intra-articular fracture after trauma.',
      },
      {
        id: 'el-mov-q2',
        type: 'examiner',
        text: 'A patient loses the last 10° of extension acutely after a fall. What does this suggest and why?',
      },
      {
        id: 'el-mov-p2',
        type: 'pathology',
        text: 'Loss of full extension after elbow trauma is highly sensitive for an occult intra-articular fracture — most commonly a radial head fracture or a non-displaced lateral condyle fracture. This is caused by a haemarthrosis filling the joint. On X-ray, look for the posterior fat pad sign (fat pad displaced posteriorly by joint fluid) — if visible, treat as fracture even if the fracture line is not directly seen. The anterior fat pad (sail sign) is also significant if elevated.',
      },
    ],
  },
  {
    id: 'elbow-epicondylitis',
    stepNumber: 4,
    title: 'Epicondylitis tests',
    subtitle: 'Tennis elbow (lateral) and golfer\'s elbow (medial)',
    questions: [
      {
        id: 'el-epi-q1',
        type: 'examiner',
        text: 'How do you test for lateral epicondylitis (tennis elbow) and what is the underlying pathology?',
      },
      {
        id: 'el-epi-p1',
        type: 'pathology',
        text: 'Cozen\'s test: patient resists wrist extension with the elbow extended and forearm pronated — pain over the lateral epicondyle is positive. Mill\'s test: passive wrist flexion with elbow extended reproduces lateral epicondyle pain. The underlying pathology is not truly inflammatory — it is angiofibroblastic degeneration at the origin of extensor carpi radialis brevis (ECRB) from repetitive microtrauma. Affects 40–50 year olds, especially with repetitive forearm activities.',
      },
      {
        id: 'el-epi-q2',
        type: 'examiner',
        text: 'How does medial epicondylitis (golfer\'s elbow) differ clinically and anatomically from tennis elbow?',
      },
      {
        id: 'el-epi-p2',
        type: 'pathology',
        text: 'Medial epicondylitis affects the common flexor–pronator origin (pronator teres and flexor carpi radialis most commonly). Pain is reproduced by resisted wrist flexion and forearm pronation. It is much less common than lateral epicondylitis (ratio approximately 1:7). The ulnar nerve is adjacent to the medial epicondyle — always assess for cubital tunnel syndrome concurrently (paraesthesia in little and ring fingers, intrinsic weakness). Both conditions are managed conservatively (physio, eccentric loading, NSAIDs); surgery is rarely required.',
      },
    ],
  },
  {
    id: 'elbow-special-tests',
    stepNumber: 5,
    title: 'Stability and special tests',
    subtitle: 'Ligament integrity, nerve percussion, valgus stress',
    questions: [
      {
        id: 'el-spe-q1',
        type: 'examiner',
        text: 'How do you assess the medial collateral ligament of the elbow and when is this clinically important?',
      },
      {
        id: 'el-spe-r1',
        type: 'rationale',
        text: 'Apply a valgus stress with the elbow at 30° flexion (unlocks the olecranon). Pain or laxity compared to the contralateral side suggests medial collateral ligament (MCL) injury — specifically the anterior bundle. The MCL is the primary stabiliser against valgus stress. This is clinically critical in throwing athletes (e.g. cricketers, baseball pitchers) who subject the medial elbow to extreme valgus load at ball release.',
      },
      {
        id: 'el-spe-q2',
        type: 'examiner',
        text: 'Describe the features of a posterior elbow dislocation and how you confirm the diagnosis.',
      },
      {
        id: 'el-spe-p2',
        type: 'pathology',
        text: 'Posterior dislocation is the commonest elbow dislocation, typically from a FOOSH (fall on outstretched hand) with the elbow extended. The olecranon and radial head displace posteriorly relative to the humerus. Loss of the normal equilateral epicondyle–olecranon triangle distinguishes this from a supracondylar fracture (where the triangle is preserved). Confirm with AP and lateral X-rays. Always assess for concurrent radial head fracture, coronoid fracture, and MCL injury ("terrible triad") and neurovascular status (anterior interosseous nerve, brachial artery).',
      },
    ],
  },
  {
    id: 'elbow-completion',
    stepNumber: 6,
    title: 'Completion',
    subtitle: 'Further examination and investigations',
    questions: [
      {
        id: 'el-com-q1',
        type: 'examiner',
        text: 'What would you say to complete your elbow examination?',
      },
      {
        id: 'el-com-r1',
        type: 'rationale',
        text: '"I would examine the shoulder (referred pain from the acromioclavicular or glenohumeral joint), the wrist (distal radial or ulnar pathology), and perform a full neurological examination of the upper limb — specifically the ulnar nerve distribution (cubital tunnel) and the radial nerve (posterior interosseous neuropathy, which can mimic lateral epicondylitis). I would also check the cervical spine for C6/C7 radiculopathy."',
      },
      {
        id: 'el-com-q2',
        type: 'examiner',
        text: 'What investigations would you request, and what findings would prompt urgent referral?',
      },
      {
        id: 'el-com-p2',
        type: 'pathology',
        text: 'X-ray (AP + lateral): fracture, OA (joint space loss, osteophytes, loose bodies), fat pad sign. MRI: soft tissue — MCL integrity, common extensor/flexor origin, intra-articular loose bodies. USS: guided injection for epicondylitis, effusion, tendon tears. NCS/EMG: cubital tunnel syndrome (ulnar neuropathy). Urgent referral: neurovascular compromise after dislocation, open fracture, compartment syndrome (6 Ps), or signs of nerve injury not improving after reduction.',
      },
    ],
  },
];
