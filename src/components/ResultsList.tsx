/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ResultCard from './ResultCard'
import Button from '../typography/Button'
import { Movie } from '../types/movie'

const MovieContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 45vw;
  height: 225px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`

interface ResultListProps {
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
    if (movies) {
      const moviesJSX = movies.map((movie: Movie, index: number) => (
        <MovieContainer key={index}>
          <ResultCard {...movie} />
          {mayAdd && <Button onClick={() => addNomination(movie)}>+</Button>}
        </MovieContainer>
      ))
      setResultsJSX(<>{moviesJSX}</>)
    }
  }, [movies, mayAdd, addNomination])

  return <>{resultsJSX}</>
}

export default ResultsList
