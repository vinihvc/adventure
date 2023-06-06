import { useEffect } from 'react'

import { FactoryTypeModel } from '@/models/factory'

import { balanceThunk } from '@/store/thunks/balance'

import { useCountdown } from '@/hooks/use-countdown'
import { useAppDispatch } from '@/hooks/use-redux'
import { useFactory } from '@/hooks/use-factory'

import { Progress } from '@/components/progress'
import { Button } from '@/components/button'

import { FactoryBuy } from './factory.buy'
import { FactoryStartProduce } from './factory.start-produce'

type FactoryProps = {
  type: FactoryTypeModel
  name: string
}

export const Factory = ({ name, type }: FactoryProps) => {
  const dispatch = useAppDispatch()

  const { factory, amountGenerated } = useFactory(type)

  useEffect(() => {
    if (factory!.automatic) {
      onStart()
    }
  }, [factory])

  const handleComplete = () => {
    dispatch(balanceThunk.add(factory))

    if (factory!.automatic) {
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
        <Progress
          duration={factory!.duration}
          seconds={seconds}
          isAutomatic={factory!.automatic}
          isPlaying={isRunning}
        >
          ${amountGenerated}
        </Progress>

        <div className="flex items-center space-x-1">
          <FactoryBuy name={name} type={type} />

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
