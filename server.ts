import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI, Type } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json({ limit: '25mb' }));

// =========================================================================
// MODEL CONFIGURATION (GEMMA / GEMINI ENGINE TARGET)
// Location: server.ts (Lines 20-30)
// Model: Gemma Multimodal Vision / Gemini 3.8 Flash Engine
// Temperature: 0.2 (strictly enforced for clinical factual precision)
// =========================================================================
export const PRIMARY_CLINICAL_MODEL = process.env.MODEL_NAME || 'gemini-3.8-flash';
export const TTS_AUDIO_MODEL = 'gemini-3.8-flash-lite-tts';
export const CLINICAL_TEMPERATURE = 0.2;

// Structured JSON Schema for CareBridge AI
const careBridgeResponseSchema = {
  type: Type.OBJECT,
  properties: {
    patientGreeting: {
      type: Type.STRING,
      description: "A warm, encouraging, plain-language greeting in the target language summarizing discharge status."
    },
    simplifiedOverview: {
      type: Type.STRING,
      description: "A 2-3 sentence plain, reassuring explanation in the chosen language explaining why the patient was in the hospital and their primary care routine, optimized for elderly patients and caregivers."
    },
    targetLanguage: {
      type: Type.STRING,
      description: "The language code of the output (en, hi, or mr)."
    },
    executiveSummary: {
      type: Type.OBJECT,
      properties: {
        hospitalStayReason: {
          type: Type.STRING,
          description: "Clear, reassuring 5th-grade explanation in target language of why the patient was in the hospital."
        },
        conditionExplained: {
          type: Type.STRING,
          description: "Simple explanation of what happened in the body without frightening jargon in target language."
        },
        recoveryOverview: {
          type: Type.STRING,
          description: "A summary of what the next 1-2 weeks at home look like in target language."
        },
        keyRules: {
          type: Type.ARRAY,
          items: { type: Type.STRING },
          description: "Top 3 to 5 golden rules for recovery at home in target language."
        }
      },
      required: ["hospitalStayReason", "conditionExplained", "recoveryOverview", "keyRules"]
    },
    primaryDiagnoses: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          clinicalTerm: { type: Type.STRING, description: "Original medical term (in English script)." },
          plainEnglish: { type: Type.STRING, description: "Friendly 5th-grade plain translation in target language." },
          whatItMeans: { type: Type.STRING, description: "One simple sentence explaining what this condition means for daily life in target language." }
        },
        required: ["clinicalTerm", "plainEnglish", "whatItMeans"]
      },
      description: "List of primary diagnoses with plain translations."
    },
    medications: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          medicationName: { type: Type.STRING, description: "Exact 100% original medication name, dose, and route written in standard Latin script (English). DO NOT ALTER DOSAGE." },
          timingFrequency: { type: Type.STRING, description: "CRITICAL: Must be fully translated into target language (e.g. in Hindi: 'दिन में 2 बार 1 गोली सुबह और शाम खाने के साथ')." },
          purpose: { type: Type.STRING, description: "CRITICAL: 5th-grade plain language reason why the doctor prescribed this, fully in target language." },
          specialInstructions: { type: Type.STRING, description: "CRITICAL: Crucial instructions like 'Take with food', 'Do not skip', or 'Check blood pressure' fully translated in target language." },
          category: { type: Type.STRING, description: "Category in target language." },
          priority: { type: Type.STRING, description: "CRITICAL or STANDARD" }
        },
        required: ["medicationName", "timingFrequency", "purpose", "specialInstructions", "category", "priority"]
      },
      description: "100% faithful medication list retaining original names in Latin script but translating schedules, purposes, and warnings fully."
    },
    emergencyRedFlags: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          warningSign: { type: Type.STRING, description: "Specific emergency symptom to watch out for in target language." },
          whyItMatters: { type: Type.STRING, description: "Why this symptom requires fast attention in target language." },
          action: { type: Type.STRING, description: "Action to take (e.g. Call Emergency Ambulance 108 / 112 immediately or call doctor)." },
          urgency: { type: Type.STRING, description: "CALL_EMERGENCY_NOW or CALL_DOCTOR_URGENT" }
        },
        required: ["warningSign", "whyItMatters", "action", "urgency"]
      },
      description: "Emergency red flags requiring immediate medical attention."
    },
    dailyCareAndFollowUp: {
      type: Type.OBJECT,
      properties: {
        appointments: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              doctorOrClinic: { type: Type.STRING, description: "Specialty, doctor, or clinic to visit." },
              timeframeOrDate: { type: Type.STRING, description: "Exact timeframe or date specified." },
              purpose: { type: Type.STRING, description: "Why this visit is critical in target language." },
              questionsToAsk: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: "2 to 3 smart questions the patient or family caregiver should ask during this visit in target language."
              }
            },
            required: ["doctorOrClinic", "timeframeOrDate", "purpose", "questionsToAsk"]
          }
        },
        dailyChecklist: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              task: { type: Type.STRING, description: "Actionable daily step in target language." },
              timing: { type: Type.STRING, description: "Morning, Afternoon, Evening, or As Needed (translated into target language)." },
              tip: { type: Type.STRING, description: "Helpful practical advice on how to do it easily in target language." }
            },
            required: ["task", "timing", "tip"]
          }
        },
        lifestyleGuidelines: {
          type: Type.OBJECT,
          properties: {
            dietaryRules: { type: Type.ARRAY, items: { type: Type.STRING } },
            activityAndRestrictions: { type: Type.ARRAY, items: { type: Type.STRING } },
            woundOrIncisionCare: { type: Type.ARRAY, items: { type: Type.STRING } }
          },
          required: ["dietaryRules", "activityAndRestrictions", "woundOrIncisionCare"]
        },
        vitalSignAlerts: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              vitalMetric: { type: Type.STRING, description: "e.g. Weight, Blood Pressure, Fever (in target language)" },
              alertThreshold: { type: Type.STRING, description: "e.g. Weight gain of more than 2-3 pounds in 24 hours (in target language)" },
              actionRequired: { type: Type.STRING, description: "What to do if this happens (in target language)." }
            },
            required: ["vitalMetric", "alertThreshold", "actionRequired"]
          }
        }
      },
      required: ["appointments", "dailyChecklist", "lifestyleGuidelines", "vitalSignAlerts"]
    },
    medicalJargonGlossary: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          term: { type: Type.STRING, description: "Complex clinical term found in document." },
          plainDefinition: { type: Type.STRING, description: "Simple 5th-grade definition in target language." }
        },
        required: ["term", "plainDefinition"]
      },
      description: "Glossary translating technical words from the patient's note."
    }
  },
  required: [
    "patientGreeting",
    "simplifiedOverview",
    "targetLanguage",
    "executiveSummary",
    "primaryDiagnoses",
    "medications",
    "emergencyRedFlags",
    "dailyCareAndFollowUp",
    "medicalJargonGlossary"
  ]
};

const systemInstruction = `You are CareBridge AI, an accessible medical health literacy assistant for elderly patients and caregivers.
Your core mission: Convert complex discharge summaries, clinical notes, OR scanned medical reports/prescriptions into simple, 5th-grade level guidance.
RULES:
1. NEVER diagnose conditions, alter prescribed medication dosages, or offer unprescribed treatments.
2. Maintain 100% factual fidelity for medicine names, dosages, and exact schedules. Keep brand names written in standard Latin script (English) alongside translated regional terms.
3. For emergency warning signs, instruct patients to call Emergency Ambulance (108 / 112) or doctor immediately. Do not use 911 for regional India contexts (Hindi/Marathi).
4. When translating into Hindi (हिंदी) or Marathi (मराठी):
   - Translate the entire summary, recovery rules, checklists, questions for doctors, AND all medication table columns (timing/frequency, purpose, special instructions) into that language.
   - ONLY the drug brand/chemical name remains in Latin script (e.g., 'Furosemide 40 mg').
5. Output MUST strictly follow valid JSON format.`;

// API Endpoint to simplify clinical text OR image scan
app.post('/api/simplify', async (req, res) => {
  try {
    const { clinicalText, imageData, language = 'en' } = req.body;

    if (!clinicalText && !imageData) {
      return res.status(400).json({ error: 'Either clinical text or a medical image scan is required.' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({
        error: 'GEMINI_API_KEY environment variable is not configured. Please ensure it is set.'
      });
    }

    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });

    const langNameMap: Record<string, string> = {
      en: 'English',
      hi: 'Hindi (हिंदी)',
      mr: 'Marathi (मराठी)'
    };
    const targetLanguageName = langNameMap[language] || 'English';

    const promptText = `Please process this medical discharge summary, clinical note, or prescription image and convert it into accessible guidance for an elderly patient and their family caregiver.

TARGET LANGUAGE: ${targetLanguageName} (${language}).
- Produce all explanations, overview, recovery rules, red-flag actions, questions for doctors, and daily routines in simple, warm, 5th-grade ${targetLanguageName}.
- CRITICAL MEDICATION TRANSLATION RULE:
  * Keep the medicine brand/chemical names written in standard Latin script (English) (e.g., "Ticagrelor (Brilinta) 90 mg PO", "Furosemide (Lasix) 40 mg PO").
  * BUT translate 100% of the Timing/Frequency, Purpose, and Special Instructions into ${targetLanguageName}!
- EMERGENCY CARE RULE: Use "Emergency Ambulance (108 / 112)" or "आपातकालीन सेवा (108 / 112)" / "रुग्णवाहिका (108 / 112)" for emergency red-flag signs. Do NOT use 911.
- Note: If personal details (name, MRN, phone, address) were redacted or blackboxed on the image, ignore the black boxes and extract only the medical instructions and prescriptions.
- Output must adhere strictly to the JSON schema.
${clinicalText ? `\n--- CLINICAL DOCUMENT TEXT ---\n${clinicalText}\n--- END DOCUMENT ---` : '\n(Extract all clinical data, medications, diagnoses, and doctor orders directly from the provided medical scan/photo image).'}`;

    const parts: any[] = [];

    // If an image was uploaded, attach it as an inlineData part for multimodal OCR
    if (imageData && imageData.data) {
      const cleanBase64 = imageData.data.replace(/^data:[^;]+;base64,/, '');
      parts.push({
        inlineData: {
          mimeType: imageData.mimeType || 'image/jpeg',
          data: cleanBase64,
        },
      });
    }

    parts.push({
      text: promptText,
    });

    // Execute Model call using Gemma / Gemini Multimodal Engine
    const response = await ai.models.generateContent({
      model: PRIMARY_CLINICAL_MODEL,
      contents: { parts },
      config: {
        systemInstruction,
        temperature: CLINICAL_TEMPERATURE,
        responseMimeType: 'application/json',
        responseSchema: careBridgeResponseSchema,
      },
    });

    const responseText = response.text;
    if (!responseText) {
      return res.status(500).json({ error: 'No output was generated by the model.' });
    }

    let parsedResult;
    try {
      parsedResult = JSON.parse(responseText);
    } catch {
      const cleaned = responseText.replace(/^```json/m, '').replace(/```$/m, '').trim();
      parsedResult = JSON.parse(cleaned);
    }

    parsedResult.targetLanguage = language;

    return res.json({
      success: true,
      data: parsedResult,
      modelUsed: PRIMARY_CLINICAL_MODEL,
      rawTokensUsed: response.usageMetadata?.totalTokenCount || 0
    });
  } catch (error: any) {
    console.error('Error in CareBridge AI processing:', error);
    return res.status(500).json({
      error: error.message || 'An unexpected error occurred while processing the clinical document.'
    });
  }
});

// API Endpoint for Text-to-Speech audio generation
app.post('/api/tts', async (req, res) => {
  try {
    const { text, language = 'en' } = req.body;
    if (!text || typeof text !== 'string') {
      return res.status(400).json({ error: 'Text is required for TTS.' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'GEMINI_API_KEY not configured.' });
    }

    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });

    const response = await ai.models.generateContent({
      model: TTS_AUDIO_MODEL,
      contents: [
        {
          role: 'user',
          parts: [
            {
              text: text.slice(0, 1000),
              speechMetadata: {
                style: 'Gentle, clear, compassionate clinical assistant for elderly patient',
              },
            },
          ],
        },
      ],
      config: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Kore' },
          },
        },
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (!base64Audio) {
      return res.status(500).json({ error: 'Failed to generate audio stream.' });
    }

    return res.json({
      success: true,
      audioBase64: base64Audio,
      mimeType: 'audio/wav',
    });
  } catch (err: any) {
    console.error('TTS error:', err);
    return res.status(500).json({ error: err.message || 'TTS generation failed.' });
  }
});

// Setup Vite in Dev or serve static files in Production
async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`CareBridge AI server running on port ${PORT} (Engine: ${PRIMARY_CLINICAL_MODEL})`);
  });
}

startServer();
