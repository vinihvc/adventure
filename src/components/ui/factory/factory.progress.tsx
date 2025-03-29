import type { FactoryType } from '@/content/factories'
import { useFactory } from '@/store/atoms/factories'
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
  const { type, seconds, isRunning, ...rest } = props

  const factory = useFactory(type)

  return (
    <Progress
      {...rest}
      value={seconds}
      duration={factory.time}
      isUnlocked={isRunning}
      data={{
        time: factory.time,
        amount: factory.amount,
        value: factory.value,
      }}
    />
  )
}
