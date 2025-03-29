import { Button } from '@/components/ui/button'

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Handshake } from 'lucide-react'
import { DialogImage } from '../ui/dialog'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'

const AllianceDialog = () => {
  return (
    <Dialog>
      <Tooltip>
        <TooltipTrigger asChild>
          <DialogTrigger asChild>
            <Button className="max-sm:w-full" variant="white" size="icon">
              <span className="sr-only">Open Alliances</span>
              <Handshake />
            </Button>
          </DialogTrigger>
        </TooltipTrigger>

        <TooltipContent>Alliances</TooltipContent>
      </Tooltip>

      <DialogContent>
        <DialogImage src="/images/alliances/alliance.webp" alt="Alliances" />

        <DialogHeader className="mt-12 sm:mt-10">
          <DialogTitle>Alliances</DialogTitle>
          <DialogDescription>
            Create an alliance with other kingdoms to increase the trade
            partnership between you.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogClose asChild>
            <Button size="xl">Close Alliances</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default AllianceDialog
