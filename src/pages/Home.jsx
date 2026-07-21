import { useState, useEffect, useRef, useCallback } from "react"
import { getPopularMovies, searchMovies } from "../services/tmdbApi"
import MovieGrid from "../components/MovieGrid"
import SearchBar from "../components/SearchBar"
import Loader from "../components/Loader"
import Hero from "../components/Hero"
import "./Home.css"
import MoodMatcher from "../components/MoodMatcher"

function Home() {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState("")
  const [favorites, setFavorites] = useState([])

  const observerRef = useRef()

  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites")
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites))
    }
  }, [])

  useEffect(() => {
    async function loadMovies() {
      setLoading(true)

      try {
        const data = query
          ? await searchMovies(query, page)
          : await getPopularMovies(page)

        if (page === 1) {
          setMovies(data.results)
        } else {
          setMovies((prev) => [...prev, ...data.results])
        }
      } catch (error) {
        console.log(error)
      }

      setLoading(false)
    }

    loadMovies()
  }, [page, query])

  function handleSearch(searchTerm) {
    setQuery(searchTerm)
    setPage(1)
  }

  function toggleFavorite(movie) {
    setFavorites((prev) => {
      const exists = prev.some((fav) => fav.id === movie.id)
      const updated = exists
        ? prev.filter((fav) => fav.id !== movie.id)
        : [...prev, movie]

      localStorage.setItem("favorites", JSON.stringify(updated))
      return updated
    })
  }

  const lastMovieRef = useCallback(
    (node) => {
      if (loading) return
      if (observerRef.current) observerRef.current.disconnect()

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1)
        }
      })

      if (node) observerRef.current.observe(node)
    },
    [loading]
  )

  return (
    <div className="home">
      {!query && <Hero movie={movies[0]} />}

      <SearchBar onSearch={handleSearch} />
      <MoodMatcher onSuggestion={handleSearch} />

      <MovieGrid
        movies={movies}
        favorites={favorites}
        onToggleFavorite={toggleFavorite}
      />

      <div ref={lastMovieRef} className="scroll-sentinel"></div>

      {loading && <Loader />}
    </div>
  )
  
}

export default Home