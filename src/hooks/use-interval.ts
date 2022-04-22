import { useEffect, useRef } from 'react'

export const useInterval = (callback: any, delay = 1000) => {
  const savedCallback = useRef()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    const tick = () => {
      // @ts-ignore
      savedCallback.current()
    }

    if (delay !== null) {
      const id = setInterval(tick, delay)

      return () => clearInterval(id)
    }
  }, [delay])
}
