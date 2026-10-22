import { SampleNote, CareBridgeResult } from '../types';

export const cardiacBackupResult: CareBridgeResult = {
  patientGreeting: "Welcome home, Robert! You are recovering well from your hospital stay. Here is your personalized, easy-to-read care guide.",
  executiveSummary: {
    hospitalStayReason: "You were admitted to the hospital because your heart was having trouble pumping blood efficiently, which caused extra fluid to back up into your lungs and legs, and one of your heart's blood vessels was narrowed.",
    conditionExplained: "Your heart is like a water pump. When it gets weakened or overworked, extra fluid pools in your body (congestion), making you feel short of breath and tired. Doctors placed a small hollow mesh tube (stent) to keep blood flowing smoothly through your heart vessel, and gave you medications to remove extra water.",
    recoveryOverview: "Over the next 2 to 3 weeks at home, your main goals are taking all your medications at the right time, weighing yourself every morning to catch fluid early, resting, and eating heart-healthy low-salt foods.",
    keyRules: [
      "NEVER stop taking Ticagrelor (Brilinta) or Aspirin without talking directly to your cardiologist—they keep your new heart stent open and clear.",
      "Step on the scale every morning before breakfast. If you gain 2-3 pounds in one day, call your doctor right away.",
      "Limit sodium (salt) to 2,000 mg per day and keep total fluids around 2 liters (about 8 cups) a day.",
      "Do not lift anything heavier than 10 pounds (like a heavy grocery bag) for the next 7 days while your groin/wrist puncture heals."
    ]
  },
  primaryDiagnoses: [
    {
      clinicalTerm: "Acute Decompensated Heart Failure (NYHA Class III)",
      plainEnglish: "Fluid buildup from a weakened heart pump",
      whatItMeans: "Your heart needs extra support to pump blood easily, and fluid can collect in your lungs or legs if you eat too much salt or skip your water pills."
    },
    {
      clinicalTerm: "NSTEMI (Non-ST-Elevation Myocardial Infarction) s/p PCI to LAD",
      plainEnglish: "Heart attack treated with a new artery stent",
      whatItMeans: "A blood vessel in your heart had a blockage. Doctors opened it up and placed a tiny metal mesh tube (stent) to keep blood flowing."
    },
    {
      clinicalTerm: "Essential Hypertension & Hyperlipidemia",
      plainEnglish: "High blood pressure and high cholesterol",
      whatItMeans: "These conditions put extra strain on blood vessels over time. Medications help keep your numbers in a safe zone."
    }
  ],
  medications: [
    {
      medicationName: "Ticagrelor (Brilinta) 90 mg PO",
      timingFrequency: "1 tablet twice daily (every 12 hours, e.g. 8:00 AM and 8:00 PM)",
      purpose: "Crucial blood thinner that prevents deadly blood clots from clogging your new heart stent.",
      specialInstructions: "CRITICAL: Do NOT stop or miss doses even for dental procedures without consulting your cardiologist.",
      category: "Blood Thinner",
      priority: "CRITICAL"
    },
    {
      medicationName: "Aspirin 81 mg PO",
      timingFrequency: "1 tablet once daily in the morning with food",
      purpose: "Gentle blood thinner working together with Ticagrelor to keep your heart stent open.",
      specialInstructions: "Take with food or milk to avoid an upset stomach.",
      category: "Blood Thinner",
      priority: "CRITICAL"
    },
    {
      medicationName: "Furosemide (Lasix) 40 mg PO",
      timingFrequency: "1 tablet every morning (take around 8:00 AM)",
      purpose: "Water pill (diuretic) that helps your kidneys flush out excess fluid and salt so you can breathe easily.",
      specialInstructions: "Take in the morning so you do not have to wake up during the night to urinate. Expect increased urination.",
      category: "Fluid/Water Pill",
      priority: "STANDARD"
    },
    {
      medicationName: "Carvedilol (Coreg) 6.25 mg PO",
      timingFrequency: "1 tablet twice daily with food (morning and dinner)",
      purpose: "Beta-blocker that slows your heart rate and helps your heart pump with less effort.",
      specialInstructions: "Always take with meals to reduce dizziness. Stand up slowly from sitting or lying down.",
      category: "Heart & Blood Pressure",
      priority: "STANDARD"
    },
    {
      medicationName: "Lisinopril 5 mg PO",
      timingFrequency: "1 tablet once daily in the evening",
      purpose: "ACE inhibitor that relaxes blood vessels and protects your heart muscle over time.",
      specialInstructions: "Tell your doctor if you develop a persistent dry cough or dizziness.",
      category: "Heart & Blood Pressure",
      priority: "STANDARD"
    },
    {
      medicationName: "Atorvastatin (Lipitor) 80 mg PO",
      timingFrequency: "1 tablet once daily at bedtime",
      purpose: "Statin medicine that lowers bad cholesterol and stabilizes plaque in your heart arteries.",
      specialInstructions: "Avoid drinking grapefruit juice. Report any unusual unexplained muscle aches.",
      category: "Cholesterol",
      priority: "STANDARD"
    },
    {
      medicationName: "Potassium Chloride (K-Dur) 20 mEq PO",
      timingFrequency: "1 tablet once daily in the morning with breakfast",
      purpose: "Replaces potassium lost in your urine from your water pill (Lasix).",
      specialInstructions: "Swallow whole with a full glass of water. Do not crush or chew.",
      category: "Mineral Supplement",
      priority: "STANDARD"
    }
  ],
  emergencyRedFlags: [
    {
      warningSign: "Crushing, squeezing chest pain or heaviness that radiates to your arm, neck, or jaw",
      whyItMatters: "Could indicate a sudden blockage or stent complication requiring immediate emergency treatment.",
      action: "Call 911 immediately. Chew one 325 mg aspirin if told to do so by 911 dispatch. Do NOT drive yourself.",
      urgency: "CALL_911_NOW"
    },
    {
      warningSign: "Sudden severe shortness of breath, waking up gasping for air, or coughing pink frothy phlegm",
      whyItMatters: "Indicates rapid fluid flooding back into your lungs (pulmonary edema).",
      action: "Sit upright, call 911 right away, and do not lie flat.",
      urgency: "CALL_911_NOW"
    },
    {
      warningSign: "Sudden weakness, facial drooping, confusion, or difficulty speaking",
      whyItMatters: "Warning sign of stroke.",
      action: "Call 911 immediately.",
      urgency: "CALL_911_NOW"
    },
    {
      warningSign: "Rapid weight gain: 2 to 3 pounds in 24 hours or 5 pounds in a single week",
      whyItMatters: "Means your body is retaining water before you even notice swelling or breathing trouble.",
      action: "Call your cardiology care team hotline today. Your water pill dose may need a safe adjustment.",
      urgency: "CALL_DOCTOR_URGENT"
    },
    {
      warningSign: "Increasing swelling in both ankles, feet, or belly, or needing extra pillows to sleep",
      whyItMatters: "Early sign of heart fluid buildup.",
      action: "Call your clinic within 24 hours.",
      urgency: "CALL_DOCTOR_URGENT"
    },
    {
      warningSign: "Unusual bleeding, dark black tarry stools, or large spontaneous bruises",
      whyItMatters: "Can occur when taking dual blood thinners.",
      action: "Contact your doctor immediately or visit urgent care.",
      urgency: "CALL_DOCTOR_URGENT"
    }
  ],
  dailyCareAndFollowUp: {
    appointments: [
      {
        doctorOrClinic: "Dr. Elena Vance, Cardiology Clinic",
        timeframeOrDate: "In 7 to 10 days (Clinic phone: 555-0144)",
        purpose: "Check your heart rhythm, listen to your lungs, review blood pressure, and inspect stent recovery.",
        questionsToAsk: [
          "Are my blood tests (kidney and potassium) in safe ranges?",
          "When is it safe for me to start cardiac rehab exercise classes?",
          "Can we verify all my current medication doses together?"
        ]
      },
      {
        doctorOrClinic: "Primary Care Physician (PCP)",
        timeframeOrDate: "In 2 to 3 weeks",
        purpose: "Review overall recovery, routine lab work, and coordinate long-term health maintenance.",
        questionsToAsk: [
          "Should I get my annual flu or pneumonia vaccine now?",
          "Are my blood pressure readings at home looking target-perfect?"
        ]
      },
      {
        doctorOrClinic: "Outpatient Cardiac Rehabilitation Program",
        timeframeOrDate: "Intake evaluation in 3 to 4 weeks",
        purpose: "Supervised exercise and education to strengthen your heart safely.",
        questionsToAsk: [
          "What days and times are best for my schedule?",
          "What type of comfortable shoes should I bring?"
        ]
      }
    ],
    dailyChecklist: [
      {
        task: "Step on the scale right after waking up and using the bathroom, before eating",
        timing: "Morning",
        tip: "Wear similar light clothing each day and write the number in your CareBridge weight log."
      },
      {
        task: "Take morning medications: Furosemide (Lasix), Aspirin, Ticagrelor, and Potassium with breakfast",
        timing: "Morning",
        tip: "Keep pills organized in a 7-day pillbox to prevent double dosing or missed doses."
      },
      {
        task: "Take your morning blood pressure and heart rate sitting quietly for 5 minutes",
        timing: "Morning",
        tip: "Keep your arm supported at heart level while testing."
      },
      {
        task: "Take a light 10-15 minute walk on flat ground if feeling steady",
        timing: "Afternoon",
        tip: "Stop and rest if you feel dizzy, winded, or tired. Walking gently speeds recovery."
      },
      {
        task: "Take evening medications: Ticagrelor, Carvedilol (with dinner), and Atorvastatin (at bedtime)",
        timing: "Evening",
        tip: "Set an alarm on your phone so you never forget your evening heart medicines."
      },
      {
        task: "Check your ankles and shins for fluid indentations (swelling)",
        timing: "Evening",
        tip: "Gently press your thumb against your shinbone for 5 seconds. If a dent stays, note it down."
      }
    ],
    lifestyleGuidelines: {
      dietaryRules: [
        "Sodium restriction: Max 2,000 mg (about 1 teaspoon of table salt) daily across all meals.",
        "Check nutrition labels on canned soups, deli meats, and frozen dinners—aim for <140mg per serving.",
        "Fluid limit: Do not drink more than 2,000 mL (approx. 64 oz / 8 cups) of total liquid per day.",
        "Flavor foods using fresh herbs, lemon juice, garlic, and sodium-free spices instead of salt."
      ],
      activityAndRestrictions: [
        "No lifting items over 10 lbs (like a heavy laundry basket or gallon of milk) for 7 days.",
        "Avoid strenuous push-up exercises or vigorous yard work until cleared by Dr. Vance.",
        "Do not drive for 48 hours after catheterization or while feeling drowsy or lightheaded."
      ],
      woundOrIncisionCare: [
        "Keep right femoral/radial puncture site clean and dry. Shower gently after 48 hours; do not soak in a tub or pool.",
        "Inspect site daily for expanding redness, warmth, swelling, or drainage. A small dime-sized bruise is normal."
      ]
    },
    vitalSignAlerts: [
      {
        vitalMetric: "Daily Morning Weight",
        alertThreshold: "Gain of 2 to 3 lbs in 24 hours OR 5 lbs in 1 week",
        actionRequired: "Call cardiology clinic right away; indicates fluid retention."
      },
      {
        vitalMetric: "Systolic Blood Pressure (Top Number)",
        alertThreshold: "Below 90 mmHg (with dizziness) OR above 160 mmHg",
        actionRequired: "Sit down, rest for 10 minutes, recheck. If still out of range, call clinic."
      },
      {
        vitalMetric: "Resting Heart Rate",
        alertThreshold: "Below 50 bpm (feeling dizzy) OR consistently above 100 bpm at rest",
        actionRequired: "Rest and notify your doctor."
      }
    ]
  },
  medicalJargonGlossary: [
    {
      term: "Acute Decompensated Heart Failure",
      plainDefinition: "A sudden flare-up where the heart can't pump fluid out fast enough, causing water to pool in the body."
    },
    {
      term: "NSTEMI / Myocardial Infarction",
      plainDefinition: "A heart attack caused by a partial or temporary blockage of blood flow to part of the heart muscle."
    },
    {
      term: "PCI (Percutaneous Coronary Intervention)",
      plainDefinition: "A minimally invasive procedure where doctors guide a tiny wire into the heart to open a blocked vessel."
    },
    {
      term: "Drug-Eluting Stent (DES)",
      plainDefinition: "A small metal mesh tube coated with medication that stays inside your artery to keep it wide open."
    },
    {
      term: "Diuretic (Water Pill)",
      plainDefinition: "A medicine like Lasix that prompts your kidneys to get rid of extra salt and water through urine."
    },
    {
      term: "Dyspnea & Orthopnea",
      plainDefinition: "Medical words for shortness of breath, especially when lying flat in bed."
    },
    {
      term: "Bilateral Pitting Edema",
      plainDefinition: "Swelling in both feet or ankles that leaves a temporary small dent when pressed."
    },
    {
      term: "PO, BID, QAM, QHS",
      plainDefinition: "Doctor shorthand: PO = by mouth, BID = twice a day, QAM = every morning, QHS = every night at bedtime."
    }
  ]
};

export const sampleNotes: SampleNote[] = [
  {
    id: "cardiac-chf",
    title: "Cardiac Discharge Note (CHF & Stent)",
    shortDesc: "68yo male s/p NSTEMI, acute decompensated heart failure & drug-eluting stent to LAD.",
    icon: "HeartPulse",
    badge: "Recommended Sample",
    precomputedResult: cardiacBackupResult,
    text: `HOSPITAL DISCHARGE SUMMARY
PATIENT NAME: Robert Jenkins | MRN: 9482014 | AGE: 68 | GENDER: M
ADMISSION DATE: 10/18/2026 | DISCHARGE DATE: 10/22/2026
ATTENDING PHYSICIAN: Dr. Elena Vance, MD (Cardiology)

DISCHARGE DIAGNOSES:
1. Acute decompensated heart failure (NYHA Class III, LVEF 35%)
2. Acute Non-ST-elevation myocardial infarction (NSTEMI) s/p coronary angiography and percutaneous coronary intervention (PCI) with 3.0 x 18 mm Promus Premier drug-eluting stent (DES) to proximal LAD.
3. Essential hypertension, stage 2
4. Hyperlipidemia
5. Bilateral 2+ lower extremity pitting edema, improved

HOSPITAL COURSE SUMMARY:
Patient presented via EMS with worsening exertional dyspnea, orthopnea (3 pillows), and substernal chest heaviness radiating to left shoulder. Troponin I peaked at 4.2 ng/mL. Transthoracic echocardiogram revealed LVEF 35% with anterior hypokinesis and moderate mitral regurgitation. Emergent coronary catheterization via right radial approach revealed 90% stenosis of proximal left anterior descending (LAD) coronary artery. Successful balloon angioplasty and DES deployment performed with TIMI 3 flow restored. Patient diuresed with IV Furosemide (Lasix) 80mg BID with 4.2 kg net fluid loss and resolution of bibasilar rales. Transitioned to oral regimen, ambulating without chest pain or dyspnea.

DISCHARGE MEDICATIONS:
1. Ticagrelor (Brilinta) 90 mg PO BID. (P2Y12 inhibitor / dual antiplatelet therapy. CRITICAL: Continue uninterrupted for minimum 12 months. Do NOT discontinue without direct consultation with Dr. Vance.)
2. Aspirin 81 mg PO daily with meals.
3. Furosemide (Lasix) 40 mg PO QAM. (Take in morning. Urination will increase. Monitor daily weight.)
4. Carvedilol (Coreg) 6.25 mg PO BID with food. (Titrate upward at next clinic visit if tolerated.)
5. Lisinopril 5 mg PO daily at bedtime.
6. Atorvastatin (Lipitor) 80 mg PO QHS.
7. Potassium Chloride (K-Dur) 20 mEq PO daily with morning meal.

ACTIVITY & DIETARY INSTRUCTIONS:
- 2.0 gram (2,000 mg) sodium restriction per day.
- Fluid restriction: Maximum 2,000 mL (2 liters / ~64 oz) daily from all liquid sources.
- Daily morning weights upon waking, post-void, before breakfast. Record in log.
- S/p radial artery puncture: No lifting >10 lbs with right arm for 7 days. Keep puncture dressing clean and dry.
- No driving for 48 hours. Light walking encouraged.

FOLLOW-UP CARE:
- Cardiology Clinic: Dr. Elena Vance in 7-10 days (Phone: 555-0144). Bring medication bottles and weight log.
- Primary Care: Dr. Marcus Sterling in 14-21 days for comprehensive metabolic panel and renal function review.
- Cardiac Rehabilitation: Referral submitted for phase II outpatient rehab in 3-4 weeks.

WARNING SIGNS / RED FLAGS:
Instructed on emergency symptoms. Call 911 for: Acute recurrent chest pressure, diaphoresis, dyspnea at rest, syncope, or signs of stroke. Call clinic immediately for: Weight gain >3 lbs in 24 hours or >5 lbs in 1 week, worsening orthopnea, swelling in lower extremities, or abnormal bleeding.`
  },
  {
    id: "ortho-knee",
    title: "Post-Operative Orthopedic Note (Knee Replacement)",
    shortDesc: "62yo female s/p right total knee arthroplasty (TKA), anticoagulation & rehab protocol.",
    icon: "Activity",
    badge: "Surgical Recovery",
    text: `POST-OPERATIVE SURGICAL DISCHARGE SUMMARY
PATIENT: Martha Chen | AGE: 62 | MRN: 481920
PROCEDURE: Right Total Knee Arthroplasty (TKA) with Stryker Triathlon prosthesis
SURGEON: Dr. Aaron Bradley, MD (Orthopedic Surgery)
DISCHARGE DATE: Post-Op Day 3

DIAGNOSIS:
End-stage right knee tricompartmental osteoarthritis, s/p uncomplicated robotic-assisted right total knee replacement.

OPERATIVE SUMMARY & INPATIENT STAY:
Patient underwent right TKA under spinal anesthesia with adductor canal block. Hemostasis achieved. Post-op radiographs demonstrate excellent prosthetic component alignment. Patient cleared by physical therapy with walker ambulation >150 feet and independent transfer skills. ROM right knee: 0 degrees extension, 95 degrees flexion. Incision closed with staples and Dermabond Prineo dressing intact without erythema or fluctuance.

DISCHARGE MEDICATIONS:
1. Enoxaparin (Lovenox) 30 mg subcutaneous injection daily every evening for 14 days total for DVT prophylaxis. (Do not skip; prevents blood clots in legs).
2. Oxycodone 5 mg PO Q4-6H PRN for breakthrough surgical pain (dispensed #20 tablets). Wean to Tylenol as tolerated.
3. Acetaminophen (Tylenol) 650 mg PO Q8H scheduled. Do not exceed 3,000 mg total acetaminophen in 24 hours from all sources.
4. Celecoxib (Celebrex) 200 mg PO daily with breakfast for 2 weeks (anti-inflammatory).
5. Docusate Sodium (Colace) 100 mg PO BID to prevent opioid-induced constipation.

WOUND & ACTIVITY PROTOCOL:
- Leave waterproof silver dressing intact until two-week clinic visit. Showering permitted; do not submerge in tub or hot tub.
- Ice surgical knee 20 minutes on, 20 minutes off, 4-5 times daily using cryotherapy cuff.
- Weight bearing as tolerated (WBAT) with front-wheeled walker. Transition to cane when cleared by home health PT.
- Perform ankle pumps 20 times every hour while awake.

FOLLOW-UP APPOINTMENTS:
- Dr. Bradley Ortho Clinic in 14 days for incision evaluation and staple removal.
- Home Health Physical Therapy starts within 48 hours (3x/week).

RED FLAGS / EMERGENCY WARNINGS:
- Sudden calf pain, tenderness, warmth, or swelling in right or left lower leg (suspected DVT).
- Shortness of breath, rapid heart rate, or chest pain (pulmonary embolism -> CALL 911).
- Fever >101.5°F, spreading redness >1 inch around surgical incision, or purulent drainage.`
  },
  {
    id: "pulmonary-copd",
    title: "Respiratory Note (Pneumonia & COPD)",
    shortDesc: "71yo male admitted with bacterial pneumonia and acute COPD exacerbation.",
    icon: "ShieldAlert",
    badge: "Respiratory Care",
    text: `INPATIENT DISCHARGE SUMMARY
PATIENT: Arthur Pendelton | AGE: 71 | MRN: 772910
ATTENDING: Dr. Sarah Lin, MD (Pulmonary & Critical Care)
DISCHARGE DATE: Day 5 of hospitalization

ADMISSION DIAGNOSIS:
1. Community-acquired pneumonia (right middle lobe consolidation, Streptococcus pneumoniae)
2. Acute exacerbation of chronic obstructive pulmonary disease (AECOPD)
3. Acute hypoxic respiratory failure, resolved (room air SpO2 94% at discharge)

HOSPITAL COURSE:
Patient admitted with purulent sputum, fever of 102.4°F, wheezing, and tachypnea. Treated with IV Ceftriaxone and Azithromycin, nebulized bronchodilators, and systemic IV Solu-Medrol. Blood cultures negative. Patient transitioned from high-flow nasal cannula down to room air with resting SpO2 94%, 92% on exertion. Afebrile for 48 hours.

DISCHARGE MEDICATIONS:
1. Levofloxacin (Levaquin) 500 mg PO daily for 5 more days to complete 10-day antibiotic course. Take with full glass of water. Complete entire course!
2. Prednisone oral taper: 40 mg daily for 2 days, then 20 mg daily for 2 days, then 10 mg daily for 2 days, then STOP. Take with food in the morning.
3. Fluticasone/Vilanterol (Breo Ellipta) 100/25 mcg 1 inhalation once daily every morning. Rinse mouth with water after use to prevent thrush.
4. Albuterol / Ipratropium (Combivent Respimat) 1 puff Q4-6H PRN for acute shortness of breath or wheezing.
5. Guaifenesin (Mucinex) 600 mg PO BID to loosen chest secretions.

HOME CARE & PRECAUTIONS:
- Incentive spirometer: 10 breaths every hour while awake to expand lung bases.
- Maintain adequate hydration (unless contraindicated): drink 6-8 glasses of water daily.
- Strict smoking cessation counseling completed.

FOLLOW-UP:
- Pulmonary Clinic in 2 weeks for follow-up chest X-ray and pulse oximetry check.
- Primary Care in 3 weeks.

RED FLAGS:
- Sudden return of high fever (>101°F) or shaking chills.
- Inability to catch breath despite rescue inhaler, blue or gray lips/fingertips, or confusion -> CALL 911 immediately.
- Coughing up bright red blood or thick foul-smelling dark green sputum.`
  }
];
