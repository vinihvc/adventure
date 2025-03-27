import { cn } from '@/utils/cn'
import * as RSwitch from '@radix-ui/react-switch'
import type * as React from 'react'

interface SwitchProps extends React.ComponentProps<typeof RSwitch.Root> {}

export const Switch = (props: SwitchProps) => {
  const { className, ...rest } = props

  return (
    <RSwitch.Root
      className={cn(
        'peer h-6 w-11',
        'inline-flex shrink-0 items-center',
        'cursor-pointer transition-colors',
        'rounded-full border-2 border-transparent',
        'focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-white',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'data-[state=checked]:bg-foreground',
        'data-[state=unchecked]:bg-neutral-300',
        className,
      )}
      {...rest}
    >
      <RSwitch.Thumb
        className={cn(
          'pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0',
        )}
      />
    </RSwitch.Root>
  )
}

Switch.displayName = RSwitch.Root.displayName
