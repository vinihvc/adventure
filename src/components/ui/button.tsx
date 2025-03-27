import { Slot } from '@radix-ui/react-slot'
import type * as React from 'react'
import { type VariantProps, tv } from 'tailwind-variants'

import { cn } from '@/utils/cn'

const buttonVariants = tv({
  base: [
    'inline-flex items-center justify-center gap-2',
    'font-medium text-sm',
    'rounded-md',
    'outline-none',
    'whitespace-nowrap',
    'transition-all',
    'focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50',
    'disabled:pointer-events-none disabled:opacity-50',
    'aria-invalid:border-destructive aria-invalid:ring-destructive/20',
    "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  ],
  variants: {
    variant: {
      solid: [
        'bg-primary',
        'text-primary-foreground',
        'shadow-xs hover:bg-primary/90',
      ],
      destructive: [
        'bg-destructive',
        'text-white',
        'shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20',
      ],
      outline: [
        'border',
        'bg-background',
        'shadow-xs',
        'hover:bg-accent',
        'hover:text-accent-foreground',
      ],
      secondary: [
        'bg-secondary',
        'text-secondary-foreground',
        'shadow-xs hover:bg-secondary/80',
      ],
      ghost: ['hover:bg-accent', 'hover:text-accent-foreground'],
      link: ['text-primary', 'underline-offset-4', 'hover:underline'],
    },
    size: {
      xs: 'h-7 px-2',
      sm: 'h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5',
      md: 'h-9 px-4 py-2 has-[>svg]:px-3',
      lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
      icon: 'size-9',
    },
    pressable: {
      true: 'shadow-[0_5px_0] active:shadow-none active:translate-y-1',
    },
  },
  defaultVariants: {
    pressable: false,
    variant: 'solid',
    size: 'md',
  },
})

interface ButtonProps
  extends React.ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  /**
   * If `true`, the button will be rendered as a child slot.
   *
   * @default false
   */
  asChild?: boolean
}

export const Button = (props: ButtonProps) => {
  const { type = 'button', variant, size, className, asChild, ...rest } = props

  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      type={type}
      className={cn(buttonVariants({ variant, size, className }))}
      {...rest}
    />
  )
}
