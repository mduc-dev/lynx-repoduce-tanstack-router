export const pokemonRequestKeys = {
  all: () => ['pokemon-requests'] as const,

  list: () => [...pokemonRequestKeys.all(), 'paginate'] as const,

  detail: (id: string) => [...pokemonRequestKeys.all(), 'detail', id] as const,

  find: (id: string) => [...pokemonRequestKeys.all(), 'find', id] as const
}
