import { Button } from '@/components/ui/button'
import type { FactoryType } from '@/data/factories'
import { useFactory } from '@/store/atoms/factories'
import { cn } from '@/utils/cn'
import { Image } from '@unpic/react'
import { Check } from 'lucide-react'
import React from 'react'

interface CardProps extends React.ComponentProps<'div'> {
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

export const Card = (props: CardProps) => {
  const { factoryType, icon, image, className, onUpgrade, ...rest } = props

  const factory = useFactory(factoryType)

  return (
    <article
      data-auto={factory.isAuto}
      className={cn('group relative block h-auto border-4 border-black p-0')}
      {...rest}
    >
      <div className="border-2 border-white">
        <Image
          src={image}
          alt={factoryType}
          width={200}
          height={200}
          className="aspect-square"
          layout="constrained"
        />
      </div>

      <div className="absolute top-1 right-1">
        <div className="flex size-7 items-center justify-center bg-foreground text-white">
          {React.createElement(icon, { className: 'size-5' })}
        </div>
      </div>

      <div className="absolute top-1 left-1">
        <div className="flex size-7 items-center justify-center bg-foreground p-0.5 text-white">
          <Image
            src={`/images/factories/${factoryType}.webp`}
            className="aspect-square size-7 object-contain"
            layout="constrained"
            width={28}
            height={28}
          />
        </div>
      </div>

      <Button
        type="button"
        size="xs"
        disabled={factory.isAuto || !factory.isUnlocked}
        className="w-full border-2 border-t-0 text-xs uppercase"
        onClick={onUpgrade}
      >
        <span className="group-data-[auto='true']:opacity-0">Research</span>

        <span className="absolute group-data-[auto='false']:hidden">
          <Check />
        </span>
      </Button>
    </article>
  )
}
