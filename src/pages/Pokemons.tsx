import { useQueryPokemons } from '@hooks/useQueryPokemons'
import { useNavigate } from 'react-router'
import './index.scss'
export default function Pokemons() {
  const nav = useNavigate()
  const { data } = useQueryPokemons()
  return (
    <view className='container'>
      <list
        className='list-wrapper'
        scroll-orientation='vertical'
        list-type='single'
        span-count={1}
        preload-buffer-count={10}
        experimental-max-fling-distance-ratio='auto'
      >
        {data.pokemons.results.map((item, index) => {
          return (
            <list-item
              item-key={`list-item-${index}`}
              key={`list-item-${item.id}`}
              estimated-main-axis-size-px={122} // add estimated size
            >
              <view className='pokemon-card'>
                <view className='pokemon-container'>
                  <view className='pokemon-badge'>
                    <view className='pokemon-spacer' />
                    <text className='text-cyan-500'>{item.name}</text>
                  </view>
                </view>
              </view>
            </list-item>
          )
        })}
      </list>
    </view>
  )
}
