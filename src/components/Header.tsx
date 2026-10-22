import React from 'react';
import { HeartPulse, Printer, ShieldCheck, PhoneCall, Type, Sparkles } from 'lucide-react';

interface HeaderProps {
  fontSize: 'normal' | 'large' | 'xl';
  setFontSize: (size: 'normal' | 'large' | 'xl') => void;
  onPrint: () => void;
  hasResults: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  fontSize,
  setFontSize,
  onPrint,
  hasResults,
}) => {
  return (
    <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-40 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Branding */}
          <div className="flex items-center space-x-3.5">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-teal-500/20 text-white">
              <HeartPulse className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
                  CareBridge<span className="text-teal-400"> AI</span>
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-teal-950 text-teal-300 border border-teal-800/80">
                  <ShieldCheck className="w-3 h-3 mr-1" />
                  Health Literacy Engine
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                Clinical Medical Instruction Simplifier & 5th-Grade Patient Guide
              </p>
            </div>
          </div>

          {/* Accessibility & Action Controls */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Font Size Adjuster for patients/caregivers */}
            <div className="flex items-center bg-slate-800/90 rounded-lg p-1 border border-slate-700/80 text-xs">
              <span className="text-slate-400 px-1.5 hidden md:flex items-center">
                <Type className="w-3.5 h-3.5 mr-1" /> Size:
              </span>
              <button
                type="button"
                onClick={() => setFontSize('normal')}
                className={`px-2 py-1 rounded transition-colors ${
                  fontSize === 'normal'
                    ? 'bg-teal-600 text-white font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700'
                }`}
                title="Normal Font Size"
              >
                A
              </button>
              <button
                type="button"
                onClick={() => setFontSize('large')}
                className={`px-2 py-1 rounded transition-colors text-sm ${
                  fontSize === 'large'
                    ? 'bg-teal-600 text-white font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700'
                }`}
                title="Large Font Size"
              >
                A+
              </button>
              <button
                type="button"
                onClick={() => setFontSize('xl')}
                className={`px-2 py-1 rounded transition-colors text-base ${
                  fontSize === 'xl'
                    ? 'bg-teal-600 text-white font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700'
                }`}
                title="Extra Large Font Size"
              >
                A++
              </button>
            </div>

            {/* Print Button */}
            {hasResults && (
              <button
                type="button"
                onClick={onPrint}
                className="hidden sm:inline-flex items-center px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition shadow-sm"
              >
                <Printer className="w-4 h-4 mr-1.5 text-teal-400" />
                Print Guide
              </button>
            )}

            {/* Emergency Hotline Alert */}
            <div className="flex items-center px-2.5 py-1.5 rounded-lg bg-red-950/80 border border-red-800/60 text-red-300 text-xs font-semibold">
              <PhoneCall className="w-3.5 h-3.5 mr-1.5 text-red-400 animate-pulse" />
              <span>ER: <strong className="text-white">911</strong></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
