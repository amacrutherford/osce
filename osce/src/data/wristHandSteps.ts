import type { ExamStep } from './steps';

export const wristHandSteps: ExamStep[] = [
  {
    id: 'wh-inspection',
    stepNumber: 1,
    title: 'Inspection',
    subtitle: 'Both hands resting palm-down then palm-up on a pillow',
    questions: [
      {
        id: 'wh-ins-q1',
        type: 'examiner',
        text: 'What do you look for when inspecting the hands and wrists, and in what order?',
      },
      {
        id: 'wh-ins-r1',
        type: 'rationale',
        text: 'Inspect dorsal then palmar surfaces. Dorsal: skin (rheumatoid nodules, Heberden\'s/Bouchard\'s nodes, Dupuytren\'s cord, gouty tophi), joint swelling (MCP/PIP/DIP/wrist), deformity (ulnar deviation, boutonnière, swan neck, mallet finger), muscle wasting (first dorsal interosseous, thenar, hypothenar). Palmar: Dupuytren\'s contracture (thickened palmar fascia), thenar/hypothenar wasting, skin creases.',
      },
      {
        id: 'wh-ins-q2',
        type: 'examiner',
        text: 'A patient has ulnar deviation of the fingers, MCP joint swelling, and thenar wasting. What is the most likely diagnosis and what deformities do you expect?',
      },
      {
        id: 'wh-ins-p2',
        type: 'pathology',
        text: 'Rheumatoid arthritis — a symmetrical, seronegative erosive arthropathy. Classic deformities: ulnar deviation at MCPs, swan-neck (PIP hyperextension + DIP flexion), boutonnière (PIP flexion + DIP hyperextension), Z-deformity of the thumb. Thenar wasting suggests median nerve compression (carpal tunnel) — which is itself a complication of RA synovitis at the wrist. Posterior interosseous nerve entrapment causes finger drop. MCP involvement distinguishes RA from OA (which favours PIPs and DIPs).',
      },
    ],
  },
  {
    id: 'wh-palpation',
    stepNumber: 2,
    title: 'Palpation',
    subtitle: 'Bones, joints, tendons, and the anatomical snuffbox',
    questions: [
      {
        id: 'wh-pal-q1',
        type: 'examiner',
        text: 'Where is the anatomical snuffbox and what is the clinical significance of tenderness there?',
      },
      {
        id: 'wh-pal-r1',
        type: 'rationale',
        text: 'The anatomical snuffbox is bounded by the extensor pollicis longus (medially), abductor pollicis longus and extensor pollicis brevis (laterally), and the radial styloid (proximally). It overlies the scaphoid, radial artery, and trapezium. Tenderness in the snuffbox after a FOOSH — especially in a young patient — is scaphoid fracture until proven otherwise, regardless of normal X-rays.',
      },
      {
        id: 'wh-pal-q2',
        type: 'examiner',
        text: 'Why is a missed scaphoid fracture clinically dangerous and how do you manage suspected scaphoid injury?',
      },
      {
        id: 'wh-pal-p2',
        type: 'pathology',
        text: 'The scaphoid has a retrograde blood supply entering the distal pole — a waist fracture risks avascular necrosis of the proximal pole (incidence ~30% if untreated). Avascular necrosis leads to scaphoid non-union advanced collapse (SNAC) and progressive wrist OA. Management: if clinical suspicion is present (snuffbox tenderness ± pain on axial loading of thumb), immobilise in a scaphoid cast and arrange MRI (most sensitive) or CT. X-ray misses up to 30% of scaphoid fractures initially.',
      },
    ],
  },
  {
    id: 'wh-movement',
    stepNumber: 3,
    title: 'Movement',
    subtitle: 'Wrist and finger range of motion, active and passive',
    questions: [
      {
        id: 'wh-mov-q1',
        type: 'examiner',
        text: 'What movements do you assess at the wrist and what are the normal ranges?',
      },
      {
        id: 'wh-mov-r1',
        type: 'rationale',
        text: 'Wrist flexion (0–80°), extension (0–70°), radial deviation (0–20°), ulnar deviation (0–30°). Forearm pronation/supination (0–90° each) — partly driven at the distal radioulnar joint. Grip strength (compare sides). Finger movements: MCP, PIP, DIP flexion/extension; thumb palmar abduction, opposition, retropulsion. Test each joint systematically and note any active–passive discrepancy (suggests tendon rupture vs. joint restriction).',
      },
      {
        id: 'wh-mov-q2',
        type: 'examiner',
        text: 'A patient cannot actively extend one finger but passive movement is full. What has happened?',
      },
      {
        id: 'wh-mov-p2',
        type: 'pathology',
        text: 'Extensor tendon rupture — most commonly at the wrist (Vaughan-Jackson syndrome in RA: attrition rupture over dorsally prominent distal ulna, starting with little finger, progressing radially). If at the DIP joint, this is a mallet finger (extensor digitorum communis terminal slip rupture — from direct blow or forced flexion). Mallet finger: DIP rests in flexion, cannot extend actively; treat with continuous DIP splinting in extension for 6–8 weeks. Active–passive discrepancy is the cardinal finding distinguishing tendon rupture from joint restriction.',
      },
    ],
  },
  {
    id: 'wh-carpal-tunnel',
    stepNumber: 4,
    title: 'Carpal tunnel tests',
    subtitle: 'Phalen\'s, Tinel\'s, and median nerve assessment',
    questions: [
      {
        id: 'wh-ct-q1',
        type: 'examiner',
        text: 'Describe Phalen\'s and Tinel\'s tests for carpal tunnel syndrome. Which is more sensitive and which more specific?',
      },
      {
        id: 'wh-ct-r1',
        type: 'rationale',
        text: 'Phalen\'s test: hold both wrists in maximal flexion for 60 seconds — positive if paraesthesia in the median distribution (thumb, index, middle, radial ring) is reproduced. Tinel\'s test: percuss over the carpal tunnel at the wrist crease — positive if tingling radiates distally into the median distribution. Phalen\'s is more sensitive (~75%); Tinel\'s is more specific (~77%). Gold standard for diagnosis is nerve conduction studies.',
      },
      {
        id: 'wh-ct-q2',
        type: 'examiner',
        text: 'Which muscle do you test to assess for motor involvement in carpal tunnel syndrome and why?',
      },
      {
        id: 'wh-ct-p2',
        type: 'pathology',
        text: 'Abductor pollicis brevis (APB) — a pure median nerve/T1 muscle, tested by asking the patient to lift the thumb perpendicular to the palm against resistance. Weakness or wasting of the thenar eminence indicates advanced carpal tunnel with motor involvement. This is a surgical urgency — persistent motor involvement risks irreversible axonal degeneration. CTS is associated with pregnancy, hypothyroidism, diabetes, RA, acromegaly, and amyloidosis.',
      },
    ],
  },
  {
    id: 'wh-dequervain',
    stepNumber: 5,
    title: 'De Quervain\'s and other tendon tests',
    subtitle: 'Finkelstein\'s test, trigger finger, Dupuytren\'s',
    questions: [
      {
        id: 'wh-dq-q1',
        type: 'examiner',
        text: 'Describe Finkelstein\'s test and what condition it diagnoses.',
      },
      {
        id: 'wh-dq-p1',
        type: 'pathology',
        text: 'Patient tucks the thumb into the palm, then the examiner passively ulnar-deviates the wrist. Severe pain at the radial styloid reproduced = positive for de Quervain\'s tenosynovitis — stenosing tenosynovitis of abductor pollicis longus and extensor pollicis brevis in the first dorsal compartment. Common in new mothers (picking up infants). Treat with splint, steroid injection, or surgical first compartment release.',
      },
      {
        id: 'wh-dq-q2',
        type: 'examiner',
        text: 'What is Dupuytren\'s contracture and which digit is most commonly affected?',
      },
      {
        id: 'wh-dq-p2',
        type: 'pathology',
        text: 'Fibroproliferative disease of the palmar fascia causing progressive flexion contracture — most commonly the ring finger, then little finger. Nodules → cords → contracture. Risk factors: age, male sex, Northern European ancestry, diabetes, alcohol excess, phenytoin, smoking, epilepsy, and manual labour. The tabletop test (inability to lay the hand flat) indicates surgical threshold. Surgery (fasciectomy) or collagenase injection (Xiapex) when MCP contracture >30° or PIP >20°.',
      },
    ],
  },
  {
    id: 'wh-completion',
    stepNumber: 6,
    title: 'Completion',
    subtitle: 'Neurovascular assessment and investigations',
    questions: [
      {
        id: 'wh-com-q1',
        type: 'examiner',
        text: 'What would you say to complete your hand and wrist examination?',
      },
      {
        id: 'wh-com-r1',
        type: 'rationale',
        text: '"I would perform a full neurological examination of the hand assessing median (APB, sensation over lateral 3½ fingers), ulnar (intrinsic muscles, sensation over medial 1½ fingers, Froment\'s sign), and radial (ECRL/ECRB, sensation dorsal first web space) nerve territories. I would palpate the radial and ulnar pulses, and examine the elbow and cervical spine to exclude referred pathology."',
      },
      {
        id: 'wh-com-q2',
        type: 'examiner',
        text: 'What investigations would you request for a patient with hand and wrist pain?',
      },
      {
        id: 'wh-com-p2',
        type: 'pathology',
        text: 'X-ray (PA + lateral wrist, PA hand): fracture, OA (joint space, osteophytes, erosions in RA vs. OA), calcification. For RA: add inflammatory markers (CRP, ESR), RF, anti-CCP (most specific). Scaphoid: MRI preferred over CT (also shows bone marrow oedema). NCS/EMG: carpal tunnel, cubital tunnel. USS: tendon tears, cysts, guided injections. CT: complex fractures, suspected coalition.',
      },
    ],
  },
];
