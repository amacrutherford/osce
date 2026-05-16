import type { ExamStep } from './steps';

export const ankleSteps: ExamStep[] = [
  {
    id: 'ankle-inspection',
    stepNumber: 1,
    title: 'Inspection',
    subtitle: 'Standing, walking, then non-weight-bearing',
    questions: [
      {
        id: 'an-ins-q1',
        type: 'examiner',
        text: 'What do you look for when inspecting the ankle and foot?',
      },
      {
        id: 'an-ins-r1',
        type: 'rationale',
        text: 'Inspect weight-bearing first — observe arch (pes planus/cavus), hindfoot alignment (valgus/varus), forefoot deformities (hallux valgus, claw/hammer toes). Non-weight-bearing: swelling pattern (lateral = ATFL; medial = deltoid; diffuse = effusion/fracture), bruising, skin (callosities, ulceration in diabetic neuropathy, pitting oedema), scars. From behind: check subtalar alignment; "too many toes" sign (>2 toes visible from behind) in tibialis posterior tendon dysfunction (PTTD).',
      },
      {
        id: 'an-ins-q2',
        type: 'examiner',
        text: 'What is the "too many toes" sign and what does it indicate?',
      },
      {
        id: 'an-ins-p2',
        type: 'pathology',
        text: '"Too many toes" sign: standing behind the patient, normally only the little toe or the little and ring toe should be visible lateral to the heel. If more toes are visible, the forefoot has abducted, indicating tibialis posterior tendon dysfunction (PTTD) — the primary dynamic stabiliser of the medial arch. PTTD causes a progressive painful flatfoot deformity (pes planus). Associated with a positive single-heel-rise test (patient cannot rise onto tiptoe on the affected foot). Stages: I (tenosynovitis), II (flexible flatfoot), III (rigid flatfoot), IV (ankle involvement). Early stages treated conservatively; stages III/IV may require reconstruction or fusion.',
      },
    ],
  },
  {
    id: 'ankle-palpation',
    stepNumber: 2,
    title: 'Palpation',
    subtitle: 'Systematic palpation of malleoli, ligaments, tendons, base of 5th MT',
    questions: [
      {
        id: 'an-pal-q1',
        type: 'examiner',
        text: 'Describe a systematic approach to palpating the ankle after injury.',
      },
      {
        id: 'an-pal-r1',
        type: 'rationale',
        text: 'Palpate in a logical sequence: lateral malleolus → ATFL (anterior to lateral malleolus) → CFL (beneath the lateral malleolus) → PTFL (posterior to lateral malleolus) → base of 5th metatarsal (peroneus brevis avulsion) → peroneal tendons → anterior talofibular joint → medial malleolus → deltoid ligament → navicular → sustentaculum tali → Achilles tendon (along its length and at insertion) → posterior heel. Midshaft fibula tenderness = Maisonneuve fracture (apply Ottawa rules then squeeze test).',
      },
      {
        id: 'an-pal-q2',
        type: 'examiner',
        text: 'What are the Ottawa ankle and foot rules and how do they guide management?',
      },
      {
        id: 'an-pal-p2',
        type: 'pathology',
        text: 'Ottawa rules indicate the need for X-ray in ankle injury. Ankle series: bony tenderness at the posterior edge or tip of the lateral malleolus OR medial malleolus, OR inability to weight-bear (4 steps) at time of injury or in ED. Foot series: bony tenderness over the base of the 5th metatarsal OR navicular, OR inability to weight-bear. Sensitivity ~96–99% for fracture. If negative Ottawa, X-ray can be safely omitted. If a Maisonneuve fracture is suspected (medial ankle pain + proximal fibula tenderness), X-ray the full fibula.',
      },
    ],
  },
  {
    id: 'ankle-movement',
    stepNumber: 3,
    title: 'Movement',
    subtitle: 'Dorsiflexion, plantarflexion, inversion, eversion, subtalar',
    questions: [
      {
        id: 'an-mov-q1',
        type: 'examiner',
        text: 'What are the normal ranges of ankle movement and what restricts dorsiflexion?',
      },
      {
        id: 'an-mov-r1',
        type: 'rationale',
        text: 'Dorsiflexion: 0–20° (talocrural joint, predominantly). Plantarflexion: 0–50°. Inversion: 0–35°. Eversion: 0–15°. Subtalar inversion/eversion assessed separately — flatten the subtalar joint by placing it in neutral (calcaneum vertical). Restricted dorsiflexion: Achilles tendon tightness (equinus deformity), anterior ankle OA (osteophyte impingement), or posterior ankle impingement. Silfverskiöld test: restricted dorsiflexion with knee extended but not flexed = gastrocnemius tightness alone (soleus contribution unaffected).',
      },
    ],
  },
  {
    id: 'ankle-ligament-tests',
    stepNumber: 4,
    title: 'Ligament stability tests',
    subtitle: 'Anterior drawer (ATFL), talar tilt (CFL), squeeze test (syndesmosis)',
    questions: [
      {
        id: 'an-lig-q1',
        type: 'examiner',
        text: 'Describe the anterior drawer test of the ankle and what it assesses.',
      },
      {
        id: 'an-lig-r1',
        type: 'rationale',
        text: 'Anterior drawer: stabilise the distal tibia with one hand, grasp the heel and draw the foot anteriorly in slight plantarflexion (puts ATFL under tension). Positive: >5 mm anterior talar translation or a "clunk" compared to the contralateral side. Assesses the anterior talofibular ligament (ATFL) — the most commonly injured ankle ligament (injured in inversion plantarflexion). Grade I: sprain (intact). Grade II: partial tear. Grade III: complete rupture (positive drawer + talar tilt).',
      },
      {
        id: 'an-lig-q2',
        type: 'examiner',
        text: 'What is the squeeze test and what injury does a positive result indicate?',
      },
      {
        id: 'an-lig-p2',
        type: 'pathology',
        text: 'Squeeze test: compress the fibula and tibia together at the mid-calf. Positive: pain at the ankle syndesmosis (distal tibiofibular joint) = syndesmotic ("high ankle") sprain. The ankle syndesmosis is stabilised by the anterior inferior tibiofibular ligament (AITFL), posterior inferior tibiofibular ligament, and interosseous membrane. Syndesmotic sprains are less common than lateral sprains but far more debilitating (longer recovery 6–12 weeks vs. 4–6 weeks). Diastasis (widening >5 mm) on the mortise X-ray view requires operative fixation (syndesmotic screw or tight-rope).',
      },
    ],
  },
  {
    id: 'ankle-achilles',
    stepNumber: 5,
    title: 'Achilles tendon assessment',
    subtitle: 'Thompson\'s test, tendinopathy, insertion check',
    questions: [
      {
        id: 'an-ach-q1',
        type: 'examiner',
        text: 'Describe Thompson\'s test and what it diagnoses.',
      },
      {
        id: 'an-ach-r1',
        type: 'rationale',
        text: 'Thompson\'s (Simmonds\') test: patient prone, knee flexed to 90°. Squeeze the calf muscle bulk (gastrocnemius-soleus complex). Normal: foot plantarflexes. Positive (no plantarflexion) = complete Achilles tendon rupture. Look also for a palpable gap in the tendon (often 2–6 cm above the insertion where the blood supply is poorest) and the patient being unable to single heel-rise. This test is highly sensitive and specific (>95%). Acute rupture: typically felt as a "kick" or "snapping" sensation at the back of the ankle during explosive activity.',
      },
      {
        id: 'an-ach-q2',
        type: 'examiner',
        text: 'What is the difference between insertional and non-insertional Achilles tendinopathy, and how does management differ?',
      },
      {
        id: 'an-ach-p2',
        type: 'pathology',
        text: 'Non-insertional Achilles tendinopathy (2–6 cm above the insertion — the "watershed zone" with poor vascularity): most common in runners aged 30–50; tenderness and swelling in the tendon mid-substance; treat with eccentric loading exercises (Alfredson protocol), heel raise, shockwave therapy. Insertional tendinopathy (at the calcaneal insertion, often with a Haglund deformity — prominent posterosuperior calcaneal prominence): eccentric exercises can worsen this type; treat with heel raise, reduced stretching, and surgical decompression if severe.',
      },
    ],
  },
  {
    id: 'ankle-neurovascular',
    stepNumber: 6,
    title: 'Neurovascular assessment',
    subtitle: 'Pulses, sensation, tarsal tunnel',
    questions: [
      {
        id: 'an-nv-q1',
        type: 'examiner',
        text: 'Which pulses do you palpate at the ankle and foot, and what do you assess neurologically?',
      },
      {
        id: 'an-nv-r1',
        type: 'rationale',
        text: 'Palpate the dorsalis pedis (between extensor hallucis longus and extensor digitorum longus tendons on the dorsum) and posterior tibial (posterior to the medial malleolus). Capillary refill (<2 seconds). Neurological: sensation in the dorsal web space (deep peroneal nerve — first dorsal web space), lateral foot (sural nerve), medial sole (medial plantar nerve). Tinel\'s over the tarsal tunnel (posterior to the medial malleolus) for tarsal tunnel syndrome — analogous to carpal tunnel in the foot (tibial nerve compression).',
      },
    ],
  },
  {
    id: 'ankle-completion',
    stepNumber: 7,
    title: 'Completion',
    subtitle: 'Further examination and investigations',
    questions: [
      {
        id: 'an-com-q1',
        type: 'examiner',
        text: 'What would you say to complete your ankle and foot examination?',
      },
      {
        id: 'an-com-r1',
        type: 'rationale',
        text: '"I would examine the knee and hip, as proximal malalignment (e.g. hip weakness causing foot hyperpronation, or tibial torsion) frequently contributes to foot and ankle symptoms. I would examine footwear for uneven wear patterns. I would assess gait at different speeds and on single-heel-rise. I would examine the contralateral ankle for comparison. In a diabetic patient, I would assess for peripheral neuropathy with a 10g monofilament and vibratory sensation."',
      },
      {
        id: 'an-com-q2',
        type: 'examiner',
        text: 'What investigations would you request and what are the indications for surgical management of an Achilles tendon rupture?',
      },
      {
        id: 'an-com-p2',
        type: 'pathology',
        text: 'X-ray: fracture, Haglund deformity, calcification (calcific tendinopathy), OA. USS: Achilles rupture extent, partial vs. complete, tendinopathy thickness; also for peroneal tendon tears and plantar fascia thickness (>4 mm = plantar fasciitis). MRI: complex tears, osteochondral lesions of the talus (common with recurrent ankle sprains), tarsal coalition, ligament assessment. Achilles rupture management debate: functional rehabilitation in a boot (non-surgical) has equivalent re-rupture rates to open repair (~3–5%) in most patients; surgical repair preferred in young athletes due to faster return to sport and lower re-rupture risk in high-demand patients.',
      },
    ],
  },
];
