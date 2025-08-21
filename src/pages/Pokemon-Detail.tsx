import { HIT_SLOP } from '@utils/helper'
import { useLocation, useNavigate } from 'react-router'
import './index.scss'
import BackButton from 'assets/back-button.png?inline'

function PokemonCard({ name, imageUrl }) {
  return (
    <view className='card m-1 inline-block'>
      <view className='card-inner'>
        <view className='holo-effect' />
        <view className='card-content'>
          <image src={imageUrl} />
          <text className='text-xl font-bold mt-2'>{name}</text>
        </view>
      </view>
    </view>
  )
}

export default function PokemonDetail() {
  const nav = useNavigate()
  const location = useLocation()
  const { data, regionTitle } = location.state

  const pokemonList =
    data.flatMap((p) =>
      p.pokemondexnumbers.map((n) => ({
        name: n.pokemonspecy.name,
        imageUrl:
          n.pokemonspecy.pokemons[0]?.pokemonforms[0]?.pokemonformsprites[0]
            ?.sprites?.front_default
      }))
    ) || []
  console.log(
    'pokemonList',
    data[0]?.pokemondexnumbers[0]?.pokemonspecy?.pokemons[0]?.pokemonforms[0]
      ?.pokemonformsprites[0]?.sprites?.front_default
  )
  console.log('pokemonList', pokemonList[0])
  return (
    <view className='page'>
      <view className='flex flex-row items-center px-3 py-2 w-full'>
        {/* Left: back button */}
        <view
          className='w-10 items-start'
          bindtap={() => nav(-1)}
          hit-slop={HIT_SLOP[10]}
        >
          <image src={BackButton} className='size-6' />
        </view>

        {/* Center: title */}
        <text
          className='flex-1 text-center text-3xl'
          style={{ fontFamily: 'Poppins' }}
        >
          {regionTitle ?? 'Unknown'}
        </text>

        {/* Right: spacer to balance the back button */}
        <view className='w-10' />
      </view>

      <list
        className='list-wrapper'
        scroll-orientation='vertical'
        span-count={3}
        list-type='flow'
        preload-buffer-count={10}
      >
        {pokemonList?.map((item, index) => {
          return (
            <list-item
              item-key={`region-item-${index}`}
              key={`region-item-${item?.id}-${index}`}
              estimated-main-axis-size-px={200}
            >
              <PokemonCard name={item.name} imageUrl={item.imageUrl} />
            </list-item>
          )
        })}
      </list>
    </view>
  )
}
