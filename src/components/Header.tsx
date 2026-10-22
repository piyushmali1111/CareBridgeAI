import React from 'react';
import { HeartPulse, Printer, Globe } from 'lucide-react';
import { SupportedLanguage } from '../types';

interface HeaderProps {
  fontSize?: 'normal' | 'large' | 'xl';
  setFontSize?: (size: 'normal' | 'large' | 'xl') => void;
  selectedLanguage: SupportedLanguage;
  setSelectedLanguage: (lang: SupportedLanguage) => void;
  onPrint: () => void;
  hasResults: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  selectedLanguage,
  setSelectedLanguage,
  onPrint,
  hasResults,
}) => {
  return (
    <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-40 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Branding */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-teal-500/20 text-white shrink-0">
              <HeartPulse className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
                  CareBridge<span className="text-teal-400"> AI</span>
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                Multimodal Health Literacy & Plain Language Guide
              </p>
            </div>
          </div>

          {/* Controls: Language Selector + Print */}
          <div className="flex items-center space-x-2 sm:space-x-3.5">
            {/* Language Selector Dropdown */}
            <div className="relative flex items-center bg-slate-800/90 rounded-xl px-2.5 py-1.5 border border-slate-700/80 text-xs">
              <Globe className="w-4 h-4 text-teal-400 mr-1.5 shrink-0" />
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value as SupportedLanguage)}
                className="bg-transparent text-white font-semibold focus:outline-none cursor-pointer pr-2 text-xs sm:text-sm"
                title="Select language"
              >
                <option value="en" className="bg-slate-900 text-white">English</option>
                <option value="hi" className="bg-slate-900 text-white">Hindi (हिंदी)</option>
                <option value="mr" className="bg-slate-900 text-white">Marathi (मराठी)</option>
              </select>
            </div>

            {/* Print Button */}
            {hasResults && (
              <button
                type="button"
                onClick={onPrint}
                className="inline-flex items-center px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
                title="Print refrigerator care sheet"
              >
                <Printer className="w-4 h-4 mr-1.5 text-teal-400" />
                Print
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
