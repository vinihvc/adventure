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
import { FACTORIES, type FactoryType } from '@/data/factories'
import { useStatistics } from '@/store/atoms/statistics'
import { amountFormatter } from '@/utils/formatters'
import { DialogDescription } from '@radix-ui/react-dialog'
import { PieChart } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'

export const StatisticsDialog = () => {
  const statistics = useStatistics()

  return (
    <Dialog>
      <Tooltip>
        <TooltipTrigger asChild>
          <DialogTrigger asChild>
            <Button size="icon" className="max-sm:w-full">
              <span className="sr-only">Open Statistics</span>
              <PieChart />
            </Button>
          </DialogTrigger>
        </TooltipTrigger>

        <TooltipContent>Statistics</TooltipContent>
      </Tooltip>

      <DialogContent>
        <DialogImage src="/images/msc/statistic.webp" alt="Statistics" />

        <DialogHeader className="mt-12 sm:mt-10">
          <DialogTitle>Statistics</DialogTitle>
          <DialogDescription>
            Check your statistics and see how you are doing.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <span className="font-semibold capitalize">Total</span>

            <span>{amountFormatter(statistics.moneyEarned)}</span>
          </div>

          {Object.entries(FACTORIES).map(([key]) => (
            <div key={key} className="flex items-center justify-between">
              <span className="font-semibold capitalize">{key}</span>

              <span>
                {new Intl.NumberFormat().format(
                  statistics.factories[key as FactoryType].moneyEarned,
                )}
              </span>
            </div>
          ))}
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button>Close Statistics</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
