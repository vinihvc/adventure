import type { FactoryType } from '@/content/factories'
import { useCountdown } from '@/hooks/use-countdown'
import { cn } from '@/lib/cn'
import { useFactory } from '@/store/atoms/factories'
import { Progress } from '../progress'
import { FactoryCardProduce } from './factory-card.produce'
import { FactoryCardUpgrade } from './factory-card.upgrade'

interface FactoryCardProps extends React.ComponentProps<'article'> {
  /**
   * The type of factory
   */
  type: FactoryType
}

export const FactoryCard = (props: FactoryCardProps) => {
  const { type, className, ...rest } = props

  const { isUnlocked } = useFactory(type)

  const { seconds, isRunning } = useCountdown(type)

  return (
    <article
      className={cn(
        'flex items-center gap-5',
        'p-3 md:p-4',
        'rounded-lg border border-background shadow-xl',
        'bg-background/60',
        'outline-hidden',
        'transition',
        'focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-white',
        className,
      )}
      aria-disabled={!isUnlocked}
      {...rest}
    >
      <FactoryCardProduce className="-top-1 relative" factoryType={type} />

      <div className="grid w-full gap-2">
        <Progress value={seconds} isUnlocked={isRunning} factoryType={type} />

        <FactoryCardUpgrade factoryType={type} />
      </div>
    </article>
  )
}
