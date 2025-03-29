import { suffixAmountFormatter } from '@/utils/formatters'
import NumberFlow from '@number-flow/react'

interface AnimatedNumberProps extends React.ComponentProps<typeof NumberFlow> {
  value: number
}

export const AnimatedNumber = (props: AnimatedNumberProps) => {
  const { value, ...rest } = props

  return (
    <NumberFlow
      value={value}
      format={{ notation: 'compact' }}
      suffix={suffixAmountFormatter(value)}
      {...rest}
    />
  )
}
