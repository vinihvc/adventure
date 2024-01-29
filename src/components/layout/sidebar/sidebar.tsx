import { useAtom } from 'jotai'
import { Button } from '../../ui/button'

import { SidebarStats } from './sidebar-stats'
import { SidebarManagers } from './sidebar.managers'
import { SidebarUpgrades } from './sidebar.upgrades'
import { walletAtom } from '../../../store/wallet'
import { SidebarInvestors } from './sidebar.investors'
import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar'

export const Sidebar = () => {
  const [wallet] = useAtom(walletAtom)

  return (
    <aside className="flex flex-col w-full max-w-48 items-center justify-center grow-0 gap-2">
      <div className="font-black text-2xl">
        {Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'EUR',
        }).format(wallet.money)}
      </div>

      <div className="rounded-full p-1">
        <Avatar className="size-32">
          <AvatarImage
            src="https://api.dicebear.com/7.x/fun-emoji/svg?seed=Pumpkin"
            alt="Vinicius"
          />
          <AvatarFallback>VV</AvatarFallback>
        </Avatar>
      </div>

      <SidebarStats />

      <SidebarUpgrades />

      <SidebarManagers />

      <SidebarInvestors />
    </aside>
  )
}
