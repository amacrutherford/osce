import type { ExamStep } from './steps';

export const paedAbdominalSteps: ExamStep[] = [
  {
    id: 'pa-general',
    stepNumber: 1,
    title: 'General Inspection',
    subtitle: 'Distress, pallor, jaundice, and nutritional status',
    description: 'Assess the child from a distance before approaching, noting overall wellbeing, colour, nutritional state, and any obvious abdominal abnormality.',
    checklist: [
      'Observe the child\'s level of distress: restless and writhing (pain from any cause) vs still (peritonism — movement worsens pain)',
      'Note pallor (anaemia — leukaemia, coeliac, IBD), jaundice (hepatic or haemolytic causes), skin rashes (HSP — purpuric rash on lower limbs and buttocks)',
      'Assess nutritional status: failure to thrive suggests malabsorption (coeliac, CF), IBD, or chronic disease',
      'Note abdominal distension: generalised (ascites, gaseous, obesity) vs localised (organomegaly, mass)',
      'Look for visible peristalsis in epigastrium (pyloric stenosis in 2–8-week infant)',
    ],
    questions: [
      {
        id: 'pa-gen-q1',
        type: 'examiner',
        text: 'A 6-year-old has a purpuric rash on the buttocks and lower limbs with colicky abdominal pain and haematuria. What is the diagnosis?',
      },
      {
        id: 'pa-gen-p1',
        type: 'pathology',
        text: '',
        bullets: [
          'IgA vasculitis (Henoch-Schönlein Purpura, HSP): IgA immune complex deposition in small vessel walls — palpable purpuric rash (lower limbs/buttocks) + colicky abdominal pain + arthralgia + haematuria/proteinuria (IgA nephropathy)',
          'Commonest systemic vasculitis in children; peak age 4–6 years; often follows a URTI',
          'GI complications: intussusception (HSP can act as a lead point), GI bleeding, bowel wall oedema',
          'Renal involvement in ~40%: check urine dipstick and BP; most recover fully; <5% develop persistent renal disease',
          'Management: mostly supportive; ibuprofen for arthralgia; steroids for severe abdominal pain or renal involvement; refer nephrology if proteinuria persists',
        ],
        source: 'OHCM 10th ed., Ch. 12',
      },
    ],
  },
  {
    id: 'pa-hands-face',
    stepNumber: 2,
    title: 'Hands, Face, and Mouth',
    subtitle: 'Peripheral stigmata and oral cavity inspection',
    description: 'Examine the hands, face, and mouth for peripheral stigmata of abdominal and systemic disease, including signs of malnutrition, anaemia, and IBD.',
    checklist: [
      'Inspect hands: koilonychia (iron deficiency — coeliac, IBD), clubbing (IBD, CF, cirrhosis), palmar erythema and Dupuytren\'s (uncommon in children; liver disease)',
      'Inspect face: jaundice (scleral icterus), pallor (conjunctival pallor — anaemia), spider naevi (>5 = significant liver disease)',
      'Inspect the mouth: angular stomatitis and glossitis (iron/B12 deficiency), aphthous ulcers (Crohn\'s disease — can be large, deep, "snail tract" ulcers), dental erosion (GORD)',
      'Palpate cervical and axillary lymph nodes: generalised lymphadenopathy suggests EBV, lymphoma, or leukaemia',
    ],
    questions: [
      {
        id: 'pa-hands-q1',
        type: 'examiner',
        text: 'What are the extra-intestinal manifestations of Crohn\'s disease?',
      },
      {
        id: 'pa-hands-p1',
        type: 'pathology',
        text: '',
        bullets: [
          'Mouth: aphthous ulcers, angular stomatitis (folic acid deficiency)',
          'Skin: erythema nodosum (tender red nodules, anterior shins — active disease), pyoderma gangrenosum (deep ulcerating skin lesion — does not necessarily track with disease activity)',
          'Eyes: episcleritis (tracks with disease activity), uveitis (does not track)',
          'Joints: enteropathic arthropathy (large joint arthritis, tracks with gut activity); ankylosing spondylitis (HLA-B27, does NOT track)',
          'Hepatobiliary: primary sclerosing cholangitis (PSC — more strongly associated with UC but occurs in Crohn\'s); fatty liver; cholelithiasis',
        ],
        source: 'OHCM 10th ed., Ch. 5',
      },
    ],
  },
  {
    id: 'pa-inspection',
    stepNumber: 3,
    title: 'Abdominal Inspection',
    subtitle: 'Distension, visible peristalsis, surgical scars, and herniae',
    description: 'Inspect the abdomen with the child lying flat and comfortable, identifying distension, scars, and visible peristalsis before touching the abdomen.',
    checklist: [
      'With child lying supine, inspect all four quadrants for asymmetry or visible masses',
      'Look for visible peristalsis: rhythmic caterpillar-like movement in the epigastrium (pyloric stenosis in 2–8-week infants) — use side lighting',
      'Identify surgical scars: right upper quadrant (RUQ) — Kasai portoenterostomy (biliary atresia); right iliac fossa (RIF) — appendicectomy; midline or paramedian — bowel surgery; groin — orchidopexy, inguinal hernia repair',
      'Inspect the umbilicus for herniation (common in infants, especially in African-Caribbean; most resolve by age 5)',
      'Inspect the inguinal regions for hernia bulge (ask child to cough if old enough)',
    ],
    questions: [
      {
        id: 'pa-insp-q1',
        type: 'examiner',
        text: 'What is biliary atresia and why must it be diagnosed before 8 weeks of age?',
      },
      {
        id: 'pa-insp-p1',
        type: 'pathology',
        text: '',
        bullets: [
          'Biliary atresia: obliteration or absence of the extrahepatic bile ducts — presents with prolonged conjugated jaundice in a neonate (>14 days in term; >21 days in preterm)',
          'Features: jaundice, pale/acholic stools, dark urine, hepatomegaly; conjugated (direct) bilirubin >20% of total = pathological',
          'Diagnosis: USS liver (absent or small gallbladder), HIDA scan (no excretion into bowel), liver biopsy, intraoperative cholangiogram',
          'Treatment: Kasai portoenterostomy (hepatic portoenterostomy) — must be performed before 8 weeks for best outcome; bile flow established in ~80% if done early; 30–50% avoid transplantation long-term',
          'Scar: RUQ transverse scar from Kasai; eventual liver transplantation in the majority',
        ],
        source: 'OHCM 10th ed., Ch. 12',
      },
    ],
  },
  {
    id: 'pa-palpation',
    stepNumber: 4,
    title: 'Palpation',
    subtitle: 'Superficial and deep palpation, organomegaly, and masses',
    description: 'Palpate the abdomen systematically, watching the child\'s face throughout for pain, and assess for organ enlargement and abnormal masses.',
    checklist: [
      'Ask the child to point to where it hurts — start palpating in the opposite quadrant',
      'Use warm hands; kneel to the child\'s level; distract young children with a toy or conversation',
      'Palpate superficially in all regions, then more deeply; watch the child\'s face (not just the abdomen) for guarding or pain',
      'Palpate the liver: start in the RIF, move upward toward the costal margin; note size (cm below costal margin), edge, consistency, and tenderness',
      'Palpate the spleen: start in the RIF (cannot get above a spleen) — enlarged spleen moves diagonally toward the RIF, has a palpable notch, dull to percussion',
      'Palpate for kidneys bimanually: enlarged kidneys are ballottable in the flank (Wilms\' tumour, MCPKD, hydronephrosis)',
    ],
    questions: [
      {
        id: 'pa-palp-q1',
        type: 'examiner',
        text: 'A 3-year-old has a smooth firm mass in the right flank and haematuria. What is the most likely diagnosis and management?',
      },
      {
        id: 'pa-palp-p1',
        type: 'pathology',
        text: '',
        bullets: [
          'Wilms\' tumour (nephroblastoma): commonest intra-abdominal tumour of childhood; peak age 3–4 years; smooth firm flank mass, haematuria (50%), hypertension (25%)',
          'Associations: WAGR syndrome (Wilms\' + Aniridia + GU anomalies + intellectual disability — WT1 deletion), Beckwith-Wiedemann syndrome (macroglossia, hemihypertrophy), Denys-Drash',
          'Diagnosis: USS abdomen (first-line — intrarenal mass), CT abdomen/chest (staging, lung mets), biopsy avoided pre-operatively (risk of seeding)',
          'Treatment: nephrectomy (SIOP protocol: preoperative chemotherapy in Europe → shrinks tumour before surgery); overall 5-year survival >90%',
        ],
        source: 'OHCM 10th ed., Ch. 12',
      },
    ],
  },
  {
    id: 'pa-percussion',
    stepNumber: 5,
    title: 'Percussion and Auscultation',
    subtitle: 'Liver span, splenomegaly, ascites, and bowel sounds',
    description: 'Percuss to define organ borders and detect ascites, and auscultate for bowel sounds and vascular bruits.',
    checklist: [
      'Percuss the liver: upper border (starts as dull at the right 5th ICS MCL), lower border — calculate liver span (normal: up to 6 cm in neonates; up to 12 cm in adolescents)',
      'Percuss for splenomegaly: dull in the left flank on expiration (Traube\'s space — normally tympanic)',
      'Test for shifting dullness if ascites suspected: percuss from umbilicus to flank; if dull, ask patient to roll toward you — dullness shifts (fluid follows gravity)',
      'Auscultate for bowel sounds: normal (active), absent (ileus, peritonitis), hyperactive/tinkling (obstruction)',
      'Auscultate over the liver for a hepatic bruit (hepatocellular carcinoma, AVM)',
    ],
    questions: [
      {
        id: 'pa-perc-q1',
        type: 'examiner',
        text: 'What are the causes of splenomegaly in children?',
      },
      {
        id: 'pa-perc-p1',
        type: 'pathology',
        text: '',
        bullets: [
          'Infection: EBV (glandular fever — commonest cause of massive splenomegaly in UK children; risk of rupture; avoid contact sports for 4 weeks), malaria (tropical), visceral leishmaniasis',
          'Haematological: hereditary spherocytosis (haemolytic anaemia + jaundice + splenomegaly — autosomal dominant; treat with splenectomy in severe cases), thalassaemia, sickle cell disease (autosplenectomy in sickle cell by age 5)',
          'Lymphoma/leukaemia: ALL (commonest childhood cancer) — pallor, purpura, hepatosplenomegaly, lymphadenopathy; FBC + blood film + bone marrow',
          'Portal hypertension: pre-hepatic (portal vein thrombosis — commonest cause in children), hepatic (CF, metabolic liver disease, biliary atresia)',
        ],
        source: 'OHCM 10th ed., Ch. 12',
      },
    ],
  },
  {
    id: 'pa-herniae',
    stepNumber: 6,
    title: 'Herniae and Genitalia',
    subtitle: 'Hernial orifices, undescended testes, and umbilical herniae',
    description: 'Examine all hernial orifices and confirm the presence and position of both testes, as undescended testis requires orchidopexy by 18 months of age.',
    checklist: [
      'Examine inguinal regions: ask child to stand and cough if old enough; look for a bulge at the deep inguinal ring (indirect inguinal hernia — common in premature infants)',
      'Palpate both testes in the scrotum: confirm both testes are descended and of normal size',
      'If a testis is not in the scrotum: is it palpable (retractile, ectopic, or incompletely descended) or impalpable (intra-abdominal or absent)?',
      'Inspect the umbilicus: umbilical hernia common in infants (especially African-Caribbean); most close spontaneously by age 5; refer if persists or enlarges',
      'Inspect for femoral hernia bulge below the inguinal ligament (uncommon in children)',
    ],
    questions: [
      {
        id: 'pa-hern-q1',
        type: 'examiner',
        text: 'Why is undescended testis (cryptorchidism) treated by orchidopexy by 18 months?',
      },
      {
        id: 'pa-hern-r1',
        type: 'rationale',
        text: '',
        bullets: [
          'Orchidopexy by 18 months: maximises future fertility — undescended testis has higher temperature than scrotal testis, causing progressive germ cell damage from 6 months onwards',
          'After age 2: irreversible reduction in spermatogonia; after age 5: significant impairment of fertility; bilateral cryptorchidism carries the greatest fertility risk',
          'Malignancy risk: 4–10× increased risk of testicular germ cell tumour (even after orchidopexy); patient should be taught regular testicular self-examination from adolescence',
          'Incidence: ~1–2% of term male births; up to 30% of premature males; 70% descend spontaneously by 3 months; watchful waiting to 6 months, then refer for orchidopexy',
        ],
        source: 'OHCM 10th ed., Ch. 12',
      },
    ],
  },
  {
    id: 'pa-completion',
    stepNumber: 7,
    title: 'Completion',
    subtitle: 'Growth assessment, investigations, and key diagnoses',
    description: 'Complete the abdominal examination by assessing growth parameters and stating targeted investigations for the differential diagnoses.',
    checklist: [
      'Plot height, weight, and OFC on centile charts: crossing centiles downward = faltering growth (GI malabsorption, IBD, CF)',
      'Examine the perineum and perianal area if indicated (Crohn\'s perianal disease, constipation)',
      'State relevant investigations: FBC + film (anaemia, leukaemia), LFTs, anti-TTG IgA (coeliac — NICE NG20), faecal calprotectin (IBD), USS abdomen, upper GI contrast study',
      'For pyloric stenosis: US abdomen (muscle thickness >3 mm, channel length >15 mm); ABG (hypochloraemic hypokalaemic metabolic alkalosis)',
    ],
    questions: [
      {
        id: 'pa-comp-q1',
        type: 'examiner',
        text: 'How do you diagnose coeliac disease in a child and when can you avoid a biopsy?',
      },
      {
        id: 'pa-comp-p1',
        type: 'pathology',
        text: '',
        bullets: [
          'Coeliac disease: gluten-sensitive enteropathy causing villous atrophy, crypt hyperplasia, and intraepithelial lymphocytosis — serology + duodenal biopsy on a gluten-containing diet',
          'Serology: anti-TTG IgA (first-line) — check total IgA level simultaneously (IgA deficiency gives false-negative anti-TTG)',
          'ESPGHAN 2020 no-biopsy pathway: anti-TTG IgA >10× upper limit of normal + positive anti-endomysial IgA on a separate blood sample + HLA DQ2/DQ8 positive → diagnose without biopsy in symptomatic children',
          'Treatment: lifelong strict gluten-free diet — dietitian input + coeliac UK support; repeat anti-TTG to confirm dietary adherence',
        ],
        source: 'NICE NG20 (2015)',
      },
      {
        id: 'pa-comp-q2',
        type: 'examiner',
        text: 'Describe the presentation and management of intussusception.',
      },
      {
        id: 'pa-comp-p2',
        type: 'pathology',
        text: '',
        bullets: [
          'Intussusception: ileocolic telescoping (90%); peak age 6 months–2 years; classic triad: episodic colicky abdominal pain (draws knees up, screaming then well), vomiting, "redcurrant jelly" stools (late sign — mucosal ischaemia)',
          'Examination: sausage-shaped mass in the right upper quadrant (ileocaecal region), dance\'s sign (empty RIF)',
          'Diagnosis: USS abdomen (target sign — concentric rings; pseudo-kidney sign); plain AXR may show small bowel obstruction',
          'Treatment: air enema reduction (fluoroscopic or USS-guided): success ~80% if no peritonitis; contraindicated if peritonitis or perforation — surgical reduction (or resection if necrotic bowel)',
        ],
        source: 'OHCM 10th ed., Ch. 12',
      },
    ],
  },
];

// EXAM_ENTRY_DATA
// {"id":"paed-abdominal","title":"Paediatric Abdominal Examination","description":"Systematic paediatric abdominal examination covering inspection (visible peristalsis, surgical scars, HSP rash), palpation (liver, spleen, kidney masses), percussion, bowel sounds, hernial orifices, and testicular examination — with key paediatric abdominal emergencies.","specialtyId":"paediatrics","highYieldSummary":["Visible epigastric peristalsis in a 2–8-week infant = pyloric stenosis until proven otherwise — confirm with USS (pyloric muscle >3 mm thick); correct metabolic alkalosis before surgery (Ramstedt's pyloromyotomy).","Intussusception: 6 months–2 years, colicky pain + drawing up knees + redcurrant jelly stools (late). USS = target sign. Treat with air enema reduction (80% success); surgery if peritonitis.","Wilms\' tumour: smooth firm flank mass + haematuria in a 3–4-year-old. Associations: WAGR, Beckwith-Wiedemann. Prognosis excellent (>90% survival). SIOP: pre-op chemo then nephrectomy.","Undescended testis: orchidopexy by 18 months to preserve fertility (germ cell damage from 6 months) and allow tumour surveillance. 4–10× increased testicular cancer risk even after orchidopexy.","ALL (commonest childhood cancer): pallor + purpura + hepatosplenomegaly + lymphadenopathy. FBC: anaemia + thrombocytopenia + lymphoblasts. Bone marrow biopsy for diagnosis.","Coeliac disease (ESPGHAN 2020 no-biopsy pathway): anti-TTG IgA >10× ULN + positive anti-EMA + HLA DQ2/DQ8 = diagnose without biopsy in symptomatic children."]}
