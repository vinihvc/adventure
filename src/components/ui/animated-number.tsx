'use client'

import React from 'react'

import { motion, useSpring, useTransform } from 'framer-motion'

interface AnimatedNumberProps extends React.ComponentPropsWithoutRef<typeof motion.span> {
  value: number
}

export const AnimatedNumber = (props: AnimatedNumberProps) => {
  const { value, className, ...rest } = props

  const spring = useSpring(value, { mass: 0.8, stiffness: 75, damping: 15 })
  const display = useTransform(spring, (current) =>
    Math.max(Math.round(current), 0).toLocaleString(),
  )

  React.useEffect(() => {
    spring.set(value)
  }, [spring, value])

  return (
    <motion.span className={className} {...rest}>
      {display}
    </motion.span>
  )
}
