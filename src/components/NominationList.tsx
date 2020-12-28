import Button from '../typography/Button'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Movie } from './Movie'
import NomineeCard from './NomineeCard'

const MovieContainer = styled.div`
  color: white;
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
          <Button onClick={() => removeNomination(movie)}>
            Remove Nominee
          </Button>
        </MovieContainer>
      ))
      setNominationsJSX(<>{moviesJSX}</>)
    } else {
      setNominationsJSX(<p>no nominees</p>)
    }
  }, [movies, removeNomination])

  return <>{nominationsJSX}</>
}

export default NominationList
