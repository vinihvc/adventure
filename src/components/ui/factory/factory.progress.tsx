import type { FactoryType } from '@/data/factories'
import { useFactory } from '@/store/atoms/factories'
import { cn } from '@/utils/cn'
import { amountFormatter } from '@/utils/formatters'
import { Progress } from '../progress/progress'

interface FactoryProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The factory type
   */
  type: FactoryType
  /**
   *
   */
  seconds: number
  /**
   * The time in seconds
   */
  isRunning: boolean
}

export const FactoryProgress = (props: FactoryProgressProps) => {
  const { type, seconds, isRunning, className, ...rest } = props

  const factory = useFactory(type)

  return (
    <div className={cn('relative', className)} {...rest}>
      <Progress duration={factory.time} isUnlocked={isRunning} />

      <div className="absolute inset-0 flex items-center justify-between px-5 font-semibold text-black text-sm">
        <span className="w-40 text-xs">
          {new Date(factory.time * 1000).toISOString().substring(14, 19)}
        </span>

        <span>{amountFormatter(factory.amount * factory.value)}</span>
      </div>
    </div>
  )
}
