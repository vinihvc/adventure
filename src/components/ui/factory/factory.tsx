import type { FactoryType } from '@/data/factories'
import { useCountdown } from '@/hooks/use-countdown'
import { setAmount, upgradeUnlock, useFactory } from '@/store/atoms/factories'
import { useMsc } from '@/store/atoms/msc'
import { useWallet } from '@/store/atoms/wallet'
import { cn } from '@/utils/cn'
import { FactoryProduce } from './factory.produce'
import { FactoryProgress } from './factory.progress'
import { FactoryUpgrade } from './factory.upgrade'

interface FactoryProps extends React.HTMLAttributes<HTMLDivElement> {
  type: FactoryType
}

export const Factory = (props: FactoryProps) => {
  const { type, className, ...rest } = props

  const msc = useMsc()
  const factory = useFactory(type)
  const wallet = useWallet()

  const { seconds, isRunning } = useCountdown(type)

  const handleBuyAmount = () => {
    setAmount(type)
  }

  const handleUnlock = () => {
    upgradeUnlock(type)
    setAmount(type)
  }

  return (
    <article
      tabIndex={factory.isUnlocked ? 0 : -1}
      aria-label={`${type} section`}
      className={cn(
        'flex items-center gap-5',
        'p-3 md:p-4',
        'border shadow-xl',
        'bg-background',
        'outline-hidden',
        'transition',
        'focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-white',
        className,
      )}
      aria-disabled={!factory.isUnlocked}
      {...rest}
    >
      <FactoryProduce className="-top-1 relative" factoryType={type} />

      <div className="grid w-full gap-2">
        <FactoryProgress type={type} seconds={seconds} isRunning={isRunning} />

        <FactoryUpgrade
          factoryType={type}
          factory={factory}
          totalMoney={wallet.money}
          amountToBuy={msc.amountToBuy}
          onUnlock={handleUnlock}
          onBuyAmount={handleBuyAmount}
        />
      </div>
    </article>
  )
}
