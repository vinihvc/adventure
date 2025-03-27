import autoSfx from '@/assets/sfx/auto.wav'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogImage,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { FACTORIES, type FactoryType } from '@/data/factories'
import { useSound } from '@/hooks/use-sound'
import { isUnlocked, upgradeAuto } from '@/store/atoms/factories'
import { UserRound } from 'lucide-react'
import { Card } from '../ui/card'
import { ScrollArea } from '../ui/scroll-area'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'

export const ManagersDialog = () => {
  const { play } = useSound(autoSfx)

  const handleAutomatic = (type: FactoryType) => {
    if (!isUnlocked(type)) return

    play()

    upgradeAuto(type)
  }

  return (
    <Dialog>
      <Tooltip>
        <TooltipTrigger asChild>
          <DialogTrigger asChild>
            <Button size="icon" className="max-sm:w-full">
              <span className="sr-only">Open Managers</span>
              <UserRound />
            </Button>
          </DialogTrigger>
        </TooltipTrigger>

        <TooltipContent>Managers</TooltipContent>
      </Tooltip>

      <DialogContent>
        <DialogImage src="/images/managers/manager.webp" alt="Manager" />

        <DialogHeader className="mt-12 sm:mt-10">
          <DialogTitle>Managers</DialogTitle>
          <DialogDescription>
            Hire managers to automate your factories.
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="flex flex-col">
          <div className="flex-1 pr-3">
            <div className="grid grid-cols-3 gap-3">
              {Object.entries(FACTORIES).map(([key]) => (
                <Card
                  key={key}
                  factoryType={key as FactoryType}
                  icon={UserRound}
                  image={`/images/managers/${key}.webp`}
                  onUpgrade={() => handleAutomatic(key as FactoryType)}
                />
              ))}
            </div>
          </div>
        </ScrollArea>

        <DialogFooter>
          <DialogClose asChild>
            <Button>Close Managers</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
