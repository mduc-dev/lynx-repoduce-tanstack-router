import { useQueryPokemons } from '@hooks/useQueryPokemons'
import { useNavigate } from 'react-router'

export default function Pokemons() {
  const nav = useNavigate()
  const { data } = useQueryPokemons()
  return (
    <view className='flex flex-col justify-center items-center min-h-screen text-center'>
      <list
        scroll-orientation='vertical'
        list-type='single'
        span-count={1}
        style={{
          width: '100%',
          height: '100vh',
          listMainAxisGap: '5px',
          padding: '10px'
        }}
        preload-buffer-count={10}
        experimental-max-fling-distance-ratio='auto'
      />
      {data.pokemon.map((item, index) => {
        return (
          <list-item
            item-key={`list-item-${index}`}
            key={`list-item-${item.id}`}
            estimated-main-axis-size-px={122} // add estimated size
          >
            <text>{item.name}</text>
          </list-item>
        )
      })}
    </view>
  )
}
