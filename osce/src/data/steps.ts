export type QuestionType = 'examiner' | 'rationale' | 'pathology';

export interface Question {
  id: string;
  type: QuestionType;
  text: string;
  bullets?: string[];
  imageUrl?: string;
  source?: string;
}

export interface ExamStep {
  id: string;
  stepNumber: number;
  title: string;
  subtitle: string;
  description?: string;
  checklist?: string[];
  questions: Question[];
}

export const steps: ExamStep[] = [
  {
    id: 'inspection-front',
    stepNumber: 1,
    title: 'Inspection - from the front',
    subtitle: 'Patient standing/sitting, shoulder exposed',
    description: 'Inspect the shoulder anteriorly with the patient standing, looking for asymmetry, bony deformity, swelling, muscle wasting, and scars that indicate previous surgery or trauma.',
    checklist: [
      'Expose both shoulders fully and stand the patient to compare sides',
      'Inspect for asymmetry, bony deformity, and swelling at the AC joint and glenohumeral joint',
      'Assess deltoid bulk for wasting or loss of the normal rounded shoulder contour',
      'Look for a step deformity at the AC joint (suggesting AC joint disruption)',
      'Look for anterior fullness beneath the clavicle (suggesting anterior glenohumeral dislocation)',
      'Identify any scars: anterior portals (arthroscopy), anterior deltopectoral (open stabilisation), superior (AC joint surgery)',
    ],
    questions: [
      { id: 'if-q1', type: 'examiner', text: 'What are you specifically looking for when you inspect the shoulder anteriorly?' },
      { id: 'if-r1', type: 'rationale', text: '', bullets: [
        'Anterior inspection assesses bony contour: AC joint, clavicle, and glenohumeral joint',
        'Assess soft tissue bulk of the deltoid and compare sides',
        'Loss of the normal rounded shoulder contour suggests joint dislocation or deltoid wasting',
      ] },
      { id: 'if-q2', type: 'examiner', text: "A patient has a 'step deformity' visible above the shoulder. Where exactly is it, and what does it indicate?" },
      { id: 'if-p2', type: 'pathology', text: '', bullets: [
        'A step deformity at the acromioclavicular (AC) joint indicates AC joint disruption (sprain or dislocation)',
        'The distal clavicle rides superiorly relative to the acromion',
        'Graded I–VI using the Rockwood classification; Grade III+ produces visible deformity',
      ] },
      { id: 'if-q3', type: 'examiner', text: 'What would anterior fullness beneath the clavicle suggest?' },
      { id: 'if-p3', type: 'pathology', text: '', bullets: [
        'Anterior fullness suggests an anterior glenohumeral dislocation — the commonest direction (~95%)',
        'The humeral head displaces anteriorly and inferiorly, often to a subcoracoid position',
        'Also look for loss of the normal rounded deltoid contour ("shoulder round")',
      ] },
    ],
  },
  {
    id: 'inspection-back',
    stepNumber: 2,
    title: 'Inspection - from behind',
    subtitle: 'Assess scapula, spine of scapula, muscle bulk',
    description: 'Inspect the posterior shoulder to identify scapular winging, infraspinatus and supraspinatus wasting, and spinal deformity that may cause apparent shoulder asymmetry.',
    checklist: [
      'Inspect the supraspinous fossa for supraspinatus wasting',
      'Inspect the infraspinous fossa for infraspinatus wasting (suggests suprascapular nerve entrapment or massive cuff tear)',
      'Look for scapular winging — medial border of scapula protruding away from the chest wall',
      'Ask the patient to push against a wall to exaggerate any scapular winging',
      'Assess for scoliosis causing apparent shoulder asymmetry',
      'Identify posterior scars (posterior arthroscopy portals)',
    ],
    questions: [
      { id: 'ib-q1', type: 'examiner', text: 'Why do you inspect from behind, and what are you looking for?' },
      { id: 'ib-r1', type: 'rationale', text: '', bullets: [
        'Posterior inspection reveals scapular winging, infraspinatus/supraspinatus wasting, and scoliosis',
        'Rotator cuff or nerve injury causes muscle bulk asymmetry visible from behind',
        'Scoliosis can produce apparent shoulder asymmetry that must be distinguished from true pathology',
      ] },
      { id: 'ib-q2', type: 'examiner', text: 'You notice the medial border of one scapula protrudes. What causes scapular winging and which nerve is responsible?' },
      { id: 'ib-p2', type: 'pathology', text: '', bullets: [
        'Scapular winging is caused by serratus anterior weakness, innervated by the long thoracic nerve (C5–C7)',
        'The medial scapular border lifts away from the chest wall',
        'Causes include axillary surgery, trauma, or direct nerve compression',
        'Ask the patient to push against a wall to exaggerate the sign',
      ] },
      { id: 'ib-q3', type: 'examiner', text: 'Wasting confined to the infraspinous fossa - what does this suggest and why is it different from global deltoid wasting?' },
      { id: 'ib-p3', type: 'pathology', text: '', bullets: [
        'Isolated infraspinous wasting suggests suprascapular nerve entrapment (at the spinoglenoid notch) or massive rotator cuff tear',
        'Deltoid wasting implicates the axillary nerve (e.g. after anterior dislocation or surgical neck of humerus fracture)',
        'Distinguishing the location of wasting identifies the nerve or tendon at fault',
      ] },
    ],
  },
  {
    id: 'inspection-side',
    stepNumber: 3,
    title: 'Inspection - from the side',
    subtitle: 'Posture, anterior deltoid, biceps',
    description: 'Inspect the shoulder from the lateral aspect to identify biceps pathology, anterior deltoid bulk, and overall shoulder posture.',
    checklist: [
      'Inspect the mid-upper arm for a Popeye sign (bulging biceps belly from proximal long head rupture)',
      'Inspect the antecubital fossa for flattening (suggesting distal biceps tendon rupture)',
      'Assess overall shoulder posture and any anterior deltoid wasting',
      'Note any lateral scars from previous surgery or trauma',
    ],
    questions: [
      { id: 'is-q1', type: 'examiner', text: 'A patient has a prominent bulge in the mid-upper arm on lateral inspection. What is this and what has ruptured?' },
      { id: 'is-p1', type: 'pathology', text: '', bullets: [
        '"Popeye sign" — a bunched-up biceps belly caused by rupture of the long head of biceps tendon',
        'Rupture occurs at its origin in the bicipital groove or at the supraglenoid tubercle',
        'The muscle belly retracts distally; more common in men over 40 years',
      ] },
      { id: 'is-q2', type: 'examiner', text: 'How would you differentiate a proximal from a distal biceps tendon rupture on inspection alone?' },
      { id: 'is-r2', type: 'rationale', text: '', bullets: [
        'Proximal rupture: bulge is in the mid-arm and the arm appears longer between shoulder and elbow',
        'Distal rupture: the antecubital fossa looks flattened with loss of contour at the elbow',
        'Confirm distal ruptures with the hook test (inability to hook a finger under the biceps tendon in the antecubital fossa)',
      ] },
    ],
  },
  {
    id: 'palpation',
    stepNumber: 4,
    title: 'Palpation',
    subtitle: 'Systematic palpation of bony and soft tissue landmarks',
    description: 'Systematically palpate all bony prominences and soft tissue structures around the shoulder to localise tenderness to a specific anatomical structure.',
    checklist: [
      'Palpate the sternoclavicular joint for tenderness or swelling',
      'Palpate along the clavicle to the AC joint, feeling for step deformity or tenderness',
      'Palpate the acromion and coracoid process (2 cm below and medial to the AC joint)',
      'Palpate the greater tuberosity for rotator cuff insertion tenderness',
      'Palpate the bicipital groove with the arm in 10° internal rotation',
      'Palpate the glenohumeral joint line anteriorly and posteriorly',
      'Assess for local warmth and note any tenderness or swelling',
    ],
    questions: [
      { id: 'pa-q1', type: 'examiner', text: 'Talk me through the order in which you would palpate the shoulder and why.' },
      { id: 'pa-r1', type: 'rationale', text: '', bullets: [
        'Start away from the area of pain to gain trust and establish a baseline for normal',
        'Palpate in sequence: sternoclavicular joint → clavicle → AC joint → acromion → coracoid → greater tuberosity → bicipital groove → glenohumeral joint line',
        'This sequence maps all common pathology sites systematically',
      ] },
      { id: 'pa-q2', type: 'examiner', text: 'Where is the coracoid process and why is tenderness there clinically significant?' },
      { id: 'pa-p2', type: 'pathology', text: '', bullets: [
        'The coracoid lies approximately 2 cm below and medial to the AC joint',
        'Tenderness indicates coracoid impingement, subcoracoid bursitis, or a coracoid stress fracture',
        'Pectoralis minor, short head of biceps, and coracobrachialis all attach here',
      ] },
      { id: 'pa-q3', type: 'examiner', text: 'A patient has point tenderness directly over the greater tuberosity. What structures attach here and what pathologies are you thinking of?' },
      { id: 'pa-p3', type: 'pathology', text: '', bullets: [
        'Supraspinatus, infraspinatus, and teres minor insert at the anterior, middle, and posterior facets of the greater tuberosity respectively',
        'Tenderness suggests rotator cuff tendinopathy, partial or full-thickness tear, or calcific tendinitis',
        'Calcific tendinitis involves calcium deposits most commonly in the supraspinatus tendon',
      ] },
      { id: 'pa-q4', type: 'examiner', text: 'You palpate the bicipital groove with the arm in neutral. Why is this groove clinically important and how do you isolate it?' },
      { id: 'pa-r4', type: 'rationale', text: '', bullets: [
        'The long head of biceps tendon runs through the bicipital groove, held by the transverse humeral ligament',
        'Tendinopathy or subluxation causes anterior shoulder pain',
        'Rotate the arm 10° internally to move the groove medially and make it more accessible',
        'Tenderness in this position indicates bicipital tendinopathy',
      ] },
    ],
  },
  {
    id: 'active-movement',
    stepNumber: 5,
    title: 'Active movement',
    subtitle: 'Ask patient to move through all planes',
    description: 'Assess active shoulder movement through all planes, noting range, pain, and any painful arc to distinguish motor from structural pathology.',
    checklist: [
      'Test active forward flexion (0–180°) and observe for pain or restriction',
      'Test active abduction (0–180°) and note any painful arc between 60–120°',
      'Test active external rotation with the arm by the side (0–60°)',
      'Test active internal rotation by asking the patient to reach up their back (note vertebral level reached)',
      'Test active extension (0–60°)',
      'Compare active and passive ranges to detect an active–passive discrepancy',
    ],
    questions: [
      { id: 'am-q1', type: 'examiner', text: 'What movements do you assess and what are the normal ranges?' },
      { id: 'am-r1', type: 'rationale', text: '', bullets: [
        'Forward flexion (0–180°), extension (0–60°), abduction (0–180°)',
        'Internal rotation assessed by vertebral level reached behind the back (e.g. L1)',
        'External rotation (0–60–90°) and horizontal adduction',
        'Any restriction in a particular plane helps localise the pathology',
      ] },
      { id: 'am-q2', type: 'examiner', text: 'A patient can only actively abduct to 90 degrees but you can passively take them to 150 degrees. What does this discrepancy tell you?' },
      { id: 'am-p2', type: 'pathology', text: '', bullets: [
        'A large active–passive discrepancy indicates a motor problem rather than a structural or capsular one',
        'Most commonly caused by a full-thickness rotator cuff tear (supraspinatus) or axillary nerve palsy',
        'Equal limitation of both active and passive movement suggests a structural or capsular problem, such as adhesive capsulitis',
      ] },
      { id: 'am-q3', type: 'examiner', text: 'What is a painful arc and what is the classic range? What anatomical structure is implicated?' },
      { id: 'am-p3', type: 'pathology', text: '', bullets: [
        'A painful arc is pain occurring between 60–120° of abduction',
        'Below 60° the greater tuberosity has not reached the acromion; above 120° it has passed through',
        'Implicates subacromial impingement of the supraspinatus tendon (or subacromial bursa) against the coracoacromial arch',
      ] },
      { id: 'am-q4', type: 'examiner', text: 'If pain occurs only at the extremes of abduction (near 180 degrees), what structure might be responsible?' },
      { id: 'am-p4', type: 'pathology', text: '', bullets: [
        'Pain at the top of abduction (>150°) suggests AC joint pathology — the AC joint is maximally stressed in this range',
        'Confirm with the cross-arm adduction (scarf) test',
      ] },
    ],
  },
  {
    id: 'passive-movement',
    stepNumber: 6,
    title: 'Passive movement',
    subtitle: 'Examiner moves the joint through range',
    description: 'The examiner passively moves the shoulder through all planes, assessing end-feel, crepitus, and the capsular pattern of restriction to differentiate structural from motor causes of limitation.',
    checklist: [
      'Passively forward-flex the shoulder, stabilising the scapula, and note end-feel',
      'Passively abduct the shoulder and feel for crepitus',
      'Passively externally rotate the arm by the side (capsular restriction = ER lost first)',
      'Passively internally rotate with the arm abducted to 90°',
      'Compare passive to active range to identify active–passive discrepancy',
      'Note any clunk or clicking during passive rotation (suggests labral pathology)',
    ],
    questions: [
      { id: 'pm-q1', type: 'examiner', text: 'What are you specifically feeling for during passive movement?' },
      { id: 'pm-r1', type: 'rationale', text: '', bullets: [
        'Assess end-feel: soft (muscle), firm (capsule/ligament), or hard (bone)',
        'Note crepitus (suggests OA or bursitis) and any pain reproduction',
        'A capsular pattern of restriction (ER > abduction > IR) is characteristic of adhesive capsulitis',
      ] },
      { id: 'pm-q2', type: 'examiner', text: 'What is adhesive capsulitis, and what causes the characteristic capsular pattern of restriction?' },
      { id: 'pm-p2', type: 'pathology', text: '', bullets: [
        'Adhesive capsulitis involves fibrosis and contracture of the glenohumeral joint capsule, particularly the rotator interval and inferior axillary recess',
        'The capsule thickens and loses volume (normal 20–30 ml reduces to <5 ml)',
        'External rotation is lost first because the anterior capsule tightens preferentially',
      ] },
      { id: 'pm-q3', type: 'examiner', text: "You feel a 'clunk' during passive rotation. What does this suggest?" },
      { id: 'pm-p3', type: 'pathology', text: '', bullets: [
        'A clunk during rotation suggests a SLAP lesion (superior labrum anterior to posterior tear) or glenohumeral instability with labral pathology',
        'A reproducible clunk with anterior translation suggests an anterior labral tear (Bankart lesion)',
      ] },
    ],
  },
  {
    id: 'rotator-cuff',
    stepNumber: 7,
    title: 'Rotator cuff tests',
    subtitle: 'Specific tests for each tendon',
    description: 'Test each rotator cuff tendon individually using resisted movements and specific provocation tests to identify which tendon is torn or diseased.',
    checklist: [
      'Test supraspinatus with the Empty Can test (arm at 90° abduction in scapular plane, thumb down, resist elevation)',
      'Test infraspinatus with resisted external rotation at 0° abduction',
      'Test teres minor with resisted external rotation at 90° abduction',
      'Test subscapularis with the Lift-off test (hand on lumbar spine, lift off against resistance)',
      'Alternatively test subscapularis with the belly-press test if the patient cannot reach their back',
      'Grade any weakness using the MRC scale and note pain reproduction',
    ],
    questions: [
      { id: 'rc-q1', type: 'examiner', text: 'Name the four rotator cuff muscles, their attachment points, and their primary actions.' },
      { id: 'rc-r1', type: 'rationale', text: '', bullets: [
        'SITS mnemonic: Supraspinatus (superior greater tuberosity) — initiates abduction 0–15°',
        'Infraspinatus (middle greater tuberosity) — external rotation',
        'Teres minor (inferior greater tuberosity) — external rotation and adduction',
        'Subscapularis (lesser tuberosity) — internal rotation',
        'Together they form a force couple, depressing the humeral head against the glenoid during deltoid-driven abduction',
      ] },
      { id: 'rc-q2', type: 'examiner', text: 'Describe the Empty Can test. What does a positive test indicate and where is the pathology?' },
      { id: 'rc-p2', type: 'pathology', text: '', bullets: [
        'Arm at 90° abduction in the scapular plane (30° anterior to coronal), internally rotated (thumb down, as if emptying a can)',
        'Examiner resists further elevation; weakness or pain indicates supraspinatus pathology (tear or tendinopathy)',
        'The scapular plane reduces impingement, isolating the supraspinatus',
      ] },
      { id: 'rc-q3', type: 'examiner', text: 'How do you test subscapularis and what is the significance of a positive Lift-off test?' },
      { id: 'rc-p3', type: 'pathology', text: '', bullets: [
        'Lift-off test (Gerber): patient places the dorsum of their hand on their lumbar spine, then lifts it away',
        'Inability to lift the hand off indicates subscapularis tear',
        'Subscapularis is the most commonly torn tendon after anterior dislocations and in elderly patients with large cuff tears',
      ] },
      { id: 'rc-q4', type: 'examiner', text: 'A patient cannot externally rotate against resistance. Which two muscles are most likely affected and how do you tell them apart?' },
      { id: 'rc-p4', type: 'pathology', text: '', bullets: [
        'Both infraspinatus and teres minor produce external rotation',
        'Infraspinatus is tested at 0° abduction (arm by side); teres minor at 90° abduction',
        'Isolated infraspinatus weakness with supraspinous fossa wasting but normal teres minor = suprascapular neuropathy at the spinoglenoid notch (teres minor branch is spared)',
      ] },
    ],
  },
  {
    id: 'impingement',
    stepNumber: 8,
    title: 'Impingement tests',
    subtitle: 'Neer, Hawkins-Kennedy',
    description: 'Perform provocation tests that mechanically compress the supraspinatus tendon and subacromial bursa against the coracoacromial arch to reproduce impingement pain.',
    checklist: [
      'Perform Neer\'s test: stabilise the scapula, pronate the forearm, and passively forward-flex the arm to compress supraspinatus under the acromion',
      'Perform Hawkins-Kennedy test: flex the arm to 90°, flex the elbow to 90°, then internally rotate to drive the tendon under the coracoacromial ligament',
      'Note pain location and reproduction at each test',
      'Consider the Neer impingement sign (pain relief after subacromial lidocaine injection confirms subacromial origin)',
    ],
    questions: [
      { id: 'im-q1', type: 'examiner', text: "Describe Neer's impingement test and its anatomical basis." },
      { id: 'im-r1', type: 'rationale', text: '', bullets: [
        'Examiner stabilises the scapula and passively forward-flexes the arm with the forearm pronated',
        'Pain constitutes a positive result',
        'This mechanically drives the greater tuberosity and supraspinatus tendon under the anterior acromion and coracoacromial ligament, reproducing subacromial impingement',
      ] },
      { id: 'im-q2', type: 'examiner', text: 'How does the Hawkins-Kennedy test differ, and what structure does it target?' },
      { id: 'im-r2', type: 'rationale', text: '', bullets: [
        'Arm at 90° forward flexion with elbow at 90°, then the examiner internally rotates',
        'This drives the greater tuberosity under the coracoacromial ligament, targeting the supraspinatus tendon and subacromial bursa',
        'More sensitive than Neer for subacromial impingement',
      ] },
      { id: 'im-q3', type: 'examiner', text: 'What is the subacromial space normally, and what structures pass through it? At what size does pathological impingement typically occur?' },
      { id: 'im-p3', type: 'pathology', text: '', bullets: [
        'Normal subacromial space is 7–14 mm on X-ray; the supraspinatus tendon and subacromial bursa pass through it',
        'Space <6 mm is considered pathological',
        'Causes of narrowing: Type III hooked acromion morphology (most impingement-prone), AC joint osteophytes, rotator cuff thickening, or bursal fluid',
      ] },
    ],
  },
  {
    id: 'instability',
    stepNumber: 9,
    title: 'Instability tests',
    subtitle: 'Apprehension, relocation, load-and-shift',
    description: 'Test for glenohumeral instability by reproducing the direction of subluxation or dislocation, looking for patient apprehension rather than pain alone as the positive finding.',
    checklist: [
      'Perform the anterior apprehension test: arm at 90° abduction and 90° ER, apply gentle anterior pressure to the humeral head (positive = apprehension, not just pain)',
      'Perform the relocation test: posterior pressure on the humeral head should relieve apprehension (confirms anterior instability)',
      'Assess for posterior instability with the posterior apprehension test (arm in 90° flexion, internal rotation, posterior directed force)',
      'Perform the sulcus sign: apply inferior traction to the arm and look for a depression >1 cm below the acromion (indicates multidirectional instability)',
      'Note the degree of generalised ligamentous laxity (Beighton score) for context',
    ],
    questions: [
      { id: 'in-q1', type: 'examiner', text: 'Describe the anterior apprehension test. What specifically constitutes a positive result?' },
      { id: 'in-r1', type: 'rationale', text: '', bullets: [
        'Patient supine or seated; arm at 90° abduction and 90° external rotation',
        'Examiner applies gentle anterior pressure to the humeral head',
        'A positive test is apprehension (patient fear of dislocation), not just pain',
        'Pain without apprehension may indicate other pathology and is not a true positive',
      ] },
      { id: 'in-q2', type: 'examiner', text: 'What is a Bankart lesion? Where exactly does it occur and how does it contribute to recurrent instability?' },
      { id: 'in-p2', type: 'pathology', text: '', bullets: [
        'A Bankart lesion is an avulsion of the anteroinferior labrum from the glenoid rim (3–6 o\'clock position)',
        'Typically caused by anterior shoulder dislocation',
        'The labrum normally deepens the glenoid by approximately 50% and acts as a bumper',
        'Its avulsion reduces rim height, allowing the humeral head to translate anteriorly more easily',
      ] },
      { id: 'in-q3', type: 'examiner', text: 'What is a Hill-Sachs lesion and how does it form?' },
      { id: 'in-p3', type: 'pathology', text: '', bullets: [
        'A Hill-Sachs lesion is an impaction fracture of the posterosuperior humeral head',
        'Formed when the humeral head (softer cancellous bone) impacts the anterior glenoid rim at the moment of anterior dislocation',
        'Large Hill-Sachs lesions (>25% of the head) significantly increase the risk of re-dislocation',
      ] },
      { id: 'in-q4', type: 'examiner', text: 'What is the sulcus sign and what does a positive result indicate?' },
      { id: 'in-p4', type: 'pathology', text: '', bullets: [
        'With the arm by the side, inferior traction is applied; a depression (sulcus) >1 cm below the acromion is positive',
        'Indicates inferior glenohumeral ligament laxity and multidirectional instability (MDI)',
        'MDI is typically managed with physiotherapy (posterior capsular stretching); surgery is a last resort',
      ] },
    ],
  },
  {
    id: 'ac-joint',
    stepNumber: 10,
    title: 'AC joint tests',
    subtitle: 'Cross-arm adduction, Scarf test',
    description: 'Specifically stress the acromioclavicular joint by compressing it through cross-arm adduction to reproduce localised AC joint pain and confirm AC pathology.',
    checklist: [
      'Perform the cross-arm adduction (scarf) test: actively or passively adduct the arm across the chest to compress the AC joint',
      'Confirm that pain is localised to the AC joint rather than the subacromial region (which is more anterior/lateral)',
      'Palpate the AC joint during the manoeuvre to confirm the pain source',
      'Note any AC joint swelling, step deformity, or tenderness on direct palpation',
    ],
    questions: [
      { id: 'ac-q1', type: 'examiner', text: 'How do you test the AC joint specifically? What is the cross-arm adduction test?' },
      { id: 'ac-r1', type: 'rationale', text: '', bullets: [
        'Patient actively adducts the arm across the chest (or examiner does so passively)',
        'This compresses the AC joint, reproducing pain localised to the joint',
        'It is the most specific test for AC joint pathology, distinguishing it from subacromial pain (which is more lateral/anterior)',
      ] },
      { id: 'ac-q2', type: 'examiner', text: 'What stabilises the AC joint and which ligament is most important?' },
      { id: 'ac-p2', type: 'pathology', text: '', bullets: [
        'AC ligaments provide horizontal stability; coracoclavicular ligaments (conoid + trapezoid) provide vertical stability',
        'The coracoclavicular ligaments are most important for preventing superior clavicle displacement',
        'Rockwood Grade I–II: AC ligament sprain only; Grade III+: coracoclavicular ligament rupture',
      ] },
    ],
  },
  {
    id: 'biceps-tests',
    stepNumber: 11,
    title: 'Biceps-specific tests',
    subtitle: "Speed's, Yergason's",
    description: 'Perform targeted tests for the long head of biceps tendon to detect tendinopathy, subluxation out of the bicipital groove, or associated SLAP lesion.',
    checklist: [
      'Perform Speed\'s test: arm forward-flexed to 90°, elbow extended, forearm supinated; resist further forward flexion; pain in the bicipital groove = positive',
      'Perform Yergason\'s test: elbow at 90° flexion, forearm pronated; patient supinates against resistance; pain in groove = tendinopathy, clunk = subluxation',
      'Palpate the bicipital groove during Yergason\'s to feel for tendon subluxation',
      'Note any associated anterior shoulder pain that might indicate a SLAP lesion component',
    ],
    questions: [
      { id: 'bt-q1', type: 'examiner', text: "Describe Speed's test. What is it testing and what is its anatomical basis?" },
      { id: 'bt-p1', type: 'pathology', text: '', bullets: [
        'Arm forward flexed to 90° with elbow extended and forearm supinated; examiner resists further forward flexion',
        'Pain in the bicipital groove = positive for bicipital tendinopathy or SLAP lesion',
        'The long head of biceps originates from the supraglenoid tubercle and superior labrum, so its tension stresses the superior labrum',
      ] },
      { id: 'bt-q2', type: 'examiner', text: "What does Yergason's test assess and how does it differ from Speed's?" },
      { id: 'bt-p2', type: 'pathology', text: '', bullets: [
        'Elbow at 90° flexion, forearm pronated; patient attempts to supinate against resistance',
        'Pain in the bicipital groove = tendinopathy; a clunk = subluxation of the long head of biceps out of the groove',
        'Subluxation indicates transverse humeral ligament insufficiency',
        "Yergason's is more specific for tendon subluxation than Speed's",
      ] },
    ],
  },
  {
    id: 'neurological',
    stepNumber: 12,
    title: 'Neurological assessment',
    subtitle: 'Sensation, power, reflexes',
    description: 'Assess the peripheral nerves at risk from shoulder pathology — particularly the axillary and musculocutaneous nerves — and screen cervical root levels C5–T1 if radiculopathy is suspected.',
    checklist: [
      'Test sensation over the regimental badge area (lateral deltoid) for axillary nerve (C5)',
      'Test deltoid power (shoulder abduction 0–15°) for axillary nerve',
      'Test sensation over the lateral forearm for musculocutaneous nerve',
      'Test biceps power (elbow flexion) for musculocutaneous nerve (C5/6)',
      'Check the biceps reflex (C5/6) and brachioradialis reflex (C5/6)',
      'Screen C7 (triceps power and reflex) and C8/T1 (grip and intrinsic hand muscles) if cervical cause is suspected',
    ],
    questions: [
      { id: 'ne-q1', type: 'examiner', text: 'What neurological examination must you complete and why?' },
      { id: 'ne-r1', type: 'rationale', text: '', bullets: [
        'Shoulder pathology can have neurological causes or consequences requiring formal assessment',
        'Assess the axillary nerve: sensation over the regimental badge area (lateral deltoid) and deltoid power',
        'Assess the musculocutaneous nerve: lateral forearm sensation and biceps power',
        'Perform a full C5–T1 myotome and dermatome screen if cervical spine involvement is suspected',
      ] },
      { id: 'ne-q2', type: 'examiner', text: 'Which nerve is most at risk in anterior shoulder dislocation and how do you test it?' },
      { id: 'ne-p2', type: 'pathology', text: '', bullets: [
        'The axillary nerve (C5, C6) winds around the surgical neck of humerus and is at risk in anterior dislocations and proximal humeral fractures',
        'Test sensation over the "regimental badge" area (lateral deltoid, ~5 cm below the acromion)',
        'Test deltoid power (abduction 0–15°)',
        'Document neurological status before and after reduction',
      ] },
      { id: 'ne-q3', type: 'examiner', text: 'A patient with shoulder pain also has weakness of elbow flexion and forearm supination. Which root levels and nerve are involved?' },
      { id: 'ne-p3', type: 'pathology', text: '', bullets: [
        'C5 and C6 via the musculocutaneous nerve — elbow flexion (C5/6), forearm supination (C6), and biceps brachii',
        'Pattern suggests C5/6 radiculopathy (cervical origin) or brachial neuritis (Parsonage-Turner syndrome)',
        'Parsonage-Turner presents with acute severe pain followed by weakness, without a structural compressive cause',
      ] },
    ],
  },
  {
    id: 'completion',
    stepNumber: 13,
    title: 'To complete the examination',
    subtitle: 'Finishing manoeuvres and investigation plan',
    description: 'Complete the examination by assessing adjacent joints, communicating findings to the examiner, and formulating an appropriate investigation plan.',
    checklist: [
      'Examine the cervical spine for referred pain (Spurling\'s test if radiculopathy suspected)',
      'Examine the elbow for distal pathology affecting the same limb',
      'State you would perform a full neurovascular assessment of the upper limb',
      'Request AP and axillary lateral X-rays of the shoulder as first-line imaging',
      'Indicate further imaging as appropriate: ultrasound for rotator cuff assessment, MRI for labral pathology, MRI arthrogram for suspected SLAP or Bankart lesion',
      'Summarise findings and offer a differential diagnosis to the examiner',
    ],
    questions: [
      { id: 'co-q1', type: 'examiner', text: 'What would you say to complete your shoulder examination and what investigations would you request?' },
      { id: 'co-r1', type: 'rationale', text: '', bullets: [
        'Examine the cervical spine (referred pain), the elbow (joint continuity), and perform a neurovascular assessment',
        'Request AP + axillary lateral X-rays to exclude fracture, dislocation, or AC disruption',
        'Ultrasound or MRI for soft tissue assessment of rotator cuff tears and labral pathology',
      ] },
      { id: 'co-q2', type: 'examiner', text: 'When would you request an MRI arthrogram rather than a standard MRI?' },
      { id: 'co-p2', type: 'pathology', text: '', bullets: [
        'MRI arthrogram (intra-articular gadolinium) is preferred for labral pathology (SLAP, Bankart lesion)',
        'Contrast distends the capsule and separates the labrum from the glenoid, improving sensitivity',
        'Standard MRI is sufficient for full-thickness rotator cuff tears, where joint fluid naturally acts as contrast',
      ] },
      { id: 'co-q3', type: 'examiner', text: 'A patient aged 20 presents after a first anterior dislocation. What is their re-dislocation risk and how does this influence management?' },
      { id: 'co-p3', type: 'pathology', text: '', bullets: [
        'Re-dislocation risk in patients under 20 years is approximately 80–90%',
        'Under 20–25 years, first-time traumatic dislocations are increasingly managed with early arthroscopic Bankart repair',
        'Conservative management risks recurrence and progressive chondral damage with each episode',
      ] },
    ],
  },
];
