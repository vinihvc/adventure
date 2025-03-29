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
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import type { FactoryType } from '@/content/factories'
import { useFactory, useStatistics } from '@/store'
import { Info } from 'lucide-react'
import { AnimatedNumber } from '../ui/animated-number'

interface FactoryDialogProps {
  factoryType: FactoryType
}

const FactoryDialog = (props: FactoryDialogProps) => {
  const { factoryType } = props

  const statistics = useStatistics()
  const factory = useFactory(factoryType)

  return (
    <Dialog>
      <Tooltip>
        <TooltipTrigger asChild>
          <DialogTrigger asChild>
            <Button
              className="shrink-0 border-white"
              variant="outline"
              size="icon"
            >
              <span className="sr-only">{`${factory.name}'s Info`}</span>
              <Info />
            </Button>
          </DialogTrigger>
        </TooltipTrigger>

        <TooltipContent>{`${factory.name}'s Info`}</TooltipContent>
      </Tooltip>

      <DialogContent>
        <DialogImage
          src={`/images/factories/${factoryType}.webp`}
          alt={`Factory of ${factory.name}`}
        />

        <DialogHeader className="mt-12 sm:mt-10">
          <DialogTitle className="text-xl">{factory.name}</DialogTitle>
          <DialogDescription>{factory.description}</DialogDescription>
        </DialogHeader>

        <div className="space-y-2">
          <p className="font-semibold text-lg">Statistics</p>

          <div className="flex justify-between">
            <div>Production speed</div>
            <div>{`${factory.time}x`}</div>
          </div>

          <div className="flex justify-between">
            <div>Production per click</div>
            <div>{factory.value}</div>
          </div>

          <div className="flex justify-between">
            <div>Production per hour</div>
            <div>{factory.value * 3600}</div>
          </div>

          <div className="flex justify-between">
            <div>Total produced</div>
            <AnimatedNumber
              value={statistics.factories[factoryType].moneyEarned}
            />
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button size="xl">Close Info</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default FactoryDialog
