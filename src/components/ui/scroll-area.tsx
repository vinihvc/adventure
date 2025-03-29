import { cn } from '@/lib/cn'
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import type * as React from 'react'
import { type VariantProps, tv } from 'tailwind-variants'

export const ScrollArea = (
  props: React.ComponentProps<typeof ScrollAreaPrimitive.Root>,
) => {
  const { className, children, ...rest } = props

  return (
    <ScrollAreaPrimitive.Root className={cn('relative', className)} {...rest}>
      <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
}

ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

const scrollbarVariants = tv({
  base: ['flex touch-none select-none transition-colors'],
  variants: {
    orientation: {
      vertical: ['h-full w-2.5 border-l border-l-transparent p-[1px]'],
      horizontal: ['h-2.5 flex-col border-t border-t-transparent p-[1px]'],
    },
  },
  defaultVariants: {
    orientation: 'vertical',
  },
})

interface ScrollBarProps
  extends React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
    VariantProps<typeof scrollbarVariants> {}

export const ScrollBar = (props: ScrollBarProps) => {
  const { className, orientation, ...rest } = props

  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      orientation={orientation}
      className={cn(scrollbarVariants({ orientation, className }))}
      {...rest}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 bg-foreground" />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  )
}

ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName
