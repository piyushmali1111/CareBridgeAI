import React from 'react';
import { AlertTriangle, PhoneCall, Stethoscope, AlertOctagon, BellRing } from 'lucide-react';
import { EmergencyRedFlag, SupportedLanguage } from '../types';

interface EmergencyRedFlagsBannerProps {
  redFlags: EmergencyRedFlag[];
  language?: SupportedLanguage;
}

export const EmergencyRedFlagsBanner: React.FC<EmergencyRedFlagsBannerProps> = ({
  redFlags,
  language = 'en',
}) => {
  if (!redFlags || redFlags.length === 0) return null;

  const immediateEmergencies = redFlags.filter(
    (f) =>
      f.urgency === 'CALL_EMERGENCY_NOW' ||
      f.urgency === 'CALL_911_NOW' ||
      f.urgency.toLowerCase().includes('emergency') ||
      f.urgency.toLowerCase().includes('108') ||
      f.urgency.toLowerCase().includes('911')
  );
  const urgentDoctorCalls = redFlags.filter(
    (f) =>
      f.urgency !== 'CALL_EMERGENCY_NOW' &&
      f.urgency !== 'CALL_911_NOW' &&
      !f.urgency.toLowerCase().includes('emergency') &&
      !f.urgency.toLowerCase().includes('108') &&
      !f.urgency.toLowerCase().includes('911')
  );

  // Multilingual UI headers
  const labels = {
    en: {
      badge: 'Critical Safety Protocol',
      subBadge: 'Red Flag Warning Signs',
      title: 'Emergency Warning Signs: When to Get Help Immediately',
      bannerTip: 'Do not wait or hesitate if you notice these signs',
      group1Title: 'Immediate Emergency Care (Ambulance 108 / 112)',
      group1Desc: 'Do NOT drive yourself. Call for an emergency ambulance (108 / 112) right away.',
      emergencyBadge: 'AMBULANCE',
      group2Title: 'Call Doctor / Clinic (Urgent Changes)',
      group2Desc: 'Contact your clinic or on-call doctor helpline before symptoms worsen.',
      clinicBadge: 'CLINIC',
      why: 'Why:',
    },
    hi: {
      badge: 'गंभीर सुरक्षा निर्देश',
      subBadge: 'खतरे के चेतावनी संकेत',
      title: 'आपातकालीन चेतावनी संकेत: तुरंत चिकित्सीय सहायता कब लें',
      bannerTip: 'इन लक्षणों को देखकर बिल्कुल भी देरी न करें',
      group1Title: 'तत्काल आपातकालीन सेवा (एम्बुलेंस 108 / 112)',
      group1Desc: 'खुद गाड़ी चलाकर अस्पताल न जाएं। तुरंत एम्बुलेंस (108 / 112) को कॉल करें।',
      emergencyBadge: 'आपातकाल',
      group2Title: 'डॉक्टर से आज ही संपर्क करें (जरूरी बदलाव)',
      group2Desc: 'लक्षण गंभीर होने से पहले तुरंत अपने क्लिनिक या डॉक्टर से बात करें।',
      clinicBadge: 'क्लिनिक',
      why: 'कारण:',
    },
    mr: {
      badge: 'महत्त्वाचे सुरक्षा नियम',
      subBadge: 'धोक्याची लक्षणे',
      title: 'तातडीची धोक्याची लक्षणे: त्वरित वैद्यकीय मदत कधी घ्यावी',
      bannerTip: 'ही लक्षणे दिसल्यास अजिबात वेळ वाया घालवू नका',
      group1Title: 'तातडीची रुग्णवाहिका सेवा (१०८ / ११२)',
      group1Desc: 'स्वतः वाहन चालवून जाऊ नका. त्वरित रुग्णवाहिकेला (१०८ / ११२) फोन करा.',
      emergencyBadge: 'तातडीचे',
      group2Title: 'डॉक्टरांशी तातडीने संपर्क साधा',
      group2Desc: 'लक्षणे वाढण्यापूर्वी आजच तुमच्या डॉक्टरांशी किंवा क्लिनिकशी बोला.',
      clinicBadge: 'क्लिनिक',
      why: 'कारण:',
    },
  }[language] || {
    badge: 'Critical Safety Protocol',
    subBadge: 'Red Flag Warning Signs',
    title: 'Emergency Warning Signs: When to Get Help Immediately',
    bannerTip: 'Do not wait or hesitate if you notice these signs',
    group1Title: 'Immediate Emergency Care (Ambulance 108 / 112)',
    group1Desc: 'Do NOT drive yourself. Call for an emergency ambulance (108 / 112) right away.',
    emergencyBadge: 'AMBULANCE',
    group2Title: 'Call Doctor / Clinic (Urgent Changes)',
    group2Desc: 'Contact your clinic or on-call doctor helpline before symptoms worsen.',
    clinicBadge: 'CLINIC',
    why: 'Why:',
  };

  return (
    <section className="print-break-inside-avoid rounded-2xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white p-5 sm:p-6 shadow-xl border-2 border-red-500/40 relative overflow-hidden">
      <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none text-white">
        <AlertOctagon className="w-56 h-56" />
      </div>

      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/20 gap-3">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/30 animate-pulse">
              <AlertTriangle className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="bg-white text-red-700 text-xs font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  {labels.badge}
                </span>
                <span className="text-white/80 text-xs font-medium hidden sm:inline">
                  {labels.subBadge}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white mt-1">
                {labels.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 text-xs font-semibold text-white/90">
            <BellRing className="w-4 h-4 text-amber-300 animate-bounce" />
            <span>{labels.bannerTip}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5">
          {/* Group 1: Immediate Emergency Care (108 / 112) */}
          <div className="bg-black/25 backdrop-blur-md rounded-xl p-4 sm:p-5 border border-white/15">
            <div className="flex items-center space-x-2 mb-3">
              <span className="w-7 h-7 rounded-lg bg-red-500 flex items-center justify-center text-white shrink-0 font-black text-xs shadow-md">
                <PhoneCall className="w-4 h-4" />
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center">
                {labels.group1Title}
              </h3>
            </div>
            <p className="text-xs text-red-100 mb-3.5 leading-relaxed">
              {labels.group1Desc}
            </p>

            <ul className="space-y-3">
              {(immediateEmergencies.length > 0 ? immediateEmergencies : redFlags.slice(0, 2)).map(
                (flag, idx) => (
                  <li
                    key={idx}
                    className="bg-white/10 rounded-lg p-3 border border-white/15 hover:bg-white/15 transition"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <strong className="text-sm sm:text-base font-bold text-white block">
                        {flag.warningSign}
                      </strong>
                      <span className="shrink-0 bg-red-500/90 text-white text-[11px] font-bold px-2 py-0.5 rounded uppercase">
                        {labels.emergencyBadge}
                      </span>
                    </div>
                    {flag.whyItMatters && (
                      <p className="text-xs text-red-100/90 mt-1">
                        <span className="font-semibold text-white">{labels.why}</span> {flag.whyItMatters}
                      </p>
                    )}
                    <div className="mt-2 text-xs font-medium text-amber-200 bg-black/30 px-2.5 py-1.5 rounded-md inline-flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mr-2 shrink-0 animate-ping" />
                      {flag.action}
                    </div>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Group 2: Urgent Doctor Notification */}
          <div className="bg-black/25 backdrop-blur-md rounded-xl p-4 sm:p-5 border border-white/15">
            <div className="flex items-center space-x-2 mb-3">
              <span className="w-7 h-7 rounded-lg bg-amber-500 flex items-center justify-center text-slate-900 shrink-0 font-black text-xs shadow-md">
                <Stethoscope className="w-4 h-4 text-slate-900" />
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center">
                {labels.group2Title}
              </h3>
            </div>
            <p className="text-xs text-amber-100 mb-3.5 leading-relaxed">
              {labels.group2Desc}
            </p>

            <ul className="space-y-3">
              {(urgentDoctorCalls.length > 0 ? urgentDoctorCalls : redFlags.slice(2)).map(
                (flag, idx) => (
                  <li
                    key={idx}
                    className="bg-white/10 rounded-lg p-3 border border-white/15 hover:bg-white/15 transition"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <strong className="text-sm sm:text-base font-bold text-white block">
                        {flag.warningSign}
                      </strong>
                      <span className="shrink-0 bg-amber-500 text-slate-900 text-[11px] font-bold px-2 py-0.5 rounded uppercase">
                        {labels.clinicBadge}
                      </span>
                    </div>
                    {flag.whyItMatters && (
                      <p className="text-xs text-amber-100/90 mt-1">
                        <span className="font-semibold text-white">{labels.why}</span> {flag.whyItMatters}
                      </p>
                    )}
                    <div className="mt-2 text-xs font-medium text-amber-200 bg-black/30 px-2.5 py-1.5 rounded-md inline-flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-300 mr-2 shrink-0" />
                      {flag.action}
                    </div>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
