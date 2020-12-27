import axios from 'axios'
import { OMDB_WRAPPER_URL, KEYWORDS, MOVIE_TITLE } from '@constants/utilities'

export interface OmdbQuery {
  method: string
  param: string
}

const callOmdb = ({ method, param }: OmdbQuery) => {
  let query
  switch (method) {
    case KEYWORDS:
      query = `?s=${param}`
      break
    case MOVIE_TITLE:
      query = `?t=${param}`
      break
    default:
      throw new Error(`Cannot call OMDB with '${method}'`)
  }
  return axios.get(`${OMDB_WRAPPER_URL}${query}`)
}
