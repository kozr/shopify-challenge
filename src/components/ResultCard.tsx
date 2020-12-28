import React from 'react'
import styled from 'styled-components'
import { Movie } from './Movie'

const MovieContainer = styled.div`
  color: white;
`

const MovieCard = ({ Title, Year, imdbID, Poster }: Movie): JSX.Element => {
  return (
    <MovieContainer>
      <h1>Title: {Title}</h1>
      <p>Year: {Year}</p>
      <p>IMDB ID:{imdbID}</p>
      <img alt={Title} src={Poster}></img>
    </MovieContainer>
  )
}

export default MovieCard
