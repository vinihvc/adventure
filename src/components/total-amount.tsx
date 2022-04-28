import { ComponentProps, useState } from 'react'

import { Button } from './button'

type TotalAmountProps = ComponentProps<'div'>

export const TotalAmount = ({ ...props }: TotalAmountProps) => {
  const [totalText, setTotalText] = useState('1')

  const handleChangeTotal = () => {
    if (totalText === '1') {
      setTotalText('10%')
    }

    if (totalText === '10%') {
      setTotalText('50%')
    }

    if (totalText === '50%') {
      setTotalText('MAX')
    }

    if (totalText === 'MAX') {
      setTotalText('1')
    }
  }

  return (
    <div {...props}>
      <Button
        className="w-[90px] h-[30px] tracking-wider text-xs rounded bg-green-700 font-bold"
        onClick={handleChangeTotal}
      >
        {`Buy ${totalText}`}
      </Button>
    </div>
  )
}
