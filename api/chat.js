// api/chat.js
export default async function handler(req, res) {
  // 1. Validasi Metode
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { message } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    // 2. Validasi API Key
    if (!apiKey) {
      return res.status(500).json({ reply: "Konfigurasi API Key tidak ditemukan di server." });
    }

    // 3. Eksekusi Request ke Gemini
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ role: "user", parts: [{ text: message }] }]
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || "Gemini API Error");
    }

    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "Maaf, AI tidak memberikan respon.";
    
    // 4. Kirim Respon ke Frontend
    return res.status(200).json({ reply });

  } catch (error) {
    console.error("RUNTIME ERROR:", error.message);
    return res.status(500).json({ reply: "Server sedang sibuk. Silakan cek log Vercel." });
  }
}