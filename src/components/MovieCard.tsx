import React from 'react'

export interface MovieDetails {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

const MovieCard = ({
  Title,
  Year,
  imdbID,
  Poster,
}: MovieDetails): JSX.Element => {
  return (
    <>
      <h1>Title: {Title}</h1>
      <p>Year: {Year}</p>
      <p>IMDB ID:{imdbID}</p>
      <img src={Poster}></img>
    </>
  )
}

export default MovieCard
