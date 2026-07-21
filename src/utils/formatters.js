export function getYear(dateString) {
  if (!dateString) return "N/A"
  return dateString.split("-")[0]
}

export function formatRating(rating) {
  if (!rating) return "N/A"
  return rating.toFixed(1)
}

export function getPosterUrl(posterPath) {
  if (!posterPath) return "/placeholder-poster.jpg"
  return `https://image.tmdb.org/t/p/w500${posterPath}`
}