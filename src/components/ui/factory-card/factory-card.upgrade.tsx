import { Button } from '@/components/ui/button'
import type { FactoryType } from '@/content/factories'
import { cn } from '@/lib/cn'
import {
  setAmountBySelectedAmount,
  unlockFactory,
  useFactory,
} from '@/store/atoms/factories'
import {
  totalCanBuyByAmount,
  totalToPayByAmount,
  useMsc,
} from '@/store/atoms/msc'
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

  const { isUnlocked, unlockPrice, name } = useFactory(factoryType)
  const { value: amountToBuy } = useMsc()

  const totalCanBuy = totalCanBuyByAmount(factoryType, amountToBuy)
  const totalToPay = totalToPayByAmount(factoryType, amountToBuy)

  const totalGreaterThan0 = totalCanBuy > 0

  const handleBuy = () => {
    isUnlocked
      ? setAmountBySelectedAmount(factoryType, amountToBuy)
      : unlockFactory(factoryType)
  }

  const canBuyAmount = hasMoneyToBuy(totalToPay)
  const canUnlock = hasMoneyToBuy(unlockPrice)

  const buttonVariant = () => {
    if (!totalGreaterThan0) return 'gray'
    if (isUnlocked && canBuyAmount) return 'green'
    if (!isUnlocked && canUnlock) return 'black'
    return 'gray'
  }

  return (
    <div className={cn('flex items-center gap-1', className)} {...rest}>
      <Button
        className="w-full font-bold text-xs uppercase max-sm:justify-between"
        variant={buttonVariant()}
        disabled={
          isUnlocked
            ? !canBuyAmount || !totalGreaterThan0
            : !canUnlock || !totalGreaterThan0
        }
        onClick={handleBuy}
      >
        {isUnlocked && canBuyAmount && totalGreaterThan0 && (
          <span className="flex items-center gap-1">
            Buy
            <span>
              <span>{amountFormatter(totalCanBuy)}</span>
            </span>
            <span className="max-sm:text-[10px]">{name}</span>
            <span className="absolute right-4 normal-case max-sm:text-[10px]">
              {amountFormatter(totalToPay)}
            </span>
          </span>
        )}

        {!isUnlocked && canUnlock && (
          <span className="flex items-center gap-1">
            <span>Unlock </span>

            <span className="absolute right-4 normal-case max-sm:text-[10px]">
              {amountFormatter(unlockPrice)}
            </span>
          </span>
        )}

        {(!isUnlocked && !canUnlock) ||
          (!totalGreaterThan0 && (
            <span className="flex items-center gap-1">No money</span>
          ))}

        {isUnlocked && !canBuyAmount && (
          <span className="flex items-center gap-1">
            <span>No money</span>
            <span className="absolute right-4 normal-case max-sm:text-[10px]">
              {amountFormatter(totalToPay)}
            </span>
          </span>
        )}

        {!isUnlocked && !canUnlock && (
          <span className="flex items-center gap-1">
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
