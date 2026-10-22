import React, { useState } from 'react';
import { BookOpen, Search, ArrowRight, Sparkles } from 'lucide-react';
import { MedicalJargonTerm } from '../types';

interface JargonTranslatorProps {
  glossary: MedicalJargonTerm[];
}

export const JargonTranslator: React.FC<JargonTranslatorProps> = ({ glossary }) => {
  const [search, setSearch] = useState('');

  if (!glossary || glossary.length === 0) return null;

  const filtered = glossary.filter(
    (item) =>
      item.term.toLowerCase().includes(search.toLowerCase()) ||
      item.plainDefinition.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="print-break-inside-avoid bg-white rounded-2xl shadow-sm border border-slate-200/90 overflow-hidden">
      <div className="p-6 border-b border-slate-200 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center space-x-3.5">
          <div className="w-11 h-11 rounded-xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center shrink-0 text-teal-300">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold text-teal-400 uppercase tracking-wider bg-teal-950/80 px-2 py-0.5 rounded border border-teal-800">
              Doctor Jargon Decoder
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
              Medical Glossary in Plain English
            </h2>
          </div>
        </div>

        <div className="relative max-w-xs no-print">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search medical terms..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
      </div>

      <div className="p-6">
        <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
          Doctors and hospital charts often use Latin abbreviations or heavy technical words. Here is what the words in your discharge note actually mean:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-teal-300 transition shadow-2xs flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wide block mb-1">
                  Technical Term
                </span>
                <span className="text-sm font-extrabold text-slate-900 block mb-2">
                  {item.term}
                </span>
              </div>

              <div className="pt-2 border-t border-slate-200/80">
                <span className="text-xs font-bold text-teal-700 flex items-center mb-1">
                  <ArrowRight className="w-3.5 h-3.5 mr-1 text-teal-500 shrink-0" />
                  Plain English:
                </span>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  {item.plainDefinition}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="p-6 text-center text-slate-500 text-xs">
            No glossary terms found matching "{search}".
          </div>
        )}
      </div>
    </section>
  );
};
