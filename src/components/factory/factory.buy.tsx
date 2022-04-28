import { FactoryTypeModel } from '@/models/factory'

import { useFactory } from '@/hooks/use-factory'

import { Button } from '@/components/button'

type FactoryBuyProps = {
  name: string
  type: FactoryTypeModel
}

export const FactoryBuy = ({ name, type }: FactoryBuyProps) => {
  const { canBuyAmount, handleBuyAmount } = useFactory(type)

  return (
    <Button
      type="button"
      className="text-xs bg-blue-500 hover:bg-blue-600"
      disabled={canBuyAmount}
      onClick={handleBuyAmount}
    >
      <span>
        Buy
        <small>{' x'}</small>
        {`1 ${name}`}
      </span>
    </Button>
  )
}
