import { AnimatedNumber } from '@/components/ui/animated-number'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/cn'
import { Coin } from '@/lib/icons/coin'
import { useWallet } from '@/store/atoms/wallet'
import React from 'react'
import { Navigation } from '../navigation'
import { AmountToBuy } from './header.amount'

const SettingDialog = React.lazy(() => import('@/components/dialog/settings'))

interface HeaderProps extends React.ComponentProps<'header'> {}

export const Header = (props: HeaderProps) => {
  const { className, ...rest } = props

  const { money } = useWallet()

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-10 flex items-center justify-between bg-foreground/50 p-4 backdrop-blur-sm sm:sticky',
        className,
      )}
      {...rest}
    >
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="relative flex h-9 w-32 translate-x-2 items-center justify-end whitespace-nowrap rounded-md border border-foreground bg-background pr-2 shadow-lg">
            <Coin
              className="-left-2 -translate-y-1.5 absolute top-0 size-12 shrink-0"
              aria-hidden
            />

            <span className="font-bold text-base">
              {<AnimatedNumber value={money} />}
            </span>
          </div>
        </TooltipTrigger>

        <TooltipContent>Total Gold</TooltipContent>
      </Tooltip>

      <Navigation className="max-sm:hidden" />

      <nav className="flex gap-2">
        <AmountToBuy />

        <SettingDialog />
      </nav>
    </header>
  )
}
