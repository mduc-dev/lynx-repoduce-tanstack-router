import PokemonDetail from 'pages/Pokemon-Detail'
import Pokemons from 'pages/Pokemons'
import './App.css'

import {
  createMemoryHistory,
  createRouter,
  RouterProvider
} from '@tanstack/react-router'
// import { Suspense } from 'react'
// import { MemoryRouter, Route, Routes } from 'react-router'
import { routeTree } from './routeTree.gen'

const memoryHistory = createMemoryHistory({
  initialEntries: ['/']
})

const router = createRouter({ routeTree, history: memoryHistory })
export function App() {
  return (
    // <MemoryRouter>
    //   <Routes>
    //     <Route
    //       path='/'
    //       element={
    //         <Suspense fallback={<text>Loading...</text>}>
    //           <Pokemons />
    //         </Suspense>
    //       }
    //     />
    //     <Route path='/pokemons/:id' element={<PokemonDetail />} />
    //   </Routes>
    // </MemoryRouter>
    <RouterProvider router={router} />
  )
}
