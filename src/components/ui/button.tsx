import { cn } from '@/lib/cn'
import { useSettings } from '@/store'
import { Slot } from '@radix-ui/react-slot'
import type * as React from 'react'
import { type VariantProps, tv } from 'tailwind-variants'
import { type SoundsType, sound } from './sound'

const buttonVariants = tv({
  base: [
    'inline-flex items-center justify-center gap-2',
    'font-medium text-sm',
    '[var(--overlay):0_5px_0]',
    'relative',
    'rounded-md',
    'outline-none',
    'whitespace-nowrap',
    'transition-all',
    'focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50',
    'disabled:pointer-events-none disabled:opacity-80',
    'aria-disabled:pointer-events-none',
    'aria-invalid:border-destructive aria-invalid:ring-destructive/20',
    "[&_svg:not([class*='size-'])]:size-5 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  ],
  variants: {
    variant: {
      black: [
        'bg-foreground',
        'text-background',
        'border border-black',
        'focus-visible:ring-foreground/50 focus-visible:border-foreground',
        'shadow-lg hover:bg-foreground/90',
      ],
      white: [
        'bg-background',
        'text-foreground',
        'border border-white',
        'shadow-lg hover:bg-background/90',
      ],
      destructive: [
        'bg-destructive',
        'text-white',
        'shadow-lg hover:bg-destructive/90 focus-visible:ring-destructive/20',
      ],
      success: [
        'bg-success',
        'text-white',
        'shadow-lg hover:bg-success/90 focus-visible:ring-success/20',
      ],
      outline: [
        'border',
        'bg-background',
        'shadow-lg',
        'hover:bg-accent',
        'hover:text-accent-foreground',
      ],
      secondary: [
        'bg-secondary',
        'text-secondary-foreground',
        'shadow-lg hover:bg-secondary/80',
      ],
      ghost: ['hover:bg-accent', 'hover:text-accent-foreground'],
      link: ['text-primary', 'underline-offset-4', 'hover:underline'],
    },
    size: {
      xs: 'h-7 px-2',
      sm: 'h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5',
      md: 'h-9 px-4 py-2 has-[>svg]:px-3',
      lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
      xl: 'h-11 rounded-md px-6 has-[>svg]:px-6',
      icon: 'size-9',
    },
    pressable: {
      true: 'shadow-[0_5px_0] active:shadow-none active:translate-y-1',
    },
  },
  defaultVariants: {
    pressable: false,
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
      className={cn(buttonVariants({ variant, size, className }))}
      {...rest}
      onClick={handleClick}
    />
  )
}
