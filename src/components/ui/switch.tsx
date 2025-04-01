import { cn } from '@/lib/cn'
import * as RSwitch from '@radix-ui/react-switch'
import type React from 'react'

export const Switch = (props: React.ComponentProps<typeof RSwitch.Root>) => {
  const { className, ...rest } = props

  return (
    <RSwitch.Root
      data-slot="switch"
      className={cn(
        'peer h-[1.15rem] w-8 shrink-0',
        'inline-flex items-center',
        'rounded-full border border-transparent',
        'shadow-xs transition-all',
        'data-[state=checked]:bg-foreground data-[state=unchecked]:bg-foreground/20',
        'outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...rest}
    >
      <RSwitch.Thumb
        data-slot="switch-thumb"
        className={cn(
          'pointer-events-none block size-4 rounded-full bg-background ring-0 transition-transform',
          'data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0',
        )}
      />
    </RSwitch.Root>
  )
}
