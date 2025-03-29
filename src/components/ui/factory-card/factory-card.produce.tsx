import { Button } from '@/components/ui/button'
import type { FactoryType } from '@/content/factories'
import { cn } from '@/lib/cn'
import { startProducing, useFactory } from '@/store/atoms/factories'
import { capitalize } from '@/utils/formatters'
import { Image } from '@unpic/react'
import { Tooltip, TooltipContent, TooltipTrigger } from '../tooltip'

interface FactoryCardProduceProps extends React.ComponentProps<typeof Button> {
  /**
   * The factory type
   */
  factoryType: FactoryType
}

export const FactoryCardProduce = (props: FactoryCardProduceProps) => {
  const { factoryType, className, ...rest } = props

  const { name, amount, isProducing, isUnlocked, isAutomated, isUpgraded } =
    useFactory(factoryType)

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          tabIndex={isProducing || !isUnlocked || isAutomated ? -1 : 0}
          className={cn(
            'group relative',
            'size-16',
            'shrink-0 p-0',
            'rounded-full border-2 border-black',
            'data-[producing=true]:border-blue-600',
            'data-[producing=true]:focus-visible:border-blue-600 data-[producing=true]:focus-visible:ring-blue-600/50',
            'data-[unlocked=false]:pointer-events-none',
            'data-[auto=true]:pointer-events-none',
            className,
          )}
          data-auto={isAutomated}
          data-producing={isProducing}
          data-unlocked={isUnlocked}
          onClick={() => startProducing(factoryType)}
          {...rest}
        >
          <div className="relative">
            <Image
              src={`/images/factories/${factoryType}.webp`}
              alt={`Produce ${factoryType}`}
              className="pointer-events-none aspect-square rounded-full bg-foreground text-foreground [image-rendering:pixelated] group-data-[unlocked=false]:grayscale"
              layout="constrained"
              width={100}
              height={100}
            />

            {isUpgraded && (
              <div className="-top-0.5 -right-0.5 absolute flex h-5 w-5 items-center justify-center rounded-full bg-foreground">
                <span className="font-bold text-[10px]">2x</span>
              </div>
            )}
          </div>

          <span className="sr-only">{`Produce ${name}`}</span>

          {isUnlocked && (
            <div className="-bottom-2 absolute">
              <span className="fade-in-50 slide-in-from-bottom-1 flex h-5 w-14 animate-in items-center justify-center rounded-full bg-foreground text-background text-xs group-data-[producing=true]:bg-blue-600 group-data-[unlocked=false]:bg-neutral-500">
                {amount}
              </span>
            </div>
          )}
        </Button>
      </TooltipTrigger>

      <TooltipContent>{`Produce ${capitalize(factoryType)}`}</TooltipContent>
    </Tooltip>
  )
}
