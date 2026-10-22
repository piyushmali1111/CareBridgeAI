/**
 * CareBridge AI - Model Configuration
 * 
 * Defines the underlying model engines used for:
 * 1. Multimodal Vision & OCR (reading medical scans, prescriptions, discharge summaries)
 * 2. Clinical Simplification & 5th-Grade Multilingual Translation
 * 3. Text-to-Speech Voice Generation
 */

export const MODEL_CONFIG = {
  // Primary Multimodal Clinical Engine
  // Target: Gemma Multimodal / Gemini 3.8 Flash (High-speed, multimodal vision, 0-cost, temperature 0.2)
  PRIMARY_MODEL: process.env.MODEL_NAME || 'gemini-3.8-flash',

  // Gemma Alternative Identifiers (supported via Google GenAI / Vertex / Open Model endpoints)
  GEMMA_MODELS: {
    GEMMA_4_31B: 'gemma-4-31b-it',
    GEMMA_2_27B: 'gemma-2-27b-it',
    GEMMA_2_9B: 'gemma-2-9b-it',
  },

  // Audio Text-to-Speech Engine
  TTS_MODEL: 'gemini-3.8-flash-lite-tts',

  // Strict clinical accuracy temperature to eliminate hallucinations
  TEMPERATURE: 0.2,
};
