import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Movie } from './ResultCard'

const MovieContainer = styled.div`
  color: white;
`

interface NominationsListProps {
  movies: Movie[]
  removeNominations: (m: Movie) => void
}

const NominationList = ({ movies }: NominationsListProps): JSX.Element => {
  const [nominationsJSX, setNominationsJSX] = useState<JSX.Element>()
  useEffect(() => {
    if (movies) {
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
      setNominationsJSX(<>{moviesJSX}</>)
    } else {
      setNominationsJSX(<p>no nominees</p>)
    }
  }, [movies])

  return <>{nominationsJSX}</>
}

export default NominationList
