const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=${GEMINI_API_KEY}`

export async function getMovieSuggestionFromMood(mood) {
  const prompt = `Suggest one movie that matches this mood: "${mood}". 
Reply with ONLY the movie title, nothing else. No punctuation, no explanation.`

  const response = await fetch(GEMINI_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [{ text: prompt }],
        },
      ],
    }),
  })

  if (!response.ok) {
    throw new Error("Failed to get suggestion from Gemini")
  }

  const data = await response.json()

  const movieTitle = data.candidates[0].content.parts[0].text

  return movieTitle.trim().replace(/["]/g, "")
}