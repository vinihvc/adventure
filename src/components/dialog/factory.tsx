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
import { Info } from 'lucide-react'

interface FactoryDialogProps {
  factoryType: string
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  factory: any
}

export const FactoryDialog = (props: FactoryDialogProps) => {
  const { factoryType, factory } = props

  return (
    <Dialog>
      <Tooltip>
        <TooltipTrigger asChild>
          <DialogTrigger asChild>
            <Button className="w-12 shrink-0 p-0" variant="outline">
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

        <div className="space-y-2 text-sm">
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
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button>Close Info</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
