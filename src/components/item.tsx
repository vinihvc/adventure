import clsx from 'clsx'
import { useState } from 'react'
import { useCountdown } from '../hooks/use-countdown'

import { Countdown } from './countdown'
import { Progress } from './progress'

type ItemProps = {
  title: string
  image: string
  value: number
  total: number
  cost: number
  duration: number
  onFinish?: (balance: number) => void
}

export const Item = ({
  title,
  image,
  value,
  total: totalState,
  cost,
  duration,
  onFinish,
}: ItemProps) => {
  const [total, setTotal] = useState(totalState)

  const { seconds, formatted, isRunning, onStart } = useCountdown({
    seconds: duration,
    onComplete: () => !!onFinish && onFinish(total * value),
  })

  const handleBuy = () => {
    setTotal(total + 1)
  }

  return (
    <div className="flex items-center space-x-5">
      <button
        className={clsx(
          'rounded-full relative w-12 h-12 overflow-auto text-white font-bold border-[4px] transition-all',
          isRunning ? 'border-green-600' : 'border-gray-700',
        )}
        title="Start"
        onClick={onStart}
        disabled={isRunning}
      >
        <img
          src={image}
          alt={title}
          className="w-12 h-12 object-cover bg-cover "
        />

        <div className="flex justify-center items-center absolute bottom-[-15px] w-full">
          <div className="flex justify-center items-center rounded-full bg-gray-700 w-5 h-5 min-h-5 min-w-5">
            <div className="text-xs">{total}</div>
          </div>
        </div>
      </button>

      <div className="w-[300px]">
        <Progress duration={duration} seconds={seconds}>
          ${value * total}
        </Progress>

        <div className="flex items-center space-x-5 mt-1">
          <button
            className="flex justify-between text-sm w-full bg-blue-400 text-white font-bold py-2 px-4 rounded uppercase"
            onClick={handleBuy}
          >
            <span>Buy</span>

            <span>${total * cost}</span>
          </button>

          <button
            className="flex justify-center text-sm w-full bg-gray-600 text-white font-bold p-2 rounded cursor-default"
            disabled
          >
            {formatted}
          </button>
        </div>
      </div>
    </div>
  )
}
