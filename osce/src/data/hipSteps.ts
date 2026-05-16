import type { ExamStep } from './steps';

export const hipSteps: ExamStep[] = [
  {
    id: 'hip-gait',
    stepNumber: 1,
    title: 'Gait assessment',
    subtitle: 'Observe the patient walking before they lie on the couch',
    questions: [
      {
        id: 'hip-gait-q1',
        type: 'examiner',
        text: 'What gait abnormalities are associated with hip pathology and what do they indicate?',
      },
      {
        id: 'hip-gait-r1',
        type: 'rationale',
        text: 'Always assess gait before the patient lies down — it reveals information lost on the couch. Antalgic gait: shortened stance phase on the affected side (patient offloads rapidly to avoid pain). Trendelenburg gait (compensated): trunk lurches over the affected hip during stance to keep the centre of gravity over the stance limb — caused by hip abductor weakness or pain. Note use of walking aids and leg length discrepancy on approach.',
      },
      {
        id: 'hip-gait-q2',
        type: 'examiner',
        text: 'Describe the Trendelenburg test and its significance.',
      },
      {
        id: 'hip-gait-p2',
        type: 'pathology',
        text: 'Patient stands on one leg. Positive: the contralateral pelvis drops (the unsupported side drops — the examiner stands behind and watches the PSIS). The test is positive on the STANDING leg side. Causes: hip abductor weakness (gluteus medius/minimus — superior gluteal nerve, L4/5), painful hip (patient cannot load the hip abductors), CDH, coxa vara, greater trochanteric bursitis, and post-operative gluteal denervation. A bilateral positive Trendelenburg produces a "waddling gait."',
      },
    ],
  },
  {
    id: 'hip-inspection',
    stepNumber: 2,
    title: 'Inspection (supine)',
    subtitle: 'Symmetry, leg position, scars',
    questions: [
      {
        id: 'hip-ins-q1',
        type: 'examiner',
        text: 'What do you look for when you inspect the hips with the patient supine?',
      },
      {
        id: 'hip-ins-r1',
        type: 'rationale',
        text: 'Check that the pelvis is square (ASIS at the same level — tilt suggests a fixed deformity or leg length discrepancy). Note the resting position of the legs: external rotation of a shortened lower limb after a fall = intracapsular neck of femur fracture. Fixed flexion deformity (patient cannot fully extend the hip — masked by lumbar hyperlordosis). Scars: anterior (THA approach), lateral (DHS for #NOF), posterior (posterior approach THA — piriformis fossa).',
      },
      {
        id: 'hip-ins-q2',
        type: 'examiner',
        text: 'An elderly patient is found on the floor with external rotation and shortening of the right leg. What is the most likely diagnosis and what must you assess immediately?',
      },
      {
        id: 'hip-ins-p2',
        type: 'pathology',
        text: 'Neck of femur fracture — intracapsular (subcapital/transcervical) fracture causes shortening and external rotation from iliopsoas pulling on the lesser trochanter. Assess: neurovascular status (femoral pulse, capillary refill, sciatic nerve function), skin integrity, associated injuries. Risk of avascular necrosis of the femoral head (blood supply via medial and lateral circumflex femoral arteries, vulnerable in intracapsular fractures — treat with hemiarthroplasty or THA in active patients). Extracapsular (intertrochanteric, subtrochanteric) fractures: less AVN risk — treat with DHS or IM nail.',
      },
    ],
  },
  {
    id: 'hip-palpation',
    stepNumber: 3,
    title: 'Palpation and leg length',
    subtitle: 'True and apparent leg length, bony landmarks',
    questions: [
      {
        id: 'hip-pal-q1',
        type: 'examiner',
        text: 'How do you measure true and apparent leg length and what is the difference clinically?',
      },
      {
        id: 'hip-pal-r1',
        type: 'rationale',
        text: 'True leg length: from ASIS to medial malleolus (same bony landmarks bilaterally). Apparent leg length: from the umbilicus (or xiphisternum) to the medial malleolus. True shortening = structural shortening within the limb (bone loss, fracture, AVN). Apparent shortening without true shortening = pelvic tilt or fixed adduction/flexion deformity. Place the pelvis square before measuring true length.',
      },
      {
        id: 'hip-pal-q2',
        type: 'examiner',
        text: 'Where is the greater trochanter and what is greater trochanteric pain syndrome?',
      },
      {
        id: 'hip-pal-p2',
        type: 'pathology',
        text: 'The greater trochanter lies at the level of the pubic symphysis on the lateral aspect of the hip. Greater trochanteric pain syndrome (GTPS, formerly "trochanteric bursitis") causes lateral hip pain, tenderness on direct palpation over the greater trochanter, and pain on resisted hip abduction. It is now understood to be primarily tendinopathy of the gluteus medius and minimus tendons (with or without bursitis) rather than isolated bursitis. Common in middle-aged women. Treat with activity modification, physiotherapy (abductor strengthening), and USS-guided steroid injection.',
      },
    ],
  },
  {
    id: 'hip-movement',
    stepNumber: 4,
    title: 'Movement',
    subtitle: 'Flexion, abduction, adduction, internal and external rotation',
    questions: [
      {
        id: 'hip-mov-q1',
        type: 'examiner',
        text: 'What are the normal ranges of hip movement and what is the capsular pattern of restriction in hip OA?',
      },
      {
        id: 'hip-mov-r1',
        type: 'rationale',
        text: 'Flexion (0–120°), extension (0–30° prone), abduction (0–45°), adduction (0–30°), internal rotation (0–45°), external rotation (0–45°). Capsular pattern of hip OA: internal rotation and flexion restricted first, followed by abduction. Internal rotation is often the most sensitive and earliest sign of hip OA — test with the hip at 90° flexion and assess pain and restriction. Pain in the groin on passive internal rotation is a strong positive.',
      },
      {
        id: 'hip-mov-q2',
        type: 'examiner',
        text: 'Describe Thomas\'s test and what a positive result indicates.',
      },
      {
        id: 'hip-mov-p2',
        type: 'pathology',
        text: 'Thomas\'s test detects a fixed flexion deformity (FFD) masked by compensatory lumbar hyperlordosis. Place one hand under the lumbar spine. Fully flex the contralateral hip onto the abdomen — this flattens the lumbar spine (removes the lordosis). If there is a FFD, the test hip rises off the couch. The angle of rise = the degree of fixed flexion deformity. A FFD >10–15° significantly impairs gait and is a sign of advanced hip OA or post-infection/inflammatory contracture.',
      },
    ],
  },
  {
    id: 'hip-special-tests',
    stepNumber: 5,
    title: 'Special tests',
    subtitle: 'FABER, FADIR, impingement',
    questions: [
      {
        id: 'hip-spe-q1',
        type: 'examiner',
        text: 'Describe the FABER and FADIR tests. What does each diagnose?',
      },
      {
        id: 'hip-spe-r1',
        type: 'rationale',
        text: 'FABER (Patrick\'s test): Flexion, Abduction, External Rotation — place the heel on the contralateral knee (figure-of-4 position) and gently press the knee toward the couch. Groin pain = hip joint pathology (OA, labral tear). Posterior pain = sacroiliac joint pathology. FADIR: Flexion, Adduction, Internal Rotation — hip flexed to 90°, then adducted and internally rotated. Groin pain = femoroacetabular impingement (FAI) or labral tear. Most sensitive test for FAI.',
      },
      {
        id: 'hip-spe-q2',
        type: 'examiner',
        text: 'What is femoroacetabular impingement and what are the two types?',
      },
      {
        id: 'hip-spe-p2',
        type: 'pathology',
        text: 'FAI is abnormal contact between the femoral head-neck junction and the acetabular rim during range of motion, causing labral tears and early OA. Cam impingement: aspherical femoral head (bony bump at the head-neck junction) — more common in young athletic males; damages the labrum from inside out. Pincer impingement: overcoverage of the acetabulum (coxa profunda or retroversion) — more common in middle-aged women; damage to the labrum peripherally. Mixed type is most common. Positive FADIR, normal X-ray or alpha angle >55° on Dunn view. MRI arthrogram is gold standard.',
      },
    ],
  },
  {
    id: 'hip-completion',
    stepNumber: 6,
    title: 'Completion',
    subtitle: 'Neurovascular assessment and investigations',
    questions: [
      {
        id: 'hip-com-q1',
        type: 'examiner',
        text: 'What would you say to complete your hip examination?',
      },
      {
        id: 'hip-com-r1',
        type: 'rationale',
        text: '"I would examine the lumbar spine (referred L3/L4 radiculopathy can mimic hip pain), the knee (hip OA commonly refers to the knee — "hip disease, hip to knee pain"), and perform a full lower limb neurological examination. I would palpate the femoral and popliteal pulses. I would check the contralateral hip. I would also assess the abdomen — psoas abscess can cause a painful flexed hip."',
      },
      {
        id: 'hip-com-q2',
        type: 'examiner',
        text: 'A 65-year-old presents with progressive groin pain, stiffness worse in the morning, and restricted internal rotation. What is the most likely diagnosis and how do you confirm it?',
      },
      {
        id: 'hip-com-p2',
        type: 'pathology',
        text: 'Hip OA: X-ray (AP pelvis + lateral hip) shows joint space narrowing (superolateral most common), subchondral sclerosis, osteophytes (at the acetabular margin and femoral head-neck junction), and subchondral cysts. MRI if X-ray equivocal or AVN suspected. Indications for total hip arthroplasty: severe pain with failed conservative management, functional impairment, radiographic OA. Outcomes: excellent pain relief, 15–20 year implant survival >90%. Complications: dislocation (posterior approach risk), DVT/PE, leg length discrepancy, nerve injury (sciatic), periprosthetic fracture.',
      },
    ],
  },
];
