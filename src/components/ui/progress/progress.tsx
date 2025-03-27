'use client'

import { cn } from '@/utils/cn'
import * as RProgress from '@radix-ui/react-progress'
import type * as React from 'react'
import classes from './progress.module.css'

interface ProgressProps extends React.ComponentProps<typeof RProgress.Root> {
  /**
   * If `true`, add striped animation to the progress bar.
   *
   * @default false
   */
  isAuto?: boolean
  /**
   * The duration of the animation in seconds.
   *
   * @default 1
   */
  duration?: number
  /**
   * If `true`, the progress bar will be animated.
   *
   * @default false
   */
  isUnlocked?: boolean
}

export const Progress = (props: ProgressProps) => {
  const {
    isAuto = false,
    duration = 3,
    isUnlocked = false,
    className,
    ...rest
  } = props

  return (
    <RProgress.Root
      data-auto={isAuto}
      className={cn(
        'group relative h-6 w-full overflow-hidden border border-black bg-background',
        className,
      )}
      {...rest}
    >
      <RProgress.Indicator asChild>
        <div
          style={{ animationDuration: `${duration + (isAuto ? 0 : 1)}s` }}
          className={cn(
            'h-full w-0 flex-1 bg-[length:1.5rem] bg-green-400',
            'animate-progress-fill',
            "group-data-[auto='true']:bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)]",
            classes.stripes,
            isUnlocked && classes.fill,
          )}
        />
      </RProgress.Indicator>
    </RProgress.Root>
  )
}

Progress.displayName = RProgress.Root.displayName
