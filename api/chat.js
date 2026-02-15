import fs from "fs";
import path from "path";

const rateLimit = new Map();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress || "unknown";

  // Rate limit
  const now = Date.now();
  const windowMs = 60 * 1000;
  const maxRequests = 10;

  if (!rateLimit.has(ip)) rateLimit.set(ip, []);
  const timestamps = rateLimit.get(ip).filter(t => now - t < windowMs);
  if (timestamps.length >= maxRequests) {
    return res.status(429).json({ error: "Terlalu banyak request. Coba lagi nanti." });
  }
  timestamps.push(now);
  rateLimit.set(ip, timestamps);

  try {
    const { message } = req.body;
    if (!message || message.length > 500) {
      return res.status(400).json({ error: "Input tidak valid atau terlalu panjang" });
    }

    // Baca context JSON
    const contextPath = path.resolve("./src/context/context.json");
    const contextRaw = fs.readFileSync(contextPath, "utf-8");
    const context = JSON.parse(contextRaw);

    // Gabungkan context + user message ke prompt
    const prompt = `Context: ${JSON.stringify(context)}\nUser: ${message}\nAI:`;

    // Panggil Gemini
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${process.env.GEMINI_API_KEY}`;

    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig: { maxOutputTokens: 300, temperature: 0.7 }
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("FULL ERROR GEMINI:", JSON.stringify(data, null, 2));
      return res.status(response.status).json({ error: data.error?.message || "  error" });
    }

    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Maaf, terjadi kesalahan.";
    return res.status(200).json({ reply });

  } catch (error) {
    console.error("SERVER ERROR:", error);
    return res.status(500).json({ error: "Server error" });
  }
}