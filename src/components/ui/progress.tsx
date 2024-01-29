import { PropsWithChildren } from 'react'

import * as ProgressPrimitive from '@radix-ui/react-progress'

type ProgressProps = {
  duration: number
  seconds: number
}

export const Progress = ({
  duration,
  seconds,
  children,
}: PropsWithChildren<ProgressProps>) => {
  const progress = 100 - (seconds / duration) * 100

  return (
    <ProgressPrimitive.Root
      value={progress}
      className="relative h-[20px] w-full overflow-hidden rounded bg-neutral-500"
    >
      <div className="flex justify-center items-center absolute inset-0 text-xs font-bold">
        {children}
      </div>

      <ProgressPrimitive.Indicator
        style={{ width: `${progress}%` }}
        className="h-full bg-green-600 duration-300 ease-in-out00"
      />
    </ProgressPrimitive.Root>
  )
}
