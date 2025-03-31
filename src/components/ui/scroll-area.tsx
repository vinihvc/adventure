import * as RScrollArea from '@radix-ui/react-scroll-area'
import type React from 'react'

import { cn } from '@/lib/cn'

export const ScrollArea = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof RScrollArea.Root>) => {
  return (
    <RScrollArea.Root
      data-slot="scroll-area"
      className={cn('relative flex-1 overflow-auto', className)}
      {...props}
    >
      <RScrollArea.Viewport
        data-slot="scroll-area-viewport"
        className="size-full rounded-[inherit] outline-none transition-[color,box-shadow] focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50"
      >
        {children}
      </RScrollArea.Viewport>

      <ScrollBar />

      <RScrollArea.Corner />
    </RScrollArea.Root>
  )
}

ScrollArea.displayName = RScrollArea.Root.displayName

export const ScrollBar = ({
  className,
  orientation = 'vertical',
  ...props
}: React.ComponentProps<typeof RScrollArea.ScrollAreaScrollbar>) => {
  return (
    <RScrollArea.ScrollAreaScrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={cn(
        'mr-1 flex touch-none select-none p-px transition-colors',
        orientation === 'vertical' &&
          'h-full w-1.5 border-l border-l-transparent',
        orientation === 'horizontal' &&
          'h-1.5 flex-col border-t border-t-transparent',
        className,
      )}
      {...props}
    >
      <RScrollArea.ScrollAreaThumb
        data-slot="scroll-area-thumb"
        className="relative flex-1 rounded-full bg-foreground"
      />
    </RScrollArea.ScrollAreaScrollbar>
  )
}

ScrollBar.displayName = RScrollArea.ScrollAreaScrollbar.displayName
