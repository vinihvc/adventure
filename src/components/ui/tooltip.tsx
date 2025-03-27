import { cn } from '@/utils/cn'
import * as RTooltip from '@radix-ui/react-tooltip'
import type * as React from 'react'

export const Tooltip = (
  props: React.ComponentProps<typeof RTooltip.Provider>,
) => {
  const { delayDuration = 0, skipDelayDuration = 0, children, ...rest } = props

  return (
    <RTooltip.Provider
      delayDuration={delayDuration}
      skipDelayDuration={skipDelayDuration}
      {...rest}
    >
      <RTooltip.Root>{children}</RTooltip.Root>
    </RTooltip.Provider>
  )
}

export const TooltipTrigger = RTooltip.Trigger

export const TooltipContent = (
  props: React.ComponentProps<typeof RTooltip.Content>,
) => {
  const { className, sideOffset = 4, ...rest } = props

  return (
    <RTooltip.Portal>
      <RTooltip.Content
        sideOffset={sideOffset}
        className={cn(
          'z-50 overflow-hidden max-sm:hidden',
          'px-2 py-1',
          'border border-neutral-700 shadow-md',
          'bg-foreground text-white text-xs',
          'fade-in-0 zoom-in-95 animate-in',
          'data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:animate-out',
          'data-[side=bottom]:slide-in-from-top-2',
          'data-[side=left]:slide-in-from-right-2',
          'data-[side=right]:slide-in-from-left-2',
          'data-[side=top]:slide-in-from-bottom-2',
          className,
        )}
        {...rest}
      />
    </RTooltip.Portal>
  )
}

TooltipContent.displayName = RTooltip.Content.displayName
