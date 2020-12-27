import React from 'react'
import GlobalFonts from '@styles/fonts'

import MovieCard, { MovieDetails } from './MovieCard'

export function App() {
  const dummyMovie: MovieDetails = {
    Title: 'string',
    Year: 'string',
    imdbID: 'string',
    Type: 'string',
    Poster: 'string',
  }
  return (
    <>
      <GlobalFonts />
      <h1>Hi</h1>
      <MovieCard {...dummyMovie} />
    </>
  )
}
