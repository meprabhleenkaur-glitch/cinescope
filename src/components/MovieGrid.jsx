import MovieCard from "./MovieCard"
import "./MovieGrid.css"

function MovieGrid({ movies, favorites, onToggleFavorite }) {
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          isFavorite={favorites.some((fav) => fav.id === movie.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  )
}

export default MovieGrid