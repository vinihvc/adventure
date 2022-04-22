import { ComponentProps } from 'react'

import clsx from 'clsx'

type ButtonProps = {
  className?: string
  children: React.ReactNode
} & ComponentProps<'button'>

export const Button = ({
  type = 'button',
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button type={type} className={clsx('btn', className)} {...props}>
      {children}
    </button>
  )
}
