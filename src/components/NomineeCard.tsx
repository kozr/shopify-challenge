import React from 'react'
import styled from 'styled-components'
import { Movie } from '../types/movie'

const MovieCard = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 75%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`
const Data = styled.div`
  flex-grow: 1;
  text-align: center;
`

const StyledID = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 18px;
`

const StyledTitle = styled.div`
  font-family: 'HKGrotesk Medium';
  font-size: 25px;
`

const NomineeCard = ({ Title, Year, imdbID, Poster }: Movie): JSX.Element => {
  return (
    <MovieCard>
      <img alt={Title} src={Poster} width="100%"></img>
      <Data>
        <StyledTitle>{Title}</StyledTitle>
        <StyledID>#{imdbID}</StyledID>
        <p>{Year}</p>
      </Data>
    </MovieCard>
  )
}

export default NomineeCard
