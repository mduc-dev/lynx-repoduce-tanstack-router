import { createFileRoute } from '@tanstack/react-router'
import PokemonDetail from 'pages/Pokemon-Detail'

export const Route = createFileRoute('/pokemon/$id')({
  component: PokemonDetail
})

// function RouteComponent() {
//   return (
//     <view>
//       <text>Hello "/pokemon/$id"!</text>
//     </view>
//   )
// }
