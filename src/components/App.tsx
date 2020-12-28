import React, { useState } from 'react'
import GlobalFonts from '../styles/fonts'

import SearchBar from './SearchBar'
import NominationList from './NominationList'
import { Movie } from './Movie'
import ResultsList from './ResultsList'
import styled from 'styled-components'

const Columns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
`

const LeftColumn = styled.div``
const RightColumn = styled.div``

export function App(): JSX.Element {
  const [movieResults, setMovieResults] = useState([])
  const [nominations, setNominations] = useState([])

  const removeNomination = (movie: Movie) => {
    setMovieResults([...movieResults, movie])
    setNominations(nominations.filter(m => movie.imdbID != m.imdbID))
  }

  const addNomination = (movie: Movie) => {
    const temp = [...nominations, movie]
    setNominations(temp)
    setMovieResults(movieResults.filter(m => movie.imdbID != m.imdbID))
  }
  return (
    <>
      <GlobalFonts />
      <SearchBar setResults={setMovieResults} />
      <Columns>
        <LeftColumn>
          <h1>Take your picks!</h1>
          <ResultsList
            movies={movieResults}
            mayAdd={nominations.length < 5}
            addNomination={addNomination}
          />
        </LeftColumn>
        <RightColumn>
          <h1>Nominees</h1>
          <NominationList
            movies={nominations}
            removeNomination={removeNomination}
          />
        </RightColumn>
      </Columns>
    </>
  )
}
