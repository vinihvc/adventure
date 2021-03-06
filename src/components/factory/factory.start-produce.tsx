import clsx from 'clsx'

import { FactoryTypeModel } from '@/models/factories'

import { useAppSelector } from '@/hooks/use-redux'

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
  const { factories } = useAppSelector((state) => state)

  const factory = factories.find((factory) => factory.type === type)

  return (
    <button
      type="button"
      className={clsx(
        'rounded-full relative w-12 h-12 overflow-auto text-white font-bold border-[4px] transition-all',
        isRunning ? 'border-green-600' : 'border-blue-400',
      )}
      title={`Produce ${factory?.type}`}
      onClick={onStart}
      disabled={isRunning}
    >
      <img
        src={factory!.image}
        alt={type}
        className="w-12 h-12 object-cover bg-cover "
      />

      <div className="flex justify-center items-center absolute bottom-[-15px] w-full">
        <div
          className={clsx(
            'flex justify-center items-center rounded-full  w-5 h-5 min-h-5 min-w-5',
            isRunning ? 'bg-green-800' : 'bg-blue-800',
          )}
        >
          <div className="text-xs">{factory!.amount}</div>
        </div>
      </div>
    </button>
  )
}
