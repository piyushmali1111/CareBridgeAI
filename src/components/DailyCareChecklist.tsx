import React, { useState } from 'react';
import {
  CalendarCheck,
  CheckSquare,
  Clock,
  HelpCircle,
  Activity,
  Utensils,
  Ban,
  Droplets,
  Heart,
  Sparkles,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { Appointment, DailyChecklistItem, LifestyleGuidelines, VitalSignAlert, SupportedLanguage } from '../types';

interface DailyCareChecklistProps {
  careData: {
    appointments: Appointment[];
    dailyChecklist: DailyChecklistItem[];
    lifestyleGuidelines: LifestyleGuidelines;
    vitalSignAlerts: VitalSignAlert[];
  };
  language?: SupportedLanguage;
}

export const DailyCareChecklist: React.FC<DailyCareChecklistProps> = ({ careData, language = 'en' }) => {
  const { appointments, dailyChecklist, lifestyleGuidelines, vitalSignAlerts } = careData;

  const translations: Record<string, {
    routineBadge: string;
    routineTitle: string;
    progress: string;
    routineDesc: string;
    visitsBadge: string;
    visitsTitle: string;
    questionsToAsk: string;
    markScheduled: string;
    confirmed: string;
    vitalsTitle: string;
    lifestyleTitle: string;
    dietRules: string;
    activityRules: string;
    woundRules: string;
  }> = {
    en: {
      routineBadge: 'Home Routine Checklist',
      routineTitle: 'Daily Care Checklist',
      progress: "Today's Progress",
      routineDesc: 'Follow this simple daily routine to keep your recovery steady and prevent complications. Check off each step as you complete it during the day:',
      visitsBadge: 'Clinic & Doctor Visits',
      visitsTitle: 'Follow-Up Appointments & Questions to Ask',
      questionsToAsk: 'Questions to ask at this visit:',
      markScheduled: 'Mark Scheduled',
      confirmed: 'Confirmed',
      vitalsTitle: 'Vital Signs: What Numbers to Watch',
      lifestyleTitle: 'Food, Movement & Wound Care Guidelines',
      dietRules: 'Dietary Rules & Fluid Limits:',
      activityRules: 'Activity & Movement Limits:',
      woundRules: 'Wound & Incision Care:',
    },
    hi: {
      routineBadge: 'दैनिक दिनचर्या सूची',
      routineTitle: 'दैनिक देखभाल चेकलिस्ट (Daily Care)',
      progress: 'आज की प्रगति',
      routineDesc: 'अपने स्वास्थ्य लाभ को स्थिर रखने के लिए इस आसान दिनचर्या का पालन करें। पूरा करने के बाद टिक करें:',
      visitsBadge: 'डॉक्टर से मुलाक़ात',
      visitsTitle: 'फॉलो-अप मुलाक़ातें और डॉक्टर से पूछने योग्य सवाल',
      questionsToAsk: 'इस मुलाक़ात में डॉक्टर से क्या पूछें:',
      markScheduled: 'तय करें',
      confirmed: 'तय हो गया',
      vitalsTitle: 'शारीरिक संकेत (वाइटल्स): किन आंकड़ों पर नजर रखें',
      lifestyleTitle: 'खान-पान, गतिविधि और घाव की देखभाल',
      dietRules: 'आहार और तरल पदार्थों के नियम:',
      activityRules: 'गतिविधि और वजन उठाने के नियम:',
      woundRules: 'घाव या चीरे की देखभाल:',
    },
    mr: {
      routineBadge: 'दैनंदिन दिनचर्या',
      routineTitle: 'दररोजची काळजी चेकलिस्ट (Daily Care)',
      progress: 'आजची प्रगती',
      routineDesc: 'लवकर बरे होण्यासाठी या सोप्या दिनचर्येचे पालन करा. काम पूर्ण झाल्यावर टिक करा:',
      visitsBadge: 'डॉक्टरांची भेट',
      visitsTitle: 'पुढील भेटी आणि डॉक्टरांना विचारायचे प्रश्न',
      questionsToAsk: 'या भेटीत डॉक्टरांना काय विचारावे:',
      markScheduled: 'वेळ ठरवा',
      confirmed: 'निश्चित केले',
      vitalsTitle: 'शारीरिक आकडेवारी: कोणत्या लक्षणांवर लक्ष ठेवावे',
      lifestyleTitle: 'आहार, हालचाली आणि जखमेची काळजी',
      dietRules: 'आहार आणि पाण्याच्या मर्यादा:',
      activityRules: 'हालचाली आणि वजन उचलण्याचे नियम:',
      woundRules: 'जखमेची स्वच्छता आणि काळजी:',
    },
  };

  const t = translations[language] || translations.en;

  // Local state for interactive checkboxes
  const [completedDailyTasks, setCompletedDailyTasks] = useState<Record<number, boolean>>({});
  const [bookedAppointments, setBookedAppointments] = useState<Record<number, boolean>>({});

  const toggleTask = (index: number) => {
    setCompletedDailyTasks((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleAppointment = (index: number) => {
    setBookedAppointments((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const totalDailyTasks = dailyChecklist?.length || 0;
  const completedDailyCount = Object.values(completedDailyTasks).filter(Boolean).length;
  const progressPercent = totalDailyTasks > 0 ? Math.round((completedDailyCount / totalDailyTasks) * 100) : 0;

  return (
    <div className="space-y-6">
      {/* 1. Daily Care Steps & Routine Checklist */}
      <section className="print-break-inside-avoid bg-white rounded-2xl shadow-sm border border-slate-200/90 overflow-hidden">
        <div className="p-6 border-b border-slate-200 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-3.5">
              <div className="w-11 h-11 rounded-xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center shrink-0 text-teal-300">
                <CheckSquare className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-teal-400 uppercase tracking-wider bg-teal-950/80 px-2 py-0.5 rounded border border-teal-800">
                  {t.routineBadge}
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                  {t.routineTitle}
                </h2>
              </div>
            </div>

            {/* Progress Tracker */}
            <div className="bg-slate-800/90 px-4 py-2.5 rounded-xl border border-slate-700/80 min-w-[200px]">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="text-slate-300 font-medium">{t.progress}</span>
                <span className="text-teal-400 font-bold">{completedDailyCount} / {totalDailyTasks} ({progressPercent}%)</span>
              </div>
              <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-teal-400 to-emerald-400 transition-all duration-300 rounded-full"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="p-6">
          <p className="text-sm text-slate-600 mb-5 leading-relaxed">
            {t.routineDesc}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {dailyChecklist.map((item, idx) => {
              const isChecked = !!completedDailyTasks[idx];

              return (
                <div
                  key={idx}
                  onClick={() => toggleTask(idx)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start space-x-3.5 select-none ${
                    isChecked
                      ? 'bg-emerald-50/50 border-emerald-300 text-slate-500'
                      : 'bg-white border-slate-200 hover:border-teal-400 hover:shadow-xs'
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition ${
                      isChecked
                        ? 'bg-emerald-600 border-emerald-600 text-white'
                        : 'border-slate-300 bg-slate-50'
                    }`}
                  >
                    {isChecked && <CheckCircle className="w-4 h-4 stroke-[2.5]" />}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                        {item.timing}
                      </span>
                    </div>
                    <div
                      className={`text-sm sm:text-base font-semibold leading-snug ${
                        isChecked ? 'line-through text-slate-400' : 'text-slate-900'
                      }`}
                    >
                      {item.task}
                    </div>
                    {item.tip && (
                      <p className="text-xs text-slate-500 mt-1.5 flex items-start">
                        <Sparkles className="w-3.5 h-3.5 text-teal-600 mr-1 shrink-0 mt-0.5" />
                        <span>{item.tip}</span>
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Follow-Up Appointments & Smart Questions */}
      <section className="print-break-inside-avoid bg-white rounded-2xl shadow-sm border border-slate-200/90 overflow-hidden">
        <div className="p-6 border-b border-slate-200 bg-slate-900 text-white">
          <div className="flex items-center space-x-3.5">
            <div className="w-11 h-11 rounded-xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center shrink-0 text-teal-300">
              <CalendarCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-400 uppercase tracking-wider bg-teal-950/80 px-2 py-0.5 rounded border border-teal-800">
                Clinic & Doctor Visits
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                Follow-Up Appointments & Questions to Ask
              </h2>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {appointments.map((appt, idx) => {
              const isBooked = !!bookedAppointments[idx];

              return (
                <div
                  key={idx}
                  className={`rounded-xl border p-5 transition flex flex-col justify-between ${
                    isBooked
                      ? 'bg-slate-50 border-slate-300'
                      : 'bg-white border-slate-200 hover:border-teal-300 shadow-2xs'
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <span className="text-xs font-bold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200 inline-block mb-1">
                          {appt.timeframeOrDate}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                          {appt.doctorOrClinic}
                        </h3>
                      </div>

                      <button
                        type="button"
                        onClick={() => toggleAppointment(idx)}
                        className={`text-xs px-2.5 py-1 rounded-lg border font-semibold flex items-center space-x-1 shrink-0 no-print transition ${
                          isBooked
                            ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                            : 'bg-white text-slate-600 border-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        {isBooked ? (
                          <>
                            <CheckCircle className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                            Confirmed
                          </>
                        ) : (
                          <span>Mark Scheduled</span>
                        )}
                      </button>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 mb-3 bg-slate-50 p-2.5 rounded-lg border border-slate-150">
                      <strong>Visit Purpose:</strong> {appt.purpose}
                    </p>

                    {/* Questions to ask the doctor */}
                    {appt.questionsToAsk && appt.questionsToAsk.length > 0 && (
                      <div className="mt-3 pt-3 border-t border-slate-150">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center mb-2">
                          <HelpCircle className="w-3.5 h-3.5 text-teal-600 mr-1.5" />
                          Questions to ask at this visit:
                        </span>
                        <ul className="space-y-1.5">
                          {appt.questionsToAsk.map((q, qIdx) => (
                            <li
                              key={qIdx}
                              className="text-xs text-slate-700 bg-teal-50/40 p-2 rounded-md border border-teal-100 flex items-start space-x-2"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 shrink-0" />
                              <span>"{q}"</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Vital Sign Safety Limits & Lifestyle Rules */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Vital Signs Limits */}
        {vitalSignAlerts && vitalSignAlerts.length > 0 && (
          <section className="print-break-inside-avoid bg-white rounded-2xl shadow-sm border border-slate-200/90 overflow-hidden">
            <div className="p-5 border-b border-slate-200 bg-slate-900 text-white flex items-center space-x-3">
              <Activity className="w-5 h-5 text-teal-400" />
              <h3 className="text-base font-bold text-white">
                Vital Signs: What Numbers to Watch
              </h3>
            </div>
            <div className="p-5 space-y-3">
              {vitalSignAlerts.map((vital, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-xl p-3.5 border border-slate-200 text-xs sm:text-sm"
                >
                  <div className="flex items-center justify-between font-bold text-slate-900 mb-1">
                    <span className="flex items-center">
                      <Heart className="w-3.5 h-3.5 text-rose-500 mr-1.5" />
                      {vital.vitalMetric}
                    </span>
                    <span className="text-rose-600 text-xs bg-rose-50 px-2 py-0.5 rounded border border-rose-200 font-semibold">
                      Watch Alert
                    </span>
                  </div>
                  <div className="text-slate-700 mb-1 font-medium">
                    <span className="text-slate-500 font-normal">Alert trigger:</span> {vital.alertThreshold}
                  </div>
                  <div className="text-teal-900 bg-teal-50/70 p-2 rounded border border-teal-100 font-medium text-xs">
                    <strong>Action:</strong> {vital.actionRequired}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Lifestyle & Dietary Rules */}
        <section className="print-break-inside-avoid bg-white rounded-2xl shadow-sm border border-slate-200/90 overflow-hidden">
          <div className="p-5 border-b border-slate-200 bg-slate-900 text-white flex items-center space-x-3">
            <Utensils className="w-5 h-5 text-teal-400" />
            <h3 className="text-base font-bold text-white">
              Food, Movement & Wound Care Guidelines
            </h3>
          </div>
          <div className="p-5 space-y-4 text-xs sm:text-sm">
            {lifestyleGuidelines?.dietaryRules && lifestyleGuidelines.dietaryRules.length > 0 && (
              <div>
                <strong className="text-slate-900 font-bold flex items-center mb-1.5">
                  <Utensils className="w-3.5 h-3.5 text-teal-600 mr-1.5" />
                  Dietary Rules & Fluid Limits:
                </strong>
                <ul className="space-y-1 pl-5 list-disc text-slate-600">
                  {lifestyleGuidelines.dietaryRules.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            )}

            {lifestyleGuidelines?.activityAndRestrictions && lifestyleGuidelines.activityAndRestrictions.length > 0 && (
              <div className="pt-2 border-t border-slate-150">
                <strong className="text-slate-900 font-bold flex items-center mb-1.5">
                  <Ban className="w-3.5 h-3.5 text-amber-600 mr-1.5" />
                  Activity & Lifting Limits:
                </strong>
                <ul className="space-y-1 pl-5 list-disc text-slate-600">
                  {lifestyleGuidelines.activityAndRestrictions.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            )}

            {lifestyleGuidelines?.woundOrIncisionCare && lifestyleGuidelines.woundOrIncisionCare.length > 0 && (
              <div className="pt-2 border-t border-slate-150">
                <strong className="text-slate-900 font-bold flex items-center mb-1.5">
                  <Droplets className="w-3.5 h-3.5 text-blue-600 mr-1.5" />
                  Wound & Incision Care:
                </strong>
                <ul className="space-y-1 pl-5 list-disc text-slate-600">
                  {lifestyleGuidelines.woundOrIncisionCare.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};
