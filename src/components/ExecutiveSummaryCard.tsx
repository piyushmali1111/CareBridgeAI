import React from 'react';
import { Sparkles, HeartHandshake, CheckCircle2, BookmarkCheck, Stethoscope, ArrowRight } from 'lucide-react';
import { CareBridgeResult } from '../types';

interface ExecutiveSummaryCardProps {
  data: CareBridgeResult;
}

export const ExecutiveSummaryCard: React.FC<ExecutiveSummaryCardProps> = ({ data }) => {
  const { patientGreeting, executiveSummary, primaryDiagnoses, targetLanguage = 'en' } = data;

  const t = {
    en: {
      badge: 'Plain-Language Executive Summary',
      literacy: '5th-Grade Literacy Verified',
      whyHospital: 'Why You Were In The Hospital',
      whatHappened: 'What Happened Inside Your Body',
      recoverySteps: 'Your General Recovery Steps at Home',
      coreRules: 'Core Rules for a Safe Recovery:',
      diagTitle: 'Understanding Your Diagnoses',
      diagSub: '(Doctor words translated into normal words)',
      doctorTerm: 'Doctor Term:',
      meaning: 'What it means:',
    },
    hi: {
      badge: 'आसान भाषा में सारांश',
      literacy: 'सरल भाषा सत्यापित',
      whyHospital: 'आप अस्पताल में क्यों भर्ती थे',
      whatHappened: 'आपके शरीर में क्या समस्या हुई',
      recoverySteps: 'घर पर सुधार और स्वास्थ्य लाभ के कदम',
      coreRules: 'सुरक्षित स्वास्थ्य लाभ के मुख्य नियम:',
      diagTitle: 'अपनी बीमारी को आसान भाषा में समझें',
      diagSub: '(डॉक्टरी शब्दों का सरल हिंदी अनुवाद)',
      doctorTerm: 'डॉक्टरी शब्द:',
      meaning: 'इसका क्या अर्थ है:',
    },
    mr: {
      badge: 'सोप्या भाषेतील सारांश',
      literacy: 'सुलभ भाषा प्रमाणित',
      whyHospital: 'तुम्हाला रुग्णालयात का दाखल केले होते',
      whatHappened: 'तुमच्या शरीरात नेमके काय झाले',
      recoverySteps: 'घरी काळजी आणि बरे होण्याचे टप्पे',
      coreRules: 'सुरक्षित काळजीचे मुख्य नियम:',
      diagTitle: 'तुमचे आजार सोप्या भाषेत समजून घ्या',
      diagSub: '(वैद्यकीय शब्दांचे सोपे मराठी भाषांतर)',
      doctorTerm: 'डॉक्टरी शब्द:',
      meaning: 'याचा नेमका अर्थ:',
    },
  }[targetLanguage] || {
    badge: 'Plain-Language Executive Summary',
    literacy: '5th-Grade Literacy Verified',
    whyHospital: 'Why You Were In The Hospital',
    whatHappened: 'What Happened Inside Your Body',
    recoverySteps: 'Your General Recovery Steps at Home',
    coreRules: 'Core Rules for a Safe Recovery:',
    diagTitle: 'Understanding Your Diagnoses',
    diagSub: '(Doctor words translated into normal words)',
    doctorTerm: 'Doctor Term:',
    meaning: 'What it means:',
  };

  return (
    <section className="print-break-inside-avoid bg-white rounded-2xl shadow-sm border border-slate-200/90 overflow-hidden">
      {/* Top Reassuring Greeting Banner */}
      <div className="bg-gradient-to-r from-teal-900 via-slate-900 to-slate-900 text-white p-6 sm:p-7 relative">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start space-x-3.5">
            <div className="w-12 h-12 rounded-xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center shrink-0 text-teal-300">
              <HeartHandshake className="w-7 h-7" />
            </div>
            <div>
              <span className="inline-flex items-center text-xs font-bold tracking-wider uppercase text-teal-400 bg-teal-950/80 px-2.5 py-0.5 rounded-full border border-teal-800">
                <Sparkles className="w-3 h-3 mr-1" /> {t.badge}
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white mt-1.5 leading-snug">
                {patientGreeting || "Welcome home! Here is your clear recovery guide."}
              </h2>
            </div>
          </div>
          <div className="inline-flex items-center bg-white/10 px-3.5 py-1.5 rounded-lg border border-white/15 text-xs text-teal-200">
            <span>{t.literacy}</span>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-7 space-y-6">
        {/* Why You Were in the Hospital & What Happened */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-teal-50/60 rounded-xl p-5 border border-teal-100">
            <h3 className="text-sm font-bold text-teal-950 uppercase tracking-wide flex items-center mb-2">
              <span className="w-2 h-2 rounded-full bg-teal-600 mr-2" />
              {t.whyHospital}
            </h3>
            <p className="text-slate-800 text-base leading-relaxed font-medium">
              {executiveSummary.hospitalStayReason}
            </p>
          </div>

          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide flex items-center mb-2">
              <span className="w-2 h-2 rounded-full bg-slate-600 mr-2" />
              {t.whatHappened}
            </h3>
            <p className="text-slate-700 text-base leading-relaxed">
              {executiveSummary.conditionExplained}
            </p>
          </div>
        </div>

        {/* Recovery Overview */}
        <div className="bg-gradient-to-br from-slate-50 to-teal-50/30 rounded-xl p-5 border border-slate-200/90">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide flex items-center mb-2">
            <BookmarkCheck className="w-4 h-4 text-teal-600 mr-2" />
            {t.recoverySteps}
          </h3>
          <p className="text-slate-700 text-base leading-relaxed mb-4">
            {executiveSummary.recoveryOverview}
          </p>

          {/* Golden Rules */}
          {executiveSummary.keyRules && executiveSummary.keyRules.length > 0 && (
            <div className="mt-4 pt-4 border-t border-slate-200/80">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2.5">
                {t.coreRules}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {executiveSummary.keyRules.map((rule, idx) => (
                  <div
                    key={idx}
                    className="flex items-start space-x-2.5 bg-white p-3 rounded-lg border border-slate-200 text-sm text-slate-800 font-medium shadow-2xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{rule}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Primary Diagnoses: Medical Jargon -> Plain English/Hindi/Marathi */}
        {primaryDiagnoses && primaryDiagnoses.length > 0 && (
          <div className="pt-2">
            <div className="flex items-center space-x-2 mb-3">
              <Stethoscope className="w-5 h-5 text-teal-600" />
              <h3 className="text-base font-bold text-slate-900">
                {t.diagTitle}
              </h3>
              <span className="text-xs text-slate-500 font-normal">
                {t.diagSub}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {primaryDiagnoses.map((diag, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-4 border border-slate-200 hover:border-teal-300 transition shadow-2xs flex flex-col justify-between"
                >
                  <div>
                    <div className="text-xs font-mono text-slate-400 mb-1">
                      {t.doctorTerm}
                    </div>
                    <div className="text-xs font-semibold text-slate-600 uppercase tracking-tight mb-2 line-clamp-2">
                      {diag.clinicalTerm}
                    </div>
                    <div className="flex items-center text-teal-700 font-bold text-sm mb-2">
                      <ArrowRight className="w-3.5 h-3.5 mr-1 text-teal-500 shrink-0" />
                      <span>{diag.plainEnglish}</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-150 mt-2 leading-relaxed">
                    {diag.whatItMeans}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
