import React from 'react'
import styled from 'styled-components'
import GlobalFonts from '../styles/fonts'

import MovieCard, { Movie } from './MovieCard'
import Input from '../typography/Input'
import NominationList from './NominationList'

export function App(): JSX.Element {
  const Background = styled.div`
    font-family: 'HKGrotesk Light';
    height: 100%;
    background-color: #3f4349;
    height: 100vh;
    width: 100vw;
  `

  const dummyMovie: Movie = {
    Title: 'string',
    Year: 'string',
    imdbID: 'string',
    Type: 'string',
    Poster: 'string',
  }

  const dummyMovies: Movie[] = [dummyMovie, dummyMovie]

  return (
    <Background>
      <GlobalFonts />
      <Input width="500px" height="50px" fontSize="23px"></Input>
      <h1>Hi</h1>
      <MovieCard {...dummyMovie} />
      <NominationList movies={dummyMovies} />
    </Background>
  )
}
