    import express from "express";
    import cors from "cors";
    import dotenv from "dotenv";

    dotenv.config();

    console.log("API KEY TERBACA:", process.env.GEMINI_API_KEY); 

    const app = express();
    app.use(cors());
    app.use(express.json());

app.post("/api/chat", async (req, res) => {
  const { message } = req.body;

  try {
    const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
        contents: [
            {
            role: "user",
            parts: [{ text: message }]
            }
        ]
        }),
    }
    );

    const data = await response.json();

    console.log("STATUS:", response.status);
    console.log("DATA:", JSON.stringify(data, null, 2));

    if (!response.ok) {
    console.log("FULL ERROR:", JSON.stringify(data, null, 2));
    return res.status(response.status).json({
        fullError: data
    });
    }

    const reply =
      data.candidates?.[0]?.content?.parts
        ?.map(p => p.text)
        .join("") || "Kosong dari Gemini";

    res.json({ reply });

  } catch (error) {
    console.error("SERVER ERROR:", error);
    res.status(500).json({ reply: "Server error" });
  }
});

    app.listen(3000, () => {
    console.log("Server jalan di http://localhost:3000");
    });

    
