import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Movie } from './MovieCard'
import { InferProps } from 'prop-types'

const MovieContainer = styled.div`
  color: white;
`

type Movies = {
  movies: Movie[]
}

// Using InferredProps just for fun
type InferredProps = InferProps<Movies>

const NominationList = ({ movies }: InferredProps): JSX.Element => {
  const [nominationsJSX, setNominationsJSX] = useState<JSX.Element[]>()
  useEffect(() => {
    const moviesJSX = movies.map(
      ({ Title, Year, imdbID, Poster }: Movie, index: number) => (
        <MovieContainer key={index}>
          <h1>Title: {Title}</h1>
          <p>Year: {Year}</p>
          <p>IMDB ID:{imdbID}</p>
          <img alt={Title} src={Poster}></img>
        </MovieContainer>
      )
    )
    setNominationsJSX(moviesJSX)
  }, [movies])

  return <>{nominationsJSX}</>
}

export default NominationList
