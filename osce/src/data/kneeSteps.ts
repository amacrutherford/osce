import type { ExamStep } from './steps';

export const kneeSteps: ExamStep[] = [
  {
    id: 'knee-inspection',
    stepNumber: 1,
    title: 'Inspection',
    subtitle: 'Standing (alignment + gait) then supine',
    questions: [
      {
        id: 'kn-ins-q1',
        type: 'examiner',
        text: 'What do you look for on inspection of the knee, standing and supine?',
      },
      {
        id: 'kn-ins-r1',
        type: 'rationale',
        text: 'Standing: coronal alignment — valgus (knock knees, genu valgum), varus (bow legs, genu varum), flexion deformity. Supine: skin (erythema = septic arthritis/gout, scars), swelling pattern (diffuse = effusion; localised: prepatellar bursitis, tibial tuberosity prominence), quadriceps bulk (wasting = chronic pathology, particularly in OA or post-operative), patella position (alta or baja). Note any fixed flexion deformity.',
      },
      {
        id: 'kn-ins-q2',
        type: 'examiner',
        text: 'A 14-year-old boy has a painful prominence over the tibial tuberosity. What is the diagnosis and how do you manage it?',
      },
      {
        id: 'kn-ins-p2',
        type: 'pathology',
        text: 'Osgood-Schlatter disease: traction apophysitis of the patellar tendon insertion at the tibial tuberosity during rapid adolescent growth, particularly in active boys aged 10–15. Painful bony prominence at the tibial tuberosity, worse with running, kneeling, and stairs. X-ray may show fragmentation of the tuberosity apophysis. Management: conservative — activity modification, physiotherapy (quadriceps stretching), analgesia. Self-limiting (resolves when growth plates fuse). A persistent bony prominence may remain into adulthood.',
      },
    ],
  },
  {
    id: 'knee-palpation',
    stepNumber: 2,
    title: 'Palpation',
    subtitle: 'Temperature, effusion tests, joint lines, patella',
    questions: [
      {
        id: 'kn-pal-q1',
        type: 'examiner',
        text: 'Describe the two tests for a knee effusion and when you would use each.',
      },
      {
        id: 'kn-pal-r1',
        type: 'rationale',
        text: 'Patellar tap (ballottement): empty the suprapatellar pouch by pushing fluid distally with the flat of one hand, then tap the patella sharply — a palpable tap against the femur = large effusion. Bulge sign (stroke test): more sensitive for small effusions — empty the medial gutter by stroking upward, then stroke the lateral aspect of the joint; watch for a fluid bulge filling the medial gutter. Always assess temperature with the dorsum of the hand (compare with the contralateral knee).',
      },
      {
        id: 'kn-pal-q2',
        type: 'examiner',
        text: 'Where is the joint line and why is tenderness there clinically significant?',
      },
      {
        id: 'kn-pal-p2',
        type: 'pathology',
        text: 'The joint line lies between the femoral condyles and tibial plateau, palpable medially and laterally with the knee at 90° flexion. Medial joint line tenderness = medial meniscal tear (or medial compartment OA). Lateral joint line tenderness = lateral meniscal tear or iliotibial band syndrome (ITBS — where the ITB crosses the lateral epicondyle at 30° flexion; Ober\'s test). Isolated medial joint line tenderness in a young person after a twisting injury strongly suggests a meniscal tear.',
      },
    ],
  },
  {
    id: 'knee-movement',
    stepNumber: 3,
    title: 'Movement',
    subtitle: 'Active and passive range, fixed flexion deformity',
    questions: [
      {
        id: 'kn-mov-q1',
        type: 'examiner',
        text: 'What are the normal ranges of knee movement and how do you detect a fixed flexion deformity?',
      },
      {
        id: 'kn-mov-r1',
        type: 'rationale',
        text: 'Flexion: 0–135°. Extension: 0° (neutral). Hyperextension: −10° in hypermobile individuals. Fixed flexion deformity: with the patient supine, check if the popliteal fossa can be pressed flat to the couch — a gap indicates FFD. Also assess quadriceps lag: the difference between passive and active full extension (a >10° lag suggests quadriceps weakness or patella tendon rupture). FFD is a sign of chronic OA, posterior capsular contracture, or Baker\'s cyst rupture.',
      },
    ],
  },
  {
    id: 'knee-ligaments',
    stepNumber: 4,
    title: 'Ligament tests',
    subtitle: 'ACL (Lachman\'s, anterior drawer), PCL, MCL, LCL',
    questions: [
      {
        id: 'kn-lig-q1',
        type: 'examiner',
        text: 'Describe Lachman\'s test. Why is it preferred over the anterior drawer test for ACL assessment?',
      },
      {
        id: 'kn-lig-r1',
        type: 'rationale',
        text: 'Lachman\'s: knee at 20–30° flexion, stabilise the femur with one hand and pull the tibia anteriorly with the other. Positive: >5 mm anterior translation with a soft end-feel (compare with contralateral side). Sensitivity ~85% vs. anterior drawer ~60%. At 90° flexion (drawer position), hamstrings are on tension and can mask ACL insufficiency. Lachman\'s is performed closer to the functional range and is more sensitive, especially acutely when muscle guarding limits 90° positioning.',
      },
      {
        id: 'kn-lig-q2',
        type: 'examiner',
        text: 'How do you test the MCL and LCL, and what injury mechanisms do they typically sustain?',
      },
      {
        id: 'kn-lig-p2',
        type: 'pathology',
        text: 'MCL (valgus stress test): apply a valgus force at the knee at 0° and 30° flexion. At 30°, only the MCL is stressed (if positive at 0°, posterior capsule is also involved). MCL is injured by a valgus force (lateral blow to the knee) — most common in skiing and contact sports. LCL (varus stress test): apply a varus force at 0° and 30°. LCL injuries are less common; a lateral knee injury may also affect the posterolateral corner (arcuate complex + biceps femoris). Grade I/II: conservative. Grade III + combined instability: surgical reconstruction.',
      },
    ],
  },
  {
    id: 'knee-meniscus',
    stepNumber: 5,
    title: 'Meniscus tests',
    subtitle: 'McMurray\'s, Thessaly\'s, Apley\'s',
    questions: [
      {
        id: 'kn-men-q1',
        type: 'examiner',
        text: 'Describe McMurray\'s test. What constitutes a positive result?',
      },
      {
        id: 'kn-men-r1',
        type: 'rationale',
        text: 'Patient supine, knee fully flexed. For medial meniscus: externally rotate the tibia and apply a valgus force, then slowly extend the knee. For lateral meniscus: internally rotate the tibia + varus force then extend. A positive result is a palpable or audible click at the joint line — combined with pain. A click without pain may be normal (as in physiological clicking). McMurray\'s is most sensitive for posterior horn tears (as the posterior horn is loaded in full flexion).',
      },
      {
        id: 'kn-men-q2',
        type: 'examiner',
        text: 'Why are meniscal tears so clinically important and what are the long-term consequences if untreated?',
      },
      {
        id: 'kn-men-p2',
        type: 'pathology',
        text: 'The menisci are fibrocartilaginous shock absorbers that increase joint congruity and distribute load across the tibial plateau — they bear 40–70% of the compressive load. Acute tear (young person, twisting injury, often with ACL): pain, swelling, mechanical symptoms (locking if displaced bucket-handle tear, giving way). Degenerative tear (>40 years, no clear mechanism): treated conservatively initially. MRI is the investigation of choice (sensitivity >90%). Untreated large tears → articular cartilage loss → premature OA. Meniscal repair preferred over meniscectomy in young patients to preserve the meniscus.',
      },
    ],
  },
  {
    id: 'knee-patella',
    stepNumber: 6,
    title: 'Patellofemoral tests',
    subtitle: 'Patellar grind, apprehension, Clarke\'s test',
    questions: [
      {
        id: 'kn-pat-q1',
        type: 'examiner',
        text: 'Describe Clarke\'s test and what it diagnoses.',
      },
      {
        id: 'kn-pat-p1',
        type: 'pathology',
        text: 'Clarke\'s test (patellar grind/compression): patient supine, knee extended, examiner presses the patella distally into the trochlear groove and asks the patient to contract the quadriceps. Pain = positive for patellofemoral pain syndrome (PFPS) — previously called chondromalacia patellae. PFPS is the commonest cause of anterior knee pain in young active people (especially runners — "runner\'s knee"). The underlying cause is abnormal patellar tracking (often due to quadriceps dysbalance, hip abductor weakness, or foot overpronation). Treat with VMO strengthening, hip strengthening, and gait retraining.',
      },
      {
        id: 'kn-pat-q2',
        type: 'examiner',
        text: 'Describe the patellar apprehension test and what acute injury does it diagnose?',
      },
      {
        id: 'kn-pat-p2',
        type: 'pathology',
        text: 'Patella apprehension test: knee at 20–30° flexion, push the patella laterally. A positive result is patient apprehension (grimacing, resisting, or grabbing the examiner\'s hand) — indicating a history of patellar dislocation or subluxation. Patella dislocation is most commonly lateral — the patella displaces over the lateral femoral condyle. Associated with: medial patellofemoral ligament (MPFL) tear, trochlear dysplasia, high patella (alta), increased Q-angle. First dislocation: conservative. Recurrent dislocation: MPFL reconstruction or tibial tubercle osteotomy (Fulkerson procedure) if trochlear malalignment.',
      },
    ],
  },
  {
    id: 'knee-completion',
    stepNumber: 7,
    title: 'Completion',
    subtitle: 'Neurovascular check and investigations',
    questions: [
      {
        id: 'kn-com-q1',
        type: 'examiner',
        text: 'What would you say to complete your knee examination?',
      },
      {
        id: 'kn-com-r1',
        type: 'rationale',
        text: '"I would assess the hip (hip OA classically refers to the medial knee — always examine the hip in any patient with knee pain), the ankle and foot (foot pronation can contribute to knee malalignment and PFPS), and perform a neurological examination of the lower limb. I would palpate the popliteal fossa for a Baker\'s cyst (popliteal cyst — a herniation of the joint capsule through the posterior capsule between medial head of gastrocnemius and semimembranosus, associated with intra-articular pathology)."',
      },
      {
        id: 'kn-com-q2',
        type: 'examiner',
        text: 'What investigations would you request for a 25-year-old with an acute knee haemarthrosis after a twisting injury?',
      },
      {
        id: 'kn-com-p2',
        type: 'pathology',
        text: 'Acute haemarthrosis (blood in the joint) after a sporting twisting injury in a young person: ACL rupture in ~70%, peripheral meniscal tear in ~20%, osteochondral fracture in ~10%. X-ray (AP + lateral): exclude fracture (Segond fracture — avulsion of the lateral tibial plateau = pathognomonic of ACL rupture). MRI knee: gold standard — visualises ACL, PCL, menisci, articular cartilage, bone marrow oedema. Aspirate the joint if tense effusion causing pain (confirm haemarthrosis vs. lipohemarthrosis — fat globules indicate osteochondral fracture). Refer for orthopaedic review and physiotherapy; ACL reconstruction if functionally unstable.',
      },
    ],
  },
];
