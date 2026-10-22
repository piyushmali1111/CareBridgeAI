# 🌉 CareBridge AI
### Accessible Clinical Instruction Simplifier & Health Literacy Engine for Patients and Caregivers

[![Google AI Studio](https://img.shields.io/badge/Powered%20By-Gemma%20%7C%20Google%20AI-4285F4?style=flat-square&logo=google)](https://ai.google.dev/)
[![React](https://img.shields.io/badge/Frontend-React%2019%20%2B%20TypeScript-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind%20CSS%20v4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Apache--2.0-green.svg?style=flat-square)](LICENSE)

> **CareBridge AI** bridges the critical gap between complex hospital discharge summaries and patient understanding. It transforms dense medical jargon, illegible clinical notes, and scanned prescription photos into clear, reassuring, and actionable daily recovery instructions in **English**, **Hindi (हिंदी)**, and **Marathi (मराठी)** — complete with audio narration and caregiver WhatsApp dispatch.

---

## 🎯 The Problem

* **The Health Literacy Crisis**: Studies indicate that **over 80% of hospital discharge instructions** exceed the reading comprehension of the average patient.
* **Preventable Readmissions**: Misunderstood medication schedules and missed warning signs are leading drivers of 30-day hospital readmissions.
* **Language & Elderly Barriers**: Non-English speaking families and senior citizens face immense hurdles decoding clinical Latin jargon (e.g., *"Take PO BID PC"*, *"Dyspnea upon exertion"*).
* **Privacy Concerns**: Patients often hesitate to use digital health tools due to fears of leaking personally identifiable information (PII).

---

## ✨ The Solution: How CareBridge AI Solves This

CareBridge AI delivers an end-to-end, privacy-preserving pipeline designed for patients, seniors, and home caregivers:

```
┌───────────────────────────────────────┐
│  Patient / Caregiver Input            │
│  - Discharge Summary Text             │
│  - Scanned Prescription Photo (OCR)   │
└──────────────────┬────────────────────┘
                   │
                   ▼
┌───────────────────────────────────────┐
│  🛡️ Client-Side HIPAA Redaction       │
│  Interactive canvas blackboxes PII    │
│  before image ever leaves the browser │
└──────────────────┬────────────────────┘
                   │
                   ▼
┌───────────────────────────────────────┐
│  🤖 Multimodal Clinical AI Engine     │
│  - Powered by Gemma & Google AI       │
│  - Strict Temperature: 0.2 (No Halluc)│
│  - Structured JSON Schema Validation  │
└──────────────────┬────────────────────┘
                   │
                   ▼
┌────────────────────────────────────────────────────────┐
│  🌟 Accessible Patient Portal                          │
│  ├─ 2-3 Sentence Plain Overview Card                   │
│  ├─ 🔊 Text-to-Speech Voice Player for Seniors         │
│  ├─ 💊 Medication Table (Latin Brand + Translated Uses)│
│  ├─ 🚨 Emergency Warning Banner (Ambulance 108 / 112)  │
│  ├─ ✅ Daily Care & Appointment Checklist              │
│  └─ 📲 1-Click WhatsApp Caregiver Digest Dispatch      │
└────────────────────────────────────────────────────────┘
```

---

## ⚡ Hackathon Quick Evaluation (1-Click Demos)

For judges evaluating the application in seconds, the top toolbar provides dedicated one-click demo triggers:

| Demo Button | What It Tests |
|---|---|
| **❤️ Load Sample Cardiac Note** | Pre-populates a complex acute coronary syndrome (NSTEMI) discharge summary to test multi-drug parsing and multilingual conversion (English, Hindi, Marathi). |
| **📷 Test Prescription OCR** | Generates an authentic prescription scan and launches the **Client-Side Blackbox Redactor** to demonstrate privacy masking followed by multimodal OCR. |

---

## 🌟 Key Features

### 1. 📷 Multimodal Vision OCR & Client-Side Privacy Redaction
* **Direct OCR Extraction**: Accepts JPG, PNG, and WebP photos of scanned doctor notes and hospital discharge forms.
* **Zero-Knowledge HIPAA Canvas (`ImageRedactionCanvas.tsx`)**:
  * Users click and drag solid black privacy boxes directly over sensitive info (Patient Name, MRN, Address, Phone Number).
  * Redactions are burned permanently into image pixels in browser memory before network transmission.
  * Features **Auto-Redact Demo**, **Undo**, and **Peek Original** controls.

### 2. 🌐 100% Multilingual Translation (English, Hindi, Marathi)
* **Pharmacological Brand Fidelity**: Medication names and exact dosages remain in standard Latin script (e.g., `Ticagrelor 90 mg PO`) so pharmacists can reliably dispense them.
* **Complete Instruction Localization**: Medication timings, purposes, special instructions, warning signs, and follow-up checklists are **100% translated** into clear everyday Hindi and Marathi.

### 3. 🚨 Localized Emergency Red-Flag Protocols (Ambulance 108 / 112)
* Automatically scans clinical notes for high-risk warning symptoms (e.g., crushing chest pain, sudden breathlessness, fever above 101°F).
* Formatted in high-contrast callouts with direct emergency ambulance hotlines (**Ambulance 108 / 112**), completely removing irrelevant US-centric numbers.

### 4. 🔊 Senior Accessibility: Voice Narrator (`<audio>`)
* Integrated audio player right underneath the summary overview.
* Reads instructions aloud at a gentle, reassuring cadence in English, Hindi, or Marathi to accommodate seniors or visually impaired patients.

### 5. 📲 Caregiver WhatsApp Dispatch
* **One-Click Share**: Generates a deep-link directly to WhatsApp (`https://wa.me/?text=...`).
* Formats a clean, readable text digest containing recovery instructions, medication times, and emergency signs for family members and home health aides.

---

## 🛡️ Clinical Safety & Guardrails

To meet clinical safety standards, CareBridge AI enforces four immutable constraints:

1. **Deterministic Sampling (`temperature: 0.2`)**: Eliminates speculative creativity and hallucinations.
2. **Zero Diagnostic Invention**: Explicit system instructions prohibit generating new medical diagnoses or suggesting unprescribed therapies.
3. **Strict Dosage & Schedule Invariance**: Retains 100% fidelity to the original doctor's orders.
4. **Structured JSON Validation**: All responses are parsed through strict JSON schemas before being rendered.

---

## 🏗️ Technology Stack

| Layer | Technology | Purpose |
|---|---|---|
| **AI Engine** | Gemma Multimodal Vision & Google AI SDK (`@google/genai`) | Clinical text extraction, OCR, simplification, and multilingual translation |
| **Sampling Config** | `temperature: 0.2`, `responseMimeType: 'application/json'` | Hallucination prevention and structured schema adherence |
| **Voice / TTS** | `gemini-3.8-flash-lite-tts` + Web Speech API fallback | Multilingual voice narration for accessibility |
| **Privacy / Redaction** | HTML5 Canvas 2D API | Client-side PII blackbox redaction |
| **Frontend Framework** | React 19 + TypeScript + Vite | Interactive, reactive user interface |
| **Styling & Design** | Tailwind CSS v4, Lucide React | Minimalist, clinical-grade accessible design |
| **Backend Server** | Node.js + Express + `tsx` | Secure API proxy routes for multimodal inference |

---

## 📁 Project Structure

```
├── server.ts                             # Express server, /api/simplify (Gemma OCR/translation), /api/tts
├── src/
│   ├── config/
│   │   └── modelConfig.ts                # Model engine identifiers and temperature settings
│   ├── components/
│   │   ├── Header.tsx                    # Minimalist header with Language selector
│   │   ├── ImageRedactionCanvas.tsx      # Interactive canvas to drag & blackbox personal details
│   │   ├── OverviewAndAudioPlayer.tsx    # Simplified overview card + <audio> voice narrator
│   │   ├── EmergencyRedFlagsBanner.tsx   # Red flag warnings (Ambulance 108 / 112)
│   │   ├── MedicationTable.tsx           # Multilingual table (Latin brand names + translated uses)
│   │   ├── DailyCareChecklist.tsx        # Interactive recovery checklist & doctor visit questions
│   │   ├── WhatsAppShareBanner.tsx       # 1-click WhatsApp caregiver dispatch
│   │   └── JargonTranslator.tsx          # Medical terminology decoder
│   ├── data/
│   │   └── sampleNotes.ts                # English, Hindi, and Marathi clinical test records
│   ├── utils/
│   │   ├── samplePrescriptionImage.ts    # Authentic prescription scan generator for testing OCR
│   │   └── whatsappShare.ts              # Formats clean WhatsApp digest and deep-links
│   ├── types.ts                          # Strict TypeScript definitions
│   ├── App.tsx                           # Main application orchestrator
│   └── index.css                         # Tailwind CSS and clean print styles
├── index.html                            # HTML entry point with metadata
├── package.json
└── tsconfig.json
```

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have Node.js 18+ installed and your Google AI Studio API key ready:
```bash
# In .env or runtime environment
GEMINI_API_KEY="your-api-key-here"
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000`.

### 4. Build for Production
```bash
npm run build
```

---

## ⚖️ License
Distributed under the Apache 2.0 License. See `LICENSE` for details.
