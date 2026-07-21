import { useState, useRef } from "react"
import { debounce } from "../utils/debounce"
import "./SearchBar.css"

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("")

  const debouncedSearch = useRef(debounce((value) => {
    onSearch(value)
  }, 500)).current

  function handleChange(e) {
    const value = e.target.value
    setQuery(value)
    debouncedSearch(value)
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={handleChange}
      />
    </div>
  )
}

export default SearchBar