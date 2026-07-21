import { Link } from "react-router-dom"
import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        Cine<span>Scope</span>
      </div>

      <p className="footer-text">
        Built as part of a React internship project. Movie data provided by TMDB.
      </p>

      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/about">About</Link>
      </div>

      <p className="footer-copyright">
        © 2026 CineScope. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer