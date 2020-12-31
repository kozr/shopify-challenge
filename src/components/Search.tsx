import React, { useState } from 'react'
import Input from '../typography/Input'
import Radio from '../typography/Radio'
import Label from '../typography/Label'
import H1 from '../typography/H1'
import { KEYWORDS, MOVIE_TITLE } from '../constants/utilities'
import { callOmdb, OmdbQuery } from '../utilities/omdb'
import { InferProps } from 'prop-types'
import { Movie } from '../types/movie'

type ReactHook = {
  setResults: (movies: Movie[]) => void
}

// Trying out InferProps because it's interesting, although not nessasary
type InferredProp = InferProps<ReactHook>

const SearchBar = ({ setResults }: InferredProp): JSX.Element => {
  const [mode, setMode] = useState(KEYWORDS)
  const [input, setInput] = useState('')
  const [alert, setAlert] = useState('')

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
        param: input.trim(),
      }
      const queryResults = await callOmdb(query)
      setResults(queryResults)
      if (!queryResults || queryResults.length == 0) {
        setAlert('Please be more precise!')
      } else setAlert('')
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
          id={KEYWORDS}
          value={KEYWORDS}
          name={KEYWORDS}
          checked={mode === KEYWORDS}
          onChange={setSearchMode}
        />
        <Label for={KEYWORDS} paddingLeft="7%" paddingRight="7%">
          {KEYWORDS}
        </Label>
        <Radio
          id={MOVIE_TITLE}
          value={MOVIE_TITLE}
          name={MOVIE_TITLE}
          checked={mode === MOVIE_TITLE}
          onChange={setSearchMode}
        />
        <Label for={MOVIE_TITLE} paddingLeft="7%" paddingRight="7%">
          {MOVIE_TITLE}
        </Label>
      </div>
      <Input
        width="75%"
        height="50px"
        fontSize="23px"
        onChange={handleInput}
        onKeyUp={handleKeyup}
      ></Input>
      <H1>{alert}</H1>
    </>
  )
}

export default SearchBar
