import PokemonDetail from 'pages/Pokemon-Detail'
import Pokemons from 'pages/Pokemons'
import './App.css'

import { Suspense } from 'react'
import { MemoryRouter, Route, Routes } from 'react-router'

export function App() {
  return (
    <MemoryRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Suspense fallback={<text>Loading...</text>}>
              <Pokemons />
            </Suspense>
          }
        />
        <Route path='/pokemons/:id' element={<PokemonDetail />} />
      </Routes>
    </MemoryRouter>
  )
}
