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

app.use(express.json({ limit: '10mb' }));

// Structured JSON Schema for CareBridge AI
const careBridgeResponseSchema = {
  type: Type.OBJECT,
  properties: {
    patientGreeting: {
      type: Type.STRING,
      description: "A warm, encouraging, plain-language greeting summarizing discharge status."
    },
    executiveSummary: {
      type: Type.OBJECT,
      properties: {
        hospitalStayReason: {
          type: Type.STRING,
          description: "Clear, reassuring 5th-grade explanation of why the patient was in the hospital."
        },
        conditionExplained: {
          type: Type.STRING,
          description: "Simple explanation of what happened in the body without frightening jargon."
        },
        recoveryOverview: {
          type: Type.STRING,
          description: "A summary of what the next 1-2 weeks at home look like."
        },
        keyRules: {
          type: Type.ARRAY,
          items: { type: Type.STRING },
          description: "Top 3 to 5 golden rules for recovery at home."
        }
      },
      required: ["hospitalStayReason", "conditionExplained", "recoveryOverview", "keyRules"]
    },
    primaryDiagnoses: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          clinicalTerm: { type: Type.STRING, description: "Original medical term from the discharge document." },
          plainEnglish: { type: Type.STRING, description: "Friendly 5th-grade plain English translation." },
          whatItMeans: { type: Type.STRING, description: "One simple sentence explaining what this condition means for daily life." }
        },
        required: ["clinicalTerm", "plainEnglish", "whatItMeans"]
      },
      description: "List of primary diagnoses with plain English translations."
    },
    medications: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          medicationName: { type: Type.STRING, description: "Exact 100% original medication name, dose, and route. DO NOT ALTER." },
          timingFrequency: { type: Type.STRING, description: "Exact timing and frequency, e.g., '1 tablet every morning with breakfast'." },
          purpose: { type: Type.STRING, description: "5th-grade plain English reason why the doctor prescribed this." },
          specialInstructions: { type: Type.STRING, description: "Crucial instructions like 'Take with food', 'Do not skip', 'Avoid NSAIDs', or 'Check blood pressure'." },
          category: { type: Type.STRING, description: "Category such as 'Heart & Blood Pressure', 'Blood Thinner', 'Fluid/Water Pill', 'Pain Relief', 'Infection', 'Stomach', or 'Other'." },
          priority: { type: Type.STRING, description: "CRITICAL or STANDARD" }
        },
        required: ["medicationName", "timingFrequency", "purpose", "specialInstructions", "category", "priority"]
      },
      description: "100% faithful medication list retaining original names and dosages."
    },
    emergencyRedFlags: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          warningSign: { type: Type.STRING, description: "Specific emergency symptom to watch out for." },
          whyItMatters: { type: Type.STRING, description: "Why this symptom requires fast attention." },
          action: { type: Type.STRING, description: "Action to take, e.g., 'Call 911 immediately' or 'Call cardiology on-call line'." },
          urgency: { type: Type.STRING, description: "CALL_911_NOW or CALL_DOCTOR_URGENT" }
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
              timeframeOrDate: { type: Type.STRING, description: "Exact timeframe or date specified in note, e.g., 'Within 7 to 10 days'." },
              purpose: { type: Type.STRING, description: "Why this visit is critical." },
              questionsToAsk: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: "2 to 3 smart questions the patient or family should ask during this visit."
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
              task: { type: Type.STRING, description: "Actionable daily step (e.g., 'Weigh yourself first thing in the morning')." },
              timing: { type: Type.STRING, description: "Morning, Afternoon, Evening, or As Needed." },
              tip: { type: Type.STRING, description: "Helpful practical advice on how to do it easily." }
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
              vitalMetric: { type: Type.STRING, description: "e.g., 'Weight', 'Blood Pressure', 'Heart Rate', 'Fever'" },
              alertThreshold: { type: Type.STRING, description: "e.g., 'Weight gain of more than 2-3 pounds in 24 hours'" },
              actionRequired: { type: Type.STRING, description: "What to do if this happens." }
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
          term: { type: Type.STRING, description: "Complex clinical term found in the document (e.g., Dyspnea, Edema, NPO, BID, Prn)." },
          plainDefinition: { type: Type.STRING, description: "Simple 5th-grade definition in plain English." }
        },
        required: ["term", "plainDefinition"]
      },
      description: "Glossary translating technical words from the patient's note."
    }
  },
  required: [
    "patientGreeting",
    "executiveSummary",
    "primaryDiagnoses",
    "medications",
    "emergencyRedFlags",
    "dailyCareAndFollowUp",
    "medicalJargonGlossary"
  ]
};

// API Endpoint to simplify clinical text
app.post('/api/simplify', async (req, res) => {
  try {
    const { clinicalText } = req.body;

    if (!clinicalText || typeof clinicalText !== 'string' || clinicalText.trim().length === 0) {
      return res.status(400).json({ error: 'Clinical text is required.' });
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

    const systemInstruction = `You are CareBridge AI, a clinical medical instruction simplifier and health literacy assistant.
Your task is to take complex medical discharge summaries, clinical notes, or prescription documents and convert them into clear, 5th-grade plain English.
STRICT SAFETY RULES:
1. DO NOT diagnose new conditions, suggest treatments, or alter prescribed medication dosages.
2. Retain 100% of original medication names, schedules, frequencies, and doctor instructions.
3. Highlight emergency red-flag warning signs clearly.
4. Output responses strictly adhering to the requested JSON schema.`;

    const prompt = `Please simplify the following medical discharge summary or clinical note for a patient and their family caregivers.
Ensure that:
1. The language is reassuring, simple (5th-grade reading level), and easy to understand.
2. Every single medication listed is preserved with 100% fidelity in name, strength, dosage, route, and timing instructions, while explaining its purpose in plain words.
3. Emergency warning signs (Red Flags) are highlighted with clear directives (when to call 911 vs when to call the doctor).
4. Daily follow-up steps, appointments, and care routines are organized into clear checklists.
5. Technical jargon terms used in the note are translated into simple definitions.

--- CLINICAL DOCUMENT START ---
${clinicalText}
--- CLINICAL DOCUMENT END ---`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.2,
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
      // If parsing fails directly, strip markdown fences if any
      const cleaned = responseText.replace(/^```json/m, '').replace(/```$/m, '').trim();
      parsedResult = JSON.parse(cleaned);
    }

    return res.json({
      success: true,
      data: parsedResult,
      rawTokensUsed: response.usageMetadata?.totalTokenCount || 0
    });
  } catch (error: any) {
    console.error('Error simplifying clinical note:', error);
    return res.status(500).json({
      error: error.message || 'An unexpected error occurred while processing the clinical document.'
    });
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
    console.log(`CareBridge AI server running on port ${PORT}`);
  });
}

startServer();
