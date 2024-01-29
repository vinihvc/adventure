import { useAtom } from 'jotai'
import { Button } from '../ui/button'
import { mscAtom } from '../../store/msc'
import React from 'react'
import { cn } from '../../utils/cn'

interface AmountProps extends React.HTMLAttributes<HTMLButtonElement> {}

export const AmountToBuy = (props: AmountProps) => {
  const { className, ...rest } = props

  const [amount, setAmount] = React.useState<1 | '10%' | '50%' | 'max'>(1)

  const [, setMsc] = useAtom(mscAtom)

  const handleClick = () => {
    if (amount === 1) {
      setAmount('10%')
    } else if (amount === '10%') {
      setAmount('50%')
    } else if (amount === '50%') {
      setAmount('max')
    } else if (amount === 'max') {
      setAmount(1)
    }

    setMsc((prev) => ({
      ...prev,
      amountToBuy: amount,
    }))
  }

  return (
    <Button
      className={cn('text-xs', className)}
      variant="secondary"
      size="icon"
      onClick={handleClick}
      {...rest}
    >
      {amount}
    </Button>
  )
}
