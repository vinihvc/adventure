import { cn } from '@/lib/cn'
import type React from 'react'

export interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, 'path'> {
  /**
   * The icon title
   */
  title?: string
  /**
   * The icon `svg` viewBox
   * @default "0 0 24 24"
   */
  viewBox?: string
  /**
   * If the has a single path, simply copy the path's `d` attribute
   */
  d?: string
  /**
   * The `svg` path or group element
   * @type React.ReactElement | React.ReactElement[]
   */
  path?: React.ReactElement | React.ReactElement[]
  /**
   * Default props automatically passed to the component; overwriteable
   */
  defaultProps?: React.SVGProps<SVGSVGElement>
}

export const createIcon = ({
  viewBox = '0 0 24 24',
  path,
  title,
  className: iconClassName,
  d: pathDefinition,
  defaultProps,
}: IconProps) => {
  const defaults = {
    width: '1rem',
    height: '1rem',
    ...defaultProps,
  }

  const Comp = (props: IconProps) => {
    const { path: unusedPath, className, ...rest } = props

    return (
      <svg
        className={cn('inline-flex', iconClassName, className)}
        viewBox={viewBox}
        {...defaults}
        {...rest}
      >
        <title>{title}</title>
        {path ?? <path fill="currentColor" d={pathDefinition} />}
      </svg>
    )
  }

  return Comp
}
