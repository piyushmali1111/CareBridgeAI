import { SampleNote, CareBridgeResult } from '../types';

export const cardiacBackupResultEn: CareBridgeResult = {
  patientGreeting: "Welcome home, Robert! You are recovering well from your hospital stay. Here is your personalized, easy-to-read care guide.",
  simplifiedOverview: "You were in the hospital because your heart pump had weakened and a blocked artery needed a small stent tube to restore healthy blood flow. At home, your primary routine is taking your heart medicines on time, weighing yourself every morning, and eating low-salt meals.",
  targetLanguage: 'en',
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
      warningSign: "Crushing, squeezing chest pain or heaviness radiating to your arm, neck, or jaw",
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
      }
    ],
    lifestyleGuidelines: {
      dietaryRules: [
        "Sodium restriction: Max 2,000 mg (about 1 teaspoon of table salt) daily across all meals.",
        "Fluid limit: Do not drink more than 2,000 mL (approx. 64 oz / 8 cups) of total liquid per day.",
        "Flavor foods using fresh herbs, lemon juice, garlic, and sodium-free spices instead of salt."
      ],
      activityAndRestrictions: [
        "No lifting items over 10 lbs (like a heavy laundry basket or gallon of milk) for 7 days.",
        "Do not drive for 48 hours after catheterization or while feeling drowsy or lightheaded."
      ],
      woundOrIncisionCare: [
        "Keep right femoral/radial puncture site clean and dry. Shower gently after 48 hours; do not soak in a tub or pool."
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
      }
    ]
  },
  medicalJargonGlossary: [
    {
      term: "Acute Decompensated Heart Failure",
      plainDefinition: "A sudden flare-up where the heart can't pump fluid out fast enough, causing water to pool in the body."
    },
    {
      term: "NSTEMI / Stent (PCI)",
      plainDefinition: "A heart blockage opened using a tiny wire and a metal mesh tube to restore good blood flow."
    },
    {
      term: "Diuretic (Water Pill)",
      plainDefinition: "A medicine like Lasix that prompts kidneys to get rid of extra salt and fluid in urine."
    }
  ]
};

export const cardiacBackupResultHi: CareBridgeResult = {
  ...cardiacBackupResultEn,
  targetLanguage: 'hi',
  patientGreeting: "घर वापसी पर स्वागत है, रॉबर्ट जी! आप अस्पताल से ठीक होकर घर आ चुके हैं। यहाँ आपकी आसान भाषा में देखभाल गाइड है।",
  simplifiedOverview: "आप अस्पताल में इसलिए भर्ती थे क्योंकि आपके दिल की पंपिंग कमजोर हो गई थी और खून की एक बंद नस में छोटा स्टेंट (छल्ला) लगाया गया था। घर पर आपकी मुख्य दिनचर्या समय पर दवाइयां लेना, रोज सुबह वजन नापना और कम नमक वाला खाना खाना है।",
  executiveSummary: {
    hospitalStayReason: "आपको अस्पताल में भर्ती किया गया था क्योंकि आपका दिल सही तरीके से खून पंप नहीं कर पा रहा था, जिससे आपके फेफड़ों और पैरों में अतिरिक्त पानी भर रहा था और दिल की एक नस में रुकावट थी।",
    conditionExplained: "हमारा दिल एक पानी के पंप जैसा है। जब यह कमजोर पड़ता है, तो शरीर में अतिरिक्त पानी जमा होने लगता है, जिससे सांस फूलती है। डॉक्टरों ने नस को खुला रखने के लिए एक छोटा स्टेंट लगाया और अतिरिक्त पानी निकालने की दवाइयाँ दीं।",
    recoveryOverview: "घर पर अगले 2 से 3 हफ्तों तक आपका मुख्य लक्ष्य समय पर सभी दवाएं लेना, रोजाना सुबह वजन जांचना, भरपूर आराम करना और कम नमक वाला भोजन करना है।",
    keyRules: [
      "Ticagrelor (Brilinta) या Aspirin कभी भी डॉक्टर से पूछे बिना बंद न करें—यह आपके नए स्टेंट में खून के थक्के बनने से रोकती हैं।",
      "हर सुबह नाश्ते से पहले वजन नापें। अगर 24 घंटे में 1-1.5 किलो वजन बढ़े, तो तुरंत डॉक्टर को कॉल करें।",
      "दिनभर में नमक की मात्रा बहुत कम रखें (अधिकतम 1 छोटा चम्मच) और पानी/तरल पदार्थ 2 लीटर तक सीमित रखें।",
      "अगले 7 दिनों तक कोई भी भारी सामान (4-5 किलो से ज्यादा) न उठाएं।"
    ]
  },
  emergencyRedFlags: [
    {
      warningSign: "छाती में तेज दबाव, दर्द या जकड़न जो गर्दन, जबड़े या बाएं हाथ की तरफ फैले",
      whyItMatters: "यह दिल की नस में दोबारा रुकावट का संकेत हो सकता है जिसके लिए तत्काल आपातकालीन इलाज चाहिए।",
      action: "तुरंत 911 / 108 एम्बुलेंस बुलाएं। खुद गाड़ी चलाकर न जाएं।",
      urgency: "CALL_911_NOW"
    },
    {
      warningSign: "अचानक बहुत तेज सांस फूलना, लेटने पर सांस न आना या गुलाबी झागदार खांसी आना",
      whyItMatters: "यह फेफड़ों में तेजी से पानी भरने का संकेत है।",
      action: "सीधे बैठ जाएं और तुरंत आपातकालीन एम्बुलेंस बुलाएं।",
      urgency: "CALL_911_NOW"
    },
    {
      warningSign: "24 घंटे में 1-1.5 किलो (2-3 पाउंड) या एक हफ्ते में 2.5 किलो वजन बढ़ना",
      whyItMatters: "इसका मतलब है कि शरीर में पानी जमा हो रहा है।",
      action: "आज ही अपने हृदय रोग विशेषज्ञ (कार्डियोलॉजिस्ट) के क्लिनिक में फोन करें।",
      urgency: "CALL_DOCTOR_URGENT"
    }
  ]
};

export const cardiacBackupResultMr: CareBridgeResult = {
  ...cardiacBackupResultEn,
  targetLanguage: 'mr',
  patientGreeting: "घरी परत आल्याबद्दल स्वागत, रॉबर्ट जी! आपण बरे होत आहात. येथे आपल्यासाठी सोप्या भाषेतील काळजी मार्गदर्शक आहे.",
  simplifiedOverview: "तुमच्या हृदयाची पंप करण्याची क्षमता कमी झाली होती आणि रक्ताच्या एका बंद नसमध्ये लहान स्टेंट (छल्ला) बसवण्यात आला होता. घरी तुमची मुख्य दिनचर्या वेळेवर औषधे घेणे, रोज सकाळी वजन तपासणे आणि कमी मिठाचे जेवण घेणे ही आहे.",
  executiveSummary: {
    hospitalStayReason: "तुमचे हृदय योग्य प्रकारे रक्त पंप करू शकत नसल्यामुळे फुफ्फुसात आणि पायात पाणी साचले होते व हृदयाच्या नसमध्ये अडथळा निर्माण झाला होता, म्हणून तुम्हाला दाखल केले होते.",
    conditionExplained: "आपले हृदय एका पाण्याच्या पंपासारखे असते. ते कमजोर झाले की शरीरात पाणी साचून धाप लागते. डॉक्टरांनी नस मोकळी राहण्यासाठी स्टेंट बसवला आणि जास्तीचे पाणी बाहेर काढण्यासाठी औषधे दिली.",
    recoveryOverview: "पुढील २ ते ३ आठवडे सर्व औषधे वेळेवर घेणे, दररोज सकाळी वजन तपासणे, विश्रांती घेणे आणि कमी मिठाचे अन्न खाणे हे तुमचे मुख्य काम आहे.",
    keyRules: [
      "Ticagrelor (Brilinta) किंवा Aspirin डॉक्टरांना विचारल्याशिवाय कधीही बंद करू नका—हे स्टेंटमध्ये गुठळी होऊ नये म्हणून अत्यंत आवश्यक आहे.",
      "दररोज सकाळी उपाशीपोटी वजन करा. २४ तासांत १ ते १.५ किलो वजन वाढल्यास त्वरित डॉक्टरांशी संपर्क साधा.",
      "दिवसभरात मिठाचे प्रमाण अत्यंत कमी ठेवा आणि पाणी २ लिटरपर्यंत मर्यादित ठेवा.",
      "पुढील ७ दिवस कोणतेही जड सामान (४-५ किलोपेक्षा जास्त) उचलू नका."
    ]
  },
  emergencyRedFlags: [
    {
      warningSign: "छातीत असह्य वेदना, जडपणा किंवा जबड्याकडे व डाव्या हाताकडे पसरणाऱ्या कळा",
      whyItMatters: "हे हृदयाच्या रक्तवाहिनीत पुन्हा अडथळा आल्याचे लक्षण असू शकते.",
      action: "त्वरित रुग्णवाहिका (१०८ / ९११) बोलवा. स्वतः वाहन चालवून जाऊ नका.",
      urgency: "CALL_911_NOW"
    },
    {
      warningSign: "अचानक तीव्र धाप लागणे, झोपताना श्वास गुदमरणे",
      whyItMatters: "फुफ्फुसात पाणी साचल्याचे हे धोक्याचे लक्षण आहे.",
      action: "ताठ बसा आणि त्वरित वैद्यकीय मदत मिळवा.",
      urgency: "CALL_911_NOW"
    },
    {
      warningSign: "२४ तासांत १ ते १.५ किलो वजन अचानक वाढणे",
      whyItMatters: "शरीरात अनावश्यक पाणी साचत असल्याचे हे प्राथमिक लक्षण आहे.",
      action: "आजच तुमच्या डॉक्टरांच्या क्लिनिकला फोन करा.",
      urgency: "CALL_DOCTOR_URGENT"
    }
  ]
};

export const cardiacBackupResult = cardiacBackupResultEn;

// Realistic clinical note text
export const sampleCardiacText = `HOSPITAL DISCHARGE SUMMARY
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
Instructed on emergency symptoms. Call 911 for: Acute recurrent chest pressure, diaphoresis, dyspnea at rest, syncope, or signs of stroke. Call clinic immediately for: Weight gain >3 lbs in 24 hours or >5 lbs in 1 week, worsening orthopnea, swelling in lower extremities, or abnormal bleeding.`;

export const sampleNotes: SampleNote[] = [
  {
    id: "cardiac-chf",
    title: "Cardiac Discharge Note (CHF & Stent)",
    shortDesc: "68yo male s/p NSTEMI, acute decompensated heart failure & drug-eluting stent to LAD.",
    icon: "HeartPulse",
    badge: "Recommended Sample",
    precomputedResult: cardiacBackupResultEn,
    text: sampleCardiacText
  }
];
