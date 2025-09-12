import { createRootRoute } from '@tanstack/react-router'
import Pokemons from 'pages/Pokemons'
import { Suspense } from 'react'

export const Route = createRootRoute({
  component: () => {
    return (
      <Suspense fallback={<text>Loading...</text>}>
        <Pokemons />
      </Suspense>
    )
  }
})
