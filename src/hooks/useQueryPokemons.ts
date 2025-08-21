import {
  type UseSuspenseQueryResult,
  useSuspenseQuery
} from '@tanstack/react-query'
import { pokemonRequestKeys } from '@utils/query-keys.config'

const GET_POKEMONS = `
  query GetRegionsWithPokemons {
    region {
      id
      name
      pokedexes {
        id
        name
        pokemondexnumbers {
          pokemonspecy {
            id
            name
            pokemons {
              pokemonforms {
                pokemonformsprites {
                  sprites
                }
              }
            }
          }
        }
      }
    }
  }
`

export interface Data {
  region: Region[]
}

export interface Region {
  id: number
  name: string
  pokedexes: Pokedex[]
}

export interface Pokedex {
  id: number
  name: string
  pokemondexnumbers: Pokemondexnumber[]
}

export interface Pokemondexnumber {
  pokemonspecy: Pokemonspecy
}

export interface Pokemonspecy {
  id: number
  name: string
}

async function fetchPokemons(): Promise<Data> {
  const res = await lynx.fetch('https://graphql.pokeapi.co/v1beta2', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: GET_POKEMONS,
      variables: {},
      operationName: 'GetRegionsWithPokemons'
    })
  })

  if (!res.ok) {
    throw new Error(`GraphQL error: ${res.status}`)
  }

  const { data } = await res.json()
  return data as Data
}
export const useQueryPokemons = (
  limit = 10,
  offset = 0
): UseSuspenseQueryResult<Data, Error> => {
  return useSuspenseQuery({
    queryKey: pokemonRequestKeys.all(),
    queryFn: fetchPokemons
  })
}
