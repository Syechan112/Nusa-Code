const rateLimit = new Map();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const ip =
    req.headers["x-forwarded-for"] ||
    req.socket.remoteAddress ||
    "unknown";

  const now = Date.now();
  const windowMs = 60 * 1000; // 1 menit
  const maxRequests = 10;

  if (!rateLimit.has(ip)) {
    rateLimit.set(ip, []);
  }

  const timestamps = rateLimit.get(ip).filter(t => now - t < windowMs);

  if (timestamps.length >= maxRequests) {
    return res.status(429).json({ error: "Terlalu banyak request. Coba lagi nanti." });
  }

  timestamps.push(now);
  rateLimit.set(ip, timestamps);

  try {
    const { message } = req.body;

    if (!message || message.length > 500) {
      return res.status(400).json({ error: "Input tidak valid" });
    }

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": process.env.GEMINI_API_KEY,
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: message }] }],
          generationConfig: {
            maxOutputTokens: 300,
            temperature: 0.7,
          },
        }),
      }
    );

    const data = await response.json();

    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Maaf, terjadi kesalahan.";

    return res.status(200).json({ reply });

  } catch (error) {
    return res.status(500).json({ error: "Server error" });
  }
}