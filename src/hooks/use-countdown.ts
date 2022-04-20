import { useCallback, useEffect, useState } from 'react'

type CountdownProps = {
  seconds?: number
  running?: boolean
  onComplete?: () => void
}

const padLeft = (num: number) => {
  return num < 10 ? `0${num}` : num
}

export const useCountdown = ({
  seconds: initialSeconds = 0,
  running: initiallyRunning = false,
  onComplete,
}: CountdownProps) => {
  const [seconds, setSeconds] = useState(initialSeconds)
  const [isRunning, setIsRunning] = useState(initiallyRunning)

  useEffect(() => {
    const myInterval = setInterval(() => {
      if (seconds > 0 && isRunning) {
        setSeconds(seconds - 1)
      }

      if (seconds === 0) {
        setSeconds(initialSeconds)
        setIsRunning(false)
        !!onComplete && onComplete()
        clearInterval(myInterval)
      }
    }, 1000)
    return () => {
      clearInterval(myInterval)
    }
  })

  const formatted = `${padLeft(Math.floor(seconds / 60))}:${padLeft(
    seconds % 60,
  )}`

  const onStart = useCallback(() => {
    setIsRunning(true)
  }, [])

  return { seconds, formatted, onStart, isRunning }
}
