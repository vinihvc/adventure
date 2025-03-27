import { Button } from '@/components/ui/button'
import { type MscAtomProps, useMsc } from '@/store/atoms/msc'

import coinSfx from '@/assets/sfx/coin.wav'
import { FactoryDialog } from '@/components/dialog/factory'

import { useSound } from '@/hooks/use-sound'
import { decreaseMoney, useWallet } from '@/store/atoms/wallet'
import { amountFormatter } from '@/utils/formatters'
interface FactoryUpgradeProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  factoryType: string
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  factory: any
  totalMoney: number
  amountToBuy: MscAtomProps['amountToBuy']
  onUnlock: () => void
  onBuyAmount: () => void
}

export const FactoryUpgrade = (props: FactoryUpgradeProps) => {
  const {
    factoryType,
    factory,
    totalMoney,
    amountToBuy,
    className,
    onUnlock,
    onBuyAmount,
    ...rest
  } = props

  const wallet = useWallet()
  const msc = useMsc()

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
