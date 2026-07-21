# CineScope 🎬

CineScope is a movie discovery web app built with React. It lets you browse popular movies, search for specific titles, save your favorites, and even get an AI-powered movie suggestion based on your mood.

Built as part of my Computer Science internship project.

## Live Demo

🔗 [Live Site](#) <!-- add your deployed link here -->

## Features

- **Browse Popular Movies** — See what's trending right now, powered by TMDB
- **Search** — Debounced search so it doesn't spam the API on every keystroke
- **Infinite Scroll** — More movies load automatically as you scroll down
- **Favorites** — Save movies you like, persisted with localStorage so they're still there after a refresh
- **Movie Details** — Click any movie for full details: overview, genres, runtime, rating
- **Mood Matcher** — Tell it your mood (e.g. "I want something funny") and Gemini AI suggests a movie, which gets automatically searched on TMDB

## Tech Stack

- React (Vite)
- React Router DOM
- Plain CSS (no Tailwind / UI libraries)
- TMDB API for movie data
- Gemini API for mood-based suggestions
- localStorage for favorites persistence

## Screenshots

<!-- Add screenshots here once you have them -->
| Home | Movie Details | Favorites |
|------|---------------|-----------|
| _add image_ | _add image_ | _add image_ |

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/meprabhleenkaur-glitch/cinescope.git
cd cinescope
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add your API keys

Create a `.env` file in the root folder:

```
VITE_TMDB_API_KEY=your_tmdb_api_key_here
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

- Get a TMDB API key from [themoviedb.org](https://www.themoviedb.org/settings/api)
- Get a Gemini API key from [Google AI Studio](https://aistudio.google.com)

### 4. Run the project

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

## Project Structure

```
src/
  assets/         # images, icons
  components/     # reusable UI pieces (Navbar, MovieCard, Hero, etc.)
  pages/          # route-level pages (Home, Favorites, MovieDetails, About)
  services/       # API calls (tmdbApi.js, geminiApi.js)
  utils/          # helper functions (debounce, formatters)
  App.jsx
  main.jsx
```

## How Mood Matcher Works

1. User types a mood (e.g. "something scary")
2. That mood gets sent to Gemini with a prompt asking for just one movie title
3. The returned title gets passed straight into the existing TMDB search function
4. Results show up in the same movie grid used for regular search

## Notes

This project doesn't use Redux, TypeScript, or any UI component libraries — everything is built with plain React and CSS as part of the internship requirements.

Movie data provided by [TMDB](https://www.themoviedb.org/). This product uses the TMDB API but is not endorsed or certified by TMDB.

## Author

Prabhleen Kaur