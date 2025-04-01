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
  // const { count } = useAlliance()
  // const { money } = useWallet()

  // const _canJoinAlliance = React.useMemo(() => {
  //   return money >= 1e36
  // }, [money])

  // const _missingMoney = React.useMemo(() => {
  //   return 1e36 - money
  // }, [money])

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

        {/* <div className="flex flex-col gap-2 py-6 font-medium">
          <div className="flex items-center justify-between">
            <span className="font-semibold capitalize">Total</span>

            <AnimatedNumber value={count} />
          </div>

          <div className="flex items-center justify-between">
            <span className="font-semibold capitalize">
              {canJoinAlliance
                ? "You're able to join an alliance"
                : 'Missing to join alliance'}
            </span>

            {canJoinAlliance ? (
              <Button size="xs" onClick={joinAlliance}>
                Join Alliance
              </Button>
            ) : (
              <AnimatedNumber value={missingMoney} />
            )}
          </div>
        </div> */}

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
