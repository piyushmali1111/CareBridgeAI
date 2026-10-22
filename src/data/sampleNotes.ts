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
      medicationName: "Atorvastatin (Lipitor) 80 mg PO",
      timingFrequency: "1 tablet once daily at bedtime",
      purpose: "Statin medicine that lowers bad cholesterol and stabilizes plaque in your heart arteries.",
      specialInstructions: "Avoid drinking grapefruit juice. Report any unusual unexplained muscle aches.",
      category: "Cholesterol",
      priority: "STANDARD"
    }
  ],
  emergencyRedFlags: [
    {
      warningSign: "Crushing, squeezing chest pain or heaviness radiating to your arm, neck, or jaw",
      whyItMatters: "Could indicate a sudden blockage or stent complication requiring immediate emergency treatment.",
      action: "Call Emergency Ambulance (108 / 112) immediately. Do NOT drive yourself.",
      urgency: "CALL_EMERGENCY_NOW"
    },
    {
      warningSign: "Sudden severe shortness of breath, waking up gasping for air, or coughing pink frothy phlegm",
      whyItMatters: "Indicates rapid fluid flooding back into your lungs (pulmonary edema).",
      action: "Sit upright, call emergency ambulance (108 / 112) right away.",
      urgency: "CALL_EMERGENCY_NOW"
    },
    {
      warningSign: "Rapid weight gain: 2 to 3 pounds in 24 hours or 5 pounds in a single week",
      whyItMatters: "Means your body is retaining water before you even notice swelling or breathing trouble.",
      action: "Call your cardiology clinic hotline today for medicine adjustments.",
      urgency: "CALL_DOCTOR_URGENT"
    }
  ],
  dailyCareAndFollowUp: {
    appointments: [
      {
        doctorOrClinic: "Cardiology Clinic (Dr. Elena Vance)",
        timeframeOrDate: "In 7 to 10 days",
        purpose: "Check heart rhythm, inspect stent recovery, and review blood tests.",
        questionsToAsk: [
          "Are my kidney and potassium lab tests normal?",
          "When is it safe to begin gentle walking exercises?"
        ]
      }
    ],
    dailyChecklist: [
      {
        task: "Step on the scale right after waking up and using the bathroom, before eating",
        timing: "Morning",
        tip: "Record the weight each morning in your care notebook."
      },
      {
        task: "Take morning medications (Lasix, Aspirin, Ticagrelor) with breakfast",
        timing: "Morning",
        tip: "Use a pillbox to prevent missed or double doses."
      },
      {
        task: "Take evening medications (Ticagrelor, Carvedilol, Lipitor)",
        timing: "Evening",
        tip: "Take Carvedilol with your evening dinner to prevent dizziness."
      }
    ],
    lifestyleGuidelines: {
      dietaryRules: [
        "Sodium restriction: Maximum 2,000 mg (about 1 teaspoon of table salt) daily.",
        "Fluid limit: Do not drink more than 2,000 mL (approx. 8 cups) daily."
      ],
      activityAndRestrictions: [
        "No lifting items heavier than 10 lbs for 7 days.",
        "Do not drive for 48 hours after catheterization."
      ],
      woundOrIncisionCare: [
        "Keep puncture site clean and dry. Shower gently after 48 hours."
      ]
    },
    vitalSignAlerts: [
      {
        vitalMetric: "Daily Morning Weight",
        alertThreshold: "Gain of 2 to 3 lbs in 24 hours OR 5 lbs in 1 week",
        actionRequired: "Call cardiology clinic right away; indicates fluid retention."
      }
    ]
  },
  medicalJargonGlossary: [
    {
      term: "Acute Decompensated Heart Failure",
      plainDefinition: "A sudden flare-up where the heart can't pump fluid out fast enough, causing water to pool in the body."
    },
    {
      term: "Stent (PCI)",
      plainDefinition: "A small metal mesh tube placed in a narrowed artery to keep blood flowing smoothly."
    }
  ]
};

// FULL HINDI TRANSLATION (EVERY COLUMN IN HINDI, BRAND NAMES IN ENGLISH SCRIPT)
export const cardiacBackupResultHi: CareBridgeResult = {
  patientGreeting: "घर वापसी पर हार्दिक स्वागत है, रॉबर्ट जी! आप अस्पताल से ठीक होकर आ चुके हैं। यहाँ आपकी हिंदी देखभाल मार्गदर्शिका है।",
  simplifiedOverview: "आप अस्पताल में इसलिए भर्ती थे क्योंकि आपका दिल कमजोर हो गया था और बंद नस में एक छोटा स्टेंट (छल्ला) लगाया गया था। घर पर आपकी मुख्य दिनचर्या समय पर दवाइयां लेना, रोज सुबह वजन नापना और कम नमक का खाना खाना है।",
  targetLanguage: 'hi',
  executiveSummary: {
    hospitalStayReason: "आपको अस्पताल में भर्ती किया गया था क्योंकि आपका दिल सही तरीके से खून पंप नहीं कर पा रहा था, जिससे फेफड़ों और पैरों में पानी भर रहा था और दिल की नस में रुकावट थी।",
    conditionExplained: "हमारा दिल एक पानी के पंप जैसा है। जब यह कमजोर पड़ता है, तो शरीर में अतिरिक्त पानी जमा होने लगता है और सांस फूलती है। डॉक्टरों ने नस में स्टेंट लगाकर खून का दौरा सामान्य किया और पानी निकालने की दवाइयाँ दीं।",
    recoveryOverview: "घर पर अगले 2 से 3 हफ्तों तक आपका मुख्य लक्ष्य समय पर सभी दवाएं लेना, रोज सुबह खाली पेट वजन जांचना, भरपूर आराम करना और कम नमक वाला भोजन करना है।",
    keyRules: [
      "Ticagrelor (Brilinta) या Aspirin कभी भी डॉक्टर से पूछे बिना बंद न करें—यह नए स्टेंट में खून के थक्के जमने से रोकती हैं।",
      "हर सुबह नाश्ते से पहले वजन नापें। अगर 24 घंटे में 1-1.5 किलो वजन बढ़े, तो तुरंत डॉक्टर को कॉल करें।",
      "दिनभर में नमक की मात्रा बहुत कम रखें (अधिकतम 1 छोटा चम्मच) और पानी/तरल पदार्थ 2 लीटर तक सीमित रखें।",
      "अगले 7 दिनों तक कोई भी भारी सामान (4-5 किलो से ज्यादा) न उठाएं।"
    ]
  },
  primaryDiagnoses: [
    {
      clinicalTerm: "Acute Decompensated Heart Failure",
      plainEnglish: "दिल की कमजोरी के कारण फेफड़ों और पैरों में पानी भरना",
      whatItMeans: "आपके दिल को काम करने में अतिरिक्त सहारा चाहिए, ज्यादा नमक खाने से शरीर में पानी भर सकता है।"
    },
    {
      clinicalTerm: "NSTEMI s/p LAD Stent (PCI)",
      plainEnglish: "हार्ट अटैक के बाद नस में नया स्टेंट (छल्ला) लगाया गया",
      whatItMeans: "दिल की एक मुख्य नस में 90% रुकावट थी, डॉक्टरों ने उसे खोलकर रक्त प्रवाह बहाल किया।"
    }
  ],
  medications: [
    {
      medicationName: "Ticagrelor (Brilinta) 90 mg PO",
      timingFrequency: "दिन में 2 बार 1 गोली (हर 12 घंटे पर, जैसे सुबह 8:00 और रात 8:00 बजे)",
      purpose: "अति-महत्वपूर्ण खून पतला करने वाली दवा, जो आपके नए दिल के स्टेंट में जानलेवा थक्का जमने से रोकती है।",
      specialInstructions: "अति-महत्वपूर्ण: दांत के इलाज के लिए भी डॉक्टर से पूछे बिना यह दवा एक दिन भी बंद न करें।",
      category: "रक्त पतला करने वाली दवा",
      priority: "CRITICAL"
    },
    {
      medicationName: "Aspirin 81 mg PO",
      timingFrequency: "रोजाना सुबह 1 गोली नाश्ते या खाने के साथ",
      purpose: "खून को पतला रखती है और स्टेंट को खुला रखने में Brilinta के साथ मिलकर काम करती है।",
      specialInstructions: "पेट में जलन से बचने के लिए हमेशा खाने या दूध के साथ लें।",
      category: "रक्त पतला करने वाली दवा",
      priority: "CRITICAL"
    },
    {
      medicationName: "Furosemide (Lasix) 40 mg PO",
      timingFrequency: "रोजाना सुबह 1 गोली (सुबह 8:00 बजे के आसपास लें)",
      purpose: "शरीर से अतिरिक्त पानी और नमक पेशाब के रास्ते बाहर निकालती है ताकि सांस आसानी से आए।",
      specialInstructions: "हमेशा सुबह लें ताकि रात में बार-बार पेशाब के लिए न उठना पड़े। रोज सुबह वजन जांचें।",
      category: "पानी निकालने वाली दवा (Water Pill)",
      priority: "STANDARD"
    },
    {
      medicationName: "Carvedilol (Coreg) 6.25 mg PO",
      timingFrequency: "दिन में 2 बार 1 गोली खाने के साथ (सुबह और रात के खाने पर)",
      purpose: "दिल की धड़कन को नियंत्रित रखती है और दिल की मांसपेशियों पर दबाव कम करती है।",
      specialInstructions: "चक्कर आने से बचने के लिए हमेशा खाने के साथ लें। लेटने या बैठने के बाद धीरे-धीरे खड़े हों।",
      category: "ब्लड प्रेशर और हृदय दवा",
      priority: "STANDARD"
    },
    {
      medicationName: "Atorvastatin (Lipitor) 80 mg PO",
      timingFrequency: "रोजाना रात को सोते समय 1 गोली",
      purpose: "खराब कोलेस्ट्रॉल कम करती है और दिल की धमनियों में जमाव को रोकती है।",
      specialInstructions: "अंगूर या चकोतरे (Grapefruit) का रस न पिएं। रात में सोने से पहले लें।",
      category: "कोलेस्ट्रॉल नियंत्रक",
      priority: "STANDARD"
    }
  ],
  emergencyRedFlags: [
    {
      warningSign: "छाती में तेज दबाव, भारीपन या दर्द जो जबड़े, गर्दन या बाएं हाथ की ओर फैले",
      whyItMatters: "यह दिल की नस में दोबारा रुकावट या आपातकालीन स्थिति का संकेत हो सकता है।",
      action: "तुरंत आपातकालीन एम्बुलेंस (108 / 112) को कॉल करें। खुद वाहन चलाकर अस्पताल न जाएं।",
      urgency: "CALL_EMERGENCY_NOW"
    },
    {
      warningSign: "अचानक बहुत तेज सांस फूलना, बिस्तर पर लेटते ही दम घुटना या खांसी आना",
      whyItMatters: "यह फेफड़ों में तेजी से पानी भरने का गंभीर संकेत है।",
      action: "तुरंत सीधे बैठ जाएं और आपातकालीन एम्बुलेंस (108 / 112) को कॉल करें।",
      urgency: "CALL_EMERGENCY_NOW"
    },
    {
      warningSign: "24 घंटे में 1 से 1.5 किलो (2-3 पाउंड) या हफ्ते में 2.5 किलो वजन अचानक बढ़ना",
      whyItMatters: "इसका मतलब है कि शरीर में पानी जमा हो रहा है।",
      action: "आज ही अपने हृदय रोग विशेषज्ञ (कार्डियोलॉजिस्ट) के क्लिनिक में फोन करें।",
      urgency: "CALL_DOCTOR_URGENT"
    }
  ],
  dailyCareAndFollowUp: {
    appointments: [
      {
        doctorOrClinic: "कार्डियोलॉजी क्लिनिक (डॉ. एलेना वेंस)",
        timeframeOrDate: "7 से 10 दिनों के अंदर",
        purpose: "दिल की धड़कन, ब्लड प्रेशर और नए स्टेंट की जांच के लिए।",
        questionsToAsk: [
          "क्या मेरी किडनी और पोटेशियम की खून जांच सामान्य है?",
          "मैं रोजाना टहलना कब से शुरू कर सकता हूँ?"
        ]
      }
    ],
    dailyChecklist: [
      {
        task: "सुबह उठकर शौच के बाद, बिना कुछ खाए सबसे पहले वजन नापें",
        timing: "सुबह",
        tip: "रोजाना एक जैसे हल्के कपड़े पहनकर वजन करें और डायरी में लिखें।"
      },
      {
        task: "सुबह की दवाइयाँ (Lasix, Aspirin, Brilinta) नाश्ते के साथ लें",
        timing: "सुबह",
        tip: "दवा बॉक्स का इस्तेमाल करें ताकि खुराक छूटे नहीं।"
      },
      {
        task: "रात की दवाइयाँ (Brilinta, Carvedilol, Atorvastatin) रात के भोजन के बाद लें",
        timing: "शाम / रात",
        tip: "समय पर लेने के लिए फोन में अलार्म लगाएं।"
      }
    ],
    lifestyleGuidelines: {
      dietaryRules: [
        "नमक की सीमा: दिनभर में 1 छोटा चम्मच (2,000 mg) से ज्यादा नमक न खाएं।",
        "तरल पदार्थ: पूरे दिन में पानी, चाय, सूप मिलाकर कुल 2 लीटर से ज्यादा न पिएं।"
      ],
      activityAndRestrictions: [
        "अगले 7 दिनों तक 4-5 किलो से ज्यादा भारी सामान न उठाएं।",
        "48 घंटे तक ड्राइविंग न करें।"
      ],
      woundOrIncisionCare: [
        "जांघ या कलाई के घाव को सूखा और साफ रखें। 48 घंटे बाद हल्के से नहाएं।"
      ]
    },
    vitalSignAlerts: [
      {
        vitalMetric: "रोजाना सुबह का वजन",
        alertThreshold: "24 घंटे में 1 से 1.5 किलो या हफ्ते में 2.5 किलो वजन बढ़ना",
        actionRequired: "तुरंत डॉक्टर के क्लिनिक में बताएं; यह शरीर में पानी रुकने का संकेत है।"
      }
    ]
  },
  medicalJargonGlossary: [
    {
      term: "हार्ट फेल्योर (Heart Failure)",
      plainDefinition: "इसका मतलब दिल बंद होना नहीं है, बल्कि दिल की पंपिंग कमजोर होना है जिससे पानी रुकने लगता है।"
    },
    {
      term: "स्टेंट (Stent)",
      plainDefinition: "एक छोटी धातु की जालीदार नली जो बंद नस को खुला रखने के लिए अंदर लगाई जाती है।"
    }
  ]
};

// FULL MARATHI TRANSLATION (EVERY COLUMN IN MARATHI, BRAND NAMES IN ENGLISH SCRIPT)
export const cardiacBackupResultMr: CareBridgeResult = {
  patientGreeting: "घरी परत आल्याबद्दल हार्दिक स्वागत, रॉबर्ट जी! आपण बरे होत आहात. येथे आपल्यासाठी मराठीत काळजी मार्गदर्शिका आहे.",
  simplifiedOverview: "तुमच्या हृदयाची पंप करण्याची क्षमता कमी झाली होती आणि एका बंद रक्तवाहिनीत लहान स्टेंट (छल्ला) बसवण्यात आला होता. घरी तुमची मुख्य दिनचर्या वेळेवर औषधे घेणे, रोज सकाळी वजन तपासणे आणि कमी मिठाचे जेवण घेणे ही आहे.",
  targetLanguage: 'mr',
  executiveSummary: {
    hospitalStayReason: "तुमचे हृदय योग्य प्रकारे रक्त पंप करू शकत नसल्यामुळे फुफ्फुसात आणि पायात पाणी साचले होते व हृदयाच्या रक्तवाहिनीत अडथळा निर्माण झाला होता, म्हणून तुम्हाला दाखल केले होते.",
    conditionExplained: "आपले हृदय एका पाण्याच्या पंपासारखे असते. ते कमजोर झाले की शरीरात पाणी साचून धाप लागते. डॉक्टरांनी रक्तवाहिनी मोकळी राहण्यासाठी स्टेंट बसवला आणि जास्तीचे पाणी बाहेर काढण्यासाठी औषधे दिली.",
    recoveryOverview: "पुढील २ ते ३ आठवडे सर्व औषधे वेळेवर घेणे, दररोज सकाळी उपाशीपोटी वजन तपासणे, विश्रांती घेणे आणि कमी मिठाचे अन्न खाणे हे तुमचे मुख्य काम आहे.",
    keyRules: [
      "Ticagrelor (Brilinta) किंवा Aspirin डॉक्टरांना विचारल्याशिवाय कधीही बंद करू नका—हे स्टेंटमध्ये रक्ताची गुठळी होऊ नये म्हणून अत्यंत आवश्यक आहे.",
      "दररोज सकाळी उपाशीपोटी वजन करा. २४ तासांत १ ते १.५ किलो वजन वाढल्यास त्वरित डॉक्टरांशी संपर्क साधा.",
      "दिवसभरात मिठाचे प्रमाण अत्यंत कमी ठेवा (१ लहान चमचा) आणि पाणी २ लिटरपर्यंत मर्यादित ठेवा.",
      "पुढील ७ दिवस कोणतेही जड सामान (४-५ किलोपेक्षा जास्त) उचलू नका."
    ]
  },
  primaryDiagnoses: [
    {
      clinicalTerm: "Acute Decompensated Heart Failure",
      plainEnglish: "हृदयाच्या कमकुवतपणामुळे शरीरात व फुफ्फुसात पाणी साचणे",
      whatItMeans: "तुमच्या हृदयाला रक्ताभिसरणासाठी अतिरिक्त आधाराची गरज आहे, जास्त मीठ खाल्ल्यास पाणी साचू शकते."
    },
    {
      clinicalTerm: "NSTEMI s/p LAD Stent (PCI)",
      plainEnglish: "हार्ट अटॅकनंतर रक्तवाहिनीत स्टेंट (छल्ला) बसवला गेला",
      whatItMeans: "हृदयाच्या मुख्य रक्तवाहिनीत ९०% अडथळा होता, डॉक्टरांनी तो उघडून रक्तप्रवाह सुरळीत केला."
    }
  ],
  medications: [
    {
      medicationName: "Ticagrelor (Brilinta) 90 mg PO",
      timingFrequency: "दिवसातून २ वेळा १ गोळी (दर १२ तासांनी, उदा. सकाळी ८:०० आणि रात्री ८:०० वाजता)",
      purpose: "रक्त पातळ ठेवणारे अत्यंत महत्त्वाचे औषध, जे नवीन स्टेंटमध्ये रक्ताची जीवघेणी गुठळी होण्यापासून रोखते.",
      specialInstructions: "अत्यंत महत्त्वाचे: दातांच्या उपचारासाठीही डॉक्टरांना विचारल्याशिवाय हे औषध एक दिवसही बंद करू नका.",
      category: "रक्त पातळ करणारे औषध",
      priority: "CRITICAL"
    },
    {
      medicationName: "Aspirin 81 mg PO",
      timingFrequency: "दररोज सकाळी १ गोळी नाश्त्यासोबत किंवा जेवणानंतर",
      purpose: "रक्त पातळ ठेवते आणि स्टेंट मोकळा ठेवण्यासाठी Brilinta सोबत काम करते.",
      specialInstructions: "पोटाची जळजळ टाळण्यासाठी नेहमी अन्नासोबत किंवा दुधासोबत घ्या.",
      category: "रक्त पातळ करणारे औषध",
      priority: "CRITICAL"
    },
    {
      medicationName: "Furosemide (Lasix) 40 mg PO",
      timingFrequency: "दररोज सकाळी १ गोळी (सकाळी ८:०० च्या सुमारास घ्या)",
      purpose: "शरीरातील जास्तीचे पाणी व मीठ लघवीवाटे बाहेर काढते, ज्यामुळे श्वास घेणे सोपे होते.",
      specialInstructions: "नेहमी सकाळी घ्या जेणेकरून रात्री लघवीसाठी वारंवार उठावे लागणार नाही. रोज सकाळी वजन तपासा.",
      category: "पाणी काढणारे औषध (Water Pill)",
      priority: "STANDARD"
    },
    {
      medicationName: "Carvedilol (Coreg) 6.25 mg PO",
      timingFrequency: "दिवसातून २ वेळा १ गोळी जेवणासोबत (सकाळी आणि रात्रीच्या जेवणात)",
      purpose: "हृदयाचे ठोके नियंत्रणात ठेवते आणि हृदयाच्या स्नायूंवरचा ताण कमी करते.",
      specialInstructions: "चक्कर येणे टाळण्यासाठी नेहमी जेवणासोबत घ्या. झोपेतून किंवा बसल्यावरून हळूच उठा.",
      category: "रक्तदाब आणि हृदय औषध",
      priority: "STANDARD"
    },
    {
      medicationName: "Atorvastatin (Lipitor) 80 mg PO",
      timingFrequency: "दररोज रात्री झोपताना १ गोळी",
      purpose: "खराब कोलेस्टेरॉल कमी करते आणि हृदयाच्या रक्तवाहिन्यांमध्ये चरबी साचू देत नाही.",
      specialInstructions: "ग्रेपफ्रूट (मोसंबीसारखे फळ) चा रस पिऊ नका. रात्री झोपताना घ्या.",
      category: "कोलेस्टेरॉल नियंत्रक",
      priority: "STANDARD"
    }
  ],
  emergencyRedFlags: [
    {
      warningSign: "छातीत असह्य वेदना, जडपणा किंवा जबड्याकडे व डाव्या हाताकडे पसरणाऱ्या कळा",
      whyItMatters: "हे हृदयाच्या रक्तवाहिनीत पुन्हा अडथळा आल्याचे लक्षण असू शकते.",
      action: "त्वरित रुग्णवाहिका (१०८ / ११२) बोलवा. स्वतः वाहन चालवून जाऊ नका.",
      urgency: "CALL_EMERGENCY_NOW"
    },
    {
      warningSign: "अचानक तीव्र धाप लागणे, झोपताना श्वास गुदमरणे किंवा गुलाबी रंगाचा कफ येणे",
      whyItMatters: "फुफ्फुसात वेगाने पाणी साचल्याचे हे गंभीर लक्षण आहे.",
      action: "ताठ बसा आणि त्वरित रुग्णवाहिका (१०८ / ११२) बोलवा.",
      urgency: "CALL_EMERGENCY_NOW"
    },
    {
      warningSign: "२४ तासांत १ ते १.५ किलो किंवा एका आठवड्यात २.५ किलो वजन अचानक वाढणे",
      whyItMatters: "शरीरात अनावश्यक पाणी साचत असल्याचे हे प्राथमिक लक्षण आहे.",
      action: "आजच तुमच्या डॉक्टरांच्या क्लिनिकला फोन करा.",
      urgency: "CALL_DOCTOR_URGENT"
    }
  ],
  dailyCareAndFollowUp: {
    appointments: [
      {
        doctorOrClinic: "हृदयविकार क्लिनिक (डॉ. एलेना वेंस)",
        timeframeOrDate: "७ ते १० दिवसांच्या आत",
        purpose: "हृदयाचे ठोके, रक्तदाब आणि स्टेंटची तपासणी करण्यासाठी.",
        questionsToAsk: [
          "माझे किडनी आणि पोटॅशियम रक्त तपासणी अहवाल सामान्य आहेत का?",
          "मी हलका व्यायाम किंवा चालणे कधीपासून सुरू करू शकतो?"
        ]
      }
    ],
    dailyChecklist: [
      {
        task: "सकाळी उठल्यावर शौचानंतर उपाशीपोटी सर्वात आधी वजन करा",
        timing: "सकाळ",
        tip: "दररोज सारखेच हलके कपडे घालून वजन करा आणि वहीत लिहून ठेवा."
      },
      {
        task: "सकाळची औषधे (Lasix, Aspirin, Brilinta) नाश्त्यासोबत घ्या",
        timing: "सकाळ",
        tip: "डोस चुकणार नाही यासाठी गोळ्यांच्या डब्याचा वापर करा."
      },
      {
        task: "रात्रीची औषधे (Brilinta, Carvedilol, Atorvastatin) जेवणानंतर घ्या",
        timing: "संध्याकाळ / रात्र",
        tip: "वेळेवर घेण्यासाठी फोनमध्ये गजर (अलार्म) लावा."
      }
    ],
    lifestyleGuidelines: {
      dietaryRules: [
        "मिठाची मर्यादा: दिवसभरात १ लहान चमच्यापेक्षा (२,००० मिलीग्रॅम) जास्त मीठ खाऊ नका.",
        "द्रवपदार्थ: दिवसभरात पाणी, चहा, सूप सर्व मिळून २ लिटरपेक्षा जास्त पिऊ नका."
      ],
      activityAndRestrictions: [
        "पुढील ७ दिवस ४-५ किलोपेक्षा जास्त जड सामान उचलू नका.",
        "४८ तास वाहन चालवू नका."
      ],
      woundOrIncisionCare: [
        "मांडीवरील किंवा मनगटावरील जखम कोरडी व स्वच्छ ठेवा. ४८ तासांनंतर हलकी आंघोळ करा."
      ]
    },
    vitalSignAlerts: [
      {
        vitalMetric: "दररोज सकाळचे वजन",
        alertThreshold: "२४ तासांत १ ते १.५ किलो वजन वाढणे",
        actionRequired: "त्वरित डॉक्टरांना कळवा; हे शरीरात पाणी साचण्याचे लक्षण आहे."
      }
    ]
  },
  medicalJargonGlossary: [
    {
      term: "हार्ट फेल्युअर (Heart Failure)",
      plainDefinition: "याचा अर्थ हृदय थांबणे असा नाही, तर हृदयाची पंप करण्याची ताकद कमी होणे असा आहे."
    },
    {
      term: "स्टेंट (Stent)",
      plainDefinition: "रक्तवाहिनीतील अडथळा दूर करून ती मोकळी ठेवण्यासाठी बसवलेली धातूची लहान जाळीदार नळी."
    }
  ]
};

export const cardiacBackupResult = cardiacBackupResultEn;

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
5. Atorvastatin (Lipitor) 80 mg PO QHS.

ACTIVITY & DIETARY INSTRUCTIONS:
- 2.0 gram (2,000 mg) sodium restriction per day.
- Fluid restriction: Maximum 2,000 mL (2 liters / ~64 oz) daily from all liquid sources.
- Daily morning weights upon waking, post-void, before breakfast. Record in log.
- S/p radial artery puncture: No lifting >10 lbs with right arm for 7 days. Keep puncture dressing clean and dry.
- No driving for 48 hours. Light walking encouraged.

FOLLOW-UP CARE:
- Cardiology Clinic: Dr. Elena Vance in 7-10 days. Bring medication bottles and weight log.
- Primary Care: Dr. Marcus Sterling in 14-21 days for comprehensive metabolic panel.

WARNING SIGNS / RED FLAGS:
Instructed on emergency symptoms. Call Emergency Ambulance (108 / 112) for: Acute recurrent chest pressure, diaphoresis, dyspnea at rest, syncope, or signs of stroke. Call clinic immediately for: Weight gain >3 lbs in 24 hours or >5 lbs in 1 week, worsening orthopnea, swelling in lower extremities, or abnormal bleeding.`;

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
