import useSound from 'use-sound'

import { FactoryModel } from '@/models/factories'

import coinSfx from '@/assets/sfx/coin.wav'
import { Button } from '../ui/button'

type FactoryBuyProps = {
  factory: FactoryModel
}

export const FactoryBuy = ({ factory }: FactoryBuyProps) => {
  // const [play] = useSound(coinSfx, { soundEnabled: settings.sfx })

  const buyPrice = factory!.amountCost * factory!.amount

  const handleBuy = () => {
    // play()
  }

  return (
    <Button
      className="text-xs bg-blue-500 hover:bg-blue-600"
      // disabled={buyPrice > balance.current}
      onClick={handleBuy}
    >
      <span>
        Buy
        <small>{' x'}</small>
        {`1 ${factory.type}`}
      </span>
    </Button>
  )
}
