import { useState } from "react"
import { getMovieSuggestionFromMood } from "../services/geminiApi"
import Loader from "./Loader"
import "./MoodMatcher.css"

function MoodMatcher({ onSuggestion }) {
  const [mood, setMood] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()
    if (!mood.trim()) return

    setLoading(true)
    setError("")

    try {
      const title = await getMovieSuggestionFromMood(mood)
      onSuggestion(title)
    } catch (err) {
      console.log(err)
      setError("Couldn't get a suggestion right now, try again.")
    }

    setLoading(false)
  }

  return (
    <div className="mood-matcher">
      <p className="mood-label">Not sure what to watch? Tell me your mood.</p>

      <form onSubmit={handleSubmit} className="mood-form">
        <input
          type="text"
          placeholder="e.g. I want something funny"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
        />
        <button type="submit">Find Movie</button>
      </form>

      {loading && <Loader />}
      {error && <p className="mood-error">{error}</p>}
    </div>
  )
}

export default MoodMatcher