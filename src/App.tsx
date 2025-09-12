import './App.css'

import {
  createMemoryHistory,
  createRouter,
  RouterProvider
} from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

const memoryHistory = createMemoryHistory({
  initialEntries: ['/']
})

const router = createRouter({
  routeTree,
  history: memoryHistory,
  isServer: false
})

export function App() {
  return <RouterProvider router={router} />
}
