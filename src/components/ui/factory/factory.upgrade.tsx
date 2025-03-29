import { Button } from '@/components/ui/button'
import type { FactoryType } from '@/content/factories'
import { useFactory } from '@/store/atoms/factories'
import { type MscAtomProps, useMsc } from '@/store/atoms/msc'
import { decreaseMoney, useWallet } from '@/store/atoms/wallet'
import { amountFormatter } from '@/utils/formatters'
import React from 'react'
import { sound } from '../sound'

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

  const handleBuy = () => {
    !factory.isUnlocked ? onUnlock() : onBuyAmount()

    decreaseMoney(factory.buyCost * msc.amountToBuy)

    sound.play('coin')
  }

  const canBuy = wallet.money >= factory.buyCost * msc.amountToBuy

  const buttonVariant = () => {
    if (factory.isUnlocked && canBuy) return 'success'
    if (!factory.isUnlocked && !canBuy) return 'white'
    if (!factory.isUnlocked && canBuy) return 'black'
  }

  return (
    <div className="flex items-center gap-2">
      <Button
        className="w-full font-bold text-xs uppercase"
        variant={buttonVariant()}
        disabled={!canBuy}
        onClick={handleBuy}
        {...rest}
      >
        {factory.isUnlocked && canBuy && (
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

        {factory.isUnlocked && !canBuy && (
          <span>Money not enough ({amountFormatter(factory.buyCost)})</span>
        )}

        {!factory.isUnlocked && !canBuy && (
          <span>Locked ({amountFormatter(factory.moneyToUnlock)})</span>
        )}
      </Button>

      <FactoryDialog factoryType={factoryType} />
    </div>
  )
}
