import { createFileRoute } from '@tanstack/react-router'
import Pokemons from 'pages/Pokemons'

export const Route = createFileRoute('/')({
  component: Pokemons
})


