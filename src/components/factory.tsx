import { Progress } from './ui/progress'
import { Button } from './ui/button'
import { FactoryTypeModel } from '../models/factories'
import { cn } from '../utils/cn'
import { useAtom } from 'jotai'
import { factoriesAtom } from '../store/factories'
import { FACTORIES } from '../config/factories'
import useSound from 'use-sound'
import coinSFX from '@/assets/sfx/coin.wav'
import autoSFX from '@/assets/sfx/auto.wav'
import { walletAtom } from '../store/wallet'

interface FactoryProps extends React.HTMLAttributes<HTMLDivElement> {
  type: FactoryTypeModel
}

export const Factory = (props: FactoryProps) => {
  const { type, className, ...rest } = props

  const [factories, setFactories] = useAtom(factoriesAtom)
  const [, setWallet] = useAtom(walletAtom)

  const [playCoin] = useSound(coinSFX)
  const [playAuto] = useSound(autoSFX)

  const currentFactory = {
    ...FACTORIES[type],
    ...factories[type],
  }

  const totalAmountGen = currentFactory!.value * currentFactory!.amount

  const handleBuyAmount = () => {
    setFactories((prev) => ({
      ...prev,
      [type]: {
        ...prev[type],
        amount: prev[type].amount + 1,
      },
    }))

    playCoin()
  }

  const handleProduce = () => {
    setWallet((prev) => ({
      ...prev,
      money: prev.money + totalAmountGen,
    }))

    playAuto()
  }

  return (
    <div className={cn('flex items-center space-x-5', className)} {...rest}>
      <Button
        title={`Produce ${type}`}
        variant="outline"
        className="relative rounded-full max-w-10 max-h-10 w-full h-full"
        size="icon"
        onClick={handleProduce}
      >
        <img
          src={currentFactory.image}
          alt={type}
          className="size-5 object-cover"
        />

        <div className="flex justify-center items-center absolute bottom-[-15px] bg-neutral-600 rounded-full font-bold w-10">
          <div
            className={cn(
              'flex justify-center items-center rounded-full size-5',
            )}
          >
            <div className="text-xs">{currentFactory.amount || 0}</div>
          </div>
        </div>
      </Button>

      <div className="w-full space-y-1">
        <Progress duration={currentFactory!.time} seconds={5}>
          {totalAmountGen}
        </Progress>

        <div className="flex items-center space-x-1">
          <Button className="w-40" onClick={handleBuyAmount}>
            <span>
              Buy
              <small>{' x'}</small>
              {`1 ${type}`}
            </span>
          </Button>

          <Button variant="secondary" className="w-auto" disabled>
            {currentFactory.time}
          </Button>
        </div>
      </div>
    </div>
  )
}
