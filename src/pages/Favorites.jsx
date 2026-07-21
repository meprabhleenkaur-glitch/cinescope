import { useState, useEffect } from "react"
import MovieGrid from "../components/MovieGrid"

function Favorites() {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const saved = localStorage.getItem("favorites")
    if (saved) {
      setFavorites(JSON.parse(saved))
    }
  }, [])

  function toggleFavorite(movie) {
    const updated = favorites.filter((fav) => fav.id !== movie.id)
    setFavorites(updated)
    localStorage.setItem("favorites", JSON.stringify(updated))
  }

  return (
    <div className="favorites-page">
      <h1>My Favorites</h1>

      {favorites.length === 0 ? (
        <p>No favorites yet. Go add some movies you love!</p>
      ) : (
        <MovieGrid
          movies={favorites}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />
      )}
    </div>
  )
}

export default Favorites