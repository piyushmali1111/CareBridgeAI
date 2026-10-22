import { CareBridgeResult } from '../types';

export function generateWhatsAppCaregiverDigest(data: CareBridgeResult): string {
  const lang = data.targetLanguage || 'en';

  let title = "🏥 *CareBridge AI - Patient Care Summary*";
  let overviewHeader = "*📋 Overview for Caregivers:*";
  let medsHeader = "*💊 Daily Medicines & Schedule:*";
  let redFlagsHeader = "*🚨 EMERGENCY WARNING SIGNS (Get Help Immediately):*";
  let apptsHeader = "*📅 Follow-Up Appointments:*";
  let safetyNotice = "⚠️ *Important:* Never alter medicine doses without direct doctor confirmation.";

  if (lang === 'hi') {
    title = "🏥 *केयरब्रिज AI - मरीज देखभाल सारांश (CareBridge Summary)*";
    overviewHeader = "*📋 परिजनों और देखभालकर्ताओं के लिए संक्षिप्त विवरण:*";
    medsHeader = "*💊 रोजाना की दवाइयाँ और समय:*";
    redFlagsHeader = "*🚨 आपातकालीन चेतावनी संकेत (तुरंत डॉक्टर या 108/911 को बताएं):*";
    apptsHeader = "*📅 डॉक्टर से अगली मुलाक़ात:*";
    safetyNotice = "⚠️ *महत्वपूर्ण:* डॉक्टर से पूछे बिना किसी भी दवा की खुराक न बदलें।";
  } else if (lang === 'mr') {
    title = "🏥 *केअरब्रिज AI - रुग्णाच्या काळजीचा सारांश (CareBridge Summary)*";
    overviewHeader = "*📋 काळजीवाहकांसाठी थोडक्यात माहिती:*";
    medsHeader = "*💊 दररोजची औषधे आणि वेळ:*";
    redFlagsHeader = "*🚨 धोक्याची लक्षणे (तात्काळ वैद्यकीय मदत मिळवा):*";
    apptsHeader = "*📅 पुढील भेटीची वेळ:*";
    safetyNotice = "⚠️ *महत्त्वाचे:* डॉक्टरांच्या सल्ल्याशिवाय औषधांच्या मात्रेत बदल करू नका.";
  }

  const patientGreeting = data.patientGreeting || 'Patient Discharge Update';
  const overview = data.simplifiedOverview || data.executiveSummary?.hospitalStayReason || '';

  const medsList = (data.medications || [])
    .map(
      (m, i) =>
        `${i + 1}. *${m.medicationName}*\n   ⏰ ${m.timingFrequency}\n   🎯 ${m.purpose}\n   📌 ${m.specialInstructions}`
    )
    .join('\n\n');

  const redFlagsList = (data.emergencyRedFlags || [])
    .map((f, i) => `• ⚠️ *${f.warningSign}*\n  👉 *Action:* ${f.action}`)
    .join('\n');

  const apptsList = (data.dailyCareAndFollowUp?.appointments || [])
    .map((a, i) => `• *${a.doctorOrClinic}* (${a.timeframeOrDate})\n  Reason: ${a.purpose}`)
    .join('\n');

  const fullText = `${title}
${patientGreeting}

${overviewHeader}
${overview}

${redFlagsHeader}
${redFlagsList}

${medsHeader}
${medsList}

${apptsHeader}
${apptsList}

${safetyNotice}`;

  return fullText;
}

export function getWhatsAppDeepLink(data: CareBridgeResult): string {
  const digest = generateWhatsAppCaregiverDigest(data);
  return `https://wa.me/?text=${encodeURIComponent(digest)}`;
}
