import { cn } from '@/lib/cn'
import { useSettings } from '@/store'
import { Slot } from '@radix-ui/react-slot'
import type * as React from 'react'
import { type VariantProps, tv } from 'tailwind-variants'
import { type SoundsType, sound } from './sound'
import { borderedText } from './text-border'

const buttonVariants = tv({
  base: [
    'relative',
    'inline-flex items-center justify-center gap-2',
    'font-medium text-sm tracking-wide',
    'rounded-lg shadow-sm',
    'border',
    'cursor-pointer whitespace-nowrap',
    'transition-all',
    'active:scale-95',
    'outline-none focus-visible:ring-[3px]',
    'disabled:pointer-events-none aria-disabled:pointer-events-none',
    'aria-invalid:border-destructive aria-invalid:ring-destructive/20',
    "[&_svg:not([class*='size-'])]:size-5 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  ],
  variants: {
    variant: {
      black: [
        'bg-foreground',
        'text-background',
        'border-neutral-700',
        'active:bg-neutral-950',
        'hover:bg-neutral-950',
        'focus-visible:ring-foreground/50',
      ],
      white: [
        'bg-background',
        'text-foreground',
        'border-foreground',
        'active:bg-neutral-100',
        'hover:bg-neutral-100',
        'focus-visible:ring-foreground/50',
      ],
      gray: [
        'bg-neutral-600',
        'text-white',
        'active:bg-neutral-800',
        'border-foreground',
        'hover:bg-neutral-800 focus-visible:ring-neutral-800/20',
      ],
      green: [
        'bg-green-600',
        'text-white',
        'active:bg-green-700',
        'border-green-800',
        'hover:bg-green-700 focus-visible:ring-green-800/20',
        'focus-visible:ring-green-800/50',
      ],
      blue: [
        'bg-blue-600',
        'text-white',
        'active:bg-blue-700',
        'border-blue-800',
        'hover:bg-blue-700 focus-visible:ring-blue-800/20',
      ],
    },
    size: {
      xs: 'h-7 px-2',
      sm: 'h-8 gap-1.5 px-3 has-[>svg]:px-2.5',
      md: 'h-9 px-4 py-2 has-[>svg]:px-3',
      lg: 'h-10 px-6 has-[>svg]:px-4',
      xl: 'h-11 px-6 has-[>svg]:px-6',
      icon: 'size-9',
    },
  },
  defaultVariants: {
    variant: 'black',
    size: 'md',
  },
})

interface ButtonProps
  extends React.ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  /**
   * If `true`, the button will play a sound when clicked.
   *
   * @default 'click
   */
  overrideSound?: SoundsType
  /**
   * If `true`, the button will be rendered as a child slot.
   *
   * @default false
   */
  asChild?: boolean
}

export const Button = (props: ButtonProps) => {
  const {
    type = 'button',
    variant,
    size,
    overrideSound = 'click',
    className,
    asChild,
    onClick,
    ...rest
  } = props

  const Comp = asChild ? Slot : 'button'

  const settings = useSettings()

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (settings.sfx) {
      sound.play(overrideSound)
    }

    onClick?.(e)
  }

  return (
    <Comp
      data-slot="button"
      type={type}
      className={cn(
        buttonVariants({ variant, size, className }),
        borderedText({ variant, size: 'lg' }),
      )}
      {...rest}
      onClick={handleClick}
    />
  )
}
