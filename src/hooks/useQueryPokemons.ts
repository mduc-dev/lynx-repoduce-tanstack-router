import { useSuspenseQuery } from '@tanstack/react-query'
import { graphqlClient } from '@utils/helper'
import { pokemonRequestKeys } from '@utils/query-keys.config'
import { gql } from 'graphql-request'

const GET_POKEMONS = gql`
  query GET_POKEMONS($limit: Int = 10, $offset: Int = 0) {
     pokemons(limit: $limit, offset: $offset) {
      results {
        id
        name
        image
      }
    }
  }

`

export interface Data {
  pokemons: Pokemons
}

export interface Pokemons {
  results: Result[]
}

export interface Result {
  id: number
  name: string
  image: string
}

export const useQueryPokemons = (limit = 10, offset = 0) => {
  const { data, error } = useSuspenseQuery({
    queryKey: pokemonRequestKeys.all(),
    queryFn: () =>
      graphqlClient.request<Data>(GET_POKEMONS, {
        limit,
        offset
      })
  })

  return { data, error }
}
