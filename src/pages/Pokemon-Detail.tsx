import { useParams } from 'react-router'

export default function PokemonDetail() {
  const { id } = useParams()
  return (
    <view>
      <text>PokemonDetail ${id}</text>
    </view>
  )
}
