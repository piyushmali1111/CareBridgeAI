import React, { useState, useEffect, useRef } from 'react';
import { Volume2, Play, Pause, RotateCcw, Sparkles, Loader2, Languages } from 'lucide-react';
import { CareBridgeResult } from '../types';

interface OverviewAndAudioPlayerProps {
  data: CareBridgeResult;
}

export const OverviewAndAudioPlayer: React.FC<OverviewAndAudioPlayerProps> = ({ data }) => {
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isGeneratingAudio, setIsGeneratingAudio] = useState(false);
  const [isPlayingSpeech, setIsPlayingSpeech] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const lang = data.targetLanguage || 'en';
  const overviewText = data.simplifiedOverview || data.executiveSummary?.hospitalStayReason || '';

  // Language display labels
  const langLabels: Record<string, { name: string; listenText: string }> = {
    en: { name: 'English', listenText: 'Listen to Summary Aloud' },
    hi: { name: 'Hindi (हिंदी)', listenText: 'सारांश बोलकर सुनें' },
    mr: { name: 'Marathi (मराठी)', listenText: 'सारांश ऐका' },
  };
  const currentLang = langLabels[lang] || langLabels.en;

  // On data change, reset audio state
  useEffect(() => {
    setAudioUrl(null);
    setIsPlayingSpeech(false);
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
  }, [data]);

  // Request high-fidelity TTS audio or fallback to Web Speech Synthesis
  const handleListen = async () => {
    if (audioUrl && audioRef.current) {
      audioRef.current.play();
      return;
    }

    setIsGeneratingAudio(true);
    const textToRead = `${data.patientGreeting || ''}. ${overviewText}.`;

    try {
      const res = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: textToRead, language: lang }),
      });

      const json = await res.json();
      if (res.ok && json.audioBase64) {
        const src = `data:${json.mimeType || 'audio/wav'};base64,${json.audioBase64}`;
        setAudioUrl(src);
        setTimeout(() => {
          if (audioRef.current) {
            audioRef.current.play().catch(console.warn);
          }
        }, 100);
      } else {
        // Fallback to Web Speech Synthesis API
        playWebSpeech(textToRead);
      }
    } catch (e) {
      console.warn('TTS server call failed, using Web Speech Synthesis fallback', e);
      playWebSpeech(textToRead);
    } finally {
      setIsGeneratingAudio(false);
    }
  };

  const playWebSpeech = (text: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    if (lang === 'hi') utterance.lang = 'hi-IN';
    else if (lang === 'mr') utterance.lang = 'mr-IN';
    else utterance.lang = 'en-US';

    utterance.rate = 0.9; // Clear, measured pace for elderly listeners

    utterance.onstart = () => setIsPlayingSpeech(true);
    utterance.onend = () => setIsPlayingSpeech(false);
    utterance.onerror = () => setIsPlayingSpeech(false);

    window.speechSynthesis.speak(utterance);
  };

  const stopWebSpeech = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlayingSpeech(false);
  };

  return (
    <section className="print-break-inside-avoid bg-white rounded-2xl shadow-sm border border-slate-200/90 overflow-hidden">
      {/* Overview Top Card */}
      <div className="bg-gradient-to-r from-teal-900 via-slate-900 to-slate-900 text-white p-6 sm:p-7">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div className="flex items-center space-x-2">
            <span className="bg-teal-500 text-slate-950 text-xs font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Simplified Overview
            </span>
            <span className="text-teal-300 text-xs flex items-center font-medium">
              <Languages className="w-3.5 h-3.5 mr-1" />
              {currentLang.name}
            </span>
          </div>
          <span className="text-xs text-slate-400">5th-Grade Accessible Reading Level</span>
        </div>

        <h2 className="text-lg sm:text-xl font-bold text-white mb-2 leading-relaxed">
          {data.patientGreeting || 'Welcome home! Here is your clear recovery guide.'}
        </h2>

        <p className="text-base sm:text-lg text-teal-50 font-medium leading-relaxed bg-white/10 p-4 sm:p-5 rounded-xl border border-white/15">
          {overviewText}
        </p>
      </div>

      {/* Audio Player Widget Underneath Overview */}
      <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-3 w-full md:w-auto">
          <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center shrink-0 border border-teal-200">
            <Volume2 className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900 flex items-center">
              <span>Elderly Accessibility: Audio Voice Reader</span>
              {(isGeneratingAudio || isPlayingSpeech) && (
                <span className="ml-2 flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-600"></span>
                </span>
              )}
            </div>
            <p className="text-xs text-slate-500">
              Listen to your doctor's instructions read aloud clearly in {currentLang.name}
            </p>
          </div>
        </div>

        {/* Audio Element & Controls */}
        <div className="flex items-center space-x-3 w-full md:w-auto justify-end">
          {audioUrl ? (
            <div className="flex items-center space-x-2 w-full md:w-auto">
              <audio
                ref={audioRef}
                src={audioUrl}
                controls
                className="h-10 rounded-lg max-w-full sm:max-w-xs"
              />
              <button
                type="button"
                onClick={() => {
                  if (audioRef.current) {
                    audioRef.current.currentTime = 0;
                    audioRef.current.play();
                  }
                }}
                className="p-2 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-lg text-xs"
                title="Replay from start"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          ) : isPlayingSpeech ? (
            <button
              type="button"
              onClick={stopWebSpeech}
              className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm flex items-center space-x-1.5 shadow-xs transition"
            >
              <Pause className="w-4 h-4 fill-current" />
              <span>Stop Audio</span>
            </button>
          ) : (
            <button
              type="button"
              disabled={isGeneratingAudio}
              onClick={handleListen}
              className="px-4 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm flex items-center space-x-2 shadow-xs transition disabled:opacity-50"
            >
              {isGeneratingAudio ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-white" />
                  <span>Preparing Audio...</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-current" />
                  <span>{currentLang.listenText}</span>
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
