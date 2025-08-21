import PokeBall from '@assets/poke-ball.png?inline'
import { useQueryPokemons } from '@hooks/useQueryPokemons'
import { useNavigate } from 'react-router'
import './index.scss'
export default function Pokemons() {
  const nav = useNavigate()
  const { data } = useQueryPokemons()

  return (
    <view className='page'>
      <view className='flex-row flex justify-center items-center gap-2'>
        <image
          src={PokeBall}
          accessibility-element={true}
          accessibility-label='Poke-Ball'
          accessibility-traits='button'
          className='size-14'
        />
        <text
          className='text-3xl text-center'
          style={{ fontFamily: 'Poppins' }}
        >
          Pokedex
        </text>
      </view>
      <view className='h-1' />
      <list
        className='list-wrapper'
        scroll-orientation='vertical'
        span-count={3}
        list-type='flow'
        preload-buffer-count={10}
        experimental-max-fling-distance-ratio='auto'
      >
        {data.region.map((item, index) => {
          return (
            <list-item
              item-key={`list-item-${index}`}
              key={`list-item-${item.id}`}
              estimated-main-axis-size-px={200} // add estimated size
            >
              <PokemonCard
                id={item.id}
                name={item.name}
                // image={item.artwork}
                onPress={() =>
                  nav(`/pokemons/${item.id}`, {
                    state: { data: item.pokedexes, regionTitle: item.name }
                  })
                }
                types={['fire', 'bug']}
              />
            </list-item>
          )
        })}
      </list>
    </view>
  )
}
const typeColors: Record<string, string> = {
  grass: '#E6F4EA',
  fire: '#FDECEA',
  water: '#E8F1FD',
  bug: '#F5F6E6',
  poison: '#F3E6F6',
  normal: '#F5F5F5',
  electric: '#FFF9E6',
  ground: '#F6EFE6',
  fairy: '#FDEEF7',
  fighting: '#FBEAE6',
  psychic: '#FDE6F3',
  rock: '#F2EEE6',
  ghost: '#EDE6F6',
  ice: '#E6F7FD',
  dragon: '#E6ECFD'
}

interface PokemonCardProps {
  id: number
  name: string
  image?: string
  types: string[]
  onPress: () => void
}

const PokemonCard = ({ id, name, image, types, onPress }: PokemonCardProps) => {
  const bgColor = typeColors[types[0]] ?? '#FFFFFF'
  return (
    <view
      bindtap={onPress}
      className='p-3 m-2.5 rounded-xl shadow-md flex-col justify-between items-center'
      style={{ backgroundColor: bgColor }}
    >
      {/* ID */}
      <text className='text-xs text-gray-500 mb-1'>
        #{id.toString().padStart(3, '0')}
      </text>

      {/* Name */}
      <text
        className='text-base capitalize text-gray-900 mb-1'
        style={{ fontFamily: 'Poppins' }}
      >
        {name}
      </text>

      {/* Types */}
      <text className='text-xs text-gray-600 mb-2'>{types.join(', ')}</text>

      {/* Image */}
      {/*<image src={image} className='size-28 object-contain' />*/}
    </view>
  )
}
