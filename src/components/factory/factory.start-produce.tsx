import clsx from 'clsx'

import { FactoryTypeModel } from '@/models/factory'

import { useFactory } from '@/hooks/use-factory'

type FactoryBuyProps = {
  type: FactoryTypeModel
  isRunning: boolean
  onStart: () => void
}

export const FactoryStartProduce = ({
  type,
  isRunning,
  onStart,
}: FactoryBuyProps) => {
  const { factory } = useFactory(type)

  return (
    <button
      type="button"
      className={clsx(
        'relative',
        'w-12 h-12',
        'bg-gray-900',
        'rounded-full border-[4px] ',
        'font-bold',
        'overflow-auto font-bold transition-all',
        isRunning ? 'border-green-600' : 'border-blue-400',
      )}
      aria-label={`Produce ${factory.type}`}
      onClick={onStart}
      disabled={isRunning}
    >
      <img
        src={factory.image}
        alt={type}
        className="w-12 h-12 aspect-square object-cover"
      />

      <div className="flex justify-center items-center absolute bottom-[-15px] w-full">
        <div
          className={clsx(
            'flex justify-center items-center rounded-full  w-5 h-5 min-h-5 min-w-5',
            isRunning ? 'bg-green-800' : 'bg-blue-800',
          )}
        >
          <div className="text-xs">{factory.amount}</div>
        </div>
      </div>
    </button>
  )
}
