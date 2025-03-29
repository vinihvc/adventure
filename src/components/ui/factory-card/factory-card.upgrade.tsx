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
  const { isUnlocked, buyCost, unlockPrice } = useFactory(factoryType)

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
        className="w-full border font-bold text-xs uppercase drop-shadow-xl"
        size="sm"
        variant={buttonVariant()}
        disabled={isUnlocked ? !canBuyAmount : !canUnlock}
        onClick={handleBuy}
      >
        {isUnlocked && canBuyAmount && (
          <span className="flex items-center gap-1">
            Buy
            <span>
              <span className="text-xs normal-case">x</span>
              <span>{amountToBuy}</span>
              <span className="pl-1 text-xs">
                ({amountFormatter(buyCost * amountToBuy)})
              </span>
            </span>
          </span>
        )}

        {!isUnlocked && canUnlock && (
          <span>Acquire ({amountFormatter(unlockPrice)})</span>
        )}

        {isUnlocked && !canBuyAmount && (
          <span>
            Money not enough ({amountFormatter(buyCost * amountToBuy)})
          </span>
        )}

        {!isUnlocked && !canUnlock && (
          <span>Locked ({amountFormatter(unlockPrice)})</span>
        )}
      </Button>

      <FactoryDialog factoryType={factoryType} />
    </div>
  )
}
