import clickSfx from '@/assets/sfx/click.wav'
import { Button } from '@/components/ui/button'
import type { FactoryType } from '@/data/factories'
import { useSound } from '@/hooks/use-sound'
import { setProducing, useFactory } from '@/store/atoms/factories'
import { cn } from '@/utils/cn'
import { capitalize } from '@/utils/formatters'
import { Image } from '@unpic/react'
import { Tooltip, TooltipContent, TooltipTrigger } from '../tooltip'

interface FactoryProduceProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The factory type
   */
  factoryType: FactoryType
}

export const FactoryProduce = (props: FactoryProduceProps) => {
  const { factoryType, className, ...rest } = props

  const { play } = useSound(clickSfx)

  const factory = useFactory(factoryType)

  const handleProduce = () => {
    play()

    setProducing(factoryType, true)
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          className={cn(
            'group relative size-16 shrink-0 rounded-full border-2 border-black p-0 focus-visible:ring-3 focus-visible:ring-black focus-visible:ring-offset-2',
            className,
          )}
          disabled={!factory.isUnlocked || factory.isProducing}
          data-auto={factory.isAuto}
          data-unlocked={factory.isUnlocked}
          onClick={handleProduce}
          {...rest}
        >
          <Image
            src={`/images/factories/${factoryType}.webp`}
            alt={`Produce ${factoryType}`}
            className="aspect-square rounded-full group-data-[unlocked=false]:grayscale"
            layout="constrained"
            width={100}
            height={100}
          />

          <span className="sr-only">{`Produce ${factory.name}`}</span>

          <div className="-bottom-3 absolute">
            <div className="flex h-6 w-14 items-center justify-center rounded-full border-2 border-black bg-foreground text-white">
              <div className="text-xs">{factory.amount || 0}</div>
            </div>
          </div>
        </Button>
      </TooltipTrigger>

      <TooltipContent>{`Produce ${capitalize(factoryType)}`}</TooltipContent>
    </Tooltip>
  )
}
