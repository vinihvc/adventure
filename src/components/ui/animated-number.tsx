'use client'

import React from 'react'

interface AnimatedNumberProps extends React.HTMLAttributes<HTMLSpanElement> {
  value: number
}

export const AnimatedNumber = (props: AnimatedNumberProps) => {
  const { value, className, ...rest } = props
  const [displayValue, setDisplayValue] = React.useState(value)
  const previousValue = React.useRef(value)

  React.useEffect(() => {
    if (previousValue.current === value) return

    let startTimestamp: number | null = null
    const duration = 400 // Animation duration in milliseconds

    const startValue = previousValue.current
    const endValue = value

    const animate = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)

      const current = startValue + (endValue - startValue) * progress
      setDisplayValue(current)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
    previousValue.current = value
  }, [value])

  return (
    <span className={className} {...rest}>
      {Math.max(Math.round(displayValue), 0).toLocaleString()}
    </span>
  )
}
