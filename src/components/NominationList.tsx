import Button from '../typography/Button'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Movie } from './Movie'
import NomineeCard from './NomineeCard'

const MovieContainer = styled.div`
  color: white;
`

const StyledButton = styled(Button)`
  color: white;
  margin: auto;
  display: block;
  margin-bottom: 30px;
`

interface NominationsListProps {
  movies: Movie[]
  removeNomination: (m: Movie) => void
}

const NominationList = ({
  movies,
  removeNomination,
}: NominationsListProps): JSX.Element => {
  const [nominationsJSX, setNominationsJSX] = useState<JSX.Element>()
  useEffect(() => {
    if (movies) {
      const moviesJSX = movies.map((movie: Movie, index: number) => (
        <MovieContainer key={index}>
          <NomineeCard {...movie} />
          <StyledButton onClick={() => removeNomination(movie)}>-</StyledButton>
        </MovieContainer>
      ))
      setNominationsJSX(<>{moviesJSX}</>)
    }
  }, [movies, removeNomination])

  return <>{nominationsJSX}</>
}

export default NominationList
