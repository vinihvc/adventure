import type { FactoryType } from '@/content/factories'
import { cn } from '@/lib/cn'
import { totalToEarnAfterProduce, useFactory } from '@/store'
import { amountFormatter, timeFormatter } from '@/utils/formatters'
import * as RProgress from '@radix-ui/react-progress'
import type * as React from 'react'
import { borderedText } from '../text-border'
import classes from './progress.module.css'

interface ProgressProps extends React.ComponentProps<typeof RProgress.Root> {
  /**
   * The factory type
   */
  factoryType: FactoryType
  /**
   * If `true`, add striped animation to the progress bar.
   *
   * @default false
   */
  isAutomated?: boolean
  /**
   * If `true`, the progress bar will be animated.
   *
   * @default false
   */
  isUnlocked?: boolean
}

export const Progress = (props: ProgressProps) => {
  const {
    factoryType,
    value,
    isAutomated = false,
    isUnlocked = false,
    className,
    ...rest
  } = props

  const { productionTime } = useFactory(factoryType)

  const animationDuration = `${productionTime + (isAutomated ? 0 : 1)}s`

  return (
    <RProgress.Root
      data-auto={isAutomated}
      className={cn(
        'group relative h-6 w-full overflow-hidden rounded-full border border-foreground/50 bg-background',
        className,
      )}
      {...rest}
    >
      <RProgress.Indicator
        style={{ animationDuration }}
        className={cn(
          'h-full w-0 flex-1 bg-blue-600',
          isUnlocked && classes.fill,
        )}
      />

      <div
        className={cn(
          'absolute inset-0 flex items-center justify-between px-3 font-semibold text-background text-sm tracking-wide',
          borderedText({ variant: 'blue' }),
        )}
      >
        <span className="w-40 text-xs">{timeFormatter(productionTime)}</span>
        <span>{amountFormatter(totalToEarnAfterProduce(factoryType))}</span>
      </div>

      <div
        style={{ animationDuration }}
        className={cn(
          'absolute inset-0 flex items-center justify-between px-3 font-semibold text-foreground text-sm tracking-wide',
          borderedText({ variant: 'white' }),
          isUnlocked && classes.clip,
        )}
      >
        <span className="w-40 text-xs">{timeFormatter(productionTime)}</span>
        <span>{amountFormatter(totalToEarnAfterProduce(factoryType))}</span>
      </div>
    </RProgress.Root>
  )
}

Progress.displayName = RProgress.Root.displayName
