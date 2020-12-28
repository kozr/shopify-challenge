/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ResultCard from './ResultCard'
import DisabledButton from '../typography/DisabledButton'
import Button from '../typography/Button'
import { Movie } from './Movie'

const MovieContainer = styled.div`
  color: white;
`

type ResultListProps = {
  movies: Movie[]
  mayAdd: boolean
  addNomination: (m: Movie) => void
}
const ResultsList = ({
  movies,
  mayAdd,
  addNomination,
}: ResultListProps): JSX.Element => {
  const [resultsJSX, setResultsJSX] = useState<JSX.Element>()
  useEffect(() => {
    console.log()
    if (movies) {
      const moviesJSX = movies.map((movie: Movie, index: number) => (
        <MovieContainer key={index}>
          <ResultCard {...movie} />
          {mayAdd ? (
            <Button onClick={() => addNomination(movie)}>Nominate</Button>
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
  }, [movies, mayAdd, addNomination])

  return <>{resultsJSX}</>
}

export default ResultsList
