export interface PrimaryDiagnosis {
  clinicalTerm: string;
  plainEnglish: string;
  whatItMeans: string;
}

export interface MedicationItem {
  medicationName: string;
  timingFrequency: string;
  purpose: string;
  specialInstructions: string;
  category: string;
  priority: 'CRITICAL' | 'STANDARD' | string;
}

export interface EmergencyRedFlag {
  warningSign: string;
  whyItMatters: string;
  action: string;
  urgency: 'CALL_911_NOW' | 'CALL_DOCTOR_URGENT' | string;
}

export interface Appointment {
  doctorOrClinic: string;
  timeframeOrDate: string;
  purpose: string;
  questionsToAsk: string[];
}

export interface DailyChecklistItem {
  task: string;
  timing: string;
  tip: string;
}

export interface LifestyleGuidelines {
  dietaryRules: string[];
  activityAndRestrictions: string[];
  woundOrIncisionCare: string[];
}

export interface VitalSignAlert {
  vitalMetric: string;
  alertThreshold: string;
  actionRequired: string;
}

export interface MedicalJargonTerm {
  term: string;
  plainDefinition: string;
}

export interface CareBridgeResult {
  patientGreeting: string;
  executiveSummary: {
    hospitalStayReason: string;
    conditionExplained: string;
    recoveryOverview: string;
    keyRules: string[];
  };
  primaryDiagnoses: PrimaryDiagnosis[];
  medications: MedicationItem[];
  emergencyRedFlags: EmergencyRedFlag[];
  dailyCareAndFollowUp: {
    appointments: Appointment[];
    dailyChecklist: DailyChecklistItem[];
    lifestyleGuidelines: LifestyleGuidelines;
    vitalSignAlerts: VitalSignAlert[];
  };
  medicalJargonGlossary: MedicalJargonTerm[];
}

export interface SampleNote {
  id: string;
  title: string;
  shortDesc: string;
  icon: string;
  badge: string;
  text: string;
  precomputedResult?: CareBridgeResult;
}
