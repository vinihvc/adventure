import { cn } from '@/lib/cn'
import React from 'react'

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const AboutDialog = React.lazy(() => import('@/components/dialog/about'))

export const Footer = (props: FooterProps) => {
  const { className, ...rest } = props

  return (
    <footer
      className={cn(
        'inset-x-0 p-5 text-white max-md:hidden md:absolute md:bottom-0',
        className,
      )}
      {...rest}
    >
      <div className="flex justify-center gap-5 md:justify-end">
        <div>
          <AboutDialog />
        </div>

        <a
          href="https://vini.one"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          &copy; Vinicius Vicentini
        </a>
      </div>
    </footer>
  )
}
