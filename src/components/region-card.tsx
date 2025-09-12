import './region-card.scss'
import MewTwo from '@assets/150.png?inline'
import Hooh from '@assets/250.png?inline'
import Kyogre from '@assets/382.png?inline'
import Dialga from '@assets/483.png?inline'
import Reshiram from '@assets/643.png?inline'
import Xerneas from '@assets/716.png?inline'
import Solgaleo from '@assets/791.png?inline'
import Zacian from '@assets/888_f2.png?inline'
import Miraidon from '@assets/1008.png?inline'
import Arcues from '@assets/arceus.png?inline'

const legendaryRegions: Record<string, string> = {
  kanto: MewTwo,
  johto: Hooh,
  hoenn: Kyogre,
  sinnoh: Dialga,
  unova: Reshiram,
  kalos: Xerneas,
  alola: Solgaleo,
  galar: Zacian,
  hisui: Arcues,
  paldea: Miraidon
}

const regionDescriptions: Record<string, string> = {
  kanto: 'Legendary Pokemon; home of the original 151.',
  johto: 'A region of myths, towers, and the second generation of Pokemon.',
  hoenn: 'A region of nature, contests, and the third generation of Pokemon.',
  sinnoh:
    'A region of ancient myths, exploration, and the fourth generation of Pokemon.',
  unova: 'A region of ideas, the sky, and the fifth generation of Pokemon.',
  kalos: 'A region of beauty, history, and the sixth generation of Pokemon.',
  alola: 'A region of tropical islands and the seventh generation of Pokemon.',
  galar: 'A region of history, sports, and the eighth generation of Pokemon.',
  hisui: 'A region of ancient legends and the ninth generation of Pokemon.',
  paldea: 'A vibrant land of adventure and the newest generation of Pokemon.'
}

interface RegionCardProps {
  name: string
  isFront: boolean
  isFirstRender: boolean
  onPress: () => void
}

export default function RegionCard({
  name,
  isFront,
  isFirstRender,
  onPress
}: RegionCardProps) {
  const imageLegendary = legendaryRegions[name]
  const description = regionDescriptions[name] ?? ''

  return (
    <view className='region-card' bindtap={onPress}>
      {/* Back */}
      <view className={`card-back ${isFront ? 'back' : 'front'}`}>
        <view className='card-back' />
      </view>

      {/* Front */}
      <view className={`card-front ${isFront ? 'front' : 'back'}`}>
        <image src={imageLegendary} className='legendary-img' auto-size />
        <text className='region-title'>{name}</text>
        <text className='region-desc'>{description}</text>
      </view>
    </view>
  )
}
