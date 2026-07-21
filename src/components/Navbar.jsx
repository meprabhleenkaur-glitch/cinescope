import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Cine<span>Scope</span>
      </Link>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  )
}

export default Navbar