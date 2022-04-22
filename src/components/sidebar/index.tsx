import { Button } from '../button'

import { SidebarStats } from './sidebar-stats'
import { SidebarManagers } from './sidebar.managers'
import { SidebarUpgrades } from './sidebar.upgrades'

export const Sidebar = () => {
  return (
    <aside className="flex flex-col justify-center items-center  w-[200px] p-5">
      <div className="space-y-6">
        <SidebarStats />

        <SidebarUpgrades />

        <SidebarManagers />

        <Button className="bg-blue-500 hover:bg-blue-600" disabled>
          Investors
        </Button>
      </div>
    </aside>
  )
}
