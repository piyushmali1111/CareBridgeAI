import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause, RotateCcw, FastForward } from 'lucide-react';
import { CareBridgeResult } from '../types';

interface AudioNarrationBarProps {
  data: CareBridgeResult;
}

export const AudioNarrationBar: React.FC<AudioNarrationBarProps> = ({ data }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [rate, setRate] = useState<number>(0.9); // Default gentle slow-and-clear pace
  const [currentSection, setCurrentSection] = useState<string>('Ready to read');
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Check if browser supports speech synthesis
  const hasSpeech = typeof window !== 'undefined' && 'speechSynthesis' in window;

  const prepareScript = (): string => {
    const greeting = data.patientGreeting || 'Welcome home.';
    const reason = `Why you were in the hospital: ${data.executiveSummary.hospitalStayReason}.`;
    const bodyExplanation = `What happened in your body: ${data.executiveSummary.conditionExplained}.`;
    const overview = `Your recovery steps: ${data.executiveSummary.recoveryOverview}.`;

    const emergencyIntro = `Important emergency warning signs: If you experience any of the following, get immediate help.`;
    const redFlags = data.emergencyRedFlags
      .map((flag) => `${flag.warningSign}. Action to take: ${flag.action}.`)
      .join(' ');

    const medsIntro = `Here are your prescribed medications. Do not stop or alter your dosages without speaking to your doctor.`;
    const medsList = data.medications
      .map(
        (m) =>
          `${m.medicationName}. Schedule: ${m.timingFrequency}. Purpose: ${m.purpose}. Instructions: ${m.specialInstructions}.`
      )
      .join(' ');

    return `${greeting} ${reason} ${bodyExplanation} ${overview} ${emergencyIntro} ${redFlags} ${medsIntro} ${medsList}`;
  };

  const handlePlay = () => {
    if (!hasSpeech) return;

    if (isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
      setIsPlaying(true);
      return;
    }

    window.speechSynthesis.cancel();

    const fullText = prepareScript();
    const utterance = new SpeechSynthesisUtterance(fullText);
    utterance.rate = rate;
    utterance.pitch = 1.0;

    utterance.onstart = () => {
      setIsPlaying(true);
      setIsPaused(false);
      setCurrentSection('Reading your discharge summary aloud...');
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
      setCurrentSection('Finished reading');
    };

    utterance.onerror = () => {
      setIsPlaying(false);
      setIsPaused(false);
      setCurrentSection('Playback stopped');
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  const handlePause = () => {
    if (!hasSpeech) return;
    window.speechSynthesis.pause();
    setIsPaused(true);
    setIsPlaying(false);
  };

  const handleStop = () => {
    if (!hasSpeech) return;
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
    setCurrentSection('Ready to read');
  };

  const changeRate = (newRate: number) => {
    setRate(newRate);
    if (isPlaying) {
      handleStop();
      setTimeout(handlePlay, 100);
    }
  };

  useEffect(() => {
    return () => {
      if (hasSpeech) {
        window.speechSynthesis.cancel();
      }
    };
  }, [hasSpeech]);

  if (!hasSpeech) return null;

  return (
    <div className="no-print bg-slate-900 text-white rounded-2xl p-4 shadow-lg border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
      <div className="flex items-center space-x-3 w-full sm:w-auto">
        <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center shrink-0 text-teal-400">
          <Volume2 className="w-5 h-5" />
        </div>
        <div>
          <div className="text-xs font-bold text-teal-400 uppercase tracking-wider flex items-center">
            <span>Audio Read-Aloud Assistant</span>
            {isPlaying && (
              <span className="ml-2 flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
            )}
          </div>
          <p className="text-xs text-slate-300 truncate max-w-xs sm:max-w-md">
            {currentSection}
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-2 w-full sm:w-auto justify-end">
        {/* Speed Buttons */}
        <div className="flex items-center bg-slate-800 rounded-lg p-0.5 border border-slate-700 text-xs">
          <button
            type="button"
            onClick={() => changeRate(0.8)}
            className={`px-2 py-1 rounded transition ${
              rate === 0.8 ? 'bg-teal-600 text-white font-bold' : 'text-slate-400 hover:text-white'
            }`}
            title="Slower speech pace"
          >
            0.8x
          </button>
          <button
            type="button"
            onClick={() => changeRate(0.95)}
            className={`px-2 py-1 rounded transition ${
              rate === 0.95 ? 'bg-teal-600 text-white font-bold' : 'text-slate-400 hover:text-white'
            }`}
            title="Normal speech pace"
          >
            1.0x
          </button>
        </div>

        {/* Play/Pause Button */}
        {isPlaying ? (
          <button
            type="button"
            onClick={handlePause}
            className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition shadow-sm"
          >
            <Pause className="w-4 h-4 fill-current" />
            <span>Pause</span>
          </button>
        ) : (
          <button
            type="button"
            onClick={handlePlay}
            className="flex items-center space-x-1.5 px-4 py-1.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs transition shadow-sm"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>{isPaused ? 'Resume' : 'Listen to Guide'}</span>
          </button>
        )}

        {/* Stop Button */}
        {(isPlaying || isPaused) && (
          <button
            type="button"
            onClick={handleStop}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition"
            title="Stop narration"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
