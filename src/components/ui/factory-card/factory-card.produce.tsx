import { Button } from '@/components/ui/button'
import type { FactoryType } from '@/content/factories'
import { cn } from '@/lib/cn'
import { startProducing, useFactory } from '@/store/atoms/factories'
import { capitalize } from '@/utils/formatters'
import { Image } from '@unpic/react'
import { LockKeyhole } from 'lucide-react'
import { AnimatedNumber } from '../animated-number'
import { borderedText } from '../text-border'
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
          className={cn(
            'group relative',
            'size-22',
            'text-background',
            'border-2',
            'shrink-0',
            'rounded-full border-foreground',
            'data-[producing=true]:focus-visible:border-blue-600 data-[producing=true]:focus-visible:ring-blue-600/50',
            'data-[producing=true]:border-blue-600',
            className,
          )}
          size="icon"
          disabled={isProducing || !isUnlocked || isAutomated}
          data-auto={isAutomated}
          data-producing={isProducing}
          data-unlocked={isUnlocked}
          onClick={() => startProducing(factoryType)}
          {...rest}
        >
          <Image
            src={`/images/factories/${factoryType}.webp`}
            alt={`Produce ${factoryType}`}
            className={cn(
              'rounded-full',
              '[image-rendering:pixelated]',
              'pointer-events-none',
              'group-data-[unlocked=false]:grayscale',
            )}
            layout="constrained"
            width={80}
            height={80}
          />

          {isUpgraded && (
            <div className="-top-0.5 -right-0.5 absolute flex h-5 w-5 items-center justify-center rounded-full bg-foreground">
              <span className="font-bold text-[10px]">2x</span>
            </div>
          )}

          <span className="sr-only">{`Produce ${name}`}</span>

          {isUnlocked && (
            <div className="-bottom-2 absolute">
              <span
                className={cn(
                  'fade-in-50 slide-in-from-bottom-1 flex h-6 w-16 animate-in items-center justify-center rounded-lg border border-background/20 bg-foreground text-background text-xs',
                  'group-data-[producing=true]:border-blue-800 group-data-[producing=true]:bg-blue-600',
                  borderedText({ variant: isProducing ? 'blue' : 'black' }),
                )}
              >
                <AnimatedNumber value={amount} suffix="" />
              </span>
            </div>
          )}

          {!isUnlocked && (
            <div className="absolute inset-0 flex items-center justify-center">
              <LockKeyhole className="size-5" />
            </div>
          )}
        </Button>
      </TooltipTrigger>

      <TooltipContent>{`Produce ${capitalize(factoryType)}`}</TooltipContent>
    </Tooltip>
  )
}
