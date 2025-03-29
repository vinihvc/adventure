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
        'relative',
        'flex items-center',

        'pl-10',
        'transition',
        className,
      )}
      aria-disabled={!isUnlocked}
      {...rest}
    >
      <div className="grid h-14 w-full rounded-r-lg border border-foreground/50 bg-background/50 py-1 pr-2 pl-8 shadow-xl">
        <Progress value={seconds} isUnlocked={isRunning} factoryType={type} />

        <FactoryCardUpgrade className="translate-y-2" factoryType={type} />
      </div>

      <FactoryCardProduce
        className="-translate-y-1/2 absolute top-1/2 left-0"
        factoryType={type}
      />
    </article>
  )
}
