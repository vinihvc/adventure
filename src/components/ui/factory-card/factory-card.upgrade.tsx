import { Button } from '@/components/ui/button'
import type { FactoryType } from '@/content/factories'
import { cn } from '@/lib/cn'
import {
  setAmountBySelectedAmount,
  unlockFactory,
  useFactory,
} from '@/store/atoms/factories'
import { useMsc } from '@/store/atoms/msc'
import { hasMoneyToBuy } from '@/store/atoms/wallet'
import { amountFormatter } from '@/utils/formatters'
import React from 'react'

const FactoryDialog = React.lazy(() => import('@/components/dialog/factory'))

interface FactoryCardUpgradeProps extends React.ComponentProps<'div'> {
  /**
   * The type of factory
   */
  factoryType: FactoryType
}

export const FactoryCardUpgrade = (props: FactoryCardUpgradeProps) => {
  const { factoryType, className, ...rest } = props

  const { amountToBuy } = useMsc()
  const { isUnlocked, buyCost, unlockPrice, name } = useFactory(factoryType)

  const handleBuy = () => {
    isUnlocked
      ? setAmountBySelectedAmount(factoryType)
      : unlockFactory(factoryType)
  }

  const canBuyAmount = hasMoneyToBuy(buyCost * amountToBuy)
  const canUnlock = hasMoneyToBuy(unlockPrice)

  const buttonVariant = () => {
    if (isUnlocked && canBuyAmount) return 'green'
    if (!isUnlocked && canUnlock) return 'black'
    return 'gray'
  }

  return (
    <div className={cn('flex items-center gap-1', className)} {...rest}>
      <Button
        className="w-full font-bold text-xs uppercase max-sm:justify-between"
        variant={buttonVariant()}
        disabled={isUnlocked ? !canBuyAmount : !canUnlock}
        onClick={handleBuy}
      >
        {isUnlocked && canBuyAmount && (
          <span className="flex items-center gap-1">
            Buy
            <span>
              <span className="text-[10px] normal-case">x</span>
              <span>{amountToBuy}</span>
            </span>
            <span className="max-sm:text-[10px]">{name}</span>
            <span className="absolute right-4 normal-case max-sm:text-[10px]">
              {amountFormatter(buyCost * amountToBuy)}
            </span>
          </span>
        )}

        {!isUnlocked && canUnlock && (
          <span>
            <span>Unlock </span>
            <span className="absolute right-4 text-xs normal-case">
              {amountFormatter(unlockPrice)}
            </span>
          </span>
        )}

        {isUnlocked && !canBuyAmount && (
          <span>
            <span>No money</span>
            <span className="absolute right-4 text-xs normal-case">
              {amountFormatter(buyCost * amountToBuy)}
            </span>
          </span>
        )}

        {!isUnlocked && !canUnlock && (
          <span>
            Locked
            <span className="absolute right-4 text-xs normal-case">
              {amountFormatter(unlockPrice)}
            </span>
          </span>
        )}
      </Button>

      <FactoryDialog factoryType={factoryType} />
    </div>
  )
}
