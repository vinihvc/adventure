import type { FactoryType } from '@/content/factories'
import { stopProducing, useFactory } from '@/store/atoms/factories'
import React from 'react'
import { useInterval } from './use-interval'

/**
 * Emit a countdown timer for a factory
 */
export const useCountdown = (factory: FactoryType) => {
  const f = useFactory(factory)

  const [seconds, setSeconds] = React.useState(f.productionTime)
  const [isRunning, setIsRunning] = React.useState(
    f.isAutomated || f.isProducing,
  )

  React.useEffect(() => {
    setIsRunning(f.isAutomated || f.isProducing)
  }, [f.isAutomated, f.isProducing])

  const handleOnComplete = () => {
    stopProducing(factory)
  }

  useInterval(
    () => {
      if (seconds > 0 && isRunning) {
        setSeconds(seconds - 1)
      }

      if (seconds < 1) {
        setSeconds(f.productionTime)
        setIsRunning(f.isAutomated)
        handleOnComplete()
      }
    },
    isRunning && f.isUnlocked ? 1000 : undefined,
  )

  return { seconds, isRunning }
}
