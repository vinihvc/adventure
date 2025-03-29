import { tv } from 'tailwind-variants'

export const borderedText = tv({
  base: '[-webkit-text-stroke-width:1px] [paint-order:stroke_fill]',
  variants: {
    variant: {
      white: ['[-webkit-text-stroke-color:theme(colors.neutral.300)]'],
      black: ['[-webkit-text-stroke-color:theme(colors.neutral.600)]'],
      green: ['[-webkit-text-stroke-color:theme(colors.green.800)]'],
      gray: ['[-webkit-text-stroke-color:theme(colors.neutral.800)]'],
    },
  },
  defaultVariants: {
    variant: 'black',
  },
})
