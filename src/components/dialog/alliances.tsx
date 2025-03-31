import { Button } from '@/components/ui/button'

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { CircleOff, Handshake } from 'lucide-react'
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
            <Button variant="white" size="icon">
              <span className="sr-only">Open Alliances</span>
              <Handshake />
            </Button>
          </DialogTrigger>
        </TooltipTrigger>

        <TooltipContent>Alliances</TooltipContent>
      </Tooltip>

      <DialogContent>
        <DialogImage src="/images/alliances/alliance.webp" alt="Alliances" />

        <DialogHeader>
          <DialogTitle>Alliances</DialogTitle>

          <DialogDescription>
            Create an alliance with other kingdoms to increase the trade
            partnership between you.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center justify-center gap-2 py-6 font-medium">
          <CircleOff className="size-8" />
          <p>There's no alliances available right now.</p>
        </div>

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
