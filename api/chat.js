import { readFileSync } from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { message } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ reply: "Konfigurasi API Key tidak ditemukan." });
    }

    const contextPath = path.join(process.cwd(), 'src', 'context', 'context.json');
    const contextData = readFileSync(contextPath, 'utf8');

    // 2. Konstruksi Prompt dengan Injeksi Konteks
    const fullPrompt = `Konteks Dasar: ${contextData}\n\nInstruksi: Jawab pertanyaan pengguna berdasarkan konteks di atas secara akurat.\n\nUser: ${message}`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ 
            role: "user", 
            parts: [{ text: fullPrompt }] 
          }],
          generationConfig: {
            temperature: 0.7, // Menjaga presisi jawaban
            maxOutputTokens: 800
          }
        }),
      }
    );

    const data = await response.json();
    if (!response.ok) throw new Error(data.error?.message || "Gemini API Error");

    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "Maaf, AI tidak memberikan respon.";
    return res.status(200).json({ reply });

  } catch (error) {
    console.error("RUNTIME ERROR:", error.message);
    return res.status(500).json({ reply: "Terjadi kesalahan saat membaca konteks atau menghubungi API." });
  }
}