import React, { useState } from 'react'
import Input from '../typography/Input'
import Radio from '../typography/Radio'
import { KEYWORDS, MOVIE_TITLE } from '../constants/utilities'
import { callOmdb, OmdbQuery, OmdbResponse } from '../utilities/omdb'
import { InferProps } from 'prop-types'
import { Movie } from './ResultCard'

type hook = {
  setResults: React.Dispatch<React.SetStateAction<Movie[]>>
}

// Using InferredProps because it's interesting
type InferredProps = InferProps<hook>

const SearchBar = ({ setResults }: InferredProps): JSX.Element => {
  const [mode, setMode] = useState(KEYWORDS)
  const [input, setInput] = useState('')

  const handleKeyup = ({ key }: KeyboardEvent) => {
    switch (key) {
      case 'Enter':
        handleMessage()
        break
    }
  }

  const handleMessage = async () => {
    try {
      const query: OmdbQuery = {
        method: mode,
        param: input,
      }
      const queryResults = await callOmdb(query)
      setResults(queryResults)
    } catch (e) {
      console.warn(e)
    }
  }

  const handleInput = ({
    target: { value },
  }: {
    target: { value: string }
  }) => {
    setInput(value)
  }

  const setSearchMode = ({
    target: { value },
  }: {
    target: { value: string }
  }) => {
    setMode(value)
  }

  return (
    <>
      <div>
        <Radio
          value={KEYWORDS}
          name={KEYWORDS}
          checked={mode === KEYWORDS}
          onChange={setSearchMode}
        />
        {KEYWORDS}
        <Radio
          value={MOVIE_TITLE}
          name={MOVIE_TITLE}
          checked={mode === MOVIE_TITLE}
          onChange={setSearchMode}
        />
        {MOVIE_TITLE}
      </div>
      <Input
        width="500px"
        height="50px"
        fontSize="23px"
        onChange={handleInput}
        onKeyUp={handleKeyup}
      ></Input>
    </>
  )
}

export default SearchBar
