import { Button } from '@/components/ui/button'
import type { FactoryType } from '@/content/factories'
import { cn } from '@/lib/cn'
import { useFactory } from '@/store/atoms/factories'
import { Image } from '@unpic/react'
import { Check } from 'lucide-react'
import React from 'react'
import { Tooltip, TooltipContent, TooltipTrigger } from './tooltip'

interface UpgradeCardProps extends React.ComponentProps<'div'> {
  /**
   * The type of card
   */
  type: 'upgrade' | 'manager'
  /**
   * The factory type
   */
  factoryType: FactoryType
  /**
   * Icon to display on the card
   */
  icon: React.ElementType
  /**
   * Image to display on the card
   */
  image: string
  /**
   * Triggered when the card is upgraded
   */
  onUpgrade?: () => void
}

export const UpgradeCard = (props: UpgradeCardProps) => {
  const { type, factoryType, icon, image, className, onUpgrade, ...rest } =
    props

  const factory = useFactory(factoryType)

  return (
    <article
      // biome-ignore lint/a11y/noNoninteractiveTabindex: <explanation>
      tabIndex={0}
      aria-label={`Buy ${type} for ${factory.name}`}
      aria-disabled={!factory.isUnlocked || factory.isAuto}
      data-unlocked={factory.isUnlocked}
      data-auto={factory.isAuto}
      className={cn(
        'group relative',
        'border-2 border-black',
        'rounded-md',
        'data-[auto="true"]:border-green-500',
        'outline-0 focus-visible:border-black focus-visible:ring-[3px] focus-visible:ring-black/50',
        className,
      )}
      {...rest}
    >
      <div className="rounded-t-md border-inherit border-b-2">
        <Image
          src={image}
          alt={factoryType}
          width={200}
          height={200}
          className="aspect-square rounded-t-sm"
          layout="constrained"
        />
      </div>

      <Tooltip>
        <TooltipTrigger asChild>
          <div className="absolute top-1 right-1">
            <div className="flex size-7 items-center justify-center rounded-lg border-2 border-black bg-background text-foreground">
              {React.createElement(icon, { className: 'size-4' })}
            </div>
          </div>
        </TooltipTrigger>

        <TooltipContent>
          {type === 'manager' ? 'Manager' : 'Upgrade'}
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <div className="absolute top-1 left-1">
            <Image
              src={`/images/factories/${factoryType}.webp`}
              className="aspect-square size-7 rounded-lg border-2 border-black object-contain"
              layout="constrained"
              width={28}
              height={28}
            />
          </div>
        </TooltipTrigger>

        <TooltipContent>{factory.name}</TooltipContent>
      </Tooltip>

      <Button
        type="button"
        size="xs"
        variant={factory.isAuto ? 'success' : 'black'}
        aria-disabled={!factory.isUnlocked || factory.isAuto}
        disabled={!factory.isUnlocked}
        className="relative w-full rounded-t-none rounded-b-xs text-xs uppercase"
        onClick={onUpgrade}
      >
        &nbsp;{/* Show "Research" when unlocked is true but auto is false */}
        <span className="absolute group-data-[auto='true']:hidden group-data-[unlocked='false']:hidden">
          Research
        </span>
        {/* Show "Unlock first" when unlocked is false and auto is false */}
        <span className="absolute group-data-[unlocked='true']:hidden">
          Unlock first
        </span>
        {/* Show check icon when unlocked is true and auto is true */}
        <span className="absolute group-data-[auto='false']:hidden group-data-[unlocked='false']:hidden">
          <Check />
        </span>
      </Button>
    </article>
  )
}
