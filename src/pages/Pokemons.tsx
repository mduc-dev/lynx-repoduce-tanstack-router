import PokeBall from '@assets/poke-ball.png?inline'
import { useQueryPokemons } from '@hooks/useQueryPokemons'
import { useState } from 'react'
// import { useNavigate } from 'react-router'
import './index.scss'
import RegionCard from '@components/region-card'

export default function Pokemons() {
  // const nav = useNavigate()
  const { data } = useQueryPokemons()
  const [isFront, setIsFront] = useState(true)
  const [isFirstRender, setIsFirstRender] = useState(true)

  const handleCardSelect = () => {
  
    setIsFront((prev) => !prev)
  }

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
        span-count={2}
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
              <RegionCard
                isFront={isFront}
                isFirstRender={isFirstRender}
                name={item.name}
                onPress={handleCardSelect}
                // onPress={() =>
                //   nav(`/pokemons/${item.id}`, {
                //     state: { data: item.pokedexes, regionTitle: item.name }
                //   })
                // }
              />
            </list-item>
          )
        })}
      </list>
    </view>
  )
}
// const legendaryRegions: Record<string, string> = {
//   kanto: MewTwo,
//   johto: Hooh,
//   hoenn: Kyogre,
//   sinnoh: Dialga,
//   unova: Reshiram,
//   kalos: Xerneas,
//   alola: Solgaleo,
//   galar: Zacian,
//   hisui: Arcues,
//   paldea: Miraidon
// }

// const regionDescriptions: Record<string, string> = {
//   kanto: 'Legendary Pokemon; home of the original 151.',
//   johto: 'A region of myths, towers, and the second generation of Pokemon.',
//   hoenn: 'A region of nature, contests, and the third generation of Pokemon.',
//   sinnoh:
//     'A region of ancient myths, exploration, and the fourth generation of Pokemon.',
//   unova: 'A region of ideas, the sky, and the fifth generation of Pokemon.',
//   kalos: 'A region of beauty, history, and the sixth generation of Pokemon.',
//   alola: 'A region of tropical islands and the seventh generation of Pokemon.',
//   galar: 'A region of history, sports, and the eighth generation of Pokemon.',
//   hisui: 'A region of ancient legends and the ninth generation of Pokemon.',
//   paldea: 'A vibrant land of adventure and the newest generation of Pokemon.'
// }

// interface RegionProps {
//   id?: number
//   name: string
//   image?: string
//   types?: string[]
//   onPress: () => void
// }

// const RegionCard = ({ name, onPress }: RegionProps) => {
//   const [flipped, setFlipped] = useState(false)
//   const imageLegendary = legendaryRegions[name]
//   const description = regionDescriptions[name] ?? ''

//   return (
//     <view className='region-card' bindtap={() => setFlipped((prev) => !prev)}>
//       {flipped ? (
//         <view className='card-back back-enter' />
//       ) : (
//         <view className='card-front front-enter'>
//           <image src={imageLegendary} className='legendary-img' auto-size />
//           <text className='region-title'>{name}</text>
//           <text className='region-desc'>{description}</text>
//         </view>
//       )}
//     </view>
//   )
// }
