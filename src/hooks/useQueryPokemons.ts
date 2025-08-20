import { useSuspenseQuery } from '@tanstack/react-query'
import { graphqlClient } from '@utils/helper'
import { pokemonRequestKeys } from '@utils/query-keys.config'
import { gql } from 'graphql-request'

const GET_POKEMONS = gql`
  query samplePokeAPIquery($limit: Int = 10, $offset: Int = 0) {
    pokemon(limit: $limit, offset: $offset) {
      id
      name
      weight
      height,
    }
  }
`

type Pokemon = {
  id: number
  name: string
  height: number
  weight: number
}

export const useQueryPokemons = (limit = 10, offset = 0) => {
  const { data, error } = useSuspenseQuery({
    queryKey: pokemonRequestKeys.all(),
    queryFn: () =>
      graphqlClient.request<{ pokemon: Pokemon[] }>(GET_POKEMONS, {
        limit,
        offset
      })
  })

  return { data, error }
}
