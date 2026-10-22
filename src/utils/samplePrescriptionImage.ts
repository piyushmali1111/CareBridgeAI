// Generates a high-contrast clinical prescription card as a data URL for one-click testing of Multimodal Image OCR
export function getSamplePrescriptionImageDataUrl(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000" viewBox="0 0 800 1000" style="background:#ffffff; font-family: 'Helvetica Neue', Arial, sans-serif;">
    <!-- Clinic Header -->
    <rect width="800" height="140" fill="#0f172a"/>
    <circle cx="60" cy="70" r="30" fill="#0d9488"/>
    <text x="60" y="78" font-size="28" font-weight="bold" fill="#ffffff" text-anchor="middle">+</text>
    <text x="110" y="60" font-size="24" font-weight="bold" fill="#ffffff">ST. JUDE MEMORIAL HOSPITAL</text>
    <text x="110" y="86" font-size="14" fill="#94a3b8">Cardiovascular Care Unit | Discharge Prescription Order</text>
    <text x="110" y="108" font-size="12" fill="#38bdf8">Dr. Elena Vance, MD - Chief Cardiologist | NPI: 184920194</text>

    <!-- Patient Details -->
    <rect x="30" y="160" width="740" height="70" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" rx="8"/>
    <text x="50" y="190" font-size="14" font-weight="bold" fill="#1e293b">Patient: Robert Jenkins</text>
    <text x="320" y="190" font-size="14" fill="#475569">Age: 68 | Male</text>
    <text x="520" y="190" font-size="14" fill="#475569">MRN: 9482014</text>
    <text x="50" y="215" font-size="13" fill="#64748b">Date: October 22, 2026</text>
    <text x="320" y="215" font-size="13" fill="#64748b">Diagnosis: Acute CHF Exacerbation &amp; NSTEMI s/p LAD Stent</text>

    <!-- Rx Symbol -->
    <text x="50" y="290" font-size="44" font-weight="bold" fill="#0f172a" font-family="serif">℞</text>
    <text x="110" y="280" font-size="16" font-weight="bold" fill="#0f172a">DISCHARGE MEDICATIONS &amp; REGIMEN:</text>
    <line x1="50" y1="305" x2="750" y2="305" stroke="#94a3b8" stroke-width="2"/>

    <!-- Med 1 -->
    <text x="50" y="340" font-size="16" font-weight="bold" fill="#0f172a">1. Ticagrelor (Brilinta) 90 mg PO BID</text>
    <text x="70" y="365" font-size="14" fill="#334155">Sig: Take 1 tablet by mouth twice daily (morning and evening).</text>
    <text x="70" y="388" font-size="13" font-weight="bold" fill="#dc2626">*CRITICAL: Dual antiplatelet for LAD stent. Do NOT stop or skip doses!</text>

    <!-- Med 2 -->
    <text x="50" y="430" font-size="16" font-weight="bold" fill="#0f172a">2. Aspirin 81 mg PO daily</text>
    <text x="70" y="455" font-size="14" fill="#334155">Sig: Take 1 tablet once daily in morning with food.</text>

    <!-- Med 3 -->
    <text x="50" y="500" font-size="16" font-weight="bold" fill="#0f172a">3. Furosemide (Lasix) 40 mg PO QAM</text>
    <text x="70" y="525" font-size="14" fill="#334155">Sig: Take 1 tablet every morning. Diuretic for pulmonary congestion.</text>
    <text x="70" y="548" font-size="13" fill="#64748b">Check morning weight daily.</text>

    <!-- Med 4 -->
    <text x="50" y="590" font-size="16" font-weight="bold" fill="#0f172a">4. Carvedilol (Coreg) 6.25 mg PO BID</text>
    <text x="70" y="615" font-size="14" fill="#334155">Sig: Take 1 tablet twice daily with food.</text>

    <!-- Med 5 -->
    <text x="50" y="660" font-size="16" font-weight="bold" fill="#0f172a">5. Atorvastatin (Lipitor) 80 mg PO QHS</text>
    <text x="70" y="685" font-size="14" fill="#334155">Sig: Take 1 tablet at bedtime. Avoid grapefruit.</text>

    <!-- Dietary & Red Flags Box -->
    <rect x="40" y="720" width="720" height="150" fill="#fef2f2" stroke="#fca5a5" stroke-width="2" rx="8"/>
    <text x="60" y="750" font-size="15" font-weight="bold" fill="#991b1b">EMERGENCY RED FLAGS &amp; DIETARY RESTRICTIONS:</text>
    <text x="60" y="775" font-size="13" fill="#7f1d1d">• Sodium Limit: Maximum 2,000 mg (2 grams) daily. Fluid limit: 2.0 Liters daily.</text>
    <text x="60" y="800" font-size="13" font-weight="bold" fill="#b91c1c">• EMERGENCY (108 / 112): Severe crushing chest pain, dyspnea at rest, syncope, or stroke signs.</text>
    <text x="60" y="825" font-size="13" fill="#7f1d1d">• Call Clinic (555-0144) for weight gain &gt; 2-3 lbs in 24 hours or bilateral ankle edema.</text>
    <text x="60" y="850" font-size="13" fill="#7f1d1d">• Follow-up visit: Dr. Elena Vance in 7 to 10 days.</text>

    <!-- Doctor Signature -->
    <line x1="500" y1="940" x2="740" y2="940" stroke="#0f172a" stroke-width="1.5"/>
    <text x="500" y="960" font-size="12" fill="#475569">Dr. Elena Vance, MD (Cardiology)</text>
    <text x="510" y="930" font-size="20" font-style="italic" fill="#1e40af" font-family="cursive">Elena Vance MD</text>
  </svg>`;

  return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svg)))}`;
}
