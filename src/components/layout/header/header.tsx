import { useWallet } from '@/store/atoms/wallet'
import { amountFormatter } from '@/utils/formatters'
import { CircleDollarSign } from 'lucide-react'
import React from 'react'
import { Navigation } from '../navigation'
import { AmountToBuy } from './header.amount'
import { HeaderItem } from './header.item'

const SettingDialog = React.lazy(() => import('@/components/dialog/settings'))

export const Header = () => {
  const wallet = useWallet()

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between bg-background p-2 md:p-5">
      <div className="flex items-center gap-5">
        <div className="flex gap-5">
          <HeaderItem
            icon={CircleDollarSign}
            className="rounded-md bg-foreground text-background"
          >
            {amountFormatter(wallet.money)}
          </HeaderItem>
        </div>
      </div>

      <Navigation className="max-sm:hidden" />

      <nav className="flex gap-2">
        <AmountToBuy />

        <SettingDialog />
      </nav>
    </header>
  )
}
