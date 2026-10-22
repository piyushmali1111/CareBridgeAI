# CareBridge AI — Clinical Medical Instruction Simplifier & Health Literacy Engine

> **CareBridge AI** transforms dense medical discharge summaries, inpatient clinical notes, and scanned prescription photos into accessible, reassuring daily care instructions in **English**, **Hindi (हिंदी)**, and **Marathi (मराठी)**.

---

## 🌟 Core Features

### 1. Multimodal Vision OCR & HIPAA Privacy "Blackbox" Redactor
- **Direct OCR**: Upload any JPG/PNG/WebP photo of a prescription, hospital discharge record, or lab test. The vision model processes visual text directly.
- **Client-Side Blackbox Redactor** (`src/components/ImageRedactionCanvas.tsx`):
  - Click and drag directly on the image to draw solid black privacy boxes over sensitive personal details (Patient Name, MRN, Address, Phone Number).
  - Redaction is permanently burned into the image pixels via HTML5 `<canvas>` before the image is transmitted to the AI, ensuring 100% HIPAA privacy protection.
  - Includes **Auto-Redact Demo**, **Undo**, and **Peek Original** controls.

### 2. 100% Multilingual Translation (English, Hindi, Marathi)
- **Languages Supported**: English, Hindi (हिंदी), and Marathi (मराठी).
- **Comprehensive Coverage**:
  - Simplified 2-3 sentence overview card.
  - Primary diagnosis explanations in layman's terms.
  - **Medication Table**: Medicine brand/chemical names remain in standard Latin script (e.g., `Ticagrelor 90 mg PO`) so pharmacists can identify them, but **Timing / Schedule**, **Simple Purpose**, and **Special Instructions** are **100% translated** into the chosen language.
  - Emergency warning signs and recovery guidelines.
  - Daily routine checklist and follow-up appointment questions.

### 3. Emergency Warning Signs (Ambulance 108 / 112)
- Replaces hardcoded US 911 with universal emergency ambulance protocols (`108 / 112` and local emergency services):
  - **English**: *Immediate Emergency Care (Ambulance 108 / 112)*
  - **Hindi**: *तत्काल आपातकालीन सेवा (एम्बुलेंस 108 / 112)*
  - **Marathi**: *तातडीची रुग्णवाहिका सेवा (१०८ / ११२)*

### 4. Text-to-Speech Voice Narrator (`<audio>`)
- Integrated audio player widget right underneath the summary overview.
- Uses `gemini-3.8-flash-lite-tts` (or Web Speech API fallback) to read aloud discharge instructions at a gentle pace for elderly or visually impaired patients in English, Hindi, or Marathi.

### 5. Caregiver WhatsApp Mobile Dispatch
- **"📲 Send Summary to Caregiver on WhatsApp"** button.
- Deep-links to `https://wa.me/?text=<encoded_caregiver_summary>`.
- Generates a beautifully formatted WhatsApp text digest containing the patient greeting, daily medicine schedule, emergency warning signs, and upcoming clinic visits.

---

## 🏗️ Technology Stack

| Layer | Technology |
|---|---|
| **AI SDK** | `@google/genai` (TypeScript SDK) |
| **Model Engines** | Gemma Multimodal Vision / Gemini 3.8 Flash (`temperature: 0.2`) |
| **TTS Engine** | `gemini-3.8-flash-lite-tts` & Web Speech API (`hi-IN`, `mr-IN`, `en-US`) |
| **Backend** | Node.js, Express, TypeScript (`tsx`) |
| **Frontend** | React 19, TypeScript, Vite |
| **Styling** | Tailwind CSS v4 |
| **Icons** | Lucide React |

---

## 📁 Key File Structure

```
├── server.ts                             # Express backend, /api/simplify (Gemma OCR/translation), /api/tts
├── src/
│   ├── config/
│   │   └── modelConfig.ts                # Centralized Gemma / Gemini model identifiers
│   ├── components/
│   │   ├── Header.tsx                    # Minimalist header with Language selector
│   │   ├── ImageRedactionCanvas.tsx      # Privacy canvas to drag & blackbox personal details
│   │   ├── OverviewAndAudioPlayer.tsx    # 2-3 sentence overview + <audio> voice narrator
│   │   ├── EmergencyRedFlagsBanner.tsx   # Red flag alerts (108 / 112 Emergency Ambulance)
│   │   ├── MedicationTable.tsx           # Multilingual medication table (Latin brand names + translated instructions)
│   │   ├── DailyCareChecklist.tsx        # Interactive checklist & appointment questions
│   │   ├── WhatsAppShareBanner.tsx       # 1-click WhatsApp caregiver dispatch
│   │   └── JargonTranslator.tsx          # Doctor medical jargon decoder
│   ├── data/
│   │   └── sampleNotes.ts                # Precomputed English, Hindi, and Marathi sample clinical records
│   ├── utils/
│   │   ├── samplePrescriptionImage.ts    # 1-click sample prescription scan for testing OCR
│   │   └── whatsappShare.ts              # Formats clean WhatsApp digest and deep-links
│   ├── types.ts                          # Full TypeScript interfaces
│   ├── App.tsx                           # Root application component
│   └── index.css                         # Tailwind CSS and print stylesheet
└── package.json
```

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure `GEMINI_API_KEY` is present in your environment:
```bash
GEMINI_API_KEY="your-api-key-here"
```

### 2. Run the Development Server
```bash
npm run dev
```
The application will be live at `http://localhost:3000`.

### 3. Production Build
```bash
npm run build
```
Builds the client SPA and bundles server routes for deployment.
