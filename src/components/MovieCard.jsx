import { Link } from "react-router-dom"
import { getYear, formatRating, getPosterUrl } from "../utils/formatters"
import "./MovieCard.css"

function MovieCard({ movie, isFavorite, onToggleFavorite }) {
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <img
          src={getPosterUrl(movie.poster_path)}
          alt={movie.title}
          loading="lazy"
          className="movie-poster"
        />
      </Link>

      <button
        className={`favorite-btn ${isFavorite ? "active" : ""}`}
        onClick={() => onToggleFavorite(movie)}
      >
        ♥
      </button>

      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <div className="movie-meta">
          <span>{getYear(movie.release_date)}</span>
          <span className="movie-rating">★ {formatRating(movie.vote_average)}</span>
        </div>
      </div>
    </div>
  )
}

export default MovieCard