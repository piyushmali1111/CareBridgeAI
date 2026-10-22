import React, { useState } from 'react';
import { Pill, AlertCircle, ShieldAlert, Check, Clock, Search, Filter, Sparkles } from 'lucide-react';
import { MedicationItem } from '../types';

interface MedicationTableProps {
  medications: MedicationItem[];
}

export const MedicationTable: React.FC<MedicationTableProps> = ({ medications }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [takenStatus, setTakenStatus] = useState<Record<string, boolean>>({});

  if (!medications || medications.length === 0) return null;

  // Extract unique categories
  const categories = ['ALL', ...Array.from(new Set(medications.map((m) => m.category || 'Other')))];

  const filteredMeds = medications.filter((med) => {
    const matchesSearch =
      med.medicationName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      med.purpose.toLowerCase().includes(searchTerm.toLowerCase()) ||
      med.specialInstructions.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === 'ALL' || (med.category || 'Other') === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const toggleTaken = (name: string) => {
    setTakenStatus((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <section className="print-break-inside-avoid bg-white rounded-2xl shadow-sm border border-slate-200/90 overflow-hidden">
      {/* Header bar */}
      <div className="p-6 border-b border-slate-200/90 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center space-x-3.5">
            <div className="w-11 h-11 rounded-xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center shrink-0 text-teal-300">
              <Pill className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold text-teal-400 uppercase tracking-wider bg-teal-950/80 px-2 py-0.5 rounded border border-teal-800">
                  Prescription Protocol
                </span>
                <span className="text-xs text-slate-400 hidden sm:inline">
                  100% Original Names Preserved
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                Your Medication Schedule & Instructions
              </h2>
            </div>
          </div>

          <div className="text-xs text-slate-300 bg-slate-800/80 px-3.5 py-2 rounded-xl border border-slate-700/80 flex items-center space-x-2">
            <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Never change or stop dosages without your doctor's approval</span>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="no-print mt-5 pt-4 border-t border-slate-700/60 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="relative flex-1 max-w-sm">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search medication, purpose, or rule..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-800/90 border border-slate-700 rounded-lg pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 sm:pb-0">
            <Filter className="w-3.5 h-3.5 text-slate-400 shrink-0 mr-1" />
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold whitespace-nowrap transition ${
                  selectedCategory === cat
                    ? 'bg-teal-500 text-slate-950'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive Table for Desktop & Tablet */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/90 border-b border-slate-200 text-xs font-bold text-slate-600 uppercase tracking-wider">
              <th className="py-3.5 px-4 w-12 text-center no-print">Done</th>
              <th className="py-3.5 px-4 min-w-[200px]">Medication Name</th>
              <th className="py-3.5 px-4 min-w-[190px]">Timing / Frequency</th>
              <th className="py-3.5 px-4 min-w-[220px]">Purpose (Plain English)</th>
              <th className="py-3.5 px-4 min-w-[220px]">Special Instructions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {filteredMeds.map((med, idx) => {
              const isTaken = takenStatus[med.medicationName];
              const isCritical =
                med.priority === 'CRITICAL' ||
                med.specialInstructions.toLowerCase().includes('critical') ||
                med.specialInstructions.toLowerCase().includes('do not stop');

              return (
                <tr
                  key={idx}
                  className={`transition-colors ${
                    isTaken
                      ? 'bg-emerald-50/40 text-slate-500'
                      : isCritical
                      ? 'bg-amber-50/30 hover:bg-amber-50/50'
                      : 'hover:bg-slate-50/70'
                  }`}
                >
                  {/* Interactive Done checkbox */}
                  <td className="py-4 px-4 text-center no-print">
                    <button
                      type="button"
                      onClick={() => toggleTaken(med.medicationName)}
                      className={`w-6 h-6 rounded-md border flex items-center justify-center transition-all ${
                        isTaken
                          ? 'bg-emerald-600 border-emerald-600 text-white shadow-xs'
                          : 'border-slate-300 bg-white hover:border-teal-500 text-transparent'
                      }`}
                      title={isTaken ? 'Mark as not taken' : 'Mark as taken today'}
                    >
                      <Check className="w-4 h-4 stroke-[3]" />
                    </button>
                  </td>

                  {/* Medication Name */}
                  <td className="py-4 px-4 align-top">
                    <div className="flex items-start space-x-2">
                      <div className="font-bold text-slate-900 text-base leading-snug">
                        {med.medicationName}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 mt-1.5 flex-wrap gap-1">
                      <span className="inline-block text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                        {med.category || 'Prescription'}
                      </span>
                      {isCritical && (
                        <span className="inline-flex items-center text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-red-100 text-red-800 border border-red-300">
                          <AlertCircle className="w-3 h-3 mr-0.5" /> CRITICAL DOSE
                        </span>
                      )}
                    </div>
                  </td>

                  {/* Timing & Frequency */}
                  <td className="py-4 px-4 align-top">
                    <div className="flex items-start space-x-1.5 text-teal-800 font-semibold bg-teal-50/80 p-2 rounded-lg border border-teal-200/60">
                      <Clock className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm leading-snug">{med.timingFrequency}</span>
                    </div>
                  </td>

                  {/* Purpose */}
                  <td className="py-4 px-4 align-top">
                    <p className="text-slate-700 leading-relaxed text-sm">
                      {med.purpose}
                    </p>
                  </td>

                  {/* Special Instructions */}
                  <td className="py-4 px-4 align-top">
                    <div
                      className={`text-xs p-2.5 rounded-lg border leading-relaxed ${
                        isCritical
                          ? 'bg-rose-50 text-rose-900 border-rose-200 font-medium'
                          : 'bg-slate-50 text-slate-700 border-slate-200'
                      }`}
                    >
                      {med.specialInstructions}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View (renders on small screens) */}
      <div className="md:hidden divide-y divide-slate-200">
        {filteredMeds.map((med, idx) => {
          const isTaken = takenStatus[med.medicationName];
          const isCritical =
            med.priority === 'CRITICAL' ||
            med.specialInstructions.toLowerCase().includes('critical') ||
            med.specialInstructions.toLowerCase().includes('do not stop');

          return (
            <div
              key={idx}
              className={`p-4 transition ${
                isTaken
                  ? 'bg-emerald-50/40 text-slate-500'
                  : isCritical
                  ? 'bg-amber-50/20'
                  : 'bg-white'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="font-extrabold text-base text-slate-900">
                    {med.medicationName}
                  </div>
                  <div className="flex items-center space-x-1.5 mt-1 flex-wrap gap-1">
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                      {med.category || 'Prescription'}
                    </span>
                    {isCritical && (
                      <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-red-100 text-red-800">
                        CRITICAL DOSE
                      </span>
                    )}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => toggleTaken(med.medicationName)}
                  className={`w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 transition ${
                    isTaken
                      ? 'bg-emerald-600 border-emerald-600 text-white'
                      : 'border-slate-300 bg-white text-transparent'
                  }`}
                >
                  <Check className="w-5 h-5 stroke-[3]" />
                </button>
              </div>

              <div className="mt-3 space-y-2 text-xs">
                <div className="flex items-start space-x-1.5 bg-teal-50 p-2 rounded-lg text-teal-900 font-semibold border border-teal-200">
                  <Clock className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong>Schedule:</strong> {med.timingFrequency}</span>
                </div>

                <div className="text-slate-700 bg-slate-50 p-2 rounded-lg border border-slate-200">
                  <strong className="text-slate-900 block mb-0.5">Why you take this:</strong>
                  {med.purpose}
                </div>

                <div
                  className={`p-2 rounded-lg border ${
                    isCritical
                      ? 'bg-rose-50 text-rose-900 border-rose-200 font-medium'
                      : 'bg-slate-50 text-slate-700 border-slate-200'
                  }`}
                >
                  <strong className="block mb-0.5">Instructions:</strong>
                  {med.specialInstructions}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredMeds.length === 0 && (
        <div className="p-8 text-center text-slate-500 text-sm">
          No medications match the search or filter query.
        </div>
      )}

      {/* Footer reassurance */}
      <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 gap-2">
        <span>Showing {filteredMeds.length} of {medications.length} prescribed medications</span>
        <span className="text-teal-700 font-medium flex items-center">
          <Sparkles className="w-3.5 h-3.5 mr-1 text-teal-600" />
          Tip: You can check off each medicine above as you take it today.
        </span>
      </div>
    </section>
  );
};
