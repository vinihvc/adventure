// import { useAppSound } from '@/hooks/use-sound'
import { useDisclosure } from '@/hooks/use-disclosure'

import { Button } from '@/components/button'
import { UpgradeCard } from '@/components/upgrade-card'
import { Drawer } from '@/components/drawer'

// import upgradeSfx from '@/assets/sfx/upgrade.wav'

export const SidebarUpgrades = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  // const { play } = useAppSound(upgradeSfx)

  return (
    <>
      <Button className="bg-blue-500 hover:bg-blue-600" onClick={onOpen}>
        Upgrades
      </Button>

      <Drawer title="Upgrades" isOpen={isOpen} onClose={onClose}>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-5">
          <UpgradeCard title="Potato" />

          <UpgradeCard title="Land" />

          <UpgradeCard title="Ore" />

          <UpgradeCard title="Weapon" />

          <UpgradeCard title="Medicine" />
        </div>
      </Drawer>
    </>
  )
}
