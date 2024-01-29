import { DialogDescription } from '@radix-ui/react-dialog'
import { Button } from '../../ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../ui/dialog'

export const SidebarStats = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full" size="sm">
            Stats
          </Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Statistics</DialogTitle>
            <DialogDescription>
              Check your statistics and see how you are doing.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">Total</span>

              <span className="text-4xl font-extrabold">
                {/* $ {Intl.NumberFormat().format(balance.total)} */}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">Potatos</span>

              <span className="text-4xl font-extrabold">
                {/* $ {Intl.NumberFormat().format(balance.factories.potato)} */}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">Lands</span>

              <span className="text-4xl font-extrabold">
                {/* $ {Intl.NumberFormat().format(balance.factories.land)} */}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">Ores</span>

              <span className="text-4xl font-extrabold">
                {/* $ {Intl.NumberFormat().format(balance.factories.ore)} */}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">Weapons</span>

              <span className="text-4xl font-extrabold">
                {/* $ {Intl.NumberFormat().format(balance.factories.weapon)} */}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">Medicines</span>

              <span className="text-4xl font-extrabold">
                {/* $ {Intl.NumberFormat().format(balance.factories.medicine)} */}
              </span>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
