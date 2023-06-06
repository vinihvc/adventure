import { PropsWithChildren } from 'react'

import clsx from 'clsx'

import * as TooltipPrimitive from '@radix-ui/react-tooltip'

type TooltipProps = {
  message: string
  arrow?: boolean
}

export const Tooltip = ({
  message,
  arrow = false,
  children,
}: PropsWithChildren<TooltipProps>) => {
  return (
    <TooltipPrimitive.Provider delayDuration={200}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Content
          side="bottom"
          sideOffset={4}
          className={clsx(
            'radix-side-top:animate-slide-down-fade',
            'radix-side-right:animate-slide-left-fade',
            'radix-side-bottom:animate-slide-up-fade',
            'radix-side-left:animate-slide-right-fade',
            'inline-flex items-center rounded px-4 py-2.5',
            'bg-gray-900',
            'border border-gray-800',
          )}
        >
          {arrow && <TooltipPrimitive.Arrow className="fill-current" />}

          <div className="text-sm font-semibold">{message}</div>
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}
