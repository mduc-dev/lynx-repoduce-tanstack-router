import { type ClassValue, clsx } from 'clsx'

import { twMerge } from 'tailwind-merge'

export const HIT_SLOP = {
  10: {
    top: 10,
    bottom: 10,
    left: 10,
    right: 10
  }
}
// export const graphqlClient = new GraphQLClient(
//   'https://graphql.pokeapi.co/v1beta2'
//   // 'https://graphql-pokeapi.graphcdn.app'
//   // 'https://beta.pokeapi.co/graphql/v1beta'
// )

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
