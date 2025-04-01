import { cn } from '@/lib/cn'
import { amountFormatter } from '@/utils/formatters'

interface AnimatedNumberProps extends React.ComponentProps<'div'> {
  /**
   * The value to display
   */
  value: number
}

export const AnimatedNumber = (props: AnimatedNumberProps) => {
  const { value, className, ...rest } = props

  return (
    <div className={cn('flex items-center gap-1', className)} {...rest}>
      {`${amountFormatter(value)}`}
    </div>
  )
}
