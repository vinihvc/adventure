import coinSfx from '@/assets/sfx/coin.wav'
import { Button } from '@/components/ui/button'
import type { FactoryType } from '@/data/factories'
import { useSound } from '@/hooks/use-sound'
import { useFactory } from '@/store/atoms/factories'
import { type MscAtomProps, useMsc } from '@/store/atoms/msc'
import { decreaseMoney, useWallet } from '@/store/atoms/wallet'
import { amountFormatter } from '@/utils/formatters'
import React from 'react'

const FactoryDialog = React.lazy(() => import('@/components/dialog/factory'))

interface FactoryUpgradeProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  factoryType: FactoryType
  totalMoney: number
  amountToBuy: MscAtomProps['amountToBuy']
  onUnlock: () => void
  onBuyAmount: () => void
}

export const FactoryUpgrade = (props: FactoryUpgradeProps) => {
  const {
    factoryType,
    totalMoney,
    amountToBuy,
    className,
    onUnlock,
    onBuyAmount,
    ...rest
  } = props

  const wallet = useWallet()
  const msc = useMsc()
  const factory = useFactory(factoryType)
  const { play } = useSound(coinSfx)

  const handleBuy = () => {
    !factory.isUnlocked ? onUnlock() : onBuyAmount()

    decreaseMoney(factory.buyCost * msc.amountToBuy)

    play()
  }

  const canBuy = wallet.money >= factory.buyCost * msc.amountToBuy

  return (
    <div className="flex items-center gap-2">
      <Button
        className="w-full font-bold text-xs uppercase"
        disabled={!canBuy}
        onClick={handleBuy}
        {...rest}
      >
        {factory.isUnlocked && (
          <span className="flex items-center gap-1">
            Buy
            <span>
              <span className="text-xs normal-case">x</span>
              <span>{amountToBuy}</span>
              <span className="pl-1 text-xs">
                ({amountFormatter(factory.buyCost * msc.amountToBuy)})
              </span>
            </span>
          </span>
        )}

        {!factory.isUnlocked && canBuy && <span>Acquire</span>}

        {!factory.isUnlocked && !canBuy && <span>Money not enough</span>}
      </Button>

      <FactoryDialog factory={factory} factoryType={factoryType} />
    </div>
  )
}
