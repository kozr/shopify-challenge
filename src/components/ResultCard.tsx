import React from 'react'
import styled from 'styled-components'
import { Movie } from './Movie'

const MovieCard = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 75%;
`
const Data = styled.div`
  flex-grow: 1;
  padding-left: 50px;
`

const StyledID = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 18px;
`

const StyledTitle = styled.div`
  font-family: 'HKGrotesk Medium';
  font-size: 25px;
`

const ResultCard = ({ Title, Year, imdbID, Poster }: Movie): JSX.Element => {
  return (
    <MovieCard>
      <img alt={Title} src={Poster} width="125px"></img>
      <Data>
        <StyledTitle>{Title}</StyledTitle>
        <StyledID>#{imdbID}</StyledID>
      </Data>
      <p>{Year}</p>
    </MovieCard>
  )
}

export default ResultCard
