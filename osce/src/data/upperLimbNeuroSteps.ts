import type { ExamStep } from './steps';

export const upperLimbNeuroSteps: ExamStep[] = [
  {
    id: 'uln-inspection',
    stepNumber: 1,
    title: 'Inspection',
    subtitle: 'Patient seated, both arms exposed and resting in lap',
    questions: [
      {
        id: 'uln-ins-q1',
        type: 'examiner',
        text: 'What do you look for when you inspect the upper limbs neurologically?',
      },
      {
        id: 'uln-ins-r1',
        type: 'rationale',
        text: 'Inspect both limbs simultaneously. Look for: muscle wasting (focal vs diffuse), fasciculations (LMN sign), abnormal posture (pronator drift, flexion contracture), involuntary movements (tremor, chorea), scars (surgery, trauma), and any medical devices.',
      },
      {
        id: 'uln-ins-q2',
        type: 'examiner',
        text: 'You notice isolated wasting of the first dorsal interosseous and hypothenar muscles. What does this localise to?',
      },
      {
        id: 'uln-ins-p2',
        type: 'pathology',
        text: 'Isolated wasting of intrinsic hand muscles (first dorsal interosseous + hypothenar) with sparing of forearm muscles localises to T1 — the ulnar nerve or C8/T1 root. Consider: ulnar neuropathy at elbow or wrist, Pancoast tumour (apex lung, also causes ipsilateral Horner\'s), or cervical rib compressing the lower brachial plexus (Klumpke\'s pattern).',
      },
      {
        id: 'uln-ins-q3',
        type: 'examiner',
        text: 'How do you test for pronator drift and what does a positive result indicate?',
      },
      {
        id: 'uln-ins-r3',
        type: 'rationale',
        text: 'Ask the patient to hold both arms outstretched, palms up, eyes closed for 10 seconds. A positive result is pronation and downward drift of one arm. This reflects UMN weakness: the flexors and pronators are relatively spared compared to extensors and supinators in a pyramidal pattern, so the arm drifts and pronates.',
      },
    ],
  },
  {
    id: 'uln-tone',
    stepNumber: 2,
    title: 'Tone',
    subtitle: 'Passively move each joint at varying speeds',
    questions: [
      {
        id: 'uln-tone-q1',
        type: 'examiner',
        text: 'How do you assess tone in the upper limbs and what is the difference between spasticity and rigidity?',
      },
      {
        id: 'uln-tone-r1',
        type: 'rationale',
        text: 'Passively flex and extend the wrist, then supinate and pronate the forearm. Vary speed. Also assess at the elbow. Ask the patient to relax and distract them (e.g. ask them to move the other limb). Tone is velocity-dependent in spasticity but not in rigidity.',
      },
      {
        id: 'uln-tone-p1',
        type: 'pathology',
        text: 'Spasticity (clasp-knife): velocity-dependent increase in tone — resistance suddenly gives way at a threshold. UMN lesion (stroke, MS, cord compression). Rigidity (lead-pipe): uniform resistance throughout range, velocity-independent. Cogwheeling (tremor superimposed on rigidity) = Parkinson\'s disease. Hypotonia: LMN lesion, cerebellar disease, or acute spinal shock.',
      },
      {
        id: 'uln-tone-q2',
        type: 'examiner',
        text: 'What is clonus and how would you elicit it in the upper limb?',
      },
      {
        id: 'uln-tone-p2',
        type: 'pathology',
        text: 'Clonus is rhythmic, involuntary muscular contractions induced by a sudden maintained stretch. In the upper limb, sharply dorsiflex the wrist and maintain pressure. Sustained clonus (>5 beats) indicates an UMN lesion. It reflects loss of supraspinal inhibition of the stretch reflex arc. Also elicit at the finger flexors (finger clonus).',
      },
    ],
  },
  {
    id: 'uln-power-proximal',
    stepNumber: 3,
    title: 'Power — proximal',
    subtitle: 'Shoulder and elbow movements, MRC grading',
    questions: [
      {
        id: 'uln-pp-q1',
        type: 'examiner',
        text: 'What is the MRC grading scale for power and which movements test C5 and C6?',
      },
      {
        id: 'uln-pp-r1',
        type: 'rationale',
        text: 'MRC: 0=no contraction, 1=flicker only, 2=movement with gravity eliminated, 3=movement against gravity but not resistance, 4=against partial resistance, 5=full strength. Always compare sides. C5: shoulder abduction (deltoid, axillary nerve) and elbow flexion. C6: elbow flexion (biceps, musculocutaneous), wrist extension.',
      },
      {
        id: 'uln-pp-q2',
        type: 'examiner',
        text: 'A neonate is born with the arm adducted, internally rotated, and pronated ("waiter\'s tip" posture). What is this and what is the mechanism?',
      },
      {
        id: 'uln-pp-p2',
        type: 'pathology',
        text: 'Erb\'s palsy: injury to the upper brachial plexus (C5, C6 roots or upper trunk), typically from excessive lateral neck traction at birth. Loss of shoulder abductors, external rotators, elbow flexors, and supinators produces the classic posture. C7 involvement extends the wrist deficit. Recovery is often partial; MRI/NCS/EMG guides prognosis.',
      },
      {
        id: 'uln-pp-q3',
        type: 'examiner',
        text: 'Which root and muscle test elbow extension, and how do you isolate it?',
      },
      {
        id: 'uln-pp-p3',
        type: 'pathology',
        text: 'Elbow extension: C7, radial nerve, triceps. Test with the patient\'s arm at 90° flexion against gravity, or with arm fully extended overhead (gravity assists testing weaker patients). Weakness at C7 also affects wrist flexion and finger extension. Isolated radial nerve palsy (e.g. "Saturday night palsy" — compression in the radial groove) causes wrist drop + weakness of finger extension, with sensory loss over dorsal first web space.',
      },
    ],
  },
  {
    id: 'uln-power-distal',
    stepNumber: 4,
    title: 'Power — distal',
    subtitle: 'Wrist and hand movements, T1 screening',
    questions: [
      {
        id: 'uln-pd-q1',
        type: 'examiner',
        text: 'How do you screen specifically for a T1 deficit and why is this root level clinically important?',
      },
      {
        id: 'uln-pd-r1',
        type: 'rationale',
        text: 'T1 supplies the intrinsic hand muscles (interossei and most lumbricals). Test finger abduction (dorsal interossei; "spread your fingers apart, stop me pushing them together") and thumb abduction — abductor pollicis brevis (APB), purely median nerve/T1. T1 is critical because dysfunction causes profound loss of fine motor hand function.',
      },
      {
        id: 'uln-pd-q2',
        type: 'examiner',
        text: 'A patient has thenar wasting and weakness of thumb abduction but normal grip strength and no sensory loss at the little finger. Where is the lesion?',
      },
      {
        id: 'uln-pd-p2',
        type: 'pathology',
        text: 'Carpal tunnel syndrome: median nerve compression at the wrist. APB (abductor pollicis brevis) is a pure median nerve T1 muscle and often the first to weaken. Grip (C8, ulnar) is spared. Sensory loss is in the median distribution (thumb, index, middle, radial half of ring) — the little finger is ulnar territory. Confirm with Phalen\'s test, Tinel\'s sign, and NCS.',
      },
      {
        id: 'uln-pd-q3',
        type: 'examiner',
        text: 'Describe a claw hand deformity. Which two nerves cause it and how do they differ?',
      },
      {
        id: 'uln-pd-p3',
        type: 'pathology',
        text: 'Claw hand: hyperextension of MCP joints + flexion of IP joints, caused by loss of intrinsic hand muscles (lumbricals/interossei). Ulnar nerve lesion: clawing worse in ring and little fingers (ulnar paradox — a more proximal lesion is less clawed as FDP is also weak). Median nerve lesion at wrist: clawing of index and middle fingers. Combined claw = both nerves or T1 root/cord.',
      },
    ],
  },
  {
    id: 'uln-coordination',
    stepNumber: 5,
    title: 'Coordination',
    subtitle: 'Finger-nose, dysdiadochokinesia, heel-shin',
    questions: [
      {
        id: 'uln-coord-q1',
        type: 'examiner',
        text: 'Describe the finger-nose test. What abnormality indicates cerebellar disease and what is the anatomical basis?',
      },
      {
        id: 'uln-coord-r1',
        type: 'rationale',
        text: 'Ask the patient to touch the tip of their nose then your moving fingertip alternately, with the arm fully extended. Cerebellar signs: intention tremor (worsens as target is approached), past-pointing (dysmetria). The cerebellar hemisphere coordinates ipsilateral limb movement via the corticospinal tract which crosses twice — lesions are therefore ipsilateral to signs.',
      },
      {
        id: 'uln-coord-q2',
        type: 'examiner',
        text: 'How do you test for dysdiadochokinesia and what does a positive result mean?',
      },
      {
        id: 'uln-coord-p2',
        type: 'pathology',
        text: 'Ask the patient to rapidly alternate palm-up and palm-down on their thigh (or clap alternating surfaces against their other palm). Dysdiadochokinesia: irregular, slow, uncoordinated alternating movements. This indicates ipsilateral cerebellar hemisphere lesion — causes include MS, stroke (PICA territory = lateral medullary syndrome), alcohol cerebellar degeneration, or a mass lesion.',
      },
      {
        id: 'uln-coord-q3',
        type: 'examiner',
        text: 'How do you distinguish an intention tremor from an essential tremor?',
      },
      {
        id: 'uln-coord-p3',
        type: 'pathology',
        text: 'Intention tremor (cerebellar): absent at rest, emerges and worsens as the limb approaches a target. Postural tremor (essential tremor): present when the limb is held outstretched, absent at rest, fine and regular. Resting tremor (Parkinsonism): "pill-rolling", present at rest, reduced by voluntary movement. Essential tremor is the commonest tremor; it responds to propranolol or primidone.',
      },
    ],
  },
  {
    id: 'uln-reflexes',
    stepNumber: 6,
    title: 'Reflexes',
    subtitle: 'Biceps, brachioradialis, triceps, Hoffman\'s sign',
    questions: [
      {
        id: 'uln-ref-q1',
        type: 'examiner',
        text: 'State the root values and nerves for the biceps, brachioradialis, and triceps reflexes.',
      },
      {
        id: 'uln-ref-r1',
        type: 'rationale',
        text: 'Biceps: C5/6, musculocutaneous nerve — thumb on biceps tendon, reinforcing with the finger beneath it. Brachioradialis (supinator): C5/6, radial nerve — tap the radial border of forearm 5cm above wrist. Triceps: C7, radial nerve — arm at 90° elbow flexion, strike triceps tendon above olecranon. Reinforcement (Jendrassik): ask patient to clench teeth or pull interlocked hands apart.',
      },
      {
        id: 'uln-ref-q2',
        type: 'examiner',
        text: 'What is an "inverted supinator jerk" and what does it indicate?',
      },
      {
        id: 'uln-ref-p2',
        type: 'pathology',
        text: 'When tapping the brachioradialis tendon (C5/6), the expected wrist extension and elbow flexion is absent, but instead the fingers flex. This occurs when there is a cord lesion at the C5/6 level: the local reflex arc (brachioradialis) is interrupted (absent/reduced), while the segment below (C7/8 finger flexors) is hyperreflexic due to UMN release. It is pathognomonic of a cord lesion at C5/6.',
      },
      {
        id: 'uln-ref-q3',
        type: 'examiner',
        text: 'How do you elicit Hoffman\'s sign and what does it indicate?',
      },
      {
        id: 'uln-ref-p3',
        type: 'pathology',
        text: 'Hold the patient\'s middle finger loosely and flick the distal phalanx downward (or flick the nail). A positive Hoffman\'s sign is reflex flexion of the thumb and/or index finger. It indicates UMN pathology — hyperreflexia from loss of supraspinal inhibition. Bilateral Hoffman\'s is more significant; unilateral may be normal in up to 3% of people.',
      },
    ],
  },
  {
    id: 'uln-sensation',
    stepNumber: 7,
    title: 'Sensation',
    subtitle: 'Light touch, pin prick, vibration, proprioception',
    questions: [
      {
        id: 'uln-sens-q1',
        type: 'examiner',
        text: 'What sensory modalities do you test and which spinal cord pathways do they assess?',
      },
      {
        id: 'uln-sens-r1',
        type: 'rationale',
        text: 'Light touch and vibration (128 Hz tuning fork) and joint position sense (proprioception) → dorsal columns (ipsilateral, ascend uncrossed to medulla). Pin prick and temperature → spinothalamic tract (contralateral, fibres cross within 1–2 segments of entry). Testing both allows localisation of cord vs. peripheral lesions.',
      },
      {
        id: 'uln-sens-q2',
        type: 'examiner',
        text: 'State the upper limb dermatomes from C5 to T1.',
      },
      {
        id: 'uln-sens-r2',
        type: 'rationale',
        text: 'C5: lateral upper arm (deltoid "badge" area). C6: lateral forearm, thumb and index finger. C7: middle finger. C8: ring and little finger, medial forearm. T1: medial forearm, medial elbow. A practical mnemonic: "5 on the shoulder, 6 is the thumb, 7 is the middle, 8 is the little one, T1 is inside."',
      },
      {
        id: 'uln-sens-q3',
        type: 'examiner',
        text: 'A patient has loss of pain and temperature in the upper limbs with preserved proprioception. What is the diagnosis and what has caused it?',
      },
      {
        id: 'uln-sens-p3',
        type: 'pathology',
        text: 'Dissociated sensory loss: spinothalamic fibres cross in the anterior cord (and are vulnerable centrally), while dorsal columns ascend ipsilaterally in the posterior cord. This pattern = syringomyelia (a fluid-filled cavity expanding in the central cord). Classically affects C5-T1 producing "cape distribution" sensory loss and hand wasting. Also seen in anterior cord syndrome (flexion injury) and Brown-Séquard syndrome.',
      },
    ],
  },
  {
    id: 'uln-functional',
    stepNumber: 8,
    title: 'Functional Assessment',
    subtitle: 'Demonstrate real-world hand function',
    questions: [
      {
        id: 'uln-func-q1',
        type: 'examiner',
        text: 'Why is formal neurological testing insufficient on its own, and how do you assess functional upper limb ability?',
      },
      {
        id: 'uln-func-r1',
        type: 'rationale',
        text: 'Power graded 4/5 may still cause significant functional impairment, particularly in fine motor tasks. Functional tests reveal this gap. Ask the patient to: pick up a small coin (key pinch — tests C8/T1 and median nerve), button a shirt (fine motor — T1), write their name (pen grip), and open a jar or hold a cup (grip strength — C8, ulnar/radial).',
      },
      {
        id: 'uln-func-q2',
        type: 'examiner',
        text: 'What is the "OK sign" and what nerve lesion does its absence indicate?',
      },
      {
        id: 'uln-func-p2',
        type: 'pathology',
        text: 'Ask the patient to form an "OK" circle by opposing the tips of the index finger and thumb. Failure — the patient instead pinches the pads (not tips) — indicates anterior interosseous nerve (AIN) palsy, a branch of the median nerve in the forearm. AIN supplies flexor pollicis longus and the lateral half of FDP. There is no sensory loss. Causes: compression, entrapment, Parsonage-Turner syndrome.',
      },
    ],
  },
  {
    id: 'uln-completion',
    stepNumber: 9,
    title: 'Completion',
    subtitle: 'Further examination and investigation plan',
    questions: [
      {
        id: 'uln-comp-q1',
        type: 'examiner',
        text: 'What would you say to complete your upper limb neurological examination?',
      },
      {
        id: 'uln-comp-r1',
        type: 'rationale',
        text: '"I would also examine the lower limbs (UMN signs — upgoing plantars, hyperreflexia, spasticity — confirm cord involvement), assess gait (ataxia, spastic scissor gait), examine the cranial nerves (bulbar involvement in MND), and assess the cervical spine (radiculopathy). I would examine the contralateral limb for comparison."',
      },
      {
        id: 'uln-comp-q2',
        type: 'examiner',
        text: 'What investigations would you request following your upper limb neurological examination, and what are you looking for with each?',
      },
      {
        id: 'uln-comp-p2',
        type: 'pathology',
        text: 'NCS/EMG: distinguishes neuropathy (demyelinating vs axonal), radiculopathy, and myopathy — essential for localisation. MRI cervical spine: cord compression, disc herniation, syrinx, demyelinating plaques, or tumour. MRI brain: stroke, tumour, MS plaques. Bloods: B12/folate (subacute combined degeneration), TFTs, fasting glucose (diabetic neuropathy), ANA/ANCA (vasculitic neuropathy), serum protein electrophoresis (paraproteinaemic neuropathy).',
      },
      {
        id: 'uln-comp-q3',
        type: 'examiner',
        text: 'A 45-year-old presents with progressive asymmetric weakness of the upper limbs, fasciculations, increased reflexes, and no sensory symptoms. What is the likely diagnosis and what would you find on examination?',
      },
      {
        id: 'uln-comp-p3',
        type: 'pathology',
        text: 'Motor neurone disease (MND/ALS): combined UMN (hyperreflexia, spasticity, Hoffman\'s positive, upgoing plantars) and LMN signs (wasting, fasciculations, hypotonia) in the same limb — this co-occurrence is virtually pathognomonic of MND. No sensory involvement. Check for bulbar signs (dysarthria, dysphagia, tongue fasciculations). Confirm with EMG (widespread denervation across multiple myotomes). Fatal; riluzole and multidisciplinary care are mainstays of management.',
      },
    ],
  },
];
