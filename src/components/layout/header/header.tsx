import { AnimatedNumber } from '@/components/ui/animated-number'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Coin } from '@/lib/icons/coin'
import { useWallet } from '@/store/atoms/wallet'
import React from 'react'
import { Navigation } from '../navigation'
import { AmountToBuy } from './header.amount'

const SettingDialog = React.lazy(() => import('@/components/dialog/settings'))

export const Header = () => {
  const { money } = useWallet()

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between bg-gradient-to-b from-background/50 to-transparent p-2 md:p-5">
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="relative flex h-9 w-30 translate-x-2 items-center justify-end whitespace-nowrap rounded-md bg-background pr-3 shadow-lg">
            <Coin
              className="-left-2 -translate-y-1.5 absolute top-0 h-12 w-12 shrink-0"
              aria-hidden
            />

            <span className="font-bold text-lg">
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
