/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import MovieCard, { Movie } from './ResultCard'
import DisabledButton from '../typography/DisabledButton'
import Button from '../typography/Button'

const MovieContainer = styled.div`
  color: white;
`

type ResultListProps = {
  movies: Movie[]
  mayAdd: boolean
  addNominations: (m: Movie) => void
}
const ResultsList = ({
  movies,
  mayAdd,
  addNominations,
}: ResultListProps): JSX.Element => {
  const [resultsJSX, setResultsJSX] = useState<JSX.Element>()
  useEffect(() => {
    console.log()
    if (movies) {
      const moviesJSX = movies.map((movie: Movie, index: number) => (
        <MovieContainer key={index}>
          <MovieCard {...movie} />
          {mayAdd ? (
            <Button onClick={() => addNominations(movie)}>Nominate</Button>
          ) : (
            <DisabledButton>Nominate</DisabledButton>
          )}
        </MovieContainer>
      ))
      setResultsJSX(<>{moviesJSX}</>)
    } else {
      const errorJSX = <h1>Results not found, please be more precise</h1>
      setResultsJSX(errorJSX)
    }
  }, [movies, mayAdd, addNominations])

  return <>{resultsJSX}</>
}

export default ResultsList
