import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { getMovieDetails } from "../services/tmdbApi"
import { getYear, formatRating, getPosterUrl } from "../utils/formatters"
import Loader from "../components/Loader"
import "./MovieDetails.css"

function MovieDetails() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadMovie() {
      setLoading(true)
      try {
        const data = await getMovieDetails(id)
        setMovie(data)
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }

    loadMovie()
  }, [id])

  if (loading) return <Loader />
  if (!movie) return <p>Movie not found.</p>

  return (
    <div className="movie-details">
      <img
        src={getPosterUrl(movie.poster_path)}
        alt={movie.title}
        className="details-poster"
      />

      <div className="details-info">
        <h1>{movie.title}</h1>
        <div className="details-meta">
          <span>{getYear(movie.release_date)}</span>
          <span>★ {formatRating(movie.vote_average)}</span>
          <span>{movie.runtime} min</span>
        </div>
        <p className="details-overview">{movie.overview}</p>
        <div className="details-genres">
          {movie.genres.map((genre) => (
            <span key={genre.id} className="genre-tag">
              {genre.name}
            </span>
          ))}
        </div>
        <Link to="/" className="back-btn">
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}

export default MovieDetails