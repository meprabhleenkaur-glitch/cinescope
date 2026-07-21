import { Link } from "react-router-dom"
import { getPosterUrl } from "../utils/formatters"
import "./Hero.css"

function Hero({ movie }) {
  if (!movie) return null

  return (
    <div className="hero">
      <img
        src={getPosterUrl(movie.backdrop_path || movie.poster_path)}
        alt={movie.title}
        className="hero-bg"
      />

      <div className="hero-content">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <Link to={`/movie/${movie.id}`} className="hero-btn">
          View Details
        </Link>
      </div>
    </div>
  )
}

export default Hero