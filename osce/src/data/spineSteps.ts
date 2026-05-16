import type { ExamStep } from './steps';

export const spineSteps: ExamStep[] = [
  {
    id: 'spine-inspection',
    stepNumber: 1,
    title: 'Inspection',
    subtitle: 'Patient standing with back exposed, viewed from behind then the side',
    questions: [
      {
        id: 'sp-ins-q1',
        type: 'examiner',
        text: 'What do you assess when inspecting the spine and what are the normal sagittal curves?',
      },
      {
        id: 'sp-ins-r1',
        type: 'rationale',
        text: 'From behind: scoliosis (lateral curvature), asymmetry of shoulders/iliac crests, paraspinal muscle bulk, scars, skin markers (café-au-lait spots for neurofibromatosis, tuft of hair/dimple for spina bifida occulta). From the side: normal sagittal profile — cervical lordosis, thoracic kyphosis, lumbar lordosis. Observe gait — antalgic (list away from pain), Trendelenburg (hip abductor weakness).',
      },
      {
        id: 'sp-ins-q2',
        type: 'examiner',
        text: 'A patient has a lateral curvature of the thoracic spine. How do you differentiate a structural from a postural scoliosis?',
      },
      {
        id: 'sp-ins-p2',
        type: 'pathology',
        text: 'Adam\'s forward bend test: ask the patient to bend forward with hands together. In structural scoliosis, a rib hump (rotational deformity of the vertebrae + ribs) appears on the convex side — this does not correct on forward bending. In postural scoliosis (e.g. from leg length discrepancy), the curve corrects when the patient bends forward or when the short leg is corrected. Structural adolescent idiopathic scoliosis is the commonest form — monitor with Cobb angle; brace if 20–45°, surgical fusion if >45°.',
      },
    ],
  },
  {
    id: 'spine-palpation',
    stepNumber: 2,
    title: 'Palpation',
    subtitle: 'Spinous processes, paraspinal muscles, sacroiliac joints',
    questions: [
      {
        id: 'sp-pal-q1',
        type: 'examiner',
        text: 'How do you palpate the spine and what findings are significant?',
      },
      {
        id: 'sp-pal-r1',
        type: 'rationale',
        text: 'Palpate each spinous process from cervical to sacrum. A step deformity (one vertebra displaced anterior to the level below) = spondylolisthesis. Point tenderness over a vertebra = infection (osteomyelitis/discitis), fracture, or malignancy. Paraspinal muscle spasm (palpated just lateral to the spinous processes) = protective muscle guarding around an inflamed disc or nerve root. Sacroiliac joint tenderness = sacroiliitis (ankylosing spondylitis).',
      },
      {
        id: 'sp-pal-q2',
        type: 'examiner',
        text: 'A 55-year-old smoker has point tenderness over a thoracic vertebra with no history of trauma. What is your most important differential?',
      },
      {
        id: 'sp-pal-p2',
        type: 'pathology',
        text: 'Vertebral metastasis — the spine is the most common site of bony metastasis. Primary sources: prostate (most common in men, osteosclerotic), breast (most common in women, mixed), lung, kidney, thyroid (all typically osteolytic). Red flags for malignancy: age >50, previous cancer, unrelenting night pain, weight loss, failure to improve with conservative treatment. Urgent MRI spine and CT chest/abdomen/pelvis for staging. Risk of cord compression — must exclude epidural extension.',
      },
    ],
  },
  {
    id: 'spine-cervical-movement',
    stepNumber: 3,
    title: 'Cervical movement',
    subtitle: 'Flexion, extension, lateral flexion, rotation',
    questions: [
      {
        id: 'sp-cm-q1',
        type: 'examiner',
        text: 'What are the normal ranges of cervical spine movement and which segments contribute most to each?',
      },
      {
        id: 'sp-cm-r1',
        type: 'rationale',
        text: 'Flexion/extension: 0–80° (mainly C5–7). Lateral flexion: 0–45° each side. Rotation: 0–80° each side (approximately half from the atlantoaxial C1/2 joint alone). Pain on movement localises pathology — cervical spondylosis restricts all movements; inflammatory arthritis may show atlantoaxial instability (most dangerous: test with gentle flexion looking for cord signs). Spurling\'s test: lateral flexion + axial compression toward the painful side reproduces radicular pain = cervical radiculopathy.',
      },
      {
        id: 'sp-cm-q2',
        type: 'examiner',
        text: 'What neurological examination must you perform when a patient has cervical spine pathology?',
      },
      {
        id: 'sp-cm-p2',
        type: 'pathology',
        text: 'Full upper limb neurology — myotomes (C5: deltoid/shoulder abduction; C6: biceps/wrist extension; C7: triceps/wrist flexion; C8: finger flexion; T1: finger abduction), reflexes (biceps C5/6; brachioradialis C5/6; triceps C7), and dermatomal sensation. Also check for cord signs: lower limb spasticity, upgoing plantars, gait disturbance — these indicate cervical myelopathy, which may require surgical decompression. Hoffman\'s sign (finger flick test) screens for UMN involvement.',
      },
    ],
  },
  {
    id: 'spine-lumbar-movement',
    stepNumber: 4,
    title: 'Lumbar movement',
    subtitle: 'Flexion, extension, lateral flexion; Schober\'s test',
    questions: [
      {
        id: 'sp-lm-q1',
        type: 'examiner',
        text: 'Describe Schober\'s test. What does it measure and when is it reduced?',
      },
      {
        id: 'sp-lm-r1',
        type: 'rationale',
        text: 'Mark the L5 spinous process (dimples of Venus at PSIS level), then mark 10 cm above and 5 cm below. Ask the patient to bend forward fully. Normally the distance increases from 15 cm to ≥20 cm (i.e. increases by ≥5 cm). A reduced increase (<4 cm) indicates restricted lumbar flexion — classically in ankylosing spondylitis (sacroiliitis → ascending fusion). Also useful to track disease progression and treatment response.',
      },
      {
        id: 'sp-lm-q2',
        type: 'examiner',
        text: 'What is the difference between lumbar spinal stenosis and a prolapsed intervertebral disc in terms of symptoms and signs?',
      },
      {
        id: 'sp-lm-p2',
        type: 'pathology',
        text: 'Disc prolapse (younger patients, often acute): unilateral radicular leg pain worse on flexion, coughing/sneezing; positive SLR (<60°); neurological signs in one root distribution (L4: quadriceps, knee jerk; L5: EHL, foot drop; S1: gastrocnemius, ankle jerk). Spinal stenosis (older patients, insidious): neurogenic claudication — bilateral leg pain, heaviness, and weakness brought on by walking and relieved by sitting or lumbar flexion (extends the canal). SLR usually negative. MRI is definitive for both.',
      },
    ],
  },
  {
    id: 'spine-slr',
    stepNumber: 5,
    title: 'Straight leg raise and femoral stretch',
    subtitle: 'Nerve root tension signs',
    questions: [
      {
        id: 'sp-slr-q1',
        type: 'examiner',
        text: 'Describe the straight leg raise test. What constitutes a positive result and what nerve root does it implicate?',
      },
      {
        id: 'sp-slr-r1',
        type: 'rationale',
        text: 'Patient supine. Passively raise the extended leg while dorsiflexing the foot (maximises sciatic nerve tension). Positive: reproduction of radicular leg pain (not just back pain or hamstring tightness) below the knee at <60° — implicates L4, L5, or S1 nerve root compression. Cross SLR: raising the contralateral leg reproduces ipsilateral radicular pain — highly specific (>90%) for a large central or paracentral disc herniation.',
      },
      {
        id: 'sp-slr-q2',
        type: 'examiner',
        text: 'When would you perform the femoral stretch test instead, and what does it indicate?',
      },
      {
        id: 'sp-slr-p2',
        type: 'pathology',
        text: 'Femoral nerve stretch (prone knee bend): patient prone, passively flex the knee to 90°, then extend the hip. Anterior thigh pain reproducing radiculopathy = positive = L2, L3, or L4 nerve root compression (femoral nerve territory). An upper lumbar disc prolapse (L2/3, L3/4) produces anterior thigh symptoms rather than posterior leg pain, so SLR is often negative. These are far less common than L4/5 and L5/S1 prolapses.',
      },
    ],
  },
  {
    id: 'spine-special-tests',
    stepNumber: 6,
    title: 'Special tests',
    subtitle: 'Ankylosing spondylitis screen, sacroiliac joints, cauda equina',
    questions: [
      {
        id: 'sp-spe-q1',
        type: 'examiner',
        text: 'What are the clinical features of ankylosing spondylitis and what tests help confirm it at the bedside?',
      },
      {
        id: 'sp-spe-p1',
        type: 'pathology',
        text: 'AS: young male (<35 years), insidious onset inflammatory back pain (worse at night and with rest, improved with activity), sacroiliac joint tenderness, reduced Schober\'s test, reduced chest expansion (<5 cm — measure at the xiphisternal level between full expiration and inspiration). Occiput-to-wall distance is increased (cannot touch head to wall). Associated features: uveitis, psoriasis, IBD, aortic regurgitation (HLA-B27 associated). Diagnose with sacroiliac X-ray (sclerosis, erosions), MRI for early disease, and HLA-B27.',
      },
      {
        id: 'sp-spe-q2',
        type: 'examiner',
        text: 'What features would make you suspect cauda equina syndrome and how do you manage it?',
      },
      {
        id: 'sp-spe-p2',
        type: 'pathology',
        text: 'Cauda equina syndrome (CES) is a surgical emergency. Red flags: bilateral leg weakness or radiculopathy, saddle anaesthesia (perineum, genitalia), bladder dysfunction (retention most common — painless overflow incontinence), bowel dysfunction, loss of anal tone. Caused by central massive disc herniation (L4/5 or L5/S1 most common), epidural abscess, or haematoma. Management: emergency MRI spine → emergency surgical decompression within 24–48 hours of symptom onset (ideally sooner). Delay risks permanent bladder/bowel/sexual dysfunction.',
      },
    ],
  },
  {
    id: 'spine-completion',
    stepNumber: 7,
    title: 'Completion',
    subtitle: 'Further examination and investigations',
    questions: [
      {
        id: 'sp-com-q1',
        type: 'examiner',
        text: 'What would you say to complete your spine examination?',
      },
      {
        id: 'sp-com-r1',
        type: 'rationale',
        text: '"I would perform a full neurological examination of the lower limbs (myotomes, reflexes, plantars) and assess gait and heel–toe walking for foot drop. I would examine the hips to exclude referred hip pathology producing back symptoms. I would assess perineal sensation and anal tone if cauda equina is suspected. I would check the chest expansion for AS and perform a rectal examination if malignancy or cauda equina is suspected."',
      },
      {
        id: 'sp-com-q2',
        type: 'examiner',
        text: 'What imaging would you request for a patient with back pain and how do you choose between X-ray, CT, and MRI?',
      },
      {
        id: 'sp-com-p2',
        type: 'pathology',
        text: 'X-ray: first-line for fracture, spondylolisthesis (look for the "Scottie dog" with a collar at pars interarticularis = spondylolysis), OA, AS (bamboo spine). MRI: gold standard for soft tissue — disc disease, cord compression, infection, malignancy, nerve root impingement; always use for suspected CES or red flags. CT: complex fractures, surgical planning, when MRI contraindicated. Bloods: inflammatory markers (AS), PSA (prostate Ca), LDH/protein electrophoresis (myeloma), calcium (hypercalcaemia of malignancy).',
      },
    ],
  },
];
