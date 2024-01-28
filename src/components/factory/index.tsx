import { useEffect } from 'react'

import { FactoryModel } from '@/models/factories'

import { useCountdown } from '@/hooks/use-countdown'

import { FactoryBuy } from './factory.buy'
import { FactoryStartProduce } from './factory.start-produce'
import { Progress } from '../ui/progress'
import { Button } from '../ui/button'

type FactoryProps = {
  factory: FactoryModel
}

export const Factory = ({ factory }: FactoryProps) => {
  const amountGen = factory!.value * factory!.amount * factory!.upgradeValue

  useEffect(() => {
    if (factory!.auto) {
      onStart()
    }
  }, [factory])

  const handleComplete = () => {
    if (factory!.auto) {
      onStart()
    }
  }

  const { seconds, formatted, isRunning, onStart } = useCountdown({
    seconds: factory!.duration,
    onComplete: handleComplete,
  })

  return (
    <div className="flex items-center space-x-5">
      <FactoryStartProduce
        factory={factory}
        isRunning={isRunning}
        onStart={onStart}
      />

      <div className="w-[300px] space-y-1">
        <Progress duration={factory!.duration} seconds={seconds}>
          ${amountGen}
        </Progress>

        <div className="flex items-center space-x-1">
          <FactoryBuy factory={factory.type} />

          <Button
            className="disabled:bg-gray-900 hover:disabled:bg-gray-900"
            disabled
          >
            {formatted}
          </Button>
        </div>
      </div>
    </div>
  )
}
