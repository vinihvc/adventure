import { useState } from 'react'

import { Countdown } from './countdown'

type ItemProps = {
  title: string
  image: string
  value: number
  total: number
  duration: number
  onFinish?: (balance: number) => void
}

export const Item = ({
  title,
  image,
  value,
  total: totalState,
  duration,
  onFinish,
}: ItemProps) => {
  const [isCounting, setIsCounting] = useState(false)
  const [total, setTotal] = useState(totalState)

  const handleFinish = () => {
    setIsCounting(false)

    !!onFinish && onFinish(total * value)
  }

  const handleStart = () => {
    setIsCounting(true)
  }

  const handleBuy = () => {
    setTotal(total + 1)
  }

  return (
    <div className="flex items-center space-x-5">
      <button
        className="rounded-full relative w-12 h-12 overflow-auto text-black font-bold"
        title="Start"
        onClick={handleStart}
        disabled={isCounting}
      >
        <img
          src={image}
          alt={title}
          className="w-12 h-12 object-cover bg-cover"
        />

        <div className="flex justify-center items-center absolute inset-0 bg-white bg-opacity-50">
          {total}
        </div>
      </button>

      <div className="w-[150px]">
        <div className="flex justify-between">
          {isCounting ? (
            <Countdown duration={duration} onFinish={handleFinish} />
          ) : (
            <p>00:0{duration}</p>
          )}

          {`x${value * total}`}
        </div>

        <button
          className="text-sm w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded uppercase tracking-wide"
          onClick={handleBuy}
        >
          Buy
        </button>
      </div>
    </div>
  )
}
