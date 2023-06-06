// import { useAppSound } from '@/hooks/use-sound'
import { useDisclosure } from '@/hooks/use-disclosure'

import { Button } from '@/components/button'
import { Drawer } from '@/components/drawer'
import { UpgradeCard } from '@/components/upgrade-card'

// import upgradeSfx from '@/assets/sfx/upgrade.wav'

export const SidebarManagers = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  // const { play } = useAppSound(upgradeSfx)

  return (
    <>
      <Button className="bg-blue-500 hover:bg-blue-600" onClick={onOpen}>
        Managers
      </Button>

      <Drawer title="Managers" isOpen={isOpen} onClose={onClose}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-5">
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
