import { Movie } from '../components/Movie'
import axios from 'axios'
import { OMDB_WRAPPER_URL, KEYWORDS, MOVIE_TITLE } from '../constants/utilities'

export interface OmdbQuery {
  method: string
  param: string
}

interface ApiMoviesList {
  Search: Movie[]
}

export interface OmdbResponse {
  data: (Movie | ApiMoviesList) & { Response: boolean }
}

export const callOmdb = async ({
  method,
  param,
}: OmdbQuery): Promise<Movie[]> => {
  if (!param) return []
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
  const results: OmdbResponse = await axios.get(`${OMDB_WRAPPER_URL}${query}`)
  return handleResponse(results, method)
}

export const handleResponse = (
  response: OmdbResponse,
  mode: string
): Movie[] => {
  if (!response.data.Response) return []
  console.log(response)
  switch (mode) {
    case KEYWORDS: {
      const { Search } = response.data as ApiMoviesList
      return Search
    }
    case MOVIE_TITLE: {
      const data = response.data as Movie
      return [data]
    }
  }
}
