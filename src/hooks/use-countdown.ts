import React from 'react'

import type { FactoryType } from '@/data/factories'
import { setProducing, useFactory } from '@/store/atoms/factories'
import { setStatistics } from '@/store/atoms/statistics'
import { setMoney } from '@/store/atoms/wallet'
import { useInterval } from './use-interval'

/**
 * Emit a countdown timer for a factory
 */
export const useCountdown = (factory: FactoryType) => {
  const f = useFactory(factory)

  const [seconds, setSeconds] = React.useState(f.time)
  const [isRunning, setIsRunning] = React.useState(f.isAuto || f.isProducing)

  React.useEffect(() => {
    setIsRunning(f.isAuto || f.isProducing)
  }, [f.isAuto, f.isProducing])

  const handleOnComplete = () => {
    setMoney(factory)
    setStatistics(factory)
    setProducing(factory, false)
  }

  useInterval(
    () => {
      if (seconds > 0 && isRunning) {
        setSeconds(seconds - 1)
      }

      console.log(
        `Factory ${factory} is running: ${isRunning} and has ${seconds} seconds left`,
      )

      if (seconds < 1) {
        console.log('Time is up!')

        setSeconds(f.time)
        setIsRunning(f.isAuto)
        handleOnComplete()
      }
    },
    isRunning && f.isUnlocked ? 1000 : undefined,
  )

  return { seconds, isRunning }
}
