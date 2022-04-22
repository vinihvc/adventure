import useSound from 'use-sound'

import { FactoryTypeModel } from '@/models/factories'

import { useAppDispatch, useAppSelector } from '@/hooks/use-redux'

import { amount } from '@/store/thunks/factories'

import { Button } from '@/components/button'

import coinSfx from '@/assets/sfx/coin.wav'

type FactoryBuyProps = {
  type: FactoryTypeModel
}

export const FactoryBuy = ({ type }: FactoryBuyProps) => {
  const dispatch = useAppDispatch()

  const { balance, factories, settings } = useAppSelector((state) => state)

  const [play] = useSound(coinSfx, { soundEnabled: settings.sfx })

  const factory = factories.find((factory) => factory.type === type)

  const buyPrice = factory!.amountCost * factory!.amount

  const handleBuy = () => {
    dispatch(amount({ type, amount: 1 }))

    play()
  }

  return (
    <Button
      className="text-xs bg-blue-500 hover:bg-blue-600"
      disabled={buyPrice > balance.current}
      onClick={handleBuy}
    >
      <span>
        Buy
        <small>{' x'}</small>
        {`1 ${type}`}
      </span>
    </Button>
  )
}
