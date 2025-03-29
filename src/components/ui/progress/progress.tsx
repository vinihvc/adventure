import { cn } from '@/lib/cn'
import { amountFormatter } from '@/utils/formatters'
import * as RProgress from '@radix-ui/react-progress'
import type * as React from 'react'
import classes from './progress.module.css'

interface ProgressProps extends React.ComponentProps<typeof RProgress.Root> {
  /**
   * The data to display in the progress bar.
   */
  data: {
    /**
     * The time to display in the progress bar.
     */
    time: number
    /**
     * The amount to display in the progress bar.
     */
    amount: number
    /**
     * The value to display in the progress bar.
     */
    value: number
  }
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
    data,
    value,
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
        'group relative h-6 w-full overflow-hidden rounded-md border border-background bg-background',
        className,
      )}
      {...rest}
    >
      <RProgress.Indicator
        style={{ animationDuration: `${duration + (isAuto ? 0 : 1)}s` }}
        className={cn(
          'h-full w-0 flex-1 bg-blue-500',
          isUnlocked && classes.fill,
        )}
      />

      <div
        className={cn(
          'absolute inset-0 flex items-center justify-between px-3 font-semibold text-sm text-white',
        )}
      >
        <span className="w-40 text-xs">
          {new Date(data.time * 1000).toISOString().substring(14, 19)}
        </span>
        <span>{amountFormatter(data.amount * data.value)}</span>
      </div>

      <div
        className={cn(
          'absolute inset-0 flex items-center justify-between px-3 font-semibold text-black text-sm',
          isUnlocked && classes.clip,
        )}
        style={{ animationDuration: `${duration + (isAuto ? 0 : 1)}s` }}
      >
        <span className="w-40 text-xs">
          {new Date(data.time * 1000).toISOString().substring(14, 19)}
        </span>
        <span>{amountFormatter(data.amount * data.value)}</span>
      </div>
    </RProgress.Root>
  )
}

Progress.displayName = RProgress.Root.displayName
