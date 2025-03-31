import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogImage,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { FACTORIES, type FactoryType } from '@/content/factories'
import {
  moneyEarnedByFactory,
  totalMoneyEarned,
} from '@/store/atoms/statistics'
import { DialogDescription } from '@radix-ui/react-dialog'
import { PieChart } from 'lucide-react'
import { AnimatedNumber } from '../ui/animated-number'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'

const StatisticsDialog = () => {
  return (
    <Dialog>
      <Tooltip>
        <TooltipTrigger asChild>
          <DialogTrigger asChild>
            <Button variant="white" size="icon">
              <span className="sr-only">Open Statistics</span>
              <PieChart className="max-sm:size-6" />
            </Button>
          </DialogTrigger>
        </TooltipTrigger>

        <TooltipContent>Statistics</TooltipContent>
      </Tooltip>

      <DialogContent>
        <DialogImage src="/images/msc/statistic.webp" alt="Statistics" />

        <DialogHeader>
          <DialogTitle>Statistics</DialogTitle>

          <DialogDescription>
            Check your statistics and see how you are doing.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <span className="font-semibold capitalize">Total</span>

            <AnimatedNumber value={totalMoneyEarned()} />
          </div>

          {Object.entries(FACTORIES).map(([key]) => (
            <div key={key} className="flex items-center justify-between">
              <span className="font-semibold capitalize">{key}</span>

              <AnimatedNumber
                value={moneyEarnedByFactory(key as FactoryType)}
              />
            </div>
          ))}
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button size="xl">Close Statistics</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default StatisticsDialog
