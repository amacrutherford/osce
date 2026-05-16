export type QuestionType = 'examiner' | 'rationale' | 'pathology';

export interface Question {
  id: string;
  type: QuestionType;
  text: string;
}

export interface ExamStep {
  id: string;
  stepNumber: number;
  title: string;
  subtitle: string;
  questions: Question[];
}

export const steps: ExamStep[] = [
  {
    id: 'inspection-front',
    stepNumber: 1,
    title: 'Inspection - from the front',
    subtitle: 'Patient standing/sitting, shoulder exposed',
    questions: [
      { id: 'if-q1', type: 'examiner', text: 'What are you specifically looking for when you inspect the shoulder anteriorly?' },
      { id: 'if-r1', type: 'rationale', text: 'Anterior inspection assesses bony contour (AC joint, clavicle, glenohumeral joint), soft tissue bulk of the deltoid, and signs of deformity. Loss of the normal rounded shoulder contour suggests joint dislocation or deltoid wasting.' },
      { id: 'if-q2', type: 'examiner', text: "A patient has a 'step deformity' visible above the shoulder. Where exactly is it, and what does it indicate?" },
      { id: 'if-p2', type: 'pathology', text: 'A step deformity at the acromioclavicular (AC) joint indicates AC joint disruption (sprain or dislocation). The distal clavicle rides superiorly relative to the acromion. Graded I-VI (Rockwood classification) - Grade III+ shows visible deformity.' },
      { id: 'if-q3', type: 'examiner', text: 'What would anterior fullness beneath the clavicle suggest?' },
      { id: 'if-p3', type: 'pathology', text: "Anterior fullness suggests an anterior glenohumeral dislocation (commonest direction, ~95%), where the humeral head displaces anteriorly and inferiorly - often subcoracoid. Look also for loss of the normal deltoid 'shoulder round'." },
    ],
  },
  {
    id: 'inspection-back',
    stepNumber: 2,
    title: 'Inspection - from behind',
    subtitle: 'Assess scapula, spine of scapula, muscle bulk',
    questions: [
      { id: 'ib-q1', type: 'examiner', text: 'Why do you inspect from behind, and what are you looking for?' },
      { id: 'ib-r1', type: 'rationale', text: 'Posterior inspection reveals winging of the scapula, infraspinatus/supraspinatus wasting (rotator cuff or nerve injury), and scoliosis that could contribute to apparent shoulder asymmetry.' },
      { id: 'ib-q2', type: 'examiner', text: 'You notice the medial border of one scapula protrudes. What causes scapular winging and which nerve is responsible?' },
      { id: 'ib-p2', type: 'pathology', text: 'Scapular winging is caused by serratus anterior weakness - innervated by the long thoracic nerve (C5-C7). The medial scapular border lifts away from the chest wall. It can follow axillary surgery, trauma, or direct compression. Ask the patient to push against a wall to exaggerate it.' },
      { id: 'ib-q3', type: 'examiner', text: 'Wasting confined to the infraspinous fossa - what does this suggest and why is it different from global deltoid wasting?' },
      { id: 'ib-p3', type: 'pathology', text: 'Isolated infraspinous wasting suggests suprascapular nerve entrapment (at spinoglenoid notch) or a massive rotator cuff tear affecting infraspinatus. Deltoid wasting implicates the axillary nerve (e.g. after anterior dislocation or surgical neck of humerus fracture).' },
    ],
  },
  {
    id: 'inspection-side',
    stepNumber: 3,
    title: 'Inspection - from the side',
    subtitle: 'Posture, anterior deltoid, biceps',
    questions: [
      { id: 'is-q1', type: 'examiner', text: 'A patient has a prominent bulge in the mid-upper arm on lateral inspection. What is this and what has ruptured?' },
      { id: 'is-p1', type: 'pathology', text: "'Popeye sign' - a bunched-up biceps belly caused by rupture of the long head of biceps tendon at its origin in the bicipital groove / supraglenoid tubercle. The muscle belly retracts distally. More common in men over 40 years." },
      { id: 'is-q2', type: 'examiner', text: 'How would you differentiate a proximal from a distal biceps tendon rupture on inspection alone?' },
      { id: 'is-r2', type: 'rationale', text: 'Proximal rupture: bulge is low (mid-arm), and the arm looks longer between shoulder and elbow. Distal rupture: antecubital fossa appears flattened, loss of contour at the elbow. Confirm with the hook test for distal ruptures.' },
    ],
  },
  {
    id: 'palpation',
    stepNumber: 4,
    title: 'Palpation',
    subtitle: 'Systematic palpation of bony and soft tissue landmarks',
    questions: [
      { id: 'pa-q1', type: 'examiner', text: 'Talk me through the order in which you would palpate the shoulder and why.' },
      { id: 'pa-r1', type: 'rationale', text: 'Start away from the area of pain to gain patient trust and a reference for normal. Palpate: sternoclavicular joint -> clavicle -> AC joint -> acromion -> coracoid -> greater tuberosity -> bicipital groove -> glenohumeral joint line. This maps all common pathology sites systematically.' },
      { id: 'pa-q2', type: 'examiner', text: 'Where is the coracoid process and why is tenderness there clinically significant?' },
      { id: 'pa-p2', type: 'pathology', text: 'The coracoid is approximately 2cm below and medial to the AC joint. Tenderness here indicates coracoid impingement, subcoracoid bursitis, or a coracoid stress fracture. The pectoralis minor, short head of biceps, and coracobrachialis all attach here.' },
      { id: 'pa-q3', type: 'examiner', text: 'A patient has point tenderness directly over the greater tuberosity. What structures attach here and what pathologies are you thinking of?' },
      { id: 'pa-p3', type: 'pathology', text: 'The supraspinatus, infraspinatus, and teres minor insert at the greater tuberosity (anterior, middle, and posterior facets respectively). Tenderness = rotator cuff tendinopathy or partial/full-thickness tear, or calcific tendinitis (calcium deposits in supraspinatus tendon).' },
      { id: 'pa-q4', type: 'examiner', text: 'You palpate the bicipital groove with the arm in neutral. Why is this groove clinically important and how do you isolate it?' },
      { id: 'pa-r4', type: 'rationale', text: 'The long head of biceps tendon runs through the bicipital groove, held by the transverse humeral ligament. Tendinopathy or subluxation causes anterior shoulder pain. Rotate the arm 10 degrees internally - the groove moves medially and is more accessible. Tenderness here = bicipital tendinopathy.' },
    ],
  },
  {
    id: 'active-movement',
    stepNumber: 5,
    title: 'Active movement',
    subtitle: 'Ask patient to move through all planes',
    questions: [
      { id: 'am-q1', type: 'examiner', text: 'What movements do you assess and what are the normal ranges?' },
      { id: 'am-r1', type: 'rationale', text: 'Forward flexion (0-180 degrees), extension (0-60 degrees), abduction (0-180 degrees), internal rotation (measure by vertebral level reached behind back, e.g. L1), external rotation (0-60-90 degrees), and horizontal adduction. Any restriction localises the pathology.' },
      { id: 'am-q2', type: 'examiner', text: 'A patient can only actively abduct to 90 degrees but you can passively take them to 150 degrees. What does this discrepancy tell you?' },
      { id: 'am-p2', type: 'pathology', text: 'A large active-passive discrepancy indicates a motor problem - most commonly a full-thickness rotator cuff tear (supraspinatus) or axillary nerve palsy. If both active and passive are equally limited, it suggests a structural/capsular problem (e.g. adhesive capsulitis).' },
      { id: 'am-q3', type: 'examiner', text: 'What is a painful arc and what is the classic range? What anatomical structure is implicated?' },
      { id: 'am-p3', type: 'pathology', text: 'A painful arc is pain occurring between 60-120 degrees of abduction. Below 60 degrees the greater tuberosity has not yet reached the acromion; above 120 degrees it has passed through. This implicates subacromial impingement of the supraspinatus tendon (or subacromial bursa) against the coracoacromial arch.' },
      { id: 'am-q4', type: 'examiner', text: 'If pain occurs only at the extremes of abduction (near 180 degrees), what structure might be responsible?' },
      { id: 'am-p4', type: 'pathology', text: 'Pain at the top of abduction (>150 degrees) suggests AC joint pathology - the AC joint is stressed maximally in this range. Confirm with the cross-arm adduction test.' },
    ],
  },
  {
    id: 'passive-movement',
    stepNumber: 6,
    title: 'Passive movement',
    subtitle: 'Examiner moves the joint through range',
    questions: [
      { id: 'pm-q1', type: 'examiner', text: 'What are you specifically feeling for during passive movement?' },
      { id: 'pm-r1', type: 'rationale', text: "Assess: end-feel (soft/firm/hard), crepitus (suggests OA or bursitis), pain reproduction, and the pattern of restriction. A 'capsular pattern' of restriction (ER > abduction > IR) is characteristic of adhesive capsulitis (frozen shoulder)." },
      { id: 'pm-q2', type: 'examiner', text: 'What is adhesive capsulitis, and what causes the characteristic capsular pattern of restriction?' },
      { id: 'pm-p2', type: 'pathology', text: 'Adhesive capsulitis (frozen shoulder) involves fibrosis and contracture of the glenohumeral joint capsule, particularly the rotator interval and inferior axillary recess. The capsule thickens and loses volume (normal 20-30ml -> <5ml). External rotation is lost first because the anterior capsule tightens.' },
      { id: 'pm-q3', type: 'examiner', text: "You feel a 'clunk' during passive rotation. What does this suggest?" },
      { id: 'pm-p3', type: 'pathology', text: 'A clunk during rotation suggests a SLAP lesion (superior labrum anterior to posterior tear) or glenohumeral instability with labral pathology. A reproducible clunk with anterior translation suggests anterior labral tear (Bankart lesion).' },
    ],
  },
  {
    id: 'rotator-cuff',
    stepNumber: 7,
    title: 'Rotator cuff tests',
    subtitle: 'Specific tests for each tendon',
    questions: [
      { id: 'rc-q1', type: 'examiner', text: 'Name the four rotator cuff muscles, their attachment points, and their primary actions.' },
      { id: 'rc-r1', type: 'rationale', text: "SITS: Supraspinatus (superior greater tuberosity, initiates abduction 0-15 degrees), Infraspinatus (middle greater tuberosity, external rotation), Teres minor (inferior greater tuberosity, external rotation + adduction), Subscapularis (lesser tuberosity, internal rotation). Together they provide a 'force couple' depressing the humeral head against the glenoid during deltoid-driven abduction." },
      { id: 'rc-q2', type: 'examiner', text: 'Describe the Empty Can test. What does a positive test indicate and where is the pathology?' },
      { id: 'rc-p2', type: 'pathology', text: 'Arm at 90 degrees abduction in the scapular plane (30 degrees anterior to the coronal plane), internally rotated (thumb down, as if emptying a can). Examiner resists further elevation. Weakness or pain = supraspinatus pathology (tear or tendinopathy). The scapular plane reduces impingement, isolating supraspinatus.' },
      { id: 'rc-q3', type: 'examiner', text: 'How do you test subscapularis and what is the significance of a positive Lift-off test?' },
      { id: 'rc-p3', type: 'pathology', text: 'Lift-off test (Gerber): patient places dorsum of hand on their lumbar spine, then lifts it away. Inability to do so = subscapularis tear. Subscapularis is the most common tendon to tear after anterior dislocations, or in elderly patients with large cuff tears.' },
      { id: 'rc-q4', type: 'examiner', text: 'A patient cannot externally rotate against resistance. Which two muscles are most likely affected and how do you tell them apart?' },
      { id: 'rc-p4', type: 'pathology', text: 'Both infraspinatus and teres minor externally rotate. Infraspinatus is tested at 0 degrees abduction (arm by side), teres minor at 90 degrees abduction. Isolated infraspinatus weakness with supraspinous fossa wasting + normal teres minor = suprascapular neuropathy at the spinoglenoid notch (teres minor branch spared).' },
    ],
  },
  {
    id: 'impingement',
    stepNumber: 8,
    title: 'Impingement tests',
    subtitle: 'Neer, Hawkins-Kennedy',
    questions: [
      { id: 'im-q1', type: 'examiner', text: "Describe Neer's impingement test and its anatomical basis." },
      { id: 'im-r1', type: 'rationale', text: 'Examiner stabilises the scapula and passively forward-flexes the arm with the forearm pronated. Pain = positive. This mechanically drives the greater tuberosity and supraspinatus tendon under the anterior acromion and coracoacromial ligament, reproducing subacromial impingement.' },
      { id: 'im-q2', type: 'examiner', text: 'How does the Hawkins-Kennedy test differ, and what structure does it target?' },
      { id: 'im-r2', type: 'rationale', text: 'Arm at 90 degrees forward flexion, elbow at 90 degrees, then the examiner internally rotates. This drives the greater tuberosity under the coracoacromial ligament and targets the supraspinatus tendon and subacromial bursa. More sensitive than Neer for subacromial impingement.' },
      { id: 'im-q3', type: 'examiner', text: 'What is the subacromial space normally, and what structures pass through it? At what size does pathological impingement typically occur?' },
      { id: 'im-p3', type: 'pathology', text: 'Normal subacromial space: 7-14mm on X-ray. Supraspinatus tendon + subacromial bursa pass through. Space <6mm is considered pathological. Causes of narrowing: acromial morphology (Type III hooked acromion most impingement-prone), AC joint osteophytes, rotator cuff thickening, or fluid in the bursa.' },
    ],
  },
  {
    id: 'instability',
    stepNumber: 9,
    title: 'Instability tests',
    subtitle: 'Apprehension, relocation, load-and-shift',
    questions: [
      { id: 'in-q1', type: 'examiner', text: 'Describe the anterior apprehension test. What specifically constitutes a positive result?' },
      { id: 'in-r1', type: 'rationale', text: "Patient supine or seated. Arm at 90 degrees abduction and 90 degrees external rotation. Examiner applies gentle anterior pressure to the humeral head. A positive test is apprehension (patient's fear of dislocation), not just pain. Pain without apprehension may indicate other pathology." },
      { id: 'in-q2', type: 'examiner', text: 'What is a Bankart lesion? Where exactly does it occur and how does it contribute to recurrent instability?' },
      { id: 'in-p2', type: 'pathology', text: "A Bankart lesion is an avulsion of the anteroinferior labrum from the glenoid rim (at the 3-6 o'clock position), typically caused by anterior shoulder dislocation. The labrum normally deepens the glenoid by approximately 50% and acts as a bumper. Its avulsion reduces this rim height, allowing the humeral head to translate anteriorly more easily." },
      { id: 'in-q3', type: 'examiner', text: 'What is a Hill-Sachs lesion and how does it form?' },
      { id: 'in-p3', type: 'pathology', text: 'A Hill-Sachs lesion is an impaction fracture of the posterosuperior humeral head, caused when the humeral head (softer cancellous bone) impacts the anterior glenoid rim at the moment of anterior dislocation. Large Hill-Sachs lesions (>25% of head) significantly increase re-dislocation risk.' },
      { id: 'in-q4', type: 'examiner', text: 'What is the sulcus sign and what does a positive result indicate?' },
      { id: 'in-p4', type: 'pathology', text: 'With the arm by the side, traction is applied inferiorly. A depression (sulcus) appearing below the acromion >1cm is positive. It indicates inferior glenohumeral ligament laxity / multidirectional instability (MDI). MDI is typically treated with physiotherapy (posterior capsular stretching); surgery is a last resort.' },
    ],
  },
  {
    id: 'ac-joint',
    stepNumber: 10,
    title: 'AC joint tests',
    subtitle: 'Cross-arm adduction, Scarf test',
    questions: [
      { id: 'ac-q1', type: 'examiner', text: 'How do you test the AC joint specifically? What is the cross-arm adduction test?' },
      { id: 'ac-r1', type: 'rationale', text: 'The patient actively adducts the arm across the chest (or examiner passively does so). This compresses the AC joint, reproducing pain localised to the joint. It is the most specific test for AC joint pathology, distinguishing it from subacromial pain (which is usually more lateral/anterior).' },
      { id: 'ac-q2', type: 'examiner', text: 'What stabilises the AC joint and which ligament is most important?' },
      { id: 'ac-p2', type: 'pathology', text: 'The AC joint is stabilised by: AC ligaments (horizontal stability) and coracoclavicular ligaments - conoid and trapezoid (vertical stability). The CC ligaments are most important for preventing superior clavicle displacement. Rockwood Grade I-II = AC ligament sprain; Grade III+ = CC ligament rupture.' },
    ],
  },
  {
    id: 'biceps-tests',
    stepNumber: 11,
    title: 'Biceps-specific tests',
    subtitle: "Speed's, Yergason's",
    questions: [
      { id: 'bt-q1', type: 'examiner', text: "Describe Speed's test. What is it testing and what is its anatomical basis?" },
      { id: 'bt-p1', type: 'pathology', text: 'Arm forward flexed to 90 degrees, elbow extended, forearm supinated. Examiner resists further forward flexion. Pain in the bicipital groove = positive for bicipital tendinopathy or SLAP lesion. The long head of biceps originates from the supraglenoid tubercle and superior labrum, so its tension stresses the superior labrum.' },
      { id: 'bt-q2', type: 'examiner', text: "What does Yergason's test assess and how does it differ from Speed's?" },
      { id: 'bt-p2', type: 'pathology', text: "Elbow at 90 degrees flexion, forearm pronated. Patient attempts to supinate against resistance. Pain in the bicipital groove = tendinopathy; a clunk = subluxation of the long head of biceps tendon out of the groove (transverse humeral ligament insufficiency). Yergason's is more specific for tendon subluxation than Speed's." },
    ],
  },
  {
    id: 'neurological',
    stepNumber: 12,
    title: 'Neurological assessment',
    subtitle: 'Sensation, power, reflexes',
    questions: [
      { id: 'ne-q1', type: 'examiner', text: 'What neurological examination must you complete and why?' },
      { id: 'ne-r1', type: 'rationale', text: 'Shoulder pathology can have neurological causes or consequences. Assess: axillary nerve (sensation over regimental badge area - lateral deltoid; power of deltoid), musculocutaneous nerve (lateral forearm sensation; biceps power), and the full C5-T1 myotome/dermatome screen if there is cervical spine involvement.' },
      { id: 'ne-q2', type: 'examiner', text: 'Which nerve is most at risk in anterior shoulder dislocation and how do you test it?' },
      { id: 'ne-p2', type: 'pathology', text: "The axillary nerve (C5, C6) winds around the surgical neck of humerus. It is at risk in anterior dislocations and proximal humeral fractures. Test: sensation over the 'regimental badge' area (lateral deltoid, approximately 5cm below the acromion) and deltoid power (abduction 0-15 degrees). Document before and after reduction." },
      { id: 'ne-q3', type: 'examiner', text: 'A patient with shoulder pain also has weakness of elbow flexion and forearm supination. Which root levels and nerve are involved?' },
      { id: 'ne-p3', type: 'pathology', text: 'C5 and C6 - the musculocutaneous nerve. Elbow flexion (C5/6), forearm supination (C6), and biceps brachii power. This pattern suggests either a C5/6 radiculopathy (cervical origin) or a brachial neuritis (Parsonage-Turner syndrome - acute onset, severe pain, then weakness).' },
    ],
  },
  {
    id: 'completion',
    stepNumber: 13,
    title: 'To complete the examination',
    subtitle: 'Finishing manoeuvres and investigation plan',
    questions: [
      { id: 'co-q1', type: 'examiner', text: 'What would you say to complete your shoulder examination and what investigations would you request?' },
      { id: 'co-r1', type: 'rationale', text: "State: 'I would also examine the cervical spine (referred pain), the elbow (joint continuity), and perform a neurovascular exam. I would request AP + axillary lateral X-rays (exclude fracture/dislocation/AC disruption), and ultrasound or MRI for soft tissue assessment (rotator cuff tear, labral pathology).'" },
      { id: 'co-q2', type: 'examiner', text: 'When would you request an MRI arthrogram rather than a standard MRI?' },
      { id: 'co-p2', type: 'pathology', text: 'MRI arthrogram (intra-articular gadolinium) is preferred for labral pathology (SLAP, Bankart lesion), as the contrast distends the capsule and separates the labrum from the glenoid, improving sensitivity. Standard MRI is sufficient for full-thickness rotator cuff tears (where fluid naturally acts as contrast).' },
      { id: 'co-q3', type: 'examiner', text: 'A patient aged 20 presents after a first anterior dislocation. What is their re-dislocation risk and how does this influence management?' },
      { id: 'co-p3', type: 'pathology', text: 'Risk of re-dislocation in patients under 20 years is approximately 80-90%. Under 20-25 years, first-time traumatic dislocations are increasingly managed with early arthroscopic Bankart repair (rather than conservative treatment) due to this high recurrence risk and risk of chondral damage with each episode.' },
    ],
  },
];
