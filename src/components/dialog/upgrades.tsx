import upgradeSfx from '@/assets/sfx/upgrade.wav'
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
import { ArrowBigUpDash } from 'lucide-react'
import { Card } from '../ui/card'
import { ScrollArea } from '../ui/scroll-area'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'

export const UpgradesDialog = () => {
  const { play } = useSound(upgradeSfx)

  const handleUpgrade = (type: FactoryType) => {
    play()
    console.log(type)
  }

  return (
    <Dialog>
      <Tooltip>
        <TooltipTrigger asChild>
          <DialogTrigger asChild>
            <Button size="icon" className="max-sm:w-full">
              <span className="sr-only">Open Upgrades</span>
              <ArrowBigUpDash />
            </Button>
          </DialogTrigger>
        </TooltipTrigger>

        <TooltipContent>Upgrades</TooltipContent>
      </Tooltip>

      <DialogContent>
        <DialogImage src="/images/upgrades/upgrade.webp" alt="Upgrades" />

        <DialogHeader className="mt-12 sm:mt-10">
          <DialogTitle>Upgrades</DialogTitle>
          <DialogDescription>
            Upgrade your factories to increase your income.
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="flex flex-col">
          <div className="flex-1 pr-3">
            <div className="grid grid-cols-3 gap-3">
              {Object.entries(FACTORIES).map(([key]) => (
                <Card
                  key={key}
                  factoryType={key as FactoryType}
                  icon={ArrowBigUpDash}
                  image={`/images/upgrades/${key}.webp`}
                  onUpgrade={() => handleUpgrade(key as FactoryType)}
                />
              ))}
            </div>
          </div>
        </ScrollArea>

        <DialogFooter>
          <DialogClose asChild>
            <Button>Close Upgrades</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
