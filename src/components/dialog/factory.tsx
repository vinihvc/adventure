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
import { moneyEarnedByFactory, useFactory } from '@/store'
import { Info } from 'lucide-react'
import { AnimatedNumber } from '../ui/animated-number'

interface FactoryDialogProps {
  /**
   * The factory type
   */
  factoryType: FactoryType
}

const FactoryDialog = (props: FactoryDialogProps) => {
  const { factoryType } = props

  const factory = useFactory(factoryType)

  return (
    <Dialog>
      <Tooltip>
        <TooltipTrigger asChild>
          <DialogTrigger asChild>
            <Button className="shrink-0" variant="blue" size="icon">
              <span className="sr-only">{`${factory.name}'s Info`}</span>
              <Info className="size-4" />
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

        <DialogHeader>
          <DialogTitle>{factory.name}</DialogTitle>

          <DialogDescription>{factory.description}</DialogDescription>
        </DialogHeader>

        <div className="space-y-2">
          <p className="font-semibold text-lg">Statistics</p>

          <div className="flex justify-between">
            <div>Production speed</div>

            <span>{`${factory.productionTime}s`}</span>
          </div>

          <div className="flex justify-between">
            <div>Production per click</div>
            <AnimatedNumber value={factory.productionValue} />
          </div>

          <div className="flex justify-between">
            <div>Production per hour</div>
            <AnimatedNumber value={factory.productionValue * 3600} />
          </div>

          <div className="flex justify-between">
            <div>Total produced</div>
            <AnimatedNumber value={moneyEarnedByFactory(factoryType)} />
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
