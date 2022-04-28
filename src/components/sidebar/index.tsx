import clsx from 'clsx'

import { Button } from '@/components/button'

import { SidebarStats } from './sidebar-stats'
import { SidebarManagers } from './sidebar.managers'
import { SidebarUpgrades } from './sidebar.upgrades'

type SidebarProps = {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  return (
    <aside
      className={clsx(
        'flex flex-col justify-center items-center w-[200px] p-5 bg-gray-600',
        className,
      )}
    >
      <div className="space-y-6">
        <SidebarStats />

        <Button className="bg-blue-500 hover:bg-blue-600" disabled>
          Unlocks
        </Button>

        <SidebarUpgrades />

        <SidebarManagers />

        <Button className="bg-blue-500 hover:bg-blue-600" disabled>
          Investors
        </Button>
      </div>
    </aside>
  )
}
