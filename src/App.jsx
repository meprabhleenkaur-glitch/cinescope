import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
import MovieDetails from "./pages/MovieDetails"
import About from "./pages/About"
import "./App.css"

function App() {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App