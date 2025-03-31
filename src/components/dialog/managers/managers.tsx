import { Button } from '@/components/ui/button'
import { DialogImage } from '@/components/ui/dialog'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import { FACTORIES, type FactoryType } from '@/content/factories'
import { UserSearch } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipTrigger } from '../../ui/tooltip'
import { ManagersCard } from './managers.card'

const ManagersDialog = () => {
  return (
    <Dialog>
      <Tooltip>
        <TooltipTrigger asChild>
          <DialogTrigger asChild>
            <Button className="max-sm:w-full" variant="white" size="icon">
              <span className="sr-only">Open Managers</span>
              <UserSearch />
            </Button>
          </DialogTrigger>
        </TooltipTrigger>

        <TooltipContent>Managers</TooltipContent>
      </Tooltip>

      <DialogContent>
        <DialogImage src="/images/managers/manager.webp" alt="Manager" />

        <DialogHeader>
          <DialogTitle>Managers</DialogTitle>

          <DialogDescription>
            Hire managers to automate your factories.
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="flex flex-col">
          <div className="grid grid-cols-3 gap-2">
            {Object.entries(FACTORIES).map(([key]) => (
              <ManagersCard key={key} factoryType={key as FactoryType} />
            ))}
          </div>
        </ScrollArea>

        <DialogFooter>
          <DialogClose asChild>
            <Button size="xl">Close Managers</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default ManagersDialog
