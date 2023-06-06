import { useCallback, useEffect, useState } from 'react'
import { useInterval } from './use-interval'

type CountdownProps = {
  seconds?: number
  isRunning?: boolean
  interval?: number
  onComplete?: () => void
}

const padLeft = (num: number) => {
  return num < 10 ? `0${num}` : num
}

export const useCountdown = ({
  seconds: initialSeconds = 0,
  isRunning: initiallyRunning = false,
  interval = 1000,
  onComplete,
}: CountdownProps) => {
  const [seconds, setSeconds] = useState(initialSeconds)
  const [isRunning, setIsRunning] = useState(initiallyRunning)

  useInterval(() => {
    if (seconds <= 0) {
      setSeconds(initialSeconds)
      setIsRunning(false)
      !!onComplete && onComplete()
    }

    if (seconds > 0 && isRunning) {
      setSeconds(seconds - 1)
    }
  }, interval)

  const formatted = `${padLeft(Math.floor(seconds / 60))}:${padLeft(
    seconds % 60,
  )}`

  const onStart = useCallback(() => {
    setIsRunning(true)
  }, [])

  return { seconds, formatted, onStart, isRunning }
}
