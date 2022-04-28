import { PropsWithChildren } from 'react'

import * as ProgressPrimitive from '@radix-ui/react-progress'

type ProgressProps = {
  duration: number
  seconds: number
  isPlaying: boolean
  isAutomatic: boolean
}

export const Progress = ({
  duration,
  seconds,
  isPlaying,
  isAutomatic,
  children,
}: PropsWithChildren<ProgressProps>) => {
  const progress = 100 - (seconds / duration) * 100

  return (
    <>
      <style>
        {`@keyframes progress {
            from { width: 0% }
            to { width: 100% }
          }`}
      </style>

      <ProgressPrimitive.Root
        value={progress}
        className="relative w-full h-[20px] bg-gray-500 rounded overflow-hidden"
      >
        <div className="absolute inset-0 flex justify-center items-center text-xs font-bold">
          {children}
        </div>

        <ProgressPrimitive.Indicator
          className="w-0 h-full bg-green-600"
          style={{
            ...(isPlaying && {
              animation: `progress ${duration + 1}s ease-in ${
                isAutomatic ? ' infinite' : ''
              }`,
            }),
          }}
        />
      </ProgressPrimitive.Root>
    </>
  )
}
