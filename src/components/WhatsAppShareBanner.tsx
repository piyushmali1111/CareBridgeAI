import React, { useState } from 'react';
import { Send, Copy, Check, MessageSquare, ChevronDown, ChevronUp, Share2 } from 'lucide-react';
import { CareBridgeResult } from '../types';
import { generateWhatsAppCaregiverDigest, getWhatsAppDeepLink } from '../utils/whatsappShare';

interface WhatsAppShareBannerProps {
  data: CareBridgeResult;
}

export const WhatsAppShareBanner: React.FC<WhatsAppShareBannerProps> = ({ data }) => {
  const [copied, setCopied] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const digestText = generateWhatsAppCaregiverDigest(data);
  const deepLink = getWhatsAppDeepLink(data);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(digestText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="no-print bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-900 rounded-2xl p-5 border border-emerald-800/60 text-white shadow-md">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start space-x-3.5">
          <div className="w-11 h-11 rounded-xl bg-emerald-600 flex items-center justify-center shrink-0 text-white shadow-lg shadow-emerald-600/30">
            <MessageSquare className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                Caregiver Mobile Dispatch
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white mt-1">
              Send Summary to Caregiver on WhatsApp
            </h3>
            <p className="text-xs text-slate-300">
              Sends an instant, easy-to-read digest of daily medicines, schedules, and red flags to family members.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-2.5 flex-wrap gap-2">
          {/* Deep link button */}
          <a
            href={deepLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-all active:translate-y-0"
          >
            <Send className="w-4 h-4 fill-current" />
            <span>📲 Send on WhatsApp</span>
          </a>

          {/* Copy button */}
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center space-x-1.5 px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs sm:text-sm transition"
            title="Copy formatted text to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-400" />
                <span>Copy Digest</span>
              </>
            )}
          </button>

          {/* Preview toggle */}
          <button
            type="button"
            onClick={() => setShowPreview(!showPreview)}
            className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-xs transition"
            title={showPreview ? "Hide preview" : "Preview message"}
          >
            {showPreview ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Message Preview Accordion */}
      {showPreview && (
        <div className="mt-4 pt-4 border-t border-slate-800">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
            Caregiver WhatsApp Message Preview:
          </span>
          <pre className="p-4 bg-slate-950 rounded-xl text-xs font-mono text-emerald-300/90 whitespace-pre-wrap leading-relaxed max-h-60 overflow-y-auto border border-emerald-950">
            {digestText}
          </pre>
        </div>
      )}
    </div>
  );
};
