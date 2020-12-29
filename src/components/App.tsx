import React, { useEffect, useState } from 'react'
import GlobalFonts from '../styles/fonts'

import Search from './Search'
import NominationList from './NominationList'
import { Movie } from './Movie'
import ResultsList from './ResultsList'
import styled from 'styled-components'
import { getFromStorage, saveToStorage } from '../utilities/storage'

import H1 from '../typography/H1'

const Columns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
  margin-top: 5vh;
  margin-bottom: 5vh;
`

const LeftColumn = styled.div`
  margin-left: 10%;
  margin-right: 5%;
  padding: 2vh 2% 2vh 2%;
  min-width: 45vw;
`
const RightColumn = styled.div`
  width: 20vw;
  background-color: #535861;
  border-radius: 13px;
  padding: 2vh 2% 2vh 2%;
  margin-right: 5%;
`

export function App(): JSX.Element {
  const [omdbResults, setOmdbResults] = useState([])
  const [movieResults, setMovieResults] = useState([])
  const [nominations, setNominations] = useState(
    JSON.parse(getFromStorage('nominations')) ?? []
  )

  const removeNomination = (movie: Movie) => {
    const newMovieResults = [...movieResults, movie]
    setOmdbResults(newMovieResults)
    const newNominees = nominations.filter(
      (m: Movie) => movie.imdbID != m.imdbID
    )
    setNominations(newNominees)
    saveToStorage('nominations', JSON.stringify(newNominees))
  }

  const addNomination = (movie: Movie) => {
    const newNominees = [...nominations, movie]
    setNominations(newNominees)
    saveToStorage('nominations', JSON.stringify(newNominees))
    setOmdbResults(movieResults.filter(m => movie.imdbID != m.imdbID))
  }

  // Updates on every search to remove movies that were already nominated
  useEffect(() => {
    const nomineesImdbIDs = nominations.map((m: Movie) => m.imdbID)
    const removeDuplicates = () => {
      const newMovieResults = omdbResults.filter(
        (m: Movie) => !nomineesImdbIDs.includes(m.imdbID)
      )
      setMovieResults(newMovieResults)
    }
    if (omdbResults) removeDuplicates()
  }, [nominations, omdbResults])

  return (
    <>
      <GlobalFonts />
      <Columns>
        <LeftColumn>
          <H1>Search by...</H1>
          <Search setResults={setOmdbResults} />
          <ResultsList
            movies={movieResults}
            mayAdd={nominations.length < 5}
            addNomination={addNomination}
          />
        </LeftColumn>
        <RightColumn>
          <H1 textAlign="center">Nominees</H1>
          <NominationList
            movies={nominations}
            removeNomination={removeNomination}
          />
        </RightColumn>
      </Columns>
    </>
  )
}
