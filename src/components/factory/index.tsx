import { useEffect } from 'react'

import { FactoryTypeModel } from '@/models/factories'

import { useCountdown } from '@/hooks/use-countdown'
import { useAppDispatch, useAppSelector } from '@/hooks/use-redux'

import { Progress } from '@/components/progress'
import { Button } from '@/components/button'

import { FactoryBuy } from './factory.buy'
import { FactoryStartProduce } from './factory.start-produce'
import { add } from '@/store/thunks/balance'

type FactoryProps = {
  type: FactoryTypeModel
}

export const Factory = ({ type }: FactoryProps) => {
  const dispatch = useAppDispatch()

  const { factories } = useAppSelector((state) => state)

  const factory = factories.find((factory) => factory.type === type)

  const amountGen = factory!.value * factory!.amount * factory!.upgradeValue

  useEffect(() => {
    if (factory!.auto) {
      onStart()
    }
  }, [factory])

  const handleComplete = () => {
    dispatch(add(type))

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
        type={type}
        isRunning={isRunning}
        onStart={onStart}
      />

      <div className="w-[300px] space-y-1">
        <Progress duration={factory!.duration} seconds={seconds}>
          ${amountGen}
        </Progress>

        <div className="flex items-center space-x-1">
          <FactoryBuy type={type} />

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
