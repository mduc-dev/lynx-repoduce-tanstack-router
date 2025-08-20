import { type ClassValue, clsx } from 'clsx'
import { GraphQLClient } from 'graphql-request'
import { twMerge } from 'tailwind-merge'

export const graphqlClient = new GraphQLClient(
  // 'https://graphql.pokeapi.co/v1beta2'
  'https://graphql-pokeapi.graphcdn.app'
)

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
